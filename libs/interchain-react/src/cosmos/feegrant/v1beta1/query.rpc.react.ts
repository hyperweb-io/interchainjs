import { buildUseQuery } from "../../../react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
import { getAllowance, getAllowances, getAllowancesByGranter } from "./query.rpc.func";
/**
 * Allowance returns granted allwance to the grantee by the granter.
 * @name useGetAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto service: cosmos.feegrant.v1beta1.Allowance
 */
export const useGetAllowance = buildUseQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  builderQueryFn: getAllowance,
  queryKeyPrefix: "AllowanceQuery"
});
/**
 * Allowances returns all the grants for the given grantee address.
 * @name useGetAllowances
 * @package cosmos.feegrant.v1beta1
 * @see proto service: cosmos.feegrant.v1beta1.Allowances
 */
export const useGetAllowances = buildUseQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  builderQueryFn: getAllowances,
  queryKeyPrefix: "AllowancesQuery"
});
/**
 * AllowancesByGranter returns all the grants given by an address
 * 
 * Since: cosmos-sdk 0.46
 * @name useGetAllowancesByGranter
 * @package cosmos.feegrant.v1beta1
 * @see proto service: cosmos.feegrant.v1beta1.AllowancesByGranter
 */
export const useGetAllowancesByGranter = buildUseQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  builderQueryFn: getAllowancesByGranter,
  queryKeyPrefix: "AllowancesByGranterQuery"
});