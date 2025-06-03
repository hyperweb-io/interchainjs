import { buildUseVueQuery } from "../../../../../vue-query";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getInterchainAccount, getParams } from "./query.rpc.func";
/* InterchainAccount returns the interchain account address for a given owner address on a given connection */
export const useGetInterchainAccount = buildUseVueQuery<QueryInterchainAccountRequest, QueryInterchainAccountResponse>({
  builderQueryFn: getInterchainAccount,
  queryKeyPrefix: "InterchainAccountQuery"
});
/* Params queries all parameters of the ICA controller submodule. */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});