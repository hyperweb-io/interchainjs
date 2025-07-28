/// <reference types="@types/jest" />

import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { HttpRpcClient } from '@interchainjs/utils/clients';
import { EthereumQueryClient } from '../ethereum-query-client';
import { EthereumAdapter } from '../../adapters/ethereum-adapter';
import { IEthereumQueryClient } from '../../types/ethereum-client-interfaces';
import { TEST_CONFIG, TestUtils, TestValidators } from './setup';

/**
 * Comprehensive functional tests for Ethereum Query Client
 * Following the patterns from Cosmos tests for consistency
 * Tests against real Ethereum RPC endpoints
 */
describe('Ethereum Query Client - Functional Tests', () => {
  let queryClient: IEthereumQueryClient;

  beforeAll(async () => {
    // Create HTTP RPC client with timeout and headers (following Cosmos pattern)
    const rpcClient = new HttpRpcClient(TEST_CONFIG.MAINNET_RPC, {
      timeout: TEST_CONFIG.DEFAULT_TIMEOUT,
      headers: TEST_CONFIG.TEST_HEADERS
    });

    // Create protocol adapter
    const adapter = new EthereumAdapter();

    // Create query client
    queryClient = new EthereumQueryClient(rpcClient, adapter);

    // Connect to the client
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
    test('getChainId() should return mainnet chain ID', async () => {
      const chainId = await queryClient.getChainId();
      expect(chainId).toBe(1); // Ethereum mainnet
      expect(TestUtils.isPositiveNumber(chainId)).toBe(true);
    });

    test('getNetworkVersion() should return network version', async () => {
      const version = await queryClient.getNetworkVersion();
      expect(typeof version).toBe('string');
      expect(version.length).toBeGreaterThan(0);
      expect(version).toBe('1'); // Mainnet network version
    });

    test('getProtocolVersion() should return protocol version', async () => {
      const protocolVersion = await queryClient.getProtocolVersion();
      expect(typeof protocolVersion).toBe('string');
      expect(protocolVersion.length).toBeGreaterThan(0);
    });

    test('getBlockNumber() should return current block number', async () => {
      const blockNumber = await queryClient.getBlockNumber();
      expect(TestUtils.isPositiveNumber(blockNumber)).toBe(true);
      expect(blockNumber).toBeGreaterThan(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
    });

    test('isSyncing() should return sync status', async () => {
      const syncStatus = await queryClient.isSyncing();
      // Should be either false (not syncing) or an object with sync info
      expect(typeof syncStatus === 'boolean' || typeof syncStatus === 'object').toBe(true);

      if (typeof syncStatus === 'object') {
        expect(syncStatus).toHaveProperty('startingBlock');
        expect(syncStatus).toHaveProperty('currentBlock');
        expect(syncStatus).toHaveProperty('highestBlock');
      }
    });
  });

  describe('Block Query Methods', () => {
    test('getLatestBlock() should return latest block', async () => {
      const block = await queryClient.getLatestBlock();

      TestValidators.validateBlock(block);

      // Additional checks for latest block
      const blockNumber = TestUtils.hexToNumber(block.number);
      expect(blockNumber).toBeGreaterThan(TEST_CONFIG.KNOWN_BLOCK_NUMBER);

      // Should have recent timestamp (within last hour)
      const timestamp = TestUtils.hexToNumber(block.timestamp);
      const now = Math.floor(Date.now() / 1000);
      expect(timestamp).toBeGreaterThan(now - 3600); // Within last hour
    });

    test('getBlockByNumber() should return specific block', async () => {
      const block = await queryClient.getBlockByNumber(TEST_CONFIG.KNOWN_BLOCK_NUMBER);

      TestValidators.validateBlock(block);

      // Should match the known block number
      const blockNumber = TestUtils.hexToNumber(block.number);
      expect(blockNumber).toBe(TEST_CONFIG.KNOWN_BLOCK_NUMBER);

      // Should match known block hash if we have it
      if (TEST_CONFIG.KNOWN_BLOCK_HASH) {
        expect(block.hash).toBe(TEST_CONFIG.KNOWN_BLOCK_HASH);
      }
    });

    test('getBlockByHash() should return block by hash', async () => {
      // First get a block to get its hash
      const blockByNumber = await queryClient.getBlockByNumber(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
      const blockByHash = await queryClient.getBlockByHash(blockByNumber.hash);

      TestValidators.validateBlock(blockByHash);

      // Should be the same block
      expect(blockByHash.hash).toBe(blockByNumber.hash);
      expect(blockByHash.number).toBe(blockByNumber.number);
      expect(blockByHash.parentHash).toBe(blockByNumber.parentHash);
    });

    test('getBlock() should return latest block when no parameter', async () => {
      const block = await queryClient.getBlock();

      TestValidators.validateBlock(block);

      // Should be a recent block
      const blockNumber = TestUtils.hexToNumber(block.number);
      expect(blockNumber).toBeGreaterThan(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
    });

    test('getBlock() should return specific block when number provided', async () => {
      const block = await queryClient.getBlock(TEST_CONFIG.KNOWN_BLOCK_NUMBER);

      TestValidators.validateBlock(block);

      const blockNumber = TestUtils.hexToNumber(block.number);
      expect(blockNumber).toBe(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
    });

    test('getBlockTransactionCount() should return transaction count', async () => {
      const count = await queryClient.getBlockTransactionCount(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
      expect(typeof count).toBe('number');
      expect(count).toBeGreaterThanOrEqual(0);
    });

    test('getBlockTransactionCountByHash() should return transaction count by hash', async () => {
      const block = await queryClient.getBlockByNumber(TEST_CONFIG.KNOWN_BLOCK_NUMBER);
      const count = await queryClient.getBlockTransactionCountByHash(block.hash);
      expect(typeof count).toBe('number');
      expect(count).toBeGreaterThanOrEqual(0);
      expect(count).toBe(block.transactions.length);
    });
  });

  describe('Transaction Query Methods', () => {
    test('getTransaction() should return transaction details', async () => {
      // Get a block with transactions
      const block = await queryClient.getBlockByNumber(TEST_CONFIG.KNOWN_BLOCK_NUMBER);

      if (block.transactions.length > 0) {
        const txHash = typeof block.transactions[0] === 'string'
          ? block.transactions[0]
          : block.transactions[0].hash;

        const tx = await queryClient.getTransaction(txHash);

        TestValidators.validateTransaction(tx);
        expect(tx.hash).toBe(txHash);

        // Should be in the same block
        expect(tx.blockHash).toBe(block.hash);
        expect(tx.blockNumber).toBe(block.number);
      } else {
        // Skip if no transactions in the known block
        console.warn('No transactions in known block, skipping transaction test');
      }
    });

    test('getTransactionReceipt() should return receipt', async () => {
      // Get a block with transactions
      const block = await queryClient.getBlockByNumber(TEST_CONFIG.KNOWN_BLOCK_NUMBER);

      if (block.transactions.length > 0) {
        const txHash = typeof block.transactions[0] === 'string'
          ? block.transactions[0]
          : block.transactions[0].hash;

        const receipt = await queryClient.getTransactionReceipt(txHash);

        TestValidators.validateTransactionReceipt(receipt);
        expect(receipt.transactionHash).toBe(txHash);

        // Should be in the same block
        expect(receipt.blockHash).toBe(block.hash);
        expect(receipt.blockNumber).toBe(block.number);
      } else {
        console.warn('No transactions in known block, skipping receipt test');
      }
    });

    test('getTransactionCount() should return nonce', async () => {
      const nonce = await queryClient.getTransactionCount(TEST_CONFIG.KNOWN_ADDRESS);
      expect(typeof nonce).toBe('number');
      expect(nonce).toBeGreaterThanOrEqual(0);
    });

    test('getTransactionCount() with block tag should work', async () => {
      const latestNonce = await queryClient.getTransactionCount(TEST_CONFIG.KNOWN_ADDRESS, 'latest');
      const earliestNonce = await queryClient.getTransactionCount(TEST_CONFIG.KNOWN_ADDRESS, 'earliest');

      expect(typeof latestNonce).toBe('number');
      expect(typeof earliestNonce).toBe('number');
      expect(latestNonce).toBeGreaterThanOrEqual(earliestNonce);
    });
  });

  describe('Account/Balance Methods', () => {
    test('getBalance() should return account balance', async () => {
      const balance = await queryClient.getBalance(TEST_CONFIG.KNOWN_ADDRESS);
      expect(typeof balance).toBe('bigint');
      expect(balance).toBeGreaterThanOrEqual(0n);
    });

    test('getBalance() with block tag should work', async () => {
      const latestBalance = await queryClient.getBalance(TEST_CONFIG.KNOWN_ADDRESS, 'latest');
      const earliestBalance = await queryClient.getBalance(TEST_CONFIG.KNOWN_ADDRESS, 'earliest');

      expect(typeof latestBalance).toBe('bigint');
      expect(typeof earliestBalance).toBe('bigint');
      expect(latestBalance).toBeGreaterThanOrEqual(0n);
      expect(earliestBalance).toBeGreaterThanOrEqual(0n);
    });

    test('getCode() should return contract code', async () => {
      const code = await queryClient.getCode(TEST_CONFIG.KNOWN_CONTRACT);
      expect(typeof code).toBe('string');
      expect(TestUtils.isValidHex(code)).toBe(true);
      expect(code.length).toBeGreaterThan(2); // More than just "0x"
    });

    test('getCode() for EOA should return empty', async () => {
      const code = await queryClient.getCode(TEST_CONFIG.KNOWN_ADDRESS);
      expect(typeof code).toBe('string');
      expect(code).toBe('0x');
    });

    test('getStorageAt() should return storage value', async () => {
      const storage = await queryClient.getStorageAt(TEST_CONFIG.KNOWN_CONTRACT, '0x0');
      expect(typeof storage).toBe('string');
      expect(TestUtils.isValidHex(storage)).toBe(true);
      expect(storage).toMatch(/^0x[a-fA-F0-9]{64}$/); // 32 bytes
    });

    test('getStorageAt() with block tag should work', async () => {
      const latestStorage = await queryClient.getStorageAt(TEST_CONFIG.KNOWN_CONTRACT, '0x0', 'latest');
      const earliestStorage = await queryClient.getStorageAt(TEST_CONFIG.KNOWN_CONTRACT, '0x0', 'earliest');

      expect(typeof latestStorage).toBe('string');
      expect(typeof earliestStorage).toBe('string');
      expect(TestUtils.isValidHex(latestStorage)).toBe(true);
      expect(TestUtils.isValidHex(earliestStorage)).toBe(true);
    });
  });

  describe('Gas/Fee Methods', () => {
    test('getGasPrice() should return current gas price', async () => {
      const gasPrice = await queryClient.getGasPrice();
      expect(typeof gasPrice).toBe('bigint');
      expect(gasPrice).toBeGreaterThan(0n);
    });

    test('getMaxPriorityFeePerGas() should return priority fee', async () => {
      const priorityFee = await queryClient.getMaxPriorityFeePerGas();
      expect(typeof priorityFee).toBe('bigint');
      expect(priorityFee).toBeGreaterThan(0n);
    });

    test('getFeeHistory() should return fee history', async () => {
      const feeHistory = await queryClient.getFeeHistory(4, 'latest', [25, 50, 75]);

      TestValidators.validateFeeHistory(feeHistory);

      // Should have 5 base fee entries (4 blocks + 1)
      expect(feeHistory.baseFeePerGas.length).toBe(5);
      // Should have 4 gas used ratio entries
      expect(feeHistory.gasUsedRatio.length).toBe(4);

      // All base fees should be valid hex strings
      feeHistory.baseFeePerGas.forEach(fee => {
        expect(typeof fee).toBe('string');
        expect(TestUtils.isValidHex(fee)).toBe(true);
      });

      // All gas used ratios should be numbers between 0 and 1
      feeHistory.gasUsedRatio.forEach(ratio => {
        expect(typeof ratio).toBe('number');
        expect(ratio).toBeGreaterThanOrEqual(0);
        expect(ratio).toBeLessThanOrEqual(1);
      });
    });

    test('estimateGas() should return gas estimate', async () => {
      const gasEstimate = await queryClient.estimateGas({
        from: TEST_CONFIG.KNOWN_ADDRESS,
        to: TEST_CONFIG.ZERO_ADDRESS,
        value: '0x1'
      });

      expect(typeof gasEstimate).toBe('bigint');
      expect(gasEstimate).toBeGreaterThan(0n);
      expect(gasEstimate).toBeLessThan(1000000n); // Should be reasonable for simple transfer
    });

    test('estimateGas() for contract call should work', async () => {
      // Estimate gas for a contract call (e.g., ERC20 transfer)
      const gasEstimate = await queryClient.estimateGas({
        from: TEST_CONFIG.KNOWN_ADDRESS,
        to: TEST_CONFIG.KNOWN_CONTRACT,
        data: '0xa9059cbb000000000000000000000000' + TEST_CONFIG.ZERO_ADDRESS.slice(2) + '0000000000000000000000000000000000000000000000000000000000000001'
      });

      expect(typeof gasEstimate).toBe('bigint');
      expect(gasEstimate).toBeGreaterThan(0n);
    });
  });

  describe('Filter/Log Methods', () => {
    test('getLogs() should return logs', async () => {
      const logs = await queryClient.getLogs({
        fromBlock: TEST_CONFIG.KNOWN_BLOCK_NUMBER,
        toBlock: TEST_CONFIG.KNOWN_BLOCK_NUMBER + 100,
        address: TEST_CONFIG.KNOWN_CONTRACT
      });

      expect(Array.isArray(logs)).toBe(true);

      // Validate each log if any exist
      logs.forEach(log => {
        TestValidators.validateLog(log);
      });
    });

    test('getLogs() with topics filter should work', async () => {
      // Filter for Transfer events (topic0 = keccak256("Transfer(address,address,uint256)"))
      const transferTopic = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';

      const logs = await queryClient.getLogs({
        fromBlock: TEST_CONFIG.KNOWN_BLOCK_NUMBER,
        toBlock: TEST_CONFIG.KNOWN_BLOCK_NUMBER + 100,
        address: TEST_CONFIG.KNOWN_CONTRACT,
        topics: [transferTopic]
      });

      expect(Array.isArray(logs)).toBe(true);

      // All logs should have the Transfer topic
      logs.forEach(log => {
        TestValidators.validateLog(log);
        expect(log.topics[0]).toBe(transferTopic);
      });
    });

    test('newFilter() and getFilterLogs() should work', async () => {
      const filterId = await queryClient.newFilter({
        fromBlock: 'latest',
        toBlock: 'latest'
      });

      expect(typeof filterId).toBe('string');
      expect(TestUtils.isValidHex(filterId)).toBe(true);

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

    test('should handle invalid block hash', async () => {
      await expect(queryClient.getBlockByHash('0xinvalid'))
        .rejects.toThrow();
    });

    test('should handle invalid transaction hash', async () => {
      await expect(queryClient.getTransaction('0xinvalid'))
        .rejects.toThrow();
    });

    test('should handle invalid address format', async () => {
      await expect(queryClient.getBalance('invalid_address'))
        .rejects.toThrow();
    });

    test('should handle non-existent transaction', async () => {
      const nonExistentTx = '0x1234567890123456789012345678901234567890123456789012345678901234';
      await expect(queryClient.getTransaction(nonExistentTx))
        .rejects.toThrow();
    });
  });
});
