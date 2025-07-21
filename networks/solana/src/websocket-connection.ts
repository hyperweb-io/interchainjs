import WebSocket from 'ws';
import { PublicKey, AccountInfo } from './types';

export interface WebSocketSubscriptionConfig {
  endpoint: string;
  timeout?: number;
  reconnectInterval?: number;
  maxReconnectAttempts?: number;
}

export interface AccountSubscription {
  subscriptionId: number;
  publicKey: PublicKey;
  callback: (accountInfo: AccountInfo | null) => void;
}

export interface LogSubscription {
  subscriptionId: number;
  filter: {
    mentions?: string[];
  } | "all";
  callback: (log: any) => void;
}

export interface ProgramSubscription {
  subscriptionId: number;
  programId: PublicKey;
  callback: (accountInfo: AccountInfo, context: any) => void;
}

export type SubscriptionCallback = (data: any) => void;

export class WebSocketConnection {
  private ws: WebSocket | null = null;
  private endpoint: string;
  private timeout: number;
  private reconnectInterval: number;
  private maxReconnectAttempts: number;
  private reconnectAttempts: number = 0;
  private subscriptions: Map<number, SubscriptionCallback> = new Map();
  private isConnected: boolean = false;
  private reconnectTimer: NodeJS.Timeout | null = null;

  constructor(config: WebSocketSubscriptionConfig) {
    this.endpoint = config.endpoint.replace('http', 'ws');
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
          reject(new Error('WebSocket connection timeout'));
        }, this.timeout);

        this.ws.on('open', () => {
          clearTimeout(timeoutId);
          this.isConnected = true;
          this.reconnectAttempts = 0;
          console.log('WebSocket connected to', this.endpoint);
          resolve();
        });

        this.ws.on('message', (data: WebSocket.Data) => {
          this.handleMessage(data);
        });

        this.ws.on('close', () => {
          clearTimeout(timeoutId);
          this.isConnected = false;
          console.log('WebSocket disconnected');
          this.handleReconnect();
        });

        this.ws.on('error', (error: Error) => {
          clearTimeout(timeoutId);
          console.error('WebSocket error:', error);
          this.handleReconnect();
          if (!this.isConnected) {
            reject(error);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  private handleMessage(data: WebSocket.Data): void {
    try {
      const message = JSON.parse(data.toString());
      
      if (message.method === 'accountNotification') {
        const subscriptionId = message.params.subscription;
        const callback = this.subscriptions.get(subscriptionId);
        if (callback) {
          callback(message.params.result);
        }
      } else if (message.method === 'logsNotification') {
        const subscriptionId = message.params.subscription;
        const callback = this.subscriptions.get(subscriptionId);
        if (callback) {
          callback(message.params.result);
        }
      } else if (message.method === 'programNotification') {
        const subscriptionId = message.params.subscription;
        const callback = this.subscriptions.get(subscriptionId);
        if (callback) {
          callback(message.params.result);
        }
      }
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  }

  private handleReconnect(): void {
    // Don't reconnect if we've reached max attempts or if disconnection was intentional
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Max reconnect attempts reached');
      return;
    }

    // Don't reconnect if we don't have a websocket instance (means disconnect was called)
    if (!this.ws) {
      return;
    }

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
    }

    this.reconnectTimer = setTimeout(async () => {
      // Check again if we should still reconnect
      if (this.reconnectAttempts >= this.maxReconnectAttempts) {
        return;
      }

      this.reconnectAttempts++;
      console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
      
      try {
        await this.connect();
        // Re-establish all subscriptions
        await this.reestablishSubscriptions();
      } catch (error) {
        console.error('Reconnection failed:', error);
      }
    }, this.reconnectInterval);
  }

  private async reestablishSubscriptions(): Promise<void> {
    // This would typically re-establish all active subscriptions
    // For now, we'll leave this as a placeholder
    console.log('Re-establishing subscriptions...');
  }

  private async sendRequest<T>(method: string, params: any[]): Promise<T> {
    if (!this.ws || !this.isConnected) {
      throw new Error('WebSocket not connected');
    }

    return new Promise((resolve, reject) => {
      const id = Math.random().toString(36).substring(7);
      const message = {
        jsonrpc: '2.0',
        id,
        method,
        params,
      };

      const timeout = setTimeout(() => {
        reject(new Error('Request timeout'));
      }, this.timeout);

      const messageHandler = (data: WebSocket.Data) => {
        try {
          const response = JSON.parse(data.toString());
          if (response.id === id) {
            clearTimeout(timeout);
            if (this.ws) {
              this.ws.off('message', messageHandler);
            }
            
            if (response.error) {
              reject(new Error(`WebSocket RPC error: ${response.error.message}`));
            } else {
              resolve(response.result);
            }
          }
        } catch (error) {
          // Ignore parsing errors for non-matching messages
        }
      };

      if (this.ws) {
        this.ws.on('message', messageHandler);
        this.ws.send(JSON.stringify(message));
      }
    });
  }

  async subscribeToAccount(
    publicKey: PublicKey,
    callback: (accountInfo: AccountInfo | null) => void,
    commitment: string = 'finalized'
  ): Promise<number> {
    const subscriptionId = await this.sendRequest<number>('accountSubscribe', [
      publicKey.toString(),
      { commitment, encoding: 'base64' },
    ]);

    this.subscriptions.set(subscriptionId, callback);
    return subscriptionId;
  }

  async subscribeToProgram(
    programId: PublicKey,
    callback: (data: any) => void,
    commitment: string = 'finalized'
  ): Promise<number> {
    const subscriptionId = await this.sendRequest<number>('programSubscribe', [
      programId.toString(),
      { commitment, encoding: 'base64' },
    ]);

    this.subscriptions.set(subscriptionId, callback);
    return subscriptionId;
  }

  async subscribeToLogs(
    filter: { mentions?: string[] } | "all",
    callback: (log: any) => void,
    commitment: string = 'finalized'
  ): Promise<number> {
    const subscriptionId = await this.sendRequest<number>('logsSubscribe', [
      filter,
      { commitment },
    ]);

    this.subscriptions.set(subscriptionId, callback);
    return subscriptionId;
  }

  async unsubscribeFromAccount(subscriptionId: number): Promise<boolean> {
    const result = await this.sendRequest<boolean>('accountUnsubscribe', [subscriptionId]);
    this.subscriptions.delete(subscriptionId);
    return result;
  }

  async unsubscribeFromProgram(subscriptionId: number): Promise<boolean> {
    const result = await this.sendRequest<boolean>('programUnsubscribe', [subscriptionId]);
    this.subscriptions.delete(subscriptionId);
    return result;
  }

  async unsubscribeFromLogs(subscriptionId: number): Promise<boolean> {
    const result = await this.sendRequest<boolean>('logsUnsubscribe', [subscriptionId]);
    this.subscriptions.delete(subscriptionId);
    return result;
  }

  disconnect(): void {
    // Stop reconnection attempts
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    // Reset reconnection attempts to prevent future reconnections
    this.reconnectAttempts = this.maxReconnectAttempts;

    if (this.ws) {
      this.isConnected = false;
      
      // Remove all event listeners to prevent callbacks after disconnect
      this.ws.removeAllListeners();
      
      // Close the WebSocket connection
      if (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) {
        this.ws.close();
      }
      
      this.ws = null;
    }

    // Clear all subscriptions
    this.subscriptions.clear();
  }

  isConnectionOpen(): boolean {
    return this.isConnected && this.ws?.readyState === WebSocket.OPEN;
  }

  getSubscriptionCount(): number {
    return this.subscriptions.size;
  }
}