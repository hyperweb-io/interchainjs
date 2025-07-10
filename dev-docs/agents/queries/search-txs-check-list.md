# Search Txs Method Refactoring Checklist

## Method: `searchTxs(params: TxSearchParams): Promise<SearchTxsResult>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 155-159)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `TxSearchParams` in `/types/requests/`
- [ ] Check response type: `SearchTxsResult` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/tx/tx-search-response.ts`
- [ ] Define TypeScript interface for `TxSearchResponse`
- [ ] Handle pagination structure:
  - [ ] `txs` array (reuse TxResponse type from getTx)
  - [ ] `totalCount` number
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Array converter for txs using `createTxResponse`
  - [ ] Number conversion for totalCount
- [ ] Implement `createTxSearchResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeTxSearch<T extends TxSearchResponse = TxSearchResponse>(response: unknown): T`
- [ ] Use generics for flexibility in decoder method (see pattern in completed methods)
- [ ] Implement `decodeTxSearch()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/tx/tx-search-params.ts`
- [ ] Define `TxSearchParams` interface with:
  - [ ] `query` string (search query)
  - [ ] `prove` optional boolean
  - [ ] `page` optional number
  - [ ] `perPage` optional number
  - [ ] `orderBy` optional string
- [ ] Create `EncodedTxSearchParams` interface (numbers as strings)
- [ ] Create codec for encoding:
  - [ ] Keep query as string
  - [ ] Convert page/perPage to strings
  - [ ] Handle prove and orderBy fields
- [ ] Implement `encodeTxSearchParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeTxSearch(params: TxSearchParams): EncodedTxSearchParams`
- [ ] Implement `encodeTxSearch()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `searchTxs()` method to use:
  - [ ] `this.protocolAdapter.encodeTxSearch(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeTxSearch(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with various search queries
- [ ] Test pagination functionality
- [ ] Test ordering options
- [ ] Verify prove parameter works correctly

### Phase 6: Cleanup
- [ ] Remove `TX_SEARCH` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document query syntax and available search fields

## Notes
- Search query syntax needs documentation (e.g., "tx.height=1000")
- Pagination parameters need proper conversion
- Results contain array of transactions with total count
- Prove parameter affects whether proofs are included