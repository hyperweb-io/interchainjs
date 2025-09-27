/**
 * Request for getBlocksWithLimit
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';

export interface GetBlocksWithLimitRequest extends BaseSolanaRequest<SolanaCommitmentOptions> {
  readonly startSlot: number | bigint;
  readonly limit: number;
}

export type EncodedGetBlocksWithLimitRequest = [number, number, SolanaCommitmentOptions?];

export function encodeGetBlocksWithLimitRequest(req: GetBlocksWithLimitRequest): EncodedGetBlocksWithLimitRequest {
  const start = typeof req.startSlot === 'bigint' ? Number(req.startSlot) : req.startSlot;
  const arr: EncodedGetBlocksWithLimitRequest = [start, req.limit];
  if (req.options && Object.keys(req.options).length > 0) {
    (arr as any).push(req.options);
  }
  return arr;
}

