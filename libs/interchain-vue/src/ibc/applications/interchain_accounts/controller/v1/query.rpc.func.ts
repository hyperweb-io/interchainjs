import { buildQuery } from "../../../../../helper-func-types";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const getInterchainAccount = buildQuery<QueryInterchainAccountRequest, QueryInterchainAccountResponse>({
  encode: QueryInterchainAccountRequest.encode,
  decode: QueryInterchainAccountResponse.decode,
  service: "ibc.applications.interchain_accounts.controller.v1.Query",
  method: "InterchainAccount"
});
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.interchain_accounts.controller.v1.Query",
  method: "Params"
});