import { buildUseVueQuery } from "../../../vue-query";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryLastAuctionResultRequest, QueryLastAuctionResultResponse } from "./query";
import { getAuctionParams, getCurrentAuctionBasket, getAuctionModuleState, getLastAuctionResult } from "./query.rpc.func";
/* Retrieves auction params */
export const useGetAuctionParams = buildUseVueQuery<QueryAuctionParamsRequest, QueryAuctionParamsResponse>({
  builderQueryFn: getAuctionParams,
  queryKeyPrefix: "AuctionParamsQuery"
});
/* Retrieves current auction basket with current highest bid and bidder */
export const useGetCurrentAuctionBasket = buildUseVueQuery<QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse>({
  builderQueryFn: getCurrentAuctionBasket,
  queryKeyPrefix: "CurrentAuctionBasketQuery"
});
/* Retrieves the entire auction module's state */
export const useGetAuctionModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getAuctionModuleState,
  queryKeyPrefix: "AuctionModuleStateQuery"
});
export const useGetLastAuctionResult = buildUseVueQuery<QueryLastAuctionResultRequest, QueryLastAuctionResultResponse>({
  builderQueryFn: getLastAuctionResult,
  queryKeyPrefix: "LastAuctionResultQuery"
});