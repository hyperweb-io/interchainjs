import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryEipBaseFeeRequest, QueryEipBaseFeeResponse } from "./query";
/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 * @name getParams
 * @package injective.txfees.v1beta1
 * @see proto service: injective.txfees.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.txfees.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Returns the current fee market EIP fee.
 * @name getGetEipBaseFee
 * @package injective.txfees.v1beta1
 * @see proto service: injective.txfees.v1beta1.GetEipBaseFee
 */
export const getGetEipBaseFee = buildQuery<QueryEipBaseFeeRequest, QueryEipBaseFeeResponse>({
  encode: QueryEipBaseFeeRequest.encode,
  decode: QueryEipBaseFeeResponse.decode,
  service: "injective.txfees.v1beta1.Query",
  method: "GetEipBaseFee",
  deps: [QueryEipBaseFeeRequest, QueryEipBaseFeeResponse]
});