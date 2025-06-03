import { buildUseVueQuery } from "../../../vue-query";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
import { getAccount, getAccounts, getDisabledList } from "./query.rpc.func";
/* Account returns account permissions. */
export const useGetAccount = buildUseVueQuery<QueryAccountRequest, AccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
/* Account returns account permissions. */
export const useGetAccounts = buildUseVueQuery<QueryAccountsRequest, AccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
/* DisabledList returns a list of disabled message urls */
export const useGetDisabledList = buildUseVueQuery<QueryDisabledListRequest, DisabledListResponse>({
  builderQueryFn: getDisabledList,
  queryKeyPrefix: "DisabledListQuery"
});