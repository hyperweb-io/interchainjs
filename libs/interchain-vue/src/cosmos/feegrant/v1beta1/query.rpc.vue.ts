import { buildUseVueQuery } from "../../../vue-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
import { getAllowance, getAllowances, getAllowancesByGranter } from "./query.rpc.func";
export const useGetAllowance = buildUseVueQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  builderQueryFn: getAllowance,
  queryKeyPrefix: "AllowanceQuery"
});
export const useGetAllowances = buildUseVueQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  builderQueryFn: getAllowances,
  queryKeyPrefix: "AllowancesQuery"
});
export const useGetAllowancesByGranter = buildUseVueQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  builderQueryFn: getAllowancesByGranter,
  queryKeyPrefix: "AllowancesByGranterQuery"
});