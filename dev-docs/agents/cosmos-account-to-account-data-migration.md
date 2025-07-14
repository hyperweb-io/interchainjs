# CosmosAccount to AccountData Migration

## Overview
This document describes the migration from `CosmosAccount` interface to `AccountData` interface in the cosmos network package.

## Changes Made

### 1. Removed CosmosAccount Interface
- **File**: `networks/cosmos/src/workflows/types.ts`
- **Action**: Removed the `CosmosAccount` interface definition
- **Reason**: The interface was redundant with `AccountData` which already exists in `signers/types.ts`

### 2. Updated ICosmosSigner Interface
- **File**: `networks/cosmos/src/workflows/types.ts`
- **Action**: Changed `ICosmosSigner` to extend `IUniSigner<AccountData, ...>` instead of `IUniSigner<CosmosAccount, ...>`
- **Added Import**: `import { Auth, OfflineSigner, AccountData } from '../signers';`

### 3. Updated All References
Updated all files that were using `CosmosAccount` to use `AccountData` instead:

- `networks/cosmos/src/wallets/secp256k1hd.ts`
- `networks/cosmos/src/signers/base-signer.ts`
- `networks/cosmos/src/signers/types.ts`
- `networks/cosmos/src/signers/wallet-adapter.ts`
- `networks/cosmos/src/signers/index.ts`

### 4. Fixed WalletAdapter Implementation
- **File**: `networks/cosmos/src/signers/wallet-adapter.ts`
- **Changes**:
  - Removed duplicate `_accountData` field
  - Updated `getAccount()` method to properly return `AccountData` with `pubkey` field
  - Fixed `getPublicKey()` method to use `_account` instead of `_accountData`

## Type Compatibility
The migration is seamless because both interfaces have compatible structures:

```typescript
// Old CosmosAccount
interface CosmosAccount {
  address: string;
  pubkey: Uint8Array;
  algo: string;
}

// New AccountData (already existed)
interface AccountData {
  address: string;
  algo: string;
  pubkey: Uint8Array;
}
```

## Build Status
The project builds successfully after these changes.