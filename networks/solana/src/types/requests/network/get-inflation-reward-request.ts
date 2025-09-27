/**
 * Request type for getInflationReward RPC method
 */

import { SolanaCommitment } from '../base';

export interface GetInflationRewardOptions {
  epoch?: number;
  commitment?: SolanaCommitment;
}

export interface GetInflationRewardRequest {
  addresses: string[];
  options?: GetInflationRewardOptions;
}

export type EncodedGetInflationRewardRequest = [string[], GetInflationRewardOptions?];

export function encodeGetInflationRewardRequest(request: GetInflationRewardRequest): EncodedGetInflationRewardRequest {
  const addresses = Array.isArray(request.addresses) ? request.addresses : [];
  const opts: GetInflationRewardOptions = {};
  const src = request.options || {};
  if (src.epoch !== undefined) opts.epoch = src.epoch;
  if (src.commitment !== undefined) opts.commitment = src.commitment;
  return Object.keys(opts).length > 0 ? [addresses, opts] : [addresses];
}

