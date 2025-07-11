/**
 * BlockSearchParams type and encoder
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';
import { EncodedBlockSearchParams } from './encoded-block-search-params';

/**
 * Parameters for searching blocks
 */
export interface BlockSearchParams {
  /**
   * Search query string
   * Examples:
   * - "block.height = 100"
   * - "block.height >= 100 AND block.height <= 200"
   * - "tx.height = 100"
   */
  readonly query: string;
  /**
   * Page number for pagination (1-based)
   */
  readonly page?: number;
  /**
   * Number of results per page
   */
  readonly perPage?: number;
  /**
   * Order results by field
   * Example: "asc" or "desc"
   */
  readonly orderBy?: string;
}

// Codec for encoding block search parameters
export const BlockSearchParamsCodec = createCodec<EncodedBlockSearchParams>({
  query: (value: unknown) => String(value),
  page: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  },
  perPage: {
    source: 'per_page',
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  },
  orderBy: {
    source: 'order_by',
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(value);
    }
  }
});

/**
 * Encodes block search parameters for RPC transmission
 * @param params - The block search parameters to encode
 * @returns The encoded parameters with numbers converted to strings
 */
export function encodeBlockSearchParams(params: BlockSearchParams): EncodedBlockSearchParams {
  const encoded: EncodedBlockSearchParams = {
    query: params.query
  };
  
  if (params.page !== undefined) {
    encoded.page = String(params.page);
  }
  
  if (params.perPage !== undefined) {
    encoded.per_page = String(params.perPage);
  }
  
  if (params.orderBy !== undefined) {
    encoded.order_by = params.orderBy;
  }
  
  return encoded;
}