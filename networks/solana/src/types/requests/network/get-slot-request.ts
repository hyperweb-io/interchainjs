/**
 * Request type for getSlot RPC method
 */

import { SolanaCommitment } from '../base';

export interface GetSlotOptions {
  commitment?: SolanaCommitment;
  minContextSlot?: number;
}

export interface GetSlotRequest {
  options?: GetSlotOptions;
}

export interface EncodedGetSlotRequest {
  commitment?: string;
  minContextSlot?: number;
}

export function encodeGetSlotRequest(request?: GetSlotRequest): EncodedGetSlotRequest | undefined {
  if (!request?.options) {
    return undefined;
  }

  const encoded: EncodedGetSlotRequest = {};

  if (request.options.commitment !== undefined) {
    encoded.commitment = request.options.commitment;
  }

  if (request.options.minContextSlot !== undefined) {
    encoded.minContextSlot = request.options.minContextSlot;
  }

  return Object.keys(encoded).length > 0 ? encoded : undefined;
}
