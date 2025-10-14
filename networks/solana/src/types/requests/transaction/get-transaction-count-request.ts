/**
 * GetTransactionCount request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';

export interface GetTransactionCountRequest extends BaseSolanaRequest<GetTransactionCountOptions> {}

export interface GetTransactionCountOptions extends SolanaCommitmentOptions {
  readonly minContextSlot?: number;
}

// Encoded request type (what gets sent over RPC)
export type EncodedGetTransactionCountRequest = [GetTransactionCountOptions?];

/**
 * Encode GetTransactionCount request parameters
 */
export function encodeGetTransactionCountRequest(params: GetTransactionCountRequest): EncodedGetTransactionCountRequest {
  const encodedParams: EncodedGetTransactionCountRequest = [];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
