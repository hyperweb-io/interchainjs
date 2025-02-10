import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export const createGetInsuranceParams = (clientResolver?: RpcResolver) => buildQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  encode: QueryInsuranceParamsRequest.encode,
  decode: QueryInsuranceParamsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceParams",
  clientResolver,
  deps: [QueryInsuranceParamsRequest, QueryInsuranceParamsResponse]
});
export const createGetInsuranceFund = (clientResolver?: RpcResolver) => buildQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  encode: QueryInsuranceFundRequest.encode,
  decode: QueryInsuranceFundResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFund",
  clientResolver,
  deps: [QueryInsuranceFundRequest, QueryInsuranceFundResponse]
});
export const createGetInsuranceFunds = (clientResolver?: RpcResolver) => buildQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  encode: QueryInsuranceFundsRequest.encode,
  decode: QueryInsuranceFundsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFunds",
  clientResolver,
  deps: [QueryInsuranceFundsRequest, QueryInsuranceFundsResponse]
});
export const createGetEstimatedRedemptions = (clientResolver?: RpcResolver) => buildQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  encode: QueryEstimatedRedemptionsRequest.encode,
  decode: QueryEstimatedRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "EstimatedRedemptions",
  clientResolver,
  deps: [QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse]
});
export const createGetPendingRedemptions = (clientResolver?: RpcResolver) => buildQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  encode: QueryPendingRedemptionsRequest.encode,
  decode: QueryPendingRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "PendingRedemptions",
  clientResolver,
  deps: [QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse]
});
export const createGetInsuranceModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceModuleState",
  clientResolver,
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});