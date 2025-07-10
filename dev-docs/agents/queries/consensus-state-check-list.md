# Consensus State Method Refactoring Checklist

## Method: `getConsensusState(): Promise<ConsensusState>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 218-221)
- [ ] Confirm it uses `decodeResponse` (needs refactoring)
- [ ] No parameters needed (method has no arguments)
- [ ] Check response type: `ConsensusState` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/consensus/consensus-state-response.ts`
- [ ] Define TypeScript interface for `ConsensusStateResponse`
- [ ] Handle complex structure:
  - [ ] `roundState` object with consensus round details
  - [ ] `peers` array of peer consensus states
- [ ] Define nested interfaces:
  - [ ] `RoundState` with height, round, step, etc.
  - [ ] `PeerRoundState` for peer information
  - [ ] `HeightVoteSet` for vote information
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Number/BigInt conversions for heights and rounds
  - [ ] Timestamp conversions for start times
  - [ ] Array converters for peers and votes
  - [ ] Complex nested object handling
- [ ] Implement `createConsensusStateResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeConsensusState<T extends ConsensusStateResponse = ConsensusStateResponse>(response: unknown): T`
- [ ] Implement `decodeConsensusState()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] No request parameters needed (skip this phase)

### Phase 4: Update Query Client
- [ ] Update `getConsensusState()` method to use:
  - [ ] `this.protocolAdapter.decodeConsensusState(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test consensus state retrieval
- [ ] Verify round state information
- [ ] Check peer information is properly decoded

### Phase 6: Cleanup
- [ ] Remove `CONSENSUS_STATE` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document consensus state structure

## Notes
- No parameters needed for this method
- Returns current consensus round information
- Contains detailed peer consensus states
- Complex nested structure requires careful handling