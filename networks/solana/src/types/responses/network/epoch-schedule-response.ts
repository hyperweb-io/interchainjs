/**
 * EpochSchedule response
 */

import { createCodec, BaseCodec } from '../../codec';
import { ensureNumber, ensureBoolean } from '../../codec/converters';

export interface EpochScheduleResponse {
  slotsPerEpoch: number;
  leaderScheduleSlotOffset: number;
  warmup: boolean;
  firstNormalEpoch: number;
  firstNormalSlot: number;
}

export function createEpochScheduleResponse(data: unknown): EpochScheduleResponse {
  const codec: BaseCodec<EpochScheduleResponse> = createCodec<EpochScheduleResponse>({
    slotsPerEpoch: ensureNumber,
    leaderScheduleSlotOffset: ensureNumber,
    warmup: ensureBoolean,
    firstNormalEpoch: ensureNumber,
    firstNormalSlot: ensureNumber,
  });
  return codec.create(data);
}

