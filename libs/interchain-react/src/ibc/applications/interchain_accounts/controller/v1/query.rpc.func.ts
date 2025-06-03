import { buildQuery } from "../../../../../helper-func-types";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/* InterchainAccount returns the interchain account address for a given owner address on a given connection */
export const getInterchainAccount = buildQuery<QueryInterchainAccountRequest, QueryInterchainAccountResponse>({
  encode: QueryInterchainAccountRequest.encode,
  decode: QueryInterchainAccountResponse.decode,
  service: "ibc.applications.interchain_accounts.controller.v1.Query",
  method: "InterchainAccount",
  deps: [QueryInterchainAccountRequest, QueryInterchainAccountResponse]
});
/* Params queries all parameters of the ICA controller submodule. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.interchain_accounts.controller.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});