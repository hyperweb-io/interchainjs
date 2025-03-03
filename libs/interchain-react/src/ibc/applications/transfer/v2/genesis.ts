import { Denom, DenomAmino } from "./token";
import { Params, ParamsAmino } from "../v1/transfer";
import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId, PacketIdAmino, Packet, PacketAmino } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
  portId: string;
  denoms: Denom[];
  params: Params;
  /**
   * total_escrowed contains the total amount of tokens escrowed
   * by the transfer module
   */
  totalEscrowed: Coin[];
  /**
   * forwarded_packets contains the forwarded packets stored as part of the
   * packet forwarding lifecycle
   */
  forwardedPackets: ForwardedPacket[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.applications.transfer.v2.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisStateAmino {
  port_id: string;
  denoms: DenomAmino[];
  params: ParamsAmino;
  /**
   * total_escrowed contains the total amount of tokens escrowed
   * by the transfer module
   */
  total_escrowed: CoinAmino[];
  /**
   * forwarded_packets contains the forwarded packets stored as part of the
   * packet forwarding lifecycle
   */
  forwarded_packets: ForwardedPacketAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** ForwardedPacket defines the genesis type necessary to retrieve and store forwarded packets. */
export interface ForwardedPacket {
  forwardKey: PacketId;
  packet: Packet;
}
export interface ForwardedPacketProtoMsg {
  typeUrl: "/ibc.applications.transfer.v2.ForwardedPacket";
  value: Uint8Array;
}
/** ForwardedPacket defines the genesis type necessary to retrieve and store forwarded packets. */
export interface ForwardedPacketAmino {
  forward_key: PacketIdAmino;
  packet: PacketAmino;
}
export interface ForwardedPacketAminoMsg {
  type: "cosmos-sdk/ForwardedPacket";
  value: ForwardedPacketAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    portId: "",
    denoms: [],
    params: Params.fromPartial({}),
    totalEscrowed: [],
    forwardedPackets: []
  };
}
export const GenesisState = {
  typeUrl: "/ibc.applications.transfer.v2.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.portId === "string" && Array.isArray(o.denoms) && (!o.denoms.length || Denom.is(o.denoms[0])) && Params.is(o.params) && Array.isArray(o.totalEscrowed) && (!o.totalEscrowed.length || Coin.is(o.totalEscrowed[0])) && Array.isArray(o.forwardedPackets) && (!o.forwardedPackets.length || ForwardedPacket.is(o.forwardedPackets[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.port_id === "string" && Array.isArray(o.denoms) && (!o.denoms.length || Denom.isAmino(o.denoms[0])) && Params.isAmino(o.params) && Array.isArray(o.total_escrowed) && (!o.total_escrowed.length || Coin.isAmino(o.total_escrowed[0])) && Array.isArray(o.forwarded_packets) && (!o.forwarded_packets.length || ForwardedPacket.isAmino(o.forwarded_packets[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.totalEscrowed) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forwardedPackets) {
      ForwardedPacket.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.portId = reader.string();
          break;
        case 2:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalEscrowed.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.forwardedPackets.push(ForwardedPacket.decode(reader, reader.uint32()));
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
    message.portId = object.portId ?? "";
    message.denoms = object.denoms?.map(e => Denom.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.totalEscrowed = object.totalEscrowed?.map(e => Coin.fromPartial(e)) || [];
    message.forwardedPackets = object.forwardedPackets?.map(e => ForwardedPacket.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    message.denoms = object.denoms?.map(e => Denom.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.totalEscrowed = object.total_escrowed?.map(e => Coin.fromAmino(e)) || [];
    message.forwardedPackets = object.forwarded_packets?.map(e => ForwardedPacket.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e ? Denom.toAmino(e) : undefined);
    } else {
      obj.denoms = message.denoms;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.totalEscrowed) {
      obj.total_escrowed = message.totalEscrowed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_escrowed = message.totalEscrowed;
    }
    if (message.forwardedPackets) {
      obj.forwarded_packets = message.forwardedPackets.map(e => e ? ForwardedPacket.toAmino(e) : undefined);
    } else {
      obj.forwarded_packets = message.forwardedPackets;
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
      typeUrl: "/ibc.applications.transfer.v2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Denom.registerTypeUrl();
    Params.registerTypeUrl();
    Coin.registerTypeUrl();
    ForwardedPacket.registerTypeUrl();
  }
};
function createBaseForwardedPacket(): ForwardedPacket {
  return {
    forwardKey: PacketId.fromPartial({}),
    packet: Packet.fromPartial({})
  };
}
export const ForwardedPacket = {
  typeUrl: "/ibc.applications.transfer.v2.ForwardedPacket",
  aminoType: "cosmos-sdk/ForwardedPacket",
  is(o: any): o is ForwardedPacket {
    return o && (o.$typeUrl === ForwardedPacket.typeUrl || PacketId.is(o.forwardKey) && Packet.is(o.packet));
  },
  isAmino(o: any): o is ForwardedPacketAmino {
    return o && (o.$typeUrl === ForwardedPacket.typeUrl || PacketId.isAmino(o.forward_key) && Packet.isAmino(o.packet));
  },
  encode(message: ForwardedPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.forwardKey !== undefined) {
      PacketId.encode(message.forwardKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForwardedPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardedPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forwardKey = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ForwardedPacket>): ForwardedPacket {
    const message = createBaseForwardedPacket();
    message.forwardKey = object.forwardKey !== undefined && object.forwardKey !== null ? PacketId.fromPartial(object.forwardKey) : undefined;
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    return message;
  },
  fromAmino(object: ForwardedPacketAmino): ForwardedPacket {
    const message = createBaseForwardedPacket();
    if (object.forward_key !== undefined && object.forward_key !== null) {
      message.forwardKey = PacketId.fromAmino(object.forward_key);
    }
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    return message;
  },
  toAmino(message: ForwardedPacket): ForwardedPacketAmino {
    const obj: any = {};
    obj.forward_key = message.forwardKey ? PacketId.toAmino(message.forwardKey) : undefined;
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    return obj;
  },
  fromAminoMsg(object: ForwardedPacketAminoMsg): ForwardedPacket {
    return ForwardedPacket.fromAmino(object.value);
  },
  toAminoMsg(message: ForwardedPacket): ForwardedPacketAminoMsg {
    return {
      type: "cosmos-sdk/ForwardedPacket",
      value: ForwardedPacket.toAmino(message)
    };
  },
  fromProtoMsg(message: ForwardedPacketProtoMsg): ForwardedPacket {
    return ForwardedPacket.decode(message.value);
  },
  toProto(message: ForwardedPacket): Uint8Array {
    return ForwardedPacket.encode(message).finish();
  },
  toProtoMsg(message: ForwardedPacket): ForwardedPacketProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v2.ForwardedPacket",
      value: ForwardedPacket.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PacketId.registerTypeUrl();
    Packet.registerTypeUrl();
  }
};