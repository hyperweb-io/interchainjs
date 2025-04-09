import { Token, TokenAmino } from "./token";
import { Hop, HopAmino } from "../v1/transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: string;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** optional memo */
  memo: string;
}
export interface FungibleTokenPacketDataProtoMsg {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData";
  value: Uint8Array;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataAmino {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: string;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** optional memo */
  memo: string;
}
export interface FungibleTokenPacketDataAminoMsg {
  type: "cosmos-sdk/FungibleTokenPacketData";
  value: FungibleTokenPacketDataAmino;
}
/**
 * FungibleTokenPacketDataV2 defines a struct for the packet payload
 * See FungibleTokenPacketDataV2 spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataV2 {
  /** the tokens to be transferred */
  tokens: Token[];
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** optional memo */
  memo: string;
  /** optional forwarding information */
  forwarding: ForwardingPacketData;
}
export interface FungibleTokenPacketDataV2ProtoMsg {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketDataV2";
  value: Uint8Array;
}
/**
 * FungibleTokenPacketDataV2 defines a struct for the packet payload
 * See FungibleTokenPacketDataV2 spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataV2Amino {
  /** the tokens to be transferred */
  tokens: TokenAmino[];
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /** optional memo */
  memo: string;
  /** optional forwarding information */
  forwarding: ForwardingPacketDataAmino;
}
export interface FungibleTokenPacketDataV2AminoMsg {
  type: "cosmos-sdk/FungibleTokenPacketDataV2";
  value: FungibleTokenPacketDataV2Amino;
}
/**
 * ForwardingPacketData defines a list of port ID, channel ID pairs determining the path
 * through which a packet must be forwarded, and the destination memo string to be used in the
 * final destination of the tokens.
 */
export interface ForwardingPacketData {
  /** optional memo consumed by final destination chain */
  destinationMemo: string;
  /** optional intermediate path through which packet will be forwarded. */
  hops: Hop[];
}
export interface ForwardingPacketDataProtoMsg {
  typeUrl: "/ibc.applications.transfer.v2.ForwardingPacketData";
  value: Uint8Array;
}
/**
 * ForwardingPacketData defines a list of port ID, channel ID pairs determining the path
 * through which a packet must be forwarded, and the destination memo string to be used in the
 * final destination of the tokens.
 */
export interface ForwardingPacketDataAmino {
  /** optional memo consumed by final destination chain */
  destination_memo: string;
  /** optional intermediate path through which packet will be forwarded. */
  hops: HopAmino[];
}
export interface ForwardingPacketDataAminoMsg {
  type: "cosmos-sdk/ForwardingPacketData";
  value: ForwardingPacketDataAmino;
}
function createBaseFungibleTokenPacketData(): FungibleTokenPacketData {
  return {
    denom: "",
    amount: "",
    sender: "",
    receiver: "",
    memo: ""
  };
}
export const FungibleTokenPacketData = {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
  aminoType: "cosmos-sdk/FungibleTokenPacketData",
  is(o: any): o is FungibleTokenPacketData {
    return o && (o.$typeUrl === FungibleTokenPacketData.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.memo === "string");
  },
  isAmino(o: any): o is FungibleTokenPacketDataAmino {
    return o && (o.$typeUrl === FungibleTokenPacketData.typeUrl || typeof o.denom === "string" && typeof o.amount === "string" && typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.memo === "string");
  },
  encode(message: FungibleTokenPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FungibleTokenPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleTokenPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        case 5:
          message.memo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FungibleTokenPacketData>): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.memo = object.memo ?? "";
    return message;
  },
  fromAmino(object: FungibleTokenPacketDataAmino): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    return message;
  },
  toAmino(message: FungibleTokenPacketData): FungibleTokenPacketDataAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.memo = message.memo === "" ? undefined : message.memo;
    return obj;
  },
  fromAminoMsg(object: FungibleTokenPacketDataAminoMsg): FungibleTokenPacketData {
    return FungibleTokenPacketData.fromAmino(object.value);
  },
  toAminoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataAminoMsg {
    return {
      type: "cosmos-sdk/FungibleTokenPacketData",
      value: FungibleTokenPacketData.toAmino(message)
    };
  },
  fromProtoMsg(message: FungibleTokenPacketDataProtoMsg): FungibleTokenPacketData {
    return FungibleTokenPacketData.decode(message.value);
  },
  toProto(message: FungibleTokenPacketData): Uint8Array {
    return FungibleTokenPacketData.encode(message).finish();
  },
  toProtoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
      value: FungibleTokenPacketData.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseFungibleTokenPacketDataV2(): FungibleTokenPacketDataV2 {
  return {
    tokens: [],
    sender: "",
    receiver: "",
    memo: "",
    forwarding: ForwardingPacketData.fromPartial({})
  };
}
export const FungibleTokenPacketDataV2 = {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketDataV2",
  aminoType: "cosmos-sdk/FungibleTokenPacketDataV2",
  is(o: any): o is FungibleTokenPacketDataV2 {
    return o && (o.$typeUrl === FungibleTokenPacketDataV2.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || Token.is(o.tokens[0])) && typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.memo === "string" && ForwardingPacketData.is(o.forwarding));
  },
  isAmino(o: any): o is FungibleTokenPacketDataV2Amino {
    return o && (o.$typeUrl === FungibleTokenPacketDataV2.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || Token.isAmino(o.tokens[0])) && typeof o.sender === "string" && typeof o.receiver === "string" && typeof o.memo === "string" && ForwardingPacketData.isAmino(o.forwarding));
  },
  encode(message: FungibleTokenPacketDataV2, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    if (message.forwarding !== undefined) {
      ForwardingPacketData.encode(message.forwarding, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FungibleTokenPacketDataV2 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleTokenPacketDataV2();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.memo = reader.string();
          break;
        case 5:
          message.forwarding = ForwardingPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FungibleTokenPacketDataV2>): FungibleTokenPacketDataV2 {
    const message = createBaseFungibleTokenPacketDataV2();
    message.tokens = object.tokens?.map(e => Token.fromPartial(e)) || [];
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.memo = object.memo ?? "";
    message.forwarding = object.forwarding !== undefined && object.forwarding !== null ? ForwardingPacketData.fromPartial(object.forwarding) : undefined;
    return message;
  },
  fromAmino(object: FungibleTokenPacketDataV2Amino): FungibleTokenPacketDataV2 {
    const message = createBaseFungibleTokenPacketDataV2();
    message.tokens = object.tokens?.map(e => Token.fromAmino(e)) || [];
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    if (object.forwarding !== undefined && object.forwarding !== null) {
      message.forwarding = ForwardingPacketData.fromAmino(object.forwarding);
    }
    return message;
  },
  toAmino(message: FungibleTokenPacketDataV2): FungibleTokenPacketDataV2Amino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.memo = message.memo === "" ? undefined : message.memo;
    obj.forwarding = message.forwarding ? ForwardingPacketData.toAmino(message.forwarding) : undefined;
    return obj;
  },
  fromAminoMsg(object: FungibleTokenPacketDataV2AminoMsg): FungibleTokenPacketDataV2 {
    return FungibleTokenPacketDataV2.fromAmino(object.value);
  },
  toAminoMsg(message: FungibleTokenPacketDataV2): FungibleTokenPacketDataV2AminoMsg {
    return {
      type: "cosmos-sdk/FungibleTokenPacketDataV2",
      value: FungibleTokenPacketDataV2.toAmino(message)
    };
  },
  fromProtoMsg(message: FungibleTokenPacketDataV2ProtoMsg): FungibleTokenPacketDataV2 {
    return FungibleTokenPacketDataV2.decode(message.value);
  },
  toProto(message: FungibleTokenPacketDataV2): Uint8Array {
    return FungibleTokenPacketDataV2.encode(message).finish();
  },
  toProtoMsg(message: FungibleTokenPacketDataV2): FungibleTokenPacketDataV2ProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketDataV2",
      value: FungibleTokenPacketDataV2.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Token.registerTypeUrl();
    ForwardingPacketData.registerTypeUrl();
  }
};
function createBaseForwardingPacketData(): ForwardingPacketData {
  return {
    destinationMemo: "",
    hops: []
  };
}
export const ForwardingPacketData = {
  typeUrl: "/ibc.applications.transfer.v2.ForwardingPacketData",
  aminoType: "cosmos-sdk/ForwardingPacketData",
  is(o: any): o is ForwardingPacketData {
    return o && (o.$typeUrl === ForwardingPacketData.typeUrl || typeof o.destinationMemo === "string" && Array.isArray(o.hops) && (!o.hops.length || Hop.is(o.hops[0])));
  },
  isAmino(o: any): o is ForwardingPacketDataAmino {
    return o && (o.$typeUrl === ForwardingPacketData.typeUrl || typeof o.destination_memo === "string" && Array.isArray(o.hops) && (!o.hops.length || Hop.isAmino(o.hops[0])));
  },
  encode(message: ForwardingPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.destinationMemo !== "") {
      writer.uint32(10).string(message.destinationMemo);
    }
    for (const v of message.hops) {
      Hop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForwardingPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardingPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destinationMemo = reader.string();
          break;
        case 2:
          message.hops.push(Hop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForwardingPacketData>): ForwardingPacketData {
    const message = createBaseForwardingPacketData();
    message.destinationMemo = object.destinationMemo ?? "";
    message.hops = object.hops?.map(e => Hop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ForwardingPacketDataAmino): ForwardingPacketData {
    const message = createBaseForwardingPacketData();
    if (object.destination_memo !== undefined && object.destination_memo !== null) {
      message.destinationMemo = object.destination_memo;
    }
    message.hops = object.hops?.map(e => Hop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ForwardingPacketData): ForwardingPacketDataAmino {
    const obj: any = {};
    obj.destination_memo = message.destinationMemo === "" ? undefined : message.destinationMemo;
    if (message.hops) {
      obj.hops = message.hops.map(e => e ? Hop.toAmino(e) : undefined);
    } else {
      obj.hops = message.hops;
    }
    return obj;
  },
  fromAminoMsg(object: ForwardingPacketDataAminoMsg): ForwardingPacketData {
    return ForwardingPacketData.fromAmino(object.value);
  },
  toAminoMsg(message: ForwardingPacketData): ForwardingPacketDataAminoMsg {
    return {
      type: "cosmos-sdk/ForwardingPacketData",
      value: ForwardingPacketData.toAmino(message)
    };
  },
  fromProtoMsg(message: ForwardingPacketDataProtoMsg): ForwardingPacketData {
    return ForwardingPacketData.decode(message.value);
  },
  toProto(message: ForwardingPacketData): Uint8Array {
    return ForwardingPacketData.encode(message).finish();
  },
  toProtoMsg(message: ForwardingPacketData): ForwardingPacketDataProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v2.ForwardingPacketData",
      value: ForwardingPacketData.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Hop.registerTypeUrl();
  }
};