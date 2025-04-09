import { buildUseVueQuery } from "../../../vue-query";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryLastAuctionResultRequest, QueryLastAuctionResultResponse } from "./query";
import { getAuctionParams, getCurrentAuctionBasket, getAuctionModuleState, getLastAuctionResult } from "./query.rpc.func";
export const useGetAuctionParams = buildUseVueQuery<QueryAuctionParamsRequest, QueryAuctionParamsResponse>({
  builderQueryFn: getAuctionParams,
  queryKeyPrefix: "AuctionParamsQuery"
});
export const useGetCurrentAuctionBasket = buildUseVueQuery<QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse>({
  builderQueryFn: getCurrentAuctionBasket,
  queryKeyPrefix: "CurrentAuctionBasketQuery"
});
export const useGetAuctionModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getAuctionModuleState,
  queryKeyPrefix: "AuctionModuleStateQuery"
});
export const useGetLastAuctionResult = buildUseVueQuery<QueryLastAuctionResultRequest, QueryLastAuctionResultResponse>({
  builderQueryFn: getLastAuctionResult,
  queryKeyPrefix: "LastAuctionResultQuery"
});