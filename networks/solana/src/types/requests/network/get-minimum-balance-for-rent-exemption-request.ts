/**
 * Request type for getMinimumBalanceForRentExemption RPC method
 */

import { SolanaCommitment } from '../base';

export interface GetMinimumBalanceForRentExemptionOptions {
  commitment?: SolanaCommitment;
}

export interface GetMinimumBalanceForRentExemptionRequest {
  dataLength: number;
  options?: GetMinimumBalanceForRentExemptionOptions;
}

export type EncodedGetMinimumBalanceForRentExemptionRequest = [number, GetMinimumBalanceForRentExemptionOptions?];

export function encodeGetMinimumBalanceForRentExemptionRequest(
  request: GetMinimumBalanceForRentExemptionRequest
): EncodedGetMinimumBalanceForRentExemptionRequest {
  const args: EncodedGetMinimumBalanceForRentExemptionRequest = [request.dataLength];

  if (request.options && Object.keys(request.options).length > 0) {
    args.push(request.options);
  }

  return args;
}

