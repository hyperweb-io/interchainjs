import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  sendEnabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receiveEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsAmino {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  send_enabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receive_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/**
 * Forwarding defines a list of port ID, channel ID pairs determining the path
 * through which a packet must be forwarded, and an unwind boolean indicating if
 * the coin should be unwinded to its native chain before forwarding.
 */
export interface Forwarding {
  /** optional unwinding for the token transfered */
  unwind: boolean;
  /** optional intermediate path through which packet will be forwarded */
  hops: Hop[];
}
export interface ForwardingProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.Forwarding";
  value: Uint8Array;
}
/**
 * Forwarding defines a list of port ID, channel ID pairs determining the path
 * through which a packet must be forwarded, and an unwind boolean indicating if
 * the coin should be unwinded to its native chain before forwarding.
 */
export interface ForwardingAmino {
  /** optional unwinding for the token transfered */
  unwind: boolean;
  /** optional intermediate path through which packet will be forwarded */
  hops: HopAmino[];
}
export interface ForwardingAminoMsg {
  type: "cosmos-sdk/Forwarding";
  value: ForwardingAmino;
}
/**
 * Hop defines a port ID, channel ID pair specifying where tokens must be forwarded
 * next in a multihop transfer.
 */
export interface Hop {
  portId: string;
  channelId: string;
}
export interface HopProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.Hop";
  value: Uint8Array;
}
/**
 * Hop defines a port ID, channel ID pair specifying where tokens must be forwarded
 * next in a multihop transfer.
 */
export interface HopAmino {
  port_id: string;
  channel_id: string;
}
export interface HopAminoMsg {
  type: "cosmos-sdk/Hop";
  value: HopAmino;
}
function createBaseParams(): Params {
  return {
    sendEnabled: false,
    receiveEnabled: false
  };
}
export const Params = {
  typeUrl: "/ibc.applications.transfer.v1.Params",
  aminoType: "cosmos-sdk/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.sendEnabled === "boolean" && typeof o.receiveEnabled === "boolean");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.send_enabled === "boolean" && typeof o.receive_enabled === "boolean");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sendEnabled === true) {
      writer.uint32(8).bool(message.sendEnabled);
    }
    if (message.receiveEnabled === true) {
      writer.uint32(16).bool(message.receiveEnabled);
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
          message.sendEnabled = reader.bool();
          break;
        case 2:
          message.receiveEnabled = reader.bool();
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
    message.sendEnabled = object.sendEnabled ?? false;
    message.receiveEnabled = object.receiveEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.send_enabled !== undefined && object.send_enabled !== null) {
      message.sendEnabled = object.send_enabled;
    }
    if (object.receive_enabled !== undefined && object.receive_enabled !== null) {
      message.receiveEnabled = object.receive_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.send_enabled = message.sendEnabled === false ? undefined : message.sendEnabled;
    obj.receive_enabled = message.receiveEnabled === false ? undefined : message.receiveEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
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
      typeUrl: "/ibc.applications.transfer.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseForwarding(): Forwarding {
  return {
    unwind: false,
    hops: []
  };
}
export const Forwarding = {
  typeUrl: "/ibc.applications.transfer.v1.Forwarding",
  aminoType: "cosmos-sdk/Forwarding",
  is(o: any): o is Forwarding {
    return o && (o.$typeUrl === Forwarding.typeUrl || typeof o.unwind === "boolean" && Array.isArray(o.hops) && (!o.hops.length || Hop.is(o.hops[0])));
  },
  isAmino(o: any): o is ForwardingAmino {
    return o && (o.$typeUrl === Forwarding.typeUrl || typeof o.unwind === "boolean" && Array.isArray(o.hops) && (!o.hops.length || Hop.isAmino(o.hops[0])));
  },
  encode(message: Forwarding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unwind === true) {
      writer.uint32(8).bool(message.unwind);
    }
    for (const v of message.hops) {
      Hop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Forwarding {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwarding();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unwind = reader.bool();
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
  fromPartial(object: DeepPartial<Forwarding>): Forwarding {
    const message = createBaseForwarding();
    message.unwind = object.unwind ?? false;
    message.hops = object.hops?.map(e => Hop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ForwardingAmino): Forwarding {
    const message = createBaseForwarding();
    if (object.unwind !== undefined && object.unwind !== null) {
      message.unwind = object.unwind;
    }
    message.hops = object.hops?.map(e => Hop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Forwarding): ForwardingAmino {
    const obj: any = {};
    obj.unwind = message.unwind === false ? undefined : message.unwind;
    if (message.hops) {
      obj.hops = message.hops.map(e => e ? Hop.toAmino(e) : undefined);
    } else {
      obj.hops = message.hops;
    }
    return obj;
  },
  fromAminoMsg(object: ForwardingAminoMsg): Forwarding {
    return Forwarding.fromAmino(object.value);
  },
  toAminoMsg(message: Forwarding): ForwardingAminoMsg {
    return {
      type: "cosmos-sdk/Forwarding",
      value: Forwarding.toAmino(message)
    };
  },
  fromProtoMsg(message: ForwardingProtoMsg): Forwarding {
    return Forwarding.decode(message.value);
  },
  toProto(message: Forwarding): Uint8Array {
    return Forwarding.encode(message).finish();
  },
  toProtoMsg(message: Forwarding): ForwardingProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.Forwarding",
      value: Forwarding.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Forwarding.typeUrl, Forwarding);
GlobalDecoderRegistry.registerAminoProtoMapping(Forwarding.aminoType, Forwarding.typeUrl);
function createBaseHop(): Hop {
  return {
    portId: "",
    channelId: ""
  };
}
export const Hop = {
  typeUrl: "/ibc.applications.transfer.v1.Hop",
  aminoType: "cosmos-sdk/Hop",
  is(o: any): o is Hop {
    return o && (o.$typeUrl === Hop.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
  },
  isAmino(o: any): o is HopAmino {
    return o && (o.$typeUrl === Hop.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: Hop, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Hop {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHop();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Hop>): Hop {
    const message = createBaseHop();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: HopAmino): Hop {
    const message = createBaseHop();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: Hop): HopAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: HopAminoMsg): Hop {
    return Hop.fromAmino(object.value);
  },
  toAminoMsg(message: Hop): HopAminoMsg {
    return {
      type: "cosmos-sdk/Hop",
      value: Hop.toAmino(message)
    };
  },
  fromProtoMsg(message: HopProtoMsg): Hop {
    return Hop.decode(message.value);
  },
  toProto(message: Hop): Uint8Array {
    return Hop.encode(message).finish();
  },
  toProtoMsg(message: Hop): HopProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.Hop",
      value: Hop.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Hop.typeUrl, Hop);
GlobalDecoderRegistry.registerAminoProtoMapping(Hop.aminoType, Hop.typeUrl);