# Consensus Params Method Refactoring Checklist

## Method: `getConsensusParams(height?: number): Promise<ConsensusParams>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 211-216)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `ConsensusParamsParams` in `/types/requests/`
- [ ] Check response type: `ConsensusParams` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/consensus/consensus-params-response.ts`
- [ ] Define TypeScript interface for `ConsensusParamsResponse`
- [ ] Handle nested structure:
  - [ ] `blockHeight` number
  - [ ] `consensusParams` object containing:
    - [ ] `block` object (maxBytes, maxGas, timeIotaMs)
    - [ ] `evidence` object (maxAgeNumBlocks, maxAgeDuration, maxBytes)
    - [ ] `validator` object (pubKeyTypes)
    - [ ] `version` object (appVersion)
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Number conversions for all numeric fields
  - [ ] BigInt conversions where needed
  - [ ] Duration handling for evidence maxAge
  - [ ] Array handling for pubKeyTypes
- [ ] Implement `createConsensusParamsResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeConsensusParams<T extends ConsensusParamsResponse = ConsensusParamsResponse>(response: unknown): T`
- [ ] Implement `decodeConsensusParams()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/consensus/consensus-params-params.ts`
- [ ] Define `ConsensusParamsParams` interface with:
  - [ ] `height` optional number
- [ ] Create `EncodedConsensusParamsParams` interface (height as string)
- [ ] Create codec for encoding height to string
- [ ] Implement `encodeConsensusParamsParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeConsensusParams(params: ConsensusParamsParams): EncodedConsensusParamsParams`
- [ ] Implement `encodeConsensusParams()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getConsensusParams()` method to use:
  - [ ] `this.protocolAdapter.encodeConsensusParams(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeConsensusParams(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with specific heights
- [ ] Test without height (latest)
- [ ] Verify all consensus parameters are decoded
- [ ] Check version-specific differences

### Phase 6: Cleanup
- [ ] Remove `CONSENSUS_PARAMS` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document consensus parameter meanings

## Notes
- Returns blockchain consensus parameters
- Parameters control block size, evidence handling, etc.
- May have version-specific differences
- Duration fields need special handling