import { buildQuery } from "../../../helper-func-types";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
/* Returns list of `Authorization`, granted to the grantee by the granter. */
export const getGrants = buildQuery<QueryGrantsRequest, QueryGrantsResponse>({
  encode: QueryGrantsRequest.encode,
  decode: QueryGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "Grants",
  deps: [QueryGrantsRequest, QueryGrantsResponse]
});
/* GranterGrants returns list of `GrantAuthorization`, granted by granter.

 Since: cosmos-sdk 0.46 */
export const getGranterGrants = buildQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  encode: QueryGranterGrantsRequest.encode,
  decode: QueryGranterGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranterGrants",
  deps: [QueryGranterGrantsRequest, QueryGranterGrantsResponse]
});
/* GranteeGrants returns a list of `GrantAuthorization` by grantee.

 Since: cosmos-sdk 0.46 */
export const getGranteeGrants = buildQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  encode: QueryGranteeGrantsRequest.encode,
  decode: QueryGranteeGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranteeGrants",
  deps: [QueryGranteeGrantsRequest, QueryGranteeGrantsResponse]
});