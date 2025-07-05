import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface GenesisChunkedParams {
  chunk: number;
}

export interface EncodedGenesisChunkedParams {
  chunk: string;
}

export const GenesisChunkedParamsCodec: BaseCodec<GenesisChunkedParams, EncodedGenesisChunkedParams> = createCodec({
  encode: (params: GenesisChunkedParams): EncodedGenesisChunkedParams => ({
    chunk: params.chunk.toString()
  }),
  decode: (encoded: EncodedGenesisChunkedParams): GenesisChunkedParams => ({
    chunk: parseInt(encoded.chunk || '0', 10)
  })
});

export const encodeGenesisChunkedParams = (params: GenesisChunkedParams): EncodedGenesisChunkedParams => 
  GenesisChunkedParamsCodec.encode(params);

export const decodeGenesisChunkedParams = (encoded: EncodedGenesisChunkedParams): GenesisChunkedParams => 
  GenesisChunkedParamsCodec.decode(encoded);