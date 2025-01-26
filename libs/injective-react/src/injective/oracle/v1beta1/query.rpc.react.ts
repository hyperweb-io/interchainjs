import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
import { createGetParams, createGetBandRelayers, createGetBandPriceStates, createGetBandIBCPriceStates, createGetPriceFeedPriceStates, createGetCoinbasePriceStates, createGetPythPriceStates, createGetStorkPriceStates, createGetStorkPublishers, createGetProviderPriceState, createGetOracleModuleState, createGetHistoricalPriceRecords, createGetOracleVolatility, createGetOracleProvidersInfo, createGetOracleProviderPrices, createGetOraclePrice, createGetPythPrice } from "./query.rpc.func.ts";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetBandRelayers = buildUseQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  builderQueryFn: createGetBandRelayers,
  queryKeyPrefix: "BandRelayersQuery"
});
export const useGetBandPriceStates = buildUseQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  builderQueryFn: createGetBandPriceStates,
  queryKeyPrefix: "BandPriceStatesQuery"
});
export const useGetBandIBCPriceStates = buildUseQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  builderQueryFn: createGetBandIBCPriceStates,
  queryKeyPrefix: "BandIBCPriceStatesQuery"
});
export const useGetPriceFeedPriceStates = buildUseQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  builderQueryFn: createGetPriceFeedPriceStates,
  queryKeyPrefix: "PriceFeedPriceStatesQuery"
});
export const useGetCoinbasePriceStates = buildUseQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  builderQueryFn: createGetCoinbasePriceStates,
  queryKeyPrefix: "CoinbasePriceStatesQuery"
});
export const useGetPythPriceStates = buildUseQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  builderQueryFn: createGetPythPriceStates,
  queryKeyPrefix: "PythPriceStatesQuery"
});
export const useGetStorkPriceStates = buildUseQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  builderQueryFn: createGetStorkPriceStates,
  queryKeyPrefix: "StorkPriceStatesQuery"
});
export const useGetStorkPublishers = buildUseQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  builderQueryFn: createGetStorkPublishers,
  queryKeyPrefix: "StorkPublishersQuery"
});
export const useGetProviderPriceState = buildUseQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  builderQueryFn: createGetProviderPriceState,
  queryKeyPrefix: "ProviderPriceStateQuery"
});
export const useGetOracleModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetOracleModuleState,
  queryKeyPrefix: "OracleModuleStateQuery"
});
export const useGetHistoricalPriceRecords = buildUseQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  builderQueryFn: createGetHistoricalPriceRecords,
  queryKeyPrefix: "HistoricalPriceRecordsQuery"
});
export const useGetOracleVolatility = buildUseQuery<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>({
  builderQueryFn: createGetOracleVolatility,
  queryKeyPrefix: "OracleVolatilityQuery"
});
export const useGetOracleProvidersInfo = buildUseQuery<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>({
  builderQueryFn: createGetOracleProvidersInfo,
  queryKeyPrefix: "OracleProvidersInfoQuery"
});
export const useGetOracleProviderPrices = buildUseQuery<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>({
  builderQueryFn: createGetOracleProviderPrices,
  queryKeyPrefix: "OracleProviderPricesQuery"
});
export const useGetOraclePrice = buildUseQuery<QueryOraclePriceRequest, QueryOraclePriceResponse>({
  builderQueryFn: createGetOraclePrice,
  queryKeyPrefix: "OraclePriceQuery"
});
export const useGetPythPrice = buildUseQuery<QueryPythPriceRequest, QueryPythPriceResponse>({
  builderQueryFn: createGetPythPrice,
  queryKeyPrefix: "PythPriceQuery"
});