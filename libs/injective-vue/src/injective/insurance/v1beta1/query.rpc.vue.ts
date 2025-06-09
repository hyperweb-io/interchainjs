import { buildUseVueQuery } from "../../../vue-query";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getInsuranceParams, getInsuranceFund, getInsuranceFunds, getEstimatedRedemptions, getPendingRedemptions, getInsuranceModuleState } from "./query.rpc.func";
/**
 * Retrieves insurance params
 * @name useGetInsuranceParams
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.InsuranceParams
 */
export const useGetInsuranceParams = buildUseVueQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  builderQueryFn: getInsuranceParams,
  queryKeyPrefix: "InsuranceParamsQuery"
});
/**
 * Retrieves individual insurance fund information from market id
 * @name useGetInsuranceFund
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.InsuranceFund
 */
export const useGetInsuranceFund = buildUseVueQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  builderQueryFn: getInsuranceFund,
  queryKeyPrefix: "InsuranceFundQuery"
});
/**
 * Retrieves all insurance funds
 * @name useGetInsuranceFunds
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.InsuranceFunds
 */
export const useGetInsuranceFunds = buildUseVueQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  builderQueryFn: getInsuranceFunds,
  queryKeyPrefix: "InsuranceFundsQuery"
});
/**
 * Retrives the value of insurance fund share token at current price (not
 * pending redemption)
 * @name useGetEstimatedRedemptions
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.EstimatedRedemptions
 */
export const useGetEstimatedRedemptions = buildUseVueQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  builderQueryFn: getEstimatedRedemptions,
  queryKeyPrefix: "EstimatedRedemptionsQuery"
});
/**
 * Retrieves pending redemptions' share token at current price
 * @name useGetPendingRedemptions
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.PendingRedemptions
 */
export const useGetPendingRedemptions = buildUseVueQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  builderQueryFn: getPendingRedemptions,
  queryKeyPrefix: "PendingRedemptionsQuery"
});
/**
 * Retrieves the entire insurance module's state
 * @name useGetInsuranceModuleState
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.InsuranceModuleState
 */
export const useGetInsuranceModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getInsuranceModuleState,
  queryKeyPrefix: "InsuranceModuleStateQuery"
});