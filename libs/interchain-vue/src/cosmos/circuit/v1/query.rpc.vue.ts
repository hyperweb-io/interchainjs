import { buildUseVueQuery } from "../../../vue-query";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
import { getAccount, getAccounts, getDisabledList } from "./query.rpc.func";
export const useGetAccount = buildUseVueQuery<QueryAccountRequest, AccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetAccounts = buildUseVueQuery<QueryAccountsRequest, AccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const useGetDisabledList = buildUseVueQuery<QueryDisabledListRequest, DisabledListResponse>({
  builderQueryFn: getDisabledList,
  queryKeyPrefix: "DisabledListQuery"
});