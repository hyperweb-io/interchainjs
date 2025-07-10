# Block By Hash Method Refactoring Checklist

## Method: `getBlockByHash(hash: string): Promise<Block>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 90-95)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `BlockByHashParams` in `/types/requests/`
- [ ] Check response type: `Block` in `/types/responses/` (same as getBlock)
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Reuse `BlockResponse` type from `getBlock` refactoring
- [ ] No additional response types needed (same response structure)
- [ ] Verify `decodeBlock()` method can be reused from `getBlock` refactoring

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/block/block-by-hash-params.ts`
- [ ] Define `BlockByHashParams` interface (verify existing structure)
- [ ] Create `EncodedBlockByHashParams` interface
- [ ] Create codec for encoding (hash should remain as string)
- [ ] Implement `encodeBlockByHashParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeBlockByHash(params: BlockByHashParams): EncodedBlockByHashParams`
- [ ] Implement `encodeBlockByHash()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getBlockByHash()` method to use:
  - [ ] `this.protocolAdapter.encodeBlockByHash(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeBlock(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with actual block hashes
- [ ] Verify hash format validation if needed
- [ ] Check error handling for invalid hashes

### Phase 6: Cleanup
- [ ] Remove `BLOCK_BY_HASH` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document hash format requirements

## Notes
- Shares response type with `getBlock` method
- Hash parameter should be validated for correct format
- Consider adding hash validation in the encoder