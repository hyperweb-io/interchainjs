/**
 * Response transformer to convert our responses to CosmJS-compatible format
 * This allows us to maintain backward compatibility while providing CosmJS-style responses
 */

import { fromBase64, fromHex } from '@interchainjs/encoding';
import * as cosmjsResponses from '../types/responses.js';

// Helper to convert hex string to Uint8Array
function hexToUint8Array(hex: string): Uint8Array {
  const cleanHex = hex.startsWith('0x') ? hex.slice(2) : hex;
  return fromHex(cleanHex);
}

// Helper to convert base64 string to Uint8Array
function base64ToUint8Array(base64: string): Uint8Array {
  return fromBase64(base64);
}

// Helper to parse date strings
function parseDate(dateStr: string): Date {
  return new Date(dateStr);
}

// Transform status response
export function transformStatusResponse(raw: any): cosmjsResponses.StatusResponse {
  return {
    nodeInfo: {
      protocolVersion: {
        p2p: raw.nodeInfo?.protocolVersion?.p2p || '',
        block: raw.nodeInfo?.protocolVersion?.block || '',
        app: raw.nodeInfo?.protocolVersion?.app || ''
      },
      id: raw.nodeInfo?.id || '',
      listenAddr: raw.nodeInfo?.listenAddr || '',
      network: raw.nodeInfo?.network || '',
      version: raw.nodeInfo?.version || '',
      channels: raw.nodeInfo?.channels || '',
      moniker: raw.nodeInfo?.moniker || '',
      other: {
        txIndex: raw.nodeInfo?.other?.txIndex || '',
        rpcAddress: raw.nodeInfo?.other?.rpcAddress || ''
      }
    },
    syncInfo: {
      latestBlockHash: hexToUint8Array(raw.syncInfo?.latestBlockHash || ''),
      latestAppHash: hexToUint8Array(raw.syncInfo?.latestAppHash || ''),
      latestBlockHeight: parseInt(raw.syncInfo?.latestBlockHeight || '0'),
      latestBlockTime: parseDate(raw.syncInfo?.latestBlockTime || new Date().toISOString()),
      earliestBlockHash: hexToUint8Array(raw.syncInfo?.earliestBlockHash || ''),
      earliestAppHash: hexToUint8Array(raw.syncInfo?.earliestAppHash || ''),
      earliestBlockHeight: parseInt(raw.syncInfo?.earliestBlockHeight || '0'),
      earliestBlockTime: parseDate(raw.syncInfo?.earliestBlockTime || new Date().toISOString()),
      catchingUp: raw.syncInfo?.catchingUp || false
    },
    validatorInfo: transformValidator(raw.validatorInfo || {})
  };
}

// Transform validator
function transformValidator(raw: any): cosmjsResponses.Validator {
  return {
    address: hexToUint8Array(raw.address || ''),
    pubKey: {
      type: raw.pubKey?.type || '',
      value: base64ToUint8Array(raw.pubKey?.value || '')
    },
    votingPower: BigInt(raw.votingPower || '0'),
    proposerPriority: BigInt(raw.proposerPriority || '0')
  };
}

// Transform ABCI info response
export function transformAbciInfoResponse(raw: any): cosmjsResponses.AbciInfoResponse {
  return {
    data: raw.data,
    lastBlockHeight: raw.lastBlockHeight ? parseInt(raw.lastBlockHeight) : undefined,
    lastBlockAppHash: raw.lastBlockAppHash ? base64ToUint8Array(raw.lastBlockAppHash) : undefined
  };
}

// Transform health response
export function transformHealthResponse(_raw: any): cosmjsResponses.HealthResponse {
  return null;
}

// Transform net info response
export function transformNetInfoResponse(raw: any): cosmjsResponses.NetInfoResponse {
  return {
    listening: raw.listening || false,
    listeners: raw.listeners || [],
    nPeers: parseInt(raw.nPeers || '0'),
    peers: (raw.peers || []).map(transformPeer)
  };
}

// Transform peer
function transformPeer(raw: any): cosmjsResponses.Peer {
  return {
    nodeInfo: {
      protocolVersion: {
        p2p: raw.nodeInfo?.protocolVersion?.p2p || '',
        block: raw.nodeInfo?.protocolVersion?.block || '',
        app: raw.nodeInfo?.protocolVersion?.app || ''
      },
      id: raw.nodeInfo?.id || '',
      listenAddr: raw.nodeInfo?.listenAddr || '',
      network: raw.nodeInfo?.network || '',
      version: raw.nodeInfo?.version || '',
      channels: raw.nodeInfo?.channels || '',
      moniker: raw.nodeInfo?.moniker || '',
      other: {
        txIndex: raw.nodeInfo?.other?.txIndex || '',
        rpcAddress: raw.nodeInfo?.other?.rpcAddress || ''
      }
    },
    isOutbound: raw.isOutbound || false,
    connectionStatus: {
      duration: parseInt(raw.connectionStatus?.Duration || '0'),
      sendMonitor: transformMonitor(raw.connectionStatus?.SendMonitor),
      recvMonitor: transformMonitor(raw.connectionStatus?.RecvMonitor),
      channels: (raw.connectionStatus?.Channels || []).map((ch: any) => ({
        id: parseInt(ch.ID || '0'),
        sendQueueCapacity: parseInt(ch.SendQueueCapacity || '0'),
        sendQueueSize: parseInt(ch.SendQueueSize || '0'),
        priority: parseInt(ch.Priority || '0'),
        recentlySent: parseInt(ch.RecentlySent || '0')
      }))
    },
    remoteIp: raw.remoteIp || ''
  };
}

// Transform monitor
function transformMonitor(raw: any): any {
  return {
    active: raw?.Active || false,
    start: parseDate(raw?.Start || new Date().toISOString()),
    duration: parseInt(raw?.Duration || '0'),
    idle: parseInt(raw?.Idle || '0'),
    bytes: parseInt(raw?.Bytes || '0'),
    samples: parseInt(raw?.Samples || '0'),
    instRate: parseInt(raw?.InstRate || '0'),
    curRate: parseInt(raw?.CurRate || '0'),
    avgRate: parseInt(raw?.AvgRate || '0'),
    peakRate: parseInt(raw?.PeakRate || '0'),
    bytesRem: parseInt(raw?.BytesRem || '0'),
    timeRem: parseInt(raw?.TimeRem || '0'),
    progress: parseInt(raw?.Progress || '0')
  };
}

// Transform block response
export function transformBlockResponse(raw: any): cosmjsResponses.BlockResponse {
  return {
    blockId: transformBlockId(raw.blockId || raw.block_id || {}),
    block: transformBlock(raw.block || raw)
  };
}

// Transform block ID
function transformBlockId(raw: any): cosmjsResponses.BlockId {
  return {
    hash: hexToUint8Array(raw.hash || ''),
    parts: {
      total: parseInt(raw.parts?.total || '0'),
      hash: hexToUint8Array(raw.parts?.hash || '')
    }
  };
}

// Transform block
function transformBlock(raw: any): cosmjsResponses.Block {
  return {
    header: transformBlockHeader(raw.header || {}),
    data: {
      txs: (raw.data?.txs || []).map((tx: string) => base64ToUint8Array(tx))
    },
    evidence: {
      evidence: raw.evidence?.evidence || []
    },
    lastCommit: raw.lastCommit ? transformCommit(raw.lastCommit) : null
  };
}

// Transform block header
function transformBlockHeader(raw: any): cosmjsResponses.BlockHeader {
  return {
    version: {
      block: raw.version?.block || '',
      app: raw.version?.app
    },
    chainId: raw.chainId || '',
    height: parseInt(raw.height || '0'),
    time: parseDate(raw.time || new Date().toISOString()),
    lastBlockId: transformBlockId(raw.lastBlockId || {}),
    lastCommitHash: hexToUint8Array(raw.lastCommitHash || ''),
    dataHash: hexToUint8Array(raw.dataHash || ''),
    validatorsHash: hexToUint8Array(raw.validatorsHash || ''),
    nextValidatorsHash: hexToUint8Array(raw.nextValidatorsHash || ''),
    consensusHash: hexToUint8Array(raw.consensusHash || ''),
    appHash: hexToUint8Array(raw.appHash || ''),
    lastResultsHash: hexToUint8Array(raw.lastResultsHash || ''),
    evidenceHash: hexToUint8Array(raw.evidenceHash || ''),
    proposerAddress: hexToUint8Array(raw.proposerAddress || '')
  };
}

// Transform commit
function transformCommit(raw: any): cosmjsResponses.Commit {
  return {
    height: parseInt(raw.height || '0'),
    round: parseInt(raw.round || '0'),
    blockId: transformBlockId(raw.blockId || {}),
    signatures: (raw.signatures || []).map(transformCommitSignature)
  };
}

// Transform commit signature
function transformCommitSignature(raw: any): cosmjsResponses.CommitSignature {
  return {
    blockIdFlag: parseInt(raw.blockIdFlag || '0') as cosmjsResponses.BlockIdFlag,
    validatorAddress: hexToUint8Array(raw.validatorAddress || ''),
    timestamp: parseDate(raw.timestamp || new Date().toISOString()),
    signature: base64ToUint8Array(raw.signature || '')
  };
}

// Transform block results response
export function transformBlockResultsResponse(raw: any): cosmjsResponses.BlockResultsResponse {
  return {
    height: parseInt(raw.height || '0'),
    txsResults: raw.txsResults?.map(transformTxData),
    beginBlockEvents: raw.beginBlockEvents?.map(transformEvent),
    endBlockEvents: raw.endBlockEvents?.map(transformEvent),
    validatorUpdates: raw.validatorUpdates?.map(transformValidatorUpdate),
    consensusParamUpdates: raw.consensusParamUpdates ? transformConsensusParams(raw.consensusParamUpdates) : undefined,
    finalizeBlockEvents: raw.finalizeBlockEvents?.map(transformEvent)
  };
}

// Transform event
function transformEvent(raw: any): cosmjsResponses.Event {
  return {
    type: raw.type || '',
    attributes: (raw.attributes || []).map((attr: any) => ({
      key: attr.key || '',
      value: attr.value || '',
      index: attr.index
    }))
  };
}

// Transform tx data
function transformTxData(raw: any): cosmjsResponses.TxData {
  return {
    code: parseInt(raw.code || '0'),
    data: raw.data ? base64ToUint8Array(raw.data) : undefined,
    log: raw.log,
    info: raw.info,
    gasWanted: raw.gasWanted ? BigInt(raw.gasWanted) : undefined,
    gasUsed: raw.gasUsed ? BigInt(raw.gasUsed) : undefined,
    events: (raw.events || []).map(transformEvent),
    codespace: raw.codespace
  };
}

// Transform validator update
function transformValidatorUpdate(raw: any): cosmjsResponses.ValidatorUpdate {
  return {
    pubKey: {
      type: raw.pubKey?.type || '',
      value: base64ToUint8Array(raw.pubKey?.value || '')
    },
    power: BigInt(raw.power || '0')
  };
}

// Transform consensus params
function transformConsensusParams(raw: any): cosmjsResponses.ConsensusParams {
  return {
    block: {
      maxBytes: BigInt(raw.block?.maxBytes || '0'),
      maxGas: BigInt(raw.block?.maxGas || '0'),
      timeIotaMs: raw.block?.timeIotaMs ? BigInt(raw.block.timeIotaMs) : undefined
    },
    evidence: {
      maxAgeNumBlocks: BigInt(raw.evidence?.maxAgeNumBlocks || '0'),
      maxAgeDuration: BigInt(raw.evidence?.maxAgeDuration || '0'),
      maxBytes: raw.evidence?.maxBytes ? BigInt(raw.evidence.maxBytes) : undefined
    },
    validator: {
      pubKeyTypes: raw.validator?.pubKeyTypes || []
    },
    version: raw.version ? {
      appVersion: raw.version.appVersion ? BigInt(raw.version.appVersion) : undefined
    } : undefined
  };
}

// Transform blockchain response
export function transformBlockchainResponse(raw: any): cosmjsResponses.BlockchainResponse {
  return {
    lastHeight: parseInt(raw.lastHeight || '0'),
    blockMetas: (raw.blockMetas || []).map(transformBlockMeta)
  };
}

// Transform block meta
function transformBlockMeta(raw: any): cosmjsResponses.BlockMeta {
  return {
    blockId: transformBlockId(raw.blockId || {}),
    blockSize: parseInt(raw.blockSize || '0'),
    header: transformBlockHeader(raw.header || {}),
    numTxs: parseInt(raw.numTxs || '0')
  };
}

// Transform header response
export function transformHeaderResponse(raw: any): cosmjsResponses.HeaderResponse {
  return {
    header: transformBlockHeader(raw.header || raw)
  };
}

// Transform commit response
export function transformCommitResponse(raw: any): cosmjsResponses.CommitResponse {
  return {
    header: transformBlockHeader(raw.signedHeader?.header || raw.header || {}),
    commit: transformCommit(raw.signedHeader?.commit || raw.commit || {}),
    canonical: raw.canonical || false
  };
}

// Transform block search response
export function transformBlockSearchResponse(raw: any): cosmjsResponses.BlockSearchResponse {
  return {
    blocks: (raw.blocks || []).map(transformBlockResponse),
    totalCount: parseInt(raw.totalCount || '0')
  };
}

// Transform unconfirmed txs response
export function transformUnconfirmedTxsResponse(raw: any): cosmjsResponses.UnconfirmedTxsResponse {
  return {
    count: parseInt(raw.nTxs || raw.count || '0'),
    total: parseInt(raw.total || '0'),
    totalBytes: parseInt(raw.totalBytes || '0'),
    txs: (raw.txs || []).map((tx: string) => base64ToUint8Array(tx))
  };
}

// Transform num unconfirmed txs response
export function transformNumUnconfirmedTxsResponse(raw: any): cosmjsResponses.NumUnconfirmedTxsResponse {
  return {
    total: parseInt(raw.nTxs || raw.total || '0'),
    totalBytes: parseInt(raw.totalBytes || '0')
  };
}

// Transform tx search response
export function transformTxSearchResponse(raw: any): cosmjsResponses.TxSearchResponse {
  return {
    txs: (raw.txs || []).map(transformTxResponse),
    totalCount: parseInt(raw.totalCount || '0')
  };
}

// Transform tx response
function transformTxResponse(raw: any): cosmjsResponses.TxResponse {
  return {
    tx: base64ToUint8Array(raw.tx || ''),
    hash: hexToUint8Array(raw.hash || ''),
    height: parseInt(raw.height || '0'),
    index: parseInt(raw.index || '0'),
    result: transformTxData(raw.txResult || raw.result || {}),
    proof: raw.proof ? transformTxProof(raw.proof) : undefined
  };
}

// Transform tx proof
function transformTxProof(raw: any): cosmjsResponses.TxProof {
  return {
    rootHash: hexToUint8Array(raw.rootHash || ''),
    data: base64ToUint8Array(raw.data || ''),
    proof: transformQueryProof(raw.proof || {})
  };
}

// Transform query proof
function transformQueryProof(raw: any): cosmjsResponses.QueryProof {
  return {
    ops: (raw.ops || []).map((op: any) => ({
      type: op.type || '',
      key: base64ToUint8Array(op.key || ''),
      data: base64ToUint8Array(op.data || '')
    }))
  };
}

// Transform validators response
export function transformValidatorsResponse(raw: any): cosmjsResponses.ValidatorsResponse {
  return {
    blockHeight: parseInt(raw.blockHeight || '0'),
    validators: (raw.validators || []).map(transformValidator),
    count: parseInt(raw.count || '0'),
    total: parseInt(raw.total || '0')
  };
}

// Transform consensus params response
export function transformConsensusParamsResponse(raw: any): cosmjsResponses.ConsensusParamsResponse {
  return {
    blockHeight: parseInt(raw.blockHeight || '0'),
    consensusParams: transformConsensusParams(raw.consensusParams || {})
  };
}

// Transform genesis response
export function transformGenesisResponse(raw: any): cosmjsResponses.GenesisResponse {
  return {
    genesisTime: parseDate(raw.genesisTime || new Date().toISOString()),
    chainId: raw.chainId || '',
    initialHeight: raw.initialHeight ? parseInt(raw.initialHeight) : undefined,
    consensusParams: transformConsensusParams(raw.consensusParams || {}),
    validators: (raw.validators || []).map(transformValidator),
    appHash: base64ToUint8Array(raw.appHash || ''),
    appState: raw.appState
  };
}

// Transform ABCI query response
export function transformAbciQueryResponse(raw: any): cosmjsResponses.AbciQueryResponse {
  return {
    key: base64ToUint8Array(raw.key || ''),
    value: base64ToUint8Array(raw.value || ''),
    proof: raw.proof ? transformQueryProof(raw.proof) : undefined,
    height: raw.height ? parseInt(raw.height) : undefined,
    index: raw.index ? parseInt(raw.index) : undefined,
    code: raw.code ? parseInt(raw.code) : undefined,
    codespace: raw.codespace || '',
    log: raw.log,
    info: raw.info || ''
  };
}