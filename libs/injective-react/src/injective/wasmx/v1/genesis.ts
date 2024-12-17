import { RegisteredContract, RegisteredContractAmino, Params, ParamsAmino } from "./wasmx";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface RegisteredContractWithAddress {
  address: string;
  registeredContract?: RegisteredContract;
}
export interface RegisteredContractWithAddressProtoMsg {
  typeUrl: "/injective.wasmx.v1.RegisteredContractWithAddress";
  value: Uint8Array;
}
export interface RegisteredContractWithAddressAmino {
  address: string;
  registered_contract?: RegisteredContractAmino;
}
export interface RegisteredContractWithAddressAminoMsg {
  type: "/injective.wasmx.v1.RegisteredContractWithAddress";
  value: RegisteredContractWithAddressAmino;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to wasmx. */
  params: Params;
  /**
   * registered_contracts is an array containing the genesis registered
   * contracts
   */
  registeredContracts: RegisteredContractWithAddress[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.wasmx.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to wasmx. */
  params: ParamsAmino;
  /**
   * registered_contracts is an array containing the genesis registered
   * contracts
   */
  registered_contracts: RegisteredContractWithAddressAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.wasmx.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseRegisteredContractWithAddress(): RegisteredContractWithAddress {
  return {
    address: "",
    registeredContract: undefined
  };
}
export const RegisteredContractWithAddress = {
  typeUrl: "/injective.wasmx.v1.RegisteredContractWithAddress",
  is(o: any): o is RegisteredContractWithAddress {
    return o && (o.$typeUrl === RegisteredContractWithAddress.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is RegisteredContractWithAddressAmino {
    return o && (o.$typeUrl === RegisteredContractWithAddress.typeUrl || typeof o.address === "string");
  },
  encode(message: RegisteredContractWithAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.registeredContract !== undefined) {
      RegisteredContract.encode(message.registeredContract, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredContractWithAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredContractWithAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.registeredContract = RegisteredContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RegisteredContractWithAddress>): RegisteredContractWithAddress {
    const message = createBaseRegisteredContractWithAddress();
    message.address = object.address ?? "";
    message.registeredContract = object.registeredContract !== undefined && object.registeredContract !== null ? RegisteredContract.fromPartial(object.registeredContract) : undefined;
    return message;
  },
  fromAmino(object: RegisteredContractWithAddressAmino): RegisteredContractWithAddress {
    const message = createBaseRegisteredContractWithAddress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.registered_contract !== undefined && object.registered_contract !== null) {
      message.registeredContract = RegisteredContract.fromAmino(object.registered_contract);
    }
    return message;
  },
  toAmino(message: RegisteredContractWithAddress): RegisteredContractWithAddressAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.registered_contract = message.registeredContract ? RegisteredContract.toAmino(message.registeredContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisteredContractWithAddressAminoMsg): RegisteredContractWithAddress {
    return RegisteredContractWithAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisteredContractWithAddressProtoMsg): RegisteredContractWithAddress {
    return RegisteredContractWithAddress.decode(message.value);
  },
  toProto(message: RegisteredContractWithAddress): Uint8Array {
    return RegisteredContractWithAddress.encode(message).finish();
  },
  toProtoMsg(message: RegisteredContractWithAddress): RegisteredContractWithAddressProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.RegisteredContractWithAddress",
      value: RegisteredContractWithAddress.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RegisteredContractWithAddress.typeUrl, RegisteredContractWithAddress);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    registeredContracts: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.wasmx.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.registeredContracts) && (!o.registeredContracts.length || RegisteredContractWithAddress.is(o.registeredContracts[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.registered_contracts) && (!o.registered_contracts.length || RegisteredContractWithAddress.isAmino(o.registered_contracts[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredContracts) {
      RegisteredContractWithAddress.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.registeredContracts.push(RegisteredContractWithAddress.decode(reader, reader.uint32()));
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
    message.registeredContracts = object.registeredContracts?.map(e => RegisteredContractWithAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.registeredContracts = object.registered_contracts?.map(e => RegisteredContractWithAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.registeredContracts) {
      obj.registered_contracts = message.registeredContracts.map(e => e ? RegisteredContractWithAddress.toAmino(e) : undefined);
    } else {
      obj.registered_contracts = message.registeredContracts;
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
      typeUrl: "/injective.wasmx.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);