/**
 * BroadcastTxCommitResponse type and creator
 */

import { createCodec } from '../../../codec';
import { apiToBigInt, ensureString } from '../../../codec/converters';
import { fromHex } from '@interchainjs/utils';

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
    converter: (value: unknown) => CheckTxResultCodec.create(value)
  },
  deliverTx: { 
    source: 'deliver_tx',
    converter: (value: unknown) => value ? DeliverTxResultCodec.create(value) : undefined
  },
  txResult: {
    source: 'tx_result',
    converter: (value: unknown) => value ? TxResultCodec.create(value) : undefined
  },
  hash: {
    converter: (value: unknown) => {
      const hexStr = ensureString(value);
      return fromHex(hexStr);
    }
  },
  height: apiToBigInt
});

// Factory functions
export function createBroadcastTxCommitResponse(data: unknown): BroadcastTxCommitResponse {
  return BroadcastTxCommitResponseCodec.create(data);
}
