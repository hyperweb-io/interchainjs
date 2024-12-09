import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** Params defines the parameters for the permissions module. */
export interface Params {
  wasmHookQueryMaxGas: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the permissions module. */
export interface ParamsAmino {
  wasm_hook_query_max_gas: string;
}
export interface ParamsAminoMsg {
  type: "permissions/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    wasmHookQueryMaxGas: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/injective.permissions.v1beta1.Params",
  aminoType: "permissions/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.wasmHookQueryMaxGas === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.wasm_hook_query_max_gas === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wasmHookQueryMaxGas !== BigInt(0)) {
      writer.uint32(8).uint64(message.wasmHookQueryMaxGas);
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
          message.wasmHookQueryMaxGas = reader.uint64();
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
    message.wasmHookQueryMaxGas = object.wasmHookQueryMaxGas !== undefined && object.wasmHookQueryMaxGas !== null ? BigInt(object.wasmHookQueryMaxGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.wasm_hook_query_max_gas !== undefined && object.wasm_hook_query_max_gas !== null) {
      message.wasmHookQueryMaxGas = BigInt(object.wasm_hook_query_max_gas);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.wasm_hook_query_max_gas = message.wasmHookQueryMaxGas !== BigInt(0) ? message.wasmHookQueryMaxGas?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "permissions/Params",
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
      typeUrl: "/injective.permissions.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);