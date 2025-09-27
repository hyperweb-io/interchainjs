/**
 * Response type for getInflationReward RPC method
 */

import { createCodec, ensureNumber, apiToBigInt } from '../../codec';

export interface InflationRewardItem {
  epoch: number;
  effectiveSlot: number;
  amount: bigint; // lamports
  postBalance: bigint; // lamports
  commission?: number;
}

export type InflationRewardResponse = Array<InflationRewardItem | null>;

const InflationRewardItemCodec = createCodec<InflationRewardItem>({
  epoch: ensureNumber,
  effectiveSlot: ensureNumber,
  amount: (v: unknown) => apiToBigInt(v) ?? 0n,
  postBalance: (v: unknown) => apiToBigInt(v) ?? 0n,
  commission: (v: unknown) => (v === undefined ? undefined : ensureNumber(v))
});

export function createInflationRewardResponse(data: unknown): InflationRewardResponse {
  if (!Array.isArray(data)) return [];
  return data.map((item) => (item == null ? null : InflationRewardItemCodec.create(item)));
}

