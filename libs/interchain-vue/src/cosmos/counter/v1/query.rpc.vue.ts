import { buildUseVueQuery } from "../../../vue-query";
import { QueryGetCountRequest, QueryGetCountResponse } from "./query";
import { getGetCount } from "./query.rpc.func";
/**
 * GetCount queries the parameters of x/Counter module.
 * @name useGetGetCount
 * @package cosmos.counter.v1
 * @see proto service: cosmos.counter.v1.GetCount
 */
export const useGetGetCount = buildUseVueQuery<QueryGetCountRequest, QueryGetCountResponse>({
  builderQueryFn: getGetCount,
  queryKeyPrefix: "GetCountQuery"
});