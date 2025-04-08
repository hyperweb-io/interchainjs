import { buildQuery } from "../../../helper-func-types";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
export const getAccounts = buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Accounts"
});
export const getAccount = buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: QueryAccountResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Account"
});
export const getAccountAddressByID = buildQuery<QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse>({
  encode: QueryAccountAddressByIDRequest.encode,
  decode: QueryAccountAddressByIDResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AccountAddressByID"
});
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Params"
});
export const getModuleAccounts = buildQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  encode: QueryModuleAccountsRequest.encode,
  decode: QueryModuleAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "ModuleAccounts"
});
export const getModuleAccountByName = buildQuery<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>({
  encode: QueryModuleAccountByNameRequest.encode,
  decode: QueryModuleAccountByNameResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "ModuleAccountByName"
});
export const getBech32Prefix = buildQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  encode: Bech32PrefixRequest.encode,
  decode: Bech32PrefixResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Bech32Prefix"
});
export const getAddressBytesToString = buildQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  encode: AddressBytesToStringRequest.encode,
  decode: AddressBytesToStringResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressBytesToString"
});
export const getAddressStringToBytes = buildQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  encode: AddressStringToBytesRequest.encode,
  decode: AddressStringToBytesResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressStringToBytes"
});
export const getAccountInfo = buildQuery<QueryAccountInfoRequest, QueryAccountInfoResponse>({
  encode: QueryAccountInfoRequest.encode,
  decode: QueryAccountInfoResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AccountInfo"
});