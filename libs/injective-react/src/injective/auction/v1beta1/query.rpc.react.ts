import { buildUseQuery } from "../../../react-query";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryLastAuctionResultRequest, QueryLastAuctionResultResponse } from "./query";
import { getAuctionParams, getCurrentAuctionBasket, getAuctionModuleState, getLastAuctionResult } from "./query.rpc.func";
/**
 * Retrieves auction params
 * @name useGetAuctionParams
 * @package injective.auction.v1beta1
 * @see proto service: injective.auction.v1beta1.AuctionParams
 */
export const useGetAuctionParams = buildUseQuery<QueryAuctionParamsRequest, QueryAuctionParamsResponse>({
  builderQueryFn: getAuctionParams,
  queryKeyPrefix: "AuctionParamsQuery"
});
/**
 * Retrieves current auction basket with current highest bid and bidder
 * @name useGetCurrentAuctionBasket
 * @package injective.auction.v1beta1
 * @see proto service: injective.auction.v1beta1.CurrentAuctionBasket
 */
export const useGetCurrentAuctionBasket = buildUseQuery<QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse>({
  builderQueryFn: getCurrentAuctionBasket,
  queryKeyPrefix: "CurrentAuctionBasketQuery"
});
/**
 * Retrieves the entire auction module's state
 * @name useGetAuctionModuleState
 * @package injective.auction.v1beta1
 * @see proto service: injective.auction.v1beta1.AuctionModuleState
 */
export const useGetAuctionModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getAuctionModuleState,
  queryKeyPrefix: "AuctionModuleStateQuery"
});
/**
 * @name useGetLastAuctionResult
 * @package injective.auction.v1beta1
 * @see proto service: injective.auction.v1beta1.LastAuctionResult
 */
export const useGetLastAuctionResult = buildUseQuery<QueryLastAuctionResultRequest, QueryLastAuctionResultResponse>({
  builderQueryFn: getLastAuctionResult,
  queryKeyPrefix: "LastAuctionResultQuery"
});