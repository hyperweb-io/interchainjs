# Solana Network Implementation Refactoring Plan

## Executive Summary

This document outlines a comprehensive refactoring plan to align the Solana network implementation with the architectural patterns and design principles defined in the [Network Implementation Guide](../../advanced/network-implementation-guide.md). The refactoring aims to:

- **Standardize Architecture**: Implement consistent patterns across all InterchainJS network implementations
- **Improve Maintainability**: Establish clear separation of concerns and modular design
- **Enhance Extensibility**: Enable easy addition of new features and protocol versions
- **Ensure Type Safety**: Strengthen TypeScript interfaces and error handling
- **Optimize Testing**: Implement comprehensive testing strategies at all architectural layers

### Key Benefits

- **Consistency**: Unified patterns across Cosmos, Ethereum, Injective, and Solana networks
- **Developer Experience**: Predictable APIs and clear architectural boundaries
- **Future-Proofing**: Support for protocol upgrades and new Solana features
- **Quality Assurance**: Robust testing and error handling throughout the stack

## Current State Analysis

### Existing Structure

```text
networks/solana/src/
├── connection.ts              # HTTP RPC client (monolithic)
├── websocket-connection.ts    # WebSocket client (standalone)
├── signing-client.ts          # High-level signing facade
├── signer.ts                  # DirectSigner, OfflineSigner
├── phantom-signer.ts          # Browser wallet integration
├── phantom-client.ts          # Phantom-specific client
├── transaction.ts             # Transaction building and serialization
├── system-program.ts          # System program instructions
├── token-*.ts                 # SPL Token program support
├── types.ts                   # Mixed protocol and client types
├── utils.ts                   # Utilities and constants
└── index.ts                   # Flat exports
```

### Identified Gaps

1. **No Protocol Adapter Layer**: Direct RPC calls without abstraction
2. **Monolithic Communication**: No IRpcClient interface or error standardization
3. **Coupled Signing Logic**: No workflow-based transaction building
4. **Mixed Concerns**: Types, protocol logic, and client code intermingled
5. **Browser Dependencies**: Phantom code mixed with core implementation
6. **Limited Error Handling**: No structured error hierarchy
7. **Inconsistent Testing**: No standardized testing patterns

## Target Architecture

### Architectural Layers

```text
networks/solana/src/
├── adapters/                  # Protocol abstraction layer
│   ├── base.ts               # ISolanaProtocolAdapter interface
│   ├── v1.ts                 # Current Solana RPC implementation
│   └── factory.ts            # Adapter creation and detection
├── communication/             # Network communication layer
│   ├── rpc/                  # Low-level RPC clients
│   │   ├── http.ts           # HTTP RPC client
│   │   ├── websocket.ts      # WebSocket RPC client
│   │   └── index.ts          # RPC client exports
│   ├── query/                # Read operations
│   │   ├── client.ts         # SolanaQueryClient facade
│   │   └── index.ts          # Query client exports
│   └── event/                # Real-time subscriptions
│       ├── client.ts         # SolanaEventClient
│       └── index.ts          # Event client exports
├── signing/                   # Transaction signing layer
│   ├── signers/              # Signer implementations
│   │   ├── direct.ts         # DirectSigner
│   │   ├── offline.ts        # OfflineSigner
│   │   ├── phantom.ts        # PhantomSigner (browser-only)
│   │   └── index.ts          # Signer exports
│   ├── workflows/            # Transaction building workflows
│   │   ├── plugins/          # Workflow plugins
│   │   ├── builder.ts        # SolanaWorkflowBuilder
│   │   └── index.ts          # Workflow exports
│   └── types.ts              # Signing interfaces
├── wallets/                   # Key management layer
│   ├── implementations/       # Wallet implementations
│   │   ├── keypair.ts        # Keypair-based wallet
│   │   ├── phantom.ts        # Phantom wallet adapter
│   │   └── index.ts          # Wallet implementations
│   ├── types.ts              # Wallet interfaces
│   └── factory.ts            # Wallet creation
├── auth/                      # Cryptographic strategies
│   ├── config.ts             # Solana-specific configurations
│   ├── strategy.ts           # Address/signature strategies
│   └── index.ts              # Auth exports
├── types/                     # Type definitions
│   ├── protocol.ts           # Solana protocol types
│   ├── client.ts             # Client interfaces
│   └── common.ts             # Shared types
├── config/                    # Configuration management
│   ├── network.ts            # Network configurations
│   ├── environment.ts        # Environment handling
│   └── validation.ts         # Config validation
├── errors.ts                  # Error hierarchy
├── client-factory.ts          # Client creation factory
└── index.ts                   # Organized public API
```

### Core Interfaces

#### Protocol Adapter
```typescript
interface ISolanaProtocolAdapter extends IProtocolAdapter<SolanaVersion, SolanaMethod, SolanaCapabilities> {
  encodeTransaction(tx: SolanaTransaction): EncodedTransaction;
  decodeBlock(block: unknown): SolanaBlock;
  encodeInstruction(instruction: TransactionInstruction): unknown;
  decodeAccountInfo(data: unknown): SolanaAccountInfo;
}
```

#### RPC Client
```typescript
interface ISolanaRpcClient extends IRpcClient {
  call<TRequest, TResponse>(method: SolanaMethod, params?: TRequest): Promise<TResponse>;
  subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent>;
  // Standard connection management methods
}
```

#### Universal Signer
```typescript
interface ISolanaSigner extends IUniSigner<SolanaAccount, SolanaSignArgs, SolanaBroadcastOpts, SolanaBroadcastResponse> {
  // Solana-specific extensions if needed
}
```

## Detailed Refactoring Plan

### Phase 1: Foundation (Weeks 1-2)

#### 1.1 Directory Structure Setup
- [ ] Create new directory structure following the guide
- [ ] Add barrel index files for each layer
- [ ] Set up TypeScript path mappings

#### 1.2 Error Handling Implementation
- [ ] Create `errors.ts` with structured error hierarchy
- [ ] Implement error classes: `SolanaNetworkError`, `SolanaTimeoutError`, etc.
- [ ] Add error mapping utilities

#### 1.3 Type System Refactoring
- [ ] Split `types.ts` into protocol, client, and common types
- [ ] Define core interfaces for adapters and clients
- [ ] Establish type safety for RPC methods and responses

### Phase 2: Communication Layer (Weeks 3-4)

#### 2.1 Protocol Adapter Implementation
- [ ] Implement `ISolanaProtocolAdapter` interface
- [ ] Create `SolanaV1Adapter` with method mapping
- [ ] Add request/response encoding/decoding
- [ ] Implement capability detection

#### 2.2 RPC Client Refactoring
- [ ] Refactor `connection.ts` to `communication/rpc/http.ts`
- [ ] Implement `ISolanaRpcClient` interface
- [ ] Add retry logic, timeout handling, and error mapping
- [ ] Refactor `websocket-connection.ts` to `communication/rpc/websocket.ts`

#### 2.3 Query Client Implementation
- [ ] Create `SolanaQueryClient` facade
- [ ] Implement standard query methods (getBalance, getAccount, etc.)
- [ ] Add Solana-specific query methods
- [ ] Integrate with protocol adapter

### Phase 3: Signing Layer (Weeks 5-6)

#### 3.1 Workflow System Implementation
- [ ] Create workflow builder and plugin system
- [ ] Implement core plugins: InputValidation, MessageEncoding, Signature
- [ ] Add Solana-specific plugins: ComputeBudget, VersionedTransaction
- [ ] Create workflow orchestration logic

#### 3.2 Signer Refactoring
- [ ] Refactor existing signers to implement `ISolanaSigner`
- [ ] Integrate signers with workflow system
- [ ] Separate Phantom signer from core implementation
- [ ] Add browser/Node.js compatibility handling

### Phase 4: Integration and Testing (Weeks 7-8)

#### 4.1 Client Factory Implementation
- [ ] Create `SolanaClientFactory`
- [ ] Implement client creation methods
- [ ] Add capability detection and auto-configuration
- [ ] Integrate with configuration management

#### 4.2 Wallet and Auth Layer
- [ ] Implement wallet interfaces and factory
- [ ] Create auth strategy for Solana address handling
- [ ] Add configuration management
- [ ] Integrate with signing layer

#### 4.3 Testing Implementation
- [ ] Set up unit test structure
- [ ] Implement adapter and RPC client tests
- [ ] Add workflow and signer tests
- [ ] Create integration test suite

### Phase 5: Migration and Documentation (Week 9)

#### 5.1 Backward Compatibility
- [ ] Create compatibility wrappers for existing APIs
- [ ] Add deprecation warnings
- [ ] Update public exports in `index.ts`
- [ ] Ensure smooth migration path

#### 5.2 Documentation and Examples
- [ ] Update API documentation
- [ ] Create migration guide
- [ ] Add usage examples
- [ ] Update integration tests

## Breaking Changes and Compatibility

### API Changes
- **Import Paths**: Types and utilities move to organized modules
- **Client Instantiation**: Use `SolanaClientFactory` instead of direct constructors
- **Error Types**: Structured error classes replace generic Error instances
- **Phantom Integration**: Browser-specific code isolated from core implementation

### Migration Strategy
1. **Deprecation Period**: Maintain old APIs with warnings for 2 minor versions
2. **Wrapper Implementation**: Provide compatibility wrappers that delegate to new implementation
3. **Documentation**: Clear migration guide with before/after examples
4. **Tooling**: Consider providing codemod scripts for common migration patterns

## Testing Requirements

### Unit Tests
- **Adapters**: Request/response encoding, capability detection
- **RPC Clients**: HTTP/WebSocket communication, error handling, retries
- **Workflows**: Plugin execution, dependency resolution, transaction building
- **Signers**: Signature generation, transaction signing, compatibility

### Integration Tests
- **End-to-End Flows**: Complete transaction workflows from signing to confirmation
- **Network Communication**: Real RPC endpoint testing with devnet
- **Cross-Browser**: Phantom integration testing in different browsers

### Performance Tests
- **Transaction Throughput**: Measure signing and broadcasting performance
- **Memory Usage**: Monitor memory consumption in long-running applications
- **WebSocket Stability**: Test subscription handling under various network conditions

## Dependencies and Affected Components

### Internal Dependencies
- **@interchainjs/types**: Core interfaces and types
- **@interchainjs/utils**: Shared utilities and RPC clients
- **@interchainjs/auth**: Wallet and authentication patterns

### External Dependencies
- **Solana Web3.js**: Consider compatibility and potential replacement
- **WebSocket Libraries**: Ensure Node.js and browser compatibility
- **Cryptographic Libraries**: Ed25519 signing and verification

### Affected Packages
- **Documentation**: Update network guides and examples
- **Examples**: Refactor example applications
- **Tests**: Update integration and e2e test suites

## Implementation Guidelines

### Code Quality Standards
- **TypeScript**: Strict mode with comprehensive type coverage
- **ESLint**: Consistent code style and best practices
- **Testing**: Minimum 90% code coverage for new implementations
- **Documentation**: JSDoc comments for all public APIs

### Performance Considerations
- **Bundle Size**: Tree-shakeable exports and lazy loading for browser code
- **Memory Management**: Proper cleanup of WebSocket connections and subscriptions
- **Caching**: Intelligent caching of network requests and parsed data

### Security Guidelines
- **Input Validation**: Comprehensive validation of all external inputs
- **Error Handling**: No sensitive information in error messages
- **Browser Security**: Proper handling of wallet provider interactions

## Success Metrics

### Technical Metrics
- [ ] 100% TypeScript coverage with strict mode
- [ ] 90%+ unit test coverage
- [ ] Zero breaking changes in public API during migration
- [ ] Performance parity or improvement over current implementation

### Developer Experience Metrics
- [ ] Consistent API patterns across all network implementations
- [ ] Clear separation of concerns and modular architecture
- [ ] Comprehensive documentation and examples
- [ ] Smooth migration path with minimal code changes required

## Timeline and Milestones

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| Phase 1 | Weeks 1-2 | Foundation, errors, types |
| Phase 2 | Weeks 3-4 | Communication layer |
| Phase 3 | Weeks 5-6 | Signing layer |
| Phase 4 | Weeks 7-8 | Integration, testing |
| Phase 5 | Week 9 | Migration, documentation |

**Total Estimated Duration**: 9 weeks

## Detailed Implementation Guidelines

### Protocol Adapter Implementation

#### Base Adapter Interface
```typescript
// adapters/base.ts
export interface ISolanaProtocolAdapter extends IProtocolAdapter<SolanaVersion, SolanaMethod, SolanaCapabilities> {
  // Core protocol methods
  getVersion(): SolanaVersion;
  getSupportedMethods(): Set<SolanaMethod>;
  getCapabilities(): SolanaCapabilities;

  // Request/response transformation
  encodeRequest<TParams>(method: SolanaMethod, params: TParams): unknown;
  decodeResponse<TResponse>(method: SolanaMethod, response: unknown): TResponse;

  // Solana-specific encoding
  encodeTransaction(tx: SolanaTransaction): EncodedTransaction;
  decodeBlock(block: unknown): SolanaBlock;
  encodeInstruction(instruction: TransactionInstruction): unknown;
  decodeAccountInfo(data: unknown): SolanaAccountInfo;
}

export enum SolanaVersion {
  V1 = "1.0",
  V2 = "2.0" // Future versions
}

export enum SolanaMethod {
  GET_BALANCE = "getBalance",
  GET_ACCOUNT_INFO = "getAccountInfo",
  GET_LATEST_BLOCKHASH = "getLatestBlockhash",
  SEND_TRANSACTION = "sendTransaction",
  CONFIRM_TRANSACTION = "confirmTransaction",
  // Add more methods as needed
}

export interface SolanaCapabilities {
  supportsVersionedTransactions: boolean;
  supportsComputeBudget: boolean;
  supportsTokenExtensions: boolean;
  maxTransactionSize: number;
}
```

#### Concrete Adapter Implementation
```typescript
// adapters/v1.ts
export class SolanaV1Adapter implements ISolanaProtocolAdapter {
  getVersion(): SolanaVersion {
    return SolanaVersion.V1;
  }

  getSupportedMethods(): Set<SolanaMethod> {
    return new Set([
      SolanaMethod.GET_BALANCE,
      SolanaMethod.GET_ACCOUNT_INFO,
      SolanaMethod.GET_LATEST_BLOCKHASH,
      SolanaMethod.SEND_TRANSACTION,
      SolanaMethod.CONFIRM_TRANSACTION,
    ]);
  }

  getCapabilities(): SolanaCapabilities {
    return {
      supportsVersionedTransactions: true,
      supportsComputeBudget: true,
      supportsTokenExtensions: false,
      maxTransactionSize: 1232, // Current Solana limit
    };
  }

  encodeRequest<TParams>(method: SolanaMethod, params: TParams): unknown {
    switch (method) {
      case SolanaMethod.GET_BALANCE:
        return this.encodeGetBalanceRequest(params as GetBalanceParams);
      case SolanaMethod.SEND_TRANSACTION:
        return this.encodeSendTransactionRequest(params as SendTransactionParams);
      default:
        return params;
    }
  }

  decodeResponse<TResponse>(method: SolanaMethod, response: unknown): TResponse {
    switch (method) {
      case SolanaMethod.GET_BALANCE:
        return this.decodeGetBalanceResponse(response) as TResponse;
      case SolanaMethod.GET_ACCOUNT_INFO:
        return this.decodeAccountInfoResponse(response) as TResponse;
      default:
        return response as TResponse;
    }
  }

  private encodeGetBalanceRequest(params: GetBalanceParams): unknown[] {
    return [
      params.publicKey,
      {
        commitment: params.commitment || 'finalized',
        encoding: 'base64'
      }
    ];
  }

  private decodeGetBalanceResponse(response: unknown): number {
    const rpcResponse = response as RpcResponse<number>;
    return rpcResponse.value;
  }
}
```

### RPC Client Implementation

#### HTTP RPC Client
```typescript
// communication/rpc/http.ts
export class SolanaHttpRpcClient implements ISolanaRpcClient {
  private endpoint: string;
  private timeout: number;
  private retries: number;

  constructor(config: SolanaRpcConfig) {
    this.endpoint = config.endpoint;
    this.timeout = config.timeout || 30000;
    this.retries = config.retries || 3;
  }

  async call<TRequest, TResponse>(
    method: string,
    params?: TRequest
  ): Promise<TResponse> {
    let lastError: Error;

    for (let attempt = 0; attempt <= this.retries; attempt++) {
      try {
        const response = await this.makeRequest(method, params);
        return this.handleResponse<TResponse>(response);
      } catch (error) {
        lastError = error as Error;

        if (attempt < this.retries && this.isRetryableError(error)) {
          await this.delay(Math.pow(2, attempt) * 1000); // Exponential backoff
          continue;
        }

        throw this.mapError(error);
      }
    }

    throw this.mapError(lastError!);
  }

  private async makeRequest(method: string, params?: unknown): Promise<Response> {
    const body = JSON.stringify({
      jsonrpc: '2.0',
      id: this.generateId(),
      method,
      params: params || []
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  private mapError(error: unknown): SolanaError {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return new SolanaTimeoutError('Request timeout', error);
      }
      if (error.message.includes('fetch')) {
        return new SolanaNetworkError('Network request failed', error);
      }
    }
    return new SolanaError('Unknown error', error as Error);
  }
}
```

### Workflow System Implementation

#### Workflow Builder
```typescript
// signing/workflows/builder.ts
export class SolanaWorkflowBuilder implements IWorkflowBuilder<ISolanaSigner, SolanaTransaction, SolanaWorkflowContext> {
  private plugins: IWorkflowPlugin<SolanaWorkflowContext>[] = [];
  private context: SolanaWorkflowContext;

  constructor(
    private signer: ISolanaSigner,
    private signArgs: SolanaSignArgs,
    private options: SolanaWorkflowOptions = {}
  ) {
    this.context = new SolanaWorkflowContext(signer, signArgs);
    this.setupDefaultPlugins();
  }

  static create(
    signer: ISolanaSigner,
    signArgs: SolanaSignArgs,
    options: SolanaWorkflowOptions = {}
  ): SolanaWorkflowBuilder {
    return new SolanaWorkflowBuilder(signer, signArgs, options);
  }

  async build(): Promise<SolanaTransaction> {
    // Sort plugins by dependencies
    const sortedPlugins = this.sortPluginsByDependencies();

    // Execute plugins in order
    for (const plugin of sortedPlugins) {
      await plugin.execute(this.context);
    }

    return this.context.getTransaction();
  }

  private setupDefaultPlugins(): void {
    this.addPlugin(new InputValidationPlugin());
    this.addPlugin(new MessageEncodingPlugin());
    this.addPlugin(new FeeCalculationPlugin());
    this.addPlugin(new SignaturePlugin());
    this.addPlugin(new TransactionAssemblyPlugin());
  }

  addPlugin(plugin: IWorkflowPlugin<SolanaWorkflowContext>): this {
    this.plugins.push(plugin);
    plugin.setContext(this.context);
    return this;
  }
}
```

#### Example Workflow Plugin
```typescript
// signing/workflows/plugins/message-encoding.ts
export class MessageEncodingPlugin extends BaseWorkflowPlugin<SolanaWorkflowContext> {
  constructor() {
    super(['input-validation'], 'message-encoding');
  }

  async execute(context: SolanaWorkflowContext): Promise<void> {
    const { instructions, feePayer, recentBlockhash } = context.getValidatedInputs();

    // Create transaction message
    const transaction = new Transaction({
      feePayer,
      recentBlockhash
    });

    // Add all instructions
    for (const instruction of instructions) {
      transaction.add(instruction);
    }

    // Serialize message for signing
    const messageBytes = transaction.serializeMessage();

    context.setEncodedMessage(messageBytes);
    context.setTransaction(transaction);
  }
}
```

### Query Client Implementation

#### Facade Pattern Implementation
```typescript
// communication/query/client.ts
export class SolanaQueryClient implements IQueryClient<SolanaBlock, SolanaTransaction, SolanaAccount> {
  constructor(
    private rpcClient: ISolanaRpcClient,
    private adapter: ISolanaProtocolAdapter
  ) {}

  async connect(): Promise<void> {
    await this.rpcClient.connect();
  }

  async disconnect(): Promise<void> {
    await this.rpcClient.disconnect();
  }

  isConnected(): boolean {
    return this.rpcClient.isConnected();
  }

  async getLatestBlock(): Promise<SolanaBlock> {
    const response = await this.rpcClient.call('getLatestBlockhash');
    return this.adapter.decodeResponse('getLatestBlockhash', response);
  }

  async getBalance(address: string, commitment?: Commitment): Promise<number> {
    const params = this.adapter.encodeRequest('getBalance', {
      publicKey: address,
      commitment
    });

    const response = await this.rpcClient.call('getBalance', params);
    return this.adapter.decodeResponse('getBalance', response);
  }

  async getAccount(address: string): Promise<SolanaAccount> {
    const params = this.adapter.encodeRequest('getAccountInfo', {
      publicKey: address,
      encoding: 'base64'
    });

    const response = await this.rpcClient.call('getAccountInfo', params);
    return this.adapter.decodeResponse('getAccountInfo', response);
  }

  // Solana-specific methods
  async getTokenAccountsByOwner(
    owner: string,
    filter: TokenAccountFilter
  ): Promise<SolanaTokenAccount[]> {
    const response = await this.rpcClient.call('getTokenAccountsByOwner', [
      owner,
      filter,
      { encoding: 'jsonParsed' }
    ]);

    return this.adapter.decodeResponse('getTokenAccountsByOwner', response);
  }
}
```

### Client Factory Implementation

```typescript
// client-factory.ts
export class SolanaClientFactory implements IClientFactory<SolanaQueryClient, SolanaEventClient, SolanaFullClient> {
  async createQueryClient(config: ISolanaClientConfig): Promise<SolanaQueryClient> {
    const adapter = await this.createAdapter(config);
    const rpcClient = this.createRpcClient(config);

    return new SolanaQueryClient(rpcClient, adapter);
  }

  async createEventClient(config: ISolanaClientConfig): Promise<SolanaEventClient> {
    const wsClient = this.createWebSocketClient(config);
    const adapter = await this.createAdapter(config);

    return new SolanaEventClient(wsClient, adapter);
  }

  async createFullClient(config: ISolanaClientConfig): Promise<SolanaFullClient> {
    const queryClient = await this.createQueryClient(config);
    const eventClient = await this.createEventClient(config);

    return new SolanaFullClient(queryClient, eventClient);
  }

  async detectNetworkCapabilities(endpoint: string): Promise<SolanaCapabilities> {
    const tempClient = this.createRpcClient({ endpoint });

    try {
      // Test for versioned transaction support
      const versionedTxSupport = await this.testVersionedTransactionSupport(tempClient);

      // Test for compute budget support
      const computeBudgetSupport = await this.testComputeBudgetSupport(tempClient);

      return {
        supportsVersionedTransactions: versionedTxSupport,
        supportsComputeBudget: computeBudgetSupport,
        supportsTokenExtensions: false, // Detect based on cluster version
        maxTransactionSize: 1232
      };
    } finally {
      await tempClient.disconnect();
    }
  }

  private async createAdapter(config: ISolanaClientConfig): Promise<ISolanaProtocolAdapter> {
    const capabilities = await this.detectNetworkCapabilities(config.endpoint);
    return createSolanaAdapter(SolanaVersion.V1, capabilities);
  }

  private createRpcClient(config: ISolanaClientConfig): ISolanaRpcClient {
    return new SolanaHttpRpcClient({
      endpoint: config.endpoint,
      timeout: config.timeout,
      retries: config.retries
    });
  }
}
```

### Migration Examples

#### Before and After API Usage

**Current API (Before Refactoring):**
```typescript
// Old way - direct instantiation
import { Connection, SolanaSigningClient, DirectSigner, Keypair } from '@interchainjs/solana';

const connection = new Connection({
  endpoint: 'https://api.devnet.solana.com',
  commitment: 'confirmed'
});

const keypair = Keypair.generate();
const signer = new DirectSigner(keypair);
const client = new SolanaSigningClient(connection, signer);

// Transfer tokens
const signature = await client.transfer({
  recipient: new PublicKey('...'),
  amount: 1000000
});
```

**New API (After Refactoring):**
```typescript
// New way - factory pattern with workflow
import { SolanaClientFactory, createSolanaConfig } from '@interchainjs/solana';

const config = createSolanaConfig({
  endpoint: 'https://api.devnet.solana.com',
  commitment: 'confirmed'
});

const factory = new SolanaClientFactory();
const queryClient = await factory.createQueryClient(config);
const signer = await factory.createDirectSigner(keypair, { queryClient });

// Transfer tokens using workflow
const result = await signer.signAndBroadcast({
  messages: [
    SystemProgram.transfer({
      fromPubkey: signer.address,
      toPubkey: new PublicKey('...'),
      lamports: 1000000
    })
  ],
  fee: 'auto'
});
```

#### Compatibility Wrapper Example
```typescript
// Backward compatibility wrapper
export class SolanaSigningClient {
  private modernSigner: ISolanaSigner;
  private queryClient: SolanaQueryClient;

  constructor(connection: Connection, signer: DirectSigner | OfflineSigner) {
    // Convert old connection to new query client
    this.queryClient = this.convertConnection(connection);

    // Wrap old signer in new interface
    this.modernSigner = this.wrapSigner(signer);
  }

  async transfer(params: TransferParams): Promise<string> {
    // Convert old API to new workflow
    const result = await this.modernSigner.signAndBroadcast({
      messages: [
        SystemProgram.transfer({
          fromPubkey: this.modernSigner.address,
          toPubkey: params.recipient,
          lamports: params.amount
        })
      ],
      fee: 'auto'
    });

    return result.transactionHash;
  }
}
```

### Testing Strategy Implementation

#### Unit Test Structure
```typescript
// __tests__/adapters/solana-v1-adapter.test.ts
describe('SolanaV1Adapter', () => {
  let adapter: SolanaV1Adapter;

  beforeEach(() => {
    adapter = new SolanaV1Adapter();
  });

  describe('encodeRequest', () => {
    it('should encode getBalance request correctly', () => {
      const params = {
        publicKey: 'So11111111111111111111111111111111111111112',
        commitment: 'confirmed'
      };

      const encoded = adapter.encodeRequest(SolanaMethod.GET_BALANCE, params);

      expect(encoded).toEqual([
        'So11111111111111111111111111111111111111112',
        { commitment: 'confirmed', encoding: 'base64' }
      ]);
    });
  });

  describe('decodeResponse', () => {
    it('should decode getBalance response correctly', () => {
      const response = {
        context: { slot: 123456 },
        value: 1000000000
      };

      const decoded = adapter.decodeResponse(SolanaMethod.GET_BALANCE, response);

      expect(decoded).toBe(1000000000);
    });
  });
});
```

#### Integration Test Example
```typescript
// __tests__/integration/transfer.test.ts
describe('Solana Transfer Integration', () => {
  let factory: SolanaClientFactory;
  let queryClient: SolanaQueryClient;
  let signer: ISolanaSigner;

  beforeAll(async () => {
    factory = new SolanaClientFactory();

    const config = createSolanaConfig({
      endpoint: 'https://api.devnet.solana.com'
    });

    queryClient = await factory.createQueryClient(config);

    // Use test keypair
    const keypair = Keypair.fromSecretKey(TEST_KEYPAIR_BYTES);
    signer = await factory.createDirectSigner(keypair, { queryClient });
  });

  it('should transfer SOL successfully', async () => {
    const recipient = Keypair.generate().publicKey;
    const amount = 1000000; // 0.001 SOL

    // Get initial balances
    const initialSenderBalance = await queryClient.getBalance(signer.address);
    const initialRecipientBalance = await queryClient.getBalance(recipient);

    // Perform transfer
    const result = await signer.signAndBroadcast({
      messages: [
        SystemProgram.transfer({
          fromPubkey: signer.address,
          toPubkey: recipient,
          lamports: amount
        })
      ],
      fee: 'auto'
    });

    // Wait for confirmation
    await queryClient.waitForTransaction(result.transactionHash);

    // Verify balances
    const finalSenderBalance = await queryClient.getBalance(signer.address);
    const finalRecipientBalance = await queryClient.getBalance(recipient);

    expect(finalRecipientBalance).toBe(initialRecipientBalance + amount);
    expect(finalSenderBalance).toBeLessThan(initialSenderBalance - amount);
  }, 30000);
});
```

### Validation Checklist

#### Pre-Refactoring Validation
- [ ] Document current API surface and behavior
- [ ] Create comprehensive test suite for existing functionality
- [ ] Identify all breaking changes and compatibility requirements
- [ ] Set up performance benchmarks for comparison

#### During Refactoring Validation
- [ ] Each phase passes all existing tests
- [ ] New architecture components have >90% test coverage
- [ ] Performance metrics meet or exceed baseline
- [ ] Memory usage remains stable under load

#### Post-Refactoring Validation
- [ ] All compatibility wrappers function correctly
- [ ] Migration guide examples work as documented
- [ ] Integration tests pass against real Solana networks
- [ ] Browser and Node.js environments both supported
- [ ] Bundle size analysis shows no significant increases

#### Production Readiness Checklist
- [ ] Error handling covers all failure scenarios
- [ ] Logging and monitoring integration points identified
- [ ] Security review completed for wallet integrations
- [ ] Performance testing under realistic load conditions
- [ ] Documentation updated and reviewed
- [ ] Migration timeline and rollback plan established

## Conclusion

This comprehensive refactoring plan transforms the Solana network implementation to align with InterchainJS architectural standards while maintaining backward compatibility. The structured approach ensures:

1. **Consistent Architecture**: Following established patterns across all network implementations
2. **Improved Maintainability**: Clear separation of concerns and modular design
3. **Enhanced Developer Experience**: Predictable APIs and comprehensive documentation
4. **Future-Proof Design**: Support for protocol evolution and new features
5. **Quality Assurance**: Robust testing and validation at every level

The phased implementation approach minimizes risk while delivering incremental value, ensuring a smooth transition for existing users while establishing a solid foundation for future development.
