/**
 * GetSlotLeaders request types and encoder
 */

import { BaseSolanaRequest } from '../base';

export interface GetSlotLeadersRequest extends BaseSolanaRequest<{}> {
  readonly startSlot: number | bigint;
  readonly limit: number;
}

export type EncodedGetSlotLeadersRequest = [number, number];

export function encodeGetSlotLeadersRequest(params: GetSlotLeadersRequest): EncodedGetSlotLeadersRequest {
  const start = typeof params.startSlot === 'bigint' ? Number(params.startSlot) : params.startSlot;
  return [start, params.limit];
}

