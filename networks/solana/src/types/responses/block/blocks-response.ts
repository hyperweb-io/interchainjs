/**
 * GetBlocks response types and codec
 */

import { createCodec, ensureNumber } from '../../codec';

export type BlocksResponse = number[];

const BlocksResponseCodec = createCodec<number[]>({
  // We use converter at top-level via factory below
});

export function createBlocksResponse(data: unknown): BlocksResponse {
  if (!Array.isArray(data)) return [];
  return data.map(n => ensureNumber(n) ?? 0);
}

