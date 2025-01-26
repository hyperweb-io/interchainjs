import { buildUseQuery } from "../../../react-query";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
import { createGetAccount, createGetAccounts, createGetDisabledList } from "./query.rpc.func";
export const useGetAccount = buildUseQuery<QueryAccountRequest, AccountResponse>({
  builderQueryFn: createGetAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, AccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const useGetDisabledList = buildUseQuery<QueryDisabledListRequest, DisabledListResponse>({
  builderQueryFn: createGetDisabledList,
  queryKeyPrefix: "DisabledListQuery"
});