/**
 * Solana query client implementation
 */

import { IRpcClient } from '@interchainjs/types';
import { ISolanaQueryClient } from '../types/solana-client-interfaces';
import { SolanaRpcMethod, SolanaProtocolInfo } from '../types/protocol';
import { ISolanaProtocolAdapter } from '../adapters/base';
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
  GetTokenAccountsByOwnerRequest,
  GetTokenAccountBalanceRequest,
  GetTokenSupplyRequest,
  GetTokenLargestAccountsRequest,
  GetProgramAccountsRequest,
  GetSignaturesForAddressRequest,
  GetFeeForMessageRequest,
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
} from '../types/requests';
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
  TokenAccountsByOwnerResponse,
  TokenAccountBalanceResponse,
  TokenSupplyResponse,
  TokenLargestAccountsResponse,
  ProgramAccountsResponse,
  ProgramAccountsContextResponse,
  SignaturesForAddressResponse,
  FeeForMessageResponse,
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
} from '../types/responses';

export class SolanaQueryClient implements ISolanaQueryClient {
  constructor(
    private rpcClient: IRpcClient,
    private protocolAdapter: ISolanaProtocolAdapter
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

  getProtocolInfo(): SolanaProtocolInfo {
    return this.protocolAdapter.getProtocolInfo();
  }

  // Network & Cluster Methods
  async getHealth(request?: GetHealthRequest): Promise<string> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetHealth(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_HEALTH, encodedParams);
    return this.protocolAdapter.decodeHealth(result);
  }

  async getVersion(request?: GetVersionRequest): Promise<VersionResponse> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetVersion(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_VERSION, encodedParams);
    return this.protocolAdapter.decodeVersion(result);
  }

  async getSupply(request?: GetSupplyRequest): Promise<SupplyResponse> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetSupply(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_SUPPLY, encodedParams);
    return this.protocolAdapter.decodeSupply(result);
  }

  async getLargestAccounts(request?: GetLargestAccountsRequest): Promise<LargestAccountsResponse> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetLargestAccounts(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_LARGEST_ACCOUNTS, encodedParams);
    return this.protocolAdapter.decodeLargestAccounts(result);
  }

  async getSlot(request?: GetSlotRequest): Promise<SlotResponse> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetSlot(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_SLOT, encodedParams);
    return this.protocolAdapter.decodeSlot(result);
  }

  async getEpochInfo(request?: GetEpochInfoRequest): Promise<EpochInfoResponse> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetEpochInfo(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_EPOCH_INFO, encodedParams);
    return this.protocolAdapter.decodeEpochInfo(result);
  }

  async getMinimumBalanceForRentExemption(
    request: GetMinimumBalanceForRentExemptionRequest
  ): Promise<MinimumBalanceForRentExemptionResponse> {
    const encodedParams = this.protocolAdapter.encodeGetMinimumBalanceForRentExemption(request);
    const result = await this.rpcClient.call(
      SolanaRpcMethod.GET_MINIMUM_BALANCE_FOR_RENT_EXEMPTION,
      encodedParams
    );
    return this.protocolAdapter.decodeMinimumBalanceForRentExemption(result);
  }

  async getClusterNodes(request?: GetClusterNodesRequest): Promise<ClusterNodesResponse> {
    const encodedParams = this.protocolAdapter.encodeGetClusterNodes(request || {});
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_CLUSTER_NODES, encodedParams);
    return this.protocolAdapter.decodeClusterNodes(result);
  }

  async getVoteAccounts(request?: GetVoteAccountsRequest): Promise<VoteAccountsResponse> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetVoteAccounts(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_VOTE_ACCOUNTS, encodedParams);
    return this.protocolAdapter.decodeVoteAccounts(result);
  }


  async getBlockHeight(request?: GetBlockHeightRequest): Promise<BlockHeightResponse> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetBlockHeight(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BLOCK_HEIGHT, encodedParams);
    return this.protocolAdapter.decodeBlockHeight(result);
  }

  // Account Methods
  async getAccountInfo(request: GetAccountInfoRequest): Promise<AccountInfoRpcResponse> {
    const encodedParams = this.protocolAdapter.encodeGetAccountInfo(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_ACCOUNT_INFO, encodedParams);
    return this.protocolAdapter.decodeAccountInfo(result);
  }

  async getBalance(request: GetBalanceRequest): Promise<BalanceRpcResponse> {
    const encodedParams = this.protocolAdapter.encodeGetBalance(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BALANCE, encodedParams);
    return this.protocolAdapter.decodeBalance(result);
  }

  async getMultipleAccounts(request: GetMultipleAccountsRequest): Promise<MultipleAccountsResponse> {
    const encodedParams = this.protocolAdapter.encodeGetMultipleAccounts(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_MULTIPLE_ACCOUNTS, encodedParams);
    return this.protocolAdapter.decodeMultipleAccounts(result);
  }


  async getBlock(request: GetBlockRequest): Promise<BlockResponse> {
    const encodedParams = this.protocolAdapter.encodeGetBlock(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BLOCK, encodedParams);
    return this.protocolAdapter.decodeBlock(result);
  }

  async getBlocks(request: GetBlocksRequest): Promise<BlocksResponse> {
    const encodedParams = this.protocolAdapter.encodeGetBlocks(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BLOCKS, encodedParams);
    return this.protocolAdapter.decodeBlocks(result);
  }

  async getBlockTime(request: GetBlockTimeRequest): Promise<BlockTimeResponse> {
    const encodedParams = this.protocolAdapter.encodeGetBlockTime(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BLOCK_TIME, encodedParams);
    return this.protocolAdapter.decodeBlockTime(result);
  }


  // Network Performance & Economics
  async getInflationGovernor(_request?: GetInflationGovernorRequest): Promise<InflationGovernorResponse> {
    const encodedParams = this.protocolAdapter.encodeGetInflationGovernor({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_INFLATION_GOVERNOR, encodedParams);
    return this.protocolAdapter.decodeInflationGovernor(result);
  }

  async getInflationRate(_request?: GetInflationRateRequest): Promise<InflationRateResponse> {
    const encodedParams = this.protocolAdapter.encodeGetInflationRate({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_INFLATION_RATE, encodedParams);
    return this.protocolAdapter.decodeInflationRate(result);
  }

  async getInflationReward(request: GetInflationRewardRequest): Promise<InflationRewardResponse> {
    const encodedParams = this.protocolAdapter.encodeGetInflationReward(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_INFLATION_REWARD, encodedParams);
    return this.protocolAdapter.decodeInflationReward(result);
  }

  async getRecentPerformanceSamples(request?: GetRecentPerformanceSamplesRequest): Promise<RecentPerformanceSamplesResponse> {
    const encodedParams = this.protocolAdapter.encodeGetRecentPerformanceSamples(request || {});
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_RECENT_PERFORMANCE_SAMPLES, encodedParams);
    return this.protocolAdapter.decodeRecentPerformanceSamples(result);
  }

  async getStakeMinimumDelegation(request?: GetStakeMinimumDelegationRequest): Promise<StakeMinimumDelegationResponse> {
    const encodedParams = this.protocolAdapter.encodeGetStakeMinimumDelegation(request || {});
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_STAKE_MINIMUM_DELEGATION, encodedParams);
    return this.protocolAdapter.decodeStakeMinimumDelegation(result);
  }

  async getSlotLeader(request?: GetSlotLeaderRequest): Promise<SlotLeaderResponse> {
    const encodedParams = this.protocolAdapter.encodeGetSlotLeader(request || {});
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_SLOT_LEADER, encodedParams);
    return this.protocolAdapter.decodeSlotLeader(result);
  }

  async getSlotLeaders(request: GetSlotLeadersRequest): Promise<SlotLeadersResponse> {
    const encodedParams = this.protocolAdapter.encodeGetSlotLeaders(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_SLOT_LEADERS, encodedParams);
    return this.protocolAdapter.decodeSlotLeaders(result);
  }

  // Batch 4 - Network & System
  async getEpochSchedule(_request?: GetEpochScheduleRequest): Promise<EpochScheduleResponse> {
    const encodedParams = this.protocolAdapter.encodeGetEpochSchedule({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_EPOCH_SCHEDULE, encodedParams);
    return this.protocolAdapter.decodeEpochSchedule(result);
  }

  async getGenesisHash(_request?: GetGenesisHashRequest): Promise<string> {
    const encodedParams = this.protocolAdapter.encodeGetGenesisHash({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_GENESIS_HASH, encodedParams);
    return this.protocolAdapter.decodeGenesisHash(result);
  }

  async getIdentity(_request?: GetIdentityRequest): Promise<string> {
    const encodedParams = this.protocolAdapter.encodeGetIdentity({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_IDENTITY, encodedParams);
    return this.protocolAdapter.decodeIdentity(result);
  }

  async getLeaderSchedule(request?: GetLeaderScheduleRequest): Promise<LeaderScheduleResponse> {
    const encodedParams = this.protocolAdapter.encodeGetLeaderSchedule(request || {});
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_LEADER_SCHEDULE, encodedParams);
    return this.protocolAdapter.decodeLeaderSchedule(result);
  }

  async getFirstAvailableBlock(_request?: GetFirstAvailableBlockRequest): Promise<number> {
    const encodedParams = this.protocolAdapter.encodeGetFirstAvailableBlock({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_FIRST_AVAILABLE_BLOCK, encodedParams);
    return this.protocolAdapter.decodeFirstAvailableBlock(result);
  }

  async getMaxRetransmitSlot(_request?: GetMaxRetransmitSlotRequest): Promise<number | null> {
    const encodedParams = this.protocolAdapter.encodeGetMaxRetransmitSlot({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_MAX_RETRANSMIT_SLOT, encodedParams);
    return this.protocolAdapter.decodeMaxRetransmitSlot(result);
  }

  async getMaxShredInsertSlot(_request?: GetMaxShredInsertSlotRequest): Promise<number | null> {
    const encodedParams = this.protocolAdapter.encodeGetMaxShredInsertSlot({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_MAX_SHRED_INSERT_SLOT, encodedParams);
    return this.protocolAdapter.decodeMaxShredInsertSlot(result);
  }

  // Batch 5 - Advanced Block & Transaction
  async getBlockCommitment(request: GetBlockCommitmentRequest): Promise<BlockCommitmentResponse> {
    const encodedParams = this.protocolAdapter.encodeGetBlockCommitment(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BLOCK_COMMITMENT, encodedParams);
    return this.protocolAdapter.decodeBlockCommitment(result);
  }

  async getBlockProduction(request?: GetBlockProductionRequest): Promise<BlockProductionResponse> {
    const encodedParams = this.protocolAdapter.encodeGetBlockProduction(request || {});
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BLOCK_PRODUCTION, encodedParams);
    return this.protocolAdapter.decodeBlockProduction(result);
  }

  async getBlocksWithLimit(request: GetBlocksWithLimitRequest): Promise<BlocksResponse> {
    const encodedParams = this.protocolAdapter.encodeGetBlocksWithLimit(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_BLOCKS_WITH_LIMIT, encodedParams);
    return this.protocolAdapter.decodeBlocksWithLimit(result);
  }

  async isBlockhashValid(request: IsBlockhashValidRequest): Promise<boolean> {
    const encodedParams = this.protocolAdapter.encodeIsBlockhashValid(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.IS_BLOCKHASH_VALID, encodedParams);
    return this.protocolAdapter.decodeIsBlockhashValid(result);
  }

  async getHighestSnapshotSlot(_request?: GetHighestSnapshotSlotRequest): Promise<HighestSnapshotSlotResponse> {
    const encodedParams = this.protocolAdapter.encodeGetHighestSnapshotSlot({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_HIGHEST_SNAPSHOT_SLOT, encodedParams);
    return this.protocolAdapter.decodeHighestSnapshotSlot(result);
  }

  async minimumLedgerSlot(_request?: MinimumLedgerSlotRequest): Promise<number> {
    const encodedParams = this.protocolAdapter.encodeMinimumLedgerSlot({} as any);
    const result = await this.rpcClient.call(SolanaRpcMethod.MINIMUM_LEDGER_SLOT, encodedParams);
    return this.protocolAdapter.decodeMinimumLedgerSlot(result);
  }

  async getRecentPrioritizationFees(request?: GetRecentPrioritizationFeesRequest): Promise<RecentPrioritizationFeesResponse> {
    const encodedParams = this.protocolAdapter.encodeGetRecentPrioritizationFees(request || {});
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_RECENT_PRIORITIZATION_FEES, encodedParams);
    return this.protocolAdapter.decodeRecentPrioritizationFees(result);
  }

  // Block Methods
  async getLatestBlockhash(request?: GetLatestBlockhashRequest): Promise<LatestBlockhashRpcResponse> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetLatestBlockhash(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_LATEST_BLOCKHASH, encodedParams);
    return this.protocolAdapter.decodeLatestBlockhash(result);
  }

  // Transaction Methods
  async getTransactionCount(request?: GetTransactionCountRequest): Promise<TransactionCountResponse> {
    const requestObj = request || {};
    const encodedParams = this.protocolAdapter.encodeGetTransactionCount(requestObj);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_TRANSACTION_COUNT, encodedParams);
    return this.protocolAdapter.decodeTransactionCount(result);
  }

  async getSignatureStatuses(request: GetSignatureStatusesRequest): Promise<SignatureStatusesResponse> {
    const encodedParams = this.protocolAdapter.encodeGetSignatureStatuses(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_SIGNATURE_STATUSES, encodedParams);
    return this.protocolAdapter.decodeSignatureStatuses(result);
  }

  async getTransaction(request: GetTransactionRequest): Promise<TransactionResponse> {
    const encodedParams = this.protocolAdapter.encodeGetTransaction(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_TRANSACTION, encodedParams);
    return this.protocolAdapter.decodeTransaction(result);
  }

  async requestAirdrop(request: RequestAirdropRequest): Promise<AirdropResponse> {
    const encodedParams = this.protocolAdapter.encodeRequestAirdrop(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.REQUEST_AIRDROP, encodedParams);
    return this.protocolAdapter.decodeAirdrop(result);
  }

  async getSignaturesForAddress(request: GetSignaturesForAddressRequest): Promise<SignaturesForAddressResponse> {
    const encodedParams = this.protocolAdapter.encodeGetSignaturesForAddress(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_SIGNATURES_FOR_ADDRESS, encodedParams);
    return this.protocolAdapter.decodeSignaturesForAddress(result);
  }

  async getFeeForMessage(request: GetFeeForMessageRequest): Promise<FeeForMessageResponse> {
    const encodedParams = this.protocolAdapter.encodeGetFeeForMessage(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_FEE_FOR_MESSAGE, encodedParams);
    return this.protocolAdapter.decodeFeeForMessage(result);
  }

  // Token Methods
  async getTokenAccountsByOwner(request: GetTokenAccountsByOwnerRequest): Promise<TokenAccountsByOwnerResponse> {
    const encodedParams = this.protocolAdapter.encodeGetTokenAccountsByOwner(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_TOKEN_ACCOUNTS_BY_OWNER, encodedParams);
    return this.protocolAdapter.decodeTokenAccountsByOwner(result);
  }

  async getTokenAccountBalance(request: GetTokenAccountBalanceRequest): Promise<TokenAccountBalanceResponse> {
    const encodedParams = this.protocolAdapter.encodeGetTokenAccountBalance(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_TOKEN_ACCOUNT_BALANCE, encodedParams);
    return this.protocolAdapter.decodeTokenAccountBalance(result);
  }

  async getTokenSupply(request: GetTokenSupplyRequest): Promise<TokenSupplyResponse> {
    const encodedParams = this.protocolAdapter.encodeGetTokenSupply(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_TOKEN_SUPPLY, encodedParams);
    return this.protocolAdapter.decodeTokenSupply(result);
  }

  async getTokenLargestAccounts(request: GetTokenLargestAccountsRequest): Promise<TokenLargestAccountsResponse> {
    const encodedParams = this.protocolAdapter.encodeGetTokenLargestAccounts(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_TOKEN_LARGEST_ACCOUNTS, encodedParams);
    return this.protocolAdapter.decodeTokenLargestAccounts(result);
  }

  async getProgramAccounts(request: GetProgramAccountsRequest): Promise<ProgramAccountsResponse | ProgramAccountsContextResponse> {
    const encodedParams = this.protocolAdapter.encodeGetProgramAccounts(request);
    const result = await this.rpcClient.call(SolanaRpcMethod.GET_PROGRAM_ACCOUNTS, encodedParams);
    const withContext = request.options?.withContext || false;
    return this.protocolAdapter.decodeProgramAccounts(result, withContext);
  }
}
