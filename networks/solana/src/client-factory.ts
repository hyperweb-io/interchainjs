/**
 * Solana client factory
 */

import { HttpRpcClient, HttpEndpoint } from '@interchainjs/utils';
import { SolanaQueryClient } from './query/index';
import { createSolanaAdapter, ISolanaProtocolAdapter } from './adapters/index';
import { ISolanaQueryClient } from './types/solana-client-interfaces';
import { SolanaProtocolVersion } from './types/protocol';

export interface SolanaClientOptions {
  protocolVersion?: SolanaProtocolVersion;
  timeout?: number;
  headers?: Record<string, string>;
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
}

// Convenience function for creating query clients
export function createSolanaQueryClient(
  endpoint: string | HttpEndpoint,
  options: SolanaClientOptions = {}
): Promise<ISolanaQueryClient> {
  return SolanaClientFactory.createQueryClient(endpoint, options);
}
