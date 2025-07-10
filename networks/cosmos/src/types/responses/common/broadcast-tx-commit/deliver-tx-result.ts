/**
 * DeliverTxResult type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';

export interface DeliverTxResult {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly info?: string;
  readonly gasWanted: bigint;
  readonly gasUsed: bigint;
  readonly events: readonly any[];
  readonly codespace?: string;
}

export const DeliverTxResultCodec = createCodec<DeliverTxResult>({
  code: { source: 'code', converter: ensureNumber },
  data: { source: 'data' },
  log: { source: 'log' },
  info: { source: 'info' },
  gasWanted: { source: 'gas_wanted' },
  gasUsed: { source: 'gas_used' },
  events: { source: 'events' },
  codespace: { source: 'codespace' }
});
