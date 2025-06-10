import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * @name GenesisState_InFlightPacketsEntry
 * @package ibc.applications.packet_forward_middleware.v1
 * @see proto type: ibc.applications.packet_forward_middleware.v1.undefined
 */
export interface GenesisState_InFlightPacketsEntry {
  key: string;
  value?: InFlightPacket;
}
export interface GenesisState_InFlightPacketsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
/**
 * @name GenesisState_InFlightPacketsEntryAmino
 * @package ibc.applications.packet_forward_middleware.v1
 * @see proto type: ibc.applications.packet_forward_middleware.v1.GenesisState_InFlightPacketsEntry
 */
export interface GenesisState_InFlightPacketsEntryAmino {
  key: string;
  value?: InFlightPacketAmino;
}
export interface GenesisState_InFlightPacketsEntryAminoMsg {
  type: string;
  value: GenesisState_InFlightPacketsEntryAmino;
}
/**
 * GenesisState defines the packetforward genesis state
 * @name GenesisState
 * @package ibc.applications.packet_forward_middleware.v1
 * @see proto type: ibc.applications.packet_forward_middleware.v1.GenesisState
 */
export interface GenesisState {
  /**
   * key - information about forwarded packet: src_channel
   * (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value -
   * information about original packet for refunding if necessary: retries,
   * srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort
   */
  inFlightPackets: {
    [key: string]: InFlightPacket;
  };
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.applications.packet_forward_middleware.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the packetforward genesis state
 * @name GenesisStateAmino
 * @package ibc.applications.packet_forward_middleware.v1
 * @see proto type: ibc.applications.packet_forward_middleware.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * key - information about forwarded packet: src_channel
   * (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value -
   * information about original packet for refunding if necessary: retries,
   * srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort
   */
  in_flight_packets: {
    [key: string]: InFlightPacketAmino;
  };
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 * @name InFlightPacket
 * @package ibc.applications.packet_forward_middleware.v1
 * @see proto type: ibc.applications.packet_forward_middleware.v1.InFlightPacket
 */
export interface InFlightPacket {
  originalSenderAddress: string;
  refundChannelId: string;
  refundPortId: string;
  packetSrcChannelId: string;
  packetSrcPortId: string;
  packetTimeoutTimestamp: bigint;
  packetTimeoutHeight: string;
  packetData: Uint8Array;
  refundSequence: bigint;
  retriesRemaining: number;
  timeout: bigint;
  nonrefundable: boolean;
}
export interface InFlightPacketProtoMsg {
  typeUrl: "/ibc.applications.packet_forward_middleware.v1.InFlightPacket";
  value: Uint8Array;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 * @name InFlightPacketAmino
 * @package ibc.applications.packet_forward_middleware.v1
 * @see proto type: ibc.applications.packet_forward_middleware.v1.InFlightPacket
 */
export interface InFlightPacketAmino {
  original_sender_address: string;
  refund_channel_id: string;
  refund_port_id: string;
  packet_src_channel_id: string;
  packet_src_port_id: string;
  packet_timeout_timestamp: string;
  packet_timeout_height: string;
  packet_data: string;
  refund_sequence: string;
  retries_remaining: number;
  timeout: string;
  nonrefundable: boolean;
}
export interface InFlightPacketAminoMsg {
  type: "cosmos-sdk/InFlightPacket";
  value: InFlightPacketAmino;
}
function createBaseGenesisState_InFlightPacketsEntry(): GenesisState_InFlightPacketsEntry {
  return {
    key: "",
    value: undefined
  };
}
/**
 * @name GenesisState_InFlightPacketsEntry
 * @package ibc.applications.packet_forward_middleware.v1
 * @see proto type: ibc.applications.packet_forward_middleware.v1.undefined
 */
export const GenesisState_InFlightPacketsEntry = {
  encode(message: GenesisState_InFlightPacketsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      InFlightPacket.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState_InFlightPacketsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_InFlightPacketsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = InFlightPacket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState_InFlightPacketsEntry>): GenesisState_InFlightPacketsEntry {
    const message = createBaseGenesisState_InFlightPacketsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? InFlightPacket.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: GenesisState_InFlightPacketsEntryAmino): GenesisState_InFlightPacketsEntry {
    const message = createBaseGenesisState_InFlightPacketsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = InFlightPacket.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: GenesisState_InFlightPacketsEntry): GenesisState_InFlightPacketsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? InFlightPacket.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisState_InFlightPacketsEntryAminoMsg): GenesisState_InFlightPacketsEntry {
    return GenesisState_InFlightPacketsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisState_InFlightPacketsEntryProtoMsg): GenesisState_InFlightPacketsEntry {
    return GenesisState_InFlightPacketsEntry.decode(message.value);
  },
  toProto(message: GenesisState_InFlightPacketsEntry): Uint8Array {
    return GenesisState_InFlightPacketsEntry.encode(message).finish();
  },
  registerTypeUrl() {
    InFlightPacket.registerTypeUrl();
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    inFlightPackets: {}
  };
}
/**
 * GenesisState defines the packetforward genesis state
 * @name GenesisState
 * @package ibc.applications.packet_forward_middleware.v1
 * @see proto type: ibc.applications.packet_forward_middleware.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/ibc.applications.packet_forward_middleware.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || isSet(o.inFlightPackets));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || isSet(o.in_flight_packets));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.inFlightPackets).forEach(([key, value]) => {
      GenesisState_InFlightPacketsEntry.encode({
        key: key as any,
        value
      }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          const entry2 = GenesisState_InFlightPacketsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.inFlightPackets[entry2.key] = entry2.value;
          }
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
    message.inFlightPackets = Object.entries(object.inFlightPackets ?? {}).reduce<{
      [key: string]: InFlightPacket;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = InFlightPacket.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.inFlightPackets = Object.entries(object.in_flight_packets ?? {}).reduce<{
      [key: string]: InFlightPacket;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = InFlightPacket.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.in_flight_packets = {};
    if (message.inFlightPackets) {
      Object.entries(message.inFlightPackets).forEach(([k, v]) => {
        obj.in_flight_packets[k] = InFlightPacket.toAmino(v);
      });
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.packet_forward_middleware.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    InFlightPacket.registerTypeUrl();
  }
};
function createBaseInFlightPacket(): InFlightPacket {
  return {
    originalSenderAddress: "",
    refundChannelId: "",
    refundPortId: "",
    packetSrcChannelId: "",
    packetSrcPortId: "",
    packetTimeoutTimestamp: BigInt(0),
    packetTimeoutHeight: "",
    packetData: new Uint8Array(),
    refundSequence: BigInt(0),
    retriesRemaining: 0,
    timeout: BigInt(0),
    nonrefundable: false
  };
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 * @name InFlightPacket
 * @package ibc.applications.packet_forward_middleware.v1
 * @see proto type: ibc.applications.packet_forward_middleware.v1.InFlightPacket
 */
export const InFlightPacket = {
  typeUrl: "/ibc.applications.packet_forward_middleware.v1.InFlightPacket",
  aminoType: "cosmos-sdk/InFlightPacket",
  is(o: any): o is InFlightPacket {
    return o && (o.$typeUrl === InFlightPacket.typeUrl || typeof o.originalSenderAddress === "string" && typeof o.refundChannelId === "string" && typeof o.refundPortId === "string" && typeof o.packetSrcChannelId === "string" && typeof o.packetSrcPortId === "string" && typeof o.packetTimeoutTimestamp === "bigint" && typeof o.packetTimeoutHeight === "string" && (o.packetData instanceof Uint8Array || typeof o.packetData === "string") && typeof o.refundSequence === "bigint" && typeof o.retriesRemaining === "number" && typeof o.timeout === "bigint" && typeof o.nonrefundable === "boolean");
  },
  isAmino(o: any): o is InFlightPacketAmino {
    return o && (o.$typeUrl === InFlightPacket.typeUrl || typeof o.original_sender_address === "string" && typeof o.refund_channel_id === "string" && typeof o.refund_port_id === "string" && typeof o.packet_src_channel_id === "string" && typeof o.packet_src_port_id === "string" && typeof o.packet_timeout_timestamp === "bigint" && typeof o.packet_timeout_height === "string" && (o.packet_data instanceof Uint8Array || typeof o.packet_data === "string") && typeof o.refund_sequence === "bigint" && typeof o.retries_remaining === "number" && typeof o.timeout === "bigint" && typeof o.nonrefundable === "boolean");
  },
  encode(message: InFlightPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.originalSenderAddress !== "") {
      writer.uint32(10).string(message.originalSenderAddress);
    }
    if (message.refundChannelId !== "") {
      writer.uint32(18).string(message.refundChannelId);
    }
    if (message.refundPortId !== "") {
      writer.uint32(26).string(message.refundPortId);
    }
    if (message.packetSrcChannelId !== "") {
      writer.uint32(34).string(message.packetSrcChannelId);
    }
    if (message.packetSrcPortId !== "") {
      writer.uint32(42).string(message.packetSrcPortId);
    }
    if (message.packetTimeoutTimestamp !== BigInt(0)) {
      writer.uint32(48).uint64(message.packetTimeoutTimestamp);
    }
    if (message.packetTimeoutHeight !== "") {
      writer.uint32(58).string(message.packetTimeoutHeight);
    }
    if (message.packetData.length !== 0) {
      writer.uint32(66).bytes(message.packetData);
    }
    if (message.refundSequence !== BigInt(0)) {
      writer.uint32(72).uint64(message.refundSequence);
    }
    if (message.retriesRemaining !== 0) {
      writer.uint32(80).int32(message.retriesRemaining);
    }
    if (message.timeout !== BigInt(0)) {
      writer.uint32(88).uint64(message.timeout);
    }
    if (message.nonrefundable === true) {
      writer.uint32(96).bool(message.nonrefundable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InFlightPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInFlightPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originalSenderAddress = reader.string();
          break;
        case 2:
          message.refundChannelId = reader.string();
          break;
        case 3:
          message.refundPortId = reader.string();
          break;
        case 4:
          message.packetSrcChannelId = reader.string();
          break;
        case 5:
          message.packetSrcPortId = reader.string();
          break;
        case 6:
          message.packetTimeoutTimestamp = reader.uint64();
          break;
        case 7:
          message.packetTimeoutHeight = reader.string();
          break;
        case 8:
          message.packetData = reader.bytes();
          break;
        case 9:
          message.refundSequence = reader.uint64();
          break;
        case 10:
          message.retriesRemaining = reader.int32();
          break;
        case 11:
          message.timeout = reader.uint64();
          break;
        case 12:
          message.nonrefundable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InFlightPacket>): InFlightPacket {
    const message = createBaseInFlightPacket();
    message.originalSenderAddress = object.originalSenderAddress ?? "";
    message.refundChannelId = object.refundChannelId ?? "";
    message.refundPortId = object.refundPortId ?? "";
    message.packetSrcChannelId = object.packetSrcChannelId ?? "";
    message.packetSrcPortId = object.packetSrcPortId ?? "";
    message.packetTimeoutTimestamp = object.packetTimeoutTimestamp !== undefined && object.packetTimeoutTimestamp !== null ? BigInt(object.packetTimeoutTimestamp.toString()) : BigInt(0);
    message.packetTimeoutHeight = object.packetTimeoutHeight ?? "";
    message.packetData = object.packetData ?? new Uint8Array();
    message.refundSequence = object.refundSequence !== undefined && object.refundSequence !== null ? BigInt(object.refundSequence.toString()) : BigInt(0);
    message.retriesRemaining = object.retriesRemaining ?? 0;
    message.timeout = object.timeout !== undefined && object.timeout !== null ? BigInt(object.timeout.toString()) : BigInt(0);
    message.nonrefundable = object.nonrefundable ?? false;
    return message;
  },
  fromAmino(object: InFlightPacketAmino): InFlightPacket {
    const message = createBaseInFlightPacket();
    if (object.original_sender_address !== undefined && object.original_sender_address !== null) {
      message.originalSenderAddress = object.original_sender_address;
    }
    if (object.refund_channel_id !== undefined && object.refund_channel_id !== null) {
      message.refundChannelId = object.refund_channel_id;
    }
    if (object.refund_port_id !== undefined && object.refund_port_id !== null) {
      message.refundPortId = object.refund_port_id;
    }
    if (object.packet_src_channel_id !== undefined && object.packet_src_channel_id !== null) {
      message.packetSrcChannelId = object.packet_src_channel_id;
    }
    if (object.packet_src_port_id !== undefined && object.packet_src_port_id !== null) {
      message.packetSrcPortId = object.packet_src_port_id;
    }
    if (object.packet_timeout_timestamp !== undefined && object.packet_timeout_timestamp !== null) {
      message.packetTimeoutTimestamp = BigInt(object.packet_timeout_timestamp);
    }
    if (object.packet_timeout_height !== undefined && object.packet_timeout_height !== null) {
      message.packetTimeoutHeight = object.packet_timeout_height;
    }
    if (object.packet_data !== undefined && object.packet_data !== null) {
      message.packetData = bytesFromBase64(object.packet_data);
    }
    if (object.refund_sequence !== undefined && object.refund_sequence !== null) {
      message.refundSequence = BigInt(object.refund_sequence);
    }
    if (object.retries_remaining !== undefined && object.retries_remaining !== null) {
      message.retriesRemaining = object.retries_remaining;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = BigInt(object.timeout);
    }
    if (object.nonrefundable !== undefined && object.nonrefundable !== null) {
      message.nonrefundable = object.nonrefundable;
    }
    return message;
  },
  toAmino(message: InFlightPacket): InFlightPacketAmino {
    const obj: any = {};
    obj.original_sender_address = message.originalSenderAddress === "" ? undefined : message.originalSenderAddress;
    obj.refund_channel_id = message.refundChannelId === "" ? undefined : message.refundChannelId;
    obj.refund_port_id = message.refundPortId === "" ? undefined : message.refundPortId;
    obj.packet_src_channel_id = message.packetSrcChannelId === "" ? undefined : message.packetSrcChannelId;
    obj.packet_src_port_id = message.packetSrcPortId === "" ? undefined : message.packetSrcPortId;
    obj.packet_timeout_timestamp = message.packetTimeoutTimestamp !== BigInt(0) ? message.packetTimeoutTimestamp?.toString() : undefined;
    obj.packet_timeout_height = message.packetTimeoutHeight === "" ? undefined : message.packetTimeoutHeight;
    obj.packet_data = message.packetData ? base64FromBytes(message.packetData) : undefined;
    obj.refund_sequence = message.refundSequence !== BigInt(0) ? message.refundSequence?.toString() : undefined;
    obj.retries_remaining = message.retriesRemaining === 0 ? undefined : message.retriesRemaining;
    obj.timeout = message.timeout !== BigInt(0) ? message.timeout?.toString() : undefined;
    obj.nonrefundable = message.nonrefundable === false ? undefined : message.nonrefundable;
    return obj;
  },
  fromAminoMsg(object: InFlightPacketAminoMsg): InFlightPacket {
    return InFlightPacket.fromAmino(object.value);
  },
  toAminoMsg(message: InFlightPacket): InFlightPacketAminoMsg {
    return {
      type: "cosmos-sdk/InFlightPacket",
      value: InFlightPacket.toAmino(message)
    };
  },
  fromProtoMsg(message: InFlightPacketProtoMsg): InFlightPacket {
    return InFlightPacket.decode(message.value);
  },
  toProto(message: InFlightPacket): Uint8Array {
    return InFlightPacket.encode(message).finish();
  },
  toProtoMsg(message: InFlightPacket): InFlightPacketProtoMsg {
    return {
      typeUrl: "/ibc.applications.packet_forward_middleware.v1.InFlightPacket",
      value: InFlightPacket.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};