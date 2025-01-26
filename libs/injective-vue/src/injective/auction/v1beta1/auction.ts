import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface Params {
  /** auction_period_duration defines the auction period duration */
  auctionPeriod: bigint;
  /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
  minNextBidIncrementRate: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.auction.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /** auction_period_duration defines the auction period duration */
  auction_period: string;
  /** min_next_bid_increment_rate defines the minimum increment rate for new bids */
  min_next_bid_increment_rate: string;
}
export interface ParamsAminoMsg {
  type: "auction/Params";
  value: ParamsAmino;
}
export interface Bid {
  bidder: string;
  amount: string;
}
export interface BidProtoMsg {
  typeUrl: "/injective.auction.v1beta1.Bid";
  value: Uint8Array;
}
export interface BidAmino {
  bidder: string;
  amount: string;
}
export interface BidAminoMsg {
  type: "/injective.auction.v1beta1.Bid";
  value: BidAmino;
}
export interface LastAuctionResult {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */
  amount: string;
  /** round defines the round number of auction */
  round: bigint;
}
export interface LastAuctionResultProtoMsg {
  typeUrl: "/injective.auction.v1beta1.LastAuctionResult";
  value: Uint8Array;
}
export interface LastAuctionResultAmino {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */
  amount: string;
  /** round defines the round number of auction */
  round: string;
}
export interface LastAuctionResultAminoMsg {
  type: "/injective.auction.v1beta1.LastAuctionResult";
  value: LastAuctionResultAmino;
}
export interface EventBid {
  /** bidder describes the address of bidder */
  bidder: string;
  /** amount describes the amount the bidder put on the auction */
  amount: string;
  /** round defines the round number of auction */
  round: bigint;
}
export interface EventBidProtoMsg {
  typeUrl: "/injective.auction.v1beta1.EventBid";
  value: Uint8Array;
}
export interface EventBidAmino {
  /** bidder describes the address of bidder */
  bidder: string;
  /** amount describes the amount the bidder put on the auction */
  amount: string;
  /** round defines the round number of auction */
  round: string;
}
export interface EventBidAminoMsg {
  type: "/injective.auction.v1beta1.EventBid";
  value: EventBidAmino;
}
export interface EventAuctionResult {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */
  amount: string;
  /** round defines the round number of auction */
  round: bigint;
}
export interface EventAuctionResultProtoMsg {
  typeUrl: "/injective.auction.v1beta1.EventAuctionResult";
  value: Uint8Array;
}
export interface EventAuctionResultAmino {
  /** winner describes the address of the winner */
  winner: string;
  /** amount describes the amount the winner get from the auction */
  amount: string;
  /** round defines the round number of auction */
  round: string;
}
export interface EventAuctionResultAminoMsg {
  type: "/injective.auction.v1beta1.EventAuctionResult";
  value: EventAuctionResultAmino;
}
export interface EventAuctionStart {
  /** round defines the round number of auction */
  round: bigint;
  /** ending_timestamp describes auction end time */
  endingTimestamp: bigint;
  /**
   * new_basket describes auction module balance at the time of new auction
   * start
   */
  newBasket: Coin[];
}
export interface EventAuctionStartProtoMsg {
  typeUrl: "/injective.auction.v1beta1.EventAuctionStart";
  value: Uint8Array;
}
export interface EventAuctionStartAmino {
  /** round defines the round number of auction */
  round: string;
  /** ending_timestamp describes auction end time */
  ending_timestamp: string;
  /**
   * new_basket describes auction module balance at the time of new auction
   * start
   */
  new_basket: CoinAmino[];
}
export interface EventAuctionStartAminoMsg {
  type: "/injective.auction.v1beta1.EventAuctionStart";
  value: EventAuctionStartAmino;
}
function createBaseParams(): Params {
  return {
    auctionPeriod: BigInt(0),
    minNextBidIncrementRate: ""
  };
}
export const Params = {
  typeUrl: "/injective.auction.v1beta1.Params",
  aminoType: "auction/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.auctionPeriod === "bigint" && typeof o.minNextBidIncrementRate === "string");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.auction_period === "bigint" && typeof o.min_next_bid_increment_rate === "string");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auctionPeriod !== BigInt(0)) {
      writer.uint32(8).int64(message.auctionPeriod);
    }
    if (message.minNextBidIncrementRate !== "") {
      writer.uint32(18).string(message.minNextBidIncrementRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionPeriod = reader.int64();
          break;
        case 2:
          message.minNextBidIncrementRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.auctionPeriod = object.auctionPeriod !== undefined && object.auctionPeriod !== null ? BigInt(object.auctionPeriod.toString()) : BigInt(0);
    message.minNextBidIncrementRate = object.minNextBidIncrementRate ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.auction_period !== undefined && object.auction_period !== null) {
      message.auctionPeriod = BigInt(object.auction_period);
    }
    if (object.min_next_bid_increment_rate !== undefined && object.min_next_bid_increment_rate !== null) {
      message.minNextBidIncrementRate = object.min_next_bid_increment_rate;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.auction_period = message.auctionPeriod !== BigInt(0) ? message.auctionPeriod?.toString() : undefined;
    obj.min_next_bid_increment_rate = message.minNextBidIncrementRate === "" ? undefined : message.minNextBidIncrementRate;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "auction/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseBid(): Bid {
  return {
    bidder: "",
    amount: ""
  };
}
export const Bid = {
  typeUrl: "/injective.auction.v1beta1.Bid",
  is(o: any): o is Bid {
    return o && (o.$typeUrl === Bid.typeUrl || typeof o.bidder === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is BidAmino {
    return o && (o.$typeUrl === Bid.typeUrl || typeof o.bidder === "string" && typeof o.amount === "string");
  },
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = createBaseBid();
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: BidAmino): Bid {
    const message = createBaseBid();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.bidder = message.bidder ?? "";
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.Bid",
      value: Bid.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Bid.typeUrl, Bid);
function createBaseLastAuctionResult(): LastAuctionResult {
  return {
    winner: "",
    amount: "",
    round: BigInt(0)
  };
}
export const LastAuctionResult = {
  typeUrl: "/injective.auction.v1beta1.LastAuctionResult",
  is(o: any): o is LastAuctionResult {
    return o && (o.$typeUrl === LastAuctionResult.typeUrl || typeof o.winner === "string" && typeof o.amount === "string" && typeof o.round === "bigint");
  },
  isAmino(o: any): o is LastAuctionResultAmino {
    return o && (o.$typeUrl === LastAuctionResult.typeUrl || typeof o.winner === "string" && typeof o.amount === "string" && typeof o.round === "bigint");
  },
  encode(message: LastAuctionResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.winner !== "") {
      writer.uint32(10).string(message.winner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastAuctionResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastAuctionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winner = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.round = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LastAuctionResult>): LastAuctionResult {
    const message = createBaseLastAuctionResult();
    message.winner = object.winner ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LastAuctionResultAmino): LastAuctionResult {
    const message = createBaseLastAuctionResult();
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    return message;
  },
  toAmino(message: LastAuctionResult): LastAuctionResultAmino {
    const obj: any = {};
    obj.winner = message.winner === "" ? undefined : message.winner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LastAuctionResultAminoMsg): LastAuctionResult {
    return LastAuctionResult.fromAmino(object.value);
  },
  fromProtoMsg(message: LastAuctionResultProtoMsg): LastAuctionResult {
    return LastAuctionResult.decode(message.value);
  },
  toProto(message: LastAuctionResult): Uint8Array {
    return LastAuctionResult.encode(message).finish();
  },
  toProtoMsg(message: LastAuctionResult): LastAuctionResultProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.LastAuctionResult",
      value: LastAuctionResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LastAuctionResult.typeUrl, LastAuctionResult);
function createBaseEventBid(): EventBid {
  return {
    bidder: "",
    amount: "",
    round: BigInt(0)
  };
}
export const EventBid = {
  typeUrl: "/injective.auction.v1beta1.EventBid",
  is(o: any): o is EventBid {
    return o && (o.$typeUrl === EventBid.typeUrl || typeof o.bidder === "string" && typeof o.amount === "string" && typeof o.round === "bigint");
  },
  isAmino(o: any): o is EventBidAmino {
    return o && (o.$typeUrl === EventBid.typeUrl || typeof o.bidder === "string" && typeof o.amount === "string" && typeof o.round === "bigint");
  },
  encode(message: EventBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.round = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBid>): EventBid {
    const message = createBaseEventBid();
    message.bidder = object.bidder ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBidAmino): EventBid {
    const message = createBaseEventBid();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    return message;
  },
  toAmino(message: EventBid): EventBidAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBidAminoMsg): EventBid {
    return EventBid.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBidProtoMsg): EventBid {
    return EventBid.decode(message.value);
  },
  toProto(message: EventBid): Uint8Array {
    return EventBid.encode(message).finish();
  },
  toProtoMsg(message: EventBid): EventBidProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.EventBid",
      value: EventBid.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBid.typeUrl, EventBid);
function createBaseEventAuctionResult(): EventAuctionResult {
  return {
    winner: "",
    amount: "",
    round: BigInt(0)
  };
}
export const EventAuctionResult = {
  typeUrl: "/injective.auction.v1beta1.EventAuctionResult",
  is(o: any): o is EventAuctionResult {
    return o && (o.$typeUrl === EventAuctionResult.typeUrl || typeof o.winner === "string" && typeof o.amount === "string" && typeof o.round === "bigint");
  },
  isAmino(o: any): o is EventAuctionResultAmino {
    return o && (o.$typeUrl === EventAuctionResult.typeUrl || typeof o.winner === "string" && typeof o.amount === "string" && typeof o.round === "bigint");
  },
  encode(message: EventAuctionResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.winner !== "") {
      writer.uint32(10).string(message.winner);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).uint64(message.round);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAuctionResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAuctionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.winner = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.round = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAuctionResult>): EventAuctionResult {
    const message = createBaseEventAuctionResult();
    message.winner = object.winner ?? "";
    message.amount = object.amount ?? "";
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventAuctionResultAmino): EventAuctionResult {
    const message = createBaseEventAuctionResult();
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    return message;
  },
  toAmino(message: EventAuctionResult): EventAuctionResultAmino {
    const obj: any = {};
    obj.winner = message.winner === "" ? undefined : message.winner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventAuctionResultAminoMsg): EventAuctionResult {
    return EventAuctionResult.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAuctionResultProtoMsg): EventAuctionResult {
    return EventAuctionResult.decode(message.value);
  },
  toProto(message: EventAuctionResult): Uint8Array {
    return EventAuctionResult.encode(message).finish();
  },
  toProtoMsg(message: EventAuctionResult): EventAuctionResultProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.EventAuctionResult",
      value: EventAuctionResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventAuctionResult.typeUrl, EventAuctionResult);
function createBaseEventAuctionStart(): EventAuctionStart {
  return {
    round: BigInt(0),
    endingTimestamp: BigInt(0),
    newBasket: []
  };
}
export const EventAuctionStart = {
  typeUrl: "/injective.auction.v1beta1.EventAuctionStart",
  is(o: any): o is EventAuctionStart {
    return o && (o.$typeUrl === EventAuctionStart.typeUrl || typeof o.round === "bigint" && typeof o.endingTimestamp === "bigint" && Array.isArray(o.newBasket) && (!o.newBasket.length || Coin.is(o.newBasket[0])));
  },
  isAmino(o: any): o is EventAuctionStartAmino {
    return o && (o.$typeUrl === EventAuctionStart.typeUrl || typeof o.round === "bigint" && typeof o.ending_timestamp === "bigint" && Array.isArray(o.new_basket) && (!o.new_basket.length || Coin.isAmino(o.new_basket[0])));
  },
  encode(message: EventAuctionStart, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.round !== BigInt(0)) {
      writer.uint32(8).uint64(message.round);
    }
    if (message.endingTimestamp !== BigInt(0)) {
      writer.uint32(16).int64(message.endingTimestamp);
    }
    for (const v of message.newBasket) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAuctionStart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAuctionStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.round = reader.uint64();
          break;
        case 2:
          message.endingTimestamp = reader.int64();
          break;
        case 3:
          message.newBasket.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAuctionStart>): EventAuctionStart {
    const message = createBaseEventAuctionStart();
    message.round = object.round !== undefined && object.round !== null ? BigInt(object.round.toString()) : BigInt(0);
    message.endingTimestamp = object.endingTimestamp !== undefined && object.endingTimestamp !== null ? BigInt(object.endingTimestamp.toString()) : BigInt(0);
    message.newBasket = object.newBasket?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventAuctionStartAmino): EventAuctionStart {
    const message = createBaseEventAuctionStart();
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    if (object.ending_timestamp !== undefined && object.ending_timestamp !== null) {
      message.endingTimestamp = BigInt(object.ending_timestamp);
    }
    message.newBasket = object.new_basket?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventAuctionStart): EventAuctionStartAmino {
    const obj: any = {};
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    obj.ending_timestamp = message.endingTimestamp !== BigInt(0) ? message.endingTimestamp?.toString() : undefined;
    if (message.newBasket) {
      obj.new_basket = message.newBasket.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.new_basket = message.newBasket;
    }
    return obj;
  },
  fromAminoMsg(object: EventAuctionStartAminoMsg): EventAuctionStart {
    return EventAuctionStart.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAuctionStartProtoMsg): EventAuctionStart {
    return EventAuctionStart.decode(message.value);
  },
  toProto(message: EventAuctionStart): Uint8Array {
    return EventAuctionStart.encode(message).finish();
  },
  toProtoMsg(message: EventAuctionStart): EventAuctionStartProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.EventAuctionStart",
      value: EventAuctionStart.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventAuctionStart.typeUrl, EventAuctionStart);