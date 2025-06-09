import { buildUseQuery } from "../../../../react-query";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
import { getQuery, getListQueryHandlers } from "./service.rpc.func";
/**
 * Query queries the server with a request, the request can be any sdk Msg.
 * @name useGetQuery
 * @package cosmos.base.grpc.v2
 * @see proto service: cosmos.base.grpc.v2.Query
 */
export const useGetQuery = buildUseQuery<QueryRequest, QueryResponse>({
  builderQueryFn: getQuery,
  queryKeyPrefix: "QueryQuery"
});
/**
 * ListQueryHandlers lists all the available query handlers.
 * @name useGetListQueryHandlers
 * @package cosmos.base.grpc.v2
 * @see proto service: cosmos.base.grpc.v2.ListQueryHandlers
 */
export const useGetListQueryHandlers = buildUseQuery<ListQueryHandlersRequest, ListQueryHandlersResponse>({
  builderQueryFn: getListQueryHandlers,
  queryKeyPrefix: "ListQueryHandlersQuery"
});