import { buildUseQuery } from "../../../../../react-query";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { getInterchainAccount, getParams } from "./query.rpc.func";
export const useGetInterchainAccount = buildUseQuery<QueryInterchainAccountRequest, QueryInterchainAccountResponse>({
  builderQueryFn: getInterchainAccount,
  queryKeyPrefix: "InterchainAccountQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});