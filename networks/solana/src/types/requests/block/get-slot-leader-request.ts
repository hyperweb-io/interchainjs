/**
 * GetSlotLeader request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';

export interface GetSlotLeaderRequest extends BaseSolanaRequest<SolanaCommitmentOptions> {}

export type EncodedGetSlotLeaderRequest = [SolanaCommitmentOptions?];

export function encodeGetSlotLeaderRequest(params: GetSlotLeaderRequest = {}): EncodedGetSlotLeaderRequest {
  if (params.options && Object.keys(params.options).length > 0) {
    return [params.options];
  }
  return [];
}

