import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
export const createGetBalance = (getRpcInstance: RpcResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Balance",
  method: "Balance",
  getRpcInstance: getRpcInstance
});
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const createGetAllBalances = (getRpcInstance: RpcResolver) => buildQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  encode: QueryAllBalancesRequest.encode,
  decode: QueryAllBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.AllBalances",
  method: "AllBalances",
  getRpcInstance: getRpcInstance
});
export const useGetAllBalances = buildUseQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  builderQueryFn: createGetAllBalances,
  queryKeyPrefix: "AllBalancesQuery"
});
export const createGetSpendableBalances = (getRpcInstance: RpcResolver) => buildQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  encode: QuerySpendableBalancesRequest.encode,
  decode: QuerySpendableBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.SpendableBalances",
  method: "SpendableBalances",
  getRpcInstance: getRpcInstance
});
export const useGetSpendableBalances = buildUseQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  builderQueryFn: createGetSpendableBalances,
  queryKeyPrefix: "SpendableBalancesQuery"
});
export const createGetSpendableBalanceByDenom = (getRpcInstance: RpcResolver) => buildQuery<QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse>({
  encode: QuerySpendableBalanceByDenomRequest.encode,
  decode: QuerySpendableBalanceByDenomResponse.decode,
  service: "cosmos.bank.v1beta1.SpendableBalanceByDenom",
  method: "SpendableBalanceByDenom",
  getRpcInstance: getRpcInstance
});
export const useGetSpendableBalanceByDenom = buildUseQuery<QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse>({
  builderQueryFn: createGetSpendableBalanceByDenom,
  queryKeyPrefix: "SpendableBalanceByDenomQuery"
});
export const createGetTotalSupply = (getRpcInstance: RpcResolver) => buildQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  encode: QueryTotalSupplyRequest.encode,
  decode: QueryTotalSupplyResponse.decode,
  service: "cosmos.bank.v1beta1.TotalSupply",
  method: "TotalSupply",
  getRpcInstance: getRpcInstance
});
export const useGetTotalSupply = buildUseQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  builderQueryFn: createGetTotalSupply,
  queryKeyPrefix: "TotalSupplyQuery"
});
export const createGetSupplyOf = (getRpcInstance: RpcResolver) => buildQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  encode: QuerySupplyOfRequest.encode,
  decode: QuerySupplyOfResponse.decode,
  service: "cosmos.bank.v1beta1.SupplyOf",
  method: "SupplyOf",
  getRpcInstance: getRpcInstance
});
export const useGetSupplyOf = buildUseQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  builderQueryFn: createGetSupplyOf,
  queryKeyPrefix: "SupplyOfQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetDenomMetadata = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  encode: QueryDenomMetadataRequest.encode,
  decode: QueryDenomMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.DenomMetadata",
  method: "DenomMetadata",
  getRpcInstance: getRpcInstance
});
export const useGetDenomMetadata = buildUseQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  builderQueryFn: createGetDenomMetadata,
  queryKeyPrefix: "DenomMetadataQuery"
});
export const createGetDenomMetadataByQueryString = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse>({
  encode: QueryDenomMetadataByQueryStringRequest.encode,
  decode: QueryDenomMetadataByQueryStringResponse.decode,
  service: "cosmos.bank.v1beta1.DenomMetadataByQueryString",
  method: "DenomMetadataByQueryString",
  getRpcInstance: getRpcInstance
});
export const useGetDenomMetadataByQueryString = buildUseQuery<QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse>({
  builderQueryFn: createGetDenomMetadataByQueryString,
  queryKeyPrefix: "DenomMetadataByQueryStringQuery"
});
export const createGetDenomsMetadata = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  encode: QueryDenomsMetadataRequest.encode,
  decode: QueryDenomsMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.DenomsMetadata",
  method: "DenomsMetadata",
  getRpcInstance: getRpcInstance
});
export const useGetDenomsMetadata = buildUseQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  builderQueryFn: createGetDenomsMetadata,
  queryKeyPrefix: "DenomsMetadataQuery"
});
export const createGetDenomOwners = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  encode: QueryDenomOwnersRequest.encode,
  decode: QueryDenomOwnersResponse.decode,
  service: "cosmos.bank.v1beta1.DenomOwners",
  method: "DenomOwners",
  getRpcInstance: getRpcInstance
});
export const useGetDenomOwners = buildUseQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  builderQueryFn: createGetDenomOwners,
  queryKeyPrefix: "DenomOwnersQuery"
});
export const createGetDenomOwnersByQuery = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse>({
  encode: QueryDenomOwnersByQueryRequest.encode,
  decode: QueryDenomOwnersByQueryResponse.decode,
  service: "cosmos.bank.v1beta1.DenomOwnersByQuery",
  method: "DenomOwnersByQuery",
  getRpcInstance: getRpcInstance
});
export const useGetDenomOwnersByQuery = buildUseQuery<QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse>({
  builderQueryFn: createGetDenomOwnersByQuery,
  queryKeyPrefix: "DenomOwnersByQueryQuery"
});
export const createGetSendEnabled = (getRpcInstance: RpcResolver) => buildQuery<QuerySendEnabledRequest, QuerySendEnabledResponse>({
  encode: QuerySendEnabledRequest.encode,
  decode: QuerySendEnabledResponse.decode,
  service: "cosmos.bank.v1beta1.SendEnabled",
  method: "SendEnabled",
  getRpcInstance: getRpcInstance
});
export const useGetSendEnabled = buildUseQuery<QuerySendEnabledRequest, QuerySendEnabledResponse>({
  builderQueryFn: createGetSendEnabled,
  queryKeyPrefix: "SendEnabledQuery"
});