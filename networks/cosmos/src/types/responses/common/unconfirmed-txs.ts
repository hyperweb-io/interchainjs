import { BaseCodec, createCodec, createConverter } from '@interchainjs/cosmos-types';

export interface UnconfirmedTxsResponse {
  count: number;
  total: number;
  totalBytes: number;
  txs: Uint8Array[];
}

// Encoded types
export interface EncodedUnconfirmedTxsResponse {
  count: string;
  total: string;
  total_bytes: string;
  txs: string[];
}

export const UnconfirmedTxsResponseCodec: BaseCodec<UnconfirmedTxsResponse, EncodedUnconfirmedTxsResponse> = createCodec({
  encode: (response: UnconfirmedTxsResponse): EncodedUnconfirmedTxsResponse => ({
    count: response.count.toString(),
    total: response.total.toString(),
    total_bytes: response.totalBytes.toString(),
    txs: response.txs.map(tx => Buffer.from(tx).toString('base64'))
  }),
  decode: (encoded: EncodedUnconfirmedTxsResponse): UnconfirmedTxsResponse => ({
    count: parseInt(encoded.count || '0', 10),
    total: parseInt(encoded.total || '0', 10),
    totalBytes: parseInt(encoded.total_bytes || '0', 10),
    txs: (encoded.txs || []).map(tx => Buffer.from(tx, 'base64'))
  })
});

// Factory function
export const createUnconfirmedTxsResponse = createConverter(UnconfirmedTxsResponseCodec);