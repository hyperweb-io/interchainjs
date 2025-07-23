import { Height, HeightAmino } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * Wasm light client's Client state
 * @name ClientState
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.ClientState
 */
export interface ClientState {
  /**
   * bytes encoding the client state of the underlying light client
   * implemented as a Wasm contract.
   */
  data: Uint8Array;
  checksum: Uint8Array;
  latestHeight: Height;
}
export interface ClientStateProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.ClientState";
  value: Uint8Array;
}
/**
 * Wasm light client's Client state
 * @name ClientStateAmino
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.ClientState
 */
export interface ClientStateAmino {
  /**
   * bytes encoding the client state of the underlying light client
   * implemented as a Wasm contract.
   */
  data: string;
  checksum: string;
  latest_height: HeightAmino;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/**
 * Wasm light client's ConsensusState
 * @name ConsensusState
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.ConsensusState
 */
export interface ConsensusState {
  /**
   * bytes encoding the consensus state of the underlying light client
   * implemented as a Wasm contract.
   */
  data: Uint8Array;
}
export interface ConsensusStateProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.ConsensusState";
  value: Uint8Array;
}
/**
 * Wasm light client's ConsensusState
 * @name ConsensusStateAmino
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.ConsensusState
 */
export interface ConsensusStateAmino {
  /**
   * bytes encoding the consensus state of the underlying light client
   * implemented as a Wasm contract.
   */
  data: string;
}
export interface ConsensusStateAminoMsg {
  type: "cosmos-sdk/ConsensusState";
  value: ConsensusStateAmino;
}
/**
 * Wasm light client message (either header(s) or misbehaviour)
 * @name ClientMessage
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.ClientMessage
 */
export interface ClientMessage {
  data: Uint8Array;
}
export interface ClientMessageProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.ClientMessage";
  value: Uint8Array;
}
/**
 * Wasm light client message (either header(s) or misbehaviour)
 * @name ClientMessageAmino
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.ClientMessage
 */
export interface ClientMessageAmino {
  data: string;
}
export interface ClientMessageAminoMsg {
  type: "cosmos-sdk/ClientMessage";
  value: ClientMessageAmino;
}
/**
 * Checksums defines a list of all checksums that are stored
 * 
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 * @name Checksums
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.Checksums
 * @deprecated
 */
export interface Checksums {
  checksums: Uint8Array[];
}
export interface ChecksumsProtoMsg {
  typeUrl: "/ibc.lightclients.wasm.v1.Checksums";
  value: Uint8Array;
}
/**
 * Checksums defines a list of all checksums that are stored
 * 
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 * @name ChecksumsAmino
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.Checksums
 * @deprecated
 */
export interface ChecksumsAmino {
  checksums: string[];
}
export interface ChecksumsAminoMsg {
  type: "cosmos-sdk/Checksums";
  value: ChecksumsAmino;
}
function createBaseClientState(): ClientState {
  return {
    data: new Uint8Array(),
    checksum: new Uint8Array(),
    latestHeight: Height.fromPartial({})
  };
}
/**
 * Wasm light client's Client state
 * @name ClientState
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.ClientState
 */
export const ClientState = {
  typeUrl: "/ibc.lightclients.wasm.v1.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  is(o: any): o is ClientState {
    return o && (o.$typeUrl === ClientState.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && (o.checksum instanceof Uint8Array || typeof o.checksum === "string") && Height.is(o.latestHeight));
  },
  isAmino(o: any): o is ClientStateAmino {
    return o && (o.$typeUrl === ClientState.typeUrl || (o.data instanceof Uint8Array || typeof o.data === "string") && (o.checksum instanceof Uint8Array || typeof o.checksum === "string") && Height.isAmino(o.latest_height));
  },
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    if (message.latestHeight !== undefined) {
      Height.encode(message.latestHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        case 3:
          message.latestHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.data = object.data ?? new Uint8Array();
    message.checksum = object.checksum ?? new Uint8Array();
    message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? Height.fromPartial(object.latestHeight) : undefined;
    return message;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    if (object.latest_height !== undefined && object.latest_height !== null) {
      message.latestHeight = Height.fromAmino(object.latest_height);
    }
    return message;
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
    obj.latest_height = message.latestHeight ? Height.toAmino(message.latestHeight) : {};
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(ClientState.typeUrl)) {
      return;
    }
    Height.registerTypeUrl();
  }
};
function createBaseConsensusState(): ConsensusState {
  return {
    data: new Uint8Array()
  };
}
/**
 * Wasm light client's ConsensusState
 * @name ConsensusState
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.ConsensusState
 */
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.wasm.v1.ConsensusState",
  aminoType: "cosmos-sdk/ConsensusState",
  is(o: any): o is ConsensusState {
    return o && (o.$typeUrl === ConsensusState.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is ConsensusStateAmino {
    return o && (o.$typeUrl === ConsensusState.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ConsensusStateAmino): ConsensusState {
    const message = createBaseConsensusState();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState {
    return ConsensusState.decode(message.value);
  },
  toProto(message: ConsensusState): Uint8Array {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseClientMessage(): ClientMessage {
  return {
    data: new Uint8Array()
  };
}
/**
 * Wasm light client message (either header(s) or misbehaviour)
 * @name ClientMessage
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.ClientMessage
 */
export const ClientMessage = {
  typeUrl: "/ibc.lightclients.wasm.v1.ClientMessage",
  aminoType: "cosmos-sdk/ClientMessage",
  is(o: any): o is ClientMessage {
    return o && (o.$typeUrl === ClientMessage.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is ClientMessageAmino {
    return o && (o.$typeUrl === ClientMessage.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: ClientMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ClientMessage>): ClientMessage {
    const message = createBaseClientMessage();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ClientMessageAmino): ClientMessage {
    const message = createBaseClientMessage();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: ClientMessage): ClientMessageAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClientMessageAminoMsg): ClientMessage {
    return ClientMessage.fromAmino(object.value);
  },
  toAminoMsg(message: ClientMessage): ClientMessageAminoMsg {
    return {
      type: "cosmos-sdk/ClientMessage",
      value: ClientMessage.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientMessageProtoMsg): ClientMessage {
    return ClientMessage.decode(message.value);
  },
  toProto(message: ClientMessage): Uint8Array {
    return ClientMessage.encode(message).finish();
  },
  toProtoMsg(message: ClientMessage): ClientMessageProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.ClientMessage",
      value: ClientMessage.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseChecksums(): Checksums {
  return {
    checksums: []
  };
}
/**
 * Checksums defines a list of all checksums that are stored
 * 
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 * @name Checksums
 * @package ibc.lightclients.wasm.v1
 * @see proto type: ibc.lightclients.wasm.v1.Checksums
 * @deprecated
 */
export const Checksums = {
  typeUrl: "/ibc.lightclients.wasm.v1.Checksums",
  aminoType: "cosmos-sdk/Checksums",
  is(o: any): o is Checksums {
    return o && (o.$typeUrl === Checksums.typeUrl || Array.isArray(o.checksums) && (!o.checksums.length || o.checksums[0] instanceof Uint8Array || typeof o.checksums[0] === "string"));
  },
  isAmino(o: any): o is ChecksumsAmino {
    return o && (o.$typeUrl === Checksums.typeUrl || Array.isArray(o.checksums) && (!o.checksums.length || o.checksums[0] instanceof Uint8Array || typeof o.checksums[0] === "string"));
  },
  encode(message: Checksums, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.checksums) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Checksums {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChecksums();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksums.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Checksums>): Checksums {
    const message = createBaseChecksums();
    message.checksums = object.checksums?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ChecksumsAmino): Checksums {
    const message = createBaseChecksums();
    message.checksums = object.checksums?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: Checksums): ChecksumsAmino {
    const obj: any = {};
    if (message.checksums) {
      obj.checksums = message.checksums.map(e => base64FromBytes(e));
    } else {
      obj.checksums = message.checksums;
    }
    return obj;
  },
  fromAminoMsg(object: ChecksumsAminoMsg): Checksums {
    return Checksums.fromAmino(object.value);
  },
  toAminoMsg(message: Checksums): ChecksumsAminoMsg {
    return {
      type: "cosmos-sdk/Checksums",
      value: Checksums.toAmino(message)
    };
  },
  fromProtoMsg(message: ChecksumsProtoMsg): Checksums {
    return Checksums.decode(message.value);
  },
  toProto(message: Checksums): Uint8Array {
    return Checksums.encode(message).finish();
  },
  toProtoMsg(message: Checksums): ChecksumsProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.wasm.v1.Checksums",
      value: Checksums.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};