/**
 * Solana WebSocket RPC Client Implementation
 */

import WebSocket from 'ws';
import { ISolanaRpcClient, SolanaWebSocketConfig } from '../../types/client';
import { SolanaMethod, WebSocketNotification } from '../../types/protocol';
import { PublicKey, AccountInfo } from '../../types/common';
import { 
  SolanaNetworkError, 
  SolanaTimeoutError, 
  SolanaRpcError, 
  mapToSolanaError 
} from '../../errors';

/**
 * WebSocket-based RPC client for Solana with subscription support
 */
export class SolanaWebSocketRpcClient implements ISolanaRpcClient {
  private ws: WebSocket | null = null;
  private endpoint: string;
  private timeout: number;
  private reconnectInterval: number;
  private maxReconnectAttempts: number;
  private reconnectAttempts: number = 0;
  private connected: boolean = false;
  private reconnectTimer: NodeJS.Timeout | null = null;
  
  // Request/response handling
  private pendingRequests: Map<string, {
    resolve: (value: any) => void;
    reject: (error: Error) => void;
    timeout: NodeJS.Timeout;
  }> = new Map();
  
  // Subscription handling
  private subscriptions: Map<number, (data: any) => void> = new Map();
  private subscriptionCounter: number = 0;

  constructor(config: SolanaWebSocketConfig) {
    this.endpoint = this.normalizeEndpoint(config.endpoint);
    this.timeout = config.timeout || 30000;
    this.reconnectInterval = config.reconnectInterval || 5000;
    this.maxReconnectAttempts = config.maxReconnectAttempts || 10;
  }

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(this.endpoint);

        const timeoutId = setTimeout(() => {
          if (this.ws) {
            this.ws.terminate();
          }
          reject(new SolanaTimeoutError('WebSocket connection timeout', this.timeout));
        }, this.timeout);

        this.ws.on('open', () => {
          clearTimeout(timeoutId);
          this.connected = true;
          this.reconnectAttempts = 0;
          resolve();
        });

        this.ws.on('message', (data: WebSocket.Data) => {
          this.handleMessage(data);
        });

        this.ws.on('close', () => {
          clearTimeout(timeoutId);
          this.connected = false;
          this.handleReconnect();
        });

        this.ws.on('error', (error: Error) => {
          clearTimeout(timeoutId);
          this.handleReconnect();
          if (!this.connected) {
            reject(mapToSolanaError(error, 'WebSocket connection'));
          }
        });
      } catch (error) {
        reject(mapToSolanaError(error, 'WebSocket connection setup'));
      }
    });
  }

  async disconnect(): Promise<void> {
    // Clear reconnect timer
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    // Reject all pending requests
    for (const [id, request] of this.pendingRequests) {
      clearTimeout(request.timeout);
      request.reject(new SolanaNetworkError('Connection closed'));
    }
    this.pendingRequests.clear();

    // Clear subscriptions
    this.subscriptions.clear();

    // Close WebSocket
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }

    this.connected = false;
  }

  isConnected(): boolean {
    return this.connected && this.ws?.readyState === WebSocket.OPEN;
  }

  async call<TRequest, TResponse>(
    method: SolanaMethod | string,
    params?: TRequest
  ): Promise<TResponse> {
    if (!this.isConnected()) {
      throw new SolanaNetworkError('WebSocket not connected');
    }

    return new Promise((resolve, reject) => {
      const id = this.generateId();
      const message = {
        jsonrpc: '2.0',
        id,
        method,
        params: params ? (Array.isArray(params) ? params : [params]) : []
      };

      const timeout = setTimeout(() => {
        this.pendingRequests.delete(id);
        reject(new SolanaTimeoutError(`Request timeout for method ${method}`, this.timeout));
      }, this.timeout);

      this.pendingRequests.set(id, {
        resolve,
        reject,
        timeout
      });

      try {
        this.ws!.send(JSON.stringify(message));
      } catch (error) {
        this.pendingRequests.delete(id);
        clearTimeout(timeout);
        reject(mapToSolanaError(error, `WebSocket send ${method}`));
      }
    });
  }

  async *subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent> {
    if (!this.isConnected()) {
      throw new SolanaNetworkError('WebSocket not connected');
    }

    // Create subscription
    const subscriptionId = await this.call<unknown, number>(method, params);
    
    // Set up event stream
    const eventQueue: TEvent[] = [];
    const waitingResolvers: Array<(value: IteratorResult<TEvent>) => void> = [];
    let finished = false;

    const callback = (data: TEvent) => {
      if (finished) return;
      
      if (waitingResolvers.length > 0) {
        const resolve = waitingResolvers.shift()!;
        resolve({ value: data, done: false });
      } else {
        eventQueue.push(data);
      }
    };

    this.subscriptions.set(subscriptionId, callback);

    try {
      while (!finished) {
        if (eventQueue.length > 0) {
          yield eventQueue.shift()!;
        } else {
          await new Promise<void>((resolve) => {
            waitingResolvers.push((result) => {
              if (!result.done) {
                resolve();
              }
            });
          });
        }
      }
    } finally {
      // Clean up subscription
      finished = true;
      this.subscriptions.delete(subscriptionId);
      
      // Unsubscribe
      const unsubscribeMethod = method.replace('Subscribe', 'Unsubscribe');
      try {
        await this.call(unsubscribeMethod, [subscriptionId]);
      } catch (error) {
        // Ignore unsubscribe errors
      }
    }
  }

  private handleMessage(data: WebSocket.Data): void {
    try {
      const message = JSON.parse(data.toString());
      
      // Handle RPC responses
      if (message.id && this.pendingRequests.has(message.id)) {
        const request = this.pendingRequests.get(message.id)!;
        this.pendingRequests.delete(message.id);
        clearTimeout(request.timeout);

        if (message.error) {
          request.reject(new SolanaRpcError(
            `RPC error: ${message.error.message}`,
            message.error.code,
            message.error.message
          ));
        } else {
          request.resolve(message.result);
        }
        return;
      }

      // Handle subscription notifications
      if (message.method && message.params?.subscription !== undefined) {
        const subscriptionId = message.params.subscription;
        const callback = this.subscriptions.get(subscriptionId);
        if (callback) {
          callback(message.params.result);
        }
        return;
      }

    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  }

  private handleReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts || !this.ws) {
      return;
    }

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
    }

    this.reconnectTimer = setTimeout(async () => {
      if (this.reconnectAttempts >= this.maxReconnectAttempts) {
        return;
      }

      this.reconnectAttempts++;
      
      try {
        await this.connect();
        // TODO: Re-establish subscriptions
      } catch (error) {
        // Reconnection failed, will try again
      }
    }, this.reconnectInterval);
  }

  private normalizeEndpoint(endpoint: string): string {
    return endpoint.replace(/^http/, 'ws');
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}

/**
 * Factory function to create WebSocket RPC client
 */
export function createSolanaWebSocketRpcClient(config: SolanaWebSocketConfig): SolanaWebSocketRpcClient {
  return new SolanaWebSocketRpcClient(config);
}

/**
 * Default WebSocket configurations for different networks
 */
export const DEFAULT_WS_CONFIGS = {
  mainnet: {
    endpoint: 'wss://api.mainnet-beta.solana.com',
    timeout: 30000,
    reconnectInterval: 5000,
    maxReconnectAttempts: 10
  },
  devnet: {
    endpoint: 'wss://api.devnet.solana.com',
    timeout: 30000,
    reconnectInterval: 5000,
    maxReconnectAttempts: 10
  },
  testnet: {
    endpoint: 'wss://api.testnet.solana.com',
    timeout: 30000,
    reconnectInterval: 5000,
    maxReconnectAttempts: 10
  },
  localhost: {
    endpoint: 'ws://127.0.0.1:8900',
    timeout: 10000,
    reconnectInterval: 2000,
    maxReconnectAttempts: 5
  }
};

/**
 * Create WebSocket client with default configuration for a network
 */
export function createDefaultSolanaWebSocketClient(
  network: keyof typeof DEFAULT_WS_CONFIGS
): SolanaWebSocketRpcClient {
  const config = DEFAULT_WS_CONFIGS[network];
  if (!config) {
    throw new Error(`Unknown network: ${network}`);
  }
  return createSolanaWebSocketRpcClient(config);
}
