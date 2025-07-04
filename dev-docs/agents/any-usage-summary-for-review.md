# Summary: "any" Usage in networks/cosmos

## Overview
- **Total Files:** 16 files containing "any" (excluding .d.ts files)
- **Total Occurrences:** ~400+ instances
- **Main Concentration:** 70% in adapter pattern files

## Usage Categories & Proposed Solutions

### 1. **Adapter Methods** (~280 instances) - HIGHEST PRIORITY
**Location:** `adapters/base.ts`, `adapters/tendermint*.ts`, `adapters/comet38.ts`

**Current Pattern:**
```typescript
decodeBlock(response: any): any;
decodeAbciInfo(response: any): any;
// ... 30+ similar methods
```

**Solution Options:**
- **A) Generic Methods** ✓ (Recommended)
  ```typescript
  decodeBlock<T = unknown>(response: unknown): T;
  ```
- **B) Specific Interfaces**
  ```typescript
  decodeBlock(response: BlockResponse): DecodedBlock;
  ```
- **C) Unknown Types**
  ```typescript
  decodeBlock(response: unknown): unknown;
  ```

### 2. **Response Type Fields** (~10 instances)
**Location:** `types/responses.ts`

**Current:**
```typescript
readonly evidence: readonly any[];
readonly roundState: any;
readonly peers: readonly any[];
readonly result: any;
```

**Solution:** Replace with `unknown` or specific types
```typescript
readonly evidence: readonly unknown[];
readonly roundState: unknown;
readonly peers: readonly unknown[];
readonly result: TxData; // specific type where known
```

### 3. **Type Assertions** (~15 instances)
**Location:** Various files

**Current:**
```typescript
const response = await tempClient.call('status') as any;
events: [] as any[]
(this as any).decodeBroadcastTxSync
```

**Solution:** Use proper type assertions or remove need for them

### 4. **Generic Type Parameters** (~20 instances)
**Location:** `types/signing-client.ts`, `workflows/types.ts`

**Current:**
```typescript
TelescopeGeneratedCodec<any, any, any>
Message<any>
ctx.getStagingData<any>(...)
```

**Solution:** Use `unknown` or define constraints

### 5. **Error Handling** (~5 instances)
**Location:** `rpc/*.ts`, `event/*.ts`

**Current:**
```typescript
} catch (error: any) {
```

**Solution:** Remove type annotation (TypeScript infers `unknown`)
```typescript
} catch (error) {
```

### 6. **Callback/Handler Types** (~10 instances)
**Location:** `rpc/websocket-client.ts`, `types/signing-client.ts`

**Current:**
```typescript
(value: any) => void
toAmino: (value: any) => any
```

**Solution:** Use generics
```typescript
<T>(value: T) => void
toAmino: <T, R>(value: T) => R
```

### 7. **Variable Declarations** (~5 instances)
**Location:** `adapters/base.ts`

**Current:**
```typescript
const transformed: any = {};
```

**Solution:** Use proper types
```typescript
const transformed: Record<string, unknown> = {};
```

### 8. **Import Statements** (2 instances)
**Note:** These import the protobuf `Any` type, NOT TypeScript's `any`
```typescript
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
```
**Solution:** Keep as-is (legitimate usage)

## Implementation Plan

### Phase 1: Quick Wins (Low Risk)
1. Fix error handling: Remove `: any` from catch blocks
2. Replace `any[]` with `unknown[]`
3. Replace simple `any` properties with `unknown`

### Phase 2: Type Assertions (Medium Risk)
1. Remove `as any` assertions
2. Add proper type definitions where needed
3. Fix callback parameter types

### Phase 3: Adapter Pattern (High Risk)
1. Update base adapter interface to use generics
2. Update all adapter implementations
3. Update calling code to handle generic returns

## Questions for Review

1. **Adapter Pattern Approach**: Which solution do you prefer?
   - A) Generic methods with `<T = unknown>` ✓
   - B) Specific interfaces for each method
   - C) Simple `unknown` replacement

Comment: I understand this's the main part of the usage of "any", let's fix this only and make the project build this time. Here's some suggestion:

- for method like this, decodeResponse should be using generic, since we know exactly what's the return type:
    return this.protocolAdapter.decodeResponse(RpcMethod.STATUS, result);

- for method like this:
  decodeAbciInfo(response: any): any;
  ->   decodeAbciInfo<T = AbciInfo>(response: Record<string, unknown>): T;
  - the response should be unknown, and inside should usually recursively be Record<string, unknown>. And when you're using it's values of the keys, you should use like this, define variables or const for the converting:
    const resp = response as Record<string, unknown>;
    const data: Record<string, unknown> = resp.data as ...;
    const hash: string = data.hash as ...;
  - the decoding result should be default by the response type of each rpc method(since the default response will cover 99% of the case)


2. **Migration Strategy**: Should we:
   - Fix all at once
   - Phase by phase ✓
   - File by file

Comment: the phase 1 is to fixed adapter related logics, and then we'll see what's the next.

3. **Type Definitions**: Should we:
   - Create new interfaces for all untyped data
   - Use `unknown` and let consumers handle typing
   - Mix of both based on usage frequency ✓

Comment: There're some problem of the workflow plugin types usage. Basically, each plugin should define its return types in its file. Then the consumer plugins can refer from their deps for those returned types. I just leave the comment here, we correct this in a future phase.

4. **Test Files**: Should we:
   - Update test files to remove `any`
   - Leave test files as-is for flexibility
   - Only fix non-test files ✓

## Next Steps
Please mark your preferences for each category, and I'll implement the fixes accordingly.

Overall comment:
Ok, I've left my options and comments, you can now do the phase 1 fix based on those.
Phase 1 is to fix query client adapter related code.
DON'T change this doc, you create a phase-1 version while doing the phase 1 fix, and ask for future advices