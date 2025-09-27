/**
 * Solana client interfaces
 */

import { IQueryClient } from '@interchainjs/types';
import {
  GetHealthRequest,
  GetVersionRequest,
  GetSupplyRequest,
  GetLargestAccountsRequest,
  GetSlotRequest,
  GetBlockHeightRequest,
  GetEpochInfoRequest,
  GetMinimumBalanceForRentExemptionRequest,
  GetClusterNodesRequest,
  GetVoteAccountsRequest,
  GetAccountInfoRequest,
  GetBalanceRequest,
  GetLatestBlockhashRequest,
  GetMultipleAccountsRequest,
  GetTransactionCountRequest,
  GetSignatureStatusesRequest,
  GetTransactionRequest,
  RequestAirdropRequest,
  GetSignaturesForAddressRequest,
  GetFeeForMessageRequest,
  GetTokenAccountsByOwnerRequest,
  GetTokenAccountBalanceRequest,
  GetTokenSupplyRequest,
  GetTokenLargestAccountsRequest,
  GetProgramAccountsRequest,
  GetBlockRequest,
  GetBlocksRequest,
  GetBlockTimeRequest,
  GetSlotLeaderRequest,
  GetSlotLeadersRequest,
  // Batch 3 requests
  GetInflationGovernorRequest,
  GetInflationRateRequest,
  GetInflationRewardRequest,
  GetRecentPerformanceSamplesRequest,
  GetStakeMinimumDelegationRequest,
  // Batch 4 - Network & System
  GetEpochScheduleRequest,
  GetGenesisHashRequest,
  GetIdentityRequest,
  GetLeaderScheduleRequest,
  GetFirstAvailableBlockRequest,
  GetMaxRetransmitSlotRequest,
  GetMaxShredInsertSlotRequest,
  GetHighestSnapshotSlotRequest,
  MinimumLedgerSlotRequest,
  // Batch 5 - Advanced Block & Tx
  GetBlockCommitmentRequest,
  GetBlockProductionRequest,
  GetBlocksWithLimitRequest,
  IsBlockhashValidRequest,
  GetRecentPrioritizationFeesRequest
} from './requests';
import {
  VersionResponse,
  SupplyResponse,
  LargestAccountsResponse,
  SlotResponse,
  BlockHeightResponse,
  EpochInfoResponse,
  MinimumBalanceForRentExemptionResponse,
  ClusterNodesResponse,
  VoteAccountsResponse,
  AccountInfoRpcResponse,
  BalanceRpcResponse,
  LatestBlockhashRpcResponse,
  MultipleAccountsResponse,
  TransactionCountResponse,
  SignatureStatusesResponse,
  TransactionResponse,
  AirdropResponse,
  SignaturesForAddressResponse,
  FeeForMessageResponse,
  TokenAccountsByOwnerResponse,
  TokenAccountBalanceResponse,
  TokenSupplyResponse,
  TokenLargestAccountsResponse,
  ProgramAccountsResponse,
  ProgramAccountsContextResponse,
  BlockResponse,
  BlocksResponse,
  BlockTimeResponse,
  SlotLeaderResponse,
  SlotLeadersResponse,
  // Batch 3 responses
  InflationGovernorResponse,
  InflationRateResponse,
  InflationRewardResponse,
  RecentPerformanceSamplesResponse,
  StakeMinimumDelegationResponse,
  // Batch 4/5 responses
  EpochScheduleResponse,
  LeaderScheduleResponse,
  HighestSnapshotSlotResponse,
  BlockCommitmentResponse,
  BlockProductionResponse,
  RecentPrioritizationFeesResponse
} from './responses';
import { SolanaProtocolInfo } from './protocol';

export interface ISolanaQueryClient extends IQueryClient {
  // Protocol info
  getProtocolInfo(): SolanaProtocolInfo;

  // Network & Cluster Methods
  getHealth(request?: GetHealthRequest): Promise<string>;
  getVersion(request?: GetVersionRequest): Promise<VersionResponse>;
  getSupply(request?: GetSupplyRequest): Promise<SupplyResponse>;
  getLargestAccounts(request?: GetLargestAccountsRequest): Promise<LargestAccountsResponse>;
  getSlot(request?: GetSlotRequest): Promise<SlotResponse>;
  getBlockHeight(request?: GetBlockHeightRequest): Promise<BlockHeightResponse>;
  getEpochInfo(request?: GetEpochInfoRequest): Promise<EpochInfoResponse>;
  getMinimumBalanceForRentExemption(request: GetMinimumBalanceForRentExemptionRequest): Promise<MinimumBalanceForRentExemptionResponse>;
  getClusterNodes(request?: GetClusterNodesRequest): Promise<ClusterNodesResponse>;
  getVoteAccounts(request?: GetVoteAccountsRequest): Promise<VoteAccountsResponse>;


  // Network Performance & Economics
  getInflationGovernor(request?: GetInflationGovernorRequest): Promise<InflationGovernorResponse>;
  getInflationRate(request?: GetInflationRateRequest): Promise<InflationRateResponse>;
  getInflationReward(request: GetInflationRewardRequest): Promise<InflationRewardResponse>;
  getRecentPerformanceSamples(request?: GetRecentPerformanceSamplesRequest): Promise<RecentPerformanceSamplesResponse>;
  getStakeMinimumDelegation(request?: GetStakeMinimumDelegationRequest): Promise<StakeMinimumDelegationResponse>;

  // Batch 4 - Network & System
  getEpochSchedule(request?: GetEpochScheduleRequest): Promise<EpochScheduleResponse>;
  getGenesisHash(request?: GetGenesisHashRequest): Promise<string>;
  getIdentity(request?: GetIdentityRequest): Promise<string>;
  getLeaderSchedule(request?: GetLeaderScheduleRequest): Promise<LeaderScheduleResponse>;
  getFirstAvailableBlock(request?: GetFirstAvailableBlockRequest): Promise<number>;
  getMaxRetransmitSlot(request?: GetMaxRetransmitSlotRequest): Promise<number | null>;
  getMaxShredInsertSlot(request?: GetMaxShredInsertSlotRequest): Promise<number | null>;
  getHighestSnapshotSlot(request?: GetHighestSnapshotSlotRequest): Promise<HighestSnapshotSlotResponse>;
  minimumLedgerSlot(request?: MinimumLedgerSlotRequest): Promise<number>;

  // Batch 5 - Advanced Block & Transaction
  getBlockCommitment(request: GetBlockCommitmentRequest): Promise<BlockCommitmentResponse>;
  getBlockProduction(request?: GetBlockProductionRequest): Promise<BlockProductionResponse>;
  getBlocksWithLimit(request: GetBlocksWithLimitRequest): Promise<BlocksResponse>;
  isBlockhashValid(request: IsBlockhashValidRequest): Promise<boolean>;
  getRecentPrioritizationFees(request?: GetRecentPrioritizationFeesRequest): Promise<RecentPrioritizationFeesResponse>;

  // Account Methods
  getAccountInfo(request: GetAccountInfoRequest): Promise<AccountInfoRpcResponse>;
  getBalance(request: GetBalanceRequest): Promise<BalanceRpcResponse>;
  getMultipleAccounts(request: GetMultipleAccountsRequest): Promise<MultipleAccountsResponse>;

  // Block Methods
  getLatestBlockhash(request?: GetLatestBlockhashRequest): Promise<LatestBlockhashRpcResponse>;
  getBlock(request: GetBlockRequest): Promise<BlockResponse>;
  getBlocks(request: GetBlocksRequest): Promise<BlocksResponse>;
  getBlockTime(request: GetBlockTimeRequest): Promise<BlockTimeResponse>;
  getSlotLeader(request?: GetSlotLeaderRequest): Promise<SlotLeaderResponse>;
  getSlotLeaders(request: GetSlotLeadersRequest): Promise<SlotLeadersResponse>;

  // Transaction Methods
  getTransactionCount(request?: GetTransactionCountRequest): Promise<TransactionCountResponse>;
  getSignatureStatuses(request: GetSignatureStatusesRequest): Promise<SignatureStatusesResponse>;
  getTransaction(request: GetTransactionRequest): Promise<TransactionResponse>;
  requestAirdrop(request: RequestAirdropRequest): Promise<AirdropResponse>;
  getSignaturesForAddress(request: GetSignaturesForAddressRequest): Promise<SignaturesForAddressResponse>;
  getFeeForMessage(request: GetFeeForMessageRequest): Promise<FeeForMessageResponse>;

  // Token Methods
  getTokenAccountsByOwner(request: GetTokenAccountsByOwnerRequest): Promise<TokenAccountsByOwnerResponse>;
  getTokenAccountBalance(request: GetTokenAccountBalanceRequest): Promise<TokenAccountBalanceResponse>;
  getTokenSupply(request: GetTokenSupplyRequest): Promise<TokenSupplyResponse>;
  getTokenLargestAccounts(request: GetTokenLargestAccountsRequest): Promise<TokenLargestAccountsResponse>;

  // Program Methods
  getProgramAccounts(request: GetProgramAccountsRequest): Promise<ProgramAccountsResponse | ProgramAccountsContextResponse>;
}
