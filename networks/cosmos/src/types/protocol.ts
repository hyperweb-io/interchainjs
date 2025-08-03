// networks/cosmos/src/types/protocol.ts
export enum ProtocolVersion {
  TENDERMINT_34 = "tendermint-0.34",
  TENDERMINT_37 = "tendermint-0.37", 
  COMET_38 = "comet-0.38",
  COMET_100 = "comet-1.0"
}

export enum RpcMethod {
  // Basic info
  STATUS = "status",
  ABCI_INFO = "abci_info",
  HEALTH = "health",
  NET_INFO = "net_info",
  
  // Block queries
  BLOCK = "block",
  BLOCK_BY_HASH = "block_by_hash",
  BLOCK_RESULTS = "block_results",
  BLOCK_SEARCH = "block_search",
  BLOCKCHAIN = "blockchain",
  HEADER = "header",
  HEADER_BY_HASH = "header_by_hash",
  COMMIT = "commit",
  
  // Transaction queries
  TX = "tx",
  TX_SEARCH = "tx_search",
  CHECK_TX = "check_tx",
  UNCONFIRMED_TXS = "unconfirmed_txs",
  NUM_UNCONFIRMED_TXS = "num_unconfirmed_txs",
  BROADCAST_TX_SYNC = "broadcast_tx_sync",
  BROADCAST_TX_ASYNC = "broadcast_tx_async",
  BROADCAST_TX_COMMIT = "broadcast_tx_commit",
  
  // Chain queries
  VALIDATORS = "validators",
  CONSENSUS_PARAMS = "consensus_params",
  CONSENSUS_STATE = "consensus_state",
  DUMP_CONSENSUS_STATE = "dump_consensus_state",
  GENESIS = "genesis",
  GENESIS_CHUNKED = "genesis_chunked",
  
  // ABCI queries
  ABCI_QUERY = "abci_query",
  
  // Subscription
  SUBSCRIBE = "subscribe",
  UNSUBSCRIBE = "unsubscribe",
  UNSUBSCRIBE_ALL = "unsubscribe_all"
}

export enum ResponseType {
  // Basic info
  STATUS = "status",
  ABCI_INFO = "abci_info",
  HEALTH = "health",
  NET_INFO = "net_info",
  
  // Block queries
  BLOCK = "block",
  BLOCK_RESULTS = "block_results",
  BLOCK_SEARCH = "block_search",
  BLOCKCHAIN = "blockchain",
  HEADER = "header",
  COMMIT = "commit",
  
  // Transaction queries
  TX = "tx",
  TX_SEARCH = "tx_search",
  CHECK_TX = "check_tx",
  UNCONFIRMED_TXS = "unconfirmed_txs",
  NUM_UNCONFIRMED_TXS = "num_unconfirmed_txs",
  
  // Chain queries
  VALIDATORS = "validators",
  CONSENSUS_PARAMS = "consensus_params",
  CONSENSUS_STATE = "consensus_state",
  DUMP_CONSENSUS_STATE = "dump_consensus_state",
  GENESIS = "genesis",
  GENESIS_CHUNKED = "genesis_chunked",
  
  // ABCI queries
  ABCI_QUERY = "abci_query"
}

export enum EventType {
  NEW_BLOCK = "new_block",
  NEW_BLOCK_HEADER = "new_block_header",
  TX = "tx",
  VALIDATOR_SET_UPDATES = "validator_set_updates"
}

export interface ProtocolInfo {
  version: ProtocolVersion;
  supportedMethods: Set<RpcMethod>;
  capabilities: ProtocolCapabilities;
}

export interface ProtocolCapabilities {
  streaming: boolean;
  subscriptions: boolean;
  blockByHash: boolean;
  headerQueries: boolean;
  consensusQueries: boolean;
}