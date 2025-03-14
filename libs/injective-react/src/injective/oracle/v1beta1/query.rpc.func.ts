import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetBandRelayers = (clientResolver?: RpcResolver) => buildQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  encode: QueryBandRelayersRequest.encode,
  decode: QueryBandRelayersResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandRelayers",
  clientResolver,
  deps: [QueryBandRelayersRequest, QueryBandRelayersResponse]
});
export const createGetBandPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  encode: QueryBandPriceStatesRequest.encode,
  decode: QueryBandPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandPriceStates",
  clientResolver,
  deps: [QueryBandPriceStatesRequest, QueryBandPriceStatesResponse]
});
export const createGetBandIBCPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  encode: QueryBandIBCPriceStatesRequest.encode,
  decode: QueryBandIBCPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandIBCPriceStates",
  clientResolver,
  deps: [QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse]
});
export const createGetPriceFeedPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  encode: QueryPriceFeedPriceStatesRequest.encode,
  decode: QueryPriceFeedPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PriceFeedPriceStates",
  clientResolver,
  deps: [QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse]
});
export const createGetCoinbasePriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  encode: QueryCoinbasePriceStatesRequest.encode,
  decode: QueryCoinbasePriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "CoinbasePriceStates",
  clientResolver,
  deps: [QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse]
});
export const createGetPythPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  encode: QueryPythPriceStatesRequest.encode,
  decode: QueryPythPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PythPriceStates",
  clientResolver,
  deps: [QueryPythPriceStatesRequest, QueryPythPriceStatesResponse]
});
export const createGetStorkPriceStates = (clientResolver?: RpcResolver) => buildQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  encode: QueryStorkPriceStatesRequest.encode,
  decode: QueryStorkPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "StorkPriceStates",
  clientResolver,
  deps: [QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse]
});
export const createGetStorkPublishers = (clientResolver?: RpcResolver) => buildQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  encode: QueryStorkPublishersRequest.encode,
  decode: QueryStorkPublishersResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "StorkPublishers",
  clientResolver,
  deps: [QueryStorkPublishersRequest, QueryStorkPublishersResponse]
});
export const createGetProviderPriceState = (clientResolver?: RpcResolver) => buildQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  encode: QueryProviderPriceStateRequest.encode,
  decode: QueryProviderPriceStateResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "ProviderPriceState",
  clientResolver,
  deps: [QueryProviderPriceStateRequest, QueryProviderPriceStateResponse]
});
export const createGetOracleModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleModuleState",
  clientResolver,
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});
export const createGetHistoricalPriceRecords = (clientResolver?: RpcResolver) => buildQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  encode: QueryHistoricalPriceRecordsRequest.encode,
  decode: QueryHistoricalPriceRecordsResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "HistoricalPriceRecords",
  clientResolver,
  deps: [QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse]
});
export const createGetOracleVolatility = (clientResolver?: RpcResolver) => buildQuery<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>({
  encode: QueryOracleVolatilityRequest.encode,
  decode: QueryOracleVolatilityResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleVolatility",
  clientResolver,
  deps: [QueryOracleVolatilityRequest, QueryOracleVolatilityResponse]
});
export const createGetOracleProvidersInfo = (clientResolver?: RpcResolver) => buildQuery<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>({
  encode: QueryOracleProvidersInfoRequest.encode,
  decode: QueryOracleProvidersInfoResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleProvidersInfo",
  clientResolver,
  deps: [QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse]
});
export const createGetOracleProviderPrices = (clientResolver?: RpcResolver) => buildQuery<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>({
  encode: QueryOracleProviderPricesRequest.encode,
  decode: QueryOracleProviderPricesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleProviderPrices",
  clientResolver,
  deps: [QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse]
});
export const createGetOraclePrice = (clientResolver?: RpcResolver) => buildQuery<QueryOraclePriceRequest, QueryOraclePriceResponse>({
  encode: QueryOraclePriceRequest.encode,
  decode: QueryOraclePriceResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OraclePrice",
  clientResolver,
  deps: [QueryOraclePriceRequest, QueryOraclePriceResponse]
});
export const createGetPythPrice = (clientResolver?: RpcResolver) => buildQuery<QueryPythPriceRequest, QueryPythPriceResponse>({
  encode: QueryPythPriceRequest.encode,
  decode: QueryPythPriceResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PythPrice",
  clientResolver,
  deps: [QueryPythPriceRequest, QueryPythPriceResponse]
});