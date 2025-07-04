# Phase 1: Adapter Pattern "any" Removal Implementation

## Overview
This document tracks the Phase 1 implementation of removing "any" usage from adapter-related code in networks/cosmos.

## Scope
- **Files to modify:**
  - `adapters/base.ts` (interface definitions)
  - `adapters/tendermint34.ts`
  - `adapters/tendermint37.ts`
  - `adapters/comet38.ts`

## Implementation Strategy

### 1. Update Base Adapter Interface
- Change all decode methods to use generics with proper defaults
- Update `decodeResponse` to be generic
- Update helper methods to use `unknown` instead of `any`

### 2. Method Signature Pattern
```typescript
// From:
decodeAbciInfo(response: any): any;

// To:
decodeAbciInfo<T = AbciInfo>(response: unknown): T;
```

### 3. Implementation Pattern
```typescript
decodeAbciInfo<T = AbciInfo>(response: unknown): T {
  const resp = response as Record<string, unknown>;
  const data = resp.data as Record<string, unknown>;
  
  // Build result with proper type conversions
  const result: AbciInfo = {
    // ... implementation
  };
  
  return result as T;
}
```

## Progress Tracking

### Base Adapter (adapters/base.ts)
- [x] Update ResponseDecoder interface - Added generics with proper default types
- [x] Update abstract method declarations - All methods now use generics
- [x] Update helper methods (transformKeys, convertKeysToCamelCase, etc.) - Changed to use unknown
- [x] Update decodeResponse method - Now generic with proper type casting
- [x] Update IProtocolAdapter interface - encodeParams and decodeResponse use unknown/generics
- [x] Changed convertKeysToCamelCase from private to protected for adapter access

### Adapter Implementations
- [ ] tendermint34.ts
- [ ] tendermint37.ts
- [ ] comet38.ts

## Build Results
- Initial errors: TBD
- Final errors: TBD

## Notes
- Using `unknown` for response parameter (not `Record<string, unknown>`)
- Cast to `Record<string, unknown>` inside methods
- Default generic types match RPC response types
- Proper variable declarations for type conversions