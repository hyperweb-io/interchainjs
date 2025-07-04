# ABCI Types Codec Refactoring Summary

## Overview
Successfully refactored ABCI response types to use a codec pattern with automatic type conversion, following the v2 style (factory function approach). Additionally, moved common decode methods to the base adapter class to reduce code duplication.

## Changes Made

### 1. Created Codec Infrastructure
- `/networks/cosmos/src/types/codec/base.ts` - Base codec class and factory function
- `/networks/cosmos/src/types/codec/converters.ts` - Common converter functions
- `/networks/cosmos/src/types/codec/index.ts` - Module exports

### 2. Refactored ABCI Types
- Created `/networks/cosmos/src/types/responses/common/abci.ts` with:
  - Type interfaces: `ProofOp`, `QueryProof`, `AbciQueryResponse`, `AbciInfoResponse`
  - Codec instances using `createCodec()` factory function
  - Creator functions that use the codecs internally

### 3. Moved Common Methods to Base Adapter
- Moved `decodeAbciInfo` and `decodeAbciQuery` from individual adapters to `BaseAdapter`
- Removed duplicate implementations from `tendermint34.ts`, `tendermint37.ts`, and `comet38.ts`
- These methods now use the codec approach internally

## Steps Taken

1. **Created codec infrastructure** with base classes and factory functions
2. **Implemented ABCI codecs** using the new pattern with automatic type conversion
3. **Refactored adapters** to use common decode methods from base class
4. **Updated naming convention** from camelCase to PascalCase for codec instances
5. **Compared with CosmJS** to validate approach and identify improvements

## Naming Convention

Following TypeScript conventions:
- **Codec instances** (created objects) use PascalCase: `ProofOpCodec`, `AbciInfoResponseCodec`
- **Creator functions** use camelCase: `createProofOp`, `createAbciInfoResponse`

## Key Benefits

### 1. Automatic Type Conversion
The codec pattern automatically handles:
- String to number conversion (`"12345678"` → `12345678`)
- Base64 to Uint8Array conversion
- Property name mapping (`last_block_height` → `lastBlockHeight`)
- Nested object conversion (QueryProof with ProofOps)

### 2. Simplified Adapter Code
Before (in each adapter):
```typescript
decodeAbciInfo<T extends AbciInfoResponse = AbciInfoResponse>(response: unknown): T {
  const resp = response as Record<string, unknown>;
  const data = (resp.response || resp) as Record<string, unknown>;
  return createAbciInfoResponse({
    data: data.data as string | undefined,
    lastBlockHeight: this.apiToNumber(data.last_block_height as string | null | undefined),
    lastBlockAppHash: this.maybeFromBase64(data.last_block_app_hash as string | null | undefined)
  }) as T;
}
```

After (in base adapter only):
```typescript
decodeAbciInfo<T extends AbciInfoResponse = AbciInfoResponse>(response: unknown): T {
  const resp = response as Record<string, unknown>;
  const data = (resp.response || resp) as Record<string, unknown>;
  return createAbciInfoResponse(data) as T;
}
```

### 3. Error Handling
- Invalid data types are handled gracefully
- Invalid base64 returns `undefined` instead of throwing
- Clear error messages for invalid input

### 4. Code Deduplication
- Eliminated duplicate code across three adapter implementations
- Common logic now resides in the base class
- Easier to maintain and update

### 5. Extensibility
The structure supports version-specific implementations:
```
responses/
├── common/          # Shared implementations
│   └── abci.ts
├── tendermint34/    # Version-specific overrides (if needed)
├── tendermint37/    # Version-specific overrides (if needed)
└── comet38/         # Version-specific overrides (if needed)
```

## Example Usage

```typescript
// Simple usage - all conversion handled automatically
const response = createAbciInfoResponse({
  data: 'cosmos-hub-4',
  last_block_height: '12345678',  // String converted to number
  last_block_app_hash: 'AQIDBAUGBwg='  // Base64 converted to Uint8Array
});

// Nested objects also handled
const queryResponse = createAbciQueryResponse({
  key: 'ChQe',
  value: 'KDI8Rg==',
  height: '98765',
  proofOps: {
    ops: [{
      type: 'iavl:v',
      key: 'ZGU=',
      data: 'Zmdo'
    }]
  }
});
```

## Next Steps

1. **Continue refactoring other response types**:
   - Block-related types
   - Transaction-related types
   - Consensus-related types
   - Validator-related types

2. **Add version-specific codecs** when needed:
   - Create version-specific folders for types that differ between versions
   - Override codec configurations as needed

3. **Consider adding validation**:
   - Add validation rules to codec configurations
   - Provide better error messages for invalid data

## Export Structure

The refactored code now exports:
1. **From `responses.ts`** - Types and creator functions for backward compatibility
2. **From `responses/common/index.ts`** - Both types/creators and the underlying codecs for advanced usage

```typescript
// Basic usage
import { createAbciInfoResponse } from '@interchainjs/cosmos/types/responses';

// Advanced usage with direct codec access
import { AbciInfoResponseCodec } from '@interchainjs/cosmos/types/responses/common';
```

## Step 5: Comparison with CosmJS

We analyzed how CosmJS handles the same ABCI response types to validate our approach:

### CosmJS Approach:
- **Duplicate decode functions** in each adapter (tendermint34, tendermint37, comet38)
- Uses `may()` wrapper function for optional fields
- Manual field mapping in each decode function
- Static methods in a `Responses` class

### Our Advantages:
1. **No code duplication** - decode logic is in the base adapter
2. **Declarative field mapping** - easier to understand and maintain
3. **Single source of truth** - all conversion logic in one codec
4. **Better extensibility** - easy to add new fields or change converters

### Key Learning:
Both approaches handle null/undefined values similarly (converting to undefined), but our codec pattern provides better maintainability and follows DRY principles more effectively.

## Conclusion

The codec pattern provides a clean, maintainable way to handle API response conversion with automatic type transformation. Combined with moving common methods to the base adapter, we've significantly reduced code duplication and simplified maintenance while maintaining type safety and improving error handling. The comparison with CosmJS validates that our approach is both sound and provides improvements in code organization.