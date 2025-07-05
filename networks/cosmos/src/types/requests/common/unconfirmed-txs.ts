import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface UnconfirmedTxsParams {
  limit?: number;
}

export interface EncodedUnconfirmedTxsParams {
  limit?: string;
}

export const UnconfirmedTxsParamsCodec: BaseCodec<UnconfirmedTxsParams, EncodedUnconfirmedTxsParams> = createCodec({
  encode: (params: UnconfirmedTxsParams): EncodedUnconfirmedTxsParams => ({
    limit: params.limit?.toString()
  }),
  decode: (encoded: EncodedUnconfirmedTxsParams): UnconfirmedTxsParams => ({
    limit: encoded.limit ? parseInt(encoded.limit, 10) : undefined
  })
});

export const encodeUnconfirmedTxsParams = (params: UnconfirmedTxsParams): EncodedUnconfirmedTxsParams => 
  UnconfirmedTxsParamsCodec.encode(params);

export const decodeUnconfirmedTxsParams = (encoded: EncodedUnconfirmedTxsParams): UnconfirmedTxsParams => 
  UnconfirmedTxsParamsCodec.decode(encoded);