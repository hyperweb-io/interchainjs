import { Params, ParamsAmino } from "./params";
import { Namespace, NamespaceAmino, AddressVoucher, AddressVoucherAmino } from "./permissions";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the permissions module's genesis state.
 * @name GenesisState
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines the parameters of the module.
   */
  params: Params;
  namespaces: Namespace[];
  vouchers: AddressVoucher[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the permissions module's genesis state.
 * @name GenesisStateAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines the parameters of the module.
   */
  params: ParamsAmino;
  namespaces: NamespaceAmino[];
  vouchers: AddressVoucherAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.permissions.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    namespaces: [],
    vouchers: []
  };
}
/**
 * GenesisState defines the permissions module's genesis state.
 * @name GenesisState
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/injective.permissions.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.namespaces) && (!o.namespaces.length || Namespace.is(o.namespaces[0])) && Array.isArray(o.vouchers) && (!o.vouchers.length || AddressVoucher.is(o.vouchers[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.namespaces) && (!o.namespaces.length || Namespace.isAmino(o.namespaces[0])) && Array.isArray(o.vouchers) && (!o.vouchers.length || AddressVoucher.isAmino(o.vouchers[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.namespaces) {
      Namespace.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.vouchers) {
      AddressVoucher.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.namespaces.push(Namespace.decode(reader, reader.uint32()));
          break;
        case 3:
          message.vouchers.push(AddressVoucher.decode(reader, reader.uint32()));
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.namespaces = object.namespaces?.map(e => Namespace.fromPartial(e)) || [];
    message.vouchers = object.vouchers?.map(e => AddressVoucher.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.namespaces = object.namespaces?.map(e => Namespace.fromAmino(e)) || [];
    message.vouchers = object.vouchers?.map(e => AddressVoucher.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.namespaces) {
      obj.namespaces = message.namespaces.map(e => e ? Namespace.toAmino(e) : undefined);
    } else {
      obj.namespaces = message.namespaces;
    }
    if (message.vouchers) {
      obj.vouchers = message.vouchers.map(e => e ? AddressVoucher.toAmino(e) : undefined);
    } else {
      obj.vouchers = message.vouchers;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    Namespace.registerTypeUrl();
    AddressVoucher.registerTypeUrl();
  }
};