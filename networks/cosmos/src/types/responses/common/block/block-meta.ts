/**
 * BlockMeta type and creator
 */

import { createCodec } from '../../../codec';
import { apiToNumber } from '../../../codec/converters';
import { BlockId, BlockIdCodec } from '../header/block-id';
import { BlockHeader, BlockHeaderCodec } from '../header/block-header';

export interface BlockMeta {
  readonly blockId: BlockId;
  readonly blockSize: number;
  readonly header: BlockHeader;
  readonly numTxs: number;
}

export const BlockMetaCodec = createCodec<BlockMeta>({
  blockId: {
    source: 'block_id',
    converter: (value: unknown) => BlockIdCodec.create(value)
  },
  blockSize: {
    source: 'block_size',
    converter: apiToNumber
  },
  header: {
    converter: (value: unknown) => BlockHeaderCodec.create(value)
  },
  numTxs: {
    source: 'num_txs',
    converter: apiToNumber
  }
});

export function createBlockMeta(data: unknown): BlockMeta {
  return BlockMetaCodec.create(data);
}