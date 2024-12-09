import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryLastAuctionResultRequest, QueryLastAuctionResultResponse } from "./query";
export const createGetAuctionParams = (clientResolver?: RpcResolver) => buildQuery<QueryAuctionParamsRequest, QueryAuctionParamsResponse>({
  encode: QueryAuctionParamsRequest.encode,
  decode: QueryAuctionParamsResponse.decode,
  service: "injective.auction.v1beta1.Query",
  method: "AuctionParams",
  clientResolver
});
export const createGetCurrentAuctionBasket = (clientResolver?: RpcResolver) => buildQuery<QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse>({
  encode: QueryCurrentAuctionBasketRequest.encode,
  decode: QueryCurrentAuctionBasketResponse.decode,
  service: "injective.auction.v1beta1.Query",
  method: "CurrentAuctionBasket",
  clientResolver
});
export const createGetAuctionModuleState = (clientResolver?: RpcResolver) => buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.auction.v1beta1.Query",
  method: "AuctionModuleState",
  clientResolver
});
export const createGetLastAuctionResult = (clientResolver?: RpcResolver) => buildQuery<QueryLastAuctionResultRequest, QueryLastAuctionResultResponse>({
  encode: QueryLastAuctionResultRequest.encode,
  decode: QueryLastAuctionResultResponse.decode,
  service: "injective.auction.v1beta1.Query",
  method: "LastAuctionResult",
  clientResolver
});