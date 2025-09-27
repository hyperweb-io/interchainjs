/**
 * HighestSnapshotSlot response
 */

import { createCodec, BaseCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';

export interface HighestSnapshotSlotResponse {
  full: number;
  incremental: number;
}

export function createHighestSnapshotSlotResponse(data: unknown): HighestSnapshotSlotResponse {
  const codec: BaseCodec<HighestSnapshotSlotResponse> = createCodec<HighestSnapshotSlotResponse>({
    full: ensureNumber,
    incremental: ensureNumber,
  });
  return codec.create(data);
}

