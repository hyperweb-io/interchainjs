import { buildQuery } from "../../../../helper-func-types";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
/* Query queries the server with a request, the request can be any sdk Msg. */
export const getQuery = buildQuery<QueryRequest, QueryResponse>({
  encode: QueryRequest.encode,
  decode: QueryResponse.decode,
  service: "cosmos.base.grpc.v2.Service",
  method: "Query",
  deps: [QueryRequest, QueryResponse]
});
/* ListQueryHandlers lists all the available query handlers. */
export const getListQueryHandlers = buildQuery<ListQueryHandlersRequest, ListQueryHandlersResponse>({
  encode: ListQueryHandlersRequest.encode,
  decode: ListQueryHandlersResponse.decode,
  service: "cosmos.base.grpc.v2.Service",
  method: "ListQueryHandlers",
  deps: [ListQueryHandlersRequest, ListQueryHandlersResponse]
});