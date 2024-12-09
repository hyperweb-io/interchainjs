import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetBandRelayers = (clientResolver?: RpcResolver) => buildQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  encode: QueryBandRelayersRequest.encode,
  decode: QueryBandRelayersResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandRelayers",
  clientResolver
});
export const useGetBandRelayers = buildUseQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  builderQueryFn: createGetBandRelayers,
  queryKeyPrefix: "BandRelayersQuery"
});
export const createGetBandPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  encode: QueryBandPriceStatesRequest.encode,
  decode: QueryBandPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandPriceStates",
  clientResolver
});
export const useGetBandPriceStates = buildUseQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  builderQueryFn: createGetBandPriceStates,
  queryKeyPrefix: "BandPriceStatesQuery"
});
export const createGetBandIBCPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  encode: QueryBandIBCPriceStatesRequest.encode,
  decode: QueryBandIBCPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandIBCPriceStates",
  clientResolver
});
export const useGetBandIBCPriceStates = buildUseQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  builderQueryFn: createGetBandIBCPriceStates,
  queryKeyPrefix: "BandIBCPriceStatesQuery"
});
export const createGetPriceFeedPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  encode: QueryPriceFeedPriceStatesRequest.encode,
  decode: QueryPriceFeedPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PriceFeedPriceStates",
  clientResolver
});
export const useGetPriceFeedPriceStates = buildUseQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  builderQueryFn: createGetPriceFeedPriceStates,
  queryKeyPrefix: "PriceFeedPriceStatesQuery"
});
export const createGetCoinbasePriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  encode: QueryCoinbasePriceStatesRequest.encode,
  decode: QueryCoinbasePriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "CoinbasePriceStates",
  clientResolver
});
export const useGetCoinbasePriceStates = buildUseQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  builderQueryFn: createGetCoinbasePriceStates,
  queryKeyPrefix: "CoinbasePriceStatesQuery"
});
export const createGetPythPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  encode: QueryPythPriceStatesRequest.encode,
  decode: QueryPythPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PythPriceStates",
  clientResolver
});
export const useGetPythPriceStates = buildUseQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  builderQueryFn: createGetPythPriceStates,
  queryKeyPrefix: "PythPriceStatesQuery"
});
export const createGetStorkPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  encode: QueryStorkPriceStatesRequest.encode,
  decode: QueryStorkPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "StorkPriceStates",
  clientResolver
});
export const useGetStorkPriceStates = buildUseQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  builderQueryFn: createGetStorkPriceStates,
  queryKeyPrefix: "StorkPriceStatesQuery"
});
export const createGetStorkPublishers = (clientResolver?: RpcResolver) => buildQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  encode: QueryStorkPublishersRequest.encode,
  decode: QueryStorkPublishersResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "StorkPublishers",
  clientResolver
});
export const useGetStorkPublishers = buildUseQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  builderQueryFn: createGetStorkPublishers,
  queryKeyPrefix: "StorkPublishersQuery"
});
export const createGetProviderPriceState = (clientResolver?: RpcResolver) => buildQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  encode: QueryProviderPriceStateRequest.encode,
  decode: QueryProviderPriceStateResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "ProviderPriceState",
  clientResolver
});
export const useGetProviderPriceState = buildUseQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  builderQueryFn: createGetProviderPriceState,
  queryKeyPrefix: "ProviderPriceStateQuery"
});
export const createGetOracleModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleModuleState",
  clientResolver
});
export const useGetOracleModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetOracleModuleState,
  queryKeyPrefix: "OracleModuleStateQuery"
});
export const createGetHistoricalPriceRecords = (clientResolver?: RpcResolver) => buildQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  encode: QueryHistoricalPriceRecordsRequest.encode,
  decode: QueryHistoricalPriceRecordsResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "HistoricalPriceRecords",
  clientResolver
});
export const useGetHistoricalPriceRecords = buildUseQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  builderQueryFn: createGetHistoricalPriceRecords,
  queryKeyPrefix: "HistoricalPriceRecordsQuery"
});
export const createGetOracleVolatility = (clientResolver?: RpcResolver) => buildQuery<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>({
  encode: QueryOracleVolatilityRequest.encode,
  decode: QueryOracleVolatilityResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleVolatility",
  clientResolver
});
export const useGetOracleVolatility = buildUseQuery<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>({
  builderQueryFn: createGetOracleVolatility,
  queryKeyPrefix: "OracleVolatilityQuery"
});
export const createGetOracleProvidersInfo = (clientResolver?: RpcResolver) => buildQuery<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>({
  encode: QueryOracleProvidersInfoRequest.encode,
  decode: QueryOracleProvidersInfoResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleProvidersInfo",
  clientResolver
});
export const useGetOracleProvidersInfo = buildUseQuery<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>({
  builderQueryFn: createGetOracleProvidersInfo,
  queryKeyPrefix: "OracleProvidersInfoQuery"
});
export const createGetOracleProviderPrices = (clientResolver?: RpcResolver) => buildQuery<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>({
  encode: QueryOracleProviderPricesRequest.encode,
  decode: QueryOracleProviderPricesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleProviderPrices",
  clientResolver
});
export const useGetOracleProviderPrices = buildUseQuery<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>({
  builderQueryFn: createGetOracleProviderPrices,
  queryKeyPrefix: "OracleProviderPricesQuery"
});
export const createGetOraclePrice = (clientResolver?: RpcResolver) => buildQuery<QueryOraclePriceRequest, QueryOraclePriceResponse>({
  encode: QueryOraclePriceRequest.encode,
  decode: QueryOraclePriceResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OraclePrice",
  clientResolver
});
export const useGetOraclePrice = buildUseQuery<QueryOraclePriceRequest, QueryOraclePriceResponse>({
  builderQueryFn: createGetOraclePrice,
  queryKeyPrefix: "OraclePriceQuery"
});
export const createGetPythPrice = (clientResolver?: RpcResolver) => buildQuery<QueryPythPriceRequest, QueryPythPriceResponse>({
  encode: QueryPythPriceRequest.encode,
  decode: QueryPythPriceResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PythPrice",
  clientResolver
});
export const useGetPythPrice = buildUseQuery<QueryPythPriceRequest, QueryPythPriceResponse>({
  builderQueryFn: createGetPythPrice,
  queryKeyPrefix: "PythPriceQuery"
});