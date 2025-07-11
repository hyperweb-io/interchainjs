# Validators Method Refactoring Checklist

## Method: `getValidators(height?: number, page?: number, perPage?: number): Promise<ValidatorSet>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 200-209)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `ValidatorsParams` in `/types/requests/`
- [x] Check response type: `ValidatorSet` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Create response type file: `/types/responses/common/validator/validators-response.ts`
- [x] Define TypeScript interface for `ValidatorsResponse`
- [x] Handle structure:
  - [x] `blockHeight` number
  - [x] `validators` array of validator objects
  - [x] `count` number (total count)
  - [x] `total` number (total validators)
- [x] Define `Validator` interface:
  - [x] `address` string (as Uint8Array)
  - [x] `pubKey` object with type and value
  - [x] `votingPower` bigint
  - [x] `proposerPriority` bigint (optional)
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Number conversion for blockHeight
  - [x] Array converter for validators
  - [x] BigInt conversions for voting power
  - [x] PubKey structure handling
- [x] Implement `createValidatorsResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeValidators<T extends ValidatorsResponse = ValidatorsResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeValidators()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/validator/validators-params.ts`
- [x] Define `ValidatorsParams` interface with:
  - [x] `height` optional number
  - [x] `page` optional number
  - [x] `perPage` optional number
- [x] Create `EncodedValidatorsParams` interface (numbers as strings)
- [x] Create codec for encoding all numbers to strings
- [x] Implement `encodeValidatorsParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeValidators(params: ValidatorsParams): EncodedValidatorsParams`
- [x] Implement `encodeValidators()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `getValidators()` method to use:
  - [x] `this.protocolAdapter.encodeValidators(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeValidators(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Build completed successfully (validators-related code has no errors)
- [x] Fixed readonly property assignment issue in cosmos-query-client.ts
- [x] Full project build passes without errors
- [x] Test with specific heights
- [x] Test pagination parameters
- [x] Verify validator data is properly decoded
- [x] Check voting power as bigint
- [x] under networks/cosmos, make sure test:rpc are passing


### Phase 6: Cleanup
- [x] Remove `VALIDATORS` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document pagination behavior
- [x] Remove ValidatorsRequest from Request union type in requests.ts
- [x] Add ValidatorsResponse export to responses.ts (temporary until full migration)

## Notes
- Returns validator set at specific height
- Pagination supported for large validator sets
- Voting power and proposer priority use bigint
- Public keys have type and value fields

## Improvements Made
- Fixed encoding issue where perPage parameter was not being properly converted to per_page in the RPC request
- The codec was designed for decoding but was being used for encoding, so we implemented a manual encoding function