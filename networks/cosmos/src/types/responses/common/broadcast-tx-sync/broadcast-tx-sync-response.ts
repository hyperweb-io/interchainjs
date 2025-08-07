/**
 * BroadcastTxSyncResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, maybeBase64ToBytes, apiToBigInt, createArrayConverter } from '../../../codec/converters';
import { fromHex } from '@interchainjs/utils';
import { Event, EventCodec } from '../tx/event';

// Types
export interface BroadcastTxSyncResponse {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly info?: string;
  readonly hash: Uint8Array;
  readonly gasWanted?: bigint;
  readonly gasUsed?: bigint;
  readonly events?: readonly Event[];
  readonly codespace?: string;
}

// Codecs
export const BroadcastTxSyncResponseCodec = createCodec<BroadcastTxSyncResponse>({
  code: ensureNumber,
  data: maybeBase64ToBytes,
  log: ensureString,
  info: ensureString,
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
  },
  events: {
    converter: (value: unknown) => {
      if (!value || !Array.isArray(value)) return undefined;
      return value.map(e => EventCodec.create(e));
    }
  },
  codespace: ensureString
});

// Factory functions
export function createBroadcastTxSyncResponse(data: unknown): BroadcastTxSyncResponse {
  return BroadcastTxSyncResponseCodec.create(data);
}
