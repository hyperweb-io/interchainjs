/**
 * UnconfirmedTxsResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureString, createArrayConverter } from '../../../codec/converters';

export interface UnconfirmedTxsResponse {
  readonly count: number;
  readonly total: number;
  readonly totalBytes: number;
  readonly txs: readonly string[];
}

export const UnconfirmedTxsResponseCodec = createCodec<UnconfirmedTxsResponse>({
  count: ensureNumber,
  total: ensureNumber,
  totalBytes: { source: 'total_bytes', converter: ensureNumber },
  txs: createArrayConverter({ create: ensureString })
});

export function createUnconfirmedTxsResponse(data: unknown): UnconfirmedTxsResponse {
  return UnconfirmedTxsResponseCodec.create(data);
}