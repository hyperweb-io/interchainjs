import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "Params"
});
export const getBandRelayers = buildQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  encode: QueryBandRelayersRequest.encode,
  decode: QueryBandRelayersResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandRelayers"
});
export const getBandPriceStates = buildQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  encode: QueryBandPriceStatesRequest.encode,
  decode: QueryBandPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandPriceStates"
});
export const getBandIBCPriceStates = buildQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  encode: QueryBandIBCPriceStatesRequest.encode,
  decode: QueryBandIBCPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandIBCPriceStates"
});
export const getPriceFeedPriceStates = buildQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  encode: QueryPriceFeedPriceStatesRequest.encode,
  decode: QueryPriceFeedPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PriceFeedPriceStates"
});
export const getCoinbasePriceStates = buildQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  encode: QueryCoinbasePriceStatesRequest.encode,
  decode: QueryCoinbasePriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "CoinbasePriceStates"
});
export const getPythPriceStates = buildQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  encode: QueryPythPriceStatesRequest.encode,
  decode: QueryPythPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PythPriceStates"
});
export const getStorkPriceStates = buildQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  encode: QueryStorkPriceStatesRequest.encode,
  decode: QueryStorkPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "StorkPriceStates"
});
export const getStorkPublishers = buildQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  encode: QueryStorkPublishersRequest.encode,
  decode: QueryStorkPublishersResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "StorkPublishers"
});
export const getProviderPriceState = buildQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  encode: QueryProviderPriceStateRequest.encode,
  decode: QueryProviderPriceStateResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "ProviderPriceState"
});
export const getOracleModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleModuleState"
});
export const getHistoricalPriceRecords = buildQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  encode: QueryHistoricalPriceRecordsRequest.encode,
  decode: QueryHistoricalPriceRecordsResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "HistoricalPriceRecords"
});
export const getOracleVolatility = buildQuery<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>({
  encode: QueryOracleVolatilityRequest.encode,
  decode: QueryOracleVolatilityResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleVolatility"
});
export const getOracleProvidersInfo = buildQuery<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>({
  encode: QueryOracleProvidersInfoRequest.encode,
  decode: QueryOracleProvidersInfoResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleProvidersInfo"
});
export const getOracleProviderPrices = buildQuery<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>({
  encode: QueryOracleProviderPricesRequest.encode,
  decode: QueryOracleProviderPricesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleProviderPrices"
});
export const getOraclePrice = buildQuery<QueryOraclePriceRequest, QueryOraclePriceResponse>({
  encode: QueryOraclePriceRequest.encode,
  decode: QueryOraclePriceResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OraclePrice"
});
export const getPythPrice = buildQuery<QueryPythPriceRequest, QueryPythPriceResponse>({
  encode: QueryPythPriceRequest.encode,
  decode: QueryPythPriceResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PythPrice"
});