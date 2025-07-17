// networks/cosmos/src/types/interfaces.ts
import { IQueryClient, IEventClient } from '@interchainjs/types';
import { 
  StatusResponse as ChainStatus, Block,
  TxResponse, ValidatorsResponse as ValidatorSet,
  BlockSearchResponse as SearchBlocksResult, TxSearchResponse as SearchTxsResult,
  BlockchainResponse as BlockchainInfo, BlockHeader, Commit,
  UnconfirmedTxsResponse as UnconfirmedTxs, ConsensusParams,
  HealthResponse as HealthResult,
  NumUnconfirmedTxsResponse as NumUnconfirmedTxs,
  AbciInfoResponse as AbciInfo, NetInfoResponse as NetInfo,
  AbciQueryResponse as AbciQueryResult, ConsensusState,
  TxEvent, BlockEvent,
  BroadcastTxAsyncResponse, BroadcastTxCommitResponse
} from './responses';
import { BlockResultsResponse as BlockResults } from './responses/common/block/block-results-response';
import { CheckTxResponse } from './responses';
import { BroadcastTxSyncResponse } from './responses/common/broadcast-tx-sync/broadcast-tx-sync-response';
import { ConsensusStateDumpResponse } from './responses/common/consensus';
import { GenesisResponse as Genesis } from './responses/common/genesis';
import { GenesisChunkedResponse as GenesisChunk } from './responses/common/genesis-chunked';
import {
  AbciQueryParams, BlockSearchParams, TxSearchParams
} from './requests';
import { BroadcastTxParams } from './requests/common/tx';
import { ProtocolInfo } from './protocol';
import { BaseAccount } from '@interchainjs/cosmos-types/cosmos/auth/v1beta1/auth';



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
  checkTx(tx: string): Promise<CheckTxResponse>;
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
  dumpConsensusState(): Promise<ConsensusStateDumpResponse>;
  getGenesis(): Promise<Genesis>;
  getGenesisChunked(chunk: number): Promise<GenesisChunk>;

  // ABCI queries
  queryAbci(params: AbciQueryParams): Promise<AbciQueryResult>;

  // Rpc interface for helper functions
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

  // Account queries
  getBaseAccount(address: string): Promise<BaseAccount | null>;

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