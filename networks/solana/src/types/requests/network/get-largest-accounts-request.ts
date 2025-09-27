/**
 * Request types for getLargestAccounts RPC method
 */

import { BaseCodec, createCodec } from '../../codec/base';
import { SolanaCommitment } from '../base';

/**
 * Filter options for getLargestAccounts
 */
export type LargestAccountsFilter = 'circulating' | 'nonCirculating';

/**
 * Configuration options for getLargestAccounts request
 */
export interface GetLargestAccountsOptions {
  /** The level of commitment desired */
  commitment?: SolanaCommitment;
  /** Filter to exclude certain account types */
  filter?: LargestAccountsFilter;
}

/**
 * Request parameters for getLargestAccounts RPC method
 */
export interface GetLargestAccountsRequest {
  /** Optional configuration */
  options?: GetLargestAccountsOptions;
}

/**
 * Encoded request format for getLargestAccounts RPC call
 */
export type EncodedGetLargestAccountsRequest = [GetLargestAccountsOptions?];

/**
 * Encode a GetLargestAccountsRequest to the RPC format
 */
export function encodeGetLargestAccountsRequest(request: GetLargestAccountsRequest): EncodedGetLargestAccountsRequest {
  if (!request.options) {
    return [];
  }

  const options: GetLargestAccountsOptions = {};

  if (request.options.commitment !== undefined) {
    options.commitment = request.options.commitment;
  }

  if (request.options.filter !== undefined) {
    options.filter = request.options.filter;
  }

  // Only include options if there are any defined properties
  if (Object.keys(options).length === 0) {
    return [];
  }

  return [options];
}

/**
 * Codec for GetLargestAccountsRequest
 */
export const GetLargestAccountsRequestCodec: BaseCodec<GetLargestAccountsRequest> = createCodec<GetLargestAccountsRequest>({
  options: {
    converter: (value: unknown) => {
      if (!value || typeof value !== 'object') {
        return undefined;
      }

      const opts = value as any;
      const result: GetLargestAccountsOptions = {};

      if (opts.commitment !== undefined) {
        result.commitment = opts.commitment;
      }

      if (opts.filter !== undefined) {
        result.filter = opts.filter;
      }

      return Object.keys(result).length > 0 ? result : undefined;
    }
  }
});
