import { buildUseQuery } from "../../../../../react-query";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
import { getParams } from "./query.rpc.func";
/* Params queries all parameters of the ICA host submodule. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});