# Search Blocks Method Refactoring Checklist

## Method: `searchBlocks(params: BlockSearchParams): Promise<SearchBlocksResult>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 104-108)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `BlockSearchParams` in `/types/requests/`
- [ ] Check response type: `SearchBlocksResult` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/block/block-search-response.ts`
- [ ] Define TypeScript interface for `BlockSearchResponse`
- [ ] Handle pagination structure:
  - [ ] `blocks` array (reuse Block type from getBlock)
  - [ ] `totalCount` number
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Array converter for blocks using `createBlock`
  - [ ] Number conversion for totalCount
- [ ] Implement `createBlockSearchResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeBlockSearch<T extends BlockSearchResponse = BlockSearchResponse>(response: unknown): T`
- [ ] Implement `decodeBlockSearch()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/block/block-search-params.ts`
- [ ] Define `BlockSearchParams` interface with:
  - [ ] `query` string (search query)
  - [ ] `page` optional number
  - [ ] `perPage` optional number
  - [ ] `orderBy` optional string
- [ ] Create `EncodedBlockSearchParams` interface (numbers as strings)
- [ ] Create codec for encoding:
  - [ ] Keep query as string
  - [ ] Convert page/perPage to strings
  - [ ] Handle orderBy field
- [ ] Implement `encodeBlockSearchParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeBlockSearch(params: BlockSearchParams): EncodedBlockSearchParams`
- [ ] Implement `encodeBlockSearch()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `searchBlocks()` method to use:
  - [ ] `this.protocolAdapter.encodeBlockSearch(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeBlockSearch(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with various search queries
- [ ] Verify pagination works correctly
- [ ] Check ordering functionality

### Phase 6: Cleanup
- [ ] Remove `BLOCK_SEARCH` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document query syntax and available search fields

## Notes
- Search query syntax needs documentation
- Pagination parameters need proper conversion
- Results contain array of blocks with total count