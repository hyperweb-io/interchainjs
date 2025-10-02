// networks/cosmos/src/query/cosmos-query-client.ts
import { IRpcClient } from '@interchainjs/types';
import { ICosmosQueryClient } from '../types/cosmos-client-interfaces';
import { RpcMethod, ProtocolInfo } from '../types/protocol';
import { StatusResponse as ChainStatus } from '../types/responses/common/status';
import { Block } from '../types/responses/common/block/block';
import { TxResponse } from '../types/responses/common/tx';
import { ValidatorsResponse as ValidatorSet } from '../types/responses/common/validators';
import { BlockSearchResponse as SearchBlocksResult } from '../types/responses/common/block-search';
import { TxSearchResponse as SearchTxsResult } from '../types/responses/common/tx-search';
import { BlockchainResponse } from '../types/responses/common/block/blockchain-response';
import { BlockHeader } from '../types/responses/common/header/block-header';
import { Commit } from '../types/responses/common/commit/commit';
import { UnconfirmedTxsResponse as UnconfirmedTxs } from '../types/responses/common/unconfirmed-txs';
import { ConsensusParams } from '../types/responses/common/consensus-params/consensus-params';
import { HealthResponse as HealthResult } from '../types/responses/common/health';
import { NumUnconfirmedTxsResponse as NumUnconfirmedTxs } from '../types/responses/common/num-unconfirmed-txs';
import { AbciInfoResponse as AbciInfo } from '../types/responses/common/abci/abci-info-response';
import { NetInfoResponse as NetInfo } from '../types/responses/common/net-info';
import { AbciQueryResponse as AbciQueryResult } from '../types/responses/common/abci/abci-query-response';
import { ConsensusStateResponse as ConsensusState } from '../types/responses/common/consensus-state';
import { TxEvent, BlockEvent } from '../types/responses/common/event';
import {
  BroadcastTxSyncResponse
} from '../types/responses/common/broadcast-tx-sync';
import { GenesisResponse as Genesis } from '../types/responses/common/genesis';
import { GenesisChunkedResponse as GenesisChunk } from '../types/responses/common/genesis-chunked';
import {
  ConsensusStateDumpResponse
} from '../types/responses/common/consensus';
import {
  BroadcastTxAsyncResponse
} from '../types/responses/common/broadcast-tx-async';
import {
  BroadcastTxCommitResponse
} from '../types/responses/common/broadcast-tx-commit';
import { BlockResultsResponse as BlockResults } from '../types/responses/common/block/block-results-response';
import { TxData } from '../types/responses/common/block/tx-data';
import { CheckTxParams, TxParams, TxSearchParams, UnconfirmedTxsParams } from '../types/requests/common/tx';
import { CheckTxResponse } from '../types/responses/common/tx';
import { BlockParams, BlockByHashParams, BlockResultsParams, BlockSearchParams } from '../types/requests/common/block';
import { BlockchainParams } from '../types/requests/common/blockchain';
import { ConsensusParamsParams } from '../types/requests/common/consensus';
import { HeaderParams, HeaderByHashParams } from '../types/requests/common/block';
import { AbciQueryParams } from '../types/requests/common/abci';
import { CommitParams } from '../types/requests/common/commit';
import { ValidatorsParams } from '../types/requests/common/validators';
import { BroadcastTxParams } from '../types/requests/common/tx';
import { GenesisChunkedParams } from '../types/requests/common/genesis-chunked';
import { ICosmosProtocolAdapter } from '../adapters/base';
import { BaseAccount, getAccount } from '@interchainjs/cosmos-types';
import { accountFromAny, type PubkeyDecoderMap } from '../utils';
import { encodePubkey } from '@interchainjs/pubkey';



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

  /**
   * Get block header by height
   * @param {number} [height] - Optional block height. If not provided, returns the latest header
   * @returns {Promise<BlockHeader>} The block header containing metadata like chain ID, height, time, and various hashes
   */
  async getHeader(height?: number): Promise<BlockHeader> {
    const params: HeaderParams = height ? { height } : {};
    const encodedParams = this.protocolAdapter.encodeHeader(params);
    const result = await this.rpcClient.call(RpcMethod.HEADER, encodedParams);
    return this.protocolAdapter.decodeHeader(result).header;
  }

  /**
   * Get block header by hash
   * @param {string} hash - The block hash in hexadecimal format (case-insensitive)
   * @returns {Promise<BlockHeader>} The block header containing metadata like chain ID, height, time, and various hashes
   * @throws {Error} If the hash is invalid or block not found
   */
  async getHeaderByHash(hash: string): Promise<BlockHeader> {
    const params: HeaderByHashParams = { hash };
    const encodedParams = this.protocolAdapter.encodeHeaderByHash(params);
    const result = await this.rpcClient.call(RpcMethod.HEADER_BY_HASH, encodedParams);
    return this.protocolAdapter.decodeHeader(result).header;
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
    const encodedParams = this.protocolAdapter.encodeTx(params);
    const result = await this.rpcClient.call(RpcMethod.TX, encodedParams);
    return this.protocolAdapter.decodeTx(result);
  }

  async searchTxs(params: TxSearchParams): Promise<SearchTxsResult> {
    const encodedParams = this.protocolAdapter.encodeTxSearch(params);
    const result = await this.rpcClient.call(RpcMethod.TX_SEARCH, encodedParams);
    return this.protocolAdapter.decodeTxSearch(result);
  }

  async checkTx(tx: string): Promise<CheckTxResponse> {
    const params: CheckTxParams = { tx };
    const encodedParams = this.protocolAdapter.encodeCheckTx(params);
    const result = await this.rpcClient.call(RpcMethod.CHECK_TX, encodedParams);
    return this.protocolAdapter.decodeCheckTx(result);
  }

  async getUnconfirmedTxs(limit?: number): Promise<UnconfirmedTxs> {
    const params: UnconfirmedTxsParams = limit ? { limit } : {};
    const encodedParams = this.protocolAdapter.encodeUnconfirmedTxs(params);
    const result = await this.rpcClient.call(RpcMethod.UNCONFIRMED_TXS, encodedParams);
    return this.protocolAdapter.decodeUnconfirmedTxs(result);
  }

  async getNumUnconfirmedTxs(): Promise<NumUnconfirmedTxs> {
    const result = await this.rpcClient.call(RpcMethod.NUM_UNCONFIRMED_TXS);
    return this.protocolAdapter.decodeNumUnconfirmedTxs(result);
  }

  // Transaction broadcast methods
  // @ts-ignore - Type override for unchecked query
  async broadcastTxSync(params: BroadcastTxParams): Promise<BroadcastTxSyncResponse> {
    const encodedParams = this.protocolAdapter.encodeBroadcastTxSync(params);
    const result = await this.rpcClient.call(RpcMethod.BROADCAST_TX_SYNC, encodedParams);
    return this.protocolAdapter.decodeBroadcastTxSync(result);
  }

  async broadcastTxAsync(params: BroadcastTxParams): Promise<BroadcastTxAsyncResponse> {
    const encodedParams = this.protocolAdapter.encodeBroadcastTxAsync(params);
    const result = await this.rpcClient.call(RpcMethod.BROADCAST_TX_ASYNC, encodedParams);
    return this.protocolAdapter.decodeBroadcastTxAsync(result);
  }

  async broadcastTxCommit(params: BroadcastTxParams): Promise<BroadcastTxCommitResponse> {
    const encodedParams = this.protocolAdapter.encodeBroadcastTxCommit(params);
    const result = await this.rpcClient.call(RpcMethod.BROADCAST_TX_COMMIT, encodedParams);
    return this.protocolAdapter.decodeBroadcastTxCommit(result);
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

  async dumpConsensusState(): Promise<ConsensusStateDumpResponse> {
    const result = await this.rpcClient.call(RpcMethod.DUMP_CONSENSUS_STATE);
    return this.protocolAdapter.decodeDumpConsensusState(result);
  }

  async getGenesis(): Promise<Genesis> {
    const result = await this.rpcClient.call(RpcMethod.GENESIS);
    return this.protocolAdapter.decodeGenesis(result);
  }

  async getGenesisChunked(chunk: number): Promise<GenesisChunk> {
    const params: GenesisChunkedParams = { chunk };
    const encodedParams = this.protocolAdapter.encodeGenesisChunked(params);
    const result = await this.rpcClient.call(RpcMethod.GENESIS_CHUNKED, encodedParams);
    return this.protocolAdapter.decodeGenesisChunked(result);
  }

  // ABCI query methods
  async queryAbci(params: AbciQueryParams): Promise<AbciQueryResult> {
    const encodedParams = this.protocolAdapter.encodeAbciQuery(params);
    const result = await this.rpcClient.call(RpcMethod.ABCI_QUERY, encodedParams);
    return this.protocolAdapter.decodeAbciQuery(result);
  }

  /**
   * Rpc interface method for helper functions
   * @param service - The service name (e.g., "cosmos.auth.v1beta1.Query")
   * @param method - The method name (e.g., "Accounts" or "Account")
   * @param data - The encoded request data as Uint8Array
   * @returns Promise resolving to the response data as Uint8Array
   */
  async request(service: string, method: string, data: Uint8Array): Promise<Uint8Array> {
    const path = `/${service}/${method}`;
    const result = await this.queryAbci({ path, data });
    return result.value;
  }

  // Account queries
  async getBaseAccount(
    address: string,
    opts?: { readonly pubkeyDecoders?: PubkeyDecoderMap }
  ): Promise<BaseAccount | null> {
    try {
      // Create a plain RPC object so getAccount can mutate it
      const rpc = {
        request: (service: string, method: string, data: Uint8Array) =>
          this.request(service, method, data),
      };

      const response = await getAccount(rpc, { address });

      if (!response.account) {
        return null;
      }

      // Use the new accountFromAny function to parse the account
      const account = accountFromAny(response.account, opts);

      // Convert the standardized Account back to BaseAccount format
      return {
        address: account.address,
        pubKey: account.pubkey ? encodePubkey(account.pubkey) : undefined,
        accountNumber: BigInt(account.accountNumber),
        sequence: BigInt(account.sequence),
      };
    } catch (error) {
      console.warn(`Failed to get base account for address ${address}:`, error);
      return null;
    }
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
