/**
 * BlockId type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, ensureBytes, ensureDate } from '../../../codec/converters';

export interface BlockId {
  readonly hash: Uint8Array;
  readonly parts: {
    readonly total: number;
    readonly hash: Uint8Array;
  };
}

export const BlockIdCodec = createCodec<BlockId>({
  hash: ensureBytes,
  parts: (value: unknown) => {
    const v = value as Record<string, unknown> | undefined;
    return {
      total: ensureNumber(v?.total),
      hash: ensureBytes(v?.hash)
    };
  }
});

// Factory functions
export function createBlockId(data: unknown): BlockId {
  return BlockIdCodec.create(data);
}
