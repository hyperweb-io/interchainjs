import { buildUseQuery } from "../../../react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
import { getAllowance, getAllowances, getAllowancesByGranter } from "./query.rpc.func";
/* Allowance returns granted allwance to the grantee by the granter. */
export const useGetAllowance = buildUseQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  builderQueryFn: getAllowance,
  queryKeyPrefix: "AllowanceQuery"
});
/* Allowances returns all the grants for the given grantee address. */
export const useGetAllowances = buildUseQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  builderQueryFn: getAllowances,
  queryKeyPrefix: "AllowancesQuery"
});
/* AllowancesByGranter returns all the grants given by an address

 Since: cosmos-sdk 0.46 */
export const useGetAllowancesByGranter = buildUseQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  builderQueryFn: getAllowancesByGranter,
  queryKeyPrefix: "AllowancesByGranterQuery"
});