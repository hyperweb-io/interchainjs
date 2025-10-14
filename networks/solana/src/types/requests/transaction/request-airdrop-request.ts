/**
 * RequestAirdrop request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';
import { normalizePubkey } from '../../codec';

export interface RequestAirdropRequest extends BaseSolanaRequest<RequestAirdropOptions> {
  readonly pubkey: string;
  readonly lamports: number | bigint;
}

export interface RequestAirdropOptions extends SolanaCommitmentOptions {}

// Encoded request type (what gets sent over RPC)
export type EncodedRequestAirdropRequest = [string, number, RequestAirdropOptions?];

/**
 * Encode RequestAirdrop request parameters
 */
export function encodeRequestAirdropRequest(params: RequestAirdropRequest): EncodedRequestAirdropRequest {
  const encodedParams: EncodedRequestAirdropRequest = [
    normalizePubkey(params.pubkey),
    typeof params.lamports === 'bigint' ? Number(params.lamports) : params.lamports
  ];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
