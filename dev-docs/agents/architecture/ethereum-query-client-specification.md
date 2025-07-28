# Ethereum Query Client Implementation Specification

## Overview

This document provides the comprehensive specification for implementing an Ethereum query client that follows the same architectural patterns as the existing Cosmos implementation. It also includes recommendations for folder naming conventions and code organization.

## 1. Folder Naming Convention Recommendation

### Current Structure
- **Current:** `networks/cosmos/src/rpc`
- **Proposed:** `protocol_clients`
- **Recommended:** `clients`

### Rationale for `clients`
- **Concise and clear** - shorter than `protocol_clients` but more descriptive than `rpc`
- **Consistent naming** - directly matches class names (`HttpRpcClient`, `WebSocketRpcClient`)
- **Industry standard** - commonly used in similar contexts
- **Protocol-agnostic** - suitable for any communication protocol

### Recommended Migration
Move HTTP and WebSocket clients to shared location:
```
packages/utils/src/clients/
├── http-client.ts          # Reusable HttpRpcClient
├── websocket-client.ts     # Reusable WebSocketRpcClient  
└── index.ts               # Exports
```

**Benefits:**
- ✅ Eliminates code duplication between networks
- ✅ Provides consistent behavior across all blockchain integrations
- ✅ Centralizes client maintenance and improvements
- ✅ Enables reuse for future blockchain network integrations

## 2. HTTP Client Reusability Analysis

### Compatibility Confirmation
The existing `HttpRpcClient` is **100% reusable** between Cosmos and Ethereum because:

1. **Protocol Compatibility**: Both use JSON-RPC 2.0 over HTTP
2. **Generic Implementation**: No network-specific dependencies
3. **Standard Interface**: Implements generic `IRpcClient` interface
4. **Flexible Parameters**: Accepts any method name and parameter format

### JSON-RPC 2.0 Standard Compliance
Both networks follow the same request/response format:
```typescript
// Request format (both networks)
{
  "jsonrpc": "2.0",
  "id": "random-id",
  "method": "network_specific_method",
  "params": [...] // Network-specific parameters
}

// Response format (both networks)  
{
  "jsonrpc": "2.0",
  "id": "random-id",
  "result": {...}, // Network-specific result
  "error": {...}   // Standard error format
}
```

## 3. Ethereum Query Client Architecture

### Core Architecture Pattern
Following the Cosmos dependency injection pattern:
```typescript
export class EthereumQueryClient implements IEthereumQueryClient {
  constructor(
    private rpcClient: IRpcClient,
    private protocolAdapter: IEthereumProtocolAdapter
  ) {}
}
```

### Interface Definition
```typescript
export interface IEthereumQueryClient extends IQueryClient {
  // Basic Info Methods
  getChainId(): Promise<number>;
  getNetworkVersion(): Promise<string>;
  getProtocolVersion(): Promise<string>;
  isSyncing(): Promise<boolean | SyncStatus>;
  
  // Block Methods
  getBlock(blockNumber?: number | string): Promise<EthereumBlock>;
  getBlockByHash(hash: string): Promise<EthereumBlock>;
  getBlockByNumber(blockNumber: number | string): Promise<EthereumBlock>;
  getLatestBlock(): Promise<EthereumBlock>;
  getBlockTransactionCount(blockNumber?: number | string): Promise<number>;
  
  // Transaction Methods
  getTransaction(hash: string): Promise<EthereumTransaction>;
  getTransactionReceipt(hash: string): Promise<TransactionReceipt>;
  getTransactionCount(address: string, blockTag?: string): Promise<number>;
  sendRawTransaction(signedTx: string): Promise<string>;
  estimateGas(txParams: TransactionParams): Promise<bigint>;
  
  // Account/Balance Methods
  getBalance(address: string, blockTag?: string): Promise<bigint>;
  getCode(address: string, blockTag?: string): Promise<string>;
  getStorageAt(address: string, position: string, blockTag?: string): Promise<string>;
  
  // Gas/Fee Methods
  getGasPrice(): Promise<bigint>;
  getMaxPriorityFeePerGas(): Promise<bigint>;
  getFeeHistory(blockCount: number, newestBlock: string): Promise<FeeHistory>;
  
  // Filter/Log Methods
  getLogs(filter: LogFilter): Promise<Log[]>;
  newFilter(filter: LogFilter): Promise<string>;
  getFilterLogs(filterId: string): Promise<Log[]>;
}
```

### Protocol Adapter Interface
```typescript
export interface IEthereumProtocolAdapter {
  // Encoding methods (params -> RPC format)
  encodeBlockParams(params: BlockParams): unknown;
  encodeTransactionParams(params: TransactionParams): unknown;
  encodeBalanceParams(params: BalanceParams): unknown;
  encodeLogFilter(filter: LogFilter): unknown;
  
  // Decoding methods (RPC response -> typed response)
  decodeBlock(response: unknown): EthereumBlock;
  decodeTransaction(response: unknown): EthereumTransaction;
  decodeTransactionReceipt(response: unknown): TransactionReceipt;
  decodeBalance(response: unknown): string;
  decodeLogs(response: unknown): Log[];
  
  // Protocol info
  getVersion(): string;
  getSupportedMethods(): string[];
  getCapabilities(): string[];
}
```

## 4. Folder Structure Specification

### Complete Ethereum Directory Structure
```
networks/ethereum/src/
├── adapters/                              # Protocol adapters
│   ├── README.md                         # Documentation
│   ├── base.ts                           # IEthereumProtocolAdapter interface
│   ├── ethereum-adapter.ts               # Main Ethereum JSON-RPC adapter
│   └── index.ts                          # Exports
├── auth/                                 # ✅ Already exists
│   ├── config.ts
│   ├── index.ts
│   └── strategy.ts
├── event/                                # Event client for WebSocket subscriptions
│   ├── ethereum-event-client.ts          # WebSocket event subscriptions
│   └── index.ts
├── query/                                # Query client implementation
│   ├── __tests__/                        # Unit tests
│   ├── ethereum-query-client.ts          # Main query client implementation
│   └── index.ts
├── signers/                              # ✅ Already exists (refactor needed)
│   ├── README.md                         # Documentation
│   ├── SignerFromPrivateKey.ts           # Refactored (remove HTTP calls)
│   ├── base-signer.ts                    # Base signer interface
│   ├── types.ts                          # Signer-related types
│   └── index.ts
├── types/                                # Type definitions
│   ├── codec/                            # Encoding/decoding utilities
│   │   ├── converters.ts                 # Type converters
│   │   └── index.ts
│   ├── requests/                         # Request parameter types
│   │   ├── block-params.ts
│   │   ├── transaction-params.ts
│   │   ├── balance-params.ts
│   │   ├── log-filter-params.ts
│   │   └── index.ts
│   ├── responses/                        # Response types
│   │   ├── block.ts                      # EthereumBlock
│   │   ├── transaction.ts                # EthereumTransaction
│   │   ├── receipt.ts                    # TransactionReceipt
│   │   ├── log.ts                        # Log entries
│   │   ├── fee-history.ts                # Fee history
│   │   └── index.ts
│   ├── ethereum-client-interfaces.ts     # Main interfaces
│   ├── protocol.ts                       # RPC methods, protocol info
│   ├── signing-client.ts                 # Signing client interfaces
│   └── index.ts
├── wallets/                              # Wallet implementations (future)
│   ├── __tests__/
│   ├── secp256k1.ts                      # Ethereum wallet implementation
│   ├── types.ts
│   └── index.ts
├── workflows/                            # Transaction workflows (future)
│   ├── plugins/
│   ├── ethereum-workflow-builder.ts
│   ├── context.ts
│   └── index.ts
├── client-factory.ts                    # Factory for creating clients
├── utils.ts                             # Utility functions
└── index.ts                             # Main exports
```

### Key Architectural Decisions
1. **No `rpc/` folder** - HTTP/WebSocket clients moved to `packages/utils/src/clients/`
2. **Exact Cosmos structure match** - Ensures consistency and familiarity
3. **Clean separation** - Query operations separate from signing operations
4. **Extensible design** - Ready for future features (wallets, workflows)

## 5. Implementation Patterns

### Method Implementation Pattern
Following the Cosmos three-step pattern:
```typescript
async getBalance(address: string, blockTag: string = 'latest'): Promise<bigint> {
  try {
    // 1. Prepare parameters using protocol adapter
    const params = { address, blockTag };
    const encodedParams = this.protocolAdapter.encodeBalanceParams(params);
    
    // 2. Make RPC call through RPC client
    const result = await this.rpcClient.call(EthereumRpcMethod.ETH_GET_BALANCE, encodedParams);
    
    // 3. Decode response using protocol adapter
    const response = this.protocolAdapter.decodeBalance(result);
    return BigInt(response);
  } catch (error) {
    // 4. Handle errors appropriately
    if (error instanceof NetworkError || error instanceof TimeoutError) {
      throw error;
    }
    throw new NetworkError(`Failed to get balance for ${address}: ${error.message}`, error);
  }
}
```

### Error Handling Strategy
Use existing error types from `@interchainjs/types`:
- **`NetworkError`** - HTTP/network failures
- **`TimeoutError`** - Request timeouts  
- **`ParseError`** - JSON parsing issues
- **`InvalidResponseError`** - Invalid RPC responses

### RPC Method Constants
```typescript
export enum EthereumRpcMethod {
  ETH_CHAIN_ID = 'eth_chainId',
  ETH_GET_BALANCE = 'eth_getBalance',
  ETH_GET_BLOCK_BY_NUMBER = 'eth_getBlockByNumber',
  ETH_GET_BLOCK_BY_HASH = 'eth_getBlockByHash',
  ETH_GET_TRANSACTION_BY_HASH = 'eth_getTransactionByHash',
  ETH_GET_TRANSACTION_RECEIPT = 'eth_getTransactionReceipt',
  ETH_GET_TRANSACTION_COUNT = 'eth_getTransactionCount',
  ETH_SEND_RAW_TRANSACTION = 'eth_sendRawTransaction',
  ETH_ESTIMATE_GAS = 'eth_estimateGas',
  ETH_GAS_PRICE = 'eth_gasPrice',
  ETH_MAX_PRIORITY_FEE_PER_GAS = 'eth_maxPriorityFeePerGas',
  ETH_FEE_HISTORY = 'eth_feeHistory',
  ETH_GET_LOGS = 'eth_getLogs',
  ETH_GET_CODE = 'eth_getCode',
  ETH_GET_STORAGE_AT = 'eth_getStorageAt',
  NET_VERSION = 'net_version',
  ETH_PROTOCOL_VERSION = 'eth_protocolVersion',
  ETH_SYNCING = 'eth_syncing'
}
```

## 6. Migration from SignerFromPrivateKey

### HTTP Methods to Extract
The following methods should be extracted from `SignerFromPrivateKey` and moved to the query client:

1. **`eth_getTransactionReceipt`** → `getTransactionReceipt()`
2. **`eth_getTransactionCount`** → `getTransactionCount()`  
3. **`eth_chainId`** → `getChainId()`
4. **`eth_gasPrice`** → `getGasPrice()`
5. **`eth_getBalance`** → `getBalance()`
6. **`eth_sendRawTransaction`** → `sendRawTransaction()`
7. **`eth_estimateGas`** → `estimateGas()`
8. **`eth_maxPriorityFeePerGas`** → `getMaxPriorityFeePerGas()`
9. **`eth_feeHistory`** → `getFeeHistory()`

### Refactored Signer Pattern
```typescript
export class SignerFromPrivateKey {
  constructor(
    private privateKey: string,
    private queryClient: IEthereumQueryClient  // Inject query client
  ) {}

  // Use query client instead of direct HTTP calls
  async getNonce(): Promise<number> {
    const address = this.getAddress();
    return await this.queryClient.getTransactionCount(address, 'latest');
  }

  async getBalance(): Promise<bigint> {
    const address = this.getAddress();
    return await this.queryClient.getBalance(address, 'latest');
  }

  // Keep only signing-related methods
  private signWithRecovery(msgHash: Uint8Array) { /* ... */ }
  async signTransaction(tx: TransactionParams) { /* ... */ }
}
```

## 7. Testing Strategy

### Test Structure
Following the Cosmos testing pattern:
```
query/__tests__/
├── ethereum-query-client.test.ts    # Functional tests against real RPC
├── unit/                            # Unit tests for individual methods
└── integration/                     # Integration tests with different networks
```

### Testing Approach
- **Functional tests** against real Ethereum RPC endpoints (Infura, Alchemy)
- **Unit tests** for individual methods with mocked responses
- **Error condition testing** for network failures and invalid responses
- **Integration tests** with mainnet and testnet networks
- **Performance tests** for high-volume scenarios

## 8. Client Factory Implementation

### Factory Pattern
```typescript
export class EthereumClientFactory {
  static async createQueryClient(
    endpoint: string | HttpEndpoint,
    options: ClientOptions = {}
  ): Promise<IEthereumQueryClient> {
    const protocolAdapter = new EthereumAdapter();
    const rpcClient = new HttpRpcClient(endpoint, {
      timeout: options.timeout,
      headers: options.headers
    });
    
    return new EthereumQueryClient(rpcClient, protocolAdapter);
  }

  static async createEventClient(
    endpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): Promise<IEthereumEventClient> {
    const protocolAdapter = new EthereumAdapter();
    const rpcClient = new WebSocketRpcClient(endpoint, {
      reconnect: options.reconnect
    });
    
    return new EthereumEventClient(rpcClient, protocolAdapter);
  }

  static async createClients(
    httpEndpoint: string | HttpEndpoint,
    wsEndpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): Promise<{ queryClient: IEthereumQueryClient; eventClient: IEthereumEventClient }> {
    const protocolAdapter = new EthereumAdapter();
    
    const httpRpcClient = new HttpRpcClient(httpEndpoint, {
      timeout: options.timeout,
      headers: options.headers
    });
    
    const wsRpcClient = new WebSocketRpcClient(wsEndpoint, {
      reconnect: options.reconnect
    });
    
    return {
      queryClient: new EthereumQueryClient(httpRpcClient, protocolAdapter),
      eventClient: new EthereumEventClient(wsRpcClient, protocolAdapter)
    };
  }
}
```

## 9. Type Definitions

### Request Types
```typescript
interface TransactionParams {
  from?: string;
  to?: string;
  gas?: string;
  gasPrice?: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  value?: string;
  data?: string;
  nonce?: string;
}

interface LogFilter {
  fromBlock?: string | number;
  toBlock?: string | number;
  address?: string | string[];
  topics?: (string | string[] | null)[];
}

interface BlockParams {
  blockNumber?: number | string;
  includeTransactions?: boolean;
}

interface BalanceParams {
  address: string;
  blockTag?: string;
}
```

### Response Types
```typescript
interface EthereumBlock {
  number: string;
  hash: string;
  parentHash: string;
  timestamp: string;
  gasLimit: string;
  gasUsed: string;
  transactions: string[] | EthereumTransaction[];
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  size: string;
  nonce: string;
  mixHash: string;
  receiptsRoot: string;
  stateRoot: string;
  transactionsRoot: string;
}

interface EthereumTransaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  maxFeePerGas?: string;
  maxPriorityFeePerGas?: string;
  nonce: string;
  blockNumber: string;
  blockHash: string;
  transactionIndex: string;
  input: string;
  type?: string;
  chainId?: string;
  v?: string;
  r?: string;
  s?: string;
}

interface TransactionReceipt {
  transactionHash: string;
  blockNumber: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  status: string;
  logs: Log[];
  logsBloom: string;
  type?: string;
  effectiveGasPrice?: string;
}

interface Log {
  address: string;
  topics: string[];
  data: string;
  blockNumber: string;
  blockHash: string;
  transactionHash: string;
  transactionIndex: string;
  logIndex: string;
  removed: boolean;
}

interface FeeHistory {
  baseFeePerGas: string[];
  gasUsedRatio: number[];
  oldestBlock: string;
  reward?: string[][];
}

interface SyncStatus {
  startingBlock: string;
  currentBlock: string;
  highestBlock: string;
}
```

## 10. Benefits and Outcomes

### Architectural Benefits
- ✅ **Consistency** - Exact same patterns as Cosmos implementation
- ✅ **Reusability** - Shared HTTP/WebSocket clients across networks
- ✅ **Maintainability** - Centralized client logic and error handling
- ✅ **Extensibility** - Ready for additional blockchain networks
- ✅ **Type Safety** - Full TypeScript support with proper interfaces
- ✅ **Testing** - Comprehensive test coverage following proven patterns

### Developer Experience
- ✅ **Familiar API** - Developers already using Cosmos can easily adopt Ethereum
- ✅ **Consistent Error Handling** - Same error types and patterns across networks
- ✅ **Factory Pattern** - Simple client creation with sensible defaults
- ✅ **Dependency Injection** - Testable and mockable components
- ✅ **Documentation** - Clear interfaces and comprehensive examples

This specification provides a complete foundation for implementing an Ethereum query client that maintains architectural consistency with the existing Cosmos implementation while leveraging shared infrastructure for maximum code reuse and maintainability.
