/**
 * Response type for getEpochInfo RPC method
 */

import { createCodec, ensureNumber } from '../../codec';

export interface EpochInfoResponse {
  epoch: number;
  slotIndex: number;
  slotsInEpoch: number;
  absoluteSlot: number;
  blockHeight: number;
  transactionCount?: number;
}

export const EpochInfoResponseCodec = createCodec<EpochInfoResponse>({
  epoch: { required: true, converter: ensureNumber },
  slotIndex: { required: true, converter: ensureNumber },
  slotsInEpoch: { required: true, converter: ensureNumber },
  absoluteSlot: { required: true, converter: ensureNumber },
  blockHeight: { required: true, converter: ensureNumber },
  transactionCount: {
    source: 'transactionCount',
    converter: (v: unknown) => (v === undefined ? undefined : ensureNumber(v))
  }
});

export function createEpochInfoResponse(data: unknown): EpochInfoResponse {
  return EpochInfoResponseCodec.create(data);
}

