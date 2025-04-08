import { buildUseVueQuery } from "../../../../vue-query";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
import { getQuery, getListQueryHandlers } from "./service.rpc.func";
export const useGetQuery = buildUseVueQuery<QueryRequest, QueryResponse>({
  builderQueryFn: getQuery,
  queryKeyPrefix: "QueryQuery"
});
export const useGetListQueryHandlers = buildUseVueQuery<ListQueryHandlersRequest, ListQueryHandlersResponse>({
  builderQueryFn: getListQueryHandlers,
  queryKeyPrefix: "ListQueryHandlersQuery"
});