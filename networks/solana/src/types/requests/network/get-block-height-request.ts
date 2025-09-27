/**
 * Request type for getBlockHeight RPC method
 */

import { SolanaCommitment } from '../base';

export interface GetBlockHeightOptions {
  commitment?: SolanaCommitment;
  minContextSlot?: number;
}

export interface GetBlockHeightRequest {
  options?: GetBlockHeightOptions;
}

export interface EncodedGetBlockHeightRequest {
  commitment?: string;
  minContextSlot?: number;
}

export function encodeGetBlockHeightRequest(request?: GetBlockHeightRequest): EncodedGetBlockHeightRequest | undefined {
  if (!request?.options) {
    return undefined;
  }

  const encoded: EncodedGetBlockHeightRequest = {};

  if (request.options.commitment !== undefined) {
    encoded.commitment = request.options.commitment;
  }

  if (request.options.minContextSlot !== undefined) {
    encoded.minContextSlot = request.options.minContextSlot;
  }

  return Object.keys(encoded).length > 0 ? encoded : undefined;
}
