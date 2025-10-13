/**
 * Base Solana adapter implementation
 */

import { snakeCaseRecursive } from '@interchainjs/utils';
import {
  SolanaRpcMethod,
  SolanaProtocolVersion,
  SolanaProtocolInfo,
  SolanaProtocolCapabilities
} from '../types/protocol';
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
  EncodedGetAccountInfoRequest,
  EncodedGetBalanceRequest,
  EncodedGetLatestBlockhashRequest,
  EncodedGetMultipleAccountsRequest,
  EncodedGetSupplyRequest,
  EncodedGetLargestAccountsRequest,
  EncodedGetSlotRequest,
  EncodedGetBlockHeightRequest,
  EncodedGetEpochInfoRequest,
  EncodedGetMinimumBalanceForRentExemptionRequest,
  EncodedGetClusterNodesRequest,
  EncodedGetVoteAccountsRequest,
  EncodedGetTransactionCountRequest,
  EncodedGetSignatureStatusesRequest,
  EncodedGetTransactionRequest,
  EncodedRequestAirdropRequest,
  EncodedGetSignaturesForAddressRequest,
  EncodedGetFeeForMessageRequest,
  EncodedGetTokenAccountsByOwnerRequest,
  EncodedGetTokenAccountBalanceRequest,
  EncodedGetTokenSupplyRequest,
  EncodedGetTokenLargestAccountsRequest,
  EncodedGetProgramAccountsRequest,
  encodeGetAccountInfoRequest,
  encodeGetBalanceRequest,
  encodeGetLatestBlockhashRequest,
  encodeGetMultipleAccountsRequest,
  encodeGetSupplyRequest,
  encodeGetLargestAccountsRequest,
  encodeGetSlotRequest,
  encodeGetBlockHeightRequest,
  encodeGetEpochInfoRequest,
  encodeGetMinimumBalanceForRentExemptionRequest,
  encodeGetClusterNodesRequest,
  encodeGetVoteAccountsRequest,
  encodeGetTransactionCountRequest,
  encodeGetSignatureStatusesRequest,
  encodeGetTransactionRequest,
  encodeRequestAirdropRequest,
  encodeGetSignaturesForAddressRequest,
  encodeGetFeeForMessageRequest,
  encodeGetTokenAccountsByOwnerRequest,
  encodeGetTokenAccountBalanceRequest,
  encodeGetTokenSupplyRequest,
  encodeGetTokenLargestAccountsRequest,
  encodeGetProgramAccountsRequest
} from '../types/requests';
import {
  GetBlockRequest,
  GetBlocksRequest,
  GetBlockTimeRequest,
  GetSlotLeaderRequest,
  GetSlotLeadersRequest,
  EncodedGetBlockRequest,
  EncodedGetBlocksRequest,
  EncodedGetBlockTimeRequest,
  EncodedGetSlotLeaderRequest,
  EncodedGetSlotLeadersRequest,
  encodeGetBlockRequest,
  encodeGetBlocksRequest,
  encodeGetBlockTimeRequest,
  encodeGetSlotLeaderRequest,
  encodeGetSlotLeadersRequest,
  // Batch 5 block requests
  GetBlockCommitmentRequest,
  GetBlockProductionRequest,
  GetBlocksWithLimitRequest,
  EncodedGetBlockCommitmentRequest,
  EncodedGetBlockProductionRequest,
  EncodedGetBlocksWithLimitRequest,
  encodeGetBlockCommitmentRequest,
  encodeGetBlockProductionRequest,
  encodeGetBlocksWithLimitRequest
} from '../types/requests/block';

// Batch 5 transaction requests
import {
  IsBlockhashValidRequest,
  EncodedIsBlockhashValidRequest,
  encodeIsBlockhashValidRequest,
  GetRecentPrioritizationFeesRequest,
  EncodedGetRecentPrioritizationFeesRequest,
  encodeGetRecentPrioritizationFeesRequest
} from '../types/requests/transaction';

import {
  GetInflationGovernorRequest,
  GetInflationRateRequest,
  GetInflationRewardRequest,
  GetRecentPerformanceSamplesRequest,
  GetStakeMinimumDelegationRequest,
  EncodedGetInflationGovernorRequest,
  EncodedGetInflationRateRequest,
  EncodedGetInflationRewardRequest,
  EncodedGetRecentPerformanceSamplesRequest,
  EncodedGetStakeMinimumDelegationRequest,
  encodeGetInflationGovernorRequest,
  encodeGetInflationRateRequest,
  encodeGetInflationRewardRequest,
  encodeGetRecentPerformanceSamplesRequest,
  encodeGetStakeMinimumDelegationRequest
} from '../types/requests';

// Batch 4/5 network/system requests
import {
  GetEpochScheduleRequest,
  EncodedGetEpochScheduleRequest,
  encodeGetEpochScheduleRequest,
  GetGenesisHashRequest,
  EncodedGetGenesisHashRequest,
  encodeGetGenesisHashRequest,
  GetIdentityRequest,
  EncodedGetIdentityRequest,
  encodeGetIdentityRequest,
  GetLeaderScheduleRequest,
  EncodedGetLeaderScheduleRequest,
  encodeGetLeaderScheduleRequest,
  GetFirstAvailableBlockRequest,
  EncodedGetFirstAvailableBlockRequest,
  encodeGetFirstAvailableBlockRequest,
  GetMaxRetransmitSlotRequest,
  EncodedGetMaxRetransmitSlotRequest,
  encodeGetMaxRetransmitSlotRequest,
  GetMaxShredInsertSlotRequest,
  EncodedGetMaxShredInsertSlotRequest,
  encodeGetMaxShredInsertSlotRequest,
  GetHighestSnapshotSlotRequest,
  EncodedGetHighestSnapshotSlotRequest,
  encodeGetHighestSnapshotSlotRequest,
  MinimumLedgerSlotRequest,
  EncodedMinimumLedgerSlotRequest,
  encodeMinimumLedgerSlotRequest
} from '../types/requests';

import {
  VersionResponse,
  createVersionResponse,
  SupplyResponse,
  createSupplyResponse,
  LargestAccountsResponse,
  createLargestAccountsResponse,
  SlotResponse,
  BlockHeightResponse,
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
  // New responses
  EpochInfoResponse,
  createEpochInfoResponse,
  MinimumBalanceForRentExemptionResponse,
  createMinimumBalanceForRentExemptionResponse,
  ClusterNodesResponse,
  createClusterNodesResponse,
  VoteAccountsResponse,
  createVoteAccountsResponse,
  // Block responses
  BlockResponse,
  BlocksResponse,
  BlockTimeResponse,
  SlotLeaderResponse,
  SlotLeadersResponse,
  createBlockResponse,
  createBlocksResponse,
  createBlockTimeResponse,
  createSlotLeaderResponse,
  createSlotLeadersResponse,
  // Existing creators
  createAccountInfoResponse,
  createBalanceResponse,
  createLatestBlockhashResponse,
  createMultipleAccountsResponse,
  createTransactionCountResponse,
  createSignatureStatusesResponse,
  createTransactionResponse,
  createAirdropResponse,
  createSignaturesForAddressResponse,
  createFeeForMessageResponse,
  createTokenAccountsByOwnerResponse,
  createTokenAccountBalanceResponse,
  createTokenSupplyResponse,
  createTokenLargestAccountsResponse,
  createProgramAccountsResponse,
  // Batch 3 responses
  InflationGovernorResponse,
  createInflationGovernorResponse,
  InflationRateResponse,
  createInflationRateResponse,
  InflationRewardResponse,
  createInflationRewardResponse,
  RecentPerformanceSamplesResponse,
  createRecentPerformanceSamplesResponse,
  StakeMinimumDelegationResponse,
  createStakeMinimumDelegationResponse
} from '../types/responses';

// Batch 4/5 responses
import {
  EpochScheduleResponse,
  createEpochScheduleResponse,
  LeaderScheduleResponse,
  createLeaderScheduleResponse,
  HighestSnapshotSlotResponse,
  createHighestSnapshotSlotResponse,
} from '../types/responses';
import {
  BlockCommitmentResponse,
  createBlockCommitmentResponse,
  BlockProductionResponse,
  createBlockProductionResponse,
  RecentPrioritizationFeesResponse,
  createRecentPrioritizationFeesResponse,
} from '../types/responses';

import { apiToBigInt } from '../types/codec';

// Encoded request types (what gets sent to RPC)
export type EncodedGetHealthRequest = [];
export type EncodedGetVersionRequest = [];

// Request encoder interface
export interface RequestEncoder {
  encodeGetHealth(request: GetHealthRequest): EncodedGetHealthRequest;
  encodeGetVersion(request: GetVersionRequest): EncodedGetVersionRequest;
  encodeGetSupply(request: GetSupplyRequest): EncodedGetSupplyRequest;
  encodeGetLargestAccounts(request: GetLargestAccountsRequest): EncodedGetLargestAccountsRequest;
  encodeGetSlot(request: GetSlotRequest): EncodedGetSlotRequest;
  encodeGetBlockHeight(request: GetBlockHeightRequest): EncodedGetBlockHeightRequest;
  encodeGetEpochInfo(request: GetEpochInfoRequest): EncodedGetEpochInfoRequest;
  encodeGetMinimumBalanceForRentExemption(request: GetMinimumBalanceForRentExemptionRequest): EncodedGetMinimumBalanceForRentExemptionRequest;
  encodeGetClusterNodes(request: GetClusterNodesRequest): EncodedGetClusterNodesRequest;
  encodeGetVoteAccounts(request: GetVoteAccountsRequest): EncodedGetVoteAccountsRequest;
  encodeGetAccountInfo(request: GetAccountInfoRequest): EncodedGetAccountInfoRequest;
  encodeGetBalance(request: GetBalanceRequest): EncodedGetBalanceRequest;
  encodeGetLatestBlockhash(request: GetLatestBlockhashRequest): EncodedGetLatestBlockhashRequest;
  encodeGetMultipleAccounts(request: GetMultipleAccountsRequest): EncodedGetMultipleAccountsRequest;
  encodeGetTransactionCount(request: GetTransactionCountRequest): EncodedGetTransactionCountRequest;
  encodeGetSignatureStatuses(request: GetSignatureStatusesRequest): EncodedGetSignatureStatusesRequest;
  encodeGetTransaction(request: GetTransactionRequest): EncodedGetTransactionRequest;
  encodeRequestAirdrop(request: RequestAirdropRequest): EncodedRequestAirdropRequest;
  encodeGetTokenAccountsByOwner(request: GetTokenAccountsByOwnerRequest): EncodedGetTokenAccountsByOwnerRequest;
  encodeGetTokenAccountBalance(request: GetTokenAccountBalanceRequest): EncodedGetTokenAccountBalanceRequest;
  encodeGetTokenSupply(request: GetTokenSupplyRequest): EncodedGetTokenSupplyRequest;
  encodeGetTokenLargestAccounts(request: GetTokenLargestAccountsRequest): EncodedGetTokenLargestAccountsRequest;
  encodeGetProgramAccounts(request: GetProgramAccountsRequest): EncodedGetProgramAccountsRequest;
  encodeGetSignaturesForAddress(request: GetSignaturesForAddressRequest): EncodedGetSignaturesForAddressRequest;
  encodeGetFeeForMessage(request: GetFeeForMessageRequest): EncodedGetFeeForMessageRequest;
  encodeGetBlock(request: GetBlockRequest): EncodedGetBlockRequest;
  encodeGetBlocks(request: GetBlocksRequest): EncodedGetBlocksRequest;
  encodeGetBlockTime(request: GetBlockTimeRequest): EncodedGetBlockTimeRequest;
  encodeGetSlotLeader(request: GetSlotLeaderRequest): EncodedGetSlotLeaderRequest;
  encodeGetSlotLeaders(request: GetSlotLeadersRequest): EncodedGetSlotLeadersRequest;
  // Batch 3: Network Performance & Economics
  encodeGetInflationGovernor(request: GetInflationGovernorRequest): EncodedGetInflationGovernorRequest;
  encodeGetInflationRate(request: GetInflationRateRequest): EncodedGetInflationRateRequest;
  encodeGetInflationReward(request: GetInflationRewardRequest): EncodedGetInflationRewardRequest;
  encodeGetRecentPerformanceSamples(request: GetRecentPerformanceSamplesRequest): EncodedGetRecentPerformanceSamplesRequest;
  encodeGetStakeMinimumDelegation(request: GetStakeMinimumDelegationRequest): EncodedGetStakeMinimumDelegationRequest;
  // Batch 4 - Network & System
  encodeGetEpochSchedule(request: GetEpochScheduleRequest): EncodedGetEpochScheduleRequest;
  encodeGetGenesisHash(request: GetGenesisHashRequest): EncodedGetGenesisHashRequest;
  encodeGetIdentity(request: GetIdentityRequest): EncodedGetIdentityRequest;
  encodeGetLeaderSchedule(request: GetLeaderScheduleRequest): EncodedGetLeaderScheduleRequest;
  encodeGetFirstAvailableBlock(request: GetFirstAvailableBlockRequest): EncodedGetFirstAvailableBlockRequest;
  encodeGetMaxRetransmitSlot(request: GetMaxRetransmitSlotRequest): EncodedGetMaxRetransmitSlotRequest;
  encodeGetMaxShredInsertSlot(request: GetMaxShredInsertSlotRequest): EncodedGetMaxShredInsertSlotRequest;
  // Batch 5 - Advanced Block & Transaction
  encodeGetBlockCommitment(request: GetBlockCommitmentRequest): EncodedGetBlockCommitmentRequest;
  encodeGetBlockProduction(request: GetBlockProductionRequest): EncodedGetBlockProductionRequest;
  encodeGetBlocksWithLimit(request: GetBlocksWithLimitRequest): EncodedGetBlocksWithLimitRequest;
  encodeIsBlockhashValid(request: IsBlockhashValidRequest): EncodedIsBlockhashValidRequest;
  encodeGetHighestSnapshotSlot(request: GetHighestSnapshotSlotRequest): EncodedGetHighestSnapshotSlotRequest;
  encodeMinimumLedgerSlot(request: MinimumLedgerSlotRequest): EncodedMinimumLedgerSlotRequest;
  encodeGetRecentPrioritizationFees(request: GetRecentPrioritizationFeesRequest): EncodedGetRecentPrioritizationFeesRequest;
}
// Response decoder interface
export interface ResponseDecoder {
  decodeHealth(response: unknown): string;
  decodeVersion(response: unknown): VersionResponse;
  decodeSupply(response: unknown): SupplyResponse;
  decodeLargestAccounts(response: unknown): LargestAccountsResponse;
  decodeSlot(response: unknown): SlotResponse;
  decodeBlockHeight(response: unknown): BlockHeightResponse;
  decodeEpochInfo(response: unknown): EpochInfoResponse;
  decodeMinimumBalanceForRentExemption(response: unknown): MinimumBalanceForRentExemptionResponse;
  decodeClusterNodes(response: unknown): ClusterNodesResponse;
  decodeVoteAccounts(response: unknown): VoteAccountsResponse;
  decodeAccountInfo(response: unknown): AccountInfoRpcResponse;
  decodeBalance(response: unknown): BalanceRpcResponse;
  decodeLatestBlockhash(response: unknown): LatestBlockhashRpcResponse;
  decodeMultipleAccounts(response: unknown): MultipleAccountsResponse;
  decodeTransactionCount(response: unknown): TransactionCountResponse;
  decodeSignatureStatuses(response: unknown): SignatureStatusesResponse;
  decodeTransaction(response: unknown): TransactionResponse;
  decodeAirdrop(response: unknown): AirdropResponse;
  decodeTokenAccountsByOwner(response: unknown): TokenAccountsByOwnerResponse;
  decodeTokenAccountBalance(response: unknown): TokenAccountBalanceResponse;
  decodeTokenSupply(response: unknown): TokenSupplyResponse;
  decodeTokenLargestAccounts(response: unknown): TokenLargestAccountsResponse;
  decodeProgramAccounts(response: unknown, withContext?: boolean): ProgramAccountsResponse | ProgramAccountsContextResponse;
  decodeSignaturesForAddress(response: unknown): SignaturesForAddressResponse;
  decodeFeeForMessage(response: unknown): FeeForMessageResponse;
  decodeBlock(response: unknown): BlockResponse;
  decodeBlocks(response: unknown): BlocksResponse;
  decodeBlockTime(response: unknown): BlockTimeResponse;
  decodeSlotLeader(response: unknown): SlotLeaderResponse;
  decodeSlotLeaders(response: unknown): SlotLeadersResponse;
  // Batch 3: Network Performance & Economics
  decodeInflationGovernor(response: unknown): InflationGovernorResponse;
  decodeInflationRate(response: unknown): InflationRateResponse;
  decodeInflationReward(response: unknown): InflationRewardResponse;
  decodeRecentPerformanceSamples(response: unknown): RecentPerformanceSamplesResponse;
  decodeStakeMinimumDelegation(response: unknown): StakeMinimumDelegationResponse;
  // Batch 4 - Network & System
  decodeEpochSchedule(response: unknown): EpochScheduleResponse;
  decodeGenesisHash(response: unknown): string;
  decodeIdentity(response: unknown): string;
  decodeLeaderSchedule(response: unknown): LeaderScheduleResponse;
  decodeFirstAvailableBlock(response: unknown): number;
  decodeMaxRetransmitSlot(response: unknown): number | null;
  decodeMaxShredInsertSlot(response: unknown): number | null;
  // Batch 5 - Advanced Block & Transaction
  decodeBlockCommitment(response: unknown): BlockCommitmentResponse;
  decodeBlockProduction(response: unknown): BlockProductionResponse;
  decodeBlocksWithLimit(response: unknown): BlocksResponse;
  decodeIsBlockhashValid(response: unknown): boolean;
  decodeHighestSnapshotSlot(response: unknown): HighestSnapshotSlotResponse;
  decodeMinimumLedgerSlot(response: unknown): number;
  decodeRecentPrioritizationFees(response: unknown): RecentPrioritizationFeesResponse;
}

// Protocol adapter interface
export interface IProtocolAdapter {
  getVersion(): SolanaProtocolVersion;
  getSupportedMethods(): Set<SolanaRpcMethod>;
  getCapabilities(): SolanaProtocolCapabilities;
  getProtocolInfo(): SolanaProtocolInfo;
}

export interface ISolanaProtocolAdapter extends IProtocolAdapter, RequestEncoder, ResponseDecoder {}

export abstract class BaseSolanaAdapter implements RequestEncoder, ResponseDecoder, ISolanaProtocolAdapter {
  constructor(protected version: SolanaProtocolVersion) {}

  // Abstract methods that must be implemented by concrete adapters
  abstract getSupportedMethods(): Set<SolanaRpcMethod>;
  abstract getCapabilities(): SolanaProtocolCapabilities;

  getVersion(): SolanaProtocolVersion {
    return this.version;
  }

  getProtocolInfo(): SolanaProtocolInfo {
    return {
      version: this.version,
      supportedMethods: this.getSupportedMethods(),
      capabilities: this.getCapabilities()
    };
  }

  // Request encoders - transform TypeScript request objects to RPC format
  encodeGetHealth(_request: GetHealthRequest): EncodedGetHealthRequest {
    // getHealth takes no parameters
    return [];
  }

  encodeGetVersion(_request: GetVersionRequest): EncodedGetVersionRequest {
    // getVersion takes no parameters
    return [];
  }

  encodeGetSupply(request: GetSupplyRequest): EncodedGetSupplyRequest {
    return encodeGetSupplyRequest(request);
  }

  encodeGetLargestAccounts(request: GetLargestAccountsRequest): EncodedGetLargestAccountsRequest {
    return encodeGetLargestAccountsRequest(request);
  }

  encodeGetSlot(request: GetSlotRequest): EncodedGetSlotRequest {
    return encodeGetSlotRequest(request);
  }

  encodeGetBlockHeight(request: GetBlockHeightRequest): EncodedGetBlockHeightRequest {
    return encodeGetBlockHeightRequest(request);
  }

  encodeGetAccountInfo(request: GetAccountInfoRequest): EncodedGetAccountInfoRequest {
    return encodeGetAccountInfoRequest(request);
  }

  encodeGetBalance(request: GetBalanceRequest): EncodedGetBalanceRequest {
    return encodeGetBalanceRequest(request);
  }

  encodeGetLatestBlockhash(request: GetLatestBlockhashRequest): EncodedGetLatestBlockhashRequest {
    return encodeGetLatestBlockhashRequest(request);
  }

  encodeGetMultipleAccounts(request: GetMultipleAccountsRequest): EncodedGetMultipleAccountsRequest {
    return encodeGetMultipleAccountsRequest(request);
  }

  encodeGetTransactionCount(request: GetTransactionCountRequest): EncodedGetTransactionCountRequest {
    return encodeGetTransactionCountRequest(request);
  }

  encodeGetEpochInfo(request: GetEpochInfoRequest): EncodedGetEpochInfoRequest {
    return encodeGetEpochInfoRequest(request);
  }

  encodeGetMinimumBalanceForRentExemption(
    request: GetMinimumBalanceForRentExemptionRequest
  ): EncodedGetMinimumBalanceForRentExemptionRequest {
    return encodeGetMinimumBalanceForRentExemptionRequest(request);
  }

  encodeGetClusterNodes(_request: GetClusterNodesRequest): EncodedGetClusterNodesRequest {
    return encodeGetClusterNodesRequest();
  }

  encodeGetVoteAccounts(request: GetVoteAccountsRequest): EncodedGetVoteAccountsRequest {
    return encodeGetVoteAccountsRequest(request);
  }

  encodeGetSignatureStatuses(request: GetSignatureStatusesRequest): EncodedGetSignatureStatusesRequest {
    return encodeGetSignatureStatusesRequest(request);
  }

  encodeGetTransaction(request: GetTransactionRequest): EncodedGetTransactionRequest {
    return encodeGetTransactionRequest(request);
  }

  encodeRequestAirdrop(request: RequestAirdropRequest): EncodedRequestAirdropRequest {
    return encodeRequestAirdropRequest(request);
  }

  encodeGetTokenAccountsByOwner(request: GetTokenAccountsByOwnerRequest): EncodedGetTokenAccountsByOwnerRequest {
    return encodeGetTokenAccountsByOwnerRequest(request);
  }

  encodeGetTokenAccountBalance(request: GetTokenAccountBalanceRequest): EncodedGetTokenAccountBalanceRequest {
    return encodeGetTokenAccountBalanceRequest(request);
  }

  encodeGetTokenSupply(request: GetTokenSupplyRequest): EncodedGetTokenSupplyRequest {
    return encodeGetTokenSupplyRequest(request);
  }

  encodeGetTokenLargestAccounts(request: GetTokenLargestAccountsRequest): EncodedGetTokenLargestAccountsRequest {
    return encodeGetTokenLargestAccountsRequest(request);
  }

  encodeGetProgramAccounts(request: GetProgramAccountsRequest): EncodedGetProgramAccountsRequest {
    return encodeGetProgramAccountsRequest(request);
  }

  encodeGetSignaturesForAddress(request: GetSignaturesForAddressRequest): EncodedGetSignaturesForAddressRequest {
    return encodeGetSignaturesForAddressRequest(request);
  }
  encodeGetBlock(request: GetBlockRequest): EncodedGetBlockRequest {
    return encodeGetBlockRequest(request);
  }

  encodeGetBlocks(request: GetBlocksRequest): EncodedGetBlocksRequest {
    return encodeGetBlocksRequest(request);
  }

  encodeGetBlockTime(request: GetBlockTimeRequest): EncodedGetBlockTimeRequest {
    return encodeGetBlockTimeRequest(request);
  }

  encodeGetSlotLeader(request: GetSlotLeaderRequest): EncodedGetSlotLeaderRequest {
    return encodeGetSlotLeaderRequest(request);
  }

  encodeGetSlotLeaders(request: GetSlotLeadersRequest): EncodedGetSlotLeadersRequest {
    return encodeGetSlotLeadersRequest(request);
  }


  encodeGetFeeForMessage(request: GetFeeForMessageRequest): EncodedGetFeeForMessageRequest {
    return encodeGetFeeForMessageRequest(request);
  }

  // Batch 3 encoders
  encodeGetInflationGovernor(request: GetInflationGovernorRequest): EncodedGetInflationGovernorRequest {
    return encodeGetInflationGovernorRequest(request);
  }

  encodeGetInflationRate(request: GetInflationRateRequest): EncodedGetInflationRateRequest {
    return encodeGetInflationRateRequest(request);
  }

  encodeGetInflationReward(request: GetInflationRewardRequest): EncodedGetInflationRewardRequest {
    return encodeGetInflationRewardRequest(request);
  }

  encodeGetRecentPerformanceSamples(request: GetRecentPerformanceSamplesRequest): EncodedGetRecentPerformanceSamplesRequest {
    return encodeGetRecentPerformanceSamplesRequest(request);
  }

  encodeGetStakeMinimumDelegation(request: GetStakeMinimumDelegationRequest): EncodedGetStakeMinimumDelegationRequest {
    return encodeGetStakeMinimumDelegationRequest(request);
  }

  // Batch 4 encoders
  encodeGetEpochSchedule(_request: GetEpochScheduleRequest): EncodedGetEpochScheduleRequest {
    return encodeGetEpochScheduleRequest();
  }
  encodeGetGenesisHash(_request: GetGenesisHashRequest): EncodedGetGenesisHashRequest {
    return encodeGetGenesisHashRequest();
  }
  encodeGetIdentity(_request: GetIdentityRequest): EncodedGetIdentityRequest {
    return encodeGetIdentityRequest();
  }
  encodeGetLeaderSchedule(request: GetLeaderScheduleRequest): EncodedGetLeaderScheduleRequest {
    return encodeGetLeaderScheduleRequest(request);
  }
  encodeGetFirstAvailableBlock(_request: GetFirstAvailableBlockRequest): EncodedGetFirstAvailableBlockRequest {
    return encodeGetFirstAvailableBlockRequest();
  }
  encodeGetMaxRetransmitSlot(_request: GetMaxRetransmitSlotRequest): EncodedGetMaxRetransmitSlotRequest {
    return encodeGetMaxRetransmitSlotRequest();
  }
  encodeGetMaxShredInsertSlot(_request: GetMaxShredInsertSlotRequest): EncodedGetMaxShredInsertSlotRequest {
    return encodeGetMaxShredInsertSlotRequest();
  }
  // Batch 5 encoders
  encodeGetBlockCommitment(request: GetBlockCommitmentRequest): EncodedGetBlockCommitmentRequest {
    return encodeGetBlockCommitmentRequest(request);
  }
  encodeGetBlockProduction(request: GetBlockProductionRequest): EncodedGetBlockProductionRequest {
    return encodeGetBlockProductionRequest(request);
  }
  encodeGetBlocksWithLimit(request: GetBlocksWithLimitRequest): EncodedGetBlocksWithLimitRequest {
    return encodeGetBlocksWithLimitRequest(request);
  }
  encodeIsBlockhashValid(request: IsBlockhashValidRequest): EncodedIsBlockhashValidRequest {
    return encodeIsBlockhashValidRequest(request);
  }
  encodeGetHighestSnapshotSlot(_request: GetHighestSnapshotSlotRequest): EncodedGetHighestSnapshotSlotRequest {
    return encodeGetHighestSnapshotSlotRequest();
  }
  encodeMinimumLedgerSlot(_request: MinimumLedgerSlotRequest): EncodedMinimumLedgerSlotRequest {
    return encodeMinimumLedgerSlotRequest();
  }
  encodeGetRecentPrioritizationFees(request: GetRecentPrioritizationFeesRequest): EncodedGetRecentPrioritizationFeesRequest {
    return encodeGetRecentPrioritizationFeesRequest(request);
  }

  // Helper method to build options object from request options
  protected buildOptions(options?: any): Record<string, any> {
    if (!options) return {};

    const result: Record<string, any> = {};

    // Add all defined options
    Object.keys(options).forEach(key => {
      if (options[key] !== undefined) {
        result[key] = options[key];
      }
    });

    return result;
  }

  // Response decoders - transform RPC response to TypeScript types
  decodeHealth(response: unknown): string {
    // getHealth returns a simple string: "ok"
    if (typeof response === 'string') {
      return response;
    }

    const resp = response as any;
    if (resp && typeof resp.result === 'string') {
      return resp.result;
    }

    throw new Error('Invalid health response format');
  }

  decodeVersion(response: unknown): VersionResponse {
    const resp = response as any;
    const result = resp?.result || resp;
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid version response format');
    }
    return createVersionResponse(result);
  }

  decodeEpochInfo(response: unknown): EpochInfoResponse {
    const resp = response as any;
    const result = resp?.result || resp;
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid epoch info response format');
    }
    return createEpochInfoResponse(result);
  }

  decodeMinimumBalanceForRentExemption(response: unknown): MinimumBalanceForRentExemptionResponse {
    const resp = response as any;
    const result = resp?.result !== undefined ? resp.result : resp;
    return createMinimumBalanceForRentExemptionResponse(result);
  }

  decodeClusterNodes(response: unknown): ClusterNodesResponse {
    const resp = response as any;
    const result = resp?.result || resp;
    return createClusterNodesResponse(result);
  }

  decodeVoteAccounts(response: unknown): VoteAccountsResponse {
    const resp = response as any;
    const result = resp?.result || resp;
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid vote accounts response format');
    }
    return createVoteAccountsResponse(result);
  }

  decodeSupply(response: unknown): SupplyResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid supply response format');
    }

    return createSupplyResponse(result);
  }

  decodeLargestAccounts(response: unknown): LargestAccountsResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid largest accounts response format');
    }

    return createLargestAccountsResponse(result);
  }

  decodeSlot(response: unknown): SlotResponse {
    const resp = response as any;
    const result = resp?.result !== undefined ? resp.result : resp;

    if (typeof result !== 'number' && typeof result !== 'string') {
      throw new Error('Invalid slot response: expected number or string');
    }

    return apiToBigInt(result);
  }

  decodeBlockHeight(response: unknown): BlockHeightResponse {
    const resp = response as any;
    const result = resp?.result !== undefined ? resp.result : resp;

    if (typeof result !== 'number' && typeof result !== 'string') {
      throw new Error('Invalid block height response: expected number or string');
    }

    return apiToBigInt(result);
  }

  decodeAccountInfo(response: unknown): AccountInfoRpcResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid account info response format');
    }

    return createAccountInfoResponse(result);
  }

  decodeBalance(response: unknown): BalanceRpcResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid balance response format');
    }

    return createBalanceResponse(result);
  }

  decodeLatestBlockhash(response: unknown): LatestBlockhashRpcResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid latest blockhash response format');
    }

    return createLatestBlockhashResponse(result);
  }

  decodeMultipleAccounts(response: unknown): MultipleAccountsResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid multiple accounts response format');
    }

    return createMultipleAccountsResponse(result);
  }

  decodeTransactionCount(response: unknown): TransactionCountResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (result === undefined || result === null) {
      throw new Error('Invalid transaction count response format');
    }

    return createTransactionCountResponse(result);
  }

  decodeSignatureStatuses(response: unknown): SignatureStatusesResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid signature statuses response format');
    }

    return createSignatureStatusesResponse(result);
  }

  decodeTransaction(response: unknown): TransactionResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid transaction response format');
    }

    return createTransactionResponse(result);
  }

  decodeAirdrop(response: unknown): AirdropResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (typeof result !== 'string') {
      throw new Error('Invalid airdrop response format');
    }

    return createAirdropResponse(result);
  }

  decodeTokenAccountsByOwner(response: unknown): TokenAccountsByOwnerResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid token accounts by owner response format');
    }

    return createTokenAccountsByOwnerResponse(result);
  }

  decodeTokenAccountBalance(response: unknown): TokenAccountBalanceResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid token account balance response format');
    }

    return createTokenAccountBalanceResponse(result);
  }

  decodeTokenSupply(response: unknown): TokenSupplyResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {
      throw new Error('Invalid token supply response format');
    }

    return createTokenSupplyResponse(result);
  }

  decodeTokenLargestAccounts(response: unknown): TokenLargestAccountsResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result || typeof result !== 'object') {

      throw new Error('Invalid token largest accounts response format');
    }

    return createTokenLargestAccountsResponse(result);
  }

  decodeProgramAccounts(response: unknown, withContext: boolean = false): ProgramAccountsResponse | ProgramAccountsContextResponse {
    const resp = response as any;
    const result = resp?.result || resp;

    if (!result) {
      throw new Error('Invalid program accounts response format');
    }

    return createProgramAccountsResponse(result, withContext);
  }

  decodeSignaturesForAddress(response: unknown): SignaturesForAddressResponse {
    const resp = response as any;
    const result = resp?.result || resp;
    return createSignaturesForAddressResponse(result);
  }

  decodeFeeForMessage(response: unknown): FeeForMessageResponse {
    const resp = response as any;
    const result = resp?.result || resp;
    return createFeeForMessageResponse(result);
  }

  // Common utility methods
  protected transformKeys(obj: any): any {
    return snakeCaseRecursive(obj);
  }

  decodeBlock(response: unknown): BlockResponse {
    const resp = response as any;
    const result = resp?.result ?? resp;
    return createBlockResponse(result);
  }

  decodeBlocks(response: unknown): BlocksResponse {
    const resp = response as any;
    const result = resp?.result ?? resp;
    return createBlocksResponse(result);
  }

  decodeBlockTime(response: unknown): BlockTimeResponse {
    const resp = response as any;
    const result = resp?.result ?? resp;
    return createBlockTimeResponse(result);
  }

  decodeSlotLeader(response: unknown): SlotLeaderResponse {
    const resp = response as any;
    const result = resp?.result ?? resp;
    return createSlotLeaderResponse(result);
  }

  decodeSlotLeaders(response: unknown): SlotLeadersResponse {
    const resp = response as any;
    const result = resp?.result ?? resp;
    return createSlotLeadersResponse(result);
  }

  // Batch 3 decoders
  decodeInflationGovernor(response: unknown): InflationGovernorResponse {
    const resp = response as any;
    const result = resp?.result ?? resp;
    return createInflationGovernorResponse(result);
  }

  decodeInflationRate(response: unknown): InflationRateResponse {
    const resp = response as any;
    const result = resp?.result ?? resp;
    return createInflationRateResponse(result);
  }

  decodeInflationReward(response: unknown): InflationRewardResponse {
    const resp = response as any;
    const result = resp?.result ?? resp;
    return createInflationRewardResponse(result);
  }

  decodeRecentPerformanceSamples(response: unknown): RecentPerformanceSamplesResponse {
    const resp = response as any;
    const result = resp?.result ?? resp;
    return createRecentPerformanceSamplesResponse(result);
  }

  decodeStakeMinimumDelegation(response: unknown): StakeMinimumDelegationResponse {
    return createStakeMinimumDelegationResponse(response);
  }

  // Batch 4 decoders
  decodeEpochSchedule(response: unknown): EpochScheduleResponse {
    const resp = response as any; const result = resp?.result ?? resp;
    return createEpochScheduleResponse(result);
  }
  decodeGenesisHash(response: unknown): string {
    const resp = response as any; const result = resp?.result ?? resp;
    if (typeof result !== 'string') throw new Error('Invalid genesis hash response');
    return result;
  }
  decodeIdentity(response: unknown): string {
    const resp = response as any; const result = resp?.result ?? resp;
    if (!result || typeof result !== 'object' || typeof result.identity !== 'string') {
      throw new Error('Invalid identity response');
    }
    return result.identity;
  }
  decodeLeaderSchedule(response: unknown): LeaderScheduleResponse {
    const resp = response as any; const result = resp?.result ?? resp;
    return createLeaderScheduleResponse(result);
  }
  decodeFirstAvailableBlock(response: unknown): number {
    const resp = response as any; const result = resp?.result ?? resp;
    if (typeof result !== 'number') throw new Error('Invalid first available block response');
    return result;
  }
  decodeMaxRetransmitSlot(response: unknown): number | null {
    const resp = response as any; const result = resp?.result ?? resp;
    if (result === null) return null;
    if (typeof result !== 'number') throw new Error('Invalid max retransmit slot response');
    return result;
  }
  decodeMaxShredInsertSlot(response: unknown): number | null {
    const resp = response as any; const result = resp?.result ?? resp;
    if (result === null) return null;
    if (typeof result !== 'number') throw new Error('Invalid max shred insert slot response');
    return result;
  }

  // Batch 5 decoders
  decodeBlockCommitment(response: unknown): BlockCommitmentResponse {
    const resp = response as any; const result = resp?.result ?? resp;
    return createBlockCommitmentResponse(result);
  }
  decodeBlockProduction(response: unknown): BlockProductionResponse {
    const resp = response as any; const result = resp?.result ?? resp;
    return createBlockProductionResponse(result);
  }
  decodeBlocksWithLimit(response: unknown): BlocksResponse {
    return this.decodeBlocks(response);
  }
  decodeIsBlockhashValid(response: unknown): boolean {
    const resp = response as any;
    const result = resp?.result ?? resp;

    if (typeof result === 'boolean') {
      return result;
    }

    if (result && typeof result === 'object') {
      const value = (result as any).value;
      if (typeof value === 'boolean') {
        return value;
      }
    }

    throw new Error('Invalid isBlockhashValid response');
  }
  decodeHighestSnapshotSlot(response: unknown): HighestSnapshotSlotResponse {
    const resp = response as any; const result = resp?.result ?? resp;
    return createHighestSnapshotSlotResponse(result);
  }
  decodeMinimumLedgerSlot(response: unknown): number {
    const resp = response as any; const result = resp?.result ?? resp;
    if (typeof result !== 'number') throw new Error('Invalid minimumLedgerSlot response');
    return result;
  }
  decodeRecentPrioritizationFees(response: unknown): RecentPrioritizationFeesResponse {
    const resp = response as any; const result = resp?.result ?? resp;
    return createRecentPrioritizationFeesResponse(result);
  }

  protected validateResponse(response: unknown): void {
    if (!response || typeof response !== 'object') {
      throw new Error('Invalid response format');
    }
  }
}
