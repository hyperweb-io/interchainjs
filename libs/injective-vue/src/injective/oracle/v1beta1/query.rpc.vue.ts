import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
import { createGetParams, createGetBandRelayers, createGetBandPriceStates, createGetBandIBCPriceStates, createGetPriceFeedPriceStates, createGetCoinbasePriceStates, createGetPythPriceStates, createGetStorkPriceStates, createGetStorkPublishers, createGetProviderPriceState, createGetOracleModuleState, createGetHistoricalPriceRecords, createGetOracleVolatility, createGetOracleProvidersInfo, createGetOracleProviderPrices, createGetOraclePrice, createGetPythPrice } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetBandRelayers = buildUseVueQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  builderQueryFn: createGetBandRelayers,
  queryKeyPrefix: "BandRelayersQuery"
});
export const useGetBandPriceStates = buildUseVueQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  builderQueryFn: createGetBandPriceStates,
  queryKeyPrefix: "BandPriceStatesQuery"
});
export const useGetBandIBCPriceStates = buildUseVueQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  builderQueryFn: createGetBandIBCPriceStates,
  queryKeyPrefix: "BandIBCPriceStatesQuery"
});
export const useGetPriceFeedPriceStates = buildUseVueQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  builderQueryFn: createGetPriceFeedPriceStates,
  queryKeyPrefix: "PriceFeedPriceStatesQuery"
});
export const useGetCoinbasePriceStates = buildUseVueQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  builderQueryFn: createGetCoinbasePriceStates,
  queryKeyPrefix: "CoinbasePriceStatesQuery"
});
export const useGetPythPriceStates = buildUseVueQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  builderQueryFn: createGetPythPriceStates,
  queryKeyPrefix: "PythPriceStatesQuery"
});
export const useGetStorkPriceStates = buildUseVueQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  builderQueryFn: createGetStorkPriceStates,
  queryKeyPrefix: "StorkPriceStatesQuery"
});
export const useGetStorkPublishers = buildUseVueQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  builderQueryFn: createGetStorkPublishers,
  queryKeyPrefix: "StorkPublishersQuery"
});
export const useGetProviderPriceState = buildUseVueQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  builderQueryFn: createGetProviderPriceState,
  queryKeyPrefix: "ProviderPriceStateQuery"
});
export const useGetOracleModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetOracleModuleState,
  queryKeyPrefix: "OracleModuleStateQuery"
});
export const useGetHistoricalPriceRecords = buildUseVueQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  builderQueryFn: createGetHistoricalPriceRecords,
  queryKeyPrefix: "HistoricalPriceRecordsQuery"
});
export const useGetOracleVolatility = buildUseVueQuery<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>({
  builderQueryFn: createGetOracleVolatility,
  queryKeyPrefix: "OracleVolatilityQuery"
});
export const useGetOracleProvidersInfo = buildUseVueQuery<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>({
  builderQueryFn: createGetOracleProvidersInfo,
  queryKeyPrefix: "OracleProvidersInfoQuery"
});
export const useGetOracleProviderPrices = buildUseVueQuery<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>({
  builderQueryFn: createGetOracleProviderPrices,
  queryKeyPrefix: "OracleProviderPricesQuery"
});
export const useGetOraclePrice = buildUseVueQuery<QueryOraclePriceRequest, QueryOraclePriceResponse>({
  builderQueryFn: createGetOraclePrice,
  queryKeyPrefix: "OraclePriceQuery"
});
export const useGetPythPrice = buildUseVueQuery<QueryPythPriceRequest, QueryPythPriceResponse>({
  builderQueryFn: createGetPythPrice,
  queryKeyPrefix: "PythPriceQuery"
});