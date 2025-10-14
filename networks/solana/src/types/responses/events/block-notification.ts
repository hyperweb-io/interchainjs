import { createBlockResponse, type BlockResponse } from '../block/block-response';

export interface BlockNotification {
  readonly context: {
    readonly slot: number;
  };
  readonly value: {
    readonly slot: number;
    readonly block: BlockResponse | null;
    readonly err: unknown;
  };
}

export function createBlockNotification(data: unknown): BlockNotification {
  const raw = data as Record<string, any> | null;

  if (!raw || typeof raw !== 'object') {
    throw new Error('Invalid block notification payload');
  }

  const context = raw.context ?? {};
  const contextSlot = Number(context.slot ?? 0);
  if (!Number.isFinite(contextSlot) || contextSlot < 0) {
    throw new Error('Block notification missing context slot');
  }

  const value = raw.value ?? {};
  const slot = Number(value.slot ?? contextSlot);
  if (!Number.isFinite(slot) || slot < 0) {
    throw new Error('Block notification missing slot');
  }

  const block = value.block === null || value.block === undefined ? null : createBlockResponse(value.block);

  return {
    context: { slot: contextSlot },
    value: {
      slot,
      block,
      err: value.err ?? null
    }
  };
}
