# Genesis Method Refactoring Checklist

## Method: `getGenesis(): Promise<Genesis>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 228-231)
- [ ] Confirm it uses `decodeResponse` (needs refactoring)
- [ ] No parameters needed (method has no arguments)
- [ ] Check response type: `Genesis` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/genesis/genesis-response.ts`
- [ ] Define TypeScript interface for `GenesisResponse`
- [ ] Handle structure:
  - [ ] `genesis` object containing:
    - [ ] `genesisTime` timestamp
    - [ ] `chainId` string
    - [ ] `initialHeight` number
    - [ ] `consensusParams` object
    - [ ] `validators` array
    - [ ] `appHash` Uint8Array
    - [ ] `appState` object (chain-specific)
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Timestamp conversion for genesisTime
  - [ ] Number conversion for initialHeight
  - [ ] Base64 to Uint8Array for appHash
  - [ ] Complex object handling for appState
  - [ ] Array converter for validators
- [ ] Implement `createGenesisResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeGenesis<T extends GenesisResponse = GenesisResponse>(response: unknown): T`
- [ ] Implement `decodeGenesis()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] No request parameters needed (skip this phase)

### Phase 4: Update Query Client
- [ ] Update `getGenesis()` method to use:
  - [ ] `this.protocolAdapter.decodeGenesis(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test genesis retrieval
- [ ] Verify all genesis fields are decoded
- [ ] Check appState handling (chain-specific)

### Phase 6: Cleanup
- [ ] Remove `GENESIS` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document genesis structure and appState variations

## Notes
- No parameters needed for this method
- Returns blockchain genesis configuration
- appState is chain-specific and may vary
- Can be large for chains with complex genesis