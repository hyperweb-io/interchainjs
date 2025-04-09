import { buildQuery } from "../../../helper-func-types";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const getValidators = buildQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  encode: QueryValidatorsRequest.encode,
  decode: QueryValidatorsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Validators",
  deps: [QueryValidatorsRequest, QueryValidatorsResponse]
});
export const getValidator = buildQuery<QueryValidatorRequest, QueryValidatorResponse>({
  encode: QueryValidatorRequest.encode,
  decode: QueryValidatorResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Validator",
  deps: [QueryValidatorRequest, QueryValidatorResponse]
});
export const getValidatorDelegations = buildQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  encode: QueryValidatorDelegationsRequest.encode,
  decode: QueryValidatorDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "ValidatorDelegations",
  deps: [QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse]
});
export const getValidatorUnbondingDelegations = buildQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  encode: QueryValidatorUnbondingDelegationsRequest.encode,
  decode: QueryValidatorUnbondingDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "ValidatorUnbondingDelegations",
  deps: [QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse]
});
export const getDelegation = buildQuery<QueryDelegationRequest, QueryDelegationResponse>({
  encode: QueryDelegationRequest.encode,
  decode: QueryDelegationResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Delegation",
  deps: [QueryDelegationRequest, QueryDelegationResponse]
});
export const getUnbondingDelegation = buildQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  encode: QueryUnbondingDelegationRequest.encode,
  decode: QueryUnbondingDelegationResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "UnbondingDelegation",
  deps: [QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse]
});
export const getDelegatorDelegations = buildQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  encode: QueryDelegatorDelegationsRequest.encode,
  decode: QueryDelegatorDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorDelegations",
  deps: [QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse]
});
export const getDelegatorUnbondingDelegations = buildQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  encode: QueryDelegatorUnbondingDelegationsRequest.encode,
  decode: QueryDelegatorUnbondingDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorUnbondingDelegations",
  deps: [QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse]
});
export const getRedelegations = buildQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  encode: QueryRedelegationsRequest.encode,
  decode: QueryRedelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Redelegations",
  deps: [QueryRedelegationsRequest, QueryRedelegationsResponse]
});
export const getDelegatorValidators = buildQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  encode: QueryDelegatorValidatorsRequest.encode,
  decode: QueryDelegatorValidatorsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorValidators",
  deps: [QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse]
});
export const getDelegatorValidator = buildQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  encode: QueryDelegatorValidatorRequest.encode,
  decode: QueryDelegatorValidatorResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorValidator",
  deps: [QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse]
});
export const getHistoricalInfo = buildQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  encode: QueryHistoricalInfoRequest.encode,
  decode: QueryHistoricalInfoResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "HistoricalInfo",
  deps: [QueryHistoricalInfoRequest, QueryHistoricalInfoResponse]
});
export const getPool = buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encode: QueryPoolRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Pool",
  deps: [QueryPoolRequest, QueryPoolResponse]
});
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});