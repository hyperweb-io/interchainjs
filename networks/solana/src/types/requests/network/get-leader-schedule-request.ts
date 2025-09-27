/**
 * Request for getLeaderSchedule
 */

import { BaseSolanaRequest, SolanaCommitment } from '../base';

export interface GetLeaderScheduleOptions {
  commitment?: SolanaCommitment;
  identity?: string; // filter by validator identity
}

export interface GetLeaderScheduleRequest extends BaseSolanaRequest<GetLeaderScheduleOptions> {
  slot?: number | bigint; // If omitted, returns schedule for current epoch
}

export type EncodedGetLeaderScheduleRequest = [number?, GetLeaderScheduleOptions?];

export function encodeGetLeaderScheduleRequest(req: GetLeaderScheduleRequest = {}): EncodedGetLeaderScheduleRequest {
  const arr: EncodedGetLeaderScheduleRequest = [];
  if (req.slot !== undefined) {
    arr.push(typeof req.slot === 'bigint' ? Number(req.slot) : req.slot);
  }
  if (req.options && Object.keys(req.options).length > 0) {
    (arr as any).push(req.options);
  }
  return arr;
}

