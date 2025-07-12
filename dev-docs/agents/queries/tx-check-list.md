# Tx (Get Transaction) Method Refactoring Checklist

## Method: `getTx(hash: string, prove?: boolean): Promise<TxResponse>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 196-201)
- [x] Confirm it uses specific encode/decode methods (already refactored)
- [x] Check parameter type: `TxParams` in `/types/requests/`
- [x] Check response type: `TxResponse` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Create response type file: `/types/responses/common/tx/tx-response.ts`
- [x] Define TypeScript interface for `TxResponse`
- [x] Handle nested structures:
  - [x] `tx` field with transaction data
  - [x] `txResult` field with execution result
  - [x] `proof` field (optional, when prove=true)
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Base64 conversions for tx data
  - [x] Number conversions for gas and heights
  - [x] Event array handling
  - [x] Proof structure handling
- [x] Implement `createTxResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeTx<T extends TxResponse = TxResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeTx()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/tx/tx-params.ts`
- [x] Define `TxParams` interface with:
  - [x] `hash` string (transaction hash)
  - [x] `prove` optional boolean
- [x] Create `EncodedTxParams` interface
- [x] Create codec for encoding (minimal changes needed)
- [x] Implement `encodeTxParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeTx(params: TxParams): EncodedTxParams`
- [x] Implement `encodeTx()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `getTx()` method to use:
  - [x] `this.protocolAdapter.encodeTx(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeTx(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with transaction hashes
- [ ] Test with prove=true and prove=false
- [ ] Verify transaction data and results are properly decoded

### Phase 6: Cleanup
- [ ] Remove `TX` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document transaction response structure

## Notes
- Transaction hash format should be validated
- Proof field is optional based on prove parameter
- Contains detailed transaction execution results