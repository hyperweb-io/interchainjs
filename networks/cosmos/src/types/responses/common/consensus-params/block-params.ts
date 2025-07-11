/**
 * BlockParams type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString } from '../../../codec/converters';

// Types
export interface BlockParams {
  readonly maxBytes: number;
  readonly maxGas: number;
  readonly timeIotaMs?: number;
}

// Codec
export const BlockParamsCodec = createCodec<BlockParams>({
  maxBytes: { source: 'max_bytes', converter: ensureNumber },
  maxGas: { source: 'max_gas', converter: ensureNumber },
  timeIotaMs: { source: 'time_iota_ms', converter: ensureNumber }
});

// Factory function
export function createBlockParams(data: unknown): BlockParams {
  return BlockParamsCodec.create(data);
}
