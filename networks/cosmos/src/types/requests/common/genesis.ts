import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

// Genesis has no parameters
export interface GenesisParams {}

export interface EncodedGenesisParams {}

export const GenesisParamsCodec: BaseCodec<GenesisParams, EncodedGenesisParams> = createCodec({
  encode: (_params: GenesisParams): EncodedGenesisParams => ({}),
  decode: (_encoded: EncodedGenesisParams): GenesisParams => ({})
});

export const encodeGenesisParams = (params: GenesisParams): EncodedGenesisParams => 
  GenesisParamsCodec.encode(params);

export const decodeGenesisParams = (encoded: EncodedGenesisParams): GenesisParams => 
  GenesisParamsCodec.decode(encoded);