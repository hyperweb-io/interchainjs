import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface BlockResultsParams {
  height?: number;
}

export interface EncodedBlockResultsParams {
  height?: string;
}

export const BlockResultsParamsCodec: BaseCodec<BlockResultsParams, EncodedBlockResultsParams> = createCodec({
  encode: (params: BlockResultsParams): EncodedBlockResultsParams => ({
    height: params.height?.toString()
  }),
  decode: (encoded: EncodedBlockResultsParams): BlockResultsParams => ({
    height: encoded.height ? parseInt(encoded.height, 10) : undefined
  })
});

export const encodeBlockResultsParams = (params: BlockResultsParams): EncodedBlockResultsParams => 
  BlockResultsParamsCodec.encode(params);

export const decodeBlockResultsParams = (encoded: EncodedBlockResultsParams): BlockResultsParams => 
  BlockResultsParamsCodec.decode(encoded);