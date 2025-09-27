/**
 * GetSignaturesForAddress request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';
import { normalizePubkey } from '../../codec';

export interface GetSignaturesForAddressRequest extends BaseSolanaRequest<GetSignaturesForAddressOptions> {
  readonly address: string;
}

export interface GetSignaturesForAddressOptions extends SolanaCommitmentOptions {
  readonly limit?: number;
  readonly before?: string; // base58 signature
  readonly until?: string;  // base58 signature
}

// Encoded request type (what gets sent over RPC)
export type EncodedGetSignaturesForAddressRequest = [string, GetSignaturesForAddressOptions?];

/**
 * Encode GetSignaturesForAddress request parameters
 */
export function encodeGetSignaturesForAddressRequest(
  params: GetSignaturesForAddressRequest
): EncodedGetSignaturesForAddressRequest {
  const encodedParams: EncodedGetSignaturesForAddressRequest = [
    normalizePubkey(params.address)
  ];

  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }

  return encodedParams;
}

