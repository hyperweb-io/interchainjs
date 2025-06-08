import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
import { getParams, getBandRelayers, getBandPriceStates, getBandIBCPriceStates, getPriceFeedPriceStates, getCoinbasePriceStates, getPythPriceStates, getStorkPriceStates, getStorkPublishers, getProviderPriceState, getOracleModuleState, getHistoricalPriceRecords, getOracleVolatility, getOracleProvidersInfo, getOracleProviderPrices, getOraclePrice, getPythPrice } from "./query.rpc.func";
/**
 * Retrieves oracle params
 * @name useGetParams
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.Params
 */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Retrieves the band relayers
 * @name useGetBandRelayers
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.BandRelayers
 */
export const useGetBandRelayers = buildUseQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  builderQueryFn: getBandRelayers,
  queryKeyPrefix: "BandRelayersQuery"
});
/**
 * Retrieves the state for all band price feeds
 * @name useGetBandPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.BandPriceStates
 */
export const useGetBandPriceStates = buildUseQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  builderQueryFn: getBandPriceStates,
  queryKeyPrefix: "BandPriceStatesQuery"
});
/**
 * Retrieves the state for all band ibc price feeds
 * @name useGetBandIBCPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.BandIBCPriceStates
 */
export const useGetBandIBCPriceStates = buildUseQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  builderQueryFn: getBandIBCPriceStates,
  queryKeyPrefix: "BandIBCPriceStatesQuery"
});
/**
 * Retrieves the state for all price feeds
 * @name useGetPriceFeedPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.PriceFeedPriceStates
 */
export const useGetPriceFeedPriceStates = buildUseQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  builderQueryFn: getPriceFeedPriceStates,
  queryKeyPrefix: "PriceFeedPriceStatesQuery"
});
/**
 * Retrieves the state for all coinbase price feeds
 * @name useGetCoinbasePriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.CoinbasePriceStates
 */
export const useGetCoinbasePriceStates = buildUseQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  builderQueryFn: getCoinbasePriceStates,
  queryKeyPrefix: "CoinbasePriceStatesQuery"
});
/**
 * Retrieves the state for all pyth price feeds
 * @name useGetPythPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.PythPriceStates
 */
export const useGetPythPriceStates = buildUseQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  builderQueryFn: getPythPriceStates,
  queryKeyPrefix: "PythPriceStatesQuery"
});
/**
 * Retrieves the state for all stork price feeds
 * @name useGetStorkPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.StorkPriceStates
 */
export const useGetStorkPriceStates = buildUseQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  builderQueryFn: getStorkPriceStates,
  queryKeyPrefix: "StorkPriceStatesQuery"
});
/**
 * Retrieves all stork publishers
 * @name useGetStorkPublishers
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.StorkPublishers
 */
export const useGetStorkPublishers = buildUseQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  builderQueryFn: getStorkPublishers,
  queryKeyPrefix: "StorkPublishersQuery"
});
/**
 * Retrieves the state for all provider price feeds
 * @name useGetProviderPriceState
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.ProviderPriceState
 */
export const useGetProviderPriceState = buildUseQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  builderQueryFn: getProviderPriceState,
  queryKeyPrefix: "ProviderPriceStateQuery"
});
/**
 * Retrieves the entire oracle module's state
 * @name useGetOracleModuleState
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OracleModuleState
 */
export const useGetOracleModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getOracleModuleState,
  queryKeyPrefix: "OracleModuleStateQuery"
});
/**
 * Retrieves historical price records for a given OracleType and Symbol
 * @name useGetHistoricalPriceRecords
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.HistoricalPriceRecords
 */
export const useGetHistoricalPriceRecords = buildUseQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  builderQueryFn: getHistoricalPriceRecords,
  queryKeyPrefix: "HistoricalPriceRecordsQuery"
});
/**
 * Retrieves mixed volatility value for the specified pair of base/quote
 * @name useGetOracleVolatility
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OracleVolatility
 */
export const useGetOracleVolatility = buildUseQuery<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>({
  builderQueryFn: getOracleVolatility,
  queryKeyPrefix: "OracleVolatilityQuery"
});
/**
 * @name useGetOracleProvidersInfo
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OracleProvidersInfo
 */
export const useGetOracleProvidersInfo = buildUseQuery<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>({
  builderQueryFn: getOracleProvidersInfo,
  queryKeyPrefix: "OracleProvidersInfoQuery"
});
/**
 * @name useGetOracleProviderPrices
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OracleProviderPrices
 */
export const useGetOracleProviderPrices = buildUseQuery<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>({
  builderQueryFn: getOracleProviderPrices,
  queryKeyPrefix: "OracleProviderPricesQuery"
});
/**
 * @name useGetOraclePrice
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OraclePrice
 */
export const useGetOraclePrice = buildUseQuery<QueryOraclePriceRequest, QueryOraclePriceResponse>({
  builderQueryFn: getOraclePrice,
  queryKeyPrefix: "OraclePriceQuery"
});
/**
 * @name useGetPythPrice
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.PythPrice
 */
export const useGetPythPrice = buildUseQuery<QueryPythPriceRequest, QueryPythPriceResponse>({
  builderQueryFn: getPythPrice,
  queryKeyPrefix: "PythPriceQuery"
});