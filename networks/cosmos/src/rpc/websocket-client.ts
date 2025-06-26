// networks/cosmos/src/rpc/websocket-client.ts
import { IRpcClient, createJsonRpcRequest, NetworkError, TimeoutError, ConnectionError, SubscriptionError } from '@interchainjs/types';

export interface ReconnectOptions {
  maxRetries?: number;
  retryDelay?: number;
  exponentialBackoff?: boolean;
}

export interface WebSocketEndpoint {
  url: string;
  protocols?: string[];
  reconnect?: ReconnectOptions;
}

interface PendingRequest {
  resolve: (value: any) => void;
  reject: (error: Error) => void;
  timeout: NodeJS.Timeout;
}

export class WebSocketRpcClient implements IRpcClient {
  private socket: WebSocket | null = null;
  private connected = false;
  private messageId = 0;
  private pendingRequests = new Map<string, PendingRequest>();
  private subscriptions = new Map<string, (data: any) => void>();
  private reconnectOptions: ReconnectOptions;

  constructor(
    private endpointConfig: string | WebSocketEndpoint,
    private options: { reconnect?: ReconnectOptions } = {}
  ) {
    this.reconnectOptions = {
      maxRetries: 3,
      retryDelay: 1000,
      exponentialBackoff: true,
      ...this.options.reconnect
    };
  }

  get endpoint(): string {
    return typeof this.endpointConfig === 'string' ? this.endpointConfig : this.endpointConfig.url;
  }

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const url = this.getWebSocketUrl();
        const protocols = this.getProtocols();
        
        this.socket = new WebSocket(url, protocols);
        
        this.socket.onopen = () => {
          this.connected = true;
          resolve();
        };

        this.socket.onmessage = (event) => {
          this.handleMessage(event.data);
        };

        this.socket.onclose = () => {
          this.handleDisconnection();
        };

        this.socket.onerror = (error) => {
          reject(new ConnectionError(`WebSocket connection failed: ${error}`));
        };

      } catch (error: any) {
        reject(new ConnectionError(`Failed to create WebSocket: ${error.message}`, error));
      }
    });
  }

  async disconnect(): Promise<void> {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    this.connected = false;
  }

  isConnected(): boolean {
    return this.connected && this.socket?.readyState === WebSocket.OPEN;
  }

  async call<TRequest, TResponse>(
    method: string, 
    params?: TRequest
  ): Promise<TResponse> {
    if (!this.isConnected()) {
      throw new ConnectionError('WebSocket not connected');
    }

    return new Promise((resolve, reject) => {
      const id = (++this.messageId).toString();
      const request = createJsonRpcRequest(method, params, id);

      // Set up timeout
      const timeout = setTimeout(() => {
        if (this.pendingRequests.has(id)) {
          this.pendingRequests.delete(id);
          reject(new TimeoutError(`Request ${method} timed out`));
        }
      }, 30000);

      this.pendingRequests.set(id, { resolve, reject, timeout });
      
      try {
        this.socket!.send(JSON.stringify(request));
      } catch (error: any) {
        this.pendingRequests.delete(id);
        clearTimeout(timeout);
        reject(new NetworkError(`Failed to send request: ${error.message}`, error));
      }
    });
  }

  async* subscribe<TEvent>(
    method: string, 
    params?: Record<string, unknown>
  ): AsyncIterable<TEvent> {
    if (!this.isConnected()) {
      throw new ConnectionError('WebSocket not connected');
    }

    const subscriptionId = `sub_${++this.messageId}`;
    const eventQueue: TEvent[] = [];
    let resolver: ((value: IteratorResult<TEvent>) => void) | null = null;
    let isActive = true;

    // Set up subscription handler
    this.subscriptions.set(subscriptionId, (data: TEvent) => {
      if (!isActive) return;
      
      if (resolver) {
        resolver({ value: data, done: false });
        resolver = null;
      } else {
        eventQueue.push(data);
      }
    });

    try {
      // Send subscription request
      await this.call(method, { ...(params || {}), subscription_id: subscriptionId });

      // Return async iterator
      while (isActive) {
        if (eventQueue.length > 0) {
          yield eventQueue.shift()!;
        } else {
          await new Promise<void>((resolve) => {
            resolver = (result) => {
              if (!result.done) {
                resolve();
              }
            };
          });
        }
      }
    } finally {
      isActive = false;
      this.subscriptions.delete(subscriptionId);
    }
  }

  private handleMessage(data: string): void {
    try {
      const message = JSON.parse(data);

      // Handle subscription events
      if (message.method === 'subscription' && message.params) {
        const subscriptionId = message.params.subscription_id;
        const handler = this.subscriptions.get(subscriptionId);
        if (handler) {
          handler(message.params.result);
        }
        return;
      }

      // Handle RPC responses
      if (message.id && this.pendingRequests.has(message.id)) {
        const pending = this.pendingRequests.get(message.id)!;
        this.pendingRequests.delete(message.id);
        clearTimeout(pending.timeout);

        if (message.error) {
          pending.reject(new NetworkError(`RPC Error: ${message.error.message}`, message.error));
        } else {
          pending.resolve(message.result);
        }
      }
    } catch (error: any) {
      console.error('Failed to parse WebSocket message:', error);
    }
  }

  private handleDisconnection(): void {
    this.connected = false;
    
    // Reject all pending requests
    for (const [id, pending] of this.pendingRequests) {
      clearTimeout(pending.timeout);
      pending.reject(new ConnectionError('WebSocket disconnected'));
    }
    this.pendingRequests.clear();

    // TODO: Implement reconnection logic based on reconnectOptions
    if (this.reconnectOptions.maxRetries && this.reconnectOptions.maxRetries > 0) {
      // Implement exponential backoff reconnection
      console.log('WebSocket disconnected, reconnection not implemented yet');
    }
  }

  private getWebSocketUrl(): string {
    const url = typeof this.endpointConfig === 'string' ? this.endpointConfig : this.endpointConfig.url;
    // Convert HTTP URLs to WebSocket URLs
    return url.replace(/^http/, 'ws').replace(/\/$/, '') + '/websocket';
  }

  private getProtocols(): string[] | undefined {
    return typeof this.endpointConfig === 'object' ? this.endpointConfig.protocols : undefined;
  }
}