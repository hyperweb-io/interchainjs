# Broadcast Tx Commit Method Refactoring Checklist

## Method: `broadcastTxCommit(params: BroadcastTxParams): Promise<BroadcastTxCommitResponse>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 193-197)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `BroadcastTxParams` in `/types/requests/` (shared with sync/async)
- [x] Check response type: `BroadcastTxCommitResponse` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Check if response type already exists in `/types/responses/common/broadcast-tx-commit/`
- [x] If not, create: `/types/responses/common/tx/broadcast-tx-commit-response.ts`
- [x] Define TypeScript interface for `BroadcastTxCommitResponse`
- [x] Handle complex structure:
  - [x] `checkTx` result object (CheckTxResult)
  - [x] `deliverTx` result object (DeliverTxResult) - optional for legacy
  - [x] `txResult` result object (TxResult) - for CometBFT 0.38
  - [x] `hash` Uint8Array (transaction hash)
  - [x] `height` bigint (block height)
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Nested object handling for checkTx/deliverTx/txResult
  - [x] Number conversions for codes
  - [x] BigInt conversions for gas fields
  - [x] Base64 conversions for data fields
  - [x] Height conversion to bigint
  - [x] Hex to bytes for hash
- [x] Implement `createBroadcastTxCommitResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeBroadcastTxCommit<T extends BroadcastTxCommitResponse = BroadcastTxCommitResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeBroadcastTxCommit()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Reuse `BroadcastTxParams` from broadcast-tx-sync refactoring
- [x] Add encoder method to `RequestEncoder` interface: `encodeBroadcastTxCommit(params: BroadcastTxParams): EncodedBroadcastTxParams`
- [x] Implement `encodeBroadcastTxCommit()` in `BaseAdapter` (can reuse logic)

### Phase 4: Update Query Client
- [x] Update `broadcastTxCommit()` method to use:
  - [x] `this.protocolAdapter.encodeBroadcastTxCommit(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeBroadcastTxCommit(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Test with valid transaction broadcast
- [x] Verify both checkTx and deliverTx/txResult results
- [x] Confirm block height is returned
- [x] Test timeout handling (commit mode can be slow)

### Phase 6: Cleanup
- [x] Remove `BROADCAST_TX_COMMIT` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document commit broadcast behavior and timeout risks

## Notes
- Commit mode waits for transaction inclusion in a block
- Returns both CheckTx and DeliverTx results
- Can timeout if block time is long
- Most comprehensive broadcast response