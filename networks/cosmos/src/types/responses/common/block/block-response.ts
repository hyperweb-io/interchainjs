/**
 * BlockResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureBytes, ensureNumber, createArrayConverter } from '../../../codec/converters';

// Import dependencies from same module
import { Block, BlockCodec } from './block';
import { BlockId } from '../header/block-id';
import { BlockIdCodec } from '../header/block-id';

export interface BlockResponse {
  readonly blockId: BlockId;
  readonly block: Block;
}

export const BlockResponseCodec = createCodec<BlockResponse>({
  blockId: {
    source: 'block_id',
    converter: (value: any) => BlockIdCodec.create(value)
  },
  block: {
    source: 'block',
    converter: (value: any) => BlockCodec.create(value)
  }
});

export function createBlockResponse(data: any): BlockResponse {
  return BlockResponseCodec.create(data);
}
