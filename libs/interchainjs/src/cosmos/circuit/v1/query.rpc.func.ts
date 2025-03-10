import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
export const createGetAccount = (clientResolver?: RpcResolver) => buildQuery<QueryAccountRequest, AccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: AccountResponse.decode,
  service: "cosmos.circuit.v1.Query",
  method: "Account",
  clientResolver,
  deps: [QueryAccountRequest, AccountResponse]
});
export const createGetAccounts = (clientResolver?: RpcResolver) => buildQuery<QueryAccountsRequest, AccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: AccountsResponse.decode,
  service: "cosmos.circuit.v1.Query",
  method: "Accounts",
  clientResolver,
  deps: [QueryAccountsRequest, AccountsResponse]
});
export const createGetDisabledList = (clientResolver?: RpcResolver) => buildQuery<QueryDisabledListRequest, DisabledListResponse>({
  encode: QueryDisabledListRequest.encode,
  decode: DisabledListResponse.decode,
  service: "cosmos.circuit.v1.Query",
  method: "DisabledList",
  clientResolver,
  deps: [QueryDisabledListRequest, DisabledListResponse]
});