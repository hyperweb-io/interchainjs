/**
 * Request for getBlockProduction
 */

import { BaseSolanaRequest, SolanaCommitment } from '../base';

export interface GetBlockProductionOptions {
  range?: {
    firstSlot: number | bigint;
    lastSlot?: number | bigint;
  };
  identity?: string;
  commitment?: SolanaCommitment;
}

export interface GetBlockProductionRequest extends BaseSolanaRequest<GetBlockProductionOptions> {}

export type EncodedGetBlockProductionRequest = [GetBlockProductionOptions?];

export function encodeGetBlockProductionRequest(req: GetBlockProductionRequest = {}): EncodedGetBlockProductionRequest {
  const opt = req.options || {};
  const enc: GetBlockProductionOptions = {};
  if (opt.range) {
    enc.range = {
      firstSlot: typeof opt.range.firstSlot === 'bigint' ? Number(opt.range.firstSlot) : opt.range.firstSlot,
      ...(opt.range.lastSlot !== undefined
        ? { lastSlot: typeof opt.range.lastSlot === 'bigint' ? Number(opt.range.lastSlot) : opt.range.lastSlot }
        : {})
    };
  }
  if (opt.identity) enc.identity = opt.identity;
  if (opt.commitment) enc.commitment = opt.commitment;
  return Object.keys(enc).length > 0 ? [enc] as EncodedGetBlockProductionRequest : [];
}

