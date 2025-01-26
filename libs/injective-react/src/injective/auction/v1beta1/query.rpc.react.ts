import { buildUseQuery } from "../../../react-query";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryLastAuctionResultRequest, QueryLastAuctionResultResponse } from "./query";
import { createGetAuctionParams, createGetCurrentAuctionBasket, createGetAuctionModuleState, createGetLastAuctionResult } from "./query.rpc.func.ts";
export const useGetAuctionParams = buildUseQuery<QueryAuctionParamsRequest, QueryAuctionParamsResponse>({
  builderQueryFn: createGetAuctionParams,
  queryKeyPrefix: "AuctionParamsQuery"
});
export const useGetCurrentAuctionBasket = buildUseQuery<QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse>({
  builderQueryFn: createGetCurrentAuctionBasket,
  queryKeyPrefix: "CurrentAuctionBasketQuery"
});
export const useGetAuctionModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: createGetAuctionModuleState,
  queryKeyPrefix: "AuctionModuleStateQuery"
});
export const useGetLastAuctionResult = buildUseQuery<QueryLastAuctionResultRequest, QueryLastAuctionResultResponse>({
  builderQueryFn: createGetLastAuctionResult,
  queryKeyPrefix: "LastAuctionResultQuery"
});