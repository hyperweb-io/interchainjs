import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisStateAmino as GenesisState1Amino } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisStateAmino as GenesisState2Amino } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisStateAmino as GenesisState3Amino } from "../../channel/v1/genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
  /** ICS002 - Clients genesis state */
  clientGenesis: GenesisState1;
  /** ICS003 - Connections genesis state */
  connectionGenesis: GenesisState2;
  /** ICS004 - Channel genesis state */
  channelGenesis: GenesisState3;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.core.types.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisStateAmino {
  /** ICS002 - Clients genesis state */
  client_genesis: GenesisState1Amino;
  /** ICS003 - Connections genesis state */
  connection_genesis: GenesisState2Amino;
  /** ICS004 - Channel genesis state */
  channel_genesis: GenesisState3Amino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    clientGenesis: GenesisState1.fromPartial({}),
    connectionGenesis: GenesisState2.fromPartial({}),
    channelGenesis: GenesisState3.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.types.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || GenesisState1.is(o.clientGenesis) && GenesisState2.is(o.connectionGenesis) && GenesisState3.is(o.channelGenesis));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || GenesisState1.isAmino(o.client_genesis) && GenesisState2.isAmino(o.connection_genesis) && GenesisState3.isAmino(o.channel_genesis));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientGenesis !== undefined) {
      GenesisState1.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionGenesis !== undefined) {
      GenesisState2.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
    }
    if (message.channelGenesis !== undefined) {
      GenesisState3.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
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
          message.clientGenesis = GenesisState1.decode(reader, reader.uint32());
          break;
        case 2:
          message.connectionGenesis = GenesisState2.decode(reader, reader.uint32());
          break;
        case 3:
          message.channelGenesis = GenesisState3.decode(reader, reader.uint32());
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
    message.clientGenesis = object.clientGenesis !== undefined && object.clientGenesis !== null ? GenesisState1.fromPartial(object.clientGenesis) : undefined;
    message.connectionGenesis = object.connectionGenesis !== undefined && object.connectionGenesis !== null ? GenesisState2.fromPartial(object.connectionGenesis) : undefined;
    message.channelGenesis = object.channelGenesis !== undefined && object.channelGenesis !== null ? GenesisState3.fromPartial(object.channelGenesis) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.client_genesis !== undefined && object.client_genesis !== null) {
      message.clientGenesis = GenesisState1.fromAmino(object.client_genesis);
    }
    if (object.connection_genesis !== undefined && object.connection_genesis !== null) {
      message.connectionGenesis = GenesisState2.fromAmino(object.connection_genesis);
    }
    if (object.channel_genesis !== undefined && object.channel_genesis !== null) {
      message.channelGenesis = GenesisState3.fromAmino(object.channel_genesis);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.client_genesis = message.clientGenesis ? GenesisState1.toAmino(message.clientGenesis) : undefined;
    obj.connection_genesis = message.connectionGenesis ? GenesisState2.toAmino(message.connectionGenesis) : undefined;
    obj.channel_genesis = message.channelGenesis ? GenesisState3.toAmino(message.channelGenesis) : undefined;
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
      typeUrl: "/ibc.core.types.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    GenesisState1.registerTypeUrl();
    GenesisState2.registerTypeUrl();
    GenesisState3.registerTypeUrl();
  }
};