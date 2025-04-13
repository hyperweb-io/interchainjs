import { WebSocketProvider } from './WebSocketProvider';
import { DecodedEventData } from '../types/events';

/**
 * Contract class for interacting with Ethereum smart contracts via WebSocket
 * This class provides a simplified API for monitoring contract events
 */
export class WebSocketContractMonitor {
  private provider: WebSocketProvider;
  private address: string;
  private abi: any[];

  /**
   * Create a new Contract instance
   * 
   * @param address The contract address
   * @param abi The contract ABI
   * @param wsUrl The WebSocket URL to connect to
   */
  constructor(address: string, abi: any[], wsUrl: string) {
    this.address = address.toLowerCase();
    this.abi = abi;
    this.provider = new WebSocketProvider(wsUrl);

    // Register the ABI with the provider
    this.provider.registerAbi(this.address, this.abi);
  }

  /**
   * Connect to the WebSocket provider
   */
  public async connect(): Promise<void> {
    await this.provider.connect();
  }

  /**
   * Listen for a specific contract event
   * 
   * @param eventName The name of the event to listen for
   * @param callback Function to call when the event is emitted
   * @returns A promise that resolves to the subscription ID
   */
  public async on(
    eventName: string,
    callback: (event: DecodedEventData) => void
  ): Promise<string> {
    return this.provider.subscribeToEvent(this.address, eventName, callback);
  }

  /**
   * Stop listening for a specific contract event
   * 
   * @param eventName The name of the event to stop listening for
   */
  public async off(eventName: string): Promise<void> {
    await this.provider.unsubscribeFromEvent(this.address, eventName);
  }

  /**
   * Close the WebSocket connection and remove all event listeners
   */
  public close(): void {
    this.provider.close();
  }
}