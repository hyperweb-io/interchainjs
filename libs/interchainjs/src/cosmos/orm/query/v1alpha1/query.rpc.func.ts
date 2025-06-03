import { buildQuery } from "../../../../helper-func-types";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
/* Get queries an ORM table against an unique index. */
export const getGet = buildQuery<GetRequest, GetResponse>({
  encode: GetRequest.encode,
  decode: GetResponse.decode,
  service: "cosmos.orm.query.v1alpha1.Query",
  method: "Get",
  deps: [GetRequest, GetResponse]
});
/* List queries an ORM table against an index. */
export const getList = buildQuery<ListRequest, ListResponse>({
  encode: ListRequest.encode,
  decode: ListResponse.decode,
  service: "cosmos.orm.query.v1alpha1.Query",
  method: "List",
  deps: [ListRequest, ListResponse]
});