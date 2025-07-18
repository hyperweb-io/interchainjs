/**
 * @jest-environment node
 * @group e2e
 * @group starship
 */

import { CosmosClient } from '../../src/cosmos-client';
import { CosmosEventClient } from '../../src/event/cosmos-event-client';
import { WebSocketRpcClient } from '../../src/rpc/web-socket-rpc-client';
import { Comet38Adapter } from '../../src/adapters/comet-38-adapter';
import { NewBlockEvent, TxEvent, ValidatorSetUpdateEvent, BlockHeaderEvent } from '../../src/types/responses/common/events';

// Starship configuration
const STARGATE_RPC_URL = 'ws://localhost:26657';
const HTTP_RPC_URL = 'http://localhost:26657';

// Test timeout configuration
const TEST_TIMEOUT = 30000; // 30 seconds for starship tests
const EVENT_TIMEOUT = 5000; // 5 seconds to wait for events

// Helper to wait for events with timeout
async function waitForEvent<T>(
  eventStream: AsyncIterable<T>,
  timeoutMs: number = EVENT_TIMEOUT
): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error('Event timeout')), timeoutMs);
  });

  const eventPromise = (async () => {
    for await (const event of eventStream) {
      return event;
    }
    throw new Error('No events received');
  })();

  return Promise.race([eventPromise, timeoutPromise]);
}

describe('Cosmos Event Client E2E Tests', () => {
  let eventClient: CosmosEventClient;
  let wsRpcClient: WebSocketRpcClient;
  let httpClient: CosmosClient;

  beforeAll(async () => {
    // Initialize WebSocket RPC client
    wsRpcClient = new WebSocketRpcClient(STARGATE_RPC_URL);
    await wsRpcClient.connect();

    // Initialize event client
    const adapter = new Comet38Adapter();
    eventClient = new CosmosEventClient(wsRpcClient, adapter);

    // Initialize HTTP client for setup
    httpClient = new CosmosClient(HTTP_RPC_URL);
  });

  afterAll(async () => {
    if (wsRpcClient) {
      await eventClient.unsubscribeFromAll();
      await wsRpcClient.disconnect();
    }
  });

  beforeEach(async () => {
    // Ensure clean state
    await eventClient.unsubscribeFromAll();
  });

  describe('NewBlockEvent subscription', () => {
    it('should subscribe to new blocks and receive events', async () => {
      const startTime = Date.now();
      const eventStream = eventClient.subscribeToNewBlocks();

      const event = await waitForEvent(eventStream);

      expect(event).toBeDefined();
      expect(event.block).toBeDefined();
      expect(event.block.header).toBeDefined();
      expect(event.block.header.height).toBeGreaterThan(0);
      expect(event.block.header.chainId).toBeDefined();
      expect(event.resultBeginBlock).toBeDefined();
      expect(event.resultEndBlock).toBeDefined();

      // Verify block height is increasing
      expect(typeof event.block.header.height).toBe('bigint');
    }, TEST_TIMEOUT);

    it('should receive multiple blocks in sequence', async () => {
      const eventStream = eventClient.subscribeToNewBlocks();
      const events: NewBlockEvent[] = [];

      // Collect first 3 events
      let count = 0;
      for await (const event of eventStream) {
        events.push(event);
        count++;
        if (count >= 3) break;
      }

      expect(events).toHaveLength(3);
      
      // Verify blocks are sequential
      for (let i = 1; i < events.length; i++) {
        expect(events[i].block.header.height).toBe(
          events[i-1].block.header.height + BigInt(1)
        );
      }
    }, TEST_TIMEOUT * 2);
  });

  describe('TxEvent subscription', () => {
    it('should subscribe to transaction events', async () => {
      // Send a test transaction first using HTTP client
      const testTx = await httpClient.broadcastTxSync({
        tx: new Uint8Array([0x0a, 0x0c, 0x0a, 0x0a, 0x73, 0x65, 0x6e, 0x64, 0x10, 0x01, 0x18, 0x01])
      });

      const eventStream = eventClient.subscribeToTxs();
      
      // Wait for transaction event
      const event = await waitForEvent(eventStream);

      expect(event).toBeDefined();
      expect(event.hash).toBeDefined();
      expect(event.height).toBeGreaterThan(0);
      expect(event.result).toBeDefined();
      expect(event.logs).toBeDefined();
    }, TEST_TIMEOUT);

    it('should filter transactions by query', async () => {
      const query = 'tm.event=\'Tx\' AND tx.height > 0';
      const eventStream = eventClient.subscribeToTxs(query);

      const event = await waitForEvent(eventStream);

      expect(event).toBeDefined();
      expect(event.height).toBeGreaterThan(0);
    }, TEST_TIMEOUT);
  });

  describe('ValidatorSetUpdateEvent subscription', () => {
    it('should subscribe to validator set updates', async () => {
      const eventStream = eventClient.subscribeToValidatorSetUpdates();

      const event = await waitForEvent(eventStream, TEST_TIMEOUT);

      expect(event).toBeDefined();
      expect(event.validatorUpdates).toBeDefined();
      expect(Array.isArray(event.validatorUpdates)).toBe(true);
      
      // In starship testnet, expect some validators
      expect(event.validatorUpdates.length).toBeGreaterThan(0);
    }, TEST_TIMEOUT);
  });

  describe('BlockHeaderEvent subscription', () => {
    it('should subscribe to block header events', async () => {
      const eventStream = eventClient.subscribeToBlockHeaders();

      const event = await waitForEvent(eventStream);

      expect(event).toBeDefined();
      expect(event.header).toBeDefined();
      expect(event.header.height).toBeGreaterThan(0);
      expect(event.header.chainId).toBeDefined();
      expect(event.header.time).toBeDefined();
    }, TEST_TIMEOUT);

    it('should contain expected header fields', async () => {
      const eventStream = eventClient.subscribeToBlockHeaders();

      const event = await waitForEvent(eventStream);

      expect(event.header.version).toBeDefined();
      expect(event.header.lastBlockId).toBeDefined();
      expect(event.header.lastCommitHash).toBeDefined();
      expect(event.header.dataHash).toBeDefined();
      expect(event.header.validatorsHash).toBeDefined();
      expect(event.header.nextValidatorsHash).toBeDefined();
      expect(event.header.consensusHash).toBeDefined();
      expect(event.header.appHash).toBeDefined();
      expect(event.header.lastResultsHash).toBeDefined();
      expect(event.header.evidenceHash).toBeDefined();
      expect(event.header.proposerAddress).toBeDefined();
    }, TEST_TIMEOUT);
  });

  describe('Multiple subscriptions', () => {
    it('should handle multiple concurrent subscriptions', async () => {
      const blockStream = eventClient.subscribeToNewBlocks();
      const txStream = eventClient.subscribeToTxs();
      const headerStream = eventClient.subscribeToBlockHeaders();

      const [blockEvent, txEvent, headerEvent] = await Promise.all([
        waitForEvent(blockStream),
        waitForEvent(txStream),
        waitForEvent(headerStream)
      ]);

      expect(blockEvent).toBeDefined();
      expect(txEvent).toBeDefined();
      expect(headerEvent).toBeDefined();
    }, TEST_TIMEOUT);

    it('should properly unsubscribe from all events', async () => {
      const blockStream = eventClient.subscribeToNewBlocks();
      const txStream = eventClient.subscribeToTxs();

      // Start consuming events
      const blockPromise = waitForEvent(blockStream);
      const txPromise = waitForEvent(txStream);

      // Wait for first events
      await Promise.all([blockPromise, txPromise]);

      // Unsubscribe from all
      await eventClient.unsubscribeFromAll();

      // Verify cleanup
      expect(() => {
        eventClient.subscribeToNewBlocks();
        eventClient.subscribeToTxs();
      }).not.toThrow();
    }, TEST_TIMEOUT);
  });

  describe('Error handling', () => {
    it('should handle connection errors gracefully', async () => {
      // Create a disconnected client
      const disconnectedClient = new WebSocketRpcClient('ws://invalid-url:26657');
      const adapter = new Comet38Adapter();
      const badEventClient = new CosmosEventClient(disconnectedClient, adapter);

      const stream = badEventClient.subscribeToNewBlocks();

      await expect(waitForEvent(stream)).rejects.toThrow();
    });

    it('should prevent duplicate subscriptions', async () => {
      const stream1 = eventClient.subscribeToNewBlocks();
      
      // Should throw when trying to subscribe to same event type
      expect(() => {
        eventClient.subscribeToNewBlocks();
      }).toThrow('Already subscribed to NewBlock');

      // Clean up
      for await (const _ of stream1) {
        break;
      }
    });
  });

  describe('Event data validation', () => {
    it('should validate NewBlockEvent structure', async () => {
      const eventStream = eventClient.subscribeToNewBlocks();
      const event = await waitForEvent(eventStream);

      // Verify block structure
      expect(event.block.header.height).toBeInstanceOf(BigInt);
      expect(typeof event.block.header.chainId).toBe('string');
      expect(event.block.header.time).toBeInstanceOf(Date);

      // Verify resultBeginBlock structure
      expect(Array.isArray(event.resultBeginBlock.events)).toBe(true);
      expect(typeof event.resultBeginBlock.events).toBe('object');

      // Verify resultEndBlock structure
      expect(Array.isArray(event.resultEndBlock.validatorUpdates)).toBe(true);
      expect(typeof event.resultEndBlock.events).toBe('object');
    }, TEST_TIMEOUT);

    it('should validate TxEvent structure', async () => {
      const eventStream = eventClient.subscribeToTxs();
      const event = await waitForEvent(eventStream);

      expect(typeof event.hash).toBe('string');
      expect(event.height).toBeInstanceOf(BigInt);
      expect(typeof event.index).toBe('number');
      expect(typeof event.tx).toBe('object');
      expect(Array.isArray(event.logs)).toBe(true);
      expect(typeof event.result).toBe('object');
    }, TEST_TIMEOUT);
  });
});