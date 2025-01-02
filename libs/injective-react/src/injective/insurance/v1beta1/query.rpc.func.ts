import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export const createGetInsuranceParams = (clientResolver?: RpcResolver) => buildQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  encode: QueryInsuranceParamsRequest.encode,
  decode: QueryInsuranceParamsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceParams",
  clientResolver,
  deps: [QueryInsuranceParamsRequest, QueryInsuranceParamsResponse]
});
export const useGetInsuranceParams = buildUseQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  builderQueryFn: createGetInsuranceParams,
  queryKeyPrefix: "InsuranceParamsQuery"
});
export const createGetInsuranceFund = (clientResolver?: RpcResolver) => buildQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  encode: QueryInsuranceFundRequest.encode,
  decode: QueryInsuranceFundResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFund",
  clientResolver,
  deps: [QueryInsuranceFundRequest, QueryInsuranceFundResponse]
});
export const useGetInsuranceFund = buildUseQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  builderQueryFn: createGetInsuranceFund,
  queryKeyPrefix: "InsuranceFundQuery"
});
export const createGetInsuranceFunds = (clientResolver?: RpcResolver) => buildQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  encode: QueryInsuranceFundsRequest.encode,
  decode: QueryInsuranceFundsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFunds",
  clientResolver,
  deps: [QueryInsuranceFundsRequest, QueryInsuranceFundsResponse]
});
export const useGetInsuranceFunds = buildUseQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  builderQueryFn: createGetInsuranceFunds,
  queryKeyPrefix: "InsuranceFundsQuery"
});
export const createGetEstimatedRedemptions = (clientResolver?: RpcResolver) => buildQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  encode: QueryEstimatedRedemptionsRequest.encode,
  decode: QueryEstimatedRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "EstimatedRedemptions",
  clientResolver,
  deps: [QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse]
});
export const useGetEstimatedRedemptions = buildUseQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  builderQueryFn: createGetEstimatedRedemptions,
  queryKeyPrefix: "EstimatedRedemptionsQuery"
});
export const createGetPendingRedemptions = (clientResolver?: RpcResolver) => buildQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  encode: QueryPendingRedemptionsRequest.encode,
  decode: QueryPendingRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "PendingRedemptions",
  clientResolver,
  deps: [QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse]
});
export const useGetPendingRedemptions = buildUseQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  builderQueryFn: createGetPendingRedemptions,
  queryKeyPrefix: "PendingRedemptionsQuery"
});
export const createGetInsuranceModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceModuleState",
  clientResolver,
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});
export const useGetInsuranceModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetInsuranceModuleState,
  queryKeyPrefix: "InsuranceModuleStateQuery"
});