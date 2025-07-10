# Unconfirmed Txs Method Refactoring Checklist

## Method: `getUnconfirmedTxs(limit?: number): Promise<UnconfirmedTxs>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 168-173)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `UnconfirmedTxsParams` in `/types/requests/`
- [ ] Check response type: `UnconfirmedTxs` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/tx/unconfirmed-txs-response.ts`
- [ ] Define TypeScript interface for `UnconfirmedTxsResponse`
- [ ] Handle fields:
  - [ ] `count` number (total count)
  - [ ] `total` number (total number)
  - [ ] `totalBytes` number
  - [ ] `txs` array of transaction strings (base64)
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Number conversions for count/total/totalBytes
  - [ ] Array handling for txs (strings remain as base64)
- [ ] Implement `createUnconfirmedTxsResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeUnconfirmedTxs<T extends UnconfirmedTxsResponse = UnconfirmedTxsResponse>(response: unknown): T`
- [ ] Implement `decodeUnconfirmedTxs()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/tx/unconfirmed-txs-params.ts`
- [ ] Define `UnconfirmedTxsParams` interface with:
  - [ ] `limit` optional number
- [ ] Create `EncodedUnconfirmedTxsParams` interface (limit as string)
- [ ] Create codec for encoding limit to string
- [ ] Implement `encodeUnconfirmedTxsParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeUnconfirmedTxs(params: UnconfirmedTxsParams): EncodedUnconfirmedTxsParams`
- [ ] Implement `encodeUnconfirmedTxs()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getUnconfirmedTxs()` method to use:
  - [ ] `this.protocolAdapter.encodeUnconfirmedTxs(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeUnconfirmedTxs(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with and without limit parameter
- [ ] Verify transaction array is properly handled
- [ ] Check count and total fields match

### Phase 6: Cleanup
- [ ] Remove `UNCONFIRMED_TXS` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document limit behavior and defaults

## Notes
- Returns transactions in mempool (not yet in blocks)
- Transactions are base64 encoded strings
- Limit parameter controls maximum number returned