import { buildQuery } from "../../../helper-func-types";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse } from "./query";
/**
 * Retrieves exchange params
 * @name getQueryExchangeParams
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.QueryExchangeParams
 */
export const getQueryExchangeParams = buildQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  encode: QueryExchangeParamsRequest.encode,
  decode: QueryExchangeParamsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "QueryExchangeParams",
  deps: [QueryExchangeParamsRequest, QueryExchangeParamsResponse]
});
/**
 * Retrieves a Subaccount's Deposits
 * @name getSubaccountDeposits
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountDeposits
 */
export const getSubaccountDeposits = buildQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  encode: QuerySubaccountDepositsRequest.encode,
  decode: QuerySubaccountDepositsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountDeposits",
  deps: [QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse]
});
/**
 * Retrieves a Subaccount's Deposits
 * @name getSubaccountDeposit
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountDeposit
 */
export const getSubaccountDeposit = buildQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  encode: QuerySubaccountDepositRequest.encode,
  decode: QuerySubaccountDepositResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountDeposit",
  deps: [QuerySubaccountDepositRequest, QuerySubaccountDepositResponse]
});
/**
 * Retrieves all of the balances of all users on the exchange.
 * @name getExchangeBalances
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ExchangeBalances
 */
export const getExchangeBalances = buildQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  encode: QueryExchangeBalancesRequest.encode,
  decode: QueryExchangeBalancesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExchangeBalances",
  deps: [QueryExchangeBalancesRequest, QueryExchangeBalancesResponse]
});
/**
 * Retrieves the aggregate volumes for the specified account or subaccount
 * @name getAggregateVolume
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AggregateVolume
 */
export const getAggregateVolume = buildQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  encode: QueryAggregateVolumeRequest.encode,
  decode: QueryAggregateVolumeResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateVolume",
  deps: [QueryAggregateVolumeRequest, QueryAggregateVolumeResponse]
});
/**
 * Retrieves the aggregate volumes for specified accounts
 * @name getAggregateVolumes
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AggregateVolumes
 */
export const getAggregateVolumes = buildQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  encode: QueryAggregateVolumesRequest.encode,
  decode: QueryAggregateVolumesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateVolumes",
  deps: [QueryAggregateVolumesRequest, QueryAggregateVolumesResponse]
});
/**
 * Retrieves the aggregate volume for the specified market
 * @name getAggregateMarketVolume
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AggregateMarketVolume
 */
export const getAggregateMarketVolume = buildQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  encode: QueryAggregateMarketVolumeRequest.encode,
  decode: QueryAggregateMarketVolumeResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateMarketVolume",
  deps: [QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse]
});
/**
 * Retrieves the aggregate market volumes for specified markets
 * @name getAggregateMarketVolumes
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AggregateMarketVolumes
 */
export const getAggregateMarketVolumes = buildQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  encode: QueryAggregateMarketVolumesRequest.encode,
  decode: QueryAggregateMarketVolumesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateMarketVolumes",
  deps: [QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse]
});
/**
 * Retrieves the denom decimals for a denom.
 * @name getDenomDecimal
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DenomDecimal
 */
export const getDenomDecimal = buildQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  encode: QueryDenomDecimalRequest.encode,
  decode: QueryDenomDecimalResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DenomDecimal",
  deps: [QueryDenomDecimalRequest, QueryDenomDecimalResponse]
});
/**
 * Retrieves the denom decimals for multiple denoms. Returns all denom
 * decimals if unspecified.
 * @name getDenomDecimals
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DenomDecimals
 */
export const getDenomDecimals = buildQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  encode: QueryDenomDecimalsRequest.encode,
  decode: QueryDenomDecimalsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DenomDecimals",
  deps: [QueryDenomDecimalsRequest, QueryDenomDecimalsResponse]
});
/**
 * Retrieves a list of spot markets.
 * @name getSpotMarkets
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotMarkets
 */
export const getSpotMarkets = buildQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  encode: QuerySpotMarketsRequest.encode,
  decode: QuerySpotMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMarkets",
  deps: [QuerySpotMarketsRequest, QuerySpotMarketsResponse]
});
/**
 * Retrieves a spot market by ticker
 * @name getSpotMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotMarket
 */
export const getSpotMarket = buildQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  encode: QuerySpotMarketRequest.encode,
  decode: QuerySpotMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMarket",
  deps: [QuerySpotMarketRequest, QuerySpotMarketResponse]
});
/**
 * Retrieves a list of spot markets with extra information.
 * @name getFullSpotMarkets
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FullSpotMarkets
 */
export const getFullSpotMarkets = buildQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  encode: QueryFullSpotMarketsRequest.encode,
  decode: QueryFullSpotMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FullSpotMarkets",
  deps: [QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse]
});
/**
 * Retrieves a spot market with extra information.
 * @name getFullSpotMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FullSpotMarket
 */
export const getFullSpotMarket = buildQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  encode: QueryFullSpotMarketRequest.encode,
  decode: QueryFullSpotMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FullSpotMarket",
  deps: [QueryFullSpotMarketRequest, QueryFullSpotMarketResponse]
});
/**
 * Retrieves a spot market's orderbook by marketID
 * @name getSpotOrderbook
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotOrderbook
 */
export const getSpotOrderbook = buildQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  encode: QuerySpotOrderbookRequest.encode,
  decode: QuerySpotOrderbookResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotOrderbook",
  deps: [QuerySpotOrderbookRequest, QuerySpotOrderbookResponse]
});
/**
 * Retrieves a trader's spot orders
 * @name getTraderSpotOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderSpotOrders
 */
export const getTraderSpotOrders = buildQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  encode: QueryTraderSpotOrdersRequest.encode,
  decode: QueryTraderSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderSpotOrders",
  deps: [QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse]
});
/**
 * Retrieves all account address spot orders
 * @name getAccountAddressSpotOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AccountAddressSpotOrders
 */
export const getAccountAddressSpotOrders = buildQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  encode: QueryAccountAddressSpotOrdersRequest.encode,
  decode: QueryAccountAddressSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AccountAddressSpotOrders",
  deps: [QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse]
});
/**
 * Retrieves spot orders corresponding to specified order hashes for a given
 * subaccountID and marketID
 * @name getSpotOrdersByHashes
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotOrdersByHashes
 */
export const getSpotOrdersByHashes = buildQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  encode: QuerySpotOrdersByHashesRequest.encode,
  decode: QuerySpotOrdersByHashesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotOrdersByHashes",
  deps: [QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse]
});
/**
 * Retrieves subaccount's orders
 * @name getSubaccountOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountOrders
 */
export const getSubaccountOrders = buildQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  encode: QuerySubaccountOrdersRequest.encode,
  decode: QuerySubaccountOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountOrders",
  deps: [QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse]
});
/**
 * Retrieves a trader's transient spot orders
 * @name getTraderSpotTransientOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderSpotTransientOrders
 */
export const getTraderSpotTransientOrders = buildQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  encode: QueryTraderSpotOrdersRequest.encode,
  decode: QueryTraderSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderSpotTransientOrders",
  deps: [QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse]
});
/**
 * Retrieves a spot market's mid-price
 * @name getSpotMidPriceAndTOB
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SpotMidPriceAndTOB
 */
export const getSpotMidPriceAndTOB = buildQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  encode: QuerySpotMidPriceAndTOBRequest.encode,
  decode: QuerySpotMidPriceAndTOBResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMidPriceAndTOB",
  deps: [QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse]
});
/**
 * Retrieves a derivative market's mid-price
 * @name getDerivativeMidPriceAndTOB
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeMidPriceAndTOB
 */
export const getDerivativeMidPriceAndTOB = buildQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  encode: QueryDerivativeMidPriceAndTOBRequest.encode,
  decode: QueryDerivativeMidPriceAndTOBResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMidPriceAndTOB",
  deps: [QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse]
});
/**
 * Retrieves a derivative market's orderbook by marketID
 * @name getDerivativeOrderbook
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeOrderbook
 */
export const getDerivativeOrderbook = buildQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  encode: QueryDerivativeOrderbookRequest.encode,
  decode: QueryDerivativeOrderbookResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeOrderbook",
  deps: [QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse]
});
/**
 * Retrieves a trader's derivative orders
 * @name getTraderDerivativeOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderDerivativeOrders
 */
export const getTraderDerivativeOrders = buildQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  encode: QueryTraderDerivativeOrdersRequest.encode,
  decode: QueryTraderDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeOrders",
  deps: [QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse]
});
/**
 * Retrieves all account address derivative orders
 * @name getAccountAddressDerivativeOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.AccountAddressDerivativeOrders
 */
export const getAccountAddressDerivativeOrders = buildQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  encode: QueryAccountAddressDerivativeOrdersRequest.encode,
  decode: QueryAccountAddressDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AccountAddressDerivativeOrders",
  deps: [QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse]
});
/**
 * Retrieves a trader's derivative orders
 * @name getDerivativeOrdersByHashes
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeOrdersByHashes
 */
export const getDerivativeOrdersByHashes = buildQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  encode: QueryDerivativeOrdersByHashesRequest.encode,
  decode: QueryDerivativeOrdersByHashesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeOrdersByHashes",
  deps: [QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse]
});
/**
 * Retrieves a trader's transient derivative orders
 * @name getTraderDerivativeTransientOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderDerivativeTransientOrders
 */
export const getTraderDerivativeTransientOrders = buildQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  encode: QueryTraderDerivativeOrdersRequest.encode,
  decode: QueryTraderDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeTransientOrders",
  deps: [QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse]
});
/**
 * Retrieves a list of derivative markets.
 * @name getDerivativeMarkets
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeMarkets
 */
export const getDerivativeMarkets = buildQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  encode: QueryDerivativeMarketsRequest.encode,
  decode: QueryDerivativeMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarkets",
  deps: [QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse]
});
/**
 * Retrieves a derivative market by ticker
 * @name getDerivativeMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeMarket
 */
export const getDerivativeMarket = buildQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  encode: QueryDerivativeMarketRequest.encode,
  decode: QueryDerivativeMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarket",
  deps: [QueryDerivativeMarketRequest, QueryDerivativeMarketResponse]
});
/**
 * Retrieves a derivative market's corresponding address for fees that
 * contribute to the market's insurance fund
 * @name getDerivativeMarketAddress
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.DerivativeMarketAddress
 */
export const getDerivativeMarketAddress = buildQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  encode: QueryDerivativeMarketAddressRequest.encode,
  decode: QueryDerivativeMarketAddressResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarketAddress",
  deps: [QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse]
});
/**
 * Retrieves a subaccount's trade nonce
 * @name getSubaccountTradeNonce
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountTradeNonce
 */
export const getSubaccountTradeNonce = buildQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  encode: QuerySubaccountTradeNonceRequest.encode,
  decode: QuerySubaccountTradeNonceResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountTradeNonce",
  deps: [QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse]
});
/**
 * Retrieves the entire exchange module's state
 * @name getExchangeModuleState
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ExchangeModuleState
 */
export const getExchangeModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExchangeModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});
/**
 * Retrieves the entire exchange module's positions
 * @name getPositions
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.Positions
 */
export const getPositions = buildQuery<QueryPositionsRequest, QueryPositionsResponse>({
  encode: QueryPositionsRequest.encode,
  decode: QueryPositionsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "Positions",
  deps: [QueryPositionsRequest, QueryPositionsResponse]
});
/**
 * Retrieves subaccount's positions
 * @name getSubaccountPositions
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountPositions
 */
export const getSubaccountPositions = buildQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  encode: QuerySubaccountPositionsRequest.encode,
  decode: QuerySubaccountPositionsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountPositions",
  deps: [QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse]
});
/**
 * Retrieves subaccount's position in market
 * @name getSubaccountPositionInMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountPositionInMarket
 */
export const getSubaccountPositionInMarket = buildQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  encode: QuerySubaccountPositionInMarketRequest.encode,
  decode: QuerySubaccountPositionInMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountPositionInMarket",
  deps: [QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse]
});
/**
 * Retrieves subaccount's position in market
 * @name getSubaccountEffectivePositionInMarket
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountEffectivePositionInMarket
 */
export const getSubaccountEffectivePositionInMarket = buildQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  encode: QuerySubaccountEffectivePositionInMarketRequest.encode,
  decode: QuerySubaccountEffectivePositionInMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountEffectivePositionInMarket",
  deps: [QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse]
});
/**
 * Retrieves perpetual market info
 * @name getPerpetualMarketInfo
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.PerpetualMarketInfo
 */
export const getPerpetualMarketInfo = buildQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  encode: QueryPerpetualMarketInfoRequest.encode,
  decode: QueryPerpetualMarketInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PerpetualMarketInfo",
  deps: [QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse]
});
/**
 * Retrieves expiry market info
 * @name getExpiryFuturesMarketInfo
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ExpiryFuturesMarketInfo
 */
export const getExpiryFuturesMarketInfo = buildQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  encode: QueryExpiryFuturesMarketInfoRequest.encode,
  decode: QueryExpiryFuturesMarketInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExpiryFuturesMarketInfo",
  deps: [QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse]
});
/**
 * Retrieves perpetual market funding
 * @name getPerpetualMarketFunding
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.PerpetualMarketFunding
 */
export const getPerpetualMarketFunding = buildQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  encode: QueryPerpetualMarketFundingRequest.encode,
  decode: QueryPerpetualMarketFundingResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PerpetualMarketFunding",
  deps: [QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse]
});
/**
 * Retrieves subaccount's order metadata
 * @name getSubaccountOrderMetadata
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.SubaccountOrderMetadata
 */
export const getSubaccountOrderMetadata = buildQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  encode: QuerySubaccountOrderMetadataRequest.encode,
  decode: QuerySubaccountOrderMetadataResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountOrderMetadata",
  deps: [QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse]
});
/**
 * Retrieves the account and total trade rewards points
 * @name getTradeRewardPoints
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TradeRewardPoints
 */
export const getTradeRewardPoints = buildQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  encode: QueryTradeRewardPointsRequest.encode,
  decode: QueryTradeRewardPointsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TradeRewardPoints",
  deps: [QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse]
});
/**
 * Retrieves the pending account and total trade rewards points
 * @name getPendingTradeRewardPoints
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.PendingTradeRewardPoints
 */
export const getPendingTradeRewardPoints = buildQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  encode: QueryTradeRewardPointsRequest.encode,
  decode: QueryTradeRewardPointsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PendingTradeRewardPoints",
  deps: [QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse]
});
/**
 * Retrieves the trade reward campaign
 * @name getTradeRewardCampaign
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TradeRewardCampaign
 */
export const getTradeRewardCampaign = buildQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  encode: QueryTradeRewardCampaignRequest.encode,
  decode: QueryTradeRewardCampaignResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TradeRewardCampaign",
  deps: [QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse]
});
/**
 * Retrieves the account's fee discount info
 * @name getFeeDiscountAccountInfo
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FeeDiscountAccountInfo
 */
export const getFeeDiscountAccountInfo = buildQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  encode: QueryFeeDiscountAccountInfoRequest.encode,
  decode: QueryFeeDiscountAccountInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountAccountInfo",
  deps: [QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse]
});
/**
 * Retrieves the fee discount schedule
 * @name getFeeDiscountSchedule
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FeeDiscountSchedule
 */
export const getFeeDiscountSchedule = buildQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  encode: QueryFeeDiscountScheduleRequest.encode,
  decode: QueryFeeDiscountScheduleResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountSchedule",
  deps: [QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse]
});
/**
 * Retrieves mismatches between available vs. total balance
 * @name getBalanceMismatches
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BalanceMismatches
 */
export const getBalanceMismatches = buildQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  encode: QueryBalanceMismatchesRequest.encode,
  decode: QueryBalanceMismatchesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BalanceMismatches",
  deps: [QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse]
});
/**
 * Retrieves available and total balances with balance holds
 * @name getBalanceWithBalanceHolds
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BalanceWithBalanceHolds
 */
export const getBalanceWithBalanceHolds = buildQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  encode: QueryBalanceWithBalanceHoldsRequest.encode,
  decode: QueryBalanceWithBalanceHoldsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BalanceWithBalanceHolds",
  deps: [QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse]
});
/**
 * Retrieves fee discount tier stats
 * @name getFeeDiscountTierStatistics
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.FeeDiscountTierStatistics
 */
export const getFeeDiscountTierStatistics = buildQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  encode: QueryFeeDiscountTierStatisticsRequest.encode,
  decode: QueryFeeDiscountTierStatisticsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountTierStatistics",
  deps: [QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse]
});
/**
 * Retrieves market making pool info
 * @name getMitoVaultInfos
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.MitoVaultInfos
 */
export const getMitoVaultInfos = buildQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  encode: MitoVaultInfosRequest.encode,
  decode: MitoVaultInfosResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MitoVaultInfos",
  deps: [MitoVaultInfosRequest, MitoVaultInfosResponse]
});
/**
 * QueryMarketIDFromVault returns the market ID for a given vault subaccount
 * ID
 * @name getQueryMarketIDFromVault
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.QueryMarketIDFromVault
 */
export const getQueryMarketIDFromVault = buildQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  encode: QueryMarketIDFromVaultRequest.encode,
  decode: QueryMarketIDFromVaultResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "QueryMarketIDFromVault",
  deps: [QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse]
});
/**
 * Retrieves historical trade records for a given market ID
 * @name getHistoricalTradeRecords
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.HistoricalTradeRecords
 */
export const getHistoricalTradeRecords = buildQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  encode: QueryHistoricalTradeRecordsRequest.encode,
  decode: QueryHistoricalTradeRecordsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "HistoricalTradeRecords",
  deps: [QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse]
});
/**
 * Retrieves if the account is opted out of rewards
 * @name getIsOptedOutOfRewards
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.IsOptedOutOfRewards
 */
export const getIsOptedOutOfRewards = buildQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  encode: QueryIsOptedOutOfRewardsRequest.encode,
  decode: QueryIsOptedOutOfRewardsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "IsOptedOutOfRewards",
  deps: [QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse]
});
/**
 * Retrieves all accounts opted out of rewards
 * @name getOptedOutOfRewardsAccounts
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.OptedOutOfRewardsAccounts
 */
export const getOptedOutOfRewardsAccounts = buildQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  encode: QueryOptedOutOfRewardsAccountsRequest.encode,
  decode: QueryOptedOutOfRewardsAccountsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "OptedOutOfRewardsAccounts",
  deps: [QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse]
});
/**
 * MarketVolatility computes the volatility for spot and derivative markets
 * trading history.
 * @name getMarketVolatility
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.MarketVolatility
 */
export const getMarketVolatility = buildQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  encode: QueryMarketVolatilityRequest.encode,
  decode: QueryMarketVolatilityResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MarketVolatility",
  deps: [QueryMarketVolatilityRequest, QueryMarketVolatilityResponse]
});
/**
 * Retrieves a spot market's orderbook by marketID
 * @name getBinaryOptionsMarkets
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.BinaryOptionsMarkets
 */
export const getBinaryOptionsMarkets = buildQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  encode: QueryBinaryMarketsRequest.encode,
  decode: QueryBinaryMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BinaryOptionsMarkets",
  deps: [QueryBinaryMarketsRequest, QueryBinaryMarketsResponse]
});
/**
 * Retrieves a trader's derivative conditional orders
 * @name getTraderDerivativeConditionalOrders
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.TraderDerivativeConditionalOrders
 */
export const getTraderDerivativeConditionalOrders = buildQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  encode: QueryTraderDerivativeConditionalOrdersRequest.encode,
  decode: QueryTraderDerivativeConditionalOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeConditionalOrders",
  deps: [QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse]
});
/**
 * @name getMarketAtomicExecutionFeeMultiplier
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.MarketAtomicExecutionFeeMultiplier
 */
export const getMarketAtomicExecutionFeeMultiplier = buildQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  encode: QueryMarketAtomicExecutionFeeMultiplierRequest.encode,
  decode: QueryMarketAtomicExecutionFeeMultiplierResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MarketAtomicExecutionFeeMultiplier",
  deps: [QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse]
});
/**
 * Retrieves the active stake grant for a grantee
 * @name getActiveStakeGrant
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.ActiveStakeGrant
 */
export const getActiveStakeGrant = buildQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  encode: QueryActiveStakeGrantRequest.encode,
  decode: QueryActiveStakeGrantResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ActiveStakeGrant",
  deps: [QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse]
});
/**
 * Retrieves the grant authorization amount for a granter and grantee
 * @name getGrantAuthorization
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.GrantAuthorization
 */
export const getGrantAuthorization = buildQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  encode: QueryGrantAuthorizationRequest.encode,
  decode: QueryGrantAuthorizationResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "GrantAuthorization",
  deps: [QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse]
});
/**
 * Retrieves the grant authorization amount for a granter and grantee
 * @name getGrantAuthorizations
 * @package injective.exchange.v1beta1
 * @see proto service: injective.exchange.v1beta1.GrantAuthorizations
 */
export const getGrantAuthorizations = buildQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  encode: QueryGrantAuthorizationsRequest.encode,
  decode: QueryGrantAuthorizationsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "GrantAuthorizations",
  deps: [QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse]
});