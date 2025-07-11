# Header By Hash Method Refactoring Checklist

## Method: `getHeaderByHash(hash: string): Promise<BlockHeader>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 132-137)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `HeaderByHashParams` in `/types/requests/`
- [x] Check response type: Same as `getHeader` (BlockHeader)
- [x] Note that it extracts `.header` from the response

### Phase 2: Response Type Refactoring
- [x] Reuse `HeaderResponse` type from `getHeader` refactoring
- [x] No additional response types needed (same response structure)
- [x] Verify `decodeHeader()` method can be reused from `getHeader` refactoring

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/block/header-by-hash-params.ts`
- [x] Define `HeaderByHashParams` interface with hash field
- [x] Create `EncodedHeaderByHashParams` interface
- [x] Create codec for encoding (hash remains as string)
- [x] Implement `encodeHeaderByHashParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeHeaderByHash(params: HeaderByHashParams): EncodedHeaderByHashParams`
- [x] Implement `encodeHeaderByHash()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `getHeaderByHash()` method to use:
  - [x] `this.protocolAdapter.encodeHeaderByHash(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeHeader(result)` instead of `decodeResponse`
  - [x] Keep the `.header` extraction logic
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [x] Test with valid block hashes
- [x] Test error handling for invalid hashes
- [x] Verify header structure matches getHeader

### Phase 6: Cleanup
- [x] Remove `HEADER_BY_HASH` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document hash format requirements

## Notes
- Shares response type with `getHeader` method
- Returns just the header, not the wrapper
- Hash validation may be needed in encoder