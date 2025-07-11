/**
 * Common RPC request types for Cosmos/Tendermint
 * These are shared across all versions
 */

import { BlockSearchParams } from './requests/common/block';
import { ValidatorsParams } from './requests/common/validators';
import { CheckTxParams } from './requests/common/tx';
export { BlockSearchParams } from './requests/common/block';
export { ValidatorsParams } from './requests/common/validators';
export { CheckTxParams } from './requests/common/tx';

export enum Method {
  AbciInfo = "abci_info",
  AbciQuery = "abci_query",
  Block = "block",
  BlockByHash = "block_by_hash",
  Blockchain = "blockchain",
  BlockResults = "block_results",
  BlockSearch = "block_search",
  BroadcastTxAsync = "broadcast_tx_async",
  BroadcastTxSync = "broadcast_tx_sync",
  BroadcastTxCommit = "broadcast_tx_commit",
  Commit = "commit",
  ConsensusParams = "consensus_params",
  Genesis = "genesis",
  GenesisChunked = "genesis_chunked",
  Header = "header",
  HeaderByHash = "header_by_hash",
  Health = "health",
  NetInfo = "net_info",
  NumUnconfirmedTxs = "num_unconfirmed_txs",
  Status = "status",
  Subscribe = "subscribe",
  Tx = "tx",
  TxSearch = "tx_search",
  UnconfirmedTxs = "unconfirmed_txs",
  Validators = "validators",
  Unsubscribe = "unsubscribe",
}

// Common request parameter types
export interface AbciQueryParams {
  path: string;
  data: Uint8Array;
  height?: number;
  prove?: boolean;
}

export interface BlockParams {
  height?: number;
}

export interface BlockByHashParams {
  hash: string;
}

export interface BlockchainParams {
  minHeight?: number;
  maxHeight?: number;
}

export interface BlockResultsParams {
  height?: number;
}

export interface BroadcastTxParams {
  tx: Uint8Array;
}

export interface CommitParams {
  height?: number;
}

export interface ConsensusParamsParams {
  height?: number;
}

export interface GenesisChunkedParams {
  chunk: number;
}

export interface HeaderParams {
  height?: number;
}

export interface HeaderByHashParams {
  hash: string;
}

export interface TxParams {
  hash: string;
  prove?: boolean;
}

export interface TxSearchParams {
  query: string;
  prove?: boolean;
  page?: number;
  perPage?: number;
  orderBy?: string;
}

export interface UnconfirmedTxsParams {
  limit?: number;
}

// Common request types
export interface AbciInfoRequest {
  method: Method.AbciInfo;
}

export interface AbciQueryRequest {
  method: Method.AbciQuery;
  params: AbciQueryParams;
}

export interface BlockRequest {
  method: Method.Block;
  params?: BlockParams;
}

export interface BlockByHashRequest {
  method: Method.BlockByHash;
  params: BlockByHashParams;
}

export interface BlockchainRequest {
  method: Method.Blockchain;
  params?: BlockchainParams;
}

export interface BlockResultsRequest {
  method: Method.BlockResults;
  params?: BlockResultsParams;
}

export interface BlockSearchRequest {
  method: Method.BlockSearch;
  params: BlockSearchParams;
}

export interface BroadcastTxAsyncRequest {
  method: Method.BroadcastTxAsync;
  params: BroadcastTxParams;
}

export interface BroadcastTxSyncRequest {
  method: Method.BroadcastTxSync;
  params: BroadcastTxParams;
}

export interface BroadcastTxCommitRequest {
  method: Method.BroadcastTxCommit;
  params: BroadcastTxParams;
}

export interface CommitRequest {
  method: Method.Commit;
  params?: CommitParams;
}

export interface ConsensusParamsRequest {
  method: Method.ConsensusParams;
  params?: ConsensusParamsParams;
}

export interface GenesisRequest {
  method: Method.Genesis;
}

export interface GenesisChunkedRequest {
  method: Method.GenesisChunked;
  params: GenesisChunkedParams;
}

export interface HeaderRequest {
  method: Method.Header;
  params?: HeaderParams;
}

export interface HeaderByHashRequest {
  method: Method.HeaderByHash;
  params: HeaderByHashParams;
}

export interface HealthRequest {
  method: Method.Health;
}

export interface NetInfoRequest {
  method: Method.NetInfo;
}

export interface NumUnconfirmedTxsRequest {
  method: Method.NumUnconfirmedTxs;
}

export interface StatusRequest {
  method: Method.Status;
}

export interface TxRequest {
  method: Method.Tx;
  params: TxParams;
}

export interface TxSearchRequest {
  method: Method.TxSearch;
  params: TxSearchParams;
}

export interface UnconfirmedTxsRequest {
  method: Method.UnconfirmedTxs;
  params?: UnconfirmedTxsParams;
}

export interface ValidatorsRequest {
  method: Method.Validators;
  params?: ValidatorsParams;
}

export type Request =
  | AbciInfoRequest
  | AbciQueryRequest
  | BlockRequest
  | BlockByHashRequest
  | BlockSearchRequest
  | BlockchainRequest
  | BlockResultsRequest
  | BroadcastTxAsyncRequest
  | BroadcastTxSyncRequest
  | BroadcastTxCommitRequest
  | CommitRequest
  | ConsensusParamsRequest
  | GenesisRequest
  | GenesisChunkedRequest
  | HeaderRequest
  | HeaderByHashRequest
  | HealthRequest
  | NetInfoRequest
  | NumUnconfirmedTxsRequest
  | StatusRequest
  | TxRequest
  | TxSearchRequest
  | UnconfirmedTxsRequest
  | ValidatorsRequest;