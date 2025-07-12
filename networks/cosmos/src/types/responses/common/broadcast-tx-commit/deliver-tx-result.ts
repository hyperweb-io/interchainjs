/**
 * DeliverTxResult type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, apiToBigInt, base64ToBytes, ensureString, createArrayConverter } from '../../../codec/converters';
import { Event, createEvent } from '../tx/event';

export interface DeliverTxResult {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly info?: string;
  readonly gasWanted?: bigint;
  readonly gasUsed?: bigint;
  readonly events: readonly Event[];
  readonly codespace?: string;
}

export const DeliverTxResultCodec = createCodec<DeliverTxResult>({
  code: { source: 'code', converter: ensureNumber },
  data: { 
    source: 'data',
    converter: (v) => v ? base64ToBytes(v) : undefined
  },
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
    converter: createArrayConverter({ create: createEvent })
  },
  codespace: { source: 'codespace', converter: ensureString }
});
