# Genesis Chunked Method Refactoring Checklist

## Method: `getGenesisChunked(chunk: number): Promise<GenesisChunk>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 233-238)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `GenesisChunkedParams` in `/types/requests/`
- [ ] Check response type: `GenesisChunk` in `/types/responses/`
- [ ] Note that `decodeGenesisChunked` already exists in adapter

### Phase 2: Response Type Refactoring
- [ ] Check if response type already exists (seems partially refactored)
- [ ] Verify `/types/responses/common/genesis/genesis-chunked-response.ts`
- [ ] Ensure TypeScript interface for `GenesisChunkedResponse` includes:
  - [ ] `chunk` number (chunk index)
  - [ ] `total` number (total chunks)
  - [ ] `data` string (base64 encoded chunk data)
- [ ] Verify codec handles:
  - [ ] Number conversions for chunk and total
  - [ ] String handling for data (remains base64)
- [ ] Verify `createGenesisChunkedResponse()` function exists
- [ ] Confirm decoder method exists in `ResponseDecoder` interface: `decodeGenesisChunked<T extends GenesisChunkedResponse = GenesisChunkedResponse>(response: unknown): T`
- [ ] Verify `decodeGenesisChunked()` implementation in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Check if request type already exists (seems partially refactored)
- [ ] Verify `/types/requests/common/genesis/genesis-chunked-params.ts`
- [ ] Ensure `GenesisChunkedParams` interface has:
  - [ ] `chunk` number
- [ ] Ensure `EncodedGenesisChunkedParams` interface exists (chunk as string)
- [ ] Verify codec for encoding chunk to string
- [ ] Verify `encodeGenesisChunkedParams()` function exists
- [ ] Confirm encoder method exists in `RequestEncoder` interface: `encodeGenesisChunked(params: GenesisChunkedParams): EncodedGenesisChunkedParams`
- [ ] Verify `encodeGenesisChunked()` implementation in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getGenesisChunked()` method to use:
  - [ ] `this.protocolAdapter.encodeGenesisChunked(params)` instead of `encodeParams`
  - [ ] Keep existing `decodeGenesisChunked` call (already refactored)
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with various chunk indices
- [ ] Verify chunk data is properly encoded
- [ ] Test boundary conditions (first/last chunk)

### Phase 6: Cleanup
- [ ] Remove `GENESIS_CHUNKED` case from `encodeParams` if present
- [ ] Remove unused imports
- [ ] Add JSDoc comments if missing
- [ ] Document chunking behavior and usage

## Notes
- Used for retrieving large genesis files in chunks
- Chunk data is base64 encoded
- Client needs to reassemble chunks
- Partially refactored - decoder exists but encoder needs update