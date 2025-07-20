// networks/cosmos/src/event/cosmos-event-client-refactored.ts
import { IRpcClient, SubscriptionError } from '@interchainjs/types';
import { ICosmosProtocolAdapter } from '../adapters/base';
import { RpcMethod } from '../types/protocol';
import { SubscribeParams } from '../types/requests/common/events';
import { NewBlockEvent } from '../types/responses/common/block/block-event';
import { TxEvent } from '../types/responses/common/tx/tx-event';
import { ValidatorSetUpdateEvent } from '../types/responses/common/validators/validator-set-update-event';
import { HeaderEvent } from '../types/responses/common/header/header-event';

export interface ICosmosEventClient {
  subscribeToNewBlocks(): AsyncIterable<NewBlockEvent>;
  subscribeToTxs(query?: string): AsyncIterable<TxEvent>;
  subscribeToValidatorSetUpdates(): AsyncIterable<ValidatorSetUpdateEvent>;
  subscribeToBlockHeaders(): AsyncIterable<HeaderEvent>;
  unsubscribeFromAll(): Promise<void>;
}

export class CosmosEventClient implements ICosmosEventClient {
  private activeSubscriptions = new Set<string>();

  constructor(
    private rpcClient: IRpcClient,
    private protocolAdapter: ICosmosProtocolAdapter
  ) {}

  subscribeToNewBlocks(): AsyncIterable<NewBlockEvent> {
    return this.subscribeToEventsInternal('NewBlock');
  }

  subscribeToTxs(query?: string): AsyncIterable<TxEvent> {
    const params: SubscribeParams = query ? { query } : {};
    return this.subscribeToEventsInternal('Tx', params);
  }

  subscribeToValidatorSetUpdates(): AsyncIterable<ValidatorSetUpdateEvent> {
    return this.subscribeToEventsInternal('ValidatorSetUpdates');
  }

  subscribeToBlockHeaders(): AsyncIterable<HeaderEvent> {
    return this.subscribeToEventsInternal('NewBlockHeader');
  }

  private async* subscribeToEventsInternal<T>(
    eventType: string,
    params?: SubscribeParams
  ): AsyncIterable<T> {
    if (!this.rpcClient.isConnected()) {
      throw new SubscriptionError('RPC client not connected');
    }

    const subscriptionKey = `${eventType}_${JSON.stringify(params)}`;
    
    if (this.activeSubscriptions.has(subscriptionKey)) {
      throw new SubscriptionError(`Already subscribed to ${eventType}`);
    }

    this.activeSubscriptions.add(subscriptionKey);

    try {
      const query = this.buildQuery(eventType, params);
      const subscribeParams = { query };
      const encodedParams = this.protocolAdapter.encodeSubscribe(subscribeParams);
      
      for await (const event of this.rpcClient.subscribe<any>(RpcMethod.SUBSCRIBE, encodedParams)) {
        const decoded = this.decodeEventByType(eventType, event);
        yield decoded as T;
      }
    } finally {
      this.activeSubscriptions.delete(subscriptionKey);
    }
  }

  private decodeEventByType(eventType: string, event: any): any {
    const resp = event as Record<string, unknown>;
    const data = (resp.data || resp) as Record<string, unknown>;

    switch (eventType) {
      case 'NewBlock':
        return this.protocolAdapter.decodeNewBlockEvent(data);
      case 'Tx':
        return this.protocolAdapter.decodeTxEvent(data);
      case 'ValidatorSetUpdates':
        return this.protocolAdapter.decodeValidatorSetUpdateEvent(data);
      case 'NewBlockHeader':
        return this.protocolAdapter.decodeBlockHeaderEvent(data);
      default:
        return data;
    }
  }

  private buildQuery(eventType: string, params?: SubscribeParams): string {
    let query = `tm.event='${eventType}'`;
    
    if (params?.query) {
      return params.query;
    }
    
    return query;
  }

  async unsubscribeFromAll(): Promise<void> {
    if (!this.rpcClient.isConnected()) {
      return;
    }

    try {
      await this.rpcClient.call(RpcMethod.UNSUBSCRIBE_ALL);
      this.activeSubscriptions.clear();
    } catch (error: any) {
      throw new SubscriptionError(`Failed to unsubscribe: ${error.message}`, error);
    }
  }
}