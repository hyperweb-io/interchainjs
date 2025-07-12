# Search Txs Method Refactoring Checklist

## Method: `searchTxs(params: TxSearchParams): Promise<SearchTxsResult>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 155-159)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `TxSearchParams` in `/types/requests/`
- [x] Check response type: `SearchTxsResult` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Create response type file: `/types/responses/common/tx/tx-search-response.ts`
- [x] Define TypeScript interface for `TxSearchResponse`
- [x] Handle pagination structure:
  - [x] `txs` array (reuse TxResponse type from getTx)
  - [x] `totalCount` number
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Array converter for txs using `createTxResponse`
  - [x] Number conversion for totalCount
- [x] Implement `createTxSearchResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeTxSearch<T extends TxSearchResponse = TxSearchResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeTxSearch()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/tx/tx-search-params.ts`
- [x] Define `TxSearchParams` interface with:
  - [x] `query` string (search query)
  - [x] `prove` optional boolean
  - [x] `page` optional number
  - [x] `perPage` optional number
  - [x] `orderBy` optional string
- [x] Create `EncodedTxSearchParams` interface (numbers as strings)
- [x] Create codec for encoding:
  - [x] Keep query as string
  - [x] Convert page/perPage to strings
  - [x] Handle prove and orderBy fields
- [x] Implement `encodeTxSearchParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeTxSearch(params: TxSearchParams): EncodedTxSearchParams`
- [x] Implement `encodeTxSearch()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `searchTxs()` method to use:
  - [x] `this.protocolAdapter.encodeTxSearch(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeTxSearch(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Test with various search queries
- [x] Test pagination functionality
- [x] Test ordering options
- [x] Verify prove parameter works correctly

### Phase 6: Cleanup
- [x] Remove `TX_SEARCH` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document query syntax and available search fields

## Notes
- Search query syntax needs documentation (e.g., "tx.height=1000")
- Pagination parameters need proper conversion
- Results contain array of transactions with total count
- Prove parameter affects whether proofs are included
- Fixed pagination issue by manually encoding field names in encodeTxSearchParams
- Fixed base64 encoding issue for tx and data fields by adding ensureBytesFromBase64 converter
- All 5 searchTxs tests are passing