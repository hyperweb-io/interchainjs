// networks/cosmos/src/types/responses.ts
import { Event } from '@interchainjs/cosmos-types/tendermint/abci/types';

// Basic response types
export interface ChainStatus {
  nodeInfo: NodeInfo;
  syncInfo: SyncInfo;
  validatorInfo: ValidatorInfo;
}

export interface NodeInfo {
  protocolVersion: {
    p2p: string;
    block: string;
    app: string;
  };
  id: string;
  listenAddr: string;
  network: string;
  version: string;
  channels: string;
  moniker: string;
  other: {
    txIndex: string;
    rpcAddress: string;
  };
}

export interface SyncInfo {
  latestBlockHash: string;
  latestAppHash: string;
  latestBlockHeight: string;
  latestBlockTime: string;
  earliestBlockHash: string;
  earliestAppHash: string;
  earliestBlockHeight: string;
  earliestBlockTime: string;
  catchingUp: boolean;
}

export interface ValidatorInfo {
  address: string;
  pubKey: {
    type: string;
    value: string;
  };
  votingPower: string;
}

export interface BlockHeader {
  version: {
    block: string;
    app?: string;
  };
  chainId: string;
  height: string;
  time: string;
  lastBlockId: BlockId;
  lastCommitHash: string;
  dataHash: string;
  validatorsHash: string;
  nextValidatorsHash: string;
  consensusHash: string;
  appHash: string;
  lastResultsHash: string;
  evidenceHash: string;
  proposerAddress: string;
}

export interface BlockResults {
  height: string;
  txsResults: TxResult[];
  beginBlockEvents: Event[];
  endBlockEvents: Event[];
  validatorUpdates: ValidatorUpdate[];
  consensusParamUpdates: ConsensusParams;
}

export interface TxResult {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gasWanted: string;
  gasUsed: string;
  events: Event[];
  codespace: string;
}

export interface TxResponse {
  hash: string;
  height: string;
  index: number;
  txResult: TxResult;
  tx: string;
  proof?: TxProof;
}

export interface TxProof {
  rootHash: string;
  data: string;
  proof: {
    total: string;
    index: string;
    leafHash: string;
    aunts: string[];
  };
}

export interface ValidatorSet {
  blockHeight: string;
  validators: Validator[];
  count: string;
  total: string;
}

export interface Validator {
  address: string;
  pubKey: {
    type: string;
    value: string;
  };
  votingPower: string;
  proposerPriority: string;
}

export interface ValidatorUpdate {
  pubKey: {
    type: string;
    value: string;
  };
  power: string;
}

export interface AbciQueryParams {
  path: string;
  data: Uint8Array;
  height?: number;
  prove?: boolean;
}

export interface AbciQueryResult {
  code: number;
  log: string;
  info: string;
  index: string;
  key: Uint8Array;
  value: Uint8Array;
  proofOps?: ProofOps;
  height: string;
  codespace: string;
}

export interface ProofOps {
  ops: ProofOp[];
}

export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}

export interface BlockSearchParams {
  query: string;
  page?: number;
  perPage?: number;
  orderBy?: string;
}

export interface SearchBlocksResult {
  blocks: Block[];
  totalCount: string;
}

export interface TxSearchParams {
  query: string;
  prove?: boolean;
  page?: number;
  perPage?: number;
  orderBy?: string;
}

export interface SearchTxsResult {
  txs: TxResponse[];
  totalCount: string;
}

export interface Block {
  header: BlockHeader;
  data: {
    txs: string[];
  };
  evidence: {
    evidence: Evidence[];
  };
  lastCommit: Commit;
}

export interface Evidence {
  type: string;
  height: string;
  time: string;
  totalVotingPower: string;
}

export interface Commit {
  height: string;
  round: number;
  blockId: BlockId;
  signatures: CommitSig[];
}

export interface CommitSig {
  blockIdFlag: number;
  validatorAddress: string;
  timestamp: string;
  signature: string;
}

export interface BlockId {
  hash: string;
  partSetHeader: {
    total: number;
    hash: string;
  };
}

// Additional response types for missing APIs
export interface AbciInfo {
  data: string;
  version: string;
  appVersion: string;
  lastBlockHeight: string;
  lastBlockAppHash: string;
}

export interface HealthResult {
  // Empty object for healthy node
}

export interface NetInfo {
  listening: boolean;
  listeners: string[];
  nPeers: string;
  peers: PeerInfo[];
}

export interface PeerInfo {
  nodeInfo: {
    protocolVersion: {
      p2p: string;
      block: string;
      app: string;
    };
    id: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: string;
    moniker: string;
    other: {
      txIndex: string;
      rpcAddress: string;
    };
  };
  isOutbound: boolean;
  connectionStatus: {
    duration: string;
    sendMonitor: MonitorInfo;
    recvMonitor: MonitorInfo;
    channels: ChannelInfo[];
  };
  remoteIp: string;
}

export interface MonitorInfo {
  active: boolean;
  start: string;
  duration: string;
  idle: string;
  bytes: string;
  samples: string;
  instRate: string;
  curRate: string;
  avgRate: string;
  peakRate: string;
  bytesRem: string;
  timeRem: string;
  progress: number;
}

export interface ChannelInfo {
  id: number;
  sendQueueCapacity: string;
  sendQueueSize: string;
  priority: string;
  recentlySent: string;
}

export interface BlockchainInfo {
  lastHeight: string;
  blockMetas: BlockMeta[];
}

export interface BlockMeta {
  blockId: BlockId;
  blockSize: string;
  header: BlockHeader;
  numTxs: string;
}

export interface CheckTxResult {
  code: number;
  data: string;
  log: string;
  info: string;
  gasWanted: string;
  gasUsed: string;
  events: Event[];
  codespace: string;
  sender: string;
  priority: string;
  mempoolError: string;
}

export interface UnconfirmedTxs {
  nTxs: string;
  total: string;
  totalBytes: string;
  txs: string[];
}

export interface NumUnconfirmedTxs {
  nTxs: string;
  total: string;
  totalBytes: string;
}

export interface ConsensusParams {
  block: {
    maxBytes: string;
    maxGas: string;
    timeIotaMs: string;
  };
  evidence: {
    maxAgeNumBlocks: string;
    maxAgeDuration: string;
    maxBytes: string;
  };
  validator: {
    pubKeyTypes: string[];
  };
  version: {
    appVersion: string;
  };
}

export interface ConsensusState {
  height: string;
  round: number;
  step: number;
  startTime: string;
  commitTime: string;
  validators: {
    validators: Validator[];
    proposer: Validator;
  };
  proposal: any;
  proposalBlock: any;
  proposalBlockParts: any;
  lockedRound: number;
  lockedBlock: any;
  lockedBlockParts: any;
  validRound: number;
  validBlock: any;
  validBlockParts: any;
  votes: any[];
  commitRound: number;
  lastCommit: any;
  lastValidators: {
    validators: Validator[];
    proposer: Validator;
  };
  triggeredTimeoutPrecommit: boolean;
}

export interface ConsensusStateDump {
  roundState: ConsensusState;
  peers: Array<{
    nodeAddress: string;
    peerState: {
      height: string;
      round: number;
      step: number;
      startTime: string;
      proposal: boolean;
      proposalBlockPartsHeader: any;
      proposalBlockParts: any;
      proposalPOLRound: number;
      proposalPOL: any;
      prevotes: any;
      precommits: any;
      catchupCommitRound: number;
      catchupCommit: any;
    };
  }>;
}

export interface Genesis {
  genesisTime: string;
  chainId: string;
  initialHeight: string;
  consensusParams: ConsensusParams;
  validators: Array<{
    address: string;
    pubKey: {
      type: string;
      value: string;
    };
    power: string;
    name: string;
  }>;
  appHash: string;
  appState: any;
}

export interface GenesisChunk {
  chunk: number;
  total: number;
  data: string;
}

// Event types for streaming
export interface TxEvent {
  tx: TxResponse;
  result: TxResult;
}

export interface BlockEvent {
  block: Block;
  resultBeginBlock: {
    events: Event[];
  };
  resultEndBlock: {
    events: Event[];
    validatorUpdates: ValidatorUpdate[];
    consensusParamUpdates: ConsensusParams;
  };
}