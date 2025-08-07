/**
 * CheckTxParams type and encoder
 */

import { createCodec } from '../../../codec';

// Types
export interface CheckTxParams {
  readonly tx: string; // base64 encoded transaction
}

export interface EncodedCheckTxParams {
  readonly tx: string;
}

// Codec for encoding
export const CheckTxParamsCodec = createCodec<CheckTxParams>({
  tx: { source: 'tx' }
});

// Encoder function
export function encodeCheckTxParams(params: CheckTxParams): EncodedCheckTxParams {
  return CheckTxParamsCodec.create(params) as EncodedCheckTxParams;
}