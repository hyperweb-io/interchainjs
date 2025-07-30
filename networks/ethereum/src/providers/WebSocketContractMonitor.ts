import { AbiFunctionItem } from '../utils/ContractEncoder';

/**
 * Event data structure
 */
export interface ContractEvent {
  address: string;
  blockNumber: string;
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  logIndex: string;
  removed: boolean;
  params: Record<string, any>;
}

/**
 * Simple WebSocket contract monitor for testing purposes
 * This is a minimal implementation that simulates event monitoring
 */
export class WebSocketContractMonitor {
  private contractAddress: string;
  private abi: AbiFunctionItem[];
  private wsUrl: string;
  private socket: WebSocket | null = null;
  private eventHandlers: Map<string, (event: ContractEvent) => void> = new Map();
  private connected = false;

  constructor(contractAddress: string, abi: AbiFunctionItem[], wsUrl: string) {
    this.contractAddress = contractAddress;
    this.abi = abi;
    this.wsUrl = wsUrl;
  }

  /**
   * Connect to WebSocket
   */
  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.socket = new WebSocket(this.wsUrl);
        
        this.socket.onopen = () => {
          this.connected = true;
          console.log('WebSocket connected');
          resolve();
        };

        this.socket.onmessage = (event) => {
          this.handleMessage(event.data);
        };

        this.socket.onclose = () => {
          this.connected = false;
          console.log('WebSocket disconnected');
        };

        this.socket.onerror = (error) => {
          console.error('WebSocket error:', error);
          reject(error);
        };

      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Close WebSocket connection
   */
  async close(): Promise<void> {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    this.connected = false;
  }

  /**
   * Subscribe to contract events
   */
  on(eventName: string, handler: (event: ContractEvent) => void): this {
    this.eventHandlers.set(eventName, handler);
    
    // Subscribe to logs for this contract
    if (this.connected && this.socket) {
      const subscribeMessage = {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_subscribe',
        params: [
          'logs',
          {
            address: this.contractAddress,
            topics: [this.getEventTopic(eventName)]
          }
        ]
      };
      
      this.socket.send(JSON.stringify(subscribeMessage));
    }
    
    return this;
  }

  /**
   * Handle incoming WebSocket messages
   */
  private handleMessage(data: string): void {
    try {
      const message = JSON.parse(data);
      
      if (message.method === 'eth_subscription' && message.params) {
        const log = message.params.result;
        const event = this.parseLogToEvent(log);
        
        // Find matching event handler
        for (const [eventName, handler] of this.eventHandlers) {
          if (this.isEventMatch(eventName, log)) {
            handler(event);
            break;
          }
        }
      }
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  }

  /**
   * Get event topic hash for a given event name
   */
  private getEventTopic(eventName: string): string {
    // For Transfer event: Transfer(address,address,uint256)
    if (eventName === 'Transfer') {
      return '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
    }
    
    // For other events, return a placeholder
    return '0x0000000000000000000000000000000000000000000000000000000000000000';
  }

  /**
   * Check if a log matches the given event name
   */
  private isEventMatch(eventName: string, log: any): boolean {
    const expectedTopic = this.getEventTopic(eventName);
    return log.topics && log.topics[0] === expectedTopic;
  }

  /**
   * Parse a log entry to a contract event
   */
  private parseLogToEvent(log: any): ContractEvent {
    // Simple parsing for Transfer event
    const params: Record<string, any> = {};
    
    if (log.topics && log.topics.length >= 3) {
      // Transfer event has indexed parameters: from, to
      params.from = '0x' + log.topics[1].slice(26); // Remove padding
      params.to = '0x' + log.topics[2].slice(26); // Remove padding
      
      // Value is in data (non-indexed)
      if (log.data && log.data !== '0x') {
        params.value = BigInt(log.data);
      }
    }

    return {
      address: log.address,
      blockNumber: log.blockNumber,
      transactionHash: log.transactionHash,
      transactionIndex: log.transactionIndex,
      blockHash: log.blockHash,
      logIndex: log.logIndex,
      removed: log.removed || false,
      params
    };
  }

  /**
   * Add catch method for error handling
   */
  catch(errorHandler: (error: any) => void): this {
    // This is a simple implementation that doesn't actually catch errors
    // In a real implementation, this would handle WebSocket errors
    return this;
  }
}
