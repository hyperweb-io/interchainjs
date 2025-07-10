# Broadcast Tx Async Method Refactoring Checklist

## Method: `broadcastTxAsync(params: BroadcastTxParams): Promise<BroadcastTxAsyncResponse>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 187-191)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `BroadcastTxParams` in `/types/requests/` (shared with sync)
- [ ] Check response type: `BroadcastTxAsyncResponse` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Check if response type already exists in `/types/responses/common/broadcast-tx-async/`
- [ ] If not, create: `/types/responses/common/tx/broadcast-tx-async-response.ts`
- [ ] Define TypeScript interface for `BroadcastTxAsyncResponse`
- [ ] Handle fields:
  - [ ] `code` number (0 for success)
  - [ ] `data` optional Uint8Array
  - [ ] `log` optional string
  - [ ] `hash` string (transaction hash)
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Number conversion for code
  - [ ] Base64 to Uint8Array for data
  - [ ] String handling for log and hash
- [ ] Implement `createBroadcastTxAsyncResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeBroadcastTxAsync<T extends BroadcastTxAsyncResponse = BroadcastTxAsyncResponse>(response: unknown): T`
- [ ] Use generics for flexibility in decoder method (see pattern in completed methods)
- [ ] Implement `decodeBroadcastTxAsync()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Reuse `BroadcastTxParams` from broadcast-tx-sync refactoring
- [ ] Add encoder method to `RequestEncoder` interface: `encodeBroadcastTxAsync(params: BroadcastTxParams): EncodedBroadcastTxParams`
- [ ] Implement `encodeBroadcastTxAsync()` in `BaseAdapter` (can reuse logic)

### Phase 4: Update Query Client
- [ ] Update `broadcastTxAsync()` method to use:
  - [ ] `this.protocolAdapter.encodeBroadcastTxAsync(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeBroadcastTxAsync(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with valid transaction broadcast
- [ ] Verify immediate return behavior
- [ ] Confirm transaction hash is returned

### Phase 6: Cleanup
- [ ] Remove `BROADCAST_TX_ASYNC` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document async broadcast behavior

## Notes
- Async mode returns immediately without waiting
- No CheckTx validation in response
- Transaction hash is returned for tracking
- Shares request type with sync broadcast