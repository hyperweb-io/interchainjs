import { createCodec } from '../../codec';
import { ensureNumber, ensureBytes, ensureString } from '../../codec/converters';

// Type definitions for Event
export interface Event {
  type: string;
  attributes: Array<{
    key: string;
    value: string;
    index?: boolean;
  }>;
}

const EventCodec = createCodec<Event>({
  type: { source: 'type' },
  attributes: { 
    source: 'attributes',
    converter: (attrs: unknown) => {
      const attrArray = attrs as any[] || [];
      return attrArray.map(attr => ({
        key: attr.key,
        value: attr.value,
        index: attr.index
      }));
    }
  }
});

// Types
export interface TxResult {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log: string;
  readonly info: string;
  readonly gasWanted: number;
  readonly gasUsed: number;
  readonly events: readonly Event[];
  readonly codespace: string;
}

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

export interface TxResponse {
  readonly hash: Uint8Array;
  readonly height: number;
  readonly index: number;
  readonly txResult: TxResult;
  readonly tx: Uint8Array;
  readonly proof?: TxProof;
}

// Codecs
export const TxResultCodec = createCodec<TxResult>({
  code: { source: 'code', converter: ensureNumber },
  data: { source: 'data', converter: ensureBytes, required: false },
  log: { source: 'log', converter: ensureString },
  info: { source: 'info', converter: ensureString },
  gasWanted: { source: 'gas_wanted', converter: ensureNumber },
  gasUsed: { source: 'gas_used', converter: ensureNumber },
  events: { 
    source: 'events',
    converter: (value: any) => (value || []).map((e: any) => EventCodec.create(e))
  },
  codespace: { source: 'codespace', converter: ensureString }
});

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

export const TxResponseCodec = createCodec<TxResponse>({
  hash: { source: 'hash', converter: ensureBytes },
  height: { source: 'height', converter: ensureNumber },
  index: { source: 'index', converter: ensureNumber },
  txResult: { source: 'tx_result', converter: (value: any) => TxResultCodec.create(value) },
  tx: { source: 'tx', converter: ensureBytes },
  proof: { source: 'proof', converter: (value: any) => value ? TxProofCodec.create(value) : undefined, required: false }
});

// Factory functions
export function createTxResponse(data: any): TxResponse {
  return TxResponseCodec.create(data);
}