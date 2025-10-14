/**
 * GetTokenAccountBalance request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';
import { normalizePubkey } from '../../codec';

export interface GetTokenAccountBalanceRequest extends BaseSolanaRequest<GetTokenAccountBalanceOptions> {
  readonly tokenAccount: string;
}

export interface GetTokenAccountBalanceOptions extends SolanaCommitmentOptions {}

// Encoded request type (what gets sent over RPC)
export type EncodedGetTokenAccountBalanceRequest = [string, GetTokenAccountBalanceOptions?];

/**
 * Encode GetTokenAccountBalance request parameters
 */
export function encodeGetTokenAccountBalanceRequest(params: GetTokenAccountBalanceRequest): EncodedGetTokenAccountBalanceRequest {
  const encodedParams: EncodedGetTokenAccountBalanceRequest = [
    normalizePubkey(params.tokenAccount)
  ];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
