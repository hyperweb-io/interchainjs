import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const getValidatorDistributionInfo = buildQuery<QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse>({
  encode: QueryValidatorDistributionInfoRequest.encode,
  decode: QueryValidatorDistributionInfoResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorDistributionInfo",
  deps: [QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse]
});
export const getValidatorOutstandingRewards = buildQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
  encode: QueryValidatorOutstandingRewardsRequest.encode,
  decode: QueryValidatorOutstandingRewardsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorOutstandingRewards",
  deps: [QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse]
});
export const getValidatorCommission = buildQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
  encode: QueryValidatorCommissionRequest.encode,
  decode: QueryValidatorCommissionResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorCommission",
  deps: [QueryValidatorCommissionRequest, QueryValidatorCommissionResponse]
});
export const getValidatorSlashes = buildQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
  encode: QueryValidatorSlashesRequest.encode,
  decode: QueryValidatorSlashesResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorSlashes",
  deps: [QueryValidatorSlashesRequest, QueryValidatorSlashesResponse]
});
export const getDelegationRewards = buildQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
  encode: QueryDelegationRewardsRequest.encode,
  decode: QueryDelegationRewardsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegationRewards",
  deps: [QueryDelegationRewardsRequest, QueryDelegationRewardsResponse]
});
export const getDelegationTotalRewards = buildQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
  encode: QueryDelegationTotalRewardsRequest.encode,
  decode: QueryDelegationTotalRewardsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegationTotalRewards",
  deps: [QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse]
});
export const getDelegatorValidators = buildQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  encode: QueryDelegatorValidatorsRequest.encode,
  decode: QueryDelegatorValidatorsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegatorValidators",
  deps: [QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse]
});
export const getDelegatorWithdrawAddress = buildQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
  encode: QueryDelegatorWithdrawAddressRequest.encode,
  decode: QueryDelegatorWithdrawAddressResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegatorWithdrawAddress",
  deps: [QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse]
});
export const getCommunityPool = buildQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  encode: QueryCommunityPoolRequest.encode,
  decode: QueryCommunityPoolResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "CommunityPool",
  deps: [QueryCommunityPoolRequest, QueryCommunityPoolResponse]
});