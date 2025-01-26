import { buildUseQuery } from "../../../../react-query";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
import { createGetGet, createGetList } from "./query.rpc.func";
export const useGetGet = buildUseQuery<GetRequest, GetResponse>({
  builderQueryFn: createGetGet,
  queryKeyPrefix: "GetQuery"
});
export const useGetList = buildUseQuery<ListRequest, ListResponse>({
  builderQueryFn: createGetList,
  queryKeyPrefix: "ListQuery"
});