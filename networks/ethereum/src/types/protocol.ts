// networks/ethereum/src/types/protocol.ts

/**
 * Ethereum JSON-RPC method constants
 * Based on Ethereum JSON-RPC specification
 */
export enum EthereumRpcMethod {
  // Basic Info Methods
  ETH_CHAIN_ID = 'eth_chainId',
  NET_VERSION = 'net_version',
  ETH_PROTOCOL_VERSION = 'eth_protocolVersion',
  ETH_SYNCING = 'eth_syncing',
  
  // Block Methods
  ETH_GET_BLOCK_BY_NUMBER = 'eth_getBlockByNumber',
  ETH_GET_BLOCK_BY_HASH = 'eth_getBlockByHash',
  ETH_BLOCK_NUMBER = 'eth_blockNumber',
  ETH_GET_BLOCK_TRANSACTION_COUNT_BY_NUMBER = 'eth_getBlockTransactionCountByNumber',
  ETH_GET_BLOCK_TRANSACTION_COUNT_BY_HASH = 'eth_getBlockTransactionCountByHash',
  
  // Transaction Methods
  ETH_GET_TRANSACTION_BY_HASH = 'eth_getTransactionByHash',
  ETH_GET_TRANSACTION_RECEIPT = 'eth_getTransactionReceipt',
  ETH_GET_TRANSACTION_COUNT = 'eth_getTransactionCount',
  ETH_SEND_RAW_TRANSACTION = 'eth_sendRawTransaction',
  ETH_ESTIMATE_GAS = 'eth_estimateGas',
  
  // Account/Balance Methods
  ETH_GET_BALANCE = 'eth_getBalance',
  ETH_GET_CODE = 'eth_getCode',
  ETH_GET_STORAGE_AT = 'eth_getStorageAt',
  
  // Gas/Fee Methods
  ETH_GAS_PRICE = 'eth_gasPrice',
  ETH_MAX_PRIORITY_FEE_PER_GAS = 'eth_maxPriorityFeePerGas',
  ETH_FEE_HISTORY = 'eth_feeHistory',
  
  // Filter/Log Methods
  ETH_GET_LOGS = 'eth_getLogs',
  ETH_NEW_FILTER = 'eth_newFilter',
  ETH_GET_FILTER_LOGS = 'eth_getFilterLogs',
  ETH_UNINSTALL_FILTER = 'eth_uninstallFilter',
  ETH_NEW_BLOCK_FILTER = 'eth_newBlockFilter',
  ETH_NEW_PENDING_TRANSACTION_FILTER = 'eth_newPendingTransactionFilter',
  ETH_GET_FILTER_CHANGES = 'eth_getFilterChanges'
}

/**
 * Protocol information for Ethereum adapter
 */
export interface ProtocolInfo {
  version: string;
  supportedMethods: string[];
  capabilities: string[];
}

/**
 * Ethereum protocol capabilities
 */
export enum EthereumCapability {
  BASIC_QUERIES = 'basic_queries',
  BLOCK_QUERIES = 'block_queries',
  TRANSACTION_QUERIES = 'transaction_queries',
  ACCOUNT_QUERIES = 'account_queries',
  GAS_ESTIMATION = 'gas_estimation',
  LOG_FILTERING = 'log_filtering',
  EIP1559_FEES = 'eip1559_fees',
  TRANSACTION_BROADCASTING = 'transaction_broadcasting'
}

/**
 * Block tag types for Ethereum queries
 */
export type BlockTag = 'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | string | number;

/**
 * Default protocol information for Ethereum
 */
export const DEFAULT_ETHEREUM_PROTOCOL_INFO: ProtocolInfo = {
  version: '1.0.0',
  supportedMethods: Object.values(EthereumRpcMethod),
  capabilities: Object.values(EthereumCapability)
};
