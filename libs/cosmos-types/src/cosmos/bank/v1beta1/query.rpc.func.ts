import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
export const createGetBalance = (clientResolver?: RpcResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Balance",
  clientResolver
});
export const createGetAllBalances = (clientResolver?: RpcResolver) => buildQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  encode: QueryAllBalancesRequest.encode,
  decode: QueryAllBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllBalances",
  clientResolver
});
export const createGetSpendableBalances = (clientResolver?: RpcResolver) => buildQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  encode: QuerySpendableBalancesRequest.encode,
  decode: QuerySpendableBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpendableBalances",
  clientResolver
});
export const createGetSpendableBalanceByDenom = (clientResolver?: RpcResolver) => buildQuery<QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse>({
  encode: QuerySpendableBalanceByDenomRequest.encode,
  decode: QuerySpendableBalanceByDenomResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpendableBalanceByDenom",
  clientResolver
});
export const createGetTotalSupply = (clientResolver?: RpcResolver) => buildQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  encode: QueryTotalSupplyRequest.encode,
  decode: QueryTotalSupplyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalSupply",
  clientResolver
});
export const createGetSupplyOf = (clientResolver?: RpcResolver) => buildQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  encode: QuerySupplyOfRequest.encode,
  decode: QuerySupplyOfResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SupplyOf",
  clientResolver
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const createGetDenomMetadata = (clientResolver?: RpcResolver) => buildQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  encode: QueryDenomMetadataRequest.encode,
  decode: QueryDenomMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomMetadata",
  clientResolver
});
export const createGetDenomMetadataByQueryString = (clientResolver?: RpcResolver) => buildQuery<QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse>({
  encode: QueryDenomMetadataByQueryStringRequest.encode,
  decode: QueryDenomMetadataByQueryStringResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomMetadataByQueryString",
  clientResolver
});
export const createGetDenomsMetadata = (clientResolver?: RpcResolver) => buildQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  encode: QueryDenomsMetadataRequest.encode,
  decode: QueryDenomsMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomsMetadata",
  clientResolver
});
export const createGetDenomOwners = (clientResolver?: RpcResolver) => buildQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  encode: QueryDenomOwnersRequest.encode,
  decode: QueryDenomOwnersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomOwners",
  clientResolver
});
export const createGetDenomOwnersByQuery = (clientResolver?: RpcResolver) => buildQuery<QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse>({
  encode: QueryDenomOwnersByQueryRequest.encode,
  decode: QueryDenomOwnersByQueryResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomOwnersByQuery",
  clientResolver
});
export const createGetSendEnabled = (clientResolver?: RpcResolver) => buildQuery<QuerySendEnabledRequest, QuerySendEnabledResponse>({
  encode: QuerySendEnabledRequest.encode,
  decode: QuerySendEnabledResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SendEnabled",
  clientResolver
});