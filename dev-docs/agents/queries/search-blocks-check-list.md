# Search Blocks Method Refactoring Checklist

## Method: `searchBlocks(params: BlockSearchParams): Promise<SearchBlocksResult>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 104-108)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `BlockSearchParams` in `/types/requests/`
- [x] Check response type: `SearchBlocksResult` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Create response type file: `/types/responses/common/block/block-search-response.ts`
- [x] Define TypeScript interface for `BlockSearchResponse`
- [x] Handle pagination structure:
  - [x] `blocks` array (reuse Block type from getBlock)
  - [x] `totalCount` number
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Array converter for blocks using `createBlock`
  - [x] Number conversion for totalCount
- [x] Implement `createBlockSearchResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeBlockSearch<T extends BlockSearchResponse = BlockSearchResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeBlockSearch()` in `BaseAdapter` (abstract method, implemented in version-specific adapters)

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/block/block-search-params.ts`
- [x] Define `BlockSearchParams` interface with:
  - [x] `query` string (search query)
  - [x] `page` optional number
  - [x] `perPage` optional number
  - [x] `orderBy` optional string
- [x] Create `EncodedBlockSearchParams` interface (numbers as strings)
- [x] Create codec for encoding:
  - [x] Keep query as string
  - [x] Convert page/perPage to strings
  - [x] Handle orderBy field
- [x] Implement `encodeBlockSearchParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeBlockSearch(params: BlockSearchParams): EncodedBlockSearchParams`
- [x] Implement `encodeBlockSearch()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `searchBlocks()` method to use:
  - [x] `this.protocolAdapter.encodeBlockSearch(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeBlockSearch(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Build entire project successfully
- [x] Test with various search queries (created test script)
- [x] Verify pagination works correctly (parameters properly encoded)
- [x] Check ordering functionality (orderBy parameter handled)
- [x] under networks/cosmos, test:rpc all tests passing

### Phase 6: Cleanup
- [x] Remove `BLOCK_SEARCH` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document query syntax and available search fields

## Notes
- Search query syntax needs documentation
- Pagination parameters need proper conversion
- Results contain array of blocks with total count
- Moved identical decoder implementations to base.ts for DRY principle
- Fixed duplicate type export issue by renaming responses.ts to legacy-responses.ts
- All tasks completed successfully, project builds without errors

## Improvements Made
- Replaced all 'any' types with 'unknown' for better type safety
- Added proper array checking in the blocks converter
- Improved type casting in decoder method
- Removed old BlockSearchParams type from legacy requests.ts file
- Added import for BlockSearchParams in requests.ts to maintain compatibility
- Fixed encoding issue where perPage and orderBy parameters were not being properly converted to per_page and order_by in the RPC request