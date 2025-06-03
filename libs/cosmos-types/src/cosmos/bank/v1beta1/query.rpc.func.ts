import { buildQuery } from "../../../helper-func-types";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
/* Balance queries the balance of a single coin for a single account. */
export const getBalance = buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Balance"
});
/* AllBalances queries the balance of all coins for a single account.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getAllBalances = buildQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  encode: QueryAllBalancesRequest.encode,
  decode: QueryAllBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllBalances"
});
/* SpendableBalances queries the spendable balance of all coins for a single
 account.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set.

 Since: cosmos-sdk 0.46 */
export const getSpendableBalances = buildQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  encode: QuerySpendableBalancesRequest.encode,
  decode: QuerySpendableBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpendableBalances"
});
/* SpendableBalanceByDenom queries the spendable balance of a single denom for
 a single account.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set.

 Since: cosmos-sdk 0.47 */
export const getSpendableBalanceByDenom = buildQuery<QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse>({
  encode: QuerySpendableBalanceByDenomRequest.encode,
  decode: QuerySpendableBalanceByDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpendableBalanceByDenom"
});
/* TotalSupply queries the total supply of all coins.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getTotalSupply = buildQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  encode: QueryTotalSupplyRequest.encode,
  decode: QueryTotalSupplyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalSupply"
});
/* SupplyOf queries the supply of a single coin.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set. */
export const getSupplyOf = buildQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  encode: QuerySupplyOfRequest.encode,
  decode: QuerySupplyOfResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SupplyOf"
});
/* Params queries the parameters of x/bank module. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params"
});
/* DenomMetadata queries the client metadata of a given coin denomination. */
export const getDenomMetadata = buildQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  encode: QueryDenomMetadataRequest.encode,
  decode: QueryDenomMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomMetadata"
});
/* DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
export const getDenomMetadataByQueryString = buildQuery<QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse>({
  encode: QueryDenomMetadataByQueryStringRequest.encode,
  decode: QueryDenomMetadataByQueryStringResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomMetadataByQueryString"
});
/* DenomsMetadata queries the client metadata for all registered coin
 denominations. */
export const getDenomsMetadata = buildQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  encode: QueryDenomsMetadataRequest.encode,
  decode: QueryDenomsMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomsMetadata"
});
/* DenomOwners queries for all account addresses that own a particular token
 denomination.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set.

 Since: cosmos-sdk 0.46 */
export const getDenomOwners = buildQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  encode: QueryDenomOwnersRequest.encode,
  decode: QueryDenomOwnersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomOwners"
});
/* DenomOwnersByQuery queries for all account addresses that own a particular token
 denomination.

 Since: cosmos-sdk 0.50.3 */
export const getDenomOwnersByQuery = buildQuery<QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse>({
  encode: QueryDenomOwnersByQueryRequest.encode,
  decode: QueryDenomOwnersByQueryResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomOwnersByQuery"
});
/* SendEnabled queries for SendEnabled entries.

 This query only returns denominations that have specific SendEnabled settings.
 Any denomination that does not have a specific setting will use the default
 params.default_send_enabled, and will not be returned by this query.

 Since: cosmos-sdk 0.47 */
export const getSendEnabled = buildQuery<QuerySendEnabledRequest, QuerySendEnabledResponse>({
  encode: QuerySendEnabledRequest.encode,
  decode: QuerySendEnabledResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SendEnabled"
});