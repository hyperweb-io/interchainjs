/**
 * TxSearchParams type and encoder
 */

import { createCodec } from '../../../codec';
import { ensureString, ensureBoolean, ensureNumber } from '../../../codec/converters';
import { EncodedTxSearchParams } from './encoded-tx-search-params';

export interface TxSearchParams {
  readonly query: string;
  readonly prove?: boolean;
  readonly page?: number;
  readonly perPage?: number;
  readonly orderBy?: string;
}

export const TxSearchParamsCodec = createCodec<EncodedTxSearchParams>({
  query: ensureString,
  prove: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return ensureBoolean(value);
    }
  },
  page: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  },
  per_page: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return String(ensureNumber(value));
    }
  },
  order_by: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) return undefined;
      return ensureString(value);
    }
  }
});

export function encodeTxSearchParams(params: TxSearchParams): EncodedTxSearchParams {
  // Manual encoding to handle field name mapping
  return {
    query: params.query,
    ...(params.prove !== undefined && { prove: params.prove }),
    ...(params.page !== undefined && { page: String(params.page) }),
    ...(params.perPage !== undefined && { per_page: String(params.perPage) }),
    ...(params.orderBy !== undefined && { order_by: params.orderBy })
  };
}