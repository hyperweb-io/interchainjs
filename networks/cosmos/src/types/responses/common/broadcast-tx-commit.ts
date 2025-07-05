import { createCodec } from '../../codec';
import { ensureNumber } from '../../codec/converters';
import { TxResult, TxResultCodec } from './tx';

// Types
export interface CheckTxResult {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly info?: string;
  readonly gasWanted: bigint;
  readonly gasUsed: bigint;
  readonly events: readonly any[];
  readonly codespace?: string;
}

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

export interface BroadcastTxCommitResponse {
  readonly checkTx: CheckTxResult;
  readonly deliverTx?: DeliverTxResult;
  readonly txResult?: TxResult;
  readonly hash: Uint8Array;
  readonly height: bigint;
}

// Codecs
export const CheckTxResultCodec = createCodec<CheckTxResult>({
  code: { source: 'code', converter: ensureNumber },
  data: { source: 'data' },
  log: { source: 'log' },
  info: { source: 'info' },
  gasWanted: { source: 'gas_wanted' },
  gasUsed: { source: 'gas_used' },
  events: { source: 'events' },
  codespace: { source: 'codespace' }
});

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

export const BroadcastTxCommitResponseCodec = createCodec<BroadcastTxCommitResponse>({
  checkTx: { 
    source: 'check_tx',
    converter: (value: any) => CheckTxResultCodec.create(value)
  },
  deliverTx: { 
    source: 'deliver_tx',
    converter: (value: any) => value ? DeliverTxResultCodec.create(value) : undefined
  },
  txResult: {
    source: 'tx_result',
    converter: (value: any) => value ? TxResultCodec.create(value) : undefined
  },
  hash: { source: 'hash' },
  height: { source: 'height' }
});

// Factory functions
export function createBroadcastTxCommitResponse(data: any): BroadcastTxCommitResponse {
  return BroadcastTxCommitResponseCodec.create(data);
}