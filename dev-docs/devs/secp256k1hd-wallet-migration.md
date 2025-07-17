# Secp256k1HDWallet Migration Guide

## Overview
The `Secp256k1HDWallet` class has been refactored to extend from `BaseWallet` for better code reuse and consistency across the project.

## Breaking Changes

### 1. Constructor
The constructor signature has changed:

```typescript
// Before
new Secp256k1HDWallet(privateKey: Uint8Array, addressPrefix?: string, hdPath?: string)

// After
new Secp256k1HDWallet(privateKeys: IPrivateKey[], addressPrefix?: string)
```

**Migration**: Use the static factory methods instead of direct construction.

### 2. fromMnemonic() is now async

```typescript
// Before
const wallet = Secp256k1HDWallet.fromMnemonic(mnemonic, 'cosmos');

// After
const wallet = await Secp256k1HDWallet.fromMnemonic(mnemonic, 'cosmos');
```

### 3. getPublicKeyHex() is now async

```typescript
// Before
const pubKeyHex = wallet.getPublicKeyHex();

// After
const pubKeyHex = await wallet.getPublicKeyHex();
```

## Non-Breaking Changes

The following methods work exactly the same:
- `getAccount()`
- `getAccounts()`
- `signDirect()`
- `signAmino()`
- `fromPrivateKey()`
- `random()`
- `getPrivateKeyHex()`
- `toAuth()`
- `fromAuth()`

## Benefits

1. **Code Reuse**: Leverages the robust `BaseWallet` implementation
2. **Consistency**: Uses the same wallet infrastructure as other wallet types
3. **Type Safety**: Better type checking with `IPrivateKey` and `IAccount` interfaces
4. **Extensibility**: Easier to add new features through the base class

## Example Usage

```typescript
import { Secp256k1HDWallet } from '@interchainjs/cosmos';

// Create from mnemonic (note: now async)
const wallet = await Secp256k1HDWallet.fromMnemonic(
  'your mnemonic phrase here',
  'cosmos'
);

// Create from private key (same as before)
const wallet2 = Secp256k1HDWallet.fromPrivateKey(
  'your-private-key-hex',
  'cosmos'
);

// Generate random wallet (same as before)
const wallet3 = Secp256k1HDWallet.random('cosmos');

// All signing methods work the same
const account = await wallet.getAccount();
const signResponse = await wallet.signDirect(account.address, signDoc);
```

## Troubleshooting

If you encounter issues:
1. Make sure to await `fromMnemonic()` calls
2. Update any code that calls `getPublicKeyHex()` to handle the Promise
3. If using the constructor directly, switch to factory methods

The wallet maintains full compatibility with `CosmosWallet`, `OfflineDirectSigner`, and `OfflineAminoSigner` interfaces.