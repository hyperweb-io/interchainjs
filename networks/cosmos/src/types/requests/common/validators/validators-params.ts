/**
 * ValidatorsParams type and encoder
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';
import { EncodedValidatorsParams } from './encoded-validators-params';

// Request parameter types
export interface ValidatorsParams {
  readonly height?: number;
  readonly page?: number;
  readonly perPage?: number;
}

// Codec for encoding validators parameters
export const ValidatorsParamsCodec = createCodec<EncodedValidatorsParams>({
  height: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  },
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
  }
});

// Creator function that encodes the parameters
export function encodeValidatorsParams(params: ValidatorsParams): EncodedValidatorsParams {
  const encoded: EncodedValidatorsParams = {};
  
  if (params.height !== undefined) {
    encoded.height = String(params.height);
  }
  
  if (params.page !== undefined) {
    encoded.page = String(params.page);
  }
  
  if (params.perPage !== undefined) {
    encoded.per_page = String(params.perPage);
  }
  
  return encoded;
}