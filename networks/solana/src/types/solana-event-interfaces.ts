import { IEventClient } from '@interchainjs/types';
import {
  AccountNotification,
  BlockNotification,
  LogsNotification,
  ProgramNotification,
  RootNotification,
  SignatureNotification,
  SlotNotification,
  SlotsUpdatesNotification,
  VoteNotification
} from './responses/events';

export type CommitmentLevel = 'processed' | 'confirmed' | 'finalized';

export interface AccountSubscribeOptions {
  readonly commitment?: CommitmentLevel;
  readonly encoding?: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed';
  readonly dataSlice?: {
    readonly offset: number;
    readonly length: number;
  };
}

export interface ProgramSubscribeOptions {
  readonly commitment?: CommitmentLevel;
  readonly encoding?: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed';
  readonly filters?: ReadonlyArray<{ readonly dataSize?: number; readonly memcmp?: { readonly offset: number; readonly bytes: string } }>;
}

export type LogsSubscribeFilter =
  | 'all'
  | { readonly mentions: readonly string[] }
  | { readonly filter: 'all' };

export interface LogsSubscribeOptions {
  readonly commitment?: CommitmentLevel;
}

export interface SignatureSubscribeOptions {
  readonly commitment?: CommitmentLevel;
  readonly enableReceivedNotification?: boolean;
}

export interface BlockSubscribeFilter {
  readonly mentionsAccountOrProgram: string | { toString(): string };
}

export interface BlockSubscribeOptions {
  readonly commitment?: CommitmentLevel;
  readonly encoding?: 'json' | 'jsonParsed' | 'base64' | 'base58';
  readonly transactionDetails?: 'full' | 'signatures' | 'none';
  readonly maxSupportedTransactionVersion?: number;
  readonly showRewards?: boolean;
}

export interface SolanaSubscription<TEvent> extends AsyncIterable<TEvent> {
  readonly id: string;
  readonly method: string;
  unsubscribe(): Promise<void>;
}

export interface ISolanaEventClient extends IEventClient {
  subscribeToAccount(
    account: string | { toString(): string },
    options?: AccountSubscribeOptions
  ): Promise<SolanaSubscription<AccountNotification>>;

  subscribeToProgram(
    programId: string | { toString(): string },
    options?: ProgramSubscribeOptions
  ): Promise<SolanaSubscription<ProgramNotification>>;

  subscribeToLogs(
    filter: LogsSubscribeFilter,
    options?: LogsSubscribeOptions
  ): Promise<SolanaSubscription<LogsNotification>>;

  subscribeToBlock(
    filter: BlockSubscribeFilter,
    options?: BlockSubscribeOptions
  ): Promise<SolanaSubscription<BlockNotification>>;

  subscribeToSlot(): Promise<SolanaSubscription<SlotNotification>>;
  subscribeToRoot(): Promise<SolanaSubscription<RootNotification>>;
  subscribeToSignature(
    signature: string,
    options?: SignatureSubscribeOptions
  ): Promise<SolanaSubscription<SignatureNotification>>;

  subscribeToSlotsUpdates(): Promise<SolanaSubscription<SlotsUpdatesNotification>>;
  subscribeToVote(): Promise<SolanaSubscription<VoteNotification>>;

  disconnect(): Promise<void>;
}
