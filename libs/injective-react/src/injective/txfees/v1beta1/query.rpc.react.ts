import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryEipBaseFeeRequest, QueryEipBaseFeeResponse } from "./query";
import { getParams, getGetEipBaseFee } from "./query.rpc.func";
/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 * @name useGetParams
 * @package injective.txfees.v1beta1
 * @see proto service: injective.txfees.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Returns the current fee market EIP fee.
 * @name useGetGetEipBaseFee
 * @package injective.txfees.v1beta1
 * @see proto service: injective.txfees.v1beta1.GetEipBaseFee
 */
export const useGetGetEipBaseFee = buildUseQuery<QueryEipBaseFeeRequest, QueryEipBaseFeeResponse>({
  builderQueryFn: getGetEipBaseFee,
  queryKeyPrefix: "GetEipBaseFeeQuery"
});