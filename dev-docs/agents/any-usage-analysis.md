# Analysis of "any" Usage in networks/cosmos

## Summary
Total files with "any" usage: 16 files (excluding .d.ts files)
Total occurrences: ~400+ instances

## Categories of "any" Usage

### 1. **Adapter Pattern - Method Signatures** (~280 instances)
**Files:** `adapters/base.ts`, `adapters/tendermint34.ts`, `adapters/tendermint37.ts`, `adapters/comet38.ts`

**Pattern:** All adapter methods use `any` for both parameters and return types:
```typescript
decodeAbciInfo(response: any): any;
decodeBlock(response: any): any;
// ... 30+ similar methods per adapter
```

**Sub-patterns:**
- Abstract method declarations in base.ts
- Concrete implementations in adapter files
- Helper methods like `decodeEvent(event: any): any`
- Array mapping callbacks: `.map((item: any) => ...)`

### 2. **Type Assertions** (~15 instances)
**Files:** `client-factory.ts`, `adapters/base.ts`, `query/__tests__/broadcast.test.ts`, `signers/base-signer.ts`

**Patterns:**
```typescript
// Direct assertions
const response = await tempClient.call('status') as any;
const commitResponse = response as any;

// Array assertions
events: [] as any[]

// Method access workarounds
(this as any).decodeBroadcastTxSync
```

### 3. **Generic Type Parameters** (~20 instances)
**Files:** `types/signing-client.ts`, `workflows/types.ts`, `event/cosmos-event-client.ts`

**Patterns:**
```typescript
// Telescope codec generics
TelescopeGeneratedCodec<any, any, any>

// Message generics
Message<any>

// Generic method calls
ctx.getStagingData<any>(STAGING_KEYS.OPTIONS)
rpcClient.subscribe<any>(...)
```

### 4. **Response/Data Types** (~10 instances)
**Files:** `types/responses.ts`, `workflows/types.ts`

**Patterns:**
```typescript
// Untyped response fields
readonly evidence: readonly any[];
readonly roundState: any;
readonly peers: readonly any[];
readonly result: any;

// Message value field
value: any;
```

### 5. **Error Handling** (~5 instances)
**Files:** `rpc/http-client.ts`, `rpc/websocket-client.ts`, `event/cosmos-event-client.ts`

**Pattern:**
```typescript
} catch (error: any) {
```

### 6. **Callback/Handler Types** (~5 instances)
**Files:** `rpc/websocket-client.ts`, `types/signing-client.ts`, `workflows/types.ts`

**Patterns:**
```typescript
// WebSocket handlers
resolve: (value: any) => void;
private subscriptions = new Map<string, (data: any) => void>();

// Encoder/converter interfaces
encode: (value: any) => Uint8Array;
toAmino: (value: any) => any;
fromAmino: (value: any) => any;
```

### 7. **Variable Declarations** (~5 instances)
**Files:** `adapters/base.ts`, `event/cosmos-event-client.ts`

**Patterns:**
```typescript
const transformed: any = {};
const encoded: any = {};
const filterObj = filter as Record<string, any>;
```

### 8. **Import Statements** (2 instances)
**Files:** `workflows/types.ts`, `signers/base-signer.ts`

**Pattern:**
```typescript
import { Any } from '@interchainjs/cosmos-types/google/protobuf/any';
```
Note: This is importing the protobuf `Any` type, not TypeScript's `any`.

### 9. **Promise Return Types** (~2 instances)
**Files:** `signers/base-signer.ts`

**Pattern:**
```typescript
private async waitForTransaction(hash: string, timeout: number = 30000): Promise<any>
```

### 10. **Union Types in Generics** (~5 instances)
**Files:** `workflows/types.ts`

**Pattern:**
```typescript
IUniSigner<
  any, // broadcast options
  any  // broadcast response
>
```

## Recommended Solutions by Category

### For each category, potential solutions:

1. **Adapter Pattern**: Create proper interfaces for request/response types
2. **Type Assertions**: Use proper type guards or generic constraints
3. **Generic Type Parameters**: Define specific type parameters or constraints
4. **Response/Data Types**: Create interfaces for untyped fields
5. **Error Handling**: Use `unknown` in catch blocks
6. **Callback/Handler Types**: Use generic type parameters
7. **Variable Declarations**: Use proper object types or Records
8. **Import Statements**: Keep as-is (legitimate protobuf type)
9. **Promise Return Types**: Define proper return type interfaces
10. **Union Types in Generics**: Define proper constraint interfaces

## Impact Assessment

- **High Impact Areas**: Adapter pattern methods (majority of occurrences)
- **Medium Impact**: Type assertions, generic parameters
- **Low Impact**: Error handling, imports

## Build Considerations

- Changes to adapter interfaces will affect all implementations
- Generic constraints may require updates to calling code
- Test files may need updates for mock data