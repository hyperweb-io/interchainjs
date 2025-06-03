import { buildUseQuery } from "../../../../react-query";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
import { getGet, getList } from "./query.rpc.func";
/* Get queries an ORM table against an unique index. */
export const useGetGet = buildUseQuery<GetRequest, GetResponse>({
  builderQueryFn: getGet,
  queryKeyPrefix: "GetQuery"
});
/* List queries an ORM table against an index. */
export const useGetList = buildUseQuery<ListRequest, ListResponse>({
  builderQueryFn: getList,
  queryKeyPrefix: "ListQuery"
});