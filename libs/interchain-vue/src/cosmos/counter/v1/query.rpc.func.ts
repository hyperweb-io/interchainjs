import { buildQuery } from "../../../helper-func-types";
import { QueryGetCountRequest, QueryGetCountResponse } from "./query";
/**
 * GetCount queries the parameters of x/Counter module.
 * @name getGetCount
 * @package cosmos.counter.v1
 * @see proto service: cosmos.counter.v1.GetCount
 */
export const getGetCount = buildQuery<QueryGetCountRequest, QueryGetCountResponse>({
  encode: QueryGetCountRequest.encode,
  decode: QueryGetCountResponse.decode,
  service: "cosmos.counter.v1.Query",
  method: "GetCount",
  deps: [QueryGetCountRequest, QueryGetCountResponse]
});