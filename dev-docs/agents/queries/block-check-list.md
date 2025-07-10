# Block Method Refactoring Checklist

## Method: `getBlock(height?: number): Promise<Block>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 83-88)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `BlockParams` in `/types/requests/`
- [ ] Check response type: `Block` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/block/block-response.ts`
- [ ] Define TypeScript interface for `BlockResponse`
- [ ] Handle nested structures:
  - [ ] `BlockHeader` interface and codec
  - [ ] `BlockData` interface and codec
  - [ ] `BlockEvidence` interface and codec
  - [ ] `LastCommit` interface and codec
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] String to number conversions for heights
  - [ ] Base64 to Uint8Array for hashes
  - [ ] Timestamp conversions
- [ ] Implement `createBlockResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeBlock<T extends BlockResponse = BlockResponse>(response: unknown): T`
- [ ] Implement `decodeBlock()` in `BaseAdapter`
- [ ] Use generics for flexibility: `decodeBlock<T extends BlockResponse = BlockResponse>(response: unknown): T`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/block/block-params.ts`
- [ ] Define `BlockParams` interface (already exists, verify structure)
- [ ] Create `EncodedBlockParams` interface
- [ ] Create codec for encoding with height as string
- [ ] Implement `encodeBlockParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeBlock(params: BlockParams): EncodedBlockParams`
- [ ] Implement `encodeBlock()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getBlock()` method to use:
  - [ ] `this.protocolAdapter.encodeBlock(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeBlock(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with actual RPC responses
- [ ] Verify height conversions work correctly
- [ ] Check edge cases (null heights, genesis block)

### Phase 6: Cleanup
- [ ] Remove `BLOCK` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document any special handling for block structures

## Notes
- Block has complex nested structures that need careful handling
- Height parameters need string conversion for RPC
- Consider reusing existing type definitions if available