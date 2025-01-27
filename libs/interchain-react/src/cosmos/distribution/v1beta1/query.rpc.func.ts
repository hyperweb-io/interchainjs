import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetValidatorDistributionInfo = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse>({
  encode: QueryValidatorDistributionInfoRequest.encode,
  decode: QueryValidatorDistributionInfoResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorDistributionInfo",
  clientResolver,
  deps: [QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse]
});
export const createGetValidatorOutstandingRewards = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>({
  encode: QueryValidatorOutstandingRewardsRequest.encode,
  decode: QueryValidatorOutstandingRewardsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorOutstandingRewards",
  clientResolver,
  deps: [QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse]
});
export const createGetValidatorCommission = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>({
  encode: QueryValidatorCommissionRequest.encode,
  decode: QueryValidatorCommissionResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorCommission",
  clientResolver,
  deps: [QueryValidatorCommissionRequest, QueryValidatorCommissionResponse]
});
export const createGetValidatorSlashes = (clientResolver?: RpcResolver) => buildQuery<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>({
  encode: QueryValidatorSlashesRequest.encode,
  decode: QueryValidatorSlashesResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "ValidatorSlashes",
  clientResolver,
  deps: [QueryValidatorSlashesRequest, QueryValidatorSlashesResponse]
});
export const createGetDelegationRewards = (clientResolver?: RpcResolver) => buildQuery<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>({
  encode: QueryDelegationRewardsRequest.encode,
  decode: QueryDelegationRewardsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegationRewards",
  clientResolver,
  deps: [QueryDelegationRewardsRequest, QueryDelegationRewardsResponse]
});
export const createGetDelegationTotalRewards = (clientResolver?: RpcResolver) => buildQuery<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>({
  encode: QueryDelegationTotalRewardsRequest.encode,
  decode: QueryDelegationTotalRewardsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegationTotalRewards",
  clientResolver,
  deps: [QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse]
});
export const createGetDelegatorValidators = (clientResolver?: RpcResolver) => buildQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  encode: QueryDelegatorValidatorsRequest.encode,
  decode: QueryDelegatorValidatorsResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegatorValidators",
  clientResolver,
  deps: [QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse]
});
export const createGetDelegatorWithdrawAddress = (clientResolver?: RpcResolver) => buildQuery<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>({
  encode: QueryDelegatorWithdrawAddressRequest.encode,
  decode: QueryDelegatorWithdrawAddressResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "DelegatorWithdrawAddress",
  clientResolver,
  deps: [QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse]
});
export const createGetCommunityPool = (clientResolver?: RpcResolver) => buildQuery<QueryCommunityPoolRequest, QueryCommunityPoolResponse>({
  encode: QueryCommunityPoolRequest.encode,
  decode: QueryCommunityPoolResponse.decode,
  service: "cosmos.distribution.v1beta1.Query",
  method: "CommunityPool",
  clientResolver,
  deps: [QueryCommunityPoolRequest, QueryCommunityPoolResponse]
});