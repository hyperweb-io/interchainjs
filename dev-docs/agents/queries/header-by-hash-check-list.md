# Header By Hash Method Refactoring Checklist

## Method: `getHeaderByHash(hash: string): Promise<BlockHeader>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 132-137)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `HeaderByHashParams` in `/types/requests/`
- [ ] Check response type: Same as `getHeader` (BlockHeader)
- [ ] Note that it extracts `.header` from the response

### Phase 2: Response Type Refactoring
- [ ] Reuse `HeaderResponse` type from `getHeader` refactoring
- [ ] No additional response types needed (same response structure)
- [ ] Verify `decodeHeader()` method can be reused from `getHeader` refactoring

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/block/header-by-hash-params.ts`
- [ ] Define `HeaderByHashParams` interface with hash field
- [ ] Create `EncodedHeaderByHashParams` interface
- [ ] Create codec for encoding (hash remains as string)
- [ ] Implement `encodeHeaderByHashParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeHeaderByHash(params: HeaderByHashParams): EncodedHeaderByHashParams`
- [ ] Implement `encodeHeaderByHash()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getHeaderByHash()` method to use:
  - [ ] `this.protocolAdapter.encodeHeaderByHash(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeHeader(result)` instead of `decodeResponse`
  - [ ] Keep the `.header` extraction logic
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with valid block hashes
- [ ] Test error handling for invalid hashes
- [ ] Verify header structure matches getHeader

### Phase 6: Cleanup
- [ ] Remove `HEADER_BY_HASH` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document hash format requirements

## Notes
- Shares response type with `getHeader` method
- Returns just the header, not the wrapper
- Hash validation may be needed in encoder