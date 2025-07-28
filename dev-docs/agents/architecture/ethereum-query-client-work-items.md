# Ethereum Query Client Implementation Work Items

## Overview

This document outlines the specific work items for implementing the Ethereum query client, focusing on three main areas:
1. Rename and migrate the RPC clients to shared utilities
2. Create types and folder structure for Ethereum query client
3. Create comprehensive RPC tests for Ethereum query client

---

## Work Item 1: Rename and Migrate RPC Clients

### 1.1 Create Shared Clients Package

**Target Location:** `packages/utils/src/clients/`

#### Tasks:
- [ ] Create `packages/utils/src/clients/` directory
- [ ] Move `networks/cosmos/src/rpc/http-client.ts` → `packages/utils/src/clients/http-client.ts`
- [ ] Move `networks/cosmos/src/rpc/websocket-client.ts` → `packages/utils/src/clients/websocket-client.ts`
- [ ] Create `packages/utils/src/clients/index.ts` with exports

#### Files to Create:
```
packages/utils/src/clients/
├── http-client.ts          # Moved from cosmos/src/rpc/
├── websocket-client.ts     # Moved from cosmos/src/rpc/
└── index.ts               # Export both clients
```

#### Export Structure:
```typescript
// packages/utils/src/clients/index.ts
export { HttpRpcClient, HttpEndpoint } from './http-client';
export { WebSocketRpcClient, WebSocketEndpoint, ReconnectOptions } from './websocket-client';
```

### 1.2 Update Cosmos Imports

#### Files to Update:
- [ ] `networks/cosmos/src/client-factory.ts`
- [ ] `networks/cosmos/src/index.ts` (if it exports RPC clients)
- [ ] `networks/cosmos/starship/__tests__/broadcast.test.ts`
- [ ] Any other files importing from `./rpc/`

#### Import Changes:
```typescript
// Before:
import { HttpRpcClient, WebSocketRpcClient } from './rpc/index';

// After:
import { HttpRpcClient, WebSocketRpcClient } from '@interchainjs/utils/clients';
```

### 1.3 Remove Old RPC Directory

#### Tasks:
- [ ] Delete `networks/cosmos/src/rpc/` directory after confirming all imports are updated
- [ ] Update any documentation references to the old path

### 1.4 Update Package Dependencies

#### Tasks:
- [ ] Add `@interchainjs/utils` dependency to `networks/cosmos/package.json`
- [ ] Add `@interchainjs/utils` dependency to `networks/ethereum/package.json`
- [ ] Update `packages/utils/package.json` to export the clients module

---

## Work Item 2: Create Ethereum Types and Folder Structure

### 2.1 Create Base Directory Structure

#### Directories to Create:
```
networks/ethereum/src/
├── adapters/
├── query/
│   └── __tests__/
├── types/
│   ├── codec/
│   ├── requests/
│   └── responses/
└── event/ (optional for future)
```

### 2.2 Create Type Definitions

#### 2.2.1 Protocol and RPC Methods
**File:** `networks/ethereum/src/types/protocol.ts`

```typescript
export enum EthereumRpcMethod {
  // Basic Info
  ETH_CHAIN_ID = 'eth_chainId',
  NET_VERSION = 'net_version',
  ETH_PROTOCOL_VERSION = 'eth_protocolVersion',
  ETH_SYNCING = 'eth_syncing',
  
  // Block Methods
  ETH_GET_BLOCK_BY_NUMBER = 'eth_getBlockByNumber',
  ETH_GET_BLOCK_BY_HASH = 'eth_getBlockByHash',
  ETH_BLOCK_NUMBER = 'eth_blockNumber',
  ETH_GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER = 'eth_getBlockTransactionCountByNumber',
  ETH_GET_BLOCK_TRANSACTION_COUNT_BY_HASH = 'eth_getBlockTransactionCountByHash',
  
  // Transaction Methods
  ETH_GET_TRANSACTION_BY_HASH = 'eth_getTransactionByHash',
  ETH_GET_TRANSACTION_RECEIPT = 'eth_getTransactionReceipt',
  ETH_GET_TRANSACTION_COUNT = 'eth_getTransactionCount',
  ETH_SEND_RAW_TRANSACTION = 'eth_sendRawTransaction',
  ETH_ESTIMATE_GAS = 'eth_estimateGas',
  
  // Account/Balance Methods
  ETH_GET_BALANCE = 'eth_getBalance',
  ETH_GET_CODE = 'eth_getCode',
  ETH_GET_STORAGE_AT = 'eth_getStorageAt',
  
  // Gas/Fee Methods
  ETH_GAS_PRICE = 'eth_gasPrice',
  ETH_MAX_PRIORITY_FEE_PER_GAS = 'eth_maxPriorityFeePerGas',
  ETH_FEE_HISTORY = 'eth_feeHistory',
  
  // Filter/Log Methods
  ETH_GET_LOGS = 'eth_getLogs',
  ETH_NEW_FILTER = 'eth_newFilter',
  ETH_GET_FILTER_LOGS = 'eth_getFilterLogs',
  ETH_UNINSTALL_FILTER = 'eth_uninstallFilter'
}

export interface ProtocolInfo {
  version: string;
  supportedMethods: string[];
  capabilities: string[];
}
```

#### 2.2.2 Request Parameter Types
**Directory:** `networks/ethereum/src/types/requests/`

**Files to Create:**
- [ ] `block-params.ts`
- [ ] `transaction-params.ts`
- [ ] `balance-params.ts`
- [ ] `log-filter-params.ts`
- [ ] `index.ts`

**Example - `block-params.ts`:**
```typescript
export interface BlockParams {
  blockNumber?: number | string;
  includeTransactions?: boolean;
}

export interface BlockByHashParams {
  blockHash: string;
  includeTransactions?: boolean;
}

export interface BlockNumberParams {
  // No parameters for latest block number
}
```

#### 2.2.3 Response Types
**Directory:** `networks/ethereum/src/types/responses/`

**Files to Create:**
- [ ] `block.ts`
- [ ] `transaction.ts`
- [ ] `receipt.ts`
- [ ] `log.ts`
- [ ] `fee-history.ts`
- [ ] `sync-status.ts`
- [ ] `index.ts`

**Example - `block.ts`:**
```typescript
export interface EthereumBlock {
  number: string;
  hash: string;
  parentHash: string;
  nonce: string;
  sha3Uncles: string;
  logsBloom: string;
  transactionsRoot: string;
  stateRoot: string;
  receiptsRoot: string;
  miner: string;
  difficulty: string;
  totalDifficulty: string;
  extraData: string;
  size: string;
  gasLimit: string;
  gasUsed: string;
  timestamp: string;
  transactions: string[] | EthereumTransaction[];
  uncles: string[];
  mixHash?: string;
  baseFeePerGas?: string;
}
```

#### 2.2.4 Client Interfaces
**File:** `networks/ethereum/src/types/ethereum-client-interfaces.ts`

```typescript
import { IQueryClient } from '@interchainjs/types';
import { EthereumBlock, EthereumTransaction, TransactionReceipt, Log, FeeHistory, SyncStatus } from './responses';
import { TransactionParams, LogFilter } from './requests';

export interface IEthereumQueryClient extends IQueryClient {
  // Basic Info Methods
  getChainId(): Promise<number>;
  getNetworkVersion(): Promise<string>;
  getProtocolVersion(): Promise<string>;
  isSyncing(): Promise<boolean | SyncStatus>;
  getBlockNumber(): Promise<number>;
  
  // Block Methods
  getBlock(blockNumber?: number | string): Promise<EthereumBlock>;
  getBlockByHash(hash: string): Promise<EthereumBlock>;
  getBlockByNumber(blockNumber: number | string): Promise<EthereumBlock>;
  getLatestBlock(): Promise<EthereumBlock>;
  getBlockTransactionCount(blockNumber?: number | string): Promise<number>;
  getBlockTransactionCountByHash(hash: string): Promise<number>;
  
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
  getFeeHistory(blockCount: number, newestBlock: string, rewardPercentiles?: number[]): Promise<FeeHistory>;
  
  // Filter/Log Methods
  getLogs(filter: LogFilter): Promise<Log[]>;
  newFilter(filter: LogFilter): Promise<string>;
  getFilterLogs(filterId: string): Promise<Log[]>;
  uninstallFilter(filterId: string): Promise<boolean>;
}
```

### 2.3 Create Protocol Adapter

#### 2.3.1 Base Adapter Interface
**File:** `networks/ethereum/src/adapters/base.ts`

```typescript
export interface IEthereumProtocolAdapter {
  // Encoding methods
  encodeBlockParams(params: any): any;
  encodeTransactionParams(params: any): any;
  encodeBalanceParams(params: any): any;
  encodeLogFilter(filter: any): any;
  
  // Decoding methods
  decodeBlock(response: any): EthereumBlock;
  decodeTransaction(response: any): EthereumTransaction;
  decodeTransactionReceipt(response: any): TransactionReceipt;
  decodeBalance(response: any): string;
  decodeLogs(response: any): Log[];
  
  // Protocol info
  getVersion(): string;
  getSupportedMethods(): string[];
  getCapabilities(): string[];
}
```

#### 2.3.2 Ethereum Adapter Implementation
**File:** `networks/ethereum/src/adapters/ethereum-adapter.ts`

```typescript
import { IEthereumProtocolAdapter } from './base';

export class EthereumAdapter implements IEthereumProtocolAdapter {
  // Implementation of all encoding/decoding methods
  // This will be a substantial implementation
}
```

### 2.4 Create Query Client Implementation

**File:** `networks/ethereum/src/query/ethereum-query-client.ts`

```typescript
import { IRpcClient } from '@interchainjs/types';
import { IEthereumQueryClient } from '../types/ethereum-client-interfaces';
import { IEthereumProtocolAdapter } from '../adapters/base';
import { EthereumRpcMethod } from '../types/protocol';

export class EthereumQueryClient implements IEthereumQueryClient {
  constructor(
    private rpcClient: IRpcClient,
    private protocolAdapter: IEthereumProtocolAdapter
  ) {}

  get endpoint(): string {
    return this.rpcClient.endpoint;
  }

  async connect(): Promise<void> {
    await this.rpcClient.connect();
  }

  async disconnect(): Promise<void> {
    await this.rpcClient.disconnect();
  }

  isConnected(): boolean {
    return this.rpcClient.isConnected();
  }

  // Implementation of all interface methods
  async getChainId(): Promise<number> {
    const result = await this.rpcClient.call(EthereumRpcMethod.ETH_CHAIN_ID);
    return parseInt(result, 16);
  }

  // ... other method implementations
}
```

---

## Work Item 3: Create RPC Tests for Ethereum Query Client

### 3.1 Analyze Cosmos Test Structure

#### Reference File: `networks/cosmos/rpc/query-client.test.ts`

**Key patterns to follow:**
- Uses real RPC endpoint for functional testing
- Tests organized by method categories
- Includes both positive and negative test cases
- Uses proper Jest setup with beforeAll/afterAll
- Tests connection management
- Validates response types and data

### 3.2 Create Test Infrastructure

#### 3.2.1 Test Configuration
**File:** `networks/ethereum/src/query/__tests__/setup.ts`

```typescript
export const TEST_CONFIG = {
  // Use public Ethereum RPC endpoints for testing
  MAINNET_RPC: 'https://eth.llamarpc.com',
  SEPOLIA_RPC: 'https://rpc.sepolia.org',
  
  // Test timeouts
  DEFAULT_TIMEOUT: 30000,
  LONG_TIMEOUT: 60000,
  
  // Known test data (use real mainnet data)
  KNOWN_BLOCK_NUMBER: 18000000,
  KNOWN_BLOCK_HASH: '0x...', // Real block hash
  KNOWN_TX_HASH: '0x...', // Real transaction hash
  KNOWN_ADDRESS: '0x...', // Real address with balance
  KNOWN_CONTRACT: '0x...', // Real contract address
};
```

#### 3.2.2 Debug Script for Test Data Collection
**File:** `networks/ethereum/debug/collect-test-data.ts`

```typescript
import { HttpRpcClient } from '@interchainjs/utils/clients';
import { EthereumQueryClient } from '../src/query/ethereum-query-client';
import { EthereumAdapter } from '../src/adapters/ethereum-adapter';

async function collectTestData() {
  const rpcClient = new HttpRpcClient('https://eth.llamarpc.com');
  const adapter = new EthereumAdapter();
  const client = new EthereumQueryClient(rpcClient, adapter);

  console.log('Collecting Ethereum test data...');

  try {
    // Get latest block info
    const latestBlock = await client.getLatestBlock();
    console.log('Latest Block:', {
      number: latestBlock.number,
      hash: latestBlock.hash,
      timestamp: latestBlock.timestamp
    });

    // Get a specific older block
    const specificBlock = await client.getBlockByNumber(18000000);
    console.log('Block 18000000:', {
      hash: specificBlock.hash,
      transactionCount: specificBlock.transactions.length
    });

    // Get chain info
    const chainId = await client.getChainId();
    console.log('Chain ID:', chainId);

    // Get a transaction from the block
    if (specificBlock.transactions.length > 0) {
      const txHash = typeof specificBlock.transactions[0] === 'string' 
        ? specificBlock.transactions[0] 
        : specificBlock.transactions[0].hash;
      
      const tx = await client.getTransaction(txHash);
      console.log('Transaction:', {
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: tx.value
      });

      const receipt = await client.getTransactionReceipt(txHash);
      console.log('Receipt:', {
        status: receipt.status,
        gasUsed: receipt.gasUsed
      });
    }

    // Test balance query
    const vitalikAddress = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
    const balance = await client.getBalance(vitalikAddress);
    console.log('Vitalik Balance:', balance.toString());

  } catch (error) {
    console.error('Error collecting test data:', error);
  }
}

collectTestData();
```

### 3.3 Create Comprehensive Test Suite

#### 3.3.1 Main Test File
**File:** `networks/ethereum/src/query/__tests__/ethereum-query-client.test.ts`

```typescript
import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { HttpRpcClient } from '@interchainjs/utils/clients';
import { EthereumQueryClient } from '../ethereum-query-client';
import { EthereumAdapter } from '../../adapters/ethereum-adapter';
import { IEthereumQueryClient } from '../../types/ethereum-client-interfaces';
import { TEST_CONFIG } from './setup';

describe('Ethereum Query Client - Functional Tests', () => {
  let queryClient: IEthereumQueryClient;

  beforeAll(async () => {
    const rpcClient = new HttpRpcClient(TEST_CONFIG.MAINNET_RPC, {
      timeout: TEST_CONFIG.DEFAULT_TIMEOUT,
      headers: {
        'User-Agent': 'InterchainJS-EthereumQueryClient-Test/1.0.0'
      }
    });
    
    const adapter = new EthereumAdapter();
    queryClient = new EthereumQueryClient(rpcClient, adapter);
    
    await queryClient.connect();
  }, TEST_CONFIG.LONG_TIMEOUT);

  afterAll(async () => {
    if (queryClient) {
      await queryClient.disconnect();
    }
  });

  describe('Connection Management', () => {
    test('should connect successfully', () => {
      expect(queryClient.isConnected()).toBe(true);
    });

    test('should have valid endpoint', () => {
      expect(queryClient.endpoint).toBe(TEST_CONFIG.MAINNET_RPC);
    });
  });

  describe('Basic Info Methods', () => {
    test('getChainId should return mainnet chain ID', async () => {
      const chainId = await queryClient.getChainId();
      expect(chainId).toBe(1); // Ethereum mainnet
    });

    test('getNetworkVersion should return network version', async () => {
      const version = await queryClient.getNetworkVersion();
      expect(typeof version).toBe('string');
      expect(version.length).toBeGreaterThan(0);
    });

    test('getBlockNumber should return current block number', async () => {
      const blockNumber = await queryClient.getBlockNumber();
      expect(typeof blockNumber).toBe('number');
      expect(blockNumber).toBeGreaterThan(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
    });

    test('isSyncing should return sync status', async () => {
      const syncStatus = await queryClient.isSyncing();
      expect(typeof syncStatus === 'boolean' || typeof syncStatus === 'object').toBe(true);
    });
  });

  describe('Block Query Methods', () => {
    test('getLatestBlock should return latest block', async () => {
      const block = await queryClient.getLatestBlock();
      
      expect(block).toBeDefined();
      expect(typeof block.number).toBe('string');
      expect(typeof block.hash).toBe('string');
      expect(typeof block.timestamp).toBe('string');
      expect(block.hash).toMatch(/^0x[a-fA-F0-9]{64}$/);
      expect(Array.isArray(block.transactions)).toBe(true);
    });

    test('getBlockByNumber should return specific block', async () => {
      const block = await queryClient.getBlockByNumber(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
      
      expect(block).toBeDefined();
      expect(block.number).toBe(`0x${TEST_CONFIG.KNOWN_BLOCK_NUMBER.toString(16)}`);
      expect(typeof block.hash).toBe('string');
      expect(block.hash).toMatch(/^0x[a-fA-F0-9]{64}$/);
    });

    test('getBlockByHash should return block by hash', async () => {
      // First get a block to get its hash
      const blockByNumber = await queryClient.getBlockByNumber(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
      const blockByHash = await queryClient.getBlockByHash(blockByNumber.hash);
      
      expect(blockByHash).toBeDefined();
      expect(blockByHash.hash).toBe(blockByNumber.hash);
      expect(blockByHash.number).toBe(blockByNumber.number);
    });

    test('getBlockTransactionCount should return transaction count', async () => {
      const count = await queryClient.getBlockTransactionCount(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
      expect(typeof count).toBe('number');
      expect(count).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Transaction Query Methods', () => {
    test('getTransaction should return transaction details', async () => {
      // Get a block with transactions
      const block = await queryClient.getBlockByNumber(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
      
      if (block.transactions.length > 0) {
        const txHash = typeof block.transactions[0] === 'string' 
          ? block.transactions[0] 
          : block.transactions[0].hash;
        
        const tx = await queryClient.getTransaction(txHash);
        
        expect(tx).toBeDefined();
        expect(tx.hash).toBe(txHash);
        expect(typeof tx.from).toBe('string');
        expect(typeof tx.to).toBe('string');
        expect(typeof tx.value).toBe('string');
        expect(tx.from).toMatch(/^0x[a-fA-F0-9]{40}$/);
      }
    });

    test('getTransactionReceipt should return receipt', async () => {
      // Get a block with transactions
      const block = await queryClient.getBlockByNumber(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
      
      if (block.transactions.length > 0) {
        const txHash = typeof block.transactions[0] === 'string' 
          ? block.transactions[0] 
          : block.transactions[0].hash;
        
        const receipt = await queryClient.getTransactionReceipt(txHash);
        
        expect(receipt).toBeDefined();
        expect(receipt.transactionHash).toBe(txHash);
        expect(typeof receipt.status).toBe('string');
        expect(typeof receipt.gasUsed).toBe('string');
        expect(Array.isArray(receipt.logs)).toBe(true);
      }
    });

    test('getTransactionCount should return nonce', async () => {
      const nonce = await queryClient.getTransactionCount(TEST_CONFIG.KNOWN_ADDRESS);
      expect(typeof nonce).toBe('number');
      expect(nonce).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Account/Balance Methods', () => {
    test('getBalance should return account balance', async () => {
      const balance = await queryClient.getBalance(TEST_CONFIG.KNOWN_ADDRESS);
      expect(typeof balance).toBe('bigint');
      expect(balance).toBeGreaterThanOrEqual(0n);
    });

    test('getCode should return contract code', async () => {
      const code = await queryClient.getCode(TEST_CONFIG.KNOWN_CONTRACT);
      expect(typeof code).toBe('string');
      expect(code).toMatch(/^0x/);
      expect(code.length).toBeGreaterThan(2); // More than just "0x"
    });

    test('getStorageAt should return storage value', async () => {
      const storage = await queryClient.getStorageAt(TEST_CONFIG.KNOWN_CONTRACT, '0x0');
      expect(typeof storage).toBe('string');
      expect(storage).toMatch(/^0x[a-fA-F0-9]{64}$/);
    });
  });

  describe('Gas/Fee Methods', () => {
    test('getGasPrice should return current gas price', async () => {
      const gasPrice = await queryClient.getGasPrice();
      expect(typeof gasPrice).toBe('bigint');
      expect(gasPrice).toBeGreaterThan(0n);
    });

    test('getMaxPriorityFeePerGas should return priority fee', async () => {
      const priorityFee = await queryClient.getMaxPriorityFeePerGas();
      expect(typeof priorityFee).toBe('bigint');
      expect(priorityFee).toBeGreaterThan(0n);
    });

    test('getFeeHistory should return fee history', async () => {
      const feeHistory = await queryClient.getFeeHistory(4, 'latest', [25, 50, 75]);
      
      expect(feeHistory).toBeDefined();
      expect(Array.isArray(feeHistory.baseFeePerGas)).toBe(true);
      expect(Array.isArray(feeHistory.gasUsedRatio)).toBe(true);
      expect(typeof feeHistory.oldestBlock).toBe('string');
      expect(feeHistory.baseFeePerGas.length).toBe(5); // blockCount + 1
      expect(feeHistory.gasUsedRatio.length).toBe(4); // blockCount
    });

    test('estimateGas should return gas estimate', async () => {
      const gasEstimate = await queryClient.estimateGas({
        from: TEST_CONFIG.KNOWN_ADDRESS,
        to: '0x0000000000000000000000000000000000000000',
        value: '0x1'
      });
      
      expect(typeof gasEstimate).toBe('bigint');
      expect(gasEstimate).toBeGreaterThan(0n);
    });
  });

  describe('Filter/Log Methods', () => {
    test('getLogs should return logs', async () => {
      const logs = await queryClient.getLogs({
        fromBlock: TEST_CONFIG.KNOWN_BLOCK_NUMBER,
        toBlock: TEST_CONFIG.KNOWN_BLOCK_NUMBER + 10,
        address: TEST_CONFIG.KNOWN_CONTRACT
      });
      
      expect(Array.isArray(logs)).toBe(true);
      // Note: logs might be empty, which is valid
    });

    test('newFilter and getFilterLogs should work', async () => {
      const filterId = await queryClient.newFilter({
        fromBlock: 'latest',
        toBlock: 'latest'
      });
      
      expect(typeof filterId).toBe('string');
      expect(filterId).toMatch(/^0x/);
      
      const logs = await queryClient.getFilterLogs(filterId);
      expect(Array.isArray(logs)).toBe(true);
      
      const uninstalled = await queryClient.uninstallFilter(filterId);
      expect(typeof uninstalled).toBe('boolean');
    });
  });

  describe('Error Handling', () => {
    test('should handle invalid block number', async () => {
      await expect(queryClient.getBlockByNumber(999999999999))
        .rejects.toThrow();
    });

    test('should handle invalid transaction hash', async () => {
      await expect(queryClient.getTransaction('0xinvalid'))
        .rejects.toThrow();
    });

    test('should handle invalid address', async () => {
      await expect(queryClient.getBalance('0xinvalid'))
        .rejects.toThrow();
    });
  });
});
```

### 3.4 Test Execution and Debug Scripts

#### 3.4.1 Package.json Scripts
Add to `networks/ethereum/package.json`:

```json
{
  "scripts": {
    "test:query": "jest src/query/__tests__/ethereum-query-client.test.ts",
    "test:query:watch": "jest src/query/__tests__/ethereum-query-client.test.ts --watch",
    "debug:collect-data": "ts-node debug/collect-test-data.ts",
    "debug:test-rpc": "ts-node debug/test-rpc-calls.ts"
  }
}
```

#### 3.4.2 Debug RPC Calls Script
**File:** `networks/ethereum/debug/test-rpc-calls.ts`

```typescript
import { HttpRpcClient } from '@interchainjs/utils/clients';

async function testRpcCalls() {
  const client = new HttpRpcClient('https://eth.llamarpc.com');
  
  console.log('Testing basic RPC calls...');
  
  try {
    // Test chain ID
    const chainId = await client.call('eth_chainId');
    console.log('Chain ID:', chainId);
    
    // Test latest block number
    const blockNumber = await client.call('eth_blockNumber');
    console.log('Latest Block:', blockNumber);
    
    // Test get block
    const block = await client.call('eth_getBlockByNumber', ['latest', false]);
    console.log('Latest Block Hash:', block.hash);
    
    // Test balance
    const balance = await client.call('eth_getBalance', ['0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', 'latest']);
    console.log('Vitalik Balance:', balance);
    
  } catch (error) {
    console.error('RPC call failed:', error);
  }
}

testRpcCalls();
```

---

## Implementation Order

### Phase 1: Infrastructure (Work Item 1)
1. Create shared clients package
2. Move RPC clients from Cosmos
3. Update Cosmos imports
4. Test Cosmos functionality still works

### Phase 2: Types and Structure (Work Item 2)
1. Create directory structure
2. Implement type definitions
3. Create protocol adapter interface
4. Implement basic query client structure

### Phase 3: Testing and Validation (Work Item 3)
1. Create debug scripts to collect test data
2. Implement comprehensive test suite
3. Run tests against real Ethereum RPC endpoints
4. Validate all functionality works correctly

### Phase 4: Integration
1. Create client factory
2. Update main exports
3. Create documentation
4. Final testing and validation

---

## Success Criteria

- [ ] All Cosmos functionality continues to work after RPC client migration
- [ ] Ethereum query client implements all interface methods
- [ ] All tests pass against real Ethereum RPC endpoints
- [ ] Code follows exact same patterns as Cosmos implementation
- [ ] Full type safety with TypeScript
- [ ] Comprehensive error handling
- [ ] Performance meets or exceeds current standards
