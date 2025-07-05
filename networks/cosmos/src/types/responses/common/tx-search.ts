import { createCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';
import { TxResponse, TxResponseCodec } from './tx';

// Types
export interface TxSearchResponse {
  readonly txs: readonly TxResponse[];
  readonly totalCount: number;
}

// Codecs
export const TxSearchResponseCodec = createCodec<TxSearchResponse>({
  txs: { 
    source: 'txs',
    converter: (value: any) => (value || []).map((tx: any) => TxResponseCodec.create(tx))
  },
  totalCount: { source: 'total_count', converter: ensureNumber }
});

// Factory functions
export function createTxSearchResponse(data: any): TxSearchResponse {
  return TxSearchResponseCodec.create(data);
}