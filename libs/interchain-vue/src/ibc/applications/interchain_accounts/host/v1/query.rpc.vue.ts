import { buildUseVueQuery } from "../../../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
import { getParams } from "./query.rpc.func";
/* Params queries all parameters of the ICA host submodule. */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});