# Header Method Refactoring Checklist

## Method: `getHeader(height?: number): Promise<BlockHeader>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 125-130)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `HeaderParams` in `/types/requests/`
- [ ] Check response type: `BlockHeader` in `/types/responses/`
- [ ] Note that it extracts `.header` from the response

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/block/header-response.ts`
- [ ] Define TypeScript interface for `HeaderResponse` (wrapper with header field)
- [ ] Define `BlockHeader` interface with fields:
  - [ ] `version` object
  - [ ] `chainId` string
  - [ ] `height` number
  - [ ] `time` timestamp
  - [ ] Various hash fields (Uint8Array)
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Number conversions for heights
  - [ ] Base64 to Uint8Array for hashes
  - [ ] Timestamp conversion for time field
- [ ] Implement `createHeaderResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeHeader<T extends HeaderResponse = HeaderResponse>(response: unknown): T`
- [ ] Implement `decodeHeader()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/block/header-params.ts`
- [ ] Define `HeaderParams` interface (optional height)
- [ ] Create `EncodedHeaderParams` interface
- [ ] Create codec for encoding height as string
- [ ] Implement `encodeHeaderParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeHeader(params: HeaderParams): EncodedHeaderParams`
- [ ] Implement `encodeHeader()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getHeader()` method to use:
  - [ ] `this.protocolAdapter.encodeHeader(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeHeader(result)` instead of `decodeResponse`
  - [ ] Keep the `.header` extraction logic
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with specific heights
- [ ] Test without height (latest)
- [ ] Verify all header fields are properly decoded

### Phase 6: Cleanup
- [ ] Remove `HEADER` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document header structure and fields

## Notes
- Response contains a wrapper object with `header` field
- Method returns just the header, not the wrapper
- Header contains important blockchain metadata