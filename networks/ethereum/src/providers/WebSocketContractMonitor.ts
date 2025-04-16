import { WebSocketProvider } from './WebSocketProvider';
import { DecodedEventData, Abi } from '../types/events';

/**
 * Contract class for interacting with Ethereum smart contracts via WebSocket
 * This class provides a simplified API for monitoring contract events
 */
export class WebSocketContractMonitor {
  private provider: WebSocketProvider;
  private address: string;
  private abi: Abi;
  private isConnected: boolean = false;

  /**
   * Create a new Contract instance
   * 
   * @param address The contract address
   * @param abi The contract ABI
   * @param wsUrl The WebSocket URL to connect to
   */
  constructor(address: string, abi: Abi, wsUrl: string) {
    this.address = address.toLowerCase();
    this.abi = abi;
    this.provider = new WebSocketProvider(wsUrl);

    // Register the ABI with the provider
    this.provider.registerAbi(this.address, this.abi);
  }

  /**
   * Connect to the WebSocket provider
   * @returns A promise that resolves when the connection is established
   * @throws Error if connection fails
   */
  public async connect(): Promise<void> {
    if (this.isConnected) {
      return; // 避免重复连接
    }

    try {
      await this.provider.connect();
      this.isConnected = true;
    } catch (error) {
      console.error('Failed to connect to WebSocket provider:', error);
      throw error;
    }
  }

  /**
   * Listen for a specific contract event
   * 
   * @param eventName The name of the event to listen for
   * @param callback Function to call when the event is emitted
   * @returns A promise that resolves to the subscription ID
   * @throws Error if not connected or subscription fails
   */
  public async on(
    eventName: string,
    callback: (event: DecodedEventData) => void
  ): Promise<string> {
    if (!this.isConnected) {
      throw new Error('WebSocket not connected. Call connect() first');
    }

    try {
      return await this.provider.subscribeToEvent(this.address, eventName, callback);
    } catch (error) {
      console.error(`Failed to subscribe to event ${eventName}:`, error);
      throw error;
    }
  }

  /**
   * Stop listening for a specific contract event
   * 
   * @param eventName The name of the event to stop listening for
   * @throws Error if unsubscribe fails
   */
  public async off(eventName: string): Promise<void> {
    if (!this.isConnected) {
      return;
    }

    try {
      await this.provider.unsubscribeFromEvent(this.address, eventName);
    } catch (error) {
      console.error(`Failed to unsubscribe from event ${eventName}:`, error);
      throw error;
    }
  }

  /**
   * Check if the WebSocket is currently connected
   * @returns boolean indicating connection status
   */
  public isConnectedToProvider(): boolean {
    return this.isConnected;
  }

  /**
   * Close the WebSocket connection and remove all event listeners
   * @returns A promise that resolves when the connection is closed
   */
  public async close(): Promise<void> {
    if (!this.isConnected) {
      return;
    }

    try {
      await this.provider.close();
      this.isConnected = false;
    } catch (error) {
      console.error('Error while closing WebSocket connection:', error);
      this.isConnected = false;
    }
  }
}