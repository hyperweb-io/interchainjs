import { buildQuery } from "../../../helper-func-types";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/* Validators queries all validators that match the given status.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getValidators = buildQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  encode: QueryValidatorsRequest.encode,
  decode: QueryValidatorsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Validators"
});
/* Validator queries validator info for given validator address. */
export const getValidator = buildQuery<QueryValidatorRequest, QueryValidatorResponse>({
  encode: QueryValidatorRequest.encode,
  decode: QueryValidatorResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Validator"
});
/* ValidatorDelegations queries delegate info for given validator.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getValidatorDelegations = buildQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  encode: QueryValidatorDelegationsRequest.encode,
  decode: QueryValidatorDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "ValidatorDelegations"
});
/* ValidatorUnbondingDelegations queries unbonding delegations of a validator.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getValidatorUnbondingDelegations = buildQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  encode: QueryValidatorUnbondingDelegationsRequest.encode,
  decode: QueryValidatorUnbondingDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "ValidatorUnbondingDelegations"
});
/* Delegation queries delegate info for given validator delegator pair. */
export const getDelegation = buildQuery<QueryDelegationRequest, QueryDelegationResponse>({
  encode: QueryDelegationRequest.encode,
  decode: QueryDelegationResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Delegation"
});
/* UnbondingDelegation queries unbonding info for given validator delegator
 pair. */
export const getUnbondingDelegation = buildQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  encode: QueryUnbondingDelegationRequest.encode,
  decode: QueryUnbondingDelegationResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "UnbondingDelegation"
});
/* DelegatorDelegations queries all delegations of a given delegator address.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getDelegatorDelegations = buildQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  encode: QueryDelegatorDelegationsRequest.encode,
  decode: QueryDelegatorDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorDelegations"
});
/* DelegatorUnbondingDelegations queries all unbonding delegations of a given
 delegator address.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getDelegatorUnbondingDelegations = buildQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  encode: QueryDelegatorUnbondingDelegationsRequest.encode,
  decode: QueryDelegatorUnbondingDelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorUnbondingDelegations"
});
/* Redelegations queries redelegations of given address.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getRedelegations = buildQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  encode: QueryRedelegationsRequest.encode,
  decode: QueryRedelegationsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Redelegations"
});
/* DelegatorValidators queries all validators info for given delegator
 address.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getDelegatorValidators = buildQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  encode: QueryDelegatorValidatorsRequest.encode,
  decode: QueryDelegatorValidatorsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorValidators"
});
/* DelegatorValidator queries validator info for given delegator validator
 pair. */
export const getDelegatorValidator = buildQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  encode: QueryDelegatorValidatorRequest.encode,
  decode: QueryDelegatorValidatorResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "DelegatorValidator"
});
/* HistoricalInfo queries the historical info for given height. */
export const getHistoricalInfo = buildQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  encode: QueryHistoricalInfoRequest.encode,
  decode: QueryHistoricalInfoResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "HistoricalInfo"
});
/* Pool queries the pool info. */
export const getPool = buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encode: QueryPoolRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Pool"
});
/* Parameters queries the staking parameters. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.staking.v1beta1.Query",
  method: "Params"
});