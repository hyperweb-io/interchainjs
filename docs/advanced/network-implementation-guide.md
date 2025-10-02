# Blockchain Network Implementation Guide

This guide outlines the architectural patterns and design principles for implementing blockchain network support in InterchainJS. It provides abstract patterns and interfaces that can be adapted to different blockchain architectures, whether they are Cosmos-based, Ethereum-compatible, or other blockchain types.

## Table of Contents

1. [Architectural Principles](#architectural-principles)
2. [Directory Structure Patterns](#directory-structure-patterns)
3. [Query Client Architecture](#query-client-architecture)
4. [Transaction Signing Workflow](#transaction-signing-workflow)
5. [Wallet Architecture](#wallet-architecture)
6. [Common Interfaces and Abstractions](#common-interfaces-and-abstractions)
7. [Error Handling Patterns](#error-handling-patterns)
8. [Testing Strategies](#testing-strategies)
9. [Configuration Management](#configuration-management)

## Architectural Principles

### 1. Separation of Concerns

Each blockchain network implementation should separate:

- **Protocol Communication**: RPC/API communication layer
- **Data Transformation**: Protocol-specific encoding/decoding
- **Transaction Building**: Message construction and signing workflows
- **Key Management**: Wallet and cryptographic operations
- **Configuration**: Network-specific settings and parameters

### 2. Adapter Pattern for Protocol Differences

Different blockchain networks and their versions require different data formats and communication protocols. Use the adapter pattern to:

- Abstract protocol version differences
- Provide consistent interfaces across versions
- Enable easy migration between protocol versions
- Support multiple concurrent protocol versions

### 3. Plugin-Based Transaction Workflows

Transaction building should be modular and extensible:

- Each step in transaction building is a separate plugin
- Plugins can be composed into different workflows
- Support for multiple signing modes (direct, amino, EIP-712, etc.)
- Easy customization for network-specific requirements

### 4. Strategy Pattern for Cryptographic Operations

Different networks use different cryptographic schemes:

- Address derivation strategies
- Signature algorithms
- Hash functions
- Key derivation methods

### 5. Factory Pattern for Client Creation

Centralized client creation with:

- Auto-detection of network capabilities
- Configuration-driven client setup
- Support for multiple client types (query, event, signing)
- Environment-specific configurations

## Directory Structure Patterns

### Core Architectural Layers

The directory structure should reflect the separation of concerns and architectural layers:

```text
networks/{network-name}/
├── src/
│   ├── adapters/           # Protocol abstraction layer
│   │   ├── base.ts         # Common adapter interface
│   │   ├── {version}.ts    # Version-specific implementations
│   │   └── factory.ts      # Adapter creation logic
│   ├── auth/               # Cryptographic strategies
│   │   ├── config.ts       # Network-specific configurations
│   │   ├── strategy.ts     # Address/signature strategies
│   │   └── index.ts        # Strategy exports
│   ├── communication/      # Network communication layer
│   │   ├── query/          # Read operations
│   │   ├── event/          # Real-time subscriptions
│   │   └── rpc/            # Low-level RPC clients
│   ├── signing/            # Transaction signing layer
│   │   ├── signers/        # Signer implementations
│   │   ├── workflows/      # Transaction building workflows
│   │   └── types.ts        # Signing interfaces
│   ├── wallets/            # Key management layer
│   │   ├── implementations/ # Wallet implementations
│   │   ├── types.ts        # Wallet interfaces
│   │   └── factory.ts      # Wallet creation
│   ├── types/              # Type definitions
│   │   ├── protocol.ts     # Protocol-specific types
│   │   ├── client.ts       # Client interfaces
│   │   └── common.ts       # Shared types
│   ├── config/             # Configuration management
│   │   ├── network.ts      # Network configurations
│   │   ├── environment.ts  # Environment handling
│   │   └── validation.ts   # Config validation
│   └── index.ts           # Public API exports
├── tests/                 # Test organization
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── e2e/               # End-to-end tests
└── docs/                  # Documentation
    ├── README.md          # Usage guide
    ├── API.md             # API documentation
    └── examples/          # Code examples
```

### Design Principles for Structure

1. **Layer Separation**: Each directory represents a distinct architectural layer
2. **Interface Segregation**: Separate interfaces from implementations
3. **Factory Pattern**: Use factory modules for object creation
4. **Test Organization**: Mirror source structure in tests
5. **Documentation Co-location**: Keep docs close to implementation

### Naming Conventions

- **Directories**: `kebab-case` for multi-word concepts
- **Files**: `camelCase.ts` for implementations, `PascalCase.ts` for classes
- **Interfaces**: `I{Name}` prefix for interfaces
- **Types**: `T{Name}` prefix for type aliases
- **Constants**: `SCREAMING_SNAKE_CASE` for constants

## Quick Start for New Network Implementation

### 1. Create Directory Structure

```bash
mkdir -p networks/my-network/src/{adapters,auth,communication,signing,wallets,types,config}
mkdir -p networks/my-network/{tests,docs}
```

### 2. Implement Core Interfaces

Start with the essential interfaces:

```typescript
// src/types/client.ts
export interface IMyNetworkQueryClient extends IQueryClient {
  // Network-specific query methods
}

// src/types/signer.ts
export interface IMyNetworkSigner extends IUniSigner<...> {
  // Network-specific signer methods
}

// src/types/wallet.ts
export interface IMyNetworkWallet extends IWallet {
  // Network-specific wallet methods
}
```

### 3. Implement Protocol Adapter

```typescript
// src/adapters/my-network-adapter.ts
export class MyNetworkAdapter implements IProtocolAdapter {
  // Implement protocol-specific encoding/decoding
}
```

### 4. Create Configuration Factory

```typescript
// src/config/network.ts
export function createMyNetworkConfig(overrides?: Partial<IWalletConfig>): IWalletConfig {
  // Return network-specific configuration
}
```

For detailed implementation guidance, see the sections below.

## Next Steps

- [Query Client Architecture](#query-client-architecture) - Implement query clients
- [Transaction Signing Workflow](#transaction-signing-workflow) - Implement signers
- [Wallet Architecture](#wallet-architecture) - Implement wallets
- [Testing Strategies](#testing-strategies) - Set up comprehensive testing

## Related Documentation

- [Auth vs. Wallet vs. Signer](./auth-wallet-signer.md) - Understanding the three-layer architecture
- [Tutorial](./tutorial.md) - Using and extending signers
- [Types Package](../packages/types/index.mdx) - Core interfaces and types

## Query Client Architecture

### Architectural Overview

The query client architecture follows a layered approach with clear separation between communication, protocol handling, and data transformation:

```text
┌─────────────────────────────────────┐
│           Client Interface          │  ← Public API
├─────────────────────────────────────┤
│         Query Client Layer          │  ← Business Logic
├─────────────────────────────────────┤
│        Protocol Adapter Layer       │  ← Data Transformation
├─────────────────────────────────────┤
│         RPC Client Layer            │  ← Network Communication
└─────────────────────────────────────┘
```

### Core Architectural Patterns

#### 1. Adapter Pattern for Protocol Abstraction

Different blockchain networks and versions require different data formats. The adapter pattern provides:

```typescript
// Abstract protocol adapter interface
interface IProtocolAdapter<TVersion, TMethod, TCapabilities> {
  getVersion(): TVersion;
  getSupportedMethods(): Set<TMethod>;
  getCapabilities(): TCapabilities;

  // Transform outgoing requests
  encodeRequest<TParams>(method: TMethod, params: TParams): unknown;

  // Transform incoming responses
  decodeResponse<TResponse>(method: TMethod, response: unknown): TResponse;

  // Handle protocol-specific data encoding
  encodeData(data: string | Uint8Array): unknown;
  decodeData(data: unknown): Uint8Array;
}

// Network-specific adapter interface
interface INetworkProtocolAdapter extends IProtocolAdapter<NetworkVersion, NetworkMethod, NetworkCapabilities> {
  // Additional network-specific methods
  encodeTransaction(tx: NetworkTransaction): EncodedTransaction;
  decodeBlock(block: unknown): NetworkBlock;
}
```

#### 2. Strategy Pattern for Communication

Support multiple communication protocols through a common interface:

```typescript
// Abstract communication interface
interface IRpcClient {
  call<TRequest, TResponse>(method: string, params?: TRequest): Promise<TResponse>;
  subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  readonly endpoint: string;
}

// Concrete implementations
class HttpRpcClient implements IRpcClient {
  // HTTP-specific implementation with timeout, retries, etc.
}

class WebSocketRpcClient implements IRpcClient {
  // WebSocket-specific implementation with reconnection, subscriptions, etc.
}

class GrpcClient implements IRpcClient {
  // gRPC implementation for networks that support it
}
```

#### 3. Facade Pattern for Query Client

The query client provides a simplified interface that coordinates between adapters and RPC clients:

```typescript
// Abstract query client interface
interface IQueryClient<TBlock, TTransaction, TAccount> {
  // Connection management
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;

  // Core query methods (adapt to network capabilities)
  getLatestBlock(): Promise<TBlock>;
  getBlock(identifier: string | number): Promise<TBlock>;
  getTransaction(hash: string): Promise<TTransaction>;
  getAccount(address: string): Promise<TAccount>;

  // Network-specific query method
  query<TRequest, TResponse>(
    path: string,
    request: TRequest
  ): Promise<TResponse>;
}

// Concrete implementation
class NetworkQueryClient implements IQueryClient<NetworkBlock, NetworkTx, NetworkAccount> {
  constructor(
    private rpcClient: IRpcClient,
    private adapter: INetworkProtocolAdapter
  ) {}

  async getLatestBlock(): Promise<NetworkBlock> {
    const response = await this.rpcClient.call('latest_block');
    return this.adapter.decodeBlock(response);
  }
}
```

### Key Design Benefits

1. **Protocol Independence**: Easy to support multiple protocol versions
2. **Transport Flexibility**: Support HTTP, WebSocket, gRPC, etc.
3. **Auto-Detection**: Automatically detect network capabilities
4. **Extensibility**: Easy to add new query methods or protocols
5. **Testing**: Each layer can be mocked independently
6. **Configuration**: Centralized configuration management

## Transaction Signing Workflow

### Architectural Overview

Transaction signing follows a modular, plugin-based architecture that supports multiple signing modes and can be adapted to different blockchain transaction formats:

```text
┌─────────────────────────────────────┐
│         Signer Interface            │  ← Public API
├─────────────────────────────────────┤
│       Workflow Orchestrator        │  ← Business Logic
├─────────────────────────────────────┤
│         Plugin Pipeline             │  ← Modular Processing
├─────────────────────────────────────┤
│      Cryptographic Operations       │  ← Signing & Verification
└─────────────────────────────────────┘
```

### Core Architectural Patterns

#### 1. Builder Pattern for Workflow Construction

The workflow builder pattern allows for flexible composition of transaction building steps:

```typescript
// Abstract workflow builder interface
interface IWorkflowBuilder<TSigner, TTransaction, TContext> {
  build(): Promise<TTransaction>;
  addPlugin(plugin: IWorkflowPlugin<TContext>): this;
  setContext(context: TContext): this;
}

// Abstract workflow plugin interface
interface IWorkflowPlugin<TContext> {
  execute(context: TContext): Promise<void>;
  getDependencies(): string[];
  getName(): string;
}

// Concrete workflow builder
class TransactionWorkflowBuilder<TSigner, TTransaction, TContext>
  implements IWorkflowBuilder<TSigner, TTransaction, TContext> {

  private plugins: IWorkflowPlugin<TContext>[] = [];
  private context: TContext;

  static create<TSigner, TTransaction, TContext>(
    signer: TSigner,
    signingMode: SigningMode,
    options: WorkflowOptions = {}
  ): TransactionWorkflowBuilder<TSigner, TTransaction, TContext> {
    const builder = new TransactionWorkflowBuilder<TSigner, TTransaction, TContext>();

    // Add plugins based on signing mode
    const plugins = this.getPluginsForSigningMode(signingMode);
    plugins.forEach(plugin => builder.addPlugin(plugin));

    return builder;
  }

  async build(): Promise<TTransaction> {
    // Execute plugins in dependency order
    const sortedPlugins = this.sortPluginsByDependencies();

    for (const plugin of sortedPlugins) {
      await plugin.execute(this.context);
    }

    return this.context.getResult();
  }
}
```

#### 2. Plugin System for Modular Processing

Each step in transaction building is encapsulated in a plugin:

```typescript
// Base plugin interface
abstract class BaseWorkflowPlugin<TContext> implements IWorkflowPlugin<TContext> {
  constructor(
    private dependencies: string[] = [],
    private name: string
  ) {}

  abstract execute(context: TContext): Promise<void>;

  getDependencies(): string[] {
    return this.dependencies;
  }

  getName(): string {
    return this.name;
  }
}

// Example plugins for different transaction building steps
class InputValidationPlugin<TContext> extends BaseWorkflowPlugin<TContext> {
  async execute(context: TContext): Promise<void> {
    // Validate transaction inputs (messages, fees, etc.)
    const inputs = context.getInputs();
    this.validateInputs(inputs);
    context.setValidatedInputs(inputs);
  }
}

class MessageEncodingPlugin<TContext> extends BaseWorkflowPlugin<TContext> {
  constructor() {
    super(['input-validation'], 'message-encoding');
  }

  async execute(context: TContext): Promise<void> {
    // Encode messages according to network protocol
    const messages = context.getValidatedInputs().messages;
    const encodedMessages = await this.encodeMessages(messages);
    context.setEncodedMessages(encodedMessages);
  }
}

class SignaturePlugin<TContext> extends BaseWorkflowPlugin<TContext> {
  constructor() {
    super(['message-encoding', 'fee-calculation'], 'signature');
  }

  async execute(context: TContext): Promise<void> {
    // Generate signature using appropriate signing method
    const signDoc = context.getSignDocument();
    const signer = context.getSigner();
    const signature = await signer.sign(signDoc);
    context.setSignature(signature);
  }
}
```

### Universal Signer Interface

The signer interface provides a consistent API across different networks:

```typescript
// Universal signer interface
interface IUniSigner<
  TAccount,
  TSignArgs,
  TBroadcastOpts,
  TBroadcastResponse,
  TQueryClient extends IQueryClient = IQueryClient
> {
  queryClient: TQueryClient;
  // Account management
  getAccounts(): Promise<readonly TAccount[]>;

  // Core signing methods
  signArbitrary(data: Uint8Array, accountIndex?: number): Promise<ICryptoBytes>;

  // Transaction workflow
  sign(args: TSignArgs): Promise<ISigned<TBroadcastOpts, TBroadcastResponse>>;
  broadcast(signed: ISigned<TBroadcastOpts, TBroadcastResponse>, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
  signAndBroadcast(args: TSignArgs, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
}

// Signed transaction interface
interface ISigned<TBroadcastOpts, TBroadcastResponse> {
  signature: ICryptoBytes;
  broadcast(options?: TBroadcastOpts): Promise<TBroadcastResponse>;
}

// Network-specific signer implementation
class NetworkSigner implements IUniSigner<NetworkAccount, NetworkSignArgs, NetworkBroadcastOpts, NetworkBroadcastResponse, IQueryClient> {
  constructor(
    private wallet: IWallet,
    public readonly queryClient: IQueryClient,
    private config: NetworkSignerConfig
  ) {}

  async sign(args: NetworkSignArgs): Promise<ISigned<NetworkBroadcastOpts, NetworkBroadcastResponse>> {
    // Use appropriate workflow based on signing mode
    const workflow = this.createWorkflow(args.signingMode);
    const transaction = await workflow.build();

    return {
      signature: transaction.signature,
      broadcast: async (options?: NetworkBroadcastOpts) => {
        return this.broadcast(transaction, options);
      }
    };
  }

  private createWorkflow(signingMode: SigningMode): IWorkflowBuilder<NetworkSigner, NetworkTransaction, NetworkContext> {
    return TransactionWorkflowBuilder.create(this, signingMode);
  }
}
```

### Key Design Benefits

1. **Modularity**: Each step is a separate, testable plugin
2. **Flexibility**: Easy to add new signing modes or transaction types
3. **Reusability**: Plugins can be shared across different networks
4. **Extensibility**: New plugins can be added without modifying existing code
5. **Testability**: Each plugin can be tested in isolation
6. **Configuration**: Workflows can be configured based on network requirements

### Detailed Implementation Guide

For comprehensive guidance on implementing the plugin-based workflow system, including:

- **Complete architecture details** with base classes and interfaces
- **Plugin development patterns** with dependency management
- **Workflow selection strategies** for different scenarios
- **File organization** and best practices
- **Usage examples** with complete implementations
- **Testing strategies** for workflow systems

See the [Workflow Builder and Plugins Guide](./workflow-builder-and-plugins.md).

## Wallet Architecture

### Strategy Pattern for Address Derivation

Different networks use different address derivation schemes. The strategy pattern allows for pluggable address generation:

```typescript
// Abstract address strategy interface
interface IAddressStrategy {
  name: string;

  // Hash function for address derivation
  hash(publicKeyBytes: Uint8Array): Uint8Array;

  // Encode address bytes to string format
  encode(addressBytes: Uint8Array, prefix?: string): string;

  // Decode address string to bytes and extract prefix
  decode(address: string): { bytes: Uint8Array; prefix: string };

  // Extract prefix from address string
  extractPrefix(address: string): string | undefined;

  // Validate address format
  isValid(address: string): boolean;
}

// Example strategies for different networks
class Bech32AddressStrategy implements IAddressStrategy {
  name = 'bech32';

  hash(publicKeyBytes: Uint8Array): Uint8Array {
    // SHA256 + RIPEMD160 for Cosmos-style addresses
    return ripemd160(sha256(publicKeyBytes));
  }

  encode(addressBytes: Uint8Array, prefix = 'cosmos'): string {
    return bech32.encode(prefix, bech32.toWords(addressBytes));
  }

  decode(address: string): { bytes: Uint8Array; prefix: string } {
    const decoded = bech32.decode(address);
    return {
      bytes: new Uint8Array(bech32.fromWords(decoded.words)),
      prefix: decoded.prefix
    };
  }
}

class EthereumAddressStrategy implements IAddressStrategy {
  name = 'ethereum';

  hash(publicKeyBytes: Uint8Array): Uint8Array {
    // Keccak256 for Ethereum addresses
    return keccak256(publicKeyBytes).slice(-20);
  }

  encode(addressBytes: Uint8Array, prefix = '0x'): string {
    return prefix + toHex(addressBytes);
  }

  decode(address: string): { bytes: Uint8Array; prefix: string } {
    const prefix = address.startsWith('0x') ? '0x' : '';
    const hex = address.replace(/^0x/, '');
    return {
      bytes: fromHex(hex),
      prefix
    };
  }
}
```

### Factory Pattern for Wallet Configuration

Configuration factories provide network-specific defaults while allowing customization:

```typescript
// Network-specific configuration factories
interface INetworkConfigFactory {
  createConfig(overrides?: Partial<IWalletConfig>): IWalletConfig;
  getDefaultDerivationPath(): string;
  getDefaultAddressPrefix(): string;
  getDefaultStrategy(): IAddressStrategy;
}

class CosmosConfigFactory implements INetworkConfigFactory {
  createConfig(overrides: Partial<IWalletConfig> = {}): IWalletConfig {
    const defaults: IWalletConfig = {
      privateKeyConfig: {
        algorithm: 'secp256k1'
      },
      publicKeyConfig: {
        compressed: true
      },
      addressConfig: {
        strategy: 'bech32'
      },
      derivations: [{
        hdPath: "m/44'/118'/0'/0/0",
        prefix: 'cosmos'
      }]
    };

    return deepMerge(defaults, overrides);
  }

  getDefaultDerivationPath(): string {
    return "m/44'/118'/0'/0/0";
  }

  getDefaultAddressPrefix(): string {
    return 'cosmos';
  }

  getDefaultStrategy(): IAddressStrategy {
    return new Bech32AddressStrategy();
  }
}
```

## Error Handling Patterns

### Error Hierarchy

```typescript
export enum ErrorCode {
  NETWORK_ERROR = "NETWORK_ERROR",
  TIMEOUT_ERROR = "TIMEOUT_ERROR",
  CONNECTION_ERROR = "CONNECTION_ERROR",
  PARSE_ERROR = "PARSE_ERROR",
  INVALID_RESPONSE = "INVALID_RESPONSE",
  SUBSCRIPTION_ERROR = "SUBSCRIPTION_ERROR",
  PROTOCOL_ERROR = "PROTOCOL_ERROR"
}

export enum ErrorCategory {
  NETWORK = "NETWORK",
  CLIENT = "CLIENT",
  SERVER = "SERVER",
  PROTOCOL = "PROTOCOL"
}

export abstract class QueryClientError extends Error {
  abstract readonly code: ErrorCode;
  abstract readonly category: ErrorCategory;

  constructor(
    message: string,
    public readonly cause?: Error
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}
```

### Specific Error Types

```typescript
export class NetworkError extends QueryClientError {
  readonly code = ErrorCode.NETWORK_ERROR;
  readonly category = ErrorCategory.NETWORK;
}

export class TimeoutError extends QueryClientError {
  readonly code = ErrorCode.TIMEOUT_ERROR;
  readonly category = ErrorCategory.NETWORK;
}

export class ConnectionError extends QueryClientError {
  readonly code = ErrorCode.CONNECTION_ERROR;
  readonly category = ErrorCategory.NETWORK;
}

export class ParseError extends QueryClientError {
  readonly code = ErrorCode.PARSE_ERROR;
  readonly category = ErrorCategory.CLIENT;
}

export class InvalidResponseError extends QueryClientError {
  readonly code = ErrorCode.INVALID_RESPONSE;
  readonly category = ErrorCategory.SERVER;
}
```

## Testing Strategies

### Testing Structure

```text
networks/{network}/
├── src/
│   └── __tests__/          # Unit tests
│       ├── query-client.test.ts
│       ├── signers.test.ts
│       ├── wallets.test.ts
│       └── workflows.test.ts
├── rpc/                    # RPC endpoint tests
│   ├── query-client.test.ts
│   └── README.md
└── starship/               # Integration tests
    ├── __tests__/
    │   ├── setup.test.ts
    │   ├── query-client.test.ts
    │   ├── broadcast.test.ts
    │   ├── token.test.ts
    │   └── signer-methods.test.ts
    ├── configs/
    │   └── config.yaml
    └── src/
        └── utils.ts
```

### Unit Testing Patterns

#### Mock-Based Testing

```typescript
describe('NetworkQueryClient', () => {
  let client: NetworkQueryClient;
  let mockRpcClient: jest.Mocked<HttpRpcClient>;
  let adapter: NetworkAdapter;

  beforeEach(() => {
    mockRpcClient = {
      call: jest.fn(),
      connect: jest.fn(),
      disconnect: jest.fn(),
      isConnected: jest.fn().mockReturnValue(true),
      endpoint: 'http://localhost:26657'
    } as any;

    adapter = new NetworkAdapter();
    client = new NetworkQueryClient(mockRpcClient, adapter);
  });

  describe('getStatus', () => {
    it('should return chain status', async () => {
      const mockResponse = {
        node_info: {
          network: 'test-network',
          version: '1.0.0'
        },
        sync_info: {
          latest_block_height: '12345'
        }
      };

      mockRpcClient.call.mockResolvedValue(mockResponse);

      const status = await client.getStatus();

      expect(mockRpcClient.call).toHaveBeenCalledWith('status');
      expect(status.nodeInfo.network).toBe('test-network');
      expect(status.syncInfo.latestBlockHeight).toBe(12345);
    });
  });
});
```

### Integration Testing with Starship

#### Setup Configuration

```typescript
// starship/__tests__/setup.test.ts
import path from 'path';
import { ConfigContext, useRegistry } from 'starshipjs';

beforeAll(async () => {
  const configFile = path.join(__dirname, '..', 'configs', 'config.yaml');
  ConfigContext.setConfigFile(configFile);
  ConfigContext.setRegistry(await useRegistry(configFile));
});
```

#### Integration Test Example

```typescript
describe('Token Transfer Integration', () => {
  let queryClient: INetworkQueryClient;
  let signer: DirectSigner;
  let wallet: NetworkHDWallet;

  beforeAll(async () => {
    const { getRpcEndpoint } = useChain('test-network');
    const rpcEndpoint = await getRpcEndpoint();

    queryClient = await ClientFactory.createQueryClient(rpcEndpoint);

    const mnemonic = generateMnemonic();
    wallet = await NetworkHDWallet.fromMnemonic(mnemonic, {
      derivations: [{ hdPath: "m/44'/118'/0'/0/0", prefix: 'test' }]
    });

    signer = new DirectSigner(wallet, {
      queryClient,
      chainId: 'test-network-1',
      gasPrice: '0.025utest'
    });
  });

  it('should transfer tokens successfully', async () => {
    const accounts = await wallet.getAccounts();
    const fromAddress = accounts[0].address;
    const toAddress = accounts[1]?.address || fromAddress;

    const message = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress,
        toAddress,
        amount: [{ denom: 'utest', amount: '1000' }]
      }
    };

    const result = await signer.signAndBroadcast({
      messages: [message],
      fee: 'auto',
      memo: 'test transfer'
    });

    expect(result.transactionHash).toBeDefined();
    expect(result.code).toBe(0);
  }, 60000);
});
```

## Configuration Management

### Network Configuration Interface

```typescript
interface INetworkConfig {
  chainId: string;
  chainName: string;
  networkType: 'mainnet' | 'testnet' | 'devnet' | 'local';

  // Endpoints
  rpcEndpoints: string[];
  restEndpoints?: string[];
  wsEndpoints?: string[];

  // Protocol settings
  protocolVersion?: string;

  // Feature flags
  features: Record<string, boolean>;
}

interface IClientConfig {
  network: INetworkConfig;
  timeout?: number;
  retries?: number;
  headers?: Record<string, string>;

  // Connection settings
  reconnect?: {
    maxRetries: number;
    retryDelay: number;
    exponentialBackoff: boolean;
  };
}
```

## Common Interfaces and Abstractions

### Interface Composition Patterns

```typescript
// Combine interfaces for full client functionality
interface IFullClient<TBlock, TTx, TAccount, TStatus, TBlockEvent, TTxEvent>
  extends IQueryClient<TBlock, TTx, TAccount, TStatus>,
          IEventClient<TBlockEvent, TTxEvent> {

  // Additional methods that require both query and event capabilities
  waitForTransaction(hash: string, timeout?: number): Promise<TTx>;
  waitForBlock(height: number, timeout?: number): Promise<TBlock>;
}

// Factory interface for creating clients
interface IClientFactory<TQueryClient, TEventClient, TFullClient> {
  createQueryClient(config: IClientConfig): Promise<TQueryClient>;
  createEventClient(config: IClientConfig): Promise<TEventClient>;
  createFullClient(config: IClientConfig): Promise<TFullClient>;

  // Auto-detection
  detectNetworkCapabilities(endpoint: string): Promise<NetworkCapabilities>;
  detectProtocolVersion(endpoint: string): Promise<string>;
}
```

## Summary

This implementation guide provides the architectural patterns and design principles for implementing blockchain network support in InterchainJS. The key principles are:

1. **Separation of Concerns**: Clear architectural layers with distinct responsibilities
2. **Adapter Pattern**: Protocol abstraction for version differences
3. **Plugin Architecture**: Modular, extensible transaction workflows
4. **Strategy Pattern**: Pluggable cryptographic and address strategies
5. **Factory Pattern**: Centralized client and configuration creation
6. **Universal Interfaces**: Consistent APIs across different networks
7. **Comprehensive Testing**: Unit, integration, and end-to-end testing strategies

By following these patterns, new blockchain network implementations will be:
- **Consistent** with existing network implementations
- **Extensible** for future protocol changes
- **Testable** with comprehensive test coverage
- **Maintainable** with clear separation of concerns
- **Type-safe** with strong TypeScript interfaces

For specific implementation examples, refer to the existing network implementations in the `networks/` directory, particularly the Cosmos, Ethereum, and Injective implementations.
