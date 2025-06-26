// networks/cosmos/starship/__tests__/queryclient/event-client.test.ts
import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { 
  CosmosClientFactory,
  ICosmosEventClient,
  EventType
} from '@interchainjs/cosmos';

describe.skip('Cosmos Event Client', () => {
  let eventClient: ICosmosEventClient;
  const OSMOSIS_WS = 'wss://rpc.osmosis.zone/websocket';

  beforeAll(async () => {
    eventClient = CosmosClientFactory.createEventClient(OSMOSIS_WS, {
      timeout: 15000,
      reconnect: {
        maxRetries: 3,
        retryDelay: 1000,
        exponentialBackoff: true
      }
    });
  });

  afterAll(async () => {
    if (eventClient) {
      await eventClient.unsubscribeFromAll();
    }
  });

  describe('Event Subscriptions', () => {
    test('should subscribe to new blocks', async () => {
      const blockIterator = eventClient.subscribeToBlocks();
      const timeout = setTimeout(() => {
        throw new Error('Block subscription timeout');
      }, 30000); // 30 second timeout

      try {
        const { value: firstBlock, done } = await blockIterator.next();
        clearTimeout(timeout);
        
        expect(done).toBe(false);
        expect(firstBlock).toBeDefined();
        expect(firstBlock.header).toBeDefined();
        expect(firstBlock.header.chainId).toBe('osmosis-1');
        expect(firstBlock.header.height).toBeDefined();
        expect(firstBlock.data).toBeDefined();
        expect(Array.isArray(firstBlock.data.txs)).toBe(true);
        
        // Get one more block to ensure streaming works
        const { value: secondBlock } = await blockIterator.next();
        expect(secondBlock).toBeDefined();
        expect(parseInt(secondBlock.header.height)).toBeGreaterThan(parseInt(firstBlock.header.height));
        
      } finally {
        clearTimeout(timeout);
        await eventClient.unsubscribeFromAll();
      }
    }, 35000); // Jest timeout

    test('should subscribe to block headers', async () => {
      const headerIterator = eventClient.subscribeToBlockHeaders();
      const timeout = setTimeout(() => {
        throw new Error('Header subscription timeout');
      }, 30000);

      try {
        const { value: header, done } = await headerIterator[Symbol.asyncIterator]().next();
        clearTimeout(timeout);
        
        expect(done).toBe(false);
        expect(header).toBeDefined();
        expect(header.chainId).toBe('osmosis-1');
        expect(header.height).toBeDefined();
        expect(header.time).toBeDefined();
        expect(header.proposerAddress).toBeDefined();
        
      } finally {
        clearTimeout(timeout);
        await eventClient.unsubscribeFromAll();
      }
    }, 35000);

    test('should subscribe to transactions with query filter', async () => {
      const txIterator = eventClient.subscribeToTxs("message.action='/cosmos.bank.v1beta1.MsgSend'");
      const timeout = setTimeout(() => {
        // This might timeout if no matching transactions occur, which is acceptable
        console.log('No matching transactions found within timeout period');
      }, 20000);

      try {
        const result = await Promise.race([
          txIterator[Symbol.asyncIterator]().next(),
          new Promise(resolve => setTimeout(() => resolve({ value: null as any, done: true }), 20000))
        ]);
        const { value: txEvent, done } = result as any;
        
        clearTimeout(timeout);
        
        if (!done && txEvent) {
          expect(txEvent.tx).toBeDefined();
          expect(txEvent.result).toBeDefined();
          expect(txEvent.tx.hash).toBeDefined();
          expect(txEvent.tx.height).toBeDefined();
        }
        
      } finally {
        clearTimeout(timeout);
        await eventClient.unsubscribeFromAll();
      }
    }, 25000);

    test('should handle subscription errors gracefully', async () => {
      // Test with invalid query
      const invalidIterator = eventClient.subscribeToEvents('invalid_event_type');
      
      await expect(async () => {
        const { value } = await invalidIterator[Symbol.asyncIterator]().next();
      }).rejects.toThrow();
      
      await eventClient.unsubscribeFromAll();
    });
  });

  describe('Subscription Management', () => {
    test('should unsubscribe from all subscriptions', async () => {
      // Start a subscription
      const blockIterator = eventClient.subscribeToBlocks();
      
      // Get first block to ensure subscription is active
      const { value } = await blockIterator.next();
      expect(value).toBeDefined();
      
      // Unsubscribe from all
      await eventClient.unsubscribeFromAll();
      
      // Verify subscription is closed (this might vary based on implementation)
      // The iterator should handle the closed connection gracefully
    });

    test('should handle multiple concurrent subscriptions', async () => {
      const blockIterator = eventClient.subscribeToBlocks();
      const headerIterator = eventClient.subscribeToBlockHeaders();
      
      const timeout = setTimeout(() => {
        throw new Error('Multiple subscription timeout');
      }, 30000);

      try {
        // Get events from both subscriptions
        const [blockResult, headerResult] = await Promise.all([
          blockIterator.next(),
          headerIterator[Symbol.asyncIterator]().next()
        ]);
        
        clearTimeout(timeout);
        
        expect(blockResult.value).toBeDefined();
        expect(headerResult.value).toBeDefined();
        expect(blockResult.value.header.height).toBe(headerResult.value.height);
        
      } finally {
        clearTimeout(timeout);
        await eventClient.unsubscribeFromAll();
      }
    }, 35000);
  });

  describe('Event Types', () => {
    test('should support all event types', () => {
      expect(EventType.NEW_BLOCK).toBe('new_block');
      expect(EventType.NEW_BLOCK_HEADER).toBe('new_block_header');
      expect(EventType.TX).toBe('tx');
      expect(EventType.VALIDATOR_SET_UPDATES).toBe('validator_set_updates');
    });

    test('should subscribe to validator set updates', async () => {
      const validatorIterator = eventClient.subscribeToValidatorSetUpdates();
      
      // Validator set updates are rare, so we'll just test the subscription setup
      // and then unsubscribe quickly
      const timeout = setTimeout(async () => {
        await eventClient.unsubscribeFromAll();
      }, 5000);

      try {
        // Try to get an update, but don't wait too long
        const result = await Promise.race([
          validatorIterator[Symbol.asyncIterator]().next(),
          new Promise(resolve => setTimeout(() => resolve({ done: true }), 5000))
        ]);
        
        clearTimeout(timeout);
        
        if (!(result as any).done && (result as any).value) {
          expect((result as any).value.block).toBeDefined();
          expect((result as any).value.resultEndBlock).toBeDefined();
        }
        
      } finally {
        clearTimeout(timeout);
        await eventClient.unsubscribeFromAll();
      }
    });
  });

  describe('Error Handling', () => {
    test('should handle connection errors', async () => {
      const invalidClient = CosmosClientFactory.createEventClient('wss://invalid.endpoint/', {
        timeout: 5000
      });
      
      await expect(async () => {
        const iterator = invalidClient.subscribeToBlocks();
        await iterator[Symbol.asyncIterator]().next();
      }).rejects.toThrow();
    });

    test('should handle malformed queries', async () => {
      const iterator = eventClient.subscribeToEvents('new_block', { query: 'invalid query syntax' });
      
      await expect(async () => {
        await iterator[Symbol.asyncIterator]().next();
      }).rejects.toThrow();
    });
  });
});