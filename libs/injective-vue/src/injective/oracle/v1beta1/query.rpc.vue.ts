import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
import { getParams, getBandRelayers, getBandPriceStates, getBandIBCPriceStates, getPriceFeedPriceStates, getCoinbasePriceStates, getPythPriceStates, getStorkPriceStates, getStorkPublishers, getProviderPriceState, getOracleModuleState, getHistoricalPriceRecords, getOracleVolatility, getOracleProvidersInfo, getOracleProviderPrices, getOraclePrice, getPythPrice } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetBandRelayers = buildUseVueQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  builderQueryFn: getBandRelayers,
  queryKeyPrefix: "BandRelayersQuery"
});
export const useGetBandPriceStates = buildUseVueQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  builderQueryFn: getBandPriceStates,
  queryKeyPrefix: "BandPriceStatesQuery"
});
export const useGetBandIBCPriceStates = buildUseVueQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  builderQueryFn: getBandIBCPriceStates,
  queryKeyPrefix: "BandIBCPriceStatesQuery"
});
export const useGetPriceFeedPriceStates = buildUseVueQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  builderQueryFn: getPriceFeedPriceStates,
  queryKeyPrefix: "PriceFeedPriceStatesQuery"
});
export const useGetCoinbasePriceStates = buildUseVueQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  builderQueryFn: getCoinbasePriceStates,
  queryKeyPrefix: "CoinbasePriceStatesQuery"
});
export const useGetPythPriceStates = buildUseVueQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  builderQueryFn: getPythPriceStates,
  queryKeyPrefix: "PythPriceStatesQuery"
});
export const useGetStorkPriceStates = buildUseVueQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  builderQueryFn: getStorkPriceStates,
  queryKeyPrefix: "StorkPriceStatesQuery"
});
export const useGetStorkPublishers = buildUseVueQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  builderQueryFn: getStorkPublishers,
  queryKeyPrefix: "StorkPublishersQuery"
});
export const useGetProviderPriceState = buildUseVueQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  builderQueryFn: getProviderPriceState,
  queryKeyPrefix: "ProviderPriceStateQuery"
});
export const useGetOracleModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getOracleModuleState,
  queryKeyPrefix: "OracleModuleStateQuery"
});
export const useGetHistoricalPriceRecords = buildUseVueQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  builderQueryFn: getHistoricalPriceRecords,
  queryKeyPrefix: "HistoricalPriceRecordsQuery"
});
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