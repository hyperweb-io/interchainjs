/**
 * BlockSearchResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';

// Import dependencies from block module
import { BlockMeta, BlockMetaCodec } from '../block/block-meta';

/**
 * Response from block search RPC method
 */
export interface BlockSearchResponse {
  /**
   * Array of block metadata matching the search query
   */
  readonly blocks: readonly BlockMeta[];
  /**
   * Total number of blocks matching the query (for pagination)
   */
  readonly totalCount: number;
}

// Codecs
export const BlockSearchResponseCodec = createCodec<BlockSearchResponse>({
  blocks: { 
    source: 'blocks',
    converter: (value: unknown) => {
      if (!Array.isArray(value)) return [];
      return value.map((block: unknown) => BlockMetaCodec.create(block));
    }
  },
  totalCount: { source: 'total_count', converter: ensureNumber }
});

/**
 * Creates a BlockSearchResponse from raw RPC data
 * @param data - Raw response data from RPC
 * @returns Typed BlockSearchResponse object
 */
export function createBlockSearchResponse(data: unknown): BlockSearchResponse {
  return BlockSearchResponseCodec.create(data);
}
