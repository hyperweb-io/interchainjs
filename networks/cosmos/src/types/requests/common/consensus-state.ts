import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

// ConsensusState has no parameters
export interface ConsensusStateParams {}

export interface EncodedConsensusStateParams {}

export const ConsensusStateParamsCodec: BaseCodec<ConsensusStateParams, EncodedConsensusStateParams> = createCodec({
  encode: (_params: ConsensusStateParams): EncodedConsensusStateParams => ({}),
  decode: (_encoded: EncodedConsensusStateParams): ConsensusStateParams => ({})
});

export const encodeConsensusStateParams = (params: ConsensusStateParams): EncodedConsensusStateParams => 
  ConsensusStateParamsCodec.encode(params);

export const decodeConsensusStateParams = (encoded: EncodedConsensusStateParams): ConsensusStateParams => 
  ConsensusStateParamsCodec.decode(encoded);