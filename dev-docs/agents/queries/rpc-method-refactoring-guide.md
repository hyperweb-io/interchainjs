# RPC Method Refactoring Guide

## Overview
This document provides detailed work items and steps for refactoring RPC methods in the cosmos-query-client.ts following the established codec pattern. The refactoring aims to improve type safety, reduce code duplication, and create a more maintainable codebase.

## Quick Reference

### Well-Refactored Methods (Use as Examples)
- `getAbciInfo()` - Simple method without parameters
- `queryAbci()` - Method with parameters using specific encoder/decoder

### Key Files to Reference
- **Codec Infrastructure**: `/types/codec/base.ts`, `/types/codec/converters.ts`
- **ABCI Examples**: `/types/responses/common/abci.ts`, `/types/requests/common/abci.ts`
- **Base Adapter**: `/adapters/base.ts` (RequestEncoder, ResponseDecoder interfaces)
- **Query Client**: `/query/cosmos-query-client.ts`

### Refactoring Checklist
- [ ] Create response types and codec
- [ ] Create request types and codec (if applicable)
- [ ] Add decoder method to ResponseDecoder interface
- [ ] Add encoder method to RequestEncoder interface (if applicable)
- [ ] Implement methods in BaseAdapter
- [ ] Update query client to use specific methods
- [ ] Remove old logic from encodeParams/decodeResponse
- [ ] Test with real RPC responses

## Refactoring Pattern Summary

### Well-Refactored Methods Examples
1. **getAbciInfo** - Simple method without parameters
2. **queryAbci** - Method with parameters using specific encoder/decoder

### Key Principles
1. Use codec pattern for type conversion
2. Move common logic to base adapter
3. Use specific encode/decode methods instead of generic ones
4. Maintain type safety with proper interfaces
5. Follow consistent naming conventions

## Detailed Work Items for RPC Method Refactoring

### Phase 1: Infrastructure Setup

#### 1.1 Analyze Current Method Structure
- [ ] Identify the method in `cosmos-query-client.ts`
- [ ] Check if it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Identify the parameter types in `/types/requests/`
- [ ] Identify the response types in `/types/responses/`
- [ ] Check for any version-specific differences in adapters

#### 1.2 Create Type Organization
- [ ] Determine if types should go in `common/` or version-specific folders
- [ ] Create new file structure if needed, there'll be one request or response type and it's codec and creator function per file:
  ```
  types/
  ├── requests/
  │   └── common/
  │       └── [method-category-name]
  │           └── [request-type-name].ts
  └── responses/
      └── common/
          └── [method-category-name]
              └── [response-type-name].ts
  ```

### Phase 2: Response Type Refactoring

#### 2.1 Create Response Codec
- [ ] Create response type file in `/types/responses/[common/version-folder]/[method-category-name]/[response-type-name].ts`
- [ ] Define TypeScript interfaces for the response
- [ ] Check for nested objects and create separate interfaces/codecs for them
- [ ] Create codec using `createCodec()` factory function
- [ ] Implement creator functions that use the codec internally
- [ ] Add proper type conversions (string→number, base64→Uint8Array, etc.)
- [ ] Handle nested object conversions using `createNestedConverter` or inline converters

Example using AbciQuery response:

```typescript
// /types/responses/common/abci/proof-op.ts
import { createCodec } from '../../../codec';
import { ensureString, base64ToBytes } from '../../../codec/converters';

export interface ProofOp {
  readonly type: string;
  readonly key: Uint8Array;
  readonly data: Uint8Array;
}

export const ProofOpCodec = createCodec<ProofOp>({
  type: ensureString,
  key: base64ToBytes,
  data: base64ToBytes
});

export function createProofOp(data: unknown): ProofOp {
  return ProofOpCodec.create(data);
}
```

```typescript
// /types/responses/common/abci/query-proof.ts
import { createCodec } from '../../../codec';
import { createArrayConverter } from '../../../codec/converters';
import { createProofOp } from './proof-op';

export interface QueryProof {
  readonly ops: readonly ProofOp[];
}

export const QueryProofCodec = createCodec<QueryProof>({
  ops: createArrayConverter({ create: createProofOp })
});

export function createQueryProof(data: unknown): QueryProof {
  return QueryProofCodec.create(data);
}
```

```typescript
// /types/responses/common/abci/abci-query-response.ts
import { createCodec } from '../../../codec';
import { 
  apiToNumber, 
  ensureString, 
  apiToBigInt, 
  maybeBase64ToBytes 
} from '../../../codec/converters';
import { createQueryProof } from './query-proof';

export interface AbciQueryResponse {
  readonly code?: number;
  readonly log?: string;
  readonly info?: string;
  readonly index?: bigint;
  readonly key?: Uint8Array;
  readonly value?: Uint8Array;
  readonly proofOps?: QueryProof;
  readonly height?: bigint;
  readonly codespace?: string;
}

export const AbciQueryResponseCodec = createCodec<AbciQueryResponse>({
  code: apiToNumber,
  log: ensureString,
  info: ensureString,
  index: apiToBigInt,
  key: maybeBase64ToBytes,
  value: maybeBase64ToBytes,
  proofOps: {
    source: 'proof_ops',
    converter: (v) => v ? createQueryProof(v) : undefined
  },
  height: apiToBigInt,
  codespace: ensureString
});

export function createAbciQueryResponse(data: unknown): AbciQueryResponse {
  return AbciQueryResponseCodec.create(data);
}
```

```typescript
// /types/responses/common/abci/index.ts
export * from './proof-op';
export * from './query-proof';
export * from './abci-query-response';
export * from './abci-info-response';
```

#### 2.2 Add Decoder to ResponseDecoder Interface
- [ ] Add method signature to `ResponseDecoder` interface in `base.ts`
- [ ] Use generics for flexibility: `decodeMyMethod<T extends MyResponse = MyResponse>(response: unknown): T`

#### 2.3 Implement Decoder in BaseAdapter
- [ ] Add implementation in `BaseAdapter` class
- [ ] Use the creator function from the codec
- [ ] Handle response wrapper structure (response.response || response)
- [ ] Add proper type casting

Example:
```typescript
decodeMyMethod<T extends MyResponse = MyResponse>(response: unknown): T {
  const resp = response as Record<string, unknown>;
  const data = (resp.response || resp) as Record<string, unknown>;
  return createMyResponse(data) as T;
}
```

### Phase 3: Request Type Refactoring

#### 3.1 Create Request Codec
- [ ] Create request type files in `/types/requests/common/[method-name]/`
- [ ] Define TypeScript interfaces for parameters
- [ ] Create encoded parameter interface (how it's sent to RPC)
- [ ] Check for nested objects in request parameters
- [ ] Create codec for parameter encoding using `encode` configuration
- [ ] Add necessary converters (ensureString, ensureNumber, etc.)
- [ ] Handle optional parameters properly

Example using AbciQuery request:

```typescript
// /types/requests/common/abci/abci-query-params.ts
import { createCodec } from '../../../codec';
import { ensureNumber, ensureBoolean } from '../../../codec/converters';
import { toHex } from '@interchainjs/utils';
import { EncodedAbciQueryParams } from './encoded-abci-query-params';

export interface AbciQueryParams {
  readonly path: string;
  readonly data: Uint8Array;
  readonly height?: number;
  readonly prove?: boolean;
}

// Codec for encoding ABCI query parameters
export const AbciQueryParamsCodec = createCodec<EncodedAbciQueryParams>({
  path: (value: unknown) => String(value),
  data: {
    converter: (value: unknown) => {
      if (value instanceof Uint8Array) {
        return toHex(value);
      }
      throw new Error('data must be Uint8Array');
    }
  },
  height: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  },
  prove: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return ensureBoolean(value);
    }
  }
});

// Creator function that encodes the parameters
export function encodeAbciQueryParams(params: AbciQueryParams): EncodedAbciQueryParams {
  return AbciQueryParamsCodec.create(params);
}
```

```typescript
// /types/requests/common/abci/encoded-abci-query-params.ts
export interface EncodedAbciQueryParams {
  readonly path: string;
  readonly data: string;  // hex string
  readonly height?: string;  // string number
  readonly prove?: boolean;
}
```

```typescript
// /types/requests/common/abci/index.ts
export * from './abci-query-params';
export * from './encoded-abci-query-params';
```

Key differences from response codecs:
- Request codec is created on the `EncodedAbciQueryParams` type (the output type)
- Uses `codec.create()` instead of `codec.encode()` for the encoding function
- Converters handle the transformation from input types to encoded types
- Numbers are typically encoded as strings for RPC
- Binary data is hex-encoded using `toHex()` from `@interchainjs/utils`
- Optional fields need explicit null/undefined checks to avoid sending undefined values

**Note**: Some methods don't have parameters (e.g., `getAbciInfo`, `getHealth`). Skip Phase 3 for these methods and proceed directly to Phase 4.

#### 3.2 Add Encoder to RequestEncoder Interface
- [ ] Add method signature to `RequestEncoder` interface in `/adapters/base.ts`
- [ ] Use proper parameter and return types
- [ ] Follow naming convention: `encodeMethodName`

Example:
```typescript
// In RequestEncoder interface
export interface RequestEncoder {
  encodeAbciQuery(params: AbciQueryParams): EncodedAbciQueryParams;
  // Add your new method here:
  encodeBlock(params: BlockParams): EncodedBlockParams;
}
```

#### 3.3 Implement Encoder in BaseAdapter
- [ ] Add implementation in `BaseAdapter` class
- [ ] Use the encoder function from the codec
- [ ] Import the encoding function from the request types

Example:
```typescript
// In BaseAdapter class
import { encodeAbciQueryParams } from '../types/requests/common/abci';

encodeAbciQuery(params: AbciQueryParams): EncodedAbciQueryParams {
  return encodeAbciQueryParams(params);
}
```

**Note**: We do NOT update `encodeParams` anymore. The refactored code uses specific encoder methods directly, and `encodeParams` will eventually be removed. Each refactored method bypasses `encodeParams` entirely.

### Phase 4: Update Query Client

#### 4.1 Update Method Implementation
- [ ] Change from generic `encodeParams` to specific encoder method
- [ ] Change from generic `decodeResponse` to specific decoder method
- [ ] Update imports to use the appropriate index files (e.g., `from '../types/requests/common/abci'`)
- [ ] Use proper typed parameters instead of inline objects

Before (what queryAbci would have looked like before refactoring):
```typescript
async queryAbci(params: AbciQueryParams): Promise<AbciQueryResult> {
  const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.ABCI_QUERY, params);
  const result = await this.rpcClient.call(RpcMethod.ABCI_QUERY, encodedParams);
  return this.protocolAdapter.decodeResponse(RpcMethod.ABCI_QUERY, result);
}
```

After (current refactored queryAbci method):
```typescript
async queryAbci(params: AbciQueryParams): Promise<AbciQueryResult> {
  const encodedParams = this.protocolAdapter.encodeAbciQuery(params);
  const result = await this.rpcClient.call(RpcMethod.ABCI_QUERY, encodedParams);
  return this.protocolAdapter.decodeAbciQuery(result);
}
```

Key changes:
- Uses specific `encodeAbciQuery()` instead of generic `encodeParams()`
- Uses specific `decodeAbciQuery()` instead of generic `decodeResponse()`
- No need to pass `RpcMethod` to encode/decode functions
- Cleaner, more type-safe code

### Phase 5: Testing and Validation

#### 5.1 Type Checking
- [ ] Run TypeScript compiler to ensure no type errors
- [ ] Verify all imports are correct
- [ ] Check that generic constraints work properly

#### 5.2 Runtime Testing
- [ ] Test with actual RPC responses
- [ ] Verify type conversions work correctly
- [ ] Check edge cases (null, undefined, empty values)

#### 5.3 Backward Compatibility
- [ ] Ensure existing code still works
- [ ] Update any dependent code
- [ ] Check version-specific adapters if applicable

### Phase 6: Cleanup

#### 6.1 Remove Old Code
- [ ] Remove method-specific logic from `decodeResponse` (if all methods are refactored)
- [ ] Remove unused imports
- [ ] Do NOT modify `encodeParams` - it will be removed entirely once all methods are refactored

#### 6.2 Documentation
- [ ] Add JSDoc comments to new methods
- [ ] Update any existing documentation
- [ ] Create summary of changes

## Method-Specific Considerations

### Block-Related Methods
- `getBlock`, `getBlockByHash`, `getBlockResults`
- Complex nested structures (Block contains Header, Data, Evidence, LastCommit)
- Need careful handling of nested type conversions

### Transaction Methods
- `getTx`, `searchTxs`, `broadcastTx*`
- Different broadcast modes have different response structures
- Search methods return arrays that need mapping

### Validator Methods
- `getValidators`
- Contains nested validator structures
- Pagination parameters need encoding

### Consensus Methods
- `getConsensusParams`, `getConsensusState`
- Version-specific differences may exist
- Complex nested parameter structures

## Common Pitfalls to Avoid

1. **Forgetting Optional Fields**: Always handle undefined/null properly
2. **Base64 Conversion**: Use `toUint8Array` for binary data fields
3. **Number Conversion**: RPC returns strings for numbers, always convert
4. **Snake Case**: RPC uses snake_case, TypeScript uses camelCase
5. **Response Wrapper**: Some responses are wrapped in `{ response: {...} }`
6. **Array Handling**: Use `createArrayConverter` for arrays of complex types
7. **Nested Objects**: Use `createNestedConverter` for nested object types
8. **Error Handling**: Codecs should handle invalid data gracefully

## Naming Conventions

### Types and Interfaces
- Response types: `MyMethodResponse`
- Request parameter types: `MyMethodParams`
- Encoded parameter types: `EncodedMyMethodParams`

### Codec Instances
- Response codecs: `MyMethodResponseCodec` (PascalCase)
- Request codecs: `MyMethodParamsCodec` (PascalCase)

### Functions
- Creator functions: `createMyMethodResponse` (camelCase)
- Encoder functions: `encodeMyMethodParams` (camelCase)
- Decoder methods: `decodeMyMethod` (camelCase)
- Encoder methods: `encodeMyMethod` (camelCase)

## Benefits of Refactoring

1. **Type Safety**: Compile-time checking of all conversions
2. **Maintainability**: Centralized conversion logic
3. **Testability**: Easy to unit test codecs independently
4. **Consistency**: All methods follow the same pattern
5. **Performance**: Reduced runtime type checking
6. **Extensibility**: Easy to add new fields or change conversions

## Example: Complete Refactoring of queryAbci

Here's a complete example using the already well-refactored `queryAbci` method:

### Step 1: Response Types Created
```typescript
// /types/responses/common/abci/proof-op.ts
import { createCodec } from '../../../codec';
import { ensureString, base64ToBytes } from '../../../codec/converters';

export interface ProofOp {
  readonly type: string;
  readonly key: Uint8Array;
  readonly data: Uint8Array;
}

export const ProofOpCodec = createCodec<ProofOp>({
  type: ensureString,
  key: base64ToBytes,
  data: base64ToBytes
});

export function createProofOp(data: unknown): ProofOp {
  return ProofOpCodec.create(data);
}

// /types/responses/common/abci/abci-query-response.ts
export interface AbciQueryResponse {
  readonly code?: number;
  readonly log?: string;
  readonly info?: string;
  readonly index?: bigint;
  readonly key?: Uint8Array;
  readonly value?: Uint8Array;
  readonly proofOps?: QueryProof;
  readonly height?: bigint;
  readonly codespace?: string;
}

export const AbciQueryResponseCodec = createCodec<AbciQueryResponse>({
  code: apiToNumber,
  log: ensureString,
  info: ensureString,
  index: apiToBigInt,
  key: maybeBase64ToBytes,
  value: maybeBase64ToBytes,
  proofOps: {
    source: 'proof_ops',
    converter: (v) => v ? createQueryProof(v) : undefined
  },
  height: apiToBigInt,
  codespace: ensureString
});

export function createAbciQueryResponse(data: unknown): AbciQueryResponse {
  return AbciQueryResponseCodec.create(data);
}
```

### Step 2: Request Types Created
```typescript
// /types/requests/common/abci/abci-query-params.ts
import { createCodec } from '../../../codec';
import { ensureNumber, ensureBoolean } from '../../../codec/converters';
import { toHex } from '@interchainjs/utils';
import { EncodedAbciQueryParams } from './encoded-abci-query-params';

export interface AbciQueryParams {
  readonly path: string;
  readonly data: Uint8Array;
  readonly height?: number;
  readonly prove?: boolean;
}

export const AbciQueryParamsCodec = createCodec<EncodedAbciQueryParams>({
  path: (value: unknown) => String(value),
  data: {
    converter: (value: unknown) => {
      if (value instanceof Uint8Array) {
        return toHex(value);
      }
      throw new Error('data must be Uint8Array');
    }
  },
  height: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  },
  prove: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return ensureBoolean(value);
    }
  }
});

export function encodeAbciQueryParams(params: AbciQueryParams): EncodedAbciQueryParams {
  return AbciQueryParamsCodec.create(params);
}
```

### Step 3: Interfaces and Adapter Updated
```typescript
// In ResponseDecoder interface
decodeAbciQuery<T extends AbciQueryResponse = AbciQueryResponse>(response: unknown): T;

// In RequestEncoder interface  
encodeAbciQuery(params: AbciQueryParams): EncodedAbciQueryParams;

// In BaseAdapter
import { encodeAbciQueryParams } from '../types/requests/common/abci';
import { createAbciQueryResponse } from '../types/responses/common/abci';

encodeAbciQuery(params: AbciQueryParams): EncodedAbciQueryParams {
  return encodeAbciQueryParams(params);
}

decodeAbciQuery<T extends AbciQueryResponse = AbciQueryResponse>(response: unknown): T {
  const res = response as any;
  return createAbciQueryResponse(res.response || res) as T;
}
```

### Step 4: Query Client Updated
```typescript
// Final refactored method in cosmos-query-client.ts
async queryAbci(params: AbciQueryParams): Promise<AbciQueryResult> {
  const encodedParams = this.protocolAdapter.encodeAbciQuery(params);
  const result = await this.rpcClient.call(RpcMethod.ABCI_QUERY, encodedParams);
  return this.protocolAdapter.decodeAbciQuery(result);
}
```

This example demonstrates:
- Proper file organization with nested types in separate files
- Codec creation for both request and response types
- Handling of nested objects (ProofOp, QueryProof)
- Type conversions (base64→Uint8Array, number→string, etc.)
- Clean separation of concerns between encoding/decoding logic

## Available Converter Functions

The following converter functions are available in `/types/codec/converters.ts`:

### Basic Type Converters
- `apiToNumber`: Converts string/number to number (returns undefined for invalid)
- `apiToBigInt`: Converts string/number to bigint (returns undefined for invalid)
- `apiToBoolean`: Converts various types to boolean
- `apiToDate`: Converts string/number to Date (returns undefined for invalid)

### Binary Data Converters
- `base64ToBytes`: Converts base64 string to Uint8Array (throws on error)
- `maybeBase64ToBytes`: Converts base64 to Uint8Array (returns undefined on error)
- `hexToBytes`: Converts hex string to Uint8Array (throws on error)
- `maybeHexToBytes`: Converts hex to Uint8Array (returns undefined on error)

### Ensure Converters (for encoding)
- `ensureString`: Ensures value is string (converts if needed)
- `ensureNumber`: Ensures value is number (throws if invalid)
- `ensureBoolean`: Ensures value is boolean (throws if invalid)
- `ensureDate`: Ensures value is Date (throws if invalid)
- `ensureBigInt`: Ensures value is bigint (throws if invalid)
- `ensureBytes`: Ensures value is Uint8Array (converts from hex if string)

### Complex Type Converters
- `createEnumConverter`: Creates converter for enum values
- `createNestedConverter`: Creates converter for nested objects
- `createArrayConverter`: Creates converter for arrays of objects

### Special Converters
- **Identity function**: For fields that don't need conversion, you can pass the value directly without a converter, or use `(v) => v`
- **Custom converters**: You can create inline converters like `(v) => v != null ? String(v) : undefined`

## Codec Pattern Details

### Using createCodec Factory

The `createCodec` factory function in this project uses a simplified syntax:

```typescript
// For response decoding
export const MyResponseCodec = createCodec<MyResponse>({
  field1: converter1,
  field2: {
    source: 'field_2',  // Maps snake_case from API
    converter: converter2
  },
  field3: converter3
});

// For request encoding
export const MyParamsCodec = createCodec<EncodedMyParams>({
  field1: (value: unknown) => String(value),
  field2: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(value);
    }
  }
});
```

Note: 
- Response codecs are created on the output type and use `codec.create()` for decoding
- Request codecs are also created on the output type (encoded params) and use `codec.create()` for encoding
- Both use the same pattern but with different converter functions (decode vs encode)

### Handling Nested Types

Nested objects are very common in RPC responses and require special attention. Here's a comprehensive guide:

#### 1. Identify Nested Structures
Before creating codecs, analyze the response structure:
- Single nested objects (e.g., `block.header`)
- Arrays of objects (e.g., `validators[]`)
- Deeply nested structures (e.g., `block.header.version`)
- Optional nested objects (may be null/undefined)

#### 2. Create Codecs Bottom-Up
Always create codecs for the deepest nested types first:

```typescript
// Step 1: Deepest nested type
export interface BlockVersion {
  readonly block: bigint;
  readonly app?: bigint;
}

export const BlockVersionCodec = createCodec<BlockVersion>({
  block: apiToBigInt,
  app: apiToBigInt
});

// Step 2: Parent type that uses the nested type
export interface BlockHeader {
  readonly version: BlockVersion;
  readonly chainId: string;
  readonly height: bigint;
  // ... other fields
}

export const BlockHeaderCodec = createCodec<BlockHeader>({
  version: (v) => createBlockVersion(v),
  chainId: {
    source: 'chain_id',
    converter: ensureString
  },
  height: apiToBigInt
});
```

#### 3. Handling Arrays of Nested Objects

```typescript
// For arrays, use createArrayConverter
export interface ValidatorsResponse {
  readonly blockHeight: bigint;
  readonly validators: readonly ValidatorInfo[];
}

export const ValidatorsResponseCodec = createCodec<ValidatorsResponse>({
  blockHeight: {
    source: 'block_height',
    converter: apiToBigInt
  },
  validators: createArrayConverter({ create: createValidatorInfo })
});
```

#### 4. Optional Nested Objects

```typescript
// Handle optional nested objects with inline converter
export const ResponseCodec = createCodec<Response>({
  optionalNested: {
    source: 'optional_nested',
    converter: (v) => v ? createNestedType(v) : undefined
  }
});
```

#### 5. Common Patterns for Nested Objects

```typescript
// Pattern 1: Direct nested object conversion
nestedField: (v) => createNestedType(v)

// Pattern 2: Optional nested object
optionalField: (v) => v ? createNestedType(v) : undefined

// Pattern 3: Array of nested objects
arrayField: createArrayConverter({ create: createNestedType })

// Pattern 4: Nested with source mapping
nestedField: {
  source: 'nested_field',
  converter: (v) => createNestedType(v)
}

// Pattern 5: Deeply nested access (use with caution)
deepValue: {
  source: 'parent.child.value',
  converter: apiToNumber
}
```

#### 6. Error Handling for Nested Types

```typescript
// Safe nested object creation with validation
export function createNestedType(data: unknown): NestedType {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid nested data: expected object');
  }
  return NestedTypeCodec.create(data);
}

// For optional nested objects, handle gracefully
converter: (v) => {
  try {
    return v ? createNestedType(v) : undefined;
  } catch (e) {
    console.warn('Failed to parse nested type:', e);
    return undefined;
  }
}
```

#### 7. File Organization for Nested Types

When dealing with complex nested structures, organize files logically:

```
types/responses/common/block/
├── index.ts           # Re-exports all types
├── block.ts           # Main Block type and codec
├── block-header.ts    # BlockHeader type and codec
├── block-id.ts        # BlockId type and codec
├── block-version.ts   # BlockVersion type and codec
└── block-response.ts  # BlockResponse wrapper type
```

Each file should:
1. Define its interface
2. Create its codec
3. Export the creator function
4. Import and use nested type creators as needed

Example file structure:
```typescript
// block-version.ts
export interface BlockVersion { ... }
export const BlockVersionCodec = createCodec<BlockVersion>({ ... });
export function createBlockVersion(data: unknown): BlockVersion { ... }

// block-header.ts
import { createBlockVersion } from './block-version';
export interface BlockHeader { ... }
export const BlockHeaderCodec = createCodec<BlockHeader>({
  version: (v) => createBlockVersion(v),
  // ... other fields
});
export function createBlockHeader(data: unknown): BlockHeader { ... }
```

## Version-Specific Considerations

When dealing with version differences:

1. Check if the type differs between Tendermint 0.34, 0.37, and CometBFT 0.38
2. If differences exist, create version-specific folders:
   ```
   responses/
   ├── common/        # Shared types
   ├── tendermint34/  # v0.34 specific
   ├── tendermint37/  # v0.37 specific
   └── comet38/       # v0.38 specific
   ```
3. Override only the specific methods in version adapters
4. Keep common logic in the base adapter

## Conclusion

This guide provides a systematic approach to refactoring RPC methods. By following these steps, each method will be transformed to use the codec pattern, resulting in cleaner, more maintainable, and type-safe code. The key is to be methodical and ensure each phase is completed before moving to the next.

Remember to:
- Always check existing refactored methods for patterns
- Use the appropriate converter functions
- Maintain consistency with naming conventions
- Test thoroughly with real RPC responses
- Document any special cases or version differences