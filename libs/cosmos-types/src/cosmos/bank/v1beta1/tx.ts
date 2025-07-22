import { Coin } from "../../base/v1beta1/coin";
import { Input, Output, Params, SendEnabled } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSend represents a message to send coins from one account to another.
 * @name MsgSend
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSend
 */
export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}
/**
 * MsgSendResponse defines the Msg/Send response type.
 * @name MsgSendResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSendResponse
 */
export interface MsgSendResponse {}
/**
 * MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 * @name MsgMultiSend
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSend
 */
export interface MsgMultiSend {
  /**
   * Inputs, despite being `repeated`, only allows one sender input. This is
   * checked in MsgMultiSend's ValidateBasic.
   */
  inputs: Input[];
  outputs: Output[];
}
/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 * @name MsgMultiSendResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSendResponse
 */
export interface MsgMultiSendResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * params defines the x/bank parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
/**
 * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
 * 
 * Only entries to add/update/delete need to be included.
 * Existing SendEnabled entries that are not included in this
 * message are left unchanged.
 * @name MsgSetSendEnabled
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSetSendEnabled
 */
export interface MsgSetSendEnabled {
  /**
   * authority is the address that controls the module.
   */
  authority: string;
  /**
   * send_enabled is the list of entries to add or update.
   */
  sendEnabled: SendEnabled[];
  /**
   * use_default_for is a list of denoms that should use the params.default_send_enabled value.
   * Denoms listed here will have their SendEnabled entries deleted.
   * If a denom is included that doesn't have a SendEnabled entry,
   * it will be ignored.
   */
  useDefaultFor: string[];
}
/**
 * MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.
 * @name MsgSetSendEnabledResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSetSendEnabledResponse
 */
export interface MsgSetSendEnabledResponse {}
function createBaseMsgSend(): MsgSend {
  return {
    fromAddress: "",
    toAddress: "",
    amount: []
  };
}
/**
 * MsgSend represents a message to send coins from one account to another.
 * @name MsgSend
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSend
 */
export const MsgSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  aminoType: "cosmos-sdk/MsgSend",
  encode(message: MsgSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}
/**
 * MsgSendResponse defines the Msg/Send response type.
 * @name MsgSendResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSendResponse
 */
export const MsgSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
  aminoType: "cosmos-sdk/MsgSendResponse",
  encode(_: MsgSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  }
};
function createBaseMsgMultiSend(): MsgMultiSend {
  return {
    inputs: [],
    outputs: []
  };
}
/**
 * MsgMultiSend represents an arbitrary multi-in, multi-out send message.
 * @name MsgMultiSend
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSend
 */
export const MsgMultiSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
  aminoType: "cosmos-sdk/MsgMultiSend",
  encode(message: MsgMultiSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMultiSend>): MsgMultiSend {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map(e => Input.fromPartial(e)) || [];
    message.outputs = object.outputs?.map(e => Output.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgMultiSendResponse(): MsgMultiSendResponse {
  return {};
}
/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 * @name MsgMultiSendResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgMultiSendResponse
 */
export const MsgMultiSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
  aminoType: "cosmos-sdk/MsgMultiSendResponse",
  encode(_: MsgMultiSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgMultiSendResponse>): MsgMultiSendResponse {
    const message = createBaseMsgMultiSendResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
  aminoType: "cosmos-sdk/x/bank/MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
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
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParamsResponse",
  aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgSetSendEnabled(): MsgSetSendEnabled {
  return {
    authority: "",
    sendEnabled: [],
    useDefaultFor: []
  };
}
/**
 * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
 * 
 * Only entries to add/update/delete need to be included.
 * Existing SendEnabled entries that are not included in this
 * message are left unchanged.
 * @name MsgSetSendEnabled
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSetSendEnabled
 */
export const MsgSetSendEnabled = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
  aminoType: "cosmos-sdk/MsgSetSendEnabled",
  encode(message: MsgSetSendEnabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.useDefaultFor) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSendEnabled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 3:
          message.useDefaultFor.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetSendEnabled>): MsgSetSendEnabled {
    const message = createBaseMsgSetSendEnabled();
    message.authority = object.authority ?? "";
    message.sendEnabled = object.sendEnabled?.map(e => SendEnabled.fromPartial(e)) || [];
    message.useDefaultFor = object.useDefaultFor?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgSetSendEnabledResponse(): MsgSetSendEnabledResponse {
  return {};
}
/**
 * MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.
 * @name MsgSetSendEnabledResponse
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.MsgSetSendEnabledResponse
 */
export const MsgSetSendEnabledResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabledResponse",
  aminoType: "cosmos-sdk/MsgSetSendEnabledResponse",
  encode(_: MsgSetSendEnabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSendEnabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabledResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSetSendEnabledResponse>): MsgSetSendEnabledResponse {
    const message = createBaseMsgSetSendEnabledResponse();
    return message;
  }
};