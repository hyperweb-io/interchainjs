/**
 * NumUnconfirmedTxsResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';

// Response types
export interface NumUnconfirmedTxsResponse {
  readonly count: number; // Normalized from n_txs or count field
  readonly nTxs?: number; // Tendermint 0.34 (deprecated, use count)
  readonly total: number;
  readonly totalBytes: number;
}

// Codec
export const NumUnconfirmedTxsResponseCodec = createCodec<NumUnconfirmedTxsResponse>({
  count: { 
    source: 'count',
    converter: (value: any) => {
      // For backward compatibility, we'll handle n_txs in the create function
      return ensureNumber(value);
    }
  },
  nTxs: { 
    source: 'n_txs',
    required: false,
    converter: ensureNumber 
  },
  total: { source: 'total', converter: ensureNumber },
  totalBytes: { source: 'total_bytes', converter: ensureNumber }
});

// Creator function
export function createNumUnconfirmedTxsResponse(data: any): NumUnconfirmedTxsResponse {
  // Handle backward compatibility: if count is not present, use n_txs
  if (data.count === undefined && data.n_txs !== undefined) {
    data = { ...data, count: data.n_txs };
  }
  return NumUnconfirmedTxsResponseCodec.create(data);
}
