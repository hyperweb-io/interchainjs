/**
 * Request for getRecentPrioritizationFees
 */

import { BaseSolanaRequest } from '../base';

export interface GetRecentPrioritizationFeesRequest extends BaseSolanaRequest {
  addresses?: string[]; // array of pubkeys to filter by
}

export type EncodedGetRecentPrioritizationFeesRequest = [string[]?];

export function encodeGetRecentPrioritizationFeesRequest(req: GetRecentPrioritizationFeesRequest = {}): EncodedGetRecentPrioritizationFeesRequest {
  if (req.addresses && req.addresses.length > 0) {
    return [req.addresses];
  }
  return [];
}

