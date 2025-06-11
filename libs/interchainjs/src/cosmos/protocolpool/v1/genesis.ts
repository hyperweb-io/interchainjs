import { ContinuousFund, ContinuousFundAmino, Params, ParamsAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the protocolpool module's genesis state.
 * @name GenesisState
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.GenesisState
 */
export interface GenesisState {
  /**
   * ContinuousFunds defines the continuous funds at genesis.
   */
  continuousFunds: ContinuousFund[];
  /**
   * Params defines the parameters of this module, currently only contains the
   * denoms that will be used for continuous fund distributions.
   */
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the protocolpool module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * ContinuousFunds defines the continuous funds at genesis.
   */
  continuous_funds: ContinuousFundAmino[];
  /**
   * Params defines the parameters of this module, currently only contains the
   * denoms that will be used for continuous fund distributions.
   */
  params: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    continuousFunds: [],
    params: Params.fromPartial({})
  };
}
/**
 * GenesisState defines the protocolpool module's genesis state.
 * @name GenesisState
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/cosmos.protocolpool.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.continuousFunds) && (!o.continuousFunds.length || ContinuousFund.is(o.continuousFunds[0])) && Params.is(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.continuous_funds) && (!o.continuous_funds.length || ContinuousFund.isAmino(o.continuous_funds[0])) && Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.continuousFunds) {
      ContinuousFund.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.continuousFunds.push(ContinuousFund.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
    message.continuousFunds = object.continuousFunds?.map(e => ContinuousFund.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.continuousFunds = object.continuous_funds?.map(e => ContinuousFund.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.continuousFunds) {
      obj.continuous_funds = message.continuousFunds.map(e => e ? ContinuousFund.toAmino(e) : undefined);
    } else {
      obj.continuous_funds = message.continuousFunds;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/cosmos.protocolpool.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    ContinuousFund.registerTypeUrl();
    Params.registerTypeUrl();
  }
};