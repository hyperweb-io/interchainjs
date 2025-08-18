/**
 * Solana HTTP RPC Client Implementation
 */

import { ISolanaRpcClient, SolanaRpcConfig } from '../../types/client';
import { SolanaMethod } from '../../types/protocol';
import {
  SolanaNetworkError,
  SolanaTimeoutError,
  SolanaRpcError,
  mapToSolanaError
} from '../../errors';

/**
 * HTTP-based RPC client for Solana
 */
export class SolanaHttpRpcClient implements ISolanaRpcClient {
  private endpoint: string;
  private timeout: number;
  private retries: number;
  private headers: Record<string, string>;
  private connected: boolean = false;

  constructor(config: SolanaRpcConfig) {
    this.endpoint = config.endpoint;
    this.timeout = config.timeout || 30000;
    this.retries = config.retries || 3;
    this.headers = {
      'Content-Type': 'application/json',
      ...config.headers
    };
  }

  async connect(): Promise<void> {
    try {
      // Test connectivity with a simple health check
      await this.call('getHealth');
      this.connected = true;
    } catch (error) {
      this.connected = false;
      throw mapToSolanaError(error, 'connect');
    }
  }

  async disconnect(): Promise<void> {
    this.connected = false;
  }

  isConnected(): boolean {
    return this.connected;
  }

  async call<TRequest, TResponse>(
    method: SolanaMethod | string,
    params?: TRequest
  ): Promise<TResponse> {
    let lastError: Error;

    for (let attempt = 0; attempt <= this.retries; attempt++) {
      try {
        const response = await this.makeRequest(method, params);
        return this.handleResponse<TResponse>(response);
      } catch (error) {
        lastError = error as Error;

        if (attempt < this.retries && this.isRetryableError(error)) {
          await this.delay(Math.pow(2, attempt) * 1000); // Exponential backoff
          continue;
        }

        throw mapToSolanaError(error, `RPC call ${method}`);
      }
    }

    throw mapToSolanaError(lastError!, `RPC call ${method} after ${this.retries} retries`);
  }

  async *subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent> {
    throw new SolanaNetworkError('HTTP client does not support subscriptions. Use WebSocket client instead.');
  }

  private async makeRequest(method: string, params?: unknown): Promise<Response> {
    const body = JSON.stringify({
      jsonrpc: '2.0',
      id: this.generateId(),
      method,
      params: params ? (Array.isArray(params) ? params : [params]) : []
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: this.headers,
        body,
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  private async handleResponse<TResponse>(response: Response): Promise<TResponse> {
    if (!response.ok) {
      throw new SolanaNetworkError(
        `HTTP ${response.status}: ${response.statusText}`,
        new Error(`HTTP ${response.status}`)
      );
    }

    let data: any;
    try {
      data = await response.json();
    } catch (error) {
      throw new SolanaRpcError(
        'Failed to parse JSON response',
        undefined,
        undefined,
        error as Error
      );
    }

    if (data.error) {
      throw new SolanaRpcError(
        `RPC error: ${data.error.message}`,
        data.error.code,
        data.error.message
      );
    }

    if (data.result === undefined) {
      throw new SolanaRpcError('RPC response missing result field');
    }

    return data.result;
  }

  private isRetryableError(error: unknown): boolean {
    if (error instanceof SolanaTimeoutError) {
      return true;
    }

    if (error instanceof SolanaNetworkError) {
      // Retry on network errors but not on RPC errors
      return !(error instanceof SolanaRpcError);
    }

    if (error instanceof Error) {
      // Retry on fetch errors
      if (error.name === 'AbortError' || error.message.includes('fetch')) {
        return true;
      }
    }

    return false;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}

/**
 * Factory function to create HTTP RPC client
 */
export function createSolanaHttpRpcClient(config: SolanaRpcConfig): SolanaHttpRpcClient {
  return new SolanaHttpRpcClient(config);
}

/**
 * Default configuration for different networks
 */
export const DEFAULT_RPC_CONFIGS = {
  mainnet: {
    endpoint: 'https://api.mainnet-beta.solana.com',
    timeout: 30000,
    retries: 3
  },
  devnet: {
    endpoint: 'https://api.devnet.solana.com',
    timeout: 30000,
    retries: 3
  },
  testnet: {
    endpoint: 'https://api.testnet.solana.com',
    timeout: 30000,
    retries: 3
  },
  localhost: {
    endpoint: 'http://127.0.0.1:8899',
    timeout: 10000,
    retries: 1
  }
};

/**
 * Create RPC client with default configuration for a network
 */
export function createDefaultSolanaRpcClient(network: keyof typeof DEFAULT_RPC_CONFIGS): SolanaHttpRpcClient {
  const config = DEFAULT_RPC_CONFIGS[network];
  if (!config) {
    throw new Error(`Unknown network: ${network}`);
  }
  return createSolanaHttpRpcClient(config);
}

/**
 * Utility to test RPC endpoint connectivity
 */
export async function testRpcEndpoint(endpoint: string, timeout = 10000): Promise<boolean> {
  try {
    const client = createSolanaHttpRpcClient({ endpoint, timeout, retries: 1 });
    await client.connect();
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Utility to get RPC endpoint health information
 */
export async function getRpcEndpointHealth(endpoint: string): Promise<any> {
  const client = createSolanaHttpRpcClient({ endpoint, timeout: 10000, retries: 1 });
  return client.call('getHealth');
}

/**
 * Utility to get RPC endpoint version information
 */
export async function getRpcEndpointVersion(endpoint: string): Promise<any> {
  const client = createSolanaHttpRpcClient({ endpoint, timeout: 10000, retries: 1 });
  return client.call('getVersion');
}
