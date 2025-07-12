# Unconfirmed Txs Method Refactoring Checklist

## Method: `getUnconfirmedTxs(limit?: number): Promise<UnconfirmedTxs>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 168-173)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `UnconfirmedTxsParams` in `/types/requests/`
- [x] Check response type: `UnconfirmedTxs` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Create response type file: `/types/responses/common/tx/unconfirmed-txs-response.ts`
- [x] Define TypeScript interface for `UnconfirmedTxsResponse`
- [x] Handle fields:
  - [x] `count` number (total count)
  - [x] `total` number (total number)
  - [x] `totalBytes` number
  - [x] `txs` array of transaction strings (base64)
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Number conversions for count/total/totalBytes
  - [x] Array handling for txs (strings remain as base64)
- [x] Implement `createUnconfirmedTxsResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeUnconfirmedTxs<T extends UnconfirmedTxsResponse = UnconfirmedTxsResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeUnconfirmedTxs()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/tx/unconfirmed-txs-params.ts`
- [x] Define `UnconfirmedTxsParams` interface with:
  - [x] `limit` optional number
- [x] Create `EncodedUnconfirmedTxsParams` interface (limit as string)
- [x] Create codec for encoding limit to string
- [x] Implement `encodeUnconfirmedTxsParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeUnconfirmedTxs(params: UnconfirmedTxsParams): EncodedUnconfirmedTxsParams`
- [x] Implement `encodeUnconfirmedTxs()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `getUnconfirmedTxs()` method to use:
  - [x] `this.protocolAdapter.encodeUnconfirmedTxs(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeUnconfirmedTxs(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Test with and without limit parameter
- [x] Verify transaction array is properly handled
- [x] Check count and total fields match

### Phase 6: Cleanup
- [x] Remove `UNCONFIRMED_TXS` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document limit behavior and defaults

## Notes
- Returns transactions in mempool (not yet in blocks)
- Transactions are base64 encoded strings
- Limit parameter controls maximum number returned
- Fixed field mapping issue: API returns n_txs but we map it to count
- All 5 getUnconfirmedTxs tests are passing