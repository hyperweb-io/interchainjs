import { buildUseVueQuery } from "../../../../vue-query";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
import { getGet, getList } from "./query.rpc.func";
/* Get queries an ORM table against an unique index. */
export const useGetGet = buildUseVueQuery<GetRequest, GetResponse>({
  builderQueryFn: getGet,
  queryKeyPrefix: "GetQuery"
});
/* List queries an ORM table against an index. */
export const useGetList = buildUseVueQuery<ListRequest, ListResponse>({
  builderQueryFn: getList,
  queryKeyPrefix: "ListQuery"
});