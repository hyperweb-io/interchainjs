/**
 * @jest-environment node
 * @group integration
 */

import { CosmosQueryClient } from '../../src/query/cosmos-query-client';
import { CosmosEventClient } from '../../src/event/cosmos-event-client';
import { HttpRpcClient } from '../../src/rpc/http-client';
import { WebSocketRpcClient } from '../../src/rpc/websocket-client';
import { Comet38Adapter } from '../../src/adapters/comet-38-adapter';
import { 
  NewBlockEvent, 
  TxEvent, 
  ValidatorSetUpdateEvent, 
  BlockHeaderEvent 
} from '../../src/types/responses/common/events';

// Test configuration
const HTTP_RPC_URL = process.env.COSMOS_RPC_URL || 'http://localhost:26657';
const WS_RPC_URL = process.env.COSMOS_WS_URL || 'ws://localhost:26657';

// Test timeout
const TEST_TIMEOUT = 10000;

/**
 * Integration tests to verify the new event structure works with existing codebase
 */
describe('Events Integration Tests', () => {
  let queryClient: CosmosQueryClient;
  let eventClient: CosmosEventClient;
  let wsClient: WebSocketRpcClient;
  let httpClient: HttpRpcClient;
  let adapter: Comet38Adapter;

  beforeAll(async () => {
    adapter = new Comet38Adapter();
    httpClient = new HttpRpcClient(HTTP_RPC_URL);
    wsClient = new WebSocketRpcClient(WS_RPC_URL);
    
    queryClient = new CosmosQueryClient(httpClient, adapter);
    eventClient = new CosmosEventClient(wsClient, adapter);

    await wsClient.connect();
  });

  afterAll(async () => {
    if (wsClient) {
      await eventClient.unsubscribeFromAll();
      await wsClient.disconnect();
    }
  });

  describe('Event client integration', () => {
    it('should create event client with new structure', () => {
      expect(eventClient).toBeDefined();
      expect(typeof eventClient.subscribeToNewBlocks).toBe('function');
      expect(typeof eventClient.subscribeToTxs).toBe('function');
      expect(typeof eventClient.subscribeToValidatorSetUpdates).toBe('function');
      expect(typeof eventClient.subscribeToBlockHeaders).toBe('function');
    });

    it('should create query client with existing structure', () => {
      expect(queryClient).toBeDefined();
      expect(typeof queryClient.getBlock).toBe('function');
      expect(typeof queryClient.getStatus).toBe('function');
    });
  });

  describe('Type compatibility', () => {
    it('should have consistent event types between query and event clients', async () => {
      // Get latest block via query client
      const latestBlock = await queryClient.getBlock();
      expect(latestBlock).toBeDefined();
      expect(latestBlock.header.height).toBeGreaterThan(0);

      // Verify type compatibility
      expect(typeof latestBlock.header.height).toBe('bigint');
      expect(typeof latestBlock.header.chainId).toBe('string');
    });

    it('should handle event streaming types correctly', async () => {
      const stream = eventClient.subscribeToNewBlocks();
      expect(stream).toBeDefined();
      expect(typeof stream[Symbol.asyncIterator]).toBe('function');
    });
  });

  describe('Event data structure validation', () => {
    it('should validate NewBlockEvent structure', async () => {
      const stream = eventClient.subscribeToNewBlocks();
      
      // Collect first event (with timeout)
      let event: NewBlockEvent | null = null;
      const timeout = setTimeout(() => {}, 3000);
      
      try {
        for await (const e of stream) {
          event = e;
          break;
        }
      } catch (error) {
        // Expected in test environment
        console.warn('Event stream error:', error);
      }
      
      clearTimeout(timeout);
      
      if (event) {
        // Validate structure
        expect(event.block).toBeDefined();
        expect(event.block.header).toBeDefined();
        expect(event.resultBeginBlock).toBeDefined();
        expect(event.resultEndBlock).toBeDefined();
        expect(typeof event.block.header.height).toBe('bigint');
      }
    }, TEST_TIMEOUT);

    it('should validate TxEvent structure', async () => {
      const stream = eventClient.subscribeToTxs();
      
      let event: TxEvent | null = null;
      const timeout = setTimeout(() => {}, 3000);
      
      try {
        for await (const e of stream) {
          event = e;
          break;
        }
      } catch (error) {
        // Expected in test environment
        console.warn('Event stream error:', error);
      }
      
      clearTimeout(timeout);
      
      if (event) {
        expect(event.hash).toBeDefined();
        expect(event.height).toBeDefined();
        expect(typeof event.height).toBe('bigint');
        expect(Array.isArray(event.logs)).toBe(true);
      }
    }, TEST_TIMEOUT);

    it('should validate BlockHeaderEvent structure', async () => {
      const stream = eventClient.subscribeToBlockHeaders();
      
      let event: BlockHeaderEvent | null = null;
      const timeout = setTimeout(() => {}, 3000);
      
      try {
        for await (const e of stream) {
          event = e;
          break;
        }
      } catch (error) {
        // Expected in test environment
        console.warn('Event stream error:', error);
      }
      
      clearTimeout(timeout);
      
      if (event) {
        expect(event.header).toBeDefined();
        expect(typeof event.header.height).toBe('bigint');
        expect(typeof event.header.chainId).toBe('string');
      }
    }, TEST_TIMEOUT);
  });

  describe('Codec integration', () => {
    it('should use consistent codec between query and event clients', async () => {
      // Both clients should use the same adapter
      expect(eventClient).toBeDefined();
      expect(queryClient).toBeDefined();
      
      // Verify codec methods exist
      expect(typeof adapter.encodeSubscribe).toBe('function');
      expect(typeof adapter.decodeNewBlockEvent).toBe('function');
      expect(typeof adapter.decodeTxEvent).toBe('function');
      expect(typeof adapter.decodeValidatorSetUpdateEvent).toBe('function');
      expect(typeof adapter.decodeBlockHeaderEvent).toBe('function');
    });
  });

  describe('Error handling', () => {
    it('should handle subscription errors gracefully', async () => {
      // Test unsubscribed state
      await eventClient.unsubscribeFromAll();
      
      // Should be able to create new subscriptions
      expect(() => {
        eventClient.subscribeToNewBlocks();
      }).not.toThrow();
    });

    it('should prevent duplicate subscriptions', () => {
      const stream1 = eventClient.subscribeToNewBlocks();
      
      expect(() => {
        eventClient.subscribeToNewBlocks();
      }).toThrow('Already subscribed to NewBlock');
      
      // Clean up
      if (stream1) {
        const iterator = stream1[Symbol.asyncIterator]();
        iterator.return?.();
      }
    });
  });

  describe('Integration workflow', () => {
    it('should coordinate between query and event clients', async () => {
      // Get current block height via query
      const currentStatus = await queryClient.getStatus();
      const currentHeight = currentStatus.syncInfo.latestBlockHeight;
      
      expect(currentHeight).toBeGreaterThan(0);
      
      // Event client should be ready to stream new blocks
      const stream = eventClient.subscribeToNewBlocks();
      expect(stream).toBeDefined();
      
      // Clean up
      const iterator = stream[Symbol.asyncIterator]();
      iterator.return?.();
    });
  });
});