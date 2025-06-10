import { Payload, PayloadAmino, Packet, PacketAmino, Acknowledgement, AcknowledgementAmino } from "./packet";
import { Height, HeightAmino } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes, isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export enum ResponseResultType {
  /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
  RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
  /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
  RESPONSE_RESULT_TYPE_NOOP = 1,
  /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
  RESPONSE_RESULT_TYPE_SUCCESS = 2,
  /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
  RESPONSE_RESULT_TYPE_FAILURE = 3,
  UNRECOGNIZED = -1,
}
export const ResponseResultTypeAmino = ResponseResultType;
export function responseResultTypeFromJSON(object: any): ResponseResultType {
  switch (object) {
    case 0:
    case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
      return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
    case 1:
    case "RESPONSE_RESULT_TYPE_NOOP":
      return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
    case 2:
    case "RESPONSE_RESULT_TYPE_SUCCESS":
      return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
    case 3:
    case "RESPONSE_RESULT_TYPE_FAILURE":
      return ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseResultType.UNRECOGNIZED;
  }
}
export function responseResultTypeToJSON(object: ResponseResultType): string {
  switch (object) {
    case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
      return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
      return "RESPONSE_RESULT_TYPE_NOOP";
    case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
      return "RESPONSE_RESULT_TYPE_SUCCESS";
    case ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE:
      return "RESPONSE_RESULT_TYPE_FAILURE";
    case ResponseResultType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * MsgSendPacket sends an outgoing IBC packet.
 * @name MsgSendPacket
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgSendPacket
 */
export interface MsgSendPacket {
  sourceClient: string;
  timeoutTimestamp: bigint;
  payloads: Payload[];
  signer: string;
}
export interface MsgSendPacketProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgSendPacket";
  value: Uint8Array;
}
/**
 * MsgSendPacket sends an outgoing IBC packet.
 * @name MsgSendPacketAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgSendPacket
 */
export interface MsgSendPacketAmino {
  source_client: string;
  timeout_timestamp: string;
  payloads: PayloadAmino[];
  signer: string;
}
export interface MsgSendPacketAminoMsg {
  type: "cosmos-sdk/MsgSendPacket";
  value: MsgSendPacketAmino;
}
/**
 * MsgSendPacketResponse defines the Msg/SendPacket response type.
 * @name MsgSendPacketResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgSendPacketResponse
 */
export interface MsgSendPacketResponse {
  sequence: bigint;
}
export interface MsgSendPacketResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgSendPacketResponse";
  value: Uint8Array;
}
/**
 * MsgSendPacketResponse defines the Msg/SendPacket response type.
 * @name MsgSendPacketResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgSendPacketResponse
 */
export interface MsgSendPacketResponseAmino {
  sequence: string;
}
export interface MsgSendPacketResponseAminoMsg {
  type: "cosmos-sdk/MsgSendPacketResponse";
  value: MsgSendPacketResponseAmino;
}
/**
 * MsgRecvPacket receives an incoming IBC packet.
 * @name MsgRecvPacket
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgRecvPacket
 */
export interface MsgRecvPacket {
  packet: Packet;
  proofCommitment: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgRecvPacketProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgRecvPacket";
  value: Uint8Array;
}
/**
 * MsgRecvPacket receives an incoming IBC packet.
 * @name MsgRecvPacketAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgRecvPacket
 */
export interface MsgRecvPacketAmino {
  packet: PacketAmino;
  proof_commitment: string;
  proof_height: HeightAmino;
  signer: string;
}
export interface MsgRecvPacketAminoMsg {
  type: "cosmos-sdk/MsgRecvPacket";
  value: MsgRecvPacketAmino;
}
/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 * @name MsgRecvPacketResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgRecvPacketResponse
 */
export interface MsgRecvPacketResponse {
  result: ResponseResultType;
}
export interface MsgRecvPacketResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgRecvPacketResponse";
  value: Uint8Array;
}
/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 * @name MsgRecvPacketResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgRecvPacketResponse
 */
export interface MsgRecvPacketResponseAmino {
  result: ResponseResultType;
}
export interface MsgRecvPacketResponseAminoMsg {
  type: "cosmos-sdk/MsgRecvPacketResponse";
  value: MsgRecvPacketResponseAmino;
}
/**
 * MsgTimeout receives timed-out packet
 * @name MsgTimeout
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgTimeout
 */
export interface MsgTimeout {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgTimeoutProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgTimeout";
  value: Uint8Array;
}
/**
 * MsgTimeout receives timed-out packet
 * @name MsgTimeoutAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgTimeout
 */
export interface MsgTimeoutAmino {
  packet: PacketAmino;
  proof_unreceived: string;
  proof_height: HeightAmino;
  signer: string;
}
export interface MsgTimeoutAminoMsg {
  type: "cosmos-sdk/MsgTimeout";
  value: MsgTimeoutAmino;
}
/**
 * MsgTimeoutResponse defines the Msg/Timeout response type.
 * @name MsgTimeoutResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgTimeoutResponse
 */
export interface MsgTimeoutResponse {
  result: ResponseResultType;
}
export interface MsgTimeoutResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgTimeoutResponse";
  value: Uint8Array;
}
/**
 * MsgTimeoutResponse defines the Msg/Timeout response type.
 * @name MsgTimeoutResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgTimeoutResponse
 */
export interface MsgTimeoutResponseAmino {
  result: ResponseResultType;
}
export interface MsgTimeoutResponseAminoMsg {
  type: "cosmos-sdk/MsgTimeoutResponse";
  value: MsgTimeoutResponseAmino;
}
/**
 * MsgAcknowledgement receives incoming IBC acknowledgement.
 * @name MsgAcknowledgement
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgAcknowledgement
 */
export interface MsgAcknowledgement {
  packet: Packet;
  acknowledgement: Acknowledgement;
  proofAcked: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgAcknowledgementProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement";
  value: Uint8Array;
}
/**
 * MsgAcknowledgement receives incoming IBC acknowledgement.
 * @name MsgAcknowledgementAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgAcknowledgement
 */
export interface MsgAcknowledgementAmino {
  packet: PacketAmino;
  acknowledgement: AcknowledgementAmino;
  proof_acked: string;
  proof_height: HeightAmino;
  signer: string;
}
export interface MsgAcknowledgementAminoMsg {
  type: "cosmos-sdk/MsgAcknowledgement";
  value: MsgAcknowledgementAmino;
}
/**
 * MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
 * @name MsgAcknowledgementResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgAcknowledgementResponse
 */
export interface MsgAcknowledgementResponse {
  result: ResponseResultType;
}
export interface MsgAcknowledgementResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgAcknowledgementResponse";
  value: Uint8Array;
}
/**
 * MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
 * @name MsgAcknowledgementResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgAcknowledgementResponse
 */
export interface MsgAcknowledgementResponseAmino {
  result: ResponseResultType;
}
export interface MsgAcknowledgementResponseAminoMsg {
  type: "cosmos-sdk/MsgAcknowledgementResponse";
  value: MsgAcknowledgementResponseAmino;
}
function createBaseMsgSendPacket(): MsgSendPacket {
  return {
    sourceClient: "",
    timeoutTimestamp: BigInt(0),
    payloads: [],
    signer: ""
  };
}
/**
 * MsgSendPacket sends an outgoing IBC packet.
 * @name MsgSendPacket
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgSendPacket
 */
export const MsgSendPacket = {
  typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
  aminoType: "cosmos-sdk/MsgSendPacket",
  is(o: any): o is MsgSendPacket {
    return o && (o.$typeUrl === MsgSendPacket.typeUrl || typeof o.sourceClient === "string" && typeof o.timeoutTimestamp === "bigint" && Array.isArray(o.payloads) && (!o.payloads.length || Payload.is(o.payloads[0])) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgSendPacketAmino {
    return o && (o.$typeUrl === MsgSendPacket.typeUrl || typeof o.source_client === "string" && typeof o.timeout_timestamp === "bigint" && Array.isArray(o.payloads) && (!o.payloads.length || Payload.isAmino(o.payloads[0])) && typeof o.signer === "string");
  },
  encode(message: MsgSendPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceClient !== "") {
      writer.uint32(10).string(message.sourceClient);
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timeoutTimestamp);
    }
    for (const v of message.payloads) {
      Payload.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceClient = reader.string();
          break;
        case 2:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 3:
          message.payloads.push(Payload.decode(reader, reader.uint32()));
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSendPacket>): MsgSendPacket {
    const message = createBaseMsgSendPacket();
    message.sourceClient = object.sourceClient ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    message.payloads = object.payloads?.map(e => Payload.fromPartial(e)) || [];
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgSendPacketAmino): MsgSendPacket {
    const message = createBaseMsgSendPacket();
    if (object.source_client !== undefined && object.source_client !== null) {
      message.sourceClient = object.source_client;
    }
    if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    message.payloads = object.payloads?.map(e => Payload.fromAmino(e)) || [];
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgSendPacket): MsgSendPacketAmino {
    const obj: any = {};
    obj.source_client = message.sourceClient === "" ? undefined : message.sourceClient;
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : undefined;
    if (message.payloads) {
      obj.payloads = message.payloads.map(e => e ? Payload.toAmino(e) : undefined);
    } else {
      obj.payloads = message.payloads;
    }
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSendPacketAminoMsg): MsgSendPacket {
    return MsgSendPacket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSendPacket): MsgSendPacketAminoMsg {
    return {
      type: "cosmos-sdk/MsgSendPacket",
      value: MsgSendPacket.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSendPacketProtoMsg): MsgSendPacket {
    return MsgSendPacket.decode(message.value);
  },
  toProto(message: MsgSendPacket): Uint8Array {
    return MsgSendPacket.encode(message).finish();
  },
  toProtoMsg(message: MsgSendPacket): MsgSendPacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
      value: MsgSendPacket.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSendPacket.typeUrl)) {
      return;
    }
    Payload.registerTypeUrl();
  }
};
function createBaseMsgSendPacketResponse(): MsgSendPacketResponse {
  return {
    sequence: BigInt(0)
  };
}
/**
 * MsgSendPacketResponse defines the Msg/SendPacket response type.
 * @name MsgSendPacketResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgSendPacketResponse
 */
export const MsgSendPacketResponse = {
  typeUrl: "/ibc.core.channel.v2.MsgSendPacketResponse",
  aminoType: "cosmos-sdk/MsgSendPacketResponse",
  is(o: any): o is MsgSendPacketResponse {
    return o && (o.$typeUrl === MsgSendPacketResponse.typeUrl || typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is MsgSendPacketResponseAmino {
    return o && (o.$typeUrl === MsgSendPacketResponse.typeUrl || typeof o.sequence === "bigint");
  },
  encode(message: MsgSendPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSendPacketResponse>): MsgSendPacketResponse {
    const message = createBaseMsgSendPacketResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSendPacketResponseAmino): MsgSendPacketResponse {
    const message = createBaseMsgSendPacketResponse();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: MsgSendPacketResponse): MsgSendPacketResponseAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendPacketResponseAminoMsg): MsgSendPacketResponse {
    return MsgSendPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSendPacketResponse): MsgSendPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSendPacketResponse",
      value: MsgSendPacketResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSendPacketResponseProtoMsg): MsgSendPacketResponse {
    return MsgSendPacketResponse.decode(message.value);
  },
  toProto(message: MsgSendPacketResponse): Uint8Array {
    return MsgSendPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendPacketResponse): MsgSendPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgSendPacketResponse",
      value: MsgSendPacketResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRecvPacket(): MsgRecvPacket {
  return {
    packet: Packet.fromPartial({}),
    proofCommitment: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
/**
 * MsgRecvPacket receives an incoming IBC packet.
 * @name MsgRecvPacket
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgRecvPacket
 */
export const MsgRecvPacket = {
  typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
  aminoType: "cosmos-sdk/MsgRecvPacket",
  is(o: any): o is MsgRecvPacket {
    return o && (o.$typeUrl === MsgRecvPacket.typeUrl || Packet.is(o.packet) && (o.proofCommitment instanceof Uint8Array || typeof o.proofCommitment === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgRecvPacketAmino {
    return o && (o.$typeUrl === MsgRecvPacket.typeUrl || Packet.isAmino(o.packet) && (o.proof_commitment instanceof Uint8Array || typeof o.proof_commitment === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgRecvPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_commitment !== undefined && object.proof_commitment !== null) {
      message.proofCommitment = bytesFromBase64(object.proof_commitment);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRecvPacket): MsgRecvPacketAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_commitment = message.proofCommitment ? base64FromBytes(message.proofCommitment) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketAminoMsg): MsgRecvPacket {
    return MsgRecvPacket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacket): MsgRecvPacketAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacket",
      value: MsgRecvPacket.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecvPacketProtoMsg): MsgRecvPacket {
    return MsgRecvPacket.decode(message.value);
  },
  toProto(message: MsgRecvPacket): Uint8Array {
    return MsgRecvPacket.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacket): MsgRecvPacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
      value: MsgRecvPacket.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgRecvPacket.typeUrl)) {
      return;
    }
    Packet.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {
    result: 0
  };
}
/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 * @name MsgRecvPacketResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgRecvPacketResponse
 */
export const MsgRecvPacketResponse = {
  typeUrl: "/ibc.core.channel.v2.MsgRecvPacketResponse",
  aminoType: "cosmos-sdk/MsgRecvPacketResponse",
  is(o: any): o is MsgRecvPacketResponse {
    return o && (o.$typeUrl === MsgRecvPacketResponse.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is MsgRecvPacketResponseAmino {
    return o && (o.$typeUrl === MsgRecvPacketResponse.typeUrl || isSet(o.result));
  },
  encode(message: MsgRecvPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgRecvPacketResponseAmino): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgRecvPacketResponse): MsgRecvPacketResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketResponseAminoMsg): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecvPacketResponseProtoMsg): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.decode(message.value);
  },
  toProto(message: MsgRecvPacketResponse): Uint8Array {
    return MsgRecvPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
/**
 * MsgTimeout receives timed-out packet
 * @name MsgTimeout
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgTimeout
 */
export const MsgTimeout = {
  typeUrl: "/ibc.core.channel.v2.MsgTimeout",
  aminoType: "cosmos-sdk/MsgTimeout",
  is(o: any): o is MsgTimeout {
    return o && (o.$typeUrl === MsgTimeout.typeUrl || Packet.is(o.packet) && (o.proofUnreceived instanceof Uint8Array || typeof o.proofUnreceived === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgTimeoutAmino {
    return o && (o.$typeUrl === MsgTimeout.typeUrl || Packet.isAmino(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout {
    const message = createBaseMsgTimeout();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgTimeoutAmino): MsgTimeout {
    const message = createBaseMsgTimeout();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgTimeout): MsgTimeoutAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutAminoMsg): MsgTimeout {
    return MsgTimeout.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeout): MsgTimeoutAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeout",
      value: MsgTimeout.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutProtoMsg): MsgTimeout {
    return MsgTimeout.decode(message.value);
  },
  toProto(message: MsgTimeout): Uint8Array {
    return MsgTimeout.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeout): MsgTimeoutProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgTimeout",
      value: MsgTimeout.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgTimeout.typeUrl)) {
      return;
    }
    Packet.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {
    result: 0
  };
}
/**
 * MsgTimeoutResponse defines the Msg/Timeout response type.
 * @name MsgTimeoutResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgTimeoutResponse
 */
export const MsgTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v2.MsgTimeoutResponse",
  aminoType: "cosmos-sdk/MsgTimeoutResponse",
  is(o: any): o is MsgTimeoutResponse {
    return o && (o.$typeUrl === MsgTimeoutResponse.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is MsgTimeoutResponseAmino {
    return o && (o.$typeUrl === MsgTimeoutResponse.typeUrl || isSet(o.result));
  },
  encode(message: MsgTimeoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgTimeoutResponseAmino): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgTimeoutResponse): MsgTimeoutResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutResponseAminoMsg): MsgTimeoutResponse {
    return MsgTimeoutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutResponse",
      value: MsgTimeoutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutResponseProtoMsg): MsgTimeoutResponse {
    return MsgTimeoutResponse.decode(message.value);
  },
  toProto(message: MsgTimeoutResponse): Uint8Array {
    return MsgTimeoutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgTimeoutResponse",
      value: MsgTimeoutResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: Packet.fromPartial({}),
    acknowledgement: Acknowledgement.fromPartial({}),
    proofAcked: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
/**
 * MsgAcknowledgement receives incoming IBC acknowledgement.
 * @name MsgAcknowledgement
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgAcknowledgement
 */
export const MsgAcknowledgement = {
  typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
  aminoType: "cosmos-sdk/MsgAcknowledgement",
  is(o: any): o is MsgAcknowledgement {
    return o && (o.$typeUrl === MsgAcknowledgement.typeUrl || Packet.is(o.packet) && Acknowledgement.is(o.acknowledgement) && (o.proofAcked instanceof Uint8Array || typeof o.proofAcked === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgAcknowledgementAmino {
    return o && (o.$typeUrl === MsgAcknowledgement.typeUrl || Packet.isAmino(o.packet) && Acknowledgement.isAmino(o.acknowledgement) && (o.proof_acked instanceof Uint8Array || typeof o.proof_acked === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgAcknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement !== undefined) {
      Acknowledgement.encode(message.acknowledgement, writer.uint32(18).fork()).ldelim();
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = Acknowledgement.decode(reader, reader.uint32());
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.acknowledgement = object.acknowledgement !== undefined && object.acknowledgement !== null ? Acknowledgement.fromPartial(object.acknowledgement) : undefined;
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = Acknowledgement.fromAmino(object.acknowledgement);
    }
    if (object.proof_acked !== undefined && object.proof_acked !== null) {
      message.proofAcked = bytesFromBase64(object.proof_acked);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgAcknowledgement): MsgAcknowledgementAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.acknowledgement = message.acknowledgement ? Acknowledgement.toAmino(message.acknowledgement) : undefined;
    obj.proof_acked = message.proofAcked ? base64FromBytes(message.proofAcked) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementAminoMsg): MsgAcknowledgement {
    return MsgAcknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgement): MsgAcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgement",
      value: MsgAcknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcknowledgementProtoMsg): MsgAcknowledgement {
    return MsgAcknowledgement.decode(message.value);
  },
  toProto(message: MsgAcknowledgement): Uint8Array {
    return MsgAcknowledgement.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgement): MsgAcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
      value: MsgAcknowledgement.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgAcknowledgement.typeUrl)) {
      return;
    }
    Packet.registerTypeUrl();
    Acknowledgement.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {
    result: 0
  };
}
/**
 * MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
 * @name MsgAcknowledgementResponse
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgAcknowledgementResponse
 */
export const MsgAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v2.MsgAcknowledgementResponse",
  aminoType: "cosmos-sdk/MsgAcknowledgementResponse",
  is(o: any): o is MsgAcknowledgementResponse {
    return o && (o.$typeUrl === MsgAcknowledgementResponse.typeUrl || isSet(o.result));
  },
  isAmino(o: any): o is MsgAcknowledgementResponseAmino {
    return o && (o.$typeUrl === MsgAcknowledgementResponse.typeUrl || isSet(o.result));
  },
  encode(message: MsgAcknowledgementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementResponseAminoMsg): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcknowledgementResponseProtoMsg): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.decode(message.value);
  },
  toProto(message: MsgAcknowledgementResponse): Uint8Array {
    return MsgAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};