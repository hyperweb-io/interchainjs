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
    converter: (value: unknown) => {
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
export function createNumUnconfirmedTxsResponse(data: unknown): NumUnconfirmedTxsResponse {
  const dataObj = data as Record<string, unknown>;
  // Handle backward compatibility: if count is not present, use n_txs
  if (dataObj.count === undefined && dataObj.n_txs !== undefined) {
    const modifiedData = { ...dataObj, count: dataObj.n_txs };
    return NumUnconfirmedTxsResponseCodec.create(modifiedData);
  }
  return NumUnconfirmedTxsResponseCodec.create(data);
}
