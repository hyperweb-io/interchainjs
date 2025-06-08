import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
import { getParams } from "./query.rpc.func";
/**
 * Params queries the parameters of x/consensus module.
 * @name useGetParams
 * @package cosmos.consensus.v1
 * @see proto service: cosmos.consensus.v1.Params
 */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});