// networks/cosmos/starship/__tests__/queryclient/rpc-clients.test.ts
import { describe, test, expect, beforeAll, afterAll } from '@jest/globals';
import { 
  HttpRpcClient,
  WebSocketRpcClient,
  NetworkError,
  TimeoutError,
  RpcMethod
} from '@interchainjs/cosmos';

describe('RPC Clients', () => {
  const OSMOSIS_HTTP = 'https://rpc.osmosis.zone/';
  const OSMOSIS_WS = 'wss://rpc.osmosis.zone/websocket';

  describe('HTTP RPC Client', () => {
    let httpClient: HttpRpcClient;

    beforeAll(async () => {
      httpClient = new HttpRpcClient(OSMOSIS_HTTP, {
        timeout: 15000,
        headers: {
          'User-Agent': 'InterchainJS-Test/1.0.0'
        }
      });
      await httpClient.connect();
    });

    afterAll(async () => {
      if (httpClient) {
        await httpClient.disconnect();
      }
    });

    test('should connect and disconnect properly', async () => {
      expect(httpClient.isConnected()).toBe(true);
      expect(httpClient.endpoint).toBe(OSMOSIS_HTTP);
      
      await httpClient.disconnect();
      expect(httpClient.isConnected()).toBe(false);
      
      await httpClient.connect();
      expect(httpClient.isConnected()).toBe(true);
    });

    test('should make successful RPC calls', async () => {
      const result = await httpClient.call(RpcMethod.STATUS);
      
      expect(result).toBeDefined();
      expect((result as any).node_info).toBeDefined();
      expect((result as any).sync_info).toBeDefined();
      expect((result as any).validator_info).toBeDefined();
      expect((result as any).node_info.network).toBe('osmosis-1');
    });

    test('should handle RPC calls with parameters', async () => {
      const result = await httpClient.call(RpcMethod.BLOCK, { height: "1000000" });
      
      expect(result).toBeDefined();
      expect((result as any).block).toBeDefined();
      expect((result as any).header).toBeDefined();
      expect((result as any).header.height).toBe("1000000");
    });

    test('should handle timeout errors', async () => {
      const shortTimeoutClient = new HttpRpcClient(OSMOSIS_HTTP, {
        timeout: 1 // 1ms timeout
      });
      await shortTimeoutClient.connect();
      
      await expect(shortTimeoutClient.call(RpcMethod.STATUS)).rejects.toThrow(TimeoutError);
      
      await shortTimeoutClient.disconnect();
    });

    test('should handle network errors', async () => {
      const invalidClient = new HttpRpcClient('https://invalid.endpoint.test/', {
        timeout: 5000
      });
      await invalidClient.connect();
      
      await expect(invalidClient.call(RpcMethod.STATUS)).rejects.toThrow(NetworkError);
      
      await invalidClient.disconnect();
    });

    test('should handle RPC errors', async () => {
      await expect(httpClient.call(RpcMethod.BLOCK, { height: "999999999" })).rejects.toThrow();
    });

    test('should not support streaming operations', () => {
      expect(() => {
        httpClient.subscribe(RpcMethod.STATUS);
      }).toThrow('HTTP client does not support streaming operations');
    });

    test('should handle different endpoint configurations', async () => {
      const configClient = new HttpRpcClient({
        url: OSMOSIS_HTTP,
        timeout: 10000,
        headers: { 'Custom-Header': 'test-value' }
      });
      
      await configClient.connect();
      expect(configClient.endpoint).toBe(OSMOSIS_HTTP);
      
      const result = await configClient.call(RpcMethod.STATUS);
      expect((result as any).node_info.network).toBe('osmosis-1');
      
      await configClient.disconnect();
    });
  });

  describe('WebSocket RPC Client', () => {
    let wsClient: WebSocketRpcClient;

    beforeAll(async () => {
      wsClient = new WebSocketRpcClient(OSMOSIS_WS, {
        reconnect: {
          maxRetries: 3,
          retryDelay: 1000,
          exponentialBackoff: true
        }
      });
    });

    afterAll(async () => {
      if (wsClient) {
        await wsClient.disconnect();
      }
    });

    test('should connect and disconnect properly', async () => {
      await wsClient.connect();
      expect(wsClient.isConnected()).toBe(true);
      expect(wsClient.endpoint).toBe(OSMOSIS_WS);
      
      await wsClient.disconnect();
      expect(wsClient.isConnected()).toBe(false);
    });

    test('should make successful RPC calls', async () => {
      await wsClient.connect();
      
      const result = await wsClient.call(RpcMethod.STATUS);
      
      expect(result).toBeDefined();
      expect((result as any).node_info).toBeDefined();
      expect((result as any).sync_info).toBeDefined();
      expect((result as any).validator_info).toBeDefined();
      expect((result as any).node_info.network).toBe('osmosis-1');
    });

    test('should handle RPC calls with parameters', async () => {
      const result = await wsClient.call(RpcMethod.BLOCK, { height: "1000000" });
      
      expect(result).toBeDefined();
      expect((result as any).block).toBeDefined();
      expect((result as any).header).toBeDefined();
      expect((result as any).header.height).toBe("1000000");
    });

    test('should support streaming operations', async () => {
      const subscription = wsClient.subscribe('subscribe', { query: "tm.event='NewBlock'" });
      
      expect(subscription).toBeDefined();
      expect(typeof subscription[Symbol.asyncIterator]).toBe('function');
      
      // Get first event to verify subscription works
      const timeout = setTimeout(() => {
        throw new Error('Subscription timeout');
      }, 30000);

      try {
        const { value, done } = await subscription[Symbol.asyncIterator]().next();
        clearTimeout(timeout);
        
        expect(done).toBe(false);
        expect(value).toBeDefined();
        expect(value.data).toBeDefined();
        expect(value.data.type).toBe('tendermint/event/NewBlock');
        
      } finally {
        clearTimeout(timeout);
        // Clean up subscription
        await subscription[Symbol.asyncIterator]().return?.();
      }
    }, 35000);

    test('should handle multiple concurrent subscriptions', async () => {
      const blockSub = wsClient.subscribe('subscribe', { query: "tm.event='NewBlock'" });
      const headerSub = wsClient.subscribe('subscribe', { query: "tm.event='NewBlockHeader'" });
      
      const timeout = setTimeout(() => {
        throw new Error('Multiple subscription timeout');
      }, 30000);

      try {
        const [blockResult, headerResult] = await Promise.all([
          blockSub[Symbol.asyncIterator]().next(),
          headerSub[Symbol.asyncIterator]().next()
        ]);
        
        clearTimeout(timeout);
        
        expect(blockResult.value).toBeDefined();
        expect(headerResult.value).toBeDefined();
        expect(blockResult.value.data.type).toBe('tendermint/event/NewBlock');
        expect(headerResult.value.data.type).toBe('tendermint/event/NewBlockHeader');
        
      } finally {
        clearTimeout(timeout);
        await blockSub[Symbol.asyncIterator]().return?.();
        await headerSub[Symbol.asyncIterator]().return?.();
      }
    }, 35000);

    test('should handle connection errors', async () => {
      const invalidClient = new WebSocketRpcClient('wss://invalid.endpoint.test/websocket');
      
      await expect(invalidClient.connect()).rejects.toThrow();
    });

    test('should handle different endpoint configurations', async () => {
      const configClient = new WebSocketRpcClient({
        url: OSMOSIS_WS,
        protocols: ['tendermint-rpc']
      });
      
      await configClient.connect();
      expect(configClient.endpoint).toBe(OSMOSIS_WS);
      
      const result = await configClient.call(RpcMethod.STATUS);
      expect((result as any).node_info.network).toBe('osmosis-1');
      
      await configClient.disconnect();
    });

    test('should handle reconnection scenarios', async () => {
      const reconnectClient = new WebSocketRpcClient(OSMOSIS_WS, {
        reconnect: {
          maxRetries: 2,
          retryDelay: 500,
          exponentialBackoff: false
        }
      });
      
      await reconnectClient.connect();
      expect(reconnectClient.isConnected()).toBe(true);
      
      // Simulate connection loss by disconnecting
      await reconnectClient.disconnect();
      expect(reconnectClient.isConnected()).toBe(false);
      
      // Reconnect should work
      await reconnectClient.connect();
      expect(reconnectClient.isConnected()).toBe(true);
      
      await reconnectClient.disconnect();
    });
  });

  describe('Error Handling Comparison', () => {
    test('both clients should handle similar errors consistently', async () => {
      const httpClient = new HttpRpcClient(OSMOSIS_HTTP, { timeout: 10000 });
      const wsClient = new WebSocketRpcClient(OSMOSIS_WS);
      
      await httpClient.connect();
      await wsClient.connect();
      
      try {
        // Both should handle invalid block height similarly
        await expect(httpClient.call(RpcMethod.BLOCK, { height: "999999999" })).rejects.toThrow();
        await expect(wsClient.call(RpcMethod.BLOCK, { height: "999999999" })).rejects.toThrow();
        
        // Both should handle invalid method similarly
        await expect(httpClient.call('invalid_method' as any)).rejects.toThrow();
        await expect(wsClient.call('invalid_method' as any)).rejects.toThrow();
        
      } finally {
        await httpClient.disconnect();
        await wsClient.disconnect();
      }
    });
  });
});