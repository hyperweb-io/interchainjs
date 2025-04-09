import { buildUseQuery } from "../../../react-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
import { getGrants, getGranterGrants, getGranteeGrants } from "./query.rpc.func";
export const useGetGrants = buildUseQuery<QueryGrantsRequest, QueryGrantsResponse>({
  builderQueryFn: getGrants,
  queryKeyPrefix: "GrantsQuery"
});
export const useGetGranterGrants = buildUseQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  builderQueryFn: getGranterGrants,
  queryKeyPrefix: "GranterGrantsQuery"
});
export const useGetGranteeGrants = buildUseQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  builderQueryFn: getGranteeGrants,
  queryKeyPrefix: "GranteeGrantsQuery"
});