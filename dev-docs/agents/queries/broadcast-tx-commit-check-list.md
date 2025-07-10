# Broadcast Tx Commit Method Refactoring Checklist

## Method: `broadcastTxCommit(params: BroadcastTxParams): Promise<BroadcastTxCommitResponse>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 193-197)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `BroadcastTxParams` in `/types/requests/` (shared with sync/async)
- [ ] Check response type: `BroadcastTxCommitResponse` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Check if response type already exists in `/types/responses/common/broadcast-tx-commit/`
- [ ] If not, create: `/types/responses/common/tx/broadcast-tx-commit-response.ts`
- [ ] Define TypeScript interface for `BroadcastTxCommitResponse`
- [ ] Handle complex structure:
  - [ ] `checkTx` result object
  - [ ] `deliverTx` result object
  - [ ] `hash` string (transaction hash)
  - [ ] `height` number (block height)
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Nested object handling for checkTx/deliverTx
  - [ ] Number conversions for codes and gas
  - [ ] Base64 conversions for data fields
  - [ ] Height conversion to number
- [ ] Implement `createBroadcastTxCommitResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeBroadcastTxCommit<T extends BroadcastTxCommitResponse = BroadcastTxCommitResponse>(response: unknown): T`
- [ ] Implement `decodeBroadcastTxCommit()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Reuse `BroadcastTxParams` from broadcast-tx-sync refactoring
- [ ] Add encoder method to `RequestEncoder` interface: `encodeBroadcastTxCommit(params: BroadcastTxParams): EncodedBroadcastTxParams`
- [ ] Implement `encodeBroadcastTxCommit()` in `BaseAdapter` (can reuse logic)

### Phase 4: Update Query Client
- [ ] Update `broadcastTxCommit()` method to use:
  - [ ] `this.protocolAdapter.encodeBroadcastTxCommit(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeBroadcastTxCommit(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with valid transaction broadcast
- [ ] Verify both checkTx and deliverTx results
- [ ] Confirm block height is returned
- [ ] Test timeout handling (commit mode can be slow)

### Phase 6: Cleanup
- [ ] Remove `BROADCAST_TX_COMMIT` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document commit broadcast behavior and timeout risks

## Notes
- Commit mode waits for transaction inclusion in a block
- Returns both CheckTx and DeliverTx results
- Can timeout if block time is long
- Most comprehensive broadcast response