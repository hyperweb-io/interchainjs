/**
 * TxResult type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBytes, ensureBytesFromBase64, ensureString } from '../../../codec/converters';

// Import dependencies from same module
import { Event, EventCodec } from './event';

// Types
export interface TxResult {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log: string;
  readonly info: string;
  readonly gasWanted: number;
  readonly gasUsed: number;
  readonly events: readonly Event[];
  readonly codespace: string;
}

// Codecs
export const TxResultCodec = createCodec<TxResult>({
  code: { source: 'code', converter: ensureNumber },
  data: { source: 'data', converter: ensureBytesFromBase64, required: false },
  log: { source: 'log', converter: ensureString },
  info: { source: 'info', converter: ensureString },
  gasWanted: { source: 'gas_wanted', converter: ensureNumber },
  gasUsed: { source: 'gas_used', converter: ensureNumber },
  events: { 
    source: 'events',
    converter: (value: any) => (value || []).map((e: any) => EventCodec.create(e))
  },
  codespace: { source: 'codespace', converter: ensureString }
});
