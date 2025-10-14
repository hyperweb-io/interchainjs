/**
 * Request type for getStakeMinimumDelegation RPC method
 */

import { SolanaCommitment } from '../base';

export interface GetStakeMinimumDelegationOptions {
  commitment?: SolanaCommitment;
}

export interface GetStakeMinimumDelegationRequest {
  options?: GetStakeMinimumDelegationOptions;
}

export type EncodedGetStakeMinimumDelegationRequest = [GetStakeMinimumDelegationOptions?];

export function encodeGetStakeMinimumDelegationRequest(
  request?: GetStakeMinimumDelegationRequest
): EncodedGetStakeMinimumDelegationRequest {
  if (!request?.options) return [];
  const opts: GetStakeMinimumDelegationOptions = {};
  if (request.options.commitment !== undefined) opts.commitment = request.options.commitment;
  return Object.keys(opts).length > 0 ? [opts] : [];
}

