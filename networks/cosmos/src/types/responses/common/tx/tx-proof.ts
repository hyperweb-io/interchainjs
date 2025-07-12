/**
 * TxProof type and creator
 */

import { createCodec } from '../../../codec';
import { ensureNumber, ensureBytes, ensureString } from '../../../codec/converters';

export interface TxProof {
  readonly rootHash: Uint8Array;
  readonly data: Uint8Array;
  readonly proof?: {
    readonly total: number;
    readonly index: number;
    readonly leafHash: Uint8Array;
    readonly aunts: readonly Uint8Array[];
  };
}

export const TxProofCodec = createCodec<TxProof>({
  rootHash: { source: 'root_hash', converter: ensureBytes },
  data: { source: 'data', converter: ensureBytes },
  proof: { 
    source: 'proof',
    required: false,
    converter: (value: any) => value ? {
      total: ensureNumber(value.total),
      index: ensureNumber(value.index),
      leafHash: ensureBytes(value.leaf_hash),
      aunts: (value.aunts || []).map((a: any) => ensureBytes(a))
    } : undefined
  }
});
