export type SlotsUpdatesType =
  | 'firstShredReceived'
  | 'completed'
  | 'createdBank'
  | 'frozen'
  | 'dead'
  | 'optimisticConfirmation'
  | 'root';

export interface SlotsUpdatesStats {
  readonly maxTransactionsPerEntry: number;
  readonly numFailedTransactions: number;
  readonly numSuccessfulTransactions: number;
  readonly numTransactionEntries: number;
}

export interface SlotsUpdatesNotification {
  readonly slot: number;
  readonly type: SlotsUpdatesType | string;
  readonly timestamp: number | null;
  readonly parent?: number;
  readonly err?: string;
  readonly stats?: SlotsUpdatesStats;
}

export function createSlotsUpdatesNotification(data: unknown): SlotsUpdatesNotification {
  const raw = data as Record<string, any> | null;

  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid slotsUpdates notification payload');
  }

  const slot = Number(raw.slot ?? raw?.value?.slot ?? 0);
  if (!Number.isFinite(slot) || slot < 0) {
    throw new Error('slotsUpdates notification missing slot');
  }

  const type = String(raw.type ?? '');
  if (!type) {
    throw new Error('slotsUpdates notification missing type');
  }

  const timestampValue = raw.timestamp;
  const timestampNumber =
    timestampValue === null || timestampValue === undefined ? null : Number(timestampValue);
  const timestamp = timestampNumber === null || Number.isFinite(timestampNumber) ? timestampNumber : null;

  const parentValue = raw.parent;
  const parentNumber = parentValue === undefined || parentValue === null ? undefined : Number(parentValue);
  const parent = parentNumber === undefined || Number.isNaN(parentNumber) ? undefined : parentNumber;

  const err = typeof raw.err === 'string' ? raw.err : undefined;

  let stats: SlotsUpdatesStats | undefined;
  if (raw.stats && typeof raw.stats === 'object') {
    const statsObj = raw.stats as Record<string, any>;
    stats = {
      maxTransactionsPerEntry: Number(statsObj.maxTransactionsPerEntry ?? 0),
      numFailedTransactions: Number(statsObj.numFailedTransactions ?? 0),
      numSuccessfulTransactions: Number(statsObj.numSuccessfulTransactions ?? 0),
      numTransactionEntries: Number(statsObj.numTransactionEntries ?? 0)
    };
  }

  return {
    slot,
    type,
    timestamp,
    parent,
    err,
    stats
  };
}
