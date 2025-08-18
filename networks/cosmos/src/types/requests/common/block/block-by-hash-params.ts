/**
 * Block by hash request parameters
 */

import { createCodec } from '../../../codec';
import { ensureString } from '../../../codec/converters';
import { EncodedBlockByHashParams } from './encoded-block-by-hash-params';
import { fromHex } from '@interchainjs/encoding';
import { toBase64 } from '@interchainjs/encoding/base64';

export interface BlockByHashParams {
  readonly hash: string;
}

// Codec for encoding block by hash parameters
export const BlockByHashParamsCodec = createCodec<EncodedBlockByHashParams>({
  hash: (value: unknown) => {
    const hexHash = ensureString(value);
    // Convert hex to base64 for RPC
    try {
      const bytes = fromHex(hexHash);
      return toBase64(bytes);
    } catch (e) {
      // If it's not valid hex, assume it's already base64
      return hexHash;
    }
  }
});

// Creator function that encodes the parameters
export function encodeBlockByHashParams(params: BlockByHashParams): EncodedBlockByHashParams {
  return BlockByHashParamsCodec.create(params);
}