import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
import { getParams, getSigningInfo, getSigningInfos } from "./query.rpc.func";
/* Params queries the parameters of slashing module */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* SigningInfo queries the signing info of given cons address */
export const useGetSigningInfo = buildUseQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  builderQueryFn: getSigningInfo,
  queryKeyPrefix: "SigningInfoQuery"
});
/* SigningInfos queries signing info of all validators */
export const useGetSigningInfos = buildUseQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  builderQueryFn: getSigningInfos,
  queryKeyPrefix: "SigningInfosQuery"
});