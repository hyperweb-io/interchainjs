# RPC Methods Refactoring Checklist

## Overview

This document tracks the refactoring status of all RPC methods in the Cosmos query client, categorizing them by complexity and completion status.

**Complexity Criteria:**
- **Simple**: ≤3 levels of nested objects in request/response
- **Complex**: >3 levels of nested objects in request/response

## Refactoring Status

### ✅ Already Refactored (11 methods)

1. **abciInfo** (Simple) ✅
   - Request: No parameters
   - Response: Simple flat structure
   - Files: `types/responses/common/abci.ts`

2. **abciQuery** (Simple-Medium) ✅
   - Request: Simple parameters (path, data, height, prove)
   - Response: Contains nested proof structure (2-3 levels)
   - Files: `types/requests/common/abci.ts`, `types/responses/common/abci.ts`

3. **getCommit** (Complex) ✅
   - Request: Simple (height parameter)
   - Response: Deep nesting (header > version, commit > signatures > 4+ levels)
   - Files: `types/requests/common/commit.ts`, `types/responses/common/commit.ts`

4. **health** (Simple) ✅
   - Response: `null` (simplest possible)
   - Files: `types/responses/common/health.ts`
   - Note: Special case - no codec needed

5. **status** (Simple-Medium) ✅
   - Response: `StatusResponse` with nodeInfo, syncInfo, validatorInfo (2-3 levels)
   - Files: `types/responses/common/status.ts`
   - Note: Fixed pubKey decoding to use base64ToBytes

6. **netInfo** (Simple-Medium) ✅
   - Response: `NetInfoResponse` with peer info
   - Files: `types/responses/common/net-info.ts`

7. **header** (Simple-Medium) ✅
   - Request: Optional height
   - Response: `HeaderResponse` with BlockHeader (2-3 levels)
   - Files: `types/responses/common/header.ts`

8. **consensusParams** (Simple-Medium) ✅
   - Request: Optional height
   - Response: `ConsensusParamsResponse` (2-3 levels)
   - Files: `types/responses/common/consensus-params.ts`

9. **validators** (Complex) ✅
   - Request: height, page, perPage
   - Response: `ValidatorsResponse` with validator array (3-4 levels)
   - Files: `types/responses/common/validators.ts`

## 📋 TODO: Methods to Refactor

### Simple Methods (≤3 levels of nesting)

#### Basic Info Methods

#### Other Simple Methods
- [ ] **numUnconfirmedTxs**
  - Request: No parameters
  - Response: `NumUnconfirmedTxsResponse` (count, total, totalBytes)
  - Complexity: Simple

#### Block Query Methods (Simple)
- [ ] **headerByHash**
  - Request: hash string
  - Response: `HeaderResponse` with BlockHeader (2-3 levels)
  - Complexity: Simple-Medium

#### Chain Query Methods
- [ ] **genesisChunked**
  - Request: chunk number
  - Response: `GenesisChunk` (simple structure)
  - Complexity: Simple

### Complex Methods (>3 levels of nesting)

#### Block Methods
- [ ] **block**
  - Request: Optional height
  - Response: `BlockResponse` > block > header > version (4+ levels)
  - Complexity: Complex

- [ ] **blockByHash**
  - Request: hash string
  - Response: `BlockResponse` > block > header > version (4+ levels)
  - Complexity: Complex

- [ ] **blockResults**
  - Request: Optional height
  - Response: `BlockResultsResponse` with events, txResults (3-4 levels)
  - Complexity: Complex

- [ ] **blockSearch**
  - Request: `BlockSearchParams` (query, page, perPage, orderBy)
  - Response: Array of `BlockResponse` (4+ levels each)
  - Complexity: Complex

- [ ] **blockchain**
  - Request: minHeight, maxHeight
  - Response: Array of `BlockMeta` > header > version (4+ levels)
  - Complexity: Complex

#### Transaction Methods (All Transaction Handling)
- [ ] **broadcastTxSync**
  - Request: `BroadcastTxParams` (tx string)
  - Response: `BroadcastTxSyncResponse` (hash + TxData)
  - Complexity: Complex (moved from simple - transaction handling)

- [ ] **broadcastTxAsync**
  - Request: `BroadcastTxParams` (tx string)
  - Response: `BroadcastTxAsyncResponse` (just hash)
  - Complexity: Complex (moved from simple - transaction handling)

- [ ] **broadcastTxCommit**
  - Request: `BroadcastTxParams`
  - Response: `BroadcastTxCommitResponse` with events (3-4 levels)
  - Complexity: Complex

- [ ] **checkTx**
  - Request: tx string
  - Response: `TxData` (flat structure)
  - Complexity: Complex (moved from simple - transaction handling)

- [ ] **tx**
  - Request: hash, prove
  - Response: `TxResponse` with proof structure (3-4 levels)
  - Complexity: Complex

- [ ] **txSearch**
  - Request: `TxSearchParams` (query, prove, page, perPage, orderBy)
  - Response: Array of `TxResponse` (4+ levels each)
  - Complexity: Complex

- [ ] **unconfirmedTxs**
  - Request: Optional limit
  - Response: `UnconfirmedTxsResponse` with tx array
  - Complexity: Complex

#### Chain State Methods
- [ ] **consensusState**
  - Response: `ConsensusState` with round states (4+ levels)
  - Complexity: Complex

- [ ] **dumpConsensusState**
  - Response: `ConsensusStateDump` (very complex, 5+ levels)
  - Complexity: Very Complex

- [ ] **genesis** ⚠️ SPECIAL TESTING CONSIDERATION
  - Response: `GenesisResponse` with validators, consensusParams (4+ levels)
  - Complexity: Complex
  - **Testing Note**: The genesis response is too large for most RPC endpoints. When testing against public endpoints, the RPC server returns:
    ```
    Internal error: genesis response is large, please use the genesis_chunked API instead
    ```
    For this method:
    - Only verify the logic against CosmJS implementation
    - Ensure it builds successfully
    - Skip runtime testing against public endpoints
    - Consider using `genesisChunked` for actual data retrieval
    - Full testing will be done later with appropriate test infrastructure

## Summary

- **Total Methods**: 26 (excluding subscribe/unsubscribe)
- **Refactored**: 11 (42%)
- **TODO Simple**: 3 (12%)
- **TODO Complex**: 12 (46%)

## Refactoring Priority

### Phase 1: Simple Methods (Quick Wins) ✅ COMPLETED
1. `health` - Simplest, returns null ✅
2. `status` - Important method, moderate nesting ✅
3. `netInfo` - Network information ✅
4. `abciInfo` - ABCI application info ✅
5. `abciQuery` - ABCI query with proof ✅

### Phase 2: Medium Complexity ✅ COMPLETED
1. `header` - Block header queries ✅
2. `consensusParams` - Chain parameters ✅
3. `validators` - Validator set queries ✅

### Phase 2.5: Remaining Simple Methods
1. `numUnconfirmedTxs` - Simple counts
2. `genesisChunked` - Genesis in chunks
3. `headerByHash` - Block header by hash

### Phase 3: Complex Methods (Block-related)
1. `block` / `blockByHash` - Core block queries
2. `blockResults` - Block execution results
3. `blockchain` - Block range queries
4. `consensusState` - Live consensus state
5. `dumpConsensusState` - Full consensus dump
6. `genesis` - Full genesis state (⚠️ See special testing note above)

### Phase 4: Transaction Methods (Do Later)
All transaction-related methods will be handled together:
1. `broadcastTxAsync` - Async broadcast
2. `broadcastTxSync` - Sync broadcast
3. `broadcastTxCommit` - Commit broadcast
4. `checkTx` - Check transaction
5. `tx` - Get transaction
6. `txSearch` - Search transactions
7. `unconfirmedTxs` - List unconfirmed transactions

**Note**: Transaction methods are grouped together in Phase 4 because they share common patterns and dependencies. Even simple transaction methods like `broadcastTxAsync` are deferred to handle all transaction-related functionality cohesively.

## Detailed Nesting Analysis

### Example of Nesting Levels

**Simple (1-2 levels):**
```typescript
// health response
null

// broadcastTxAsync response
{
  hash: Uint8Array
}
```

**Medium (2-3 levels):**
```typescript
// status response
{
  nodeInfo: {
    protocolVersion: { p2p: string, block: string, app: string },
    // ... more fields
  },
  syncInfo: {
    latestBlockHash: Uint8Array,
    latestBlockHeight: number,
    // ... more fields
  }
}
```

**Complex (4+ levels):**
```typescript
// block response
{
  blockId: {
    hash: Uint8Array,
    parts: {
      total: number,
      hash: Uint8Array
    }
  },
  block: {
    header: {
      version: {
        block: string,
        app?: string
      },
      // ... more fields
    },
    lastCommit: {
      signatures: [{
        blockIdFlag: number,
        validatorAddress: Uint8Array,
        timestamp: Date,
        signature: Uint8Array
      }]
    }
  }
}
```

## Notes

1. **Version Differences**: Many methods have subtle differences across Tendermint 0.34, 0.37, and CometBFT 0.38
2. **Optional Fields**: Most responses have optional fields that may not be present in older versions
3. **Encoding**: Mixed use of hex and base64 encoding for binary data
4. **Events**: Event structures differ between versions (beginBlock/endBlock vs finalizeBlock)
5. **Subscription Methods**: `subscribe`, `unsubscribe`, `unsubscribe_all` are not included as they require WebSocket handling
6. **Nested Codecs**: Complex methods will require multiple nested codec definitions
7. **Array Handling**: Methods returning arrays (blockSearch, txSearch) add another level of complexity