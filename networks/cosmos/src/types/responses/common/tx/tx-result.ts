/**
 * TxResult type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBytes, ensureBytesFromBase64, ensureString, apiToBigInt } from '../../../codec/converters';

// Import dependencies from same module
import { Event, EventCodec } from './event';

// Types
export interface TxResult {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log: string;
  readonly info: string;
  readonly gasWanted?: bigint;
  readonly gasUsed?: bigint;
  readonly events: readonly Event[];
  readonly codespace: string;
}

// Codecs
export const TxResultCodec = createCodec<TxResult>({
  code: { source: 'code', converter: ensureNumber },
  data: { source: 'data', converter: ensureBytesFromBase64, required: false },
  log: { source: 'log', converter: ensureString },
  info: { source: 'info', converter: ensureString },
  gasWanted: { 
    source: 'gas_wanted',
    converter: (v) => v ? apiToBigInt(v) : undefined
  },
  gasUsed: { 
    source: 'gas_used',
    converter: (v) => v ? apiToBigInt(v) : undefined
  },
  events: { 
    source: 'events',
    converter: (value: any) => (value || []).map((e: any) => EventCodec.create(e))
  },
  codespace: { source: 'codespace', converter: ensureString }
});
