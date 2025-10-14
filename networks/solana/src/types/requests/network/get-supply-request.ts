/**
 * Request parameters for getSupply RPC method
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';

/**
 * Request parameters for getSupply RPC method
 */
export interface GetSupplyRequest extends BaseSolanaRequest<GetSupplyOptions> {
  // No required parameters for getSupply
}

/**
 * Configuration options for getSupply request
 */
export interface GetSupplyOptions extends SolanaCommitmentOptions {
  /** Whether to exclude non-circulating accounts list from response */
  excludeNonCirculatingAccountsList?: boolean;
}

// Encoded request type (what gets sent over RPC)
export type EncodedGetSupplyRequest = [GetSupplyOptions?];

/**
 * Encode GetSupply request parameters
 */
export function encodeGetSupplyRequest(params: GetSupplyRequest): EncodedGetSupplyRequest {
  const result: EncodedGetSupplyRequest = [];
  
  if (params.options && Object.keys(params.options).length > 0) {
    result.push(params.options);
  }
  
  return result;
}
