import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface HeaderParams {
  height?: number;
}

export interface EncodedHeaderParams {
  height?: string;
}

export const HeaderParamsCodec: BaseCodec<HeaderParams, EncodedHeaderParams> = createCodec({
  encode: (params: HeaderParams): EncodedHeaderParams => ({
    height: params.height?.toString()
  }),
  decode: (encoded: EncodedHeaderParams): HeaderParams => ({
    height: encoded.height ? parseInt(encoded.height, 10) : undefined
  })
});

export const encodeHeaderParams = (params: HeaderParams): EncodedHeaderParams => 
  HeaderParamsCodec.encode(params);

export const decodeHeaderParams = (encoded: EncodedHeaderParams): HeaderParams => 
  HeaderParamsCodec.decode(encoded);