# Broadcast Tx Sync Method Refactoring Checklist

## Method: `broadcastTxSync(params: BroadcastTxParams): Promise<BroadcastTxSyncResponse>`

### Phase 1: Infrastructure Setup
- [ ] Analyze current method in `cosmos-query-client.ts` (lines 181-185)
- [ ] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [ ] Check parameter type: `BroadcastTxParams` in `/types/requests/`
- [ ] Check response type: `BroadcastTxSyncResponse` in `/types/responses/`
- [ ] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [ ] Check if response type already exists in `/types/responses/common/broadcast-tx-sync/`
- [ ] If not, create: `/types/responses/common/tx/broadcast-tx-sync-response.ts`
- [ ] Define TypeScript interface for `BroadcastTxSyncResponse`
- [ ] Handle fields:
  - [ ] `code` number (0 for success)
  - [ ] `data` optional Uint8Array
  - [ ] `log` optional string
  - [ ] `hash` string (transaction hash)
- [ ] Create codec using `createCodec()` with proper converters:
  - [ ] Number conversion for code
  - [ ] Base64 to Uint8Array for data
  - [ ] String handling for log and hash
- [ ] Implement `createBroadcastTxSyncResponse()` function
- [ ] Add decoder method to `ResponseDecoder` interface: `decodeBroadcastTxSync<T extends BroadcastTxSyncResponse = BroadcastTxSyncResponse>(response: unknown): T`
- [ ] Use generics for flexibility in decoder method (see pattern in completed methods)
- [ ] Implement `decodeBroadcastTxSync()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [ ] Create request type file: `/types/requests/common/tx/broadcast-tx-params.ts`
- [ ] Define `BroadcastTxParams` interface with:
  - [ ] `tx` string (base64 encoded transaction)
- [ ] Create `EncodedBroadcastTxParams` interface (likely same)
- [ ] Create codec for encoding (minimal changes)
- [ ] Implement `encodeBroadcastTxParams()` function
- [ ] Add encoder method to `RequestEncoder` interface: `encodeBroadcastTxSync(params: BroadcastTxParams): EncodedBroadcastTxParams`
- [ ] Implement `encodeBroadcastTxSync()` in `BaseAdapter`

### Phase 4: Update Query Client
- [ ] Update `broadcastTxSync()` method to use:
  - [ ] `this.protocolAdapter.encodeBroadcastTxSync(params)` instead of `encodeParams`
  - [ ] `this.protocolAdapter.decodeBroadcastTxSync(result)` instead of `decodeResponse`
- [ ] Update imports to use index files

### Phase 5: Testing and Validation
- [ ] Run TypeScript compiler for type checking
- [ ] Test with valid transaction broadcast
- [ ] Test error handling for invalid transactions
- [ ] Verify transaction hash is returned

### Phase 6: Cleanup
- [ ] Remove `BROADCAST_TX_SYNC` case from `decodeResponse` switch statement
- [ ] Remove unused imports
- [ ] Add JSDoc comments
- [ ] Document sync broadcast behavior

## Notes
- Sync mode waits for CheckTx result
- Returns immediately after mempool acceptance
- Transaction hash is returned for tracking