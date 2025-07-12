# Genesis Method Refactoring Checklist

## Method: `getGenesis(): Promise<Genesis>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 228-231)
- [x] Confirm it uses `decodeResponse` (needs refactoring)
- [x] No parameters needed (method has no arguments)
- [x] Check response type: `Genesis` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Create response type file: `/types/responses/common/genesis/genesis-response.ts`
- [x] Define TypeScript interface for `GenesisResponse`
- [x] Handle structure:
  - [x] `genesis` object containing:
    - [x] `genesisTime` timestamp
    - [x] `chainId` string
    - [x] `initialHeight` number
    - [x] `consensusParams` object
    - [x] `validators` array
    - [x] `appHash` Uint8Array
    - [x] `appState` object (chain-specific)
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Timestamp conversion for genesisTime
  - [x] Number conversion for initialHeight
  - [x] Base64 to Uint8Array for appHash
  - [x] Complex object handling for appState
  - [x] Array converter for validators
- [x] Implement `createGenesisResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeGenesis<T extends GenesisResponse = GenesisResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeGenesis()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] No request parameters needed (skip this phase)

### Phase 4: Update Query Client
- [x] Update `getGenesis()` method to use:
  - [x] `this.protocolAdapter.decodeGenesis(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test genesis retrieval
- [ ] Verify all genesis fields are decoded
- [ ] Check appState handling (chain-specific)

### Phase 6: Cleanup
- [x] Remove `GENESIS` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document genesis structure and appState variations

## Notes
- No parameters needed for this method
- Returns blockchain genesis configuration
- appState is chain-specific and may vary
- Can be large for chains with complex genesis