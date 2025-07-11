/**
 * Common RPC response types for Cosmos/Tendermint
 * These are shared across all versions
 */

export { BlockSearchResponse } from './responses/common/block-search';
export { ValidatorsResponse } from './responses/common/validators';
export { CheckTxResponse, TxResponse } from './responses/common/tx';
export { TxSearchResponse } from './responses/common/tx-search';
export { UnconfirmedTxsResponse } from './responses/common/unconfirmed-txs';
export { ConsensusParams, ConsensusParamsResponse } from './responses/common/consensus-params';
export { ConsensusStateResponse } from './responses/common/consensus-state';

// Import TxData for dummy interfaces that haven't been refactored yet
import { TxData } from './responses/common/block/tx-data';
// Import ConsensusStateResponse for type alias
import { ConsensusStateResponse } from './responses/common/consensus-state';
// Import ConsensusParams for GenesisResponse
import { ConsensusParams } from './responses/common/consensus-params/consensus-params';

// Common types used in responses





export interface BlockId {
  readonly hash: Uint8Array;
  readonly parts: {
    readonly total: number;
    readonly hash: Uint8Array;
  };
}

export interface BlockHeader {
  readonly version: {
    readonly block: string;
    readonly app?: string;
  };
  readonly chainId: string;
  readonly height: number;
  readonly time: Date;
  readonly lastBlockId: BlockId;
  readonly lastCommitHash: Uint8Array;
  readonly dataHash: Uint8Array;
  readonly validatorsHash: Uint8Array;
  readonly nextValidatorsHash: Uint8Array;
  readonly consensusHash: Uint8Array;
  readonly appHash: Uint8Array;
  readonly lastResultsHash: Uint8Array;
  readonly evidenceHash: Uint8Array;
  readonly proposerAddress: Uint8Array;
}

export interface Block {
  readonly header: BlockHeader;
  readonly data: {
    readonly txs: readonly Uint8Array[];
  };
  readonly evidence: {
    readonly evidence: readonly any[];
  };
  readonly lastCommit: Commit | null;
}

export interface Commit {
  readonly height: number;
  readonly round: number;
  readonly blockId: BlockId;
  readonly signatures: readonly CommitSignature[];
}

export interface CommitSignature {
  readonly blockIdFlag: BlockIdFlag;
  readonly validatorAddress: Uint8Array;
  readonly timestamp: Date;
  readonly signature: Uint8Array;
}

export enum BlockIdFlag {
  Unknown = 0,
  Absent = 1,
  Commit = 2,
  Nil = 3,
}

export interface ValidatorPubkey {
  readonly type: string;
  readonly value: Uint8Array;
}

export interface Validator {
  readonly address: Uint8Array;
  readonly pubKey: ValidatorPubkey;
  readonly votingPower: bigint;
  readonly proposerPriority: bigint;
}





export interface NodeInfo {
  readonly protocolVersion: {
    readonly p2p: string;
    readonly block: string;
    readonly app: string;
  };
  readonly id: string;
  readonly listenAddr: string;
  readonly network: string;
  readonly version: string;
  readonly channels: string;
  readonly moniker: string;
  readonly other: {
    readonly txIndex: string;
    readonly rpcAddress: string;
  };
}

export interface SyncInfo {
  readonly latestBlockHash: Uint8Array;
  readonly latestAppHash: Uint8Array;
  readonly latestBlockHeight: number;
  readonly latestBlockTime: Date;
  readonly earliestBlockHash: Uint8Array;
  readonly earliestAppHash: Uint8Array;
  readonly earliestBlockHeight: number;
  readonly earliestBlockTime: Date;
  readonly catchingUp: boolean;
}

export interface ProofOp {
  readonly type: string;
  readonly key: Uint8Array;
  readonly data: Uint8Array;
}

export interface QueryProof {
  readonly ops: readonly ProofOp[];
}

export interface TxProof {
  readonly rootHash: Uint8Array;
  readonly data: Uint8Array;
  readonly proof: QueryProof;
}

export interface BlockMeta {
  readonly blockId: BlockId;
  readonly blockSize: number;
  readonly header: BlockHeader;
  readonly numTxs: number;
}

// Common response types
export interface BlockResponse {
  readonly blockId: BlockId;
  readonly block: Block;
}

export interface BlockchainResponse {
  readonly lastHeight: number;
  readonly blockMetas: readonly BlockMeta[];
}

export interface BroadcastTxAsyncResponse {
  readonly hash: Uint8Array;
}



export interface CommitResponse {
  readonly header: BlockHeader;
  readonly commit: Commit;
  readonly canonical: boolean;
}





export interface HeaderResponse {
  readonly header: BlockHeader;
}

export type HealthResponse = null;

export interface StatusResponse {
  readonly nodeInfo: NodeInfo;
  readonly syncInfo: SyncInfo;
  readonly validatorInfo: Validator;
}



// Version-specific types combined with optional fields
export interface AbciInfoResponse {
  readonly data?: string;
  readonly lastBlockHeight?: number;
  readonly lastBlockAppHash?: Uint8Array;
}

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

export interface BroadcastTxCommitResponse {
  readonly height: number;
  readonly hash: Uint8Array;
  readonly checkTx: TxData;
  readonly deliverTx?: TxData; // Tendermint 0.34 & 0.37
  readonly txResult?: TxData; // CometBFT 0.38
}

export interface NetInfoResponse {
  readonly listening: boolean;
  readonly listeners: readonly string[];
  readonly nPeers: number;
  readonly peers: readonly Peer[];
}

export interface NumUnconfirmedTxsResponse {
  readonly count: number; // Normalized from n_txs or count field
  readonly nTxs?: number; // Tendermint 0.34 (deprecated, use count)
  readonly total: number;
  readonly totalBytes: number;
}

export interface Peer {
  readonly nodeInfo: NodeInfo;
  readonly isOutbound: boolean;
  readonly connectionStatus: {
    readonly duration: number;
    readonly sendMonitor: {
      readonly active: boolean;
      readonly start: Date;
      readonly duration: number;
      readonly idle: number;
      readonly bytes: number;
      readonly samples: number;
      readonly instRate: number;
      readonly curRate: number;
      readonly avgRate: number;
      readonly peakRate: number;
      readonly bytesRem: number;
      readonly timeRem: number;
      readonly progress: number;
    };
    readonly recvMonitor: {
      readonly active: boolean;
      readonly start: Date;
      readonly duration: number;
      readonly idle: number;
      readonly bytes: number;
      readonly samples: number;
      readonly instRate: number;
      readonly curRate: number;
      readonly avgRate: number;
      readonly peakRate: number;
      readonly bytesRem: number;
      readonly timeRem: number;
      readonly progress: number;
    };
    readonly channels: readonly {
      readonly id: number;
      readonly sendQueueCapacity: number;
      readonly sendQueueSize: number;
      readonly priority: number;
      readonly recentlySent: number;
    }[];
  };
  readonly remoteIp: string;
}

// Additional types used in interfaces






export interface TxEvent {
  readonly tx: Uint8Array;
  readonly result: any;
}

export interface BlockEvent {
  readonly block: Block;
}

// Type aliases for backward compatibility
export type ConsensusState = ConsensusStateResponse;