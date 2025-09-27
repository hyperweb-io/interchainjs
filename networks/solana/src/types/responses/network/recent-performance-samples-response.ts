/**
 * Response type for getRecentPerformanceSamples RPC method
 */

import { createCodec, ensureNumber } from '../../codec';

export interface RecentPerformanceSample {
  numSlots: number;
  numTransactions: number;
  samplePeriodSecs: number;
  slot: number;
}

export type RecentPerformanceSamplesResponse = RecentPerformanceSample[];

const RecentPerformanceSampleCodec = createCodec<RecentPerformanceSample>({
  numSlots: ensureNumber,
  numTransactions: ensureNumber,
  samplePeriodSecs: ensureNumber,
  slot: ensureNumber
});

export function createRecentPerformanceSamplesResponse(data: unknown): RecentPerformanceSamplesResponse {
  if (!Array.isArray(data)) return [];
  return data.map((item) => RecentPerformanceSampleCodec.create(item));
}

