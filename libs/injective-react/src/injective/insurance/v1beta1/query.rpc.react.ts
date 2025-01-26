import { buildUseQuery } from "../../../react-query";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { createGetInsuranceParams, createGetInsuranceFund, createGetInsuranceFunds, createGetEstimatedRedemptions, createGetPendingRedemptions, createGetInsuranceModuleState } from "./query.rpc.func";
export const useGetInsuranceParams = buildUseQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  builderQueryFn: createGetInsuranceParams,
  queryKeyPrefix: "InsuranceParamsQuery"
});
export const useGetInsuranceFund = buildUseQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  builderQueryFn: createGetInsuranceFund,
  queryKeyPrefix: "InsuranceFundQuery"
});
export const useGetInsuranceFunds = buildUseQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  builderQueryFn: createGetInsuranceFunds,
  queryKeyPrefix: "InsuranceFundsQuery"
});
export const useGetEstimatedRedemptions = buildUseQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  builderQueryFn: createGetEstimatedRedemptions,
  queryKeyPrefix: "EstimatedRedemptionsQuery"
});
export const useGetPendingRedemptions = buildUseQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  builderQueryFn: createGetPendingRedemptions,
  queryKeyPrefix: "PendingRedemptionsQuery"
});
export const useGetInsuranceModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetInsuranceModuleState,
  queryKeyPrefix: "InsuranceModuleStateQuery"
});