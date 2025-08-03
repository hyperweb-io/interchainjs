/**
 * GenesisChunkedParams type and creator
 */


// Request types
import { EncodedGenesisChunkedParams } from './encoded-genesis-chunked-params';

export interface GenesisChunkedParams {
  chunk: number;
}

// Encoder function
export function encodeGenesisChunkedParams(params: GenesisChunkedParams): EncodedGenesisChunkedParams {
  return {
    chunk: String(params.chunk)
  };
}
