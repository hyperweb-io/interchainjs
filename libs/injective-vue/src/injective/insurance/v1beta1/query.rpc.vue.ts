import { buildUseVueQuery } from "../../../vue-query";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { createGetInsuranceParams, createGetInsuranceFund, createGetInsuranceFunds, createGetEstimatedRedemptions, createGetPendingRedemptions, createGetInsuranceModuleState } from "./query.rpc.func.ts";
export const useGetInsuranceParams = buildUseVueQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  builderQueryFn: createGetInsuranceParams,
  queryKeyPrefix: "InsuranceParamsQuery"
});
export const useGetInsuranceFund = buildUseVueQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  builderQueryFn: createGetInsuranceFund,
  queryKeyPrefix: "InsuranceFundQuery"
});
export const useGetInsuranceFunds = buildUseVueQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  builderQueryFn: createGetInsuranceFunds,
  queryKeyPrefix: "InsuranceFundsQuery"
});
export const useGetEstimatedRedemptions = buildUseVueQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  builderQueryFn: createGetEstimatedRedemptions,
  queryKeyPrefix: "EstimatedRedemptionsQuery"
});
export const useGetPendingRedemptions = buildUseVueQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  builderQueryFn: createGetPendingRedemptions,
  queryKeyPrefix: "PendingRedemptionsQuery"
});
export const useGetInsuranceModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetInsuranceModuleState,
  queryKeyPrefix: "InsuranceModuleStateQuery"
});