# Migrating from CosmJS to @interchainjs/cosmos

This guide shows you how to migrate from CosmJS to the new InterchainJS SDK. The updated examples below follow the patterns used in our unit tests, with a special focus on wallet generation and signers that completely removes any CosmJS dependency.

## 1. Overview

### Goal:
Replace CosmJS with @interchainjs/cosmos to sign, build, and broadcast transactions on Cosmos-based blockchains.

### Key Improvements:
- Wallet Generation: Create wallets using our own methods (using Secp256k1Auth and Bip39) instead of CosmJS’s DirectSecp256k1HdWallet.
- Modular Imports: Import only the needed submodules to reduce bundle size.
- Unified Signer Interfaces: Use Direct (Protobuf) or Amino signing with a consistent API.


## 2. Installation

Remove CosmJS dependencies, then install the new SDK and its related packages:
``` shell
npm install @interchainjs/cosmos @interchainjs/auth @interchainjs/cosmos-types
```

## 3. Updated Wallet Generation

InterchainJS provides modern wallet generation using HD (Hierarchical Deterministic) wallets with full TypeScript support:

### Method 1: Using Secp256k1HDWallet (Recommended)

```typescript
import { DirectSigner } from '@interchainjs/cosmos';
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';
import { generateMnemonic } from '@interchainjs/crypto';

(async () => {
  // Generate a mnemonic
  const mnemonic = generateMnemonic();

  // Create wallet with HD derivation
  const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
    derivations: [{
      prefix: "cosmos",
      hdPath: HDPath.cosmos(0, 0, 0).toString(), // m/44'/118'/0'/0/0
    }]
  });

  // Create signer with wallet
  const signer = new DirectSigner(wallet, {
    chainId: 'cosmoshub-4',
    queryClient: queryClient,
    addressPrefix: 'cosmos'
  });

  // Get accounts
  const accounts = await signer.getAccounts();
  console.log('Wallet address:', accounts[0].address);

  // Sign and broadcast transaction
  const result = await signer.signAndBroadcast({
    messages: [{
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: accounts[0].address,
        toAddress: 'cosmos1...',
        amount: [{ denom: 'uatom', amount: '1000000' }]
      }
    }],
    fee: {
      amount: [{ denom: 'uatom', amount: '5000' }],
      gas: '200000'
    },
    memo: 'Migration example'
  });

  console.log('Transaction hash:', result.transactionHash);
})();
```

### Method 2: Using External Wallets (Keplr, Leap, etc.)

```typescript
import { DirectSigner } from '@interchainjs/cosmos';

(async () => {
  // Enable Keplr for the chain
  await window.keplr.enable(chainId);

  // Get offline signer from Keplr
  const offlineSigner = window.keplr.getOfflineSigner(chainId);

  // Create signer with offline signer
  const signer = new DirectSigner(offlineSigner, {
    chainId: 'cosmoshub-4',
    queryClient: queryClient,
    addressPrefix: 'cosmos'
  });

  // Use the same signing interface
  const result = await signer.signAndBroadcast({
    messages: [/* your messages */],
    fee: { amount: [{ denom: 'uatom', amount: '5000' }], gas: '200000' }
  });
})();
```

### Key Improvements:
- **No CosmJS Dependency**: Complete wallet generation using InterchainJS
- **Unified Interface**: Same `IUniSigner` interface for both wallet types
- **Type Safety**: Full TypeScript support with proper type inference
- **Flexible Authentication**: Support both direct wallets and external wallet integration


## 4. Signer Usage & Transaction Construction

### Direct Signer (Protobuf) Usage

The DirectSigner uses protobuf serialization for optimal performance:

```typescript
import { DirectSigner } from '@interchainjs/cosmos';

// Assuming wallet/signer creation from previous examples
const signer = new DirectSigner(wallet, config);

// Build transaction message
const msg = {
  typeUrl: '/cosmos.bank.v1beta1.MsgSend',
  value: {
    fromAddress: 'cosmos1...',
    toAddress: 'cosmos1...',
    amount: [{ denom: 'uatom', amount: '1000000' }]
  }
};

// Sign and broadcast
const result = await signer.signAndBroadcast({
  messages: [msg],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000'
  },
  memo: 'InterchainJS transaction'
});

console.log('Transaction hash:', result.transactionHash);
```

### Amino Signer (JSON) Usage

The AminoSigner uses JSON serialization for legacy compatibility:

```typescript
import { AminoSigner } from '@interchainjs/cosmos';

// Create amino signer (same wallet can be used)
const aminoSigner = new AminoSigner(wallet, config);

// Same message structure
const msg = {
  typeUrl: '/cosmos.bank.v1beta1.MsgSend',
  value: {
    fromAddress: 'cosmos1...',
    toAddress: 'cosmos1...',
    amount: [{ denom: 'uatom', amount: '1000000' }]
  }
};

// Same signing interface
const result = await aminoSigner.signAndBroadcast({
  messages: [msg],
  fee: {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000'
  },
  memo: 'Amino transaction'
});

console.log('Transaction hash:', result.transactionHash);
```

### Key Benefits

- **Unified Interface**: Both signers implement `IUniSigner` with identical methods
- **Flexible Authentication**: Works with both direct wallets and external wallets
- **Type Safety**: Full TypeScript support with proper type inference
- **Consistent API**: Same method signatures across all networks

## 5. CosmJS Code Comparison
To highlight the migration improvements, here is a side-by-side comparison of the previous CosmJS implementation versus the new InterchainJS approach.
### Wallet Generation
#### CosmJS Implementation:
``` typescript
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { makeCosmoshubPath } from "@cosmjs/crypto";

(async () => {
  const mnemonic = "your mnemonic here";
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths: [makeCosmoshubPath(0)],
  });
  const [account] = await wallet.getAccounts();
  console.log("Wallet address:", account.address);
})();
```
#### InterchainJS Implementation:
```typescript
import { Secp256k1HDWallet } from '@interchainjs/cosmos';
import { HDPath } from '@interchainjs/types';
import { generateMnemonic } from '@interchainjs/crypto';

(async () => {
  const mnemonic = generateMnemonic();
  const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, {
    derivations: [{
      prefix: "cosmos",
      hdPath: HDPath.cosmos(0, 0, 0).toString(),
    }]
  });

  const accounts = await wallet.getAccounts();
  console.log("Wallet address:", accounts[0].address);
})();
```
### Transaction Signing and Broadcasting
#### CosmJS Implementation:
``` typescript
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { SigningStargateClient } from "@cosmjs/stargate";
import { makeCosmoshubPath } from "@cosmjs/crypto";

(async () => {
  const mnemonic = "your mnemonic here";
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths: [makeCosmoshubPath(0)],
  });
  const [account] = await wallet.getAccounts();
  const rpcEndpoint = 'http://your-rpc-endpoint:26657';
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);

  const msg = {
    // Construct your message here
  };
  const fee = {
    amount: [{ denom: 'uatom', amount: '5000' }],
    gas: '200000',
  };
  const memo = "CosmJS transaction test";

  const result = await client.signAndBroadcast(account.address, [msg], fee, memo);
  console.log("Transaction hash:", result.transactionHash);
})();
```
#### InterchainJS Implementation:
```typescript
import { DirectSigner } from '@interchainjs/cosmos';

(async () => {
  // Assume wallet generation using InterchainJS methods as shown earlier
  const signer = new DirectSigner(wallet, {
    chainId: 'cosmoshub-4',
    queryClient: queryClient,
    addressPrefix: 'cosmos'
  });

  const msg = {
    typeUrl: '/cosmos.bank.v1beta1.MsgSend',
    value: {
      fromAddress: 'cosmos1...',
      toAddress: 'cosmos1...',
      amount: [{ denom: 'uatom', amount: '1000000' }]
    }
  };

  const result = await signer.signAndBroadcast({
    messages: [msg],
    fee: {
      amount: [{ denom: 'uatom', amount: '5000' }],
      gas: '200000'
    },
    memo: "InterchainJS transaction test"
  });

  console.log("Transaction hash:", result.transactionHash);
})();
```

## 6. Migration Steps Summary
1. Update Dependencies:
  - Remove CosmJS dependencies.
  - Install @interchainjs/cosmos, @interchainjs/auth, and @interchainjs/cosmos-types.

2. Change Imports:
  - Replace any CosmJS imports with the new SDK sub-module imports.
  - For wallet generation, use:
``` typescript
import { Bip39, Random } from '@interchainjs/crypto';
import { Secp256k1Auth } from '@interchainjs/auth/secp256k1';
import { HDPath } from '@interchainjs/types';
```

3. Wallet Generation:
  - Generate a mnemonic using Bip39 and Random
  - Derive auth objects using Secp256k1Auth.fromMnemonic().
  - Note: This method completely avoids any dependency on CosmJS wallet implementations.
4. Adapt Signer Interfaces:
  - Use DirectSigner.fromWallet or create a new instance with your auth object.
  - If needed, use AminoSigner for legacy signing.
5. Rebuild Transaction Construction:
  - Replace CosmJS transaction building logic with the new SDK’s TxBuilder (accessed via signer.getTxBuilder()).
  - Use message constructors and encoders from @interchainjs/cosmos-types.
6. Test Thoroughly:
  - Validate transactions on testnets.
  - Compare fee, gas, memo, and signature details against expected values.

## 6. Conclusion

This migration guide demonstrates how to transition from CosmJS to InterchainJS using modern HD wallets and the unified `IUniSigner` interface. The new architecture provides better type safety, modular design, and consistent APIs across different blockchain networks.

Key benefits of the migration:
- **Unified Interface**: Same API across all supported networks
- **Better Type Safety**: Full TypeScript support with proper inference
- **Modular Design**: Import only what you need
- **Modern Architecture**: Clean separation of concerns

For more examples and detailed documentation, refer to the [InterchainJS documentation](https://docs.hyperweb.io/interchain-js/) and unit tests in the repository.

Happy migrating! 🚀