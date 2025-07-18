/**
 * @jest-environment node
 * @group e2e
 * @group starship
 * @group setup
 */

import { CosmosClient } from '../../src/cosmos-client';
import { CosmosEventClient } from '../../src/event/cosmos-event-client';
import { WebSocketRpcClient } from '../../src/rpc/web-socket-rpc-client';
import { Comet38Adapter } from '../../src/adapters/comet-38-adapter';

// Starship configuration
const STARGATE_RPC_URL = 'ws://localhost:26657';
const HTTP_RPC_URL = 'http://localhost:26657';

// Test timeout configuration
const TEST_TIMEOUT = 30000;

/**
 * Setup and validation tests for event client E2E tests
 */
describe('Event Client Setup Tests', () => {
  let eventClient: CosmosEventClient;
  let wsRpcClient: WebSocketRpcClient;
  let httpClient: CosmosClient;

  beforeAll(async () => {
    // Initialize clients for setup testing
    wsRpcClient = new WebSocketRpcClient(STARGATE_RPC_URL);
    const adapter = new Comet38Adapter();
    eventClient = new CosmosEventClient(wsRpcClient, adapter);
    httpClient = new CosmosClient(HTTP_RPC_URL);
  });

  afterAll(async () => {
    if (wsRpcClient) {
      await wsRpcClient.disconnect();
    }
  });

  describe('Connection validation', () => {
    it('should connect to WebSocket RPC endpoint', async () => {
      const client = new WebSocketRpcClient(STARGATE_RPC_URL);
      await client.connect();
      
      expect(client.isConnected()).toBe(true);
      
      await client.disconnect();
      expect(client.isConnected()).toBe(false);
    }, TEST_TIMEOUT);

    it('should connect to HTTP RPC endpoint', async () => {
      const status = await httpClient.status();
      
      expect(status).toBeDefined();
      expect(status.nodeInfo).toBeDefined();
      expect(status.syncInfo).toBeDefined();
    }, TEST_TIMEOUT);

    it('should have synchronized blockchain', async () => {
      const status = await httpClient.status();
      
      // Ensure we're not too far behind
      expect(status.syncInfo.latestBlockHeight).toBeGreaterThan(0);
      expect(status.syncInfo.catchingUp).toBe(false);
    }, TEST_TIMEOUT);
  });

  describe('Event subscription validation', () => {
    it('should create event client successfully', () => {
      expect(eventClient).toBeDefined();
      expect(typeof eventClient.subscribeToNewBlocks).toBe('function');
      expect(typeof eventClient.subscribeToTxs).toBe('function');
      expect(typeof eventClient.subscribeToValidatorSetUpdates).toBe('function');
      expect(typeof eventClient.subscribeToBlockHeaders).toBe('function');
    });

    it('should handle WebSocket connection lifecycle', async () => {
      const client = new WebSocketRpcClient(STARGATE_RPC_URL);
      const adapter = new Comet38Adapter();
      const testEventClient = new CosmosEventClient(client, adapter);

      // Connect
      await client.connect();
      expect(client.isConnected()).toBe(true);

      // Test subscription
      const stream = testEventClient.subscribeToNewBlocks();
      expect(stream).toBeDefined();

      // Disconnect
      await client.disconnect();
      expect(client.isConnected()).toBe(false);

      // Should handle disconnected state gracefully
      const disconnectedStream = testEventClient.subscribeToNewBlocks();
      await expect(async () => {
        for await (const _ of disconnectedStream) {
          break;
        }
      }).rejects.toThrow();
    }, TEST_TIMEOUT);
  });

  describe('Network health check', () => {
    it('should have active validators', async () => {
      const validators = await httpClient.validators({});
      
      expect(validators.validators).toBeDefined();
      expect(validators.validators.length).toBeGreaterThan(0);
      expect(validators.count).toBeGreaterThan(0);
    }, TEST_TIMEOUT);

    it('should have recent blocks', async () => {
      const latest = await httpClient.block();
      
      expect(latest.block).toBeDefined();
      expect(latest.block.header).toBeDefined();
      expect(latest.block.header.height).toBeGreaterThan(0);
    }, TEST_TIMEOUT);

    it('should handle WebSocket reconnection', async () => {
      const client = new WebSocketRpcClient(STARGATE_RPC_URL);
      
      // Connect and disconnect multiple times
      for (let i = 0; i < 3; i++) {
        await client.connect();
        expect(client.isConnected()).toBe(true);
        
        await client.disconnect();
        expect(client.isConnected()).toBe(false);
      }
    }, TEST_TIMEOUT);
  });

  describe('Environment validation', () => {
    it('should validate starship configuration', () => {
      expect(STARGATE_RPC_URL).toBeDefined();
      expect(STARGATE_RPC_URL).toMatch(/^ws:\/\//);
      expect(HTTP_RPC_URL).toBeDefined();
      expect(HTTP_RPC_URL).toMatch(/^http:\/\//);
    });

    it('should check required endpoints', async () => {
      const endpoints = [STARGATE_RPC_URL, HTTP_RPC_URL];
      
      for (const endpoint of endpoints) {
        // Basic connectivity check
        const isWs = endpoint.startsWith('ws');
        
        if (isWs) {
          const client = new WebSocketRpcClient(endpoint);
          try {
            await client.connect();
            expect(client.isConnected()).toBe(true);
            await client.disconnect();
          } catch (error) {
            throw new Error(`Failed to connect to ${endpoint}: ${error}`);
          }
        } else {
          const client = new CosmosClient(endpoint);
          try {
            const status = await client.status();
            expect(status).toBeDefined();
          } catch (error) {
            throw new Error(`Failed to connect to ${endpoint}: ${error}`);
          }
        }
      }
    }, TEST_TIMEOUT);
  });
});