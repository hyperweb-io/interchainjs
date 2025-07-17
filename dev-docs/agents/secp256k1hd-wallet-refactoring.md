# Secp256k1HDWallet Refactoring

## Overview
This document describes the refactoring of `Secp256k1HDWallet` to extend from `BaseWallet` while maintaining compatibility with the `CosmosWallet`, `OfflineDirectSigner`, and `OfflineAminoSigner` interfaces.

## Changes Made

### 1. Class Inheritance
- **Before**: `Secp256k1HDWallet` was a standalone class
- **After**: `Secp256k1HDWallet extends BaseWallet`

### 2. Constructor Changes
- **Before**: Accepted `privateKey: Uint8Array`, `addressPrefix: string`, `hdPath: string`
- **After**: Accepts `privateKeys: IPrivateKey[]`, `addressPrefix: string`
- The constructor now creates a wallet config using `createCosmosConfig` and passes it to `BaseWallet`

### 3. Method Implementations

#### getAccount()
- Now uses `BaseWallet.getAccountByIndex(0)` to get the first account
- Returns `AccountData` with the same structure as before

#### getPublicKey()
- Retrieves account data first, then returns the public key in the expected format

#### getAccounts()
- Uses `BaseWallet.toAccounts()` to get all accounts
- Maps them to the `AccountData` format

#### signDirect()
- Finds the account index for the given address
- Uses `BaseWallet.signByIndex()` for signing
- Returns `DirectSignResponse` with the signed doc and signature

#### signAmino()
- Similar to `signDirect()` but for Amino signing
- Uses the same `signByIndex()` method with serialized Amino JSON

### 4. Factory Methods

#### fromMnemonic()
- Now returns a Promise<Secp256k1HDWallet>
- Uses `PrivateKey.fromMnemonic()` to derive private keys
- Creates proper `IHDPath` objects

#### fromPrivateKey()
- Creates a `PrivateKey` instance using `BaseCryptoBytes`
- Wraps it in an array for the constructor

#### random()
- Generates random private key bytes
- Creates a `PrivateKey` instance and wraps it

### 5. Utility Methods

#### getPublicKeyHex()
- Now async, retrieves account data first
- Returns hex-encoded public key

#### getPrivateKeyHex()
- Accesses the first private key from the `privateKeys` array
- Uses the `toHex()` method from `IPrivateKey`

#### toAuth()
- Extracts HD path from the first private key
- Returns `Auth` object with the same structure

### 6. Type Safety Improvements
- Replaced `any` types in `sortObject` with `unknown` and proper type assertions
- Uses `Record<string, unknown>` for object types

## Address Strategy Registration
The cosmos address strategy is registered when the module is loaded:
```typescript
registerAddressStrategy(COSMOS_ADDRESS_STRATEGY);
```

## Compatibility
All existing interfaces are maintained:
- `CosmosWallet`
- `OfflineDirectSigner`
- `OfflineAminoSigner`

The refactored class provides the same functionality while leveraging the base wallet infrastructure.