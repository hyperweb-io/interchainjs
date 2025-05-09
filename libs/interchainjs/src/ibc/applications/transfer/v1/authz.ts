import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { Hop, HopAmino } from "./transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** Allocation defines the spend limit for a particular port and channel */
export interface Allocation {
  /** the port on which the packet will be sent */
  sourcePort: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  /** spend limitation on the channel */
  spendLimit: Coin[];
  /** allow list of receivers, an empty allow list permits any receiver address */
  allowList: string[];
  /**
   * allow list of memo strings, an empty list prohibits all memo strings;
   * a list only with "*" permits any memo string
   */
  allowedPacketData: string[];
  /** Forwarding options that are allowed. */
  allowedForwarding: AllowedForwarding[];
}
export interface AllocationProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.Allocation";
  value: Uint8Array;
}
/** Allocation defines the spend limit for a particular port and channel */
export interface AllocationAmino {
  /** the port on which the packet will be sent */
  source_port: string;
  /** the channel by which the packet will be sent */
  source_channel: string;
  /** spend limitation on the channel */
  spend_limit: CoinAmino[];
  /** allow list of receivers, an empty allow list permits any receiver address */
  allow_list: string[];
  /**
   * allow list of memo strings, an empty list prohibits all memo strings;
   * a list only with "*" permits any memo string
   */
  allowed_packet_data: string[];
  /** Forwarding options that are allowed. */
  allowed_forwarding: AllowedForwardingAmino[];
}
export interface AllocationAminoMsg {
  type: "cosmos-sdk/Allocation";
  value: AllocationAmino;
}
/** AllowedForwarding defines which options are allowed for forwarding. */
export interface AllowedForwarding {
  /**
   * a list of allowed source port ID/channel ID pairs through which the packet is allowed to be forwarded until final
   * destination
   */
  hops: Hop[];
}
export interface AllowedForwardingProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.AllowedForwarding";
  value: Uint8Array;
}
/** AllowedForwarding defines which options are allowed for forwarding. */
export interface AllowedForwardingAmino {
  /**
   * a list of allowed source port ID/channel ID pairs through which the packet is allowed to be forwarded until final
   * destination
   */
  hops: HopAmino[];
}
export interface AllowedForwardingAminoMsg {
  type: "cosmos-sdk/AllowedForwarding";
  value: AllowedForwardingAmino;
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorization {
  /** port and channel amounts */
  allocations: Allocation[];
}
export interface TransferAuthorizationProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization";
  value: Uint8Array;
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorizationAmino {
  /** port and channel amounts */
  allocations: AllocationAmino[];
}
export interface TransferAuthorizationAminoMsg {
  type: "cosmos-sdk/TransferAuthorization";
  value: TransferAuthorizationAmino;
}
function createBaseAllocation(): Allocation {
  return {
    sourcePort: "",
    sourceChannel: "",
    spendLimit: [],
    allowList: [],
    allowedPacketData: [],
    allowedForwarding: []
  };
}
export const Allocation = {
  typeUrl: "/ibc.applications.transfer.v1.Allocation",
  aminoType: "cosmos-sdk/Allocation",
  is(o: any): o is Allocation {
    return o && (o.$typeUrl === Allocation.typeUrl || typeof o.sourcePort === "string" && typeof o.sourceChannel === "string" && Array.isArray(o.spendLimit) && (!o.spendLimit.length || Coin.is(o.spendLimit[0])) && Array.isArray(o.allowList) && (!o.allowList.length || typeof o.allowList[0] === "string") && Array.isArray(o.allowedPacketData) && (!o.allowedPacketData.length || typeof o.allowedPacketData[0] === "string") && Array.isArray(o.allowedForwarding) && (!o.allowedForwarding.length || AllowedForwarding.is(o.allowedForwarding[0])));
  },
  isAmino(o: any): o is AllocationAmino {
    return o && (o.$typeUrl === Allocation.typeUrl || typeof o.source_port === "string" && typeof o.source_channel === "string" && Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.isAmino(o.spend_limit[0])) && Array.isArray(o.allow_list) && (!o.allow_list.length || typeof o.allow_list[0] === "string") && Array.isArray(o.allowed_packet_data) && (!o.allowed_packet_data.length || typeof o.allowed_packet_data[0] === "string") && Array.isArray(o.allowed_forwarding) && (!o.allowed_forwarding.length || AllowedForwarding.isAmino(o.allowed_forwarding[0])));
  },
  encode(message: Allocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.allowList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedPacketData) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.allowedForwarding) {
      AllowedForwarding.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.allowList.push(reader.string());
          break;
        case 5:
          message.allowedPacketData.push(reader.string());
          break;
        case 6:
          message.allowedForwarding.push(AllowedForwarding.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Allocation>): Allocation {
    const message = createBaseAllocation();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.allowList = object.allowList?.map(e => e) || [];
    message.allowedPacketData = object.allowedPacketData?.map(e => e) || [];
    message.allowedForwarding = object.allowedForwarding?.map(e => AllowedForwarding.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AllocationAmino): Allocation {
    const message = createBaseAllocation();
    if (object.source_port !== undefined && object.source_port !== null) {
      message.sourcePort = object.source_port;
    }
    if (object.source_channel !== undefined && object.source_channel !== null) {
      message.sourceChannel = object.source_channel;
    }
    message.spendLimit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
    message.allowList = object.allow_list?.map(e => e) || [];
    message.allowedPacketData = object.allowed_packet_data?.map(e => e) || [];
    message.allowedForwarding = object.allowed_forwarding?.map(e => AllowedForwarding.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Allocation): AllocationAmino {
    const obj: any = {};
    obj.source_port = message.sourcePort === "" ? undefined : message.sourcePort;
    obj.source_channel = message.sourceChannel === "" ? undefined : message.sourceChannel;
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.spend_limit = message.spendLimit;
    }
    if (message.allowList) {
      obj.allow_list = message.allowList.map(e => e);
    } else {
      obj.allow_list = message.allowList;
    }
    if (message.allowedPacketData) {
      obj.allowed_packet_data = message.allowedPacketData.map(e => e);
    } else {
      obj.allowed_packet_data = message.allowedPacketData;
    }
    if (message.allowedForwarding) {
      obj.allowed_forwarding = message.allowedForwarding.map(e => e ? AllowedForwarding.toAmino(e) : undefined);
    } else {
      obj.allowed_forwarding = message.allowedForwarding;
    }
    return obj;
  },
  fromAminoMsg(object: AllocationAminoMsg): Allocation {
    return Allocation.fromAmino(object.value);
  },
  toAminoMsg(message: Allocation): AllocationAminoMsg {
    return {
      type: "cosmos-sdk/Allocation",
      value: Allocation.toAmino(message)
    };
  },
  fromProtoMsg(message: AllocationProtoMsg): Allocation {
    return Allocation.decode(message.value);
  },
  toProto(message: Allocation): Uint8Array {
    return Allocation.encode(message).finish();
  },
  toProtoMsg(message: Allocation): AllocationProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.Allocation",
      value: Allocation.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Allocation.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
    AllowedForwarding.registerTypeUrl();
  }
};
function createBaseAllowedForwarding(): AllowedForwarding {
  return {
    hops: []
  };
}
export const AllowedForwarding = {
  typeUrl: "/ibc.applications.transfer.v1.AllowedForwarding",
  aminoType: "cosmos-sdk/AllowedForwarding",
  is(o: any): o is AllowedForwarding {
    return o && (o.$typeUrl === AllowedForwarding.typeUrl || Array.isArray(o.hops) && (!o.hops.length || Hop.is(o.hops[0])));
  },
  isAmino(o: any): o is AllowedForwardingAmino {
    return o && (o.$typeUrl === AllowedForwarding.typeUrl || Array.isArray(o.hops) && (!o.hops.length || Hop.isAmino(o.hops[0])));
  },
  encode(message: AllowedForwarding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hops) {
      Hop.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowedForwarding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedForwarding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hops.push(Hop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AllowedForwarding>): AllowedForwarding {
    const message = createBaseAllowedForwarding();
    message.hops = object.hops?.map(e => Hop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AllowedForwardingAmino): AllowedForwarding {
    const message = createBaseAllowedForwarding();
    message.hops = object.hops?.map(e => Hop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AllowedForwarding): AllowedForwardingAmino {
    const obj: any = {};
    if (message.hops) {
      obj.hops = message.hops.map(e => e ? Hop.toAmino(e) : undefined);
    } else {
      obj.hops = message.hops;
    }
    return obj;
  },
  fromAminoMsg(object: AllowedForwardingAminoMsg): AllowedForwarding {
    return AllowedForwarding.fromAmino(object.value);
  },
  toAminoMsg(message: AllowedForwarding): AllowedForwardingAminoMsg {
    return {
      type: "cosmos-sdk/AllowedForwarding",
      value: AllowedForwarding.toAmino(message)
    };
  },
  fromProtoMsg(message: AllowedForwardingProtoMsg): AllowedForwarding {
    return AllowedForwarding.decode(message.value);
  },
  toProto(message: AllowedForwarding): Uint8Array {
    return AllowedForwarding.encode(message).finish();
  },
  toProtoMsg(message: AllowedForwarding): AllowedForwardingProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.AllowedForwarding",
      value: AllowedForwarding.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AllowedForwarding.typeUrl)) {
      return;
    }
    Hop.registerTypeUrl();
  }
};
function createBaseTransferAuthorization(): TransferAuthorization {
  return {
    allocations: []
  };
}
export const TransferAuthorization = {
  typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
  aminoType: "cosmos-sdk/TransferAuthorization",
  is(o: any): o is TransferAuthorization {
    return o && (o.$typeUrl === TransferAuthorization.typeUrl || Array.isArray(o.allocations) && (!o.allocations.length || Allocation.is(o.allocations[0])));
  },
  isAmino(o: any): o is TransferAuthorizationAmino {
    return o && (o.$typeUrl === TransferAuthorization.typeUrl || Array.isArray(o.allocations) && (!o.allocations.length || Allocation.isAmino(o.allocations[0])));
  },
  encode(message: TransferAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransferAuthorization>): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map(e => Allocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TransferAuthorizationAmino): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map(e => Allocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TransferAuthorization): TransferAuthorizationAmino {
    const obj: any = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? Allocation.toAmino(e) : undefined);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object: TransferAuthorizationAminoMsg): TransferAuthorization {
    return TransferAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: TransferAuthorization): TransferAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/TransferAuthorization",
      value: TransferAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: TransferAuthorizationProtoMsg): TransferAuthorization {
    return TransferAuthorization.decode(message.value);
  },
  toProto(message: TransferAuthorization): Uint8Array {
    return TransferAuthorization.encode(message).finish();
  },
  toProtoMsg(message: TransferAuthorization): TransferAuthorizationProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
      value: TransferAuthorization.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TransferAuthorization.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(TransferAuthorization.typeUrl, TransferAuthorization);
    GlobalDecoderRegistry.registerAminoProtoMapping(TransferAuthorization.aminoType, TransferAuthorization.typeUrl);
    Allocation.registerTypeUrl();
  }
};