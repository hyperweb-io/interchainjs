import { buildUseVueQuery } from "../../../vue-query";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse } from "./query";
import { getQueryExchangeParams, getSubaccountDeposits, getSubaccountDeposit, getExchangeBalances, getAggregateVolume, getAggregateVolumes, getAggregateMarketVolume, getAggregateMarketVolumes, getDenomDecimal, getDenomDecimals, getSpotMarkets, getSpotMarket, getFullSpotMarkets, getFullSpotMarket, getSpotOrderbook, getTraderSpotOrders, getAccountAddressSpotOrders, getSpotOrdersByHashes, getSubaccountOrders, getTraderSpotTransientOrders, getSpotMidPriceAndTOB, getDerivativeMidPriceAndTOB, getDerivativeOrderbook, getTraderDerivativeOrders, getAccountAddressDerivativeOrders, getDerivativeOrdersByHashes, getTraderDerivativeTransientOrders, getDerivativeMarkets, getDerivativeMarket, getDerivativeMarketAddress, getSubaccountTradeNonce, getExchangeModuleState, getPositions, getSubaccountPositions, getSubaccountPositionInMarket, getSubaccountEffectivePositionInMarket, getPerpetualMarketInfo, getExpiryFuturesMarketInfo, getPerpetualMarketFunding, getSubaccountOrderMetadata, getTradeRewardPoints, getPendingTradeRewardPoints, getTradeRewardCampaign, getFeeDiscountAccountInfo, getFeeDiscountSchedule, getBalanceMismatches, getBalanceWithBalanceHolds, getFeeDiscountTierStatistics, getMitoVaultInfos, getQueryMarketIDFromVault, getHistoricalTradeRecords, getIsOptedOutOfRewards, getOptedOutOfRewardsAccounts, getMarketVolatility, getBinaryOptionsMarkets, getTraderDerivativeConditionalOrders, getMarketAtomicExecutionFeeMultiplier, getActiveStakeGrant, getGrantAuthorization, getGrantAuthorizations } from "./query.rpc.func";
export const useGetQueryExchangeParams = buildUseVueQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  builderQueryFn: getQueryExchangeParams,
  queryKeyPrefix: "QueryExchangeParamsQuery"
});
export const useGetSubaccountDeposits = buildUseVueQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  builderQueryFn: getSubaccountDeposits,
  queryKeyPrefix: "SubaccountDepositsQuery"
});
export const useGetSubaccountDeposit = buildUseVueQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  builderQueryFn: getSubaccountDeposit,
  queryKeyPrefix: "SubaccountDepositQuery"
});
export const useGetExchangeBalances = buildUseVueQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  builderQueryFn: getExchangeBalances,
  queryKeyPrefix: "ExchangeBalancesQuery"
});
export const useGetAggregateVolume = buildUseVueQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  builderQueryFn: getAggregateVolume,
  queryKeyPrefix: "AggregateVolumeQuery"
});
export const useGetAggregateVolumes = buildUseVueQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  builderQueryFn: getAggregateVolumes,
  queryKeyPrefix: "AggregateVolumesQuery"
});
export const useGetAggregateMarketVolume = buildUseVueQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  builderQueryFn: getAggregateMarketVolume,
  queryKeyPrefix: "AggregateMarketVolumeQuery"
});
export const useGetAggregateMarketVolumes = buildUseVueQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  builderQueryFn: getAggregateMarketVolumes,
  queryKeyPrefix: "AggregateMarketVolumesQuery"
});
export const useGetDenomDecimal = buildUseVueQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  builderQueryFn: getDenomDecimal,
  queryKeyPrefix: "DenomDecimalQuery"
});
export const useGetDenomDecimals = buildUseVueQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  builderQueryFn: getDenomDecimals,
  queryKeyPrefix: "DenomDecimalsQuery"
});
export const useGetSpotMarkets = buildUseVueQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  builderQueryFn: getSpotMarkets,
  queryKeyPrefix: "SpotMarketsQuery"
});
export const useGetSpotMarket = buildUseVueQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  builderQueryFn: getSpotMarket,
  queryKeyPrefix: "SpotMarketQuery"
});
export const useGetFullSpotMarkets = buildUseVueQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  builderQueryFn: getFullSpotMarkets,
  queryKeyPrefix: "FullSpotMarketsQuery"
});
export const useGetFullSpotMarket = buildUseVueQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  builderQueryFn: getFullSpotMarket,
  queryKeyPrefix: "FullSpotMarketQuery"
});
export const useGetSpotOrderbook = buildUseVueQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  builderQueryFn: getSpotOrderbook,
  queryKeyPrefix: "SpotOrderbookQuery"
});
export const useGetTraderSpotOrders = buildUseVueQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: getTraderSpotOrders,
  queryKeyPrefix: "TraderSpotOrdersQuery"
});
export const useGetAccountAddressSpotOrders = buildUseVueQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  builderQueryFn: getAccountAddressSpotOrders,
  queryKeyPrefix: "AccountAddressSpotOrdersQuery"
});
export const useGetSpotOrdersByHashes = buildUseVueQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  builderQueryFn: getSpotOrdersByHashes,
  queryKeyPrefix: "SpotOrdersByHashesQuery"
});
export const useGetSubaccountOrders = buildUseVueQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  builderQueryFn: getSubaccountOrders,
  queryKeyPrefix: "SubaccountOrdersQuery"
});
export const useGetTraderSpotTransientOrders = buildUseVueQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: getTraderSpotTransientOrders,
  queryKeyPrefix: "TraderSpotTransientOrdersQuery"
});
export const useGetSpotMidPriceAndTOB = buildUseVueQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  builderQueryFn: getSpotMidPriceAndTOB,
  queryKeyPrefix: "SpotMidPriceAndTOBQuery"
});
export const useGetDerivativeMidPriceAndTOB = buildUseVueQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  builderQueryFn: getDerivativeMidPriceAndTOB,
  queryKeyPrefix: "DerivativeMidPriceAndTOBQuery"
});
export const useGetDerivativeOrderbook = buildUseVueQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  builderQueryFn: getDerivativeOrderbook,
  queryKeyPrefix: "DerivativeOrderbookQuery"
});
export const useGetTraderDerivativeOrders = buildUseVueQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: getTraderDerivativeOrders,
  queryKeyPrefix: "TraderDerivativeOrdersQuery"
});
export const useGetAccountAddressDerivativeOrders = buildUseVueQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  builderQueryFn: getAccountAddressDerivativeOrders,
  queryKeyPrefix: "AccountAddressDerivativeOrdersQuery"
});
export const useGetDerivativeOrdersByHashes = buildUseVueQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  builderQueryFn: getDerivativeOrdersByHashes,
  queryKeyPrefix: "DerivativeOrdersByHashesQuery"
});
export const useGetTraderDerivativeTransientOrders = buildUseVueQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: getTraderDerivativeTransientOrders,
  queryKeyPrefix: "TraderDerivativeTransientOrdersQuery"
});
export const useGetDerivativeMarkets = buildUseVueQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  builderQueryFn: getDerivativeMarkets,
  queryKeyPrefix: "DerivativeMarketsQuery"
});
export const useGetDerivativeMarket = buildUseVueQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  builderQueryFn: getDerivativeMarket,
  queryKeyPrefix: "DerivativeMarketQuery"
});
export const useGetDerivativeMarketAddress = buildUseVueQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  builderQueryFn: getDerivativeMarketAddress,
  queryKeyPrefix: "DerivativeMarketAddressQuery"
});
export const useGetSubaccountTradeNonce = buildUseVueQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  builderQueryFn: getSubaccountTradeNonce,
  queryKeyPrefix: "SubaccountTradeNonceQuery"
});
export const useGetExchangeModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getExchangeModuleState,
  queryKeyPrefix: "ExchangeModuleStateQuery"
});
export const useGetPositions = buildUseVueQuery<QueryPositionsRequest, QueryPositionsResponse>({
  builderQueryFn: getPositions,
  queryKeyPrefix: "PositionsQuery"
});
export const useGetSubaccountPositions = buildUseVueQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  builderQueryFn: getSubaccountPositions,
  queryKeyPrefix: "SubaccountPositionsQuery"
});
export const useGetSubaccountPositionInMarket = buildUseVueQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  builderQueryFn: getSubaccountPositionInMarket,
  queryKeyPrefix: "SubaccountPositionInMarketQuery"
});
export const useGetSubaccountEffectivePositionInMarket = buildUseVueQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  builderQueryFn: getSubaccountEffectivePositionInMarket,
  queryKeyPrefix: "SubaccountEffectivePositionInMarketQuery"
});
export const useGetPerpetualMarketInfo = buildUseVueQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  builderQueryFn: getPerpetualMarketInfo,
  queryKeyPrefix: "PerpetualMarketInfoQuery"
});
export const useGetExpiryFuturesMarketInfo = buildUseVueQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  builderQueryFn: getExpiryFuturesMarketInfo,
  queryKeyPrefix: "ExpiryFuturesMarketInfoQuery"
});
export const useGetPerpetualMarketFunding = buildUseVueQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  builderQueryFn: getPerpetualMarketFunding,
  queryKeyPrefix: "PerpetualMarketFundingQuery"
});
export const useGetSubaccountOrderMetadata = buildUseVueQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  builderQueryFn: getSubaccountOrderMetadata,
  queryKeyPrefix: "SubaccountOrderMetadataQuery"
});
export const useGetTradeRewardPoints = buildUseVueQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: getTradeRewardPoints,
  queryKeyPrefix: "TradeRewardPointsQuery"
});
export const useGetPendingTradeRewardPoints = buildUseVueQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: getPendingTradeRewardPoints,
  queryKeyPrefix: "PendingTradeRewardPointsQuery"
});
export const useGetTradeRewardCampaign = buildUseVueQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  builderQueryFn: getTradeRewardCampaign,
  queryKeyPrefix: "TradeRewardCampaignQuery"
});
export const useGetFeeDiscountAccountInfo = buildUseVueQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  builderQueryFn: getFeeDiscountAccountInfo,
  queryKeyPrefix: "FeeDiscountAccountInfoQuery"
});
export const useGetFeeDiscountSchedule = buildUseVueQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  builderQueryFn: getFeeDiscountSchedule,
  queryKeyPrefix: "FeeDiscountScheduleQuery"
});
export const useGetBalanceMismatches = buildUseVueQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  builderQueryFn: getBalanceMismatches,
  queryKeyPrefix: "BalanceMismatchesQuery"
});
export const useGetBalanceWithBalanceHolds = buildUseVueQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  builderQueryFn: getBalanceWithBalanceHolds,
  queryKeyPrefix: "BalanceWithBalanceHoldsQuery"
});
export const useGetFeeDiscountTierStatistics = buildUseVueQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  builderQueryFn: getFeeDiscountTierStatistics,
  queryKeyPrefix: "FeeDiscountTierStatisticsQuery"
});
export const useGetMitoVaultInfos = buildUseVueQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  builderQueryFn: getMitoVaultInfos,
  queryKeyPrefix: "MitoVaultInfosQuery"
});
export const useGetQueryMarketIDFromVault = buildUseVueQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  builderQueryFn: getQueryMarketIDFromVault,
  queryKeyPrefix: "QueryMarketIDFromVaultQuery"
});
export const useGetHistoricalTradeRecords = buildUseVueQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  builderQueryFn: getHistoricalTradeRecords,
  queryKeyPrefix: "HistoricalTradeRecordsQuery"
});
export const useGetIsOptedOutOfRewards = buildUseVueQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  builderQueryFn: getIsOptedOutOfRewards,
  queryKeyPrefix: "IsOptedOutOfRewardsQuery"
});
export const useGetOptedOutOfRewardsAccounts = buildUseVueQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  builderQueryFn: getOptedOutOfRewardsAccounts,
  queryKeyPrefix: "OptedOutOfRewardsAccountsQuery"
});
export const useGetMarketVolatility = buildUseVueQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  builderQueryFn: getMarketVolatility,
  queryKeyPrefix: "MarketVolatilityQuery"
});
export const useGetBinaryOptionsMarkets = buildUseVueQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  builderQueryFn: getBinaryOptionsMarkets,
  queryKeyPrefix: "BinaryOptionsMarketsQuery"
});
export const useGetTraderDerivativeConditionalOrders = buildUseVueQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  builderQueryFn: getTraderDerivativeConditionalOrders,
  queryKeyPrefix: "TraderDerivativeConditionalOrdersQuery"
});
export const useGetMarketAtomicExecutionFeeMultiplier = buildUseVueQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  builderQueryFn: getMarketAtomicExecutionFeeMultiplier,
  queryKeyPrefix: "MarketAtomicExecutionFeeMultiplierQuery"
});
export const useGetActiveStakeGrant = buildUseVueQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  builderQueryFn: getActiveStakeGrant,
  queryKeyPrefix: "ActiveStakeGrantQuery"
});
export const useGetGrantAuthorization = buildUseVueQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  builderQueryFn: getGrantAuthorization,
  queryKeyPrefix: "GrantAuthorizationQuery"
});
export const useGetGrantAuthorizations = buildUseVueQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  builderQueryFn: getGrantAuthorizations,
  queryKeyPrefix: "GrantAuthorizationsQuery"
});