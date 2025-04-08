import { buildUseQuery } from "../../../react-query";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
import { getAccount, getAccounts, getDisabledList } from "./query.rpc.func";
export const useGetAccount = buildUseQuery<QueryAccountRequest, AccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, AccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const useGetDisabledList = buildUseQuery<QueryDisabledListRequest, DisabledListResponse>({
  builderQueryFn: getDisabledList,
  queryKeyPrefix: "DisabledListQuery"
});