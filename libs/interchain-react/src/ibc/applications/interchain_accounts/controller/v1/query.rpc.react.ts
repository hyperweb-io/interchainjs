import { buildUseQuery } from "../../../../../react-query";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetInterchainAccount, createGetParams } from "./query.rpc.func";
export const useGetInterchainAccount = buildUseQuery<QueryInterchainAccountRequest, QueryInterchainAccountResponse>({
  builderQueryFn: createGetInterchainAccount,
  queryKeyPrefix: "InterchainAccountQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});