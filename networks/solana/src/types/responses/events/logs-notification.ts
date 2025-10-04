export interface LogsNotification {
  readonly context: {
    readonly slot: number;
  };
  readonly value: {
    readonly err: unknown;
    readonly logs: readonly string[];
    readonly signature: string | null;
  };
}

export function createLogsNotification(data: unknown): LogsNotification {
  const raw = data as any;

  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid logs notification payload');
  }

  const slot = Number(raw?.context?.slot ?? 0);
  if (Number.isNaN(slot)) {
    throw new Error('Logs notification missing slot');
  }

  const logsValue = raw?.value ?? {};
  const logsArray = Array.isArray(logsValue?.logs) ? logsValue.logs.map((entry: unknown) => String(entry)) : [];

  return {
    context: { slot },
    value: {
      err: logsValue?.err ?? null,
      logs: logsArray,
      signature: logsValue?.signature ? String(logsValue.signature) : null
    }
  };
}
