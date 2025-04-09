import { buildUseVueQuery } from "../../../vue-query";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getInsuranceParams, getInsuranceFund, getInsuranceFunds, getEstimatedRedemptions, getPendingRedemptions, getInsuranceModuleState } from "./query.rpc.func";
export const useGetInsuranceParams = buildUseVueQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  builderQueryFn: getInsuranceParams,
  queryKeyPrefix: "InsuranceParamsQuery"
});
export const useGetInsuranceFund = buildUseVueQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  builderQueryFn: getInsuranceFund,
  queryKeyPrefix: "InsuranceFundQuery"
});
export const useGetInsuranceFunds = buildUseVueQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  builderQueryFn: getInsuranceFunds,
  queryKeyPrefix: "InsuranceFundsQuery"
});
export const useGetEstimatedRedemptions = buildUseVueQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  builderQueryFn: getEstimatedRedemptions,
  queryKeyPrefix: "EstimatedRedemptionsQuery"
});
export const useGetPendingRedemptions = buildUseVueQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  builderQueryFn: getPendingRedemptions,
  queryKeyPrefix: "PendingRedemptionsQuery"
});
export const useGetInsuranceModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getInsuranceModuleState,
  queryKeyPrefix: "InsuranceModuleStateQuery"
});