import { buildUseVueQuery } from "../../../vue-query";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse } from "./query";
import { createGetQueryExchangeParams, createGetSubaccountDeposits, createGetSubaccountDeposit, createGetExchangeBalances, createGetAggregateVolume, createGetAggregateVolumes, createGetAggregateMarketVolume, createGetAggregateMarketVolumes, createGetDenomDecimal, createGetDenomDecimals, createGetSpotMarkets, createGetSpotMarket, createGetFullSpotMarkets, createGetFullSpotMarket, createGetSpotOrderbook, createGetTraderSpotOrders, createGetAccountAddressSpotOrders, createGetSpotOrdersByHashes, createGetSubaccountOrders, createGetTraderSpotTransientOrders, createGetSpotMidPriceAndTOB, createGetDerivativeMidPriceAndTOB, createGetDerivativeOrderbook, createGetTraderDerivativeOrders, createGetAccountAddressDerivativeOrders, createGetDerivativeOrdersByHashes, createGetTraderDerivativeTransientOrders, createGetDerivativeMarkets, createGetDerivativeMarket, createGetDerivativeMarketAddress, createGetSubaccountTradeNonce, createGetExchangeModuleState, createGetPositions, createGetSubaccountPositions, createGetSubaccountPositionInMarket, createGetSubaccountEffectivePositionInMarket, createGetPerpetualMarketInfo, createGetExpiryFuturesMarketInfo, createGetPerpetualMarketFunding, createGetSubaccountOrderMetadata, createGetTradeRewardPoints, createGetPendingTradeRewardPoints, createGetTradeRewardCampaign, createGetFeeDiscountAccountInfo, createGetFeeDiscountSchedule, createGetBalanceMismatches, createGetBalanceWithBalanceHolds, createGetFeeDiscountTierStatistics, createGetMitoVaultInfos, createGetQueryMarketIDFromVault, createGetHistoricalTradeRecords, createGetIsOptedOutOfRewards, createGetOptedOutOfRewardsAccounts, createGetMarketVolatility, createGetBinaryOptionsMarkets, createGetTraderDerivativeConditionalOrders, createGetMarketAtomicExecutionFeeMultiplier, createGetActiveStakeGrant, createGetGrantAuthorization, createGetGrantAuthorizations } from "./query.rpc.func";
export const useGetQueryExchangeParams = buildUseVueQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  builderQueryFn: createGetQueryExchangeParams,
  queryKeyPrefix: "QueryExchangeParamsQuery"
});
export const useGetSubaccountDeposits = buildUseVueQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  builderQueryFn: createGetSubaccountDeposits,
  queryKeyPrefix: "SubaccountDepositsQuery"
});
export const useGetSubaccountDeposit = buildUseVueQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  builderQueryFn: createGetSubaccountDeposit,
  queryKeyPrefix: "SubaccountDepositQuery"
});
export const useGetExchangeBalances = buildUseVueQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  builderQueryFn: createGetExchangeBalances,
  queryKeyPrefix: "ExchangeBalancesQuery"
});
export const useGetAggregateVolume = buildUseVueQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  builderQueryFn: createGetAggregateVolume,
  queryKeyPrefix: "AggregateVolumeQuery"
});
export const useGetAggregateVolumes = buildUseVueQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  builderQueryFn: createGetAggregateVolumes,
  queryKeyPrefix: "AggregateVolumesQuery"
});
export const useGetAggregateMarketVolume = buildUseVueQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  builderQueryFn: createGetAggregateMarketVolume,
  queryKeyPrefix: "AggregateMarketVolumeQuery"
});
export const useGetAggregateMarketVolumes = buildUseVueQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  builderQueryFn: createGetAggregateMarketVolumes,
  queryKeyPrefix: "AggregateMarketVolumesQuery"
});
export const useGetDenomDecimal = buildUseVueQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  builderQueryFn: createGetDenomDecimal,
  queryKeyPrefix: "DenomDecimalQuery"
});
export const useGetDenomDecimals = buildUseVueQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  builderQueryFn: createGetDenomDecimals,
  queryKeyPrefix: "DenomDecimalsQuery"
});
export const useGetSpotMarkets = buildUseVueQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  builderQueryFn: createGetSpotMarkets,
  queryKeyPrefix: "SpotMarketsQuery"
});
export const useGetSpotMarket = buildUseVueQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  builderQueryFn: createGetSpotMarket,
  queryKeyPrefix: "SpotMarketQuery"
});
export const useGetFullSpotMarkets = buildUseVueQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  builderQueryFn: createGetFullSpotMarkets,
  queryKeyPrefix: "FullSpotMarketsQuery"
});
export const useGetFullSpotMarket = buildUseVueQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  builderQueryFn: createGetFullSpotMarket,
  queryKeyPrefix: "FullSpotMarketQuery"
});
export const useGetSpotOrderbook = buildUseVueQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  builderQueryFn: createGetSpotOrderbook,
  queryKeyPrefix: "SpotOrderbookQuery"
});
export const useGetTraderSpotOrders = buildUseVueQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: createGetTraderSpotOrders,
  queryKeyPrefix: "TraderSpotOrdersQuery"
});
export const useGetAccountAddressSpotOrders = buildUseVueQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  builderQueryFn: createGetAccountAddressSpotOrders,
  queryKeyPrefix: "AccountAddressSpotOrdersQuery"
});
export const useGetSpotOrdersByHashes = buildUseVueQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  builderQueryFn: createGetSpotOrdersByHashes,
  queryKeyPrefix: "SpotOrdersByHashesQuery"
});
export const useGetSubaccountOrders = buildUseVueQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  builderQueryFn: createGetSubaccountOrders,
  queryKeyPrefix: "SubaccountOrdersQuery"
});
export const useGetTraderSpotTransientOrders = buildUseVueQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: createGetTraderSpotTransientOrders,
  queryKeyPrefix: "TraderSpotTransientOrdersQuery"
});
export const useGetSpotMidPriceAndTOB = buildUseVueQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  builderQueryFn: createGetSpotMidPriceAndTOB,
  queryKeyPrefix: "SpotMidPriceAndTOBQuery"
});
export const useGetDerivativeMidPriceAndTOB = buildUseVueQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  builderQueryFn: createGetDerivativeMidPriceAndTOB,
  queryKeyPrefix: "DerivativeMidPriceAndTOBQuery"
});
export const useGetDerivativeOrderbook = buildUseVueQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  builderQueryFn: createGetDerivativeOrderbook,
  queryKeyPrefix: "DerivativeOrderbookQuery"
});
export const useGetTraderDerivativeOrders = buildUseVueQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: createGetTraderDerivativeOrders,
  queryKeyPrefix: "TraderDerivativeOrdersQuery"
});
export const useGetAccountAddressDerivativeOrders = buildUseVueQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  builderQueryFn: createGetAccountAddressDerivativeOrders,
  queryKeyPrefix: "AccountAddressDerivativeOrdersQuery"
});
export const useGetDerivativeOrdersByHashes = buildUseVueQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  builderQueryFn: createGetDerivativeOrdersByHashes,
  queryKeyPrefix: "DerivativeOrdersByHashesQuery"
});
export const useGetTraderDerivativeTransientOrders = buildUseVueQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: createGetTraderDerivativeTransientOrders,
  queryKeyPrefix: "TraderDerivativeTransientOrdersQuery"
});
export const useGetDerivativeMarkets = buildUseVueQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  builderQueryFn: createGetDerivativeMarkets,
  queryKeyPrefix: "DerivativeMarketsQuery"
});
export const useGetDerivativeMarket = buildUseVueQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  builderQueryFn: createGetDerivativeMarket,
  queryKeyPrefix: "DerivativeMarketQuery"
});
export const useGetDerivativeMarketAddress = buildUseVueQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  builderQueryFn: createGetDerivativeMarketAddress,
  queryKeyPrefix: "DerivativeMarketAddressQuery"
});
export const useGetSubaccountTradeNonce = buildUseVueQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  builderQueryFn: createGetSubaccountTradeNonce,
  queryKeyPrefix: "SubaccountTradeNonceQuery"
});
export const useGetExchangeModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetExchangeModuleState,
  queryKeyPrefix: "ExchangeModuleStateQuery"
});
export const useGetPositions = buildUseVueQuery<QueryPositionsRequest, QueryPositionsResponse>({
  builderQueryFn: createGetPositions,
  queryKeyPrefix: "PositionsQuery"
});
export const useGetSubaccountPositions = buildUseVueQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  builderQueryFn: createGetSubaccountPositions,
  queryKeyPrefix: "SubaccountPositionsQuery"
});
export const useGetSubaccountPositionInMarket = buildUseVueQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  builderQueryFn: createGetSubaccountPositionInMarket,
  queryKeyPrefix: "SubaccountPositionInMarketQuery"
});
export const useGetSubaccountEffectivePositionInMarket = buildUseVueQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  builderQueryFn: createGetSubaccountEffectivePositionInMarket,
  queryKeyPrefix: "SubaccountEffectivePositionInMarketQuery"
});
export const useGetPerpetualMarketInfo = buildUseVueQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  builderQueryFn: createGetPerpetualMarketInfo,
  queryKeyPrefix: "PerpetualMarketInfoQuery"
});
export const useGetExpiryFuturesMarketInfo = buildUseVueQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  builderQueryFn: createGetExpiryFuturesMarketInfo,
  queryKeyPrefix: "ExpiryFuturesMarketInfoQuery"
});
export const useGetPerpetualMarketFunding = buildUseVueQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  builderQueryFn: createGetPerpetualMarketFunding,
  queryKeyPrefix: "PerpetualMarketFundingQuery"
});
export const useGetSubaccountOrderMetadata = buildUseVueQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  builderQueryFn: createGetSubaccountOrderMetadata,
  queryKeyPrefix: "SubaccountOrderMetadataQuery"
});
export const useGetTradeRewardPoints = buildUseVueQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: createGetTradeRewardPoints,
  queryKeyPrefix: "TradeRewardPointsQuery"
});
export const useGetPendingTradeRewardPoints = buildUseVueQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: createGetPendingTradeRewardPoints,
  queryKeyPrefix: "PendingTradeRewardPointsQuery"
});
export const useGetTradeRewardCampaign = buildUseVueQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  builderQueryFn: createGetTradeRewardCampaign,
  queryKeyPrefix: "TradeRewardCampaignQuery"
});
export const useGetFeeDiscountAccountInfo = buildUseVueQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  builderQueryFn: createGetFeeDiscountAccountInfo,
  queryKeyPrefix: "FeeDiscountAccountInfoQuery"
});
export const useGetFeeDiscountSchedule = buildUseVueQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  builderQueryFn: createGetFeeDiscountSchedule,
  queryKeyPrefix: "FeeDiscountScheduleQuery"
});
export const useGetBalanceMismatches = buildUseVueQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  builderQueryFn: createGetBalanceMismatches,
  queryKeyPrefix: "BalanceMismatchesQuery"
});
export const useGetBalanceWithBalanceHolds = buildUseVueQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  builderQueryFn: createGetBalanceWithBalanceHolds,
  queryKeyPrefix: "BalanceWithBalanceHoldsQuery"
});
export const useGetFeeDiscountTierStatistics = buildUseVueQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  builderQueryFn: createGetFeeDiscountTierStatistics,
  queryKeyPrefix: "FeeDiscountTierStatisticsQuery"
});
export const useGetMitoVaultInfos = buildUseVueQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  builderQueryFn: createGetMitoVaultInfos,
  queryKeyPrefix: "MitoVaultInfosQuery"
});
export const useGetQueryMarketIDFromVault = buildUseVueQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  builderQueryFn: createGetQueryMarketIDFromVault,
  queryKeyPrefix: "QueryMarketIDFromVaultQuery"
});
export const useGetHistoricalTradeRecords = buildUseVueQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  builderQueryFn: createGetHistoricalTradeRecords,
  queryKeyPrefix: "HistoricalTradeRecordsQuery"
});
export const useGetIsOptedOutOfRewards = buildUseVueQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  builderQueryFn: createGetIsOptedOutOfRewards,
  queryKeyPrefix: "IsOptedOutOfRewardsQuery"
});
export const useGetOptedOutOfRewardsAccounts = buildUseVueQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  builderQueryFn: createGetOptedOutOfRewardsAccounts,
  queryKeyPrefix: "OptedOutOfRewardsAccountsQuery"
});
export const useGetMarketVolatility = buildUseVueQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  builderQueryFn: createGetMarketVolatility,
  queryKeyPrefix: "MarketVolatilityQuery"
});
export const useGetBinaryOptionsMarkets = buildUseVueQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  builderQueryFn: createGetBinaryOptionsMarkets,
  queryKeyPrefix: "BinaryOptionsMarketsQuery"
});
export const useGetTraderDerivativeConditionalOrders = buildUseVueQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  builderQueryFn: createGetTraderDerivativeConditionalOrders,
  queryKeyPrefix: "TraderDerivativeConditionalOrdersQuery"
});
export const useGetMarketAtomicExecutionFeeMultiplier = buildUseVueQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  builderQueryFn: createGetMarketAtomicExecutionFeeMultiplier,
  queryKeyPrefix: "MarketAtomicExecutionFeeMultiplierQuery"
});
export const useGetActiveStakeGrant = buildUseVueQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  builderQueryFn: createGetActiveStakeGrant,
  queryKeyPrefix: "ActiveStakeGrantQuery"
});
export const useGetGrantAuthorization = buildUseVueQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  builderQueryFn: createGetGrantAuthorization,
  queryKeyPrefix: "GrantAuthorizationQuery"
});
export const useGetGrantAuthorizations = buildUseVueQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  builderQueryFn: createGetGrantAuthorizations,
  queryKeyPrefix: "GrantAuthorizationsQuery"
});