/**
 * GetFeeForMessage request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';

export interface GetFeeForMessageRequest extends BaseSolanaRequest<SolanaCommitmentOptions> {
  readonly message: string; // base64-encoded compiled message
}

// Encoded request type (what gets sent over RPC)
export type EncodedGetFeeForMessageRequest = [string, SolanaCommitmentOptions?];

/**
 * Encode GetFeeForMessage request parameters
 */
export function encodeGetFeeForMessageRequest(
  params: GetFeeForMessageRequest
): EncodedGetFeeForMessageRequest {
  const encodedParams: EncodedGetFeeForMessageRequest = [params.message];

  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }

  return encodedParams;
}

