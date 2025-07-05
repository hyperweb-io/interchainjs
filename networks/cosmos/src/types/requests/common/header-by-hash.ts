import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface HeaderByHashParams {
  hash: string;
}

export interface EncodedHeaderByHashParams {
  hash: string;
}

export const HeaderByHashParamsCodec: BaseCodec<HeaderByHashParams, EncodedHeaderByHashParams> = createCodec({
  encode: (params: HeaderByHashParams): EncodedHeaderByHashParams => ({
    hash: params.hash
  }),
  decode: (encoded: EncodedHeaderByHashParams): HeaderByHashParams => ({
    hash: encoded.hash
  })
});

export const encodeHeaderByHashParams = (params: HeaderByHashParams): EncodedHeaderByHashParams => 
  HeaderByHashParamsCodec.encode(params);

export const decodeHeaderByHashParams = (encoded: EncodedHeaderByHashParams): HeaderByHashParams => 
  HeaderByHashParamsCodec.decode(encoded);