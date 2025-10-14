/**
 * SlotLeader response
 */

import { ensureString } from '../../codec';

export type SlotLeaderResponse = string;

export function createSlotLeaderResponse(data: unknown): SlotLeaderResponse {
  const s = ensureString((data as any)?.result ?? data);
  if (!s) throw new Error('Invalid slot leader response');
  return s;
}

