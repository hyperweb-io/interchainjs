// networks/ethereum/src/query/__tests__/setup.ts

/**
 * Test configuration and setup for Ethereum Query Client tests
 * Following the patterns from Cosmos tests for consistency
 */

export const TEST_CONFIG = {
  // Public Ethereum RPC endpoints for testing
  // Using multiple endpoints for redundancy
  MAINNET_RPC: 'https://eth.llamarpc.com',
  BACKUP_RPC: 'https://rpc.ankr.com/eth',
  SEPOLIA_RPC: 'https://rpc.sepolia.org',

  // Test timeouts (following Cosmos patterns)
  DEFAULT_TIMEOUT: 30000,  // 30 seconds for individual requests
  LONG_TIMEOUT: 60000,     // 60 seconds for test setup/teardown

  // Known test data (real mainnet data for consistent testing)
  // These values are from actual Ethereum mainnet and should remain stable
  KNOWN_BLOCK_NUMBER: 18000000,  // A stable historical block
  KNOWN_BLOCK_HASH: '0x95b198e154acbfc64109dfd22d8224fe927fd8dfdedfae01587674482ba4baf3',  // Block 18000000 hash
  KNOWN_TX_HASH: '0x16e199673891df518e25db2ef5320155da82a3dd71a677e7d84363251885d133',  // Real tx from block 18000000

  // Known addresses for testing
  KNOWN_ADDRESS: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',  // Vitalik's address
  KNOWN_CONTRACT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',  // USDT contract
  ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',

  // Test headers (following Cosmos patterns)
  TEST_HEADERS: {
    'User-Agent': 'InterchainJS-EthereumQueryClient-Test/1.0.0'
  }
};

/**
 * Test utilities for common test operations
 */
export class TestUtils {
  /**
   * Validate Ethereum address format
   */
  static isValidAddress(address: string): boolean {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }

  /**
   * Validate Ethereum hash format (32 bytes)
   */
  static isValidHash(hash: string): boolean {
    return /^0x[a-fA-F0-9]{64}$/.test(hash);
  }

  /**
   * Validate hex string format
   */
  static isValidHex(hex: string): boolean {
    return /^0x[a-fA-F0-9]*$/.test(hex);
  }

  /**
   * Convert hex string to number
   */
  static hexToNumber(hex: string): number {
    return parseInt(hex, 16);
  }

  /**
   * Convert hex string to bigint
   */
  static hexToBigint(hex: string): bigint {
    return BigInt(hex);
  }

  /**
   * Check if a value is a positive number
   */
  static isPositiveNumber(value: any): boolean {
    return typeof value === 'number' && value > 0;
  }

  /**
   * Check if a value is a positive bigint
   */
  static isPositiveBigint(value: any): boolean {
    return typeof value === 'bigint' && value > 0n;
  }

  /**
   * Wait for a specified amount of time
   */
  static async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Retry a function with exponential backoff
   */
  static async retry<T>(
    fn: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000
  ): Promise<T> {
    let lastError: Error;

    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error as Error;
        if (i < maxRetries - 1) {
          const delay = baseDelay * Math.pow(2, i);
          await this.sleep(delay);
        }
      }
    }

    throw lastError!;
  }
}

/**
 * Test data validation helpers
 */
export class TestValidators {
  /**
   * Validate Ethereum block structure
   */
  static validateBlock(block: any): void {
    expect(block).toBeDefined();
    expect(typeof block.number).toBe('string');
    expect(typeof block.hash).toBe('string');
    expect(typeof block.parentHash).toBe('string');
    expect(typeof block.timestamp).toBe('string');
    expect(typeof block.gasLimit).toBe('string');
    expect(typeof block.gasUsed).toBe('string');
    expect(typeof block.miner).toBe('string');
    expect(Array.isArray(block.transactions)).toBe(true);

    // Validate hex formats
    expect(TestUtils.isValidHash(block.hash)).toBe(true);
    expect(TestUtils.isValidHash(block.parentHash)).toBe(true);
    expect(TestUtils.isValidAddress(block.miner)).toBe(true);
  }

  /**
   * Validate Ethereum transaction structure
   */
  static validateTransaction(tx: any): void {
    expect(tx).toBeDefined();
    expect(typeof tx.hash).toBe('string');
    expect(typeof tx.from).toBe('string');
    expect(typeof tx.to).toBe('string');
    expect(typeof tx.value).toBe('string');
    expect(typeof tx.gas).toBe('string');
    expect(typeof tx.gasPrice).toBe('string');
    expect(typeof tx.nonce).toBe('string');
    expect(typeof tx.blockNumber).toBe('string');
    expect(typeof tx.blockHash).toBe('string');
    expect(typeof tx.transactionIndex).toBe('string');
    expect(typeof tx.input).toBe('string');

    // Validate hex formats
    expect(TestUtils.isValidHash(tx.hash)).toBe(true);
    expect(TestUtils.isValidAddress(tx.from)).toBe(true);
    expect(TestUtils.isValidAddress(tx.to)).toBe(true);
    expect(TestUtils.isValidHash(tx.blockHash)).toBe(true);
  }

  /**
   * Validate transaction receipt structure
   */
  static validateTransactionReceipt(receipt: any): void {
    expect(receipt).toBeDefined();
    expect(typeof receipt.transactionHash).toBe('string');
    expect(typeof receipt.blockNumber).toBe('string');
    expect(typeof receipt.blockHash).toBe('string');
    expect(typeof receipt.transactionIndex).toBe('string');
    expect(typeof receipt.from).toBe('string');
    expect(typeof receipt.to).toBe('string');
    expect(typeof receipt.gasUsed).toBe('string');
    expect(typeof receipt.cumulativeGasUsed).toBe('string');
    expect(typeof receipt.status).toBe('string');
    expect(Array.isArray(receipt.logs)).toBe(true);

    // Validate hex formats
    expect(TestUtils.isValidHash(receipt.transactionHash)).toBe(true);
    expect(TestUtils.isValidHash(receipt.blockHash)).toBe(true);
    expect(TestUtils.isValidAddress(receipt.from)).toBe(true);
    expect(TestUtils.isValidAddress(receipt.to)).toBe(true);
  }

  /**
   * Validate log entry structure
   */
  static validateLog(log: any): void {
    expect(log).toBeDefined();
    expect(typeof log.address).toBe('string');
    expect(Array.isArray(log.topics)).toBe(true);
    expect(typeof log.data).toBe('string');
    expect(typeof log.blockNumber).toBe('string');
    expect(typeof log.blockHash).toBe('string');
    expect(typeof log.transactionHash).toBe('string');
    expect(typeof log.transactionIndex).toBe('string');
    expect(typeof log.logIndex).toBe('string');
    expect(typeof log.removed).toBe('boolean');

    // Validate hex formats
    expect(TestUtils.isValidAddress(log.address)).toBe(true);
    expect(TestUtils.isValidHash(log.blockHash)).toBe(true);
    expect(TestUtils.isValidHash(log.transactionHash)).toBe(true);
  }

  /**
   * Validate fee history structure
   */
  static validateFeeHistory(feeHistory: any): void {
    expect(feeHistory).toBeDefined();
    expect(Array.isArray(feeHistory.baseFeePerGas)).toBe(true);
    expect(Array.isArray(feeHistory.gasUsedRatio)).toBe(true);
    expect(typeof feeHistory.oldestBlock).toBe('string');

    // Base fee array should have one more entry than gas used ratio
    expect(feeHistory.baseFeePerGas.length).toBe(feeHistory.gasUsedRatio.length + 1);
  }
}

// Import expect for validators (will be available in test environment)
import { expect } from '@jest/globals';
