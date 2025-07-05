/**
 * BroadcastTxCommitResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber } from '../../../codec/converters';

// Import dependencies from same module
import { CheckTxResult, CheckTxResultCodec } from './check-tx-result';
import { DeliverTxResult, DeliverTxResultCodec } from './deliver-tx-result';
import { TxResult } from '../tx/tx-result';
import { TxResultCodec } from '../tx/tx-result';

export interface BroadcastTxCommitResponse {
  readonly checkTx: CheckTxResult;
  readonly deliverTx?: DeliverTxResult;
  readonly txResult?: TxResult;
  readonly hash: Uint8Array;
  readonly height: bigint;
}

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
