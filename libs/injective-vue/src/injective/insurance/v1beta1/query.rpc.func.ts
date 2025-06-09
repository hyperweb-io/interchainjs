import { buildQuery } from "../../../helper-func-types";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/**
 * Retrieves insurance params
 * @name getInsuranceParams
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.InsuranceParams
 */
export const getInsuranceParams = buildQuery<QueryInsuranceParamsRequest, QueryInsuranceParamsResponse>({
  encode: QueryInsuranceParamsRequest.encode,
  decode: QueryInsuranceParamsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceParams",
  deps: [QueryInsuranceParamsRequest, QueryInsuranceParamsResponse]
});
/**
 * Retrieves individual insurance fund information from market id
 * @name getInsuranceFund
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.InsuranceFund
 */
export const getInsuranceFund = buildQuery<QueryInsuranceFundRequest, QueryInsuranceFundResponse>({
  encode: QueryInsuranceFundRequest.encode,
  decode: QueryInsuranceFundResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFund",
  deps: [QueryInsuranceFundRequest, QueryInsuranceFundResponse]
});
/**
 * Retrieves all insurance funds
 * @name getInsuranceFunds
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.InsuranceFunds
 */
export const getInsuranceFunds = buildQuery<QueryInsuranceFundsRequest, QueryInsuranceFundsResponse>({
  encode: QueryInsuranceFundsRequest.encode,
  decode: QueryInsuranceFundsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceFunds",
  deps: [QueryInsuranceFundsRequest, QueryInsuranceFundsResponse]
});
/**
 * Retrives the value of insurance fund share token at current price (not
 * pending redemption)
 * @name getEstimatedRedemptions
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.EstimatedRedemptions
 */
export const getEstimatedRedemptions = buildQuery<QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse>({
  encode: QueryEstimatedRedemptionsRequest.encode,
  decode: QueryEstimatedRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "EstimatedRedemptions",
  deps: [QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse]
});
/**
 * Retrieves pending redemptions' share token at current price
 * @name getPendingRedemptions
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.PendingRedemptions
 */
export const getPendingRedemptions = buildQuery<QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse>({
  encode: QueryPendingRedemptionsRequest.encode,
  decode: QueryPendingRedemptionsResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "PendingRedemptions",
  deps: [QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse]
});
/**
 * Retrieves the entire insurance module's state
 * @name getInsuranceModuleState
 * @package injective.insurance.v1beta1
 * @see proto service: injective.insurance.v1beta1.InsuranceModuleState
 */
export const getInsuranceModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.insurance.v1beta1.Query",
  method: "InsuranceModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});