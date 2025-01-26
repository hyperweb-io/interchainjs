import { buildUseQuery } from "../../../../react-query";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
import { createGetQuery, createGetListQueryHandlers } from "./service.rpc.func";
export const useGetQuery = buildUseQuery<QueryRequest, QueryResponse>({
  builderQueryFn: createGetQuery,
  queryKeyPrefix: "QueryQuery"
});
export const useGetListQueryHandlers = buildUseQuery<ListQueryHandlersRequest, ListQueryHandlersResponse>({
  builderQueryFn: createGetListQueryHandlers,
  queryKeyPrefix: "ListQueryHandlersQuery"
});