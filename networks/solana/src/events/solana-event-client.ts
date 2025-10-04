import { IRpcClient, SubscriptionError } from '@interchainjs/types';
import {
  AccountNotification,
  LogsNotification,
  ProgramNotification,
  RootNotification,
  SignatureNotification,
  SlotNotification,
  createAccountNotification,
  createLogsNotification,
  createProgramNotification,
  createRootNotification,
  createSignatureNotification,
  createSlotNotification
} from '../types/responses/events';
import {
  AccountSubscribeOptions,
  ISolanaEventClient,
  LogsSubscribeFilter,
  LogsSubscribeOptions,
  ProgramSubscribeOptions,
  SignatureSubscribeOptions,
  SolanaSubscription
} from '../types/solana-event-interfaces';

interface ActiveSubscriptionRecord {
  readonly id: string;
  readonly key: string;
  readonly method: string;
  readonly unsubscribeMethod?: string;
  readonly unsubscribe: () => Promise<void>;
}

type Decoder<TRaw, TEvent> = (data: TRaw) => TEvent;

type SubscriptionParams = unknown;

export class SolanaEventClient implements ISolanaEventClient {
  private readonly activeSubscriptions = new Map<string, ActiveSubscriptionRecord>();

  private readonly unsubscribeLookup: Record<string, string> = {
    accountSubscribe: 'accountUnsubscribe',
    programSubscribe: 'programUnsubscribe',
    logsSubscribe: 'logsUnsubscribe',
    signatureSubscribe: 'signatureUnsubscribe',
    slotSubscribe: 'slotUnsubscribe',
    rootSubscribe: 'rootUnsubscribe'
  };

  constructor(private readonly rpcClient: IRpcClient) {}

  async *subscribeToEvents<TEvent>(eventType: string, filter?: unknown): AsyncIterable<TEvent> {
    const unsubscribeMethod = this.unsubscribeLookup[eventType];
    if (!unsubscribeMethod) {
      throw new SubscriptionError(`Unsupported event type '${eventType}'`);
    }

    const params = filter === undefined ? [] : [filter];
    const key = this.createSubscriptionKey(eventType, params);
    const subscription = await this.createSubscription<any, TEvent>({
      method: eventType,
      unsubscribeMethod,
      params,
      key,
      decoder: (value: any) => value as TEvent
    });

    try {
      for await (const event of subscription) {
        yield event;
      }
    } finally {
      if (this.activeSubscriptions.has(key)) {
        await subscription.unsubscribe().catch(() => { /* ignore unsubscribe errors during teardown */ });
      }
    }
  }

  async unsubscribeFromAll(): Promise<void> {
    const subscriptions = Array.from(this.activeSubscriptions.values());
    const errors: Error[] = [];

    for (const entry of subscriptions) {
      try {
        await entry.unsubscribe();
      } catch (error: unknown) {
        errors.push(error instanceof Error ? error : new Error(String(error)));
      }
    }

    if (errors.length) {
      const firstError = errors[0];
      throw new SubscriptionError('Failed to unsubscribe from all Solana subscriptions', firstError);
    }
  }

  async disconnect(): Promise<void> {
    await this.unsubscribeFromAll().catch(() => { /* ignore */ });
    await this.rpcClient.disconnect();
    this.activeSubscriptions.clear();
  }

  async subscribeToAccount(
    account: string | { toString(): string },
    options?: AccountSubscribeOptions
  ): Promise<SolanaSubscription<AccountNotification>> {
    const address = this.normalizePubkey(account);
    const params: SubscriptionParams = [
      address,
      this.compactObject({
        commitment: options?.commitment ?? 'finalized',
        encoding: options?.encoding,
        dataSlice: options?.dataSlice
      })
    ];

    return this.createSubscription({
      method: 'accountSubscribe',
      unsubscribeMethod: 'accountUnsubscribe',
      params,
      key: this.createSubscriptionKey('accountSubscribe', params),
      decoder: createAccountNotification
    });
  }

  async subscribeToProgram(
    programId: string | { toString(): string },
    options?: ProgramSubscribeOptions
  ): Promise<SolanaSubscription<ProgramNotification>> {
    const address = this.normalizePubkey(programId);
    const params: SubscriptionParams = [
      address,
      this.compactObject({
        commitment: options?.commitment ?? 'finalized',
        encoding: options?.encoding,
        filters: options?.filters
      })
    ];

    return this.createSubscription({
      method: 'programSubscribe',
      unsubscribeMethod: 'programUnsubscribe',
      params,
      key: this.createSubscriptionKey('programSubscribe', params),
      decoder: createProgramNotification
    });
  }

  async subscribeToLogs(
    filter: LogsSubscribeFilter,
    options?: LogsSubscribeOptions
  ): Promise<SolanaSubscription<LogsNotification>> {
    const params: SubscriptionParams = [
      this.normalizeLogsFilter(filter),
      this.compactObject({
        commitment: options?.commitment ?? 'finalized'
      })
    ];

    return this.createSubscription({
      method: 'logsSubscribe',
      unsubscribeMethod: 'logsUnsubscribe',
      params,
      key: this.createSubscriptionKey('logsSubscribe', params),
      decoder: createLogsNotification
    });
  }

  async subscribeToSlot(): Promise<SolanaSubscription<SlotNotification>> {
    const params: SubscriptionParams = [];
    return this.createSubscription({
      method: 'slotSubscribe',
      unsubscribeMethod: 'slotUnsubscribe',
      params,
      key: this.createSubscriptionKey('slotSubscribe', params),
      decoder: createSlotNotification
    });
  }

  async subscribeToRoot(): Promise<SolanaSubscription<RootNotification>> {
    const params: SubscriptionParams = [];
    return this.createSubscription({
      method: 'rootSubscribe',
      unsubscribeMethod: 'rootUnsubscribe',
      params,
      key: this.createSubscriptionKey('rootSubscribe', params),
      decoder: createRootNotification
    });
  }

  async subscribeToSignature(
    signature: string,
    options?: SignatureSubscribeOptions
  ): Promise<SolanaSubscription<SignatureNotification>> {
    if (!signature) {
      throw new SubscriptionError('Signature must be provided for signature subscription');
    }

    const params: SubscriptionParams = [
      signature,
      this.compactObject({
        commitment: options?.commitment ?? 'finalized',
        enableReceivedNotification: options?.enableReceivedNotification
      })
    ];

    return this.createSubscription({
      method: 'signatureSubscribe',
      unsubscribeMethod: 'signatureUnsubscribe',
      params,
      key: this.createSubscriptionKey('signatureSubscribe', params),
      decoder: createSignatureNotification
    });
  }

  private async createSubscription<TRaw, TEvent>({
    method,
    unsubscribeMethod,
    params,
    key,
    decoder
  }: {
    readonly method: string;
    readonly unsubscribeMethod: string;
    readonly params: SubscriptionParams;
    readonly key: string;
    readonly decoder: Decoder<TRaw, TEvent>;
  }): Promise<SolanaSubscription<TEvent>> {
    await this.ensureConnected();

    if (this.activeSubscriptions.has(key)) {
      throw new SubscriptionError(`Already subscribed to ${method} with provided parameters`);
    }

    const iterable = this.rpcClient.subscribe<TRaw>(method, params);
    let subscriptionId: string;
    let canUnsubscribeFromServer = true;

    try {
      subscriptionId = await this.extractSubscriptionId(iterable);
    } catch (error) {
      canUnsubscribeFromServer = false;
      subscriptionId = this.generateLocalSubscriptionId(method, key);
    }

    let unsubscribed = false;
    const cleanup = () => {
      if (this.activeSubscriptions.has(key)) {
        this.activeSubscriptions.delete(key);
      }
    };

    const iterator = (async function* (): AsyncGenerator<TEvent> {
      try {
        for await (const raw of iterable) {
          yield decoder(raw);
        }
      } finally {
        unsubscribed = true;
        cleanup();
      }
    })();

    const originalReturn = iterator.return?.bind(iterator);

    const closeIterator = async () => {
      if (originalReturn) {
        try {
          await originalReturn(undefined);
        } catch {
          // Ignore return errors during cleanup
        }
      }
    };

    const unsubscribe = async () => {
      if (unsubscribed) {
        await closeIterator();
        cleanup();
        return;
      }

      unsubscribed = true;

      try {
        if (canUnsubscribeFromServer && unsubscribeMethod) {
          const formattedId = this.formatSubscriptionId(subscriptionId);
          await this.rpcClient.call(unsubscribeMethod, [formattedId]);
        }
      } catch (error: unknown) {
        cleanup();
        throw new SubscriptionError(`Failed to unsubscribe from ${method}`, error instanceof Error ? error : undefined);
      } finally {
        await closeIterator();
        cleanup();
      }
    };

    if (originalReturn) {
      iterator.return = async (value?: unknown) => {
        await unsubscribe().catch(() => { /* ignore unsubscribe errors */ });
        return originalReturn(value);
      };
    }

    const subscription: SolanaSubscription<TEvent> = Object.assign(iterator, {
      id: subscriptionId,
      method,
      unsubscribe
    });

    this.activeSubscriptions.set(key, {
      id: subscriptionId,
      key,
      method,
      unsubscribeMethod: canUnsubscribeFromServer ? unsubscribeMethod : undefined,
      unsubscribe
    });

    return subscription;
  }

  private createSubscriptionKey(method: string, params: SubscriptionParams): string {
    return `${method}:${JSON.stringify(params ?? [])}`;
  }

  private async ensureConnected(): Promise<void> {
    if (this.rpcClient.isConnected()) {
      return;
    }

    await this.rpcClient.connect();
  }

  private normalizePubkey(value: string | { toString(): string }): string {
    if (!value) {
      throw new SubscriptionError('Public key must be provided');
    }
    if (typeof value === 'string') {
      return value;
    }
    if (value && typeof value.toString === 'function') {
      return value.toString();
    }
    throw new SubscriptionError('Invalid public key type');
  }

  private normalizeLogsFilter(filter: LogsSubscribeFilter): LogsSubscribeFilter {
    if (filter === 'all') {
      return 'all';
    }

    if (typeof filter === 'object') {
      if ((filter as any).mentions && Array.isArray((filter as any).mentions)) {
        const mentions = (filter as any).mentions.map((item: unknown) => String(item));
        return { mentions };
      }
      if ((filter as any).filter === 'all') {
        return 'all';
      }
    }

    throw new SubscriptionError('Invalid logs subscription filter');
  }

  private compactObject<T extends Record<string, unknown>>(obj: T): T {
    const entries = Object.entries(obj).filter(([, value]) => value !== undefined && value !== null);
    return Object.fromEntries(entries) as T;
  }

  private async extractSubscriptionId<T>(iterable: AsyncIterable<T>): Promise<string> {
    const rpcClientWithLookup = this.rpcClient as IRpcClient & Record<string, unknown>;

    const idPromise = typeof (rpcClientWithLookup as any).getSubscriptionId === 'function'
      ? ((rpcClientWithLookup as any).getSubscriptionId(iterable) as Promise<string>)
      : undefined;
    if (!idPromise) {
      throw new SubscriptionError('Underlying RPC client does not expose subscription identifiers');
    }

    const subscriptionId = await idPromise;
    if (!subscriptionId) {
      throw new SubscriptionError('Received empty subscription identifier');
    }

    return subscriptionId;
  }

  private generateLocalSubscriptionId(method: string, key: string): string {
    return `${method}:${key}:${Date.now()}:${Math.random().toString(36).slice(2)}`;
  }

  private formatSubscriptionId(subscriptionId: string): number | string {
    return /^\d+$/.test(subscriptionId) ? Number(subscriptionId) : subscriptionId;
  }
}
