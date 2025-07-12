/**
 * BroadcastTxAsyncResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, maybeBase64ToBytes } from '../../../codec/converters';
import { fromHex } from '@interchainjs/utils';

// Types
export interface BroadcastTxAsyncResponse {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly hash: Uint8Array;
}

// Codecs
export const BroadcastTxAsyncResponseCodec = createCodec<BroadcastTxAsyncResponse>({
  code: ensureNumber,
  data: maybeBase64ToBytes,
  log: ensureString,
  hash: {
    converter: (value: unknown) => {
      const hexStr = ensureString(value);
      return fromHex(hexStr);
    }
  }
});

// Factory functions
export function createBroadcastTxAsyncResponse(data: unknown): BroadcastTxAsyncResponse {
  return BroadcastTxAsyncResponseCodec.create(data);
}
