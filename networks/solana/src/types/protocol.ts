/**
 * Solana protocol definitions and enums
 */

export enum SolanaRpcMethod {
  // Network & Cluster Methods
  GET_HEALTH = "getHealth",
  GET_VERSION = "getVersion",
  GET_CLUSTER_NODES = "getClusterNodes",
  GET_VOTE_ACCOUNTS = "getVoteAccounts",
  GET_EPOCH_INFO = "getEpochInfo",
  GET_EPOCH_SCHEDULE = "getEpochSchedule",

  // Account & Balance Methods
  GET_ACCOUNT_INFO = "getAccountInfo",
  GET_BALANCE = "getBalance",
  GET_MULTIPLE_ACCOUNTS = "getMultipleAccounts",
  GET_PROGRAM_ACCOUNTS = "getProgramAccounts",
  GET_LARGEST_ACCOUNTS = "getLargestAccounts",
  GET_SUPPLY = "getSupply",

  // Token Account Methods
  GET_TOKEN_ACCOUNTS_BY_OWNER = "getTokenAccountsByOwner",
  GET_TOKEN_ACCOUNTS_BY_DELEGATE = "getTokenAccountsByDelegate",
  GET_TOKEN_ACCOUNT_BALANCE = "getTokenAccountBalance",
  GET_TOKEN_SUPPLY = "getTokenSupply",
  GET_TOKEN_LARGEST_ACCOUNTS = "getTokenLargestAccounts",

  // Transaction Methods
  GET_TRANSACTION = "getTransaction",
  GET_SIGNATURES_FOR_ADDRESS = "getSignaturesForAddress",
  GET_SIGNATURE_STATUSES = "getSignatureStatuses",
  GET_TRANSACTION_COUNT = "getTransactionCount",
  REQUEST_AIRDROP = "requestAirdrop",
  SEND_TRANSACTION = "sendTransaction",
  SIMULATE_TRANSACTION = "simulateTransaction",

  // Fee Methods
  GET_RECENT_PRIORITIZATION_FEES = "getRecentPrioritizationFees",
  GET_FEE_FOR_MESSAGE = "getFeeForMessage",

  // Block & Slot Methods
  GET_BLOCK = "getBlock",
  GET_BLOCK_HEIGHT = "getBlockHeight",
  GET_SLOT = "getSlot",
  GET_BLOCKS = "getBlocks",
  GET_BLOCKS_WITH_LIMIT = "getBlocksWithLimit",
  GET_BLOCK_TIME = "getBlockTime",
  GET_BLOCK_COMMITMENT = "getBlockCommitment",
  GET_BLOCK_PRODUCTION = "getBlockProduction",

  // Blockhash & Slot Information
  GET_LATEST_BLOCKHASH = "getLatestBlockhash",
  IS_BLOCKHASH_VALID = "isBlockhashValid",
  GET_SLOT_LEADER = "getSlotLeader",
  GET_SLOT_LEADERS = "getSlotLeaders",
  GET_LEADER_SCHEDULE = "getLeaderSchedule",

  // Network Performance & Economics
  GET_RECENT_PERFORMANCE_SAMPLES = "getRecentPerformanceSamples",
  GET_INFLATION_GOVERNOR = "getInflationGovernor",
  GET_INFLATION_RATE = "getInflationRate",
  GET_INFLATION_REWARD = "getInflationReward",
  GET_STAKE_MINIMUM_DELEGATION = "getStakeMinimumDelegation",

  // Utility & System Methods
  GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION = "getMinimumBalanceForRentExemption",
  GET_GENESIS_HASH = "getGenesisHash",
  GET_IDENTITY = "getIdentity",
  GET_FIRST_AVAILABLE_BLOCK = "getFirstAvailableBlock",
  GET_HIGHEST_SNAPSHOT_SLOT = "getHighestSnapshotSlot",
  MINIMUM_LEDGER_SLOT = "minimumLedgerSlot",
  GET_MAX_RETRANSMIT_SLOT = "getMaxRetransmitSlot",
  GET_MAX_SHRED_INSERT_SLOT = "getMaxShredInsertSlot"
}

export enum SolanaProtocolVersion {
  SOLANA_1_18 = "1.18"
}

export interface SolanaProtocolInfo {
  version: SolanaProtocolVersion;
  supportedMethods: Set<SolanaRpcMethod>;
  capabilities: SolanaProtocolCapabilities;
}

export interface SolanaProtocolCapabilities {
  streaming: boolean;
  subscriptions: boolean;
  compression: boolean;
  jsonParsed: boolean;
}
