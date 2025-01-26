import { buildUseVueQuery } from "../../../../vue-query";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
import { createGetQuery, createGetListQueryHandlers } from "./service.rpc.func";
export const useGetQuery = buildUseVueQuery<QueryRequest, QueryResponse>({
  builderQueryFn: createGetQuery,
  queryKeyPrefix: "QueryQuery"
});
export const useGetListQueryHandlers = buildUseVueQuery<ListQueryHandlersRequest, ListQueryHandlersResponse>({
  builderQueryFn: createGetListQueryHandlers,
  queryKeyPrefix: "ListQueryHandlersQuery"
});