import { buildUseVueQuery } from "../../../vue-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
import { getGrants, getGranterGrants, getGranteeGrants } from "./query.rpc.func";
/**
 * Returns list of `Authorization`, granted to the grantee by the granter.
 * @name useGetGrants
 * @package cosmos.authz.v1beta1
 * @see proto service: cosmos.authz.v1beta1.Grants
 */
export const useGetGrants = buildUseVueQuery<QueryGrantsRequest, QueryGrantsResponse>({
  builderQueryFn: getGrants,
  queryKeyPrefix: "GrantsQuery"
});
/**
 * GranterGrants returns list of `GrantAuthorization`, granted by granter.
 * @name useGetGranterGrants
 * @package cosmos.authz.v1beta1
 * @see proto service: cosmos.authz.v1beta1.GranterGrants
 */
export const useGetGranterGrants = buildUseVueQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  builderQueryFn: getGranterGrants,
  queryKeyPrefix: "GranterGrantsQuery"
});
/**
 * GranteeGrants returns a list of `GrantAuthorization` by grantee.
 * @name useGetGranteeGrants
 * @package cosmos.authz.v1beta1
 * @see proto service: cosmos.authz.v1beta1.GranteeGrants
 */
export const useGetGranteeGrants = buildUseVueQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  builderQueryFn: getGranteeGrants,
  queryKeyPrefix: "GranteeGrantsQuery"
});