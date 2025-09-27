/**
 * GetTokenAccountsByOwner request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions, SolanaEncodingOptions } from '../base';
import { normalizePubkey } from '../../codec';

export interface TokenAccountsFilter {
  readonly mint?: string;
  readonly programId?: string;
}

export interface GetTokenAccountsByOwnerRequest extends BaseSolanaRequest<GetTokenAccountsByOwnerOptions> {
  readonly owner: string;
  readonly filter: TokenAccountsFilter;
}

export interface GetTokenAccountsByOwnerOptions extends SolanaCommitmentOptions, SolanaEncodingOptions {
  readonly minContextSlot?: number;
  readonly dataSlice?: {
    readonly offset: number;
    readonly length: number;
  };
}

// Encoded request type (what gets sent over RPC)
export type EncodedGetTokenAccountsByOwnerRequest = [string, TokenAccountsFilter, GetTokenAccountsByOwnerOptions?];

/**
 * Encode GetTokenAccountsByOwner request parameters
 */
export function encodeGetTokenAccountsByOwnerRequest(params: GetTokenAccountsByOwnerRequest): EncodedGetTokenAccountsByOwnerRequest {
  const encodedFilter: { mint?: string; programId?: string } = {};

  if (params.filter.mint) {
    encodedFilter.mint = normalizePubkey(params.filter.mint);
  }

  if (params.filter.programId) {
    encodedFilter.programId = normalizePubkey(params.filter.programId);
  }

  const encodedParams: EncodedGetTokenAccountsByOwnerRequest = [
    normalizePubkey(params.owner),
    encodedFilter
  ];

  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }

  return encodedParams;
}
