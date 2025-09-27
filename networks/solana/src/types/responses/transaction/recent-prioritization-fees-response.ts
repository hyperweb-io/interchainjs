/**
 * Recent Prioritization Fees response
 */

import { createCodec, BaseCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';

export interface PrioritizationFeeItem {
  slot: number;
  prioritizationFee: number;
}

export type RecentPrioritizationFeesResponse = PrioritizationFeeItem[];

export function createRecentPrioritizationFeesResponse(data: unknown): RecentPrioritizationFeesResponse {
  const itemCodec: BaseCodec<PrioritizationFeeItem> = createCodec<PrioritizationFeeItem>({
    slot: ensureNumber,
    prioritizationFee: ensureNumber,
  });
  if (!Array.isArray(data)) return [];
  return data.map(d => itemCodec.create(d));
}

