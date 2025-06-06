import { buildQuery } from "../../../helper-func-types";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/* Retrieves insurance params */
export const getInsuranceParams = buildQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  encode: QueryInsuranceParamsRequest.encode,
  decode: QueryInsuranceParamsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceParams",
  deps: [QueryInsuranceParamsRequest, QueryInsuranceParamsResponse]
});
/* Retrieves individual insurance fund information from market id */
export const getInsuranceFund = buildQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  encode: QueryInsuranceFundRequest.encode,
  decode: QueryInsuranceFundResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFund",
  deps: [QueryInsuranceFundRequest, QueryInsuranceFundResponse]
});
/* Retrieves all insurance funds */
export const getInsuranceFunds = buildQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  encode: QueryInsuranceFundsRequest.encode,
  decode: QueryInsuranceFundsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFunds",
  deps: [QueryInsuranceFundsRequest, QueryInsuranceFundsResponse]
});
/* Retrives the value of insurance fund share token at current price (not
 pending redemption) */
export const getEstimatedRedemptions = buildQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  encode: QueryEstimatedRedemptionsRequest.encode,
  decode: QueryEstimatedRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "EstimatedRedemptions",
  deps: [QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse]
});
/* Retrieves pending redemptions' share token at current price */
export const getPendingRedemptions = buildQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  encode: QueryPendingRedemptionsRequest.encode,
  decode: QueryPendingRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "PendingRedemptions",
  deps: [QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse]
});
/* Retrieves the entire insurance module's state */
export const getInsuranceModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});