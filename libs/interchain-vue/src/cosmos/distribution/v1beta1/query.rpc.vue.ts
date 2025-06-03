import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
import { getParams, getValidatorDistributionInfo, getValidatorOutstandingRewards, getValidatorCommission, getValidatorSlashes, getDelegationRewards, getDelegationTotalRewards, getDelegatorValidators, getDelegatorWithdrawAddress, getCommunityPool } from "./query.rpc.func";
/* Params queries params of the distribution module. */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
export const useGetValidatorDistributionInfo = buildUseVueQuery<QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse>({
  builderQueryFn: getValidatorDistributionInfo,
  queryKeyPrefix: "ValidatorDistributionInfoQuery"
});
/* ValidatorOutstandingRewards queries rewards of a validator address. */
export const useGetValidatorOutstandingRewards = buildUseVueQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
  builderQueryFn: getValidatorOutstandingRewards,
  queryKeyPrefix: "ValidatorOutstandingRewardsQuery"
});
/* ValidatorCommission queries accumulated commission for a validator. */
export const useGetValidatorCommission = buildUseVueQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
  builderQueryFn: getValidatorCommission,
  queryKeyPrefix: "ValidatorCommissionQuery"
});
/* ValidatorSlashes queries slash events of a validator. */
export const useGetValidatorSlashes = buildUseVueQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
  builderQueryFn: getValidatorSlashes,
  queryKeyPrefix: "ValidatorSlashesQuery"
});
/* DelegationRewards queries the total rewards accrued by a delegation. */
export const useGetDelegationRewards = buildUseVueQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
  builderQueryFn: getDelegationRewards,
  queryKeyPrefix: "DelegationRewardsQuery"
});
/* DelegationTotalRewards queries the total rewards accrued by each
 validator. */
export const useGetDelegationTotalRewards = buildUseVueQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
  builderQueryFn: getDelegationTotalRewards,
  queryKeyPrefix: "DelegationTotalRewardsQuery"
});
/* DelegatorValidators queries the validators of a delegator. */
export const useGetDelegatorValidators = buildUseVueQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: getDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
/* DelegatorWithdrawAddress queries withdraw address of a delegator. */
export const useGetDelegatorWithdrawAddress = buildUseVueQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
  builderQueryFn: getDelegatorWithdrawAddress,
  queryKeyPrefix: "DelegatorWithdrawAddressQuery"
});
/* CommunityPool queries the community pool coins. */
export const useGetCommunityPool = buildUseVueQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  builderQueryFn: getCommunityPool,
  queryKeyPrefix: "CommunityPoolQuery"
});