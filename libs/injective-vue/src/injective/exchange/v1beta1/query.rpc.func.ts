import { buildQuery } from "../../../helper-func-types";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse } from "./query";
export const getQueryExchangeParams = buildQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  encode: QueryExchangeParamsRequest.encode,
  decode: QueryExchangeParamsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "QueryExchangeParams"
});
export const getSubaccountDeposits = buildQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  encode: QuerySubaccountDepositsRequest.encode,
  decode: QuerySubaccountDepositsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountDeposits"
});
export const getSubaccountDeposit = buildQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  encode: QuerySubaccountDepositRequest.encode,
  decode: QuerySubaccountDepositResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountDeposit"
});
export const getExchangeBalances = buildQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  encode: QueryExchangeBalancesRequest.encode,
  decode: QueryExchangeBalancesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExchangeBalances"
});
export const getAggregateVolume = buildQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  encode: QueryAggregateVolumeRequest.encode,
  decode: QueryAggregateVolumeResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateVolume"
});
export const getAggregateVolumes = buildQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  encode: QueryAggregateVolumesRequest.encode,
  decode: QueryAggregateVolumesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateVolumes"
});
export const getAggregateMarketVolume = buildQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  encode: QueryAggregateMarketVolumeRequest.encode,
  decode: QueryAggregateMarketVolumeResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateMarketVolume"
});
export const getAggregateMarketVolumes = buildQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  encode: QueryAggregateMarketVolumesRequest.encode,
  decode: QueryAggregateMarketVolumesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateMarketVolumes"
});
export const getDenomDecimal = buildQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  encode: QueryDenomDecimalRequest.encode,
  decode: QueryDenomDecimalResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DenomDecimal"
});
export const getDenomDecimals = buildQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  encode: QueryDenomDecimalsRequest.encode,
  decode: QueryDenomDecimalsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DenomDecimals"
});
export const getSpotMarkets = buildQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  encode: QuerySpotMarketsRequest.encode,
  decode: QuerySpotMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMarkets"
});
export const getSpotMarket = buildQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  encode: QuerySpotMarketRequest.encode,
  decode: QuerySpotMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMarket"
});
export const getFullSpotMarkets = buildQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  encode: QueryFullSpotMarketsRequest.encode,
  decode: QueryFullSpotMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FullSpotMarkets"
});
export const getFullSpotMarket = buildQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  encode: QueryFullSpotMarketRequest.encode,
  decode: QueryFullSpotMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FullSpotMarket"
});
export const getSpotOrderbook = buildQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  encode: QuerySpotOrderbookRequest.encode,
  decode: QuerySpotOrderbookResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotOrderbook"
});
export const getTraderSpotOrders = buildQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  encode: QueryTraderSpotOrdersRequest.encode,
  decode: QueryTraderSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderSpotOrders"
});
export const getAccountAddressSpotOrders = buildQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  encode: QueryAccountAddressSpotOrdersRequest.encode,
  decode: QueryAccountAddressSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AccountAddressSpotOrders"
});
export const getSpotOrdersByHashes = buildQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  encode: QuerySpotOrdersByHashesRequest.encode,
  decode: QuerySpotOrdersByHashesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotOrdersByHashes"
});
export const getSubaccountOrders = buildQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  encode: QuerySubaccountOrdersRequest.encode,
  decode: QuerySubaccountOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountOrders"
});
export const getTraderSpotTransientOrders = buildQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  encode: QueryTraderSpotOrdersRequest.encode,
  decode: QueryTraderSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderSpotTransientOrders"
});
export const getSpotMidPriceAndTOB = buildQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  encode: QuerySpotMidPriceAndTOBRequest.encode,
  decode: QuerySpotMidPriceAndTOBResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMidPriceAndTOB"
});
export const getDerivativeMidPriceAndTOB = buildQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  encode: QueryDerivativeMidPriceAndTOBRequest.encode,
  decode: QueryDerivativeMidPriceAndTOBResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMidPriceAndTOB"
});
export const getDerivativeOrderbook = buildQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  encode: QueryDerivativeOrderbookRequest.encode,
  decode: QueryDerivativeOrderbookResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeOrderbook"
});
export const getTraderDerivativeOrders = buildQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  encode: QueryTraderDerivativeOrdersRequest.encode,
  decode: QueryTraderDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeOrders"
});
export const getAccountAddressDerivativeOrders = buildQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  encode: QueryAccountAddressDerivativeOrdersRequest.encode,
  decode: QueryAccountAddressDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AccountAddressDerivativeOrders"
});
export const getDerivativeOrdersByHashes = buildQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  encode: QueryDerivativeOrdersByHashesRequest.encode,
  decode: QueryDerivativeOrdersByHashesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeOrdersByHashes"
});
export const getTraderDerivativeTransientOrders = buildQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  encode: QueryTraderDerivativeOrdersRequest.encode,
  decode: QueryTraderDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeTransientOrders"
});
export const getDerivativeMarkets = buildQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  encode: QueryDerivativeMarketsRequest.encode,
  decode: QueryDerivativeMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarkets"
});
export const getDerivativeMarket = buildQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  encode: QueryDerivativeMarketRequest.encode,
  decode: QueryDerivativeMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarket"
});
export const getDerivativeMarketAddress = buildQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  encode: QueryDerivativeMarketAddressRequest.encode,
  decode: QueryDerivativeMarketAddressResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarketAddress"
});
export const getSubaccountTradeNonce = buildQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  encode: QuerySubaccountTradeNonceRequest.encode,
  decode: QuerySubaccountTradeNonceResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountTradeNonce"
});
export const getExchangeModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExchangeModuleState"
});
export const getPositions = buildQuery<QueryPositionsRequest, QueryPositionsResponse>({
  encode: QueryPositionsRequest.encode,
  decode: QueryPositionsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "Positions"
});
export const getSubaccountPositions = buildQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  encode: QuerySubaccountPositionsRequest.encode,
  decode: QuerySubaccountPositionsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountPositions"
});
export const getSubaccountPositionInMarket = buildQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  encode: QuerySubaccountPositionInMarketRequest.encode,
  decode: QuerySubaccountPositionInMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountPositionInMarket"
});
export const getSubaccountEffectivePositionInMarket = buildQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  encode: QuerySubaccountEffectivePositionInMarketRequest.encode,
  decode: QuerySubaccountEffectivePositionInMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountEffectivePositionInMarket"
});
export const getPerpetualMarketInfo = buildQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  encode: QueryPerpetualMarketInfoRequest.encode,
  decode: QueryPerpetualMarketInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PerpetualMarketInfo"
});
export const getExpiryFuturesMarketInfo = buildQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  encode: QueryExpiryFuturesMarketInfoRequest.encode,
  decode: QueryExpiryFuturesMarketInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExpiryFuturesMarketInfo"
});
export const getPerpetualMarketFunding = buildQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  encode: QueryPerpetualMarketFundingRequest.encode,
  decode: QueryPerpetualMarketFundingResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PerpetualMarketFunding"
});
export const getSubaccountOrderMetadata = buildQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  encode: QuerySubaccountOrderMetadataRequest.encode,
  decode: QuerySubaccountOrderMetadataResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountOrderMetadata"
});
export const getTradeRewardPoints = buildQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  encode: QueryTradeRewardPointsRequest.encode,
  decode: QueryTradeRewardPointsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TradeRewardPoints"
});
export const getPendingTradeRewardPoints = buildQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  encode: QueryTradeRewardPointsRequest.encode,
  decode: QueryTradeRewardPointsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PendingTradeRewardPoints"
});
export const getTradeRewardCampaign = buildQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  encode: QueryTradeRewardCampaignRequest.encode,
  decode: QueryTradeRewardCampaignResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TradeRewardCampaign"
});
export const getFeeDiscountAccountInfo = buildQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  encode: QueryFeeDiscountAccountInfoRequest.encode,
  decode: QueryFeeDiscountAccountInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountAccountInfo"
});
export const getFeeDiscountSchedule = buildQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  encode: QueryFeeDiscountScheduleRequest.encode,
  decode: QueryFeeDiscountScheduleResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountSchedule"
});
export const getBalanceMismatches = buildQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  encode: QueryBalanceMismatchesRequest.encode,
  decode: QueryBalanceMismatchesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BalanceMismatches"
});
export const getBalanceWithBalanceHolds = buildQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  encode: QueryBalanceWithBalanceHoldsRequest.encode,
  decode: QueryBalanceWithBalanceHoldsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BalanceWithBalanceHolds"
});
export const getFeeDiscountTierStatistics = buildQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  encode: QueryFeeDiscountTierStatisticsRequest.encode,
  decode: QueryFeeDiscountTierStatisticsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountTierStatistics"
});
export const getMitoVaultInfos = buildQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  encode: MitoVaultInfosRequest.encode,
  decode: MitoVaultInfosResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MitoVaultInfos"
});
export const getQueryMarketIDFromVault = buildQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  encode: QueryMarketIDFromVaultRequest.encode,
  decode: QueryMarketIDFromVaultResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "QueryMarketIDFromVault"
});
export const getHistoricalTradeRecords = buildQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  encode: QueryHistoricalTradeRecordsRequest.encode,
  decode: QueryHistoricalTradeRecordsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "HistoricalTradeRecords"
});
export const getIsOptedOutOfRewards = buildQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  encode: QueryIsOptedOutOfRewardsRequest.encode,
  decode: QueryIsOptedOutOfRewardsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "IsOptedOutOfRewards"
});
export const getOptedOutOfRewardsAccounts = buildQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  encode: QueryOptedOutOfRewardsAccountsRequest.encode,
  decode: QueryOptedOutOfRewardsAccountsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "OptedOutOfRewardsAccounts"
});
export const getMarketVolatility = buildQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  encode: QueryMarketVolatilityRequest.encode,
  decode: QueryMarketVolatilityResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MarketVolatility"
});
export const getBinaryOptionsMarkets = buildQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  encode: QueryBinaryMarketsRequest.encode,
  decode: QueryBinaryMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BinaryOptionsMarkets"
});
export const getTraderDerivativeConditionalOrders = buildQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  encode: QueryTraderDerivativeConditionalOrdersRequest.encode,
  decode: QueryTraderDerivativeConditionalOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeConditionalOrders"
});
export const getMarketAtomicExecutionFeeMultiplier = buildQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  encode: QueryMarketAtomicExecutionFeeMultiplierRequest.encode,
  decode: QueryMarketAtomicExecutionFeeMultiplierResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MarketAtomicExecutionFeeMultiplier"
});
export const getActiveStakeGrant = buildQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  encode: QueryActiveStakeGrantRequest.encode,
  decode: QueryActiveStakeGrantResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ActiveStakeGrant"
});
export const getGrantAuthorization = buildQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  encode: QueryGrantAuthorizationRequest.encode,
  decode: QueryGrantAuthorizationResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "GrantAuthorization"
});
export const getGrantAuthorizations = buildQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  encode: QueryGrantAuthorizationsRequest.encode,
  decode: QueryGrantAuthorizationsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "GrantAuthorizations"
});