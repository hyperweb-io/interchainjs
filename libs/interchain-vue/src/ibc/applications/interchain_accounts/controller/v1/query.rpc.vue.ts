import { buildUseVueQuery } from "../../../../../vue-query";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getInterchainAccount, getParams } from "./query.rpc.func";
export const useGetInterchainAccount = buildUseVueQuery<QueryInterchainAccountRequest, QueryInterchainAccountResponse>({
  builderQueryFn: getInterchainAccount,
  queryKeyPrefix: "InterchainAccountQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});