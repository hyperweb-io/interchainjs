/**
 * E2E test for Cosmos events based on starship environment
 * Tests the event subscription functionality against real blockchain events
 */

import { WebSocketRpcClient } from '@interchainjs/networks/cosmos/src/rpc/websocket-client';
import { CosmosEventClient } from '@interchainjs/networks/cosmos/src/event/cosmos-event-client';
import { BaseAdapter } from '@interchainjs/networks/cosmos/src/adapters/base';

describe('Cosmos Events E2E Tests', () => {
  let rpcClient: WebSocketRpcClient;
  let eventClient: CosmosEventClient;
  let baseAdapter: BaseAdapter;

  beforeAll(async () => {
    // Initialize WebSocket client for starship osmosis
    const wsEndpoint = 'ws://localhost:26657/websocket';
    rpcClient = new WebSocketRpcClient(wsEndpoint);
    baseAdapter = new BaseAdapter();
    eventClient = new CosmosEventClient(rpcClient, baseAdapter);
    
    await rpcClient.connect();
  });

  afterAll(async () => {
    if (rpcClient.isConnected()) {
      await eventClient.unsubscribeFromAll();
      await rpcClient.disconnect();
    }
  });

  test('should subscribe to new blocks', async () => {
    const blocks: any[] = [];
    const timeoutMs = 15000; // 15 seconds timeout

    const blockGenerator = eventClient.subscribeToBlocks();
    
    // Collect blocks for testing
    const collectBlocks = async () => {
      for await (const block of blockGenerator) {
        blocks.push(block);
        if (blocks.length >= 2) break; // Collect 2 blocks for testing
      }
    };

    // Race between block collection and timeout
    await Promise.race([
      collectBlocks(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout waiting for blocks')), timeoutMs)
      )
    ]);

    expect(blocks.length).toBeGreaterThan(0);
    expect(blocks[0]).toHaveProperty('header');
    expect(blocks[0].header).toHaveProperty('height');
    expect(blocks[0].header).toHaveProperty('time');
    expect(typeof blocks[0].header.height).toBe('bigint');
  });

  test('should subscribe to block headers', async () => {
    const headers: any[] = [];
    const timeoutMs = 15000;

    const headerGenerator = eventClient.subscribeToBlockHeaders();
    
    const collectHeaders = async () => {
      for await (const header of headerGenerator) {
        headers.push(header);
        if (headers.length >= 2) break;
      }
    };

    await Promise.race([
      collectHeaders(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout waiting for headers')), timeoutMs)
      )
    ]);

    expect(headers.length).toBeGreaterThan(0);
    expect(headers[0]).toHaveProperty('height');
    expect(headers[0]).toHaveProperty('time');
    expect(typeof headers[0].height).toBe('bigint');
  });

  test('should subscribe to transactions', async () => {
    const txs: any[] = [];
    const timeoutMs = 20000; // Longer timeout for transactions

    const txGenerator = eventClient.subscribeToTxs();
    
    const collectTxs = async () => {
      for await (const tx of txGenerator) {
        txs.push(tx);
        if (txs.length >= 1) break; // Collect 1 transaction
      }
    };

    await Promise.race([
      collectTxs(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout waiting for transactions')), timeoutMs)
      )
    ]);

    expect(txs.length).toBeGreaterThan(0);
    expect(txs[0]).toHaveProperty('hash');
    expect(txs[0]).toHaveProperty('height');
  });

  test('should handle custom transaction queries', async () => {
    const txs: any[] = [];
    const timeoutMs = 20000;

    // Subscribe to transactions with specific query
    const txGenerator = eventClient.subscribeToTxs(
      "message.module='bank'"
    );
    
    const collectTxs = async () => {
      for await (const tx of txGenerator) {
        txs.push(tx);
        if (txs.length >= 1) break;
      }
    };

    await Promise.race([
      collectTxs(),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout waiting for bank transactions')), timeoutMs)
      )
    ]);

    expect(txs.length).toBeGreaterThan(0);
  });

  test('should handle subscription errors gracefully', async () => {
    // Test with invalid WebSocket endpoint
    const invalidRpcClient = new WebSocketRpcClient('ws://localhost:99999/websocket');
    const invalidEventClient = new CosmosEventClient(invalidRpcClient, baseAdapter);

    await expect(async () => {
      const generator = invalidEventClient.subscribeToBlocks();
      await generator.next();
    }).rejects.toThrow();
  });

  test('should unsubscribe from all events', async () => {
    const generator = eventClient.subscribeToBlocks();
    
    // Start subscription
    const subscriptionPromise = generator.next();
    
    // Unsubscribe
    await eventClient.unsubscribeFromAll();
    
    // Verify subscription is closed
    await expect(subscriptionPromise).rejects.toThrow();
  });
});