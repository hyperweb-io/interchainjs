/**
 * GetBlockTime response types and codec
 */

import { createCodec, ensureNumber } from '../../codec';

export type BlockTimeResponse = number | null;

export const BlockTimeResponseCodec = createCodec<BlockTimeResponse>({
  // passthrough via factory
});

export function createBlockTimeResponse(data: unknown): BlockTimeResponse {
  if (data === null || data === undefined) return null;
  return ensureNumber(data) ?? null;
}

