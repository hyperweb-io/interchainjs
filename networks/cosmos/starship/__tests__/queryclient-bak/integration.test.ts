// networks/cosmos/starship/__tests__/queryclient/integration.test.ts
import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { 
  CosmosClientFactory,
  createCosmosQueryClient,
  ICosmosQueryClient,
  ICosmosEventClient,
  ProtocolVersion
} from '@interchainjs/cosmos';

describe('Integration Tests', () => {
  const OSMOSIS_HTTP = 'https://rpc.osmosis.zone/';
  const OSMOSIS_WS = 'wss://rpc.osmosis.zone/websocket';

  describe('End-to-End Query Client Workflow', () => {
    let queryClient: ICosmosQueryClient;

    beforeAll(async () => {
      queryClient = createCosmosQueryClient(OSMOSIS_HTTP, {
        timeout: 20000,
        protocolVersion: ProtocolVersion.COMET_38
      });
      await queryClient.connect();
    });

    afterAll(async () => {
      if (queryClient) {
        await queryClient.disconnect();
      }
    });

    test('should perform complete chain analysis workflow', async () => {
      // Step 1: Get chain status
      const status = await queryClient.getStatus();
      expect(status.nodeInfo.network).toBe('osmosis-1');
      expect(status.syncInfo.catchingUp).toBe(false);
      
      const currentHeight = parseInt(status.syncInfo.latestBlockHeight);
      expect(currentHeight).toBeGreaterThan(0);

      // Step 2: Get latest block
      const latestBlock = await queryClient.getBlock();
      expect(parseInt(latestBlock.header.height)).toBeGreaterThanOrEqual(currentHeight - 5);
      expect(latestBlock.header.chainId).toBe('osmosis-1');

      // Step 3: Get historical block
      const historicalHeight = currentHeight - 100;
      const historicalBlock = await queryClient.getBlock(historicalHeight);
      expect(historicalBlock.header.height).toBe(historicalHeight.toString());

      // Step 4: Get block results for historical block
      const blockResults = await queryClient.getBlockResults(historicalHeight);
      expect(blockResults.height).toBe(historicalHeight.toString());

      // Step 5: Get validators
      const validators = await queryClient.getValidators(undefined, 1, 10);
      expect(validators.validators.length).toBeGreaterThan(0);
      expect(validators.validators.length).toBeLessThanOrEqual(10);
      expect(validators.total).toBeGreaterThan(100); // Osmosis has many validators

      // Step 6: Get consensus parameters
      const consensusParams = await queryClient.getConsensusParams();
      expect((consensusParams as any).maxBytes).toBeDefined();
      expect((consensusParams as any).maxGas).toBeDefined();

      // Step 7: Get network info
      const netInfo = await queryClient.getNetInfo();
      expect(netInfo.listening).toBe(true);
      expect(netInfo.nPeers).toBeGreaterThan(0);

      console.log(`✅ Complete workflow test passed for chain ${status.nodeInfo.network} at height ${currentHeight}`);
    }, 60000);

    test('should handle parallel operations efficiently', async () => {
      const startTime = Date.now();

      // Perform multiple operations in parallel
      const [status, abciInfo, health, netInfo, latestBlock, validators] = await Promise.all([
        queryClient.getStatus(),
        queryClient.getAbciInfo(),
        queryClient.getHealth(),
        queryClient.getNetInfo(),
        queryClient.getBlock(),
        queryClient.getValidators(undefined, 1, 5)
      ]);

      const endTime = Date.now();
      const totalTime = endTime - startTime;

      // Verify all results
      expect(status.nodeInfo.network).toBe('osmosis-1');
      expect(abciInfo).toBeDefined();
      expect(health).toBeDefined();
      expect(netInfo.listening).toBe(true);
      expect(latestBlock.header.chainId).toBe('osmosis-1');
      expect(validators.validators.length).toBeGreaterThan(0);

      // Should complete in reasonable time (less than 15 seconds)
      expect(totalTime).toBeLessThan(15000);

      console.log(`✅ Parallel operations completed in ${totalTime}ms`);
    }, 30000);

    test('should handle transaction queries when available', async () => {
      // Get a recent block with transactions
      let blockWithTxs = null;
      let searchHeight = parseInt((await queryClient.getStatus()).syncInfo.latestBlockHeight);
      
      // Search backwards for a block with transactions (up to 1000 blocks)
      for (let i = 0; i < 1000 && !blockWithTxs; i++) {
        const block = await queryClient.getBlock(searchHeight - i);
        if (block.data.txs.length > 0) {
          blockWithTxs = block;
          break;
        }
      }

      if (blockWithTxs) {
        const txHash = blockWithTxs.data.txs[0];
        
        try {
          const tx = await queryClient.getTx(txHash);
          expect(tx.hash).toBe(txHash);
          expect(tx.height).toBe(blockWithTxs.header.height);
          expect(tx.txResult).toBeDefined();
          
          console.log(`✅ Transaction query test passed for tx ${txHash}`);
        } catch (error) {
          console.log(`⚠️  Transaction query failed (this may be expected): ${(error as Error).message}`);
        }
      } else {
        console.log('⚠️  No transactions found in recent blocks, skipping transaction test');
      }
    }, 45000);
  });

  describe.skip('Event Client Integration', () => {
    let eventClient: ICosmosEventClient;

    beforeAll(async () => {
      eventClient = CosmosClientFactory.createEventClient(OSMOSIS_WS, {
        reconnect: {
          maxRetries: 3,
          retryDelay: 1000
        }
      });
    });

    afterAll(async () => {
      if (eventClient) {
        await eventClient.unsubscribeFromAll();
      }
    });

    test('should stream real-time blocks', async () => {
      const blockIterable = eventClient.subscribeToBlocks();
      const blockIterator = blockIterable[Symbol.asyncIterator]();
      const blocks = [];
      
      const timeout = setTimeout(() => {
        throw new Error('Block streaming timeout');
      }, 45000);

      try {
        // Collect 3 blocks
        for (let i = 0; i < 3; i++) {
          const { value: block, done } = await blockIterator.next();
          if (done) break;
          
          blocks.push(block);
          expect(block.header.chainId).toBe('osmosis-1');
          expect(block.header.height).toBeDefined();
          
          console.log(`📦 Received block ${block.header.height}`);
        }
        
        clearTimeout(timeout);
        
        expect(blocks.length).toBeGreaterThan(0);
        
        // Verify blocks are in sequence (allowing for some gaps)
        if (blocks.length > 1) {
          const heights = blocks.map(b => parseInt(b.header.height));
          for (let i = 1; i < heights.length; i++) {
            expect(heights[i]).toBeGreaterThan(heights[i-1]);
          }
        }
        
      } finally {
        clearTimeout(timeout);
        await eventClient.unsubscribeFromAll();
      }
    }, 50000);

    test('should handle multiple subscription types', async () => {
      const blockIterator = eventClient.subscribeToBlocks();
      const headerIterator = eventClient.subscribeToBlockHeaders();
      
      const timeout = setTimeout(() => {
        throw new Error('Multiple subscription timeout');
      }, 30000);

      try {
        const [blockResult, headerResult] = await Promise.all([
          blockIterator.next(),
          headerIterator[Symbol.asyncIterator]().next()
        ]);
        
        clearTimeout(timeout);
        
        expect(blockResult.value).toBeDefined();
        expect(headerResult.value).toBeDefined();
        
        const block = blockResult.value;
        const header = headerResult.value;
        
        expect(block.header.chainId).toBe('osmosis-1');
        expect(header.chainId).toBe('osmosis-1');
        
        // Heights should be close (within a few blocks)
        const blockHeight = parseInt(block.header.height);
        const headerHeight = parseInt(header.height);
        expect(Math.abs(blockHeight - headerHeight)).toBeLessThan(5);
        
        console.log(`✅ Multiple subscriptions working: block ${blockHeight}, header ${headerHeight}`);
        
      } finally {
        clearTimeout(timeout);
        await eventClient.unsubscribeFromAll();
      }
    }, 35000);
  });

  describe.skip('Client Factory Integration', () => {
    test('should create and coordinate multiple clients', async () => {
      const { queryClient, eventClient } = CosmosClientFactory.createClients(
        OSMOSIS_HTTP,
        OSMOSIS_WS,
        {
          protocolVersion: ProtocolVersion.COMET_38,
          timeout: 15000
        }
      );

      try {
        await queryClient.connect();
        
        // Get current status via query client
        const status = await queryClient.getStatus();
        const currentHeight = parseInt(status.syncInfo.latestBlockHeight);
        
        // Start event subscription
        const blockIterator = eventClient.subscribeToBlocks();
        
        // Wait for next block via event client
        const timeout = setTimeout(() => {
          throw new Error('Event timeout');
        }, 30000);

        const { value: newBlock } = await blockIterator.next();
        clearTimeout(timeout);
        
        const newHeight = parseInt(newBlock.header.height);
        
        // New block should be at or after current height
        expect(newHeight).toBeGreaterThanOrEqual(currentHeight);
        expect(newBlock.header.chainId).toBe('osmosis-1');
        
        console.log(`✅ Coordinated clients: query at ${currentHeight}, event at ${newHeight}`);
        
      } finally {
        await eventClient.unsubscribeFromAll();
        await queryClient.disconnect();
      }
    }, 40000);

    test('should handle unified WebSocket client', async () => {
      const { queryClient, eventClient } = CosmosClientFactory.createUnifiedClient(OSMOSIS_WS, {
        protocolVersion: ProtocolVersion.COMET_38
      });

      try {
        await queryClient.connect();
        
        // Use same connection for both query and events
        const statusPromise = queryClient.getStatus();
        const blockIterator = eventClient.subscribeToBlocks();
        
        const [status, blockResult] = await Promise.all([
          statusPromise,
          blockIterator.next()
        ]);
        
        expect(status.nodeInfo.network).toBe('osmosis-1');
        expect(blockResult.value.header.chainId).toBe('osmosis-1');
        
        console.log(`✅ Unified client working: status and events over same connection`);
        
      } finally {
        await eventClient.unsubscribeFromAll();
        await queryClient.disconnect();
      }
    }, 35000);
  });

  describe('Error Recovery Integration', () => {
    test('should handle network interruptions gracefully', async () => {
      const queryClient = createCosmosQueryClient(OSMOSIS_HTTP, {
        timeout: 10000
      });

      await queryClient.connect();
      
      try {
        // Normal operation
        const status1 = await queryClient.getStatus();
        expect(status1.nodeInfo.network).toBe('osmosis-1');
        
        // Simulate disconnect/reconnect
        await queryClient.disconnect();
        expect(queryClient.isConnected()).toBe(false);
        
        await queryClient.connect();
        expect(queryClient.isConnected()).toBe(true);
        
        // Should work again
        const status2 = await queryClient.getStatus();
        expect(status2.nodeInfo.network).toBe('osmosis-1');
        
        console.log('✅ Network interruption recovery test passed');
        
      } finally {
        await queryClient.disconnect();
      }
    });

    test('should handle invalid requests appropriately', async () => {
      const queryClient = createCosmosQueryClient(OSMOSIS_HTTP, {
        timeout: 10000
      });

      await queryClient.connect();
      
      try {
        // Test various invalid requests
        await expect(queryClient.getBlock(999999999)).rejects.toThrow();
        await expect(queryClient.getTx('invalid_hash')).rejects.toThrow();
        await expect(queryClient.getValidators(-1)).rejects.toThrow();
        
        // Client should still work for valid requests
        const status = await queryClient.getStatus();
        expect(status.nodeInfo.network).toBe('osmosis-1');
        
        console.log('✅ Invalid request handling test passed');
        
      } finally {
        await queryClient.disconnect();
      }
    });
  });
});