import { buildUseVueQuery } from "../../../../../vue-query";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetInterchainAccount, createGetParams } from "./query.rpc.func";
export const useGetInterchainAccount = buildUseVueQuery<QueryInterchainAccountRequest, QueryInterchainAccountResponse>({
  builderQueryFn: createGetInterchainAccount,
  queryKeyPrefix: "InterchainAccountQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});