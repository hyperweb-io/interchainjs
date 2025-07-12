/**
 * BroadcastTxParams type and encoder
 */

import { createCodec } from '../../../codec';
import { toBase64 } from '@interchainjs/utils';
import { EncodedBroadcastTxParams } from './encoded-broadcast-tx-params';

export interface BroadcastTxParams {
  readonly tx: Uint8Array;
}

// Codec for encoding broadcast transaction parameters
export const BroadcastTxParamsCodec = createCodec<EncodedBroadcastTxParams>({
  tx: {
    converter: (value: unknown) => {
      if (value instanceof Uint8Array) {
        return toBase64(value);
      }
      throw new Error('tx must be Uint8Array');
    }
  }
});

// Creator function that encodes the parameters
export function encodeBroadcastTxParams(params: BroadcastTxParams): EncodedBroadcastTxParams {
  return BroadcastTxParamsCodec.create(params);
}