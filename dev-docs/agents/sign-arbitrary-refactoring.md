# SignArbitrary Refactoring

## Overview

The `signArbitrary` functionality has been refactored to be handled inside the signer instead of the wallet. This provides better control over the signing process and allows for configurable hash functions.

## Changes Made

### 1. Updated CosmosSignOptions Interface

Added a `sign` configuration to `CosmosSignOptions` in `networks/cosmos/src/workflows/types.ts`:

```typescript
export interface CosmosSignOptions {
  // ... existing options ...
  sign?: {
    hash?: 'sha256' | 'sha512' | 'none' | ((data: Uint8Array) => Uint8Array);
  };
}
```

### 2. Moved signArbitrary Logic to Base Signer

The signing logic is now in `networks/cosmos/src/signers/base-signer.ts`:

```typescript
async signArbitrary(data: Uint8Array, options?: CosmosSignOptions): Promise<ICryptoBytes> {
  // If we have an Auth (private key), handle signing directly in the signer
  if (isAuth(this.authOrSigner)) {
    const auth = this.authOrSigner as Auth;
    
    // Apply hash function based on configuration
    let dataToSign = data;
    const hashConfig = options?.sign?.hash;
    
    if (hashConfig !== 'none') {
      if (typeof hashConfig === 'function') {
        dataToSign = hashConfig(data);
      } else if (hashConfig === 'sha512') {
        dataToSign = sha512(data);
      } else {
        // Default to sha256
        dataToSign = sha256(data);
      }
    }
    
    // Get the signing function based on the algorithm
    const privateKey = fromHex(auth.privateKey);
    let signature: Uint8Array;
    
    switch (auth.algo) {
      case 'secp256k1': {
        const sig = secp256k1.sign(dataToSign, privateKey);
        signature = sig.toCompactRawBytes();
        break;
      }
      case 'ed25519': {
        signature = ed25519.sign(dataToSign, privateKey);
        break;
      }
      default:
        throw new Error(`Unsupported signing algorithm: ${auth.algo}`);
    }
    
    return BaseCryptoBytes.from(signature);
  } else {
    // For OfflineSigner, we can't handle arbitrary signing
    throw new Error('Arbitrary signing not supported with OfflineSigner');
  }
}
```

### 3. Updated Wallet Interface

Made `signArbitrary` optional in the `CosmosWallet` interface since it's no longer needed when using Auth:

```typescript
export interface CosmosWallet {
  getAccount(): Promise<CosmosAccount>;
  signArbitrary?(data: Uint8Array): Promise<ICryptoBytes>; // Now optional
  getPublicKey(): Promise<{ typeUrl: string; value: Uint8Array }>;
}
```

### 4. Deprecated Wallet Methods

The `signArbitrary` methods in `SimpleWallet` and `WalletAdapter` are now deprecated and throw errors directing users to use the signer instead.

## Benefits

1. **Configurable Hash Functions**: Users can now specify which hash function to use (sha256, sha512, none, or custom).
2. **Algorithm-Aware Signing**: The signing function is selected based on the `auth.algo` field.
3. **Better Separation of Concerns**: Signing logic is centralized in the signer, not scattered across wallet implementations.
4. **Extensibility**: Easy to add support for new algorithms or hash functions.

## Usage Examples

### Default SHA256 Hash
```typescript
const signature = await signer.signArbitrary(data);
```

### SHA512 Hash
```typescript
const signature = await signer.signArbitrary(data, {
  sign: { hash: 'sha512' }
});
```

### No Hash (Sign Raw Data)
```typescript
const signature = await signer.signArbitrary(data, {
  sign: { hash: 'none' }
});
```

### Custom Hash Function
```typescript
const signature = await signer.signArbitrary(data, {
  sign: { 
    hash: (data: Uint8Array) => {
      // Your custom hash implementation
      return customHash(data);
    }
  }
});
```

## Supported Algorithms

- `secp256k1`: Uses the secp256k1 curve for signing
- `ed25519`: Uses the ed25519 curve for signing

Additional algorithms can be added by extending the switch statement in the `signArbitrary` method.

## Migration Guide

If you were previously using `wallet.signArbitrary()`, you should now use `signer.signArbitrary()` instead. The wallet's `signArbitrary` method is deprecated and will throw an error.

Before:
```typescript
const signature = await wallet.signArbitrary(data);
```

After:
```typescript
const signature = await signer.signArbitrary(data);
```