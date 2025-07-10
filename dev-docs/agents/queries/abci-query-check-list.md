# ABCI Query Method Refactoring Checklist ✅

## Method: `queryAbci(params: AbciQueryParams): Promise<AbciQueryResult>`

**Status: COMPLETED** - This method has been successfully refactored and serves as an excellent example of parameter encoding.

### Phase 1: Infrastructure Setup ✅
- [x] Analyzed method in `cosmos-query-client.ts` (lines 241-245)
- [x] Confirmed it uses specific `encodeAbciQuery` and `decodeAbciQuery` methods
- [x] Parameter type: `AbciQueryParams` in `/types/requests/common/abci/`
- [x] Response type: `AbciQueryResult` in `/types/responses/common/abci/`
- [x] No version-specific differences

### Phase 2: Response Type Refactoring ✅
- [x] Created response type files in `/types/responses/common/abci/`:
  - [x] `abci-query-response.ts` - Main response type
  - [x] `proof-op.ts` - Nested proof operation type
  - [x] `query-proof.ts` - Query proof wrapper type
- [x] Defined interfaces with proper nesting:
  ```typescript
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
  ```
- [x] Created codecs with proper converters:
  - [x] `apiToNumber` for code
  - [x] `apiToBigInt` for index and height
  - [x] `maybeBase64ToBytes` for key and value
  - [x] Nested converter for proofOps
- [x] Implemented creator functions for all types
- [x] Added decoder to `ResponseDecoder` interface
- [x] Implemented in `BaseAdapter`

### Phase 3: Request Type Refactoring ✅
- [x] Created request type files in `/types/requests/common/abci/`:
  - [x] `abci-query-params.ts` - Input parameters
  - [x] `encoded-abci-query-params.ts` - Encoded parameters
- [x] Defined interfaces:
  ```typescript
  export interface AbciQueryParams {
    readonly path: string;
    readonly data: Uint8Array;
    readonly height?: number;
    readonly prove?: boolean;
  }
  
  export interface EncodedAbciQueryParams {
    readonly path: string;
    readonly data: string;  // hex string
    readonly height?: string;  // string number
    readonly prove?: boolean;
  }
  ```
- [x] Created encoding codec:
  - [x] Path remains string
  - [x] Data converted to hex using `toHex()`
  - [x] Height converted to string
  - [x] Prove remains boolean
- [x] Implemented `encodeAbciQueryParams()` function
- [x] Added encoder to `RequestEncoder` interface
- [x] Implemented in `BaseAdapter`

### Phase 4: Update Query Client ✅
- [x] Updated method implementation:
  ```typescript
  async queryAbci(params: AbciQueryParams): Promise<AbciQueryResult> {
    const encodedParams = this.protocolAdapter.encodeAbciQuery(params);
    const result = await this.rpcClient.call(RpcMethod.ABCI_QUERY, encodedParams);
    return this.protocolAdapter.decodeAbciQuery(result);
  }
  ```
- [x] Uses specific methods instead of generic ones
- [x] Proper imports from index files

### Phase 5: Testing and Validation ✅
- [x] TypeScript compilation successful
- [x] Tested with actual ABCI queries
- [x] Binary data encoding/decoding verified
- [x] Optional parameters handled correctly
- [x] Proof structures properly decoded

### Phase 6: Cleanup ✅
- [x] Not present in generic `encodeParams`/`decodeResponse`
- [x] Clean imports
- [x] Well documented with JSDoc
- [x] Example of best practices

## Implementation Details

### Request Encoding Example
```typescript
// Input
{
  path: "/cosmos.bank.v1beta1.Query/Balance",
  data: Uint8Array([1, 2, 3]),
  height: 12345,
  prove: true
}

// Encoded for RPC
{
  path: "/cosmos.bank.v1beta1.Query/Balance",
  data: "010203",  // hex string
  height: "12345",  // string
  prove: true
}
```

### Response Decoding Example
```typescript
// RPC Response
{
  "response": {
    "code": 0,
    "key": "base64key",
    "value": "base64value",
    "height": "12345",
    "proof_ops": {
      "ops": [{
        "type": "iavl:v",
        "key": "base64",
        "data": "base64"
      }]
    }
  }
}

// Decoded TypeScript
{
  code: 0,
  key: Uint8Array(...),
  value: Uint8Array(...),
  height: 12345n,
  proofOps: {
    ops: [{
      type: "iavl:v",
      key: Uint8Array(...),
      data: Uint8Array(...)
    }]
  }
}
```

### Key Learnings
- Excellent example of parameter encoding
- Shows nested object handling with separate codecs
- Demonstrates hex encoding for binary data
- Uses specific encode/decode methods
- Handles optional parameters properly
- Snake case to camel case conversion via source mapping