import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

export interface BlockchainParams {
  minHeight?: number;
  maxHeight?: number;
}

export interface EncodedBlockchainParams {
  minHeight?: string;
  maxHeight?: string;
}

export const BlockchainParamsCodec: BaseCodec<BlockchainParams, EncodedBlockchainParams> = createCodec({
  encode: (params: BlockchainParams): EncodedBlockchainParams => ({
    minHeight: params.minHeight?.toString(),
    maxHeight: params.maxHeight?.toString()
  }),
  decode: (encoded: EncodedBlockchainParams): BlockchainParams => ({
    minHeight: encoded.minHeight ? parseInt(encoded.minHeight, 10) : undefined,
    maxHeight: encoded.maxHeight ? parseInt(encoded.maxHeight, 10) : undefined
  })
});

export const encodeBlockchainParams = (params: BlockchainParams): EncodedBlockchainParams => 
  BlockchainParamsCodec.encode(params);

export const decodeBlockchainParams = (encoded: EncodedBlockchainParams): BlockchainParams => 
  BlockchainParamsCodec.decode(encoded);