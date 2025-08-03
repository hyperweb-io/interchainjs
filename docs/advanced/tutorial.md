# Tutorial

This tutorial demonstrates how to use and extend signers in the InterchainJS ecosystem. We'll cover both using existing signers and implementing custom signers for different blockchain networks.

## Using Existing Signers

InterchainJS provides ready-to-use signers for major blockchain networks. These signers implement the `IUniSigner` interface and can work with both `IWallet` implementations and `OfflineSigner` interfaces.

### Quick Start with Cosmos

```typescript
import { DirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';

// Create wallet from mnemonic
const wallet = await Secp256k1HDWallet.fromMnemonic(
  "your twelve word mnemonic phrase here",
  {
    derivations: [{
      prefix: "cosmos",
      hdPath: HDPath.cosmos(0, 0, 0).toString(),
    }]
  }
);

// Create signer
const signer = new DirectSigner(wallet, {
  chainId: 'cosmoshub-4',
  queryClient: queryClient,
  addressPrefix: 'cosmos'
});

// Sign and broadcast transaction
const result = await signer.signAndBroadcast({
  messages: [/* your messages */],
  fee: { amount: [{ denom: 'uatom', amount: '1000' }], gas: '200000' }
});
```

## Implementing Custom Signers

When implementing custom signers, you'll need to understand the core interfaces and patterns used in InterchainJS.

### Core Interfaces

#### IUniSigner Interface

All signers implement the `IUniSigner` interface, which provides a consistent API across different blockchain networks:

```typescript
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
```

#### Authentication Patterns

Signers can be constructed with two types of authentication:

1. **IWallet**: Direct access to private keys for full control
2. **OfflineSigner**: External wallet integration for enhanced security

## Implementing Cosmos-Compatible Signers

When implementing signers for Cosmos-based networks, you can extend the existing base classes:

### Step 1: Extend BaseCosmosSigner

For Cosmos-compatible networks, extend the `BaseCosmosSigner` class:

```typescript
import { BaseCosmosSigner } from '@interchainjs/cosmos/signers/base-signer';
import { IUniSigner, IWallet } from '@interchainjs/types';
import {
  CosmosSignArgs,
  CosmosSignedTransaction,
  CosmosBroadcastOptions,
  CosmosBroadcastResponse,
  OfflineSigner
} from '@interchainjs/cosmos/signers/types';

export class CustomCosmosSigner extends BaseCosmosSigner {
  constructor(auth: OfflineSigner | IWallet, config: CosmosSignerConfig) {
    super(auth, config);
  }

  async sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction> {
    // Implement custom signing logic
    // Use this.workflow to handle the signing process
    return this.workflow.sign(args);
  }
}
```

### Step 2: Choose Authentication Method

Decide between `IWallet` (direct key access) or `OfflineSigner` (external wallet) based on your security requirements:

#### Using IWallet

```typescript
import { Secp256k1HDWallet } from '@interchainjs/cosmos';

// Create wallet
const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, config);

// Use with custom signer
const signer = new CustomCosmosSigner(wallet, signerConfig);
```

#### Using OfflineSigner

```typescript
// Get from external wallet
const offlineSigner = await window.keplr.getOfflineSigner(chainId);

// Use with custom signer
const signer = new CustomCosmosSigner(offlineSigner, signerConfig);
```

### Step 3: Implement Custom Workflow (Optional)

If you need custom transaction building logic, you can implement a custom workflow:

```typescript
import { DirectWorkflow } from '@interchainjs/cosmos/workflows/direct-workflow';

export class CustomWorkflow extends DirectWorkflow {
  async sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction> {
    // Custom pre-processing
    const processedArgs = this.preprocessArgs(args);

    // Use parent implementation
    const result = await super.sign(processedArgs);

    // Custom post-processing
    return this.postprocessResult(result);
  }

  private preprocessArgs(args: CosmosSignArgs): CosmosSignArgs {
    // Add custom logic here
    return args;
  }

  private postprocessResult(result: CosmosSignedTransaction): CosmosSignedTransaction {
    // Add custom logic here
    return result;
  }
}
```

### Step 4: Complete Signer Implementation

```typescript
export class CustomCosmosSigner extends BaseCosmosSigner {
  private customWorkflow: CustomWorkflow;

  constructor(auth: OfflineSigner | IWallet, config: CosmosSignerConfig) {
    super(auth, config);
    this.customWorkflow = new CustomWorkflow(this);
  }

  async sign(args: CosmosSignArgs): Promise<CosmosSignedTransaction> {
    return this.customWorkflow.sign(args);
  }

  // Add any custom methods specific to your network
  async customNetworkMethod(): Promise<any> {
    // Implementation specific to your blockchain
  }
}
```

## Implementing Non-Cosmos Signers

For networks that don't have existing base classes, you need to implement the `IUniSigner` interface directly. Here's how to create a custom signer for a new blockchain network:

### Step 1: Define Network-Specific Types

First, define the types specific to your blockchain network:

```typescript
// Define your network's transaction types
export interface CustomSignArgs {
  messages: CustomMessage[];
  fee?: CustomFee;
  memo?: string;
  options?: CustomOptions;
}

export interface CustomSignedTransaction {
  txBytes: Uint8Array;
  signature: ICryptoBytes;
  // Add any network-specific fields
}

export interface CustomBroadcastOptions {
  mode?: 'sync' | 'async' | 'commit';
  // Add network-specific options
}

export interface CustomBroadcastResponse extends IBroadcastResult {
  // Add network-specific response fields
}

export interface CustomAccountData extends IAccount {
  // Add network-specific account fields
}
```

### Step 2: Implement the Base Signer

```typescript
import { IUniSigner, IWallet, ICryptoBytes } from '@interchainjs/types';

export class CustomNetworkSigner implements IUniSigner<
  unknown, // TTxResp
  CustomAccountData, // TAccount
  CustomSignArgs, // TSignArgs
  CustomBroadcastOptions, // TBroadcastOpts
  CustomBroadcastResponse // TBroadcastResponse
> {
  constructor(
    private wallet: IWallet,
    private config: CustomSignerConfig
  ) {}

  async getAccounts(): Promise<readonly CustomAccountData[]> {
    const accounts = await this.wallet.getAccounts();
    return accounts.map(account => ({
      ...account,
      // Add custom account fields
    })) as CustomAccountData[];
  }

  async signArbitrary(data: Uint8Array, index?: number): Promise<ICryptoBytes> {
    return this.wallet.signByIndex(data, index);
  }

  async sign(args: CustomSignArgs): Promise<ISigned<CustomBroadcastOptions, CustomBroadcastResponse>> {
    // 1. Build transaction
    const txBytes = await this.buildTransaction(args);

    // 2. Sign transaction
    const signature = await this.wallet.signByIndex(txBytes, 0);

    // 3. Create signed transaction
    const signedTx: CustomSignedTransaction = {
      txBytes,
      signature
    };

    // 4. Return ISigned with broadcast capability
    return {
      signature,
      broadcast: async (options?: CustomBroadcastOptions) => {
        return this.broadcastArbitrary(txBytes, options);
      }
    };
  }

  async broadcast(
    signed: ISigned<CustomBroadcastOptions, CustomBroadcastResponse>,
    options?: CustomBroadcastOptions
  ): Promise<CustomBroadcastResponse> {
    return signed.broadcast(options);
  }

  async signAndBroadcast(
    args: CustomSignArgs,
    options?: CustomBroadcastOptions
  ): Promise<CustomBroadcastResponse> {
    const signed = await this.sign(args);
    return this.broadcast(signed, options);
  }

  async broadcastArbitrary(
    data: Uint8Array,
    options?: CustomBroadcastOptions
  ): Promise<CustomBroadcastResponse> {
    // Implement network-specific broadcasting logic
    const response = await this.config.queryClient.broadcastTx(data, options);

    return {
      transactionHash: response.hash,
      rawResponse: response,
      broadcastResponse: response,
      wait: async () => {
        // Implement transaction confirmation logic
        return this.config.queryClient.waitForTx(response.hash);
      }
    };
  }

  private async buildTransaction(args: CustomSignArgs): Promise<Uint8Array> {
    // Implement network-specific transaction building logic
    // This will vary significantly based on your blockchain's transaction format
    throw new Error('buildTransaction must be implemented');
  }
}
```

### Step 3: Usage Example

Here's how to use your custom signer:

```typescript
import { Secp256k1HDWallet } from '@interchainjs/auth';

// Create wallet for your custom network
const wallet = await Secp256k1HDWallet.fromMnemonic(
  "your mnemonic phrase",
  {
    derivations: [{
      prefix: "custom",
      hdPath: "m/44'/999'/0'/0/0", // Use your network's coin type
    }]
  }
);

// Create custom signer
const signer = new CustomNetworkSigner(wallet, {
  chainId: 'custom-network-1',
  queryClient: customQueryClient,
  // Add other network-specific configuration
});

// Use the signer
const result = await signer.signAndBroadcast({
  messages: [
    {
      type: 'custom/MsgTransfer',
      value: {
        from: 'custom1...',
        to: 'custom1...',
        amount: '1000000'
      }
    }
  ],
  fee: {
    amount: '1000',
    gas: '200000'
  }
});

console.log('Transaction hash:', result.transactionHash);
```

## Best Practices

### 1. Error Handling

Always implement proper error handling in your signers:

```typescript
async sign(args: CustomSignArgs): Promise<ISigned<CustomBroadcastOptions, CustomBroadcastResponse>> {
  try {
    // Validate arguments
    this.validateSignArgs(args);

    // Build and sign transaction
    const txBytes = await this.buildTransaction(args);
    const signature = await this.wallet.signByIndex(txBytes, 0);

    return {
      signature,
      broadcast: async (options?: CustomBroadcastOptions) => {
        return this.broadcastArbitrary(txBytes, options);
      }
    };
  } catch (error) {
    throw new Error(`Failed to sign transaction: ${error.message}`);
  }
}
```

### 2. Configuration Management

Use configuration objects to make your signers flexible:

```typescript
export interface CustomSignerConfig {
  chainId: string;
  queryClient: CustomQueryClient;
  gasPrice?: string;
  timeout?: number;
  // Add other configuration options
}
```

### 3. Testing

Always test your signers thoroughly:

```typescript
describe('CustomNetworkSigner', () => {
  let signer: CustomNetworkSigner;
  let mockWallet: IWallet;
  let mockConfig: CustomSignerConfig;

  beforeEach(() => {
    // Setup mocks and test instances
  });

  it('should sign transactions correctly', async () => {
    // Test signing functionality
  });

  it('should broadcast transactions correctly', async () => {
    // Test broadcasting functionality
  });
});
```

This approach ensures your custom signers are robust, maintainable, and compatible with the InterchainJS ecosystem.
