/**
 * CommitParams type and creator
 */


// Request types
import { EncodedCommitParams } from './encoded-commit-params';

export interface CommitParams {
  height?: number;
}

// Encoder function
export function encodeCommitParams(params: CommitParams): EncodedCommitParams {
  const encoded: EncodedCommitParams = {};
  
  if (params.height !== undefined) {
    encoded.height = String(params.height);
  }
  
  return encoded;
}
