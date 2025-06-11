import { Denom, DenomAmino } from "./token";
import { Params, ParamsAmino } from "./transfer";
import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial } from "../../../../helpers";
/**
 * GenesisState defines the ibc-transfer genesis state
 * @name GenesisState
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.GenesisState
 */
export interface GenesisState {
  portId: string;
  denoms: Denom[];
  params: Params;
  /**
   * total_escrowed contains the total amount of tokens escrowed
   * by the transfer module
   */
  totalEscrowed: Coin[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the ibc-transfer genesis state
 * @name GenesisStateAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.GenesisState
 */
export interface GenesisStateAmino {
  port_id: string;
  denoms: DenomAmino[];
  params: ParamsAmino;
  /**
   * total_escrowed contains the total amount of tokens escrowed
   * by the transfer module
   */
  total_escrowed: CoinAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    portId: "",
    denoms: [],
    params: Params.fromPartial({}),
    totalEscrowed: []
  };
}
/**
 * GenesisState defines the ibc-transfer genesis state
 * @name GenesisState
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/ibc.applications.transfer.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.portId === "string" && Array.isArray(o.denoms) && (!o.denoms.length || Denom.is(o.denoms[0])) && Params.is(o.params) && Array.isArray(o.totalEscrowed) && (!o.totalEscrowed.length || Coin.is(o.totalEscrowed[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.port_id === "string" && Array.isArray(o.denoms) && (!o.denoms.length || Denom.isAmino(o.denoms[0])) && Params.isAmino(o.params) && Array.isArray(o.total_escrowed) && (!o.total_escrowed.length || Coin.isAmino(o.total_escrowed[0])));
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
      typeUrl: "/ibc.applications.transfer.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Denom.registerTypeUrl();
    Params.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};