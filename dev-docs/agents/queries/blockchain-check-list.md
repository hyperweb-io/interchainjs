# Blockchain Method Refactoring Checklist

## Method: `getBlockchain(minHeight?: number, maxHeight?: number): Promise<BlockchainInfo>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 110-123)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `BlockchainParams` in `/types/requests/`
- [ ] Check response type: `BlockchainInfo` in `/types/responses/`
- [ ] Note special logic for default parameters (last 20 blocks)

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/block/blockchain-response.ts`
- [ ] Define TypeScript interface for `BlockchainResponse`
- [ ] Handle structure:
  - [ ] `lastHeight` number
  - [ ] `blockMetas` array of block metadata
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Number conversion for lastHeight
  - [ ] Array converter for blockMetas
  - [ ] Handle block metadata structure (header info without full block data)
- [ ] Implement `createBlockchainResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeBlockchain<T extends BlockchainResponse = BlockchainResponse>(response: unknown): T`
- [ ] Implement `decodeBlockchain()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/block/blockchain-params.ts`
- [ ] Define `BlockchainParams` interface with:
  - [ ] `minHeight` number
  - [ ] `maxHeight` number
- [ ] Create `EncodedBlockchainParams` interface (heights as strings)
- [ ] Create codec for encoding heights to strings
- [ ] Implement `encodeBlockchainParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeBlockchain(params: BlockchainParams): EncodedBlockchainParams`
- [ ] Implement `encodeBlockchain()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Keep the default parameter logic (fetching last 20 blocks)
- [ ] Update method to use:
  - [ ] `this.protocolAdapter.encodeBlockchain(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeBlockchain(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with explicit height ranges
- [ ] Test default behavior (no parameters)
- [ ] Verify height range validation

### Phase 6: Cleanup
- [ ] Remove `BLOCKCHAIN` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document default behavior and height range limits

## Notes
- Has special logic to fetch last 20 blocks by default
- Returns metadata about blocks, not full block data
- Height range validation may be needed