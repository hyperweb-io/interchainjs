export interface SlotNotification {
  readonly parent: number;
  readonly root: number;
  readonly slot: number;
}

export function createSlotNotification(data: unknown): SlotNotification {
  const raw = data as any;
  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid slot notification payload');
  }

  const parent = Number(raw?.parent ?? 0);
  const root = Number(raw?.root ?? 0);
  const slot = Number(raw?.slot ?? 0);

  if ([parent, root, slot].some(value => Number.isNaN(value))) {
    throw new Error('Slot notification contains invalid numeric fields');
  }

  return { parent, root, slot };
}
