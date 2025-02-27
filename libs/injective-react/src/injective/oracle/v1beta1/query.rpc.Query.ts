import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves oracle params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Retrieves the band relayers */
  bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse>;
  /** Retrieves the state for all band price feeds */
  bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse>;
  /** Retrieves the state for all band ibc price feeds */
  bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse>;
  /** Retrieves the state for all price feeds */
  priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse>;
  /** Retrieves the state for all coinbase price feeds */
  coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse>;
  /** Retrieves the state for all pyth price feeds */
  pythPriceStates(request?: QueryPythPriceStatesRequest): Promise<QueryPythPriceStatesResponse>;
  /** Retrieves the state for all stork price feeds */
  storkPriceStates(request?: QueryStorkPriceStatesRequest): Promise<QueryStorkPriceStatesResponse>;
  /** Retrieves all stork publishers */
  storkPublishers(request?: QueryStorkPublishersRequest): Promise<QueryStorkPublishersResponse>;
  /** Retrieves the state for all provider price feeds */
  providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse>;
  /** Retrieves the entire oracle module's state */
  oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  /** Retrieves historical price records for a given OracleType and Symbol */
  historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse>;
  /** Retrieves mixed volatility value for the specified pair of base/quote */
  oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse>;
  oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse>;
  oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse>;
  oraclePrice(request: QueryOraclePriceRequest): Promise<QueryOraclePriceResponse>;
  pythPrice(request: QueryPythPriceRequest): Promise<QueryPythPriceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves oracle params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the band relayers */
  bandRelayers = async (request: QueryBandRelayersRequest = {}): Promise<QueryBandRelayersResponse> => {
    const data = QueryBandRelayersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandRelayers", data);
    return promise.then(data => QueryBandRelayersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all band price feeds */
  bandPriceStates = async (request: QueryBandPriceStatesRequest = {}): Promise<QueryBandPriceStatesResponse> => {
    const data = QueryBandPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandPriceStates", data);
    return promise.then(data => QueryBandPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all band ibc price feeds */
  bandIBCPriceStates = async (request: QueryBandIBCPriceStatesRequest = {}): Promise<QueryBandIBCPriceStatesResponse> => {
    const data = QueryBandIBCPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandIBCPriceStates", data);
    return promise.then(data => QueryBandIBCPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all price feeds */
  priceFeedPriceStates = async (request: QueryPriceFeedPriceStatesRequest = {}): Promise<QueryPriceFeedPriceStatesResponse> => {
    const data = QueryPriceFeedPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PriceFeedPriceStates", data);
    return promise.then(data => QueryPriceFeedPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all coinbase price feeds */
  coinbasePriceStates = async (request: QueryCoinbasePriceStatesRequest = {}): Promise<QueryCoinbasePriceStatesResponse> => {
    const data = QueryCoinbasePriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "CoinbasePriceStates", data);
    return promise.then(data => QueryCoinbasePriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all pyth price feeds */
  pythPriceStates = async (request: QueryPythPriceStatesRequest = {}): Promise<QueryPythPriceStatesResponse> => {
    const data = QueryPythPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PythPriceStates", data);
    return promise.then(data => QueryPythPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all stork price feeds */
  storkPriceStates = async (request: QueryStorkPriceStatesRequest = {}): Promise<QueryStorkPriceStatesResponse> => {
    const data = QueryStorkPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "StorkPriceStates", data);
    return promise.then(data => QueryStorkPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves all stork publishers */
  storkPublishers = async (request: QueryStorkPublishersRequest = {}): Promise<QueryStorkPublishersResponse> => {
    const data = QueryStorkPublishersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "StorkPublishers", data);
    return promise.then(data => QueryStorkPublishersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all provider price feeds */
  providerPriceState = async (request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse> => {
    const data = QueryProviderPriceStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "ProviderPriceState", data);
    return promise.then(data => QueryProviderPriceStateResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire oracle module's state */
  oracleModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves historical price records for a given OracleType and Symbol */
  historicalPriceRecords = async (request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse> => {
    const data = QueryHistoricalPriceRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "HistoricalPriceRecords", data);
    return promise.then(data => QueryHistoricalPriceRecordsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves mixed volatility value for the specified pair of base/quote */
  oracleVolatility = async (request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse> => {
    const data = QueryOracleVolatilityRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleVolatility", data);
    return promise.then(data => QueryOracleVolatilityResponse.decode(new BinaryReader(data)));
  };
  /* OracleProvidersInfo */
  oracleProvidersInfo = async (request: QueryOracleProvidersInfoRequest = {}): Promise<QueryOracleProvidersInfoResponse> => {
    const data = QueryOracleProvidersInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProvidersInfo", data);
    return promise.then(data => QueryOracleProvidersInfoResponse.decode(new BinaryReader(data)));
  };
  /* OracleProviderPrices */
  oracleProviderPrices = async (request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse> => {
    const data = QueryOracleProviderPricesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProviderPrices", data);
    return promise.then(data => QueryOracleProviderPricesResponse.decode(new BinaryReader(data)));
  };
  /* OraclePrice */
  oraclePrice = async (request: QueryOraclePriceRequest): Promise<QueryOraclePriceResponse> => {
    const data = QueryOraclePriceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OraclePrice", data);
    return promise.then(data => QueryOraclePriceResponse.decode(new BinaryReader(data)));
  };
  /* PythPrice */
  pythPrice = async (request: QueryPythPriceRequest): Promise<QueryPythPriceResponse> => {
    const data = QueryPythPriceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PythPrice", data);
    return promise.then(data => QueryPythPriceResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};