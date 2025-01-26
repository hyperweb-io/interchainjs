import { buildUseVueQuery } from "../../../vue-query";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
import { createGetAccount, createGetAccounts, createGetDisabledList } from "./query.rpc.func.ts";
export const useGetAccount = buildUseVueQuery<QueryAccountRequest, AccountResponse>({
  builderQueryFn: createGetAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetAccounts = buildUseVueQuery<QueryAccountsRequest, AccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const useGetDisabledList = buildUseVueQuery<QueryDisabledListRequest, DisabledListResponse>({
  builderQueryFn: createGetDisabledList,
  queryKeyPrefix: "DisabledListQuery"
});