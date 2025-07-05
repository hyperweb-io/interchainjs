import { BaseCodec, createCodec } from '@interchainjs/cosmos-types';

// DumpConsensusState has no parameters
export interface DumpConsensusStateParams {}

export interface EncodedDumpConsensusStateParams {}

export const DumpConsensusStateParamsCodec: BaseCodec<DumpConsensusStateParams, EncodedDumpConsensusStateParams> = createCodec({
  encode: (_params: DumpConsensusStateParams): EncodedDumpConsensusStateParams => ({}),
  decode: (_encoded: EncodedDumpConsensusStateParams): DumpConsensusStateParams => ({})
});

export const encodeDumpConsensusStateParams = (params: DumpConsensusStateParams): EncodedDumpConsensusStateParams => 
  DumpConsensusStateParamsCodec.encode(params);

export const decodeDumpConsensusStateParams = (encoded: EncodedDumpConsensusStateParams): DumpConsensusStateParams => 
  DumpConsensusStateParamsCodec.decode(encoded);