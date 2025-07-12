/**
 * TxResponse type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBytes, ensureBytesFromBase64, ensureString } from '../../../codec/converters';

// Import dependencies from same module
import { TxResult } from '../tx/tx-result';
import { TxProof, TxProofCodec } from './tx-proof';
import { TxResultCodec } from '../tx/tx-result';

export interface TxResponse {
  readonly hash: Uint8Array;
  readonly height: number;
  readonly index: number;
  readonly txResult: TxResult;
  readonly tx: Uint8Array;
  readonly proof?: TxProof;
}

export const TxResponseCodec = createCodec<TxResponse>({
  hash: { source: 'hash', converter: ensureBytes },
  height: { source: 'height', converter: ensureNumber },
  index: { source: 'index', converter: ensureNumber },
  txResult: { source: 'tx_result', converter: (value: any) => TxResultCodec.create(value) },
  tx: { source: 'tx', converter: ensureBytesFromBase64 },
  proof: { source: 'proof', converter: (value: any) => value ? TxProofCodec.create(value) : undefined, required: false }
});

// Factory functions
export function createTxResponse(data: any): TxResponse {
  return TxResponseCodec.create(data);
}
