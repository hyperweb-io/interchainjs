import { buildQuery } from "../../../helper-func-types";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
export const getInsuranceParams = buildQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  encode: QueryInsuranceParamsRequest.encode,
  decode: QueryInsuranceParamsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceParams",
  deps: [QueryInsuranceParamsRequest, QueryInsuranceParamsResponse]
});
export const getInsuranceFund = buildQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  encode: QueryInsuranceFundRequest.encode,
  decode: QueryInsuranceFundResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFund",
  deps: [QueryInsuranceFundRequest, QueryInsuranceFundResponse]
});
export const getInsuranceFunds = buildQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  encode: QueryInsuranceFundsRequest.encode,
  decode: QueryInsuranceFundsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFunds",
  deps: [QueryInsuranceFundsRequest, QueryInsuranceFundsResponse]
});
export const getEstimatedRedemptions = buildQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  encode: QueryEstimatedRedemptionsRequest.encode,
  decode: QueryEstimatedRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "EstimatedRedemptions",
  deps: [QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse]
});
export const getPendingRedemptions = buildQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  encode: QueryPendingRedemptionsRequest.encode,
  decode: QueryPendingRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "PendingRedemptions",
  deps: [QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse]
});
export const getInsuranceModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});