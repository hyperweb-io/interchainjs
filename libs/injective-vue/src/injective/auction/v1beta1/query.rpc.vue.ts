import { buildUseVueQuery } from "../../../vue-query";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryLastAuctionResultRequest, QueryLastAuctionResultResponse } from "./query";
import { createGetAuctionParams, createGetCurrentAuctionBasket, createGetAuctionModuleState, createGetLastAuctionResult } from "./query.rpc.func.ts";
export const useGetAuctionParams = buildUseVueQuery<QueryAuctionParamsRequest, QueryAuctionParamsResponse>({
  builderQueryFn: createGetAuctionParams,
  queryKeyPrefix: "AuctionParamsQuery"
});
export const useGetCurrentAuctionBasket = buildUseVueQuery<QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse>({
  builderQueryFn: createGetCurrentAuctionBasket,
  queryKeyPrefix: "CurrentAuctionBasketQuery"
});
export const useGetAuctionModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetAuctionModuleState,
  queryKeyPrefix: "AuctionModuleStateQuery"
});
export const useGetLastAuctionResult = buildUseVueQuery<QueryLastAuctionResultRequest, QueryLastAuctionResultResponse>({
  builderQueryFn: createGetLastAuctionResult,
  queryKeyPrefix: "LastAuctionResultQuery"
});