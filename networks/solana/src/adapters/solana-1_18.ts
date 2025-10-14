/**
 * Solana 1.18 adapter implementation
 */

import { BaseSolanaAdapter } from './base';
import { SolanaRpcMethod, SolanaProtocolVersion, SolanaProtocolCapabilities } from '../types/protocol';

export class Solana118Adapter extends BaseSolanaAdapter {
  constructor() {
    super(SolanaProtocolVersion.SOLANA_1_18);
  }

  getSupportedMethods(): Set<SolanaRpcMethod> {
    return new Set([
      // Network & Cluster Methods
      SolanaRpcMethod.GET_HEALTH,
      SolanaRpcMethod.GET_VERSION,
      SolanaRpcMethod.GET_CLUSTER_NODES,
      SolanaRpcMethod.GET_VOTE_ACCOUNTS,
      SolanaRpcMethod.GET_EPOCH_INFO,
      SolanaRpcMethod.GET_EPOCH_SCHEDULE,

      // Account & Balance Methods
      SolanaRpcMethod.GET_ACCOUNT_INFO,
      SolanaRpcMethod.GET_BALANCE,
      SolanaRpcMethod.GET_MULTIPLE_ACCOUNTS,
      SolanaRpcMethod.GET_PROGRAM_ACCOUNTS,
      SolanaRpcMethod.GET_LARGEST_ACCOUNTS,
      SolanaRpcMethod.GET_SUPPLY,

      // Token Account Methods
      SolanaRpcMethod.GET_TOKEN_ACCOUNTS_BY_OWNER,
      SolanaRpcMethod.GET_TOKEN_ACCOUNTS_BY_DELEGATE,
      SolanaRpcMethod.GET_TOKEN_ACCOUNT_BALANCE,
      SolanaRpcMethod.GET_TOKEN_SUPPLY,
      SolanaRpcMethod.GET_TOKEN_LARGEST_ACCOUNTS,

      // Transaction Methods
      SolanaRpcMethod.GET_TRANSACTION,
      SolanaRpcMethod.GET_SIGNATURES_FOR_ADDRESS,
      SolanaRpcMethod.GET_SIGNATURE_STATUSES,
      SolanaRpcMethod.GET_TRANSACTION_COUNT,
      SolanaRpcMethod.REQUEST_AIRDROP,
      SolanaRpcMethod.SEND_TRANSACTION,
      SolanaRpcMethod.SIMULATE_TRANSACTION,

      // Fee Methods
      SolanaRpcMethod.GET_RECENT_PRIORITIZATION_FEES,
      SolanaRpcMethod.GET_FEE_FOR_MESSAGE,

      // Block & Slot Methods
      SolanaRpcMethod.GET_BLOCK,
      SolanaRpcMethod.GET_BLOCK_HEIGHT,
      SolanaRpcMethod.GET_SLOT,
      SolanaRpcMethod.GET_BLOCKS,
      SolanaRpcMethod.GET_BLOCKS_WITH_LIMIT,
      SolanaRpcMethod.GET_BLOCK_TIME,
      SolanaRpcMethod.GET_BLOCK_COMMITMENT,
      SolanaRpcMethod.GET_BLOCK_PRODUCTION,

      // Blockhash & Slot Information
      SolanaRpcMethod.GET_LATEST_BLOCKHASH,
      SolanaRpcMethod.IS_BLOCKHASH_VALID,
      SolanaRpcMethod.GET_SLOT_LEADER,
      SolanaRpcMethod.GET_SLOT_LEADERS,
      SolanaRpcMethod.GET_LEADER_SCHEDULE,

      // Network Performance & Economics
      SolanaRpcMethod.GET_RECENT_PERFORMANCE_SAMPLES,
      SolanaRpcMethod.GET_INFLATION_GOVERNOR,
      SolanaRpcMethod.GET_INFLATION_RATE,
      SolanaRpcMethod.GET_INFLATION_REWARD,
      SolanaRpcMethod.GET_STAKE_MINIMUM_DELEGATION,

      // Utility & System Methods
      SolanaRpcMethod.GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION,
      SolanaRpcMethod.GET_GENESIS_HASH,
      SolanaRpcMethod.GET_IDENTITY,
      SolanaRpcMethod.GET_FIRST_AVAILABLE_BLOCK,
      SolanaRpcMethod.GET_HIGHEST_SNAPSHOT_SLOT,
      SolanaRpcMethod.MINIMUM_LEDGER_SLOT,
      SolanaRpcMethod.GET_MAX_RETRANSMIT_SLOT,
      SolanaRpcMethod.GET_MAX_SHRED_INSERT_SLOT
    ]);
  }

  getCapabilities(): SolanaProtocolCapabilities {
    return {
      streaming: true,
      subscriptions: true,
      compression: true,
      jsonParsed: true
    };
  }
}
