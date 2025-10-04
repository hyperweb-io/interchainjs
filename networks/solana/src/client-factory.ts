/**
 * Solana client factory
 */

import { HttpRpcClient, HttpEndpoint, WebSocketRpcClient, WebSocketEndpoint, ReconnectOptions } from '@interchainjs/utils';
import { SolanaQueryClient } from './query/index';
import { createSolanaAdapter, ISolanaProtocolAdapter } from './adapters/index';
import { ISolanaQueryClient } from './types/solana-client-interfaces';
import { ISolanaEventClient } from './types/solana-event-interfaces';
import { SolanaEventClient } from './events';
import { SolanaProtocolVersion } from './types/protocol';

export interface SolanaClientOptions {
  protocolVersion?: SolanaProtocolVersion;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface SolanaWebSocketClientOptions extends SolanaClientOptions {
  reconnect?: ReconnectOptions;
}

export class SolanaClientFactory {
  private static async detectProtocolAdapter(
    endpoint: string | HttpEndpoint
  ): Promise<ISolanaProtocolAdapter> {
    // Use a simple client to detect version
    const tempClient = new HttpRpcClient(endpoint);
    await tempClient.connect();

    try {
      const response = await tempClient.call('getVersion') as any;
      const version = response['solana-core'];

      if (version && version.startsWith('1.18.')) {
        return createSolanaAdapter(SolanaProtocolVersion.SOLANA_1_18);
      } else {
        // Fallback to default supported version
        return createSolanaAdapter(SolanaProtocolVersion.SOLANA_1_18);
      }
    } finally {
      await tempClient.disconnect();
    }
  }

  private static async getProtocolAdapter(
    endpoint: string | HttpEndpoint,
    options: SolanaClientOptions
  ): Promise<ISolanaProtocolAdapter> {
    if (options.protocolVersion) {
      return createSolanaAdapter(options.protocolVersion);
    }

    // Auto-detect protocol version
    return this.detectProtocolAdapter(endpoint);
  }

  private static convertToHttpEndpoint(endpoint: string | WebSocketEndpoint): string | HttpEndpoint {
    if (typeof endpoint === 'string') {
      return endpoint.replace(/^ws(s)?:/, 'http$1:');
    }

    return {
      url: endpoint.url.replace(/^ws(s)?:/, 'http$1:'),
      timeout: 10000,
      headers: {}
    };
  }

  static async createQueryClient(
    endpoint: string | HttpEndpoint,
    options: SolanaClientOptions = {}
  ): Promise<ISolanaQueryClient> {
    const rpcClient = new HttpRpcClient(endpoint, {
      timeout: options.timeout,
      headers: options.headers
    });

    const adapter = await this.getProtocolAdapter(endpoint, options);

    return new SolanaQueryClient(rpcClient, adapter);
  }

  static async createEventClient(
    endpoint: string | WebSocketEndpoint,
    options: SolanaWebSocketClientOptions = {}
  ): Promise<ISolanaEventClient> {
    const rpcClient = new WebSocketRpcClient(endpoint, {
      reconnect: options.reconnect
    });

    return new SolanaEventClient(rpcClient);
  }

  static async createClients(
    httpEndpoint: string | HttpEndpoint,
    wsEndpoint: string | WebSocketEndpoint,
    options: SolanaWebSocketClientOptions = {}
  ): Promise<{ queryClient: ISolanaQueryClient; eventClient: ISolanaEventClient }> {
    const adapter = await this.getProtocolAdapter(httpEndpoint, options);

    const httpRpcClient = new HttpRpcClient(httpEndpoint, {
      timeout: options.timeout,
      headers: options.headers
    });

    const wsRpcClient = new WebSocketRpcClient(wsEndpoint, {
      reconnect: options.reconnect
    });

    return {
      queryClient: new SolanaQueryClient(httpRpcClient, adapter),
      eventClient: new SolanaEventClient(wsRpcClient)
    };
  }

  static async createUnifiedClient(
    endpoint: string | WebSocketEndpoint,
    options: SolanaWebSocketClientOptions = {}
  ): Promise<{ queryClient: ISolanaQueryClient; eventClient: ISolanaEventClient }> {
    const httpEndpoint = this.convertToHttpEndpoint(endpoint);
    const adapter = await this.getProtocolAdapter(httpEndpoint, options);

    const wsRpcClient = new WebSocketRpcClient(endpoint, {
      reconnect: options.reconnect
    });

    return {
      queryClient: new SolanaQueryClient(wsRpcClient, adapter),
      eventClient: new SolanaEventClient(wsRpcClient)
    };
  }
}

// Convenience function for creating query clients
export function createSolanaQueryClient(
  endpoint: string | HttpEndpoint,
  options: SolanaClientOptions = {}
): Promise<ISolanaQueryClient> {
  return SolanaClientFactory.createQueryClient(endpoint, options);
}

export function createSolanaEventClient(
  endpoint: string | WebSocketEndpoint,
  options: SolanaWebSocketClientOptions = {}
): Promise<ISolanaEventClient> {
  return SolanaClientFactory.createEventClient(endpoint, options);
}

export function createSolanaClients(
  httpEndpoint: string | HttpEndpoint,
  wsEndpoint: string | WebSocketEndpoint,
  options: SolanaWebSocketClientOptions = {}
): Promise<{ queryClient: ISolanaQueryClient; eventClient: ISolanaEventClient }> {
  return SolanaClientFactory.createClients(httpEndpoint, wsEndpoint, options);
}

export function createSolanaUnifiedClient(
  endpoint: string | WebSocketEndpoint,
  options: SolanaWebSocketClientOptions = {}
): Promise<{ queryClient: ISolanaQueryClient; eventClient: ISolanaEventClient }> {
  return SolanaClientFactory.createUnifiedClient(endpoint, options);
}
