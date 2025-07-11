// networks/cosmos/src/query/cosmos-query-client.ts
import { IRpcClient } from '@interchainjs/types';
import { ICosmosQueryClient } from '../types/cosmos-client-interfaces';
import { RpcMethod, ProtocolInfo } from '../types/protocol';
import {
  StatusResponse as ChainStatus, Block,
  TxResponse, ValidatorsResponse as ValidatorSet,
  BlockSearchResponse as SearchBlocksResult, TxSearchResponse as SearchTxsResult,
  BlockchainResponse, BlockHeader, Commit,
  UnconfirmedTxsResponse as UnconfirmedTxs, ConsensusParams,
  GenesisResponse as Genesis, HealthResponse as HealthResult,
  NumUnconfirmedTxsResponse as NumUnconfirmedTxs,
  AbciInfoResponse as AbciInfo, NetInfoResponse as NetInfo,
  AbciQueryResponse as AbciQueryResult, ConsensusState, ConsensusStateDump,
  GenesisChunk, TxEvent, BlockEvent,

} from '../types/responses';
import {
  BroadcastTxSyncResponse
} from '../types/responses/common/broadcast-tx-sync';
import {
  BroadcastTxAsyncResponse
} from '../types/responses/common/broadcast-tx-async';
import {
  BroadcastTxCommitResponse
} from '../types/responses/common/broadcast-tx-commit';
import { BlockResultsResponse as BlockResults } from '../types/responses/common/block/block-results-response';
import { TxData } from '../types/responses/common/block/tx-data';
import { CheckTxParams } from '../types/requests';
import { CheckTxResponse } from '../types/responses';
import {
  BlockParams, BlockByHashParams, BlockchainParams, BlockResultsParams,
  BlockSearchParams, BroadcastTxParams, ConsensusParamsParams,
  GenesisChunkedParams, HeaderParams, HeaderByHashParams, TxParams, TxSearchParams,
  UnconfirmedTxsParams
} from '../types/requests';
import { AbciQueryParams } from '../types/requests/common/abci';
import { CommitParams } from '../types/requests/common/commit';
import { ValidatorsParams } from '../types/requests/common/validators';
import { ICosmosProtocolAdapter } from '../adapters/base';



export class CosmosQueryClient implements ICosmosQueryClient {
  constructor(
    private rpcClient: IRpcClient,
    private protocolAdapter: ICosmosProtocolAdapter
  ) {}

  get endpoint(): string {
    return this.rpcClient.endpoint;
  }

  async connect(): Promise<void> {
    await this.rpcClient.connect();
  }

  async disconnect(): Promise<void> {
    await this.rpcClient.disconnect();
  }

  isConnected(): boolean {
    return this.rpcClient.isConnected();
  }

  // Basic info methods
  async getStatus(): Promise<ChainStatus> {
    const result = await this.rpcClient.call(RpcMethod.STATUS);
    return this.protocolAdapter.decodeStatus(result);
  }

  async getAbciInfo(): Promise<AbciInfo> {
    const result = await this.rpcClient.call(RpcMethod.ABCI_INFO);
    return this.protocolAdapter.decodeAbciInfo(result);
  }

  async getHealth(): Promise<HealthResult> {
    const result = await this.rpcClient.call(RpcMethod.HEALTH);
    return this.protocolAdapter.decodeHealth(result);
  }

  async getNetInfo(): Promise<NetInfo> {
    const result = await this.rpcClient.call(RpcMethod.NET_INFO);
    return this.protocolAdapter.decodeNetInfo(result);
  }

  // Block query methods
  async getBlock(height?: number): Promise<Block> {
    const params: BlockParams = height ? { height } : {};
    const encodedParams = this.protocolAdapter.encodeBlock(params);
    const result = await this.rpcClient.call(RpcMethod.BLOCK, encodedParams);
    const blockResponse = this.protocolAdapter.decodeBlock(result);
    return blockResponse.block;
  }

  async getBlockByHash(hash: string): Promise<Block> {
    const params: BlockByHashParams = { hash };
    const encodedParams = this.protocolAdapter.encodeBlockByHash(params);
    const result = await this.rpcClient.call(RpcMethod.BLOCK_BY_HASH, encodedParams);
    const blockResponse = this.protocolAdapter.decodeBlock(result);
    return blockResponse.block;
  }

  async getBlockResults(height?: number): Promise<BlockResults> {
    const params: BlockResultsParams = height ? { height } : {};
    const encodedParams = this.protocolAdapter.encodeBlockResults(params);
    const result = await this.rpcClient.call(RpcMethod.BLOCK_RESULTS, encodedParams);
    return this.protocolAdapter.decodeBlockResults(result);
  }

  /**
   * Search for blocks matching the given query
   * @param params - Search parameters including query string and pagination options
   * @returns Search results with matching blocks and total count
   * @example
   * ```typescript
   * const results = await client.searchBlocks({
   *   query: "block.height >= 100 AND block.height <= 200",
   *   page: 1,
   *   perPage: 10
   * });
   * ```
   */
  async searchBlocks(params: BlockSearchParams): Promise<SearchBlocksResult> {
    const encodedParams = this.protocolAdapter.encodeBlockSearch(params);
    const result = await this.rpcClient.call(RpcMethod.BLOCK_SEARCH, encodedParams);
    return this.protocolAdapter.decodeBlockSearch(result);
  }

  /**
   * Get blockchain metadata for a range of blocks
   * @param minHeight - Minimum block height (inclusive)
   * @param maxHeight - Maximum block height (inclusive)
   * @returns Blockchain metadata including block headers
   * @remarks
   * - If no parameters are provided, returns the last 20 blocks
   * - The response includes block metadata but not full block data
   * - Heights must be valid: minHeight <= maxHeight and both > 0
   */
  async getBlockchain(minHeight?: number, maxHeight?: number): Promise<BlockchainResponse> {
    // If no parameters provided, get recent blocks (last 20 blocks)
    if (minHeight === undefined || maxHeight === undefined) {
      const status = await this.getStatus();
      const currentHeight = status.syncInfo.latestBlockHeight;
      minHeight = Math.max(1, currentHeight - 19); // Get last 20 blocks
      maxHeight = currentHeight;
    }

    const params: BlockchainParams = { minHeight, maxHeight };
    const encodedParams = this.protocolAdapter.encodeBlockchain(params);
    const result = await this.rpcClient.call(RpcMethod.BLOCKCHAIN, encodedParams);
    return this.protocolAdapter.decodeBlockchain(result);
  }

  async getHeader(height?: number): Promise<BlockHeader> {
    const params: HeaderParams = height ? { height } : {};
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.HEADER, params);
    const result = await this.rpcClient.call(RpcMethod.HEADER, encodedParams);
    return this.protocolAdapter.decodeHeader(result).header as any;
  }

  async getHeaderByHash(hash: string): Promise<BlockHeader> {
    const params: HeaderByHashParams = { hash };
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.HEADER_BY_HASH, params);
    const result = await this.rpcClient.call(RpcMethod.HEADER_BY_HASH, encodedParams);
    return this.protocolAdapter.decodeHeader(result).header as any;
  }

  async getCommit(height?: number): Promise<Commit> {
    const params: CommitParams = height ? { height } : {};
    const encodedParams = this.protocolAdapter.encodeCommit(params);
    const result = await this.rpcClient.call(RpcMethod.COMMIT, encodedParams);
    const response = this.protocolAdapter.decodeCommit(result);
    return response.signedHeader.commit;
  }

  // Transaction query methods
  async getTx(hash: string, prove?: boolean): Promise<TxResponse> {
    const params: TxParams = { hash, prove };
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.TX, params);
    const result = await this.rpcClient.call(RpcMethod.TX, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.TX, result);
  }

  async searchTxs(params: TxSearchParams): Promise<SearchTxsResult> {
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.TX_SEARCH, params);
    const result = await this.rpcClient.call(RpcMethod.TX_SEARCH, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.TX_SEARCH, result);
  }

  async checkTx(tx: string): Promise<CheckTxResponse> {
    const params: CheckTxParams = { tx };
    const encodedParams = this.protocolAdapter.encodeCheckTx(params);
    const result = await this.rpcClient.call(RpcMethod.CHECK_TX, encodedParams);
    return this.protocolAdapter.decodeCheckTx(result);
  }

  async getUnconfirmedTxs(limit?: number): Promise<UnconfirmedTxs> {
    const params: UnconfirmedTxsParams = limit ? { limit } : {};
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.UNCONFIRMED_TXS, params);
    const result = await this.rpcClient.call(RpcMethod.UNCONFIRMED_TXS, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.UNCONFIRMED_TXS, result);
  }

  async getNumUnconfirmedTxs(): Promise<NumUnconfirmedTxs> {
    const result = await this.rpcClient.call(RpcMethod.NUM_UNCONFIRMED_TXS);
    return this.protocolAdapter.decodeNumUnconfirmedTxs(result);
  }

  // Transaction broadcast methods
  // @ts-ignore - Type override for unchecked query
  async broadcastTxSync(params: BroadcastTxParams): Promise<BroadcastTxSyncResponse> {
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.BROADCAST_TX_SYNC, params);
    const result = await this.rpcClient.call(RpcMethod.BROADCAST_TX_SYNC, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.BROADCAST_TX_SYNC, result) as any;
  }

  async broadcastTxAsync(params: BroadcastTxParams): Promise<BroadcastTxAsyncResponse> {
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.BROADCAST_TX_ASYNC, params);
    const result = await this.rpcClient.call(RpcMethod.BROADCAST_TX_ASYNC, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.BROADCAST_TX_ASYNC, result) as any;
  }

  // @ts-ignore - Type override for unchecked query
  async broadcastTxCommit(params: BroadcastTxParams): Promise<BroadcastTxCommitResponse> {
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.BROADCAST_TX_COMMIT, params);
    const result = await this.rpcClient.call(RpcMethod.BROADCAST_TX_COMMIT, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.BROADCAST_TX_COMMIT, result) as any;
  }

  // Chain query methods
  /**
   * Get validators at a specific height with optional pagination
   * @param height - Block height to query validators at (optional, defaults to latest)
   * @param page - Page number for pagination (optional)
   * @param perPage - Number of validators per page (optional)
   * @returns Promise resolving to validator set with block height, validators array, count and total
   */
  async getValidators(height?: number, page?: number, perPage?: number): Promise<ValidatorSet> {
    const params: ValidatorsParams = {
      ...(height !== undefined && { height }),
      ...(page !== undefined && { page }),
      ...(perPage !== undefined && { perPage })
    };

    const encodedParams = this.protocolAdapter.encodeValidators(params);
    const result = await this.rpcClient.call(RpcMethod.VALIDATORS, encodedParams);
    return this.protocolAdapter.decodeValidators(result);
  }

  async getConsensusParams(height?: number): Promise<ConsensusParams> {
    const params: ConsensusParamsParams = height ? { height } : {};
    const encodedParams = this.protocolAdapter.encodeConsensusParams(params);
    const result = await this.rpcClient.call(RpcMethod.CONSENSUS_PARAMS, encodedParams);
    const response = this.protocolAdapter.decodeConsensusParams(result);
    return response.consensusParams;
  }

  async getConsensusState(): Promise<ConsensusState> {
    const result = await this.rpcClient.call(RpcMethod.CONSENSUS_STATE);
    if (!this.protocolAdapter) {
      throw new Error('Protocol adapter is not initialized');
    }
    return this.protocolAdapter.decodeConsensusState(result);
  }

  async dumpConsensusState(): Promise<ConsensusStateDump> {
    const result = await this.rpcClient.call(RpcMethod.DUMP_CONSENSUS_STATE);
    return this.protocolAdapter.decodeResponse(RpcMethod.DUMP_CONSENSUS_STATE, result);
  }

  async getGenesis(): Promise<Genesis> {
    const result = await this.rpcClient.call(RpcMethod.GENESIS);
    return this.protocolAdapter.decodeResponse(RpcMethod.GENESIS, result);
  }

  async getGenesisChunked(chunk: number): Promise<GenesisChunk> {
    const params: GenesisChunkedParams = { chunk };
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.GENESIS_CHUNKED, params);
    const result = await this.rpcClient.call(RpcMethod.GENESIS_CHUNKED, encodedParams);
    return this.protocolAdapter.decodeGenesisChunked(result);
  }

  // ABCI query methods
  async queryAbci(params: AbciQueryParams): Promise<AbciQueryResult> {
    const encodedParams = this.protocolAdapter.encodeAbciQuery(params);
    const result = await this.rpcClient.call(RpcMethod.ABCI_QUERY, encodedParams);
    return this.protocolAdapter.decodeAbciQuery(result);
  }

  // Protocol info
  getProtocolInfo(): ProtocolInfo {
    return {
      version: this.protocolAdapter.getVersion(),
      supportedMethods: this.protocolAdapter.getSupportedMethods(),
      capabilities: this.protocolAdapter.getCapabilities()
    };
  }
}