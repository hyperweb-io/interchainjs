import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
import { getParams, getSigningInfo, getSigningInfos } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetSigningInfo = buildUseVueQuery<QuerySigningInfoRequest, QuerySigningInfoResponse>({
  builderQueryFn: getSigningInfo,
  queryKeyPrefix: "SigningInfoQuery"
});
export const useGetSigningInfos = buildUseVueQuery<QuerySigningInfosRequest, QuerySigningInfosResponse>({
  builderQueryFn: getSigningInfos,
  queryKeyPrefix: "SigningInfosQuery"
});