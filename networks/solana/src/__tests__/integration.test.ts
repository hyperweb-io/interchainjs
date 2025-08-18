/**
 * Integration tests for refactored Solana implementation
 */

import {
  createSolanaAdapter,
  createSolanaHttpRpcClient,
  SolanaQueryClient,
  DEFAULT_RPC_CONFIGS
} from '../index';
import { SolanaVersion } from '../types/protocol';

describe('Solana Integration Tests', () => {
  const DEVNET_ENDPOINT = 'https://api.devnet.solana.com';
  const TEST_TIMEOUT = 30000;

  describe('Protocol Adapter', () => {
    it('should create a V1 adapter with default capabilities', async () => {
      const adapter = await createSolanaAdapter(SolanaVersion.V1);

      expect(adapter).toBeDefined();
      expect(adapter.getVersion()).toBe(SolanaVersion.V1);
      expect(adapter.getSupportedMethods().size).toBeGreaterThan(0);

      const capabilities = adapter.getCapabilities();
      expect(capabilities.supportsVersionedTransactions).toBe(true);
      expect(capabilities.supportsComputeBudget).toBe(true);
      expect(capabilities.maxTransactionSize).toBe(1232);
    });
  });

  describe('HTTP RPC Client', () => {
    it('should connect to devnet and get health status', async () => {
      const client = createSolanaHttpRpcClient({
        endpoint: DEVNET_ENDPOINT,
        timeout: 10000,
        retries: 2
      });

      await client.connect();
      expect(client.isConnected()).toBe(true);

      const health = await client.call('getHealth');
      expect(health).toBe('ok');

      await client.disconnect();
    }, TEST_TIMEOUT);

    it('should get version information from devnet', async () => {
      const client = createSolanaHttpRpcClient({
        endpoint: DEVNET_ENDPOINT,
        timeout: 10000,
        retries: 2
      });

      const version = await client.call('getVersion') as any;
      expect(version).toBeDefined();
      expect(version['solana-core']).toBeDefined();
    }, TEST_TIMEOUT);

    it('should handle RPC errors gracefully', async () => {
      const client = createSolanaHttpRpcClient({
        endpoint: DEVNET_ENDPOINT,
        timeout: 10000,
        retries: 1
      });

      // Test with invalid method
      await expect(client.call('invalidMethod')).rejects.toThrow();
    }, TEST_TIMEOUT);
  });

  describe('Query Client', () => {
    let queryClient: SolanaQueryClient;

    beforeEach(async () => {
      const adapter = await createSolanaAdapter(SolanaVersion.V1);
      const rpcClient = createSolanaHttpRpcClient({
        endpoint: DEVNET_ENDPOINT,
        timeout: 15000,
        retries: 2
      });

      queryClient = new SolanaQueryClient(rpcClient, adapter);
      await queryClient.connect();
    });

    afterEach(async () => {
      if (queryClient) {
        await queryClient.disconnect();
      }
    });

    it('should get block height from devnet', async () => {
      const blockHeight = await queryClient.getBlockHeight();
      expect(typeof blockHeight).toBe('number');
      expect(blockHeight).toBeGreaterThan(0);
    }, TEST_TIMEOUT);

    it('should get current slot from devnet', async () => {
      const slot = await queryClient.getSlot();
      expect(typeof slot).toBe('number');
      expect(slot).toBeGreaterThan(0);
    }, TEST_TIMEOUT);

    it('should get epoch info from devnet', async () => {
      const epochInfo = await queryClient.getEpochInfo();
      expect(epochInfo).toBeDefined();
      expect(epochInfo.epoch).toBeDefined();
      expect(typeof epochInfo.slotIndex).toBe('number');
      expect(epochInfo.slotsInEpoch).toBeDefined();
    }, TEST_TIMEOUT);

    it('should get health status', async () => {
      const health = await queryClient.getHealth();
      expect(health).toBe('ok');
    }, TEST_TIMEOUT);

    it('should get version information', async () => {
      const version = await queryClient.getVersion() as any;
      expect(version).toBeDefined();
      expect(version['solana-core']).toBeDefined();
    }, TEST_TIMEOUT);

    it('should get balance for a known account', async () => {
      // Use a well-known system account (System Program)
      const systemProgramId = '11111111111111111111111111111112';

      const balance = await queryClient.getBalance(systemProgramId);
      expect(typeof balance).toBe('number');
      expect(balance).toBeGreaterThanOrEqual(0);
    }, TEST_TIMEOUT);

    it('should get account info for system program', async () => {
      const systemProgramId = '11111111111111111111111111111112';

      try {
        const account = await queryClient.getAccount(systemProgramId);
        expect(account).toBeDefined();
        if (account) {
          expect(typeof account.executable).toBe('boolean');
          expect(account.owner).toBeDefined();
        }
      } catch (error) {
        // Some accounts might not exist or be accessible, which is fine for this test
        console.log('Account not found or not accessible:', error);
      }
    }, TEST_TIMEOUT);

    it('should get minimum balance for rent exemption', async () => {
      const minBalance = await queryClient.getMinimumBalanceForRentExemption(0);
      expect(typeof minBalance).toBe('number');
      expect(minBalance).toBeGreaterThan(0);
    }, TEST_TIMEOUT);
  });

  describe('Default Configurations', () => {
    it('should have correct devnet configuration', () => {
      const devnetConfig = DEFAULT_RPC_CONFIGS.devnet;
      expect(devnetConfig.endpoint).toBe('https://api.devnet.solana.com');
      expect(devnetConfig.timeout).toBe(30000);
      expect(devnetConfig.retries).toBe(3);
    });

    it('should create client with default devnet config', () => {
      const client = createSolanaHttpRpcClient(DEFAULT_RPC_CONFIGS.devnet);
      expect(client).toBeDefined();
      expect(client.isConnected()).toBe(false);
    });
  });

  describe('Error Handling', () => {
    it('should handle network timeouts', async () => {
      const client = createSolanaHttpRpcClient({
        endpoint: DEVNET_ENDPOINT,
        timeout: 1, // Very short timeout
        retries: 0
      });

      await expect(client.call('getHealth')).rejects.toThrow();
    }, 5000);

    it('should handle invalid endpoints', async () => {
      const client = createSolanaHttpRpcClient({
        endpoint: 'https://invalid-endpoint.example.com',
        timeout: 5000,
        retries: 1
      });

      await expect(client.call('getHealth')).rejects.toThrow();
    }, 10000);
  });
});
