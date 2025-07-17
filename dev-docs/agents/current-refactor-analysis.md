# Current Refactor Analysis - Major Refactor Unisigner

## Build Status: SUCCESS (with TypeScript errors)

The project builds successfully at the monorepo level, but there are significant TypeScript compilation errors in the `@interchainjs/cosmos` package. These errors indicate an **incomplete refactoring** of the signer architecture.

## Error Analysis

### Missing Files and Exports
1. **wallet-adapter.ts** - File was deleted but still imported
   - `src/signers/amino-signer.ts:18` - Cannot find module './wallet-adapter'
   - `src/signers/direct-signer.ts:18` - Cannot find module './wallet-adapter'
   - `src/signers/index.ts:11` - Cannot find module './wallet-adapter'
[ wallet-adapter's removed.]

2. **Missing exports from base-signer.ts**
   - `BaseCosmosSignerImpl` - Referenced but doesn't exist (should be `BaseCosmosSigner`)
   [ya, name changed, removed impl]

3. **Missing type exports**
   - `CosmosWallet` and `Auth` from `signers/types.ts`
   [these're removed]

### Interface Incompatibility Issues

#### AminoSigner & DirectSigner Classes
Both classes have the same fundamental issues:
- **Incorrect interface implementation**: Missing `signAndBroadcast` method required by `ISigningClient`
- **Missing properties**: `wallet`, `config`, `getAccount`, `getAccountNumber`, `getSequence`
- **Missing methods**: `createBroadcastFunction`, `getAuthOrSigner`, `getAddress`

#### BaseCosmosSigner Issues
[and also check if some methods aren't done yet, like getAccountNumber. We'll discuss how to properly implement those later]
- **Method signature mismatches**:
  - `getEncoder()` return type doesn't match `Encoder<any>` interface
  - `getConverterFromTypeUrl()` return type doesn't match `AminoConverter<any>` interface
  - `simulateByTxBody()` return type doesn't match `SimulationResponse` interface

#### Secp256k1HDWallet Issues
- **Method signature**: `getAccountByIndex()` should return `Promise<IAccount>` but returns `IAccount`
- **Method name**: Uses `toAccounts` but should use `getAccounts`
- **Type annotations**: Missing parameter types in several methods

### Workflow Plugin Issues
All workflow plugins have similar problems:
- **Method calls**: Using `getAddress()` but should use `getAddresses()`
- **Missing utilities**: `isAuth` function doesn't exist
- **Method calls**: Using `getAccount()` but should use `getAccounts()`
- **Missing properties**: `encodedPublicKey`, `getAuthOrSigner`

## Current Refactor Status

### ✅ Completed
- Basic monorepo structure
- Core packages building successfully
- Type definitions in other packages
- Build system working

### ❌ Incomplete
- **Signer refactoring** - Major architectural changes not completed
- **Interface alignment** - Types don't match new interfaces
- **Method signatures** - Return types and method names need updates
- **File organization** - Some files deleted but references remain

### 🔧 Required Changes

#### Immediate Fixes Needed
1. **Update imports** to use new interfaces
2. **Implement missing methods** in AminoSigner and DirectSigner
3. **Fix method signatures** to match new interfaces
4. **Remove wallet-adapter references** or reimplement
5. **Update Secp256k1HDWallet** to use async methods
6. **Fix workflow plugins** to use correct method names

#### Architecture Changes
- **Unified signer interface** - Appears to be migrating to a new `ICosmosSigner` interface
- **Wallet abstraction** - Moving from wallet-adapter pattern to new wallet system
- **Async/await patterns** - Making wallet methods async
- **Type safety** - Stricter type checking across interfaces

## Next Steps

1. **Fix TypeScript errors** in cosmos package
2. **Align all signer classes** with new interfaces
3. **Update workflow plugins** to use new methods
4. **Test the refactored components** once fixed
5. **Verify backwards compatibility** if needed

## Files to Focus On

### High Priority
- `networks/cosmos/src/signers/base-signer.ts` - Core interface definitions
- `networks/cosmos/src/signers/amino-signer.ts` - Amino signer implementation
- `networks/cosmos/src/signers/direct-signer.ts` - Direct signer implementation
- `networks/cosmos/src/wallets/secp256k1hd.ts` - Wallet implementation

### Medium Priority
- `networks/cosmos/src/workflows/plugins/` - All plugin files need updates
- `networks/cosmos/src/signers/types.ts` - Type definitions
- `networks/cosmos/src/signers/index.ts` - Export cleanup

This refactoring appears to be a major architectural shift towards a unified signer interface, but the implementation is only partially complete.