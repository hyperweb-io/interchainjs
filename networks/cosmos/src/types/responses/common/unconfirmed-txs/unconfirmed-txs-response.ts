/**
 * UnconfirmedTxsResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, createArrayConverter } from '../../../codec/converters';

export interface UnconfirmedTxsResponse {
  readonly count: number;
  readonly total: number;
  readonly totalBytes: number;
  readonly txs: readonly string[];
}

export const UnconfirmedTxsResponseCodec = createCodec<UnconfirmedTxsResponse>({
  count: {
    source: 'n_txs',
    converter: (value: unknown) => {
      // If count is not provided, calculate from txs array length
      if (value === undefined || value === null) {
        return 0;
      }
      return ensureNumber(value);
    }
  },
  total: {
    converter: (value: unknown) => {
      if (value === undefined || value === null) {
        return 0;
      }
      return ensureNumber(value);
    }
  },
  totalBytes: { 
    source: 'total_bytes', 
    converter: (value: unknown) => {
      if (value === undefined || value === null) {
        return 0;
      }
      return ensureNumber(value);
    }
  },
  txs: {
    converter: (value: unknown) => {
      if (!Array.isArray(value)) return [];
      return value.map(tx => ensureString(tx));
    }
  }
});

export function createUnconfirmedTxsResponse(data: unknown): UnconfirmedTxsResponse {
  return UnconfirmedTxsResponseCodec.create(data);
}