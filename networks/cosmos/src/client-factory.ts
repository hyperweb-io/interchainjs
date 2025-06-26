// networks/cosmos/src/client-factory.ts
import { HttpRpcClient, WebSocketRpcClient, HttpEndpoint, WebSocketEndpoint } from './rpc/index.js';
import { CosmosQueryClient } from './query/index.js';
import { CosmosEventClient } from './event/index.js';
import { createProtocolAdapter, IProtocolAdapter } from './protocol-adapter.js';
import { ICosmosQueryClient, ICosmosEventClient } from './types/cosmos-client-interfaces.js';
import { ProtocolVersion } from './types/protocol.js';

export interface ClientOptions {
  protocolVersion?: ProtocolVersion;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface WebSocketClientOptions extends ClientOptions {
  reconnect?: {
    maxRetries?: number;
    retryDelay?: number;
    exponentialBackoff?: boolean;
  };
}

export class CosmosClientFactory {
  /**
   * Create a Cosmos query client using HTTP transport
   */
  static createQueryClient(
    endpoint: string | HttpEndpoint,
    options: ClientOptions = {}
  ): ICosmosQueryClient {
    const protocolAdapter = createProtocolAdapter(options.protocolVersion);
    const rpcClient = new HttpRpcClient(endpoint, {
      timeout: options.timeout,
      headers: options.headers
    });
    
    return new CosmosQueryClient(rpcClient, protocolAdapter);
  }

  /**
   * Create a Cosmos event client using WebSocket transport
   */
  static createEventClient(
    endpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): ICosmosEventClient {
    const protocolAdapter = createProtocolAdapter(options.protocolVersion);
    const rpcClient = new WebSocketRpcClient(endpoint, {
      reconnect: options.reconnect
    });
    
    return new CosmosEventClient(rpcClient, protocolAdapter);
  }

  /**
   * Create both query and event clients sharing the same protocol adapter
   */
  static createClients(
    httpEndpoint: string | HttpEndpoint,
    wsEndpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): { queryClient: ICosmosQueryClient; eventClient: ICosmosEventClient } {
    const protocolAdapter = createProtocolAdapter(options.protocolVersion);
    
    const httpRpcClient = new HttpRpcClient(httpEndpoint, {
      timeout: options.timeout,
      headers: options.headers
    });
    
    const wsRpcClient = new WebSocketRpcClient(wsEndpoint, {
      reconnect: options.reconnect
    });
    
    return {
      queryClient: new CosmosQueryClient(httpRpcClient, protocolAdapter),
      eventClient: new CosmosEventClient(wsRpcClient, protocolAdapter)
    };
  }

  /**
   * Create a query client with WebSocket support (for both queries and events)
   */
  static createUnifiedClient(
    endpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): { queryClient: ICosmosQueryClient; eventClient: ICosmosEventClient } {
    const protocolAdapter = createProtocolAdapter(options.protocolVersion);
    const rpcClient = new WebSocketRpcClient(endpoint, {
      reconnect: options.reconnect
    });
    
    return {
      queryClient: new CosmosQueryClient(rpcClient, protocolAdapter),
      eventClient: new CosmosEventClient(rpcClient, protocolAdapter)
    };
  }
}

// Convenience functions
export function createCosmosQueryClient(
  endpoint: string,
  options?: ClientOptions
): ICosmosQueryClient {
  return CosmosClientFactory.createQueryClient(endpoint, options);
}

export function createCosmosEventClient(
  endpoint: string,
  options?: WebSocketClientOptions
): ICosmosEventClient {
  return CosmosClientFactory.createEventClient(endpoint, options);
}