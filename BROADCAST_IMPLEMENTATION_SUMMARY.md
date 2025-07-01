# Broadcast Implementation Summary

## Overview
Implemented broadcast-related logic from cosmjs into the networks/cosmos structure, including:
- `broadcastTxAsync` - Broadcasts a transaction asynchronously
- `broadcastTxSync` - Broadcasts a transaction synchronously  
- `broadcastTxCommit` - Broadcasts a transaction and waits for it to be committed

## Changes Made

### 1. Added Broadcast Response Types (Already Existed)
- `BroadcastTxAsyncResponse` - Response for async broadcast
- `BroadcastTxSyncResponse` - Response for sync broadcast
- `BroadcastTxCommitResponse` - Response for commit broadcast

### 2. Updated Comet38 Adapter (`networks/cosmos/src/adapters/comet38.ts`)
Added specific decode methods for each broadcast type:
- `decodeBroadcastTxAsync()` - Decodes async response (just hash)
- `decodeBroadcastTxSync()` - Decodes sync response (includes code, log, gas info, events)
- `decodeBroadcastTxCommit()` - Decodes commit response (includes height, checkTx, deliverTx/txResult)

### 3. Updated Base Adapter (`networks/cosmos/src/adapters/base.ts`)
- Added optional broadcast decode methods to `ResponseDecoder` interface
- Updated `decodeResponse()` to route to specific broadcast decoders
- Added special handling in `encodeParams()` to encode tx as base64 for broadcast methods

### 4. Updated Cosmos Client Interface (`networks/cosmos/src/types/cosmos-client-interfaces.ts`)
Added broadcast methods to `ICosmosQueryClient`:
- `broadcastTxSync(params: BroadcastTxParams): Promise<BroadcastTxSyncResponse>`
- `broadcastTxAsync(params: BroadcastTxParams): Promise<BroadcastTxAsyncResponse>`
- `broadcastTxCommit(params: BroadcastTxParams): Promise<BroadcastTxCommitResponse>`

### 5. Implemented Broadcast Methods in CosmosQueryClient (`networks/cosmos/src/query/cosmos-query-client.ts`)
Added the three broadcast methods that:
- Encode parameters using the adapter
- Call the RPC client with the appropriate method
- Decode the response using the adapter

### 6. Added Tests
- Unit tests in `networks/cosmos/src/query/__tests__/broadcast.test.ts`
- Integration tests in `networks/cosmos/starship/__tests__/broadcast.test.ts`
- Created `jest.src.config.js` for running src tests

## Key Implementation Details

1. **Transaction Encoding**: Transactions are encoded as base64 strings when sent to the RPC endpoint
2. **Response Decoding**: Each broadcast method returns different data:
   - Async: Only returns the transaction hash
   - Sync: Returns code, log, gas info, and events from CheckTx
   - Commit: Returns the block height and results from both CheckTx and DeliverTx/TxResult
3. **Version Compatibility**: The implementation handles both Tendermint (deliverTx) and CometBFT (txResult) response formats

## Testing
All tests pass successfully:
- Unit tests verify correct encoding/decoding and method calls
- Integration tests would verify actual RPC communication (skipped when no chain is running)

The implementation follows the existing patterns in the codebase and maintains compatibility with the current architecture.