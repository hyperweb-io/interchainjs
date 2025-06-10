import { buildUseQuery } from "../../../react-query";
import { QueryFullDerivativeOrderbookRequest, QueryFullDerivativeOrderbookResponse, QueryFullSpotOrderbookRequest, QueryFullSpotOrderbookResponse, QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse, QueryMarketBalanceRequest, QueryMarketBalanceResponse, QueryMarketBalancesRequest, QueryMarketBalancesResponse, QueryDenomMinNotionalRequest, QueryDenomMinNotionalResponse, QueryDenomMinNotionalsRequest, QueryDenomMinNotionalsResponse } from "./query";
import { getL3DerivativeOrderBook, getL3SpotOrderBook, getQueryExchangeParams, getSubaccountDeposits, getSubaccountDeposit, getExchangeBalances, getAggregateVolume, getAggregateVolumes, getAggregateMarketVolume, getAggregateMarketVolumes, getDenomDecimal, getDenomDecimals, getSpotMarkets, getSpotMarket, getFullSpotMarkets, getFullSpotMarket, getSpotOrderbook, getTraderSpotOrders, getAccountAddressSpotOrders, getSpotOrdersByHashes, getSubaccountOrders, getTraderSpotTransientOrders, getSpotMidPriceAndTOB, getDerivativeMidPriceAndTOB, getDerivativeOrderbook, getTraderDerivativeOrders, getAccountAddressDerivativeOrders, getDerivativeOrdersByHashes, getTraderDerivativeTransientOrders, getDerivativeMarkets, getDerivativeMarket, getDerivativeMarketAddress, getSubaccountTradeNonce, getExchangeModuleState, getPositions, getSubaccountPositions, getSubaccountPositionInMarket, getSubaccountEffectivePositionInMarket, getPerpetualMarketInfo, getExpiryFuturesMarketInfo, getPerpetualMarketFunding, getSubaccountOrderMetadata, getTradeRewardPoints, getPendingTradeRewardPoints, getTradeRewardCampaign, getFeeDiscountAccountInfo, getFeeDiscountSchedule, getBalanceMismatches, getBalanceWithBalanceHolds, getFeeDiscountTierStatistics, getMitoVaultInfos, getQueryMarketIDFromVault, getHistoricalTradeRecords, getIsOptedOutOfRewards, getOptedOutOfRewardsAccounts, getMarketVolatility, getBinaryOptionsMarkets, getTraderDerivativeConditionalOrders, getMarketAtomicExecutionFeeMultiplier, getActiveStakeGrant, getGrantAuthorization, getGrantAuthorizations, getMarketBalance, getMarketBalances, getDenomMinNotional, getDenomMinNotionals } from "./query.rpc.func";
/**
 * @name useGetL3DerivativeOrderBook
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.L3DerivativeOrderBook
 */
export const useGetL3DerivativeOrderBook = buildUseQuery<QueryFullDerivativeOrderbookRequest, QueryFullDerivativeOrderbookResponse>({
  builderQueryFn: getL3DerivativeOrderBook,
  queryKeyPrefix: "L3DerivativeOrderBookQuery"
});
/**
 * @name useGetL3SpotOrderBook
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.L3SpotOrderBook
 */
export const useGetL3SpotOrderBook = buildUseQuery<QueryFullSpotOrderbookRequest, QueryFullSpotOrderbookResponse>({
  builderQueryFn: getL3SpotOrderBook,
  queryKeyPrefix: "L3SpotOrderBookQuery"
});
/**
 * Retrieves exchange params
 * @name useGetQueryExchangeParams
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.QueryExchangeParams
 */
export const useGetQueryExchangeParams = buildUseQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  builderQueryFn: getQueryExchangeParams,
  queryKeyPrefix: "QueryExchangeParamsQuery"
});
/**
 * Retrieves a Subaccount's Deposits
 * @name useGetSubaccountDeposits
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountDeposits
 */
export const useGetSubaccountDeposits = buildUseQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  builderQueryFn: getSubaccountDeposits,
  queryKeyPrefix: "SubaccountDepositsQuery"
});
/**
 * Retrieves a Subaccount's Deposits
 * @name useGetSubaccountDeposit
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountDeposit
 */
export const useGetSubaccountDeposit = buildUseQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  builderQueryFn: getSubaccountDeposit,
  queryKeyPrefix: "SubaccountDepositQuery"
});
/**
 * Retrieves all of the balances of all users on the exchange.
 * @name useGetExchangeBalances
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ExchangeBalances
 */
export const useGetExchangeBalances = buildUseQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  builderQueryFn: getExchangeBalances,
  queryKeyPrefix: "ExchangeBalancesQuery"
});
/**
 * Retrieves the aggregate volumes for the specified account or subaccount
 * @name useGetAggregateVolume
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AggregateVolume
 */
export const useGetAggregateVolume = buildUseQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  builderQueryFn: getAggregateVolume,
  queryKeyPrefix: "AggregateVolumeQuery"
});
/**
 * Retrieves the aggregate volumes for specified accounts
 * @name useGetAggregateVolumes
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AggregateVolumes
 */
export const useGetAggregateVolumes = buildUseQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  builderQueryFn: getAggregateVolumes,
  queryKeyPrefix: "AggregateVolumesQuery"
});
/**
 * Retrieves the aggregate volume for the specified market
 * @name useGetAggregateMarketVolume
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AggregateMarketVolume
 */
export const useGetAggregateMarketVolume = buildUseQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  builderQueryFn: getAggregateMarketVolume,
  queryKeyPrefix: "AggregateMarketVolumeQuery"
});
/**
 * Retrieves the aggregate market volumes for specified markets
 * @name useGetAggregateMarketVolumes
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AggregateMarketVolumes
 */
export const useGetAggregateMarketVolumes = buildUseQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  builderQueryFn: getAggregateMarketVolumes,
  queryKeyPrefix: "AggregateMarketVolumesQuery"
});
/**
 * Retrieves the denom decimals for a denom.
 * @name useGetDenomDecimal
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DenomDecimal
 */
export const useGetDenomDecimal = buildUseQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  builderQueryFn: getDenomDecimal,
  queryKeyPrefix: "DenomDecimalQuery"
});
/**
 * Retrieves the denom decimals for multiple denoms. Returns all denom
 * decimals if unspecified.
 * @name useGetDenomDecimals
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DenomDecimals
 */
export const useGetDenomDecimals = buildUseQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  builderQueryFn: getDenomDecimals,
  queryKeyPrefix: "DenomDecimalsQuery"
});
/**
 * Retrieves a list of spot markets.
 * @name useGetSpotMarkets
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotMarkets
 */
export const useGetSpotMarkets = buildUseQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  builderQueryFn: getSpotMarkets,
  queryKeyPrefix: "SpotMarketsQuery"
});
/**
 * Retrieves a spot market by ticker
 * @name useGetSpotMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotMarket
 */
export const useGetSpotMarket = buildUseQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  builderQueryFn: getSpotMarket,
  queryKeyPrefix: "SpotMarketQuery"
});
/**
 * Retrieves a list of spot markets with extra information.
 * @name useGetFullSpotMarkets
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FullSpotMarkets
 */
export const useGetFullSpotMarkets = buildUseQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  builderQueryFn: getFullSpotMarkets,
  queryKeyPrefix: "FullSpotMarketsQuery"
});
/**
 * Retrieves a spot market with extra information.
 * @name useGetFullSpotMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FullSpotMarket
 */
export const useGetFullSpotMarket = buildUseQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  builderQueryFn: getFullSpotMarket,
  queryKeyPrefix: "FullSpotMarketQuery"
});
/**
 * Retrieves a spot market's orderbook by marketID
 * @name useGetSpotOrderbook
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotOrderbook
 */
export const useGetSpotOrderbook = buildUseQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  builderQueryFn: getSpotOrderbook,
  queryKeyPrefix: "SpotOrderbookQuery"
});
/**
 * Retrieves a trader's spot orders
 * @name useGetTraderSpotOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderSpotOrders
 */
export const useGetTraderSpotOrders = buildUseQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: getTraderSpotOrders,
  queryKeyPrefix: "TraderSpotOrdersQuery"
});
/**
 * Retrieves all account address spot orders
 * @name useGetAccountAddressSpotOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AccountAddressSpotOrders
 */
export const useGetAccountAddressSpotOrders = buildUseQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  builderQueryFn: getAccountAddressSpotOrders,
  queryKeyPrefix: "AccountAddressSpotOrdersQuery"
});
/**
 * Retrieves spot orders corresponding to specified order hashes for a given
 * subaccountID and marketID
 * @name useGetSpotOrdersByHashes
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotOrdersByHashes
 */
export const useGetSpotOrdersByHashes = buildUseQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  builderQueryFn: getSpotOrdersByHashes,
  queryKeyPrefix: "SpotOrdersByHashesQuery"
});
/**
 * Retrieves subaccount's orders
 * @name useGetSubaccountOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountOrders
 */
export const useGetSubaccountOrders = buildUseQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  builderQueryFn: getSubaccountOrders,
  queryKeyPrefix: "SubaccountOrdersQuery"
});
/**
 * Retrieves a trader's transient spot orders
 * @name useGetTraderSpotTransientOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderSpotTransientOrders
 */
export const useGetTraderSpotTransientOrders = buildUseQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: getTraderSpotTransientOrders,
  queryKeyPrefix: "TraderSpotTransientOrdersQuery"
});
/**
 * Retrieves a spot market's mid-price
 * @name useGetSpotMidPriceAndTOB
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotMidPriceAndTOB
 */
export const useGetSpotMidPriceAndTOB = buildUseQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  builderQueryFn: getSpotMidPriceAndTOB,
  queryKeyPrefix: "SpotMidPriceAndTOBQuery"
});
/**
 * Retrieves a derivative market's mid-price
 * @name useGetDerivativeMidPriceAndTOB
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeMidPriceAndTOB
 */
export const useGetDerivativeMidPriceAndTOB = buildUseQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  builderQueryFn: getDerivativeMidPriceAndTOB,
  queryKeyPrefix: "DerivativeMidPriceAndTOBQuery"
});
/**
 * Retrieves a derivative market's orderbook by marketID
 * @name useGetDerivativeOrderbook
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeOrderbook
 */
export const useGetDerivativeOrderbook = buildUseQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  builderQueryFn: getDerivativeOrderbook,
  queryKeyPrefix: "DerivativeOrderbookQuery"
});
/**
 * Retrieves a trader's derivative orders
 * @name useGetTraderDerivativeOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderDerivativeOrders
 */
export const useGetTraderDerivativeOrders = buildUseQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: getTraderDerivativeOrders,
  queryKeyPrefix: "TraderDerivativeOrdersQuery"
});
/**
 * Retrieves all account address derivative orders
 * @name useGetAccountAddressDerivativeOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AccountAddressDerivativeOrders
 */
export const useGetAccountAddressDerivativeOrders = buildUseQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  builderQueryFn: getAccountAddressDerivativeOrders,
  queryKeyPrefix: "AccountAddressDerivativeOrdersQuery"
});
/**
 * Retrieves a trader's derivative orders
 * @name useGetDerivativeOrdersByHashes
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeOrdersByHashes
 */
export const useGetDerivativeOrdersByHashes = buildUseQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  builderQueryFn: getDerivativeOrdersByHashes,
  queryKeyPrefix: "DerivativeOrdersByHashesQuery"
});
/**
 * Retrieves a trader's transient derivative orders
 * @name useGetTraderDerivativeTransientOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderDerivativeTransientOrders
 */
export const useGetTraderDerivativeTransientOrders = buildUseQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: getTraderDerivativeTransientOrders,
  queryKeyPrefix: "TraderDerivativeTransientOrdersQuery"
});
/**
 * Retrieves a list of derivative markets.
 * @name useGetDerivativeMarkets
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeMarkets
 */
export const useGetDerivativeMarkets = buildUseQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  builderQueryFn: getDerivativeMarkets,
  queryKeyPrefix: "DerivativeMarketsQuery"
});
/**
 * Retrieves a derivative market by ticker
 * @name useGetDerivativeMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeMarket
 */
export const useGetDerivativeMarket = buildUseQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  builderQueryFn: getDerivativeMarket,
  queryKeyPrefix: "DerivativeMarketQuery"
});
/**
 * Retrieves a derivative market's corresponding address for fees that
 * contribute to the market's insurance fund
 * @name useGetDerivativeMarketAddress
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeMarketAddress
 */
export const useGetDerivativeMarketAddress = buildUseQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  builderQueryFn: getDerivativeMarketAddress,
  queryKeyPrefix: "DerivativeMarketAddressQuery"
});
/**
 * Retrieves a subaccount's trade nonce
 * @name useGetSubaccountTradeNonce
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountTradeNonce
 */
export const useGetSubaccountTradeNonce = buildUseQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  builderQueryFn: getSubaccountTradeNonce,
  queryKeyPrefix: "SubaccountTradeNonceQuery"
});
/**
 * Retrieves the entire exchange module's state
 * @name useGetExchangeModuleState
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ExchangeModuleState
 */
export const useGetExchangeModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getExchangeModuleState,
  queryKeyPrefix: "ExchangeModuleStateQuery"
});
/**
 * Retrieves the entire exchange module's positions
 * @name useGetPositions
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.Positions
 */
export const useGetPositions = buildUseQuery<QueryPositionsRequest, QueryPositionsResponse>({
  builderQueryFn: getPositions,
  queryKeyPrefix: "PositionsQuery"
});
/**
 * Retrieves subaccount's positions
 * @name useGetSubaccountPositions
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountPositions
 */
export const useGetSubaccountPositions = buildUseQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  builderQueryFn: getSubaccountPositions,
  queryKeyPrefix: "SubaccountPositionsQuery"
});
/**
 * Retrieves subaccount's position in market
 * @name useGetSubaccountPositionInMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountPositionInMarket
 */
export const useGetSubaccountPositionInMarket = buildUseQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  builderQueryFn: getSubaccountPositionInMarket,
  queryKeyPrefix: "SubaccountPositionInMarketQuery"
});
/**
 * Retrieves subaccount's position in market
 * @name useGetSubaccountEffectivePositionInMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountEffectivePositionInMarket
 */
export const useGetSubaccountEffectivePositionInMarket = buildUseQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  builderQueryFn: getSubaccountEffectivePositionInMarket,
  queryKeyPrefix: "SubaccountEffectivePositionInMarketQuery"
});
/**
 * Retrieves perpetual market info
 * @name useGetPerpetualMarketInfo
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.PerpetualMarketInfo
 */
export const useGetPerpetualMarketInfo = buildUseQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  builderQueryFn: getPerpetualMarketInfo,
  queryKeyPrefix: "PerpetualMarketInfoQuery"
});
/**
 * Retrieves expiry market info
 * @name useGetExpiryFuturesMarketInfo
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ExpiryFuturesMarketInfo
 */
export const useGetExpiryFuturesMarketInfo = buildUseQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  builderQueryFn: getExpiryFuturesMarketInfo,
  queryKeyPrefix: "ExpiryFuturesMarketInfoQuery"
});
/**
 * Retrieves perpetual market funding
 * @name useGetPerpetualMarketFunding
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.PerpetualMarketFunding
 */
export const useGetPerpetualMarketFunding = buildUseQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  builderQueryFn: getPerpetualMarketFunding,
  queryKeyPrefix: "PerpetualMarketFundingQuery"
});
/**
 * Retrieves subaccount's order metadata
 * @name useGetSubaccountOrderMetadata
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountOrderMetadata
 */
export const useGetSubaccountOrderMetadata = buildUseQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  builderQueryFn: getSubaccountOrderMetadata,
  queryKeyPrefix: "SubaccountOrderMetadataQuery"
});
/**
 * Retrieves the account and total trade rewards points
 * @name useGetTradeRewardPoints
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TradeRewardPoints
 */
export const useGetTradeRewardPoints = buildUseQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: getTradeRewardPoints,
  queryKeyPrefix: "TradeRewardPointsQuery"
});
/**
 * Retrieves the pending account and total trade rewards points
 * @name useGetPendingTradeRewardPoints
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.PendingTradeRewardPoints
 */
export const useGetPendingTradeRewardPoints = buildUseQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: getPendingTradeRewardPoints,
  queryKeyPrefix: "PendingTradeRewardPointsQuery"
});
/**
 * Retrieves the trade reward campaign
 * @name useGetTradeRewardCampaign
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TradeRewardCampaign
 */
export const useGetTradeRewardCampaign = buildUseQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  builderQueryFn: getTradeRewardCampaign,
  queryKeyPrefix: "TradeRewardCampaignQuery"
});
/**
 * Retrieves the account's fee discount info
 * @name useGetFeeDiscountAccountInfo
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FeeDiscountAccountInfo
 */
export const useGetFeeDiscountAccountInfo = buildUseQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  builderQueryFn: getFeeDiscountAccountInfo,
  queryKeyPrefix: "FeeDiscountAccountInfoQuery"
});
/**
 * Retrieves the fee discount schedule
 * @name useGetFeeDiscountSchedule
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FeeDiscountSchedule
 */
export const useGetFeeDiscountSchedule = buildUseQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  builderQueryFn: getFeeDiscountSchedule,
  queryKeyPrefix: "FeeDiscountScheduleQuery"
});
/**
 * Retrieves mismatches between available vs. total balance
 * @name useGetBalanceMismatches
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BalanceMismatches
 */
export const useGetBalanceMismatches = buildUseQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  builderQueryFn: getBalanceMismatches,
  queryKeyPrefix: "BalanceMismatchesQuery"
});
/**
 * Retrieves available and total balances with balance holds
 * @name useGetBalanceWithBalanceHolds
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BalanceWithBalanceHolds
 */
export const useGetBalanceWithBalanceHolds = buildUseQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  builderQueryFn: getBalanceWithBalanceHolds,
  queryKeyPrefix: "BalanceWithBalanceHoldsQuery"
});
/**
 * Retrieves fee discount tier stats
 * @name useGetFeeDiscountTierStatistics
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FeeDiscountTierStatistics
 */
export const useGetFeeDiscountTierStatistics = buildUseQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  builderQueryFn: getFeeDiscountTierStatistics,
  queryKeyPrefix: "FeeDiscountTierStatisticsQuery"
});
/**
 * Retrieves market making pool info
 * @name useGetMitoVaultInfos
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.MitoVaultInfos
 */
export const useGetMitoVaultInfos = buildUseQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  builderQueryFn: getMitoVaultInfos,
  queryKeyPrefix: "MitoVaultInfosQuery"
});
/**
 * QueryMarketIDFromVault returns the market ID for a given vault subaccount
 * ID
 * @name useGetQueryMarketIDFromVault
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.QueryMarketIDFromVault
 */
export const useGetQueryMarketIDFromVault = buildUseQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  builderQueryFn: getQueryMarketIDFromVault,
  queryKeyPrefix: "QueryMarketIDFromVaultQuery"
});
/**
 * Retrieves historical trade records for a given market ID
 * @name useGetHistoricalTradeRecords
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.HistoricalTradeRecords
 */
export const useGetHistoricalTradeRecords = buildUseQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  builderQueryFn: getHistoricalTradeRecords,
  queryKeyPrefix: "HistoricalTradeRecordsQuery"
});
/**
 * Retrieves if the account is opted out of rewards
 * @name useGetIsOptedOutOfRewards
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.IsOptedOutOfRewards
 */
export const useGetIsOptedOutOfRewards = buildUseQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  builderQueryFn: getIsOptedOutOfRewards,
  queryKeyPrefix: "IsOptedOutOfRewardsQuery"
});
/**
 * Retrieves all accounts opted out of rewards
 * @name useGetOptedOutOfRewardsAccounts
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.OptedOutOfRewardsAccounts
 */
export const useGetOptedOutOfRewardsAccounts = buildUseQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  builderQueryFn: getOptedOutOfRewardsAccounts,
  queryKeyPrefix: "OptedOutOfRewardsAccountsQuery"
});
/**
 * MarketVolatility computes the volatility for spot and derivative markets
 * trading history.
 * @name useGetMarketVolatility
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.MarketVolatility
 */
export const useGetMarketVolatility = buildUseQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  builderQueryFn: getMarketVolatility,
  queryKeyPrefix: "MarketVolatilityQuery"
});
/**
 * Retrieves a spot market's orderbook by marketID
 * @name useGetBinaryOptionsMarkets
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BinaryOptionsMarkets
 */
export const useGetBinaryOptionsMarkets = buildUseQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  builderQueryFn: getBinaryOptionsMarkets,
  queryKeyPrefix: "BinaryOptionsMarketsQuery"
});
/**
 * Retrieves a trader's derivative conditional orders
 * @name useGetTraderDerivativeConditionalOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderDerivativeConditionalOrders
 */
export const useGetTraderDerivativeConditionalOrders = buildUseQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  builderQueryFn: getTraderDerivativeConditionalOrders,
  queryKeyPrefix: "TraderDerivativeConditionalOrdersQuery"
});
/**
 * @name useGetMarketAtomicExecutionFeeMultiplier
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.MarketAtomicExecutionFeeMultiplier
 */
export const useGetMarketAtomicExecutionFeeMultiplier = buildUseQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  builderQueryFn: getMarketAtomicExecutionFeeMultiplier,
  queryKeyPrefix: "MarketAtomicExecutionFeeMultiplierQuery"
});
/**
 * Retrieves the active stake grant for a grantee
 * @name useGetActiveStakeGrant
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ActiveStakeGrant
 */
export const useGetActiveStakeGrant = buildUseQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  builderQueryFn: getActiveStakeGrant,
  queryKeyPrefix: "ActiveStakeGrantQuery"
});
/**
 * Retrieves the grant authorization amount for a granter and grantee
 * @name useGetGrantAuthorization
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.GrantAuthorization
 */
export const useGetGrantAuthorization = buildUseQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  builderQueryFn: getGrantAuthorization,
  queryKeyPrefix: "GrantAuthorizationQuery"
});
/**
 * Retrieves the grant authorization amount for a granter and grantee
 * @name useGetGrantAuthorizations
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.GrantAuthorizations
 */
export const useGetGrantAuthorizations = buildUseQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  builderQueryFn: getGrantAuthorizations,
  queryKeyPrefix: "GrantAuthorizationsQuery"
});
/**
 * Retrieves a derivative or binary options market's balance
 * @name useGetMarketBalance
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.MarketBalance
 */
export const useGetMarketBalance = buildUseQuery<QueryMarketBalanceRequest, QueryMarketBalanceResponse>({
  builderQueryFn: getMarketBalance,
  queryKeyPrefix: "MarketBalanceQuery"
});
/**
 * Retrieves all derivative or binary options market balances
 * @name useGetMarketBalances
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.MarketBalances
 */
export const useGetMarketBalances = buildUseQuery<QueryMarketBalancesRequest, QueryMarketBalancesResponse>({
  builderQueryFn: getMarketBalances,
  queryKeyPrefix: "MarketBalancesQuery"
});
/**
 * Retrieves the min notional for a denom
 * @name useGetDenomMinNotional
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DenomMinNotional
 */
export const useGetDenomMinNotional = buildUseQuery<QueryDenomMinNotionalRequest, QueryDenomMinNotionalResponse>({
  builderQueryFn: getDenomMinNotional,
  queryKeyPrefix: "DenomMinNotionalQuery"
});
/**
 * Retrieves the min notionals for all denoms
 * @name useGetDenomMinNotionals
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DenomMinNotionals
 */
export const useGetDenomMinNotionals = buildUseQuery<QueryDenomMinNotionalsRequest, QueryDenomMinNotionalsResponse>({
  builderQueryFn: getDenomMinNotionals,
  queryKeyPrefix: "DenomMinNotionalsQuery"
});