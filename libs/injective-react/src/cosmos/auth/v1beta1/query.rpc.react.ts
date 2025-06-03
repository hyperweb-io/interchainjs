import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
import { getAccounts, getAccount, getAccountAddressByID, getParams, getModuleAccounts, getModuleAccountByName, getBech32Prefix, getAddressBytesToString, getAddressStringToBytes, getAccountInfo } from "./query.rpc.func";
/* Accounts returns all the existing accounts.

 When called from another module, this query might consume a high amount of
 gas if the pagination field is incorrectly set.

 Since: cosmos-sdk 0.43 */
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
/* Account returns account details based on address. */
export const useGetAccount = buildUseQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
/* AccountAddressByID returns account address based on account number.

 Since: cosmos-sdk 0.46.2 */
export const useGetAccountAddressByID = buildUseQuery<QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse>({
  builderQueryFn: getAccountAddressByID,
  queryKeyPrefix: "AccountAddressByIDQuery"
});
/* Params queries all parameters. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* ModuleAccounts returns all the existing module accounts.

 Since: cosmos-sdk 0.46 */
export const useGetModuleAccounts = buildUseQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: getModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
/* ModuleAccountByName returns the module account info by module name */
export const useGetModuleAccountByName = buildUseQuery<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>({
  builderQueryFn: getModuleAccountByName,
  queryKeyPrefix: "ModuleAccountByNameQuery"
});
/* Bech32Prefix queries bech32Prefix

 Since: cosmos-sdk 0.46 */
export const useGetBech32Prefix = buildUseQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: getBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
/* AddressBytesToString converts Account Address bytes to string

 Since: cosmos-sdk 0.46 */
export const useGetAddressBytesToString = buildUseQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: getAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
/* AddressStringToBytes converts Address string to bytes

 Since: cosmos-sdk 0.46 */
export const useGetAddressStringToBytes = buildUseQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: getAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});
/* AccountInfo queries account info which is common to all account types.

 Since: cosmos-sdk 0.47 */
export const useGetAccountInfo = buildUseQuery<QueryAccountInfoRequest, QueryAccountInfoResponse>({
  builderQueryFn: getAccountInfo,
  queryKeyPrefix: "AccountInfoQuery"
});