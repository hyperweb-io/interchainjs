// packages/types/src/query.ts
export interface IQueryClient {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  isConnected(): boolean;
  readonly endpoint: string;
}

export interface IEventClient {
  subscribeToEvents<TEvent>(eventType: string, filter?: unknown): AsyncIterable<TEvent>;
  unsubscribeFromAll(): Promise<void>;
}