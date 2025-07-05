import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface ValidatorsParams {
  height?: number;
  page?: number;
  perPage?: number;
}

export interface EncodedValidatorsParams {
  height?: string;
  page?: string;
  per_page?: string;
}

export const ValidatorsParamsCodec: BaseCodec<ValidatorsParams, EncodedValidatorsParams> = createCodec({
  encode: (params: ValidatorsParams): EncodedValidatorsParams => ({
    height: params.height?.toString(),
    page: params.page?.toString(),
    per_page: params.perPage?.toString()
  }),
  decode: (encoded: EncodedValidatorsParams): ValidatorsParams => ({
    height: encoded.height ? parseInt(encoded.height, 10) : undefined,
    page: encoded.page ? parseInt(encoded.page, 10) : undefined,
    perPage: encoded.per_page ? parseInt(encoded.per_page, 10) : undefined
  })
});

export const encodeValidatorsParams = (params: ValidatorsParams): EncodedValidatorsParams => 
  ValidatorsParamsCodec.encode(params);

export const decodeValidatorsParams = (encoded: EncodedValidatorsParams): ValidatorsParams => 
  ValidatorsParamsCodec.decode(encoded);