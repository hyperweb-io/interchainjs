// Request types
export interface CommitParams {
  height?: number;
}

export interface EncodedCommitParams {
  height?: string;
}

// Encoder function
export function encodeCommitParams(params: CommitParams): EncodedCommitParams {
  const encoded: EncodedCommitParams = {};
  
  if (params.height !== undefined) {
    encoded.height = String(params.height);
  }
  
  return encoded;
}