/**
 * GetTokenLargestAccounts request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';
import { normalizePubkey } from '../../codec';

export interface GetTokenLargestAccountsRequest extends BaseSolanaRequest<GetTokenLargestAccountsOptions> {
  readonly mint: string;
}

export interface GetTokenLargestAccountsOptions extends SolanaCommitmentOptions {}

// Encoded request type (what gets sent over RPC)
export type EncodedGetTokenLargestAccountsRequest = [string, GetTokenLargestAccountsOptions?];

/**
 * Encode GetTokenLargestAccounts request parameters
 */
export function encodeGetTokenLargestAccountsRequest(params: GetTokenLargestAccountsRequest): EncodedGetTokenLargestAccountsRequest {
  const encodedParams: EncodedGetTokenLargestAccountsRequest = [
    normalizePubkey(params.mint)
  ];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
