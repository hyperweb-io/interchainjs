/**
 * BroadcastTxSyncResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, maybeBase64ToBytes, apiToBigInt } from '../../../codec/converters';
import { fromHex } from '@interchainjs/utils';

// Types
export interface BroadcastTxSyncResponse {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly hash: Uint8Array;
  readonly gasWanted?: bigint;
  readonly gasUsed?: bigint;
}

// Codecs
export const BroadcastTxSyncResponseCodec = createCodec<BroadcastTxSyncResponse>({
  code: ensureNumber,
  data: maybeBase64ToBytes,
  log: ensureString,
  hash: {
    converter: (value: unknown) => {
      const hexStr = ensureString(value);
      return fromHex(hexStr);
    }
  },
  gasWanted: {
    source: 'gas_wanted',
    converter: (v) => v ? apiToBigInt(v) : undefined
  },
  gasUsed: {
    source: 'gas_used',
    converter: (v) => v ? apiToBigInt(v) : undefined
  }
});

// Factory functions
export function createBroadcastTxSyncResponse(data: unknown): BroadcastTxSyncResponse {
  return BroadcastTxSyncResponseCodec.create(data);
}
