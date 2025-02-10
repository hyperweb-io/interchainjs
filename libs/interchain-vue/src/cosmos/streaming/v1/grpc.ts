import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** ListenDeliverBlockRequest is the request type for the ListenDeliverBlock RPC method */
export interface ListenDeliverBlockRequest {
  blockHeight: bigint;
  txs: Uint8Array[];
  events: Event[];
  txResults: ExecTxResult[];
}
export interface ListenDeliverBlockRequestProtoMsg {
  typeUrl: "/cosmos.streaming.v1.ListenDeliverBlockRequest";
  value: Uint8Array;
}
/** ListenDeliverBlockRequest is the request type for the ListenDeliverBlock RPC method */
export interface ListenDeliverBlockRequestAmino {
  block_height: string;
  txs: string[];
  events: EventAmino[];
  tx_results: ExecTxResultAmino[];
}
export interface ListenDeliverBlockRequestAminoMsg {
  type: "cosmos-sdk/ListenDeliverBlockRequest";
  value: ListenDeliverBlockRequestAmino;
}
/** ListenDeliverBlockResponse is the response type for the ListenDeliverBlock RPC method */
export interface ListenDeliverBlockResponse {}
export interface ListenDeliverBlockResponseProtoMsg {
  typeUrl: "/cosmos.streaming.v1.ListenDeliverBlockResponse";
  value: Uint8Array;
}
/** ListenDeliverBlockResponse is the response type for the ListenDeliverBlock RPC method */
export interface ListenDeliverBlockResponseAmino {}
export interface ListenDeliverBlockResponseAminoMsg {
  type: "cosmos-sdk/ListenDeliverBlockResponse";
  value: ListenDeliverBlockResponseAmino;
}
/** ListenStateChangesRequest is the request type for the ListenStateChanges RPC method */
export interface ListenStateChangesRequest {
  blockHeight: bigint;
  changeSet: StoreKVPair[];
  appHash: Uint8Array;
}
export interface ListenStateChangesRequestProtoMsg {
  typeUrl: "/cosmos.streaming.v1.ListenStateChangesRequest";
  value: Uint8Array;
}
/** ListenStateChangesRequest is the request type for the ListenStateChanges RPC method */
export interface ListenStateChangesRequestAmino {
  block_height: string;
  change_set: StoreKVPairAmino[];
  app_hash: string;
}
export interface ListenStateChangesRequestAminoMsg {
  type: "cosmos-sdk/ListenStateChangesRequest";
  value: ListenStateChangesRequestAmino;
}
/** ListenStateChangesResponse is the response type for the ListenStateChanges RPC method */
export interface ListenStateChangesResponse {}
export interface ListenStateChangesResponseProtoMsg {
  typeUrl: "/cosmos.streaming.v1.ListenStateChangesResponse";
  value: Uint8Array;
}
/** ListenStateChangesResponse is the response type for the ListenStateChanges RPC method */
export interface ListenStateChangesResponseAmino {}
export interface ListenStateChangesResponseAminoMsg {
  type: "cosmos-sdk/ListenStateChangesResponse";
  value: ListenStateChangesResponseAmino;
}
/** StoreKVPair is a single key-value pair, associated with a store. */
export interface StoreKVPair {
  /**
   * address defines the address of the account the state changes are coming from.
   * In case of modules you can expect a stringified
   */
  address: Uint8Array;
  /** key defines the key of the address that changed. */
  key: Uint8Array;
  /** value defines the value that changed, empty in case of removal. */
  value: Uint8Array;
  /** delete defines if the key was removed. */
  delete: boolean;
}
export interface StoreKVPairProtoMsg {
  typeUrl: "/cosmos.streaming.v1.StoreKVPair";
  value: Uint8Array;
}
/** StoreKVPair is a single key-value pair, associated with a store. */
export interface StoreKVPairAmino {
  /**
   * address defines the address of the account the state changes are coming from.
   * In case of modules you can expect a stringified
   */
  address: string;
  /** key defines the key of the address that changed. */
  key: string;
  /** value defines the value that changed, empty in case of removal. */
  value: string;
  /** delete defines if the key was removed. */
  delete: boolean;
}
export interface StoreKVPairAminoMsg {
  type: "cosmos-sdk/StoreKVPair";
  value: StoreKVPairAmino;
}
/** Event is a single event, associated with a transaction. */
export interface Event {
  type: string;
  attributes: EventAttribute[];
}
export interface EventProtoMsg {
  typeUrl: "/cosmos.streaming.v1.Event";
  value: Uint8Array;
}
/** Event is a single event, associated with a transaction. */
export interface EventAmino {
  type: string;
  attributes: EventAttributeAmino[];
}
export interface EventAminoMsg {
  type: "cosmos-sdk/Event";
  value: EventAmino;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttribute {
  key: string;
  value: string;
}
export interface EventAttributeProtoMsg {
  typeUrl: "/cosmos.streaming.v1.EventAttribute";
  value: Uint8Array;
}
/** EventAttribute is a single key-value pair, associated with an event. */
export interface EventAttributeAmino {
  key: string;
  value: string;
}
export interface EventAttributeAminoMsg {
  type: "cosmos-sdk/EventAttribute";
  value: EventAttributeAmino;
}
/** ExecTxResult contains results of executing one individual transaction. */
export interface ExecTxResult {
  code: number;
  data: Uint8Array;
  log: string;
  info: string;
  gasWanted: bigint;
  gasUsed: bigint;
  events: Event[];
  codespace: string;
}
export interface ExecTxResultProtoMsg {
  typeUrl: "/cosmos.streaming.v1.ExecTxResult";
  value: Uint8Array;
}
/** ExecTxResult contains results of executing one individual transaction. */
export interface ExecTxResultAmino {
  code: number;
  data: string;
  log: string;
  info: string;
  gas_wanted: string;
  gas_used: string;
  events: EventAmino[];
  codespace: string;
}
export interface ExecTxResultAminoMsg {
  type: "cosmos-sdk/ExecTxResult";
  value: ExecTxResultAmino;
}
function createBaseListenDeliverBlockRequest(): ListenDeliverBlockRequest {
  return {
    blockHeight: BigInt(0),
    txs: [],
    events: [],
    txResults: []
  };
}
export const ListenDeliverBlockRequest = {
  typeUrl: "/cosmos.streaming.v1.ListenDeliverBlockRequest",
  aminoType: "cosmos-sdk/ListenDeliverBlockRequest",
  is(o: any): o is ListenDeliverBlockRequest {
    return o && (o.$typeUrl === ListenDeliverBlockRequest.typeUrl || typeof o.blockHeight === "bigint" && Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && Array.isArray(o.txResults) && (!o.txResults.length || ExecTxResult.is(o.txResults[0])));
  },
  isAmino(o: any): o is ListenDeliverBlockRequestAmino {
    return o && (o.$typeUrl === ListenDeliverBlockRequest.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string") && Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])) && Array.isArray(o.tx_results) && (!o.tx_results.length || ExecTxResult.isAmino(o.tx_results[0])));
  },
  encode(message: ListenDeliverBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.txs) {
      writer.uint32(18).bytes(v!);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.txResults) {
      ExecTxResult.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenDeliverBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenDeliverBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.txs.push(reader.bytes());
          break;
        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 4:
          message.txResults.push(ExecTxResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListenDeliverBlockRequest>): ListenDeliverBlockRequest {
    const message = createBaseListenDeliverBlockRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.txs = object.txs?.map(e => e) || [];
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.txResults = object.txResults?.map(e => ExecTxResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListenDeliverBlockRequestAmino): ListenDeliverBlockRequest {
    const message = createBaseListenDeliverBlockRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    message.txResults = object.tx_results?.map(e => ExecTxResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListenDeliverBlockRequest): ListenDeliverBlockRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    if (message.txResults) {
      obj.tx_results = message.txResults.map(e => e ? ExecTxResult.toAmino(e) : undefined);
    } else {
      obj.tx_results = message.txResults;
    }
    return obj;
  },
  fromAminoMsg(object: ListenDeliverBlockRequestAminoMsg): ListenDeliverBlockRequest {
    return ListenDeliverBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListenDeliverBlockRequest): ListenDeliverBlockRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenDeliverBlockRequest",
      value: ListenDeliverBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenDeliverBlockRequestProtoMsg): ListenDeliverBlockRequest {
    return ListenDeliverBlockRequest.decode(message.value);
  },
  toProto(message: ListenDeliverBlockRequest): Uint8Array {
    return ListenDeliverBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: ListenDeliverBlockRequest): ListenDeliverBlockRequestProtoMsg {
    return {
      typeUrl: "/cosmos.streaming.v1.ListenDeliverBlockRequest",
      value: ListenDeliverBlockRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListenDeliverBlockRequest.typeUrl, ListenDeliverBlockRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenDeliverBlockRequest.aminoType, ListenDeliverBlockRequest.typeUrl);
function createBaseListenDeliverBlockResponse(): ListenDeliverBlockResponse {
  return {};
}
export const ListenDeliverBlockResponse = {
  typeUrl: "/cosmos.streaming.v1.ListenDeliverBlockResponse",
  aminoType: "cosmos-sdk/ListenDeliverBlockResponse",
  is(o: any): o is ListenDeliverBlockResponse {
    return o && o.$typeUrl === ListenDeliverBlockResponse.typeUrl;
  },
  isAmino(o: any): o is ListenDeliverBlockResponseAmino {
    return o && o.$typeUrl === ListenDeliverBlockResponse.typeUrl;
  },
  encode(_: ListenDeliverBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenDeliverBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenDeliverBlockResponse();
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
  fromPartial(_: DeepPartial<ListenDeliverBlockResponse>): ListenDeliverBlockResponse {
    const message = createBaseListenDeliverBlockResponse();
    return message;
  },
  fromAmino(_: ListenDeliverBlockResponseAmino): ListenDeliverBlockResponse {
    const message = createBaseListenDeliverBlockResponse();
    return message;
  },
  toAmino(_: ListenDeliverBlockResponse): ListenDeliverBlockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListenDeliverBlockResponseAminoMsg): ListenDeliverBlockResponse {
    return ListenDeliverBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListenDeliverBlockResponse): ListenDeliverBlockResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenDeliverBlockResponse",
      value: ListenDeliverBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenDeliverBlockResponseProtoMsg): ListenDeliverBlockResponse {
    return ListenDeliverBlockResponse.decode(message.value);
  },
  toProto(message: ListenDeliverBlockResponse): Uint8Array {
    return ListenDeliverBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: ListenDeliverBlockResponse): ListenDeliverBlockResponseProtoMsg {
    return {
      typeUrl: "/cosmos.streaming.v1.ListenDeliverBlockResponse",
      value: ListenDeliverBlockResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListenDeliverBlockResponse.typeUrl, ListenDeliverBlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenDeliverBlockResponse.aminoType, ListenDeliverBlockResponse.typeUrl);
function createBaseListenStateChangesRequest(): ListenStateChangesRequest {
  return {
    blockHeight: BigInt(0),
    changeSet: [],
    appHash: new Uint8Array()
  };
}
export const ListenStateChangesRequest = {
  typeUrl: "/cosmos.streaming.v1.ListenStateChangesRequest",
  aminoType: "cosmos-sdk/ListenStateChangesRequest",
  is(o: any): o is ListenStateChangesRequest {
    return o && (o.$typeUrl === ListenStateChangesRequest.typeUrl || typeof o.blockHeight === "bigint" && Array.isArray(o.changeSet) && (!o.changeSet.length || StoreKVPair.is(o.changeSet[0])) && (o.appHash instanceof Uint8Array || typeof o.appHash === "string"));
  },
  isAmino(o: any): o is ListenStateChangesRequestAmino {
    return o && (o.$typeUrl === ListenStateChangesRequest.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.change_set) && (!o.change_set.length || StoreKVPair.isAmino(o.change_set[0])) && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string"));
  },
  encode(message: ListenStateChangesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.changeSet) {
      StoreKVPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.appHash.length !== 0) {
      writer.uint32(26).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenStateChangesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenStateChangesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.changeSet.push(StoreKVPair.decode(reader, reader.uint32()));
          break;
        case 3:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListenStateChangesRequest>): ListenStateChangesRequest {
    const message = createBaseListenStateChangesRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.changeSet = object.changeSet?.map(e => StoreKVPair.fromPartial(e)) || [];
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ListenStateChangesRequestAmino): ListenStateChangesRequest {
    const message = createBaseListenStateChangesRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.changeSet = object.change_set?.map(e => StoreKVPair.fromAmino(e)) || [];
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: ListenStateChangesRequest): ListenStateChangesRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    if (message.changeSet) {
      obj.change_set = message.changeSet.map(e => e ? StoreKVPair.toAmino(e) : undefined);
    } else {
      obj.change_set = message.changeSet;
    }
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListenStateChangesRequestAminoMsg): ListenStateChangesRequest {
    return ListenStateChangesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListenStateChangesRequest): ListenStateChangesRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenStateChangesRequest",
      value: ListenStateChangesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenStateChangesRequestProtoMsg): ListenStateChangesRequest {
    return ListenStateChangesRequest.decode(message.value);
  },
  toProto(message: ListenStateChangesRequest): Uint8Array {
    return ListenStateChangesRequest.encode(message).finish();
  },
  toProtoMsg(message: ListenStateChangesRequest): ListenStateChangesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.streaming.v1.ListenStateChangesRequest",
      value: ListenStateChangesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListenStateChangesRequest.typeUrl, ListenStateChangesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenStateChangesRequest.aminoType, ListenStateChangesRequest.typeUrl);
function createBaseListenStateChangesResponse(): ListenStateChangesResponse {
  return {};
}
export const ListenStateChangesResponse = {
  typeUrl: "/cosmos.streaming.v1.ListenStateChangesResponse",
  aminoType: "cosmos-sdk/ListenStateChangesResponse",
  is(o: any): o is ListenStateChangesResponse {
    return o && o.$typeUrl === ListenStateChangesResponse.typeUrl;
  },
  isAmino(o: any): o is ListenStateChangesResponseAmino {
    return o && o.$typeUrl === ListenStateChangesResponse.typeUrl;
  },
  encode(_: ListenStateChangesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenStateChangesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenStateChangesResponse();
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
  fromPartial(_: DeepPartial<ListenStateChangesResponse>): ListenStateChangesResponse {
    const message = createBaseListenStateChangesResponse();
    return message;
  },
  fromAmino(_: ListenStateChangesResponseAmino): ListenStateChangesResponse {
    const message = createBaseListenStateChangesResponse();
    return message;
  },
  toAmino(_: ListenStateChangesResponse): ListenStateChangesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListenStateChangesResponseAminoMsg): ListenStateChangesResponse {
    return ListenStateChangesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListenStateChangesResponse): ListenStateChangesResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenStateChangesResponse",
      value: ListenStateChangesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenStateChangesResponseProtoMsg): ListenStateChangesResponse {
    return ListenStateChangesResponse.decode(message.value);
  },
  toProto(message: ListenStateChangesResponse): Uint8Array {
    return ListenStateChangesResponse.encode(message).finish();
  },
  toProtoMsg(message: ListenStateChangesResponse): ListenStateChangesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.streaming.v1.ListenStateChangesResponse",
      value: ListenStateChangesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListenStateChangesResponse.typeUrl, ListenStateChangesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenStateChangesResponse.aminoType, ListenStateChangesResponse.typeUrl);
function createBaseStoreKVPair(): StoreKVPair {
  return {
    address: new Uint8Array(),
    key: new Uint8Array(),
    value: new Uint8Array(),
    delete: false
  };
}
export const StoreKVPair = {
  typeUrl: "/cosmos.streaming.v1.StoreKVPair",
  aminoType: "cosmos-sdk/StoreKVPair",
  is(o: any): o is StoreKVPair {
    return o && (o.$typeUrl === StoreKVPair.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.delete === "boolean");
  },
  isAmino(o: any): o is StoreKVPairAmino {
    return o && (o.$typeUrl === StoreKVPair.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.delete === "boolean");
  },
  encode(message: StoreKVPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    if (message.delete === true) {
      writer.uint32(32).bool(message.delete);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoreKVPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreKVPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.value = reader.bytes();
          break;
        case 4:
          message.delete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair {
    const message = createBaseStoreKVPair();
    message.address = object.address ?? new Uint8Array();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.delete = object.delete ?? false;
    return message;
  },
  fromAmino(object: StoreKVPairAmino): StoreKVPair {
    const message = createBaseStoreKVPair();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.delete !== undefined && object.delete !== null) {
      message.delete = object.delete;
    }
    return message;
  },
  toAmino(message: StoreKVPair): StoreKVPairAmino {
    const obj: any = {};
    obj.address = message.address ? base64FromBytes(message.address) : undefined;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.delete = message.delete === false ? undefined : message.delete;
    return obj;
  },
  fromAminoMsg(object: StoreKVPairAminoMsg): StoreKVPair {
    return StoreKVPair.fromAmino(object.value);
  },
  toAminoMsg(message: StoreKVPair): StoreKVPairAminoMsg {
    return {
      type: "cosmos-sdk/StoreKVPair",
      value: StoreKVPair.toAmino(message)
    };
  },
  fromProtoMsg(message: StoreKVPairProtoMsg): StoreKVPair {
    return StoreKVPair.decode(message.value);
  },
  toProto(message: StoreKVPair): Uint8Array {
    return StoreKVPair.encode(message).finish();
  },
  toProtoMsg(message: StoreKVPair): StoreKVPairProtoMsg {
    return {
      typeUrl: "/cosmos.streaming.v1.StoreKVPair",
      value: StoreKVPair.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StoreKVPair.typeUrl, StoreKVPair);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreKVPair.aminoType, StoreKVPair.typeUrl);
function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}
export const Event = {
  typeUrl: "/cosmos.streaming.v1.Event",
  aminoType: "cosmos-sdk/Event",
  is(o: any): o is Event {
    return o && (o.$typeUrl === Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || EventAttribute.is(o.attributes[0])));
  },
  isAmino(o: any): o is EventAmino {
    return o && (o.$typeUrl === Event.typeUrl || typeof o.type === "string" && Array.isArray(o.attributes) && (!o.attributes.length || EventAttribute.isAmino(o.attributes[0])));
  },
  encode(message: Event, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Event {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EventAmino): Event {
    const message = createBaseEvent();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.attributes = object.attributes?.map(e => EventAttribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Event): EventAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? EventAttribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: EventAminoMsg): Event {
    return Event.fromAmino(object.value);
  },
  toAminoMsg(message: Event): EventAminoMsg {
    return {
      type: "cosmos-sdk/Event",
      value: Event.toAmino(message)
    };
  },
  fromProtoMsg(message: EventProtoMsg): Event {
    return Event.decode(message.value);
  },
  toProto(message: Event): Uint8Array {
    return Event.encode(message).finish();
  },
  toProtoMsg(message: Event): EventProtoMsg {
    return {
      typeUrl: "/cosmos.streaming.v1.Event",
      value: Event.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Event.typeUrl, Event);
GlobalDecoderRegistry.registerAminoProtoMapping(Event.aminoType, Event.typeUrl);
function createBaseEventAttribute(): EventAttribute {
  return {
    key: "",
    value: ""
  };
}
export const EventAttribute = {
  typeUrl: "/cosmos.streaming.v1.EventAttribute",
  aminoType: "cosmos-sdk/EventAttribute",
  is(o: any): o is EventAttribute {
    return o && (o.$typeUrl === EventAttribute.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  isAmino(o: any): o is EventAttributeAmino {
    return o && (o.$typeUrl === EventAttribute.typeUrl || typeof o.key === "string" && typeof o.value === "string");
  },
  encode(message: EventAttribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: EventAttributeAmino): EventAttribute {
    const message = createBaseEventAttribute();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: EventAttribute): EventAttributeAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: EventAttributeAminoMsg): EventAttribute {
    return EventAttribute.fromAmino(object.value);
  },
  toAminoMsg(message: EventAttribute): EventAttributeAminoMsg {
    return {
      type: "cosmos-sdk/EventAttribute",
      value: EventAttribute.toAmino(message)
    };
  },
  fromProtoMsg(message: EventAttributeProtoMsg): EventAttribute {
    return EventAttribute.decode(message.value);
  },
  toProto(message: EventAttribute): Uint8Array {
    return EventAttribute.encode(message).finish();
  },
  toProtoMsg(message: EventAttribute): EventAttributeProtoMsg {
    return {
      typeUrl: "/cosmos.streaming.v1.EventAttribute",
      value: EventAttribute.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventAttribute.typeUrl, EventAttribute);
GlobalDecoderRegistry.registerAminoProtoMapping(EventAttribute.aminoType, EventAttribute.typeUrl);
function createBaseExecTxResult(): ExecTxResult {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gasWanted: BigInt(0),
    gasUsed: BigInt(0),
    events: [],
    codespace: ""
  };
}
export const ExecTxResult = {
  typeUrl: "/cosmos.streaming.v1.ExecTxResult",
  aminoType: "cosmos-sdk/ExecTxResult",
  is(o: any): o is ExecTxResult {
    return o && (o.$typeUrl === ExecTxResult.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gasWanted === "bigint" && typeof o.gasUsed === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.is(o.events[0])) && typeof o.codespace === "string");
  },
  isAmino(o: any): o is ExecTxResultAmino {
    return o && (o.$typeUrl === ExecTxResult.typeUrl || typeof o.code === "number" && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.log === "string" && typeof o.info === "string" && typeof o.gas_wanted === "bigint" && typeof o.gas_used === "bigint" && Array.isArray(o.events) && (!o.events.length || Event.isAmino(o.events[0])) && typeof o.codespace === "string");
  },
  encode(message: ExecTxResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.gasWanted !== BigInt(0)) {
      writer.uint32(40).int64(message.gasWanted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).int64(message.gasUsed);
    }
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExecTxResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;
        case 2:
          message.data = reader.bytes();
          break;
        case 3:
          message.log = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.gasWanted = reader.int64();
          break;
        case 6:
          message.gasUsed = reader.int64();
          break;
        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;
        case 8:
          message.codespace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExecTxResult>): ExecTxResult {
    const message = createBaseExecTxResult();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gasWanted = object.gasWanted !== undefined && object.gasWanted !== null ? BigInt(object.gasWanted.toString()) : BigInt(0);
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  },
  fromAmino(object: ExecTxResultAmino): ExecTxResult {
    const message = createBaseExecTxResult();
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.log !== undefined && object.log !== null) {
      message.log = object.log;
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
      message.gasWanted = BigInt(object.gas_wanted);
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    message.events = object.events?.map(e => Event.fromAmino(e)) || [];
    if (object.codespace !== undefined && object.codespace !== null) {
      message.codespace = object.codespace;
    }
    return message;
  },
  toAmino(message: ExecTxResult): ExecTxResultAmino {
    const obj: any = {};
    obj.code = message.code === 0 ? undefined : message.code;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.log = message.log === "" ? undefined : message.log;
    obj.info = message.info === "" ? undefined : message.info;
    obj.gas_wanted = message.gasWanted !== BigInt(0) ? message.gasWanted?.toString() : undefined;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed?.toString() : undefined;
    if (message.events) {
      obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
    } else {
      obj.events = message.events;
    }
    obj.codespace = message.codespace === "" ? undefined : message.codespace;
    return obj;
  },
  fromAminoMsg(object: ExecTxResultAminoMsg): ExecTxResult {
    return ExecTxResult.fromAmino(object.value);
  },
  toAminoMsg(message: ExecTxResult): ExecTxResultAminoMsg {
    return {
      type: "cosmos-sdk/ExecTxResult",
      value: ExecTxResult.toAmino(message)
    };
  },
  fromProtoMsg(message: ExecTxResultProtoMsg): ExecTxResult {
    return ExecTxResult.decode(message.value);
  },
  toProto(message: ExecTxResult): Uint8Array {
    return ExecTxResult.encode(message).finish();
  },
  toProtoMsg(message: ExecTxResult): ExecTxResultProtoMsg {
    return {
      typeUrl: "/cosmos.streaming.v1.ExecTxResult",
      value: ExecTxResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExecTxResult.typeUrl, ExecTxResult);
GlobalDecoderRegistry.registerAminoProtoMapping(ExecTxResult.aminoType, ExecTxResult.typeUrl);