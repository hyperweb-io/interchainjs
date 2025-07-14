# Account Interface Changes

## Summary
The `CosmosAccount` interface has been replaced with `AccountData` throughout the cosmos network package to maintain consistency and avoid redundancy.

## What Changed

### For Developers Using the Library

If you were using `CosmosAccount` type in your code, you should now use `AccountData` instead:

```typescript
// Before
import { CosmosAccount } from '@interchainjs/cosmos';

// After
import { AccountData } from '@interchainjs/cosmos';
```

### Interface Structure
The structure remains the same, so no code changes are needed beyond the type name:

```typescript
interface AccountData {
  address: string;
  algo: string;
  pubkey: Uint8Array;
}
```

## Why This Change?
- **Consistency**: The project already had `AccountData` interface with the same structure
- **Simplification**: Removes redundant type definitions
- **Alignment**: Better aligns with the updated `IAccount` interface in `@interchainjs/types`

## Migration Guide

1. Update your imports to use `AccountData` instead of `CosmosAccount`
2. No other code changes needed - the interface structure is identical
3. The project is backward compatible at the structural level

## Related Changes
The base `IAccount` interface in `@interchainjs/types` has been updated to use:
- `publicKey: Uint8Array` (instead of `IPublicKey`)
- `address: string` (instead of `IAddress`)

This simplifies the type system and makes it easier to work with account data across different blockchain networks.