/**
 * GetTransaction request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions, SolanaEncodingOptions } from '../base';
import { normalizeSignature } from '../../codec';

export interface GetTransactionRequest extends BaseSolanaRequest<GetTransactionOptions> {
  readonly signature: string;
}

export interface GetTransactionOptions extends SolanaCommitmentOptions, SolanaEncodingOptions {
  readonly maxSupportedTransactionVersion?: number;
}

// Encoded request type (what gets sent over RPC)
export type EncodedGetTransactionRequest = [string, GetTransactionOptions?];

/**
 * Encode GetTransaction request parameters
 */
export function encodeGetTransactionRequest(params: GetTransactionRequest): EncodedGetTransactionRequest {
  const encodedParams: EncodedGetTransactionRequest = [
    normalizeSignature(params.signature)
  ];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
