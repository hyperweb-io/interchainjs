import { buildUseVueQuery } from "../../../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
import { getParams } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});