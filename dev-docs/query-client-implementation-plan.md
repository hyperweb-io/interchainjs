# Query Client Implementation Plan - Refined

## Overview

This document provides a comprehensive implementation plan for the query and event client architecture, building on the existing `query-client-thoughts-refined.md` with specific implementation details, type locations, and concrete examples using existing types from the codebase.

## Current Implementation Status

### ✅ Completed Components

#### 1. Common Types (`packages/types/src/`)
- **Base Interfaces**: `IQueryClient`, `IEventClient`, `IRpcClient`
- **Error Handling**: `QueryClientError`, `NetworkError`, `TimeoutError`, `ConnectionError`
- **RPC Types**: `JsonRpcRequest`, `JsonRpcResponse`

#### 2. Cosmos Implementation (`networks/cosmos/src/`)
- **Query Client**: `CosmosQueryClient` implementing `ICosmosQueryClient`
- **Event Client**: `CosmosEventClient` implementing `ICosmosEventClient`
- **RPC Clients**: `HttpRpcClient`, `WebSocketRpcClient`
- **Protocol Adapter**: `TendermintProtocolAdapter`
- **Client Factory**: `CosmosClientFactory` for easy client creation

#### 3. Type Organization
```
networks/cosmos/src/types/
├── cosmos-client-interfaces.ts  # Cosmos-specific client interfaces
├── protocol.ts                 # Protocol enums and adapter interfaces
├── responses.ts                # Response type definitions
└── index.ts                    # Type exports
```

## Type Integration with Existing Cosmos Types

### Available Types from `@interchainjs/cosmos-types`

#### From `cosmos/base/abci/v1beta1/abci.ts`:
- `TxResponse` - Transaction response with height, hash, code, logs
- `ABCIMessageLog` - Application log messages
- `StringEvent` - Event with type and attributes
- `Attribute` - Key-value attribute pairs
- `GasInfo` - Gas wanted/used information
- `Result` - Execution result with data and events
- `SimulationResponse` - Transaction simulation results
- `SearchTxsResult` - Transaction search results
- `SearchBlocksResult` - Block search results

#### From `tendermint/types/block.ts`:
- `Block` - Complete block structure with header, data, evidence, lastCommit

#### From `tendermint/abci/types.ts`:
- `Event` - ABCI event with type and attributes
- `EventAttribute` - Event attribute with key, value, index
- `ExecTxResult` - Transaction execution result
- `TxResult` - Transaction result with height and result
- `Validator` - Validator information
- `ValidatorUpdate` - Validator set updates
- `CommitInfo` - Commit information
- `ResponseQuery` - ABCI query response

## Implementation Details

### 1. Enhanced Type Definitions

#### Cosmos Client Interfaces (`networks/cosmos/src/types/cosmos-client-interfaces.ts`)
```typescript
import { IQueryClient, IEventClient } from '@interchainjs/types';
import { 
  TxResponse, 
  SearchTxsResult, 
  SearchBlocksResult 
} from '@interchainjs/cosmos-types/cosmos/base/abci/v1beta1/abci';
import { Block } from '@interchainjs/cosmos-types/tendermint/types/block';
import { Event } from '@interchainjs/cosmos-types/tendermint/abci/types';

export interface ICosmosQueryClient extends IQueryClient {
  // Basic chain information
  getStatus(): Promise<ChainStatus>;
  getAbciInfo(): Promise<AbciInfo>;
  getHealth(): Promise<HealthResult>;
  getNetInfo(): Promise<NetInfo>;

  // Block queries using cosmos-types
  getBlock(height?: number): Promise<Block>;
  getBlockByHash(hash: string): Promise<Block>;
  getBlockResults(height?: number): Promise<BlockResults>;
  searchBlocks(params: BlockSearchParams): Promise<SearchBlocksResult>;
  
  // Transaction queries using cosmos-types
  getTx(hash: string, prove?: boolean): Promise<TxResponse>;
  searchTxs(params: TxSearchParams): Promise<SearchTxsResult>;
  
  // Validator and consensus
  getValidators(height?: number, page?: number, perPage?: number): Promise<ValidatorSet>;
  getConsensusParams(height?: number): Promise<ConsensusParams>;
  
  // ABCI queries
  queryAbci(params: AbciQueryParams): Promise<AbciQueryResult>;
}

export interface ICosmosEventClient extends IEventClient {
  // Event streams using cosmos-types
  subscribeToBlocks(): AsyncIterable<Block>;
  subscribeToBlockHeaders(): AsyncIterable<BlockHeader>;
  subscribeToTxs(query?: string): AsyncIterable<TxEvent>;
  subscribeToValidatorSetUpdates(): AsyncIterable<BlockEvent>;
}
```

### 2. Protocol Adapter Implementation

#### Enhanced Protocol Types (`networks/cosmos/src/types/protocol.ts`)
```typescript
export interface IProtocolAdapter {
  readonly version: ProtocolVersion;
  encodeRequest<T>(method: RpcMethod, params?: T): RpcRequest;
  decodeResponse<T>(response: RpcResponse, expectedType: ResponseType): T;
  decodeEvent<T>(event: RpcEvent, expectedType: EventType): T;
  getSupportedMethods(): Set<RpcMethod>;
  getCapabilities(): ProtocolCapabilities;
}

export enum ProtocolVersion {
  TENDERMINT_034 = "tendermint-0.34",
  TENDERMINT_037 = "tendermint-0.37", 
  COMET_038 = "comet-0.38",
  COMET_100 = "comet-1.0"
}

export enum RpcMethod {
  // Basic info
  STATUS = "status",
  ABCI_INFO = "abci_info",
  HEALTH = "health",
  NET_INFO = "net_info",
  
  // Block queries
  BLOCK = "block",
  BLOCK_BY_HASH = "block_by_hash",
  BLOCK_RESULTS = "block_results",
  BLOCK_SEARCH = "block_search",
  BLOCKCHAIN = "blockchain",
  HEADER = "header",
  HEADER_BY_HASH = "header_by_hash",
  COMMIT = "commit",
  
  // Transaction queries
  TX = "tx",
  TX_SEARCH = "tx_search",
  CHECK_TX = "check_tx",
  UNCONFIRMED_TXS = "unconfirmed_txs",
  NUM_UNCONFIRMED_TXS = "num_unconfirmed_txs",
  
  // Chain queries
  VALIDATORS = "validators",
  CONSENSUS_PARAMS = "consensus_params",
  CONSENSUS_STATE = "consensus_state",
  DUMP_CONSENSUS_STATE = "dump_consensus_state",
  GENESIS = "genesis",
  GENESIS_CHUNKED = "genesis_chunked",
  
  // ABCI queries
  ABCI_QUERY = "abci_query",
  
  // Subscription
  SUBSCRIBE = "subscribe",
  UNSUBSCRIBE = "unsubscribe",
  UNSUBSCRIBE_ALL = "unsubscribe_all"
}

export enum EventType {
  NEW_BLOCK = "new_block",
  NEW_BLOCK_HEADER = "new_block_header", 
  TX = "tx",
  VALIDATOR_SET_UPDATES = "validator_set_updates",
  GENERIC = "generic"
}
```

### 3. Response Type Mapping

#### Custom Response Types (`networks/cosmos/src/types/responses.ts`)
```typescript
import { Event } from '@interchainjs/cosmos-types/tendermint/abci/types';
import { 
  TxResponse as CosmosTxResponse,
  SearchTxsResult as CosmosSearchTxsResult,
  SearchBlocksResult as CosmosSearchBlocksResult
} from '@interchainjs/cosmos-types/cosmos/base/abci/v1beta1/abci';
import { Block as CosmosBlock } from '@interchainjs/cosmos-types/tendermint/types/block';

// Re-export cosmos types for convenience
export { 
  CosmosTxResponse as TxResponse,
  CosmosSearchTxsResult as SearchTxsResult, 
  CosmosSearchBlocksResult as SearchBlocksResult,
  CosmosBlock as Block
};

// Custom types not available in cosmos-types
export interface ChainStatus {
  nodeInfo: NodeInfo;
  syncInfo: SyncInfo;
  validatorInfo: ValidatorInfo;
}

export interface NodeInfo {
  protocolVersion: {
    p2p: string;
    block: string;
    app: string;
  };
  id: string;
  listenAddr: string;
  network: string;
  version: string;
  channels: string;
  moniker: string;
  other: {
    txIndex: string;
    rpcAddress: string;
  };
}

export interface BlockResults {
  height: string;
  txsResults: TxResult[];
  beginBlockEvents: Event[];
  endBlockEvents: Event[];
  validatorUpdates: ValidatorUpdate[];
  consensusParamUpdates: ConsensusParams;
}

// Event wrapper types for streaming
export interface TxEvent {
  tx: TxResponse;
  result: TxResult;
}

export interface BlockEvent {
  block: Block;
  resultBeginBlock: {
    events: Event[];
  };
  resultEndBlock: {
    events: Event[];
    validatorUpdates: ValidatorUpdate[];
    consensusParamUpdates: ConsensusParams;
  };
}
```

### 4. Client Factory Implementation

#### Enhanced Factory (`networks/cosmos/src/client-factory.ts`)
```typescript
import { CosmosQueryClient } from './query/index.js';
import { CosmosEventClient } from './event/index.js';
import { createProtocolAdapter, IProtocolAdapter } from './protocol-adapter.js';
import { ICosmosQueryClient, ICosmosEventClient } from './types/cosmos-client-interfaces.js';
import { ProtocolVersion } from './types/protocol.js';

export interface ClientOptions {
  protocolVersion?: ProtocolVersion;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

export class CosmosClientFactory {
  static createQueryClient(
    endpoint: string, 
    options: ClientOptions = {}
  ): ICosmosQueryClient {
    const adapter = createProtocolAdapter(
      options.protocolVersion || ProtocolVersion.COMET_038
    );
    
    return new CosmosQueryClient(endpoint, adapter, {
      timeout: options.timeout || 30000,
      retries: options.retries || 3,
      retryDelay: options.retryDelay || 1000
    });
  }

  static createEventClient(
    endpoint: string, 
    options: ClientOptions = {}
  ): ICosmosEventClient {
    const adapter = createProtocolAdapter(
      options.protocolVersion || ProtocolVersion.COMET_038
    );
    
    return new CosmosEventClient(endpoint, adapter, {
      timeout: options.timeout || 30000,
      retries: options.retries || 3,
      retryDelay: options.retryDelay || 1000
    });
  }

  static createClients(
    httpEndpoint: string,
    wsEndpoint: string,
    options: ClientOptions = {}
  ): { queryClient: ICosmosQueryClient; eventClient: ICosmosEventClient } {
    return {
      queryClient: this.createQueryClient(httpEndpoint, options),
      eventClient: this.createEventClient(wsEndpoint, options)
    };
  }
}
```

## Testing Strategy

### Test Structure (`networks/cosmos/starship/__tests__/queryclient/`)
```
queryclient/
├── query-client.test.ts        # Query client functionality
├── event-client.test.ts        # Event subscription testing
├── rpc-clients.test.ts         # HTTP/WebSocket RPC clients
├── protocol-adapter.test.ts    # Protocol adapter testing
├── integration.test.ts         # End-to-end workflows
├── jest.config.js             # Jest configuration
├── test-setup.ts              # Test utilities
└── package.json               # Test dependencies
```

### Test Coverage Areas
1. **Connection Management**: Connect, disconnect, reconnect scenarios
2. **Query Operations**: All RPC methods with real Osmosis data
3. **Event Streaming**: Block, transaction, validator update subscriptions
4. **Error Handling**: Network errors, timeouts, invalid responses
5. **Protocol Compatibility**: Different Tendermint/CometBFT versions
6. **Performance**: Concurrent requests, large result sets
7. **Integration**: Multi-client coordination, real-world workflows

## Usage Examples

### Basic Query Client Usage
```typescript
import { CosmosClientFactory } from '@interchainjs/cosmos';

// Create query client
const queryClient = CosmosClientFactory.createQueryClient(
  'https://rpc.osmosis.zone/',
  { protocolVersion: ProtocolVersion.COMET_038 }
);

// Connect and query
await queryClient.connect();
const status = await queryClient.getStatus();
const latestBlock = await queryClient.getBlock();
const validators = await queryClient.getValidators();
```

### Event Client Usage
```typescript
import { CosmosClientFactory } from '@interchainjs/cosmos';

// Create event client
const eventClient = CosmosClientFactory.createEventClient(
  'wss://rpc.osmosis.zone/websocket',
  { protocolVersion: ProtocolVersion.COMET_038 }
);

// Subscribe to events
await eventClient.connect();

for await (const block of eventClient.subscribeToBlocks()) {
  console.log(`New block: ${block.header.height}`);
}
```

### Combined Usage
```typescript
import { CosmosClientFactory } from '@interchainjs/cosmos';

// Create both clients
const { queryClient, eventClient } = CosmosClientFactory.createClients(
  'https://rpc.osmosis.zone/',
  'wss://rpc.osmosis.zone/websocket'
);

// Use together
await Promise.all([
  queryClient.connect(),
  eventClient.connect()
]);

// Query current state
const status = await queryClient.getStatus();
console.log(`Chain: ${status.nodeInfo.network}, Height: ${status.syncInfo.latestBlockHeight}`);

// Monitor new blocks
for await (const block of eventClient.subscribeToBlocks()) {
  const blockDetails = await queryClient.getBlock(parseInt(block.header.height));
  console.log(`Block ${block.header.height} has ${blockDetails.data.txs.length} transactions`);
}
```

## Migration Path

### From Existing Implementations
1. **Update Imports**: Change from relative imports to `@interchainjs/cosmos`
2. **Use Factory**: Replace direct client instantiation with `CosmosClientFactory`
3. **Type Updates**: Leverage cosmos-types for better type safety
4. **Error Handling**: Use structured error types instead of generic errors

### Backward Compatibility
- Existing interfaces remain compatible
- Factory methods provide convenient defaults
- Protocol adapters handle version differences automatically
- Error types extend base Error for compatibility

## Future Enhancements

### Planned Features
1. **Connection Pooling**: Multiple endpoint support with load balancing
2. **Caching Layer**: Intelligent caching for frequently accessed data
3. **Metrics Collection**: Performance monitoring and health checks
4. **Plugin System**: Extensible middleware for custom functionality
5. **Advanced Filtering**: Complex event filtering and transformation
6. **Batch Operations**: Efficient bulk query processing

### Extension Points
- Custom protocol adapters for new Tendermint versions
- Additional RPC methods through adapter extensions
- Custom error handling strategies
- Pluggable serialization formats
- Custom connection management strategies

## Conclusion

This implementation provides a robust, type-safe, and extensible foundation for Cosmos blockchain interaction. The architecture separates concerns effectively, leverages existing cosmos-types for maximum compatibility, and provides comprehensive testing to ensure reliability in production environments.

The factory pattern simplifies client creation while maintaining flexibility, and the protocol adapter system ensures compatibility across different Tendermint/CometBFT versions. The comprehensive test suite validates functionality against real network endpoints, providing confidence in production deployments.