import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface TxSearchParams {
  query: string;
  prove?: boolean;
  page?: number;
  perPage?: number;
  orderBy?: string;
}

export interface EncodedTxSearchParams {
  query: string;
  prove?: boolean;
  page?: string;
  per_page?: string;
  order_by?: string;
}

export const TxSearchParamsCodec: BaseCodec<TxSearchParams, EncodedTxSearchParams> = createCodec({
  encode: (params: TxSearchParams): EncodedTxSearchParams => {
    const encoded: EncodedTxSearchParams = {
      query: params.query
    };
    if (params.prove !== undefined) encoded.prove = params.prove;
    if (params.page !== undefined) encoded.page = params.page.toString();
    if (params.perPage !== undefined) encoded.per_page = params.perPage.toString();
    if (params.orderBy !== undefined) encoded.order_by = params.orderBy;
    return encoded;
  },
  decode: (encoded: EncodedTxSearchParams): TxSearchParams => {
    const decoded: TxSearchParams = {
      query: encoded.query
    };
    if (encoded.prove !== undefined) decoded.prove = encoded.prove;
    if (encoded.page !== undefined) decoded.page = parseInt(encoded.page);
    if (encoded.per_page !== undefined) decoded.perPage = parseInt(encoded.per_page);
    if (encoded.order_by !== undefined) decoded.orderBy = encoded.order_by;
    return decoded;
  }
});

export const encodeTxSearchParams = (params: TxSearchParams): EncodedTxSearchParams => 
  TxSearchParamsCodec.encode(params);

export const decodeTxSearchParams = (encoded: EncodedTxSearchParams): TxSearchParams => 
  TxSearchParamsCodec.decode(encoded);