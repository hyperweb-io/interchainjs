import { buildUseQuery } from "../../../react-query";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse } from "./query";
import { createGetQueryExchangeParams, createGetSubaccountDeposits, createGetSubaccountDeposit, createGetExchangeBalances, createGetAggregateVolume, createGetAggregateVolumes, createGetAggregateMarketVolume, createGetAggregateMarketVolumes, createGetDenomDecimal, createGetDenomDecimals, createGetSpotMarkets, createGetSpotMarket, createGetFullSpotMarkets, createGetFullSpotMarket, createGetSpotOrderbook, createGetTraderSpotOrders, createGetAccountAddressSpotOrders, createGetSpotOrdersByHashes, createGetSubaccountOrders, createGetTraderSpotTransientOrders, createGetSpotMidPriceAndTOB, createGetDerivativeMidPriceAndTOB, createGetDerivativeOrderbook, createGetTraderDerivativeOrders, createGetAccountAddressDerivativeOrders, createGetDerivativeOrdersByHashes, createGetTraderDerivativeTransientOrders, createGetDerivativeMarkets, createGetDerivativeMarket, createGetDerivativeMarketAddress, createGetSubaccountTradeNonce, createGetExchangeModuleState, createGetPositions, createGetSubaccountPositions, createGetSubaccountPositionInMarket, createGetSubaccountEffectivePositionInMarket, createGetPerpetualMarketInfo, createGetExpiryFuturesMarketInfo, createGetPerpetualMarketFunding, createGetSubaccountOrderMetadata, createGetTradeRewardPoints, createGetPendingTradeRewardPoints, createGetTradeRewardCampaign, createGetFeeDiscountAccountInfo, createGetFeeDiscountSchedule, createGetBalanceMismatches, createGetBalanceWithBalanceHolds, createGetFeeDiscountTierStatistics, createGetMitoVaultInfos, createGetQueryMarketIDFromVault, createGetHistoricalTradeRecords, createGetIsOptedOutOfRewards, createGetOptedOutOfRewardsAccounts, createGetMarketVolatility, createGetBinaryOptionsMarkets, createGetTraderDerivativeConditionalOrders, createGetMarketAtomicExecutionFeeMultiplier, createGetActiveStakeGrant, createGetGrantAuthorization, createGetGrantAuthorizations } from "./query.rpc.func";
export const useGetQueryExchangeParams = buildUseQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  builderQueryFn: createGetQueryExchangeParams,
  queryKeyPrefix: "QueryExchangeParamsQuery"
});
export const useGetSubaccountDeposits = buildUseQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  builderQueryFn: createGetSubaccountDeposits,
  queryKeyPrefix: "SubaccountDepositsQuery"
});
export const useGetSubaccountDeposit = buildUseQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  builderQueryFn: createGetSubaccountDeposit,
  queryKeyPrefix: "SubaccountDepositQuery"
});
export const useGetExchangeBalances = buildUseQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  builderQueryFn: createGetExchangeBalances,
  queryKeyPrefix: "ExchangeBalancesQuery"
});
export const useGetAggregateVolume = buildUseQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  builderQueryFn: createGetAggregateVolume,
  queryKeyPrefix: "AggregateVolumeQuery"
});
export const useGetAggregateVolumes = buildUseQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  builderQueryFn: createGetAggregateVolumes,
  queryKeyPrefix: "AggregateVolumesQuery"
});
export const useGetAggregateMarketVolume = buildUseQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  builderQueryFn: createGetAggregateMarketVolume,
  queryKeyPrefix: "AggregateMarketVolumeQuery"
});
export const useGetAggregateMarketVolumes = buildUseQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  builderQueryFn: createGetAggregateMarketVolumes,
  queryKeyPrefix: "AggregateMarketVolumesQuery"
});
export const useGetDenomDecimal = buildUseQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  builderQueryFn: createGetDenomDecimal,
  queryKeyPrefix: "DenomDecimalQuery"
});
export const useGetDenomDecimals = buildUseQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  builderQueryFn: createGetDenomDecimals,
  queryKeyPrefix: "DenomDecimalsQuery"
});
export const useGetSpotMarkets = buildUseQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  builderQueryFn: createGetSpotMarkets,
  queryKeyPrefix: "SpotMarketsQuery"
});
export const useGetSpotMarket = buildUseQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  builderQueryFn: createGetSpotMarket,
  queryKeyPrefix: "SpotMarketQuery"
});
export const useGetFullSpotMarkets = buildUseQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  builderQueryFn: createGetFullSpotMarkets,
  queryKeyPrefix: "FullSpotMarketsQuery"
});
export const useGetFullSpotMarket = buildUseQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  builderQueryFn: createGetFullSpotMarket,
  queryKeyPrefix: "FullSpotMarketQuery"
});
export const useGetSpotOrderbook = buildUseQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  builderQueryFn: createGetSpotOrderbook,
  queryKeyPrefix: "SpotOrderbookQuery"
});
export const useGetTraderSpotOrders = buildUseQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: createGetTraderSpotOrders,
  queryKeyPrefix: "TraderSpotOrdersQuery"
});
export const useGetAccountAddressSpotOrders = buildUseQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  builderQueryFn: createGetAccountAddressSpotOrders,
  queryKeyPrefix: "AccountAddressSpotOrdersQuery"
});
export const useGetSpotOrdersByHashes = buildUseQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  builderQueryFn: createGetSpotOrdersByHashes,
  queryKeyPrefix: "SpotOrdersByHashesQuery"
});
export const useGetSubaccountOrders = buildUseQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  builderQueryFn: createGetSubaccountOrders,
  queryKeyPrefix: "SubaccountOrdersQuery"
});
export const useGetTraderSpotTransientOrders = buildUseQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: createGetTraderSpotTransientOrders,
  queryKeyPrefix: "TraderSpotTransientOrdersQuery"
});
export const useGetSpotMidPriceAndTOB = buildUseQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  builderQueryFn: createGetSpotMidPriceAndTOB,
  queryKeyPrefix: "SpotMidPriceAndTOBQuery"
});
export const useGetDerivativeMidPriceAndTOB = buildUseQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  builderQueryFn: createGetDerivativeMidPriceAndTOB,
  queryKeyPrefix: "DerivativeMidPriceAndTOBQuery"
});
export const useGetDerivativeOrderbook = buildUseQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  builderQueryFn: createGetDerivativeOrderbook,
  queryKeyPrefix: "DerivativeOrderbookQuery"
});
export const useGetTraderDerivativeOrders = buildUseQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: createGetTraderDerivativeOrders,
  queryKeyPrefix: "TraderDerivativeOrdersQuery"
});
export const useGetAccountAddressDerivativeOrders = buildUseQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  builderQueryFn: createGetAccountAddressDerivativeOrders,
  queryKeyPrefix: "AccountAddressDerivativeOrdersQuery"
});
export const useGetDerivativeOrdersByHashes = buildUseQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  builderQueryFn: createGetDerivativeOrdersByHashes,
  queryKeyPrefix: "DerivativeOrdersByHashesQuery"
});
export const useGetTraderDerivativeTransientOrders = buildUseQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: createGetTraderDerivativeTransientOrders,
  queryKeyPrefix: "TraderDerivativeTransientOrdersQuery"
});
export const useGetDerivativeMarkets = buildUseQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  builderQueryFn: createGetDerivativeMarkets,
  queryKeyPrefix: "DerivativeMarketsQuery"
});
export const useGetDerivativeMarket = buildUseQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  builderQueryFn: createGetDerivativeMarket,
  queryKeyPrefix: "DerivativeMarketQuery"
});
export const useGetDerivativeMarketAddress = buildUseQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  builderQueryFn: createGetDerivativeMarketAddress,
  queryKeyPrefix: "DerivativeMarketAddressQuery"
});
export const useGetSubaccountTradeNonce = buildUseQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  builderQueryFn: createGetSubaccountTradeNonce,
  queryKeyPrefix: "SubaccountTradeNonceQuery"
});
export const useGetExchangeModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetExchangeModuleState,
  queryKeyPrefix: "ExchangeModuleStateQuery"
});
export const useGetPositions = buildUseQuery<QueryPositionsRequest, QueryPositionsResponse>({
  builderQueryFn: createGetPositions,
  queryKeyPrefix: "PositionsQuery"
});
export const useGetSubaccountPositions = buildUseQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  builderQueryFn: createGetSubaccountPositions,
  queryKeyPrefix: "SubaccountPositionsQuery"
});
export const useGetSubaccountPositionInMarket = buildUseQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  builderQueryFn: createGetSubaccountPositionInMarket,
  queryKeyPrefix: "SubaccountPositionInMarketQuery"
});
export const useGetSubaccountEffectivePositionInMarket = buildUseQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  builderQueryFn: createGetSubaccountEffectivePositionInMarket,
  queryKeyPrefix: "SubaccountEffectivePositionInMarketQuery"
});
export const useGetPerpetualMarketInfo = buildUseQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  builderQueryFn: createGetPerpetualMarketInfo,
  queryKeyPrefix: "PerpetualMarketInfoQuery"
});
export const useGetExpiryFuturesMarketInfo = buildUseQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  builderQueryFn: createGetExpiryFuturesMarketInfo,
  queryKeyPrefix: "ExpiryFuturesMarketInfoQuery"
});
export const useGetPerpetualMarketFunding = buildUseQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  builderQueryFn: createGetPerpetualMarketFunding,
  queryKeyPrefix: "PerpetualMarketFundingQuery"
});
export const useGetSubaccountOrderMetadata = buildUseQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  builderQueryFn: createGetSubaccountOrderMetadata,
  queryKeyPrefix: "SubaccountOrderMetadataQuery"
});
export const useGetTradeRewardPoints = buildUseQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: createGetTradeRewardPoints,
  queryKeyPrefix: "TradeRewardPointsQuery"
});
export const useGetPendingTradeRewardPoints = buildUseQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: createGetPendingTradeRewardPoints,
  queryKeyPrefix: "PendingTradeRewardPointsQuery"
});
export const useGetTradeRewardCampaign = buildUseQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  builderQueryFn: createGetTradeRewardCampaign,
  queryKeyPrefix: "TradeRewardCampaignQuery"
});
export const useGetFeeDiscountAccountInfo = buildUseQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  builderQueryFn: createGetFeeDiscountAccountInfo,
  queryKeyPrefix: "FeeDiscountAccountInfoQuery"
});
export const useGetFeeDiscountSchedule = buildUseQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  builderQueryFn: createGetFeeDiscountSchedule,
  queryKeyPrefix: "FeeDiscountScheduleQuery"
});
export const useGetBalanceMismatches = buildUseQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  builderQueryFn: createGetBalanceMismatches,
  queryKeyPrefix: "BalanceMismatchesQuery"
});
export const useGetBalanceWithBalanceHolds = buildUseQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  builderQueryFn: createGetBalanceWithBalanceHolds,
  queryKeyPrefix: "BalanceWithBalanceHoldsQuery"
});
export const useGetFeeDiscountTierStatistics = buildUseQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  builderQueryFn: createGetFeeDiscountTierStatistics,
  queryKeyPrefix: "FeeDiscountTierStatisticsQuery"
});
export const useGetMitoVaultInfos = buildUseQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  builderQueryFn: createGetMitoVaultInfos,
  queryKeyPrefix: "MitoVaultInfosQuery"
});
export const useGetQueryMarketIDFromVault = buildUseQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  builderQueryFn: createGetQueryMarketIDFromVault,
  queryKeyPrefix: "QueryMarketIDFromVaultQuery"
});
export const useGetHistoricalTradeRecords = buildUseQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  builderQueryFn: createGetHistoricalTradeRecords,
  queryKeyPrefix: "HistoricalTradeRecordsQuery"
});
export const useGetIsOptedOutOfRewards = buildUseQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  builderQueryFn: createGetIsOptedOutOfRewards,
  queryKeyPrefix: "IsOptedOutOfRewardsQuery"
});
export const useGetOptedOutOfRewardsAccounts = buildUseQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  builderQueryFn: createGetOptedOutOfRewardsAccounts,
  queryKeyPrefix: "OptedOutOfRewardsAccountsQuery"
});
export const useGetMarketVolatility = buildUseQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  builderQueryFn: createGetMarketVolatility,
  queryKeyPrefix: "MarketVolatilityQuery"
});
export const useGetBinaryOptionsMarkets = buildUseQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  builderQueryFn: createGetBinaryOptionsMarkets,
  queryKeyPrefix: "BinaryOptionsMarketsQuery"
});
export const useGetTraderDerivativeConditionalOrders = buildUseQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  builderQueryFn: createGetTraderDerivativeConditionalOrders,
  queryKeyPrefix: "TraderDerivativeConditionalOrdersQuery"
});
export const useGetMarketAtomicExecutionFeeMultiplier = buildUseQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  builderQueryFn: createGetMarketAtomicExecutionFeeMultiplier,
  queryKeyPrefix: "MarketAtomicExecutionFeeMultiplierQuery"
});
export const useGetActiveStakeGrant = buildUseQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  builderQueryFn: createGetActiveStakeGrant,
  queryKeyPrefix: "ActiveStakeGrantQuery"
});
export const useGetGrantAuthorization = buildUseQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  builderQueryFn: createGetGrantAuthorization,
  queryKeyPrefix: "GrantAuthorizationQuery"
});
export const useGetGrantAuthorizations = buildUseQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  builderQueryFn: createGetGrantAuthorizations,
  queryKeyPrefix: "GrantAuthorizationsQuery"
});