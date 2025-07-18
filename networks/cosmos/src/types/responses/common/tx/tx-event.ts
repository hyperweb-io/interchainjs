/**
 * TxEvent type for WebSocket transaction events
 * Represents a transaction event from the blockchain
 */

import { createCodec } from '../../../codec';
import { base64ToBytes } from '../../../codec/converters';
import { createTxResult } from './tx-result';
import { TxResult } from './tx-result';

/**
 * Event emitted when a transaction is included in a block
 */
export interface TxEvent {
  readonly hash: string;
  readonly height: number;
  readonly index: number;
  readonly tx: Uint8Array;
  readonly result: TxResult;
  readonly events: readonly any[];
}

export const TxEventCodec = createCodec<TxEvent>({
  hash: (v: unknown) => String(v),
  height: (v: unknown) => Number(v),
  index: (v: unknown) => Number(v),
  tx: base64ToBytes,
  result: (v: unknown) => createTxResult(v),
  events: (v: unknown) => Array.isArray(v) ? v : []
});

export function createTxEvent(data: unknown): TxEvent {
  return TxEventCodec.create(data);
}