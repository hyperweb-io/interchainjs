import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
export const createGetAccounts = (clientResolver?: RpcResolver) => buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Accounts",
  clientResolver
});
export const createGetAccount = (clientResolver?: RpcResolver) => buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: QueryAccountResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Account",
  clientResolver
});
export const createGetAccountAddressByID = (clientResolver?: RpcResolver) => buildQuery<QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse>({
  encode: QueryAccountAddressByIDRequest.encode,
  decode: QueryAccountAddressByIDResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AccountAddressByID",
  clientResolver
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const createGetModuleAccounts = (clientResolver?: RpcResolver) => buildQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  encode: QueryModuleAccountsRequest.encode,
  decode: QueryModuleAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "ModuleAccounts",
  clientResolver
});
export const createGetModuleAccountByName = (clientResolver?: RpcResolver) => buildQuery<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>({
  encode: QueryModuleAccountByNameRequest.encode,
  decode: QueryModuleAccountByNameResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "ModuleAccountByName",
  clientResolver
});
export const createGetBech32Prefix = (clientResolver?: RpcResolver) => buildQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  encode: Bech32PrefixRequest.encode,
  decode: Bech32PrefixResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Bech32Prefix",
  clientResolver
});
export const createGetAddressBytesToString = (clientResolver?: RpcResolver) => buildQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  encode: AddressBytesToStringRequest.encode,
  decode: AddressBytesToStringResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressBytesToString",
  clientResolver
});
export const createGetAddressStringToBytes = (clientResolver?: RpcResolver) => buildQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  encode: AddressStringToBytesRequest.encode,
  decode: AddressStringToBytesResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressStringToBytes",
  clientResolver
});
export const createGetAccountInfo = (clientResolver?: RpcResolver) => buildQuery<QueryAccountInfoRequest, QueryAccountInfoResponse>({
  encode: QueryAccountInfoRequest.encode,
  decode: QueryAccountInfoResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AccountInfo",
  clientResolver
});