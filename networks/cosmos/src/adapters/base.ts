import { apiToNumber as encApiToNumber, apiToBigInt as encApiToBigInt, maybeFromBase64 as encMaybeFromBase64, safeFromBase64 as encSafeFromBase64, maybeFromHex as encMaybeFromHex } from '@interchainjs/encoding';
import { snakeToCamel, snakeCaseRecursive } from '@interchainjs/utils';
import { RpcMethod, ProtocolVersion, ProtocolInfo, ProtocolCapabilities } from '../types/protocol';
import {
  AbciInfoResponse
} from '../types/responses/common/abci/abci-info-response';
import {
  AbciQueryResponse
} from '../types/responses/common/abci/abci-query-response';
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
  encodeBlockchain(params: BlockchainParams): EncodedBlockchainParams;
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
  encodeBytes(data: string): Uint8Array;
  decodeBytes(data: Uint8Array): string;
}

export interface ICosmosProtocolAdapter extends IProtocolAdapter, RequestEncoder, ResponseDecoder {}

export abstract class BaseAdapter implements RequestEncoder, ResponseDecoder, ICosmosProtocolAdapter {
  constructor(protected version: ProtocolVersion) {}

  // Use shared utilities from @interchainjs/utils
  protected transformKeys(obj: any): any {
    return snakeCaseRecursive(obj);
  }

  protected apiToNumber(value: string | undefined | null): number { return encApiToNumber(value as any); }
  protected apiToBigInt(value: string | undefined | null): bigint { return encApiToBigInt(value as any); }
  protected maybeFromBase64(value: string | undefined | null): Uint8Array | undefined { return encMaybeFromBase64(value as any); }
  protected safeFromBase64(value: string): Uint8Array { return encSafeFromBase64(value); }
  protected maybeFromHex(value: string | undefined | null): Uint8Array | undefined { return encMaybeFromHex(value as any); }


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