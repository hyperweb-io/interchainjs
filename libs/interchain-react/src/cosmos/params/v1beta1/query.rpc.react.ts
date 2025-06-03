import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
import { getParams, getSubspaces } from "./query.rpc.func";
/* Params queries a specific parameter of a module, given its subspace and
 key. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* Subspaces queries for all registered subspaces and all keys for a subspace.

 Since: cosmos-sdk 0.46 */
export const useGetSubspaces = buildUseQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  builderQueryFn: getSubspaces,
  queryKeyPrefix: "SubspacesQuery"
});