/**
 * GetSignatureStatuses request types and encoder
 */

import { BaseSolanaRequest } from '../base';
import { normalizeSignature } from '../../codec';

export interface GetSignatureStatusesRequest extends BaseSolanaRequest<GetSignatureStatusesOptions> {
  readonly signatures: string[];
}

export interface GetSignatureStatusesOptions {
  readonly searchTransactionHistory?: boolean;
}

// Encoded request type (what gets sent over RPC)
export type EncodedGetSignatureStatusesRequest = [string[], GetSignatureStatusesOptions?];

/**
 * Encode GetSignatureStatuses request parameters
 */
export function encodeGetSignatureStatusesRequest(params: GetSignatureStatusesRequest): EncodedGetSignatureStatusesRequest {
  const normalizedSignatures = params.signatures.map(sig => normalizeSignature(sig));
  const encodedParams: EncodedGetSignatureStatusesRequest = [normalizedSignatures];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
