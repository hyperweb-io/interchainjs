import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface BlockSearchParams {
  query: string;
  page?: number;
  perPage?: number;
  orderBy?: string;
}

export interface EncodedBlockSearchParams {
  query: string;
  page?: string;
  per_page?: string;
  order_by?: string;
}

export const BlockSearchParamsCodec: BaseCodec<BlockSearchParams, EncodedBlockSearchParams> = createCodec({
  encode: (params: BlockSearchParams): EncodedBlockSearchParams => {
    const encoded: EncodedBlockSearchParams = {
      query: params.query
    };
    if (params.page !== undefined) encoded.page = params.page.toString();
    if (params.perPage !== undefined) encoded.per_page = params.perPage.toString();
    if (params.orderBy !== undefined) encoded.order_by = params.orderBy;
    return encoded;
  },
  decode: (encoded: EncodedBlockSearchParams): BlockSearchParams => {
    const decoded: BlockSearchParams = {
      query: encoded.query
    };
    if (encoded.page !== undefined) decoded.page = parseInt(encoded.page);
    if (encoded.per_page !== undefined) decoded.perPage = parseInt(encoded.per_page);
    if (encoded.order_by !== undefined) decoded.orderBy = encoded.order_by;
    return decoded;
  }
});

export const encodeBlockSearchParams = (params: BlockSearchParams): EncodedBlockSearchParams => 
  BlockSearchParamsCodec.encode(params);

export const decodeBlockSearchParams = (encoded: EncodedBlockSearchParams): BlockSearchParams => 
  BlockSearchParamsCodec.decode(encoded);