# Dump Consensus State Method Refactoring Checklist

## Method: `dumpConsensusState(): Promise<ConsensusStateDump>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 223-226)
- [ ] Confirm it uses `decodeResponse` (needs refactoring)
- [ ] No parameters needed (method has no arguments)
- [ ] Check response type: `ConsensusStateDump` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/consensus/consensus-state-dump-response.ts`
- [ ] Define TypeScript interface for `ConsensusStateDumpResponse`
- [ ] Handle structure (likely more detailed than regular consensus state):
  - [ ] Full consensus state dump
  - [ ] Additional debugging information
  - [ ] Raw state data
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Handle all fields from the dump
  - [ ] May need flexible handling for debug data
- [ ] Implement `createConsensusStateDumpResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeDumpConsensusState<T extends ConsensusStateDumpResponse = ConsensusStateDumpResponse>(response: unknown): T`
- [ ] Use generics for flexibility in decoder method (see pattern in completed methods)
- [ ] Implement `decodeDumpConsensusState()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] No request parameters needed (skip this phase)

### Phase 4: Update Query Client
- [ ] Update `dumpConsensusState()` method to use:
  - [ ] `this.protocolAdapter.decodeDumpConsensusState(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test consensus state dump retrieval
- [ ] Verify all debug information is captured
- [ ] Compare with regular consensus state

### Phase 6: Cleanup
- [ ] Remove `DUMP_CONSENSUS_STATE` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document differences from regular consensus state

## Notes
- No parameters needed for this method
- Returns more detailed/raw consensus information
- Used for debugging consensus issues
- May contain implementation-specific data