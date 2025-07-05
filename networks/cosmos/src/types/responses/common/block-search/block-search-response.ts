/**
 * BlockSearchResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';

// Import dependencies from same module
import { BlockMeta, BlockMetaCodec } from './block-meta';

// Types
export interface BlockSearchResponse {
  readonly blocks: readonly BlockMeta[];
  readonly totalCount: number;
}

// Codecs
export const BlockSearchResponseCodec = createCodec<BlockSearchResponse>({
  blocks: { 
    source: 'blocks',
    converter: (value: any) => (value || []).map((block: any) => BlockMetaCodec.create(block))
  },
  totalCount: { source: 'total_count', converter: ensureNumber }
});

// Factory functions
export function createBlockSearchResponse(data: any): BlockSearchResponse {
  return BlockSearchResponseCodec.create(data);
}
