import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves auction params */
  auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse>;
  /** Retrieves current auction basket with current highest bid and bidder */
  currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse>;
  /** Retrieves the entire auction module's state */
  auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves auction params */
  auctionParams = async (request: QueryAuctionParamsRequest = {}): Promise<QueryAuctionParamsResponse> => {
    const data = QueryAuctionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionParams", data);
    return promise.then(data => QueryAuctionParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves current auction basket with current highest bid and bidder */
  currentAuctionBasket = async (request: QueryCurrentAuctionBasketRequest = {}): Promise<QueryCurrentAuctionBasketResponse> => {
    const data = QueryCurrentAuctionBasketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "CurrentAuctionBasket", data);
    return promise.then(data => QueryCurrentAuctionBasketResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire auction module's state */
  auctionModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};