import { Params, ParamsAmino, Bid, BidAmino, LastAuctionResult, LastAuctionResultAmino } from "./auction";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to auction. */
  params: Params;
  /** current auction round */
  auctionRound: bigint;
  /** current highest bid */
  highestBid?: Bid;
  /** auction ending timestamp */
  auctionEndingTimestamp: bigint;
  /** last auction result */
  lastAuctionResult?: LastAuctionResult;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.auction.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the auction module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to auction. */
  params: ParamsAmino;
  /** current auction round */
  auction_round: string;
  /** current highest bid */
  highest_bid?: BidAmino;
  /** auction ending timestamp */
  auction_ending_timestamp: string;
  /** last auction result */
  last_auction_result?: LastAuctionResultAmino;
}
export interface GenesisStateAminoMsg {
  type: "/injective.auction.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    auctionRound: BigInt(0),
    highestBid: undefined,
    auctionEndingTimestamp: BigInt(0),
    lastAuctionResult: undefined
  };
}
export const GenesisState = {
  typeUrl: "/injective.auction.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && typeof o.auctionRound === "bigint" && typeof o.auctionEndingTimestamp === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && typeof o.auction_round === "bigint" && typeof o.auction_ending_timestamp === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.auctionRound !== BigInt(0)) {
      writer.uint32(16).uint64(message.auctionRound);
    }
    if (message.highestBid !== undefined) {
      Bid.encode(message.highestBid, writer.uint32(26).fork()).ldelim();
    }
    if (message.auctionEndingTimestamp !== BigInt(0)) {
      writer.uint32(32).int64(message.auctionEndingTimestamp);
    }
    if (message.lastAuctionResult !== undefined) {
      LastAuctionResult.encode(message.lastAuctionResult, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.auctionRound = reader.uint64();
          break;
        case 3:
          message.highestBid = Bid.decode(reader, reader.uint32());
          break;
        case 4:
          message.auctionEndingTimestamp = reader.int64();
          break;
        case 5:
          message.lastAuctionResult = LastAuctionResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.auctionRound = object.auctionRound !== undefined && object.auctionRound !== null ? BigInt(object.auctionRound.toString()) : BigInt(0);
    message.highestBid = object.highestBid !== undefined && object.highestBid !== null ? Bid.fromPartial(object.highestBid) : undefined;
    message.auctionEndingTimestamp = object.auctionEndingTimestamp !== undefined && object.auctionEndingTimestamp !== null ? BigInt(object.auctionEndingTimestamp.toString()) : BigInt(0);
    message.lastAuctionResult = object.lastAuctionResult !== undefined && object.lastAuctionResult !== null ? LastAuctionResult.fromPartial(object.lastAuctionResult) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.auction_round !== undefined && object.auction_round !== null) {
      message.auctionRound = BigInt(object.auction_round);
    }
    if (object.highest_bid !== undefined && object.highest_bid !== null) {
      message.highestBid = Bid.fromAmino(object.highest_bid);
    }
    if (object.auction_ending_timestamp !== undefined && object.auction_ending_timestamp !== null) {
      message.auctionEndingTimestamp = BigInt(object.auction_ending_timestamp);
    }
    if (object.last_auction_result !== undefined && object.last_auction_result !== null) {
      message.lastAuctionResult = LastAuctionResult.fromAmino(object.last_auction_result);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.auction_round = message.auctionRound !== BigInt(0) ? message.auctionRound?.toString() : undefined;
    obj.highest_bid = message.highestBid ? Bid.toAmino(message.highestBid) : undefined;
    obj.auction_ending_timestamp = message.auctionEndingTimestamp !== BigInt(0) ? message.auctionEndingTimestamp?.toString() : undefined;
    obj.last_auction_result = message.lastAuctionResult ? LastAuctionResult.toAmino(message.lastAuctionResult) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.auction.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    Bid.registerTypeUrl();
    LastAuctionResult.registerTypeUrl();
  }
};