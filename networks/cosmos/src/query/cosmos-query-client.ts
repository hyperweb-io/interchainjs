// networks/cosmos/src/query/cosmos-query-client.ts
import { IRpcClient } from '@interchainjs/types';
import { ICosmosQueryClient } from '../types/cosmos-client-interfaces.js';
import { RpcMethod, ProtocolInfo } from '../types/protocol.js';
import { 
  ChainStatus, Block, BlockResults, TxResponse, ValidatorSet, AbciQueryParams, AbciQueryResult,
  BlockSearchParams, SearchBlocksResult, TxSearchParams, SearchTxsResult,
  AbciInfo, HealthResult, NetInfo, BlockchainInfo, BlockHeader, Commit, CheckTxResult,
  UnconfirmedTxs, NumUnconfirmedTxs, ConsensusParams, ConsensusState, ConsensusStateDump,
  Genesis, GenesisChunk
} from '../types/responses.js';
import { IProtocolAdapter } from '../protocol-adapter.js';

export class CosmosQueryClient implements ICosmosQueryClient {
  constructor(
    private rpcClient: IRpcClient,
    private protocolAdapter: IProtocolAdapter
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
    return this.protocolAdapter.decodeResponse(RpcMethod.STATUS, result);
  }

  async getAbciInfo(): Promise<AbciInfo> {
    const result = await this.rpcClient.call(RpcMethod.ABCI_INFO);
    return this.protocolAdapter.decodeResponse(RpcMethod.ABCI_INFO, result);
  }

  async getHealth(): Promise<HealthResult> {
    const result = await this.rpcClient.call(RpcMethod.HEALTH);
    return this.protocolAdapter.decodeResponse(RpcMethod.HEALTH, result);
  }

  async getNetInfo(): Promise<NetInfo> {
    const result = await this.rpcClient.call(RpcMethod.NET_INFO);
    return this.protocolAdapter.decodeResponse(RpcMethod.NET_INFO, result);
  }

  // Block query methods
  async getBlock(height?: number): Promise<Block> {
    const params = height ? { height: height.toString() } : {};
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.BLOCK, params);
    const result = await this.rpcClient.call(RpcMethod.BLOCK, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.BLOCK, result);
  }

  async getBlockByHash(hash: string): Promise<Block> {
    const params = { hash };
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.BLOCK_BY_HASH, params);
    const result = await this.rpcClient.call(RpcMethod.BLOCK_BY_HASH, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.BLOCK_BY_HASH, result);
  }

  async getBlockResults(height?: number): Promise<BlockResults> {
    const params = height ? { height: height.toString() } : {};
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.BLOCK_RESULTS, params);
    const result = await this.rpcClient.call(RpcMethod.BLOCK_RESULTS, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.BLOCK_RESULTS, result);
  }

  async searchBlocks(params: BlockSearchParams): Promise<SearchBlocksResult> {
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.BLOCK_SEARCH, params);
    const result = await this.rpcClient.call(RpcMethod.BLOCK_SEARCH, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.BLOCK_SEARCH, result);
  }

  async getBlockchain(minHeight: number, maxHeight: number): Promise<BlockchainInfo> {
    const params = { minHeight: minHeight.toString(), maxHeight: maxHeight.toString() };
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.BLOCKCHAIN, params);
    const result = await this.rpcClient.call(RpcMethod.BLOCKCHAIN, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.BLOCKCHAIN, result);
  }

  async getHeader(height?: number): Promise<BlockHeader> {
    const params = height ? { height: height.toString() } : {};
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.HEADER, params);
    const result = await this.rpcClient.call(RpcMethod.HEADER, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.HEADER, result);
  }

  async getHeaderByHash(hash: string): Promise<BlockHeader> {
    const params = { hash };
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.HEADER_BY_HASH, params);
    const result = await this.rpcClient.call(RpcMethod.HEADER_BY_HASH, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.HEADER_BY_HASH, result);
  }

  async getCommit(height?: number): Promise<Commit> {
    const params = height ? { height: height.toString() } : {};
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.COMMIT, params);
    const result = await this.rpcClient.call(RpcMethod.COMMIT, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.COMMIT, result);
  }

  // Transaction query methods
  async getTx(hash: string, prove?: boolean): Promise<TxResponse> {
    const params = { hash, prove };
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.TX, params);
    const result = await this.rpcClient.call(RpcMethod.TX, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.TX, result);
  }

  async searchTxs(params: TxSearchParams): Promise<SearchTxsResult> {
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.TX_SEARCH, params);
    const result = await this.rpcClient.call(RpcMethod.TX_SEARCH, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.TX_SEARCH, result);
  }

  async checkTx(tx: string): Promise<CheckTxResult> {
    const params = { tx };
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.CHECK_TX, params);
    const result = await this.rpcClient.call(RpcMethod.CHECK_TX, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.CHECK_TX, result);
  }

  async getUnconfirmedTxs(limit?: number): Promise<UnconfirmedTxs> {
    const params = limit ? { limit: limit.toString() } : {};
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.UNCONFIRMED_TXS, params);
    const result = await this.rpcClient.call(RpcMethod.UNCONFIRMED_TXS, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.UNCONFIRMED_TXS, result);
  }

  async getNumUnconfirmedTxs(): Promise<NumUnconfirmedTxs> {
    const result = await this.rpcClient.call(RpcMethod.NUM_UNCONFIRMED_TXS);
    return this.protocolAdapter.decodeResponse(RpcMethod.NUM_UNCONFIRMED_TXS, result);
  }

  // Chain query methods
  async getValidators(height?: number, page?: number, perPage?: number): Promise<ValidatorSet> {
    const params: any = {};
    if (height) params.height = height.toString();
    if (page) params.page = page.toString();
    if (perPage) params.perPage = perPage.toString();
    
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.VALIDATORS, params);
    const result = await this.rpcClient.call(RpcMethod.VALIDATORS, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.VALIDATORS, result);
  }

  async getConsensusParams(height?: number): Promise<ConsensusParams> {
    const params = height ? { height: height.toString() } : {};
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.CONSENSUS_PARAMS, params);
    const result = await this.rpcClient.call(RpcMethod.CONSENSUS_PARAMS, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.CONSENSUS_PARAMS, result);
  }

  async getConsensusState(): Promise<ConsensusState> {
    const result = await this.rpcClient.call(RpcMethod.CONSENSUS_STATE);
    return this.protocolAdapter.decodeResponse(RpcMethod.CONSENSUS_STATE, result);
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
    const params = { chunk: chunk.toString() };
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.GENESIS_CHUNKED, params);
    const result = await this.rpcClient.call(RpcMethod.GENESIS_CHUNKED, encodedParams);
    return this.protocolAdapter.decodeResponse(RpcMethod.GENESIS_CHUNKED, result);
  }

  // ABCI query methods
  async queryAbci(params: AbciQueryParams): Promise<AbciQueryResult> {
    const encodedParams = this.protocolAdapter.encodeParams(RpcMethod.ABCI_QUERY, {
      path: params.path,
      data: this.protocolAdapter.decodeBytes(params.data),
      height: params.height?.toString(),
      prove: params.prove
    });
    const result = await this.rpcClient.call(RpcMethod.ABCI_QUERY, encodedParams);
    const decoded = this.protocolAdapter.decodeResponse(RpcMethod.ABCI_QUERY, result);
    
    // Convert byte fields back to Uint8Array
    return {
      ...decoded,
      key: this.protocolAdapter.encodeBytes(decoded.key || ''),
      value: this.protocolAdapter.encodeBytes(decoded.value || '')
    };
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