# Genesis Chunked Method Refactoring Checklist

## Method: `getGenesisChunked(chunk: number): Promise<GenesisChunk>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 233-238)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `GenesisChunkedParams` in `/types/requests/`
- [x] Check response type: `GenesisChunk` in `/types/responses/`
- [x] Note that `decodeGenesisChunked` already exists in adapter

### Phase 2: Response Type Refactoring
- [x] Check if response type already exists (seems partially refactored)
- [x] Verify `/types/responses/common/genesis-chunked/genesis-chunked-response.ts`
- [x] Ensure TypeScript interface for `GenesisChunkedResponse` includes:
  - [x] `chunk` number (chunk index)
  - [x] `total` number (total chunks)
  - [x] `data` string (base64 encoded chunk data)
- [x] Verify codec handles:
  - [x] Number conversions for chunk and total
  - [x] String handling for data (remains base64)
- [x] Verify `createGenesisChunkedResponse()` function exists
- [x] Confirm decoder method exists in `ResponseDecoder` interface: `decodeGenesisChunked<T extends GenesisChunkedResponse = GenesisChunkedResponse>(response: unknown): T`
- [x] Verify `decodeGenesisChunked()` implementation in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Check if request type already exists (seems partially refactored)
- [x] Verify `/types/requests/common/genesis-chunked/genesis-chunked-params.ts`
- [x] Ensure `GenesisChunkedParams` interface has:
  - [x] `chunk` number
- [x] Ensure `EncodedGenesisChunkedParams` interface exists (chunk as string)
- [x] Verify codec for encoding chunk to string
- [x] Verify `encodeGenesisChunkedParams()` function exists
- [x] Confirm encoder method exists in `RequestEncoder` interface: `encodeGenesisChunked(params: GenesisChunkedParams): EncodedGenesisChunkedParams`
- [x] Verify `encodeGenesisChunked()` implementation in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `getGenesisChunked()` method to use:
  - [x] `this.protocolAdapter.encodeGenesisChunked(params)` instead of `encodeParams`
  - [x] Keep existing `decodeGenesisChunked` call (already refactored)
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Test with various chunk indices
- [x] Verify chunk data is properly encoded
- [x] Test boundary conditions (first/last chunk)

### Phase 6: Cleanup
- [x] Remove `GENESIS_CHUNKED` case from `encodeParams` if present
- [x] Remove unused imports
- [x] Add JSDoc comments if missing
- [x] Document chunking behavior and usage

## Notes
- Used for retrieving large genesis files in chunks
- Chunk data is base64 encoded
- Client needs to reassemble chunks
- Partially refactored - decoder exists but encoder needs update