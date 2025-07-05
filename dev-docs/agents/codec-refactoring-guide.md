# Codec-Based Refactoring Guide

This guide documents the process and patterns for refactoring RPC methods to use a codec-based approach for type safety and consistency.

## Overview

The codec-based approach separates concerns:
- **Request encoding**: Convert typed parameters to wire format
- **Response decoding**: Convert wire format to typed responses
- **Type definitions**: Separate files for request and response types
- **Codec definitions**: Reusable converters for common patterns

## Understanding the Logic: Reference Implementation Analysis

> **📚 IMPORTANT: Research Before Implementation**
>
> Before implementing any method, understand how established libraries handle the same functionality. This helps ensure correctness and compatibility.

### Using CosmJS as a Reference (NOT for copying)

**⚠️ NOTE: We are creating a new library. Do NOT copy code from CosmJS or include any CosmJS-related imports/references in our code.**

CosmJS is a mature implementation that can help us understand:
- Expected behavior of RPC methods
- Common edge cases and error handling
- Type structures and field mappings
- Protocol version differences

#### How to Research with CosmJS

1. **Find the equivalent method**:
   ```bash
   # Search in CosmJS repository (for reference only)
   # Look for method implementations to understand logic
   grep -r "methodName" cosmjs/packages/stargate/src
   grep -r "methodName" cosmjs/packages/tendermint-rpc/src
   ```

2. **Understand the data flow**:
   - How are parameters validated?
   - What transformations are applied?
   - How are responses structured?
   - What error cases are handled?

3. **Identify type definitions**:
   - What fields are required vs optional?
   - What are the expected data types?
   - How are nested structures handled?

4. **Note version-specific handling**:
   - Does CosmJS handle different protocol versions?
   - Are there conditional branches for compatibility?

#### Example Research Process

For `abciQuery`:
1. **CosmJS Implementation** (for understanding only):
   - Parameters: path (string), data (Uint8Array), height (number), prove (boolean)
   - Transforms: data to hex, height to string
   - Response: Handles proof structures, base64 decoding

2. **Our Implementation** (independent):
   - Create our own type definitions
   - Implement our own encoding/decoding logic
   - Use our codec pattern for consistency

### Real Examples from Our Refactoring

#### 1. ABCI Info
**Research findings**:
- Simple request with no parameters
- Response contains optional fields (data, lastBlockHeight, lastBlockAppHash)
- App hash is base64 encoded in response

**Our implementation**:
- Created `AbciInfoResponse` interface with optional fields
- Used `maybeBase64ToBytes` for app hash conversion
- Handled missing fields gracefully

#### 2. ABCI Query
**Research findings**:
- Parameters need encoding (data to hex, height to string)
- Response includes complex proof structure
- Base64 encoding used for key, value, and proof data

**Our implementation**:
- Created separate request encoder and response decoder
- Built nested codecs for `ProofOp` and `QueryProof`
- Used array converter for proof operations

#### 3. Get Commit
**Research findings**:
- Complex nested structure (header, commit, signatures)
- Version differences in field presence (e.g., app version)
- Mixed encoding (hex for hashes, base64 for addresses)

**Our implementation**:
- Created multiple nested codecs
- Added default values for missing fields
- Handled null signatures gracefully

Remember: The goal is to understand the **behavior**, not copy the implementation.

### Understanding Adapter Logic Patterns

When researching implementations, pay attention to adapter patterns:

1. **Response Unwrapping**:
   ```typescript
   // Different libraries may unwrap responses differently
   // CosmJS: response.result
   // Our approach: Handle multiple patterns
   const data = resp.result || resp.response?.value || resp;
   ```

2. **Error Handling**:
   ```typescript
   // Understand how errors are detected and handled
   // Look for: code fields, error messages, null checks
   if (response.code && response.code !== 0) {
     // Handle error case
   }
   ```

3. **Type Conversions**:
   ```typescript
   // Note common conversion patterns
   // String numbers to numbers
   // Hex/Base64 to bytes
   // Date string to Date objects
   ```

4. **Version Branching**:
   ```typescript
   // How do other libraries handle version differences?
   // Conditional logic? Different classes? Feature detection?
   ```

## Critical: Version Adapter Considerations

> **⚠️ WARNING: STOP AND READ THIS SECTION FIRST! ⚠️**
>
> Ignoring version differences is the #1 cause of refactoring failures. Many methods that appear identical across versions have subtle differences that will break functionality if not handled properly.

### Pre-Refactoring Checklist (MANDATORY)

- [ ] Researched method behavior in CosmJS (for understanding only)
- [ ] Checked if method exists in all version adapters
- [ ] Compared implementations line-by-line across versions
- [ ] Cross-referenced with tendermint-rpc package
- [ ] Identified all field differences (names, types, presence)
- [ ] Documented version-specific behavior
- [ ] Created test plan for all supported versions

### Why Version Adapters Exist

Different Tendermint/CometBFT versions have protocol differences that affect:
- Field names and structures
- Data formats (e.g., time representation, number encoding)
- Presence/absence of fields
- Response wrapper structures
- Encoding schemes (hex vs base64)

### Pre-Refactoring Analysis (REQUIRED)

1. **Compare All Version Implementations**:
   ```bash
   # Check if method exists in version-specific adapters
   grep -n "methodName" networks/cosmos/src/adapters/tendermint34.ts
   grep -n "methodName" networks/cosmos/src/adapters/tendermint37.ts
   grep -n "methodName" networks/cosmos/src/adapters/comet38.ts
   ```

2. **Cross-Reference with tendermint-rpc Package**:
   ```bash
   # Find reference implementation
   find packages/tendermint-rpc/src -name "*.ts" | xargs grep -l "methodName"

   # Compare type definitions
   grep -A 20 "interface.*MethodResponse" packages/tendermint-rpc/src/types.ts
   ```

3. **Decision Matrix**:
   - **Identical across versions** → Move to base adapter
   - **Minor differences** → Use conditional logic in base adapter
   - **Major differences** → Keep version-specific implementations
   - **Uncertain** → Keep version-specific until proven identical

### Real-World Version Differences

#### Example 1: Validator Address Encoding
```typescript
// Tendermint 0.34: Uses 'validator_address' as hex string
// Tendermint 0.37: Uses 'validator_address' as hex string
// CometBFT 0.38: Uses 'validator_address' as base64 string

// Solution: Use converter that handles both
validatorAddress: {
  source: 'validator_address',
  converter: (v: any) => {
    if (!v) return new Uint8Array();
    // Try hex first, fallback to base64
    try {
      return fromHex(v);
    } catch {
      return fromBase64(v);
    }
  }
}
```

#### Example 2: Response Structure Changes
```typescript
// Tendermint 0.34: Direct response
{
  "height": "12345",
  "result": { ... }
}

// CometBFT 0.38: Wrapped response
{
  "height": "12345",
  "response": {
    "value": { ... }
  }
}

// Solution: Handle both in decoder
decodeMethod(response: unknown): MethodResponse {
  const resp = response as Record<string, unknown>;
  // Handle different response structures
  const data = resp.result || resp.response?.value || resp;
  return createMethodResponse(data);
}
```

#### Example 3: Field Presence/Absence
```typescript
// Tendermint 0.34: Missing 'app' field in version
{
  "version": {
    "block": "11"
  }
}

// CometBFT 0.38: Has 'app' field
{
  "version": {
    "block": "11",
    "app": "0"
  }
}

// Solution: Provide defaults for missing fields
version: {
  source: 'version',
  converter: (v: any) => ({
    block: ensureNumber(v?.block),
    app: ensureNumber(v?.app, 0) // Default to 0 if missing
  })
}
```

### Version Testing Strategy

Always test your refactored code against all supported versions:

```typescript
// debug/test-version-compatibility.ts
// these links are a mock, later we can create instance server for each version locally for the test
const testCases = [
  { name: 'Cosmos Hub (Tendermint 0.34)', rpc: 'https://rpc.cosmos.directory/cosmoshub' },
  { name: 'Osmosis (Tendermint 0.37)', rpc: 'https://rpc.osmosis.zone' },
  { name: 'Neutron (CometBFT 0.38)', rpc: 'https://rpc.neutron.org' }
];

for (const testCase of testCases) {
  console.log(`Testing ${testCase.name}...`);
  const client = new HttpRpcClient(testCase.rpc);
  // Test your method
  try {
    const result = await queryClient.yourMethod();
    console.log('✓ Success:', result);
  } catch (error) {
    console.error('✗ Failed:', error);
  }
}
```

### Common Version-Related Pitfalls

1. **Assuming Identical Behavior**: Just because code looks similar doesn't mean it behaves identically
2. **Missing Edge Cases**: Version differences often appear in edge cases (null values, empty arrays, etc.)
3. **Encoding Mismatches**: Hex vs Base64 encoding differences are common between versions
4. **Response Wrapper Changes**: Different versions may wrap responses differently
5. **Optional Field Handling**: Fields that are optional in one version may be required in another

### When to Keep Version-Specific Code

Keep version-specific implementations when:
- Response structures differ significantly
- Field encoding differs (hex vs base64)
- Business logic differs between versions
- Error handling differs
- Performance optimizations are version-specific

Move to base adapter only when:
- Implementations are 100% identical
- You've tested against all versions
- You've documented any assumptions

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

### 0. Research and Analysis (PREREQUISITE)

**⚠️ STOP! Complete these steps before writing any code:**

1. **Research the method behavior** (see "Understanding the Logic" section above)
   - Understand expected parameters and responses
   - Note any special handling or edge cases
   - Identify common patterns

2. **Complete Version Analysis** (see "Version Adapter Considerations" checklist)
   - Check all version implementations
   - Document differences
   - Decide on consolidation strategy

If you skip these steps, your refactoring will likely fail or introduce bugs.

### 1. Analyze the Method

First, understand:
- Request parameters and their types
- Response structure and nested types
- Parameter transformations (e.g., number → string for height)
- Response transformations (e.g., hex → Uint8Array)
- **Version-specific differences identified in step 0**

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

## Codec Creation Patterns

Based on our refactoring experience, here are effective codec patterns:

### 1. Simple Field Mapping
```typescript
// Direct mapping with type conversion
export const SimpleCodec = createCodec<SimpleType>({
  height: { source: 'height', converter: ensureNumber },
  data: { source: 'data', converter: ensureString }
});
```

### 2. Nested Object Handling
```typescript
// Use nested codecs for complex structures
export const ParentCodec = createCodec<ParentType>({
  child: {
    source: 'child',
    converter: (v: any) => ChildCodec.create(v || {})
  }
});
```

### 3. Array Processing
```typescript
// Handle arrays with proper null checking
export const ArrayCodec = createCodec<ArrayType>({
  items: {
    source: 'items',
    converter: (v: any) => (v || []).map((item: any) =>
      ItemCodec.create(item || {})
    )
  }
});
```

### 4. Inline Object Conversion
```typescript
// For simple nested objects, convert inline
export const InlineCodec = createCodec<InlineType>({
  version: {
    source: 'version',
    converter: (v: any) => ({
      major: ensureNumber(v?.major || 0),
      minor: ensureNumber(v?.minor || 0)
    })
  }
});
```

### 5. Conditional Field Handling
```typescript
// Handle fields that may or may not exist
export const ConditionalCodec = createCodec<ConditionalType>({
  optionalField: {
    source: 'optional_field',
    converter: (v: any) => {
      if (v === undefined || v === null) return undefined;
      return processValue(v);
    }
  }
});
```

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

### 1. Unit Testing Codecs

Test individual codecs with various inputs:

```typescript
// Test with valid data
const validResult = MyCodec.create({
  field1: 'value1',
  field2: 123
});

// Test with missing fields
const missingResult = MyCodec.create({});

// Test with null/undefined
const nullResult = MyCodec.create(null);
```

### 2. Integration Testing

Test the full flow from request to response:

```typescript
// Test actual RPC calls
const client = new CosmosQueryClient(rpcClient, adapter);
const result = await client.myMethod(params);

// Verify response structure
expect(result).toHaveProperty('expectedField');
expect(result.expectedField).toBeInstanceOf(ExpectedType);
```

### 3. Edge Case Testing

Critical edge cases to test:

- **Empty responses**: `{}`
- **Null values**: `{ field: null }`
- **Missing optional fields**: Field not present in response
- **Empty arrays**: `{ items: [] }`
- **Invalid types**: String where number expected
- **Large numbers**: Values exceeding JavaScript number precision
- **Special characters**: In string fields
- **Zero values**: `0`, `""`, `false`

### 4. Version Compatibility Testing

Test against different protocol versions:

```typescript
describe('Version Compatibility', () => {
  const versions = [
    { name: 'Tendermint 0.34', adapter: new Tendermint34Adapter() },
    { name: 'Tendermint 0.37', adapter: new Tendermint37Adapter() },
    { name: 'CometBFT 0.38', adapter: new Comet38Adapter() }
  ];

  versions.forEach(({ name, adapter }) => {
    it(`should work with ${name}`, async () => {
      const client = new CosmosQueryClient(rpcClient, adapter);
      const result = await client.myMethod();
      expect(result).toBeDefined();
    });
  });
});
```

### 5. Error Handling Testing

Test error scenarios:

```typescript
// Test network errors
// Test invalid parameters
// Test malformed responses
// Test timeout scenarios
```

## Benefits

1. **Type Safety**: Compile-time checking of request/response types
2. **Consistency**: Uniform handling across all adapters
3. **Maintainability**: Changes in one place affect all versions
4. **Testability**: Easy to test encoding/decoding logic
5. **Documentation**: Types serve as API documentation



## Lessons from Refactored Methods

Based on the refactoring of `abciInfo`, `abciQuery`, and `getCommit`, here are additional patterns and considerations:

### 1. Default Value Handling

When fields might be missing (especially in older versions), provide sensible defaults:

```typescript
// From commit refactoring - handle missing fields
version: {
  source: 'version',
  converter: (v: any) => ({
    block: ensureNumber(v?.block || 0),
    app: ensureNumber(v?.app || 0)  // app field missing in older versions
  })
}
```

### 2. Flexible Type Converters

Create converters that handle multiple input formats:

```typescript
// Handle both hex and base64 encoding
export function fromHex(input: unknown): Uint8Array {
  if (typeof input !== 'string') {
    return new Uint8Array();
  }
  // Implementation...
}
```

### 3. Request Parameter Encoding

For request parameters, handle optional fields carefully:

```typescript
// From ABCI query params
height: {
  converter: (value: unknown) => {
    if (value === undefined || value === null) return undefined;
    return String(ensureNumber(value));
  }
}
```

### 4. Response Extraction Patterns

Different methods require different response extraction:

```typescript
// Simple extraction
decodeAbciInfo(response: unknown): AbciInfoResponse {
  const resp = response as Record<string, unknown>;
  const data = resp.response || resp;  // Handle wrapped responses
  return createAbciInfoResponse(data);
}

// Complex extraction with nested data
decodeCommit(response: unknown): CommitResponse {
  const resp = response as Record<string, unknown>;
  const result = resp.result as Record<string, unknown>;
  const signedHeader = result.signed_header as Record<string, unknown>;
  return createCommitResponse(signedHeader);
}
```

### 5. Null/Undefined Handling in Arrays

When processing arrays with potential null values:

```typescript
// From commit signatures
signatures: {
  source: 'signatures',
  converter: (v: any) => (v || []).map((sig: any) =>
    CommitSignatureCodec.create(sig || {})
  )
}
```

### 6. Enum Handling

For enums, provide safe conversion with defaults:

```typescript
blockIdFlag: {
  source: 'block_id_flag',
  converter: (v: any) => {
    const flag = ensureNumber(v);
    return flag in BlockIdFlag ? flag : BlockIdFlag.Unknown;
  }
}
```

## Gotchas and Tips

1. **Field Name Mapping**: API uses snake_case, TypeScript uses camelCase
   - Use `source` property in codec config

2. **Type Compatibility**: Ensure response types match what client expects
   - Sometimes need to extract nested data (e.g., `response.signedHeader.commit`)

3. **Optional vs Required**: Be careful with field requirements
   - API may return undefined, but type expects value
   - Use optional (?) appropriately
   - Provide defaults for missing required fields

4. **Converter Functions**: Must handle unknown input
   - Always validate input types
   - Provide sensible defaults
   - Handle null/undefined gracefully

5. **Build Errors**: TypeScript strict mode catches many issues
   - Fix type mismatches before proceeding
   - Use proper type assertions when needed

6. **Version-Specific Behavior**: Some methods may need version-specific handling
   - Don't assume all versions work the same
   - Test with different protocol versions

7. **Empty/Null Data**: Always handle edge cases
   - Empty arrays: `(v || []).map(...)`
   - Null objects: `sig || {}`
   - Missing nested fields: `v?.field || defaultValue`

8. **Type Converter Reusability**: Create flexible converters
   - Make converters handle multiple input types
   - Return sensible defaults instead of throwing errors
   - Document expected input/output types

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

## Refactoring Checklist

Use this checklist for each method you refactor:

### Pre-Refactoring
- [ ] Completed Version Adapter Considerations analysis
- [ ] Identified all version differences
- [ ] Cross-referenced with tendermint-rpc package
- [ ] Documented expected behavior for each version
- [ ] Checked encoding format (hex vs base64) for binary fields

### Implementation
- [ ] Created request types and encoder (if applicable)
- [ ] Created response types and codecs
- [ ] Used correct import path: `../../codec/base` for createCodec
- [ ] Added proper type converters with error handling
- [ ] Used `base64ToBytes` for base64-encoded fields (e.g., pubkeys)
- [ ] Handled all edge cases (null, undefined, empty)
- [ ] Exported codecs with `export const` syntax
- [ ] Avoided duplicate exports in the same file
- [ ] Updated base adapter with encode/decode methods
- [ ] Updated client method to use new encode/decode
- [ ] Removed version-specific implementations (if appropriate)
- [ ] Handled special cases (e.g., health returns null)

### Testing
- [ ] Created debug test script
- [ ] Tested with all protocol versions
- [ ] Tested edge cases
- [ ] Verified backward compatibility
- [ ] All existing tests still pass

### Documentation
- [ ] Added JSDoc comments to new types
- [ ] Updated method documentation
- [ ] Documented any version-specific behavior
- [ ] Added examples if complex

### Final Steps
- [ ] Run `yarn build` - no errors
- [ ] Run `yarn test` - all tests pass
- [ ] Clean up debug scripts
- [ ] Commit with descriptive message

## Next Steps

After refactoring a method:
1. Run `yarn build` to check for type errors
2. Create and run debug tests as described above
3. Update any documentation
4. Consider refactoring related methods together
5. Commit changes with clear description of what was refactored

## Summary of Key Learnings

From refactoring `abciInfo`, `abciQuery`, `getCommit`, and Phase 1/2 methods, we learned:

1. **Version differences are critical** - Always check before assuming uniformity
2. **Default values matter** - Missing fields in older versions need sensible defaults
3. **Type converters must be defensive** - Handle unknown input gracefully
4. **Response extraction varies** - Some methods need deep object traversal
5. **Edge cases are common** - Null values, empty arrays, and missing fields happen frequently
6. **Testing across versions is essential** - What works for one version may fail for another
7. **Import paths matter** - Use `../../codec/base` not `../../codec` for createCodec
8. **Export syntax is crucial** - Always use `export const` for codec declarations
9. **Base64 vs Hex encoding** - RPC responses often use base64 for pubkeys, use `base64ToBytes` not `ensureBytes`
10. **Special cases exist** - Some methods like `health` return null and don't need codecs
11. **Multiple types per file** - Files like `abci.ts` may contain multiple response types
12. **Avoid duplicate exports** - Don't export the same symbol twice in a file

### Important Reminders

- **We are building a new library** - InterchainJS is independent from CosmJS
- **Research, don't copy** - Use other implementations to understand behavior only
- **No external dependencies** - Don't import or reference CosmJS in our code
- **Our patterns are unique** - We use our own codec pattern for consistency

Remember: The goal is not just to refactor code, but to create a robust, type-safe system that works reliably across all supported protocol versions.