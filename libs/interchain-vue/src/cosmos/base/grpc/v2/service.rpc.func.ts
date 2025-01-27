import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
export const createGetQuery = (clientResolver?: RpcResolver) => buildQuery<QueryRequest, QueryResponse>({
  encode: QueryRequest.encode,
  decode: QueryResponse.decode,
  service: "cosmos.base.grpc.v2.Service",
  method: "Query",
  clientResolver
});
export const createGetListQueryHandlers = (clientResolver?: RpcResolver) => buildQuery<ListQueryHandlersRequest, ListQueryHandlersResponse>({
  encode: ListQueryHandlersRequest.encode,
  decode: ListQueryHandlersResponse.decode,
  service: "cosmos.base.grpc.v2.Service",
  method: "ListQueryHandlers",
  clientResolver
});