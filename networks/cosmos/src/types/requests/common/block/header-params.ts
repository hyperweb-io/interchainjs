/**
 * HeaderParams type and encoder
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';

/**
 * Request parameters for the header RPC method
 * @property {number} [height] - Optional block height. If not provided, returns the latest header
 */
export interface HeaderParams {
  readonly height?: number;
}

export interface EncodedHeaderParams {
  readonly height?: string;
}

// Codec for encoding header parameters
export const HeaderParamsCodec = createCodec<EncodedHeaderParams>({
  height: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  }
});

// Creator function that encodes the parameters
export function encodeHeaderParams(params: HeaderParams): EncodedHeaderParams {
  return HeaderParamsCodec.create(params);
}