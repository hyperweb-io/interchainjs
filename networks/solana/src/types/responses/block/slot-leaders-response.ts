/**
 * SlotLeaders response
 */

import { ensureString } from '../../codec';

export type SlotLeadersResponse = string[];

export function createSlotLeadersResponse(data: unknown): SlotLeadersResponse {
  const arr = Array.isArray((data as any)?.result) ? (data as any).result : Array.isArray(data) ? data : [];
  return arr.map((s: unknown) => ensureString(s) ?? '');
}

