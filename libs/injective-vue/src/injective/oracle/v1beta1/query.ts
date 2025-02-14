import { OracleType, OracleInfo, OracleInfoAmino, PythPriceState, PythPriceStateAmino, Params, ParamsAmino, BandPriceState, BandPriceStateAmino, PriceFeedState, PriceFeedStateAmino, CoinbasePriceState, CoinbasePriceStateAmino, StorkPriceState, StorkPriceStateAmino, PriceState, PriceStateAmino, PriceRecords, PriceRecordsAmino, MetadataStatistics, MetadataStatisticsAmino, PriceRecord, PriceRecordAmino, ProviderInfo, ProviderInfoAmino, ProviderState, ProviderStateAmino } from "./oracle";
import { GenesisState, GenesisStateAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryPythPriceRequest {
  priceId: string;
}
export interface QueryPythPriceRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryPythPriceRequest";
  value: Uint8Array;
}
export interface QueryPythPriceRequestAmino {
  price_id: string;
}
export interface QueryPythPriceRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryPythPriceRequest";
  value: QueryPythPriceRequestAmino;
}
export interface QueryPythPriceResponse {
  priceState?: PythPriceState;
}
export interface QueryPythPriceResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryPythPriceResponse";
  value: Uint8Array;
}
export interface QueryPythPriceResponseAmino {
  price_state?: PythPriceStateAmino;
}
export interface QueryPythPriceResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryPythPriceResponse";
  value: QueryPythPriceResponseAmino;
}
/**
 * QueryOracleParamsRequest is the request type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryOracleParamsRequest is the request type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryOracleParamsResponse is the response type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryOracleParamsResponse is the response type for the Query/OracleParams RPC
 * method.
 */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersRequest {}
export interface QueryBandRelayersRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest";
  value: Uint8Array;
}
/**
 * QueryBandRelayersRequest is the request type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersRequestAmino {}
export interface QueryBandRelayersRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandRelayersRequest";
  value: QueryBandRelayersRequestAmino;
}
/**
 * QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersResponse {
  relayers: string[];
}
export interface QueryBandRelayersResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse";
  value: Uint8Array;
}
/**
 * QueryBandRelayersResponse is the response type for the Query/BandRelayers RPC
 * method.
 */
export interface QueryBandRelayersResponseAmino {
  relayers: string[];
}
export interface QueryBandRelayersResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandRelayersResponse";
  value: QueryBandRelayersResponseAmino;
}
/**
 * QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates
 * RPC method.
 */
export interface QueryBandPriceStatesRequest {}
export interface QueryBandPriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest";
  value: Uint8Array;
}
/**
 * QueryBandPriceStatesRequest is the request type for the Query/BandPriceStates
 * RPC method.
 */
export interface QueryBandPriceStatesRequestAmino {}
export interface QueryBandPriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest";
  value: QueryBandPriceStatesRequestAmino;
}
/**
 * QueryBandPriceStatesResponse is the response type for the
 * Query/BandPriceStates RPC method.
 */
export interface QueryBandPriceStatesResponse {
  priceStates: BandPriceState[];
}
export interface QueryBandPriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse";
  value: Uint8Array;
}
/**
 * QueryBandPriceStatesResponse is the response type for the
 * Query/BandPriceStates RPC method.
 */
export interface QueryBandPriceStatesResponseAmino {
  price_states: BandPriceStateAmino[];
}
export interface QueryBandPriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse";
  value: QueryBandPriceStatesResponseAmino;
}
/**
 * QueryBandIBCPriceStatesRequest is the request type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesRequest {}
export interface QueryBandIBCPriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest";
  value: Uint8Array;
}
/**
 * QueryBandIBCPriceStatesRequest is the request type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesRequestAmino {}
export interface QueryBandIBCPriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest";
  value: QueryBandIBCPriceStatesRequestAmino;
}
/**
 * QueryBandIBCPriceStatesResponse is the response type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesResponse {
  priceStates: BandPriceState[];
}
export interface QueryBandIBCPriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse";
  value: Uint8Array;
}
/**
 * QueryBandIBCPriceStatesResponse is the response type for the
 * Query/BandIBCPriceStates RPC method.
 */
export interface QueryBandIBCPriceStatesResponseAmino {
  price_states: BandPriceStateAmino[];
}
export interface QueryBandIBCPriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse";
  value: QueryBandIBCPriceStatesResponseAmino;
}
/**
 * QueryPriceFeedPriceStatesRequest is the request type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesRequest {}
export interface QueryPriceFeedPriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest";
  value: Uint8Array;
}
/**
 * QueryPriceFeedPriceStatesRequest is the request type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesRequestAmino {}
export interface QueryPriceFeedPriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest";
  value: QueryPriceFeedPriceStatesRequestAmino;
}
/**
 * QueryPriceFeedPriceStatesResponse is the response type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesResponse {
  priceStates: PriceFeedState[];
}
export interface QueryPriceFeedPriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse";
  value: Uint8Array;
}
/**
 * QueryPriceFeedPriceStatesResponse is the response type for the
 * Query/PriceFeedPriceStates RPC method.
 */
export interface QueryPriceFeedPriceStatesResponseAmino {
  price_states: PriceFeedStateAmino[];
}
export interface QueryPriceFeedPriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse";
  value: QueryPriceFeedPriceStatesResponseAmino;
}
/**
 * QueryCoinbasePriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesRequest {}
export interface QueryCoinbasePriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest";
  value: Uint8Array;
}
/**
 * QueryCoinbasePriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesRequestAmino {}
export interface QueryCoinbasePriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest";
  value: QueryCoinbasePriceStatesRequestAmino;
}
/**
 * QueryCoinbasePriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesResponse {
  priceStates: CoinbasePriceState[];
}
export interface QueryCoinbasePriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse";
  value: Uint8Array;
}
/**
 * QueryCoinbasePriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryCoinbasePriceStatesResponseAmino {
  price_states: CoinbasePriceStateAmino[];
}
export interface QueryCoinbasePriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse";
  value: QueryCoinbasePriceStatesResponseAmino;
}
/**
 * QueryPythPriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesRequest {}
export interface QueryPythPriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryPythPriceStatesRequest";
  value: Uint8Array;
}
/**
 * QueryPythPriceStatesRequest is the request type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesRequestAmino {}
export interface QueryPythPriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryPythPriceStatesRequest";
  value: QueryPythPriceStatesRequestAmino;
}
/**
 * QueryPythPriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesResponse {
  priceStates: PythPriceState[];
}
export interface QueryPythPriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryPythPriceStatesResponse";
  value: Uint8Array;
}
/**
 * QueryPythPriceStatesResponse is the response type for the
 * Query/CoinbasePriceStates RPC method.
 */
export interface QueryPythPriceStatesResponseAmino {
  price_states: PythPriceStateAmino[];
}
export interface QueryPythPriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryPythPriceStatesResponse";
  value: QueryPythPriceStatesResponseAmino;
}
/**
 * QueryStorkPriceStatesRequest is the request type for the
 * Query/StorkPriceStates RPC method.
 */
export interface QueryStorkPriceStatesRequest {}
export interface QueryStorkPriceStatesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryStorkPriceStatesRequest";
  value: Uint8Array;
}
/**
 * QueryStorkPriceStatesRequest is the request type for the
 * Query/StorkPriceStates RPC method.
 */
export interface QueryStorkPriceStatesRequestAmino {}
export interface QueryStorkPriceStatesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryStorkPriceStatesRequest";
  value: QueryStorkPriceStatesRequestAmino;
}
/**
 * QueryStorkPriceStatesResponse is the response type for the
 * Query/StorkPriceStates RPC method.
 */
export interface QueryStorkPriceStatesResponse {
  priceStates: StorkPriceState[];
}
export interface QueryStorkPriceStatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryStorkPriceStatesResponse";
  value: Uint8Array;
}
/**
 * QueryStorkPriceStatesResponse is the response type for the
 * Query/StorkPriceStates RPC method.
 */
export interface QueryStorkPriceStatesResponseAmino {
  price_states: StorkPriceStateAmino[];
}
export interface QueryStorkPriceStatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryStorkPriceStatesResponse";
  value: QueryStorkPriceStatesResponseAmino;
}
/**
 * QueryStorkPublishersRequest is the request type for the
 * Query/StorkPublishers RPC method.
 */
export interface QueryStorkPublishersRequest {}
export interface QueryStorkPublishersRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryStorkPublishersRequest";
  value: Uint8Array;
}
/**
 * QueryStorkPublishersRequest is the request type for the
 * Query/StorkPublishers RPC method.
 */
export interface QueryStorkPublishersRequestAmino {}
export interface QueryStorkPublishersRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryStorkPublishersRequest";
  value: QueryStorkPublishersRequestAmino;
}
/**
 * QueryStorkPublishersResponse is the response type for the
 * Query/StorkPublishers RPC method.
 */
export interface QueryStorkPublishersResponse {
  publishers: string[];
}
export interface QueryStorkPublishersResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryStorkPublishersResponse";
  value: Uint8Array;
}
/**
 * QueryStorkPublishersResponse is the response type for the
 * Query/StorkPublishers RPC method.
 */
export interface QueryStorkPublishersResponseAmino {
  publishers: string[];
}
export interface QueryStorkPublishersResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryStorkPublishersResponse";
  value: QueryStorkPublishersResponseAmino;
}
/**
 * QueryProviderPriceStateRequest is the request type for the
 * Query/ProviderPriceState RPC method.
 */
export interface QueryProviderPriceStateRequest {
  provider: string;
  symbol: string;
}
export interface QueryProviderPriceStateRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest";
  value: Uint8Array;
}
/**
 * QueryProviderPriceStateRequest is the request type for the
 * Query/ProviderPriceState RPC method.
 */
export interface QueryProviderPriceStateRequestAmino {
  provider: string;
  symbol: string;
}
export interface QueryProviderPriceStateRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest";
  value: QueryProviderPriceStateRequestAmino;
}
/**
 * QueryProviderPriceStatesResponse is the response type for the
 * Query/ProviderPriceStates RPC method.
 */
export interface QueryProviderPriceStateResponse {
  priceState?: PriceState;
}
export interface QueryProviderPriceStateResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse";
  value: Uint8Array;
}
/**
 * QueryProviderPriceStatesResponse is the response type for the
 * Query/ProviderPriceStates RPC method.
 */
export interface QueryProviderPriceStateResponseAmino {
  price_state?: PriceStateAmino;
}
export interface QueryProviderPriceStateResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse";
  value: QueryProviderPriceStateResponseAmino;
}
/**
 * QueryModuleStateRequest is the request type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateResponse is the response type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateResponse {
  state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the Query/OracleModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
export interface QueryHistoricalPriceRecordsRequest {
  oracle: OracleType;
  symbolId: string;
}
export interface QueryHistoricalPriceRecordsRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest";
  value: Uint8Array;
}
export interface QueryHistoricalPriceRecordsRequestAmino {
  oracle: OracleType;
  symbol_id: string;
}
export interface QueryHistoricalPriceRecordsRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest";
  value: QueryHistoricalPriceRecordsRequestAmino;
}
export interface QueryHistoricalPriceRecordsResponse {
  priceRecords: PriceRecords[];
}
export interface QueryHistoricalPriceRecordsResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse";
  value: Uint8Array;
}
export interface QueryHistoricalPriceRecordsResponseAmino {
  price_records: PriceRecordsAmino[];
}
export interface QueryHistoricalPriceRecordsResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse";
  value: QueryHistoricalPriceRecordsResponseAmino;
}
export interface OracleHistoryOptions {
  /**
   * MaxAge restricts the oracle price records oldest age in seconds from the
   * current block time to consider. A value of 0 means use all the records
   * present on the chain.
   */
  maxAge: bigint;
  /**
   * If IncludeRawHistory is true, the raw underlying data used for the
   * computation is included in the response
   */
  includeRawHistory: boolean;
  /**
   * If IncludeMetadata is true, metadata on the computation is included in the
   * response
   */
  includeMetadata: boolean;
}
export interface OracleHistoryOptionsProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions";
  value: Uint8Array;
}
export interface OracleHistoryOptionsAmino {
  /**
   * MaxAge restricts the oracle price records oldest age in seconds from the
   * current block time to consider. A value of 0 means use all the records
   * present on the chain.
   */
  max_age: string;
  /**
   * If IncludeRawHistory is true, the raw underlying data used for the
   * computation is included in the response
   */
  include_raw_history: boolean;
  /**
   * If IncludeMetadata is true, metadata on the computation is included in the
   * response
   */
  include_metadata: boolean;
}
export interface OracleHistoryOptionsAminoMsg {
  type: "/injective.oracle.v1beta1.OracleHistoryOptions";
  value: OracleHistoryOptionsAmino;
}
/**
 * QueryOracleVolatilityRequest is the request type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityRequest {
  baseInfo?: OracleInfo;
  quoteInfo?: OracleInfo;
  oracleHistoryOptions?: OracleHistoryOptions;
}
export interface QueryOracleVolatilityRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest";
  value: Uint8Array;
}
/**
 * QueryOracleVolatilityRequest is the request type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityRequestAmino {
  base_info?: OracleInfoAmino;
  quote_info?: OracleInfoAmino;
  oracle_history_options?: OracleHistoryOptionsAmino;
}
export interface QueryOracleVolatilityRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest";
  value: QueryOracleVolatilityRequestAmino;
}
/**
 * QueryOracleVolatilityResponse is the response type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityResponse {
  volatility: string;
  historyMetadata?: MetadataStatistics;
  rawHistory: PriceRecord[];
}
export interface QueryOracleVolatilityResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse";
  value: Uint8Array;
}
/**
 * QueryOracleVolatilityResponse is the response type for Query/OracleVolatility
 * RPC method.
 */
export interface QueryOracleVolatilityResponseAmino {
  volatility: string;
  history_metadata?: MetadataStatisticsAmino;
  raw_history: PriceRecordAmino[];
}
export interface QueryOracleVolatilityResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse";
  value: QueryOracleVolatilityResponseAmino;
}
export interface QueryOracleProvidersInfoRequest {}
export interface QueryOracleProvidersInfoRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest";
  value: Uint8Array;
}
export interface QueryOracleProvidersInfoRequestAmino {}
export interface QueryOracleProvidersInfoRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest";
  value: QueryOracleProvidersInfoRequestAmino;
}
export interface QueryOracleProvidersInfoResponse {
  providers: ProviderInfo[];
}
export interface QueryOracleProvidersInfoResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse";
  value: Uint8Array;
}
export interface QueryOracleProvidersInfoResponseAmino {
  providers: ProviderInfoAmino[];
}
export interface QueryOracleProvidersInfoResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse";
  value: QueryOracleProvidersInfoResponseAmino;
}
export interface QueryOracleProviderPricesRequest {
  provider: string;
}
export interface QueryOracleProviderPricesRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest";
  value: Uint8Array;
}
export interface QueryOracleProviderPricesRequestAmino {
  provider: string;
}
export interface QueryOracleProviderPricesRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest";
  value: QueryOracleProviderPricesRequestAmino;
}
export interface QueryOracleProviderPricesResponse {
  providerState: ProviderState[];
}
export interface QueryOracleProviderPricesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse";
  value: Uint8Array;
}
export interface QueryOracleProviderPricesResponseAmino {
  providerState: ProviderStateAmino[];
}
export interface QueryOracleProviderPricesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse";
  value: QueryOracleProviderPricesResponseAmino;
}
/**
 * ScalingOptions defines optional configuration to avoid precision loss. The
 * oracle result will be returned as base_price * 10^base_decimals / quote_price
 * * 10^quote_decimals
 */
export interface ScalingOptions {
  baseDecimals: number;
  quoteDecimals: number;
}
export interface ScalingOptionsProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.ScalingOptions";
  value: Uint8Array;
}
/**
 * ScalingOptions defines optional configuration to avoid precision loss. The
 * oracle result will be returned as base_price * 10^base_decimals / quote_price
 * * 10^quote_decimals
 */
export interface ScalingOptionsAmino {
  base_decimals: number;
  quote_decimals: number;
}
export interface ScalingOptionsAminoMsg {
  type: "/injective.oracle.v1beta1.ScalingOptions";
  value: ScalingOptionsAmino;
}
/**
 * QueryOraclePriceRequest is the request type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceRequest {
  oracleType: OracleType;
  base: string;
  quote: string;
  scalingOptions?: ScalingOptions;
}
export interface QueryOraclePriceRequestProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOraclePriceRequest";
  value: Uint8Array;
}
/**
 * QueryOraclePriceRequest is the request type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceRequestAmino {
  oracle_type: OracleType;
  base: string;
  quote: string;
  scaling_options?: ScalingOptionsAmino;
}
export interface QueryOraclePriceRequestAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOraclePriceRequest";
  value: QueryOraclePriceRequestAmino;
}
export interface PricePairState {
  pairPrice: string;
  basePrice: string;
  quotePrice: string;
  baseCumulativePrice: string;
  quoteCumulativePrice: string;
  baseTimestamp: bigint;
  quoteTimestamp: bigint;
}
export interface PricePairStateProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.PricePairState";
  value: Uint8Array;
}
export interface PricePairStateAmino {
  pair_price: string;
  base_price: string;
  quote_price: string;
  base_cumulative_price: string;
  quote_cumulative_price: string;
  base_timestamp: string;
  quote_timestamp: string;
}
export interface PricePairStateAminoMsg {
  type: "/injective.oracle.v1beta1.PricePairState";
  value: PricePairStateAmino;
}
/**
 * QueryOraclePriceResponse is the response type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceResponse {
  pricePairState?: PricePairState;
}
export interface QueryOraclePriceResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.QueryOraclePriceResponse";
  value: Uint8Array;
}
/**
 * QueryOraclePriceResponse is the response type for the Query/OraclePrice RPC
 * method.
 */
export interface QueryOraclePriceResponseAmino {
  price_pair_state?: PricePairStateAmino;
}
export interface QueryOraclePriceResponseAminoMsg {
  type: "/injective.oracle.v1beta1.QueryOraclePriceResponse";
  value: QueryOraclePriceResponseAmino;
}
function createBaseQueryPythPriceRequest(): QueryPythPriceRequest {
  return {
    priceId: ""
  };
}
export const QueryPythPriceRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryPythPriceRequest",
  is(o: any): o is QueryPythPriceRequest {
    return o && (o.$typeUrl === QueryPythPriceRequest.typeUrl || typeof o.priceId === "string");
  },
  isAmino(o: any): o is QueryPythPriceRequestAmino {
    return o && (o.$typeUrl === QueryPythPriceRequest.typeUrl || typeof o.price_id === "string");
  },
  encode(message: QueryPythPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceId !== "") {
      writer.uint32(10).string(message.priceId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPythPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPythPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPythPriceRequest>): QueryPythPriceRequest {
    const message = createBaseQueryPythPriceRequest();
    message.priceId = object.priceId ?? "";
    return message;
  },
  fromAmino(object: QueryPythPriceRequestAmino): QueryPythPriceRequest {
    const message = createBaseQueryPythPriceRequest();
    if (object.price_id !== undefined && object.price_id !== null) {
      message.priceId = object.price_id;
    }
    return message;
  },
  toAmino(message: QueryPythPriceRequest): QueryPythPriceRequestAmino {
    const obj: any = {};
    obj.price_id = message.priceId === "" ? undefined : message.priceId;
    return obj;
  },
  fromAminoMsg(object: QueryPythPriceRequestAminoMsg): QueryPythPriceRequest {
    return QueryPythPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPythPriceRequestProtoMsg): QueryPythPriceRequest {
    return QueryPythPriceRequest.decode(message.value);
  },
  toProto(message: QueryPythPriceRequest): Uint8Array {
    return QueryPythPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPythPriceRequest): QueryPythPriceRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryPythPriceRequest",
      value: QueryPythPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPythPriceRequest.typeUrl, QueryPythPriceRequest);
function createBaseQueryPythPriceResponse(): QueryPythPriceResponse {
  return {
    priceState: undefined
  };
}
export const QueryPythPriceResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryPythPriceResponse",
  is(o: any): o is QueryPythPriceResponse {
    return o && o.$typeUrl === QueryPythPriceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryPythPriceResponseAmino {
    return o && o.$typeUrl === QueryPythPriceResponse.typeUrl;
  },
  encode(message: QueryPythPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceState !== undefined) {
      PythPriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPythPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPythPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceState = PythPriceState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPythPriceResponse>): QueryPythPriceResponse {
    const message = createBaseQueryPythPriceResponse();
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PythPriceState.fromPartial(object.priceState) : undefined;
    return message;
  },
  fromAmino(object: QueryPythPriceResponseAmino): QueryPythPriceResponse {
    const message = createBaseQueryPythPriceResponse();
    if (object.price_state !== undefined && object.price_state !== null) {
      message.priceState = PythPriceState.fromAmino(object.price_state);
    }
    return message;
  },
  toAmino(message: QueryPythPriceResponse): QueryPythPriceResponseAmino {
    const obj: any = {};
    obj.price_state = message.priceState ? PythPriceState.toAmino(message.priceState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPythPriceResponseAminoMsg): QueryPythPriceResponse {
    return QueryPythPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPythPriceResponseProtoMsg): QueryPythPriceResponse {
    return QueryPythPriceResponse.decode(message.value);
  },
  toProto(message: QueryPythPriceResponse): Uint8Array {
    return QueryPythPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPythPriceResponse): QueryPythPriceResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryPythPriceResponse",
      value: QueryPythPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPythPriceResponse.typeUrl, QueryPythPriceResponse);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryBandRelayersRequest(): QueryBandRelayersRequest {
  return {};
}
export const QueryBandRelayersRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest",
  is(o: any): o is QueryBandRelayersRequest {
    return o && o.$typeUrl === QueryBandRelayersRequest.typeUrl;
  },
  isAmino(o: any): o is QueryBandRelayersRequestAmino {
    return o && o.$typeUrl === QueryBandRelayersRequest.typeUrl;
  },
  encode(_: QueryBandRelayersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandRelayersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandRelayersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryBandRelayersRequest>): QueryBandRelayersRequest {
    const message = createBaseQueryBandRelayersRequest();
    return message;
  },
  fromAmino(_: QueryBandRelayersRequestAmino): QueryBandRelayersRequest {
    const message = createBaseQueryBandRelayersRequest();
    return message;
  },
  toAmino(_: QueryBandRelayersRequest): QueryBandRelayersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBandRelayersRequestAminoMsg): QueryBandRelayersRequest {
    return QueryBandRelayersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandRelayersRequestProtoMsg): QueryBandRelayersRequest {
    return QueryBandRelayersRequest.decode(message.value);
  },
  toProto(message: QueryBandRelayersRequest): Uint8Array {
    return QueryBandRelayersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBandRelayersRequest): QueryBandRelayersRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersRequest",
      value: QueryBandRelayersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBandRelayersRequest.typeUrl, QueryBandRelayersRequest);
function createBaseQueryBandRelayersResponse(): QueryBandRelayersResponse {
  return {
    relayers: []
  };
}
export const QueryBandRelayersResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse",
  is(o: any): o is QueryBandRelayersResponse {
    return o && (o.$typeUrl === QueryBandRelayersResponse.typeUrl || Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isAmino(o: any): o is QueryBandRelayersResponseAmino {
    return o && (o.$typeUrl === QueryBandRelayersResponse.typeUrl || Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  encode(message: QueryBandRelayersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.relayers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandRelayersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandRelayersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBandRelayersResponse>): QueryBandRelayersResponse {
    const message = createBaseQueryBandRelayersResponse();
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryBandRelayersResponseAmino): QueryBandRelayersResponse {
    const message = createBaseQueryBandRelayersResponse();
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryBandRelayersResponse): QueryBandRelayersResponseAmino {
    const obj: any = {};
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBandRelayersResponseAminoMsg): QueryBandRelayersResponse {
    return QueryBandRelayersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandRelayersResponseProtoMsg): QueryBandRelayersResponse {
    return QueryBandRelayersResponse.decode(message.value);
  },
  toProto(message: QueryBandRelayersResponse): Uint8Array {
    return QueryBandRelayersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBandRelayersResponse): QueryBandRelayersResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandRelayersResponse",
      value: QueryBandRelayersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBandRelayersResponse.typeUrl, QueryBandRelayersResponse);
function createBaseQueryBandPriceStatesRequest(): QueryBandPriceStatesRequest {
  return {};
}
export const QueryBandPriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest",
  is(o: any): o is QueryBandPriceStatesRequest {
    return o && o.$typeUrl === QueryBandPriceStatesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryBandPriceStatesRequestAmino {
    return o && o.$typeUrl === QueryBandPriceStatesRequest.typeUrl;
  },
  encode(_: QueryBandPriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandPriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryBandPriceStatesRequest>): QueryBandPriceStatesRequest {
    const message = createBaseQueryBandPriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryBandPriceStatesRequestAmino): QueryBandPriceStatesRequest {
    const message = createBaseQueryBandPriceStatesRequest();
    return message;
  },
  toAmino(_: QueryBandPriceStatesRequest): QueryBandPriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBandPriceStatesRequestAminoMsg): QueryBandPriceStatesRequest {
    return QueryBandPriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandPriceStatesRequestProtoMsg): QueryBandPriceStatesRequest {
    return QueryBandPriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryBandPriceStatesRequest): Uint8Array {
    return QueryBandPriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBandPriceStatesRequest): QueryBandPriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesRequest",
      value: QueryBandPriceStatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBandPriceStatesRequest.typeUrl, QueryBandPriceStatesRequest);
function createBaseQueryBandPriceStatesResponse(): QueryBandPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryBandPriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse",
  is(o: any): o is QueryBandPriceStatesResponse {
    return o && (o.$typeUrl === QueryBandPriceStatesResponse.typeUrl || Array.isArray(o.priceStates) && (!o.priceStates.length || BandPriceState.is(o.priceStates[0])));
  },
  isAmino(o: any): o is QueryBandPriceStatesResponseAmino {
    return o && (o.$typeUrl === QueryBandPriceStatesResponse.typeUrl || Array.isArray(o.price_states) && (!o.price_states.length || BandPriceState.isAmino(o.price_states[0])));
  },
  encode(message: QueryBandPriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      BandPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandPriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandPriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBandPriceStatesResponse>): QueryBandPriceStatesResponse {
    const message = createBaseQueryBandPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBandPriceStatesResponseAmino): QueryBandPriceStatesResponse {
    const message = createBaseQueryBandPriceStatesResponse();
    message.priceStates = object.price_states?.map(e => BandPriceState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBandPriceStatesResponse): QueryBandPriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
    } else {
      obj.price_states = message.priceStates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBandPriceStatesResponseAminoMsg): QueryBandPriceStatesResponse {
    return QueryBandPriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandPriceStatesResponseProtoMsg): QueryBandPriceStatesResponse {
    return QueryBandPriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryBandPriceStatesResponse): Uint8Array {
    return QueryBandPriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBandPriceStatesResponse): QueryBandPriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandPriceStatesResponse",
      value: QueryBandPriceStatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBandPriceStatesResponse.typeUrl, QueryBandPriceStatesResponse);
function createBaseQueryBandIBCPriceStatesRequest(): QueryBandIBCPriceStatesRequest {
  return {};
}
export const QueryBandIBCPriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest",
  is(o: any): o is QueryBandIBCPriceStatesRequest {
    return o && o.$typeUrl === QueryBandIBCPriceStatesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryBandIBCPriceStatesRequestAmino {
    return o && o.$typeUrl === QueryBandIBCPriceStatesRequest.typeUrl;
  },
  encode(_: QueryBandIBCPriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandIBCPriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandIBCPriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryBandIBCPriceStatesRequest>): QueryBandIBCPriceStatesRequest {
    const message = createBaseQueryBandIBCPriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryBandIBCPriceStatesRequestAmino): QueryBandIBCPriceStatesRequest {
    const message = createBaseQueryBandIBCPriceStatesRequest();
    return message;
  },
  toAmino(_: QueryBandIBCPriceStatesRequest): QueryBandIBCPriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBandIBCPriceStatesRequestAminoMsg): QueryBandIBCPriceStatesRequest {
    return QueryBandIBCPriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandIBCPriceStatesRequestProtoMsg): QueryBandIBCPriceStatesRequest {
    return QueryBandIBCPriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryBandIBCPriceStatesRequest): Uint8Array {
    return QueryBandIBCPriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBandIBCPriceStatesRequest): QueryBandIBCPriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesRequest",
      value: QueryBandIBCPriceStatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBandIBCPriceStatesRequest.typeUrl, QueryBandIBCPriceStatesRequest);
function createBaseQueryBandIBCPriceStatesResponse(): QueryBandIBCPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryBandIBCPriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse",
  is(o: any): o is QueryBandIBCPriceStatesResponse {
    return o && (o.$typeUrl === QueryBandIBCPriceStatesResponse.typeUrl || Array.isArray(o.priceStates) && (!o.priceStates.length || BandPriceState.is(o.priceStates[0])));
  },
  isAmino(o: any): o is QueryBandIBCPriceStatesResponseAmino {
    return o && (o.$typeUrl === QueryBandIBCPriceStatesResponse.typeUrl || Array.isArray(o.price_states) && (!o.price_states.length || BandPriceState.isAmino(o.price_states[0])));
  },
  encode(message: QueryBandIBCPriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      BandPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBandIBCPriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBandIBCPriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(BandPriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBandIBCPriceStatesResponse>): QueryBandIBCPriceStatesResponse {
    const message = createBaseQueryBandIBCPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBandIBCPriceStatesResponseAmino): QueryBandIBCPriceStatesResponse {
    const message = createBaseQueryBandIBCPriceStatesResponse();
    message.priceStates = object.price_states?.map(e => BandPriceState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBandIBCPriceStatesResponse): QueryBandIBCPriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
    } else {
      obj.price_states = message.priceStates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBandIBCPriceStatesResponseAminoMsg): QueryBandIBCPriceStatesResponse {
    return QueryBandIBCPriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBandIBCPriceStatesResponseProtoMsg): QueryBandIBCPriceStatesResponse {
    return QueryBandIBCPriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryBandIBCPriceStatesResponse): Uint8Array {
    return QueryBandIBCPriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBandIBCPriceStatesResponse): QueryBandIBCPriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryBandIBCPriceStatesResponse",
      value: QueryBandIBCPriceStatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBandIBCPriceStatesResponse.typeUrl, QueryBandIBCPriceStatesResponse);
function createBaseQueryPriceFeedPriceStatesRequest(): QueryPriceFeedPriceStatesRequest {
  return {};
}
export const QueryPriceFeedPriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest",
  is(o: any): o is QueryPriceFeedPriceStatesRequest {
    return o && o.$typeUrl === QueryPriceFeedPriceStatesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPriceFeedPriceStatesRequestAmino {
    return o && o.$typeUrl === QueryPriceFeedPriceStatesRequest.typeUrl;
  },
  encode(_: QueryPriceFeedPriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceFeedPriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceFeedPriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryPriceFeedPriceStatesRequest>): QueryPriceFeedPriceStatesRequest {
    const message = createBaseQueryPriceFeedPriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryPriceFeedPriceStatesRequestAmino): QueryPriceFeedPriceStatesRequest {
    const message = createBaseQueryPriceFeedPriceStatesRequest();
    return message;
  },
  toAmino(_: QueryPriceFeedPriceStatesRequest): QueryPriceFeedPriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPriceFeedPriceStatesRequestAminoMsg): QueryPriceFeedPriceStatesRequest {
    return QueryPriceFeedPriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceFeedPriceStatesRequestProtoMsg): QueryPriceFeedPriceStatesRequest {
    return QueryPriceFeedPriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryPriceFeedPriceStatesRequest): Uint8Array {
    return QueryPriceFeedPriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceFeedPriceStatesRequest): QueryPriceFeedPriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesRequest",
      value: QueryPriceFeedPriceStatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPriceFeedPriceStatesRequest.typeUrl, QueryPriceFeedPriceStatesRequest);
function createBaseQueryPriceFeedPriceStatesResponse(): QueryPriceFeedPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryPriceFeedPriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse",
  is(o: any): o is QueryPriceFeedPriceStatesResponse {
    return o && (o.$typeUrl === QueryPriceFeedPriceStatesResponse.typeUrl || Array.isArray(o.priceStates) && (!o.priceStates.length || PriceFeedState.is(o.priceStates[0])));
  },
  isAmino(o: any): o is QueryPriceFeedPriceStatesResponseAmino {
    return o && (o.$typeUrl === QueryPriceFeedPriceStatesResponse.typeUrl || Array.isArray(o.price_states) && (!o.price_states.length || PriceFeedState.isAmino(o.price_states[0])));
  },
  encode(message: QueryPriceFeedPriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      PriceFeedState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceFeedPriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceFeedPriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(PriceFeedState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPriceFeedPriceStatesResponse>): QueryPriceFeedPriceStatesResponse {
    const message = createBaseQueryPriceFeedPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => PriceFeedState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPriceFeedPriceStatesResponseAmino): QueryPriceFeedPriceStatesResponse {
    const message = createBaseQueryPriceFeedPriceStatesResponse();
    message.priceStates = object.price_states?.map(e => PriceFeedState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPriceFeedPriceStatesResponse): QueryPriceFeedPriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? PriceFeedState.toAmino(e) : undefined);
    } else {
      obj.price_states = message.priceStates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPriceFeedPriceStatesResponseAminoMsg): QueryPriceFeedPriceStatesResponse {
    return QueryPriceFeedPriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceFeedPriceStatesResponseProtoMsg): QueryPriceFeedPriceStatesResponse {
    return QueryPriceFeedPriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryPriceFeedPriceStatesResponse): Uint8Array {
    return QueryPriceFeedPriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceFeedPriceStatesResponse): QueryPriceFeedPriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryPriceFeedPriceStatesResponse",
      value: QueryPriceFeedPriceStatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPriceFeedPriceStatesResponse.typeUrl, QueryPriceFeedPriceStatesResponse);
function createBaseQueryCoinbasePriceStatesRequest(): QueryCoinbasePriceStatesRequest {
  return {};
}
export const QueryCoinbasePriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest",
  is(o: any): o is QueryCoinbasePriceStatesRequest {
    return o && o.$typeUrl === QueryCoinbasePriceStatesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCoinbasePriceStatesRequestAmino {
    return o && o.$typeUrl === QueryCoinbasePriceStatesRequest.typeUrl;
  },
  encode(_: QueryCoinbasePriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCoinbasePriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinbasePriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryCoinbasePriceStatesRequest>): QueryCoinbasePriceStatesRequest {
    const message = createBaseQueryCoinbasePriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryCoinbasePriceStatesRequestAmino): QueryCoinbasePriceStatesRequest {
    const message = createBaseQueryCoinbasePriceStatesRequest();
    return message;
  },
  toAmino(_: QueryCoinbasePriceStatesRequest): QueryCoinbasePriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCoinbasePriceStatesRequestAminoMsg): QueryCoinbasePriceStatesRequest {
    return QueryCoinbasePriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCoinbasePriceStatesRequestProtoMsg): QueryCoinbasePriceStatesRequest {
    return QueryCoinbasePriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryCoinbasePriceStatesRequest): Uint8Array {
    return QueryCoinbasePriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCoinbasePriceStatesRequest): QueryCoinbasePriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesRequest",
      value: QueryCoinbasePriceStatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCoinbasePriceStatesRequest.typeUrl, QueryCoinbasePriceStatesRequest);
function createBaseQueryCoinbasePriceStatesResponse(): QueryCoinbasePriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryCoinbasePriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse",
  is(o: any): o is QueryCoinbasePriceStatesResponse {
    return o && (o.$typeUrl === QueryCoinbasePriceStatesResponse.typeUrl || Array.isArray(o.priceStates) && (!o.priceStates.length || CoinbasePriceState.is(o.priceStates[0])));
  },
  isAmino(o: any): o is QueryCoinbasePriceStatesResponseAmino {
    return o && (o.$typeUrl === QueryCoinbasePriceStatesResponse.typeUrl || Array.isArray(o.price_states) && (!o.price_states.length || CoinbasePriceState.isAmino(o.price_states[0])));
  },
  encode(message: QueryCoinbasePriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      CoinbasePriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCoinbasePriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinbasePriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(CoinbasePriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCoinbasePriceStatesResponse>): QueryCoinbasePriceStatesResponse {
    const message = createBaseQueryCoinbasePriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => CoinbasePriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCoinbasePriceStatesResponseAmino): QueryCoinbasePriceStatesResponse {
    const message = createBaseQueryCoinbasePriceStatesResponse();
    message.priceStates = object.price_states?.map(e => CoinbasePriceState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCoinbasePriceStatesResponse): QueryCoinbasePriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? CoinbasePriceState.toAmino(e) : undefined);
    } else {
      obj.price_states = message.priceStates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCoinbasePriceStatesResponseAminoMsg): QueryCoinbasePriceStatesResponse {
    return QueryCoinbasePriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCoinbasePriceStatesResponseProtoMsg): QueryCoinbasePriceStatesResponse {
    return QueryCoinbasePriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryCoinbasePriceStatesResponse): Uint8Array {
    return QueryCoinbasePriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCoinbasePriceStatesResponse): QueryCoinbasePriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryCoinbasePriceStatesResponse",
      value: QueryCoinbasePriceStatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCoinbasePriceStatesResponse.typeUrl, QueryCoinbasePriceStatesResponse);
function createBaseQueryPythPriceStatesRequest(): QueryPythPriceStatesRequest {
  return {};
}
export const QueryPythPriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryPythPriceStatesRequest",
  is(o: any): o is QueryPythPriceStatesRequest {
    return o && o.$typeUrl === QueryPythPriceStatesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryPythPriceStatesRequestAmino {
    return o && o.$typeUrl === QueryPythPriceStatesRequest.typeUrl;
  },
  encode(_: QueryPythPriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPythPriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPythPriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryPythPriceStatesRequest>): QueryPythPriceStatesRequest {
    const message = createBaseQueryPythPriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryPythPriceStatesRequestAmino): QueryPythPriceStatesRequest {
    const message = createBaseQueryPythPriceStatesRequest();
    return message;
  },
  toAmino(_: QueryPythPriceStatesRequest): QueryPythPriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPythPriceStatesRequestAminoMsg): QueryPythPriceStatesRequest {
    return QueryPythPriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPythPriceStatesRequestProtoMsg): QueryPythPriceStatesRequest {
    return QueryPythPriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryPythPriceStatesRequest): Uint8Array {
    return QueryPythPriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPythPriceStatesRequest): QueryPythPriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryPythPriceStatesRequest",
      value: QueryPythPriceStatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPythPriceStatesRequest.typeUrl, QueryPythPriceStatesRequest);
function createBaseQueryPythPriceStatesResponse(): QueryPythPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryPythPriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryPythPriceStatesResponse",
  is(o: any): o is QueryPythPriceStatesResponse {
    return o && (o.$typeUrl === QueryPythPriceStatesResponse.typeUrl || Array.isArray(o.priceStates) && (!o.priceStates.length || PythPriceState.is(o.priceStates[0])));
  },
  isAmino(o: any): o is QueryPythPriceStatesResponseAmino {
    return o && (o.$typeUrl === QueryPythPriceStatesResponse.typeUrl || Array.isArray(o.price_states) && (!o.price_states.length || PythPriceState.isAmino(o.price_states[0])));
  },
  encode(message: QueryPythPriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      PythPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPythPriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPythPriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(PythPriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPythPriceStatesResponse>): QueryPythPriceStatesResponse {
    const message = createBaseQueryPythPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => PythPriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPythPriceStatesResponseAmino): QueryPythPriceStatesResponse {
    const message = createBaseQueryPythPriceStatesResponse();
    message.priceStates = object.price_states?.map(e => PythPriceState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPythPriceStatesResponse): QueryPythPriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? PythPriceState.toAmino(e) : undefined);
    } else {
      obj.price_states = message.priceStates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPythPriceStatesResponseAminoMsg): QueryPythPriceStatesResponse {
    return QueryPythPriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPythPriceStatesResponseProtoMsg): QueryPythPriceStatesResponse {
    return QueryPythPriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryPythPriceStatesResponse): Uint8Array {
    return QueryPythPriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPythPriceStatesResponse): QueryPythPriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryPythPriceStatesResponse",
      value: QueryPythPriceStatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPythPriceStatesResponse.typeUrl, QueryPythPriceStatesResponse);
function createBaseQueryStorkPriceStatesRequest(): QueryStorkPriceStatesRequest {
  return {};
}
export const QueryStorkPriceStatesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryStorkPriceStatesRequest",
  is(o: any): o is QueryStorkPriceStatesRequest {
    return o && o.$typeUrl === QueryStorkPriceStatesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryStorkPriceStatesRequestAmino {
    return o && o.$typeUrl === QueryStorkPriceStatesRequest.typeUrl;
  },
  encode(_: QueryStorkPriceStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorkPriceStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorkPriceStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryStorkPriceStatesRequest>): QueryStorkPriceStatesRequest {
    const message = createBaseQueryStorkPriceStatesRequest();
    return message;
  },
  fromAmino(_: QueryStorkPriceStatesRequestAmino): QueryStorkPriceStatesRequest {
    const message = createBaseQueryStorkPriceStatesRequest();
    return message;
  },
  toAmino(_: QueryStorkPriceStatesRequest): QueryStorkPriceStatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStorkPriceStatesRequestAminoMsg): QueryStorkPriceStatesRequest {
    return QueryStorkPriceStatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorkPriceStatesRequestProtoMsg): QueryStorkPriceStatesRequest {
    return QueryStorkPriceStatesRequest.decode(message.value);
  },
  toProto(message: QueryStorkPriceStatesRequest): Uint8Array {
    return QueryStorkPriceStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorkPriceStatesRequest): QueryStorkPriceStatesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryStorkPriceStatesRequest",
      value: QueryStorkPriceStatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStorkPriceStatesRequest.typeUrl, QueryStorkPriceStatesRequest);
function createBaseQueryStorkPriceStatesResponse(): QueryStorkPriceStatesResponse {
  return {
    priceStates: []
  };
}
export const QueryStorkPriceStatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryStorkPriceStatesResponse",
  is(o: any): o is QueryStorkPriceStatesResponse {
    return o && (o.$typeUrl === QueryStorkPriceStatesResponse.typeUrl || Array.isArray(o.priceStates) && (!o.priceStates.length || StorkPriceState.is(o.priceStates[0])));
  },
  isAmino(o: any): o is QueryStorkPriceStatesResponseAmino {
    return o && (o.$typeUrl === QueryStorkPriceStatesResponse.typeUrl || Array.isArray(o.price_states) && (!o.price_states.length || StorkPriceState.isAmino(o.price_states[0])));
  },
  encode(message: QueryStorkPriceStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceStates) {
      StorkPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorkPriceStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorkPriceStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceStates.push(StorkPriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStorkPriceStatesResponse>): QueryStorkPriceStatesResponse {
    const message = createBaseQueryStorkPriceStatesResponse();
    message.priceStates = object.priceStates?.map(e => StorkPriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryStorkPriceStatesResponseAmino): QueryStorkPriceStatesResponse {
    const message = createBaseQueryStorkPriceStatesResponse();
    message.priceStates = object.price_states?.map(e => StorkPriceState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryStorkPriceStatesResponse): QueryStorkPriceStatesResponseAmino {
    const obj: any = {};
    if (message.priceStates) {
      obj.price_states = message.priceStates.map(e => e ? StorkPriceState.toAmino(e) : undefined);
    } else {
      obj.price_states = message.priceStates;
    }
    return obj;
  },
  fromAminoMsg(object: QueryStorkPriceStatesResponseAminoMsg): QueryStorkPriceStatesResponse {
    return QueryStorkPriceStatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorkPriceStatesResponseProtoMsg): QueryStorkPriceStatesResponse {
    return QueryStorkPriceStatesResponse.decode(message.value);
  },
  toProto(message: QueryStorkPriceStatesResponse): Uint8Array {
    return QueryStorkPriceStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorkPriceStatesResponse): QueryStorkPriceStatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryStorkPriceStatesResponse",
      value: QueryStorkPriceStatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStorkPriceStatesResponse.typeUrl, QueryStorkPriceStatesResponse);
function createBaseQueryStorkPublishersRequest(): QueryStorkPublishersRequest {
  return {};
}
export const QueryStorkPublishersRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryStorkPublishersRequest",
  is(o: any): o is QueryStorkPublishersRequest {
    return o && o.$typeUrl === QueryStorkPublishersRequest.typeUrl;
  },
  isAmino(o: any): o is QueryStorkPublishersRequestAmino {
    return o && o.$typeUrl === QueryStorkPublishersRequest.typeUrl;
  },
  encode(_: QueryStorkPublishersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorkPublishersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorkPublishersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryStorkPublishersRequest>): QueryStorkPublishersRequest {
    const message = createBaseQueryStorkPublishersRequest();
    return message;
  },
  fromAmino(_: QueryStorkPublishersRequestAmino): QueryStorkPublishersRequest {
    const message = createBaseQueryStorkPublishersRequest();
    return message;
  },
  toAmino(_: QueryStorkPublishersRequest): QueryStorkPublishersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStorkPublishersRequestAminoMsg): QueryStorkPublishersRequest {
    return QueryStorkPublishersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorkPublishersRequestProtoMsg): QueryStorkPublishersRequest {
    return QueryStorkPublishersRequest.decode(message.value);
  },
  toProto(message: QueryStorkPublishersRequest): Uint8Array {
    return QueryStorkPublishersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStorkPublishersRequest): QueryStorkPublishersRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryStorkPublishersRequest",
      value: QueryStorkPublishersRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStorkPublishersRequest.typeUrl, QueryStorkPublishersRequest);
function createBaseQueryStorkPublishersResponse(): QueryStorkPublishersResponse {
  return {
    publishers: []
  };
}
export const QueryStorkPublishersResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryStorkPublishersResponse",
  is(o: any): o is QueryStorkPublishersResponse {
    return o && (o.$typeUrl === QueryStorkPublishersResponse.typeUrl || Array.isArray(o.publishers) && (!o.publishers.length || typeof o.publishers[0] === "string"));
  },
  isAmino(o: any): o is QueryStorkPublishersResponseAmino {
    return o && (o.$typeUrl === QueryStorkPublishersResponse.typeUrl || Array.isArray(o.publishers) && (!o.publishers.length || typeof o.publishers[0] === "string"));
  },
  encode(message: QueryStorkPublishersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.publishers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStorkPublishersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStorkPublishersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publishers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryStorkPublishersResponse>): QueryStorkPublishersResponse {
    const message = createBaseQueryStorkPublishersResponse();
    message.publishers = object.publishers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryStorkPublishersResponseAmino): QueryStorkPublishersResponse {
    const message = createBaseQueryStorkPublishersResponse();
    message.publishers = object.publishers?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryStorkPublishersResponse): QueryStorkPublishersResponseAmino {
    const obj: any = {};
    if (message.publishers) {
      obj.publishers = message.publishers.map(e => e);
    } else {
      obj.publishers = message.publishers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryStorkPublishersResponseAminoMsg): QueryStorkPublishersResponse {
    return QueryStorkPublishersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStorkPublishersResponseProtoMsg): QueryStorkPublishersResponse {
    return QueryStorkPublishersResponse.decode(message.value);
  },
  toProto(message: QueryStorkPublishersResponse): Uint8Array {
    return QueryStorkPublishersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStorkPublishersResponse): QueryStorkPublishersResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryStorkPublishersResponse",
      value: QueryStorkPublishersResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryStorkPublishersResponse.typeUrl, QueryStorkPublishersResponse);
function createBaseQueryProviderPriceStateRequest(): QueryProviderPriceStateRequest {
  return {
    provider: "",
    symbol: ""
  };
}
export const QueryProviderPriceStateRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest",
  is(o: any): o is QueryProviderPriceStateRequest {
    return o && (o.$typeUrl === QueryProviderPriceStateRequest.typeUrl || typeof o.provider === "string" && typeof o.symbol === "string");
  },
  isAmino(o: any): o is QueryProviderPriceStateRequestAmino {
    return o && (o.$typeUrl === QueryProviderPriceStateRequest.typeUrl || typeof o.provider === "string" && typeof o.symbol === "string");
  },
  encode(message: QueryProviderPriceStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderPriceStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderPriceStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProviderPriceStateRequest>): QueryProviderPriceStateRequest {
    const message = createBaseQueryProviderPriceStateRequest();
    message.provider = object.provider ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  },
  fromAmino(object: QueryProviderPriceStateRequestAmino): QueryProviderPriceStateRequest {
    const message = createBaseQueryProviderPriceStateRequest();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    return message;
  },
  toAmino(message: QueryProviderPriceStateRequest): QueryProviderPriceStateRequestAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    return obj;
  },
  fromAminoMsg(object: QueryProviderPriceStateRequestAminoMsg): QueryProviderPriceStateRequest {
    return QueryProviderPriceStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderPriceStateRequestProtoMsg): QueryProviderPriceStateRequest {
    return QueryProviderPriceStateRequest.decode(message.value);
  },
  toProto(message: QueryProviderPriceStateRequest): Uint8Array {
    return QueryProviderPriceStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderPriceStateRequest): QueryProviderPriceStateRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateRequest",
      value: QueryProviderPriceStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderPriceStateRequest.typeUrl, QueryProviderPriceStateRequest);
function createBaseQueryProviderPriceStateResponse(): QueryProviderPriceStateResponse {
  return {
    priceState: undefined
  };
}
export const QueryProviderPriceStateResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse",
  is(o: any): o is QueryProviderPriceStateResponse {
    return o && o.$typeUrl === QueryProviderPriceStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryProviderPriceStateResponseAmino {
    return o && o.$typeUrl === QueryProviderPriceStateResponse.typeUrl;
  },
  encode(message: QueryProviderPriceStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceState !== undefined) {
      PriceState.encode(message.priceState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderPriceStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderPriceStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceState = PriceState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryProviderPriceStateResponse>): QueryProviderPriceStateResponse {
    const message = createBaseQueryProviderPriceStateResponse();
    message.priceState = object.priceState !== undefined && object.priceState !== null ? PriceState.fromPartial(object.priceState) : undefined;
    return message;
  },
  fromAmino(object: QueryProviderPriceStateResponseAmino): QueryProviderPriceStateResponse {
    const message = createBaseQueryProviderPriceStateResponse();
    if (object.price_state !== undefined && object.price_state !== null) {
      message.priceState = PriceState.fromAmino(object.price_state);
    }
    return message;
  },
  toAmino(message: QueryProviderPriceStateResponse): QueryProviderPriceStateResponseAmino {
    const obj: any = {};
    obj.price_state = message.priceState ? PriceState.toAmino(message.priceState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProviderPriceStateResponseAminoMsg): QueryProviderPriceStateResponse {
    return QueryProviderPriceStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProviderPriceStateResponseProtoMsg): QueryProviderPriceStateResponse {
    return QueryProviderPriceStateResponse.decode(message.value);
  },
  toProto(message: QueryProviderPriceStateResponse): Uint8Array {
    return QueryProviderPriceStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderPriceStateResponse): QueryProviderPriceStateResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryProviderPriceStateResponse",
      value: QueryProviderPriceStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProviderPriceStateResponse.typeUrl, QueryProviderPriceStateResponse);
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest",
  is(o: any): o is QueryModuleStateRequest {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateRequestAmino {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryModuleStateRequest.typeUrl, QueryModuleStateRequest);
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse",
  is(o: any): o is QueryModuleStateResponse {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateResponseAmino {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = GenesisState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryModuleStateResponse.typeUrl, QueryModuleStateResponse);
function createBaseQueryHistoricalPriceRecordsRequest(): QueryHistoricalPriceRecordsRequest {
  return {
    oracle: 0,
    symbolId: ""
  };
}
export const QueryHistoricalPriceRecordsRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest",
  is(o: any): o is QueryHistoricalPriceRecordsRequest {
    return o && (o.$typeUrl === QueryHistoricalPriceRecordsRequest.typeUrl || isSet(o.oracle) && typeof o.symbolId === "string");
  },
  isAmino(o: any): o is QueryHistoricalPriceRecordsRequestAmino {
    return o && (o.$typeUrl === QueryHistoricalPriceRecordsRequest.typeUrl || isSet(o.oracle) && typeof o.symbol_id === "string");
  },
  encode(message: QueryHistoricalPriceRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracle !== 0) {
      writer.uint32(8).int32(message.oracle);
    }
    if (message.symbolId !== "") {
      writer.uint32(18).string(message.symbolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalPriceRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPriceRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracle = reader.int32() as any;
          break;
        case 2:
          message.symbolId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHistoricalPriceRecordsRequest>): QueryHistoricalPriceRecordsRequest {
    const message = createBaseQueryHistoricalPriceRecordsRequest();
    message.oracle = object.oracle ?? 0;
    message.symbolId = object.symbolId ?? "";
    return message;
  },
  fromAmino(object: QueryHistoricalPriceRecordsRequestAmino): QueryHistoricalPriceRecordsRequest {
    const message = createBaseQueryHistoricalPriceRecordsRequest();
    if (object.oracle !== undefined && object.oracle !== null) {
      message.oracle = object.oracle;
    }
    if (object.symbol_id !== undefined && object.symbol_id !== null) {
      message.symbolId = object.symbol_id;
    }
    return message;
  },
  toAmino(message: QueryHistoricalPriceRecordsRequest): QueryHistoricalPriceRecordsRequestAmino {
    const obj: any = {};
    obj.oracle = message.oracle === 0 ? undefined : message.oracle;
    obj.symbol_id = message.symbolId === "" ? undefined : message.symbolId;
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalPriceRecordsRequestAminoMsg): QueryHistoricalPriceRecordsRequest {
    return QueryHistoricalPriceRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalPriceRecordsRequestProtoMsg): QueryHistoricalPriceRecordsRequest {
    return QueryHistoricalPriceRecordsRequest.decode(message.value);
  },
  toProto(message: QueryHistoricalPriceRecordsRequest): Uint8Array {
    return QueryHistoricalPriceRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalPriceRecordsRequest): QueryHistoricalPriceRecordsRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsRequest",
      value: QueryHistoricalPriceRecordsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalPriceRecordsRequest.typeUrl, QueryHistoricalPriceRecordsRequest);
function createBaseQueryHistoricalPriceRecordsResponse(): QueryHistoricalPriceRecordsResponse {
  return {
    priceRecords: []
  };
}
export const QueryHistoricalPriceRecordsResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse",
  is(o: any): o is QueryHistoricalPriceRecordsResponse {
    return o && (o.$typeUrl === QueryHistoricalPriceRecordsResponse.typeUrl || Array.isArray(o.priceRecords) && (!o.priceRecords.length || PriceRecords.is(o.priceRecords[0])));
  },
  isAmino(o: any): o is QueryHistoricalPriceRecordsResponseAmino {
    return o && (o.$typeUrl === QueryHistoricalPriceRecordsResponse.typeUrl || Array.isArray(o.price_records) && (!o.price_records.length || PriceRecords.isAmino(o.price_records[0])));
  },
  encode(message: QueryHistoricalPriceRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceRecords) {
      PriceRecords.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalPriceRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalPriceRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceRecords.push(PriceRecords.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryHistoricalPriceRecordsResponse>): QueryHistoricalPriceRecordsResponse {
    const message = createBaseQueryHistoricalPriceRecordsResponse();
    message.priceRecords = object.priceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryHistoricalPriceRecordsResponseAmino): QueryHistoricalPriceRecordsResponse {
    const message = createBaseQueryHistoricalPriceRecordsResponse();
    message.priceRecords = object.price_records?.map(e => PriceRecords.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryHistoricalPriceRecordsResponse): QueryHistoricalPriceRecordsResponseAmino {
    const obj: any = {};
    if (message.priceRecords) {
      obj.price_records = message.priceRecords.map(e => e ? PriceRecords.toAmino(e) : undefined);
    } else {
      obj.price_records = message.priceRecords;
    }
    return obj;
  },
  fromAminoMsg(object: QueryHistoricalPriceRecordsResponseAminoMsg): QueryHistoricalPriceRecordsResponse {
    return QueryHistoricalPriceRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryHistoricalPriceRecordsResponseProtoMsg): QueryHistoricalPriceRecordsResponse {
    return QueryHistoricalPriceRecordsResponse.decode(message.value);
  },
  toProto(message: QueryHistoricalPriceRecordsResponse): Uint8Array {
    return QueryHistoricalPriceRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryHistoricalPriceRecordsResponse): QueryHistoricalPriceRecordsResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryHistoricalPriceRecordsResponse",
      value: QueryHistoricalPriceRecordsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryHistoricalPriceRecordsResponse.typeUrl, QueryHistoricalPriceRecordsResponse);
function createBaseOracleHistoryOptions(): OracleHistoryOptions {
  return {
    maxAge: BigInt(0),
    includeRawHistory: false,
    includeMetadata: false
  };
}
export const OracleHistoryOptions = {
  typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions",
  is(o: any): o is OracleHistoryOptions {
    return o && (o.$typeUrl === OracleHistoryOptions.typeUrl || typeof o.maxAge === "bigint" && typeof o.includeRawHistory === "boolean" && typeof o.includeMetadata === "boolean");
  },
  isAmino(o: any): o is OracleHistoryOptionsAmino {
    return o && (o.$typeUrl === OracleHistoryOptions.typeUrl || typeof o.max_age === "bigint" && typeof o.include_raw_history === "boolean" && typeof o.include_metadata === "boolean");
  },
  encode(message: OracleHistoryOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxAge !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxAge);
    }
    if (message.includeRawHistory === true) {
      writer.uint32(16).bool(message.includeRawHistory);
    }
    if (message.includeMetadata === true) {
      writer.uint32(24).bool(message.includeMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OracleHistoryOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleHistoryOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAge = reader.uint64();
          break;
        case 2:
          message.includeRawHistory = reader.bool();
          break;
        case 3:
          message.includeMetadata = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OracleHistoryOptions>): OracleHistoryOptions {
    const message = createBaseOracleHistoryOptions();
    message.maxAge = object.maxAge !== undefined && object.maxAge !== null ? BigInt(object.maxAge.toString()) : BigInt(0);
    message.includeRawHistory = object.includeRawHistory ?? false;
    message.includeMetadata = object.includeMetadata ?? false;
    return message;
  },
  fromAmino(object: OracleHistoryOptionsAmino): OracleHistoryOptions {
    const message = createBaseOracleHistoryOptions();
    if (object.max_age !== undefined && object.max_age !== null) {
      message.maxAge = BigInt(object.max_age);
    }
    if (object.include_raw_history !== undefined && object.include_raw_history !== null) {
      message.includeRawHistory = object.include_raw_history;
    }
    if (object.include_metadata !== undefined && object.include_metadata !== null) {
      message.includeMetadata = object.include_metadata;
    }
    return message;
  },
  toAmino(message: OracleHistoryOptions): OracleHistoryOptionsAmino {
    const obj: any = {};
    obj.max_age = message.maxAge !== BigInt(0) ? message.maxAge?.toString() : undefined;
    obj.include_raw_history = message.includeRawHistory === false ? undefined : message.includeRawHistory;
    obj.include_metadata = message.includeMetadata === false ? undefined : message.includeMetadata;
    return obj;
  },
  fromAminoMsg(object: OracleHistoryOptionsAminoMsg): OracleHistoryOptions {
    return OracleHistoryOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: OracleHistoryOptionsProtoMsg): OracleHistoryOptions {
    return OracleHistoryOptions.decode(message.value);
  },
  toProto(message: OracleHistoryOptions): Uint8Array {
    return OracleHistoryOptions.encode(message).finish();
  },
  toProtoMsg(message: OracleHistoryOptions): OracleHistoryOptionsProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.OracleHistoryOptions",
      value: OracleHistoryOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(OracleHistoryOptions.typeUrl, OracleHistoryOptions);
function createBaseQueryOracleVolatilityRequest(): QueryOracleVolatilityRequest {
  return {
    baseInfo: undefined,
    quoteInfo: undefined,
    oracleHistoryOptions: undefined
  };
}
export const QueryOracleVolatilityRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest",
  is(o: any): o is QueryOracleVolatilityRequest {
    return o && o.$typeUrl === QueryOracleVolatilityRequest.typeUrl;
  },
  isAmino(o: any): o is QueryOracleVolatilityRequestAmino {
    return o && o.$typeUrl === QueryOracleVolatilityRequest.typeUrl;
  },
  encode(message: QueryOracleVolatilityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseInfo !== undefined) {
      OracleInfo.encode(message.baseInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.quoteInfo !== undefined) {
      OracleInfo.encode(message.quoteInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.oracleHistoryOptions !== undefined) {
      OracleHistoryOptions.encode(message.oracleHistoryOptions, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleVolatilityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleVolatilityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseInfo = OracleInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.quoteInfo = OracleInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.oracleHistoryOptions = OracleHistoryOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOracleVolatilityRequest>): QueryOracleVolatilityRequest {
    const message = createBaseQueryOracleVolatilityRequest();
    message.baseInfo = object.baseInfo !== undefined && object.baseInfo !== null ? OracleInfo.fromPartial(object.baseInfo) : undefined;
    message.quoteInfo = object.quoteInfo !== undefined && object.quoteInfo !== null ? OracleInfo.fromPartial(object.quoteInfo) : undefined;
    message.oracleHistoryOptions = object.oracleHistoryOptions !== undefined && object.oracleHistoryOptions !== null ? OracleHistoryOptions.fromPartial(object.oracleHistoryOptions) : undefined;
    return message;
  },
  fromAmino(object: QueryOracleVolatilityRequestAmino): QueryOracleVolatilityRequest {
    const message = createBaseQueryOracleVolatilityRequest();
    if (object.base_info !== undefined && object.base_info !== null) {
      message.baseInfo = OracleInfo.fromAmino(object.base_info);
    }
    if (object.quote_info !== undefined && object.quote_info !== null) {
      message.quoteInfo = OracleInfo.fromAmino(object.quote_info);
    }
    if (object.oracle_history_options !== undefined && object.oracle_history_options !== null) {
      message.oracleHistoryOptions = OracleHistoryOptions.fromAmino(object.oracle_history_options);
    }
    return message;
  },
  toAmino(message: QueryOracleVolatilityRequest): QueryOracleVolatilityRequestAmino {
    const obj: any = {};
    obj.base_info = message.baseInfo ? OracleInfo.toAmino(message.baseInfo) : undefined;
    obj.quote_info = message.quoteInfo ? OracleInfo.toAmino(message.quoteInfo) : undefined;
    obj.oracle_history_options = message.oracleHistoryOptions ? OracleHistoryOptions.toAmino(message.oracleHistoryOptions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOracleVolatilityRequestAminoMsg): QueryOracleVolatilityRequest {
    return QueryOracleVolatilityRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleVolatilityRequestProtoMsg): QueryOracleVolatilityRequest {
    return QueryOracleVolatilityRequest.decode(message.value);
  },
  toProto(message: QueryOracleVolatilityRequest): Uint8Array {
    return QueryOracleVolatilityRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleVolatilityRequest): QueryOracleVolatilityRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityRequest",
      value: QueryOracleVolatilityRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOracleVolatilityRequest.typeUrl, QueryOracleVolatilityRequest);
function createBaseQueryOracleVolatilityResponse(): QueryOracleVolatilityResponse {
  return {
    volatility: "",
    historyMetadata: undefined,
    rawHistory: []
  };
}
export const QueryOracleVolatilityResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse",
  is(o: any): o is QueryOracleVolatilityResponse {
    return o && (o.$typeUrl === QueryOracleVolatilityResponse.typeUrl || typeof o.volatility === "string" && Array.isArray(o.rawHistory) && (!o.rawHistory.length || PriceRecord.is(o.rawHistory[0])));
  },
  isAmino(o: any): o is QueryOracleVolatilityResponseAmino {
    return o && (o.$typeUrl === QueryOracleVolatilityResponse.typeUrl || typeof o.volatility === "string" && Array.isArray(o.raw_history) && (!o.raw_history.length || PriceRecord.isAmino(o.raw_history[0])));
  },
  encode(message: QueryOracleVolatilityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.volatility !== "") {
      writer.uint32(10).string(message.volatility);
    }
    if (message.historyMetadata !== undefined) {
      MetadataStatistics.encode(message.historyMetadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rawHistory) {
      PriceRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleVolatilityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleVolatilityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volatility = reader.string();
          break;
        case 2:
          message.historyMetadata = MetadataStatistics.decode(reader, reader.uint32());
          break;
        case 3:
          message.rawHistory.push(PriceRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOracleVolatilityResponse>): QueryOracleVolatilityResponse {
    const message = createBaseQueryOracleVolatilityResponse();
    message.volatility = object.volatility ?? "";
    message.historyMetadata = object.historyMetadata !== undefined && object.historyMetadata !== null ? MetadataStatistics.fromPartial(object.historyMetadata) : undefined;
    message.rawHistory = object.rawHistory?.map(e => PriceRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOracleVolatilityResponseAmino): QueryOracleVolatilityResponse {
    const message = createBaseQueryOracleVolatilityResponse();
    if (object.volatility !== undefined && object.volatility !== null) {
      message.volatility = object.volatility;
    }
    if (object.history_metadata !== undefined && object.history_metadata !== null) {
      message.historyMetadata = MetadataStatistics.fromAmino(object.history_metadata);
    }
    message.rawHistory = object.raw_history?.map(e => PriceRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOracleVolatilityResponse): QueryOracleVolatilityResponseAmino {
    const obj: any = {};
    obj.volatility = message.volatility === "" ? undefined : message.volatility;
    obj.history_metadata = message.historyMetadata ? MetadataStatistics.toAmino(message.historyMetadata) : undefined;
    if (message.rawHistory) {
      obj.raw_history = message.rawHistory.map(e => e ? PriceRecord.toAmino(e) : undefined);
    } else {
      obj.raw_history = message.rawHistory;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOracleVolatilityResponseAminoMsg): QueryOracleVolatilityResponse {
    return QueryOracleVolatilityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleVolatilityResponseProtoMsg): QueryOracleVolatilityResponse {
    return QueryOracleVolatilityResponse.decode(message.value);
  },
  toProto(message: QueryOracleVolatilityResponse): Uint8Array {
    return QueryOracleVolatilityResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleVolatilityResponse): QueryOracleVolatilityResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleVolatilityResponse",
      value: QueryOracleVolatilityResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOracleVolatilityResponse.typeUrl, QueryOracleVolatilityResponse);
function createBaseQueryOracleProvidersInfoRequest(): QueryOracleProvidersInfoRequest {
  return {};
}
export const QueryOracleProvidersInfoRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest",
  is(o: any): o is QueryOracleProvidersInfoRequest {
    return o && o.$typeUrl === QueryOracleProvidersInfoRequest.typeUrl;
  },
  isAmino(o: any): o is QueryOracleProvidersInfoRequestAmino {
    return o && o.$typeUrl === QueryOracleProvidersInfoRequest.typeUrl;
  },
  encode(_: QueryOracleProvidersInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleProvidersInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProvidersInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryOracleProvidersInfoRequest>): QueryOracleProvidersInfoRequest {
    const message = createBaseQueryOracleProvidersInfoRequest();
    return message;
  },
  fromAmino(_: QueryOracleProvidersInfoRequestAmino): QueryOracleProvidersInfoRequest {
    const message = createBaseQueryOracleProvidersInfoRequest();
    return message;
  },
  toAmino(_: QueryOracleProvidersInfoRequest): QueryOracleProvidersInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOracleProvidersInfoRequestAminoMsg): QueryOracleProvidersInfoRequest {
    return QueryOracleProvidersInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleProvidersInfoRequestProtoMsg): QueryOracleProvidersInfoRequest {
    return QueryOracleProvidersInfoRequest.decode(message.value);
  },
  toProto(message: QueryOracleProvidersInfoRequest): Uint8Array {
    return QueryOracleProvidersInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleProvidersInfoRequest): QueryOracleProvidersInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoRequest",
      value: QueryOracleProvidersInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOracleProvidersInfoRequest.typeUrl, QueryOracleProvidersInfoRequest);
function createBaseQueryOracleProvidersInfoResponse(): QueryOracleProvidersInfoResponse {
  return {
    providers: []
  };
}
export const QueryOracleProvidersInfoResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse",
  is(o: any): o is QueryOracleProvidersInfoResponse {
    return o && (o.$typeUrl === QueryOracleProvidersInfoResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || ProviderInfo.is(o.providers[0])));
  },
  isAmino(o: any): o is QueryOracleProvidersInfoResponseAmino {
    return o && (o.$typeUrl === QueryOracleProvidersInfoResponse.typeUrl || Array.isArray(o.providers) && (!o.providers.length || ProviderInfo.isAmino(o.providers[0])));
  },
  encode(message: QueryOracleProvidersInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      ProviderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleProvidersInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProvidersInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(ProviderInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOracleProvidersInfoResponse>): QueryOracleProvidersInfoResponse {
    const message = createBaseQueryOracleProvidersInfoResponse();
    message.providers = object.providers?.map(e => ProviderInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOracleProvidersInfoResponseAmino): QueryOracleProvidersInfoResponse {
    const message = createBaseQueryOracleProvidersInfoResponse();
    message.providers = object.providers?.map(e => ProviderInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOracleProvidersInfoResponse): QueryOracleProvidersInfoResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? ProviderInfo.toAmino(e) : undefined);
    } else {
      obj.providers = message.providers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOracleProvidersInfoResponseAminoMsg): QueryOracleProvidersInfoResponse {
    return QueryOracleProvidersInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleProvidersInfoResponseProtoMsg): QueryOracleProvidersInfoResponse {
    return QueryOracleProvidersInfoResponse.decode(message.value);
  },
  toProto(message: QueryOracleProvidersInfoResponse): Uint8Array {
    return QueryOracleProvidersInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleProvidersInfoResponse): QueryOracleProvidersInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleProvidersInfoResponse",
      value: QueryOracleProvidersInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOracleProvidersInfoResponse.typeUrl, QueryOracleProvidersInfoResponse);
function createBaseQueryOracleProviderPricesRequest(): QueryOracleProviderPricesRequest {
  return {
    provider: ""
  };
}
export const QueryOracleProviderPricesRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest",
  is(o: any): o is QueryOracleProviderPricesRequest {
    return o && (o.$typeUrl === QueryOracleProviderPricesRequest.typeUrl || typeof o.provider === "string");
  },
  isAmino(o: any): o is QueryOracleProviderPricesRequestAmino {
    return o && (o.$typeUrl === QueryOracleProviderPricesRequest.typeUrl || typeof o.provider === "string");
  },
  encode(message: QueryOracleProviderPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleProviderPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProviderPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOracleProviderPricesRequest>): QueryOracleProviderPricesRequest {
    const message = createBaseQueryOracleProviderPricesRequest();
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: QueryOracleProviderPricesRequestAmino): QueryOracleProviderPricesRequest {
    const message = createBaseQueryOracleProviderPricesRequest();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: QueryOracleProviderPricesRequest): QueryOracleProviderPricesRequestAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    return obj;
  },
  fromAminoMsg(object: QueryOracleProviderPricesRequestAminoMsg): QueryOracleProviderPricesRequest {
    return QueryOracleProviderPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleProviderPricesRequestProtoMsg): QueryOracleProviderPricesRequest {
    return QueryOracleProviderPricesRequest.decode(message.value);
  },
  toProto(message: QueryOracleProviderPricesRequest): Uint8Array {
    return QueryOracleProviderPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleProviderPricesRequest): QueryOracleProviderPricesRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesRequest",
      value: QueryOracleProviderPricesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOracleProviderPricesRequest.typeUrl, QueryOracleProviderPricesRequest);
function createBaseQueryOracleProviderPricesResponse(): QueryOracleProviderPricesResponse {
  return {
    providerState: []
  };
}
export const QueryOracleProviderPricesResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse",
  is(o: any): o is QueryOracleProviderPricesResponse {
    return o && (o.$typeUrl === QueryOracleProviderPricesResponse.typeUrl || Array.isArray(o.providerState) && (!o.providerState.length || ProviderState.is(o.providerState[0])));
  },
  isAmino(o: any): o is QueryOracleProviderPricesResponseAmino {
    return o && (o.$typeUrl === QueryOracleProviderPricesResponse.typeUrl || Array.isArray(o.providerState) && (!o.providerState.length || ProviderState.isAmino(o.providerState[0])));
  },
  encode(message: QueryOracleProviderPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providerState) {
      ProviderState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOracleProviderPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleProviderPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerState.push(ProviderState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOracleProviderPricesResponse>): QueryOracleProviderPricesResponse {
    const message = createBaseQueryOracleProviderPricesResponse();
    message.providerState = object.providerState?.map(e => ProviderState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOracleProviderPricesResponseAmino): QueryOracleProviderPricesResponse {
    const message = createBaseQueryOracleProviderPricesResponse();
    message.providerState = object.providerState?.map(e => ProviderState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOracleProviderPricesResponse): QueryOracleProviderPricesResponseAmino {
    const obj: any = {};
    if (message.providerState) {
      obj.providerState = message.providerState.map(e => e ? ProviderState.toAmino(e) : undefined);
    } else {
      obj.providerState = message.providerState;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOracleProviderPricesResponseAminoMsg): QueryOracleProviderPricesResponse {
    return QueryOracleProviderPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOracleProviderPricesResponseProtoMsg): QueryOracleProviderPricesResponse {
    return QueryOracleProviderPricesResponse.decode(message.value);
  },
  toProto(message: QueryOracleProviderPricesResponse): Uint8Array {
    return QueryOracleProviderPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOracleProviderPricesResponse): QueryOracleProviderPricesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOracleProviderPricesResponse",
      value: QueryOracleProviderPricesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOracleProviderPricesResponse.typeUrl, QueryOracleProviderPricesResponse);
function createBaseScalingOptions(): ScalingOptions {
  return {
    baseDecimals: 0,
    quoteDecimals: 0
  };
}
export const ScalingOptions = {
  typeUrl: "/injective.oracle.v1beta1.ScalingOptions",
  is(o: any): o is ScalingOptions {
    return o && (o.$typeUrl === ScalingOptions.typeUrl || typeof o.baseDecimals === "number" && typeof o.quoteDecimals === "number");
  },
  isAmino(o: any): o is ScalingOptionsAmino {
    return o && (o.$typeUrl === ScalingOptions.typeUrl || typeof o.base_decimals === "number" && typeof o.quote_decimals === "number");
  },
  encode(message: ScalingOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseDecimals !== 0) {
      writer.uint32(8).uint32(message.baseDecimals);
    }
    if (message.quoteDecimals !== 0) {
      writer.uint32(16).uint32(message.quoteDecimals);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ScalingOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScalingOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDecimals = reader.uint32();
          break;
        case 2:
          message.quoteDecimals = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ScalingOptions>): ScalingOptions {
    const message = createBaseScalingOptions();
    message.baseDecimals = object.baseDecimals ?? 0;
    message.quoteDecimals = object.quoteDecimals ?? 0;
    return message;
  },
  fromAmino(object: ScalingOptionsAmino): ScalingOptions {
    const message = createBaseScalingOptions();
    if (object.base_decimals !== undefined && object.base_decimals !== null) {
      message.baseDecimals = object.base_decimals;
    }
    if (object.quote_decimals !== undefined && object.quote_decimals !== null) {
      message.quoteDecimals = object.quote_decimals;
    }
    return message;
  },
  toAmino(message: ScalingOptions): ScalingOptionsAmino {
    const obj: any = {};
    obj.base_decimals = message.baseDecimals === 0 ? undefined : message.baseDecimals;
    obj.quote_decimals = message.quoteDecimals === 0 ? undefined : message.quoteDecimals;
    return obj;
  },
  fromAminoMsg(object: ScalingOptionsAminoMsg): ScalingOptions {
    return ScalingOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: ScalingOptionsProtoMsg): ScalingOptions {
    return ScalingOptions.decode(message.value);
  },
  toProto(message: ScalingOptions): Uint8Array {
    return ScalingOptions.encode(message).finish();
  },
  toProtoMsg(message: ScalingOptions): ScalingOptionsProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.ScalingOptions",
      value: ScalingOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ScalingOptions.typeUrl, ScalingOptions);
function createBaseQueryOraclePriceRequest(): QueryOraclePriceRequest {
  return {
    oracleType: 0,
    base: "",
    quote: "",
    scalingOptions: undefined
  };
}
export const QueryOraclePriceRequest = {
  typeUrl: "/injective.oracle.v1beta1.QueryOraclePriceRequest",
  is(o: any): o is QueryOraclePriceRequest {
    return o && (o.$typeUrl === QueryOraclePriceRequest.typeUrl || isSet(o.oracleType) && typeof o.base === "string" && typeof o.quote === "string");
  },
  isAmino(o: any): o is QueryOraclePriceRequestAmino {
    return o && (o.$typeUrl === QueryOraclePriceRequest.typeUrl || isSet(o.oracle_type) && typeof o.base === "string" && typeof o.quote === "string");
  },
  encode(message: QueryOraclePriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleType !== 0) {
      writer.uint32(8).int32(message.oracleType);
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }
    if (message.scalingOptions !== undefined) {
      ScalingOptions.encode(message.scalingOptions, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOraclePriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOraclePriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleType = reader.int32() as any;
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.quote = reader.string();
          break;
        case 4:
          message.scalingOptions = ScalingOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOraclePriceRequest>): QueryOraclePriceRequest {
    const message = createBaseQueryOraclePriceRequest();
    message.oracleType = object.oracleType ?? 0;
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.scalingOptions = object.scalingOptions !== undefined && object.scalingOptions !== null ? ScalingOptions.fromPartial(object.scalingOptions) : undefined;
    return message;
  },
  fromAmino(object: QueryOraclePriceRequestAmino): QueryOraclePriceRequest {
    const message = createBaseQueryOraclePriceRequest();
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    if (object.scaling_options !== undefined && object.scaling_options !== null) {
      message.scalingOptions = ScalingOptions.fromAmino(object.scaling_options);
    }
    return message;
  },
  toAmino(message: QueryOraclePriceRequest): QueryOraclePriceRequestAmino {
    const obj: any = {};
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    obj.scaling_options = message.scalingOptions ? ScalingOptions.toAmino(message.scalingOptions) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOraclePriceRequestAminoMsg): QueryOraclePriceRequest {
    return QueryOraclePriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOraclePriceRequestProtoMsg): QueryOraclePriceRequest {
    return QueryOraclePriceRequest.decode(message.value);
  },
  toProto(message: QueryOraclePriceRequest): Uint8Array {
    return QueryOraclePriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOraclePriceRequest): QueryOraclePriceRequestProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOraclePriceRequest",
      value: QueryOraclePriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOraclePriceRequest.typeUrl, QueryOraclePriceRequest);
function createBasePricePairState(): PricePairState {
  return {
    pairPrice: "",
    basePrice: "",
    quotePrice: "",
    baseCumulativePrice: "",
    quoteCumulativePrice: "",
    baseTimestamp: BigInt(0),
    quoteTimestamp: BigInt(0)
  };
}
export const PricePairState = {
  typeUrl: "/injective.oracle.v1beta1.PricePairState",
  is(o: any): o is PricePairState {
    return o && (o.$typeUrl === PricePairState.typeUrl || typeof o.pairPrice === "string" && typeof o.basePrice === "string" && typeof o.quotePrice === "string" && typeof o.baseCumulativePrice === "string" && typeof o.quoteCumulativePrice === "string" && typeof o.baseTimestamp === "bigint" && typeof o.quoteTimestamp === "bigint");
  },
  isAmino(o: any): o is PricePairStateAmino {
    return o && (o.$typeUrl === PricePairState.typeUrl || typeof o.pair_price === "string" && typeof o.base_price === "string" && typeof o.quote_price === "string" && typeof o.base_cumulative_price === "string" && typeof o.quote_cumulative_price === "string" && typeof o.base_timestamp === "bigint" && typeof o.quote_timestamp === "bigint");
  },
  encode(message: PricePairState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairPrice !== "") {
      writer.uint32(10).string(message.pairPrice);
    }
    if (message.basePrice !== "") {
      writer.uint32(18).string(message.basePrice);
    }
    if (message.quotePrice !== "") {
      writer.uint32(26).string(message.quotePrice);
    }
    if (message.baseCumulativePrice !== "") {
      writer.uint32(34).string(message.baseCumulativePrice);
    }
    if (message.quoteCumulativePrice !== "") {
      writer.uint32(42).string(message.quoteCumulativePrice);
    }
    if (message.baseTimestamp !== BigInt(0)) {
      writer.uint32(48).int64(message.baseTimestamp);
    }
    if (message.quoteTimestamp !== BigInt(0)) {
      writer.uint32(56).int64(message.quoteTimestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PricePairState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePricePairState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairPrice = reader.string();
          break;
        case 2:
          message.basePrice = reader.string();
          break;
        case 3:
          message.quotePrice = reader.string();
          break;
        case 4:
          message.baseCumulativePrice = reader.string();
          break;
        case 5:
          message.quoteCumulativePrice = reader.string();
          break;
        case 6:
          message.baseTimestamp = reader.int64();
          break;
        case 7:
          message.quoteTimestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PricePairState>): PricePairState {
    const message = createBasePricePairState();
    message.pairPrice = object.pairPrice ?? "";
    message.basePrice = object.basePrice ?? "";
    message.quotePrice = object.quotePrice ?? "";
    message.baseCumulativePrice = object.baseCumulativePrice ?? "";
    message.quoteCumulativePrice = object.quoteCumulativePrice ?? "";
    message.baseTimestamp = object.baseTimestamp !== undefined && object.baseTimestamp !== null ? BigInt(object.baseTimestamp.toString()) : BigInt(0);
    message.quoteTimestamp = object.quoteTimestamp !== undefined && object.quoteTimestamp !== null ? BigInt(object.quoteTimestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PricePairStateAmino): PricePairState {
    const message = createBasePricePairState();
    if (object.pair_price !== undefined && object.pair_price !== null) {
      message.pairPrice = object.pair_price;
    }
    if (object.base_price !== undefined && object.base_price !== null) {
      message.basePrice = object.base_price;
    }
    if (object.quote_price !== undefined && object.quote_price !== null) {
      message.quotePrice = object.quote_price;
    }
    if (object.base_cumulative_price !== undefined && object.base_cumulative_price !== null) {
      message.baseCumulativePrice = object.base_cumulative_price;
    }
    if (object.quote_cumulative_price !== undefined && object.quote_cumulative_price !== null) {
      message.quoteCumulativePrice = object.quote_cumulative_price;
    }
    if (object.base_timestamp !== undefined && object.base_timestamp !== null) {
      message.baseTimestamp = BigInt(object.base_timestamp);
    }
    if (object.quote_timestamp !== undefined && object.quote_timestamp !== null) {
      message.quoteTimestamp = BigInt(object.quote_timestamp);
    }
    return message;
  },
  toAmino(message: PricePairState): PricePairStateAmino {
    const obj: any = {};
    obj.pair_price = message.pairPrice === "" ? undefined : message.pairPrice;
    obj.base_price = message.basePrice === "" ? undefined : message.basePrice;
    obj.quote_price = message.quotePrice === "" ? undefined : message.quotePrice;
    obj.base_cumulative_price = message.baseCumulativePrice === "" ? undefined : message.baseCumulativePrice;
    obj.quote_cumulative_price = message.quoteCumulativePrice === "" ? undefined : message.quoteCumulativePrice;
    obj.base_timestamp = message.baseTimestamp !== BigInt(0) ? message.baseTimestamp?.toString() : undefined;
    obj.quote_timestamp = message.quoteTimestamp !== BigInt(0) ? message.quoteTimestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PricePairStateAminoMsg): PricePairState {
    return PricePairState.fromAmino(object.value);
  },
  fromProtoMsg(message: PricePairStateProtoMsg): PricePairState {
    return PricePairState.decode(message.value);
  },
  toProto(message: PricePairState): Uint8Array {
    return PricePairState.encode(message).finish();
  },
  toProtoMsg(message: PricePairState): PricePairStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.PricePairState",
      value: PricePairState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PricePairState.typeUrl, PricePairState);
function createBaseQueryOraclePriceResponse(): QueryOraclePriceResponse {
  return {
    pricePairState: undefined
  };
}
export const QueryOraclePriceResponse = {
  typeUrl: "/injective.oracle.v1beta1.QueryOraclePriceResponse",
  is(o: any): o is QueryOraclePriceResponse {
    return o && o.$typeUrl === QueryOraclePriceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryOraclePriceResponseAmino {
    return o && o.$typeUrl === QueryOraclePriceResponse.typeUrl;
  },
  encode(message: QueryOraclePriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pricePairState !== undefined) {
      PricePairState.encode(message.pricePairState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOraclePriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOraclePriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pricePairState = PricePairState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOraclePriceResponse>): QueryOraclePriceResponse {
    const message = createBaseQueryOraclePriceResponse();
    message.pricePairState = object.pricePairState !== undefined && object.pricePairState !== null ? PricePairState.fromPartial(object.pricePairState) : undefined;
    return message;
  },
  fromAmino(object: QueryOraclePriceResponseAmino): QueryOraclePriceResponse {
    const message = createBaseQueryOraclePriceResponse();
    if (object.price_pair_state !== undefined && object.price_pair_state !== null) {
      message.pricePairState = PricePairState.fromAmino(object.price_pair_state);
    }
    return message;
  },
  toAmino(message: QueryOraclePriceResponse): QueryOraclePriceResponseAmino {
    const obj: any = {};
    obj.price_pair_state = message.pricePairState ? PricePairState.toAmino(message.pricePairState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOraclePriceResponseAminoMsg): QueryOraclePriceResponse {
    return QueryOraclePriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOraclePriceResponseProtoMsg): QueryOraclePriceResponse {
    return QueryOraclePriceResponse.decode(message.value);
  },
  toProto(message: QueryOraclePriceResponse): Uint8Array {
    return QueryOraclePriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOraclePriceResponse): QueryOraclePriceResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.QueryOraclePriceResponse",
      value: QueryOraclePriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOraclePriceResponse.typeUrl, QueryOraclePriceResponse);