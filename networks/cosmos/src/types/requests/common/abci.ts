/**
 * ABCI request parameter types and codecs
 */

import { createCodec } from '../../codec';
import { ensureNumber, ensureBoolean } from '../../codec/converters';
import { toHex } from '@interchainjs/encoding';

// Request parameter types
export interface AbciQueryParams {
  readonly path: string;
  readonly data: Uint8Array;
  readonly height?: number;
  readonly prove?: boolean;
}

// Encoded request types (what gets sent over RPC)
export interface EncodedAbciQueryParams {
  readonly path: string;
  readonly data: string;  // hex string
  readonly height?: string;  // string number
  readonly prove?: boolean;
}

// Codec for encoding ABCI query parameters
export const AbciQueryParamsCodec = createCodec<EncodedAbciQueryParams>({
  path: (value: unknown) => String(value),
  data: {
    converter: (value: unknown) => {
      if (value instanceof Uint8Array) {
        return toHex(value);
      }
      throw new Error('data must be Uint8Array');
    }
  },
  height: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  },
  prove: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return ensureBoolean(value);
    }
  }
});

// Creator function that encodes the parameters
export function encodeAbciQueryParams(params: AbciQueryParams): EncodedAbciQueryParams {
  return AbciQueryParamsCodec.create(params);
}