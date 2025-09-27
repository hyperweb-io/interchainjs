/**
 * GetProgramAccounts request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';
import { normalizePubkey } from '../../codec';

// Filter types for getProgramAccounts
export interface DataSizeFilter {
  readonly dataSize: number;
}

export interface MemcmpFilter {
  readonly memcmp: {
    readonly offset: number;
    readonly bytes: string;
  };
}

export type ProgramAccountFilter = DataSizeFilter | MemcmpFilter;

// Data slice configuration
export interface DataSlice {
  readonly offset: number;
  readonly length: number;
}

export interface GetProgramAccountsOptions extends SolanaCommitmentOptions {
  readonly encoding?: 'base58' | 'base64' | 'base64+zstd' | 'jsonParsed';
  readonly dataSlice?: DataSlice;
  readonly filters?: readonly ProgramAccountFilter[];
  readonly withContext?: boolean;
  readonly minContextSlot?: number;
}

export interface GetProgramAccountsRequest extends BaseSolanaRequest<GetProgramAccountsOptions> {
  readonly programId: string;
}

// Encoded request type (what gets sent over RPC)
export type EncodedGetProgramAccountsRequest = [string, GetProgramAccountsOptions?];

/**
 * Encode GetProgramAccounts request parameters
 */
export function encodeGetProgramAccountsRequest(params: GetProgramAccountsRequest): EncodedGetProgramAccountsRequest {
  const encodedParams: EncodedGetProgramAccountsRequest = [
    normalizePubkey(params.programId)
  ];
  
  if (params.options && Object.keys(params.options).length > 0) {
    encodedParams.push(params.options);
  }
  
  return encodedParams;
}
