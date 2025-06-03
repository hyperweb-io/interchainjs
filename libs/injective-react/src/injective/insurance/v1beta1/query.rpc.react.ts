import { buildUseQuery } from "../../../react-query";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getInsuranceParams, getInsuranceFund, getInsuranceFunds, getEstimatedRedemptions, getPendingRedemptions, getInsuranceModuleState } from "./query.rpc.func";
/* Retrieves insurance params */
export const useGetInsuranceParams = buildUseQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  builderQueryFn: getInsuranceParams,
  queryKeyPrefix: "InsuranceParamsQuery"
});
/* Retrieves individual insurance fund information from market id */
export const useGetInsuranceFund = buildUseQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  builderQueryFn: getInsuranceFund,
  queryKeyPrefix: "InsuranceFundQuery"
});
/* Retrieves all insurance funds */
export const useGetInsuranceFunds = buildUseQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  builderQueryFn: getInsuranceFunds,
  queryKeyPrefix: "InsuranceFundsQuery"
});
/* Retrives the value of insurance fund share token at current price (not
 pending redemption) */
export const useGetEstimatedRedemptions = buildUseQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  builderQueryFn: getEstimatedRedemptions,
  queryKeyPrefix: "EstimatedRedemptionsQuery"
});
/* Retrieves pending redemptions' share token at current price */
export const useGetPendingRedemptions = buildUseQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  builderQueryFn: getPendingRedemptions,
  queryKeyPrefix: "PendingRedemptionsQuery"
});
/* Retrieves the entire insurance module's state */
export const useGetInsuranceModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getInsuranceModuleState,
  queryKeyPrefix: "InsuranceModuleStateQuery"
});