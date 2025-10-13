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

export type EncodedGetBlockHeightRequest = [GetBlockHeightOptions?];

export function encodeGetBlockHeightRequest(request?: GetBlockHeightRequest): EncodedGetBlockHeightRequest {
  const params: EncodedGetBlockHeightRequest = [];

  const encoded: GetBlockHeightOptions = {};

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
