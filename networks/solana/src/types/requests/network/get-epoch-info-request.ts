/**
 * Request type for getEpochInfo RPC method
 */

import { SolanaCommitment } from '../base';

export interface GetEpochInfoOptions {
  commitment?: SolanaCommitment;
  minContextSlot?: number;
}

export interface GetEpochInfoRequest {
  options?: GetEpochInfoOptions;
}

export type EncodedGetEpochInfoRequest = [GetEpochInfoOptions?];

export function encodeGetEpochInfoRequest(request?: GetEpochInfoRequest): EncodedGetEpochInfoRequest {
  const params: EncodedGetEpochInfoRequest = [];

  const encoded: GetEpochInfoOptions = {};

  if (request?.options?.commitment !== undefined) {
    encoded.commitment = request.options.commitment;
  }

  if (request?.options?.minContextSlot !== undefined) {
    encoded.minContextSlot = request.options.minContextSlot;
  }

  if (Object.keys(encoded).length > 0) {
    params.push(encoded);
  }

  return params;
}
