/**
 * BlockchainResponse type and creator
 */

import { createCodec } from '../../../codec';
import { apiToNumber, createArrayConverter } from '../../../codec/converters';
import { BlockMeta, BlockMetaCodec } from './block-meta';

export interface BlockchainResponse {
  readonly lastHeight: number;
  readonly blockMetas: readonly BlockMeta[];
}

export const BlockchainResponseCodec = createCodec<BlockchainResponse>({
  lastHeight: {
    source: 'last_height',
    converter: apiToNumber
  },
  blockMetas: {
    source: 'block_metas',
    converter: (value: unknown) => {
      if (!Array.isArray(value)) return [];
      return value.map(item => BlockMetaCodec.create(item));
    }
  }
});

export function createBlockchainResponse(data: unknown): BlockchainResponse {
  return BlockchainResponseCodec.create(data);
}