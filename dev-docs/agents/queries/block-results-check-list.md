# Block Results Method Refactoring Checklist

## Method: `getBlockResults(height?: number): Promise<BlockResults>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 97-102)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `BlockResultsParams` in `/types/requests/`
- [ ] Check response type: `BlockResults` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/block/block-results-response.ts`
- [ ] Define TypeScript interface for `BlockResultsResponse`
- [ ] Handle nested structures:
  - [ ] `TxResult` array interface and codec
  - [ ] `Event` interface and codec
  - [ ] `ValidatorUpdate` array interface and codec
  - [ ] `ConsensusParamUpdates` interface and codec
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Array converters for tx results
  - [ ] Base64 conversions for data fields
  - [ ] Number conversions for gas and heights
- [ ] Implement `createBlockResultsResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeBlockResults<T extends BlockResultsResponse = BlockResultsResponse>(response: unknown): T`
- [ ] Implement `decodeBlockResults()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/block/block-results-params.ts`
- [ ] Define `BlockResultsParams` interface (verify existing structure)
- [ ] Create `EncodedBlockResultsParams` interface
- [ ] Create codec for encoding with height as string
- [ ] Implement `encodeBlockResultsParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeBlockResults(params: BlockResultsParams): EncodedBlockResultsParams`
- [ ] Implement `encodeBlockResults()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getBlockResults()` method to use:
  - [ ] `this.protocolAdapter.encodeBlockResults(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeBlockResults(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with actual RPC responses
- [ ] Verify transaction result arrays are properly decoded
- [ ] Check edge cases (blocks with no transactions)

### Phase 6: Cleanup
- [ ] Remove `BLOCK_RESULTS` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document transaction result structure

## Notes
- Contains arrays of transaction results with events
- May have validator updates and consensus parameter changes
- Gas usage fields need proper number conversion