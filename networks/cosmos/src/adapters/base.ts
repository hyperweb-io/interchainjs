import { fromBase64, fromHex } from '@interchainjs/encoding';
import { RpcMethod, ProtocolVersion, ProtocolInfo, ProtocolCapabilities } from '../types/protocol';
import {
  AbciInfoResponse,
  AbciQueryResponse
} from '../types/responses';
import { createAbciInfoResponse } from '../types/responses/common/abci/abci-info-response';
import { createAbciQueryResponse } from '../types/responses/common/abci/abci-query-response';
import {
  CommitResponse,
  createCommitResponse
} from '../types/responses/common/commit';
import {
  HealthResponse,
  createHealthResponse
} from '../types/responses/common/health';
import {
  NumUnconfirmedTxsResponse,
  createNumUnconfirmedTxsResponse
} from '../types/responses/common/num-unconfirmed-txs';
import {
  StatusResponse,
  createStatusResponse
} from '../types/responses/common/status';
import {
  NetInfoResponse,
  createNetInfoResponse
} from '../types/responses/common/net-info';
import {
  GenesisChunkedResponse,
  createGenesisChunkedResponse
} from '../types/responses/common/genesis-chunked';
import {
  HeaderResponse,
  createHeaderResponse
} from '../types/responses/common/header';
import {
  ConsensusParamsResponse,
  createConsensusParamsResponse
} from '../types/responses/common/consensus-params';
import {
  ValidatorsResponse,
  createValidatorsResponse
} from '../types/responses/common/validators';
import {
  BlockResponse,
  createBlockResponse,
  BlockchainResponse,
  createBlockchainResponse,
  BlockResultsResponse,
  createBlockResultsResponse
} from '../types/responses/common/block';
import {
  AbciQueryParams,
  EncodedAbciQueryParams,
  encodeAbciQueryParams
} from '../types/requests/common/abci';
import {
  CommitParams,
  EncodedCommitParams,
  encodeCommitParams
} from '../types/requests/common/commit';
import {
  GenesisChunkedParams,
  EncodedGenesisChunkedParams,
  encodeGenesisChunkedParams
} from '../types/requests/common/genesis-chunked';
import {
  BlockParams,
  EncodedBlockParams,
  encodeBlockParams,
  BlockByHashParams,
  EncodedBlockByHashParams,
  encodeBlockByHashParams,
  BlockResultsParams,
  EncodedBlockResultsParams,
  encodeBlockResultsParams
} from '../types/requests/common/block';
import {
  BlockchainParams,
  EncodedBlockchainParams,
  encodeBlockchainParams
} from '../types/requests/common/blockchain';
import {
  TxResponse,
  createTxResponse
} from '../types/responses/common/tx';
import {
  TxSearchResponse,
  createTxSearchResponse
} from '../types/responses/common/tx-search';
import {
  BlockSearchResponse,
  createBlockSearchResponse
} from '../types/responses/common/block-search';
import {
  BroadcastTxSyncResponse,
  createBroadcastTxSyncResponse
} from '../types/responses/common/broadcast-tx-sync';
import {
  BroadcastTxAsyncResponse,
  createBroadcastTxAsyncResponse
} from '../types/responses/common/broadcast-tx-async';
import {
  BroadcastTxCommitResponse,
  createBroadcastTxCommitResponse
} from '../types/responses/common/broadcast-tx-commit';
import {
  CheckTxResponse,
  createCheckTxResponse
} from '../types/responses/common/check-tx';

// Type definitions for removed imports


type ConsensusStateParams = any;
type EncodedConsensusStateParams = any;
type ConsensusStateResponse = any;
type DumpConsensusStateParams = any;
type EncodedDumpConsensusStateParams = any;
type DumpConsensusStateResponse = any;
type GenesisParams = any;
type EncodedGenesisParams = any;
type GenesisResponse = any;
type HeaderParams = any;
type EncodedHeaderParams = any;
type HeaderByHashParams = any;
type EncodedHeaderByHashParams = any;
type UnconfirmedTxsParams = any;
type EncodedUnconfirmedTxsParams = any;
type UnconfirmedTxsResponse = any;
type ValidatorsParams = any;
type EncodedValidatorsParams = any;
type TxParams = any;
type EncodedTxParams = any;
type TxSearchParams = any;
type EncodedTxSearchParams = any;
type BlockSearchParams = any;
type EncodedBlockSearchParams = any;
type BroadcastTxSyncParams = any;
type EncodedBroadcastTxSyncParams = any;
type BroadcastTxAsyncParams = any;
type EncodedBroadcastTxAsyncParams = any;
type BroadcastTxCommitParams = any;
type EncodedBroadcastTxCommitParams = any;
type CheckTxParams = any;
type EncodedCheckTxParams = any;

// Dummy encoder functions
// Placeholder functions are removed - using proper imports now


const encodeConsensusStateParams = (params: any): any => params;
const encodeDumpConsensusStateParams = (params: any): any => params;
const encodeGenesisParams = (params: any): any => params;
const encodeHeaderParams = (params: any): any => params;
const encodeHeaderByHashParams = (params: any): any => params;
const encodeUnconfirmedTxsParams = (params: any): any => params;
const encodeValidatorsParams = (params: any): any => params;
const encodeTxParams = (params: any): any => params;
const encodeTxSearchParams = (params: any): any => params;
const encodeBlockSearchParams = (params: any): any => params;
const encodeBroadcastTxSyncParams = (params: any): any => params;
const encodeBroadcastTxAsyncParams = (params: any): any => params;
const encodeBroadcastTxCommitParams = (params: any): any => params;
const encodeCheckTxParams = (params: any): any => params;
const createUnconfirmedTxsResponse = (data: any): any => data;

export interface RequestEncoder {
  encodeAbciQuery(params: AbciQueryParams): EncodedAbciQueryParams;
  encodeCommit(params: CommitParams): EncodedCommitParams;
  encodeBlock(params: BlockParams): EncodedBlockParams;
  encodeBlockByHash(params: BlockByHashParams): EncodedBlockByHashParams;
  encodeBlockResults(params: BlockResultsParams): EncodedBlockResultsParams;
  encodeBlockchain(params: BlockchainParams): any;
  encodeConsensusState(params: ConsensusStateParams): EncodedConsensusStateParams;
  encodeDumpConsensusState(params: DumpConsensusStateParams): EncodedDumpConsensusStateParams;
  encodeGenesis(params: GenesisParams): EncodedGenesisParams;
  encodeGenesisChunked(params: GenesisChunkedParams): EncodedGenesisChunkedParams;
  encodeHeader(params: HeaderParams): EncodedHeaderParams;
  encodeHeaderByHash(params: HeaderByHashParams): EncodedHeaderByHashParams;
  encodeUnconfirmedTxs(params: UnconfirmedTxsParams): EncodedUnconfirmedTxsParams;
  encodeValidators(params: ValidatorsParams): EncodedValidatorsParams;
  encodeTx(params: TxParams): EncodedTxParams;
  encodeTxSearch(params: TxSearchParams): EncodedTxSearchParams;
  encodeBlockSearch(params: BlockSearchParams): EncodedBlockSearchParams;
  encodeBroadcastTxSync(params: BroadcastTxSyncParams): EncodedBroadcastTxSyncParams;
  encodeBroadcastTxAsync(params: BroadcastTxAsyncParams): EncodedBroadcastTxAsyncParams;
  encodeBroadcastTxCommit(params: BroadcastTxCommitParams): EncodedBroadcastTxCommitParams;
  encodeCheckTx(params: CheckTxParams): EncodedCheckTxParams;
}

export interface ResponseDecoder {
  decodeAbciInfo<T extends AbciInfoResponse = AbciInfoResponse>(response: unknown): T;
  decodeAbciQuery<T extends AbciQueryResponse = AbciQueryResponse>(response: unknown): T;
  decodeBlock<T extends BlockResponse = BlockResponse>(response: unknown): T;
  decodeBlockResults<T extends BlockResultsResponse = BlockResultsResponse>(response: unknown): T;
  decodeBlockSearch(response: any): BlockSearchResponse;
  decodeBlockchain<T extends BlockchainResponse = BlockchainResponse>(response: unknown): T;
  decodeBroadcastTx(response: any): any;
  decodeBroadcastTxSync?(response: any): BroadcastTxSyncResponse;
  decodeBroadcastTxAsync?(response: any): BroadcastTxAsyncResponse;
  decodeBroadcastTxCommit?(response: any): BroadcastTxCommitResponse;
  decodeCommit<T extends CommitResponse = CommitResponse>(response: unknown): T;
  decodeConsensusParams(response: any): any;
  decodeConsensusState(response: any): ConsensusStateResponse;
  decodeDumpConsensusState(response: any): DumpConsensusStateResponse;
  decodeGenesis(response: any): GenesisResponse;
  decodeGenesisChunked<T extends GenesisChunkedResponse = GenesisChunkedResponse>(response: unknown): T;
  decodeHeader(response: any): HeaderResponse;
  decodeHealth<T extends HealthResponse = HealthResponse>(response: unknown): T;
  decodeNetInfo<T extends NetInfoResponse = NetInfoResponse>(response: unknown): T;
  decodeNumUnconfirmedTxs<T extends NumUnconfirmedTxsResponse = NumUnconfirmedTxsResponse>(response: unknown): T;
  decodeStatus<T extends StatusResponse = StatusResponse>(response: unknown): T;
  decodeTx(response: any): TxResponse;
  decodeTxSearch(response: any): TxSearchResponse;
  decodeUnconfirmedTxs(response: any): UnconfirmedTxsResponse;
  decodeValidators(response: any): any;
  decodeCheckTx?(response: any): CheckTxResponse;
}

export interface IProtocolAdapter {
  getVersion(): ProtocolVersion;
  getSupportedMethods(): Set<RpcMethod>;
  getCapabilities(): ProtocolCapabilities;
  encodeParams(method: RpcMethod, params: any): any;
  decodeResponse(method: RpcMethod, response: any): any;
  encodeBytes(data: string): Uint8Array;
  decodeBytes(data: Uint8Array): string;
}

export interface ICosmosProtocolAdapter extends IProtocolAdapter, RequestEncoder, ResponseDecoder {}

export abstract class BaseAdapter implements RequestEncoder, ResponseDecoder, ICosmosProtocolAdapter {
  constructor(protected version: ProtocolVersion) {}

  // Recursive snake_case to camelCase transformation
  protected toCamelCase(str: string): string {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  }

  protected transformKeys(obj: any): any {
    if (obj === null || obj === undefined) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.transformKeys(item));
    }

    if (typeof obj === 'object') {
      const transformed: any = {};
      for (const [key, value] of Object.entries(obj)) {
        const camelKey = this.toCamelCase(key);
        transformed[camelKey] = this.transformKeys(value);
      }
      return transformed;
    }

    return obj;
  }

  protected apiToNumber(value: string | undefined | null): number {
    if (!value) return 0;
    const num = parseInt(value, 10);
    if (Number.isNaN(num)) return 0;
    return num;
  }

  protected apiToBigInt(value: string | undefined | null): bigint {
    if (!value) return BigInt(0);
    return BigInt(value);
  }

  protected maybeFromBase64(value: string | undefined | null): Uint8Array | undefined {
    if (!value) return undefined;
    return this.safeFromBase64(value);
  }

  protected safeFromBase64(value: string): Uint8Array {
    if (!value) return new Uint8Array(0);

    // Fix base64 padding if needed
    let paddedValue = value;
    const remainder = value.length % 4;
    if (remainder > 0) {
      paddedValue = value + '='.repeat(4 - remainder);
    }

    try {
      return fromBase64(paddedValue);
    } catch (error) {
      // If base64 decoding fails, return empty array
      console.warn(`Failed to decode base64 value: ${value}`, error);
      return new Uint8Array(0);
    }
  }

  protected maybeFromHex(value: string | undefined | null): Uint8Array | undefined {
    if (!value) return undefined;
    return fromHex(value);
  }

  protected decodeTime(timestamp: string): Date {
    return new Date(timestamp);
  }

  protected decodeEvent(event: any): any {
    return {
      type: event.type || '',
      attributes: (event.attributes || []).map((attr: any) => ({
        key: this.decodeEventAttribute(attr.key || ''),
        value: this.decodeEventAttribute(attr.value || ''),
        index: attr.index || false
      }))
    };
  }

  protected decodeEventAttribute(value: string): Uint8Array {
    if (!value) return new Uint8Array(0);

    // Check if the value looks like base64 and has proper length
    const isBase64Like = /^[A-Za-z0-9+/]*={0,2}$/.test(value) && value.length % 4 === 0;

    if (isBase64Like) {
      try {
        // Try to decode as base64 first
        const decoded = this.safeFromBase64(value);
        // If it decodes successfully and produces readable text, use it
        const text = new TextDecoder().decode(decoded);
        // If the decoded text contains mostly printable characters, it's likely base64
        if (text.length > 0 && /^[\x20-\x7E\s]*$/.test(text)) {
          return decoded;
        }
      } catch (e) {
        // Fall through to treat as plain text
      }
    }

    // Treat as plain text string
    return new TextEncoder().encode(value);
  }

  protected decodeEvents(events: any[]): any[] {
    return (events || []).map(e => this.decodeEvent(e));
  }

  // IProtocolAdapter implementation
  getVersion(): ProtocolVersion {
    return this.version;
  }

  encodeParams(method: RpcMethod, params: any): any {
    // Convert camelCase to snake_case for Tendermint/CometBFT
    if (!params) return {};

    // Special handling for ABCI query using codec
    if (method === RpcMethod.ABCI_QUERY) {
      const encoded = this.encodeAbciQuery(params as AbciQueryParams);
      // Convert to snake_case for RPC
      return {
        path: encoded.path,
        data: encoded.data,
        height: encoded.height,
        prove: encoded.prove
      };
    }

    // Special handling for commit using codec
    if (method === RpcMethod.COMMIT) {
      const encoded = this.encodeCommit(params as CommitParams);
      return encoded;
    }

    // Special handling for block_results using codec
    if (method === RpcMethod.BLOCK_RESULTS) {
      const encoded = this.encodeBlockResults(params as BlockResultsParams);
      return encoded;
    }



    // Convert height to string for block-related methods
    if ((method === RpcMethod.BLOCK || method === RpcMethod.HEADER) &&
        params.height !== undefined && typeof params.height === "number") {
      params = { ...params, height: params.height.toString() };
    }

    // Convert height to string for validator and consensus methods
    if ((method === RpcMethod.VALIDATORS || method === RpcMethod.CONSENSUS_PARAMS) &&
        params.height !== undefined && typeof params.height === "number") {
      params = { ...params, height: params.height.toString() };
    }

    // Special handling for consensus_state using codec
    if (method === RpcMethod.CONSENSUS_STATE) {
      const encoded = this.encodeConsensusState(params as ConsensusStateParams);
      return encoded;
    }

    // Special handling for dump_consensus_state using codec
    if (method === RpcMethod.DUMP_CONSENSUS_STATE) {
      const encoded = this.encodeDumpConsensusState(params as DumpConsensusStateParams);
      return encoded;
    }

    // Special handling for genesis using codec
    if (method === RpcMethod.GENESIS) {
      const encoded = this.encodeGenesis(params as GenesisParams);
      return encoded;
    }

    // Special handling for genesis_chunked using codec
    if (method === RpcMethod.GENESIS_CHUNKED) {
      const encoded = this.encodeGenesisChunked(params as GenesisChunkedParams);
      return encoded;
    }

    // Special handling for header_by_hash using codec
    if (method === RpcMethod.HEADER_BY_HASH) {
      const encoded = this.encodeHeaderByHash(params as HeaderByHashParams);
      return encoded;
    }

    // Special handling for unconfirmed_txs using codec
    if (method === RpcMethod.UNCONFIRMED_TXS) {
      const encoded = this.encodeUnconfirmedTxs(params as UnconfirmedTxsParams);
      return encoded;
    }

    // Special handling for validators using codec
    if (method === RpcMethod.VALIDATORS) {
      const encoded = this.encodeValidators(params as ValidatorsParams);
      return encoded;
    }

    // Special handling for tx using codec
    if (method === RpcMethod.TX) {
      const encoded = this.encodeTx(params as TxParams);
      return encoded;
    }

    // Special handling for tx_search using codec
    if (method === RpcMethod.TX_SEARCH) {
      const encoded = this.encodeTxSearch(params as TxSearchParams);
      return encoded;
    }

    // Special handling for block_search using codec
    if (method === RpcMethod.BLOCK_SEARCH) {
      const encoded = this.encodeBlockSearch(params as BlockSearchParams);
      return encoded;
    }

    // Special handling for broadcast_tx_sync using codec
    if (method === RpcMethod.BROADCAST_TX_SYNC) {
      const encoded = this.encodeBroadcastTxSync(params as BroadcastTxSyncParams);
      return encoded;
    }

    // Special handling for broadcast_tx_async using codec
    if (method === RpcMethod.BROADCAST_TX_ASYNC) {
      const encoded = this.encodeBroadcastTxAsync(params as BroadcastTxAsyncParams);
      return encoded;
    }

    // Special handling for broadcast_tx_commit using codec
    if (method === RpcMethod.BROADCAST_TX_COMMIT) {
      const encoded = this.encodeBroadcastTxCommit(params as BroadcastTxCommitParams);
      return encoded;
    }

    // Special handling for check_tx using codec
    if (method === RpcMethod.CHECK_TX) {
      const encoded = this.encodeCheckTx(params as CheckTxParams);
      return encoded;
    }

    const encoded: any = {};
    for (const [key, value] of Object.entries(params)) {
      const snakeKey = this.camelToSnake(key);

      // Handle hash parameters with 0x prefix
      if (key === 'hash' && typeof value === 'string' && value.startsWith('0x')) {
        // Convert hex to base64 for RPC
        const hexString = value.slice(2); // Remove 0x prefix
        const bytes = Buffer.from(hexString, 'hex');
        encoded[snakeKey] = bytes.toString('base64');
      }
      // Handle Uint8Array data (especially for ABCI queries and broadcast)
      else if (value instanceof Uint8Array) {
        // For tx field in broadcast methods, encode as base64
        if (key === 'tx') {
          encoded[snakeKey] = Buffer.from(value).toString('base64');
        } else {
          // Convert Uint8Array to hex string for RPC
          encoded[snakeKey] = this.decodeBytes(value);
        }
      }
      else {
        encoded[snakeKey] = value;
      }
    }
    return encoded;
  }

  decodeResponse(method: RpcMethod, response: any): any {
    // Use the version-specific decoder
    switch (method) {
      case RpcMethod.ABCI_INFO:
        return this.decodeAbciInfo(response);
      case RpcMethod.ABCI_QUERY:
        return this.decodeAbciQuery(response);
      case RpcMethod.BLOCK_SEARCH:
        return this.decodeBlockSearch(response);
      case RpcMethod.BLOCK_RESULTS:
        return this.decodeBlockResults(response);
      case RpcMethod.TX:
        return this.decodeTx(response);
      case RpcMethod.TX_SEARCH:
        return this.decodeTxSearch(response);
      case RpcMethod.VALIDATORS:
        return this.decodeValidators(response);
      case RpcMethod.CONSENSUS_PARAMS:
        return this.decodeConsensusParams(response);
      case RpcMethod.CONSENSUS_STATE:
        return this.decodeConsensusState(response);
      case RpcMethod.DUMP_CONSENSUS_STATE:
        return this.decodeDumpConsensusState(response);
      case RpcMethod.HEADER:
      case RpcMethod.HEADER_BY_HASH:
        return this.decodeHeader(response);
      case RpcMethod.STATUS:
        return this.decodeStatus(response);
      case RpcMethod.NET_INFO:
        return this.decodeNetInfo(response);
      case RpcMethod.GENESIS:
        return this.decodeGenesis(response);
      case RpcMethod.GENESIS_CHUNKED:
        return this.decodeGenesisChunked(response);
      case RpcMethod.HEALTH:
        return this.decodeHealth(response);
      case RpcMethod.UNCONFIRMED_TXS:
        return this.decodeUnconfirmedTxs(response);
      case RpcMethod.NUM_UNCONFIRMED_TXS:
        return this.decodeNumUnconfirmedTxs(response);
      case RpcMethod.COMMIT:
        return this.decodeCommit(response);
      case RpcMethod.CHECK_TX:
        return this.decodeCheckTx(response);
      case RpcMethod.BROADCAST_TX_SYNC:
        return this.decodeBroadcastTxSync(response);
      case RpcMethod.BROADCAST_TX_ASYNC:
        return this.decodeBroadcastTxAsync(response);
      case RpcMethod.BROADCAST_TX_COMMIT:
        return this.decodeBroadcastTxCommit(response);
      default:
        // For unsupported methods, return raw response
        return response;
    }
  }

  encodeBytes(data: string): Uint8Array {
    // Handle hex strings and base64
    if (data.startsWith('0x')) {
      const hex = data.slice(2);
      const bytes = new Uint8Array(hex.length / 2);
      for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
      }
      return bytes;
    }

    // Assume base64
    const binary = atob(data);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  decodeBytes(data: Uint8Array): string {
    // Convert to hex string
    return Array.from(data)
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase();
  }

  getSupportedMethods(): Set<RpcMethod> {
    return new Set([
      // Basic info
      RpcMethod.STATUS,
      RpcMethod.ABCI_INFO,
      RpcMethod.HEALTH,
      RpcMethod.NET_INFO,

      // Block queries
      RpcMethod.BLOCK,
      RpcMethod.BLOCK_BY_HASH,
      RpcMethod.BLOCK_RESULTS,
      RpcMethod.BLOCK_SEARCH,
      RpcMethod.BLOCKCHAIN,
      RpcMethod.HEADER,
      RpcMethod.HEADER_BY_HASH,
      RpcMethod.COMMIT,

      // Transaction queries
      RpcMethod.TX,
      RpcMethod.TX_SEARCH,
      RpcMethod.CHECK_TX,
      RpcMethod.UNCONFIRMED_TXS,
      RpcMethod.NUM_UNCONFIRMED_TXS,

      // Chain queries
      RpcMethod.VALIDATORS,
      RpcMethod.CONSENSUS_PARAMS,
      RpcMethod.CONSENSUS_STATE,
      RpcMethod.DUMP_CONSENSUS_STATE,
      RpcMethod.GENESIS,
      RpcMethod.GENESIS_CHUNKED,

      // ABCI queries
      RpcMethod.ABCI_QUERY,

      // Subscription
      RpcMethod.SUBSCRIBE,
      RpcMethod.UNSUBSCRIBE,
      RpcMethod.UNSUBSCRIBE_ALL
    ]);
  }

  getCapabilities(): ProtocolCapabilities {
    return {
      streaming: true,
      subscriptions: true,
      blockByHash: this.supportsBlockByHash(),
      headerQueries: this.supportsHeaderQueries(),
      consensusQueries: this.supportsConsensusQueries()
    };
  }

  private supportsBlockByHash(): boolean {
    return this.version === ProtocolVersion.COMET_38 || this.version === ProtocolVersion.COMET_100;
  }

  private supportsHeaderQueries(): boolean {
    return this.version === ProtocolVersion.COMET_38 || this.version === ProtocolVersion.COMET_100;
  }

  private supportsConsensusQueries(): boolean {
    return true; // All versions support basic consensus queries
  }

  private camelToSnake(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  }

  private snakeToCamel(str: string): string {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  }

  private convertKeysToCamelCase(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.convertKeysToCamelCase(item));
    }

    const converted: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const camelKey = this.snakeToCamel(key);
      converted[camelKey] = this.convertKeysToCamelCase(value);
    }
    return converted;
  }

  // Common decode methods that work across all versions
  decodeAbciInfo<T extends AbciInfoResponse = AbciInfoResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = (resp.response || resp) as Record<string, unknown>;
    return createAbciInfoResponse(data) as T;
  }

  decodeAbciQuery<T extends AbciQueryResponse = AbciQueryResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = (resp.response || resp) as Record<string, unknown>;
    return createAbciQueryResponse(data) as T;
  }

  encodeAbciQuery(params: AbciQueryParams): EncodedAbciQueryParams {
    return encodeAbciQueryParams(params);
  }

  encodeCommit(params: CommitParams): EncodedCommitParams {
    return encodeCommitParams(params);
  }

  encodeBlock(params: BlockParams): EncodedBlockParams {
    return encodeBlockParams(params);
  }

  encodeBlockByHash(params: BlockByHashParams): EncodedBlockByHashParams {
    return encodeBlockByHashParams(params);
  }

  encodeBlockResults(params: BlockResultsParams): EncodedBlockResultsParams {
    return encodeBlockResultsParams(params);
  }

  encodeBlockchain(params: BlockchainParams): any {
    const encoded = encodeBlockchainParams(params);
    // Convert to array format for RPC
    if (encoded.minHeight !== undefined && encoded.maxHeight !== undefined) {
      return [encoded.minHeight, encoded.maxHeight];
    }
    return {}; // Return empty object instead of empty array when no params
  }

  encodeConsensusState(params: ConsensusStateParams): EncodedConsensusStateParams {
    return encodeConsensusStateParams(params);
  }

  encodeDumpConsensusState(params: DumpConsensusStateParams): EncodedDumpConsensusStateParams {
    return encodeDumpConsensusStateParams(params);
  }

  encodeGenesis(params: GenesisParams): EncodedGenesisParams {
    return encodeGenesisParams(params);
  }

  encodeGenesisChunked(params: GenesisChunkedParams): EncodedGenesisChunkedParams {
    return encodeGenesisChunkedParams(params);
  }

  encodeHeader(params: HeaderParams): EncodedHeaderParams {
    return encodeHeaderParams(params);
  }

  encodeHeaderByHash(params: HeaderByHashParams): EncodedHeaderByHashParams {
    return encodeHeaderByHashParams(params);
  }

  encodeUnconfirmedTxs(params: UnconfirmedTxsParams): EncodedUnconfirmedTxsParams {
    return encodeUnconfirmedTxsParams(params);
  }

  encodeValidators(params: ValidatorsParams): EncodedValidatorsParams {
    return encodeValidatorsParams(params);
  }

  encodeTx(params: TxParams): EncodedTxParams {
    return encodeTxParams(params);
  }

  encodeTxSearch(params: TxSearchParams): EncodedTxSearchParams {
    return encodeTxSearchParams(params);
  }

  encodeBlockSearch(params: BlockSearchParams): EncodedBlockSearchParams {
    return encodeBlockSearchParams(params);
  }

  encodeBroadcastTxSync(params: BroadcastTxSyncParams): EncodedBroadcastTxSyncParams {
    return encodeBroadcastTxSyncParams(params);
  }

  encodeBroadcastTxAsync(params: BroadcastTxAsyncParams): EncodedBroadcastTxAsyncParams {
    return encodeBroadcastTxAsyncParams(params);
  }

  encodeBroadcastTxCommit(params: BroadcastTxCommitParams): EncodedBroadcastTxCommitParams {
    return encodeBroadcastTxCommitParams(params);
  }

  encodeCheckTx(params: CheckTxParams): EncodedCheckTxParams {
    return encodeCheckTxParams(params);
  }

  decodeBlock<T extends BlockResponse = BlockResponse>(response: unknown): T {
    return createBlockResponse(response) as T;
  }

  // Abstract methods that must be implemented by version-specific adapters
  decodeBlockResults<T extends BlockResultsResponse = BlockResultsResponse>(response: unknown): T {
    return createBlockResultsResponse(response) as T;
  }
  abstract decodeBlockSearch(response: any): BlockSearchResponse;
  decodeBlockchain<T extends BlockchainResponse = BlockchainResponse>(response: unknown): T {
    return createBlockchainResponse(response) as T;
  }
  abstract decodeBroadcastTx(response: any): any;
  decodeCommit<T extends CommitResponse = CommitResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = (resp.result || resp) as Record<string, unknown>;
    return createCommitResponse(data) as T;
  }
  decodeConsensusParams<T extends ConsensusParamsResponse = ConsensusParamsResponse>(response: unknown): T {
    const data = (response as any).result || response;
    return createConsensusParamsResponse(data) as T;
  }
  abstract decodeConsensusState(response: any): ConsensusStateResponse;
  abstract decodeDumpConsensusState(response: any): DumpConsensusStateResponse;
  abstract decodeGenesis(response: any): GenesisResponse;
  decodeGenesisChunked<T extends GenesisChunkedResponse = GenesisChunkedResponse>(response: unknown): T {
    const data = (response as any).result || response;
    return createGenesisChunkedResponse(data) as T;
  }
  decodeHeader<T extends HeaderResponse = HeaderResponse>(response: unknown): T {
    const data = (response as any).result || response;
    return createHeaderResponse(data) as T;
  }
  decodeHealth<T extends HealthResponse = HealthResponse>(response: unknown): T {
    // Health endpoint returns null when healthy, or throws error
    return createHealthResponse(response) as T;
  }
  decodeNetInfo<T extends NetInfoResponse = NetInfoResponse>(response: unknown): T {
    const responseData = response as { result?: unknown };
    const data = responseData.result || response;
    return createNetInfoResponse(data) as T;
  }
  decodeNumUnconfirmedTxs<T extends NumUnconfirmedTxsResponse = NumUnconfirmedTxsResponse>(response: unknown): T {
    const responseData = response as { result?: unknown };
    const data = responseData.result || response;
    return createNumUnconfirmedTxsResponse(data) as T;
  }
  decodeStatus<T extends StatusResponse = StatusResponse>(response: unknown): T {
    const responseData = response as { result?: unknown };
    const data = responseData.result || response;
    return createStatusResponse(data) as T;
  }
  abstract decodeTx(response: any): TxResponse;
  abstract decodeTxSearch(response: any): TxSearchResponse;
  abstract decodeUnconfirmedTxs(response: any): UnconfirmedTxsResponse;
  decodeBroadcastTxSync(response: any): BroadcastTxSyncResponse {
    const data = response.result || response;
    return createBroadcastTxSyncResponse(data);
  }
  decodeBroadcastTxAsync(response: any): BroadcastTxAsyncResponse {
    const data = response.result || response;
    return createBroadcastTxAsyncResponse(data);
  }
  decodeBroadcastTxCommit(response: any): BroadcastTxCommitResponse {
    const data = response.result || response;
    return createBroadcastTxCommitResponse(data);
  }
  abstract decodeCheckTx(response: any): CheckTxResponse;
  decodeValidators<T extends ValidatorsResponse = ValidatorsResponse>(response: unknown): T {
    const data = (response as any).result || response;
    return createValidatorsResponse(data) as T;
  }
}