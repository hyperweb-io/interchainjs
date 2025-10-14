/**
 * HighestSnapshotSlot response
 */

import { createCodec, BaseCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';

export interface HighestSnapshotSlotResponse {
  full: number;
  incremental: number | null;
}

export function createHighestSnapshotSlotResponse(data: unknown): HighestSnapshotSlotResponse {
  if (typeof data === 'number') {
    return {
      full: ensureNumber(data),
      incremental: null
    };
  }

  const codec: BaseCodec<HighestSnapshotSlotResponse> = createCodec<HighestSnapshotSlotResponse>({
    full: ensureNumber,
    incremental: (value: unknown) => {
      if (value === null) {
        return null;
      }
      return ensureNumber(value);
    }
  });
  return codec.create(data);
}
