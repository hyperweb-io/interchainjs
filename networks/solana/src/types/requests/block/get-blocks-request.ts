/**
 * GetBlocks request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';

export interface GetBlocksRequest extends BaseSolanaRequest<SolanaCommitmentOptions> {
  readonly startSlot: number | bigint;
  readonly endSlot?: number | bigint;
}

export type EncodedGetBlocksRequest = [number, number?, SolanaCommitmentOptions?];

export function encodeGetBlocksRequest(params: GetBlocksRequest): EncodedGetBlocksRequest {
  const start = typeof params.startSlot === 'bigint' ? Number(params.startSlot) : params.startSlot;
  const arr: EncodedGetBlocksRequest = [start];
  if (params.endSlot !== undefined) {
    const end = typeof params.endSlot === 'bigint' ? Number(params.endSlot) : params.endSlot;
    (arr as any).push(end);
  }
  if (params.options && Object.keys(params.options).length > 0) {
    (arr as any).push(params.options);
  }
  return arr;
}

