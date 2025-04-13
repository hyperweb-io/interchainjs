import { TransactionLog } from '../types/transaction';
import { Abi, AbiEvent, DecodedEventData, EventHandler } from '../types/events';
import { keccak_256 } from 'js-sha3'; // 导入js-sha3库来计算keccak256哈希

/**
 * WebSocketProvider for Ethereum event monitoring
 * This class provides functionality to connect to an Ethereum node via WebSocket
 * and listen for specific contract events.
 */
export class WebSocketProvider {
  private ws: WebSocket | null = null;
  private url: string;
  private subscriptions: Map<string, { id: string; handler: EventHandler }> = new Map();
  private nextSubscriptionId = 1;
  private nextRequestId = 1;
  private pendingRequests: Map<number, { resolve: Function; reject: Function }> = new Map();
  private abiMap: Map<string, Abi> = new Map();
  private eventSignatureMap: Map<string, AbiEvent> = new Map();
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 3000; // 3 seconds

  /**
   * Creates a new WebSocketProvider instance
   * 
   * @param url The WebSocket URL to connect to (e.g., "wss://mainnet.infura.io/ws/v3/YOUR-PROJECT-ID")
   */
  constructor(url: string) {
    this.url = url;
  }

  /**
   * Connects to the WebSocket endpoint
   */
  public async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.url);

      this.ws.onopen = () => {
        console.log('WebSocket connection established');
        this.reconnectAttempts = 0;
        resolve();
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        reject(error);
      };

      this.ws.onclose = (event) => {
        console.log(`WebSocket connection closed: ${event.code} ${event.reason}`);
        this.handleReconnect();
      };

      this.ws.onmessage = (event) => {
        this.handleMessage(event.data);
      };
    });
  }

  /**
   * Handle reconnection logic
   */
  private handleReconnect(): void {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error('Maximum reconnection attempts reached');
      return;
    }

    this.reconnectAttempts++;
    console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);

    setTimeout(() => {
      this.connect()
        .then(() => {
          // Resubscribe to all previous subscriptions
          this.resubscribe();
        })
        .catch((error) => {
          console.error('Failed to reconnect:', error);
        });
    }, this.reconnectDelay * this.reconnectAttempts);
  }

  /**
   * Resubscribe to all previous subscriptions after reconnecting
   */
  private async resubscribe(): Promise<void> {
    const oldSubscriptions = new Map(this.subscriptions);
    this.subscriptions.clear();

    for (const [eventKey, { handler }] of oldSubscriptions.entries()) {
      const [address, eventName] = eventKey.split('::');
      await this.subscribeToEvent(address, eventName, handler);
    }
  }

  /**
   * Handle incoming WebSocket messages
   */
  private handleMessage(data: string): void {
    try {
      const message = JSON.parse(data);

      // Handle subscription responses
      if (message.id && this.pendingRequests.has(message.id)) {
        const { resolve, reject } = this.pendingRequests.get(message.id)!;

        if (message.error) {
          reject(new Error(message.error.message || 'Unknown error'));
        } else {
          resolve(message.result);
        }

        this.pendingRequests.delete(message.id);
        return;
      }

      // Handle incoming events
      if (message.method === 'eth_subscription' && message.params && message.params.subscription) {
        const subscriptionId = message.params.subscription;
        const log = message.params.result;

        // Find the subscription that matches this ID
        for (const [eventKey, subscription] of this.subscriptions.entries()) {
          if (subscription.id === subscriptionId) {
            this.processEvent(eventKey, log);
            break;
          }
        }
      }
    } catch (error) {
      console.error('Error processing WebSocket message:', error);
    }
  }

  /**
   * Send a request through the WebSocket connection
   */
  private async sendRequest(method: string, params: any[]): Promise<any> {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      await this.connect();
    }

    return new Promise((resolve, reject) => {
      const id = this.nextRequestId++;
      const request = {
        jsonrpc: '2.0',
        id,
        method,
        params
      };

      this.pendingRequests.set(id, { resolve, reject });
      this.ws!.send(JSON.stringify(request));
    });
  }

  /**
   * Register an ABI for a specific contract address
   * 
   * @param address The contract address
   * @param abi The contract ABI
   */
  public registerAbi(address: string, abi: Abi): void {
    address = address.toLowerCase();
    this.abiMap.set(address, abi);

    // Extract and index events by their signature
    for (const item of abi) {
      if (item.type === 'event') {
        const signature = this.getEventSignature(item);
        const topic = this.getEventTopic(signature);
        this.eventSignatureMap.set(topic, item);
      }
    }
  }

  /**
   * Calculate the event signature (e.g., "Transfer(address,address,uint256)")
   */
  private getEventSignature(event: AbiEvent): string {
    return `${event.name}(${event.inputs.map(input => input.type).join(',')})`;
  }

  /**
   * Calculate the event topic (keccak256 hash of the event signature)
   */
  private getEventTopic(signature: string): string {
    // 使用js-sha3的keccak_256函数来计算哈希
    return '0x' + keccak_256(signature);
  }

  /**
   * Subscribe to a contract event
   * 
   * @param address The contract address
   * @param eventName The event name to listen for
   * @param handler The callback function when an event is received
   * @returns A subscription ID that can be used to unsubscribe
   */
  public async subscribeToEvent(
    address: string,
    eventName: string,
    handler: EventHandler
  ): Promise<string> {
    address = address.toLowerCase();
    const eventKey = `${address}::${eventName}`;

    // Check if the ABI for this contract is registered
    if (!this.abiMap.has(address)) {
      throw new Error(`ABI for contract at ${address} is not registered`);
    }

    // Find the event in the ABI
    const abi = this.abiMap.get(address)!;
    const eventAbi = abi.find(item => item.type === 'event' && item.name === eventName);

    if (!eventAbi) {
      throw new Error(`Event "${eventName}" not found in the ABI for contract at ${address}`);
    }

    // Subscribe to logs for this contract
    const params = [{
      address,
      topics: [this.getEventTopic(this.getEventSignature(eventAbi))]
    }];

    try {
      const subscriptionId = await this.sendRequest('eth_subscribe', ['logs', ...params]);
      this.subscriptions.set(eventKey, { id: subscriptionId, handler });
      return subscriptionId;
    } catch (error) {
      console.error(`Failed to subscribe to event ${eventName}:`, error);
      throw error;
    }
  }

  /**
   * Unsubscribe from a contract event
   * 
   * @param address The contract address
   * @param eventName The event name to unsubscribe from
   */
  public async unsubscribeFromEvent(address: string, eventName: string): Promise<void> {
    address = address.toLowerCase();
    const eventKey = `${address}::${eventName}`;

    if (!this.subscriptions.has(eventKey)) {
      console.warn(`No active subscription found for ${eventName} at ${address}`);
      return;
    }

    const { id } = this.subscriptions.get(eventKey)!;

    try {
      await this.sendRequest('eth_unsubscribe', [id]);
      this.subscriptions.delete(eventKey);
    } catch (error) {
      console.error(`Failed to unsubscribe from event ${eventName}:`, error);
      throw error;
    }
  }

  /**
   * Process and decode an incoming event log
   */
  private processEvent(eventKey: string, log: TransactionLog): void {
    const [address, eventName] = eventKey.split('::');
    const subscription = this.subscriptions.get(eventKey);

    if (!subscription) return;

    try {
      const eventAbi = this.abiMap.get(address)?.find(
        item => item.type === 'event' && item.name === eventName
      );

      if (!eventAbi) {
        throw new Error(`Event ABI not found for ${eventName}`);
      }

      // Decode the event data
      const decodedData = this.decodeEventData(log, eventAbi);

      // Call the event handler
      subscription.handler(decodedData);
    } catch (error) {
      console.error('Error processing event:', error);
    }
  }

  /**
   * Decode event data based on the ABI
   */
  private decodeEventData(log: TransactionLog, eventAbi: AbiEvent): DecodedEventData {
    const decodedParams: Record<string, any> = {};

    // Process indexed parameters (from topics)
    let topicIndex = 1; // Skip the first topic which is the event signature
    const indexedInputs = eventAbi.inputs.filter(input => input.indexed);

    for (const input of indexedInputs) {
      if (topicIndex < log.topics.length) {
        const topic = log.topics[topicIndex++];
        decodedParams[input.name] = this.decodeParameter(input.type, topic);
      }
    }

    // Process non-indexed parameters (from data)
    const nonIndexedInputs = eventAbi.inputs.filter(input => !input.indexed);

    if (nonIndexedInputs.length > 0 && log.data && log.data !== '0x') {
      // In a full implementation, you would split the data and decode each parameter
      // Here we're providing a simplified version
      const data = log.data.slice(2); // Remove '0x' prefix

      // Simple parsing based on assuming 32-byte (64 hex chars) chunks
      // This is a simplified approach - a complete implementation would handle complex types
      let dataIndex = 0;
      for (const input of nonIndexedInputs) {
        const chunk = data.slice(dataIndex, dataIndex + 64);
        if (chunk) {
          decodedParams[input.name] = this.decodeParameter(input.type, '0x' + chunk);
          dataIndex += 64;
        }
      }
    }

    return {
      eventName: eventAbi.name,
      params: decodedParams,
      raw: {
        topics: log.topics,
        data: log.data,
        address: log.address,
        blockNumber: log.blockNumber,
        transactionHash: log.transactionHash,
        logIndex: log.logIndex
      }
    };
  }

  /**
   * Decode a single parameter based on its type
   * This is a simplified implementation - a real one would handle all Ethereum types
   */
  private decodeParameter(type: string, value: string): any {
    if (!value) return null;

    // Handle address type
    if (type === 'address') {
      return '0x' + value.slice(-40);
    }

    // Handle boolean
    if (type === 'bool') {
      return value === '0x01' || value === '0x0000000000000000000000000000000000000000000000000000000000000001';
    }

    // Handle basic uint types
    if (type.startsWith('uint')) {
      return BigInt(value).toString();
    }

    // Handle basic int types
    if (type.startsWith('int')) {
      return BigInt(value).toString();
    }

    // Handle strings and bytes (simplified)
    if (type === 'string' || type === 'bytes') {
      // In a real implementation, you would handle dynamic types properly
      return value;
    }

    // Fallback
    return value;
  }

  /**
   * Close the WebSocket connection
   */
  public close(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.close();
    }
    this.subscriptions.clear();
    this.pendingRequests.clear();
    this.ws = null;
  }
}