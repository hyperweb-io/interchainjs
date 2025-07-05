/**
 * BlockId type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, ensureBytes, ensureDate } from '../../../codec/converters';
import { BlockIdCodec } from '../header/block-id';

export interface BlockId {
  readonly hash: Uint8Array;
  readonly parts: {
    readonly total: number;
    readonly hash: Uint8Array;
  };
}

// Factory functions
export function createBlockId(data: any): BlockId {
  return BlockIdCodec.create(data);
}
