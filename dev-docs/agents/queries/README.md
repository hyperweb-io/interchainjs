# RPC Method Refactoring Checklists

This directory contains individual refactoring checklists for each RPC method, including both completed methods (marked with ✅) and methods that need refactoring.

## Completed Methods ✅

These methods have been successfully refactored and their checklists serve as examples and documentation:

### Basic Info Methods (No Parameters)
- [abci-info-check-list.md](./abci-info-check-list.md) ✅ - `getAbciInfo()` - Simple example with BigInt fields
- [health-check-list.md](./health-check-list.md) ✅ - `getHealth()` - Simplest possible example
- [net-info-check-list.md](./net-info-check-list.md) ✅ - `getNetInfo()` - Complex nested structures
- [status-check-list.md](./status-check-list.md) ✅ - `getStatus()` - Comprehensive type handling
- [num-unconfirmed-txs-check-list.md](./num-unconfirmed-txs-check-list.md) ✅ - `getNumUnconfirmedTxs()` - Simple numeric fields

### Methods with Parameters
- [abci-query-check-list.md](./abci-query-check-list.md) ✅ - `queryAbci()` - Excellent parameter encoding example
- [commit-check-list.md](./commit-check-list.md) ✅ - `getCommit()` - Optional parameter with response extraction

### Block-Related Methods
- [block-check-list.md](./block-check-list.md) ✅ - `getBlock(height?: number)` - Shared response types with block-by-hash
- [block-by-hash-check-list.md](./block-by-hash-check-list.md) ✅ - `getBlockByHash(hash: string)` - Reuses block response types

## Methods Requiring Refactoring

### Block-Related Methods
- [block-results-check-list.md](./block-results-check-list.md) - `getBlockResults(height?: number)`
- [search-blocks-check-list.md](./search-blocks-check-list.md) - `searchBlocks(params: BlockSearchParams)`
- [blockchain-check-list.md](./blockchain-check-list.md) - `getBlockchain(minHeight?: number, maxHeight?: number)`
- [header-check-list.md](./header-check-list.md) - `getHeader(height?: number)`
- [header-by-hash-check-list.md](./header-by-hash-check-list.md) - `getHeaderByHash(hash: string)`

### Transaction Methods
- [tx-check-list.md](./tx-check-list.md) - `getTx(hash: string, prove?: boolean)`
- [search-txs-check-list.md](./search-txs-check-list.md) - `searchTxs(params: TxSearchParams)`
- [check-tx-check-list.md](./check-tx-check-list.md) - `checkTx(tx: string)`
- [unconfirmed-txs-check-list.md](./unconfirmed-txs-check-list.md) - `getUnconfirmedTxs(limit?: number)`

### Broadcast Methods
- [broadcast-tx-sync-check-list.md](./broadcast-tx-sync-check-list.md) - `broadcastTxSync(params: BroadcastTxParams)`
- [broadcast-tx-async-check-list.md](./broadcast-tx-async-check-list.md) - `broadcastTxAsync(params: BroadcastTxParams)`
- [broadcast-tx-commit-check-list.md](./broadcast-tx-commit-check-list.md) - `broadcastTxCommit(params: BroadcastTxParams)`

### Chain Query Methods
- [validators-check-list.md](./validators-check-list.md) - `getValidators(height?: number, page?: number, perPage?: number)`
- [consensus-params-check-list.md](./consensus-params-check-list.md) - `getConsensusParams(height?: number)`
- [consensus-state-check-list.md](./consensus-state-check-list.md) - `getConsensusState()`
- [dump-consensus-state-check-list.md](./dump-consensus-state-check-list.md) - `dumpConsensusState()`
- [genesis-check-list.md](./genesis-check-list.md) - `getGenesis()`
- [genesis-chunked-check-list.md](./genesis-chunked-check-list.md) - `getGenesisChunked(chunk: number)` (partially refactored)

## Refactoring Priority

Suggested order for refactoring:

1. **Simple Methods First**: Start with methods that have no parameters or simple parameters
2. **Shared Types**: Methods that share response types (e.g., `getBlock` and `getBlockByHash`)
3. **Complex Structures**: Methods with nested objects and arrays
4. **Broadcast Methods**: These share request types but have different responses

## Common Patterns

- Methods ending in "ByHash" typically share response types with their non-hash counterparts
- Broadcast methods share the same request type but have different response structures
- Methods without parameters only need response type refactoring
- Height parameters are typically converted to strings for RPC calls
- Binary data is converted between base64 strings and Uint8Array

## Learning Path

For developers new to the refactoring pattern, review the completed methods in this order:

1. **health-check-list.md** - Simplest possible example
2. **abci-info-check-list.md** - Simple with BigInt conversions
3. **num-unconfirmed-txs-check-list.md** - Snake case to camel case
4. **commit-check-list.md** - Optional parameters
5. **abci-query-check-list.md** - Complex parameter encoding
6. **status-check-list.md** - Comprehensive nested structures
7. **net-info-check-list.md** - Very complex nested arrays

## Notes

- Each checklist follows the same structure from the refactoring guide
- Completed method checklists include implementation details and examples
- Some methods may be partially refactored (check existing code first)
- Always test with real RPC responses after refactoring
- Update checklist status when methods are completed