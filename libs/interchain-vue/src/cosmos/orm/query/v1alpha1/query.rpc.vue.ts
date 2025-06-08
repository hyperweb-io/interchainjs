import { buildUseVueQuery } from "../../../../vue-query";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
import { getGet, getList } from "./query.rpc.func";
/**
 * Get queries an ORM table against an unique index.
 * @name useGetGet
 * @package cosmos.orm.query.v1alpha1
 * @see proto service: cosmos.orm.query.v1alpha1.Get
 */
export const useGetGet = buildUseVueQuery<GetRequest, GetResponse>({
  builderQueryFn: getGet,
  queryKeyPrefix: "GetQuery"
});
/**
 * List queries an ORM table against an index.
 * @name useGetList
 * @package cosmos.orm.query.v1alpha1
 * @see proto service: cosmos.orm.query.v1alpha1.List
 */
export const useGetList = buildUseVueQuery<ListRequest, ListResponse>({
  builderQueryFn: getList,
  queryKeyPrefix: "ListQuery"
});