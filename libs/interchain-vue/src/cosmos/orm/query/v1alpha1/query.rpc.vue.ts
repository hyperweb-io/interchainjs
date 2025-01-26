import { buildUseVueQuery } from "../../../../vue-query";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
import { createGetGet, createGetList } from "./query.rpc.func.ts";
export const useGetGet = buildUseVueQuery<GetRequest, GetResponse>({
  builderQueryFn: createGetGet,
  queryKeyPrefix: "GetQuery"
});
export const useGetList = buildUseVueQuery<ListRequest, ListResponse>({
  builderQueryFn: createGetList,
  queryKeyPrefix: "ListQuery"
});