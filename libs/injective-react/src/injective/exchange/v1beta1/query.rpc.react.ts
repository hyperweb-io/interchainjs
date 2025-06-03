import { buildUseQuery } from "../../../react-query";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse } from "./query";
import { getQueryExchangeParams, getSubaccountDeposits, getSubaccountDeposit, getExchangeBalances, getAggregateVolume, getAggregateVolumes, getAggregateMarketVolume, getAggregateMarketVolumes, getDenomDecimal, getDenomDecimals, getSpotMarkets, getSpotMarket, getFullSpotMarkets, getFullSpotMarket, getSpotOrderbook, getTraderSpotOrders, getAccountAddressSpotOrders, getSpotOrdersByHashes, getSubaccountOrders, getTraderSpotTransientOrders, getSpotMidPriceAndTOB, getDerivativeMidPriceAndTOB, getDerivativeOrderbook, getTraderDerivativeOrders, getAccountAddressDerivativeOrders, getDerivativeOrdersByHashes, getTraderDerivativeTransientOrders, getDerivativeMarkets, getDerivativeMarket, getDerivativeMarketAddress, getSubaccountTradeNonce, getExchangeModuleState, getPositions, getSubaccountPositions, getSubaccountPositionInMarket, getSubaccountEffectivePositionInMarket, getPerpetualMarketInfo, getExpiryFuturesMarketInfo, getPerpetualMarketFunding, getSubaccountOrderMetadata, getTradeRewardPoints, getPendingTradeRewardPoints, getTradeRewardCampaign, getFeeDiscountAccountInfo, getFeeDiscountSchedule, getBalanceMismatches, getBalanceWithBalanceHolds, getFeeDiscountTierStatistics, getMitoVaultInfos, getQueryMarketIDFromVault, getHistoricalTradeRecords, getIsOptedOutOfRewards, getOptedOutOfRewardsAccounts, getMarketVolatility, getBinaryOptionsMarkets, getTraderDerivativeConditionalOrders, getMarketAtomicExecutionFeeMultiplier, getActiveStakeGrant, getGrantAuthorization, getGrantAuthorizations } from "./query.rpc.func";
/* Retrieves exchange params */
export const useGetQueryExchangeParams = buildUseQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  builderQueryFn: getQueryExchangeParams,
  queryKeyPrefix: "QueryExchangeParamsQuery"
});
/* Retrieves a Subaccount's Deposits */
export const useGetSubaccountDeposits = buildUseQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  builderQueryFn: getSubaccountDeposits,
  queryKeyPrefix: "SubaccountDepositsQuery"
});
/* Retrieves a Subaccount's Deposits */
export const useGetSubaccountDeposit = buildUseQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  builderQueryFn: getSubaccountDeposit,
  queryKeyPrefix: "SubaccountDepositQuery"
});
/* Retrieves all of the balances of all users on the exchange. */
export const useGetExchangeBalances = buildUseQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  builderQueryFn: getExchangeBalances,
  queryKeyPrefix: "ExchangeBalancesQuery"
});
/* Retrieves the aggregate volumes for the specified account or subaccount */
export const useGetAggregateVolume = buildUseQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  builderQueryFn: getAggregateVolume,
  queryKeyPrefix: "AggregateVolumeQuery"
});
/* Retrieves the aggregate volumes for specified accounts */
export const useGetAggregateVolumes = buildUseQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  builderQueryFn: getAggregateVolumes,
  queryKeyPrefix: "AggregateVolumesQuery"
});
/* Retrieves the aggregate volume for the specified market */
export const useGetAggregateMarketVolume = buildUseQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  builderQueryFn: getAggregateMarketVolume,
  queryKeyPrefix: "AggregateMarketVolumeQuery"
});
/* Retrieves the aggregate market volumes for specified markets */
export const useGetAggregateMarketVolumes = buildUseQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  builderQueryFn: getAggregateMarketVolumes,
  queryKeyPrefix: "AggregateMarketVolumesQuery"
});
/* Retrieves the denom decimals for a denom. */
export const useGetDenomDecimal = buildUseQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  builderQueryFn: getDenomDecimal,
  queryKeyPrefix: "DenomDecimalQuery"
});
/* Retrieves the denom decimals for multiple denoms. Returns all denom
 decimals if unspecified. */
export const useGetDenomDecimals = buildUseQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  builderQueryFn: getDenomDecimals,
  queryKeyPrefix: "DenomDecimalsQuery"
});
/* Retrieves a list of spot markets. */
export const useGetSpotMarkets = buildUseQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  builderQueryFn: getSpotMarkets,
  queryKeyPrefix: "SpotMarketsQuery"
});
/* Retrieves a spot market by ticker */
export const useGetSpotMarket = buildUseQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  builderQueryFn: getSpotMarket,
  queryKeyPrefix: "SpotMarketQuery"
});
/* Retrieves a list of spot markets with extra information. */
export const useGetFullSpotMarkets = buildUseQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  builderQueryFn: getFullSpotMarkets,
  queryKeyPrefix: "FullSpotMarketsQuery"
});
/* Retrieves a spot market with extra information. */
export const useGetFullSpotMarket = buildUseQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  builderQueryFn: getFullSpotMarket,
  queryKeyPrefix: "FullSpotMarketQuery"
});
/* Retrieves a spot market's orderbook by marketID */
export const useGetSpotOrderbook = buildUseQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  builderQueryFn: getSpotOrderbook,
  queryKeyPrefix: "SpotOrderbookQuery"
});
/* Retrieves a trader's spot orders */
export const useGetTraderSpotOrders = buildUseQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: getTraderSpotOrders,
  queryKeyPrefix: "TraderSpotOrdersQuery"
});
/* Retrieves all account address spot orders */
export const useGetAccountAddressSpotOrders = buildUseQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  builderQueryFn: getAccountAddressSpotOrders,
  queryKeyPrefix: "AccountAddressSpotOrdersQuery"
});
/* Retrieves spot orders corresponding to specified order hashes for a given
 subaccountID and marketID */
export const useGetSpotOrdersByHashes = buildUseQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  builderQueryFn: getSpotOrdersByHashes,
  queryKeyPrefix: "SpotOrdersByHashesQuery"
});
/* Retrieves subaccount's orders */
export const useGetSubaccountOrders = buildUseQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  builderQueryFn: getSubaccountOrders,
  queryKeyPrefix: "SubaccountOrdersQuery"
});
/* Retrieves a trader's transient spot orders */
export const useGetTraderSpotTransientOrders = buildUseQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: getTraderSpotTransientOrders,
  queryKeyPrefix: "TraderSpotTransientOrdersQuery"
});
/* Retrieves a spot market's mid-price */
export const useGetSpotMidPriceAndTOB = buildUseQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  builderQueryFn: getSpotMidPriceAndTOB,
  queryKeyPrefix: "SpotMidPriceAndTOBQuery"
});
/* Retrieves a derivative market's mid-price */
export const useGetDerivativeMidPriceAndTOB = buildUseQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  builderQueryFn: getDerivativeMidPriceAndTOB,
  queryKeyPrefix: "DerivativeMidPriceAndTOBQuery"
});
/* Retrieves a derivative market's orderbook by marketID */
export const useGetDerivativeOrderbook = buildUseQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  builderQueryFn: getDerivativeOrderbook,
  queryKeyPrefix: "DerivativeOrderbookQuery"
});
/* Retrieves a trader's derivative orders */
export const useGetTraderDerivativeOrders = buildUseQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: getTraderDerivativeOrders,
  queryKeyPrefix: "TraderDerivativeOrdersQuery"
});
/* Retrieves all account address derivative orders */
export const useGetAccountAddressDerivativeOrders = buildUseQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  builderQueryFn: getAccountAddressDerivativeOrders,
  queryKeyPrefix: "AccountAddressDerivativeOrdersQuery"
});
/* Retrieves a trader's derivative orders */
export const useGetDerivativeOrdersByHashes = buildUseQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  builderQueryFn: getDerivativeOrdersByHashes,
  queryKeyPrefix: "DerivativeOrdersByHashesQuery"
});
/* Retrieves a trader's transient derivative orders */
export const useGetTraderDerivativeTransientOrders = buildUseQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: getTraderDerivativeTransientOrders,
  queryKeyPrefix: "TraderDerivativeTransientOrdersQuery"
});
/* Retrieves a list of derivative markets. */
export const useGetDerivativeMarkets = buildUseQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  builderQueryFn: getDerivativeMarkets,
  queryKeyPrefix: "DerivativeMarketsQuery"
});
/* Retrieves a derivative market by ticker */
export const useGetDerivativeMarket = buildUseQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  builderQueryFn: getDerivativeMarket,
  queryKeyPrefix: "DerivativeMarketQuery"
});
/* Retrieves a derivative market's corresponding address for fees that
 contribute to the market's insurance fund */
export const useGetDerivativeMarketAddress = buildUseQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  builderQueryFn: getDerivativeMarketAddress,
  queryKeyPrefix: "DerivativeMarketAddressQuery"
});
/* Retrieves a subaccount's trade nonce */
export const useGetSubaccountTradeNonce = buildUseQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  builderQueryFn: getSubaccountTradeNonce,
  queryKeyPrefix: "SubaccountTradeNonceQuery"
});
/* Retrieves the entire exchange module's state */
export const useGetExchangeModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getExchangeModuleState,
  queryKeyPrefix: "ExchangeModuleStateQuery"
});
/* Retrieves the entire exchange module's positions */
export const useGetPositions = buildUseQuery<QueryPositionsRequest, QueryPositionsResponse>({
  builderQueryFn: getPositions,
  queryKeyPrefix: "PositionsQuery"
});
/* Retrieves subaccount's positions */
export const useGetSubaccountPositions = buildUseQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  builderQueryFn: getSubaccountPositions,
  queryKeyPrefix: "SubaccountPositionsQuery"
});
/* Retrieves subaccount's position in market */
export const useGetSubaccountPositionInMarket = buildUseQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  builderQueryFn: getSubaccountPositionInMarket,
  queryKeyPrefix: "SubaccountPositionInMarketQuery"
});
/* Retrieves subaccount's position in market */
export const useGetSubaccountEffectivePositionInMarket = buildUseQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  builderQueryFn: getSubaccountEffectivePositionInMarket,
  queryKeyPrefix: "SubaccountEffectivePositionInMarketQuery"
});
/* Retrieves perpetual market info */
export const useGetPerpetualMarketInfo = buildUseQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  builderQueryFn: getPerpetualMarketInfo,
  queryKeyPrefix: "PerpetualMarketInfoQuery"
});
/* Retrieves expiry market info */
export const useGetExpiryFuturesMarketInfo = buildUseQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  builderQueryFn: getExpiryFuturesMarketInfo,
  queryKeyPrefix: "ExpiryFuturesMarketInfoQuery"
});
/* Retrieves perpetual market funding */
export const useGetPerpetualMarketFunding = buildUseQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  builderQueryFn: getPerpetualMarketFunding,
  queryKeyPrefix: "PerpetualMarketFundingQuery"
});
/* Retrieves subaccount's order metadata */
export const useGetSubaccountOrderMetadata = buildUseQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  builderQueryFn: getSubaccountOrderMetadata,
  queryKeyPrefix: "SubaccountOrderMetadataQuery"
});
/* Retrieves the account and total trade rewards points */
export const useGetTradeRewardPoints = buildUseQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: getTradeRewardPoints,
  queryKeyPrefix: "TradeRewardPointsQuery"
});
/* Retrieves the pending account and total trade rewards points */
export const useGetPendingTradeRewardPoints = buildUseQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: getPendingTradeRewardPoints,
  queryKeyPrefix: "PendingTradeRewardPointsQuery"
});
/* Retrieves the trade reward campaign */
export const useGetTradeRewardCampaign = buildUseQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  builderQueryFn: getTradeRewardCampaign,
  queryKeyPrefix: "TradeRewardCampaignQuery"
});
/* Retrieves the account's fee discount info */
export const useGetFeeDiscountAccountInfo = buildUseQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  builderQueryFn: getFeeDiscountAccountInfo,
  queryKeyPrefix: "FeeDiscountAccountInfoQuery"
});
/* Retrieves the fee discount schedule */
export const useGetFeeDiscountSchedule = buildUseQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  builderQueryFn: getFeeDiscountSchedule,
  queryKeyPrefix: "FeeDiscountScheduleQuery"
});
/* Retrieves mismatches between available vs. total balance */
export const useGetBalanceMismatches = buildUseQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  builderQueryFn: getBalanceMismatches,
  queryKeyPrefix: "BalanceMismatchesQuery"
});
/* Retrieves available and total balances with balance holds */
export const useGetBalanceWithBalanceHolds = buildUseQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  builderQueryFn: getBalanceWithBalanceHolds,
  queryKeyPrefix: "BalanceWithBalanceHoldsQuery"
});
/* Retrieves fee discount tier stats */
export const useGetFeeDiscountTierStatistics = buildUseQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  builderQueryFn: getFeeDiscountTierStatistics,
  queryKeyPrefix: "FeeDiscountTierStatisticsQuery"
});
/* Retrieves market making pool info */
export const useGetMitoVaultInfos = buildUseQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  builderQueryFn: getMitoVaultInfos,
  queryKeyPrefix: "MitoVaultInfosQuery"
});
/* QueryMarketIDFromVault returns the market ID for a given vault subaccount
 ID */
export const useGetQueryMarketIDFromVault = buildUseQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  builderQueryFn: getQueryMarketIDFromVault,
  queryKeyPrefix: "QueryMarketIDFromVaultQuery"
});
/* Retrieves historical trade records for a given market ID */
export const useGetHistoricalTradeRecords = buildUseQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  builderQueryFn: getHistoricalTradeRecords,
  queryKeyPrefix: "HistoricalTradeRecordsQuery"
});
/* Retrieves if the account is opted out of rewards */
export const useGetIsOptedOutOfRewards = buildUseQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  builderQueryFn: getIsOptedOutOfRewards,
  queryKeyPrefix: "IsOptedOutOfRewardsQuery"
});
/* Retrieves all accounts opted out of rewards */
export const useGetOptedOutOfRewardsAccounts = buildUseQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  builderQueryFn: getOptedOutOfRewardsAccounts,
  queryKeyPrefix: "OptedOutOfRewardsAccountsQuery"
});
/* MarketVolatility computes the volatility for spot and derivative markets
 trading history. */
export const useGetMarketVolatility = buildUseQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  builderQueryFn: getMarketVolatility,
  queryKeyPrefix: "MarketVolatilityQuery"
});
/* Retrieves a spot market's orderbook by marketID */
export const useGetBinaryOptionsMarkets = buildUseQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  builderQueryFn: getBinaryOptionsMarkets,
  queryKeyPrefix: "BinaryOptionsMarketsQuery"
});
/* Retrieves a trader's derivative conditional orders */
export const useGetTraderDerivativeConditionalOrders = buildUseQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  builderQueryFn: getTraderDerivativeConditionalOrders,
  queryKeyPrefix: "TraderDerivativeConditionalOrdersQuery"
});
export const useGetMarketAtomicExecutionFeeMultiplier = buildUseQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  builderQueryFn: getMarketAtomicExecutionFeeMultiplier,
  queryKeyPrefix: "MarketAtomicExecutionFeeMultiplierQuery"
});
/* Retrieves the active stake grant for a grantee */
export const useGetActiveStakeGrant = buildUseQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  builderQueryFn: getActiveStakeGrant,
  queryKeyPrefix: "ActiveStakeGrantQuery"
});
/* Retrieves the grant authorization amount for a granter and grantee */
export const useGetGrantAuthorization = buildUseQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  builderQueryFn: getGrantAuthorization,
  queryKeyPrefix: "GrantAuthorizationQuery"
});
/* Retrieves the grant authorization amount for a granter and grantee */
export const useGetGrantAuthorizations = buildUseQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  builderQueryFn: getGrantAuthorizations,
  queryKeyPrefix: "GrantAuthorizationsQuery"
});