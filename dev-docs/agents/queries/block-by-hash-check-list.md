# Block By Hash Method Refactoring Checklist

## Method: `getBlockByHash(hash: string): Promise<Block>`

## Status: ✅ COMPLETED

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 90-95)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `BlockByHashParams` in `/types/requests/`
- [x] Check response type: `Block` in `/types/responses/` (same as getBlock)
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Reuse `BlockResponse` type from `getBlock` refactoring
- [x] No additional response types needed (same response structure)
- [x] Verify `decodeBlock()` method can be reused from `getBlock` refactoring

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/block/block-by-hash-params.ts`
- [x] Define `BlockByHashParams` interface (verify existing structure)
- [x] Create `EncodedBlockByHashParams` interface
- [x] Create codec for encoding (hash should remain as string)
- [x] Implement `encodeBlockByHashParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeBlockByHash(params: BlockByHashParams): EncodedBlockByHashParams`
- [x] Implement `encodeBlockByHash()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `getBlockByHash()` method to use:
  - [x] `this.protocolAdapter.encodeBlockByHash(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeBlock(result)` instead of `decodeResponse`
- [x] Update imports to use index files
- [x] Extract block from BlockResponse

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Test with actual block hashes (tested error case)
- [x] Verify hash format validation if needed
- [x] Check error handling for invalid hashes

### Phase 6: Cleanup
- [x] Remove `BLOCK_BY_HASH` case from `decodeResponse` switch statement
- [x] Remove `BLOCK_BY_HASH` case from `encodeParams` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document hash format requirements

## Notes
- Shares response type with `getBlock` method
- Hash parameter should be validated for correct format
- Consider adding hash validation in the encoder