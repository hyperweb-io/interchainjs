import { buildUseVueQuery } from "../../../vue-query";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getValidators, getValidator, getValidatorDelegations, getValidatorUnbondingDelegations, getDelegation, getUnbondingDelegation, getDelegatorDelegations, getDelegatorUnbondingDelegations, getRedelegations, getDelegatorValidators, getDelegatorValidator, getHistoricalInfo, getPool, getParams } from "./query.rpc.func";
/* Validators queries all validators that match the given status.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const useGetValidators = buildUseVueQuery<QueryValidatorsRequest, QueryValidatorsResponse>({
  builderQueryFn: getValidators,
  queryKeyPrefix: "ValidatorsQuery"
});
/* Validator queries validator info for given validator address. */
export const useGetValidator = buildUseVueQuery<QueryValidatorRequest, QueryValidatorResponse>({
  builderQueryFn: getValidator,
  queryKeyPrefix: "ValidatorQuery"
});
/* ValidatorDelegations queries delegate info for given validator.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const useGetValidatorDelegations = buildUseVueQuery<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>({
  builderQueryFn: getValidatorDelegations,
  queryKeyPrefix: "ValidatorDelegationsQuery"
});
/* ValidatorUnbondingDelegations queries unbonding delegations of a validator.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const useGetValidatorUnbondingDelegations = buildUseVueQuery<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>({
  builderQueryFn: getValidatorUnbondingDelegations,
  queryKeyPrefix: "ValidatorUnbondingDelegationsQuery"
});
/* Delegation queries delegate info for given validator delegator pair. */
export const useGetDelegation = buildUseVueQuery<QueryDelegationRequest, QueryDelegationResponse>({
  builderQueryFn: getDelegation,
  queryKeyPrefix: "DelegationQuery"
});
/* UnbondingDelegation queries unbonding info for given validator delegator
 pair. */
export const useGetUnbondingDelegation = buildUseVueQuery<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>({
  builderQueryFn: getUnbondingDelegation,
  queryKeyPrefix: "UnbondingDelegationQuery"
});
/* DelegatorDelegations queries all delegations of a given delegator address.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const useGetDelegatorDelegations = buildUseVueQuery<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>({
  builderQueryFn: getDelegatorDelegations,
  queryKeyPrefix: "DelegatorDelegationsQuery"
});
/* DelegatorUnbondingDelegations queries all unbonding delegations of a given
 delegator address.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const useGetDelegatorUnbondingDelegations = buildUseVueQuery<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>({
  builderQueryFn: getDelegatorUnbondingDelegations,
  queryKeyPrefix: "DelegatorUnbondingDelegationsQuery"
});
/* Redelegations queries redelegations of given address.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const useGetRedelegations = buildUseVueQuery<QueryRedelegationsRequest, QueryRedelegationsResponse>({
  builderQueryFn: getRedelegations,
  queryKeyPrefix: "RedelegationsQuery"
});
/* DelegatorValidators queries all validators info for given delegator
 address.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const useGetDelegatorValidators = buildUseVueQuery<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>({
  builderQueryFn: getDelegatorValidators,
  queryKeyPrefix: "DelegatorValidatorsQuery"
});
/* DelegatorValidator queries validator info for given delegator validator
 pair. */
export const useGetDelegatorValidator = buildUseVueQuery<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>({
  builderQueryFn: getDelegatorValidator,
  queryKeyPrefix: "DelegatorValidatorQuery"
});
/* HistoricalInfo queries the historical info for given height. */
export const useGetHistoricalInfo = buildUseVueQuery<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>({
  builderQueryFn: getHistoricalInfo,
  queryKeyPrefix: "HistoricalInfoQuery"
});
/* Pool queries the pool info. */
export const useGetPool = buildUseVueQuery<QueryPoolRequest, QueryPoolResponse>({
  builderQueryFn: getPool,
  queryKeyPrefix: "PoolQuery"
});
/* Parameters queries the staking parameters. */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});