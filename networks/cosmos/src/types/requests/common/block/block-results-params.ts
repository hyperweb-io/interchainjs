/**
 * BlockResultsParams type and encoder
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';
import { EncodedBlockResultsParams } from './encoded-block-results-params';

export interface BlockResultsParams {
  readonly height?: number;
}

// Codec for encoding block results parameters
export const BlockResultsParamsCodec = createCodec<EncodedBlockResultsParams>({
  height: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  }
});

// Creator function that encodes the parameters
export function encodeBlockResultsParams(params: BlockResultsParams): EncodedBlockResultsParams {
  return BlockResultsParamsCodec.create(params);
}