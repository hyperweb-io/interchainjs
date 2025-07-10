/**
 * Block by hash request parameters
 */

import { createCodec } from '../../../codec';
import { ensureString } from '../../../codec/converters';
import { EncodedBlockByHashParams } from './encoded-block-by-hash-params';

export interface BlockByHashParams {
  readonly hash: string;
}

// Codec for encoding block by hash parameters
export const BlockByHashParamsCodec = createCodec<EncodedBlockByHashParams>({
  hash: ensureString
});

// Creator function that encodes the parameters
export function encodeBlockByHashParams(params: BlockByHashParams): EncodedBlockByHashParams {
  return BlockByHashParamsCodec.create(params);
}