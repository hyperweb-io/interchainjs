import { CounterpartyInfo, CounterpartyInfoAmino } from "./counterparty";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial } from "../../../../helpers";
/**
 * GenesisCounterpartyInfo defines the state associating a client with a counterparty.
 * @name GenesisCounterpartyInfo
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.GenesisCounterpartyInfo
 */
export interface GenesisCounterpartyInfo {
  /**
   * ClientId is the ID of the given client.
   */
  clientId: string;
  /**
   * CounterpartyInfo is the counterparty info of the given client.
   */
  counterpartyInfo: CounterpartyInfo;
}
export interface GenesisCounterpartyInfoProtoMsg {
  typeUrl: "/ibc.core.client.v2.GenesisCounterpartyInfo";
  value: Uint8Array;
}
/**
 * GenesisCounterpartyInfo defines the state associating a client with a counterparty.
 * @name GenesisCounterpartyInfoAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.GenesisCounterpartyInfo
 */
export interface GenesisCounterpartyInfoAmino {
  /**
   * ClientId is the ID of the given client.
   */
  client_id: string;
  /**
   * CounterpartyInfo is the counterparty info of the given client.
   */
  counterparty_info: CounterpartyInfoAmino;
}
export interface GenesisCounterpartyInfoAminoMsg {
  type: "cosmos-sdk/GenesisCounterpartyInfo";
  value: GenesisCounterpartyInfoAmino;
}
/**
 * GenesisState defines the ibc client v2 submodule's genesis state.
 * @name GenesisState
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.GenesisState
 */
export interface GenesisState {
  /**
   * counterparty info for each client
   */
  counterpartyInfos: GenesisCounterpartyInfo[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.core.client.v2.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the ibc client v2 submodule's genesis state.
 * @name GenesisStateAmino
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * counterparty info for each client
   */
  counterparty_infos: GenesisCounterpartyInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisCounterpartyInfo(): GenesisCounterpartyInfo {
  return {
    clientId: "",
    counterpartyInfo: CounterpartyInfo.fromPartial({})
  };
}
/**
 * GenesisCounterpartyInfo defines the state associating a client with a counterparty.
 * @name GenesisCounterpartyInfo
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.GenesisCounterpartyInfo
 */
export const GenesisCounterpartyInfo = {
  typeUrl: "/ibc.core.client.v2.GenesisCounterpartyInfo",
  aminoType: "cosmos-sdk/GenesisCounterpartyInfo",
  is(o: any): o is GenesisCounterpartyInfo {
    return o && (o.$typeUrl === GenesisCounterpartyInfo.typeUrl || typeof o.clientId === "string" && CounterpartyInfo.is(o.counterpartyInfo));
  },
  isAmino(o: any): o is GenesisCounterpartyInfoAmino {
    return o && (o.$typeUrl === GenesisCounterpartyInfo.typeUrl || typeof o.client_id === "string" && CounterpartyInfo.isAmino(o.counterparty_info));
  },
  encode(message: GenesisCounterpartyInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterpartyInfo !== undefined) {
      CounterpartyInfo.encode(message.counterpartyInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisCounterpartyInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisCounterpartyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterpartyInfo = CounterpartyInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisCounterpartyInfo>): GenesisCounterpartyInfo {
    const message = createBaseGenesisCounterpartyInfo();
    message.clientId = object.clientId ?? "";
    message.counterpartyInfo = object.counterpartyInfo !== undefined && object.counterpartyInfo !== null ? CounterpartyInfo.fromPartial(object.counterpartyInfo) : undefined;
    return message;
  },
  fromAmino(object: GenesisCounterpartyInfoAmino): GenesisCounterpartyInfo {
    const message = createBaseGenesisCounterpartyInfo();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.counterparty_info !== undefined && object.counterparty_info !== null) {
      message.counterpartyInfo = CounterpartyInfo.fromAmino(object.counterparty_info);
    }
    return message;
  },
  toAmino(message: GenesisCounterpartyInfo): GenesisCounterpartyInfoAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.counterparty_info = message.counterpartyInfo ? CounterpartyInfo.toAmino(message.counterpartyInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisCounterpartyInfoAminoMsg): GenesisCounterpartyInfo {
    return GenesisCounterpartyInfo.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisCounterpartyInfo): GenesisCounterpartyInfoAminoMsg {
    return {
      type: "cosmos-sdk/GenesisCounterpartyInfo",
      value: GenesisCounterpartyInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisCounterpartyInfoProtoMsg): GenesisCounterpartyInfo {
    return GenesisCounterpartyInfo.decode(message.value);
  },
  toProto(message: GenesisCounterpartyInfo): Uint8Array {
    return GenesisCounterpartyInfo.encode(message).finish();
  },
  toProtoMsg(message: GenesisCounterpartyInfo): GenesisCounterpartyInfoProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.GenesisCounterpartyInfo",
      value: GenesisCounterpartyInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisCounterpartyInfo.typeUrl)) {
      return;
    }
    CounterpartyInfo.registerTypeUrl();
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    counterpartyInfos: []
  };
}
/**
 * GenesisState defines the ibc client v2 submodule's genesis state.
 * @name GenesisState
 * @package ibc.core.client.v2
 * @see proto type: ibc.core.client.v2.GenesisState
 */
export const GenesisState = {
  typeUrl: "/ibc.core.client.v2.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.counterpartyInfos) && (!o.counterpartyInfos.length || GenesisCounterpartyInfo.is(o.counterpartyInfos[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.counterparty_infos) && (!o.counterparty_infos.length || GenesisCounterpartyInfo.isAmino(o.counterparty_infos[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.counterpartyInfos) {
      GenesisCounterpartyInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.counterpartyInfos.push(GenesisCounterpartyInfo.decode(reader, reader.uint32()));
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
    message.counterpartyInfos = object.counterpartyInfos?.map(e => GenesisCounterpartyInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.counterpartyInfos = object.counterparty_infos?.map(e => GenesisCounterpartyInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.counterpartyInfos) {
      obj.counterparty_infos = message.counterpartyInfos.map(e => e ? GenesisCounterpartyInfo.toAmino(e) : undefined);
    } else {
      obj.counterparty_infos = message.counterpartyInfos;
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
      typeUrl: "/ibc.core.client.v2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    GenesisCounterpartyInfo.registerTypeUrl();
  }
};