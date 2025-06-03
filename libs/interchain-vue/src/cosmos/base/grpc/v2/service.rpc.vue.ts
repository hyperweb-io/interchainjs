import { buildUseVueQuery } from "../../../../vue-query";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
import { getQuery, getListQueryHandlers } from "./service.rpc.func";
/* Query queries the server with a request, the request can be any sdk Msg. */
export const useGetQuery = buildUseVueQuery<QueryRequest, QueryResponse>({
  builderQueryFn: getQuery,
  queryKeyPrefix: "QueryQuery"
});
/* ListQueryHandlers lists all the available query handlers. */
export const useGetListQueryHandlers = buildUseVueQuery<ListQueryHandlersRequest, ListQueryHandlersResponse>({
  builderQueryFn: getListQueryHandlers,
  queryKeyPrefix: "ListQueryHandlersQuery"
});