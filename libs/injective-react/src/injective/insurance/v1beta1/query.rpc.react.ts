import { buildUseQuery } from "../../../react-query";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getInsuranceParams, getInsuranceFund, getInsuranceFunds, getEstimatedRedemptions, getPendingRedemptions, getInsuranceModuleState } from "./query.rpc.func";
export const useGetInsuranceParams = buildUseQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  builderQueryFn: getInsuranceParams,
  queryKeyPrefix: "InsuranceParamsQuery"
});
export const useGetInsuranceFund = buildUseQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  builderQueryFn: getInsuranceFund,
  queryKeyPrefix: "InsuranceFundQuery"
});
export const useGetInsuranceFunds = buildUseQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  builderQueryFn: getInsuranceFunds,
  queryKeyPrefix: "InsuranceFundsQuery"
});
export const useGetEstimatedRedemptions = buildUseQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  builderQueryFn: getEstimatedRedemptions,
  queryKeyPrefix: "EstimatedRedemptionsQuery"
});
export const useGetPendingRedemptions = buildUseQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  builderQueryFn: getPendingRedemptions,
  queryKeyPrefix: "PendingRedemptionsQuery"
});
export const useGetInsuranceModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getInsuranceModuleState,
  queryKeyPrefix: "InsuranceModuleStateQuery"
});