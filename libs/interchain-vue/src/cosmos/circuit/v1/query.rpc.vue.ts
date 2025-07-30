import { buildUseVueQuery } from "../../../vue-query";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
import { getAccount, getAccounts, getDisabledList } from "./query.rpc.func";
/**
 * Account returns account permissions.
 * @name useGetAccount
 * @package cosmos.circuit.v1
 * @see proto service: cosmos.circuit.v1.Account
 */
export const useGetAccount = buildUseVueQuery<QueryAccountRequest, AccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
/**
 * Account returns account permissions.
 * @name useGetAccounts
 * @package cosmos.circuit.v1
 * @see proto service: cosmos.circuit.v1.Accounts
 */
export const useGetAccounts = buildUseVueQuery<QueryAccountsRequest, AccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
/**
 * DisabledList returns a list of disabled message urls
 * @name useGetDisabledList
 * @package cosmos.circuit.v1
 * @see proto service: cosmos.circuit.v1.DisabledList
 */
export const useGetDisabledList = buildUseVueQuery<QueryDisabledListRequest, DisabledListResponse>({
  builderQueryFn: getDisabledList,
  queryKeyPrefix: "DisabledListQuery"
});