import { buildUseVueQuery } from "../../../../vue-query";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
import { getGet, getList } from "./query.rpc.func";
export const useGetGet = buildUseVueQuery<GetRequest, GetResponse>({
  builderQueryFn: getGet,
  queryKeyPrefix: "GetQuery"
});
export const useGetList = buildUseVueQuery<ListRequest, ListResponse>({
  builderQueryFn: getList,
  queryKeyPrefix: "ListQuery"
});