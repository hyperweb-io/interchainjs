/**
 * GetTokenSupply request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';
import { normalizePubkey } from '../../codec';

export interface GetTokenSupplyRequest extends BaseSolanaRequest<GetTokenSupplyOptions> {
  readonly mint: string;
}

export interface GetTokenSupplyOptions extends SolanaCommitmentOptions {}

// Encoded request type (what gets sent over RPC)
export type EncodedGetTokenSupplyRequest = [string, GetTokenSupplyOptions?];

/**
 * Encode GetTokenSupply request parameters
 */
export function encodeGetTokenSupplyRequest(params: GetTokenSupplyRequest): EncodedGetTokenSupplyRequest {
  const encodedParams: EncodedGetTokenSupplyRequest = [
    normalizePubkey(params.mint)
  ];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
