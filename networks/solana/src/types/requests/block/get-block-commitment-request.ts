/**
 * Request for getBlockCommitment
 */

import { BaseSolanaRequest } from '../base';

export interface GetBlockCommitmentRequest extends BaseSolanaRequest {
  slot: number | bigint;
}

export type EncodedGetBlockCommitmentRequest = [number];

export function encodeGetBlockCommitmentRequest(req: GetBlockCommitmentRequest): EncodedGetBlockCommitmentRequest {
  const slot = typeof req.slot === 'bigint' ? Number(req.slot) : req.slot;
  return [slot];
}

