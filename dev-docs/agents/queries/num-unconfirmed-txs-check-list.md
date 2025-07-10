# Num Unconfirmed Txs Method Refactoring Checklist ✅

## Method: `getNumUnconfirmedTxs(): Promise<NumUnconfirmedTxs>`

**Status: COMPLETED** - This method has been successfully refactored as a simple example.

### Phase 1: Infrastructure Setup ✅
- [x] Analyzed method in `cosmos-query-client.ts` (lines 175-178)
- [x] Confirmed it uses specific `decodeNumUnconfirmedTxs` method
- [x] No parameters needed (method has no arguments)
- [x] Response type: `NumUnconfirmedTxs` in `/types/responses/`
- [x] No version-specific differences

### Phase 2: Response Type Refactoring ✅
- [x] Created response type file: `/types/responses/common/tx/num-unconfirmed-txs-response.ts`
- [x] Defined TypeScript interface for `NumUnconfirmedTxsResponse`:
  ```typescript
  export interface NumUnconfirmedTxsResponse {
    readonly nTxs: number;
    readonly total: number;
    readonly totalBytes: number;
  }
  ```
- [x] Created codec with proper converters:
  ```typescript
  export const NumUnconfirmedTxsResponseCodec = createCodec<NumUnconfirmedTxsResponse>({
    nTxs: { source: 'n_txs', converter: apiToNumber },
    total: apiToNumber,
    totalBytes: { source: 'total_bytes', converter: apiToNumber }
  });
  ```
- [x] Implemented `createNumUnconfirmedTxsResponse()` function
- [x] Added decoder to `ResponseDecoder` interface: `decodeNumUnconfirmedTxs<T extends NumUnconfirmedTxsResponse = NumUnconfirmedTxsResponse>(response: unknown): T`
- [x] Implemented in `BaseAdapter`:
  ```typescript
  decodeNumUnconfirmedTxs<T extends NumUnconfirmedTxsResponse = NumUnconfirmedTxsResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = (resp.response || resp) as Record<string, unknown>;
    return createNumUnconfirmedTxsResponse(data) as T;
  }
  ```

### Phase 3: Request Type Refactoring ✅
- [x] No request parameters needed (skipped)

### Phase 4: Update Query Client ✅
- [x] Updated method to use:
  ```typescript
  async getNumUnconfirmedTxs(): Promise<NumUnconfirmedTxs> {
    const result = await this.rpcClient.call(RpcMethod.NUM_UNCONFIRMED_TXS);
    return this.protocolAdapter.decodeNumUnconfirmedTxs(result);
  }
  ```
- [x] Clean implementation without parameters

### Phase 5: Testing and Validation ✅
- [x] TypeScript compilation passes
- [x] Number conversions work properly
- [x] Snake case field mapping works
- [x] Simple and reliable

### Phase 6: Cleanup ✅
- [x] Not in generic pattern
- [x] Clean imports
- [x] Simple documentation
- [x] Good simple example

## Implementation Details

### Response Structure
```typescript
// RPC Response
{
  "n_txs": "5",
  "total": "5",
  "total_bytes": "1234"
}

// Decoded TypeScript
{
  nTxs: 5,
  total: 5,
  totalBytes: 1234
}
```

### Key Learnings
- Simple method with numeric fields
- Shows snake_case to camelCase conversion
- All numeric fields converted from strings
- Good example of source field mapping
- Simple but complete refactoring