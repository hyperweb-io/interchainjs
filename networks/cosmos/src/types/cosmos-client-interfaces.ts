// networks/cosmos/src/types/interfaces.ts
import { IQueryClient, IEventClient } from '@interchainjs/types';
import { 
  StatusResponse as ChainStatus, Block, BlockResultsResponse as BlockResults, 
  TxResponse, ValidatorsResponse as ValidatorSet,
  BlockSearchResponse as SearchBlocksResult, TxSearchResponse as SearchTxsResult,
  BlockchainResponse as BlockchainInfo, BlockHeader, Commit,
  UnconfirmedTxsResponse as UnconfirmedTxs, ConsensusParams,
  GenesisResponse as Genesis, HealthResponse as HealthResult,
  TxData as CheckTxResult, NumUnconfirmedTxsResponse as NumUnconfirmedTxs,
  AbciInfoResponse as AbciInfo, NetInfoResponse as NetInfo,
  AbciQueryResponse as AbciQueryResult, ConsensusState, ConsensusStateDump,
  GenesisChunk, TxEvent, BlockEvent,
  BroadcastTxSyncResponse, BroadcastTxAsyncResponse, BroadcastTxCommitResponse
} from './responses';
import {
  AbciQueryParams, BlockSearchParams, TxSearchParams, BroadcastTxParams
} from './requests';
import { ProtocolInfo } from './protocol';



export interface ICosmosQueryClient extends IQueryClient {
  // Basic info
  getStatus(): Promise<ChainStatus>;
  getAbciInfo(): Promise<AbciInfo>;
  getHealth(): Promise<HealthResult>;
  getNetInfo(): Promise<NetInfo>;

  // Block queries
  getBlock(height?: number): Promise<Block>;
  getBlockByHash(hash: string): Promise<Block>;
  getBlockResults(height?: number): Promise<BlockResults>;
  searchBlocks(params: BlockSearchParams): Promise<SearchBlocksResult>;
  getBlockchain(minHeight?: number, maxHeight?: number): Promise<BlockchainInfo>;
  getHeader(height?: number): Promise<BlockHeader>;
  getHeaderByHash(hash: string): Promise<BlockHeader>;
  getCommit(height?: number): Promise<Commit>;

  // Transaction queries  
  getTx(hash: string, prove?: boolean): Promise<TxResponse>;
  searchTxs(params: TxSearchParams): Promise<SearchTxsResult>;
  checkTx(tx: string): Promise<CheckTxResult>;
  getUnconfirmedTxs(limit?: number): Promise<UnconfirmedTxs>;
  getNumUnconfirmedTxs(): Promise<NumUnconfirmedTxs>;

  // Transaction broadcast
  broadcastTxSync(params: BroadcastTxParams): Promise<BroadcastTxSyncResponse>;
  broadcastTxAsync(params: BroadcastTxParams): Promise<BroadcastTxAsyncResponse>;
  broadcastTxCommit(params: BroadcastTxParams): Promise<BroadcastTxCommitResponse>;

  // Chain queries
  getValidators(height?: number, page?: number, perPage?: number): Promise<ValidatorSet>;
  getConsensusParams(height?: number): Promise<ConsensusParams>;
  getConsensusState(): Promise<ConsensusState>;
  dumpConsensusState(): Promise<ConsensusStateDump>;
  getGenesis(): Promise<Genesis>;
  getGenesisChunked(chunk: number): Promise<GenesisChunk>;

  // ABCI queries
  queryAbci(params: AbciQueryParams): Promise<AbciQueryResult>;

  // Protocol info
  getProtocolInfo(): ProtocolInfo;
}

export interface ICosmosEventClient extends IEventClient {
  // Event streams
  subscribeToBlocks(): AsyncIterable<Block>;
  subscribeToBlockHeaders(): AsyncIterable<BlockHeader>;
  subscribeToTxs(query?: string): AsyncIterable<TxEvent>;
  subscribeToValidatorSetUpdates(): AsyncIterable<BlockEvent>;
}