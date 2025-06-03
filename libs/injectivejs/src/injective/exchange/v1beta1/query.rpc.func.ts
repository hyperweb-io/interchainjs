import { buildQuery } from "../../../helper-func-types";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse } from "./query";
/* Retrieves exchange params */
export const getQueryExchangeParams = buildQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  encode: QueryExchangeParamsRequest.encode,
  decode: QueryExchangeParamsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "QueryExchangeParams",
  deps: [QueryExchangeParamsRequest, QueryExchangeParamsResponse]
});
/* Retrieves a Subaccount's Deposits */
export const getSubaccountDeposits = buildQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  encode: QuerySubaccountDepositsRequest.encode,
  decode: QuerySubaccountDepositsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountDeposits",
  deps: [QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse]
});
/* Retrieves a Subaccount's Deposits */
export const getSubaccountDeposit = buildQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  encode: QuerySubaccountDepositRequest.encode,
  decode: QuerySubaccountDepositResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountDeposit",
  deps: [QuerySubaccountDepositRequest, QuerySubaccountDepositResponse]
});
/* Retrieves all of the balances of all users on the exchange. */
export const getExchangeBalances = buildQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  encode: QueryExchangeBalancesRequest.encode,
  decode: QueryExchangeBalancesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExchangeBalances",
  deps: [QueryExchangeBalancesRequest, QueryExchangeBalancesResponse]
});
/* Retrieves the aggregate volumes for the specified account or subaccount */
export const getAggregateVolume = buildQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  encode: QueryAggregateVolumeRequest.encode,
  decode: QueryAggregateVolumeResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateVolume",
  deps: [QueryAggregateVolumeRequest, QueryAggregateVolumeResponse]
});
/* Retrieves the aggregate volumes for specified accounts */
export const getAggregateVolumes = buildQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  encode: QueryAggregateVolumesRequest.encode,
  decode: QueryAggregateVolumesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateVolumes",
  deps: [QueryAggregateVolumesRequest, QueryAggregateVolumesResponse]
});
/* Retrieves the aggregate volume for the specified market */
export const getAggregateMarketVolume = buildQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  encode: QueryAggregateMarketVolumeRequest.encode,
  decode: QueryAggregateMarketVolumeResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateMarketVolume",
  deps: [QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse]
});
/* Retrieves the aggregate market volumes for specified markets */
export const getAggregateMarketVolumes = buildQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  encode: QueryAggregateMarketVolumesRequest.encode,
  decode: QueryAggregateMarketVolumesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateMarketVolumes",
  deps: [QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse]
});
/* Retrieves the denom decimals for a denom. */
export const getDenomDecimal = buildQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  encode: QueryDenomDecimalRequest.encode,
  decode: QueryDenomDecimalResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DenomDecimal",
  deps: [QueryDenomDecimalRequest, QueryDenomDecimalResponse]
});
/* Retrieves the denom decimals for multiple denoms. Returns all denom
 decimals if unspecified. */
export const getDenomDecimals = buildQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  encode: QueryDenomDecimalsRequest.encode,
  decode: QueryDenomDecimalsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DenomDecimals",
  deps: [QueryDenomDecimalsRequest, QueryDenomDecimalsResponse]
});
/* Retrieves a list of spot markets. */
export const getSpotMarkets = buildQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  encode: QuerySpotMarketsRequest.encode,
  decode: QuerySpotMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMarkets",
  deps: [QuerySpotMarketsRequest, QuerySpotMarketsResponse]
});
/* Retrieves a spot market by ticker */
export const getSpotMarket = buildQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  encode: QuerySpotMarketRequest.encode,
  decode: QuerySpotMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMarket",
  deps: [QuerySpotMarketRequest, QuerySpotMarketResponse]
});
/* Retrieves a list of spot markets with extra information. */
export const getFullSpotMarkets = buildQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  encode: QueryFullSpotMarketsRequest.encode,
  decode: QueryFullSpotMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FullSpotMarkets",
  deps: [QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse]
});
/* Retrieves a spot market with extra information. */
export const getFullSpotMarket = buildQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  encode: QueryFullSpotMarketRequest.encode,
  decode: QueryFullSpotMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FullSpotMarket",
  deps: [QueryFullSpotMarketRequest, QueryFullSpotMarketResponse]
});
/* Retrieves a spot market's orderbook by marketID */
export const getSpotOrderbook = buildQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  encode: QuerySpotOrderbookRequest.encode,
  decode: QuerySpotOrderbookResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotOrderbook",
  deps: [QuerySpotOrderbookRequest, QuerySpotOrderbookResponse]
});
/* Retrieves a trader's spot orders */
export const getTraderSpotOrders = buildQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  encode: QueryTraderSpotOrdersRequest.encode,
  decode: QueryTraderSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderSpotOrders",
  deps: [QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse]
});
/* Retrieves all account address spot orders */
export const getAccountAddressSpotOrders = buildQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  encode: QueryAccountAddressSpotOrdersRequest.encode,
  decode: QueryAccountAddressSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AccountAddressSpotOrders",
  deps: [QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse]
});
/* Retrieves spot orders corresponding to specified order hashes for a given
 subaccountID and marketID */
export const getSpotOrdersByHashes = buildQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  encode: QuerySpotOrdersByHashesRequest.encode,
  decode: QuerySpotOrdersByHashesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotOrdersByHashes",
  deps: [QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse]
});
/* Retrieves subaccount's orders */
export const getSubaccountOrders = buildQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  encode: QuerySubaccountOrdersRequest.encode,
  decode: QuerySubaccountOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountOrders",
  deps: [QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse]
});
/* Retrieves a trader's transient spot orders */
export const getTraderSpotTransientOrders = buildQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  encode: QueryTraderSpotOrdersRequest.encode,
  decode: QueryTraderSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderSpotTransientOrders",
  deps: [QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse]
});
/* Retrieves a spot market's mid-price */
export const getSpotMidPriceAndTOB = buildQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  encode: QuerySpotMidPriceAndTOBRequest.encode,
  decode: QuerySpotMidPriceAndTOBResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMidPriceAndTOB",
  deps: [QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse]
});
/* Retrieves a derivative market's mid-price */
export const getDerivativeMidPriceAndTOB = buildQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  encode: QueryDerivativeMidPriceAndTOBRequest.encode,
  decode: QueryDerivativeMidPriceAndTOBResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMidPriceAndTOB",
  deps: [QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse]
});
/* Retrieves a derivative market's orderbook by marketID */
export const getDerivativeOrderbook = buildQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  encode: QueryDerivativeOrderbookRequest.encode,
  decode: QueryDerivativeOrderbookResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeOrderbook",
  deps: [QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse]
});
/* Retrieves a trader's derivative orders */
export const getTraderDerivativeOrders = buildQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  encode: QueryTraderDerivativeOrdersRequest.encode,
  decode: QueryTraderDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeOrders",
  deps: [QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse]
});
/* Retrieves all account address derivative orders */
export const getAccountAddressDerivativeOrders = buildQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  encode: QueryAccountAddressDerivativeOrdersRequest.encode,
  decode: QueryAccountAddressDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AccountAddressDerivativeOrders",
  deps: [QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse]
});
/* Retrieves a trader's derivative orders */
export const getDerivativeOrdersByHashes = buildQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  encode: QueryDerivativeOrdersByHashesRequest.encode,
  decode: QueryDerivativeOrdersByHashesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeOrdersByHashes",
  deps: [QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse]
});
/* Retrieves a trader's transient derivative orders */
export const getTraderDerivativeTransientOrders = buildQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  encode: QueryTraderDerivativeOrdersRequest.encode,
  decode: QueryTraderDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeTransientOrders",
  deps: [QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse]
});
/* Retrieves a list of derivative markets. */
export const getDerivativeMarkets = buildQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  encode: QueryDerivativeMarketsRequest.encode,
  decode: QueryDerivativeMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarkets",
  deps: [QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse]
});
/* Retrieves a derivative market by ticker */
export const getDerivativeMarket = buildQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  encode: QueryDerivativeMarketRequest.encode,
  decode: QueryDerivativeMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarket",
  deps: [QueryDerivativeMarketRequest, QueryDerivativeMarketResponse]
});
/* Retrieves a derivative market's corresponding address for fees that
 contribute to the market's insurance fund */
export const getDerivativeMarketAddress = buildQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  encode: QueryDerivativeMarketAddressRequest.encode,
  decode: QueryDerivativeMarketAddressResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarketAddress",
  deps: [QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse]
});
/* Retrieves a subaccount's trade nonce */
export const getSubaccountTradeNonce = buildQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  encode: QuerySubaccountTradeNonceRequest.encode,
  decode: QuerySubaccountTradeNonceResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountTradeNonce",
  deps: [QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse]
});
/* Retrieves the entire exchange module's state */
export const getExchangeModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExchangeModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});
/* Retrieves the entire exchange module's positions */
export const getPositions = buildQuery<QueryPositionsRequest, QueryPositionsResponse>({
  encode: QueryPositionsRequest.encode,
  decode: QueryPositionsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "Positions",
  deps: [QueryPositionsRequest, QueryPositionsResponse]
});
/* Retrieves subaccount's positions */
export const getSubaccountPositions = buildQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  encode: QuerySubaccountPositionsRequest.encode,
  decode: QuerySubaccountPositionsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountPositions",
  deps: [QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse]
});
/* Retrieves subaccount's position in market */
export const getSubaccountPositionInMarket = buildQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  encode: QuerySubaccountPositionInMarketRequest.encode,
  decode: QuerySubaccountPositionInMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountPositionInMarket",
  deps: [QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse]
});
/* Retrieves subaccount's position in market */
export const getSubaccountEffectivePositionInMarket = buildQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  encode: QuerySubaccountEffectivePositionInMarketRequest.encode,
  decode: QuerySubaccountEffectivePositionInMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountEffectivePositionInMarket",
  deps: [QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse]
});
/* Retrieves perpetual market info */
export const getPerpetualMarketInfo = buildQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  encode: QueryPerpetualMarketInfoRequest.encode,
  decode: QueryPerpetualMarketInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PerpetualMarketInfo",
  deps: [QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse]
});
/* Retrieves expiry market info */
export const getExpiryFuturesMarketInfo = buildQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  encode: QueryExpiryFuturesMarketInfoRequest.encode,
  decode: QueryExpiryFuturesMarketInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExpiryFuturesMarketInfo",
  deps: [QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse]
});
/* Retrieves perpetual market funding */
export const getPerpetualMarketFunding = buildQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  encode: QueryPerpetualMarketFundingRequest.encode,
  decode: QueryPerpetualMarketFundingResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PerpetualMarketFunding",
  deps: [QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse]
});
/* Retrieves subaccount's order metadata */
export const getSubaccountOrderMetadata = buildQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  encode: QuerySubaccountOrderMetadataRequest.encode,
  decode: QuerySubaccountOrderMetadataResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountOrderMetadata",
  deps: [QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse]
});
/* Retrieves the account and total trade rewards points */
export const getTradeRewardPoints = buildQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  encode: QueryTradeRewardPointsRequest.encode,
  decode: QueryTradeRewardPointsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TradeRewardPoints",
  deps: [QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse]
});
/* Retrieves the pending account and total trade rewards points */
export const getPendingTradeRewardPoints = buildQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  encode: QueryTradeRewardPointsRequest.encode,
  decode: QueryTradeRewardPointsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PendingTradeRewardPoints",
  deps: [QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse]
});
/* Retrieves the trade reward campaign */
export const getTradeRewardCampaign = buildQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  encode: QueryTradeRewardCampaignRequest.encode,
  decode: QueryTradeRewardCampaignResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TradeRewardCampaign",
  deps: [QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse]
});
/* Retrieves the account's fee discount info */
export const getFeeDiscountAccountInfo = buildQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  encode: QueryFeeDiscountAccountInfoRequest.encode,
  decode: QueryFeeDiscountAccountInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountAccountInfo",
  deps: [QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse]
});
/* Retrieves the fee discount schedule */
export const getFeeDiscountSchedule = buildQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  encode: QueryFeeDiscountScheduleRequest.encode,
  decode: QueryFeeDiscountScheduleResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountSchedule",
  deps: [QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse]
});
/* Retrieves mismatches between available vs. total balance */
export const getBalanceMismatches = buildQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  encode: QueryBalanceMismatchesRequest.encode,
  decode: QueryBalanceMismatchesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BalanceMismatches",
  deps: [QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse]
});
/* Retrieves available and total balances with balance holds */
export const getBalanceWithBalanceHolds = buildQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  encode: QueryBalanceWithBalanceHoldsRequest.encode,
  decode: QueryBalanceWithBalanceHoldsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BalanceWithBalanceHolds",
  deps: [QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse]
});
/* Retrieves fee discount tier stats */
export const getFeeDiscountTierStatistics = buildQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  encode: QueryFeeDiscountTierStatisticsRequest.encode,
  decode: QueryFeeDiscountTierStatisticsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountTierStatistics",
  deps: [QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse]
});
/* Retrieves market making pool info */
export const getMitoVaultInfos = buildQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  encode: MitoVaultInfosRequest.encode,
  decode: MitoVaultInfosResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MitoVaultInfos",
  deps: [MitoVaultInfosRequest, MitoVaultInfosResponse]
});
/* QueryMarketIDFromVault returns the market ID for a given vault subaccount
 ID */
export const getQueryMarketIDFromVault = buildQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  encode: QueryMarketIDFromVaultRequest.encode,
  decode: QueryMarketIDFromVaultResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "QueryMarketIDFromVault",
  deps: [QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse]
});
/* Retrieves historical trade records for a given market ID */
export const getHistoricalTradeRecords = buildQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  encode: QueryHistoricalTradeRecordsRequest.encode,
  decode: QueryHistoricalTradeRecordsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "HistoricalTradeRecords",
  deps: [QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse]
});
/* Retrieves if the account is opted out of rewards */
export const getIsOptedOutOfRewards = buildQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  encode: QueryIsOptedOutOfRewardsRequest.encode,
  decode: QueryIsOptedOutOfRewardsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "IsOptedOutOfRewards",
  deps: [QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse]
});
/* Retrieves all accounts opted out of rewards */
export const getOptedOutOfRewardsAccounts = buildQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  encode: QueryOptedOutOfRewardsAccountsRequest.encode,
  decode: QueryOptedOutOfRewardsAccountsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "OptedOutOfRewardsAccounts",
  deps: [QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse]
});
/* MarketVolatility computes the volatility for spot and derivative markets
 trading history. */
export const getMarketVolatility = buildQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  encode: QueryMarketVolatilityRequest.encode,
  decode: QueryMarketVolatilityResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MarketVolatility",
  deps: [QueryMarketVolatilityRequest, QueryMarketVolatilityResponse]
});
/* Retrieves a spot market's orderbook by marketID */
export const getBinaryOptionsMarkets = buildQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  encode: QueryBinaryMarketsRequest.encode,
  decode: QueryBinaryMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BinaryOptionsMarkets",
  deps: [QueryBinaryMarketsRequest, QueryBinaryMarketsResponse]
});
/* Retrieves a trader's derivative conditional orders */
export const getTraderDerivativeConditionalOrders = buildQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  encode: QueryTraderDerivativeConditionalOrdersRequest.encode,
  decode: QueryTraderDerivativeConditionalOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeConditionalOrders",
  deps: [QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse]
});
export const getMarketAtomicExecutionFeeMultiplier = buildQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  encode: QueryMarketAtomicExecutionFeeMultiplierRequest.encode,
  decode: QueryMarketAtomicExecutionFeeMultiplierResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MarketAtomicExecutionFeeMultiplier",
  deps: [QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse]
});
/* Retrieves the active stake grant for a grantee */
export const getActiveStakeGrant = buildQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  encode: QueryActiveStakeGrantRequest.encode,
  decode: QueryActiveStakeGrantResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ActiveStakeGrant",
  deps: [QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse]
});
/* Retrieves the grant authorization amount for a granter and grantee */
export const getGrantAuthorization = buildQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  encode: QueryGrantAuthorizationRequest.encode,
  decode: QueryGrantAuthorizationResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "GrantAuthorization",
  deps: [QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse]
});
/* Retrieves the grant authorization amount for a granter and grantee */
export const getGrantAuthorizations = buildQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  encode: QueryGrantAuthorizationsRequest.encode,
  decode: QueryGrantAuthorizationsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "GrantAuthorizations",
  deps: [QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse]
});