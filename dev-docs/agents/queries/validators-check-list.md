# Validators Method Refactoring Checklist

## Method: `getValidators(height?: number, page?: number, perPage?: number): Promise<ValidatorSet>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 200-209)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `ValidatorsParams` in `/types/requests/`
- [ ] Check response type: `ValidatorSet` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/validator/validators-response.ts`
- [ ] Define TypeScript interface for `ValidatorsResponse`
- [ ] Handle structure:
  - [ ] `blockHeight` number
  - [ ] `validators` array of validator objects
  - [ ] `count` number (total count)
  - [ ] `total` number (total validators)
- [ ] Define `Validator` interface:
  - [ ] `address` string
  - [ ] `pubKey` object with type and value
  - [ ] `votingPower` bigint
  - [ ] `proposerPriority` bigint
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Number conversion for blockHeight
  - [ ] Array converter for validators
  - [ ] BigInt conversions for voting power
  - [ ] PubKey structure handling
- [ ] Implement `createValidatorsResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeValidators<T extends ValidatorsResponse = ValidatorsResponse>(response: unknown): T`
- [ ] Use generics for flexibility in decoder method (see pattern in completed methods)
- [ ] Implement `decodeValidators()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/validator/validators-params.ts`
- [ ] Define `ValidatorsParams` interface with:
  - [ ] `height` optional number
  - [ ] `page` optional number
  - [ ] `perPage` optional number
- [ ] Create `EncodedValidatorsParams` interface (numbers as strings)
- [ ] Create codec for encoding all numbers to strings
- [ ] Implement `encodeValidatorsParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeValidators(params: ValidatorsParams): EncodedValidatorsParams`
- [ ] Implement `encodeValidators()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getValidators()` method to use:
  - [ ] `this.protocolAdapter.encodeValidators(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeValidators(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with specific heights
- [ ] Test pagination parameters
- [ ] Verify validator data is properly decoded
- [ ] Check voting power as bigint

### Phase 6: Cleanup
- [ ] Remove `VALIDATORS` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document pagination behavior

## Notes
- Returns validator set at specific height
- Pagination supported for large validator sets
- Voting power and proposer priority use bigint
- Public keys have type and value fields