/**
 * GetBlock request types and encoder
 */

import { BaseSolanaRequest, SolanaCommitmentOptions } from '../base';

export interface GetBlockRequest extends BaseSolanaRequest<GetBlockOptions> {
  readonly slot: number | bigint;
}

export interface GetBlockOptions extends SolanaCommitmentOptions {
  readonly maxSupportedTransactionVersion?: number;
}

export type EncodedGetBlockRequest = [number, GetBlockOptions?];

export function encodeGetBlockRequest(params: GetBlockRequest): EncodedGetBlockRequest {
  const slotNum = typeof params.slot === 'bigint' ? Number(params.slot) : params.slot;
  const encoded: EncodedGetBlockRequest = [slotNum];
  if (params.options && Object.keys(params.options).length > 0) {
    encoded.push(params.options);
  }
  return encoded;
}

