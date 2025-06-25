# Query Client Architecture Redesign

## Current Issues & Goals

### Problems with Current Design
- Mixed responsibilities in client classes (RPC + query logic + version handling)
- Tight coupling between transport layer and business logic
- Version-specific code scattered across multiple files
- No clear separation between one-shot queries and streaming operations
- Complex inheritance/composition patterns that are hard to extend

### Design Goals
- **Separation of Concerns**: Clear boundaries between transport, protocol, and application layers
- **Version Agnostic**: Business logic shouldn't care about protocol versions
- **Type Safety**: Strong typing with minimal runtime surprises
- **Extensibility**: Easy to add new RPC methods and protocol versions
- **Testability**: Easy to mock and test individual components
- **Resource Management**: Proper connection lifecycle management

## Proposed Architecture

### 1. Core Interfaces

#### Cosmos Client Interfaces (Application Layer)
```typescript
// Separate client interfaces for different operation types
interface ICosmosQueryClient {
  // Block queries
  getBlock(height?: number): Promise<Block>;
  getBlockResults(height?: number): Promise<BlockResults>;
  searchBlocks(params: BlockSearchParams): Promise<BlockSearchResult>;

  // Transaction queries
  getTx(hash: Uint8Array): Promise<Tx>;
  searchTxs(params: TxSearchParams): Promise<TxSearchResult>;

  // Chain queries
  getStatus(): Promise<ChainStatus>;
  getValidators(height?: number): Promise<ValidatorSet>;

  // ABCI queries
  queryAbci(params: AbciQueryParams): Promise<AbciQueryResult>;

  // Transaction broadcasting
  broadcastTx(tx: Uint8Array, mode: BroadcastMode): Promise<BroadcastResult>;

  // Connection management
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  getEndpoint(): string;
  getProtocolInfo(): ProtocolInfo;
}

interface ICosmosEventClient {
  // Event streams
  subscribeToBlocks(): AsyncIterable<Block>;
  subscribeToBlockHeaders(): AsyncIterable<BlockHeader>;
  subscribeToTxs(query?: string): AsyncIterable<TxEvent>;

  // Custom event streams
  subscribeToEvents(query: string): AsyncIterable<Event>;

  // Stream management
  unsubscribeFromAll(): Promise<void>;

  // Connection management
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  getEndpoint(): string;
  getProtocolInfo(): ProtocolInfo;
}
```

#### RPC Client Interface (Transport Layer)
```typescript
// Version-agnostic RPC interface
interface IRpcClient {
  // One-shot calls
  call<TRequest, TResponse>(
    method: string,
    params?: TRequest
  ): Promise<TResponse>;

  // Streaming calls
  subscribe<TEvent>(
    method: string,
    params?: unknown
  ): AsyncIterable<TEvent>;

  // Connection management
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
}

// HTTP-specific implementation
interface IHttpRpcClient extends IRpcClient {
  readonly endpoint: HttpEndpoint;
  readonly timeout: number;
}

// WebSocket-specific implementation
interface IWebSocketRpcClient extends IRpcClient {
  readonly endpoint: string;
  readonly reconnectOptions: ReconnectOptions;

  // WebSocket-specific features
  ping(): Promise<void>;
  onConnectionStateChange(handler: (state: ConnectionState) => void): void;
}
```

#### Protocol Adapter Interface (Protocol Layer)
```typescript
// Bridges between application types and wire protocol
interface IProtocolAdapter {
  readonly version: ProtocolVersion;

  // Request encoding
  encodeRequest<T>(method: RpcMethod, params?: T): RpcRequest;

  // Response decoding
  decodeResponse<T>(response: RpcResponse, expectedType: ResponseType): T;

  // Event decoding for streams
  decodeEvent<T>(event: RpcEvent, expectedType: EventType): T;

  // Protocol info
  getSupportedMethods(): Set<RpcMethod>;
  getCapabilities(): ProtocolCapabilities;
}
```

### 2. Implementation Structure

#### Client Implementations
```typescript
class CosmosQueryClient implements ICosmosQueryClient {
  private readonly rpcClient: IRpcClient;
  private readonly adapter: IProtocolAdapter;

  constructor(
    rpcClient: IRpcClient,
    adapter: IProtocolAdapter
  ) {
    this.rpcClient = rpcClient;
    this.adapter = adapter;
  }

  // Query operations
  async getBlock(height?: number): Promise<Block> {
    const request = this.adapter.encodeRequest(RpcMethod.BLOCK, { height });
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.BLOCK);
  }

  async getBlockResults(height?: number): Promise<BlockResults> {
    const request = this.adapter.encodeRequest(RpcMethod.BLOCK_RESULTS, { height });
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.BLOCK_RESULTS);
  }

  async broadcastTx(tx: Uint8Array, mode: BroadcastMode): Promise<BroadcastResult> {
    const method = this.getBroadcastMethod(mode);
    const request = this.adapter.encodeRequest(method, { tx });
    const response = await this.rpcClient.call(request.method, request.params);
    return this.adapter.decodeResponse(response, ResponseType.BROADCAST_TX);
  }

  // ... other query methods

  // Connection management
  async connect(): Promise<void> {
    await this.rpcClient.connect();
  }

  async disconnect(): Promise<void> {
    await this.rpcClient.disconnect();
  }

  isConnected(): boolean {
    return this.rpcClient.isConnected();
  }

  getEndpoint(): string {
    return this.rpcClient.endpoint;
  }

  getProtocolInfo(): ProtocolInfo {
    return {
      version: this.adapter.version,
      capabilities: this.adapter.getCapabilities(),
      supportedMethods: this.adapter.getSupportedMethods()
    };
  }
}

class CosmosEventClient implements ICosmosEventClient {
  private readonly rpcClient: IRpcClient;
  private readonly adapter: IProtocolAdapter;
  private readonly activeStreams = new Set<AsyncIterableIterator<unknown>>();

  constructor(
    rpcClient: IRpcClient,
    adapter: IProtocolAdapter
  ) {
    this.rpcClient = rpcClient;
    this.adapter = adapter;
  }

  // Streaming operations
  async* subscribeToBlocks(): AsyncIterable<Block> {
    const stream = this.rpcClient.subscribe('subscribe', {
      query: "tm.event='NewBlock'"
    });
    this.activeStreams.add(stream);

    try {
      for await (const event of stream) {
        yield this.adapter.decodeEvent(event, EventType.NEW_BLOCK);
      }
    } finally {
      this.activeStreams.delete(stream);
    }
  }

  async* subscribeToBlockHeaders(): AsyncIterable<BlockHeader> {
    const stream = this.rpcClient.subscribe('subscribe', {
      query: "tm.event='NewBlockHeader'"
    });
    this.activeStreams.add(stream);

    try {
      for await (const event of stream) {
        yield this.adapter.decodeEvent(event, EventType.NEW_BLOCK_HEADER);
      }
    } finally {
      this.activeStreams.delete(stream);
    }
  }

  async* subscribeToTxs(query?: string): AsyncIterable<TxEvent> {
    const txQuery = query || "tm.event='Tx'";
    const stream = this.rpcClient.subscribe('subscribe', { query: txQuery });
    this.activeStreams.add(stream);

    try {
      for await (const event of stream) {
        yield this.adapter.decodeEvent(event, EventType.TX);
      }
    } finally {
      this.activeStreams.delete(stream);
    }
  }

  async* subscribeToEvents(query: string): AsyncIterable<Event> {
    const stream = this.rpcClient.subscribe('subscribe', { query });
    this.activeStreams.add(stream);

    try {
      for await (const event of stream) {
        yield this.adapter.decodeEvent(event, EventType.GENERIC);
      }
    } finally {
      this.activeStreams.delete(stream);
    }
  }

  async unsubscribeFromAll(): Promise<void> {
    // Close all active streams
    for (const stream of this.activeStreams) {
      if (typeof stream.return === 'function') {
        await stream.return();
      }
    }
    this.activeStreams.clear();
  }

  // Connection management
  async connect(): Promise<void> {
    await this.rpcClient.connect();
  }

  async disconnect(): Promise<void> {
    await this.unsubscribeFromAll();
    await this.rpcClient.disconnect();
  }

  isConnected(): boolean {
    return this.rpcClient.isConnected();
  }

  getEndpoint(): string {
    return this.rpcClient.endpoint;
  }

  getProtocolInfo(): ProtocolInfo {
    return {
      version: this.adapter.version,
      capabilities: this.adapter.getCapabilities(),
      supportedMethods: this.adapter.getSupportedMethods()
    };
  }
}
```

#### RPC Client Implementations
```typescript
// HTTP implementation
class HttpRpcClient implements IHttpRpcClient {
  private client: HttpClient;

  async call<TRequest, TResponse>(
    method: string,
    params?: TRequest
  ): Promise<TResponse> {
    const request = createJsonRpcRequest(method, params);
    const response = await this.client.execute(request);
    return response.result as TResponse;
  }

  subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent> {
    throw new Error('HTTP client does not support streaming operations');
  }
}

// WebSocket implementation
class WebSocketRpcClient implements IWebSocketRpcClient {
  private socket: WebSocket;
  private subscriptions = new Map<string, AsyncIterableIterator<unknown>>();

  async call<TRequest, TResponse>(
    method: string,
    params?: TRequest
  ): Promise<TResponse> {
    return new Promise((resolve, reject) => {
      const request = createJsonRpcRequest(method, params);
      this.sendRequest(request, { resolve, reject });
    });
  }

  async* subscribe<TEvent>(
    method: string,
    params?: unknown
  ): AsyncIterable<TEvent> {
    const subscription = await this.createSubscription(method, params);
    try {
      yield* subscription;
    } finally {
      await this.cleanupSubscription(subscription.id);
    }
  }
}
```

#### Protocol Adapters
```typescript
// Base adapter with common functionality
abstract class BaseProtocolAdapter implements IProtocolAdapter {
  abstract readonly version: ProtocolVersion;

  encodeRequest<T>(method: RpcMethod, params?: T): RpcRequest {
    return createJsonRpcRequest(method.toString(), params);
  }

  abstract decodeResponse<T>(response: RpcResponse, expectedType: ResponseType): T;
  abstract decodeEvent<T>(event: RpcEvent, expectedType: EventType): T;
  abstract getSupportedMethods(): Set<RpcMethod>;
  abstract getCapabilities(): ProtocolCapabilities;
}

// Tendermint 0.34 adapter
class Tendermint34Adapter extends BaseProtocolAdapter {
  readonly version = ProtocolVersion.TENDERMINT_034;

  decodeResponse<T>(response: RpcResponse, expectedType: ResponseType): T {
    switch (expectedType) {
      case ResponseType.BLOCK_RESULTS:
        return this.decodeBlockResults(response) as T;
      case ResponseType.BLOCK:
        return this.decodeBlock(response) as T;
      // ... other response types
      default:
        throw new Error(`Unsupported response type: ${expectedType}`);
    }
  }

  private decodeBlockResults(response: RpcResponse): BlockResults {
    const data = response.result;
    return {
      height: data.height,
      results: data.results?.map(r => this.decodeTxResult(r)) || [],
      validatorUpdates: data.validator_updates?.map(v => this.decodeValidatorUpdate(v)) || [],
      beginBlockEvents: this.decodeEvents(data.begin_block_events || []),
      endBlockEvents: this.decodeEvents(data.end_block_events || []),
    };
  }
}

// CometBFT 0.38 adapter
class Comet38Adapter extends BaseProtocolAdapter {
  readonly version = ProtocolVersion.COMET_038;

  decodeResponse<T>(response: RpcResponse, expectedType: ResponseType): T {
    switch (expectedType) {
      case ResponseType.BLOCK_RESULTS:
        return this.decodeBlockResults(response) as T;
      // ... other response types
    }
  }

  private decodeBlockResults(response: RpcResponse): BlockResults {
    const data = response.result;
    return {
      height: data.height,
      results: data.results?.map(r => this.decodeTxResult(r)) || [],
      validatorUpdates: data.validator_updates?.map(v => this.decodeValidatorUpdate(v)) || [],
      finalizeBlockEvents: this.decodeEvents(data.finalize_block_events || []),
    };
  }
}
```

### 3. Factory Pattern for Client Creation

```typescript
interface ICosmosClientFactory {
  createQueryClient(endpoint: string | HttpEndpoint): Promise<ICosmosQueryClient>;
  createEventClient(endpoint: string | HttpEndpoint): Promise<ICosmosEventClient>;
  createQueryClientWithAdapter(
    endpoint: string | HttpEndpoint,
    adapter: IProtocolAdapter
  ): Promise<ICosmosQueryClient>;
  createEventClientWithAdapter(
    endpoint: string | HttpEndpoint,
    adapter: IProtocolAdapter
  ): Promise<ICosmosEventClient>;
}

class CosmosClientFactory implements ICosmosClientFactory {
  async createQueryClient(endpoint: string | HttpEndpoint): Promise<ICosmosQueryClient> {
    const adapter = await this.detectProtocolAdapter(endpoint);
    return this.createQueryClientWithAdapter(endpoint, adapter);
  }

  async createEventClient(endpoint: string | HttpEndpoint): Promise<ICosmosEventClient> {
    const adapter = await this.detectProtocolAdapter(endpoint);
    return this.createEventClientWithAdapter(endpoint, adapter);
  }

    async createQueryClientWithAdapter(
    endpoint: string | HttpEndpoint,
    adapter: IProtocolAdapter
  ): Promise<ICosmosQueryClient> {
    const rpcClient = this.createRpcClient(endpoint);
    await rpcClient.connect();

    return new CosmosQueryClient(rpcClient, adapter);
  }

  async createEventClientWithAdapter(
    endpoint: string | HttpEndpoint,
    adapter: IProtocolAdapter
  ): Promise<ICosmosEventClient> {
    const rpcClient = this.createRpcClient(endpoint);
    await rpcClient.connect();

    // Validate that RpcClient supports streaming
    if (!this.supportsStreaming(rpcClient)) {
      throw new Error(`RPC client for endpoint ${endpoint} does not support streaming operations`);
    }

    return new CosmosEventClient(rpcClient, adapter);
  }

  private async detectProtocolAdapter(
    endpoint: string | HttpEndpoint
  ): Promise<IProtocolAdapter> {
    // Use a simple client to detect version
    const tempClient = this.createRpcClient(endpoint);
    await tempClient.connect();

    try {
      const response = await tempClient.call('status');
      const version = response.node_info.version;

      if (version.startsWith('0.34.')) {
        return new Tendermint34Adapter();
      } else if (version.startsWith('0.37.')) {
        return new Tendermint37Adapter();
      } else if (version.startsWith('0.38.') || version.startsWith('1.0.')) {
        return new Comet38Adapter();
      } else {
        // Fallback to oldest supported version
        return new Tendermint34Adapter();
      }
    } finally {
      await tempClient.disconnect();
    }
  }

    private createRpcClient(endpoint: string | HttpEndpoint): IRpcClient {
    if (typeof endpoint === 'object') {
      return new HttpRpcClient(endpoint);
    }

    const useHttp = endpoint.startsWith('http://') || endpoint.startsWith('https://');
    return useHttp
      ? new HttpRpcClient(endpoint)
      : new WebSocketRpcClient(endpoint);
  }

  private supportsStreaming(rpcClient: IRpcClient): boolean {
    // HTTP clients don't support streaming
    return !(rpcClient instanceof HttpRpcClient);
  }
}
```

### 4. Enhanced Error Handling

```typescript
// Error hierarchy
abstract class QueryClientError extends Error {
  abstract readonly code: ErrorCode;
  abstract readonly category: ErrorCategory;
}

class NetworkError extends QueryClientError {
  readonly code = ErrorCode.NETWORK_ERROR;
  readonly category = ErrorCategory.TRANSPORT;
}

class ProtocolError extends QueryClientError {
  readonly code = ErrorCode.PROTOCOL_ERROR;
  readonly category = ErrorCategory.PROTOCOL;

  constructor(
    message: string,
    readonly protocolVersion: ProtocolVersion,
    readonly originalError?: Error
  ) {
    super(message);
  }
}

class ValidationError extends QueryClientError {
  readonly code = ErrorCode.VALIDATION_ERROR;
  readonly category = ErrorCategory.CLIENT;
}

// Error retry and recovery
interface IRetryPolicy {
  shouldRetry(error: QueryClientError, attemptCount: number): boolean;
  getRetryDelay(attemptCount: number): number;
}

class ExponentialBackoffRetryPolicy implements IRetryPolicy {
  constructor(
    private readonly maxAttempts: number = 3,
    private readonly baseDelay: number = 1000,
    private readonly maxDelay: number = 10000
  ) {}

  shouldRetry(error: QueryClientError, attemptCount: number): boolean {
    return attemptCount < this.maxAttempts &&
           error.category === ErrorCategory.TRANSPORT;
  }

  getRetryDelay(attemptCount: number): number {
    return Math.min(this.baseDelay * Math.pow(2, attemptCount), this.maxDelay);
  }
}
```

### 5. Configuration and Options

```typescript
interface ICosmosClientOptions {
  // Connection options
  readonly connectionTimeout: number;
  readonly requestTimeout: number;
  readonly reconnectOptions?: IReconnectOptions;

  // Retry options
  readonly retryPolicy?: IRetryPolicy;

  // Streaming options
  readonly maxConcurrentStreams?: number;
  readonly streamBufferSize?: number;

  // Protocol options
  readonly protocolAdapter?: IProtocolAdapter;
  readonly fallbackProtocol?: ProtocolVersion;
}

interface IReconnectOptions {
  readonly enabled: boolean;
  readonly maxAttempts: number;
  readonly initialDelay: number;
  readonly maxDelay: number;
  readonly backoffFactor: number;
}
```

### 6. Usage Examples

```typescript
// Basic usage - Query client
const factory = new CosmosClientFactory();
const queryClient = await factory.createQueryClient('http://localhost:26657');

// Get a block
const block = await queryClient.getBlock(100);

// Search for transactions
const txs = await queryClient.searchTxs({
  query: "tx.height=100",
  page: 1,
  perPage: 10
});

// Broadcast a transaction
const result = await queryClient.broadcastTx(txBytes, BroadcastMode.SYNC);

// Clean shutdown
await queryClient.disconnect();
```

```typescript
// Basic usage - Event client (requires WebSocket endpoint)
const eventClient = await factory.createEventClient('ws://localhost:26657');

// Subscribe to new blocks
for await (const block of eventClient.subscribeToBlocks()) {
  console.log(`New block: ${block.header.height}`);

  // Break after 10 blocks
  if (block.header.height > 110) break;
}

// Subscribe to transactions
for await (const tx of eventClient.subscribeToTxs()) {
  console.log(`New transaction: ${toHex(tx.hash)}`);
}

// Clean shutdown (automatically unsubscribes from all streams)
await eventClient.disconnect();
```

```typescript
// Advanced usage with custom configuration
const factory = new CosmosClientFactory();

// Create query client with custom options
const queryClient = await factory.createQueryClient('http://localhost:26657', {
  connectionTimeout: 5000,
  requestTimeout: 10000,
  retryPolicy: new ExponentialBackoffRetryPolicy(5, 500, 30000)
});

// Create event client with reconnection options
const eventClient = await factory.createEventClient('ws://localhost:26657', {
  reconnectOptions: {
    enabled: true,
    maxAttempts: 10,
    initialDelay: 1000,
    maxDelay: 60000,
    backoffFactor: 2
  },
  maxConcurrentStreams: 5,
  streamBufferSize: 100
});
```

```typescript
// Using both clients together
const factory = new CosmosClientFactory();

const [queryClient, eventClient] = await Promise.all([
  factory.createQueryClient('http://localhost:26657'),
  factory.createEventClient('ws://localhost:26657')
]);

// Use query client for one-shot operations
const status = await queryClient.getStatus();
console.log(`Chain: ${status.nodeInfo.network}, Height: ${status.syncInfo.latestBlockHeight}`);

// Use event client for real-time updates
const blockStream = eventClient.subscribeToBlocks();
for await (const block of blockStream) {
  console.log(`New block ${block.header.height} with ${block.txs.length} transactions`);

  // Process each transaction in the block
  for (const tx of block.txs) {
    const txDetails = await queryClient.getTx(tx);
    console.log(`  TX: ${toHex(txDetails.hash)} - Result: ${txDetails.result.code}`);
  }
}

// Cleanup
await Promise.all([
  queryClient.disconnect(),
  eventClient.disconnect()
]);
```

## Benefits of This Design

1. **Clear Separation**: Transport, protocol, and application concerns are separated
2. **Version Agnostic**: Business logic doesn't need to know about protocol versions
3. **Extensible**: Easy to add new protocols, transports, or query methods
4. **Type Safe**: Strong typing throughout the stack
5. **Testable**: Each layer can be tested independently
6. **Resource Efficient**: Proper connection and stream management
7. **Error Resilient**: Comprehensive error handling and retry mechanisms

## Migration Strategy

1. **Phase 1**: Implement new interfaces alongside existing code
2. **Phase 2**: Create adapters that wrap existing client implementations
3. **Phase 3**: Gradually migrate consumers to new interfaces
4. **Phase 4**: Replace internal implementations with new architecture
5. **Phase 5**: Remove legacy code and finalize API

This design provides a solid foundation for supporting current and future protocol versions while maintaining clean, maintainable code.