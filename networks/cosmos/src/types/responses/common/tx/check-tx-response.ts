/**
 * CheckTxResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBigInt } from '../../../codec/converters';
import { fromBase64 } from '@interchainjs/encoding/base64';

// Types
export interface CheckTxResponse {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly info?: string;
  readonly gasWanted?: bigint;
  readonly gasUsed?: bigint;
  readonly events?: readonly unknown[];
  readonly codespace?: string;
}

// Codecs
export const CheckTxResponseCodec = createCodec<CheckTxResponse>({
  code: { source: 'code', converter: ensureNumber },
  data: { source: 'data', converter: (v: unknown) => v ? fromBase64(String(v)) : undefined },
  log: { source: 'log' },
  info: { source: 'info' },
  gasWanted: { source: 'gas_wanted', converter: (v: unknown) => v !== undefined ? ensureBigInt(v) : undefined },
  gasUsed: { source: 'gas_used', converter: (v: unknown) => v !== undefined ? ensureBigInt(v) : undefined },
  events: { source: 'events', converter: (v: unknown) => v ? (Array.isArray(v) ? v : []) : undefined },
  codespace: { source: 'codespace' }
});

// Creator function
export function createCheckTxResponse(data: unknown): CheckTxResponse {
  return CheckTxResponseCodec.create(data);
}