# Broadcast Tx Sync Method Refactoring Checklist

## Method: `broadcastTxSync(params: BroadcastTxParams): Promise<BroadcastTxSyncResponse>`

### Phase 1: Infrastructure Setup
- [x] Analyze current method in `cosmos-query-client.ts` (lines 181-185)
- [x] Confirm it uses `encodeParams` and `decodeResponse` (needs refactoring)
- [x] Check parameter type: `BroadcastTxParams` in `/types/requests/`
- [x] Check response type: `BroadcastTxSyncResponse` in `/types/responses/`
- [x] Review version-specific differences in adapters

### Phase 2: Response Type Refactoring
- [x] Check if response type already exists in `/types/responses/common/broadcast-tx-sync/`
- [x] If not, create: `/types/responses/common/tx/broadcast-tx-sync-response.ts`
- [x] Define TypeScript interface for `BroadcastTxSyncResponse`
- [x] Handle fields:
  - [x] `code` number (0 for success)
  - [x] `data` optional Uint8Array
  - [x] `log` optional string
  - [x] `hash` string (transaction hash)
  - [x] `gasWanted` optional bigint (added based on test requirements)
  - [x] `gasUsed` optional bigint (added based on test requirements)
- [x] Create codec using `createCodec()` with proper converters:
  - [x] Number conversion for code
  - [x] Base64 to Uint8Array for data
  - [x] String handling for log and hash
  - [x] BigInt conversion for gas fields
- [x] Implement `createBroadcastTxSyncResponse()` function
- [x] Add decoder method to `ResponseDecoder` interface: `decodeBroadcastTxSync<T extends BroadcastTxSyncResponse = BroadcastTxSyncResponse>(response: unknown): T`
- [x] Use generics for flexibility in decoder method (see pattern in completed methods)
- [x] Implement `decodeBroadcastTxSync()` in `BaseAdapter`

### Phase 3: Request Type Refactoring
- [x] Create request type file: `/types/requests/common/tx/broadcast-tx-params.ts`
- [x] Define `BroadcastTxParams` interface with:
  - [x] `tx` Uint8Array (transaction bytes)
- [x] Create `EncodedBroadcastTxParams` interface (base64 encoded)
- [x] Create codec for encoding (minimal changes)
- [x] Implement `encodeBroadcastTxParams()` function
- [x] Add encoder method to `RequestEncoder` interface: `encodeBroadcastTxSync(params: BroadcastTxParams): EncodedBroadcastTxParams`
- [x] Implement `encodeBroadcastTxSync()` in `BaseAdapter`

### Phase 4: Update Query Client
- [x] Update `broadcastTxSync()` method to use:
  - [x] `this.protocolAdapter.encodeBroadcastTxSync(params)` instead of `encodeParams`
  - [x] `this.protocolAdapter.decodeBroadcastTxSync(result)` instead of `decodeResponse`
- [x] Update imports to use index files

### Phase 5: Testing and Validation
- [x] Run TypeScript compiler for type checking
- [x] Test with valid transaction broadcast
- [x] Test error handling for invalid transactions
- [x] Verify transaction hash is returned

### Phase 6: Cleanup
- [x] Remove `BROADCAST_TX_SYNC` case from `decodeResponse` switch statement
- [x] Remove unused imports
- [x] Add JSDoc comments
- [x] Document sync broadcast behavior

## Notes
- Sync mode waits for CheckTx result
- Returns immediately after mempool acceptance
- Transaction hash is returned for tracking