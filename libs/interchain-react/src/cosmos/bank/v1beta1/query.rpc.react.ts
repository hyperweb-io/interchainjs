import { buildUseQuery } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
import { getBalance, getAllBalances, getSpendableBalances, getSpendableBalanceByDenom, getTotalSupply, getSupplyOf, getParams, getDenomMetadata, getDenomMetadataByQueryString, getDenomsMetadata, getDenomOwners, getDenomOwnersByQuery, getSendEnabled } from "./query.rpc.func";
/**
 * Balance queries the balance of a single coin for a single account.
 * @name useGetBalance
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Balance
 */
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: getBalance,
  queryKeyPrefix: "BalanceQuery"
});
/**
 * AllBalances queries the balance of all coins for a single account.
 * 
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 * @name useGetAllBalances
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.AllBalances
 */
export const useGetAllBalances = buildUseQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  builderQueryFn: getAllBalances,
  queryKeyPrefix: "AllBalancesQuery"
});
/**
 * SpendableBalances queries the spendable balance of all coins for a single
 * account.
 * 
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 * 
 * Since: cosmos-sdk 0.46
 * @name useGetSpendableBalances
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.SpendableBalances
 */
export const useGetSpendableBalances = buildUseQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  builderQueryFn: getSpendableBalances,
  queryKeyPrefix: "SpendableBalancesQuery"
});
/**
 * SpendableBalanceByDenom queries the spendable balance of a single denom for
 * a single account.
 * 
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 * 
 * Since: cosmos-sdk 0.47
 * @name useGetSpendableBalanceByDenom
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.SpendableBalanceByDenom
 */
export const useGetSpendableBalanceByDenom = buildUseQuery<QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse>({
  builderQueryFn: getSpendableBalanceByDenom,
  queryKeyPrefix: "SpendableBalanceByDenomQuery"
});
/**
 * TotalSupply queries the total supply of all coins.
 * 
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 * @name useGetTotalSupply
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.TotalSupply
 */
export const useGetTotalSupply = buildUseQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  builderQueryFn: getTotalSupply,
  queryKeyPrefix: "TotalSupplyQuery"
});
/**
 * SupplyOf queries the supply of a single coin.
 * 
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 * @name useGetSupplyOf
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.SupplyOf
 */
export const useGetSupplyOf = buildUseQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  builderQueryFn: getSupplyOf,
  queryKeyPrefix: "SupplyOfQuery"
});
/**
 * Params queries the parameters of x/bank module.
 * @name useGetParams
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * DenomMetadata queries the client metadata of a given coin denomination.
 * @name useGetDenomMetadata
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomMetadata
 */
export const useGetDenomMetadata = buildUseQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  builderQueryFn: getDenomMetadata,
  queryKeyPrefix: "DenomMetadataQuery"
});
/**
 * DenomMetadataByQueryString queries the client metadata of a given coin denomination.
 * @name useGetDenomMetadataByQueryString
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomMetadataByQueryString
 */
export const useGetDenomMetadataByQueryString = buildUseQuery<QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse>({
  builderQueryFn: getDenomMetadataByQueryString,
  queryKeyPrefix: "DenomMetadataByQueryStringQuery"
});
/**
 * DenomsMetadata queries the client metadata for all registered coin
 * denominations.
 * @name useGetDenomsMetadata
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomsMetadata
 */
export const useGetDenomsMetadata = buildUseQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  builderQueryFn: getDenomsMetadata,
  queryKeyPrefix: "DenomsMetadataQuery"
});
/**
 * DenomOwners queries for all account addresses that own a particular token
 * denomination.
 * 
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 * 
 * Since: cosmos-sdk 0.46
 * @name useGetDenomOwners
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomOwners
 */
export const useGetDenomOwners = buildUseQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  builderQueryFn: getDenomOwners,
  queryKeyPrefix: "DenomOwnersQuery"
});
/**
 * DenomOwnersByQuery queries for all account addresses that own a particular token
 * denomination.
 * 
 * Since: cosmos-sdk 0.50.3
 * @name useGetDenomOwnersByQuery
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.DenomOwnersByQuery
 */
export const useGetDenomOwnersByQuery = buildUseQuery<QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse>({
  builderQueryFn: getDenomOwnersByQuery,
  queryKeyPrefix: "DenomOwnersByQueryQuery"
});
/**
 * SendEnabled queries for SendEnabled entries.
 * 
 * This query only returns denominations that have specific SendEnabled settings.
 * Any denomination that does not have a specific setting will use the default
 * params.default_send_enabled, and will not be returned by this query.
 * 
 * Since: cosmos-sdk 0.47
 * @name useGetSendEnabled
 * @package cosmos.bank.v1beta1
 * @see proto service: cosmos.bank.v1beta1.SendEnabled
 */
export const useGetSendEnabled = buildUseQuery<QuerySendEnabledRequest, QuerySendEnabledResponse>({
  builderQueryFn: getSendEnabled,
  queryKeyPrefix: "SendEnabledQuery"
});