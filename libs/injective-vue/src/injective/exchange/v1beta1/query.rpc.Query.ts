import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse, ReactiveQueryExchangeParamsRequest, ReactiveQuerySubaccountDepositsRequest, ReactiveQuerySubaccountDepositRequest, ReactiveQueryExchangeBalancesRequest, ReactiveQueryAggregateVolumeRequest, ReactiveQueryAggregateVolumesRequest, ReactiveQueryAggregateMarketVolumeRequest, ReactiveQueryAggregateMarketVolumesRequest, ReactiveQueryDenomDecimalRequest, ReactiveQueryDenomDecimalsRequest, ReactiveQuerySpotMarketsRequest, ReactiveQuerySpotMarketRequest, ReactiveQueryFullSpotMarketsRequest, ReactiveQueryFullSpotMarketRequest, ReactiveQuerySpotOrderbookRequest, ReactiveQueryTraderSpotOrdersRequest, ReactiveQueryAccountAddressSpotOrdersRequest, ReactiveQuerySpotOrdersByHashesRequest, ReactiveQuerySubaccountOrdersRequest, ReactiveQuerySpotMidPriceAndTOBRequest, ReactiveQueryDerivativeMidPriceAndTOBRequest, ReactiveQueryDerivativeOrderbookRequest, ReactiveQueryTraderDerivativeOrdersRequest, ReactiveQueryAccountAddressDerivativeOrdersRequest, ReactiveQueryDerivativeOrdersByHashesRequest, ReactiveQueryDerivativeMarketsRequest, ReactiveQueryDerivativeMarketRequest, ReactiveQueryDerivativeMarketAddressRequest, ReactiveQuerySubaccountTradeNonceRequest, ReactiveQueryModuleStateRequest, ReactiveQueryPositionsRequest, ReactiveQuerySubaccountPositionsRequest, ReactiveQuerySubaccountPositionInMarketRequest, ReactiveQuerySubaccountEffectivePositionInMarketRequest, ReactiveQueryPerpetualMarketInfoRequest, ReactiveQueryExpiryFuturesMarketInfoRequest, ReactiveQueryPerpetualMarketFundingRequest, ReactiveQuerySubaccountOrderMetadataRequest, ReactiveQueryTradeRewardPointsRequest, ReactiveQueryTradeRewardCampaignRequest, ReactiveQueryFeeDiscountAccountInfoRequest, ReactiveQueryFeeDiscountScheduleRequest, ReactiveQueryBalanceMismatchesRequest, ReactiveQueryBalanceWithBalanceHoldsRequest, ReactiveQueryFeeDiscountTierStatisticsRequest, ReactiveQueryMarketIDFromVaultRequest, ReactiveQueryHistoricalTradeRecordsRequest, ReactiveQueryIsOptedOutOfRewardsRequest, ReactiveQueryOptedOutOfRewardsAccountsRequest, ReactiveQueryMarketVolatilityRequest, ReactiveQueryBinaryMarketsRequest, ReactiveQueryTraderDerivativeConditionalOrdersRequest, ReactiveQueryMarketAtomicExecutionFeeMultiplierRequest, ReactiveQueryActiveStakeGrantRequest, ReactiveQueryGrantAuthorizationRequest, ReactiveQueryGrantAuthorizationsRequest } from "./query";
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
  /** Retrieves the active stake grant for a grantee */
  activeStakeGrant(request: QueryActiveStakeGrantRequest): Promise<QueryActiveStakeGrantResponse>;
  /** Retrieves the grant authorization amount for a granter and grantee */
  grantAuthorization(request: QueryGrantAuthorizationRequest): Promise<QueryGrantAuthorizationResponse>;
  /** Retrieves the grant authorization amount for a granter and grantee */
  grantAuthorizations(request: QueryGrantAuthorizationsRequest): Promise<QueryGrantAuthorizationsResponse>;
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
  /* Retrieves the active stake grant for a grantee */
  activeStakeGrant = async (request: QueryActiveStakeGrantRequest): Promise<QueryActiveStakeGrantResponse> => {
    const data = QueryActiveStakeGrantRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "ActiveStakeGrant", data);
    return promise.then(data => QueryActiveStakeGrantResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the grant authorization amount for a granter and grantee */
  grantAuthorization = async (request: QueryGrantAuthorizationRequest): Promise<QueryGrantAuthorizationResponse> => {
    const data = QueryGrantAuthorizationRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "GrantAuthorization", data);
    return promise.then(data => QueryGrantAuthorizationResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the grant authorization amount for a granter and grantee */
  grantAuthorizations = async (request: QueryGrantAuthorizationsRequest): Promise<QueryGrantAuthorizationsResponse> => {
    const data = QueryGrantAuthorizationsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.exchange.v1beta1.Query", "GrantAuthorizations", data);
    return promise.then(data => QueryGrantAuthorizationsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryExchangeParams(request?: QueryExchangeParamsRequest): Promise<QueryExchangeParamsResponse> {
      return queryService.queryExchangeParams(request);
    },
    subaccountDeposits(request: QuerySubaccountDepositsRequest): Promise<QuerySubaccountDepositsResponse> {
      return queryService.subaccountDeposits(request);
    },
    subaccountDeposit(request: QuerySubaccountDepositRequest): Promise<QuerySubaccountDepositResponse> {
      return queryService.subaccountDeposit(request);
    },
    exchangeBalances(request?: QueryExchangeBalancesRequest): Promise<QueryExchangeBalancesResponse> {
      return queryService.exchangeBalances(request);
    },
    aggregateVolume(request: QueryAggregateVolumeRequest): Promise<QueryAggregateVolumeResponse> {
      return queryService.aggregateVolume(request);
    },
    aggregateVolumes(request: QueryAggregateVolumesRequest): Promise<QueryAggregateVolumesResponse> {
      return queryService.aggregateVolumes(request);
    },
    aggregateMarketVolume(request: QueryAggregateMarketVolumeRequest): Promise<QueryAggregateMarketVolumeResponse> {
      return queryService.aggregateMarketVolume(request);
    },
    aggregateMarketVolumes(request: QueryAggregateMarketVolumesRequest): Promise<QueryAggregateMarketVolumesResponse> {
      return queryService.aggregateMarketVolumes(request);
    },
    denomDecimal(request: QueryDenomDecimalRequest): Promise<QueryDenomDecimalResponse> {
      return queryService.denomDecimal(request);
    },
    denomDecimals(request: QueryDenomDecimalsRequest): Promise<QueryDenomDecimalsResponse> {
      return queryService.denomDecimals(request);
    },
    spotMarkets(request: QuerySpotMarketsRequest): Promise<QuerySpotMarketsResponse> {
      return queryService.spotMarkets(request);
    },
    spotMarket(request: QuerySpotMarketRequest): Promise<QuerySpotMarketResponse> {
      return queryService.spotMarket(request);
    },
    fullSpotMarkets(request: QueryFullSpotMarketsRequest): Promise<QueryFullSpotMarketsResponse> {
      return queryService.fullSpotMarkets(request);
    },
    fullSpotMarket(request: QueryFullSpotMarketRequest): Promise<QueryFullSpotMarketResponse> {
      return queryService.fullSpotMarket(request);
    },
    spotOrderbook(request: QuerySpotOrderbookRequest): Promise<QuerySpotOrderbookResponse> {
      return queryService.spotOrderbook(request);
    },
    traderSpotOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
      return queryService.traderSpotOrders(request);
    },
    accountAddressSpotOrders(request: QueryAccountAddressSpotOrdersRequest): Promise<QueryAccountAddressSpotOrdersResponse> {
      return queryService.accountAddressSpotOrders(request);
    },
    spotOrdersByHashes(request: QuerySpotOrdersByHashesRequest): Promise<QuerySpotOrdersByHashesResponse> {
      return queryService.spotOrdersByHashes(request);
    },
    subaccountOrders(request: QuerySubaccountOrdersRequest): Promise<QuerySubaccountOrdersResponse> {
      return queryService.subaccountOrders(request);
    },
    traderSpotTransientOrders(request: QueryTraderSpotOrdersRequest): Promise<QueryTraderSpotOrdersResponse> {
      return queryService.traderSpotTransientOrders(request);
    },
    spotMidPriceAndTOB(request: QuerySpotMidPriceAndTOBRequest): Promise<QuerySpotMidPriceAndTOBResponse> {
      return queryService.spotMidPriceAndTOB(request);
    },
    derivativeMidPriceAndTOB(request: QueryDerivativeMidPriceAndTOBRequest): Promise<QueryDerivativeMidPriceAndTOBResponse> {
      return queryService.derivativeMidPriceAndTOB(request);
    },
    derivativeOrderbook(request: QueryDerivativeOrderbookRequest): Promise<QueryDerivativeOrderbookResponse> {
      return queryService.derivativeOrderbook(request);
    },
    traderDerivativeOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
      return queryService.traderDerivativeOrders(request);
    },
    accountAddressDerivativeOrders(request: QueryAccountAddressDerivativeOrdersRequest): Promise<QueryAccountAddressDerivativeOrdersResponse> {
      return queryService.accountAddressDerivativeOrders(request);
    },
    derivativeOrdersByHashes(request: QueryDerivativeOrdersByHashesRequest): Promise<QueryDerivativeOrdersByHashesResponse> {
      return queryService.derivativeOrdersByHashes(request);
    },
    traderDerivativeTransientOrders(request: QueryTraderDerivativeOrdersRequest): Promise<QueryTraderDerivativeOrdersResponse> {
      return queryService.traderDerivativeTransientOrders(request);
    },
    derivativeMarkets(request: QueryDerivativeMarketsRequest): Promise<QueryDerivativeMarketsResponse> {
      return queryService.derivativeMarkets(request);
    },
    derivativeMarket(request: QueryDerivativeMarketRequest): Promise<QueryDerivativeMarketResponse> {
      return queryService.derivativeMarket(request);
    },
    derivativeMarketAddress(request: QueryDerivativeMarketAddressRequest): Promise<QueryDerivativeMarketAddressResponse> {
      return queryService.derivativeMarketAddress(request);
    },
    subaccountTradeNonce(request: QuerySubaccountTradeNonceRequest): Promise<QuerySubaccountTradeNonceResponse> {
      return queryService.subaccountTradeNonce(request);
    },
    exchangeModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.exchangeModuleState(request);
    },
    positions(request?: QueryPositionsRequest): Promise<QueryPositionsResponse> {
      return queryService.positions(request);
    },
    subaccountPositions(request: QuerySubaccountPositionsRequest): Promise<QuerySubaccountPositionsResponse> {
      return queryService.subaccountPositions(request);
    },
    subaccountPositionInMarket(request: QuerySubaccountPositionInMarketRequest): Promise<QuerySubaccountPositionInMarketResponse> {
      return queryService.subaccountPositionInMarket(request);
    },
    subaccountEffectivePositionInMarket(request: QuerySubaccountEffectivePositionInMarketRequest): Promise<QuerySubaccountEffectivePositionInMarketResponse> {
      return queryService.subaccountEffectivePositionInMarket(request);
    },
    perpetualMarketInfo(request: QueryPerpetualMarketInfoRequest): Promise<QueryPerpetualMarketInfoResponse> {
      return queryService.perpetualMarketInfo(request);
    },
    expiryFuturesMarketInfo(request: QueryExpiryFuturesMarketInfoRequest): Promise<QueryExpiryFuturesMarketInfoResponse> {
      return queryService.expiryFuturesMarketInfo(request);
    },
    perpetualMarketFunding(request: QueryPerpetualMarketFundingRequest): Promise<QueryPerpetualMarketFundingResponse> {
      return queryService.perpetualMarketFunding(request);
    },
    subaccountOrderMetadata(request: QuerySubaccountOrderMetadataRequest): Promise<QuerySubaccountOrderMetadataResponse> {
      return queryService.subaccountOrderMetadata(request);
    },
    tradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
      return queryService.tradeRewardPoints(request);
    },
    pendingTradeRewardPoints(request: QueryTradeRewardPointsRequest): Promise<QueryTradeRewardPointsResponse> {
      return queryService.pendingTradeRewardPoints(request);
    },
    tradeRewardCampaign(request?: QueryTradeRewardCampaignRequest): Promise<QueryTradeRewardCampaignResponse> {
      return queryService.tradeRewardCampaign(request);
    },
    feeDiscountAccountInfo(request: QueryFeeDiscountAccountInfoRequest): Promise<QueryFeeDiscountAccountInfoResponse> {
      return queryService.feeDiscountAccountInfo(request);
    },
    feeDiscountSchedule(request?: QueryFeeDiscountScheduleRequest): Promise<QueryFeeDiscountScheduleResponse> {
      return queryService.feeDiscountSchedule(request);
    },
    balanceMismatches(request: QueryBalanceMismatchesRequest): Promise<QueryBalanceMismatchesResponse> {
      return queryService.balanceMismatches(request);
    },
    balanceWithBalanceHolds(request?: QueryBalanceWithBalanceHoldsRequest): Promise<QueryBalanceWithBalanceHoldsResponse> {
      return queryService.balanceWithBalanceHolds(request);
    },
    feeDiscountTierStatistics(request?: QueryFeeDiscountTierStatisticsRequest): Promise<QueryFeeDiscountTierStatisticsResponse> {
      return queryService.feeDiscountTierStatistics(request);
    },
    mitoVaultInfos(request?: MitoVaultInfosRequest): Promise<MitoVaultInfosResponse> {
      return queryService.mitoVaultInfos(request);
    },
    queryMarketIDFromVault(request: QueryMarketIDFromVaultRequest): Promise<QueryMarketIDFromVaultResponse> {
      return queryService.queryMarketIDFromVault(request);
    },
    historicalTradeRecords(request: QueryHistoricalTradeRecordsRequest): Promise<QueryHistoricalTradeRecordsResponse> {
      return queryService.historicalTradeRecords(request);
    },
    isOptedOutOfRewards(request: QueryIsOptedOutOfRewardsRequest): Promise<QueryIsOptedOutOfRewardsResponse> {
      return queryService.isOptedOutOfRewards(request);
    },
    optedOutOfRewardsAccounts(request?: QueryOptedOutOfRewardsAccountsRequest): Promise<QueryOptedOutOfRewardsAccountsResponse> {
      return queryService.optedOutOfRewardsAccounts(request);
    },
    marketVolatility(request: QueryMarketVolatilityRequest): Promise<QueryMarketVolatilityResponse> {
      return queryService.marketVolatility(request);
    },
    binaryOptionsMarkets(request: QueryBinaryMarketsRequest): Promise<QueryBinaryMarketsResponse> {
      return queryService.binaryOptionsMarkets(request);
    },
    traderDerivativeConditionalOrders(request: QueryTraderDerivativeConditionalOrdersRequest): Promise<QueryTraderDerivativeConditionalOrdersResponse> {
      return queryService.traderDerivativeConditionalOrders(request);
    },
    marketAtomicExecutionFeeMultiplier(request: QueryMarketAtomicExecutionFeeMultiplierRequest): Promise<QueryMarketAtomicExecutionFeeMultiplierResponse> {
      return queryService.marketAtomicExecutionFeeMultiplier(request);
    },
    activeStakeGrant(request: QueryActiveStakeGrantRequest): Promise<QueryActiveStakeGrantResponse> {
      return queryService.activeStakeGrant(request);
    },
    grantAuthorization(request: QueryGrantAuthorizationRequest): Promise<QueryGrantAuthorizationResponse> {
      return queryService.grantAuthorization(request);
    },
    grantAuthorizations(request: QueryGrantAuthorizationsRequest): Promise<QueryGrantAuthorizationsResponse> {
      return queryService.grantAuthorizations(request);
    }
  };
};
export interface UseQueryExchangeParamsQuery<TData> extends VueQueryParams<QueryExchangeParamsResponse, TData> {
  request?: ReactiveQueryExchangeParamsRequest;
}
export interface UseSubaccountDepositsQuery<TData> extends VueQueryParams<QuerySubaccountDepositsResponse, TData> {
  request: ReactiveQuerySubaccountDepositsRequest;
}
export interface UseSubaccountDepositQuery<TData> extends VueQueryParams<QuerySubaccountDepositResponse, TData> {
  request: ReactiveQuerySubaccountDepositRequest;
}
export interface UseExchangeBalancesQuery<TData> extends VueQueryParams<QueryExchangeBalancesResponse, TData> {
  request?: ReactiveQueryExchangeBalancesRequest;
}
export interface UseAggregateVolumeQuery<TData> extends VueQueryParams<QueryAggregateVolumeResponse, TData> {
  request: ReactiveQueryAggregateVolumeRequest;
}
export interface UseAggregateVolumesQuery<TData> extends VueQueryParams<QueryAggregateVolumesResponse, TData> {
  request: ReactiveQueryAggregateVolumesRequest;
}
export interface UseAggregateMarketVolumeQuery<TData> extends VueQueryParams<QueryAggregateMarketVolumeResponse, TData> {
  request: ReactiveQueryAggregateMarketVolumeRequest;
}
export interface UseAggregateMarketVolumesQuery<TData> extends VueQueryParams<QueryAggregateMarketVolumesResponse, TData> {
  request: ReactiveQueryAggregateMarketVolumesRequest;
}
export interface UseDenomDecimalQuery<TData> extends VueQueryParams<QueryDenomDecimalResponse, TData> {
  request: ReactiveQueryDenomDecimalRequest;
}
export interface UseDenomDecimalsQuery<TData> extends VueQueryParams<QueryDenomDecimalsResponse, TData> {
  request: ReactiveQueryDenomDecimalsRequest;
}
export interface UseSpotMarketsQuery<TData> extends VueQueryParams<QuerySpotMarketsResponse, TData> {
  request: ReactiveQuerySpotMarketsRequest;
}
export interface UseSpotMarketQuery<TData> extends VueQueryParams<QuerySpotMarketResponse, TData> {
  request: ReactiveQuerySpotMarketRequest;
}
export interface UseFullSpotMarketsQuery<TData> extends VueQueryParams<QueryFullSpotMarketsResponse, TData> {
  request: ReactiveQueryFullSpotMarketsRequest;
}
export interface UseFullSpotMarketQuery<TData> extends VueQueryParams<QueryFullSpotMarketResponse, TData> {
  request: ReactiveQueryFullSpotMarketRequest;
}
export interface UseSpotOrderbookQuery<TData> extends VueQueryParams<QuerySpotOrderbookResponse, TData> {
  request: ReactiveQuerySpotOrderbookRequest;
}
export interface UseTraderSpotOrdersQuery<TData> extends VueQueryParams<QueryTraderSpotOrdersResponse, TData> {
  request: ReactiveQueryTraderSpotOrdersRequest;
}
export interface UseAccountAddressSpotOrdersQuery<TData> extends VueQueryParams<QueryAccountAddressSpotOrdersResponse, TData> {
  request: ReactiveQueryAccountAddressSpotOrdersRequest;
}
export interface UseSpotOrdersByHashesQuery<TData> extends VueQueryParams<QuerySpotOrdersByHashesResponse, TData> {
  request: ReactiveQuerySpotOrdersByHashesRequest;
}
export interface UseSubaccountOrdersQuery<TData> extends VueQueryParams<QuerySubaccountOrdersResponse, TData> {
  request: ReactiveQuerySubaccountOrdersRequest;
}
export interface UseTraderSpotTransientOrdersQuery<TData> extends VueQueryParams<QueryTraderSpotOrdersResponse, TData> {
  request: ReactiveQueryTraderSpotOrdersRequest;
}
export interface UseSpotMidPriceAndTOBQuery<TData> extends VueQueryParams<QuerySpotMidPriceAndTOBResponse, TData> {
  request: ReactiveQuerySpotMidPriceAndTOBRequest;
}
export interface UseDerivativeMidPriceAndTOBQuery<TData> extends VueQueryParams<QueryDerivativeMidPriceAndTOBResponse, TData> {
  request: ReactiveQueryDerivativeMidPriceAndTOBRequest;
}
export interface UseDerivativeOrderbookQuery<TData> extends VueQueryParams<QueryDerivativeOrderbookResponse, TData> {
  request: ReactiveQueryDerivativeOrderbookRequest;
}
export interface UseTraderDerivativeOrdersQuery<TData> extends VueQueryParams<QueryTraderDerivativeOrdersResponse, TData> {
  request: ReactiveQueryTraderDerivativeOrdersRequest;
}
export interface UseAccountAddressDerivativeOrdersQuery<TData> extends VueQueryParams<QueryAccountAddressDerivativeOrdersResponse, TData> {
  request: ReactiveQueryAccountAddressDerivativeOrdersRequest;
}
export interface UseDerivativeOrdersByHashesQuery<TData> extends VueQueryParams<QueryDerivativeOrdersByHashesResponse, TData> {
  request: ReactiveQueryDerivativeOrdersByHashesRequest;
}
export interface UseTraderDerivativeTransientOrdersQuery<TData> extends VueQueryParams<QueryTraderDerivativeOrdersResponse, TData> {
  request: ReactiveQueryTraderDerivativeOrdersRequest;
}
export interface UseDerivativeMarketsQuery<TData> extends VueQueryParams<QueryDerivativeMarketsResponse, TData> {
  request: ReactiveQueryDerivativeMarketsRequest;
}
export interface UseDerivativeMarketQuery<TData> extends VueQueryParams<QueryDerivativeMarketResponse, TData> {
  request: ReactiveQueryDerivativeMarketRequest;
}
export interface UseDerivativeMarketAddressQuery<TData> extends VueQueryParams<QueryDerivativeMarketAddressResponse, TData> {
  request: ReactiveQueryDerivativeMarketAddressRequest;
}
export interface UseSubaccountTradeNonceQuery<TData> extends VueQueryParams<QuerySubaccountTradeNonceResponse, TData> {
  request: ReactiveQuerySubaccountTradeNonceRequest;
}
export interface UseExchangeModuleStateQuery<TData> extends VueQueryParams<QueryModuleStateResponse, TData> {
  request?: ReactiveQueryModuleStateRequest;
}
export interface UsePositionsQuery<TData> extends VueQueryParams<QueryPositionsResponse, TData> {
  request?: ReactiveQueryPositionsRequest;
}
export interface UseSubaccountPositionsQuery<TData> extends VueQueryParams<QuerySubaccountPositionsResponse, TData> {
  request: ReactiveQuerySubaccountPositionsRequest;
}
export interface UseSubaccountPositionInMarketQuery<TData> extends VueQueryParams<QuerySubaccountPositionInMarketResponse, TData> {
  request: ReactiveQuerySubaccountPositionInMarketRequest;
}
export interface UseSubaccountEffectivePositionInMarketQuery<TData> extends VueQueryParams<QuerySubaccountEffectivePositionInMarketResponse, TData> {
  request: ReactiveQuerySubaccountEffectivePositionInMarketRequest;
}
export interface UsePerpetualMarketInfoQuery<TData> extends VueQueryParams<QueryPerpetualMarketInfoResponse, TData> {
  request: ReactiveQueryPerpetualMarketInfoRequest;
}
export interface UseExpiryFuturesMarketInfoQuery<TData> extends VueQueryParams<QueryExpiryFuturesMarketInfoResponse, TData> {
  request: ReactiveQueryExpiryFuturesMarketInfoRequest;
}
export interface UsePerpetualMarketFundingQuery<TData> extends VueQueryParams<QueryPerpetualMarketFundingResponse, TData> {
  request: ReactiveQueryPerpetualMarketFundingRequest;
}
export interface UseSubaccountOrderMetadataQuery<TData> extends VueQueryParams<QuerySubaccountOrderMetadataResponse, TData> {
  request: ReactiveQuerySubaccountOrderMetadataRequest;
}
export interface UseTradeRewardPointsQuery<TData> extends VueQueryParams<QueryTradeRewardPointsResponse, TData> {
  request: ReactiveQueryTradeRewardPointsRequest;
}
export interface UsePendingTradeRewardPointsQuery<TData> extends VueQueryParams<QueryTradeRewardPointsResponse, TData> {
  request: ReactiveQueryTradeRewardPointsRequest;
}
export interface UseTradeRewardCampaignQuery<TData> extends VueQueryParams<QueryTradeRewardCampaignResponse, TData> {
  request?: ReactiveQueryTradeRewardCampaignRequest;
}
export interface UseFeeDiscountAccountInfoQuery<TData> extends VueQueryParams<QueryFeeDiscountAccountInfoResponse, TData> {
  request: ReactiveQueryFeeDiscountAccountInfoRequest;
}
export interface UseFeeDiscountScheduleQuery<TData> extends VueQueryParams<QueryFeeDiscountScheduleResponse, TData> {
  request?: ReactiveQueryFeeDiscountScheduleRequest;
}
export interface UseBalanceMismatchesQuery<TData> extends VueQueryParams<QueryBalanceMismatchesResponse, TData> {
  request: ReactiveQueryBalanceMismatchesRequest;
}
export interface UseBalanceWithBalanceHoldsQuery<TData> extends VueQueryParams<QueryBalanceWithBalanceHoldsResponse, TData> {
  request?: ReactiveQueryBalanceWithBalanceHoldsRequest;
}
export interface UseFeeDiscountTierStatisticsQuery<TData> extends VueQueryParams<QueryFeeDiscountTierStatisticsResponse, TData> {
  request?: ReactiveQueryFeeDiscountTierStatisticsRequest;
}
export interface UseMitoVaultInfosQuery<TData> extends VueQueryParams<MitoVaultInfosResponse, TData> {
  request?: ReactiveMitoVaultInfosRequest;
}
export interface UseQueryMarketIDFromVaultQuery<TData> extends VueQueryParams<QueryMarketIDFromVaultResponse, TData> {
  request: ReactiveQueryMarketIDFromVaultRequest;
}
export interface UseHistoricalTradeRecordsQuery<TData> extends VueQueryParams<QueryHistoricalTradeRecordsResponse, TData> {
  request: ReactiveQueryHistoricalTradeRecordsRequest;
}
export interface UseIsOptedOutOfRewardsQuery<TData> extends VueQueryParams<QueryIsOptedOutOfRewardsResponse, TData> {
  request: ReactiveQueryIsOptedOutOfRewardsRequest;
}
export interface UseOptedOutOfRewardsAccountsQuery<TData> extends VueQueryParams<QueryOptedOutOfRewardsAccountsResponse, TData> {
  request?: ReactiveQueryOptedOutOfRewardsAccountsRequest;
}
export interface UseMarketVolatilityQuery<TData> extends VueQueryParams<QueryMarketVolatilityResponse, TData> {
  request: ReactiveQueryMarketVolatilityRequest;
}
export interface UseBinaryOptionsMarketsQuery<TData> extends VueQueryParams<QueryBinaryMarketsResponse, TData> {
  request: ReactiveQueryBinaryMarketsRequest;
}
export interface UseTraderDerivativeConditionalOrdersQuery<TData> extends VueQueryParams<QueryTraderDerivativeConditionalOrdersResponse, TData> {
  request: ReactiveQueryTraderDerivativeConditionalOrdersRequest;
}
export interface UseMarketAtomicExecutionFeeMultiplierQuery<TData> extends VueQueryParams<QueryMarketAtomicExecutionFeeMultiplierResponse, TData> {
  request: ReactiveQueryMarketAtomicExecutionFeeMultiplierRequest;
}
export interface UseActiveStakeGrantQuery<TData> extends VueQueryParams<QueryActiveStakeGrantResponse, TData> {
  request: ReactiveQueryActiveStakeGrantRequest;
}
export interface UseGrantAuthorizationQuery<TData> extends VueQueryParams<QueryGrantAuthorizationResponse, TData> {
  request: ReactiveQueryGrantAuthorizationRequest;
}
export interface UseGrantAuthorizationsQuery<TData> extends VueQueryParams<QueryGrantAuthorizationsResponse, TData> {
  request: ReactiveQueryGrantAuthorizationsRequest;
}
export const useQueryService = (rpc: Ref<ProtobufRpcClient | undefined>): ComputedRef<QueryClientImpl | undefined> => {
  const _queryClients = new WeakMap();
  return computed(() => {
    if (rpc.value) {
      if (_queryClients.has(rpc.value)) {
        return _queryClients.get(rpc.value);
      }
      const queryService = new QueryClientImpl(rpc.value);
      _queryClients.set(rpc.value, queryService);
      return queryService;
    }
  });
};
export const createRpcQueryHooks = (rpc: Ref<ProtobufRpcClient | undefined>) => {
  const queryService = useQueryService(rpc);
  const useQueryExchangeParams = <TData = QueryExchangeParamsResponse,>({
    request,
    options
  }: UseQueryExchangeParamsQuery<TData>) => {
    const queryKey = ["queryExchangeParamsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryExchangeParamsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.queryExchangeParams(params);
      },
      ...options
    });
  };
  const useSubaccountDeposits = <TData = QuerySubaccountDepositsResponse,>({
    request,
    options
  }: UseSubaccountDepositsQuery<TData>) => {
    const queryKey = ["subaccountDepositsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySubaccountDepositsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.subaccountDeposits(params);
      },
      ...options
    });
  };
  const useSubaccountDeposit = <TData = QuerySubaccountDepositResponse,>({
    request,
    options
  }: UseSubaccountDepositQuery<TData>) => {
    const queryKey = ["subaccountDepositQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySubaccountDepositResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.subaccountDeposit(params);
      },
      ...options
    });
  };
  const useExchangeBalances = <TData = QueryExchangeBalancesResponse,>({
    request,
    options
  }: UseExchangeBalancesQuery<TData>) => {
    const queryKey = ["exchangeBalancesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryExchangeBalancesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.exchangeBalances(params);
      },
      ...options
    });
  };
  const useAggregateVolume = <TData = QueryAggregateVolumeResponse,>({
    request,
    options
  }: UseAggregateVolumeQuery<TData>) => {
    const queryKey = ["aggregateVolumeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAggregateVolumeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.aggregateVolume(params);
      },
      ...options
    });
  };
  const useAggregateVolumes = <TData = QueryAggregateVolumesResponse,>({
    request,
    options
  }: UseAggregateVolumesQuery<TData>) => {
    const queryKey = ["aggregateVolumesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAggregateVolumesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.aggregateVolumes(params);
      },
      ...options
    });
  };
  const useAggregateMarketVolume = <TData = QueryAggregateMarketVolumeResponse,>({
    request,
    options
  }: UseAggregateMarketVolumeQuery<TData>) => {
    const queryKey = ["aggregateMarketVolumeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAggregateMarketVolumeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.aggregateMarketVolume(params);
      },
      ...options
    });
  };
  const useAggregateMarketVolumes = <TData = QueryAggregateMarketVolumesResponse,>({
    request,
    options
  }: UseAggregateMarketVolumesQuery<TData>) => {
    const queryKey = ["aggregateMarketVolumesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAggregateMarketVolumesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.aggregateMarketVolumes(params);
      },
      ...options
    });
  };
  const useDenomDecimal = <TData = QueryDenomDecimalResponse,>({
    request,
    options
  }: UseDenomDecimalQuery<TData>) => {
    const queryKey = ["denomDecimalQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomDecimalResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomDecimal(params);
      },
      ...options
    });
  };
  const useDenomDecimals = <TData = QueryDenomDecimalsResponse,>({
    request,
    options
  }: UseDenomDecimalsQuery<TData>) => {
    const queryKey = ["denomDecimalsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomDecimalsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomDecimals(params);
      },
      ...options
    });
  };
  const useSpotMarkets = <TData = QuerySpotMarketsResponse,>({
    request,
    options
  }: UseSpotMarketsQuery<TData>) => {
    const queryKey = ["spotMarketsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySpotMarketsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.spotMarkets(params);
      },
      ...options
    });
  };
  const useSpotMarket = <TData = QuerySpotMarketResponse,>({
    request,
    options
  }: UseSpotMarketQuery<TData>) => {
    const queryKey = ["spotMarketQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySpotMarketResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.spotMarket(params);
      },
      ...options
    });
  };
  const useFullSpotMarkets = <TData = QueryFullSpotMarketsResponse,>({
    request,
    options
  }: UseFullSpotMarketsQuery<TData>) => {
    const queryKey = ["fullSpotMarketsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryFullSpotMarketsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.fullSpotMarkets(params);
      },
      ...options
    });
  };
  const useFullSpotMarket = <TData = QueryFullSpotMarketResponse,>({
    request,
    options
  }: UseFullSpotMarketQuery<TData>) => {
    const queryKey = ["fullSpotMarketQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryFullSpotMarketResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.fullSpotMarket(params);
      },
      ...options
    });
  };
  const useSpotOrderbook = <TData = QuerySpotOrderbookResponse,>({
    request,
    options
  }: UseSpotOrderbookQuery<TData>) => {
    const queryKey = ["spotOrderbookQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySpotOrderbookResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.spotOrderbook(params);
      },
      ...options
    });
  };
  const useTraderSpotOrders = <TData = QueryTraderSpotOrdersResponse,>({
    request,
    options
  }: UseTraderSpotOrdersQuery<TData>) => {
    const queryKey = ["traderSpotOrdersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTraderSpotOrdersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.traderSpotOrders(params);
      },
      ...options
    });
  };
  const useAccountAddressSpotOrders = <TData = QueryAccountAddressSpotOrdersResponse,>({
    request,
    options
  }: UseAccountAddressSpotOrdersQuery<TData>) => {
    const queryKey = ["accountAddressSpotOrdersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAccountAddressSpotOrdersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountAddressSpotOrders(params);
      },
      ...options
    });
  };
  const useSpotOrdersByHashes = <TData = QuerySpotOrdersByHashesResponse,>({
    request,
    options
  }: UseSpotOrdersByHashesQuery<TData>) => {
    const queryKey = ["spotOrdersByHashesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySpotOrdersByHashesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.spotOrdersByHashes(params);
      },
      ...options
    });
  };
  const useSubaccountOrders = <TData = QuerySubaccountOrdersResponse,>({
    request,
    options
  }: UseSubaccountOrdersQuery<TData>) => {
    const queryKey = ["subaccountOrdersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySubaccountOrdersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.subaccountOrders(params);
      },
      ...options
    });
  };
  const useTraderSpotTransientOrders = <TData = QueryTraderSpotOrdersResponse,>({
    request,
    options
  }: UseTraderSpotTransientOrdersQuery<TData>) => {
    const queryKey = ["traderSpotTransientOrdersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTraderSpotOrdersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.traderSpotTransientOrders(params);
      },
      ...options
    });
  };
  const useSpotMidPriceAndTOB = <TData = QuerySpotMidPriceAndTOBResponse,>({
    request,
    options
  }: UseSpotMidPriceAndTOBQuery<TData>) => {
    const queryKey = ["spotMidPriceAndTOBQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySpotMidPriceAndTOBResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.spotMidPriceAndTOB(params);
      },
      ...options
    });
  };
  const useDerivativeMidPriceAndTOB = <TData = QueryDerivativeMidPriceAndTOBResponse,>({
    request,
    options
  }: UseDerivativeMidPriceAndTOBQuery<TData>) => {
    const queryKey = ["derivativeMidPriceAndTOBQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDerivativeMidPriceAndTOBResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.derivativeMidPriceAndTOB(params);
      },
      ...options
    });
  };
  const useDerivativeOrderbook = <TData = QueryDerivativeOrderbookResponse,>({
    request,
    options
  }: UseDerivativeOrderbookQuery<TData>) => {
    const queryKey = ["derivativeOrderbookQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDerivativeOrderbookResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.derivativeOrderbook(params);
      },
      ...options
    });
  };
  const useTraderDerivativeOrders = <TData = QueryTraderDerivativeOrdersResponse,>({
    request,
    options
  }: UseTraderDerivativeOrdersQuery<TData>) => {
    const queryKey = ["traderDerivativeOrdersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTraderDerivativeOrdersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.traderDerivativeOrders(params);
      },
      ...options
    });
  };
  const useAccountAddressDerivativeOrders = <TData = QueryAccountAddressDerivativeOrdersResponse,>({
    request,
    options
  }: UseAccountAddressDerivativeOrdersQuery<TData>) => {
    const queryKey = ["accountAddressDerivativeOrdersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAccountAddressDerivativeOrdersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountAddressDerivativeOrders(params);
      },
      ...options
    });
  };
  const useDerivativeOrdersByHashes = <TData = QueryDerivativeOrdersByHashesResponse,>({
    request,
    options
  }: UseDerivativeOrdersByHashesQuery<TData>) => {
    const queryKey = ["derivativeOrdersByHashesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDerivativeOrdersByHashesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.derivativeOrdersByHashes(params);
      },
      ...options
    });
  };
  const useTraderDerivativeTransientOrders = <TData = QueryTraderDerivativeOrdersResponse,>({
    request,
    options
  }: UseTraderDerivativeTransientOrdersQuery<TData>) => {
    const queryKey = ["traderDerivativeTransientOrdersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTraderDerivativeOrdersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.traderDerivativeTransientOrders(params);
      },
      ...options
    });
  };
  const useDerivativeMarkets = <TData = QueryDerivativeMarketsResponse,>({
    request,
    options
  }: UseDerivativeMarketsQuery<TData>) => {
    const queryKey = ["derivativeMarketsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDerivativeMarketsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.derivativeMarkets(params);
      },
      ...options
    });
  };
  const useDerivativeMarket = <TData = QueryDerivativeMarketResponse,>({
    request,
    options
  }: UseDerivativeMarketQuery<TData>) => {
    const queryKey = ["derivativeMarketQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDerivativeMarketResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.derivativeMarket(params);
      },
      ...options
    });
  };
  const useDerivativeMarketAddress = <TData = QueryDerivativeMarketAddressResponse,>({
    request,
    options
  }: UseDerivativeMarketAddressQuery<TData>) => {
    const queryKey = ["derivativeMarketAddressQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDerivativeMarketAddressResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.derivativeMarketAddress(params);
      },
      ...options
    });
  };
  const useSubaccountTradeNonce = <TData = QuerySubaccountTradeNonceResponse,>({
    request,
    options
  }: UseSubaccountTradeNonceQuery<TData>) => {
    const queryKey = ["subaccountTradeNonceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySubaccountTradeNonceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.subaccountTradeNonce(params);
      },
      ...options
    });
  };
  const useExchangeModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseExchangeModuleStateQuery<TData>) => {
    const queryKey = ["exchangeModuleStateQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryModuleStateResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.exchangeModuleState(params);
      },
      ...options
    });
  };
  const usePositions = <TData = QueryPositionsResponse,>({
    request,
    options
  }: UsePositionsQuery<TData>) => {
    const queryKey = ["positionsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPositionsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.positions(params);
      },
      ...options
    });
  };
  const useSubaccountPositions = <TData = QuerySubaccountPositionsResponse,>({
    request,
    options
  }: UseSubaccountPositionsQuery<TData>) => {
    const queryKey = ["subaccountPositionsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySubaccountPositionsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.subaccountPositions(params);
      },
      ...options
    });
  };
  const useSubaccountPositionInMarket = <TData = QuerySubaccountPositionInMarketResponse,>({
    request,
    options
  }: UseSubaccountPositionInMarketQuery<TData>) => {
    const queryKey = ["subaccountPositionInMarketQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySubaccountPositionInMarketResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.subaccountPositionInMarket(params);
      },
      ...options
    });
  };
  const useSubaccountEffectivePositionInMarket = <TData = QuerySubaccountEffectivePositionInMarketResponse,>({
    request,
    options
  }: UseSubaccountEffectivePositionInMarketQuery<TData>) => {
    const queryKey = ["subaccountEffectivePositionInMarketQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySubaccountEffectivePositionInMarketResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.subaccountEffectivePositionInMarket(params);
      },
      ...options
    });
  };
  const usePerpetualMarketInfo = <TData = QueryPerpetualMarketInfoResponse,>({
    request,
    options
  }: UsePerpetualMarketInfoQuery<TData>) => {
    const queryKey = ["perpetualMarketInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPerpetualMarketInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.perpetualMarketInfo(params);
      },
      ...options
    });
  };
  const useExpiryFuturesMarketInfo = <TData = QueryExpiryFuturesMarketInfoResponse,>({
    request,
    options
  }: UseExpiryFuturesMarketInfoQuery<TData>) => {
    const queryKey = ["expiryFuturesMarketInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryExpiryFuturesMarketInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.expiryFuturesMarketInfo(params);
      },
      ...options
    });
  };
  const usePerpetualMarketFunding = <TData = QueryPerpetualMarketFundingResponse,>({
    request,
    options
  }: UsePerpetualMarketFundingQuery<TData>) => {
    const queryKey = ["perpetualMarketFundingQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPerpetualMarketFundingResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.perpetualMarketFunding(params);
      },
      ...options
    });
  };
  const useSubaccountOrderMetadata = <TData = QuerySubaccountOrderMetadataResponse,>({
    request,
    options
  }: UseSubaccountOrderMetadataQuery<TData>) => {
    const queryKey = ["subaccountOrderMetadataQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySubaccountOrderMetadataResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.subaccountOrderMetadata(params);
      },
      ...options
    });
  };
  const useTradeRewardPoints = <TData = QueryTradeRewardPointsResponse,>({
    request,
    options
  }: UseTradeRewardPointsQuery<TData>) => {
    const queryKey = ["tradeRewardPointsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTradeRewardPointsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.tradeRewardPoints(params);
      },
      ...options
    });
  };
  const usePendingTradeRewardPoints = <TData = QueryTradeRewardPointsResponse,>({
    request,
    options
  }: UsePendingTradeRewardPointsQuery<TData>) => {
    const queryKey = ["pendingTradeRewardPointsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTradeRewardPointsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.pendingTradeRewardPoints(params);
      },
      ...options
    });
  };
  const useTradeRewardCampaign = <TData = QueryTradeRewardCampaignResponse,>({
    request,
    options
  }: UseTradeRewardCampaignQuery<TData>) => {
    const queryKey = ["tradeRewardCampaignQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTradeRewardCampaignResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.tradeRewardCampaign(params);
      },
      ...options
    });
  };
  const useFeeDiscountAccountInfo = <TData = QueryFeeDiscountAccountInfoResponse,>({
    request,
    options
  }: UseFeeDiscountAccountInfoQuery<TData>) => {
    const queryKey = ["feeDiscountAccountInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryFeeDiscountAccountInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.feeDiscountAccountInfo(params);
      },
      ...options
    });
  };
  const useFeeDiscountSchedule = <TData = QueryFeeDiscountScheduleResponse,>({
    request,
    options
  }: UseFeeDiscountScheduleQuery<TData>) => {
    const queryKey = ["feeDiscountScheduleQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryFeeDiscountScheduleResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.feeDiscountSchedule(params);
      },
      ...options
    });
  };
  const useBalanceMismatches = <TData = QueryBalanceMismatchesResponse,>({
    request,
    options
  }: UseBalanceMismatchesQuery<TData>) => {
    const queryKey = ["balanceMismatchesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBalanceMismatchesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.balanceMismatches(params);
      },
      ...options
    });
  };
  const useBalanceWithBalanceHolds = <TData = QueryBalanceWithBalanceHoldsResponse,>({
    request,
    options
  }: UseBalanceWithBalanceHoldsQuery<TData>) => {
    const queryKey = ["balanceWithBalanceHoldsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBalanceWithBalanceHoldsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.balanceWithBalanceHolds(params);
      },
      ...options
    });
  };
  const useFeeDiscountTierStatistics = <TData = QueryFeeDiscountTierStatisticsResponse,>({
    request,
    options
  }: UseFeeDiscountTierStatisticsQuery<TData>) => {
    const queryKey = ["feeDiscountTierStatisticsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryFeeDiscountTierStatisticsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.feeDiscountTierStatistics(params);
      },
      ...options
    });
  };
  const useMitoVaultInfos = <TData = MitoVaultInfosResponse,>({
    request,
    options
  }: UseMitoVaultInfosQuery<TData>) => {
    const queryKey = ["mitoVaultInfosQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<MitoVaultInfosResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.mitoVaultInfos(params);
      },
      ...options
    });
  };
  const useQueryMarketIDFromVault = <TData = QueryMarketIDFromVaultResponse,>({
    request,
    options
  }: UseQueryMarketIDFromVaultQuery<TData>) => {
    const queryKey = ["queryMarketIDFromVaultQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryMarketIDFromVaultResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.queryMarketIDFromVault(params);
      },
      ...options
    });
  };
  const useHistoricalTradeRecords = <TData = QueryHistoricalTradeRecordsResponse,>({
    request,
    options
  }: UseHistoricalTradeRecordsQuery<TData>) => {
    const queryKey = ["historicalTradeRecordsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryHistoricalTradeRecordsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.historicalTradeRecords(params);
      },
      ...options
    });
  };
  const useIsOptedOutOfRewards = <TData = QueryIsOptedOutOfRewardsResponse,>({
    request,
    options
  }: UseIsOptedOutOfRewardsQuery<TData>) => {
    const queryKey = ["isOptedOutOfRewardsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryIsOptedOutOfRewardsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.isOptedOutOfRewards(params);
      },
      ...options
    });
  };
  const useOptedOutOfRewardsAccounts = <TData = QueryOptedOutOfRewardsAccountsResponse,>({
    request,
    options
  }: UseOptedOutOfRewardsAccountsQuery<TData>) => {
    const queryKey = ["optedOutOfRewardsAccountsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryOptedOutOfRewardsAccountsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.optedOutOfRewardsAccounts(params);
      },
      ...options
    });
  };
  const useMarketVolatility = <TData = QueryMarketVolatilityResponse,>({
    request,
    options
  }: UseMarketVolatilityQuery<TData>) => {
    const queryKey = ["marketVolatilityQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryMarketVolatilityResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.marketVolatility(params);
      },
      ...options
    });
  };
  const useBinaryOptionsMarkets = <TData = QueryBinaryMarketsResponse,>({
    request,
    options
  }: UseBinaryOptionsMarketsQuery<TData>) => {
    const queryKey = ["binaryOptionsMarketsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBinaryMarketsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.binaryOptionsMarkets(params);
      },
      ...options
    });
  };
  const useTraderDerivativeConditionalOrders = <TData = QueryTraderDerivativeConditionalOrdersResponse,>({
    request,
    options
  }: UseTraderDerivativeConditionalOrdersQuery<TData>) => {
    const queryKey = ["traderDerivativeConditionalOrdersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTraderDerivativeConditionalOrdersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.traderDerivativeConditionalOrders(params);
      },
      ...options
    });
  };
  const useMarketAtomicExecutionFeeMultiplier = <TData = QueryMarketAtomicExecutionFeeMultiplierResponse,>({
    request,
    options
  }: UseMarketAtomicExecutionFeeMultiplierQuery<TData>) => {
    const queryKey = ["marketAtomicExecutionFeeMultiplierQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryMarketAtomicExecutionFeeMultiplierResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.marketAtomicExecutionFeeMultiplier(params);
      },
      ...options
    });
  };
  const useActiveStakeGrant = <TData = QueryActiveStakeGrantResponse,>({
    request,
    options
  }: UseActiveStakeGrantQuery<TData>) => {
    const queryKey = ["activeStakeGrantQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryActiveStakeGrantResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.activeStakeGrant(params);
      },
      ...options
    });
  };
  const useGrantAuthorization = <TData = QueryGrantAuthorizationResponse,>({
    request,
    options
  }: UseGrantAuthorizationQuery<TData>) => {
    const queryKey = ["grantAuthorizationQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGrantAuthorizationResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.grantAuthorization(params);
      },
      ...options
    });
  };
  const useGrantAuthorizations = <TData = QueryGrantAuthorizationsResponse,>({
    request,
    options
  }: UseGrantAuthorizationsQuery<TData>) => {
    const queryKey = ["grantAuthorizationsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGrantAuthorizationsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.grantAuthorizations(params);
      },
      ...options
    });
  };
  return {
    /** Retrieves exchange params */useQueryExchangeParams,
    /** Retrieves a Subaccount's Deposits */useSubaccountDeposits,
    /** Retrieves a Subaccount's Deposits */useSubaccountDeposit,
    /** Retrieves all of the balances of all users on the exchange. */useExchangeBalances,
    /** Retrieves the aggregate volumes for the specified account or subaccount */useAggregateVolume,
    /** Retrieves the aggregate volumes for specified accounts */useAggregateVolumes,
    /** Retrieves the aggregate volume for the specified market */useAggregateMarketVolume,
    /** Retrieves the aggregate market volumes for specified markets */useAggregateMarketVolumes,
    /** Retrieves the denom decimals for a denom. */useDenomDecimal,
    /**
     * Retrieves the denom decimals for multiple denoms. Returns all denom
     * decimals if unspecified.
     */
    useDenomDecimals,
    /** Retrieves a list of spot markets. */useSpotMarkets,
    /** Retrieves a spot market by ticker */useSpotMarket,
    /** Retrieves a list of spot markets with extra information. */useFullSpotMarkets,
    /** Retrieves a spot market with extra information. */useFullSpotMarket,
    /** Retrieves a spot market's orderbook by marketID */useSpotOrderbook,
    /** Retrieves a trader's spot orders */useTraderSpotOrders,
    /** Retrieves all account address spot orders */useAccountAddressSpotOrders,
    /**
     * Retrieves spot orders corresponding to specified order hashes for a given
     * subaccountID and marketID
     */
    useSpotOrdersByHashes,
    /** Retrieves subaccount's orders */useSubaccountOrders,
    /** Retrieves a trader's transient spot orders */useTraderSpotTransientOrders,
    /** Retrieves a spot market's mid-price */useSpotMidPriceAndTOB,
    /** Retrieves a derivative market's mid-price */useDerivativeMidPriceAndTOB,
    /** Retrieves a derivative market's orderbook by marketID */useDerivativeOrderbook,
    /** Retrieves a trader's derivative orders */useTraderDerivativeOrders,
    /** Retrieves all account address derivative orders */useAccountAddressDerivativeOrders,
    /** Retrieves a trader's derivative orders */useDerivativeOrdersByHashes,
    /** Retrieves a trader's transient derivative orders */useTraderDerivativeTransientOrders,
    /** Retrieves a list of derivative markets. */useDerivativeMarkets,
    /** Retrieves a derivative market by ticker */useDerivativeMarket,
    /**
     * Retrieves a derivative market's corresponding address for fees that
     * contribute to the market's insurance fund
     */
    useDerivativeMarketAddress,
    /** Retrieves a subaccount's trade nonce */useSubaccountTradeNonce,
    /** Retrieves the entire exchange module's state */useExchangeModuleState,
    /** Retrieves the entire exchange module's positions */usePositions,
    /** Retrieves subaccount's positions */useSubaccountPositions,
    /** Retrieves subaccount's position in market */useSubaccountPositionInMarket,
    /** Retrieves subaccount's position in market */useSubaccountEffectivePositionInMarket,
    /** Retrieves perpetual market info */usePerpetualMarketInfo,
    /** Retrieves expiry market info */useExpiryFuturesMarketInfo,
    /** Retrieves perpetual market funding */usePerpetualMarketFunding,
    /** Retrieves subaccount's order metadata */useSubaccountOrderMetadata,
    /** Retrieves the account and total trade rewards points */useTradeRewardPoints,
    /** Retrieves the pending account and total trade rewards points */usePendingTradeRewardPoints,
    /** Retrieves the trade reward campaign */useTradeRewardCampaign,
    /** Retrieves the account's fee discount info */useFeeDiscountAccountInfo,
    /** Retrieves the fee discount schedule */useFeeDiscountSchedule,
    /** Retrieves mismatches between available vs. total balance */useBalanceMismatches,
    /** Retrieves available and total balances with balance holds */useBalanceWithBalanceHolds,
    /** Retrieves fee discount tier stats */useFeeDiscountTierStatistics,
    /** Retrieves market making pool info */useMitoVaultInfos,
    /**
     * QueryMarketIDFromVault returns the market ID for a given vault subaccount
     * ID
     */
    useQueryMarketIDFromVault,
    /** Retrieves historical trade records for a given market ID */useHistoricalTradeRecords,
    /** Retrieves if the account is opted out of rewards */useIsOptedOutOfRewards,
    /** Retrieves all accounts opted out of rewards */useOptedOutOfRewardsAccounts,
    /**
     * MarketVolatility computes the volatility for spot and derivative markets
     * trading history.
     */
    useMarketVolatility,
    /** Retrieves a spot market's orderbook by marketID */useBinaryOptionsMarkets,
    /** Retrieves a trader's derivative conditional orders */useTraderDerivativeConditionalOrders,
    useMarketAtomicExecutionFeeMultiplier,
    /** Retrieves the active stake grant for a grantee */useActiveStakeGrant,
    /** Retrieves the grant authorization amount for a granter and grantee */useGrantAuthorization,
    /** Retrieves the grant authorization amount for a granter and grantee */useGrantAuthorizations
  };
};