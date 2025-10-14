/**
 * Response type for getMinimumBalanceForRentExemption RPC method
 */

import { apiToBigInt } from '../../codec';

export type MinimumBalanceForRentExemptionResponse = bigint;

export function createMinimumBalanceForRentExemptionResponse(data: unknown): MinimumBalanceForRentExemptionResponse {
  const value = apiToBigInt(data);
  if (value === undefined) {
    throw new Error('Invalid minimum balance response');
  }
  return value;
}

