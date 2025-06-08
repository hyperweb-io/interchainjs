import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
/**
 * Retrieves oracle params
 * @name getParams
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * Retrieves the band relayers
 * @name getBandRelayers
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.BandRelayers
 */
export const getBandRelayers = buildQuery<QueryBandRelayersRequest, QueryBandRelayersResponse>({
  encode: QueryBandRelayersRequest.encode,
  decode: QueryBandRelayersResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandRelayers",
  deps: [QueryBandRelayersRequest, QueryBandRelayersResponse]
});
/**
 * Retrieves the state for all band price feeds
 * @name getBandPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.BandPriceStates
 */
export const getBandPriceStates = buildQuery<QueryBandPriceStatesRequest, QueryBandPriceStatesResponse>({
  encode: QueryBandPriceStatesRequest.encode,
  decode: QueryBandPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandPriceStates",
  deps: [QueryBandPriceStatesRequest, QueryBandPriceStatesResponse]
});
/**
 * Retrieves the state for all band ibc price feeds
 * @name getBandIBCPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.BandIBCPriceStates
 */
export const getBandIBCPriceStates = buildQuery<QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse>({
  encode: QueryBandIBCPriceStatesRequest.encode,
  decode: QueryBandIBCPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "BandIBCPriceStates",
  deps: [QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse]
});
/**
 * Retrieves the state for all price feeds
 * @name getPriceFeedPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.PriceFeedPriceStates
 */
export const getPriceFeedPriceStates = buildQuery<QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse>({
  encode: QueryPriceFeedPriceStatesRequest.encode,
  decode: QueryPriceFeedPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PriceFeedPriceStates",
  deps: [QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse]
});
/**
 * Retrieves the state for all coinbase price feeds
 * @name getCoinbasePriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.CoinbasePriceStates
 */
export const getCoinbasePriceStates = buildQuery<QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse>({
  encode: QueryCoinbasePriceStatesRequest.encode,
  decode: QueryCoinbasePriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "CoinbasePriceStates",
  deps: [QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse]
});
/**
 * Retrieves the state for all pyth price feeds
 * @name getPythPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.PythPriceStates
 */
export const getPythPriceStates = buildQuery<QueryPythPriceStatesRequest, QueryPythPriceStatesResponse>({
  encode: QueryPythPriceStatesRequest.encode,
  decode: QueryPythPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PythPriceStates",
  deps: [QueryPythPriceStatesRequest, QueryPythPriceStatesResponse]
});
/**
 * Retrieves the state for all stork price feeds
 * @name getStorkPriceStates
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.StorkPriceStates
 */
export const getStorkPriceStates = buildQuery<QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse>({
  encode: QueryStorkPriceStatesRequest.encode,
  decode: QueryStorkPriceStatesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "StorkPriceStates",
  deps: [QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse]
});
/**
 * Retrieves all stork publishers
 * @name getStorkPublishers
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.StorkPublishers
 */
export const getStorkPublishers = buildQuery<QueryStorkPublishersRequest, QueryStorkPublishersResponse>({
  encode: QueryStorkPublishersRequest.encode,
  decode: QueryStorkPublishersResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "StorkPublishers",
  deps: [QueryStorkPublishersRequest, QueryStorkPublishersResponse]
});
/**
 * Retrieves the state for all provider price feeds
 * @name getProviderPriceState
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.ProviderPriceState
 */
export const getProviderPriceState = buildQuery<QueryProviderPriceStateRequest, QueryProviderPriceStateResponse>({
  encode: QueryProviderPriceStateRequest.encode,
  decode: QueryProviderPriceStateResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "ProviderPriceState",
  deps: [QueryProviderPriceStateRequest, QueryProviderPriceStateResponse]
});
/**
 * Retrieves the entire oracle module's state
 * @name getOracleModuleState
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OracleModuleState
 */
export const getOracleModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});
/**
 * Retrieves historical price records for a given OracleType and Symbol
 * @name getHistoricalPriceRecords
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.HistoricalPriceRecords
 */
export const getHistoricalPriceRecords = buildQuery<QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse>({
  encode: QueryHistoricalPriceRecordsRequest.encode,
  decode: QueryHistoricalPriceRecordsResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "HistoricalPriceRecords",
  deps: [QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse]
});
/**
 * Retrieves mixed volatility value for the specified pair of base/quote
 * @name getOracleVolatility
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OracleVolatility
 */
export const getOracleVolatility = buildQuery<QueryOracleVolatilityRequest, QueryOracleVolatilityResponse>({
  encode: QueryOracleVolatilityRequest.encode,
  decode: QueryOracleVolatilityResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleVolatility",
  deps: [QueryOracleVolatilityRequest, QueryOracleVolatilityResponse]
});
/**
 * @name getOracleProvidersInfo
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OracleProvidersInfo
 */
export const getOracleProvidersInfo = buildQuery<QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse>({
  encode: QueryOracleProvidersInfoRequest.encode,
  decode: QueryOracleProvidersInfoResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleProvidersInfo",
  deps: [QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse]
});
/**
 * @name getOracleProviderPrices
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OracleProviderPrices
 */
export const getOracleProviderPrices = buildQuery<QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse>({
  encode: QueryOracleProviderPricesRequest.encode,
  decode: QueryOracleProviderPricesResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OracleProviderPrices",
  deps: [QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse]
});
/**
 * @name getOraclePrice
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.OraclePrice
 */
export const getOraclePrice = buildQuery<QueryOraclePriceRequest, QueryOraclePriceResponse>({
  encode: QueryOraclePriceRequest.encode,
  decode: QueryOraclePriceResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "OraclePrice",
  deps: [QueryOraclePriceRequest, QueryOraclePriceResponse]
});
/**
 * @name getPythPrice
 * @package injective.oracle.v1beta1
 * @see proto service: injective.oracle.v1beta1.PythPrice
 */
export const getPythPrice = buildQuery<QueryPythPriceRequest, QueryPythPriceResponse>({
  encode: QueryPythPriceRequest.encode,
  decode: QueryPythPriceResponse.decode,
  service: "injective.oracle.v1beta1.Query",
  method: "PythPrice",
  deps: [QueryPythPriceRequest, QueryPythPriceResponse]
});