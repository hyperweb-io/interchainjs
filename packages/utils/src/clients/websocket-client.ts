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
  private subscriptionAckMap = new WeakMap<AsyncIterableIterator<unknown>, Promise<string>>();
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

  subscribe<TEvent>(method: string, params?: unknown): AsyncIterable<TEvent> {
    if (!this.connected || !this.socket) {
      throw new ConnectionError('WebSocket is not connected');
    }

    const requestId = (++this.messageId).toString();
    const request = createJsonRpcRequest(method, params, requestId);

    const eventQueue: TEvent[] = [];
    const pendingQueue: Array<{ resolve: (value: { value: TEvent; done: boolean }) => void; reject: (error: Error) => void }> = [];
    let isComplete = false;
    let subscriptionId: string | null = null;

    const onEvent = (data: TEvent) => {
      if (isComplete) {
        return;
      }

      if (pendingQueue.length > 0) {
        const { resolve } = pendingQueue.shift()!;
        resolve({ value: data, done: false });
      } else {
        eventQueue.push(data);
      }
    };

    const failPending = (error: Error) => {
      while (pendingQueue.length > 0) {
        const { reject } = pendingQueue.shift()!;
        reject(error);
      }
    };

    let timeout: NodeJS.Timeout | null = null;

    const subscriptionIdPromise = new Promise<string>((resolve, reject) => {
      timeout = setTimeout(() => {
        this.pendingRequests.delete(requestId);
        const timeoutError = new TimeoutError(`Subscription ${method} timed out`);
        failPending(timeoutError);
        reject(timeoutError);
      }, 30000);

      this.pendingRequests.set(requestId, {
        resolve: (value: any) => {
          try {
            const normalized = this.normalizeSubscriptionId(value);
            subscriptionId = normalized;
            this.subscriptions.set(normalized, onEvent);
            resolve(normalized);
          } catch (err) {
            const normalizedError = err instanceof Error ? err : new NetworkError(String(err));
            failPending(normalizedError);
            reject(normalizedError);
          }
        },
        reject: (error: Error) => {
          const normalizedError = error instanceof Error ? error : new NetworkError(String(error));
          failPending(normalizedError);
          reject(normalizedError);
        },
        timeout: timeout!
      });
    }).finally(() => {
      if (timeout) {
        clearTimeout(timeout);
      }
    });

    try {
      this.socket.send(JSON.stringify(request));
    } catch (error: any) {
      if (timeout) {
        clearTimeout(timeout);
      }
      this.pendingRequests.delete(requestId);
      const networkError = new NetworkError(`Failed to send request: ${error.message}`, error);
      failPending(networkError);
      throw networkError;
    }

    const iterator = (async function* (this: WebSocketRpcClient): AsyncIterableIterator<TEvent> {
      try {
        await subscriptionIdPromise;

        while (!isComplete) {
          if (eventQueue.length > 0) {
            yield eventQueue.shift()!;
            continue;
          }

          const nextValue = await new Promise<{ value: TEvent; done: boolean }>((resolve, reject) => {
            pendingQueue.push({ resolve, reject });

            if (!this.connected) {
              const disconnectError = new ConnectionError('WebSocket disconnected during subscription');
              failPending(disconnectError);
            }
          });

          if (nextValue.done) {
            isComplete = true;
            break;
          }

          yield nextValue.value;
        }
      } finally {
        isComplete = true;
        pendingQueue.length = 0;
        if (subscriptionId) {
          this.subscriptions.delete(subscriptionId);
        }
      }
    }).call(this);

    this.subscriptionAckMap.set(iterator, subscriptionIdPromise);

    return iterator;
  }

  getSubscriptionId(iterable: AsyncIterable<unknown>): Promise<string> | undefined {
    return this.subscriptionAckMap.get(iterable as AsyncIterableIterator<unknown>);
  }

  private normalizeSubscriptionId(value: unknown): string {
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'number') {
      return value.toString();
    }

    if (value && typeof value === 'object' && 'result' in (value as any)) {
      const result = (value as any).result;
      if (typeof result === 'string' || typeof result === 'number') {
        return String(result);
      }
    }

    throw new NetworkError('Received invalid subscription identifier');
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
