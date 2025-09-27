/**
 * GetBalance request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';
import { normalizePubkey } from '../../codec';

export interface GetBalanceRequest extends BaseSolanaRequest<GetBalanceOptions> {
  readonly pubkey: string;
}

export interface GetBalanceOptions extends SolanaCommitmentOptions {}

// Encoded request type (what gets sent over RPC)
export type EncodedGetBalanceRequest = [string, GetBalanceOptions?];

/**
 * Encode GetBalance request parameters
 */
export function encodeGetBalanceRequest(params: GetBalanceRequest): EncodedGetBalanceRequest {
  const encodedParams: EncodedGetBalanceRequest = [
    normalizePubkey(params.pubkey)
  ];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
