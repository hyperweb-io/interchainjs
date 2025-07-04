# CosmJS vs InterchainJS: ABCI Response Handling Comparison

## Overview

This document compares how CosmJS and InterchainJS handle ABCI response types (AbciInfo and AbciQuery) across different Tendermint/CometBFT versions.

## Key Findings

### 1. Response Type Definitions

Both projects define the same response types with identical fields:

**AbciInfoResponse:**
```typescript
interface AbciInfoResponse {
  readonly data?: string;
  readonly lastBlockHeight?: number;
  readonly lastBlockAppHash?: Uint8Array;
}
```

**AbciQueryResponse:**
```typescript
interface AbciQueryResponse {
  readonly key: Uint8Array;
  readonly value: Uint8Array;
  readonly proof?: QueryProof;
  readonly height?: number;
  readonly index?: number;
  readonly code?: number;
  readonly codespace: string;
  readonly log?: string;
  readonly info: string;
}
```

### 2. Decoding Logic Comparison

#### CosmJS Approach:
- Uses separate decode functions in each adapter (tendermint34, tendermint37, comet38)
- Each adapter has its own `decodeAbciInfo` and `decodeAbciQuery` functions
- Uses a `Responses` class with static methods that wrap the decode functions
- Relies on utility functions like `may()` for optional field handling and `apiToSmallInt()` for number conversion

Example from CosmJS:
```typescript
function decodeAbciInfo(data: RpcAbciInfoResponse): responses.AbciInfoResponse {
  return {
    data: data.data,
    lastBlockHeight: may(apiToSmallInt, data.last_block_height),
    lastBlockAppHash: may(fromBase64, data.last_block_app_hash),
  };
}
```

#### InterchainJS Approach (After Refactoring):
- Uses a codec pattern with `BaseCodec` class and `createCodec` factory
- Moved common decode methods to the base adapter class
- Uses declarative field mapping with automatic type conversion
- Single source of truth for conversion logic

Example from InterchainJS:
```typescript
export const AbciInfoResponseCodec = createCodec<AbciInfoResponse>({
  data: ensureString,
  lastBlockHeight: {
    source: 'last_block_height',
    converter: apiToNumber
  },
  lastBlockAppHash: {
    source: 'last_block_app_hash',
    converter: maybeBase64ToBytes
  }
});
```

### 3. Key Differences

1. **Code Organization:**
   - CosmJS: Duplicate decode functions in each adapter
   - InterchainJS: Centralized codec definitions with inheritance from base adapter

2. **Type Conversion:**
   - CosmJS: Uses `may()` wrapper for optional fields (handles null/undefined → undefined)
   - InterchainJS: Built-in handling of undefined values in converters (e.g., `maybeBase64ToBytes`)

3. **Field Mapping:**
   - CosmJS: Manual mapping in each decode function
   - InterchainJS: Declarative mapping with source field names

4. **Error Handling:**
   - CosmJS: Uses `assertString()` with fallback to empty string
   - InterchainJS: Uses `ensureString` which returns undefined for null/undefined

### 4. Version Differences

Across all three versions (tendermint34, tendermint37, comet38), the ABCI response handling is identical in both projects. The only differences noted in CosmJS comments are:
- Different Tendermint version references in comments
- EventAttribute type changes in 0.35+ (key/value changed from bytes to string)

### 5. Advantages of InterchainJS Refactored Approach

1. **DRY Principle:** No duplicate code across adapters
2. **Type Safety:** Codec pattern ensures type consistency
3. **Maintainability:** Single place to update conversion logic
4. **Extensibility:** Easy to add new fields or change conversion logic
5. **Testing:** Can test codecs independently from adapters

## Conclusion

While both approaches achieve the same result, InterchainJS's refactored codec pattern provides better maintainability and reduces code duplication compared to CosmJS's approach of having separate decode functions in each adapter.