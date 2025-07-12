# Broadcast Tx Async Method Refactoring Checklist

## Method: `broadcastTxAsync(params: BroadcastTxParams): Promise<BroadcastTxAsyncResponse>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 187-191)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `BroadcastTxParams` in `/types/requests/` (shared with sync)
- [x] Check response type: `BroadcastTxAsyncResponse` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Check if response type already exists in `/types/responses/common/broadcast-tx-async/`
- [x] If not, create: `/types/responses/common/tx/broadcast-tx-async-response.ts`
- [x] Define TypeScript interface for `BroadcastTxAsyncResponse`
- [x] Handle fields:
  - [x] `code` number (0 for success)
  - [x] `data` optional Uint8Array
  - [x] `log` optional string
  - [x] `hash` string (transaction hash)
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Number conversion for code
  - [x] Base64 to Uint8Array for data
  - [x] String handling for log and hash
- [x] Implement `createBroadcastTxAsyncResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeBroadcastTxAsync<T extends BroadcastTxAsyncResponse = BroadcastTxAsyncResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeBroadcastTxAsync()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Reuse `BroadcastTxParams` from broadcast-tx-sync refactoring
- [x] Add encoder method to `RequestEncoder` interface: `encodeBroadcastTxAsync(params: BroadcastTxParams): EncodedBroadcastTxParams`
- [x] Implement `encodeBroadcastTxAsync()` in `BaseAdapter` (can reuse logic)

### Phase 4: Update Query Client
- [x] Update `broadcastTxAsync()` method to use:
  - [x] `this.protocolAdapter.encodeBroadcastTxAsync(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeBroadcastTxAsync(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Test with valid transaction broadcast
- [x] Verify immediate return behavior
- [x] Confirm transaction hash is returned

### Phase 6: Cleanup
- [x] Remove `BROADCAST_TX_ASYNC` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document async broadcast behavior

## Notes
- Async mode returns immediately without waiting
- No CheckTx validation in response
- Transaction hash is returned for tracking
- Shares request type with sync broadcast