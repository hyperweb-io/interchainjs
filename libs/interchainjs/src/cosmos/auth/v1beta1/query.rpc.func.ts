import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
export const createGetAccounts = (getRpcInstance: RpcResolver) => buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encoder: QueryAccountsRequest.encode,
  decoder: QueryAccountsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Accounts",
  getRpcInstance: getRpcInstance
});
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const createGetAccount = (getRpcInstance: RpcResolver) => buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encoder: QueryAccountRequest.encode,
  decoder: QueryAccountResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Account",
  getRpcInstance: getRpcInstance
});
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: createGetAccount,
  queryKeyPrefix: "AccountQuery"
});
export const createGetAccountAddressByID = (getRpcInstance: RpcResolver) => buildQuery<QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse>({
  encoder: QueryAccountAddressByIDRequest.encode,
  decoder: QueryAccountAddressByIDResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountAddressByID",
  getRpcInstance: getRpcInstance
});
export const useGetAccountAddressByID = buildUseQuery<QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse>({
  builderQueryFn: createGetAccountAddressByID,
  queryKeyPrefix: "AccountAddressByIDQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encoder: QueryParamsRequest.encode,
  decoder: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetModuleAccounts = (getRpcInstance: RpcResolver) => buildQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  encoder: QueryModuleAccountsRequest.encode,
  decoder: QueryModuleAccountsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ModuleAccounts",
  getRpcInstance: getRpcInstance
});
export const useGetModuleAccounts = buildUseQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: createGetModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
export const createGetModuleAccountByName = (getRpcInstance: RpcResolver) => buildQuery<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>({
  encoder: QueryModuleAccountByNameRequest.encode,
  decoder: QueryModuleAccountByNameResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ModuleAccountByName",
  getRpcInstance: getRpcInstance
});
export const useGetModuleAccountByName = buildUseQuery<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>({
  builderQueryFn: createGetModuleAccountByName,
  queryKeyPrefix: "ModuleAccountByNameQuery"
});
export const createGetBech32Prefix = (getRpcInstance: RpcResolver) => buildQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  encoder: Bech32PrefixRequest.encode,
  decoder: Bech32PrefixResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Bech32Prefix",
  getRpcInstance: getRpcInstance
});
export const useGetBech32Prefix = buildUseQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: createGetBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
export const createGetAddressBytesToString = (getRpcInstance: RpcResolver) => buildQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  encoder: AddressBytesToStringRequest.encode,
  decoder: AddressBytesToStringResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AddressBytesToString",
  getRpcInstance: getRpcInstance
});
export const useGetAddressBytesToString = buildUseQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: createGetAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
export const createGetAddressStringToBytes = (getRpcInstance: RpcResolver) => buildQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  encoder: AddressStringToBytesRequest.encode,
  decoder: AddressStringToBytesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AddressStringToBytes",
  getRpcInstance: getRpcInstance
});
export const useGetAddressStringToBytes = buildUseQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: createGetAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});
export const createGetAccountInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryAccountInfoRequest, QueryAccountInfoResponse>({
  encoder: QueryAccountInfoRequest.encode,
  decoder: QueryAccountInfoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AccountInfo",
  getRpcInstance: getRpcInstance
});
export const useGetAccountInfo = buildUseQuery<QueryAccountInfoRequest, QueryAccountInfoResponse>({
  builderQueryFn: createGetAccountInfo,
  queryKeyPrefix: "AccountInfoQuery"
});