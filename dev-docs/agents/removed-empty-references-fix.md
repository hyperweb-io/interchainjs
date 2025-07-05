# Removed Empty References Fix

## Problem
The project had build errors due to missing type definition files that were being imported but didn't exist in the codebase.

## Solution
Instead of creating the missing files, we removed the references to them and replaced the types with `any` as requested.

## Changes Made

### 1. Modified `/workspace/interchainjs/networks/cosmos/src/adapters/base.ts`
- Removed imports for non-existent request/response type files
- Added type aliases using `any` for all removed types
- Added dummy encoder functions that simply return the input parameters

### 2. Modified adapter files:
- `/workspace/interchainjs/networks/cosmos/src/adapters/comet38.ts`
- `/workspace/interchainjs/networks/cosmos/src/adapters/tendermint34.ts`
- `/workspace/interchainjs/networks/cosmos/src/adapters/tendermint37.ts`

For each adapter:
- Removed imports for missing response types
- Added type aliases using `any`
- Added dummy creator functions that return the input data

### 3. Modified response type files:
- `/workspace/interchainjs/networks/cosmos/src/types/responses/common/block-search.ts`
  - Removed import for missing `BlockMeta` and `BlockMetaCodec` from './blockchain'
  - Added dummy type and codec implementation

- `/workspace/interchainjs/networks/cosmos/src/types/responses/common/tx.ts`
  - Removed import for missing `Event` and `EventCodec` from './event'
  - Added dummy type and codec implementation

## Removed File References
The following files were referenced but didn't exist:
- Request files: block-by-hash, block-results, blockchain, consensus-state, dump-consensus-state, genesis, header, header-by-hash, unconfirmed-txs, validators, tx, tx-search, block-search, broadcast-tx-sync, broadcast-tx-async, broadcast-tx-commit, check-tx
- Response files: block-results, blockchain, consensus-state, dump-consensus-state, genesis, unconfirmed-txs, event

## Result
The project now builds successfully without errors. All missing type references have been replaced with `any` types and dummy implementations that maintain the expected interface while not providing actual functionality.