import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
import { getParams, getSigningInfo, getSigningInfos } from "./query.rpc.func";
/**
 * Params queries the parameters of slashing module
 * @name useGetParams
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * SigningInfo queries the signing info of given cons address
 * @name useGetSigningInfo
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.SigningInfo
 */
export const useGetSigningInfo = buildUseQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  builderQueryFn: getSigningInfo,
  queryKeyPrefix: "SigningInfoQuery"
});
/**
 * SigningInfos queries signing info of all validators
 * @name useGetSigningInfos
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.SigningInfos
 */
export const useGetSigningInfos = buildUseQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  builderQueryFn: getSigningInfos,
  queryKeyPrefix: "SigningInfosQuery"
});