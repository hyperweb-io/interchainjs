# Codec Pattern Exploration

## Overview
This document explores the implementation of a decorator-like codec pattern for automatic type conversion in the interchainjs cosmos network package.

## Concept
The idea is to create a base codec class that can automatically convert API responses to typed objects using converter functions, similar to decorators but without requiring experimental TypeScript features.

## Implementation

### 1. Base Codec Class
Created `/networks/cosmos/src/types/codec/base.ts` with:
- `BaseCodec<T>` - Abstract base class for creating codecs
- `PropertyConfig` - Configuration for property conversion
- `createCodec<T>()` - Factory function for creating codec instances

### 2. Converter Functions
Created `/networks/cosmos/src/types/codec/converters.ts` with common converters:
- `apiToNumber()` - Convert string/number to number
- `apiToBigInt()` - Convert to bigint
- `base64ToBytes()` - Convert base64 to Uint8Array
- `maybeBase64ToBytes()` - Safe base64 conversion
- `hexToBytes()` - Convert hex to Uint8Array
- `apiToBoolean()` - Convert to boolean
- `apiToDate()` - Convert to Date
- `ensureString()` - Ensure value is string
- `createNestedConverter()` - For nested objects
- `createArrayConverter()` - For arrays of objects

### 3. ABCI Types with Codec
Created `/networks/cosmos/src/types/responses/abci-codec.ts` demonstrating:
- Interface definitions (IProofOp, IQueryProof, IAbciQueryResponse, IAbciInfoResponse)
- Codec classes extending BaseCodec
- Property mapping with converters
- Source property name mapping (e.g., `last_block_height` → `lastBlockHeight`)

## Example Usage

```typescript
// Define codec with property configuration
export class AbciInfoResponseCodec extends BaseCodec<IAbciInfoResponse> {
  protected config = {
    data: ensureString,
    lastBlockHeight: {
      source: 'last_block_height',
      converter: apiToNumber
    },
    lastBlockAppHash: {
      source: 'last_block_app_hash',
      converter: maybeBase64ToBytes
    }
  };
}

// Use the codec
const codec = new AbciInfoResponseCodec();
const result = codec.create({
  data: 'cosmos-hub-4',
  last_block_height: '12345678',
  last_block_app_hash: 'AQIDBAUGBwg='
});
```

## Benefits

1. **Type Safety**: Strong typing throughout the conversion process
2. **Reusability**: Converter functions can be shared across codecs
3. **Maintainability**: Clear separation of conversion logic
4. **Flexibility**: Easy to add new converters or modify existing ones
5. **No Decorators**: Works without experimental TypeScript features
6. **Testability**: Each converter and codec can be tested independently

## Comparison with Current Approach

### Current Approach (Creator Functions)
```typescript
export function createAbciInfoResponse(data: {
  data?: string;
  lastBlockHeight?: number;
  lastBlockAppHash?: Uint8Array;
}): AbciInfoResponse {
  return {
    data: data.data,
    lastBlockHeight: data.lastBlockHeight,
    lastBlockAppHash: data.lastBlockAppHash
  };
}
```

### Codec Approach
```typescript
const codec = new AbciInfoResponseCodec();
const result = codec.create(apiResponse);
```

## Advantages of Codec Pattern

1. **Automatic Conversion**: Handles type conversion from API responses automatically
2. **Property Mapping**: Maps API property names to interface property names
3. **Nested Objects**: Easily handles nested object conversion
4. **Error Handling**: Centralized error handling for invalid data
5. **Extensibility**: Easy to extend with new converter functions

## Potential Improvements

1. **Validation**: Add validation rules to PropertyConfig
2. **Default Values**: Support default values for missing properties
3. **Custom Error Messages**: More descriptive error messages
4. **Caching**: Cache codec instances for performance
5. **Schema Generation**: Generate JSON schemas from codec configurations

## Conclusion

The codec pattern provides a clean, type-safe way to handle API response conversion. While the current creator function approach works well for simple cases, the codec pattern offers more flexibility and automation for complex type conversions, especially when dealing with:
- Different property names between API and types
- Nested objects and arrays
- Complex type conversions
- Consistent error handling

Both approaches can coexist, with creator functions for simple types and codecs for complex conversions.