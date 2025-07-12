# Block Results Method Refactoring Checklist

## Method: `getBlockResults(height?: number): Promise<BlockResults>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 97-102)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `BlockResultsParams` in `/types/requests/`
- [x] Check response type: `BlockResults` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Create response type file: `/types/responses/common/block/block-results-response.ts`
- [x] Define TypeScript interface for `BlockResultsResponse`
- [x] Handle nested structures:
  - [x] `TxResult` array interface and codec (created as TxData)
  - [x] `Event` interface and codec (reused existing)
  - [x] `ValidatorUpdate` array interface and codec
  - [x] `ConsensusParamUpdates` interface and codec (reused existing)
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Array converters for tx results
  - [x] Base64 conversions for data fields
  - [x] Number conversions for gas and heights
- [x] Implement `createBlockResultsResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeBlockResults<T extends BlockResultsResponse = BlockResultsResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeBlockResults()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/block/block-results-params.ts`
- [x] Define `BlockResultsParams` interface (verify existing structure)
- [x] Create `EncodedBlockResultsParams` interface
- [x] Create codec for encoding with height as string
- [x] Implement `encodeBlockResultsParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeBlockResults(params: BlockResultsParams): EncodedBlockResultsParams`
- [x] Implement `encodeBlockResults()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `getBlockResults()` method to use:
  - [x] `this.protocolAdapter.encodeBlockResults(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeBlockResults(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Test with actual RPC responses
- [x] Verify transaction result arrays are properly decoded
- [x] Check edge cases (blocks with no transactions)

### Phase 6: Cleanup
- [x] Remove `BLOCK_RESULTS` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document transaction result structure

## Notes
- Contains arrays of transaction results with events
- May have validator updates and consensus parameter changes
- Gas usage fields need proper number conversion
- Added `appHash` field to BlockResultsResponse interface and codec
- Fixed response extraction in base.ts to handle wrapped responses (`resp.result || resp`)
- Empty blocks return empty array for `txs_results`, not null
- Uses `finalize_block_events` for CometBFT (not begin/end block events)