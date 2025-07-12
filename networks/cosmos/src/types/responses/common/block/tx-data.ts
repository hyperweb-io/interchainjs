/**
 * TxData type and creator for BlockResults
 * 
 * Represents the result of executing a single transaction in a block
 */

import { createCodec } from '../../../codec';
import { apiToNumber, apiToBigInt, ensureString, base64ToBytes, createArrayConverter } from '../../../codec/converters';
import { Event, createEvent } from '../tx/event';

/**
 * Transaction execution result data
 */
export interface TxData {
  /** Response code (0 = success, non-zero = error) */
  readonly code: number;
  /** Result data from transaction execution */
  readonly data?: Uint8Array;
  /** Human-readable log message */
  readonly log?: string;
  /** Additional information about the result */
  readonly info?: string;
  /** Amount of gas requested for transaction */
  readonly gasWanted?: bigint;
  /** Amount of gas consumed by transaction */
  readonly gasUsed?: bigint;
  /** Events emitted during transaction execution */
  readonly events: readonly Event[];
  /** Namespace for error codes */
  readonly codespace?: string;
}

export const TxDataCodec = createCodec<TxData>({
  code: apiToNumber,
  data: {
    source: 'data',
    converter: (v) => v ? base64ToBytes(v) : undefined
  },
  log: ensureString,
  info: ensureString,
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
  codespace: ensureString
});

export function createTxData(data: unknown): TxData {
  return TxDataCodec.create(data);
}