# Architecture Thoughts

## Main Focus
The primary focus is designing and implementing a unified interface across different blockchain networks in the `networks/` folder.

## Goals
Design a unified interface that abstracts common blockchain operations across different networks:
- **Signing & Broadcasting**: Common interface for transaction signing and submission
- **Query Clients**: Standardized data retrieval patterns
- **Wallet Management**: Consistent wallet creation and management
- **Extensibility**: Easy integration of new chains (Bitcoin, Solana, etc.)

The abstraction should capture similar concepts across chains (currently Cosmos and Ethereum, Solona and bitcoins in the future) while allowing network-specific implementations.

## Current Status

### ✅ Cosmos Network (networks/cosmos)
- **Status**: Mostly complete with good abstraction patterns
- **Components**:
  - AminoSigner (implements UniSigner for Amino signing)
  - DirectSigner (implements UniSigner for Direct/Protobuf signing)
  - Query client capabilities
  - Wallet management
- **Issues**:
  -Query methods mixed with signing client, needs separation
  -Wallet may not perfect yet, more cypto ways need to support maybe


### 🚧 Ethereum Network (networks/ethereum)
- **Status**: High priority - needs significant refactoring
- **Components**: Basic transaction signing exists
- **Issues**: Poor abstraction, needs architectural alignment with unified interface

### ⏸️ Injective Network (networks/injective)
- **Status**: Low priority - partial implementation
- **Components**: Cosmos-compatible signing (Amino/Direct)
- **Issues**: Limited to signing functionality

## Architecture Components

### 1. Signers (Transaction Signing & Broadcasting)
Universal interface for signing and broadcasting transactions across all chains:

#### Cosmos Implementation
- **Current**: `signAndBroadcast` method in `networks/cosmos/signing-client.ts`
- **Supports**: Amino and Direct signing modes
- **Status**: Implemented and functional

#### Ethereum Implementation
- **Current**: Basic `sendTransaction` functionality
- **Needs**: Proper abstraction to align with unified interface
- **Status**: Requires refactoring

### 2. Query Clients (Data Retrieval)
Standardized interface for retrieving blockchain data:

#### Cosmos Query Client
- **Target**: Support all Tendermint RPC methods ([reference](https://rpc-docs.osmosis.zone/))
- **Current Issue**: Query methods mixed into signing client (`networks/cosmos/signing-client.ts`)
- **Proposed Solution**:
  - Create dedicated `QueryClient` interface
  - Implement protocol-specific clients (HTTP, gRPC, WebSocket)
  - Separate concerns between signing and querying

#### Ethereum Query Client
- **Equivalent**: JSON-RPC methods (eth_getBalance, eth_getTransactionReceipt, etc.)
- **Note**: Different from Tendermint RPC but serves similar purpose
- **Needs**: Unified abstraction layer

## Proposed Architecture

```
UniSigner<SignArgs, Tx, Doc> (core interface)
├── Cosmos Implementations
│   ├── AminoSigner implements UniSigner<CosmosSignArgs, CosmosTx, AminoDoc>
│   └── DirectSigner implements UniSigner<CosmosSignArgs, CosmosTx, DirectDoc>
├── Ethereum Implementations
│   └── EthereumSigner implements UniSigner<EthSignArgs, EthTx, EthDoc>
└── [Future: BitcoinSigner, SolanaSigner]

Backward Compatibility Layers
├── SigningClient (wraps UniSigner for CosmJS compatibility)
└── EthersAdapter (wraps UniSigner for ethers.js compatibility)

IQueryClient (interface)
├── CosmosQueryClient
│   ├── HTTPQueryClient
│   ├── gRPCQueryClient
│   └── WebSocketQueryClient
├── EthereumQueryClient
│   └── JSONRPCClient
└── [Future: Other chain query clients]
```

## UniSigner Thoughts (Refined)

### Core Design Principles
1. **Chain-Agnostic**: Core interface should work across all blockchain types
2. **Type-Safe**: Leverage TypeScript generics for compile-time safety
3. **Composable**: Each operation should be independently usable
4. **Backward Compatible**: Should integrate with existing ecosystem tools
5. **Extensible**: Easy to add new chains without breaking existing implementations

### Type Parameters
```typescript
// Base account interface - common across all chains
interface IAccount {
  address: string;         // Chain-specific address format
  pubkey?: IKey;          // Optional public key
  algo?: string;          // Key algorithm (secp256k1, ed25519, etc.)
}

// Chain-specific extensions
interface ICosmosAccount extends IAccount {
  accountNumber: bigint;
  sequence: bigint;
  pubkey: IKey;           // Required for Cosmos
}

interface IEthereumAccount extends IAccount {
  nonce?: bigint;
  chainId: number;
}

// Generic type parameters for UniSigner
TAccount = IAccount                    // Account info returned by getAccount()
TSignArgs = unknown                    // Chain-specific signing arguments
TSignature = ISignature               // Unified signature interface (see below)
TBroadcastOpts = IBroadcastOptions    // Chain-specific broadcast options
TBroadcastResponse = IBroadcastResult // Unified broadcast response
```

### Unified Signature Interface
```typescript
interface ISignature {
  // Common properties across all chains
  data: Uint8Array;       // Raw signature bytes

  // Chain-specific validation
  verify(message: Uint8Array, publicKey: IKey): Promise<boolean>;

  // Serialization
  toHex(): string;
  toBase64(): string;
}

// Chain-specific implementations
class CosmosSignature implements ISignature { ... }
class EthereumSignature implements ISignature { ... }
class BitcoinSignature implements ISignature { ... }
```

### The ISigned Interface
```typescript
interface ISigned<BroadcastOpts, BroadcastResponse> {
  // Signature details
  signature: ISignature;

  // Built-in broadcast capability
  broadcast(options?: BroadcastOpts): Promise<BroadcastResponse>;
}
```

### Unified Broadcast Response
```typescript
interface IBroadcastResult {
  // Common fields
  transactionHash: string;  // Universal transaction identifier

  // Chain-specific data preserved
  rawResponse: unknown;    // Original chain response
}
```

### Simplified UniSigner Interface
```typescript
interface UniSigner<
  TAccount extends IAccount = IAccount,
  TSignArgs = unknown,
  TBroadcastOpts extends IBroadcastOptions = IBroadcastOptions,
  TBroadcastResponse extends IBroadcastResult = IBroadcastResult
> {
  // Account management
  getAccount(): Promise<TAccount>;

  // Core signing methods
  signArbitrary(data: Uint8Array): Promise<ISignature>;

  // Transaction flow
  sign(args: TSignArgs): Promise<ISigned<TBroadcastOpts, TBroadcastResponse>>;
  broadcast(signed: ISigned<TBroadcastOpts, TBroadcastResponse>, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
  signAndBroadcast(args: TSignArgs, options?: TBroadcastOpts): Promise<TBroadcastResponse>;

  // Raw broadcast (for pre-signed transactions)
  broadcastArbitrary(data: Uint8Array, options?: TBroadcastOpts): Promise<TBroadcastResponse>;
}
```

### Static Connection Pattern
```typescript
interface ConnectionOptions {
  rpcEndpoint?: string;
  chainId?: string;
  hdPath?: string;
  addressPrefix?: string;  // Cosmos
  networkId?: number;      // Ethereum
  // Chain-specific options...
}

// Each signer implementation provides a static connect method
class CosmosSigner implements UniSigner<ICosmosAccount, CosmosSignArgs> {
  static async connect(options: ConnectionOptions): Promise<CosmosSigner> {
    // Initialize and return signer instance
  }
}

class EthereumSigner implements UniSigner<IEthereumAccount, EthTransactionRequest> {
  static async connect(options: ConnectionOptions): Promise<EthereumSigner> {
    // Initialize and return signer instance
  }
}
```

### Implementation Examples

#### Cosmos Implementation
```typescript
class DirectSigner implements UniSigner<ICosmosAccount, CosmosSignArgs> {
  static async connect(options: ConnectionOptions): Promise<DirectSigner> {
    // Connection logic
    const signer = new DirectSigner();
    await signer.initialize(options);
    return signer;
  }

  async sign(args: CosmosSignArgs): Promise<ISigned<CosmosBroadcastOpts, CosmosBroadcastResponse>> {
    // Build sign doc internally
    const signDoc = await this.buildSignDoc(args);
    const signature = await this.signDirectDoc(signDoc);

    return {
      signature,
      broadcast: async (opts) => this.broadcast(this.buildTx(signDoc, signature), opts)
    };
  }

  private async buildSignDoc(args: CosmosSignArgs): Promise<DirectSignDoc> {
    // Internal method to construct sign doc from args
  }
}
```

#### Ethereum Implementation
```typescript
class EthereumSigner implements UniSigner<IEthereumAccount, EthTransactionRequest> {
  static async connect(options: ConnectionOptions): Promise<EthereumSigner> {
    // Connection logic
    const signer = new EthereumSigner(rpc);
    await signer.initialize(options);
    return signer;
  }

  async sign(args: EthTransactionRequest): Promise<ISigned<EthBroadcastOpts, EthBroadcastResponse>> {
    const tx = await this.populateTransaction(args);
    const signature = await this.signTransaction(tx);

    return {
      signature,
      broadcast: async (opts) => this.provider.sendTransaction(tx)
    };
  }
}
```

### Usage Examples

#### Cosmos Usage
```typescript
// 1. Initialize signer
const signer = await DirectSigner.connect({
  rpcEndpoint: 'https://rpc.cosmos.network',
  chainId: 'cosmoshub-4',
  mnemonic: 'your mnemonic here'
});

// 2. Get account info
const account = await signer.getAccount();
console.log(`Address: ${account.address}`);
console.log(`Account Number: ${account.accountNumber}`);

// 3. Build transaction arguments
const sendArgs = {
  messages: [{
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: account.address,
      toAddress: 'cosmos1recipient...',
      amount: [{ denom: 'uatom', amount: '1000000' }]
    }
  }],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000'
  },
  memo: 'Test transaction'
};

// 4. Sign transaction (returns ISigned)
const signed = await signer.sign(sendArgs);

// 5. Optionally inspect before broadcast
console.log(`Signature: ${signed.signature.toHex()}`);

// 6. Broadcast using ISigned's built-in method
const result = await signed.broadcast({
  mode: 'sync',  // Cosmos-specific broadcast mode
  timeout: 30000
});

console.log(`Transaction confirmed: ${result.transactionHash}`);

// Alternative: Direct sign and broadcast
const quickResult = await signer.signAndBroadcast(sendArgs, { mode: 'async' });
console.log(`Tx hash: ${quickResult.transactionHash}`);
```

#### Ethereum Usage
```typescript
// 1. Initialize signer
const ethSigner = await EthereumSigner.connect({
  rpcEndpoint: 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID',
  networkId: 1,  // Mainnet
  privateKey: 'your-private-key' // or mnemonic
});

// 2. Get account info
const ethAccount = await ethSigner.getAccount();
console.log(`Address: ${ethAccount.address}`);
console.log(`Nonce: ${ethAccount.nonce}`);

// 3. Build transaction arguments
const ethTransferArgs = {
  to: '0xRecipientAddress...',
  value: parseEther('0.1'), // 0.1 ETH
  gasLimit: 21000,
  gasPrice: parseGwei('20')
};

// 4. Sign transaction
const ethSigned = await ethSigner.sign(ethTransferArgs);

// 5. Broadcast
const ethResult = await ethSigned.broadcast();
console.log(`Transaction hash: ${ethResult.transactionHash}`);

// Alternative: Direct sign and broadcast
const ethQuickResult = await ethSigner.signAndBroadcast(ethTransferArgs);
console.log(`Tx hash: ${ethQuickResult.transactionHash}`);

// ERC20 Token Transfer Example
const erc20TransferArgs = {
  to: '0xTokenContractAddress',
  data: Interface.from(ERC20_ABI).encodeFunctionData('transfer', [
    '0xRecipientAddress',
    parseUnits('100', 18) // 100 tokens with 18 decimals
  ]),
  gasLimit: 65000
};

const tokenTransfer = await ethSigner.signAndBroadcast(erc20TransferArgs);
console.log(`Token transfer tx: ${tokenTransfer.transactionHash}`);
```

### Summary of Key Simplifications

1. **Removed getAddress()**: The address is available through `getAccount()`, avoiding redundant methods.

2. **Hidden signDoc**: The sign document concept is internal to the signing process, not exposed in the interface.

3. **No Batch Operations**: Simplified to single transaction operations for now.

4. **Static Connect Pattern**: Simple static `connect` method instead of multiple builder methods.

5. **Cleaner Interface**: Focused on essential signing operations without unnecessary complexity.

### Benefits of This Design

1. **Simplicity**: Cleaner interface with only essential methods
2. **Flexibility**: Chain-specific details handled internally
3. **Type Safety**: Strong typing with generics
4. **Consistency**: Same pattern across all blockchain implementations
5. **Extensibility**: Easy to add new chains following the same pattern

### Implementation Priority

1. Define core interfaces (`IAccount`, `ISignature`, `ISigned`, `UniSigner`)
2. Implement Cosmos signer as reference implementation
3. Port Ethereum signer to new pattern
4. Add Injective and other chains
5. Create comprehensive test suite
6. Document migration path from existing code

## Action Items

1. **Create architecture.md** with:
   - Make sure this file is totally done. Before that we wouldn't proceed to next item.
   - Detailed interface definitions
   - Mermaid diagrams showing component relationships
   - Implementation guidelines for new chains

2. **Refactor Query Architecture**:
   - Extract query methods from signing clients
   - Define `IQueryClient` interface
   - Implement protocol-specific clients

3. **Ethereum Refactoring** (High Priority):
   - Align with unified interface patterns
   - Implement proper abstraction layers
   - Add comprehensive query client

4. **Documentation**:
   - Document interface contracts
   - Provide implementation examples
   - Create migration guides for existing code
