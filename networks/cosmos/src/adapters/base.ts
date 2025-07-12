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
  GenesisResponse,
  createGenesisResponse
} from '../types/responses/common/genesis';
import {
  HeaderResponse,
  createHeaderResponse
} from '../types/responses/common/header';
import {
  ConsensusParamsResponse,
  createConsensusParamsResponse
} from '../types/responses/common/consensus-params';
import {
  ConsensusStateResponse,
  createConsensusStateResponse
} from '../types/responses/common/consensus-state';
import {
  ConsensusStateDumpResponse,
  createConsensusStateDumpResponse
} from '../types/responses/common/consensus';
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
  encodeBlockResultsParams,
  BlockSearchParams,
  EncodedBlockSearchParams,
  encodeBlockSearchParams,
  HeaderParams,
  EncodedHeaderParams,
  encodeHeaderParams,
  HeaderByHashParams,
  EncodedHeaderByHashParams,
  encodeHeaderByHashParams
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
  UnconfirmedTxsResponse,
  createUnconfirmedTxsResponse
} from '../types/responses/common/unconfirmed-txs';
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
} from '../types/responses/common/tx';
import {
  ValidatorsParams,
  EncodedValidatorsParams,
  encodeValidatorsParams
} from '../types/requests/common/validators';
import {
  ConsensusParamsParams,
  EncodedConsensusParamsParams,
  encodeConsensusParamsParams
} from '../types/requests/common/consensus';
import {
  ConsensusStateParams,
  EncodedConsensusStateParams,
  encodeConsensusStateParams
} from '../types/requests/common/consensus-state';
import {
  CheckTxParams,
  EncodedCheckTxParams,
  encodeCheckTxParams,
  TxParams,
  EncodedTxParams,
  encodeTxParams,
  TxSearchParams,
  EncodedTxSearchParams,
  encodeTxSearchParams,
  UnconfirmedTxsParams,
  EncodedUnconfirmedTxsParams,
  encodeUnconfirmedTxsParams
} from '../types/requests/common/tx';

// Import broadcast types from the common tx module
import { 
  BroadcastTxParams, 
  EncodedBroadcastTxParams,
  encodeBroadcastTxParams 
} from '../types/requests/common/tx';



export interface RequestEncoder {
  encodeAbciQuery(params: AbciQueryParams): EncodedAbciQueryParams;
  encodeCommit(params: CommitParams): EncodedCommitParams;
  encodeBlock(params: BlockParams): EncodedBlockParams;
  encodeBlockByHash(params: BlockByHashParams): EncodedBlockByHashParams;
  encodeBlockResults(params: BlockResultsParams): EncodedBlockResultsParams;
  encodeBlockchain(params: BlockchainParams): any;
  encodeConsensusParams(params: ConsensusParamsParams): EncodedConsensusParamsParams;
  encodeConsensusState(params: ConsensusStateParams): EncodedConsensusStateParams;
  encodeGenesisChunked(params: GenesisChunkedParams): EncodedGenesisChunkedParams;
  encodeHeader(params: HeaderParams): EncodedHeaderParams;
  encodeHeaderByHash(params: HeaderByHashParams): EncodedHeaderByHashParams;
  encodeUnconfirmedTxs(params: UnconfirmedTxsParams): EncodedUnconfirmedTxsParams;
  encodeValidators(params: ValidatorsParams): EncodedValidatorsParams;
  encodeTx(params: TxParams): EncodedTxParams;
  encodeTxSearch(params: TxSearchParams): EncodedTxSearchParams;
  encodeBlockSearch(params: BlockSearchParams): EncodedBlockSearchParams;
  encodeBroadcastTxSync(params: BroadcastTxParams): EncodedBroadcastTxParams;
  encodeBroadcastTxAsync(params: BroadcastTxParams): EncodedBroadcastTxParams;
  encodeBroadcastTxCommit(params: BroadcastTxParams): EncodedBroadcastTxParams;
  encodeCheckTx(params: CheckTxParams): EncodedCheckTxParams;
}

export interface ResponseDecoder {
  decodeAbciInfo<T extends AbciInfoResponse = AbciInfoResponse>(response: unknown): T;
  decodeAbciQuery<T extends AbciQueryResponse = AbciQueryResponse>(response: unknown): T;
  decodeBlock<T extends BlockResponse = BlockResponse>(response: unknown): T;
  decodeBlockResults<T extends BlockResultsResponse = BlockResultsResponse>(response: unknown): T;
  decodeBlockSearch<T extends BlockSearchResponse = BlockSearchResponse>(response: unknown): T;
  decodeBlockchain<T extends BlockchainResponse = BlockchainResponse>(response: unknown): T;
  decodeBroadcastTx(response: any): any;
  decodeBroadcastTxSync<T extends BroadcastTxSyncResponse = BroadcastTxSyncResponse>(response: unknown): T;
  decodeBroadcastTxAsync<T extends BroadcastTxAsyncResponse = BroadcastTxAsyncResponse>(response: unknown): T;
  decodeBroadcastTxCommit<T extends BroadcastTxCommitResponse = BroadcastTxCommitResponse>(response: unknown): T;
  decodeCommit<T extends CommitResponse = CommitResponse>(response: unknown): T;
  decodeConsensusParams<T extends ConsensusParamsResponse = ConsensusParamsResponse>(response: unknown): T;
  decodeConsensusState<T extends ConsensusStateResponse = ConsensusStateResponse>(response: unknown): T;
  decodeDumpConsensusState<T extends ConsensusStateDumpResponse = ConsensusStateDumpResponse>(response: unknown): T;
  decodeGenesis<T extends GenesisResponse = GenesisResponse>(response: unknown): T;
  decodeGenesisChunked<T extends GenesisChunkedResponse = GenesisChunkedResponse>(response: unknown): T;
  decodeHeader<T extends HeaderResponse = HeaderResponse>(response: unknown): T;
  decodeHealth<T extends HealthResponse = HealthResponse>(response: unknown): T;
  decodeNetInfo<T extends NetInfoResponse = NetInfoResponse>(response: unknown): T;
  decodeNumUnconfirmedTxs<T extends NumUnconfirmedTxsResponse = NumUnconfirmedTxsResponse>(response: unknown): T;
  decodeStatus<T extends StatusResponse = StatusResponse>(response: unknown): T;
  decodeTx<T extends TxResponse = TxResponse>(response: unknown): T;
  decodeTxSearch<T extends TxSearchResponse = TxSearchResponse>(response: unknown): T;
  decodeUnconfirmedTxs<T extends UnconfirmedTxsResponse = UnconfirmedTxsResponse>(response: unknown): T;
  decodeValidators<T extends ValidatorsResponse = ValidatorsResponse>(response: unknown): T;
  decodeCheckTx<T extends CheckTxResponse = CheckTxResponse>(response: unknown): T;
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
    if ((method === RpcMethod.BLOCK) &&
        params.height !== undefined && typeof params.height === "number") {
      params = { ...params, height: params.height.toString() };
    }

    // Convert height to string for validator and consensus methods
    if ((method === RpcMethod.VALIDATORS || method === RpcMethod.CONSENSUS_PARAMS) &&
        params.height !== undefined && typeof params.height === "number") {
      params = { ...params, height: params.height.toString() };
    }



    // Special handling for genesis (no parameters)
    if (method === RpcMethod.GENESIS) {
      return undefined;
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



    // Special handling for broadcast_tx_sync using codec
    if (method === RpcMethod.BROADCAST_TX_SYNC) {
      const encoded = this.encodeBroadcastTxSync(params as BroadcastTxParams);
      return encoded;
    }

    // Special handling for broadcast_tx_async using codec
    if (method === RpcMethod.BROADCAST_TX_ASYNC) {
      const encoded = this.encodeBroadcastTxAsync(params as BroadcastTxParams);
      return encoded;
    }

    // Special handling for broadcast_tx_commit using codec
    if (method === RpcMethod.BROADCAST_TX_COMMIT) {
      const encoded = this.encodeBroadcastTxCommit(params as BroadcastTxParams);
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
      case RpcMethod.BLOCK_RESULTS:
        return this.decodeBlockResults(response);

      case RpcMethod.CONSENSUS_PARAMS:
        return this.decodeConsensusParams(response);



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

      case RpcMethod.NUM_UNCONFIRMED_TXS:
        return this.decodeNumUnconfirmedTxs(response);
      case RpcMethod.COMMIT:
        return this.decodeCommit(response);
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
      RpcMethod.BLOCKCHAIN,
      RpcMethod.COMMIT,

      // Transaction queries
      RpcMethod.TX,
      RpcMethod.TX_SEARCH,
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

  encodeConsensusParams(params: ConsensusParamsParams): EncodedConsensusParamsParams {
    return encodeConsensusParamsParams(params);
  }

  encodeConsensusState(params: ConsensusStateParams): EncodedConsensusStateParams {
    return encodeConsensusStateParams(params);
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

  /**
   * Encode validators query parameters
   * @param params - Parameters including optional height, page, and perPage
   * @returns Encoded parameters with numbers converted to strings
   */
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

  encodeBroadcastTxSync(params: BroadcastTxParams): EncodedBroadcastTxParams {
    return encodeBroadcastTxParams(params);
  }

  encodeBroadcastTxAsync(params: BroadcastTxParams): EncodedBroadcastTxParams {
    return encodeBroadcastTxParams(params);
  }

  encodeBroadcastTxCommit(params: BroadcastTxParams): EncodedBroadcastTxParams {
    return encodeBroadcastTxParams(params);
  }

  encodeCheckTx(params: CheckTxParams): EncodedCheckTxParams {
    return encodeCheckTxParams(params);
  }

  decodeBlock<T extends BlockResponse = BlockResponse>(response: unknown): T {
    return createBlockResponse(response) as T;
  }

  // Abstract methods that must be implemented by version-specific adapters
  decodeBlockResults<T extends BlockResultsResponse = BlockResultsResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = (resp.result || resp) as Record<string, unknown>;
    return createBlockResultsResponse(data) as T;
  }
  decodeBlockSearch<T extends BlockSearchResponse = BlockSearchResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = resp.result || response;
    return createBlockSearchResponse(data) as T;
  }
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
    return createConsensusParamsResponse(response) as T;
  }
  decodeConsensusState<T extends ConsensusStateResponse = ConsensusStateResponse>(response: unknown): T {
    return createConsensusStateResponse(response) as T;
  }
  decodeDumpConsensusState<T extends ConsensusStateDumpResponse = ConsensusStateDumpResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = (resp.result || resp) as Record<string, unknown>;
    return createConsensusStateDumpResponse(data) as T;
  }
  decodeGenesis<T extends GenesisResponse = GenesisResponse>(response: unknown): T {
    const data = (response as any).result || response;
    return createGenesisResponse(data) as T;
  }
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
  decodeTx<T extends TxResponse = TxResponse>(response: unknown): T {
    const responseData = response as { result?: unknown };
    const data = responseData.result || response;
    return createTxResponse(data) as T;
  }
  
  decodeTxSearch<T extends TxSearchResponse = TxSearchResponse>(response: unknown): T {
    const responseData = response as { result?: unknown };
    const data = responseData.result || response;
    return createTxSearchResponse(data) as T;
  }
  
  decodeUnconfirmedTxs<T extends UnconfirmedTxsResponse = UnconfirmedTxsResponse>(response: unknown): T {
    const responseData = response as { result?: unknown };
    const data = responseData.result || response;
    return createUnconfirmedTxsResponse(data) as T;
  }
  decodeBroadcastTxSync<T extends BroadcastTxSyncResponse = BroadcastTxSyncResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = (resp.result || resp) as Record<string, unknown>;
    return createBroadcastTxSyncResponse(data) as T;
  }
  
  decodeBroadcastTxAsync<T extends BroadcastTxAsyncResponse = BroadcastTxAsyncResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = (resp.result || resp) as Record<string, unknown>;
    return createBroadcastTxAsyncResponse(data) as T;
  }
  
  decodeBroadcastTxCommit<T extends BroadcastTxCommitResponse = BroadcastTxCommitResponse>(response: unknown): T {
    const resp = response as Record<string, unknown>;
    const data = (resp.result || resp) as Record<string, unknown>;
    return createBroadcastTxCommitResponse(data) as T;
  }
  decodeCheckTx<T extends CheckTxResponse = CheckTxResponse>(response: unknown): T {
    return createCheckTxResponse(response) as T;
  }
  /**
   * Decode validators response from RPC
   * @param response - Raw RPC response
   * @returns Decoded validators response with proper type conversions
   */
  decodeValidators<T extends ValidatorsResponse = ValidatorsResponse>(response: unknown): T {
    const data = (response as any).result || response;
    return createValidatorsResponse(data) as T;
  }
}