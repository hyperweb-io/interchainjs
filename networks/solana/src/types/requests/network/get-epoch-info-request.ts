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

export interface EncodedGetEpochInfoRequest {
  commitment?: string;
  minContextSlot?: number;
}

export function encodeGetEpochInfoRequest(request?: GetEpochInfoRequest): EncodedGetEpochInfoRequest | undefined {
  if (!request?.options) {
    return undefined;
  }

  const encoded: EncodedGetEpochInfoRequest = {};

  if (request.options.commitment !== undefined) {
    encoded.commitment = request.options.commitment;
  }

  if (request.options.minContextSlot !== undefined) {
    encoded.minContextSlot = request.options.minContextSlot;
  }

  return Object.keys(encoded).length > 0 ? encoded : undefined;
}

