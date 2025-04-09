import { buildUseVueQuery } from "../../../vue-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
import { getAccounts, getAccount, getAccountAddressByID, getParams, getModuleAccounts, getModuleAccountByName, getBech32Prefix, getAddressBytesToString, getAddressStringToBytes, getAccountInfo } from "./query.rpc.func";
export const useGetAccounts = buildUseVueQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: getAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const useGetAccount = buildUseVueQuery<QueryAccountRequest, QueryAccountResponse>({
  builderQueryFn: getAccount,
  queryKeyPrefix: "AccountQuery"
});
export const useGetAccountAddressByID = buildUseVueQuery<QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse>({
  builderQueryFn: getAccountAddressByID,
  queryKeyPrefix: "AccountAddressByIDQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetModuleAccounts = buildUseVueQuery<QueryModuleAccountsRequest, QueryModuleAccountsResponse>({
  builderQueryFn: getModuleAccounts,
  queryKeyPrefix: "ModuleAccountsQuery"
});
export const useGetModuleAccountByName = buildUseVueQuery<QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse>({
  builderQueryFn: getModuleAccountByName,
  queryKeyPrefix: "ModuleAccountByNameQuery"
});
export const useGetBech32Prefix = buildUseVueQuery<Bech32PrefixRequest, Bech32PrefixResponse>({
  builderQueryFn: getBech32Prefix,
  queryKeyPrefix: "Bech32PrefixQuery"
});
export const useGetAddressBytesToString = buildUseVueQuery<AddressBytesToStringRequest, AddressBytesToStringResponse>({
  builderQueryFn: getAddressBytesToString,
  queryKeyPrefix: "AddressBytesToStringQuery"
});
export const useGetAddressStringToBytes = buildUseVueQuery<AddressStringToBytesRequest, AddressStringToBytesResponse>({
  builderQueryFn: getAddressStringToBytes,
  queryKeyPrefix: "AddressStringToBytesQuery"
});
export const useGetAccountInfo = buildUseVueQuery<QueryAccountInfoRequest, QueryAccountInfoResponse>({
  builderQueryFn: getAccountInfo,
  queryKeyPrefix: "AccountInfoQuery"
});