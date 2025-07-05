// Request types
export interface GenesisChunkedParams {
  chunk: number;
}

export interface EncodedGenesisChunkedParams {
  chunk: string;
}

// Encoder function
export function encodeGenesisChunkedParams(params: GenesisChunkedParams): EncodedGenesisChunkedParams {
  return {
    chunk: String(params.chunk)
  };
}