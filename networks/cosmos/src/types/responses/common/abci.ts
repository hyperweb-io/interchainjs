/**
 * Common ABCI response types using codec pattern
 */

import { createCodec } from '../../codec';
import { 
  apiToNumber, 
  maybeBase64ToBytes, 
  base64ToBytes,
  ensureString,
  createArrayConverter
} from '../../codec/converters';

// Interfaces
export interface ProofOp {
  readonly type: string;
  readonly key: Uint8Array;
  readonly data: Uint8Array;
}

export interface QueryProof {
  readonly ops: readonly ProofOp[];
}

export interface AbciQueryResponse {
  readonly key: Uint8Array;
  readonly value: Uint8Array;
  readonly proof?: QueryProof;
  readonly height: number;
  readonly index: number;
  readonly code: number;
  readonly codespace: string;
  readonly log: string;
  readonly info: string;
}

export interface AbciInfoResponse {
  readonly data?: string;
  readonly lastBlockHeight?: number;
  readonly lastBlockAppHash?: Uint8Array;
}

// Codecs
export const ProofOpCodec = createCodec<ProofOp>({
  type: ensureString,
  key: base64ToBytes,
  data: base64ToBytes
});

export const QueryProofCodec = createCodec<QueryProof>({
  ops: createArrayConverter(ProofOpCodec)
});

export const AbciQueryResponseCodec = createCodec<AbciQueryResponse>({
  key: base64ToBytes,
  value: base64ToBytes,
  proof: {
    source: 'proofOps',
    converter: (value: unknown) => value ? QueryProofCodec.create(value) : undefined
  },
  height: apiToNumber,
  index: apiToNumber,
  code: apiToNumber,
  codespace: ensureString,
  log: ensureString,
  info: ensureString
});

export const AbciInfoResponseCodec = createCodec<AbciInfoResponse>({
  data: ensureString,
  lastBlockHeight: {
    source: 'last_block_height',
    converter: apiToNumber
  },
  lastBlockAppHash: {
    source: 'last_block_app_hash',
    converter: maybeBase64ToBytes
  }
});

// Creator functions that use the codecs
export function createProofOp(data: unknown): ProofOp {
  return ProofOpCodec.create(data);
}

export function createQueryProof(data: unknown): QueryProof {
  return QueryProofCodec.create(data);
}

export function createAbciQueryResponse(data: unknown): AbciQueryResponse {
  return AbciQueryResponseCodec.create(data);
}

export function createAbciInfoResponse(data: unknown): AbciInfoResponse {
  return AbciInfoResponseCodec.create(data);
}