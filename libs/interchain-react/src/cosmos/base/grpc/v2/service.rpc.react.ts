import { buildUseQuery } from "../../../../react-query";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
import { getQuery, getListQueryHandlers } from "./service.rpc.func";
export const useGetQuery = buildUseQuery<QueryRequest, QueryResponse>({
  builderQueryFn: getQuery,
  queryKeyPrefix: "QueryQuery"
});
export const useGetListQueryHandlers = buildUseQuery<ListQueryHandlersRequest, ListQueryHandlersResponse>({
  builderQueryFn: getListQueryHandlers,
  queryKeyPrefix: "ListQueryHandlersQuery"
});