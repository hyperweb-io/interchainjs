import { BaseSolanaRequest, SolanaCommitmentOptions, SolanaEncodingOptions, SolanaDataSliceOptions } from '../base';

/**
 * Request parameters for getMultipleAccounts RPC method
 */
export interface GetMultipleAccountsRequest extends BaseSolanaRequest<GetMultipleAccountsOptions> {
  /** Array of Pubkeys to query, as base-58 encoded strings (up to a maximum of 100) */
  readonly pubkeys: string[];
}

/**
 * Configuration options for getMultipleAccounts request
 */
export interface GetMultipleAccountsOptions extends SolanaCommitmentOptions, SolanaEncodingOptions, SolanaDataSliceOptions {
  /** Minimum context slot that the request can be evaluated at */
  minContextSlot?: number;
}

// Encoded request type (what gets sent over RPC)
export type EncodedGetMultipleAccountsRequest = [string[], GetMultipleAccountsOptions?];

/**
 * Encode GetMultipleAccounts request parameters
 */
export function encodeGetMultipleAccountsRequest(params: GetMultipleAccountsRequest): EncodedGetMultipleAccountsRequest {
  const result: EncodedGetMultipleAccountsRequest = [params.pubkeys];

  if (params.options && Object.keys(params.options).length > 0) {
    result.push(params.options);
  }

  return result;
}
