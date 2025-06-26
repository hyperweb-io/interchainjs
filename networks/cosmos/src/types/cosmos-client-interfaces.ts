// networks/cosmos/src/types/interfaces.ts
import { IQueryClient, IEventClient } from '@interchainjs/types';
import { 
  ChainStatus, Block, BlockResults, TxResponse, ValidatorSet, AbciQueryParams, AbciQueryResult,
  BlockSearchParams, SearchBlocksResult, TxSearchParams, SearchTxsResult,
  AbciInfo, HealthResult, NetInfo, BlockchainInfo, BlockHeader, Commit, CheckTxResult,
  UnconfirmedTxs, NumUnconfirmedTxs, ConsensusParams, ConsensusState, ConsensusStateDump,
  Genesis, GenesisChunk, TxEvent, BlockEvent
} from './responses.js';
import { ProtocolInfo } from './protocol.js';

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
  getBlockchain(minHeight: number, maxHeight: number): Promise<BlockchainInfo>;
  getHeader(height?: number): Promise<BlockHeader>;
  getHeaderByHash(hash: string): Promise<BlockHeader>;
  getCommit(height?: number): Promise<Commit>;

  // Transaction queries  
  getTx(hash: string, prove?: boolean): Promise<TxResponse>;
  searchTxs(params: TxSearchParams): Promise<SearchTxsResult>;
  checkTx(tx: string): Promise<CheckTxResult>;
  getUnconfirmedTxs(limit?: number): Promise<UnconfirmedTxs>;
  getNumUnconfirmedTxs(): Promise<NumUnconfirmedTxs>;

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