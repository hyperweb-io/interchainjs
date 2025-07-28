// packages/utils/src/clients/websocket-client.ts
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
    return this.connected;
  }

  async call<TRequest, TResponse>(
    method: string,
    params?: TRequest
  ): Promise<TResponse> {
    if (!this.connected || !this.socket) {
      throw new ConnectionError('WebSocket is not connected');
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

  async *subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent> {
    if (!this.connected || !this.socket) {
      throw new ConnectionError('WebSocket is not connected');
    }

    const subscriptionId = (++this.messageId).toString();
    const request = createJsonRpcRequest(method, params, subscriptionId);

    // Send subscription request
    this.socket.send(JSON.stringify(request));

    // Create async iterator for subscription events
    const eventQueue: TEvent[] = [];
    let resolveNext: ((value: IteratorResult<TEvent>) => void) | null = null;
    let isComplete = false;

    // Set up subscription handler
    this.subscriptions.set(subscriptionId, (data: TEvent) => {
      if (resolveNext) {
        resolveNext({ value: data, done: false });
        resolveNext = null;
      } else {
        eventQueue.push(data);
      }
    });

    try {
      while (!isComplete) {
        if (eventQueue.length > 0) {
          yield eventQueue.shift()!;
        } else {
          yield await new Promise<TEvent>((resolve, reject) => {
            if (!this.connected) {
              reject(new ConnectionError('WebSocket disconnected during subscription'));
              return;
            }
            resolveNext = (result) => {
              if (result.done) {
                isComplete = true;
                reject(new SubscriptionError('Subscription ended'));
              } else {
                resolve(result.value);
              }
            };
          });
        }
      }
    } finally {
      this.subscriptions.delete(subscriptionId);
    }
  }

  private handleMessage(data: string): void {
    try {
      const message = JSON.parse(data);
      
      if (message.id && this.pendingRequests.has(message.id)) {
        const pending = this.pendingRequests.get(message.id)!;
        this.pendingRequests.delete(message.id);
        clearTimeout(pending.timeout);

        if (message.error) {
          pending.reject(new NetworkError(`RPC Error: ${message.error.message}`, message.error));
        } else {
          pending.resolve(message.result);
        }
      } else if (message.method && this.subscriptions.has(message.params?.subscription)) {
        // Handle subscription event
        const handler = this.subscriptions.get(message.params.subscription);
        if (handler) {
          handler(message.params.result);
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

    // TODO: Implement reconnection logic if needed
  }

  private getWebSocketUrl(): string {
    const url = typeof this.endpointConfig === 'string' ? this.endpointConfig : this.endpointConfig.url;
    
    // Convert HTTP URLs to WebSocket URLs
    if (url.startsWith('http://')) {
      return url.replace('http://', 'ws://');
    } else if (url.startsWith('https://')) {
      return url.replace('https://', 'wss://');
    }
    
    return url;
  }

  private getProtocols(): string[] | undefined {
    return typeof this.endpointConfig === 'object' ? this.endpointConfig.protocols : undefined;
  }
}
