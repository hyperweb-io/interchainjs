import { FundingMode } from "./proposal";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes, isSet } from "../../../helpers";
/**
 * @name EventContractExecution
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.EventContractExecution
 */
export interface EventContractExecution {
  contractAddress: string;
  response: Uint8Array;
  otherError: string;
  executionError: string;
}
export interface EventContractExecutionProtoMsg {
  typeUrl: "/injective.wasmx.v1.EventContractExecution";
  value: Uint8Array;
}
/**
 * @name EventContractExecutionAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.EventContractExecution
 */
export interface EventContractExecutionAmino {
  contract_address: string;
  response: string;
  other_error: string;
  execution_error: string;
}
export interface EventContractExecutionAminoMsg {
  type: "/injective.wasmx.v1.EventContractExecution";
  value: EventContractExecutionAmino;
}
/**
 * @name EventContractRegistered
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.EventContractRegistered
 */
export interface EventContractRegistered {
  contractAddress: string;
  gasPrice: bigint;
  shouldPinContract: boolean;
  isMigrationAllowed: boolean;
  codeId: bigint;
  adminAddress: string;
  granterAddress: string;
  fundingMode: FundingMode;
}
export interface EventContractRegisteredProtoMsg {
  typeUrl: "/injective.wasmx.v1.EventContractRegistered";
  value: Uint8Array;
}
/**
 * @name EventContractRegisteredAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.EventContractRegistered
 */
export interface EventContractRegisteredAmino {
  contract_address: string;
  gas_price: string;
  should_pin_contract: boolean;
  is_migration_allowed: boolean;
  code_id: string;
  admin_address: string;
  granter_address: string;
  funding_mode: FundingMode;
}
export interface EventContractRegisteredAminoMsg {
  type: "/injective.wasmx.v1.EventContractRegistered";
  value: EventContractRegisteredAmino;
}
/**
 * @name EventContractDeregistered
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.EventContractDeregistered
 */
export interface EventContractDeregistered {
  contractAddress: string;
}
export interface EventContractDeregisteredProtoMsg {
  typeUrl: "/injective.wasmx.v1.EventContractDeregistered";
  value: Uint8Array;
}
/**
 * @name EventContractDeregisteredAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.EventContractDeregistered
 */
export interface EventContractDeregisteredAmino {
  contract_address: string;
}
export interface EventContractDeregisteredAminoMsg {
  type: "/injective.wasmx.v1.EventContractDeregistered";
  value: EventContractDeregisteredAmino;
}
function createBaseEventContractExecution(): EventContractExecution {
  return {
    contractAddress: "",
    response: new Uint8Array(),
    otherError: "",
    executionError: ""
  };
}
/**
 * @name EventContractExecution
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.EventContractExecution
 */
export const EventContractExecution = {
  typeUrl: "/injective.wasmx.v1.EventContractExecution",
  is(o: any): o is EventContractExecution {
    return o && (o.$typeUrl === EventContractExecution.typeUrl || typeof o.contractAddress === "string" && (o.response instanceof Uint8Array || typeof o.response === "string") && typeof o.otherError === "string" && typeof o.executionError === "string");
  },
  isAmino(o: any): o is EventContractExecutionAmino {
    return o && (o.$typeUrl === EventContractExecution.typeUrl || typeof o.contract_address === "string" && (o.response instanceof Uint8Array || typeof o.response === "string") && typeof o.other_error === "string" && typeof o.execution_error === "string");
  },
  encode(message: EventContractExecution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.response.length !== 0) {
      writer.uint32(18).bytes(message.response);
    }
    if (message.otherError !== "") {
      writer.uint32(26).string(message.otherError);
    }
    if (message.executionError !== "") {
      writer.uint32(34).string(message.executionError);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventContractExecution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventContractExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.response = reader.bytes();
          break;
        case 3:
          message.otherError = reader.string();
          break;
        case 4:
          message.executionError = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventContractExecution>): EventContractExecution {
    const message = createBaseEventContractExecution();
    message.contractAddress = object.contractAddress ?? "";
    message.response = object.response ?? new Uint8Array();
    message.otherError = object.otherError ?? "";
    message.executionError = object.executionError ?? "";
    return message;
  },
  fromAmino(object: EventContractExecutionAmino): EventContractExecution {
    const message = createBaseEventContractExecution();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = bytesFromBase64(object.response);
    }
    if (object.other_error !== undefined && object.other_error !== null) {
      message.otherError = object.other_error;
    }
    if (object.execution_error !== undefined && object.execution_error !== null) {
      message.executionError = object.execution_error;
    }
    return message;
  },
  toAmino(message: EventContractExecution): EventContractExecutionAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.response = message.response ? base64FromBytes(message.response) : undefined;
    obj.other_error = message.otherError === "" ? undefined : message.otherError;
    obj.execution_error = message.executionError === "" ? undefined : message.executionError;
    return obj;
  },
  fromAminoMsg(object: EventContractExecutionAminoMsg): EventContractExecution {
    return EventContractExecution.fromAmino(object.value);
  },
  fromProtoMsg(message: EventContractExecutionProtoMsg): EventContractExecution {
    return EventContractExecution.decode(message.value);
  },
  toProto(message: EventContractExecution): Uint8Array {
    return EventContractExecution.encode(message).finish();
  },
  toProtoMsg(message: EventContractExecution): EventContractExecutionProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.EventContractExecution",
      value: EventContractExecution.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventContractRegistered(): EventContractRegistered {
  return {
    contractAddress: "",
    gasPrice: BigInt(0),
    shouldPinContract: false,
    isMigrationAllowed: false,
    codeId: BigInt(0),
    adminAddress: "",
    granterAddress: "",
    fundingMode: 0
  };
}
/**
 * @name EventContractRegistered
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.EventContractRegistered
 */
export const EventContractRegistered = {
  typeUrl: "/injective.wasmx.v1.EventContractRegistered",
  is(o: any): o is EventContractRegistered {
    return o && (o.$typeUrl === EventContractRegistered.typeUrl || typeof o.contractAddress === "string" && typeof o.gasPrice === "bigint" && typeof o.shouldPinContract === "boolean" && typeof o.isMigrationAllowed === "boolean" && typeof o.codeId === "bigint" && typeof o.adminAddress === "string" && typeof o.granterAddress === "string" && isSet(o.fundingMode));
  },
  isAmino(o: any): o is EventContractRegisteredAmino {
    return o && (o.$typeUrl === EventContractRegistered.typeUrl || typeof o.contract_address === "string" && typeof o.gas_price === "bigint" && typeof o.should_pin_contract === "boolean" && typeof o.is_migration_allowed === "boolean" && typeof o.code_id === "bigint" && typeof o.admin_address === "string" && typeof o.granter_address === "string" && isSet(o.funding_mode));
  },
  encode(message: EventContractRegistered, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.gasPrice !== BigInt(0)) {
      writer.uint32(24).uint64(message.gasPrice);
    }
    if (message.shouldPinContract === true) {
      writer.uint32(32).bool(message.shouldPinContract);
    }
    if (message.isMigrationAllowed === true) {
      writer.uint32(40).bool(message.isMigrationAllowed);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(48).uint64(message.codeId);
    }
    if (message.adminAddress !== "") {
      writer.uint32(58).string(message.adminAddress);
    }
    if (message.granterAddress !== "") {
      writer.uint32(66).string(message.granterAddress);
    }
    if (message.fundingMode !== 0) {
      writer.uint32(72).int32(message.fundingMode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventContractRegistered {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventContractRegistered();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.gasPrice = reader.uint64();
          break;
        case 4:
          message.shouldPinContract = reader.bool();
          break;
        case 5:
          message.isMigrationAllowed = reader.bool();
          break;
        case 6:
          message.codeId = reader.uint64();
          break;
        case 7:
          message.adminAddress = reader.string();
          break;
        case 8:
          message.granterAddress = reader.string();
          break;
        case 9:
          message.fundingMode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventContractRegistered>): EventContractRegistered {
    const message = createBaseEventContractRegistered();
    message.contractAddress = object.contractAddress ?? "";
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? BigInt(object.gasPrice.toString()) : BigInt(0);
    message.shouldPinContract = object.shouldPinContract ?? false;
    message.isMigrationAllowed = object.isMigrationAllowed ?? false;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.adminAddress = object.adminAddress ?? "";
    message.granterAddress = object.granterAddress ?? "";
    message.fundingMode = object.fundingMode ?? 0;
    return message;
  },
  fromAmino(object: EventContractRegisteredAmino): EventContractRegistered {
    const message = createBaseEventContractRegistered();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gasPrice = BigInt(object.gas_price);
    }
    if (object.should_pin_contract !== undefined && object.should_pin_contract !== null) {
      message.shouldPinContract = object.should_pin_contract;
    }
    if (object.is_migration_allowed !== undefined && object.is_migration_allowed !== null) {
      message.isMigrationAllowed = object.is_migration_allowed;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    if (object.admin_address !== undefined && object.admin_address !== null) {
      message.adminAddress = object.admin_address;
    }
    if (object.granter_address !== undefined && object.granter_address !== null) {
      message.granterAddress = object.granter_address;
    }
    if (object.funding_mode !== undefined && object.funding_mode !== null) {
      message.fundingMode = object.funding_mode;
    }
    return message;
  },
  toAmino(message: EventContractRegistered): EventContractRegisteredAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.gas_price = message.gasPrice !== BigInt(0) ? message.gasPrice?.toString() : undefined;
    obj.should_pin_contract = message.shouldPinContract === false ? undefined : message.shouldPinContract;
    obj.is_migration_allowed = message.isMigrationAllowed === false ? undefined : message.isMigrationAllowed;
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId?.toString() : undefined;
    obj.admin_address = message.adminAddress === "" ? undefined : message.adminAddress;
    obj.granter_address = message.granterAddress === "" ? undefined : message.granterAddress;
    obj.funding_mode = message.fundingMode === 0 ? undefined : message.fundingMode;
    return obj;
  },
  fromAminoMsg(object: EventContractRegisteredAminoMsg): EventContractRegistered {
    return EventContractRegistered.fromAmino(object.value);
  },
  fromProtoMsg(message: EventContractRegisteredProtoMsg): EventContractRegistered {
    return EventContractRegistered.decode(message.value);
  },
  toProto(message: EventContractRegistered): Uint8Array {
    return EventContractRegistered.encode(message).finish();
  },
  toProtoMsg(message: EventContractRegistered): EventContractRegisteredProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.EventContractRegistered",
      value: EventContractRegistered.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventContractDeregistered(): EventContractDeregistered {
  return {
    contractAddress: ""
  };
}
/**
 * @name EventContractDeregistered
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.EventContractDeregistered
 */
export const EventContractDeregistered = {
  typeUrl: "/injective.wasmx.v1.EventContractDeregistered",
  is(o: any): o is EventContractDeregistered {
    return o && (o.$typeUrl === EventContractDeregistered.typeUrl || typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is EventContractDeregisteredAmino {
    return o && (o.$typeUrl === EventContractDeregistered.typeUrl || typeof o.contract_address === "string");
  },
  encode(message: EventContractDeregistered, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventContractDeregistered {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventContractDeregistered();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventContractDeregistered>): EventContractDeregistered {
    const message = createBaseEventContractDeregistered();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: EventContractDeregisteredAmino): EventContractDeregistered {
    const message = createBaseEventContractDeregistered();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: EventContractDeregistered): EventContractDeregisteredAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: EventContractDeregisteredAminoMsg): EventContractDeregistered {
    return EventContractDeregistered.fromAmino(object.value);
  },
  fromProtoMsg(message: EventContractDeregisteredProtoMsg): EventContractDeregistered {
    return EventContractDeregistered.decode(message.value);
  },
  toProto(message: EventContractDeregistered): Uint8Array {
    return EventContractDeregistered.encode(message).finish();
  },
  toProtoMsg(message: EventContractDeregistered): EventContractDeregisteredProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.EventContractDeregistered",
      value: EventContractDeregistered.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};