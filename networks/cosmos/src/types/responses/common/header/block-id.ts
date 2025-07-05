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
  parts: (value: any) => ({
    total: ensureNumber(value?.total),
    hash: ensureBytes(value?.hash)
  })
});

// Factory functions
export function createBlockId(data: any): BlockId {
  return BlockIdCodec.create(data);
}
