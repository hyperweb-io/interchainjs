import { buildUseQuery } from "../../../../../react-query";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getInterchainAccount, getParams } from "./query.rpc.func";
/**
 * InterchainAccount returns the interchain account address for a given owner address on a given connection
 * @name useGetInterchainAccount
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto service: ibc.applications.interchain_accounts.controller.v1.InterchainAccount
 */
export const useGetInterchainAccount = buildUseQuery<QueryInterchainAccountRequest, QueryInterchainAccountResponse>({
  builderQueryFn: getInterchainAccount,
  queryKeyPrefix: "InterchainAccountQuery"
});
/**
 * Params queries all parameters of the ICA controller submodule.
 * @name useGetParams
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto service: ibc.applications.interchain_accounts.controller.v1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});