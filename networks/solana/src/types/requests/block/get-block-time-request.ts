/**
 * GetBlockTime request types and encoder
 */

import { BaseSolanaRequest } from '../base';

export interface GetBlockTimeRequest extends BaseSolanaRequest<{}> {
  readonly slot: number | bigint;
}

export type EncodedGetBlockTimeRequest = [number];

export function encodeGetBlockTimeRequest(params: GetBlockTimeRequest): EncodedGetBlockTimeRequest {
  const slotNum = typeof params.slot === 'bigint' ? Number(params.slot) : params.slot;
  return [slotNum];
}

