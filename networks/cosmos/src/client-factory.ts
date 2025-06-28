// networks/cosmos/src/client-factory.ts
import { HttpRpcClient, WebSocketRpcClient, HttpEndpoint, WebSocketEndpoint } from './rpc/index';
import { CosmosQueryClient } from './query/index';
import { CosmosEventClient } from './event/index';
import { createProtocolAdapter, IProtocolAdapter } from './adapters/index';
import { ICosmosQueryClient, ICosmosEventClient } from './types/cosmos-client-interfaces';
import { ProtocolVersion } from './types/protocol';

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
  private static async detectProtocolAdapter(
    endpoint: string | HttpEndpoint
  ): Promise<IProtocolAdapter> {
    // Use a simple client to detect version
    const tempClient = new HttpRpcClient(endpoint);
    await tempClient.connect();

    try {
      const response = await tempClient.call('status') as any;
      const version = response.node_info.version;

      if (version.startsWith('0.34.')) {
        return createProtocolAdapter(ProtocolVersion.TENDERMINT_34);
      } else if (version.startsWith('0.37.')) {
        return createProtocolAdapter(ProtocolVersion.TENDERMINT_37);
      } else if (version.startsWith('0.38.') || version.startsWith('1.0.')) {
        return createProtocolAdapter(ProtocolVersion.COMET_38);
      } else {
        // Fallback to oldest supported version
        return createProtocolAdapter(ProtocolVersion.TENDERMINT_34);
      }
    } finally {
      await tempClient.disconnect();
    }
  }

  private static async getProtocolAdapter(
    endpoint: string | HttpEndpoint,
    providedVersion?: ProtocolVersion
  ): Promise<IProtocolAdapter> {
    const detectedAdapter = await this.detectProtocolAdapter(endpoint);
    
    if (providedVersion) {
      const providedAdapter = createProtocolAdapter(providedVersion);
      const detectedVersion = detectedAdapter.getVersion();
      const providedVersionValue = providedAdapter.getVersion();
      
      if (detectedVersion !== providedVersionValue) {
        console.warn(
          `Protocol version mismatch: provided version '${providedVersionValue}' does not match detected version '${detectedVersion}'. Using detected version.`
        );
      }
    }
    
    return detectedAdapter;
  }

  private static convertToHttpEndpoint(endpoint: string | WebSocketEndpoint): string | HttpEndpoint {
    if (typeof endpoint === 'string') {
      // Convert ws:// or wss:// to http:// or https://
      return endpoint.replace(/^ws(s)?:/, 'http$1:');
    } else {
      // Convert WebSocketEndpoint to HttpEndpoint
      return {
        url: endpoint.url.replace(/^ws(s)?:/, 'http$1:'),
        timeout: 10000, // Default timeout for detection
        headers: {}
      };
    }
  }
  /**
   * Create a Cosmos query client using HTTP transport
   */
  static async createQueryClient(
    endpoint: string | HttpEndpoint,
    options: ClientOptions = {}
  ): Promise<ICosmosQueryClient> {
    const protocolAdapter = await this.getProtocolAdapter(endpoint, options.protocolVersion);
    const rpcClient = new HttpRpcClient(endpoint, {
      timeout: options.timeout,
      headers: options.headers
    });
    
    return new CosmosQueryClient(rpcClient, protocolAdapter);
  }

  /**
   * Create a Cosmos event client using WebSocket transport
   */
  static async createEventClient(
    endpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): Promise<ICosmosEventClient> {
    // For WebSocket, we need to convert the endpoint to HTTP for detection
    const httpEndpoint = this.convertToHttpEndpoint(endpoint);
    const protocolAdapter = await this.getProtocolAdapter(httpEndpoint, options.protocolVersion);
    const rpcClient = new WebSocketRpcClient(endpoint, {
      reconnect: options.reconnect
    });
    
    return new CosmosEventClient(rpcClient, protocolAdapter);
  }

  /**
   * Create both query and event clients sharing the same protocol adapter
   */
  static async createClients(
    httpEndpoint: string | HttpEndpoint,
    wsEndpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): Promise<{ queryClient: ICosmosQueryClient; eventClient: ICosmosEventClient }> {
    const protocolAdapter = await this.getProtocolAdapter(httpEndpoint, options.protocolVersion);
    
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
  static async createUnifiedClient(
    endpoint: string | WebSocketEndpoint,
    options: WebSocketClientOptions = {}
  ): Promise<{ queryClient: ICosmosQueryClient; eventClient: ICosmosEventClient }> {
    // For WebSocket, we need to convert the endpoint to HTTP for detection
    const httpEndpoint = this.convertToHttpEndpoint(endpoint);
    const protocolAdapter = await this.getProtocolAdapter(httpEndpoint, options.protocolVersion);
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
export async function createCosmosQueryClient(
  endpoint: string,
  options?: ClientOptions
): Promise<ICosmosQueryClient> {
  return CosmosClientFactory.createQueryClient(endpoint, options);
}

export async function createCosmosEventClient(
  endpoint: string,
  options?: WebSocketClientOptions
): Promise<ICosmosEventClient> {
  return CosmosClientFactory.createEventClient(endpoint, options);
}