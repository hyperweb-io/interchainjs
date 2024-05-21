import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves exchange params */
  queryExchangeParams(request?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponse>;
  /** Retrieves a Subaccount's Deposits */
  subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse>;
  /** Retrieves a Subaccount's Deposits */
  subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse>;
  /** Retrieves all of the balances of all users on the exchange. */
  exchangeBalances(request?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponse>;
  /** Retrieves the aggregate volumes for the specified account or subaccount */
  aggregateVolume(request: QueryAggregateVolumeRequest): Promise<QueryAggregateVolumeResponse>;
  /** Retrieves the aggregate volumes for specified accounts */
  aggregateVolumes(request: QueryAggregateVolumesRequest): Promise<QueryAggregateVolumesResponse>;
  /** Retrieves the aggregate volume for the specified market */
  aggregateMarketVolume(request: QueryAggregateMarketVolumeRequest): Promise<QueryAggregateMarketVolumeResponse>;
  /** Retrieves the aggregate market volumes for specified markets */
  aggregateMarketVolumes(request: QueryAggregateMarketVolumesRequest): Promise<QueryAggregateMarketVolumesResponse>;
  /** Retrieves the denom decimals for a denom. */
  denomDecimal(request: QueryDenomDecimalRequest): Promise<QueryDenomDecimalResponse>;
  /**
   * Retrieves the denom decimals for multiple denoms. Returns all denom
   * decimals if unspecified.
   */
  denomDecimals(request: QueryDenomDecimalsRequest): Promise<QueryDenomDecimalsResponse>;
  /** Retrieves a list of spot markets. */
  spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse>;
  /** Retrieves a spot market by ticker */
  spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse>;
  /** Retrieves a list of spot markets with extra information. */
  fullSpotMarkets(request: QueryFullSpotMarketsRequest): Promise<QueryFullSpotMarketsResponse>;
  /** Retrieves a spot market with extra information. */
  fullSpotMarket(request: QueryFullSpotMarketRequest): Promise<QueryFullSpotMarketResponse>;
  /** Retrieves a spot market's orderbook by marketID */
  spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse>;
  /** Retrieves a trader's spot orders */
  traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
  /** Retrieves all account address spot orders */
  accountAddressSpotOrders(request: QueryAccountAddressSpotOrdersRequest): Promise<QueryAccountAddressSpotOrdersResponse>;
  /**
   * Retrieves spot orders corresponding to specified order hashes for a given
   * subaccountID and marketID
   */
  spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse>;
  /** Retrieves subaccount's orders */
  subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse>;
  /** Retrieves a trader's transient spot orders */
  traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse>;
  /** Retrieves a spot market's mid-price */
  spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse>;
  /** Retrieves a derivative market's mid-price */
  derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse>;
  /** Retrieves a derivative market's orderbook by marketID */
  derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse>;
  /** Retrieves a trader's derivative orders */
  traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
  /** Retrieves all account address derivative orders */
  accountAddressDerivativeOrders(request: QueryAccountAddressDerivativeOrdersRequest): Promise<QueryAccountAddressDerivativeOrdersResponse>;
  /** Retrieves a trader's derivative orders */
  derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse>;
  /** Retrieves a trader's transient derivative orders */
  traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse>;
  /** Retrieves a list of derivative markets. */
  derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse>;
  /** Retrieves a derivative market by ticker */
  derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse>;
  /**
   * Retrieves a derivative market's corresponding address for fees that
   * contribute to the market's insurance fund
   */
  derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse>;
  /** Retrieves a subaccount's trade nonce */
  subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse>;
  /** Retrieves the entire exchange module's state */
  exchangeModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  /** Retrieves the entire exchange module's positions */
  positions(request?: QueryPositionsRequest): Promise<QueryPositionsResponse>;
  /** Retrieves subaccount's positions */
  subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse>;
  /** Retrieves subaccount's position in market */
  subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse>;
  /** Retrieves subaccount's position in market */
  subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse>;
  /** Retrieves perpetual market info */
  perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse>;
  /** Retrieves expiry market info */
  expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse>;
  /** Retrieves perpetual market funding */
  perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse>;
  /** Retrieves subaccount's order metadata */
  subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse>;
  /** Retrieves the account and total trade rewards points */
  tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
  /** Retrieves the pending account and total trade rewards points */
  pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse>;
  /** Retrieves the trade reward campaign */
  tradeRewardCampaign(request?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponse>;
  /** Retrieves the account's fee discount info */
  feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse>;
  /** Retrieves the fee discount schedule */
  feeDiscountSchedule(request?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponse>;
  /** Retrieves mismatches between available vs. total balance */
  balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse>;
  /** Retrieves available and total balances with balance holds */
  balanceWithBalanceHolds(request?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponse>;
  /** Retrieves fee discount tier stats */
  feeDiscountTierStatistics(request?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponse>;
  /** Retrieves market making pool info */
  mitoVaultInfos(request?: MitoVaultInfosRequest): Promise<MitoVaultInfosResponse>;
  /**
   * QueryMarketIDFromVault returns the market ID for a given vault subaccount
   * ID
   */
  queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse>;
  /** Retrieves historical trade records for a given market ID */
  historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse>;
  /** Retrieves if the account is opted out of rewards */
  isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse>;
  /** Retrieves all accounts opted out of rewards */
  optedOutOfRewardsAccounts(request?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponse>;
  /**
   * MarketVolatility computes the volatility for spot and derivative markets
   * trading history.
   */
  marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse>;
  /** Retrieves a spot market's orderbook by marketID */
  binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse>;
  /** Retrieves a trader's derivative conditional orders */
  traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse>;
  marketAtomicExecutionFeeMultiplier(request: QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<QueryMarketAtomicExecutionFeeMultiplierResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves exchange params */
  queryExchangeParams = async (request: QueryExchangeParamsRequest = {}): Promise<QueryExchangeParamsResponse> => {
    const data = QueryExchangeParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryExchangeParams", data);
    return promise.then(data => QueryExchangeParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a Subaccount's Deposits */
  subaccountDeposits = async (request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse> => {
    const data = QuerySubaccountDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposits", data);
    return promise.then(data => QuerySubaccountDepositsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a Subaccount's Deposits */
  subaccountDeposit = async (request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse> => {
    const data = QuerySubaccountDepositRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountDeposit", data);
    return promise.then(data => QuerySubaccountDepositResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves all of the balances of all users on the exchange. */
  exchangeBalances = async (request: QueryExchangeBalancesRequest = {}): Promise<QueryExchangeBalancesResponse> => {
    const data = QueryExchangeBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeBalances", data);
    return promise.then(data => QueryExchangeBalancesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the aggregate volumes for the specified account or subaccount */
  aggregateVolume = async (request: QueryAggregateVolumeRequest): Promise<QueryAggregateVolumeResponse> => {
    const data = QueryAggregateVolumeRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "AggregateVolume", data);
    return promise.then(data => QueryAggregateVolumeResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the aggregate volumes for specified accounts */
  aggregateVolumes = async (request: QueryAggregateVolumesRequest): Promise<QueryAggregateVolumesResponse> => {
    const data = QueryAggregateVolumesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "AggregateVolumes", data);
    return promise.then(data => QueryAggregateVolumesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the aggregate volume for the specified market */
  aggregateMarketVolume = async (request: QueryAggregateMarketVolumeRequest): Promise<QueryAggregateMarketVolumeResponse> => {
    const data = QueryAggregateMarketVolumeRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "AggregateMarketVolume", data);
    return promise.then(data => QueryAggregateMarketVolumeResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the aggregate market volumes for specified markets */
  aggregateMarketVolumes = async (request: QueryAggregateMarketVolumesRequest): Promise<QueryAggregateMarketVolumesResponse> => {
    const data = QueryAggregateMarketVolumesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "AggregateMarketVolumes", data);
    return promise.then(data => QueryAggregateMarketVolumesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the denom decimals for a denom. */
  denomDecimal = async (request: QueryDenomDecimalRequest): Promise<QueryDenomDecimalResponse> => {
    const data = QueryDenomDecimalRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DenomDecimal", data);
    return promise.then(data => QueryDenomDecimalResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the denom decimals for multiple denoms. Returns all denom
   decimals if unspecified. */
  denomDecimals = async (request: QueryDenomDecimalsRequest): Promise<QueryDenomDecimalsResponse> => {
    const data = QueryDenomDecimalsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DenomDecimals", data);
    return promise.then(data => QueryDenomDecimalsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a list of spot markets. */
  spotMarkets = async (request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse> => {
    const data = QuerySpotMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarkets", data);
    return promise.then(data => QuerySpotMarketsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a spot market by ticker */
  spotMarket = async (request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse> => {
    const data = QuerySpotMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMarket", data);
    return promise.then(data => QuerySpotMarketResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a list of spot markets with extra information. */
  fullSpotMarkets = async (request: QueryFullSpotMarketsRequest): Promise<QueryFullSpotMarketsResponse> => {
    const data = QueryFullSpotMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FullSpotMarkets", data);
    return promise.then(data => QueryFullSpotMarketsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a spot market with extra information. */
  fullSpotMarket = async (request: QueryFullSpotMarketRequest): Promise<QueryFullSpotMarketResponse> => {
    const data = QueryFullSpotMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FullSpotMarket", data);
    return promise.then(data => QueryFullSpotMarketResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a spot market's orderbook by marketID */
  spotOrderbook = async (request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse> => {
    const data = QuerySpotOrderbookRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrderbook", data);
    return promise.then(data => QuerySpotOrderbookResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a trader's spot orders */
  traderSpotOrders = async (request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> => {
    const data = QueryTraderSpotOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotOrders", data);
    return promise.then(data => QueryTraderSpotOrdersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves all account address spot orders */
  accountAddressSpotOrders = async (request: QueryAccountAddressSpotOrdersRequest): Promise<QueryAccountAddressSpotOrdersResponse> => {
    const data = QueryAccountAddressSpotOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "AccountAddressSpotOrders", data);
    return promise.then(data => QueryAccountAddressSpotOrdersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves spot orders corresponding to specified order hashes for a given
   subaccountID and marketID */
  spotOrdersByHashes = async (request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse> => {
    const data = QuerySpotOrdersByHashesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotOrdersByHashes", data);
    return promise.then(data => QuerySpotOrdersByHashesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves subaccount's orders */
  subaccountOrders = async (request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse> => {
    const data = QuerySubaccountOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrders", data);
    return promise.then(data => QuerySubaccountOrdersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a trader's transient spot orders */
  traderSpotTransientOrders = async (request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> => {
    const data = QueryTraderSpotOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderSpotTransientOrders", data);
    return promise.then(data => QueryTraderSpotOrdersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a spot market's mid-price */
  spotMidPriceAndTOB = async (request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse> => {
    const data = QuerySpotMidPriceAndTOBRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SpotMidPriceAndTOB", data);
    return promise.then(data => QuerySpotMidPriceAndTOBResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a derivative market's mid-price */
  derivativeMidPriceAndTOB = async (request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse> => {
    const data = QueryDerivativeMidPriceAndTOBRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMidPriceAndTOB", data);
    return promise.then(data => QueryDerivativeMidPriceAndTOBResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a derivative market's orderbook by marketID */
  derivativeOrderbook = async (request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse> => {
    const data = QueryDerivativeOrderbookRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrderbook", data);
    return promise.then(data => QueryDerivativeOrderbookResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a trader's derivative orders */
  traderDerivativeOrders = async (request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> => {
    const data = QueryTraderDerivativeOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeOrders", data);
    return promise.then(data => QueryTraderDerivativeOrdersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves all account address derivative orders */
  accountAddressDerivativeOrders = async (request: QueryAccountAddressDerivativeOrdersRequest): Promise<QueryAccountAddressDerivativeOrdersResponse> => {
    const data = QueryAccountAddressDerivativeOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "AccountAddressDerivativeOrders", data);
    return promise.then(data => QueryAccountAddressDerivativeOrdersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a trader's derivative orders */
  derivativeOrdersByHashes = async (request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse> => {
    const data = QueryDerivativeOrdersByHashesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeOrdersByHashes", data);
    return promise.then(data => QueryDerivativeOrdersByHashesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a trader's transient derivative orders */
  traderDerivativeTransientOrders = async (request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> => {
    const data = QueryTraderDerivativeOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeTransientOrders", data);
    return promise.then(data => QueryTraderDerivativeOrdersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a list of derivative markets. */
  derivativeMarkets = async (request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse> => {
    const data = QueryDerivativeMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarkets", data);
    return promise.then(data => QueryDerivativeMarketsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a derivative market by ticker */
  derivativeMarket = async (request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse> => {
    const data = QueryDerivativeMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarket", data);
    return promise.then(data => QueryDerivativeMarketResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a derivative market's corresponding address for fees that
   contribute to the market's insurance fund */
  derivativeMarketAddress = async (request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse> => {
    const data = QueryDerivativeMarketAddressRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "DerivativeMarketAddress", data);
    return promise.then(data => QueryDerivativeMarketAddressResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a subaccount's trade nonce */
  subaccountTradeNonce = async (request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse> => {
    const data = QuerySubaccountTradeNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountTradeNonce", data);
    return promise.then(data => QuerySubaccountTradeNonceResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire exchange module's state */
  exchangeModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExchangeModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire exchange module's positions */
  positions = async (request: QueryPositionsRequest = {}): Promise<QueryPositionsResponse> => {
    const data = QueryPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "Positions", data);
    return promise.then(data => QueryPositionsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves subaccount's positions */
  subaccountPositions = async (request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse> => {
    const data = QuerySubaccountPositionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositions", data);
    return promise.then(data => QuerySubaccountPositionsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves subaccount's position in market */
  subaccountPositionInMarket = async (request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse> => {
    const data = QuerySubaccountPositionInMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountPositionInMarket", data);
    return promise.then(data => QuerySubaccountPositionInMarketResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves subaccount's position in market */
  subaccountEffectivePositionInMarket = async (request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse> => {
    const data = QuerySubaccountEffectivePositionInMarketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountEffectivePositionInMarket", data);
    return promise.then(data => QuerySubaccountEffectivePositionInMarketResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves perpetual market info */
  perpetualMarketInfo = async (request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse> => {
    const data = QueryPerpetualMarketInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketInfo", data);
    return promise.then(data => QueryPerpetualMarketInfoResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves expiry market info */
  expiryFuturesMarketInfo = async (request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse> => {
    const data = QueryExpiryFuturesMarketInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ExpiryFuturesMarketInfo", data);
    return promise.then(data => QueryExpiryFuturesMarketInfoResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves perpetual market funding */
  perpetualMarketFunding = async (request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse> => {
    const data = QueryPerpetualMarketFundingRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PerpetualMarketFunding", data);
    return promise.then(data => QueryPerpetualMarketFundingResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves subaccount's order metadata */
  subaccountOrderMetadata = async (request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse> => {
    const data = QuerySubaccountOrderMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "SubaccountOrderMetadata", data);
    return promise.then(data => QuerySubaccountOrderMetadataResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the account and total trade rewards points */
  tradeRewardPoints = async (request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> => {
    const data = QueryTradeRewardPointsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardPoints", data);
    return promise.then(data => QueryTradeRewardPointsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the pending account and total trade rewards points */
  pendingTradeRewardPoints = async (request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> => {
    const data = QueryTradeRewardPointsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "PendingTradeRewardPoints", data);
    return promise.then(data => QueryTradeRewardPointsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the trade reward campaign */
  tradeRewardCampaign = async (request: QueryTradeRewardCampaignRequest = {}): Promise<QueryTradeRewardCampaignResponse> => {
    const data = QueryTradeRewardCampaignRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TradeRewardCampaign", data);
    return promise.then(data => QueryTradeRewardCampaignResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the account's fee discount info */
  feeDiscountAccountInfo = async (request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse> => {
    const data = QueryFeeDiscountAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountAccountInfo", data);
    return promise.then(data => QueryFeeDiscountAccountInfoResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the fee discount schedule */
  feeDiscountSchedule = async (request: QueryFeeDiscountScheduleRequest = {}): Promise<QueryFeeDiscountScheduleResponse> => {
    const data = QueryFeeDiscountScheduleRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountSchedule", data);
    return promise.then(data => QueryFeeDiscountScheduleResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves mismatches between available vs. total balance */
  balanceMismatches = async (request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse> => {
    const data = QueryBalanceMismatchesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceMismatches", data);
    return promise.then(data => QueryBalanceMismatchesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves available and total balances with balance holds */
  balanceWithBalanceHolds = async (request: QueryBalanceWithBalanceHoldsRequest = {}): Promise<QueryBalanceWithBalanceHoldsResponse> => {
    const data = QueryBalanceWithBalanceHoldsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BalanceWithBalanceHolds", data);
    return promise.then(data => QueryBalanceWithBalanceHoldsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves fee discount tier stats */
  feeDiscountTierStatistics = async (request: QueryFeeDiscountTierStatisticsRequest = {}): Promise<QueryFeeDiscountTierStatisticsResponse> => {
    const data = QueryFeeDiscountTierStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "FeeDiscountTierStatistics", data);
    return promise.then(data => QueryFeeDiscountTierStatisticsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves market making pool info */
  mitoVaultInfos = async (request: MitoVaultInfosRequest = {}): Promise<MitoVaultInfosResponse> => {
    const data = MitoVaultInfosRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "MitoVaultInfos", data);
    return promise.then(data => MitoVaultInfosResponse.decode(new BinaryReader(data)));
  };
  /* QueryMarketIDFromVault returns the market ID for a given vault subaccount
   ID */
  queryMarketIDFromVault = async (request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse> => {
    const data = QueryMarketIDFromVaultRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "QueryMarketIDFromVault", data);
    return promise.then(data => QueryMarketIDFromVaultResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves historical trade records for a given market ID */
  historicalTradeRecords = async (request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse> => {
    const data = QueryHistoricalTradeRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "HistoricalTradeRecords", data);
    return promise.then(data => QueryHistoricalTradeRecordsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves if the account is opted out of rewards */
  isOptedOutOfRewards = async (request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse> => {
    const data = QueryIsOptedOutOfRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "IsOptedOutOfRewards", data);
    return promise.then(data => QueryIsOptedOutOfRewardsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves all accounts opted out of rewards */
  optedOutOfRewardsAccounts = async (request: QueryOptedOutOfRewardsAccountsRequest = {}): Promise<QueryOptedOutOfRewardsAccountsResponse> => {
    const data = QueryOptedOutOfRewardsAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "OptedOutOfRewardsAccounts", data);
    return promise.then(data => QueryOptedOutOfRewardsAccountsResponse.decode(new BinaryReader(data)));
  };
  /* MarketVolatility computes the volatility for spot and derivative markets
   trading history. */
  marketVolatility = async (request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse> => {
    const data = QueryMarketVolatilityRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "MarketVolatility", data);
    return promise.then(data => QueryMarketVolatilityResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a spot market's orderbook by marketID */
  binaryOptionsMarkets = async (request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse> => {
    const data = QueryBinaryMarketsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "BinaryOptionsMarkets", data);
    return promise.then(data => QueryBinaryMarketsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves a trader's derivative conditional orders */
  traderDerivativeConditionalOrders = async (request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse> => {
    const data = QueryTraderDerivativeConditionalOrdersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "TraderDerivativeConditionalOrders", data);
    return promise.then(data => QueryTraderDerivativeConditionalOrdersResponse.decode(new BinaryReader(data)));
  };
  /* MarketAtomicExecutionFeeMultiplier */
  marketAtomicExecutionFeeMultiplier = async (request: QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<QueryMarketAtomicExecutionFeeMultiplierResponse> => {
    const data = QueryMarketAtomicExecutionFeeMultiplierRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "MarketAtomicExecutionFeeMultiplier", data);
    return promise.then(data => QueryMarketAtomicExecutionFeeMultiplierResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};