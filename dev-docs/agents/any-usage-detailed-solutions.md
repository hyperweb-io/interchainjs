# Detailed Solutions for "any" Usage in networks/cosmos

## Solution Approaches

### Approach 1: Generic Type Parameters (Recommended for Adapters)
**Pros:** Type-safe, flexible, maintains compatibility
**Cons:** More complex implementation

Example:
```typescript
// Instead of:
decodeBlock(response: any): any;

// Use:
decodeBlock<T = unknown>(response: unknown): T;
```

### Approach 2: Specific Interfaces
**Pros:** Most type-safe, clear contracts
**Cons:** Requires defining many interfaces, breaking changes

Example:
```typescript
// Instead of:
decodeBlock(response: any): any;

// Use:
decodeBlock(response: BlockResponse): DecodedBlock;
```

### Approach 3: Unknown with Type Assertions
**Pros:** Quick fix, safer than any
**Cons:** Requires type assertions at usage

Example:
```typescript
// Instead of:
decodeBlock(response: any): any;

// Use:
decodeBlock(response: unknown): unknown;
```

## Specific File Solutions

### 1. **adapters/base.ts** (Interface Definition)
**Current:** ~40 methods with `any` parameters and returns
**Solution Options:**
- **Option A**: Make all methods generic with default `unknown`
- **Option B**: Create specific interfaces for each method
- **Option C**: Use `unknown` throughout with type assertions

### 2. **types/responses.ts**
**Current:**
```typescript
readonly evidence: readonly any[];
readonly roundState: any;
readonly peers: readonly any[];
readonly result: any;
```
**Solution:**
```typescript
readonly evidence: readonly unknown[];
readonly roundState: unknown;
readonly peers: readonly unknown[];
readonly result: TxData; // or specific type
```

### 3. **types/signing-client.ts**
**Current:**
```typescript
TelescopeGeneratedCodec<any, any, any>
fromPartial: (data: any) => any;
```
**Solution:**
```typescript
TelescopeGeneratedCodec<unknown, unknown, unknown>
fromPartial: <T = unknown>(data: unknown) => T;
```

### 4. **workflows/types.ts**
**Current:**
```typescript
CosmosMessage<T = any>
value: any;
IUniSigner<any, any>
```
**Solution:**
```typescript
CosmosMessage<T = unknown>
value: T; // use the generic
IUniSigner<BroadcastOptions, BroadcastResponse>
```

### 5. **Error Handling Files**
**Current:**
```typescript
} catch (error: any) {
```
**Solution:**
```typescript
} catch (error) {
  // TypeScript infers as unknown
  // or explicitly:
} catch (error: unknown) {
```

### 6. **Type Assertions**
**Current:**
```typescript
const response = await tempClient.call('status') as any;
(this as any).decodeBroadcastTxSync
```
**Solution:**
```typescript
const response = await tempClient.call('status') as StatusResponse;
// For method access, use proper typing or type guards
```

### 7. **Callback Types**
**Current:**
```typescript
(value: any) => void
(data: any) => any
```
**Solution:**
```typescript
<T = unknown>(value: T) => void
<T = unknown, R = unknown>(data: T) => R
```

## Implementation Priority

### Phase 1: Low Risk Changes
1. Error handling: `catch (error: any)` → `catch (error)`
2. Array types: `any[]` → `unknown[]`
3. Simple properties: `roundState: any` → `roundState: unknown`

### Phase 2: Medium Risk Changes
1. Type assertions: Remove `as any`, use proper types
2. Callback parameters in maps
3. Variable declarations

### Phase 3: High Risk Changes (Adapter Pattern)
1. Make adapter interface methods generic
2. Update all adapter implementations
3. Update calling code to use generics

## Type Definition Needs

### New Interfaces Required:
1. `StatusResponse` for client-factory.ts
2. `BroadcastOptions` and `BroadcastResponse` for IUniSigner
3. `TxData` for result field in TxEvent
4. Specific response types for each adapter method (optional)

### Existing Types to Leverage:
1. `Record<string, unknown>` for generic objects
2. `unknown` as default for untyped data
3. Generic constraints for type safety

## Testing Considerations

1. Test files using `as any[]` should be updated
2. Mock data may need type definitions
3. Type assertions in tests can remain for simplicity

## Migration Strategy

1. Start with simple replacements (any → unknown)
2. Add generic parameters to interfaces
3. Update implementations incrementally
4. Add specific types where beneficial
5. Run build after each phase to verify