// networks/cosmos/src/event/cosmos-event-client.ts
import { IRpcClient, SubscriptionError } from '@interchainjs/types';
import { ICosmosEventClient } from '../types/cosmos-client-interfaces.js';
import { RpcMethod, EventType } from '../types/protocol.js';
import { Block, BlockHeader, TxEvent, BlockEvent } from '../types/responses.js';
import { IProtocolAdapter } from '../adapters/base.js';

export class CosmosEventClient implements ICosmosEventClient {
  private activeSubscriptions = new Set<string>();

  constructor(
    private rpcClient: IRpcClient,
    private protocolAdapter: IProtocolAdapter
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
      const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.SUBSCRIBE, params);
      
      for await (const event of this.rpcClient.subscribe<any>(RpcMethod.SUBSCRIBE, encodedParams)) {
        const decoded = this.protocolAdapter.decodeResponse(RpcMethod.SUBSCRIBE, event);
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