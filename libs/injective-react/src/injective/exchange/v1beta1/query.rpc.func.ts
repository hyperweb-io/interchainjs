import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryExchangeParamsRequest, QueryExchangeParamsResponse, QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse, QuerySubaccountDepositRequest, QuerySubaccountDepositResponse, QueryExchangeBalancesRequest, QueryExchangeBalancesResponse, QueryAggregateVolumeRequest, QueryAggregateVolumeResponse, QueryAggregateVolumesRequest, QueryAggregateVolumesResponse, QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse, QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse, QueryDenomDecimalRequest, QueryDenomDecimalResponse, QueryDenomDecimalsRequest, QueryDenomDecimalsResponse, QuerySpotMarketsRequest, QuerySpotMarketsResponse, QuerySpotMarketRequest, QuerySpotMarketResponse, QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse, QueryFullSpotMarketRequest, QueryFullSpotMarketResponse, QuerySpotOrderbookRequest, QuerySpotOrderbookResponse, QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse, QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse, QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse, QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse, QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse, QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse, QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse, QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse, QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse, QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse, QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse, QueryDerivativeMarketRequest, QueryDerivativeMarketResponse, QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse, QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryPositionsRequest, QueryPositionsResponse, QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse, QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse, QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse, QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse, QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse, QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse, QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse, QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse, QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse, QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse, QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse, QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse, QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse, QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse, MitoVaultInfosRequest, MitoVaultInfosResponse, QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse, QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse, QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse, QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse, QueryMarketVolatilityRequest, QueryMarketVolatilityResponse, QueryBinaryMarketsRequest, QueryBinaryMarketsResponse, QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse, QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse, QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse, QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse, QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse } from "./query";
export const createGetQueryExchangeParams = (clientResolver?: RpcResolver) => buildQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  encode: QueryExchangeParamsRequest.encode,
  decode: QueryExchangeParamsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "QueryExchangeParams",
  clientResolver,
  deps: [QueryExchangeParamsRequest, QueryExchangeParamsResponse]
});
export const useGetQueryExchangeParams = buildUseQuery<QueryExchangeParamsRequest, QueryExchangeParamsResponse>({
  builderQueryFn: createGetQueryExchangeParams,
  queryKeyPrefix: "QueryExchangeParamsQuery"
});
export const createGetSubaccountDeposits = (clientResolver?: RpcResolver) => buildQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  encode: QuerySubaccountDepositsRequest.encode,
  decode: QuerySubaccountDepositsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountDeposits",
  clientResolver,
  deps: [QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse]
});
export const useGetSubaccountDeposits = buildUseQuery<QuerySubaccountDepositsRequest, QuerySubaccountDepositsResponse>({
  builderQueryFn: createGetSubaccountDeposits,
  queryKeyPrefix: "SubaccountDepositsQuery"
});
export const createGetSubaccountDeposit = (clientResolver?: RpcResolver) => buildQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  encode: QuerySubaccountDepositRequest.encode,
  decode: QuerySubaccountDepositResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountDeposit",
  clientResolver,
  deps: [QuerySubaccountDepositRequest, QuerySubaccountDepositResponse]
});
export const useGetSubaccountDeposit = buildUseQuery<QuerySubaccountDepositRequest, QuerySubaccountDepositResponse>({
  builderQueryFn: createGetSubaccountDeposit,
  queryKeyPrefix: "SubaccountDepositQuery"
});
export const createGetExchangeBalances = (clientResolver?: RpcResolver) => buildQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  encode: QueryExchangeBalancesRequest.encode,
  decode: QueryExchangeBalancesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExchangeBalances",
  clientResolver,
  deps: [QueryExchangeBalancesRequest, QueryExchangeBalancesResponse]
});
export const useGetExchangeBalances = buildUseQuery<QueryExchangeBalancesRequest, QueryExchangeBalancesResponse>({
  builderQueryFn: createGetExchangeBalances,
  queryKeyPrefix: "ExchangeBalancesQuery"
});
export const createGetAggregateVolume = (clientResolver?: RpcResolver) => buildQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  encode: QueryAggregateVolumeRequest.encode,
  decode: QueryAggregateVolumeResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateVolume",
  clientResolver,
  deps: [QueryAggregateVolumeRequest, QueryAggregateVolumeResponse]
});
export const useGetAggregateVolume = buildUseQuery<QueryAggregateVolumeRequest, QueryAggregateVolumeResponse>({
  builderQueryFn: createGetAggregateVolume,
  queryKeyPrefix: "AggregateVolumeQuery"
});
export const createGetAggregateVolumes = (clientResolver?: RpcResolver) => buildQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  encode: QueryAggregateVolumesRequest.encode,
  decode: QueryAggregateVolumesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateVolumes",
  clientResolver,
  deps: [QueryAggregateVolumesRequest, QueryAggregateVolumesResponse]
});
export const useGetAggregateVolumes = buildUseQuery<QueryAggregateVolumesRequest, QueryAggregateVolumesResponse>({
  builderQueryFn: createGetAggregateVolumes,
  queryKeyPrefix: "AggregateVolumesQuery"
});
export const createGetAggregateMarketVolume = (clientResolver?: RpcResolver) => buildQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  encode: QueryAggregateMarketVolumeRequest.encode,
  decode: QueryAggregateMarketVolumeResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateMarketVolume",
  clientResolver,
  deps: [QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse]
});
export const useGetAggregateMarketVolume = buildUseQuery<QueryAggregateMarketVolumeRequest, QueryAggregateMarketVolumeResponse>({
  builderQueryFn: createGetAggregateMarketVolume,
  queryKeyPrefix: "AggregateMarketVolumeQuery"
});
export const createGetAggregateMarketVolumes = (clientResolver?: RpcResolver) => buildQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  encode: QueryAggregateMarketVolumesRequest.encode,
  decode: QueryAggregateMarketVolumesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AggregateMarketVolumes",
  clientResolver,
  deps: [QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse]
});
export const useGetAggregateMarketVolumes = buildUseQuery<QueryAggregateMarketVolumesRequest, QueryAggregateMarketVolumesResponse>({
  builderQueryFn: createGetAggregateMarketVolumes,
  queryKeyPrefix: "AggregateMarketVolumesQuery"
});
export const createGetDenomDecimal = (clientResolver?: RpcResolver) => buildQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  encode: QueryDenomDecimalRequest.encode,
  decode: QueryDenomDecimalResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DenomDecimal",
  clientResolver,
  deps: [QueryDenomDecimalRequest, QueryDenomDecimalResponse]
});
export const useGetDenomDecimal = buildUseQuery<QueryDenomDecimalRequest, QueryDenomDecimalResponse>({
  builderQueryFn: createGetDenomDecimal,
  queryKeyPrefix: "DenomDecimalQuery"
});
export const createGetDenomDecimals = (clientResolver?: RpcResolver) => buildQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  encode: QueryDenomDecimalsRequest.encode,
  decode: QueryDenomDecimalsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DenomDecimals",
  clientResolver,
  deps: [QueryDenomDecimalsRequest, QueryDenomDecimalsResponse]
});
export const useGetDenomDecimals = buildUseQuery<QueryDenomDecimalsRequest, QueryDenomDecimalsResponse>({
  builderQueryFn: createGetDenomDecimals,
  queryKeyPrefix: "DenomDecimalsQuery"
});
export const createGetSpotMarkets = (clientResolver?: RpcResolver) => buildQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  encode: QuerySpotMarketsRequest.encode,
  decode: QuerySpotMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMarkets",
  clientResolver,
  deps: [QuerySpotMarketsRequest, QuerySpotMarketsResponse]
});
export const useGetSpotMarkets = buildUseQuery<QuerySpotMarketsRequest, QuerySpotMarketsResponse>({
  builderQueryFn: createGetSpotMarkets,
  queryKeyPrefix: "SpotMarketsQuery"
});
export const createGetSpotMarket = (clientResolver?: RpcResolver) => buildQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  encode: QuerySpotMarketRequest.encode,
  decode: QuerySpotMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMarket",
  clientResolver,
  deps: [QuerySpotMarketRequest, QuerySpotMarketResponse]
});
export const useGetSpotMarket = buildUseQuery<QuerySpotMarketRequest, QuerySpotMarketResponse>({
  builderQueryFn: createGetSpotMarket,
  queryKeyPrefix: "SpotMarketQuery"
});
export const createGetFullSpotMarkets = (clientResolver?: RpcResolver) => buildQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  encode: QueryFullSpotMarketsRequest.encode,
  decode: QueryFullSpotMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FullSpotMarkets",
  clientResolver,
  deps: [QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse]
});
export const useGetFullSpotMarkets = buildUseQuery<QueryFullSpotMarketsRequest, QueryFullSpotMarketsResponse>({
  builderQueryFn: createGetFullSpotMarkets,
  queryKeyPrefix: "FullSpotMarketsQuery"
});
export const createGetFullSpotMarket = (clientResolver?: RpcResolver) => buildQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  encode: QueryFullSpotMarketRequest.encode,
  decode: QueryFullSpotMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FullSpotMarket",
  clientResolver,
  deps: [QueryFullSpotMarketRequest, QueryFullSpotMarketResponse]
});
export const useGetFullSpotMarket = buildUseQuery<QueryFullSpotMarketRequest, QueryFullSpotMarketResponse>({
  builderQueryFn: createGetFullSpotMarket,
  queryKeyPrefix: "FullSpotMarketQuery"
});
export const createGetSpotOrderbook = (clientResolver?: RpcResolver) => buildQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  encode: QuerySpotOrderbookRequest.encode,
  decode: QuerySpotOrderbookResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotOrderbook",
  clientResolver,
  deps: [QuerySpotOrderbookRequest, QuerySpotOrderbookResponse]
});
export const useGetSpotOrderbook = buildUseQuery<QuerySpotOrderbookRequest, QuerySpotOrderbookResponse>({
  builderQueryFn: createGetSpotOrderbook,
  queryKeyPrefix: "SpotOrderbookQuery"
});
export const createGetTraderSpotOrders = (clientResolver?: RpcResolver) => buildQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  encode: QueryTraderSpotOrdersRequest.encode,
  decode: QueryTraderSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderSpotOrders",
  clientResolver,
  deps: [QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse]
});
export const useGetTraderSpotOrders = buildUseQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: createGetTraderSpotOrders,
  queryKeyPrefix: "TraderSpotOrdersQuery"
});
export const createGetAccountAddressSpotOrders = (clientResolver?: RpcResolver) => buildQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  encode: QueryAccountAddressSpotOrdersRequest.encode,
  decode: QueryAccountAddressSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AccountAddressSpotOrders",
  clientResolver,
  deps: [QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse]
});
export const useGetAccountAddressSpotOrders = buildUseQuery<QueryAccountAddressSpotOrdersRequest, QueryAccountAddressSpotOrdersResponse>({
  builderQueryFn: createGetAccountAddressSpotOrders,
  queryKeyPrefix: "AccountAddressSpotOrdersQuery"
});
export const createGetSpotOrdersByHashes = (clientResolver?: RpcResolver) => buildQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  encode: QuerySpotOrdersByHashesRequest.encode,
  decode: QuerySpotOrdersByHashesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotOrdersByHashes",
  clientResolver,
  deps: [QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse]
});
export const useGetSpotOrdersByHashes = buildUseQuery<QuerySpotOrdersByHashesRequest, QuerySpotOrdersByHashesResponse>({
  builderQueryFn: createGetSpotOrdersByHashes,
  queryKeyPrefix: "SpotOrdersByHashesQuery"
});
export const createGetSubaccountOrders = (clientResolver?: RpcResolver) => buildQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  encode: QuerySubaccountOrdersRequest.encode,
  decode: QuerySubaccountOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountOrders",
  clientResolver,
  deps: [QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse]
});
export const useGetSubaccountOrders = buildUseQuery<QuerySubaccountOrdersRequest, QuerySubaccountOrdersResponse>({
  builderQueryFn: createGetSubaccountOrders,
  queryKeyPrefix: "SubaccountOrdersQuery"
});
export const createGetTraderSpotTransientOrders = (clientResolver?: RpcResolver) => buildQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  encode: QueryTraderSpotOrdersRequest.encode,
  decode: QueryTraderSpotOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderSpotTransientOrders",
  clientResolver,
  deps: [QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse]
});
export const useGetTraderSpotTransientOrders = buildUseQuery<QueryTraderSpotOrdersRequest, QueryTraderSpotOrdersResponse>({
  builderQueryFn: createGetTraderSpotTransientOrders,
  queryKeyPrefix: "TraderSpotTransientOrdersQuery"
});
export const createGetSpotMidPriceAndTOB = (clientResolver?: RpcResolver) => buildQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  encode: QuerySpotMidPriceAndTOBRequest.encode,
  decode: QuerySpotMidPriceAndTOBResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SpotMidPriceAndTOB",
  clientResolver,
  deps: [QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse]
});
export const useGetSpotMidPriceAndTOB = buildUseQuery<QuerySpotMidPriceAndTOBRequest, QuerySpotMidPriceAndTOBResponse>({
  builderQueryFn: createGetSpotMidPriceAndTOB,
  queryKeyPrefix: "SpotMidPriceAndTOBQuery"
});
export const createGetDerivativeMidPriceAndTOB = (clientResolver?: RpcResolver) => buildQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  encode: QueryDerivativeMidPriceAndTOBRequest.encode,
  decode: QueryDerivativeMidPriceAndTOBResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMidPriceAndTOB",
  clientResolver,
  deps: [QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse]
});
export const useGetDerivativeMidPriceAndTOB = buildUseQuery<QueryDerivativeMidPriceAndTOBRequest, QueryDerivativeMidPriceAndTOBResponse>({
  builderQueryFn: createGetDerivativeMidPriceAndTOB,
  queryKeyPrefix: "DerivativeMidPriceAndTOBQuery"
});
export const createGetDerivativeOrderbook = (clientResolver?: RpcResolver) => buildQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  encode: QueryDerivativeOrderbookRequest.encode,
  decode: QueryDerivativeOrderbookResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeOrderbook",
  clientResolver,
  deps: [QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse]
});
export const useGetDerivativeOrderbook = buildUseQuery<QueryDerivativeOrderbookRequest, QueryDerivativeOrderbookResponse>({
  builderQueryFn: createGetDerivativeOrderbook,
  queryKeyPrefix: "DerivativeOrderbookQuery"
});
export const createGetTraderDerivativeOrders = (clientResolver?: RpcResolver) => buildQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  encode: QueryTraderDerivativeOrdersRequest.encode,
  decode: QueryTraderDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeOrders",
  clientResolver,
  deps: [QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse]
});
export const useGetTraderDerivativeOrders = buildUseQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: createGetTraderDerivativeOrders,
  queryKeyPrefix: "TraderDerivativeOrdersQuery"
});
export const createGetAccountAddressDerivativeOrders = (clientResolver?: RpcResolver) => buildQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  encode: QueryAccountAddressDerivativeOrdersRequest.encode,
  decode: QueryAccountAddressDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "AccountAddressDerivativeOrders",
  clientResolver,
  deps: [QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse]
});
export const useGetAccountAddressDerivativeOrders = buildUseQuery<QueryAccountAddressDerivativeOrdersRequest, QueryAccountAddressDerivativeOrdersResponse>({
  builderQueryFn: createGetAccountAddressDerivativeOrders,
  queryKeyPrefix: "AccountAddressDerivativeOrdersQuery"
});
export const createGetDerivativeOrdersByHashes = (clientResolver?: RpcResolver) => buildQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  encode: QueryDerivativeOrdersByHashesRequest.encode,
  decode: QueryDerivativeOrdersByHashesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeOrdersByHashes",
  clientResolver,
  deps: [QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse]
});
export const useGetDerivativeOrdersByHashes = buildUseQuery<QueryDerivativeOrdersByHashesRequest, QueryDerivativeOrdersByHashesResponse>({
  builderQueryFn: createGetDerivativeOrdersByHashes,
  queryKeyPrefix: "DerivativeOrdersByHashesQuery"
});
export const createGetTraderDerivativeTransientOrders = (clientResolver?: RpcResolver) => buildQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  encode: QueryTraderDerivativeOrdersRequest.encode,
  decode: QueryTraderDerivativeOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeTransientOrders",
  clientResolver,
  deps: [QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse]
});
export const useGetTraderDerivativeTransientOrders = buildUseQuery<QueryTraderDerivativeOrdersRequest, QueryTraderDerivativeOrdersResponse>({
  builderQueryFn: createGetTraderDerivativeTransientOrders,
  queryKeyPrefix: "TraderDerivativeTransientOrdersQuery"
});
export const createGetDerivativeMarkets = (clientResolver?: RpcResolver) => buildQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  encode: QueryDerivativeMarketsRequest.encode,
  decode: QueryDerivativeMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarkets",
  clientResolver,
  deps: [QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse]
});
export const useGetDerivativeMarkets = buildUseQuery<QueryDerivativeMarketsRequest, QueryDerivativeMarketsResponse>({
  builderQueryFn: createGetDerivativeMarkets,
  queryKeyPrefix: "DerivativeMarketsQuery"
});
export const createGetDerivativeMarket = (clientResolver?: RpcResolver) => buildQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  encode: QueryDerivativeMarketRequest.encode,
  decode: QueryDerivativeMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarket",
  clientResolver,
  deps: [QueryDerivativeMarketRequest, QueryDerivativeMarketResponse]
});
export const useGetDerivativeMarket = buildUseQuery<QueryDerivativeMarketRequest, QueryDerivativeMarketResponse>({
  builderQueryFn: createGetDerivativeMarket,
  queryKeyPrefix: "DerivativeMarketQuery"
});
export const createGetDerivativeMarketAddress = (clientResolver?: RpcResolver) => buildQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  encode: QueryDerivativeMarketAddressRequest.encode,
  decode: QueryDerivativeMarketAddressResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "DerivativeMarketAddress",
  clientResolver,
  deps: [QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse]
});
export const useGetDerivativeMarketAddress = buildUseQuery<QueryDerivativeMarketAddressRequest, QueryDerivativeMarketAddressResponse>({
  builderQueryFn: createGetDerivativeMarketAddress,
  queryKeyPrefix: "DerivativeMarketAddressQuery"
});
export const createGetSubaccountTradeNonce = (clientResolver?: RpcResolver) => buildQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  encode: QuerySubaccountTradeNonceRequest.encode,
  decode: QuerySubaccountTradeNonceResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountTradeNonce",
  clientResolver,
  deps: [QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse]
});
export const useGetSubaccountTradeNonce = buildUseQuery<QuerySubaccountTradeNonceRequest, QuerySubaccountTradeNonceResponse>({
  builderQueryFn: createGetSubaccountTradeNonce,
  queryKeyPrefix: "SubaccountTradeNonceQuery"
});
export const createGetExchangeModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExchangeModuleState",
  clientResolver,
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});
export const useGetExchangeModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetExchangeModuleState,
  queryKeyPrefix: "ExchangeModuleStateQuery"
});
export const createGetPositions = (clientResolver?: RpcResolver) => buildQuery<QueryPositionsRequest, QueryPositionsResponse>({
  encode: QueryPositionsRequest.encode,
  decode: QueryPositionsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "Positions",
  clientResolver,
  deps: [QueryPositionsRequest, QueryPositionsResponse]
});
export const useGetPositions = buildUseQuery<QueryPositionsRequest, QueryPositionsResponse>({
  builderQueryFn: createGetPositions,
  queryKeyPrefix: "PositionsQuery"
});
export const createGetSubaccountPositions = (clientResolver?: RpcResolver) => buildQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  encode: QuerySubaccountPositionsRequest.encode,
  decode: QuerySubaccountPositionsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountPositions",
  clientResolver,
  deps: [QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse]
});
export const useGetSubaccountPositions = buildUseQuery<QuerySubaccountPositionsRequest, QuerySubaccountPositionsResponse>({
  builderQueryFn: createGetSubaccountPositions,
  queryKeyPrefix: "SubaccountPositionsQuery"
});
export const createGetSubaccountPositionInMarket = (clientResolver?: RpcResolver) => buildQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  encode: QuerySubaccountPositionInMarketRequest.encode,
  decode: QuerySubaccountPositionInMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountPositionInMarket",
  clientResolver,
  deps: [QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse]
});
export const useGetSubaccountPositionInMarket = buildUseQuery<QuerySubaccountPositionInMarketRequest, QuerySubaccountPositionInMarketResponse>({
  builderQueryFn: createGetSubaccountPositionInMarket,
  queryKeyPrefix: "SubaccountPositionInMarketQuery"
});
export const createGetSubaccountEffectivePositionInMarket = (clientResolver?: RpcResolver) => buildQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  encode: QuerySubaccountEffectivePositionInMarketRequest.encode,
  decode: QuerySubaccountEffectivePositionInMarketResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountEffectivePositionInMarket",
  clientResolver,
  deps: [QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse]
});
export const useGetSubaccountEffectivePositionInMarket = buildUseQuery<QuerySubaccountEffectivePositionInMarketRequest, QuerySubaccountEffectivePositionInMarketResponse>({
  builderQueryFn: createGetSubaccountEffectivePositionInMarket,
  queryKeyPrefix: "SubaccountEffectivePositionInMarketQuery"
});
export const createGetPerpetualMarketInfo = (clientResolver?: RpcResolver) => buildQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  encode: QueryPerpetualMarketInfoRequest.encode,
  decode: QueryPerpetualMarketInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PerpetualMarketInfo",
  clientResolver,
  deps: [QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse]
});
export const useGetPerpetualMarketInfo = buildUseQuery<QueryPerpetualMarketInfoRequest, QueryPerpetualMarketInfoResponse>({
  builderQueryFn: createGetPerpetualMarketInfo,
  queryKeyPrefix: "PerpetualMarketInfoQuery"
});
export const createGetExpiryFuturesMarketInfo = (clientResolver?: RpcResolver) => buildQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  encode: QueryExpiryFuturesMarketInfoRequest.encode,
  decode: QueryExpiryFuturesMarketInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ExpiryFuturesMarketInfo",
  clientResolver,
  deps: [QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse]
});
export const useGetExpiryFuturesMarketInfo = buildUseQuery<QueryExpiryFuturesMarketInfoRequest, QueryExpiryFuturesMarketInfoResponse>({
  builderQueryFn: createGetExpiryFuturesMarketInfo,
  queryKeyPrefix: "ExpiryFuturesMarketInfoQuery"
});
export const createGetPerpetualMarketFunding = (clientResolver?: RpcResolver) => buildQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  encode: QueryPerpetualMarketFundingRequest.encode,
  decode: QueryPerpetualMarketFundingResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PerpetualMarketFunding",
  clientResolver,
  deps: [QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse]
});
export const useGetPerpetualMarketFunding = buildUseQuery<QueryPerpetualMarketFundingRequest, QueryPerpetualMarketFundingResponse>({
  builderQueryFn: createGetPerpetualMarketFunding,
  queryKeyPrefix: "PerpetualMarketFundingQuery"
});
export const createGetSubaccountOrderMetadata = (clientResolver?: RpcResolver) => buildQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  encode: QuerySubaccountOrderMetadataRequest.encode,
  decode: QuerySubaccountOrderMetadataResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "SubaccountOrderMetadata",
  clientResolver,
  deps: [QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse]
});
export const useGetSubaccountOrderMetadata = buildUseQuery<QuerySubaccountOrderMetadataRequest, QuerySubaccountOrderMetadataResponse>({
  builderQueryFn: createGetSubaccountOrderMetadata,
  queryKeyPrefix: "SubaccountOrderMetadataQuery"
});
export const createGetTradeRewardPoints = (clientResolver?: RpcResolver) => buildQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  encode: QueryTradeRewardPointsRequest.encode,
  decode: QueryTradeRewardPointsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TradeRewardPoints",
  clientResolver,
  deps: [QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse]
});
export const useGetTradeRewardPoints = buildUseQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: createGetTradeRewardPoints,
  queryKeyPrefix: "TradeRewardPointsQuery"
});
export const createGetPendingTradeRewardPoints = (clientResolver?: RpcResolver) => buildQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  encode: QueryTradeRewardPointsRequest.encode,
  decode: QueryTradeRewardPointsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "PendingTradeRewardPoints",
  clientResolver,
  deps: [QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse]
});
export const useGetPendingTradeRewardPoints = buildUseQuery<QueryTradeRewardPointsRequest, QueryTradeRewardPointsResponse>({
  builderQueryFn: createGetPendingTradeRewardPoints,
  queryKeyPrefix: "PendingTradeRewardPointsQuery"
});
export const createGetTradeRewardCampaign = (clientResolver?: RpcResolver) => buildQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  encode: QueryTradeRewardCampaignRequest.encode,
  decode: QueryTradeRewardCampaignResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TradeRewardCampaign",
  clientResolver,
  deps: [QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse]
});
export const useGetTradeRewardCampaign = buildUseQuery<QueryTradeRewardCampaignRequest, QueryTradeRewardCampaignResponse>({
  builderQueryFn: createGetTradeRewardCampaign,
  queryKeyPrefix: "TradeRewardCampaignQuery"
});
export const createGetFeeDiscountAccountInfo = (clientResolver?: RpcResolver) => buildQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  encode: QueryFeeDiscountAccountInfoRequest.encode,
  decode: QueryFeeDiscountAccountInfoResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountAccountInfo",
  clientResolver,
  deps: [QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse]
});
export const useGetFeeDiscountAccountInfo = buildUseQuery<QueryFeeDiscountAccountInfoRequest, QueryFeeDiscountAccountInfoResponse>({
  builderQueryFn: createGetFeeDiscountAccountInfo,
  queryKeyPrefix: "FeeDiscountAccountInfoQuery"
});
export const createGetFeeDiscountSchedule = (clientResolver?: RpcResolver) => buildQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  encode: QueryFeeDiscountScheduleRequest.encode,
  decode: QueryFeeDiscountScheduleResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountSchedule",
  clientResolver,
  deps: [QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse]
});
export const useGetFeeDiscountSchedule = buildUseQuery<QueryFeeDiscountScheduleRequest, QueryFeeDiscountScheduleResponse>({
  builderQueryFn: createGetFeeDiscountSchedule,
  queryKeyPrefix: "FeeDiscountScheduleQuery"
});
export const createGetBalanceMismatches = (clientResolver?: RpcResolver) => buildQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  encode: QueryBalanceMismatchesRequest.encode,
  decode: QueryBalanceMismatchesResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BalanceMismatches",
  clientResolver,
  deps: [QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse]
});
export const useGetBalanceMismatches = buildUseQuery<QueryBalanceMismatchesRequest, QueryBalanceMismatchesResponse>({
  builderQueryFn: createGetBalanceMismatches,
  queryKeyPrefix: "BalanceMismatchesQuery"
});
export const createGetBalanceWithBalanceHolds = (clientResolver?: RpcResolver) => buildQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  encode: QueryBalanceWithBalanceHoldsRequest.encode,
  decode: QueryBalanceWithBalanceHoldsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BalanceWithBalanceHolds",
  clientResolver,
  deps: [QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse]
});
export const useGetBalanceWithBalanceHolds = buildUseQuery<QueryBalanceWithBalanceHoldsRequest, QueryBalanceWithBalanceHoldsResponse>({
  builderQueryFn: createGetBalanceWithBalanceHolds,
  queryKeyPrefix: "BalanceWithBalanceHoldsQuery"
});
export const createGetFeeDiscountTierStatistics = (clientResolver?: RpcResolver) => buildQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  encode: QueryFeeDiscountTierStatisticsRequest.encode,
  decode: QueryFeeDiscountTierStatisticsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "FeeDiscountTierStatistics",
  clientResolver,
  deps: [QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse]
});
export const useGetFeeDiscountTierStatistics = buildUseQuery<QueryFeeDiscountTierStatisticsRequest, QueryFeeDiscountTierStatisticsResponse>({
  builderQueryFn: createGetFeeDiscountTierStatistics,
  queryKeyPrefix: "FeeDiscountTierStatisticsQuery"
});
export const createGetMitoVaultInfos = (clientResolver?: RpcResolver) => buildQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  encode: MitoVaultInfosRequest.encode,
  decode: MitoVaultInfosResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MitoVaultInfos",
  clientResolver,
  deps: [MitoVaultInfosRequest, MitoVaultInfosResponse]
});
export const useGetMitoVaultInfos = buildUseQuery<MitoVaultInfosRequest, MitoVaultInfosResponse>({
  builderQueryFn: createGetMitoVaultInfos,
  queryKeyPrefix: "MitoVaultInfosQuery"
});
export const createGetQueryMarketIDFromVault = (clientResolver?: RpcResolver) => buildQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  encode: QueryMarketIDFromVaultRequest.encode,
  decode: QueryMarketIDFromVaultResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "QueryMarketIDFromVault",
  clientResolver,
  deps: [QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse]
});
export const useGetQueryMarketIDFromVault = buildUseQuery<QueryMarketIDFromVaultRequest, QueryMarketIDFromVaultResponse>({
  builderQueryFn: createGetQueryMarketIDFromVault,
  queryKeyPrefix: "QueryMarketIDFromVaultQuery"
});
export const createGetHistoricalTradeRecords = (clientResolver?: RpcResolver) => buildQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  encode: QueryHistoricalTradeRecordsRequest.encode,
  decode: QueryHistoricalTradeRecordsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "HistoricalTradeRecords",
  clientResolver,
  deps: [QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse]
});
export const useGetHistoricalTradeRecords = buildUseQuery<QueryHistoricalTradeRecordsRequest, QueryHistoricalTradeRecordsResponse>({
  builderQueryFn: createGetHistoricalTradeRecords,
  queryKeyPrefix: "HistoricalTradeRecordsQuery"
});
export const createGetIsOptedOutOfRewards = (clientResolver?: RpcResolver) => buildQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  encode: QueryIsOptedOutOfRewardsRequest.encode,
  decode: QueryIsOptedOutOfRewardsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "IsOptedOutOfRewards",
  clientResolver,
  deps: [QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse]
});
export const useGetIsOptedOutOfRewards = buildUseQuery<QueryIsOptedOutOfRewardsRequest, QueryIsOptedOutOfRewardsResponse>({
  builderQueryFn: createGetIsOptedOutOfRewards,
  queryKeyPrefix: "IsOptedOutOfRewardsQuery"
});
export const createGetOptedOutOfRewardsAccounts = (clientResolver?: RpcResolver) => buildQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  encode: QueryOptedOutOfRewardsAccountsRequest.encode,
  decode: QueryOptedOutOfRewardsAccountsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "OptedOutOfRewardsAccounts",
  clientResolver,
  deps: [QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse]
});
export const useGetOptedOutOfRewardsAccounts = buildUseQuery<QueryOptedOutOfRewardsAccountsRequest, QueryOptedOutOfRewardsAccountsResponse>({
  builderQueryFn: createGetOptedOutOfRewardsAccounts,
  queryKeyPrefix: "OptedOutOfRewardsAccountsQuery"
});
export const createGetMarketVolatility = (clientResolver?: RpcResolver) => buildQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  encode: QueryMarketVolatilityRequest.encode,
  decode: QueryMarketVolatilityResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MarketVolatility",
  clientResolver,
  deps: [QueryMarketVolatilityRequest, QueryMarketVolatilityResponse]
});
export const useGetMarketVolatility = buildUseQuery<QueryMarketVolatilityRequest, QueryMarketVolatilityResponse>({
  builderQueryFn: createGetMarketVolatility,
  queryKeyPrefix: "MarketVolatilityQuery"
});
export const createGetBinaryOptionsMarkets = (clientResolver?: RpcResolver) => buildQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  encode: QueryBinaryMarketsRequest.encode,
  decode: QueryBinaryMarketsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "BinaryOptionsMarkets",
  clientResolver,
  deps: [QueryBinaryMarketsRequest, QueryBinaryMarketsResponse]
});
export const useGetBinaryOptionsMarkets = buildUseQuery<QueryBinaryMarketsRequest, QueryBinaryMarketsResponse>({
  builderQueryFn: createGetBinaryOptionsMarkets,
  queryKeyPrefix: "BinaryOptionsMarketsQuery"
});
export const createGetTraderDerivativeConditionalOrders = (clientResolver?: RpcResolver) => buildQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  encode: QueryTraderDerivativeConditionalOrdersRequest.encode,
  decode: QueryTraderDerivativeConditionalOrdersResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "TraderDerivativeConditionalOrders",
  clientResolver,
  deps: [QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse]
});
export const useGetTraderDerivativeConditionalOrders = buildUseQuery<QueryTraderDerivativeConditionalOrdersRequest, QueryTraderDerivativeConditionalOrdersResponse>({
  builderQueryFn: createGetTraderDerivativeConditionalOrders,
  queryKeyPrefix: "TraderDerivativeConditionalOrdersQuery"
});
export const createGetMarketAtomicExecutionFeeMultiplier = (clientResolver?: RpcResolver) => buildQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  encode: QueryMarketAtomicExecutionFeeMultiplierRequest.encode,
  decode: QueryMarketAtomicExecutionFeeMultiplierResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "MarketAtomicExecutionFeeMultiplier",
  clientResolver,
  deps: [QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse]
});
export const useGetMarketAtomicExecutionFeeMultiplier = buildUseQuery<QueryMarketAtomicExecutionFeeMultiplierRequest, QueryMarketAtomicExecutionFeeMultiplierResponse>({
  builderQueryFn: createGetMarketAtomicExecutionFeeMultiplier,
  queryKeyPrefix: "MarketAtomicExecutionFeeMultiplierQuery"
});
export const createGetActiveStakeGrant = (clientResolver?: RpcResolver) => buildQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  encode: QueryActiveStakeGrantRequest.encode,
  decode: QueryActiveStakeGrantResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "ActiveStakeGrant",
  clientResolver,
  deps: [QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse]
});
export const useGetActiveStakeGrant = buildUseQuery<QueryActiveStakeGrantRequest, QueryActiveStakeGrantResponse>({
  builderQueryFn: createGetActiveStakeGrant,
  queryKeyPrefix: "ActiveStakeGrantQuery"
});
export const createGetGrantAuthorization = (clientResolver?: RpcResolver) => buildQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  encode: QueryGrantAuthorizationRequest.encode,
  decode: QueryGrantAuthorizationResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "GrantAuthorization",
  clientResolver,
  deps: [QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse]
});
export const useGetGrantAuthorization = buildUseQuery<QueryGrantAuthorizationRequest, QueryGrantAuthorizationResponse>({
  builderQueryFn: createGetGrantAuthorization,
  queryKeyPrefix: "GrantAuthorizationQuery"
});
export const createGetGrantAuthorizations = (clientResolver?: RpcResolver) => buildQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  encode: QueryGrantAuthorizationsRequest.encode,
  decode: QueryGrantAuthorizationsResponse.decode,
  service: "injective.exchange.v1beta1.Query",
  method: "GrantAuthorizations",
  clientResolver,
  deps: [QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse]
});
export const useGetGrantAuthorizations = buildUseQuery<QueryGrantAuthorizationsRequest, QueryGrantAuthorizationsResponse>({
  builderQueryFn: createGetGrantAuthorizations,
  queryKeyPrefix: "GrantAuthorizationsQuery"
});