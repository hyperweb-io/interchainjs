export interface SignatureNotification {
  readonly context: {
    readonly slot: number | null;
  };
  readonly value: {
    readonly err: unknown;
    readonly signature: string | null;
  };
}

export function createSignatureNotification(data: unknown): SignatureNotification {
  const raw = data as any;

  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid signature notification payload');
  }

  const slotValue = raw?.context?.slot;
  const slot = slotValue === null || slotValue === undefined ? null : Number(slotValue);
  if (slot !== null && Number.isNaN(slot)) {
    throw new Error('Signature notification slot is invalid');
  }

  const value = raw?.value ?? {};
  return {
    context: { slot },
    value: {
      err: value?.err ?? null,
      signature: value?.signature ? String(value.signature) : null
    }
  };
}
