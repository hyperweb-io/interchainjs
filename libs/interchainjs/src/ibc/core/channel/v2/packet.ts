import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes, isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** PacketStatus specifies the status of a RecvPacketResult. */
export enum PacketStatus {
  /** PACKET_STATUS_UNSPECIFIED - PACKET_STATUS_UNSPECIFIED indicates an unknown packet status. */
  PACKET_STATUS_UNSPECIFIED = 0,
  /** PACKET_STATUS_SUCCESS - PACKET_STATUS_SUCCESS indicates a successful packet receipt. */
  PACKET_STATUS_SUCCESS = 1,
  /** PACKET_STATUS_FAILURE - PACKET_STATUS_FAILURE indicates a failed packet receipt. */
  PACKET_STATUS_FAILURE = 2,
  /** PACKET_STATUS_ASYNC - PACKET_STATUS_ASYNC indicates an async packet receipt. */
  PACKET_STATUS_ASYNC = 3,
  UNRECOGNIZED = -1,
}
export const PacketStatusAmino = PacketStatus;
export function packetStatusFromJSON(object: any): PacketStatus {
  switch (object) {
    case 0:
    case "PACKET_STATUS_UNSPECIFIED":
      return PacketStatus.PACKET_STATUS_UNSPECIFIED;
    case 1:
    case "PACKET_STATUS_SUCCESS":
      return PacketStatus.PACKET_STATUS_SUCCESS;
    case 2:
    case "PACKET_STATUS_FAILURE":
      return PacketStatus.PACKET_STATUS_FAILURE;
    case 3:
    case "PACKET_STATUS_ASYNC":
      return PacketStatus.PACKET_STATUS_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PacketStatus.UNRECOGNIZED;
  }
}
export function packetStatusToJSON(object: PacketStatus): string {
  switch (object) {
    case PacketStatus.PACKET_STATUS_UNSPECIFIED:
      return "PACKET_STATUS_UNSPECIFIED";
    case PacketStatus.PACKET_STATUS_SUCCESS:
      return "PACKET_STATUS_SUCCESS";
    case PacketStatus.PACKET_STATUS_FAILURE:
      return "PACKET_STATUS_FAILURE";
    case PacketStatus.PACKET_STATUS_ASYNC:
      return "PACKET_STATUS_ASYNC";
    case PacketStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Packet defines a type that carries data across different chains through IBC
 * @name Packet
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.Packet
 */
export interface Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: bigint;
  /**
   * identifies the sending client on the sending chain.
   */
  sourceClient: string;
  /**
   * identifies the receiving client on the receiving chain.
   */
  destinationClient: string;
  /**
   * timeout timestamp in seconds after which the packet times out.
   */
  timeoutTimestamp: bigint;
  /**
   * a list of payloads, each one for a specific application.
   */
  payloads: Payload[];
}
export interface PacketProtoMsg {
  typeUrl: "/ibc.core.channel.v2.Packet";
  value: Uint8Array;
}
/**
 * Packet defines a type that carries data across different chains through IBC
 * @name PacketAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.Packet
 */
export interface PacketAmino {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: string;
  /**
   * identifies the sending client on the sending chain.
   */
  source_client: string;
  /**
   * identifies the receiving client on the receiving chain.
   */
  destination_client: string;
  /**
   * timeout timestamp in seconds after which the packet times out.
   */
  timeout_timestamp: string;
  /**
   * a list of payloads, each one for a specific application.
   */
  payloads: PayloadAmino[];
}
export interface PacketAminoMsg {
  type: "cosmos-sdk/Packet";
  value: PacketAmino;
}
/**
 * Payload contains the source and destination ports and payload for the application (version, encoding, raw bytes)
 * @name Payload
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.Payload
 */
export interface Payload {
  /**
   * specifies the source port of the packet.
   */
  sourcePort: string;
  /**
   * specifies the destination port of the packet.
   */
  destinationPort: string;
  /**
   * version of the specified application.
   */
  version: string;
  /**
   * the encoding used for the provided value.
   */
  encoding: string;
  /**
   * the raw bytes for the payload.
   */
  value: Uint8Array;
}
export interface PayloadProtoMsg {
  typeUrl: "/ibc.core.channel.v2.Payload";
  value: Uint8Array;
}
/**
 * Payload contains the source and destination ports and payload for the application (version, encoding, raw bytes)
 * @name PayloadAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.Payload
 */
export interface PayloadAmino {
  /**
   * specifies the source port of the packet.
   */
  source_port: string;
  /**
   * specifies the destination port of the packet.
   */
  destination_port: string;
  /**
   * version of the specified application.
   */
  version: string;
  /**
   * the encoding used for the provided value.
   */
  encoding: string;
  /**
   * the raw bytes for the payload.
   */
  value: string;
}
export interface PayloadAminoMsg {
  type: "cosmos-sdk/Payload";
  value: PayloadAmino;
}
/**
 * Acknowledgement contains a list of all ack results associated with a single packet.
 * In the case of a successful receive, the acknowledgement will contain an app acknowledgement
 * for each application that received a payload in the same order that the payloads were sent
 * in the packet.
 * If the receive is not successful, the acknowledgement will contain a single app acknowledgment
 * which will be a constant error acknowledgment as defined by the IBC v2 protocol.
 * @name Acknowledgement
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.Acknowledgement
 */
export interface Acknowledgement {
  appAcknowledgements: Uint8Array[];
}
export interface AcknowledgementProtoMsg {
  typeUrl: "/ibc.core.channel.v2.Acknowledgement";
  value: Uint8Array;
}
/**
 * Acknowledgement contains a list of all ack results associated with a single packet.
 * In the case of a successful receive, the acknowledgement will contain an app acknowledgement
 * for each application that received a payload in the same order that the payloads were sent
 * in the packet.
 * If the receive is not successful, the acknowledgement will contain a single app acknowledgment
 * which will be a constant error acknowledgment as defined by the IBC v2 protocol.
 * @name AcknowledgementAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.Acknowledgement
 */
export interface AcknowledgementAmino {
  app_acknowledgements: string[];
}
export interface AcknowledgementAminoMsg {
  type: "cosmos-sdk/Acknowledgement";
  value: AcknowledgementAmino;
}
/**
 * RecvPacketResult speecifies the status of a packet as well as the acknowledgement bytes.
 * @name RecvPacketResult
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.RecvPacketResult
 */
export interface RecvPacketResult {
  /**
   * status of the packet
   */
  status: PacketStatus;
  /**
   * acknowledgement of the packet
   */
  acknowledgement: Uint8Array;
}
export interface RecvPacketResultProtoMsg {
  typeUrl: "/ibc.core.channel.v2.RecvPacketResult";
  value: Uint8Array;
}
/**
 * RecvPacketResult speecifies the status of a packet as well as the acknowledgement bytes.
 * @name RecvPacketResultAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.RecvPacketResult
 */
export interface RecvPacketResultAmino {
  /**
   * status of the packet
   */
  status: PacketStatus;
  /**
   * acknowledgement of the packet
   */
  acknowledgement: string;
}
export interface RecvPacketResultAminoMsg {
  type: "cosmos-sdk/RecvPacketResult";
  value: RecvPacketResultAmino;
}
function createBasePacket(): Packet {
  return {
    sequence: BigInt(0),
    sourceClient: "",
    destinationClient: "",
    timeoutTimestamp: BigInt(0),
    payloads: []
  };
}
/**
 * Packet defines a type that carries data across different chains through IBC
 * @name Packet
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.Packet
 */
export const Packet = {
  typeUrl: "/ibc.core.channel.v2.Packet",
  aminoType: "cosmos-sdk/Packet",
  is(o: any): o is Packet {
    return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.sourceClient === "string" && typeof o.destinationClient === "string" && typeof o.timeoutTimestamp === "bigint" && Array.isArray(o.payloads) && (!o.payloads.length || Payload.is(o.payloads[0])));
  },
  isAmino(o: any): o is PacketAmino {
    return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_client === "string" && typeof o.destination_client === "string" && typeof o.timeout_timestamp === "bigint" && Array.isArray(o.payloads) && (!o.payloads.length || Payload.isAmino(o.payloads[0])));
  },
  encode(message: Packet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.sourceClient !== "") {
      writer.uint32(18).string(message.sourceClient);
    }
    if (message.destinationClient !== "") {
      writer.uint32(26).string(message.destinationClient);
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    for (const v of message.payloads) {
      Payload.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Packet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.sourceClient = reader.string();
          break;
        case 3:
          message.destinationClient = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 5:
          message.payloads.push(Payload.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Packet>): Packet {
    const message = createBasePacket();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.sourceClient = object.sourceClient ?? "";
    message.destinationClient = object.destinationClient ?? "";
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    message.payloads = object.payloads?.map(e => Payload.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PacketAmino): Packet {
    const message = createBasePacket();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.source_client !== undefined && object.source_client !== null) {
      message.sourceClient = object.source_client;
    }
    if (object.destination_client !== undefined && object.destination_client !== null) {
      message.destinationClient = object.destination_client;
    }
    if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    message.payloads = object.payloads?.map(e => Payload.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Packet): PacketAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.source_client = message.sourceClient === "" ? undefined : message.sourceClient;
    obj.destination_client = message.destinationClient === "" ? undefined : message.destinationClient;
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : undefined;
    if (message.payloads) {
      obj.payloads = message.payloads.map(e => e ? Payload.toAmino(e) : undefined);
    } else {
      obj.payloads = message.payloads;
    }
    return obj;
  },
  fromAminoMsg(object: PacketAminoMsg): Packet {
    return Packet.fromAmino(object.value);
  },
  toAminoMsg(message: Packet): PacketAminoMsg {
    return {
      type: "cosmos-sdk/Packet",
      value: Packet.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketProtoMsg): Packet {
    return Packet.decode(message.value);
  },
  toProto(message: Packet): Uint8Array {
    return Packet.encode(message).finish();
  },
  toProtoMsg(message: Packet): PacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.Packet",
      value: Packet.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Packet.typeUrl)) {
      return;
    }
    Payload.registerTypeUrl();
  }
};
function createBasePayload(): Payload {
  return {
    sourcePort: "",
    destinationPort: "",
    version: "",
    encoding: "",
    value: new Uint8Array()
  };
}
/**
 * Payload contains the source and destination ports and payload for the application (version, encoding, raw bytes)
 * @name Payload
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.Payload
 */
export const Payload = {
  typeUrl: "/ibc.core.channel.v2.Payload",
  aminoType: "cosmos-sdk/Payload",
  is(o: any): o is Payload {
    return o && (o.$typeUrl === Payload.typeUrl || typeof o.sourcePort === "string" && typeof o.destinationPort === "string" && typeof o.version === "string" && typeof o.encoding === "string" && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isAmino(o: any): o is PayloadAmino {
    return o && (o.$typeUrl === Payload.typeUrl || typeof o.source_port === "string" && typeof o.destination_port === "string" && typeof o.version === "string" && typeof o.encoding === "string" && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  encode(message: Payload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.destinationPort !== "") {
      writer.uint32(18).string(message.destinationPort);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.encoding !== "") {
      writer.uint32(34).string(message.encoding);
    }
    if (message.value.length !== 0) {
      writer.uint32(42).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Payload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.destinationPort = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.encoding = reader.string();
          break;
        case 5:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Payload>): Payload {
    const message = createBasePayload();
    message.sourcePort = object.sourcePort ?? "";
    message.destinationPort = object.destinationPort ?? "";
    message.version = object.version ?? "";
    message.encoding = object.encoding ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PayloadAmino): Payload {
    const message = createBasePayload();
    if (object.source_port !== undefined && object.source_port !== null) {
      message.sourcePort = object.source_port;
    }
    if (object.destination_port !== undefined && object.destination_port !== null) {
      message.destinationPort = object.destination_port;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: Payload): PayloadAmino {
    const obj: any = {};
    obj.source_port = message.sourcePort === "" ? undefined : message.sourcePort;
    obj.destination_port = message.destinationPort === "" ? undefined : message.destinationPort;
    obj.version = message.version === "" ? undefined : message.version;
    obj.encoding = message.encoding === "" ? undefined : message.encoding;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: PayloadAminoMsg): Payload {
    return Payload.fromAmino(object.value);
  },
  toAminoMsg(message: Payload): PayloadAminoMsg {
    return {
      type: "cosmos-sdk/Payload",
      value: Payload.toAmino(message)
    };
  },
  fromProtoMsg(message: PayloadProtoMsg): Payload {
    return Payload.decode(message.value);
  },
  toProto(message: Payload): Uint8Array {
    return Payload.encode(message).finish();
  },
  toProtoMsg(message: Payload): PayloadProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.Payload",
      value: Payload.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAcknowledgement(): Acknowledgement {
  return {
    appAcknowledgements: []
  };
}
/**
 * Acknowledgement contains a list of all ack results associated with a single packet.
 * In the case of a successful receive, the acknowledgement will contain an app acknowledgement
 * for each application that received a payload in the same order that the payloads were sent
 * in the packet.
 * If the receive is not successful, the acknowledgement will contain a single app acknowledgment
 * which will be a constant error acknowledgment as defined by the IBC v2 protocol.
 * @name Acknowledgement
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.Acknowledgement
 */
export const Acknowledgement = {
  typeUrl: "/ibc.core.channel.v2.Acknowledgement",
  aminoType: "cosmos-sdk/Acknowledgement",
  is(o: any): o is Acknowledgement {
    return o && (o.$typeUrl === Acknowledgement.typeUrl || Array.isArray(o.appAcknowledgements) && (!o.appAcknowledgements.length || o.appAcknowledgements[0] instanceof Uint8Array || typeof o.appAcknowledgements[0] === "string"));
  },
  isAmino(o: any): o is AcknowledgementAmino {
    return o && (o.$typeUrl === Acknowledgement.typeUrl || Array.isArray(o.app_acknowledgements) && (!o.app_acknowledgements.length || o.app_acknowledgements[0] instanceof Uint8Array || typeof o.app_acknowledgements[0] === "string"));
  },
  encode(message: Acknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.appAcknowledgements) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Acknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAcknowledgements.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Acknowledgement>): Acknowledgement {
    const message = createBaseAcknowledgement();
    message.appAcknowledgements = object.appAcknowledgements?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AcknowledgementAmino): Acknowledgement {
    const message = createBaseAcknowledgement();
    message.appAcknowledgements = object.app_acknowledgements?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: Acknowledgement): AcknowledgementAmino {
    const obj: any = {};
    if (message.appAcknowledgements) {
      obj.app_acknowledgements = message.appAcknowledgements.map(e => base64FromBytes(e));
    } else {
      obj.app_acknowledgements = message.appAcknowledgements;
    }
    return obj;
  },
  fromAminoMsg(object: AcknowledgementAminoMsg): Acknowledgement {
    return Acknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: Acknowledgement): AcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/Acknowledgement",
      value: Acknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message: AcknowledgementProtoMsg): Acknowledgement {
    return Acknowledgement.decode(message.value);
  },
  toProto(message: Acknowledgement): Uint8Array {
    return Acknowledgement.encode(message).finish();
  },
  toProtoMsg(message: Acknowledgement): AcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.Acknowledgement",
      value: Acknowledgement.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRecvPacketResult(): RecvPacketResult {
  return {
    status: 0,
    acknowledgement: new Uint8Array()
  };
}
/**
 * RecvPacketResult speecifies the status of a packet as well as the acknowledgement bytes.
 * @name RecvPacketResult
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.RecvPacketResult
 */
export const RecvPacketResult = {
  typeUrl: "/ibc.core.channel.v2.RecvPacketResult",
  aminoType: "cosmos-sdk/RecvPacketResult",
  is(o: any): o is RecvPacketResult {
    return o && (o.$typeUrl === RecvPacketResult.typeUrl || isSet(o.status) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string"));
  },
  isAmino(o: any): o is RecvPacketResultAmino {
    return o && (o.$typeUrl === RecvPacketResult.typeUrl || isSet(o.status) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string"));
  },
  encode(message: RecvPacketResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RecvPacketResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecvPacketResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RecvPacketResult>): RecvPacketResult {
    const message = createBaseRecvPacketResult();
    message.status = object.status ?? 0;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RecvPacketResultAmino): RecvPacketResult {
    const message = createBaseRecvPacketResult();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    return message;
  },
  toAmino(message: RecvPacketResult): RecvPacketResultAmino {
    const obj: any = {};
    obj.status = message.status === 0 ? undefined : message.status;
    obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecvPacketResultAminoMsg): RecvPacketResult {
    return RecvPacketResult.fromAmino(object.value);
  },
  toAminoMsg(message: RecvPacketResult): RecvPacketResultAminoMsg {
    return {
      type: "cosmos-sdk/RecvPacketResult",
      value: RecvPacketResult.toAmino(message)
    };
  },
  fromProtoMsg(message: RecvPacketResultProtoMsg): RecvPacketResult {
    return RecvPacketResult.decode(message.value);
  },
  toProto(message: RecvPacketResult): Uint8Array {
    return RecvPacketResult.encode(message).finish();
  },
  toProtoMsg(message: RecvPacketResult): RecvPacketResultProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.RecvPacketResult",
      value: RecvPacketResult.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};