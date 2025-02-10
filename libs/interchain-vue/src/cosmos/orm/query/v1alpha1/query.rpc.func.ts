import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
export const createGetGet = (clientResolver?: RpcResolver) => buildQuery<GetRequest, GetResponse>({
  encode: GetRequest.encode,
  decode: GetResponse.decode,
  service: "cosmos.orm.query.v1alpha1.Query",
  method: "Get",
  clientResolver
});
export const createGetList = (clientResolver?: RpcResolver) => buildQuery<ListRequest, ListResponse>({
  encode: ListRequest.encode,
  decode: ListResponse.decode,
  service: "cosmos.orm.query.v1alpha1.Query",
  method: "List",
  clientResolver
});