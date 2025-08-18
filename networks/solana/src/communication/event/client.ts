/**
 * Solana Event Client for WebSocket Subscriptions
 */

import { 
  SolanaEventClient as ISolanaEventClient,
  ISolanaRpcClient,
  ISolanaProtocolAdapter
} from '../../types/client';
import { 
  SolanaMethod,
  AccountSubscribeParams,
  ProgramSubscribeParams,
  LogsSubscribeParams,
  SignatureSubscribeParams,
  CommitmentLevel
} from '../../types/protocol';
import { PublicKey, AccountInfo } from '../../types/common';
import { mapToSolanaError } from '../../errors';

/**
 * Event client for managing WebSocket subscriptions
 */
export class SolanaEventClient implements ISolanaEventClient {
  private activeSubscriptions: Map<string, number> = new Map();

  constructor(
    private wsClient: ISolanaRpcClient,
    private adapter: ISolanaProtocolAdapter
  ) {}

  async connect(): Promise<void> {
    await this.wsClient.connect();
  }

  async disconnect(): Promise<void> {
    // Unsubscribe from all active subscriptions
    for (const [subscriptionKey, subscriptionId] of this.activeSubscriptions) {
      try {
        const unsubscribeMethod = this.getUnsubscribeMethod(subscriptionKey);
        await this.wsClient.call(unsubscribeMethod, [subscriptionId]);
      } catch (error) {
        // Ignore unsubscribe errors during disconnect
      }
    }
    
    this.activeSubscriptions.clear();
    await this.wsClient.disconnect();
  }

  isConnected(): boolean {
    return this.wsClient.isConnected();
  }

  async subscribe<TEvent>(event: string, callback: (event: TEvent) => void): Promise<string> {
    // This is a generic subscribe method - specific methods below are preferred
    throw new Error('Use specific subscription methods like subscribeToAccount, subscribeToProgram, etc.');
  }

  async unsubscribe(subscriptionId: string): Promise<void> {
    const numericId = this.activeSubscriptions.get(subscriptionId);
    if (!numericId) {
      throw new Error(`Subscription ${subscriptionId} not found`);
    }

    try {
      const unsubscribeMethod = this.getUnsubscribeMethod(subscriptionId);
      await this.wsClient.call(unsubscribeMethod, [numericId]);
      this.activeSubscriptions.delete(subscriptionId);
    } catch (error) {
      throw mapToSolanaError(error, 'unsubscribe');
    }
  }

  // Solana-specific subscription methods

  async subscribeToAccount(
    publicKey: PublicKey,
    callback: (accountInfo: AccountInfo | null) => void,
    commitment?: CommitmentLevel,
    encoding: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed' = 'base64'
  ): Promise<string> {
    try {
      const params: AccountSubscribeParams = {
        publicKey: publicKey.toBase58(),
        commitment,
        encoding
      };

      const subscriptionId = await this.wsClient.call<AccountSubscribeParams, number>(
        SolanaMethod.ACCOUNT_SUBSCRIBE,
        params
      );

      const subscriptionKey = `account:${publicKey.toBase58()}`;
      this.activeSubscriptions.set(subscriptionKey, subscriptionId);

      // Set up the subscription listener
      this.setupSubscriptionListener(subscriptionId, callback);

      return subscriptionKey;
    } catch (error) {
      throw mapToSolanaError(error, 'subscribeToAccount');
    }
  }

  async subscribeToProgram(
    programId: PublicKey,
    callback: (programInfo: any) => void,
    commitment?: CommitmentLevel,
    encoding: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed' = 'base64',
    filters?: Array<{
      memcmp?: { offset: number; bytes: string };
      dataSize?: number;
    }>
  ): Promise<string> {
    try {
      const params: ProgramSubscribeParams = {
        programId: programId.toBase58(),
        commitment,
        encoding,
        filters
      };

      const subscriptionId = await this.wsClient.call<ProgramSubscribeParams, number>(
        SolanaMethod.PROGRAM_SUBSCRIBE,
        params
      );

      const subscriptionKey = `program:${programId.toBase58()}`;
      this.activeSubscriptions.set(subscriptionKey, subscriptionId);

      // Set up the subscription listener
      this.setupSubscriptionListener(subscriptionId, callback);

      return subscriptionKey;
    } catch (error) {
      throw mapToSolanaError(error, 'subscribeToProgram');
    }
  }

  async subscribeToLogs(
    filter: 'all' | 'allWithVotes' | { mentions: string[] },
    callback: (logs: any) => void,
    commitment?: CommitmentLevel
  ): Promise<string> {
    try {
      const params: LogsSubscribeParams = {
        filter,
        commitment
      };

      const subscriptionId = await this.wsClient.call<LogsSubscribeParams, number>(
        SolanaMethod.LOGS_SUBSCRIBE,
        params
      );

      const subscriptionKey = `logs:${JSON.stringify(filter)}`;
      this.activeSubscriptions.set(subscriptionKey, subscriptionId);

      // Set up the subscription listener
      this.setupSubscriptionListener(subscriptionId, callback);

      return subscriptionKey;
    } catch (error) {
      throw mapToSolanaError(error, 'subscribeToLogs');
    }
  }

  async subscribeToSignature(
    signature: string,
    callback: (signatureInfo: any) => void,
    commitment?: CommitmentLevel,
    enableReceivedNotification: boolean = false
  ): Promise<string> {
    try {
      const params: SignatureSubscribeParams = {
        signature,
        commitment,
        enableReceivedNotification
      };

      const subscriptionId = await this.wsClient.call<SignatureSubscribeParams, number>(
        SolanaMethod.SIGNATURE_SUBSCRIBE,
        params
      );

      const subscriptionKey = `signature:${signature}`;
      this.activeSubscriptions.set(subscriptionKey, subscriptionId);

      // Set up the subscription listener
      this.setupSubscriptionListener(subscriptionId, callback);

      return subscriptionKey;
    } catch (error) {
      throw mapToSolanaError(error, 'subscribeToSignature');
    }
  }

  async subscribeToSlot(
    callback: (slotInfo: any) => void
  ): Promise<string> {
    try {
      const subscriptionId = await this.wsClient.call<undefined, number>(
        SolanaMethod.SLOT_SUBSCRIBE,
        undefined
      );

      const subscriptionKey = 'slot';
      this.activeSubscriptions.set(subscriptionKey, subscriptionId);

      // Set up the subscription listener
      this.setupSubscriptionListener(subscriptionId, callback);

      return subscriptionKey;
    } catch (error) {
      throw mapToSolanaError(error, 'subscribeToSlot');
    }
  }

  async subscribeToRoot(
    callback: (rootInfo: any) => void
  ): Promise<string> {
    try {
      const subscriptionId = await this.wsClient.call<undefined, number>(
        SolanaMethod.ROOT_SUBSCRIBE,
        undefined
      );

      const subscriptionKey = 'root';
      this.activeSubscriptions.set(subscriptionKey, subscriptionId);

      // Set up the subscription listener
      this.setupSubscriptionListener(subscriptionId, callback);

      return subscriptionKey;
    } catch (error) {
      throw mapToSolanaError(error, 'subscribeToRoot');
    }
  }

  // Utility methods

  getActiveSubscriptions(): string[] {
    return Array.from(this.activeSubscriptions.keys());
  }

  async unsubscribeFromAccount(publicKey: PublicKey): Promise<void> {
    const subscriptionKey = `account:${publicKey.toBase58()}`;
    await this.unsubscribe(subscriptionKey);
  }

  async unsubscribeFromProgram(programId: PublicKey): Promise<void> {
    const subscriptionKey = `program:${programId.toBase58()}`;
    await this.unsubscribe(subscriptionKey);
  }

  async unsubscribeFromSignature(signature: string): Promise<void> {
    const subscriptionKey = `signature:${signature}`;
    await this.unsubscribe(subscriptionKey);
  }

  // Private helper methods

  private setupSubscriptionListener(subscriptionId: number, callback: (data: any) => void): void {
    // Note: This is a simplified implementation
    // In a real implementation, you would need to handle the WebSocket message routing
    // The WebSocket client should route messages based on subscription ID to the appropriate callback
    
    // For now, we assume the WebSocket client handles this internally
    // This would need to be implemented in the WebSocket client's message handling
  }

  private getUnsubscribeMethod(subscriptionKey: string): SolanaMethod {
    if (subscriptionKey.startsWith('account:')) {
      return SolanaMethod.ACCOUNT_UNSUBSCRIBE;
    } else if (subscriptionKey.startsWith('program:')) {
      return SolanaMethod.PROGRAM_UNSUBSCRIBE;
    } else if (subscriptionKey.startsWith('logs:')) {
      return SolanaMethod.LOGS_UNSUBSCRIBE;
    } else if (subscriptionKey.startsWith('signature:')) {
      return SolanaMethod.SIGNATURE_UNSUBSCRIBE;
    } else if (subscriptionKey === 'slot') {
      return SolanaMethod.SLOT_UNSUBSCRIBE;
    } else if (subscriptionKey === 'root') {
      return SolanaMethod.ROOT_UNSUBSCRIBE;
    } else {
      throw new Error(`Unknown subscription type: ${subscriptionKey}`);
    }
  }
}

/**
 * Factory function to create event client
 */
export function createSolanaEventClient(
  wsClient: ISolanaRpcClient,
  adapter: ISolanaProtocolAdapter
): SolanaEventClient {
  return new SolanaEventClient(wsClient, adapter);
}
