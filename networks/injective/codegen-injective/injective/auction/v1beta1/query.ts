import { Params, ParamsAmino } from "./auction";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC
 * method.
 */
export interface QueryAuctionParamsRequest {}
export interface QueryAuctionParamsRequestProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest";
  value: Uint8Array;
}
/**
 * QueryAuctionParamsRequest is the request type for the Query/AuctionParams RPC
 * method.
 */
export interface QueryAuctionParamsRequestAmino {}
export interface QueryAuctionParamsRequestAminoMsg {
  type: "/injective.auction.v1beta1.QueryAuctionParamsRequest";
  value: QueryAuctionParamsRequestAmino;
}
/**
 * QueryAuctionParamsRequest is the response type for the Query/AuctionParams
 * RPC method.
 */
export interface QueryAuctionParamsResponse {
  params: Params;
}
export interface QueryAuctionParamsResponseProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse";
  value: Uint8Array;
}
/**
 * QueryAuctionParamsRequest is the response type for the Query/AuctionParams
 * RPC method.
 */
export interface QueryAuctionParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryAuctionParamsResponseAminoMsg {
  type: "/injective.auction.v1beta1.QueryAuctionParamsResponse";
  value: QueryAuctionParamsResponseAmino;
}
/**
 * QueryCurrentAuctionBasketRequest is the request type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketRequest {}
export interface QueryCurrentAuctionBasketRequestProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest";
  value: Uint8Array;
}
/**
 * QueryCurrentAuctionBasketRequest is the request type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketRequestAmino {}
export interface QueryCurrentAuctionBasketRequestAminoMsg {
  type: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest";
  value: QueryCurrentAuctionBasketRequestAmino;
}
/**
 * QueryCurrentAuctionBasketResponse is the response type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketResponse {
  /** amount describes the amount put on auction */
  amount: Coin[];
  /** auctionRound describes current auction round */
  auctionRound: bigint;
  /** auctionClosingTime describes auction close time for the round */
  auctionClosingTime: bigint;
  /** highestBidder describes highest bidder on current round */
  highestBidder: string;
  /** highestBidAmount describes highest bid amount on current round */
  highestBidAmount: string;
}
export interface QueryCurrentAuctionBasketResponseProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse";
  value: Uint8Array;
}
/**
 * QueryCurrentAuctionBasketResponse is the response type for the
 * Query/CurrentAuctionBasket RPC method.
 */
export interface QueryCurrentAuctionBasketResponseAmino {
  /** amount describes the amount put on auction */
  amount: CoinAmino[];
  /** auctionRound describes current auction round */
  auctionRound: string;
  /** auctionClosingTime describes auction close time for the round */
  auctionClosingTime: string;
  /** highestBidder describes highest bidder on current round */
  highestBidder: string;
  /** highestBidAmount describes highest bid amount on current round */
  highestBidAmount: string;
}
export interface QueryCurrentAuctionBasketResponseAminoMsg {
  type: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse";
  value: QueryCurrentAuctionBasketResponseAmino;
}
/**
 * QueryModuleStateRequest is the request type for the Query/AuctionModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/AuctionModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.auction.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/AuctionModuleState RPC method.
 */
export interface QueryModuleStateResponse {
  /**
   * QueryModuleStateResponse is the response type for the
   * Query/AuctionModuleState RPC method.
   */
  state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/AuctionModuleState RPC method.
 */
export interface QueryModuleStateResponseAmino {
  /**
   * QueryModuleStateResponse is the response type for the
   * Query/AuctionModuleState RPC method.
   */
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.auction.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
function createBaseQueryAuctionParamsRequest(): QueryAuctionParamsRequest {
  return {};
}
export const QueryAuctionParamsRequest = {
  typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest",
  is(o: any): o is QueryAuctionParamsRequest {
    return o && o.$typeUrl === QueryAuctionParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAuctionParamsRequestAmino {
    return o && o.$typeUrl === QueryAuctionParamsRequest.typeUrl;
  },
  encode(_: QueryAuctionParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryAuctionParamsRequest>): QueryAuctionParamsRequest {
    const message = createBaseQueryAuctionParamsRequest();
    return message;
  },
  fromAmino(_: QueryAuctionParamsRequestAmino): QueryAuctionParamsRequest {
    const message = createBaseQueryAuctionParamsRequest();
    return message;
  },
  toAmino(_: QueryAuctionParamsRequest): QueryAuctionParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAuctionParamsRequestAminoMsg): QueryAuctionParamsRequest {
    return QueryAuctionParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionParamsRequestProtoMsg): QueryAuctionParamsRequest {
    return QueryAuctionParamsRequest.decode(message.value);
  },
  toProto(message: QueryAuctionParamsRequest): Uint8Array {
    return QueryAuctionParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionParamsRequest): QueryAuctionParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsRequest",
      value: QueryAuctionParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAuctionParamsRequest.typeUrl, QueryAuctionParamsRequest);
function createBaseQueryAuctionParamsResponse(): QueryAuctionParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryAuctionParamsResponse = {
  typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse",
  is(o: any): o is QueryAuctionParamsResponse {
    return o && (o.$typeUrl === QueryAuctionParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryAuctionParamsResponseAmino {
    return o && (o.$typeUrl === QueryAuctionParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryAuctionParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuctionParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAuctionParamsResponse>): QueryAuctionParamsResponse {
    const message = createBaseQueryAuctionParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryAuctionParamsResponseAmino): QueryAuctionParamsResponse {
    const message = createBaseQueryAuctionParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryAuctionParamsResponse): QueryAuctionParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuctionParamsResponseAminoMsg): QueryAuctionParamsResponse {
    return QueryAuctionParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAuctionParamsResponseProtoMsg): QueryAuctionParamsResponse {
    return QueryAuctionParamsResponse.decode(message.value);
  },
  toProto(message: QueryAuctionParamsResponse): Uint8Array {
    return QueryAuctionParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAuctionParamsResponse): QueryAuctionParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryAuctionParamsResponse",
      value: QueryAuctionParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAuctionParamsResponse.typeUrl, QueryAuctionParamsResponse);
function createBaseQueryCurrentAuctionBasketRequest(): QueryCurrentAuctionBasketRequest {
  return {};
}
export const QueryCurrentAuctionBasketRequest = {
  typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest",
  is(o: any): o is QueryCurrentAuctionBasketRequest {
    return o && o.$typeUrl === QueryCurrentAuctionBasketRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCurrentAuctionBasketRequestAmino {
    return o && o.$typeUrl === QueryCurrentAuctionBasketRequest.typeUrl;
  },
  encode(_: QueryCurrentAuctionBasketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentAuctionBasketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentAuctionBasketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryCurrentAuctionBasketRequest>): QueryCurrentAuctionBasketRequest {
    const message = createBaseQueryCurrentAuctionBasketRequest();
    return message;
  },
  fromAmino(_: QueryCurrentAuctionBasketRequestAmino): QueryCurrentAuctionBasketRequest {
    const message = createBaseQueryCurrentAuctionBasketRequest();
    return message;
  },
  toAmino(_: QueryCurrentAuctionBasketRequest): QueryCurrentAuctionBasketRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentAuctionBasketRequestAminoMsg): QueryCurrentAuctionBasketRequest {
    return QueryCurrentAuctionBasketRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentAuctionBasketRequestProtoMsg): QueryCurrentAuctionBasketRequest {
    return QueryCurrentAuctionBasketRequest.decode(message.value);
  },
  toProto(message: QueryCurrentAuctionBasketRequest): Uint8Array {
    return QueryCurrentAuctionBasketRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentAuctionBasketRequest): QueryCurrentAuctionBasketRequestProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketRequest",
      value: QueryCurrentAuctionBasketRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCurrentAuctionBasketRequest.typeUrl, QueryCurrentAuctionBasketRequest);
function createBaseQueryCurrentAuctionBasketResponse(): QueryCurrentAuctionBasketResponse {
  return {
    amount: [],
    auctionRound: BigInt(0),
    auctionClosingTime: BigInt(0),
    highestBidder: "",
    highestBidAmount: ""
  };
}
export const QueryCurrentAuctionBasketResponse = {
  typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse",
  is(o: any): o is QueryCurrentAuctionBasketResponse {
    return o && (o.$typeUrl === QueryCurrentAuctionBasketResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.auctionRound === "bigint" && typeof o.auctionClosingTime === "bigint" && typeof o.highestBidder === "string" && typeof o.highestBidAmount === "string");
  },
  isAmino(o: any): o is QueryCurrentAuctionBasketResponseAmino {
    return o && (o.$typeUrl === QueryCurrentAuctionBasketResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.auctionRound === "bigint" && typeof o.auctionClosingTime === "bigint" && typeof o.highestBidder === "string" && typeof o.highestBidAmount === "string");
  },
  encode(message: QueryCurrentAuctionBasketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.auctionRound !== BigInt(0)) {
      writer.uint32(16).uint64(message.auctionRound);
    }
    if (message.auctionClosingTime !== BigInt(0)) {
      writer.uint32(24).int64(message.auctionClosingTime);
    }
    if (message.highestBidder !== "") {
      writer.uint32(34).string(message.highestBidder);
    }
    if (message.highestBidAmount !== "") {
      writer.uint32(42).string(message.highestBidAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentAuctionBasketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentAuctionBasketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.auctionRound = reader.uint64();
          break;
        case 3:
          message.auctionClosingTime = reader.int64();
          break;
        case 4:
          message.highestBidder = reader.string();
          break;
        case 5:
          message.highestBidAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCurrentAuctionBasketResponse>): QueryCurrentAuctionBasketResponse {
    const message = createBaseQueryCurrentAuctionBasketResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? BigInt(object.auctionRound.toString()) : BigInt(0);
    message.auctionClosingTime = object.auctionClosingTime !== undefined && object.auctionClosingTime !== null ? BigInt(object.auctionClosingTime.toString()) : BigInt(0);
    message.highestBidder = object.highestBidder ?? "";
    message.highestBidAmount = object.highestBidAmount ?? "";
    return message;
  },
  fromAmino(object: QueryCurrentAuctionBasketResponseAmino): QueryCurrentAuctionBasketResponse {
    const message = createBaseQueryCurrentAuctionBasketResponse();
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.auctionRound !== undefined && object.auctionRound !== null) {
      message.auctionRound = BigInt(object.auctionRound);
    }
    if (object.auctionClosingTime !== undefined && object.auctionClosingTime !== null) {
      message.auctionClosingTime = BigInt(object.auctionClosingTime);
    }
    if (object.highestBidder !== undefined && object.highestBidder !== null) {
      message.highestBidder = object.highestBidder;
    }
    if (object.highestBidAmount !== undefined && object.highestBidAmount !== null) {
      message.highestBidAmount = object.highestBidAmount;
    }
    return message;
  },
  toAmino(message: QueryCurrentAuctionBasketResponse): QueryCurrentAuctionBasketResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.auctionRound = message.auctionRound !== BigInt(0) ? message.auctionRound.toString() : undefined;
    obj.auctionClosingTime = message.auctionClosingTime !== BigInt(0) ? message.auctionClosingTime.toString() : undefined;
    obj.highestBidder = message.highestBidder === "" ? undefined : message.highestBidder;
    obj.highestBidAmount = message.highestBidAmount === "" ? undefined : message.highestBidAmount;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentAuctionBasketResponseAminoMsg): QueryCurrentAuctionBasketResponse {
    return QueryCurrentAuctionBasketResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentAuctionBasketResponseProtoMsg): QueryCurrentAuctionBasketResponse {
    return QueryCurrentAuctionBasketResponse.decode(message.value);
  },
  toProto(message: QueryCurrentAuctionBasketResponse): Uint8Array {
    return QueryCurrentAuctionBasketResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentAuctionBasketResponse): QueryCurrentAuctionBasketResponseProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryCurrentAuctionBasketResponse",
      value: QueryCurrentAuctionBasketResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCurrentAuctionBasketResponse.typeUrl, QueryCurrentAuctionBasketResponse);
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest",
  is(o: any): o is QueryModuleStateRequest {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateRequestAmino {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryModuleStateRequest.typeUrl, QueryModuleStateRequest);
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse",
  is(o: any): o is QueryModuleStateResponse {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateResponseAmino {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = GenesisState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryModuleStateResponse.typeUrl, QueryModuleStateResponse);