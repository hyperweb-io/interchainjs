/**
 * Common RPC response types for Cosmos/Tendermint
 * These are shared across all versions
 */

// Common types used in responses
export interface EventAttribute {
  readonly key: string;
  readonly value: string;
  readonly index?: boolean;
}

export interface Event {
  readonly type: string;
  readonly attributes: readonly EventAttribute[];
}

export interface TxData {
  readonly code: number;
  readonly data?: Uint8Array;
  readonly log?: string;
  readonly info?: string;
  readonly gasWanted?: bigint;
  readonly gasUsed?: bigint;
  readonly events: readonly Event[];
  readonly codespace?: string;
}

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

export interface ValidatorUpdate {
  readonly pubKey: ValidatorPubkey;
  readonly power: bigint;
}

export interface ConsensusParams {
  readonly block: {
    readonly maxBytes: bigint;
    readonly maxGas: bigint;
    readonly timeIotaMs?: bigint;
  };
  readonly evidence: {
    readonly maxAgeNumBlocks: bigint;
    readonly maxAgeDuration: bigint;
    readonly maxBytes?: bigint;
  };
  readonly validator: {
    readonly pubKeyTypes: readonly string[];
  };
  readonly version?: {
    readonly appVersion?: bigint;
  };
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

export interface BlockResultsResponse {
  readonly height: number;
  readonly txsResults?: readonly TxData[];
  readonly beginBlockEvents?: readonly Event[]; // Tendermint 0.34 & 0.37
  readonly endBlockEvents?: readonly Event[]; // Tendermint 0.34 & 0.37
  readonly finalizeBlockEvents?: readonly Event[]; // CometBFT 0.38
  readonly validatorUpdates?: readonly ValidatorUpdate[];
  readonly consensusParamUpdates?: ConsensusParams;
}

export interface BlockSearchResponse {
  readonly blocks: readonly BlockResponse[];
  readonly totalCount: number;
}

export interface BlockchainResponse {
  readonly lastHeight: number;
  readonly blockMetas: readonly BlockMeta[];
}

export interface BroadcastTxAsyncResponse {
  readonly hash: Uint8Array;
}

export interface BroadcastTxSyncResponse extends TxData {
  readonly hash: Uint8Array;
}

export interface CommitResponse {
  readonly header: BlockHeader;
  readonly commit: Commit;
  readonly canonical: boolean;
}

export interface ConsensusParamsResponse {
  readonly blockHeight: number;
  readonly consensusParams: ConsensusParams;
}

export interface GenesisResponse {
  readonly genesisTime: Date;
  readonly chainId: string;
  readonly initialHeight?: number;
  readonly consensusParams: ConsensusParams;
  readonly validators: readonly Validator[];
  readonly appHash: Uint8Array;
  readonly appState?: Record<string, unknown>;
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

export interface TxResponse {
  readonly tx: Uint8Array;
  readonly hash: Uint8Array;
  readonly height: number;
  readonly index: number;
  readonly result: TxData;
  readonly proof?: TxProof;
}

export interface TxSearchResponse {
  readonly txs: readonly TxResponse[];
  readonly totalCount: number;
}

export interface UnconfirmedTxsResponse {
  readonly count: number;
  readonly total: number;
  readonly totalBytes: number;
  readonly txs: readonly Uint8Array[];
}

export interface ValidatorsResponse {
  readonly blockHeight: number;
  readonly validators: readonly Validator[];
  readonly count: number;
  readonly total: number;
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
  readonly count?: number; // CometBFT 0.38 & Tendermint 0.37
  readonly nTxs?: number; // Tendermint 0.34
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
export interface ConsensusState {
  readonly roundState: any;
  readonly peers: readonly any[];
}

export interface ConsensusStateDump {
  readonly roundState: any;
  readonly peers: readonly any[];
}

export interface GenesisChunk {
  readonly chunk: number;
  readonly total: number;
  readonly data: string;
}

export interface TxEvent {
  readonly tx: Uint8Array;
  readonly result: any;
}

export interface BlockEvent {
  readonly block: Block;
}