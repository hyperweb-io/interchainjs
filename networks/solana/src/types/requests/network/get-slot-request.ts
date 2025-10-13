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

export type EncodedGetSlotRequest = [GetSlotOptions?];

export function encodeGetSlotRequest(request?: GetSlotRequest): EncodedGetSlotRequest {
  const params: EncodedGetSlotRequest = [];

  const encoded: GetSlotOptions = {};

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
