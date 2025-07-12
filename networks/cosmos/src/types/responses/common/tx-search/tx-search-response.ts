/**
 * TxSearchResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, createArrayConverter } from '../../../codec/converters';
import { TxResponse, TxResponseCodec } from '../tx/tx-response';

// Types
export interface TxSearchResponse {
  readonly txs: readonly TxResponse[];
  readonly totalCount: number;
}

// Codecs
export const TxSearchResponseCodec = createCodec<TxSearchResponse>({
  txs: { 
    source: 'txs',
    converter: createArrayConverter(TxResponseCodec)
  },
  totalCount: { 
    source: 'total_count', 
    converter: (value: unknown) => {
      if (value === undefined || value === null) {
        return 0;
      }
      return ensureNumber(value);
    }
  }
});

// Factory functions
export function createTxSearchResponse(data: unknown): TxSearchResponse {
  return TxSearchResponseCodec.create(data);
}
