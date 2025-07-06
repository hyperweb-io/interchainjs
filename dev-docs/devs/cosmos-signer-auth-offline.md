# Cosmos Signer with Auth and OfflineSigner Support

## Overview

The Cosmos signers have been refactored to support two types of initialization:
1. **Auth**: Direct private key access for signing
2. **OfflineSigner**: External signer interface without private key exposure

This design allows for flexible integration with various wallet implementations while maintaining security best practices.

## Key Interfaces

### Auth Interface

```typescript
export interface Auth {
  /**
   * The algorithm of the authentication method.
   */
  readonly algo: string;
  /**
   * The HD path of the authentication method.
   */
  readonly hdPath: string;
  /**
   * The private key in hex format
   */
  readonly privateKey: string;
}
```

### OfflineSigner Interfaces

```typescript
export interface OfflineSigner {
  /**
   * Get all accounts this signer holds
   */
  getAccounts(): Promise<readonly AccountData[]>;
}

export interface OfflineDirectSigner extends OfflineSigner {
  /**
   * Sign a transaction in direct mode
   */
  signDirect(signerAddress: string, signDoc: SignDoc): Promise<DirectSignResponse>;
}

export interface OfflineAminoSigner extends OfflineSigner {
  /**
   * Sign a transaction in amino mode
   */
  signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse>;
}
```

## Usage Examples

### 1. Direct Signing with Auth (Private Key)

```typescript
import { DirectSigner, Auth, CosmosSignerConfig } from '@interchainjs/cosmos';

// Create Auth with private key
const auth: Auth = {
  algo: 'secp256k1',
  hdPath: "m/44'/118'/0'/0/0",
  privateKey: 'your-private-key-hex'
};

// Create signer config
const config: CosmosSignerConfig = {
  chainId: 'cosmoshub-4',
  queryClient: queryClient,
  addressPrefix: 'cosmos'
};

// Create DirectSigner
const signer = new DirectSigner(auth, config);

// Sign transaction
const signedTx = await signer.sign({
  messages: [/* your messages */],
  fee: { amount: [{ denom: 'uatom', amount: '1000' }], gas: '200000' },
  memo: 'Test transaction'
});
```

### 2. Amino Signing with Auth (Private Key)

```typescript
import { AminoSigner, Auth, CosmosSignerConfig } from '@interchainjs/cosmos';

// Same auth and config as above
const aminoSigner = new AminoSigner(auth, config);

// Sign transaction
const signedTx = await aminoSigner.sign({
  messages: [/* your messages */],
  fee: { amount: [{ denom: 'uatom', amount: '1000' }], gas: '200000' },
  memo: 'Test transaction'
});
```

### 3. Direct Signing with OfflineDirectSigner (No Private Key)

```typescript
import { DirectSigner, OfflineDirectSigner } from '@interchainjs/cosmos';

// Get OfflineDirectSigner from wallet (e.g., Keplr, Leap, etc.)
const offlineSigner: OfflineDirectSigner = await window.keplr.getOfflineSignerOnlyAmino(chainId);

// Create DirectSigner
const signer = new DirectSigner(offlineSigner, config);

// Sign transaction - private key operations handled by the wallet
const signedTx = await signer.sign({
  messages: [/* your messages */],
  fee: { amount: [{ denom: 'uatom', amount: '1000' }], gas: '200000' },
  memo: 'Test transaction'
});
```

### 4. Amino Signing with OfflineAminoSigner (No Private Key)

```typescript
import { AminoSigner, OfflineAminoSigner } from '@interchainjs/cosmos';

// Get OfflineAminoSigner from wallet
const offlineSigner: OfflineAminoSigner = await window.keplr.getOfflineSignerOnlyAmino(chainId);

// Create AminoSigner
const signer = new AminoSigner(offlineSigner, config);

// Sign transaction
const signedTx = await signer.sign({
  messages: [/* your messages */],
  fee: { amount: [{ denom: 'uatom', amount: '1000' }], gas: '200000' },
  memo: 'Test transaction'
});
```

## SimpleWallet Integration

The `SimpleWallet` class can be converted to an `Auth` interface:

```typescript
import { SimpleWallet } from '@interchainjs/cosmos';

// Create SimpleWallet
const wallet = SimpleWallet.fromPrivateKey('private-key-hex', 'cosmos');

// Convert to Auth
const auth = wallet.toAuth();

// Use with signers
const directSigner = new DirectSigner(auth, config);
const aminoSigner = new AminoSigner(auth, config);
```

## Architecture Benefits

1. **Security**: Private keys are never exposed when using OfflineSigner
2. **Flexibility**: Support for both direct key access and external wallet integration
3. **Compatibility**: Works with standard Cosmos wallet interfaces
4. **Type Safety**: Full TypeScript support with proper type definitions

## Migration Guide

If you're migrating from the old `CosmosWallet`-based signers:

```typescript
// Old way
const wallet = new SimpleWallet(privateKey);
const signer = new DirectSigner(wallet, config);

// New way - Option 1: Using Auth
const auth: Auth = {
  algo: 'secp256k1',
  hdPath: "m/44'/118'/0'/0/0",
  privateKey: privateKey
};
const signer = new DirectSigner(auth, config);

// New way - Option 2: Using SimpleWallet's toAuth()
const wallet = SimpleWallet.fromPrivateKey(privateKey);
const signer = new DirectSigner(wallet.toAuth(), config);
```

## Implementation Details

The implementation uses a `WalletAdapter` class internally to provide a unified interface for both Auth and OfflineSigner inputs. This adapter:

1. Handles account retrieval from both sources
2. Manages public key extraction
3. Provides signing capabilities based on the input type
4. Maintains backward compatibility with existing workflows

The signers automatically detect whether they're working with an Auth or OfflineSigner and adjust their behavior accordingly, ensuring seamless integration regardless of the initialization method.