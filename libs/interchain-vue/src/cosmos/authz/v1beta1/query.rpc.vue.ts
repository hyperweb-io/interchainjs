import { buildUseVueQuery } from "../../../vue-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
import { getGrants, getGranterGrants, getGranteeGrants } from "./query.rpc.func";
/* Returns list of `Authorization`, granted to the grantee by the granter. */
export const useGetGrants = buildUseVueQuery<QueryGrantsRequest, QueryGrantsResponse>({
  builderQueryFn: getGrants,
  queryKeyPrefix: "GrantsQuery"
});
/* GranterGrants returns list of `GrantAuthorization`, granted by granter.

 Since: cosmos-sdk 0.46 */
export const useGetGranterGrants = buildUseVueQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  builderQueryFn: getGranterGrants,
  queryKeyPrefix: "GranterGrantsQuery"
});
/* GranteeGrants returns a list of `GrantAuthorization` by grantee.

 Since: cosmos-sdk 0.46 */
export const useGetGranteeGrants = buildUseVueQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  builderQueryFn: getGranteeGrants,
  queryKeyPrefix: "GranteeGrantsQuery"
});