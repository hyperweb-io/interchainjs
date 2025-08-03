/**
 * HeaderByHashParams type and encoder
 */

import { createCodec } from '../../../codec';
import { ensureString } from '../../../codec/converters';

/**
 * Request parameters for the header_by_hash RPC method
 * @property {string} hash - The block hash in hexadecimal format (case-insensitive)
 */
export interface HeaderByHashParams {
  readonly hash: string;
}

export interface EncodedHeaderByHashParams {
  readonly hash: string;
}

// Codec for encoding header by hash parameters
export const HeaderByHashParamsCodec = createCodec<EncodedHeaderByHashParams>({
  hash: ensureString
});

// Creator function that encodes the parameters
export function encodeHeaderByHashParams(params: HeaderByHashParams): EncodedHeaderByHashParams {
  return HeaderByHashParamsCodec.create(params);
}