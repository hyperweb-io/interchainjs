/**
 * GetLatestBlockhash request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';

export interface GetLatestBlockhashRequest extends BaseSolanaRequest<GetLatestBlockhashOptions> {}

export interface GetLatestBlockhashOptions extends SolanaCommitmentOptions {}

// Encoded request type (what gets sent over RPC)
export type EncodedGetLatestBlockhashRequest = [GetLatestBlockhashOptions?];

/**
 * Encode GetLatestBlockhash request parameters
 */
export function encodeGetLatestBlockhashRequest(params: GetLatestBlockhashRequest): EncodedGetLatestBlockhashRequest {
  if (params.options && Object.keys(params.options).length > 0) {
    return [params.options];
  }
  
  return [];
}
