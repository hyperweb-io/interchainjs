# Broadcast Implementation Summary

This document summarizes the implementation of broadcast-related logic from cosmjs into the networks/cosmos structure.

## Overview

The broadcast functionality has been implemented following the pattern from cosmjs's tendermint/comet clients, adapting it to our modular adapter-based architecture. The implementation supports all three protocol versions: Tendermint 0.34, Tendermint 0.37, and CometBFT 0.38.

## Implementation Details

### 1. Response Types (Already Existed)
- `BroadcastTxAsyncResponse` - Simple response with just hash
- `BroadcastTxSyncResponse` - Extends TxData with hash
- `BroadcastTxCommitResponse` - Contains height, hash, checkTx and txResult/deliverTx

### 2. Interface Updates
- Added broadcast methods to `ResponseDecoder` interface
- Added broadcast methods to `ICosmosQueryClient` interface

### 3. Adapter Implementations

#### BaseAdapter
- Updated `decodeResponse` to route broadcast methods to specific decoders

#### Comet38Adapter
- Implemented all three broadcast decode methods:
  - `decodeBroadcastTxAsync` - Returns minimal response with hash only
  - `decodeBroadcastTxSync` - Returns full tx data with code, gas, events, etc.
  - `decodeBroadcastTxCommit` - Returns commit response with `tx_result`

#### Tendermint34Adapter & Tendermint37Adapter
- Implemented all three broadcast decode methods:
  - `decodeBroadcastTxAsync` - Returns sync response (same as sync in these versions)
  - `decodeBroadcastTxSync` - Returns full tx data
  - `decodeBroadcastTxCommit` - Returns commit response with `deliver_tx` (not `tx_result`)

### 4. Query Client Implementation
- Added three broadcast methods to `CosmosQueryClient`:
  - `broadcastTxAsync(tx: Uint8Array)`
  - `broadcastTxSync(tx: Uint8Array)`
  - `broadcastTxCommit(tx: Uint8Array)`
- Updated `encodeParams` to handle tx parameter as base64 for broadcast methods

### 5. Tests
- Created comprehensive unit tests:
  - `src/query/__tests__/broadcast.test.ts` - Tests query client broadcast methods
  - `src/adapters/__tests__/tendermint-broadcast.test.ts` - Tests Tendermint adapter decoders
- Created integration tests in `starship/__tests__/broadcast.test.ts`
- All tests passing (13 unit tests, 4 integration tests)

## Key Differences Between Protocol Versions

1. **Async Response**:
   - CometBFT 0.38: Returns minimal `BroadcastTxAsyncResponse` with just hash
   - Tendermint 0.34/0.37: Returns full `BroadcastTxSyncResponse` (same as sync)

2. **Commit Response Fields**:
   - CometBFT 0.38: Uses `tx_result` field
   - Tendermint 0.34/0.37: Uses `deliver_tx` field

## Key Differences from cosmjs

1. **Modular Architecture**: Instead of a monolithic client, we use adapters for different protocol versions
2. **Parameter Encoding**: We encode the tx parameter as base64 in the params object
3. **Response Handling**: We use the adapter pattern to decode responses based on protocol version
4. **Unified Interface**: All protocol versions expose the same interface despite internal differences

## Usage Example

```typescript
const client = new CosmosQueryClient(rpcEndpoint);

// Broadcast asynchronously (fire and forget)
const asyncResult = await client.broadcastTxAsync(txBytes);
console.log('Transaction hash:', asyncResult.hash);

// Broadcast synchronously (wait for CheckTx)
const syncResult = await client.broadcastTxSync(txBytes);
console.log('CheckTx result:', syncResult.code);

// Broadcast and wait for commit
const commitResult = await client.broadcastTxCommit(txBytes);
console.log('Transaction included in block:', commitResult.height);
```

## Testing

The implementation includes both unit tests and integration tests:

- **Unit Tests**: Test the decoding logic with mock responses for all adapters
- **Integration Tests**: Test against a real Starship node (when available)

The integration tests are designed to skip gracefully when the RPC endpoint is not available.

## Files Modified

1. **src/adapters/base.ts** - Added broadcast method routing
2. **src/adapters/comet38.ts** - Implemented broadcast decoders for CometBFT 0.38
3. **src/adapters/tendermint34.ts** - Implemented broadcast decoders for Tendermint 0.34
4. **src/adapters/tendermint37.ts** - Implemented broadcast decoders for Tendermint 0.37
5. **src/types/cosmos-client-interfaces.ts** - Added broadcast methods to interfaces
6. **src/query/cosmos-query-client.ts** - Implemented broadcast methods and parameter encoding

## Files Created

1. **src/query/__tests__/broadcast.test.ts** - Unit tests for query client
2. **src/adapters/__tests__/tendermint-broadcast.test.ts** - Unit tests for Tendermint adapters
3. **starship/__tests__/broadcast.test.ts** - Integration tests
4. **jest.src.config.js** - Jest configuration for TypeScript tests