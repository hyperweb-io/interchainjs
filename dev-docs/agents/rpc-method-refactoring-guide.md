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
- [ ] Create new file structure if needed:
  ```
  types/
  ├── requests/
  │   └── common/
  │       └── [method-name].ts
  └── responses/
      └── common/
          └── [method-name].ts
  ```

### Phase 2: Response Type Refactoring

#### 2.1 Create Response Codec
- [ ] Create response type file in `/types/responses/common/[method-name].ts`
- [ ] Define TypeScript interfaces for the response
- [ ] Create codec using `createCodec()` factory function
- [ ] Implement creator functions that use the codec internally
- [ ] Add proper type conversions (string→number, base64→Uint8Array, etc.)

Example structure:
```typescript
// Define interfaces
export interface MyResponse {
  field1: string;
  field2: number;
  field3?: Uint8Array;
}

// Create codec
export const MyResponseCodec = createCodec<RawMyResponse, MyResponse>({
  decode: {
    field1: identity,
    field2: toNumber,
    field3: toUint8Array
  }
});

// Create helper function
export function createMyResponse(data: unknown): MyResponse {
  return MyResponseCodec.decode(data);
}
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
- [ ] Create request type file in `/types/requests/common/[method-name].ts`
- [ ] Define TypeScript interfaces for parameters
- [ ] Create encoded parameter interface
- [ ] Create codec for parameter encoding
- [ ] Add necessary converters (ensureString, ensureNumber, etc.)

Example structure:
```typescript
export interface MyMethodParams {
  param1: string;
  param2?: number;
  param3?: boolean;
}

export interface EncodedMyMethodParams {
  param1: string;
  param2?: string;  // numbers encoded as strings
  param3?: boolean;
}

export const MyMethodParamsCodec = createCodec<MyMethodParams, EncodedMyMethodParams>({
  encode: {
    param1: ensureString,
    param2: (v) => v != null ? String(v) : undefined,
    param3: ensureBoolean
  }
});

export function encodeMyMethodParams(params: MyMethodParams): EncodedMyMethodParams {
  return MyMethodParamsCodec.encode(params);
}
```

#### 3.2 Add Encoder to RequestEncoder Interface
- [ ] Add method signature to `RequestEncoder` interface
- [ ] Use proper parameter and return types

#### 3.3 Implement Encoder in BaseAdapter
- [ ] Add implementation in `BaseAdapter` class
- [ ] Use the encoder function from the codec
- [ ] Update `encodeParams` to delegate to specific encoder

### Phase 4: Update Query Client

#### 4.1 Update Method Implementation
- [ ] Change from generic `encodeParams` to specific encoder method
- [ ] Change from generic `decodeResponse` to specific decoder method
- [ ] Update imports to use direct paths (not through index files)

Before:
```typescript
async getBlock(height?: number): Promise<Block> {
  const params: BlockParams = height ? { height } : {};
  const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.BLOCK, params);
  const result = await this.rpcClient.call(RpcMethod.BLOCK, encodedParams);
  return this.protocolAdapter.decodeResponse(RpcMethod.BLOCK, result);
}
```

After:
```typescript
async getBlock(height?: number): Promise<Block> {
  const params: BlockParams = height ? { height } : {};
  const encodedParams = this.protocolAdapter.encodeBlock(params);
  const result = await this.rpcClient.call(RpcMethod.BLOCK, encodedParams);
  return this.protocolAdapter.decodeBlock(result);
}
```

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
- [ ] Remove method-specific logic from `encodeParams`
- [ ] Remove method-specific logic from `decodeResponse`
- [ ] Remove unused imports

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

## Example: Complete Refactoring of getBlock

### Step 1: Create Response Types and Codec
```typescript
// types/responses/common/block.ts
export interface Block {
  blockId: BlockId;
  block: BlockData;
}

export const BlockCodec = createCodec<RawBlock, Block>({
  decode: {
    blockId: (v) => createBlockId(v),
    block: (v) => createBlockData(v)
  }
});

export function createBlock(data: unknown): Block {
  return BlockCodec.decode(data);
}
```

### Step 2: Create Request Types and Codec
```typescript
// types/requests/common/block.ts
export interface BlockParams {
  height?: number;
}

export interface EncodedBlockParams {
  height?: string;
}

export const BlockParamsCodec = createCodec<BlockParams, EncodedBlockParams>({
  encode: {
    height: (v) => v != null ? String(v) : undefined
  }
});

export function encodeBlockParams(params: BlockParams): EncodedBlockParams {
  return BlockParamsCodec.encode(params);
}
```

### Step 3: Update Interfaces and BaseAdapter
```typescript
// In RequestEncoder interface
encodeBlock(params: BlockParams): EncodedBlockParams;

// In ResponseDecoder interface  
decodeBlock<T extends Block = Block>(response: unknown): T;

// In BaseAdapter
encodeBlock(params: BlockParams): EncodedBlockParams {
  return encodeBlockParams(params);
}

decodeBlock<T extends Block = Block>(response: unknown): T {
  const resp = response as Record<string, unknown>;
  const data = (resp.response || resp) as Record<string, unknown>;
  return createBlock(data) as T;
}
```

### Step 4: Update Query Client
```typescript
async getBlock(height?: number): Promise<Block> {
  const params: BlockParams = height ? { height } : {};
  const encodedParams = this.protocolAdapter.encodeBlock(params);
  const result = await this.rpcClient.call(RpcMethod.BLOCK, encodedParams);
  return this.protocolAdapter.decodeBlock(result);
}
```

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

// For request encoding (with separate encode/decode configs)
export const MyParamsCodec = createCodec<MyParams, EncodedMyParams>({
  encode: {
    field1: ensureString,
    field2: (v) => v != null ? String(v) : undefined
  }
});
```

Note: The response codec automatically handles the decode operation, while request codecs explicitly specify encode configuration.

### Handling Nested Types

For complex nested structures:

```typescript
// For nested objects
const nestedFieldConverter = createNestedConverter({
  create: (data) => createNestedType(data)
});

// For arrays of objects
const arrayFieldConverter = createArrayConverter({
  create: (data) => createItemType(data)
});

// Use in codec
export const ComplexCodec = createCodec<Raw, Processed>({
  decode: {
    nestedField: nestedFieldConverter,
    arrayField: arrayFieldConverter
  }
});
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