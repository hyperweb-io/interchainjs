import { buildQuery } from "../../../helper-func-types";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse } from "./query";
export const getAccount = buildQuery<QueryAccountRequest, AccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: AccountResponse.decode,
  service: "cosmos.circuit.v1.Query",
  method: "Account"
});
export const getAccounts = buildQuery<QueryAccountsRequest, AccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: AccountsResponse.decode,
  service: "cosmos.circuit.v1.Query",
  method: "Accounts"
});
export const getDisabledList = buildQuery<QueryDisabledListRequest, DisabledListResponse>({
  encode: QueryDisabledListRequest.encode,
  decode: DisabledListResponse.decode,
  service: "cosmos.circuit.v1.Query",
  method: "DisabledList"
});