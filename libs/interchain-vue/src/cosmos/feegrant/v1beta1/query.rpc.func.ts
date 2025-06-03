import { buildQuery } from "../../../helper-func-types";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
/* Allowance returns granted allwance to the grantee by the granter. */
export const getAllowance = buildQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  encode: QueryAllowanceRequest.encode,
  decode: QueryAllowanceResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "Allowance",
  deps: [QueryAllowanceRequest, QueryAllowanceResponse]
});
/* Allowances returns all the grants for the given grantee address. */
export const getAllowances = buildQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  encode: QueryAllowancesRequest.encode,
  decode: QueryAllowancesResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "Allowances",
  deps: [QueryAllowancesRequest, QueryAllowancesResponse]
});
/* AllowancesByGranter returns all the grants given by an address

 Since: cosmos-sdk 0.46 */
export const getAllowancesByGranter = buildQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  encode: QueryAllowancesByGranterRequest.encode,
  decode: QueryAllowancesByGranterResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "AllowancesByGranter",
  deps: [QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse]
});