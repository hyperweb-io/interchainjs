import { createCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';

// Type definitions for removed imports
type BlockMeta = any;
const BlockMetaCodec = {
  create: (data: any) => data
};

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