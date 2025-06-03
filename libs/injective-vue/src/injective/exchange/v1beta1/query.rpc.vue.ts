import { buildUseVueQuery } from "../../../vue-query";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse } from "./query";
import { getQueryExchangeParams, getSubaccountDeposits, getSubaccountDeposit, getExchangeBalances, getAggregateVolume, getAggregateVolumes, getAggregateMarketVolume, getAggregateMarketVolumes, getDenomDecimal, getDenomDecimals, getSpotMarkets, getSpotMarket, getFullSpotMarkets, getFullSpotMarket, getSpotOrderbook, getTraderSpotOrders, getAccountAddressSpotOrders, getSpotOrdersByHashes, getSubaccountOrders, getTraderSpotTransientOrders, getSpotMidPriceAndTOB, getDerivativeMidPriceAndTOB, getDerivativeOrderbook, getTraderDerivativeOrders, getAccountAddressDerivativeOrders, getDerivativeOrdersByHashes, getTraderDerivativeTransientOrders, getDerivativeMarkets, getDerivativeMarket, getDerivativeMarketAddress, getSubaccountTradeNonce, getExchangeModuleState, getPositions, getSubaccountPositions, getSubaccountPositionInMarket, getSubaccountEffectivePositionInMarket, getPerpetualMarketInfo, getExpiryFuturesMarketInfo, getPerpetualMarketFunding, getSubaccountOrderMetadata, getTradeRewardPoints, getPendingTradeRewardPoints, getTradeRewardCampaign, getFeeDiscountAccountInfo, getFeeDiscountSchedule, getBalanceMismatches, getBalanceWithBalanceHolds, getFeeDiscountTierStatistics, getMitoVaultInfos, getQueryMarketIDFromVault, getHistoricalTradeRecords, getIsOptedOutOfRewards, getOptedOutOfRewardsAccounts, getMarketVolatility, getBinaryOptionsMarkets, getTraderDerivativeConditionalOrders, getMarketAtomicExecutionFeeMultiplier, getActiveStakeGrant, getGrantAuthorization, getGrantAuthorizations } from "./query.rpc.func";
/* Retrieves exchange params */
export const useGetQueryExchangeParams = buildUseVueQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  builderQueryFn: getQueryExchangeParams,
  queryKeyPrefix: "QueryExchangeParamsQuery"
});
/* Retrieves a Subaccount's Deposits */
export const useGetSubaccountDeposits = buildUseVueQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  builderQueryFn: getSubaccountDeposits,
  queryKeyPrefix: "SubaccountDepositsQuery"
});
/* Retrieves a Subaccount's Deposits */
export const useGetSubaccountDeposit = buildUseVueQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  builderQueryFn: getSubaccountDeposit,
  queryKeyPrefix: "SubaccountDepositQuery"
});
/* Retrieves all of the balances of all users on the exchange. */
export const useGetExchangeBalances = buildUseVueQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  builderQueryFn: getExchangeBalances,
  queryKeyPrefix: "ExchangeBalancesQuery"
});
/* Retrieves the aggregate volumes for the specified account or subaccount */
export const useGetAggregateVolume = buildUseVueQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  builderQueryFn: getAggregateVolume,
  queryKeyPrefix: "AggregateVolumeQuery"
});
/* Retrieves the aggregate volumes for specified accounts */
export const useGetAggregateVolumes = buildUseVueQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  builderQueryFn: getAggregateVolumes,
  queryKeyPrefix: "AggregateVolumesQuery"
});
/* Retrieves the aggregate volume for the specified market */
export const useGetAggregateMarketVolume = buildUseVueQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  builderQueryFn: getAggregateMarketVolume,
  queryKeyPrefix: "AggregateMarketVolumeQuery"
});
/* Retrieves the aggregate market volumes for specified markets */
export const useGetAggregateMarketVolumes = buildUseVueQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  builderQueryFn: getAggregateMarketVolumes,
  queryKeyPrefix: "AggregateMarketVolumesQuery"
});
/* Retrieves the denom decimals for a denom. */
export const useGetDenomDecimal = buildUseVueQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  builderQueryFn: getDenomDecimal,
  queryKeyPrefix: "DenomDecimalQuery"
});
/* Retrieves the denom decimals for multiple denoms. Returns all denom
 decimals if unspecified. */
export const useGetDenomDecimals = buildUseVueQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  builderQueryFn: getDenomDecimals,
  queryKeyPrefix: "DenomDecimalsQuery"
});
/* Retrieves a list of spot markets. */
export const useGetSpotMarkets = buildUseVueQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  builderQueryFn: getSpotMarkets,
  queryKeyPrefix: "SpotMarketsQuery"
});
/* Retrieves a spot market by ticker */
export const useGetSpotMarket = buildUseVueQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  builderQueryFn: getSpotMarket,
  queryKeyPrefix: "SpotMarketQuery"
});
/* Retrieves a list of spot markets with extra information. */
export const useGetFullSpotMarkets = buildUseVueQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  builderQueryFn: getFullSpotMarkets,
  queryKeyPrefix: "FullSpotMarketsQuery"
});
/* Retrieves a spot market with extra information. */
export const useGetFullSpotMarket = buildUseVueQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  builderQueryFn: getFullSpotMarket,
  queryKeyPrefix: "FullSpotMarketQuery"
});
/* Retrieves a spot market's orderbook by marketID */
export const useGetSpotOrderbook = buildUseVueQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  builderQueryFn: getSpotOrderbook,
  queryKeyPrefix: "SpotOrderbookQuery"
});
/* Retrieves a trader's spot orders */
export const useGetTraderSpotOrders = buildUseVueQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: getTraderSpotOrders,
  queryKeyPrefix: "TraderSpotOrdersQuery"
});
/* Retrieves all account address spot orders */
export const useGetAccountAddressSpotOrders = buildUseVueQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  builderQueryFn: getAccountAddressSpotOrders,
  queryKeyPrefix: "AccountAddressSpotOrdersQuery"
});
/* Retrieves spot orders corresponding to specified order hashes for a given
 subaccountID and marketID */
export const useGetSpotOrdersByHashes = buildUseVueQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  builderQueryFn: getSpotOrdersByHashes,
  queryKeyPrefix: "SpotOrdersByHashesQuery"
});
/* Retrieves subaccount's orders */
export const useGetSubaccountOrders = buildUseVueQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  builderQueryFn: getSubaccountOrders,
  queryKeyPrefix: "SubaccountOrdersQuery"
});
/* Retrieves a trader's transient spot orders */
export const useGetTraderSpotTransientOrders = buildUseVueQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: getTraderSpotTransientOrders,
  queryKeyPrefix: "TraderSpotTransientOrdersQuery"
});
/* Retrieves a spot market's mid-price */
export const useGetSpotMidPriceAndTOB = buildUseVueQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  builderQueryFn: getSpotMidPriceAndTOB,
  queryKeyPrefix: "SpotMidPriceAndTOBQuery"
});
/* Retrieves a derivative market's mid-price */
export const useGetDerivativeMidPriceAndTOB = buildUseVueQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  builderQueryFn: getDerivativeMidPriceAndTOB,
  queryKeyPrefix: "DerivativeMidPriceAndTOBQuery"
});
/* Retrieves a derivative market's orderbook by marketID */
export const useGetDerivativeOrderbook = buildUseVueQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  builderQueryFn: getDerivativeOrderbook,
  queryKeyPrefix: "DerivativeOrderbookQuery"
});
/* Retrieves a trader's derivative orders */
export const useGetTraderDerivativeOrders = buildUseVueQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: getTraderDerivativeOrders,
  queryKeyPrefix: "TraderDerivativeOrdersQuery"
});
/* Retrieves all account address derivative orders */
export const useGetAccountAddressDerivativeOrders = buildUseVueQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  builderQueryFn: getAccountAddressDerivativeOrders,
  queryKeyPrefix: "AccountAddressDerivativeOrdersQuery"
});
/* Retrieves a trader's derivative orders */
export const useGetDerivativeOrdersByHashes = buildUseVueQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  builderQueryFn: getDerivativeOrdersByHashes,
  queryKeyPrefix: "DerivativeOrdersByHashesQuery"
});
/* Retrieves a trader's transient derivative orders */
export const useGetTraderDerivativeTransientOrders = buildUseVueQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: getTraderDerivativeTransientOrders,
  queryKeyPrefix: "TraderDerivativeTransientOrdersQuery"
});
/* Retrieves a list of derivative markets. */
export const useGetDerivativeMarkets = buildUseVueQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  builderQueryFn: getDerivativeMarkets,
  queryKeyPrefix: "DerivativeMarketsQuery"
});
/* Retrieves a derivative market by ticker */
export const useGetDerivativeMarket = buildUseVueQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  builderQueryFn: getDerivativeMarket,
  queryKeyPrefix: "DerivativeMarketQuery"
});
/* Retrieves a derivative market's corresponding address for fees that
 contribute to the market's insurance fund */
export const useGetDerivativeMarketAddress = buildUseVueQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  builderQueryFn: getDerivativeMarketAddress,
  queryKeyPrefix: "DerivativeMarketAddressQuery"
});
/* Retrieves a subaccount's trade nonce */
export const useGetSubaccountTradeNonce = buildUseVueQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  builderQueryFn: getSubaccountTradeNonce,
  queryKeyPrefix: "SubaccountTradeNonceQuery"
});
/* Retrieves the entire exchange module's state */
export const useGetExchangeModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getExchangeModuleState,
  queryKeyPrefix: "ExchangeModuleStateQuery"
});
/* Retrieves the entire exchange module's positions */
export const useGetPositions = buildUseVueQuery<QueryPositionsRequest, QueryPositionsResponse>({
  builderQueryFn: getPositions,
  queryKeyPrefix: "PositionsQuery"
});
/* Retrieves subaccount's positions */
export const useGetSubaccountPositions = buildUseVueQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  builderQueryFn: getSubaccountPositions,
  queryKeyPrefix: "SubaccountPositionsQuery"
});
/* Retrieves subaccount's position in market */
export const useGetSubaccountPositionInMarket = buildUseVueQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  builderQueryFn: getSubaccountPositionInMarket,
  queryKeyPrefix: "SubaccountPositionInMarketQuery"
});
/* Retrieves subaccount's position in market */
export const useGetSubaccountEffectivePositionInMarket = buildUseVueQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  builderQueryFn: getSubaccountEffectivePositionInMarket,
  queryKeyPrefix: "SubaccountEffectivePositionInMarketQuery"
});
/* Retrieves perpetual market info */
export const useGetPerpetualMarketInfo = buildUseVueQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  builderQueryFn: getPerpetualMarketInfo,
  queryKeyPrefix: "PerpetualMarketInfoQuery"
});
/* Retrieves expiry market info */
export const useGetExpiryFuturesMarketInfo = buildUseVueQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  builderQueryFn: getExpiryFuturesMarketInfo,
  queryKeyPrefix: "ExpiryFuturesMarketInfoQuery"
});
/* Retrieves perpetual market funding */
export const useGetPerpetualMarketFunding = buildUseVueQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  builderQueryFn: getPerpetualMarketFunding,
  queryKeyPrefix: "PerpetualMarketFundingQuery"
});
/* Retrieves subaccount's order metadata */
export const useGetSubaccountOrderMetadata = buildUseVueQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  builderQueryFn: getSubaccountOrderMetadata,
  queryKeyPrefix: "SubaccountOrderMetadataQuery"
});
/* Retrieves the account and total trade rewards points */
export const useGetTradeRewardPoints = buildUseVueQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: getTradeRewardPoints,
  queryKeyPrefix: "TradeRewardPointsQuery"
});
/* Retrieves the pending account and total trade rewards points */
export const useGetPendingTradeRewardPoints = buildUseVueQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: getPendingTradeRewardPoints,
  queryKeyPrefix: "PendingTradeRewardPointsQuery"
});
/* Retrieves the trade reward campaign */
export const useGetTradeRewardCampaign = buildUseVueQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  builderQueryFn: getTradeRewardCampaign,
  queryKeyPrefix: "TradeRewardCampaignQuery"
});
/* Retrieves the account's fee discount info */
export const useGetFeeDiscountAccountInfo = buildUseVueQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  builderQueryFn: getFeeDiscountAccountInfo,
  queryKeyPrefix: "FeeDiscountAccountInfoQuery"
});
/* Retrieves the fee discount schedule */
export const useGetFeeDiscountSchedule = buildUseVueQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  builderQueryFn: getFeeDiscountSchedule,
  queryKeyPrefix: "FeeDiscountScheduleQuery"
});
/* Retrieves mismatches between available vs. total balance */
export const useGetBalanceMismatches = buildUseVueQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  builderQueryFn: getBalanceMismatches,
  queryKeyPrefix: "BalanceMismatchesQuery"
});
/* Retrieves available and total balances with balance holds */
export const useGetBalanceWithBalanceHolds = buildUseVueQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  builderQueryFn: getBalanceWithBalanceHolds,
  queryKeyPrefix: "BalanceWithBalanceHoldsQuery"
});
/* Retrieves fee discount tier stats */
export const useGetFeeDiscountTierStatistics = buildUseVueQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  builderQueryFn: getFeeDiscountTierStatistics,
  queryKeyPrefix: "FeeDiscountTierStatisticsQuery"
});
/* Retrieves market making pool info */
export const useGetMitoVaultInfos = buildUseVueQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  builderQueryFn: getMitoVaultInfos,
  queryKeyPrefix: "MitoVaultInfosQuery"
});
/* QueryMarketIDFromVault returns the market ID for a given vault subaccount
 ID */
export const useGetQueryMarketIDFromVault = buildUseVueQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  builderQueryFn: getQueryMarketIDFromVault,
  queryKeyPrefix: "QueryMarketIDFromVaultQuery"
});
/* Retrieves historical trade records for a given market ID */
export const useGetHistoricalTradeRecords = buildUseVueQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  builderQueryFn: getHistoricalTradeRecords,
  queryKeyPrefix: "HistoricalTradeRecordsQuery"
});
/* Retrieves if the account is opted out of rewards */
export const useGetIsOptedOutOfRewards = buildUseVueQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  builderQueryFn: getIsOptedOutOfRewards,
  queryKeyPrefix: "IsOptedOutOfRewardsQuery"
});
/* Retrieves all accounts opted out of rewards */
export const useGetOptedOutOfRewardsAccounts = buildUseVueQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  builderQueryFn: getOptedOutOfRewardsAccounts,
  queryKeyPrefix: "OptedOutOfRewardsAccountsQuery"
});
/* MarketVolatility computes the volatility for spot and derivative markets
 trading history. */
export const useGetMarketVolatility = buildUseVueQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  builderQueryFn: getMarketVolatility,
  queryKeyPrefix: "MarketVolatilityQuery"
});
/* Retrieves a spot market's orderbook by marketID */
export const useGetBinaryOptionsMarkets = buildUseVueQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  builderQueryFn: getBinaryOptionsMarkets,
  queryKeyPrefix: "BinaryOptionsMarketsQuery"
});
/* Retrieves a trader's derivative conditional orders */
export const useGetTraderDerivativeConditionalOrders = buildUseVueQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  builderQueryFn: getTraderDerivativeConditionalOrders,
  queryKeyPrefix: "TraderDerivativeConditionalOrdersQuery"
});
export const useGetMarketAtomicExecutionFeeMultiplier = buildUseVueQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  builderQueryFn: getMarketAtomicExecutionFeeMultiplier,
  queryKeyPrefix: "MarketAtomicExecutionFeeMultiplierQuery"
});
/* Retrieves the active stake grant for a grantee */
export const useGetActiveStakeGrant = buildUseVueQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  builderQueryFn: getActiveStakeGrant,
  queryKeyPrefix: "ActiveStakeGrantQuery"
});
/* Retrieves the grant authorization amount for a granter and grantee */
export const useGetGrantAuthorization = buildUseVueQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  builderQueryFn: getGrantAuthorization,
  queryKeyPrefix: "GrantAuthorizationQuery"
});
/* Retrieves the grant authorization amount for a granter and grantee */
export const useGetGrantAuthorizations = buildUseVueQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  builderQueryFn: getGrantAuthorizations,
  queryKeyPrefix: "GrantAuthorizationsQuery"
});