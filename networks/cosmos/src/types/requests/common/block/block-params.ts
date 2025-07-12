/**
 * Block request parameters
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';
import { EncodedBlockParams } from './encoded-block-params';

export interface BlockParams {
  readonly height?: number;
}

// Codec for encoding block parameters
export const BlockParamsCodec = createCodec<EncodedBlockParams>({
  height: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  }
});

// Creator function that encodes the parameters
export function encodeBlockParams(params: BlockParams): EncodedBlockParams {
  return BlockParamsCodec.create(params);
}