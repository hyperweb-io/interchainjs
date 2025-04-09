import { buildQuery } from "../../../../helper-func-types";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
export const getQuery = buildQuery<QueryRequest, QueryResponse>({
  encode: QueryRequest.encode,
  decode: QueryResponse.decode,
  service: "cosmos.base.grpc.v2.Service",
  method: "Query",
  deps: [QueryRequest, QueryResponse]
});
export const getListQueryHandlers = buildQuery<ListQueryHandlersRequest, ListQueryHandlersResponse>({
  encode: ListQueryHandlersRequest.encode,
  decode: ListQueryHandlersResponse.decode,
  service: "cosmos.base.grpc.v2.Service",
  method: "ListQueryHandlers",
  deps: [ListQueryHandlersRequest, ListQueryHandlersResponse]
});