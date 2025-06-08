import { buildUseVueQuery } from "../../../vue-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
import { getAccounts, getAccount, getAccountAddressByID, getParams, getModuleAccounts, getModuleAccountByName, getBech32Prefix, getAddressBytesToString, getAddressStringToBytes, getAccountInfo } from "./query.rpc.func";
/**
 * Accounts returns all the existing accounts.
 * 
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 * 
 * Since: cosmos-sdk 0.43
 * @name useGetAccounts
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Accounts
 */
export const useGetAccounts = buildUseVueQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
/**
 * Account returns account details based on address.
 * @name useGetAccount
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Account
 */
export const useGetAccount = buildUseVueQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
/**
 * AccountAddressByID returns account address based on account number.
 * 
 * Since: cosmos-sdk 0.46.2
 * @name useGetAccountAddressByID
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AccountAddressByID
 */
export const useGetAccountAddressByID = buildUseVueQuery<QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse>({
  builderQueryFn: getAccountAddressByID,
  queryKeyPrefix: "AccountAddressByIDQuery"
});
/**
 * Params queries all parameters.
 * @name useGetParams
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Params
 */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * ModuleAccounts returns all the existing module accounts.
 * 
 * Since: cosmos-sdk 0.46
 * @name useGetModuleAccounts
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.ModuleAccounts
 */
export const useGetModuleAccounts = buildUseVueQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: getModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
/**
 * ModuleAccountByName returns the module account info by module name
 * @name useGetModuleAccountByName
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.ModuleAccountByName
 */
export const useGetModuleAccountByName = buildUseVueQuery<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>({
  builderQueryFn: getModuleAccountByName,
  queryKeyPrefix: "ModuleAccountByNameQuery"
});
/**
 * Bech32Prefix queries bech32Prefix
 * 
 * Since: cosmos-sdk 0.46
 * @name useGetBech32Prefix
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.Bech32Prefix
 */
export const useGetBech32Prefix = buildUseVueQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: getBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
/**
 * AddressBytesToString converts Account Address bytes to string
 * 
 * Since: cosmos-sdk 0.46
 * @name useGetAddressBytesToString
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AddressBytesToString
 */
export const useGetAddressBytesToString = buildUseVueQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: getAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
/**
 * AddressStringToBytes converts Address string to bytes
 * 
 * Since: cosmos-sdk 0.46
 * @name useGetAddressStringToBytes
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AddressStringToBytes
 */
export const useGetAddressStringToBytes = buildUseVueQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: getAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});
/**
 * AccountInfo queries account info which is common to all account types.
 * 
 * Since: cosmos-sdk 0.47
 * @name useGetAccountInfo
 * @package cosmos.auth.v1beta1
 * @see proto service: cosmos.auth.v1beta1.AccountInfo
 */
export const useGetAccountInfo = buildUseVueQuery<QueryAccountInfoRequest, QueryAccountInfoResponse>({
  builderQueryFn: getAccountInfo,
  queryKeyPrefix: "AccountInfoQuery"
});