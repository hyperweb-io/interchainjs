import { buildQuery } from "../../../helper-func-types";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
/**
 * Accounts returns all the existing accounts.
 * 
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 * @name getAccounts
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Accounts
 */
export const getAccounts = buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Accounts"
});
/**
 * Account returns account details based on address.
 * @name getAccount
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Account
 */
export const getAccount = buildQuery<QueryAccountRequest, QueryAccountResponse>({
  encode: QueryAccountRequest.encode,
  decode: QueryAccountResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Account"
});
/**
 * AccountAddressByID returns account address based on account number.
 * @name getAccountAddressByID
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AccountAddressByID
 */
export const getAccountAddressByID = buildQuery<QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse>({
  encode: QueryAccountAddressByIDRequest.encode,
  decode: QueryAccountAddressByIDResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AccountAddressByID"
});
/**
 * Params queries all parameters.
 * @name getParams
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Params"
});
/**
 * ModuleAccounts returns all the existing module accounts.
 * @name getModuleAccounts
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.ModuleAccounts
 */
export const getModuleAccounts = buildQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  encode: QueryModuleAccountsRequest.encode,
  decode: QueryModuleAccountsResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "ModuleAccounts"
});
/**
 * ModuleAccountByName returns the module account info by module name
 * @name getModuleAccountByName
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.ModuleAccountByName
 */
export const getModuleAccountByName = buildQuery<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>({
  encode: QueryModuleAccountByNameRequest.encode,
  decode: QueryModuleAccountByNameResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "ModuleAccountByName"
});
/**
 * Bech32Prefix queries bech32Prefix
 * @name getBech32Prefix
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Bech32Prefix
 */
export const getBech32Prefix = buildQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  encode: Bech32PrefixRequest.encode,
  decode: Bech32PrefixResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "Bech32Prefix"
});
/**
 * AddressBytesToString converts Account Address bytes to string
 * @name getAddressBytesToString
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AddressBytesToString
 */
export const getAddressBytesToString = buildQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  encode: AddressBytesToStringRequest.encode,
  decode: AddressBytesToStringResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressBytesToString"
});
/**
 * AddressStringToBytes converts Address string to bytes
 * @name getAddressStringToBytes
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AddressStringToBytes
 */
export const getAddressStringToBytes = buildQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  encode: AddressStringToBytesRequest.encode,
  decode: AddressStringToBytesResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AddressStringToBytes"
});
/**
 * AccountInfo queries account info which is common to all account types.
 * @name getAccountInfo
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AccountInfo
 */
export const getAccountInfo = buildQuery<QueryAccountInfoRequest, QueryAccountInfoResponse>({
  encode: QueryAccountInfoRequest.encode,
  decode: QueryAccountInfoResponse.decode,
  service: "cosmos.auth.v1beta1.Query",
  method: "AccountInfo"
});