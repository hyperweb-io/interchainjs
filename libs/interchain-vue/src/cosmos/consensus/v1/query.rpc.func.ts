import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
/* Params queries the parameters of x/consensus module. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.consensus.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});