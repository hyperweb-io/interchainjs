import { buildQuery } from "../../../helper-func-types";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryLastAuctionResultRequest, QueryLastAuctionResultResponse } from "./query";
export const getAuctionParams = buildQuery<QueryAuctionParamsRequest, QueryAuctionParamsResponse>({
  encode: QueryAuctionParamsRequest.encode,
  decode: QueryAuctionParamsResponse.decode,
  service: "injective.auction.v1beta1.Query",
  method: "AuctionParams"
});
export const getCurrentAuctionBasket = buildQuery<QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse>({
  encode: QueryCurrentAuctionBasketRequest.encode,
  decode: QueryCurrentAuctionBasketResponse.decode,
  service: "injective.auction.v1beta1.Query",
  method: "CurrentAuctionBasket"
});
export const getAuctionModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.auction.v1beta1.Query",
  method: "AuctionModuleState"
});
export const getLastAuctionResult = buildQuery<QueryLastAuctionResultRequest, QueryLastAuctionResultResponse>({
  encode: QueryLastAuctionResultRequest.encode,
  decode: QueryLastAuctionResultResponse.decode,
  service: "injective.auction.v1beta1.Query",
  method: "LastAuctionResult"
});