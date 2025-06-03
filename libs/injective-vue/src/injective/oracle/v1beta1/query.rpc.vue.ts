import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
import { getParams, getBandRelayers, getBandPriceStates, getBandIBCPriceStates, getPriceFeedPriceStates, getCoinbasePriceStates, getPythPriceStates, getStorkPriceStates, getStorkPublishers, getProviderPriceState, getOracleModuleState, getHistoricalPriceRecords, getOracleVolatility, getOracleProvidersInfo, getOracleProviderPrices, getOraclePrice, getPythPrice } from "./query.rpc.func";
/* Retrieves oracle params */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* Retrieves the band relayers */
export const useGetBandRelayers = buildUseVueQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  builderQueryFn: getBandRelayers,
  queryKeyPrefix: "BandRelayersQuery"
});
/* Retrieves the state for all band price feeds */
export const useGetBandPriceStates = buildUseVueQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  builderQueryFn: getBandPriceStates,
  queryKeyPrefix: "BandPriceStatesQuery"
});
/* Retrieves the state for all band ibc price feeds */
export const useGetBandIBCPriceStates = buildUseVueQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  builderQueryFn: getBandIBCPriceStates,
  queryKeyPrefix: "BandIBCPriceStatesQuery"
});
/* Retrieves the state for all price feeds */
export const useGetPriceFeedPriceStates = buildUseVueQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  builderQueryFn: getPriceFeedPriceStates,
  queryKeyPrefix: "PriceFeedPriceStatesQuery"
});
/* Retrieves the state for all coinbase price feeds */
export const useGetCoinbasePriceStates = buildUseVueQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  builderQueryFn: getCoinbasePriceStates,
  queryKeyPrefix: "CoinbasePriceStatesQuery"
});
/* Retrieves the state for all pyth price feeds */
export const useGetPythPriceStates = buildUseVueQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  builderQueryFn: getPythPriceStates,
  queryKeyPrefix: "PythPriceStatesQuery"
});
/* Retrieves the state for all stork price feeds */
export const useGetStorkPriceStates = buildUseVueQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  builderQueryFn: getStorkPriceStates,
  queryKeyPrefix: "StorkPriceStatesQuery"
});
/* Retrieves all stork publishers */
export const useGetStorkPublishers = buildUseVueQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  builderQueryFn: getStorkPublishers,
  queryKeyPrefix: "StorkPublishersQuery"
});
/* Retrieves the state for all provider price feeds */
export const useGetProviderPriceState = buildUseVueQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  builderQueryFn: getProviderPriceState,
  queryKeyPrefix: "ProviderPriceStateQuery"
});
/* Retrieves the entire oracle module's state */
export const useGetOracleModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getOracleModuleState,
  queryKeyPrefix: "OracleModuleStateQuery"
});
/* Retrieves historical price records for a given OracleType and Symbol */
export const useGetHistoricalPriceRecords = buildUseVueQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  builderQueryFn: getHistoricalPriceRecords,
  queryKeyPrefix: "HistoricalPriceRecordsQuery"
});
/* Retrieves mixed volatility value for the specified pair of base/quote */
export const useGetOracleVolatility = buildUseVueQuery<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>({
  builderQueryFn: getOracleVolatility,
  queryKeyPrefix: "OracleVolatilityQuery"
});
export const useGetOracleProvidersInfo = buildUseVueQuery<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>({
  builderQueryFn: getOracleProvidersInfo,
  queryKeyPrefix: "OracleProvidersInfoQuery"
});
export const useGetOracleProviderPrices = buildUseVueQuery<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>({
  builderQueryFn: getOracleProviderPrices,
  queryKeyPrefix: "OracleProviderPricesQuery"
});
export const useGetOraclePrice = buildUseVueQuery<QueryOraclePriceRequest, QueryOraclePriceResponse>({
  builderQueryFn: getOraclePrice,
  queryKeyPrefix: "OraclePriceQuery"
});
export const useGetPythPrice = buildUseVueQuery<QueryPythPriceRequest, QueryPythPriceResponse>({
  builderQueryFn: getPythPrice,
  queryKeyPrefix: "PythPriceQuery"
});