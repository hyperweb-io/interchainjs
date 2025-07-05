import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface BlockByHashParams {
  hash: string;
}

export interface EncodedBlockByHashParams {
  hash: string;
}

export const BlockByHashParamsCodec: BaseCodec<BlockByHashParams, EncodedBlockByHashParams> = createCodec({
  encode: (params: BlockByHashParams): EncodedBlockByHashParams => ({
    hash: params.hash
  }),
  decode: (encoded: EncodedBlockByHashParams): BlockByHashParams => ({
    hash: encoded.hash
  })
});

export const encodeBlockByHashParams = (params: BlockByHashParams): EncodedBlockByHashParams => 
  BlockByHashParamsCodec.encode(params);

export const decodeBlockByHashParams = (encoded: EncodedBlockByHashParams): BlockByHashParams => 
  BlockByHashParamsCodec.decode(encoded);