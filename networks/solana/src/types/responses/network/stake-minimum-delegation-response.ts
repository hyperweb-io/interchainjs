/**
 * Response type for getStakeMinimumDelegation RPC method
 */

import { apiToBigInt } from '../../codec';

export type StakeMinimumDelegationResponse = bigint;

export function createStakeMinimumDelegationResponse(data: unknown): StakeMinimumDelegationResponse {
  const v = (data as any)?.result ?? data;
  const n = apiToBigInt(v);
  if (n === undefined) throw new Error('Invalid stake minimum delegation response');
  return n;
}

