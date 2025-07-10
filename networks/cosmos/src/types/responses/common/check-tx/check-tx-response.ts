/**
 * CheckTxResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';

// Types
export interface CheckTxResponse {
  readonly code: number;
  readonly data: Uint8Array;
  readonly log: string;
  readonly info: string;
  readonly gasWanted: bigint;
  readonly gasUsed: bigint;
  readonly events: readonly any[];
  readonly codespace: string;
}

// Codecs
export const CheckTxResponseCodec = createCodec<CheckTxResponse>({
  code: { source: 'code', converter: ensureNumber },
  data: { source: 'data' },
  log: { source: 'log' },
  info: { source: 'info' },
  gasWanted: { source: 'gas_wanted' },
  gasUsed: { source: 'gas_used' },
  events: { source: 'events' },
  codespace: { source: 'codespace' }
});

// Factory functions
export function createCheckTxResponse(data: any): CheckTxResponse {
  return CheckTxResponseCodec.create(data);
}
