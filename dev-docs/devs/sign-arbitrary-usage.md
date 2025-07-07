# Sign Arbitrary Data with Cosmos Signers

## Overview

The Cosmos signers in interchainjs support signing arbitrary data with configurable hash functions. This is useful for various use cases like message signing, authentication, and custom protocols.

## Basic Usage

### Sign with Default SHA256 Hash

```typescript
import { DirectSigner } from '@interchainjs/cosmos';

const auth = {
  algo: 'secp256k1',
  hdPath: "m/44'/118'/0'/0/0",
  privateKey: 'your-private-key-hex'
};

const signer = new DirectSigner(auth, config);
const data = new TextEncoder().encode('Hello, Cosmos!');
const signature = await signer.signArbitrary(data);
```

### Sign with SHA512 Hash

```typescript
const signature = await signer.signArbitrary(data, {
  sign: { hash: 'sha512' }
});
```

### Sign Without Hashing

```typescript
const signature = await signer.signArbitrary(data, {
  sign: { hash: 'none' }
});
```

### Sign with Custom Hash Function

```typescript
import { keccak256 } from 'your-hash-library';

const signature = await signer.signArbitrary(data, {
  sign: { 
    hash: (data: Uint8Array) => {
      return keccak256(data);
    }
  }
});
```

## Supported Hash Functions

- `'sha256'` (default): SHA-256 hash function
- `'sha512'`: SHA-512 hash function
- `'none'`: No hashing, sign the raw data
- Custom function: Provide your own hash function

## Supported Algorithms

The signing algorithm is determined by the `algo` field in the Auth object:

- `'secp256k1'`: ECDSA with secp256k1 curve (most common in Cosmos)
- `'ed25519'`: EdDSA with ed25519 curve

## Complete Example

```typescript
import { DirectSigner, Auth, CosmosSignerConfig } from '@interchainjs/cosmos';
import { toHex } from '@interchainjs/utils';

// Configure authentication
const auth: Auth = {
  algo: 'secp256k1',
  hdPath: "m/44'/118'/0'/0/0",
  privateKey: 'your-private-key-hex'
};

// Configure signer
const config: CosmosSignerConfig = {
  chainId: 'cosmoshub-4',
  queryClient: yourQueryClient,
  addressPrefix: 'cosmos'
};

// Create signer
const signer = new DirectSigner(auth, config);

// Sign data
const message = 'Sign this message';
const data = new TextEncoder().encode(message);

// Sign with different hash options
const sig1 = await signer.signArbitrary(data); // Default SHA256
const sig2 = await signer.signArbitrary(data, { sign: { hash: 'sha512' } });
const sig3 = await signer.signArbitrary(data, { sign: { hash: 'none' } });

// Convert signature to hex for display/storage
console.log('SHA256 signature:', toHex(sig1.toBytes()));
console.log('SHA512 signature:', toHex(sig2.toBytes()));
console.log('Raw signature:', toHex(sig3.toBytes()));
```

## Use Cases

1. **Message Signing**: Sign messages for authentication or proof of ownership
2. **Custom Protocols**: Implement custom signing schemes with specific hash requirements
3. **Cross-Chain Compatibility**: Use different hash functions for compatibility with other chains
4. **Legacy Support**: Support older systems that require specific hash functions

## Important Notes

- The `signArbitrary` method is only available when using `Auth` (private key). It's not supported with `OfflineSigner` interfaces.
- Always use secure methods to handle private keys
- The signature format follows the standard for the chosen algorithm (compact format for secp256k1, standard format for ed25519)