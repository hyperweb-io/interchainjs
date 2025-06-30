/// <reference types="@types/jest" />

import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { createCosmosQueryClient, ICosmosQueryClient, RpcMethod } from '@interchainjs/cosmos';

const RPC_ENDPOINT = 'https://rpc.osmosis.zone/';
let queryClient: ICosmosQueryClient;

describe('Cosmos Query Client - Functional Tests', () => {
  beforeAll(async () => {
    queryClient = await createCosmosQueryClient(RPC_ENDPOINT, {
      timeout: 30000,
      headers: {
        'User-Agent': 'InterchainJS-QueryClient-Test/1.0.0'
      }
    });
    await queryClient.connect();
  });

  afterAll(async () => {
    if (queryClient) {
      await queryClient.disconnect();
    }
  });

  describe('Connection Management', () => {
    test('should connect successfully', () => {
      expect(queryClient.isConnected()).toBe(true);
      expect(queryClient.endpoint).toBe(RPC_ENDPOINT);
    });

    test('should have correct protocol info', () => {
      const protocolInfo = queryClient.getProtocolInfo();
      expect(protocolInfo.version).toBeDefined();
      expect(protocolInfo.supportedMethods).toBeDefined();
      expect(protocolInfo.supportedMethods.has(RpcMethod.STATUS)).toBe(true);
      expect(protocolInfo.supportedMethods.has(RpcMethod.BLOCK)).toBe(true);
      expect(protocolInfo.capabilities).toBeDefined();
    });
  });

  describe('Basic Info Methods', () => {
    test('status() should return chain status', async () => {
      const status = await queryClient.getStatus();

      expect(status).toBeDefined();
      expect(status.nodeInfo).toBeDefined();
      expect(status.nodeInfo.network).toBe('osmosis-1');
      expect(status.nodeInfo.version).toBeDefined();
      expect(status.nodeInfo.protocolVersion).toBeDefined();
      expect(status.nodeInfo.protocolVersion.p2p).toBeDefined();
      expect(status.nodeInfo.protocolVersion.block).toBeDefined();
      expect(status.nodeInfo.protocolVersion.app).toBeDefined();

      expect(status.syncInfo).toBeDefined();
      expect(status.syncInfo.latestBlockHeight).toBeDefined();
      expect(status.syncInfo.latestBlockHeight).toBeGreaterThan(0);
      expect(status.syncInfo.latestBlockHash).toBeDefined();
      expect(status.syncInfo.latestBlockTime).toBeDefined();
      expect(status.syncInfo.catchingUp).toBeDefined();

      expect(status.validatorInfo).toBeDefined();
      expect(status.validatorInfo.address).toBeDefined();
      expect(status.validatorInfo.pubKey).toBeDefined();
      expect(status.validatorInfo.votingPower).toBeDefined();
    });

    test('abciInfo() should return ABCI info', async () => {
      const result = await queryClient.getAbciInfo();

      expect(result).toBeDefined();
      expect(result.data).toBe('OsmosisApp');
      expect(result.lastBlockHeight).toBeDefined();
      expect(result.lastBlockHeight).toBeGreaterThan(0);
      expect(result.lastBlockAppHash).toBeDefined();
    });

    test('health() should return health status', async () => {
      const health = await queryClient.getHealth();

      expect(health).toBeDefined();
      // Health endpoint typically returns empty object when healthy
    });

    test('netInfo() should return network info', async () => {
      const netInfo = await queryClient.getNetInfo();

      expect(netInfo).toBeDefined();
      expect(netInfo.listening).toBeDefined();
      expect(netInfo.listeners).toBeDefined();
      expect(Array.isArray(netInfo.listeners)).toBe(true);
      expect(netInfo.nPeers).toBeDefined();
      expect(netInfo.peers).toBeDefined();
      expect(Array.isArray(netInfo.peers)).toBe(true);
    });
  });

  describe('Block Query Methods', () => {
    let testHeight: number;

    beforeAll(async () => {
      // Get a recent block height for testing
      const status = await queryClient.getStatus();
      testHeight = status.syncInfo.latestBlockHeight - 100;
    });

    test('block() should return block at specific height', async () => {
      const result = await queryClient.getBlock(testHeight);

      expect(result).toBeDefined();
      expect(result.header).toBeDefined();
      expect(result.header.chainId).toBe('osmosis-1');
      expect(result.header.height).toBe(testHeight);
      expect(result.header.time).toBeDefined();

      expect(result.data).toBeDefined();
      expect(result.data.txs).toBeDefined();
      expect(Array.isArray(result.data.txs)).toBe(true);

      expect(result.lastCommit).toBeDefined();
    });
  });

  describe('Protocol Detection', () => {
    test('should detect and use correct protocol adapter', async () => {
      const protocolInfo = queryClient.getProtocolInfo();

      // Based on our test results, Osmosis uses version 0.38.17
      expect(protocolInfo.version).toBeDefined();
      expect(['0.34', '0.37', '0.38', '1.0']).toContain(
        protocolInfo.version.split('-')[1]
      );

      // Check that the adapter was selected correctly
      const status = await queryClient.getStatus();
      expect(status.nodeInfo.version).toBe('0.38.17');
    });
  });

  describe('Error Handling', () => {
    test('should handle invalid block height gracefully', async () => {
      await expect(queryClient.getBlock(999999999999)).rejects.toThrow();
    });

    test('should handle invalid block hash gracefully', async () => {
      await expect(queryClient.getBlockByHash('invalid_hash')).rejects.toThrow();
    });

    test('should handle invalid transaction hash gracefully', async () => {
      await expect(queryClient.getTx('invalid_tx_hash')).rejects.toThrow();
    });

    test('should handle invalid validator pagination', async () => {
      await expect(queryClient.getValidators(undefined, 9999, 100)).rejects.toThrow();
    });
  });
});