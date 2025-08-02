// networks/cosmos/src/event/cosmos-event-client.ts
import { IRpcClient, SubscriptionError } from '@interchainjs/types';
import { ICosmosEventClient } from '../types/cosmos-client-interfaces';
import { RpcMethod, EventType } from '../types/protocol';
import { Block } from '../types/responses/common/block/block';
import { BlockHeader } from '../types/responses/common/header/block-header';
import { TxEvent, BlockEvent } from '../types/responses/common/event';

export class CosmosEventClient implements ICosmosEventClient {
  private activeSubscriptions = new Set<string>();

  constructor(
    private rpcClient: IRpcClient
  ) {}

  async* subscribeToEvents<TEvent>(
    eventType: string,
    filter?: unknown
  ): AsyncIterable<TEvent> {
    if (!this.rpcClient.isConnected()) {
      throw new SubscriptionError('RPC client not connected');
    }

    const subscriptionKey = `${eventType}_${JSON.stringify(filter)}`;

    if (this.activeSubscriptions.has(subscriptionKey)) {
      throw new SubscriptionError(`Already subscribed to ${eventType}`);
    }

    this.activeSubscriptions.add(subscriptionKey);

    try {
      const params = { query: this.buildQuery(eventType, filter) };
      // For SUBSCRIBE, just pass params directly since they're already in the correct format
      const encodedParams = params;

      for await (const event of this.rpcClient.subscribe<any>(RpcMethod.SUBSCRIBE, encodedParams)) {
        // For SUBSCRIBE, return the raw response as no specific decoding is needed
        const decoded = event;
        yield decoded as TEvent;
      }
    } finally {
      this.activeSubscriptions.delete(subscriptionKey);
    }
  }

  async* subscribeToBlocks(): AsyncIterable<Block> {
    for await (const event of this.subscribeToEvents<BlockEvent>(EventType.NEW_BLOCK)) {
      yield event.block;
    }
  }

  async* subscribeToBlockHeaders(): AsyncIterable<BlockHeader> {
    for await (const event of this.subscribeToEvents<{ header: BlockHeader }>(EventType.NEW_BLOCK_HEADER)) {
      yield event.header;
    }
  }

  async* subscribeToTxs(query?: string): AsyncIterable<TxEvent> {
    const filter = query ? { query } : undefined;
    for await (const event of this.subscribeToEvents<TxEvent>(EventType.TX, filter)) {
      yield event;
    }
  }

  async* subscribeToValidatorSetUpdates(): AsyncIterable<BlockEvent> {
    for await (const event of this.subscribeToEvents<BlockEvent>(EventType.VALIDATOR_SET_UPDATES)) {
      yield event;
    }
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

  private buildQuery(eventType: string, filter?: unknown): string {
    let query = `tm.event='${eventType}'`;

    if (filter && typeof filter === 'object') {
      const filterObj = filter as Record<string, any>;
      for (const [key, value] of Object.entries(filterObj)) {
        if (key === 'query') {
          // Custom query provided
          return value;
        }
        query += ` AND ${key}='${value}'`;
      }
    }

    return query;
  }
}