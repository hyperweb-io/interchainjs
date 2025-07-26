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

#### 4. Factory Pattern for Client Creation

Centralized client creation with configuration and auto-detection:

```typescript
// Abstract factory interface
interface IClientFactory<TQueryClient, TEventClient> {
  createQueryClient(config: ClientConfig): Promise<TQueryClient>;
  createEventClient(config: EventClientConfig): Promise<TEventClient>;
  detectNetworkCapabilities(endpoint: string): Promise<NetworkCapabilities>;
}

// Configuration interfaces
interface ClientConfig {
  endpoint: string | EndpointConfig;
  protocolVersion?: string;
  timeout?: number;
  retries?: number;
  headers?: Record<string, string>;
}

interface EndpointConfig {
  url: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// Concrete factory implementation
class NetworkClientFactory implements IClientFactory<NetworkQueryClient, NetworkEventClient> {
  async createQueryClient(config: ClientConfig): Promise<NetworkQueryClient> {
    // 1. Detect or use provided protocol version
    const capabilities = await this.detectNetworkCapabilities(config.endpoint);

    // 2. Create appropriate adapter
    const adapter = this.createAdapter(capabilities.protocolVersion);

    // 3. Create RPC client
    const rpcClient = this.createRpcClient(config);

    // 4. Combine into query client
    return new NetworkQueryClient(rpcClient, adapter);
  }

  private async detectNetworkCapabilities(endpoint: string): Promise<NetworkCapabilities> {
    // Auto-detect network version and capabilities
    // This varies by network type
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

#### 3. Strategy Pattern for Signing Modes

Different networks support different signing modes (protobuf, JSON, EIP-712, etc.):

```typescript
// Abstract signing strategy
interface ISigningStrategy<TSignDoc, TSignature> {
  createSignDocument(context: TransactionContext): TSignDoc;
  sign(signDoc: TSignDoc, signer: ISigner): Promise<TSignature>;
  verifySignature(signDoc: TSignDoc, signature: TSignature, publicKey: PublicKey): Promise<boolean>;
}

// Concrete signing strategies
class ProtobufSigningStrategy implements ISigningStrategy<ProtobufSignDoc, BinarySignature> {
  createSignDocument(context: TransactionContext): ProtobufSignDoc {
    // Create protobuf-based sign document
  }

  async sign(signDoc: ProtobufSignDoc, signer: ISigner): Promise<BinarySignature> {
    // Sign using protobuf serialization
  }
}

class JsonSigningStrategy implements ISigningStrategy<JsonSignDoc, BinarySignature> {
  createSignDocument(context: TransactionContext): JsonSignDoc {
    // Create JSON-based sign document
  }

  async sign(signDoc: JsonSignDoc, signer: ISigner): Promise<BinarySignature> {
    // Sign using JSON serialization
  }
}

class EIP712SigningStrategy implements ISigningStrategy<EIP712SignDoc, EthSignature> {
  createSignDocument(context: TransactionContext): EIP712SignDoc {
    // Create EIP-712 typed data structure
  }

  async sign(signDoc: EIP712SignDoc, signer: ISigner): Promise<EthSignature> {
    // Sign using EIP-712 standard
  }
}
```

#### 4. Context Pattern for Data Flow

The context object manages data flow between plugins:

```typescript
// Abstract context interface
interface IWorkflowContext<TSigner, TResult> {
  getSigner(): TSigner;
  setStagingData(key: string, data: unknown): void;
  getStagingData<T>(key: string): T;
  setResult(result: TResult): void;
  getResult(): TResult;
}

// Concrete context implementation
class TransactionWorkflowContext<TSigner, TTransaction>
  implements IWorkflowContext<TSigner, TTransaction> {

  private stagingData = new Map<string, unknown>();
  private result: TTransaction;

  constructor(private signer: TSigner) {}

  getSigner(): TSigner {
    return this.signer;
  }

  setStagingData(key: string, data: unknown): void {
    this.stagingData.set(key, data);
  }

  getStagingData<T>(key: string): T {
    return this.stagingData.get(key) as T;
  }

  setResult(result: TTransaction): void {
    this.result = result;
  }

  getResult(): TTransaction {
    return this.result;
  }
}
```

### Universal Signer Interface

The signer interface provides a consistent API across different networks:

```typescript
// Universal signer interface
interface IUniversalSigner<TAccount, TSignArgs, TBroadcastOpts, TBroadcastResponse> {
  // Account management
  getAccounts(): Promise<readonly TAccount[]>;

  // Core signing methods
  signArbitrary(data: Uint8Array, accountIndex?: number): Promise<Signature>;

  // Transaction workflow
  sign(args: TSignArgs): Promise<ISignedTransaction<TBroadcastOpts, TBroadcastResponse>>;
  broadcast(signed: ISignedTransaction<TBroadcastOpts, TBroadcastResponse>, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
  signAndBroadcast(args: TSignArgs, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
}

// Signed transaction interface
interface ISignedTransaction<TBroadcastOpts, TBroadcastResponse> {
  signature: Signature;
  broadcast(options?: TBroadcastOpts): Promise<TBroadcastResponse>;
}

// Network-specific signer implementation
class NetworkSigner implements IUniversalSigner<NetworkAccount, NetworkSignArgs, NetworkBroadcastOpts, NetworkBroadcastResponse> {
  constructor(
    private wallet: IWallet,
    private queryClient: IQueryClient,
    private config: NetworkSignerConfig
  ) {}

  async sign(args: NetworkSignArgs): Promise<ISignedTransaction<NetworkBroadcastOpts, NetworkBroadcastResponse>> {
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

## Wallet Architecture

### Architectural Overview

The wallet architecture follows a layered approach with clear separation between key management, cryptographic operations, and network-specific address derivation:

```text
┌─────────────────────────────────────┐
│         Wallet Interface            │  ← Public API
├─────────────────────────────────────┤
│       Account Management            │  ← Account Operations
├─────────────────────────────────────┤
│      Cryptographic Layer           │  ← Key Operations
├─────────────────────────────────────┤
│       Strategy Layer                │  ← Network-Specific Logic
└─────────────────────────────────────┘
```

### Core Architectural Patterns

#### 1. Strategy Pattern for Address Derivation

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

#### 2. Factory Pattern for Wallet Configuration

Configuration factories provide network-specific defaults while allowing customization:

```typescript
// Abstract wallet configuration interface
interface IWalletConfig {
  // Private key configuration
  privateKeyConfig?: {
    algorithm: string;
    passphrase?: string;
  };

  // Public key configuration
  publicKeyConfig?: {
    compressed: boolean;
  };

  // Address configuration
  addressConfig: {
    strategy: IAddressStrategy | string;
  };

  // Derivation paths for HD wallets
  derivations: Array<{
    hdPath: string;
    prefix: string;
  }>;
}

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

class EthereumConfigFactory implements INetworkConfigFactory {
  createConfig(overrides: Partial<IWalletConfig> = {}): IWalletConfig {
    const defaults: IWalletConfig = {
      privateKeyConfig: {
        algorithm: 'secp256k1'
      },
      publicKeyConfig: {
        compressed: false  // Ethereum uses uncompressed keys
      },
      addressConfig: {
        strategy: 'ethereum'
      },
      derivations: [{
        hdPath: "m/44'/60'/0'/0/0",
        prefix: '0x'
      }]
    };

    return deepMerge(defaults, overrides);
  }
}
```

#### 3. Existing Wallet Interface

The existing IWallet interface from @interchainjs/types provides the foundation:

```typescript
// The existing IWallet interface from @interchainjs/types
interface IWallet {
  // Core properties
  readonly privateKeys: IPrivateKey[];
  readonly config: IWalletConfig;

  // Methods
  getAccounts(): Promise<readonly IAccount[]>;              // Get all accounts (public info only)
  getAccountByIndex(index: number): Promise<IAccount>;   // Get specific account
  signByIndex(data: Uint8Array, index?: number): Promise<ICryptoBytes>;
}

// The existing IAccount interface from @interchainjs/types
interface IAccount {
  readonly publicKey: IPublicKey;
  readonly address: IAddress;
  readonly hdPath?: IHDPath;
  readonly algo: string;        // Algorithm name for reference
}

// Network-specific wallet implementations extend IWallet
interface ICosmosWallet extends IWallet {
  // Cosmos-specific methods if needed
  signDirect?(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse>;
  signAmino?(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse>;
}

// HD Wallet pattern for hierarchical deterministic wallets
interface IHDWallet extends IWallet {
  // HD-specific methods
  deriveAccount(hdPath: string): Promise<IAccount>;
  getDerivationPath(index: number): string;

  // Factory methods (implemented as static methods in concrete classes)
  // static fromMnemonic(mnemonic: string, config: IWalletConfig): Promise<IHDWallet>;
  // static fromSeed(seed: Uint8Array, config: IWalletConfig): Promise<IHDWallet>;
  // static fromPrivateKey(privateKey: string, config: IWalletConfig): Promise<IHDWallet>;
  // static random(config: IWalletConfig): Promise<IHDWallet>;
}
```

#### 4. Base Wallet Implementation

A base implementation provides common functionality:

```typescript
// Abstract base wallet class
abstract class BaseWallet implements IWallet {
  constructor(
    public readonly privateKeys: IPrivateKey[],
    public readonly config: IWalletConfig
  ) {}

  async getAccounts(): Promise<readonly IAccount[]> {
    const accounts: IAccount[] = [];

    for (let i = 0; i < this.privateKeys.length; i++) {
      const account = await this.getAccountByIndex(i);
      accounts.push(account);
    }

    return accounts;
  }

  async getAccountByIndex(index: number): Promise<IAccount> {
    if (index < 0 || index >= this.privateKeys.length) {
      throw new Error(`Invalid account index: ${index}`);
    }

    const privateKey = this.privateKeys[index];
    const publicKey = privateKey.toPublicKey(this.config.publicKeyConfig);
    const address = this.deriveAddress(publicKey, index);

    return {
      address,
      publicKey,
      hdPath: privateKey.hdPath?.toString(),
      algorithm: this.config.privateKeyConfig?.algorithm || 'secp256k1'
    };
  }

  async signByIndex(data: Uint8Array, index = 0): Promise<ISignature> {
    if (index < 0 || index >= this.privateKeys.length) {
      throw new Error(`Invalid key index: ${index}`);
    }

    return this.privateKeys[index].sign(data);
  }

  async hasAccount(address: string): Promise<boolean> {
    const accounts = await this.getAccounts();
    return accounts.some(account => account.address === address);
  }

  async getAccountIndex(address: string): Promise<number> {
    const accounts = await this.getAccounts();
    const index = accounts.findIndex(account => account.address === address);

    if (index === -1) {
      throw new Error(`Account not found: ${address}`);
    }

    return index;
  }

  protected abstract deriveAddress(publicKey: IPublicKey, index: number): string;
}

// Concrete HD wallet implementation
class NetworkHDWallet extends BaseWallet implements IHDWallet {
  protected deriveAddress(publicKey: IPublicKey, index: number): string {
    const strategy = this.getAddressStrategy();
    const derivation = this.config.derivations[index] || this.config.derivations[0];

    const addressBytes = strategy.hash(publicKey.toBytes());
    return strategy.encode(addressBytes, derivation.prefix);
  }

  private getAddressStrategy(): IAddressStrategy {
    const strategy = this.config.addressConfig.strategy;

    if (typeof strategy === 'string') {
      return getRegisteredStrategy(strategy);
    }

    return strategy;
  }

  static async fromMnemonic(mnemonic: string, config: IWalletConfig): Promise<NetworkHDWallet> {
    // Validate mnemonic
    if (!validateMnemonic(mnemonic)) {
      throw new Error('Invalid mnemonic');
    }

    // Derive private keys from mnemonic
    const privateKeys = await this.derivePrivateKeysFromMnemonic(mnemonic, config);

    return new NetworkHDWallet(privateKeys, config);
  }

  static async fromPrivateKey(privateKeyHex: string, config: IWalletConfig): Promise<NetworkHDWallet> {
    const privateKey = await PrivateKey.fromHex(privateKeyHex, config.privateKeyConfig);
    return new NetworkHDWallet([privateKey], config);
  }

  static async random(config: IWalletConfig): Promise<NetworkHDWallet> {
    const mnemonic = generateMnemonic();
    return this.fromMnemonic(mnemonic, config);
  }
}
```

### Key Design Benefits

1. **Network Agnostic**: Same interface works across different blockchain networks
2. **Pluggable Strategies**: Easy to add support for new address formats
3. **Configuration Driven**: Network-specific behavior through configuration
4. **Type Safety**: Strong typing for all wallet operations
5. **Extensibility**: Easy to add new wallet types or signing methods
6. **Testing**: Each component can be tested independently

## Common Interfaces and Abstractions

### Core Interface Design Principles

1. **Generic Type Parameters**: Use generics to make interfaces adaptable to different blockchain types
2. **Separation of Concerns**: Each interface has a single, well-defined responsibility
3. **Composition over Inheritance**: Combine simple interfaces to create complex functionality
4. **Async by Default**: All operations are asynchronous to support network calls
5. **Error Handling**: Consistent error handling patterns across all interfaces

### 1. Query Client Interface

```typescript
// The existing base IQueryClient interface from @interchainjs/types
interface IQueryClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  readonly endpoint: string;
}

// Network-specific extensions build upon the base interface
interface ICosmosQueryClient extends IQueryClient {
  // Connection management (inherited from IQueryClient)

  // Basic info methods
  getStatus(): Promise<ChainStatus>;
  getAbciInfo(): Promise<AbciInfo>;
  getHealth(): Promise<HealthResult>;
  getNetInfo(): Promise<NetInfo>;

  // Block query methods
  getBlock(height?: number): Promise<Block>;
  getBlockByHash(hash: string): Promise<Block>;
  getBlockResults(height?: number): Promise<BlockResults>;
  searchBlocks(params: BlockSearchParams): Promise<SearchBlocksResult>;
  getBlockchain(minHeight?: number, maxHeight?: number): Promise<BlockchainInfo>;
  getHeader(height?: number): Promise<BlockHeader>;
  getHeaderByHash(hash: string): Promise<BlockHeader>;
  getCommit(height?: number): Promise<Commit>;

  // Transaction query methods
  getTx(hash: string, prove?: boolean): Promise<TxResponse>;
  searchTxs(params: TxSearchParams): Promise<SearchTxsResult>;
  getUnconfirmedTxs(limit?: number): Promise<UnconfirmedTxs>;
  getNumUnconfirmedTxs(): Promise<NumUnconfirmedTxs>;

  // Broadcasting methods
  broadcastTxSync(params: BroadcastTxParams): Promise<BroadcastTxSyncResponse>;
  broadcastTxAsync(params: BroadcastTxParams): Promise<BroadcastTxAsyncResponse>;
  broadcastTxCommit(params: BroadcastTxParams): Promise<BroadcastTxCommitResponse>;
  checkTx(params: CheckTxParams): Promise<CheckTxResponse>;

  // Chain queries
  getValidators(height?: number, page?: number, perPage?: number): Promise<ValidatorSet>;
  getConsensusParams(height?: number): Promise<ConsensusParams>;
  getConsensusState(): Promise<ConsensusState>;
  getGenesis(): Promise<Genesis>;

  // ABCI queries
  queryAbci(params: AbciQueryParams): Promise<AbciQueryResult>;
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

  // Account queries
  getBaseAccount(address: string): Promise<BaseAccount | null>;

  // Protocol info
  getProtocolInfo(): ProtocolInfo;
}

// Example for other networks following the same pattern
interface IEthereumQueryClient extends IQueryClient {
  // Ethereum-specific methods
  getBalance(address: string, blockTag?: string): Promise<bigint>;
  getCode(address: string, blockTag?: string): Promise<string>;
  getLogs(filter: LogFilter): Promise<Log[]>;
  estimateGas(transaction: EthTxRequest): Promise<bigint>;
  getBlock(blockHashOrBlockTag: string): Promise<EthBlock>;
  getTransaction(hash: string): Promise<EthTx>;
}
```

### 2. Event Client Interface

```typescript
// The existing base IEventClient interface from @interchainjs/types
interface IEventClient {
  subscribeToEvents<TEvent>(eventType: string, filter?: unknown): AsyncIterable<TEvent>;
  unsubscribeFromAll(): Promise<void>;
}

// Network-specific extensions build upon the base interface
interface ICosmosEventClient extends IEventClient {
  // Connection management
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;

  // Subscription methods
  subscribeNewBlock(): AsyncIterable<BlockEvent>;
  subscribeNewBlockHeader(): AsyncIterable<BlockEvent>;
  subscribeTx(query?: string): AsyncIterable<TxEvent>;
  subscribeValidatorSetUpdates(): AsyncIterable<ValidatorSetUpdateEvent>;

  // Custom subscriptions (inherited from IEventClient)
  subscribeToEvents<T>(eventType: string, filter?: unknown): AsyncIterable<T>;

  // Additional subscription management
  unsubscribe(subscriptionId: string): Promise<void>;
  unsubscribeFromAll(): Promise<void>;
}

// Example for other networks following the same pattern
interface IEthereumEventClient extends IEventClient {
  // Connection management
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;

  // Ethereum-specific subscriptions
  subscribeNewHeads(): AsyncIterable<EthBlockHeader>;
  subscribeLogs(filter: LogFilter): AsyncIterable<EthLog>;
  subscribePendingTransactions(): AsyncIterable<string>;

  // Custom subscriptions (inherited from IEventClient)
  subscribeToEvents<T>(eventType: string, filter?: unknown): AsyncIterable<T>;
  unsubscribeFromAll(): Promise<void>;
}

// Event filter interfaces
interface EventFilter {
  [key: string]: unknown;
}

interface LogFilter extends EventFilter {
  address?: string | string[];
  topics?: (string | string[] | null)[];
  fromBlock?: string | number;
  toBlock?: string | number;
}
```

### 3. Universal Signer Interface

```typescript
// The existing IUniSigner interface from @interchainjs/types
interface IUniSigner<
  TTxResp = unknown,
  TAccount extends IAccount = IAccount,
  TSignArgs = unknown,
  TBroadcastOpts = unknown,
  TBroadcastResponse extends IBroadcastResult<TTxResp> = IBroadcastResult<TTxResp>,
> {
  // Account management
  getAccounts(): Promise<readonly TAccount[]>;

  // Core signing methods
  signArbitrary(data: Uint8Array, index?: number): Promise<ICryptoBytes>;

  // Transaction flow
  sign(args: TSignArgs): Promise<ISigned<TBroadcastOpts, TBroadcastResponse>>;
  broadcast(signed: ISigned<TBroadcastOpts, TBroadcastResponse>, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
  signAndBroadcast(args: TSignArgs, options?: TBroadcastOpts): Promise<TBroadcastResponse>;

  // Raw broadcast (for pre-signed transactions)
  broadcastArbitrary(data: Uint8Array, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
}

// The existing ISigned interface from @interchainjs/types
interface ISigned<BroadcastOpts, BroadcastResponse> {
  // Signature details
  signature: ICryptoBytes;

  // Built-in broadcast capability
  broadcast(options?: BroadcastOpts): Promise<BroadcastResponse>;
}

// Network-specific signer interfaces extend IUniSigner
interface ICosmosSigner extends IUniSigner<
  TxResponse,
  AccountData,
  CosmosSignArgs,
  CosmosBroadcastOptions,
  CosmosBroadcastResponse
> {
  // Cosmos-specific methods
  getAddresses(): Promise<string[]>;
  getChainId(): Promise<string>;
  getAccountNumber(address: string): Promise<bigint>;
  getSequence(address: string): Promise<bigint>;

  // Offline signer detection methods
  isOfflineSigner(): boolean;
  isOfflineAminoSigner(): boolean;
  isOfflineDirectSigner(): boolean;

  // Offline signing methods
  signDirect(signerAddress: string, signDoc: SignDoc): Promise<{
    signed: SignDoc;
    signature: Uint8Array;
  }>;
  signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<{
    signed: StdSignDoc;
    signature: Uint8Array;
  }>;
}

// Example for other networks following the same pattern
interface IEthereumSigner extends IUniSigner<
  EthTxResponse,
  EthAccount,
  EthSignArgs,
  EthBroadcastOptions,
  EthBroadcastResponse
> {
  // Ethereum-specific methods
  getNonce(address: string): Promise<number>;
  getGasPrice(): Promise<bigint>;

  // EIP-712 signing
  signTypedData?(domain: TypedDataDomain, types: TypedDataTypes, value: Record<string, unknown>): Promise<string>;
}
```

### 4. Protocol Adapter Interface

```typescript
// The existing IProtocolAdapter interface pattern from the cosmos implementation
interface IProtocolAdapter {
  getVersion(): ProtocolVersion;
  getSupportedMethods(): Set<RpcMethod>;
  getCapabilities(): ProtocolCapabilities;
  encodeParams(method: RpcMethod, params: any): any;
  decodeResponse(method: RpcMethod, response: any): any;
  encodeBytes(data: string): Uint8Array;
  decodeBytes(data: Uint8Array): string;
}

// Network-specific adapter interfaces extend the base pattern
interface ICosmosProtocolAdapter extends IProtocolAdapter {
  // Cosmos-specific encoding/decoding methods
  encodeStatus(params: StatusParams): any;
  decodeStatus(response: any): StatusResponse;
  encodeBlock(params: BlockParams): any;
  decodeBlock(response: any): BlockResponse;
  encodeTx(params: TxParams): any;
  decodeTx(response: any): TxResponse;
  encodeAbciQuery(params: AbciQueryParams): any;
  decodeAbciQuery(response: any): AbciQueryResult;
  // ... other method-specific encoders/decoders
}

// Example for other networks following the same pattern
interface IEthereumProtocolAdapter extends IProtocolAdapter {
  // Ethereum-specific encoding/decoding methods
  encodeGetBalance(params: GetBalanceParams): any;
  decodeGetBalance(response: any): bigint;
  encodeGetBlock(params: GetBlockParams): any;
  decodeGetBlock(response: any): EthBlock;
  encodeGetTransaction(params: GetTransactionParams): any;
  decodeGetTransaction(response: any): EthTransaction;
  // ... other method-specific encoders/decoders
}

// Factory function pattern for creating adapters
interface IProtocolAdapterFactory<T extends IProtocolAdapter> {
  createAdapter(version?: string): T;
  detectVersion(endpoint: string): Promise<string>;
  getSupportedVersions(): string[];
}
```

### 5. Configuration Interfaces

```typescript
// Generic configuration interfaces
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

interface IWalletConfig {
  // Cryptographic settings
  algorithm: string;
  compressed?: boolean;

  // Derivation settings
  derivationPaths: Array<{
    path: string;
    prefix: string;
  }>;

  // Address strategy
  addressStrategy: string | IAddressStrategy;

  // Network-specific settings
  networkConfig: INetworkConfig;
}
```

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

### Key Design Benefits

1. **Type Safety**: Strong typing with generics for network-specific types
2. **Flexibility**: Interfaces can be adapted to different blockchain architectures
3. **Composability**: Small interfaces can be combined for complex functionality
4. **Testability**: Each interface can be mocked independently
5. **Extensibility**: Easy to add new methods or capabilities
6. **Consistency**: Common patterns across different network implementations

## Error Handling Patterns

### 1. Error Hierarchy

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

### 2. Specific Error Types

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

### 3. Error Handling in RPC Clients

```typescript
export class HttpRpcClient implements IRpcClient {
  async call<TRequest, TResponse>(
    method: string,
    params?: TRequest
  ): Promise<TResponse> {
    try {
      const controller = new AbortController();
      const timeout = this.getTimeout();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(this.getUrl(), {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(request),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new NetworkError(`HTTP ${response.status}: ${response.statusText}`);
      }

      const jsonResponse = await response.json();

      if (jsonResponse.error) {
        throw new NetworkError(`RPC Error: ${jsonResponse.error.message}`, jsonResponse.error);
      }

      return jsonResponse.result;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        throw new TimeoutError(`Request timed out after ${this.getTimeout()}ms`);
      }
      if (error instanceof NetworkError) {
        throw error;
      }
      if (error.name === 'SyntaxError') {
        throw new ParseError(`Failed to parse JSON response: ${error.message}`, error);
      }
      throw new NetworkError(`Request failed: ${error.message}`, error);
    }
  }
}
```

## Testing Strategies

### 1. Testing Structure

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

### 2. Unit Testing Patterns

#### Mock-Based Testing

```typescript
describe('CosmosQueryClient', () => {
  let client: CosmosQueryClient;
  let mockRpcClient: jest.Mocked<HttpRpcClient>;
  let adapter: Comet38Adapter;

  beforeEach(() => {
    mockRpcClient = {
      call: jest.fn(),
      connect: jest.fn(),
      disconnect: jest.fn(),
      isConnected: jest.fn().mockReturnValue(true),
      endpoint: 'http://localhost:26657'
    } as any;

    adapter = new Comet38Adapter();
    client = new CosmosQueryClient(mockRpcClient, adapter);
  });

  describe('getStatus', () => {
    it('should return chain status', async () => {
      const mockResponse = {
        node_info: {
          network: 'cosmoshub-4',
          version: '0.38.0'
        },
        sync_info: {
          latest_block_height: '12345'
        }
      };

      mockRpcClient.call.mockResolvedValue(mockResponse);

      const status = await client.getStatus();

      expect(mockRpcClient.call).toHaveBeenCalledWith(RpcMethod.STATUS);
      expect(status.nodeInfo.network).toBe('cosmoshub-4');
      expect(status.syncInfo.latestBlockHeight).toBe(12345);
    });
  });
});
```

#### Workflow Testing

```typescript
describe('DirectWorkflow', () => {
  let mockSigner: jest.Mocked<ICosmosSigner>;
  let mockQueryClient: jest.Mocked<ICosmosQueryClient>;

  beforeEach(() => {
    mockQueryClient = {
      getBaseAccount: jest.fn(),
      broadcastTxSync: jest.fn(),
    } as any;

    mockSigner = {
      getAccounts: jest.fn(),
      signDirect: jest.fn(),
      getChainId: jest.fn().mockResolvedValue('cosmoshub-4'),
      getAccountNumber: jest.fn().mockResolvedValue(BigInt(123)),
      getSequence: jest.fn().mockResolvedValue(BigInt(456)),
    } as any;
  });

  it('should build and sign transaction', async () => {
    const signArgs: CosmosSignArgs = {
      messages: [{
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: { fromAddress: 'cosmos1...', toAddress: 'cosmos2...', amount: [{ denom: 'uatom', amount: '1000' }] }
      }],
      fee: { amount: [{ denom: 'uatom', amount: '500' }], gas: '200000' },
      memo: 'test transaction'
    };

    mockSigner.signDirect.mockResolvedValue({
      signed: {} as SignDoc,
      signature: new Uint8Array([1, 2, 3, 4])
    });

    const workflow = new DirectWorkflow(mockSigner, signArgs);
    const tx = await workflow.build();

    expect(tx).toBeDefined();
    expect(tx.signature).toEqual(new Uint8Array([1, 2, 3, 4]));
  });
});
```

### 3. Integration Testing with Starship

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
  let queryClient: ICosmosQueryClient;
  let signer: DirectSigner;
  let wallet: Secp256k1HDWallet;

  beforeAll(async () => {
    const { getRpcEndpoint } = useChain('osmosis');
    const rpcEndpoint = await getRpcEndpoint();

    queryClient = await ClientFactory.createQueryClient(rpcEndpoint);

    const mnemonic = generateMnemonic();
    wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
      derivations: [{ hdPath: "m/44'/118'/0'/0/0", prefix: 'osmo' }]
    });

    signer = new DirectSigner(wallet, {
      queryClient,
      chainId: 'osmosis-1',
      gasPrice: '0.025uosmo'
    });
  });

  it('should transfer tokens successfully', async () => {
    const accounts = await wallet.getAccounts();
    const fromAddress = accounts[0].address;
    const toAddress = accounts[1]?.address || fromAddress;

    const message = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: MsgSend.fromPartial({
        fromAddress,
        toAddress,
        amount: [{ denom: 'uosmo', amount: '1000' }]
      })
    };

    const result = await signer.signAndBroadcast(
      { messages: [message], fee: 'auto', memo: 'test transfer' }
    );

    expect(result.transactionHash).toBeDefined();
    expect(result.code).toBe(0);
  }, 60000);
});
```

### 4. Jest Configuration

#### Unit Tests

```javascript
// jest.src.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: {
        allowJs: true,
        esModuleInterop: true,
        moduleResolution: 'node',
        target: 'es2020',
        module: 'commonjs'
      }
    }]
  },
  testTimeout: 60000,
  verbose: true
};
```

#### Integration Tests

```javascript
// jest.starship.config.js
module.exports = {
  testTimeout: 15000,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(/starship/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      babelConfig: false,
      tsconfig: 'tsconfig.json',
    }],
  },
  transformIgnorePatterns: [`/node_modules/*`],
  modulePathIgnorePatterns: ['<rootDir>/dist/']
};
```

## Configuration Management

### 1. Network Configuration Structure

```typescript
// Network-specific configuration interface
export interface NetworkConfig {
  // Chain identification
  chainId: string;
  chainName: string;
  networkType: 'mainnet' | 'testnet' | 'devnet';

  // Protocol settings
  protocolVersion?: ProtocolVersion;
  addressPrefix: string;

  // Default endpoints
  rpcEndpoints: string[];
  restEndpoints?: string[];

  // Gas and fee settings
  gasPrice: string;
  gasMultiplier?: number;

  // Derivation settings
  hdPath: string;
  coinType: number;

  // Feature flags
  features: {
    directSigning: boolean;
    aminoSigning: boolean;
    eip712Signing?: boolean;
  };
}

// Configuration factory
export function createNetworkConfig(overrides: Partial<NetworkConfig>): NetworkConfig {
  const defaults: NetworkConfig = {
    chainId: '',
    chainName: '',
    networkType: 'mainnet',
    addressPrefix: 'cosmos',
    rpcEndpoints: [],
    gasPrice: '0.025uatom',
    gasMultiplier: 1.3,
    hdPath: "m/44'/118'/0'/0/0",
    coinType: 118,
    features: {
      directSigning: true,
      aminoSigning: true
    }
  };

  return { ...defaults, ...overrides };
}
```

### 2. Environment-Based Configuration

```typescript
// Environment configuration
export interface EnvironmentConfig {
  development: NetworkConfig;
  staging: NetworkConfig;
  production: NetworkConfig;
}

// Configuration loader
export class ConfigLoader {
  private static configs = new Map<string, NetworkConfig>();

  static register(networkName: string, config: NetworkConfig): void {
    this.configs.set(networkName, config);
  }

  static get(networkName: string): NetworkConfig {
    const config = this.configs.get(networkName);
    if (!config) {
      throw new Error(`Network configuration not found: ${networkName}`);
    }
    return config;
  }

  static loadFromEnvironment(networkName: string): NetworkConfig {
    const env = process.env.NODE_ENV || 'development';
    const configKey = `${networkName}_${env.toUpperCase()}`;

    return {
      chainId: process.env[`${configKey}_CHAIN_ID`] || '',
      chainName: networkName,
      networkType: env as any,
      addressPrefix: process.env[`${configKey}_ADDRESS_PREFIX`] || 'cosmos',
      rpcEndpoints: (process.env[`${configKey}_RPC_ENDPOINTS`] || '').split(','),
      gasPrice: process.env[`${configKey}_GAS_PRICE`] || '0.025uatom',
      hdPath: process.env[`${configKey}_HD_PATH`] || "m/44'/118'/0'/0/0",
      coinType: parseInt(process.env[`${configKey}_COIN_TYPE`] || '118'),
      features: {
        directSigning: process.env[`${configKey}_DIRECT_SIGNING`] !== 'false',
        aminoSigning: process.env[`${configKey}_AMINO_SIGNING`] !== 'false'
      }
    };
  }
}
```

### 3. Configuration Usage Examples

```typescript
// Register network configurations
ConfigLoader.register('cosmos', createNetworkConfig({
  chainId: 'cosmoshub-4',
  chainName: 'Cosmos Hub',
  addressPrefix: 'cosmos',
  rpcEndpoints: ['https://rpc.cosmos.network'],
  gasPrice: '0.025uatom',
  coinType: 118
}));

ConfigLoader.register('osmosis', createNetworkConfig({
  chainId: 'osmosis-1',
  chainName: 'Osmosis',
  addressPrefix: 'osmo',
  rpcEndpoints: ['https://rpc.osmosis.zone'],
  gasPrice: '0.025uosmo',
  coinType: 118
}));

// Usage in client creation
async function createCosmosClient(networkName: string): Promise<{
  queryClient: ICosmosQueryClient;
  signer: DirectSigner;
}> {
  const config = ConfigLoader.get(networkName);

  const queryClient = await ClientFactory.createQueryClient(
    config.rpcEndpoints[0],
    { protocolVersion: config.protocolVersion }
  );

  const walletConfig = createCosmosConfig(
    [{ hdPath: config.hdPath, prefix: config.addressPrefix }]
  );

  const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, walletConfig);

  const signer = new DirectSigner(wallet, {
    queryClient,
    chainId: config.chainId,
    gasPrice: config.gasPrice,
    gasMultiplier: config.gasMultiplier
  });

  return { queryClient, signer };
}
```

## Implementation Checklist

When implementing a new blockchain network following this architectural guide:

### Core Architecture

- [ ] **Define Network Types**: Create TypeScript types for blocks, transactions, accounts, and network-specific data structures
- [ ] **Protocol Adapter**: Implement `IProtocolAdapter` for your network's RPC protocol and data formats
- [ ] **Query Client**: Implement `IQueryClient` interface with network-specific query methods
- [ ] **Event Client**: Implement `IEventClient` for real-time event subscriptions (if supported)

### Cryptographic Layer

- [ ] **Address Strategy**: Implement `IAddressStrategy` for your network's address format
- [ ] **Wallet Configuration**: Create configuration factory with network-specific defaults
- [ ] **HD Wallet**: Implement `IHDWallet` interface with proper key derivation
- [ ] **Signing Strategies**: Implement signing strategies for your network's transaction formats

### Transaction System

- [ ] **Signer Interface**: Implement `IUniversalSigner` with network-specific type parameters
- [ ] **Workflow Plugins**: Create or adapt workflow plugins for transaction building steps
- [ ] **Signing Modes**: Support all signing modes used by your network (protobuf, JSON, EIP-712, etc.)
- [ ] **Fee Estimation**: Implement fee estimation and gas calculation logic

### Communication Layer

- [ ] **RPC Client**: Use existing `IRpcClient` implementations or create network-specific ones
- [ ] **Error Handling**: Implement network-specific error types extending base error classes
- [ ] **Connection Management**: Handle connection lifecycle, retries, and failover

### Configuration System

- [ ] **Network Config**: Define `INetworkConfig` structure with all network parameters
- [ ] **Environment Support**: Support multiple environments with different configurations
- [ ] **Validation**: Implement configuration validation and default value handling

### Testing Strategy

- [ ] **Unit Tests**: Test each component in isolation with comprehensive mocking
- [ ] **Integration Tests**: Test against live network or local test environment
- [ ] **Type Tests**: Ensure type safety and proper generic type inference
- [ ] **Error Scenarios**: Test error handling and edge cases

### Documentation & Examples

- [ ] **API Documentation**: Document all public interfaces and their usage
- [ ] **Usage Examples**: Provide examples for common operations
- [ ] **Migration Guide**: If replacing existing implementation, provide migration path
- [ ] **Network Guide**: Document network-specific features and limitations

### Quality Assurance

- [ ] **Code Review**: Ensure code follows established patterns and conventions
- [ ] **Performance Testing**: Verify performance meets requirements
- [ ] **Security Review**: Review cryptographic operations and key handling
- [ ] **Compatibility Testing**: Test with different network versions and configurations

## Conclusion

This architectural guide provides a framework for implementing blockchain network support that is:

- **Modular**: Each component has a single responsibility and can be developed independently
- **Extensible**: New features and networks can be added without breaking existing code
- **Type-Safe**: Strong TypeScript typing prevents runtime errors and improves developer experience
- **Testable**: Clear separation of concerns enables comprehensive testing
- **Maintainable**: Consistent patterns and interfaces make the codebase easy to understand and modify

By following these patterns and principles, you can create robust, scalable blockchain network implementations that integrate seamlessly with the InterchainJS ecosystem while maintaining the flexibility to adapt to each network's unique characteristics and requirements.

The key to success is to start with the interfaces and work backwards to the implementation, ensuring that each layer properly abstracts the complexity of the layer below while providing a clean, consistent API to the layer above.
