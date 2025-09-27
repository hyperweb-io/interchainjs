/**
 * GetAccountInfo request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions, SolanaEncodingOptions, SolanaDataSliceOptions } from '../base';
import { normalizePubkey } from '../../codec';

export interface GetAccountInfoRequest extends BaseSolanaRequest<GetAccountInfoOptions> {
  readonly pubkey: string;
}

export interface GetAccountInfoOptions extends SolanaCommitmentOptions, SolanaEncodingOptions, SolanaDataSliceOptions {}

// Encoded request type (what gets sent over RPC)
export type EncodedGetAccountInfoRequest = [string, GetAccountInfoOptions?];

/**
 * Encode GetAccountInfo request parameters
 */
export function encodeGetAccountInfoRequest(params: GetAccountInfoRequest): EncodedGetAccountInfoRequest {
  const encodedParams: EncodedGetAccountInfoRequest = [
    normalizePubkey(params.pubkey)
  ];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
