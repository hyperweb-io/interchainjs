import { StorkPriceState, StorkPriceStateAmino, PythPriceState, PythPriceStateAmino } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface SetChainlinkPriceEvent {
  feedId: string;
  answer: string;
  timestamp: bigint;
}
export interface SetChainlinkPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetChainlinkPriceEvent";
  value: Uint8Array;
}
export interface SetChainlinkPriceEventAmino {
  feed_id: string;
  answer: string;
  timestamp: string;
}
export interface SetChainlinkPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetChainlinkPriceEvent";
  value: SetChainlinkPriceEventAmino;
}
/** Event type upon set ref */
export interface SetBandPriceEvent {
  relayer: string;
  symbol: string;
  price: string;
  resolveTime: bigint;
  requestId: bigint;
}
export interface SetBandPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetBandPriceEvent";
  value: Uint8Array;
}
/** Event type upon set ref */
export interface SetBandPriceEventAmino {
  relayer: string;
  symbol: string;
  price: string;
  resolve_time: string;
  request_id: string;
}
export interface SetBandPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetBandPriceEvent";
  value: SetBandPriceEventAmino;
}
export interface SetBandIBCPriceEvent {
  relayer: string;
  symbols: string[];
  prices: string[];
  resolveTime: bigint;
  requestId: bigint;
  clientId: bigint;
}
export interface SetBandIBCPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetBandIBCPriceEvent";
  value: Uint8Array;
}
export interface SetBandIBCPriceEventAmino {
  relayer: string;
  symbols: string[];
  prices: string[];
  resolve_time: string;
  request_id: string;
  client_id: string;
}
export interface SetBandIBCPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetBandIBCPriceEvent";
  value: SetBandIBCPriceEventAmino;
}
export interface EventBandIBCAckSuccess {
  ackResult: string;
  clientId: bigint;
}
export interface EventBandIBCAckSuccessProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckSuccess";
  value: Uint8Array;
}
export interface EventBandIBCAckSuccessAmino {
  ack_result: string;
  client_id: string;
}
export interface EventBandIBCAckSuccessAminoMsg {
  type: "/injective.oracle.v1beta1.EventBandIBCAckSuccess";
  value: EventBandIBCAckSuccessAmino;
}
export interface EventBandIBCAckError {
  ackError: string;
  clientId: bigint;
}
export interface EventBandIBCAckErrorProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckError";
  value: Uint8Array;
}
export interface EventBandIBCAckErrorAmino {
  ack_error: string;
  client_id: string;
}
export interface EventBandIBCAckErrorAminoMsg {
  type: "/injective.oracle.v1beta1.EventBandIBCAckError";
  value: EventBandIBCAckErrorAmino;
}
export interface EventBandIBCResponseTimeout {
  clientId: bigint;
}
export interface EventBandIBCResponseTimeoutProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout";
  value: Uint8Array;
}
export interface EventBandIBCResponseTimeoutAmino {
  client_id: string;
}
export interface EventBandIBCResponseTimeoutAminoMsg {
  type: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout";
  value: EventBandIBCResponseTimeoutAmino;
}
export interface SetPriceFeedPriceEvent {
  relayer: string;
  base: string;
  quote: string;
  /** price defines the price of the oracle base and quote */
  price: string;
}
export interface SetPriceFeedPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent";
  value: Uint8Array;
}
export interface SetPriceFeedPriceEventAmino {
  relayer: string;
  base: string;
  quote: string;
  /** price defines the price of the oracle base and quote */
  price: string;
}
export interface SetPriceFeedPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent";
  value: SetPriceFeedPriceEventAmino;
}
export interface SetProviderPriceEvent {
  provider: string;
  relayer: string;
  symbol: string;
  price: string;
}
export interface SetProviderPriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetProviderPriceEvent";
  value: Uint8Array;
}
export interface SetProviderPriceEventAmino {
  provider: string;
  relayer: string;
  symbol: string;
  price: string;
}
export interface SetProviderPriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetProviderPriceEvent";
  value: SetProviderPriceEventAmino;
}
export interface SetCoinbasePriceEvent {
  symbol: string;
  price: string;
  timestamp: bigint;
}
export interface SetCoinbasePriceEventProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.SetCoinbasePriceEvent";
  value: Uint8Array;
}
export interface SetCoinbasePriceEventAmino {
  symbol: string;
  price: string;
  timestamp: string;
}
export interface SetCoinbasePriceEventAminoMsg {
  type: "/injective.oracle.v1beta1.SetCoinbasePriceEvent";
  value: SetCoinbasePriceEventAmino;
}
export interface EventSetStorkPrices {
  prices: StorkPriceState[];
}
export interface EventSetStorkPricesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EventSetStorkPrices";
  value: Uint8Array;
}
export interface EventSetStorkPricesAmino {
  prices: StorkPriceStateAmino[];
}
export interface EventSetStorkPricesAminoMsg {
  type: "/injective.oracle.v1beta1.EventSetStorkPrices";
  value: EventSetStorkPricesAmino;
}
export interface EventSetPythPrices {
  prices: PythPriceState[];
}
export interface EventSetPythPricesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EventSetPythPrices";
  value: Uint8Array;
}
export interface EventSetPythPricesAmino {
  prices: PythPriceStateAmino[];
}
export interface EventSetPythPricesAminoMsg {
  type: "/injective.oracle.v1beta1.EventSetPythPrices";
  value: EventSetPythPricesAmino;
}
function createBaseSetChainlinkPriceEvent(): SetChainlinkPriceEvent {
  return {
    feedId: "",
    answer: "",
    timestamp: BigInt(0)
  };
}
export const SetChainlinkPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetChainlinkPriceEvent",
  is(o: any): o is SetChainlinkPriceEvent {
    return o && (o.$typeUrl === SetChainlinkPriceEvent.typeUrl || typeof o.feedId === "string" && typeof o.answer === "string" && typeof o.timestamp === "bigint");
  },
  isAmino(o: any): o is SetChainlinkPriceEventAmino {
    return o && (o.$typeUrl === SetChainlinkPriceEvent.typeUrl || typeof o.feed_id === "string" && typeof o.answer === "string" && typeof o.timestamp === "bigint");
  },
  encode(message: SetChainlinkPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    if (message.answer !== "") {
      writer.uint32(18).string(message.answer);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetChainlinkPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetChainlinkPriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        case 2:
          message.answer = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetChainlinkPriceEvent>): SetChainlinkPriceEvent {
    const message = createBaseSetChainlinkPriceEvent();
    message.feedId = object.feedId ?? "";
    message.answer = object.answer ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SetChainlinkPriceEventAmino): SetChainlinkPriceEvent {
    const message = createBaseSetChainlinkPriceEvent();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = object.answer;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: SetChainlinkPriceEvent): SetChainlinkPriceEventAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    obj.answer = message.answer === "" ? undefined : message.answer;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SetChainlinkPriceEventAminoMsg): SetChainlinkPriceEvent {
    return SetChainlinkPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetChainlinkPriceEventProtoMsg): SetChainlinkPriceEvent {
    return SetChainlinkPriceEvent.decode(message.value);
  },
  toProto(message: SetChainlinkPriceEvent): Uint8Array {
    return SetChainlinkPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetChainlinkPriceEvent): SetChainlinkPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetChainlinkPriceEvent",
      value: SetChainlinkPriceEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SetChainlinkPriceEvent.typeUrl, SetChainlinkPriceEvent);
function createBaseSetBandPriceEvent(): SetBandPriceEvent {
  return {
    relayer: "",
    symbol: "",
    price: "",
    resolveTime: BigInt(0),
    requestId: BigInt(0)
  };
}
export const SetBandPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetBandPriceEvent",
  is(o: any): o is SetBandPriceEvent {
    return o && (o.$typeUrl === SetBandPriceEvent.typeUrl || typeof o.relayer === "string" && typeof o.symbol === "string" && typeof o.price === "string" && typeof o.resolveTime === "bigint" && typeof o.requestId === "bigint");
  },
  isAmino(o: any): o is SetBandPriceEventAmino {
    return o && (o.$typeUrl === SetBandPriceEvent.typeUrl || typeof o.relayer === "string" && typeof o.symbol === "string" && typeof o.price === "string" && typeof o.resolve_time === "bigint" && typeof o.request_id === "bigint");
  },
  encode(message: SetBandPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.resolveTime !== BigInt(0)) {
      writer.uint32(32).uint64(message.resolveTime);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(40).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetBandPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetBandPriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        case 4:
          message.resolveTime = reader.uint64();
          break;
        case 5:
          message.requestId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetBandPriceEvent>): SetBandPriceEvent {
    const message = createBaseSetBandPriceEvent();
    message.relayer = object.relayer ?? "";
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SetBandPriceEventAmino): SetBandPriceEvent {
    const message = createBaseSetBandPriceEvent();
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.resolve_time !== undefined && object.resolve_time !== null) {
      message.resolveTime = BigInt(object.resolve_time);
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    return message;
  },
  toAmino(message: SetBandPriceEvent): SetBandPriceEventAmino {
    const obj: any = {};
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.price = message.price === "" ? undefined : message.price;
    obj.resolve_time = message.resolveTime !== BigInt(0) ? message.resolveTime?.toString() : undefined;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SetBandPriceEventAminoMsg): SetBandPriceEvent {
    return SetBandPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetBandPriceEventProtoMsg): SetBandPriceEvent {
    return SetBandPriceEvent.decode(message.value);
  },
  toProto(message: SetBandPriceEvent): Uint8Array {
    return SetBandPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetBandPriceEvent): SetBandPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetBandPriceEvent",
      value: SetBandPriceEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SetBandPriceEvent.typeUrl, SetBandPriceEvent);
function createBaseSetBandIBCPriceEvent(): SetBandIBCPriceEvent {
  return {
    relayer: "",
    symbols: [],
    prices: [],
    resolveTime: BigInt(0),
    requestId: BigInt(0),
    clientId: BigInt(0)
  };
}
export const SetBandIBCPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetBandIBCPriceEvent",
  is(o: any): o is SetBandIBCPriceEvent {
    return o && (o.$typeUrl === SetBandIBCPriceEvent.typeUrl || typeof o.relayer === "string" && Array.isArray(o.symbols) && (!o.symbols.length || typeof o.symbols[0] === "string") && Array.isArray(o.prices) && (!o.prices.length || typeof o.prices[0] === "string") && typeof o.resolveTime === "bigint" && typeof o.requestId === "bigint" && typeof o.clientId === "bigint");
  },
  isAmino(o: any): o is SetBandIBCPriceEventAmino {
    return o && (o.$typeUrl === SetBandIBCPriceEvent.typeUrl || typeof o.relayer === "string" && Array.isArray(o.symbols) && (!o.symbols.length || typeof o.symbols[0] === "string") && Array.isArray(o.prices) && (!o.prices.length || typeof o.prices[0] === "string") && typeof o.resolve_time === "bigint" && typeof o.request_id === "bigint" && typeof o.client_id === "bigint");
  },
  encode(message: SetBandIBCPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.prices) {
      writer.uint32(26).string(v!);
    }
    if (message.resolveTime !== BigInt(0)) {
      writer.uint32(32).uint64(message.resolveTime);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(40).uint64(message.requestId);
    }
    if (message.clientId !== BigInt(0)) {
      writer.uint32(48).int64(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetBandIBCPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetBandIBCPriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;
        case 2:
          message.symbols.push(reader.string());
          break;
        case 3:
          message.prices.push(reader.string());
          break;
        case 4:
          message.resolveTime = reader.uint64();
          break;
        case 5:
          message.requestId = reader.uint64();
          break;
        case 6:
          message.clientId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetBandIBCPriceEvent>): SetBandIBCPriceEvent {
    const message = createBaseSetBandIBCPriceEvent();
    message.relayer = object.relayer ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    message.resolveTime = object.resolveTime !== undefined && object.resolveTime !== null ? BigInt(object.resolveTime.toString()) : BigInt(0);
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SetBandIBCPriceEventAmino): SetBandIBCPriceEvent {
    const message = createBaseSetBandIBCPriceEvent();
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    if (object.resolve_time !== undefined && object.resolve_time !== null) {
      message.resolveTime = BigInt(object.resolve_time);
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = BigInt(object.client_id);
    }
    return message;
  },
  toAmino(message: SetBandIBCPriceEvent): SetBandIBCPriceEventAmino {
    const obj: any = {};
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = message.symbols;
    }
    if (message.prices) {
      obj.prices = message.prices.map(e => e);
    } else {
      obj.prices = message.prices;
    }
    obj.resolve_time = message.resolveTime !== BigInt(0) ? message.resolveTime?.toString() : undefined;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId?.toString() : undefined;
    obj.client_id = message.clientId !== BigInt(0) ? message.clientId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SetBandIBCPriceEventAminoMsg): SetBandIBCPriceEvent {
    return SetBandIBCPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetBandIBCPriceEventProtoMsg): SetBandIBCPriceEvent {
    return SetBandIBCPriceEvent.decode(message.value);
  },
  toProto(message: SetBandIBCPriceEvent): Uint8Array {
    return SetBandIBCPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetBandIBCPriceEvent): SetBandIBCPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetBandIBCPriceEvent",
      value: SetBandIBCPriceEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SetBandIBCPriceEvent.typeUrl, SetBandIBCPriceEvent);
function createBaseEventBandIBCAckSuccess(): EventBandIBCAckSuccess {
  return {
    ackResult: "",
    clientId: BigInt(0)
  };
}
export const EventBandIBCAckSuccess = {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckSuccess",
  is(o: any): o is EventBandIBCAckSuccess {
    return o && (o.$typeUrl === EventBandIBCAckSuccess.typeUrl || typeof o.ackResult === "string" && typeof o.clientId === "bigint");
  },
  isAmino(o: any): o is EventBandIBCAckSuccessAmino {
    return o && (o.$typeUrl === EventBandIBCAckSuccess.typeUrl || typeof o.ack_result === "string" && typeof o.client_id === "bigint");
  },
  encode(message: EventBandIBCAckSuccess, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ackResult !== "") {
      writer.uint32(10).string(message.ackResult);
    }
    if (message.clientId !== BigInt(0)) {
      writer.uint32(16).int64(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBandIBCAckSuccess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBandIBCAckSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackResult = reader.string();
          break;
        case 2:
          message.clientId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBandIBCAckSuccess>): EventBandIBCAckSuccess {
    const message = createBaseEventBandIBCAckSuccess();
    message.ackResult = object.ackResult ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBandIBCAckSuccessAmino): EventBandIBCAckSuccess {
    const message = createBaseEventBandIBCAckSuccess();
    if (object.ack_result !== undefined && object.ack_result !== null) {
      message.ackResult = object.ack_result;
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = BigInt(object.client_id);
    }
    return message;
  },
  toAmino(message: EventBandIBCAckSuccess): EventBandIBCAckSuccessAmino {
    const obj: any = {};
    obj.ack_result = message.ackResult === "" ? undefined : message.ackResult;
    obj.client_id = message.clientId !== BigInt(0) ? message.clientId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBandIBCAckSuccessAminoMsg): EventBandIBCAckSuccess {
    return EventBandIBCAckSuccess.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBandIBCAckSuccessProtoMsg): EventBandIBCAckSuccess {
    return EventBandIBCAckSuccess.decode(message.value);
  },
  toProto(message: EventBandIBCAckSuccess): Uint8Array {
    return EventBandIBCAckSuccess.encode(message).finish();
  },
  toProtoMsg(message: EventBandIBCAckSuccess): EventBandIBCAckSuccessProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckSuccess",
      value: EventBandIBCAckSuccess.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBandIBCAckSuccess.typeUrl, EventBandIBCAckSuccess);
function createBaseEventBandIBCAckError(): EventBandIBCAckError {
  return {
    ackError: "",
    clientId: BigInt(0)
  };
}
export const EventBandIBCAckError = {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckError",
  is(o: any): o is EventBandIBCAckError {
    return o && (o.$typeUrl === EventBandIBCAckError.typeUrl || typeof o.ackError === "string" && typeof o.clientId === "bigint");
  },
  isAmino(o: any): o is EventBandIBCAckErrorAmino {
    return o && (o.$typeUrl === EventBandIBCAckError.typeUrl || typeof o.ack_error === "string" && typeof o.client_id === "bigint");
  },
  encode(message: EventBandIBCAckError, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ackError !== "") {
      writer.uint32(10).string(message.ackError);
    }
    if (message.clientId !== BigInt(0)) {
      writer.uint32(16).int64(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBandIBCAckError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBandIBCAckError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackError = reader.string();
          break;
        case 2:
          message.clientId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBandIBCAckError>): EventBandIBCAckError {
    const message = createBaseEventBandIBCAckError();
    message.ackError = object.ackError ?? "";
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBandIBCAckErrorAmino): EventBandIBCAckError {
    const message = createBaseEventBandIBCAckError();
    if (object.ack_error !== undefined && object.ack_error !== null) {
      message.ackError = object.ack_error;
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = BigInt(object.client_id);
    }
    return message;
  },
  toAmino(message: EventBandIBCAckError): EventBandIBCAckErrorAmino {
    const obj: any = {};
    obj.ack_error = message.ackError === "" ? undefined : message.ackError;
    obj.client_id = message.clientId !== BigInt(0) ? message.clientId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBandIBCAckErrorAminoMsg): EventBandIBCAckError {
    return EventBandIBCAckError.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBandIBCAckErrorProtoMsg): EventBandIBCAckError {
    return EventBandIBCAckError.decode(message.value);
  },
  toProto(message: EventBandIBCAckError): Uint8Array {
    return EventBandIBCAckError.encode(message).finish();
  },
  toProtoMsg(message: EventBandIBCAckError): EventBandIBCAckErrorProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EventBandIBCAckError",
      value: EventBandIBCAckError.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBandIBCAckError.typeUrl, EventBandIBCAckError);
function createBaseEventBandIBCResponseTimeout(): EventBandIBCResponseTimeout {
  return {
    clientId: BigInt(0)
  };
}
export const EventBandIBCResponseTimeout = {
  typeUrl: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout",
  is(o: any): o is EventBandIBCResponseTimeout {
    return o && (o.$typeUrl === EventBandIBCResponseTimeout.typeUrl || typeof o.clientId === "bigint");
  },
  isAmino(o: any): o is EventBandIBCResponseTimeoutAmino {
    return o && (o.$typeUrl === EventBandIBCResponseTimeout.typeUrl || typeof o.client_id === "bigint");
  },
  encode(message: EventBandIBCResponseTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== BigInt(0)) {
      writer.uint32(8).int64(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBandIBCResponseTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBandIBCResponseTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBandIBCResponseTimeout>): EventBandIBCResponseTimeout {
    const message = createBaseEventBandIBCResponseTimeout();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: EventBandIBCResponseTimeoutAmino): EventBandIBCResponseTimeout {
    const message = createBaseEventBandIBCResponseTimeout();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = BigInt(object.client_id);
    }
    return message;
  },
  toAmino(message: EventBandIBCResponseTimeout): EventBandIBCResponseTimeoutAmino {
    const obj: any = {};
    obj.client_id = message.clientId !== BigInt(0) ? message.clientId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBandIBCResponseTimeoutAminoMsg): EventBandIBCResponseTimeout {
    return EventBandIBCResponseTimeout.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBandIBCResponseTimeoutProtoMsg): EventBandIBCResponseTimeout {
    return EventBandIBCResponseTimeout.decode(message.value);
  },
  toProto(message: EventBandIBCResponseTimeout): Uint8Array {
    return EventBandIBCResponseTimeout.encode(message).finish();
  },
  toProtoMsg(message: EventBandIBCResponseTimeout): EventBandIBCResponseTimeoutProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EventBandIBCResponseTimeout",
      value: EventBandIBCResponseTimeout.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBandIBCResponseTimeout.typeUrl, EventBandIBCResponseTimeout);
function createBaseSetPriceFeedPriceEvent(): SetPriceFeedPriceEvent {
  return {
    relayer: "",
    base: "",
    quote: "",
    price: ""
  };
}
export const SetPriceFeedPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent",
  is(o: any): o is SetPriceFeedPriceEvent {
    return o && (o.$typeUrl === SetPriceFeedPriceEvent.typeUrl || typeof o.relayer === "string" && typeof o.base === "string" && typeof o.quote === "string" && typeof o.price === "string");
  },
  isAmino(o: any): o is SetPriceFeedPriceEventAmino {
    return o && (o.$typeUrl === SetPriceFeedPriceEvent.typeUrl || typeof o.relayer === "string" && typeof o.base === "string" && typeof o.quote === "string" && typeof o.price === "string");
  },
  encode(message: SetPriceFeedPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(26).string(message.quote);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetPriceFeedPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetPriceFeedPriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.quote = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetPriceFeedPriceEvent>): SetPriceFeedPriceEvent {
    const message = createBaseSetPriceFeedPriceEvent();
    message.relayer = object.relayer ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: SetPriceFeedPriceEventAmino): SetPriceFeedPriceEvent {
    const message = createBaseSetPriceFeedPriceEvent();
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: SetPriceFeedPriceEvent): SetPriceFeedPriceEventAmino {
    const obj: any = {};
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: SetPriceFeedPriceEventAminoMsg): SetPriceFeedPriceEvent {
    return SetPriceFeedPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetPriceFeedPriceEventProtoMsg): SetPriceFeedPriceEvent {
    return SetPriceFeedPriceEvent.decode(message.value);
  },
  toProto(message: SetPriceFeedPriceEvent): Uint8Array {
    return SetPriceFeedPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetPriceFeedPriceEvent): SetPriceFeedPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetPriceFeedPriceEvent",
      value: SetPriceFeedPriceEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SetPriceFeedPriceEvent.typeUrl, SetPriceFeedPriceEvent);
function createBaseSetProviderPriceEvent(): SetProviderPriceEvent {
  return {
    provider: "",
    relayer: "",
    symbol: "",
    price: ""
  };
}
export const SetProviderPriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetProviderPriceEvent",
  is(o: any): o is SetProviderPriceEvent {
    return o && (o.$typeUrl === SetProviderPriceEvent.typeUrl || typeof o.provider === "string" && typeof o.relayer === "string" && typeof o.symbol === "string" && typeof o.price === "string");
  },
  isAmino(o: any): o is SetProviderPriceEventAmino {
    return o && (o.$typeUrl === SetProviderPriceEvent.typeUrl || typeof o.provider === "string" && typeof o.relayer === "string" && typeof o.symbol === "string" && typeof o.price === "string");
  },
  encode(message: SetProviderPriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetProviderPriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProviderPriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.provider = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetProviderPriceEvent>): SetProviderPriceEvent {
    const message = createBaseSetProviderPriceEvent();
    message.provider = object.provider ?? "";
    message.relayer = object.relayer ?? "";
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    return message;
  },
  fromAmino(object: SetProviderPriceEventAmino): SetProviderPriceEvent {
    const message = createBaseSetProviderPriceEvent();
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    return message;
  },
  toAmino(message: SetProviderPriceEvent): SetProviderPriceEventAmino {
    const obj: any = {};
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.price = message.price === "" ? undefined : message.price;
    return obj;
  },
  fromAminoMsg(object: SetProviderPriceEventAminoMsg): SetProviderPriceEvent {
    return SetProviderPriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetProviderPriceEventProtoMsg): SetProviderPriceEvent {
    return SetProviderPriceEvent.decode(message.value);
  },
  toProto(message: SetProviderPriceEvent): Uint8Array {
    return SetProviderPriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetProviderPriceEvent): SetProviderPriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetProviderPriceEvent",
      value: SetProviderPriceEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SetProviderPriceEvent.typeUrl, SetProviderPriceEvent);
function createBaseSetCoinbasePriceEvent(): SetCoinbasePriceEvent {
  return {
    symbol: "",
    price: "",
    timestamp: BigInt(0)
  };
}
export const SetCoinbasePriceEvent = {
  typeUrl: "/injective.oracle.v1beta1.SetCoinbasePriceEvent",
  is(o: any): o is SetCoinbasePriceEvent {
    return o && (o.$typeUrl === SetCoinbasePriceEvent.typeUrl || typeof o.symbol === "string" && typeof o.price === "string" && typeof o.timestamp === "bigint");
  },
  isAmino(o: any): o is SetCoinbasePriceEventAmino {
    return o && (o.$typeUrl === SetCoinbasePriceEvent.typeUrl || typeof o.symbol === "string" && typeof o.price === "string" && typeof o.timestamp === "bigint");
  },
  encode(message: SetCoinbasePriceEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SetCoinbasePriceEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCoinbasePriceEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;
        case 2:
          message.price = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SetCoinbasePriceEvent>): SetCoinbasePriceEvent {
    const message = createBaseSetCoinbasePriceEvent();
    message.symbol = object.symbol ?? "";
    message.price = object.price ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SetCoinbasePriceEventAmino): SetCoinbasePriceEvent {
    const message = createBaseSetCoinbasePriceEvent();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: SetCoinbasePriceEvent): SetCoinbasePriceEventAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.price = message.price === "" ? undefined : message.price;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SetCoinbasePriceEventAminoMsg): SetCoinbasePriceEvent {
    return SetCoinbasePriceEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SetCoinbasePriceEventProtoMsg): SetCoinbasePriceEvent {
    return SetCoinbasePriceEvent.decode(message.value);
  },
  toProto(message: SetCoinbasePriceEvent): Uint8Array {
    return SetCoinbasePriceEvent.encode(message).finish();
  },
  toProtoMsg(message: SetCoinbasePriceEvent): SetCoinbasePriceEventProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.SetCoinbasePriceEvent",
      value: SetCoinbasePriceEvent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SetCoinbasePriceEvent.typeUrl, SetCoinbasePriceEvent);
function createBaseEventSetStorkPrices(): EventSetStorkPrices {
  return {
    prices: []
  };
}
export const EventSetStorkPrices = {
  typeUrl: "/injective.oracle.v1beta1.EventSetStorkPrices",
  is(o: any): o is EventSetStorkPrices {
    return o && (o.$typeUrl === EventSetStorkPrices.typeUrl || Array.isArray(o.prices) && (!o.prices.length || StorkPriceState.is(o.prices[0])));
  },
  isAmino(o: any): o is EventSetStorkPricesAmino {
    return o && (o.$typeUrl === EventSetStorkPrices.typeUrl || Array.isArray(o.prices) && (!o.prices.length || StorkPriceState.isAmino(o.prices[0])));
  },
  encode(message: EventSetStorkPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      StorkPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetStorkPrices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetStorkPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(StorkPriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetStorkPrices>): EventSetStorkPrices {
    const message = createBaseEventSetStorkPrices();
    message.prices = object.prices?.map(e => StorkPriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventSetStorkPricesAmino): EventSetStorkPrices {
    const message = createBaseEventSetStorkPrices();
    message.prices = object.prices?.map(e => StorkPriceState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventSetStorkPrices): EventSetStorkPricesAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? StorkPriceState.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: EventSetStorkPricesAminoMsg): EventSetStorkPrices {
    return EventSetStorkPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetStorkPricesProtoMsg): EventSetStorkPrices {
    return EventSetStorkPrices.decode(message.value);
  },
  toProto(message: EventSetStorkPrices): Uint8Array {
    return EventSetStorkPrices.encode(message).finish();
  },
  toProtoMsg(message: EventSetStorkPrices): EventSetStorkPricesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EventSetStorkPrices",
      value: EventSetStorkPrices.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetStorkPrices.typeUrl, EventSetStorkPrices);
function createBaseEventSetPythPrices(): EventSetPythPrices {
  return {
    prices: []
  };
}
export const EventSetPythPrices = {
  typeUrl: "/injective.oracle.v1beta1.EventSetPythPrices",
  is(o: any): o is EventSetPythPrices {
    return o && (o.$typeUrl === EventSetPythPrices.typeUrl || Array.isArray(o.prices) && (!o.prices.length || PythPriceState.is(o.prices[0])));
  },
  isAmino(o: any): o is EventSetPythPricesAmino {
    return o && (o.$typeUrl === EventSetPythPrices.typeUrl || Array.isArray(o.prices) && (!o.prices.length || PythPriceState.isAmino(o.prices[0])));
  },
  encode(message: EventSetPythPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      PythPriceState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetPythPrices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetPythPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(PythPriceState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetPythPrices>): EventSetPythPrices {
    const message = createBaseEventSetPythPrices();
    message.prices = object.prices?.map(e => PythPriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventSetPythPricesAmino): EventSetPythPrices {
    const message = createBaseEventSetPythPrices();
    message.prices = object.prices?.map(e => PythPriceState.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EventSetPythPrices): EventSetPythPricesAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? PythPriceState.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: EventSetPythPricesAminoMsg): EventSetPythPrices {
    return EventSetPythPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetPythPricesProtoMsg): EventSetPythPrices {
    return EventSetPythPrices.decode(message.value);
  },
  toProto(message: EventSetPythPrices): Uint8Array {
    return EventSetPythPrices.encode(message).finish();
  },
  toProtoMsg(message: EventSetPythPrices): EventSetPythPricesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EventSetPythPrices",
      value: EventSetPythPrices.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetPythPrices.typeUrl, EventSetPythPrices);