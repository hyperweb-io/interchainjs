// networks/ethereum/src/client-factory.ts

import { HttpRpcClient, WebSocketRpcClient, HttpEndpoint, WebSocketEndpoint, ReconnectOptions } from '@interchainjs/utils';
import { EthereumQueryClient } from './query';
import { EthereumAdapter } from './adapters';
import { IEthereumQueryClient } from './types/ethereum-client-interfaces';

export interface ClientOptions {
  timeout?: number;
  headers?: Record<string, string>;
}

export interface WebSocketClientOptions extends ClientOptions {
  reconnect?: ReconnectOptions;
}

/**
 * Factory for creating Ethereum clients
 */
export class EthereumClientFactory {

  /**
   * Create an Ethereum query client using HTTP transport
   */
  static async createQueryClient(
    endpoint: string | HttpEndpoint,
    options: ClientOptions = {}
  ): Promise<IEthereumQueryClient> {
    const protocolAdapter = new EthereumAdapter();
    const rpcClient = new HttpRpcClient(endpoint, {
      timeout: options.timeout,
      headers: options.headers
    });

    const client = new EthereumQueryClient(rpcClient, protocolAdapter);
    await client.connect();
    return client;
  }

  /**
   * Create an Ethereum query client using WebSocket transport
   */
  static async createWebSocketQueryClient(
    endpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): Promise<IEthereumQueryClient> {
    const protocolAdapter = new EthereumAdapter();
    const rpcClient = new WebSocketRpcClient(endpoint, {
      reconnect: options.reconnect
    });

    const client = new EthereumQueryClient(rpcClient, protocolAdapter);
    await client.connect();
    return client;
  }

  /**
   * Create both HTTP and WebSocket query clients sharing the same protocol adapter
   */
  static async createClients(
    httpEndpoint: string | HttpEndpoint,
    wsEndpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): Promise<{ queryClient: IEthereumQueryClient; wsQueryClient: IEthereumQueryClient }> {
    const protocolAdapter = new EthereumAdapter();

    const httpRpcClient = new HttpRpcClient(httpEndpoint, {
      timeout: options.timeout,
      headers: options.headers
    });

    const wsRpcClient = new WebSocketRpcClient(wsEndpoint, {
      reconnect: options.reconnect
    });

    const httpQueryClient = new EthereumQueryClient(httpRpcClient, protocolAdapter);
    const wsQueryClient = new EthereumQueryClient(wsRpcClient, protocolAdapter);

    // Connect both clients
    await httpQueryClient.connect();
    await wsQueryClient.connect();

    return {
      queryClient: httpQueryClient,
      wsQueryClient: wsQueryClient
    };
  }

  /**
   * Create a unified client using WebSocket for both queries and potential future event support
   */
  static async createUnifiedClient(
    endpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): Promise<IEthereumQueryClient> {
    return this.createWebSocketQueryClient(endpoint, options);
  }
}

// Convenience functions (following Cosmos patterns)
export async function createEthereumQueryClient(
  endpoint: string | HttpEndpoint,
  options: ClientOptions = {}
): Promise<IEthereumQueryClient> {
  return EthereumClientFactory.createQueryClient(endpoint, options);
}
