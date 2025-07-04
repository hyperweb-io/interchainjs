/**
 * ABCI-related response types for Cosmos SDK
 */

// ProofOp represents a single proof operation
export interface ProofOp {
  readonly type: string;
  readonly key: Uint8Array;
  readonly data: Uint8Array;
}

// QueryProof represents a proof for a query
export interface QueryProof {
  readonly ops: readonly ProofOp[];
}

// AbciQueryResponse represents the response from an ABCI query
export interface AbciQueryResponse {
  readonly key: Uint8Array;
  readonly value: Uint8Array;
  readonly proof?: QueryProof;
  readonly height?: number;
  readonly index?: number;
  readonly code?: number;
  readonly codespace: string;
  readonly log?: string;
  readonly info: string;
}

// AbciInfoResponse represents the response from an ABCI info query
export interface AbciInfoResponse {
  readonly data?: string;
  readonly lastBlockHeight?: number;
  readonly lastBlockAppHash?: Uint8Array;
}

// Creator functions for type-safe object construction

export function createProofOp(params: {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}): ProofOp {
  return {
    type: params.type,
    key: params.key,
    data: params.data
  };
}

export function createQueryProof(params: {
  ops: readonly ProofOp[];
}): QueryProof {
  return {
    ops: params.ops
  };
}

export function createAbciQueryResponse(params: {
  key: Uint8Array;
  value: Uint8Array;
  proof?: QueryProof;
  height?: number;
  index?: number;
  code?: number;
  codespace: string;
  log?: string;
  info: string;
}): AbciQueryResponse {
  return {
    key: params.key,
    value: params.value,
    proof: params.proof,
    height: params.height,
    index: params.index,
    code: params.code,
    codespace: params.codespace,
    log: params.log,
    info: params.info
  };
}

export function createAbciInfoResponse(params: {
  data?: string;
  lastBlockHeight?: number;
  lastBlockAppHash?: Uint8Array;
}): AbciInfoResponse {
  return {
    data: params.data,
    lastBlockHeight: params.lastBlockHeight,
    lastBlockAppHash: params.lastBlockAppHash
  };
}