import { buildQuery } from "../../../helper-func-types";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export const getGrants = buildQuery<QueryGrantsRequest, QueryGrantsResponse>({
  encode: QueryGrantsRequest.encode,
  decode: QueryGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "Grants",
  deps: [QueryGrantsRequest, QueryGrantsResponse]
});
export const getGranterGrants = buildQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  encode: QueryGranterGrantsRequest.encode,
  decode: QueryGranterGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranterGrants",
  deps: [QueryGranterGrantsRequest, QueryGranterGrantsResponse]
});
export const getGranteeGrants = buildQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  encode: QueryGranteeGrantsRequest.encode,
  decode: QueryGranteeGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranteeGrants",
  deps: [QueryGranteeGrantsRequest, QueryGranteeGrantsResponse]
});