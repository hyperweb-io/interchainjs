import { buildQuery } from "../../../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * Params queries all parameters of the ICA host submodule.
 * @name getParams
 * @package ibc.applications.interchain_accounts.host.v1
 * @see proto service: ibc.applications.interchain_accounts.host.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.interchain_accounts.host.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});