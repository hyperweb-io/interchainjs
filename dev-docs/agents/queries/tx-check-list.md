# Tx (Get Transaction) Method Refactoring Checklist

## Method: `getTx(hash: string, prove?: boolean): Promise<TxResponse>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 148-153)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `TxParams` in `/types/requests/`
- [ ] Check response type: `TxResponse` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Create response type file: `/types/responses/common/tx/tx-response.ts`
- [ ] Define TypeScript interface for `TxResponse`
- [ ] Handle nested structures:
  - [ ] `tx` field with transaction data
  - [ ] `txResult` field with execution result
  - [ ] `proof` field (optional, when prove=true)
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Base64 conversions for tx data
  - [ ] Number conversions for gas and heights
  - [ ] Event array handling
  - [ ] Proof structure handling
- [ ] Implement `createTxResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeTx<T extends TxResponse = TxResponse>(response: unknown): T`
- [ ] Use generics for flexibility in decoder method (see pattern in completed methods)
- [ ] Implement `decodeTx()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/tx/tx-params.ts`
- [ ] Define `TxParams` interface with:
  - [ ] `hash` string (transaction hash)
  - [ ] `prove` optional boolean
- [ ] Create `EncodedTxParams` interface
- [ ] Create codec for encoding (minimal changes needed)
- [ ] Implement `encodeTxParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeTx(params: TxParams): EncodedTxParams`
- [ ] Implement `encodeTx()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `getTx()` method to use:
  - [ ] `this.protocolAdapter.encodeTx(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeTx(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

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