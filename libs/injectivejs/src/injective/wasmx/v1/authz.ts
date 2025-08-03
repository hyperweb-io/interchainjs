import { ContractGrant, ContractGrantAmino } from "../../../cosmwasm/wasm/v1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 * @name ContractExecutionCompatAuthorization
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.ContractExecutionCompatAuthorization
 */
export interface ContractExecutionCompatAuthorization {
  /**
   * Grants for contract executions
   */
  grants: ContractGrant[];
}
export interface ContractExecutionCompatAuthorizationProtoMsg {
  typeUrl: "/injective.wasmx.v1.ContractExecutionCompatAuthorization";
  value: Uint8Array;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 * @name ContractExecutionCompatAuthorizationAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.ContractExecutionCompatAuthorization
 */
export interface ContractExecutionCompatAuthorizationAmino {
  /**
   * Grants for contract executions
   */
  grants: ContractGrantAmino[];
}
export interface ContractExecutionCompatAuthorizationAminoMsg {
  type: "wasmx/ContractExecutionCompatAuthorization";
  value: ContractExecutionCompatAuthorizationAmino;
}
function createBaseContractExecutionCompatAuthorization(): ContractExecutionCompatAuthorization {
  return {
    grants: []
  };
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 * @name ContractExecutionCompatAuthorization
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.ContractExecutionCompatAuthorization
 */
export const ContractExecutionCompatAuthorization = {
  typeUrl: "/injective.wasmx.v1.ContractExecutionCompatAuthorization",
  aminoType: "wasmx/ContractExecutionCompatAuthorization",
  is(o: any): o is ContractExecutionCompatAuthorization {
    return o && (o.$typeUrl === ContractExecutionCompatAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.is(o.grants[0])));
  },
  isAmino(o: any): o is ContractExecutionCompatAuthorizationAmino {
    return o && (o.$typeUrl === ContractExecutionCompatAuthorization.typeUrl || Array.isArray(o.grants) && (!o.grants.length || ContractGrant.isAmino(o.grants[0])));
  },
  encode(message: ContractExecutionCompatAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grants) {
      ContractGrant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractExecutionCompatAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractExecutionCompatAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(ContractGrant.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContractExecutionCompatAuthorization>): ContractExecutionCompatAuthorization {
    const message = createBaseContractExecutionCompatAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ContractExecutionCompatAuthorizationAmino): ContractExecutionCompatAuthorization {
    const message = createBaseContractExecutionCompatAuthorization();
    message.grants = object.grants?.map(e => ContractGrant.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ContractExecutionCompatAuthorization): ContractExecutionCompatAuthorizationAmino {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => e ? ContractGrant.toAmino(e) : undefined);
    } else {
      obj.grants = message.grants;
    }
    return obj;
  },
  fromAminoMsg(object: ContractExecutionCompatAuthorizationAminoMsg): ContractExecutionCompatAuthorization {
    return ContractExecutionCompatAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: ContractExecutionCompatAuthorization): ContractExecutionCompatAuthorizationAminoMsg {
    return {
      type: "wasmx/ContractExecutionCompatAuthorization",
      value: ContractExecutionCompatAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: ContractExecutionCompatAuthorizationProtoMsg): ContractExecutionCompatAuthorization {
    return ContractExecutionCompatAuthorization.decode(message.value);
  },
  toProto(message: ContractExecutionCompatAuthorization): Uint8Array {
    return ContractExecutionCompatAuthorization.encode(message).finish();
  },
  toProtoMsg(message: ContractExecutionCompatAuthorization): ContractExecutionCompatAuthorizationProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.ContractExecutionCompatAuthorization",
      value: ContractExecutionCompatAuthorization.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(ContractExecutionCompatAuthorization.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(ContractExecutionCompatAuthorization.typeUrl, ContractExecutionCompatAuthorization);
    GlobalDecoderRegistry.registerAminoProtoMapping(ContractExecutionCompatAuthorization.aminoType, ContractExecutionCompatAuthorization.typeUrl);
    ContractGrant.registerTypeUrl();
  }
};