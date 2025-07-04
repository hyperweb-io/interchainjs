# Codec-Based Refactoring Guide

This guide documents the process and patterns for refactoring RPC methods to use a codec-based approach for type safety and consistency.

## Overview

The codec-based approach separates concerns:
- **Request encoding**: Convert typed parameters to wire format
- **Response decoding**: Convert wire format to typed responses
- **Type definitions**: Separate files for request and response types
- **Codec definitions**: Reusable converters for common patterns

## Directory Structure

```
networks/cosmos/src/
├── types/
│   ├── requests/
│   │   └── common/
│   │       ├── abci.ts      # ABCI query request types
│   │       └── commit.ts    # Commit request types
│   ├── responses/
│   │   └── common/
│   │       ├── abci.ts      # ABCI query response types
│   │       └── commit.ts    # Commit response types
│   └── codec/
│       ├── base.ts          # Base codec infrastructure
│       └── converters.ts    # Common converter functions
```

## Step-by-Step Refactoring Process

### 1. Analyze the Method

First, understand:
- Request parameters and their types
- Response structure and nested types
- Parameter transformations (e.g., number → string for height)
- Response transformations (e.g., hex → Uint8Array)

### 2. Create Request Types and Encoder

Create a file in `types/requests/common/[method].ts`:

```typescript
// Request types
export interface MethodParams {
  param1?: type1;
  param2?: type2;
}

export interface EncodedMethodParams {
  param1?: string;  // If needs encoding
  param2?: type2;   // If no encoding needed
}

// Encoder function
export function encodeMethodParams(params: MethodParams): EncodedMethodParams {
  const encoded: EncodedMethodParams = {};
  
  if (params.param1 !== undefined) {
    encoded.param1 = String(params.param1);  // Example transformation
  }
  
  if (params.param2 !== undefined) {
    encoded.param2 = params.param2;
  }
  
  return encoded;
}
```

### 3. Create Response Types and Codecs

Create a file in `types/responses/common/[method].ts`:

```typescript
import { createCodec } from '../../codec/base';
import { ensureNumber, ensureDate } from '../../codec/converters';
import { fromBase64, fromHex } from '@interchainjs/encoding';

// Response types
export interface MethodResponse {
  readonly field1: type1;
  readonly field2?: type2;
  readonly nested: NestedType;
}

export interface NestedType {
  readonly subfield1: type3;
  readonly subfield2: type4;
}

// Codecs
export const NestedTypeCodec = createCodec<NestedType>({
  subfield1: { source: 'sub_field_1', converter: converterFn },
  subfield2: { source: 'sub_field_2' }  // No converter = pass through
});

export const MethodResponseCodec = createCodec<MethodResponse>({
  field1: { source: 'field_1', converter: ensureNumber },
  field2: { source: 'field_2', converter: (v: any) => v || undefined },
  nested: { source: 'nested', converter: (v: any) => NestedTypeCodec.create(v) }
});

// Creator function
export function createMethodResponse(data: any): MethodResponse {
  return MethodResponseCodec.create(data);
}
```

### 4. Update Base Adapter

Add to `RequestEncoder` interface:
```typescript
export interface RequestEncoder {
  // ... existing methods
  encodeMethod(params: MethodParams): EncodedMethodParams;
}
```

Add to `ResponseDecoder` interface:
```typescript
export interface ResponseDecoder {
  // ... existing methods
  decodeMethod<T extends MethodResponse = MethodResponse>(response: unknown): T;
}
```

Import the types and implement in `BaseAdapter`:
```typescript
import { MethodParams, EncodedMethodParams, encodeMethodParams } from '../types/requests/common/method';
import { MethodResponse, createMethodResponse } from '../types/responses/common/method';

// In BaseAdapter class:
encodeMethod(params: MethodParams): EncodedMethodParams {
  return encodeMethodParams(params);
}

decodeMethod<T extends MethodResponse = MethodResponse>(response: unknown): T {
  const resp = response as Record<string, unknown>;
  const data = (resp.result || resp) as Record<string, unknown>;
  return createMethodResponse(data) as T;
}
```

Update `encodeParams` to use the specific encoder:
```typescript
if (method === RpcMethod.METHOD_NAME) {
  const encoded = this.encodeMethod(params as MethodParams);
  return encoded;
}
```

### 5. Update Client

In the query client, update the method to use specific encode/decode:
```typescript
async getMethod(param1?: type1): Promise<MethodResponse> {
  const params: MethodParams = param1 ? { param1 } : {};
  const encodedParams = this.protocolAdapter.encodeMethod(params);
  const result = await this.rpcClient.call(RpcMethod.METHOD_NAME, encodedParams);
  return this.protocolAdapter.decodeMethod(result);
}
```

### 6. Remove Version-Specific Implementations

If the decode logic is now in the base adapter, remove it from version-specific adapters (tendermint34.ts, tendermint37.ts, comet38.ts).

## Common Patterns

### Parameter Encoding Patterns

1. **Number to String**: Heights, counts, etc.
   ```typescript
   encoded.height = params.height !== undefined ? String(params.height) : undefined;
   ```

2. **Boolean to String**: For URL parameters
   ```typescript
   encoded.prove = params.prove !== undefined ? String(params.prove) : undefined;
   ```

3. **Bytes to Hex/Base64**: For data fields
   ```typescript
   encoded.data = params.data ? toHex(params.data) : undefined;
   ```

### Response Decoding Patterns

1. **String to Number**: Use `ensureNumber` converter
   ```typescript
   height: { source: 'height', converter: ensureNumber }
   ```

2. **Hex to Bytes**: Use `fromHex` with wrapper
   ```typescript
   hash: { source: 'hash', converter: (v: any) => fromHex(v) }
   ```

3. **Optional Fields**: Handle undefined
   ```typescript
   optionalField: { source: 'optional_field', converter: (v: any) => v || undefined }
   ```

4. **Nested Objects**: Use nested codecs
   ```typescript
   nested: { source: 'nested', converter: (v: any) => NestedCodec.create(v) }
   ```

5. **Arrays**: Map over elements
   ```typescript
   items: { source: 'items', converter: (v: any) => (v || []).map((item: any) => ItemCodec.create(item)) }
   ```

## Testing Strategy

1. **Unit Tests**: Test encoders and decoders separately
2. **Integration Tests**: Test full request/response cycle
3. **Edge Cases**: Test with missing fields, null values, empty arrays

## Benefits

1. **Type Safety**: Compile-time checking of request/response types
2. **Consistency**: Uniform handling across all adapters
3. **Maintainability**: Changes in one place affect all versions
4. **Testability**: Easy to test encoding/decoding logic
5. **Documentation**: Types serve as API documentation

## Version Adapter Considerations

### Understanding Version-Specific Logic

Before refactoring, it's crucial to understand why version-specific adapters exist:

1. **Protocol Differences**: Different Tendermint/CometBFT versions may have:
   - Different field names or structures
   - Different data formats (e.g., time representation)
   - Missing or additional fields
   - Different encoding schemes

2. **Review Existing Adapters**: Check all version adapters for the method:
   ```bash
   # Compare implementations across versions
   grep -A 20 "decodeMethod" networks/cosmos/src/adapters/tendermint34.ts
   grep -A 20 "decodeMethod" networks/cosmos/src/adapters/tendermint37.ts
   grep -A 20 "decodeMethod" networks/cosmos/src/adapters/comet38.ts
   ```

3. **Identify Common vs Specific Logic**:
   - If all versions have identical logic → move to base adapter
   - If versions differ → keep version-specific implementations
   - Document any version differences in comments

### Cross-Reference with tendermint-rpc Package

**IMPORTANT**: Always verify your implementation against the reference implementation in `packages/tendermint-rpc/src`:

1. **Check Type Definitions**:
   ```bash
   # Look for type definitions
   find packages/tendermint-rpc/src -name "*.ts" | xargs grep -l "interface.*Commit"
   ```

2. **Compare Decoding Logic**:
   ```bash
   # Find decoding implementations
   grep -r "decode.*commit" packages/tendermint-rpc/src
   ```

3. **Verify Field Mappings**:
   - Ensure field names match between versions
   - Check data type conversions are consistent
   - Validate optional vs required fields

4. **Example Comparison**:
   ```typescript
   // Check tendermint-rpc implementation
   // packages/tendermint-rpc/src/tendermint34/adaptor.ts
   
   // Compare with your codec implementation
   // networks/cosmos/src/types/responses/common/commit.ts
   ```

## Gotchas and Tips

1. **Field Name Mapping**: API uses snake_case, TypeScript uses camelCase
   - Use `source` property in codec config

2. **Type Compatibility**: Ensure response types match what client expects
   - Sometimes need to extract nested data (e.g., `response.signedHeader.commit`)

3. **Optional vs Required**: Be careful with field requirements
   - API may return undefined, but type expects value
   - Use optional (?) appropriately

4. **Converter Functions**: Must handle unknown input
   - Always validate input types
   - Provide sensible defaults

5. **Build Errors**: TypeScript strict mode catches many issues
   - Fix type mismatches before proceeding
   - Use proper type assertions when needed

6. **Version-Specific Behavior**: Some methods may need version-specific handling
   - Don't assume all versions work the same
   - Test with different protocol versions

## Debug Testing

After completing the refactoring, create a debug test to verify functionality:

### 1. Create Debug Test Script

Create a test file in `debug/test-[method].ts`:

```typescript
import { CosmosQueryClient } from '../networks/cosmos/src/query/cosmos-query-client';
import { HttpRpcClient } from '../networks/cosmos/src/rpc/http-rpc-client';
import { Tendermint34Adapter } from '../networks/cosmos/src/adapters/tendermint34';
import { MethodParams } from '../networks/cosmos/src/types/requests/common/method';

async function testMethod() {
  // Create clients
  const rpcClient = new HttpRpcClient('https://rpc.cosmos.directory/cosmoshub');
  const adapter = new Tendermint34Adapter();
  const queryClient = new CosmosQueryClient(rpcClient, adapter);
  
  try {
    // Test 1: Basic functionality
    console.log('Test 1: Basic call...');
    const result = await queryClient.getMethod();
    console.log('Result:', result);
    
    // Test 2: With parameters
    console.log('\nTest 2: With parameters...');
    const resultWithParams = await queryClient.getMethod(param1, param2);
    console.log('Result with params:', resultWithParams);
    
    // Test 3: Parameter encoding
    console.log('\nTest 3: Testing parameter encoding...');
    const params: MethodParams = { /* ... */ };
    const encoded = adapter.encodeMethod(params);
    console.log('Original:', params);
    console.log('Encoded:', encoded);
    
    // Test 4: Edge cases
    console.log('\nTest 4: Edge cases...');
    // Test with undefined, null, empty values, etc.
    
    console.log('\nAll tests passed!');
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testMethod();
```

### 2. Run Debug Test

```bash
# Compile and run
cd /workspace/interchainjs
npx ts-node debug/test-[method].ts
```

### 3. Test Different Versions

Test with different adapters to ensure compatibility:

```typescript
// Test with different protocol versions
const adapters = [
  new Tendermint34Adapter(),
  new Tendermint37Adapter(),
  new Comet38Adapter()
];

for (const adapter of adapters) {
  console.log(`Testing with ${adapter.constructor.name}...`);
  const queryClient = new CosmosQueryClient(rpcClient, adapter);
  // Run tests...
}
```

### 4. Verify Against Real Networks

Test against different networks to ensure broad compatibility:

```typescript
const networks = [
  'https://rpc.cosmos.directory/cosmoshub',
  'https://rpc.cosmos.directory/osmosis',
  'https://rpc.cosmos.directory/juno'
];

for (const rpcUrl of networks) {
  console.log(`Testing against ${rpcUrl}...`);
  const rpcClient = new HttpRpcClient(rpcUrl);
  // Run tests...
}
```

### 5. Clean Up

After testing is complete:
```bash
rm -rf debug/
```

## Next Steps

After refactoring a method:
1. Run `yarn build` to check for type errors
2. Create and run debug tests as described above
3. Update any documentation
4. Consider refactoring related methods together
5. Commit changes with clear description of what was refactored