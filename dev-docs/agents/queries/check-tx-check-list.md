# Check Tx Method Refactoring Checklist

## Method: `checkTx(tx: string): Promise<CheckTxResult>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 161-166)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: inline object `{ tx }` 
- [ ] Check response type: `CheckTxResult` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/tx/check-tx-response.ts`
- [ ] Define TypeScript interface for `CheckTxResponse`
- [ ] Handle fields:
  - [ ] `code` number (0 for success)
  - [ ] `data` optional Uint8Array
  - [ ] `log` optional string
  - [ ] `info` optional string
  - [ ] `gasWanted` optional number
  - [ ] `gasUsed` optional number
  - [ ] `events` optional array
  - [ ] `codespace` optional string
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Number conversions for code and gas fields
  - [ ] Base64 to Uint8Array for data
  - [ ] String conversions for log/info
  - [ ] Event array handling
- [ ] Implement `createCheckTxResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeCheckTx<T extends CheckTxResponse = CheckTxResponse>(response: unknown): T`
- [ ] Use generics for flexibility in decoder method (see pattern in completed methods)
- [ ] Implement `decodeCheckTx()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/tx/check-tx-params.ts`
- [ ] Define `CheckTxParams` interface with:
  - [ ] `tx` string (base64 encoded transaction)
- [ ] Create `EncodedCheckTxParams` interface (likely same structure)
- [ ] Create codec for encoding (minimal changes)
- [ ] Implement `encodeCheckTxParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeCheckTx(params: CheckTxParams): EncodedCheckTxParams`
- [ ] Implement `encodeCheckTx()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `checkTx()` method to use:
  - [ ] Create proper `CheckTxParams` object instead of inline
  - [ ] `this.protocolAdapter.encodeCheckTx(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeCheckTx(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with valid transaction data
- [ ] Test with invalid transaction data
- [ ] Verify error codes and messages are properly decoded

### Phase 6: Cleanup
- [ ] Remove `CHECK_TX` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document expected transaction format

## Notes
- Used to validate transactions without broadcasting
- Transaction should be base64 encoded
- Returns validation result with gas estimation