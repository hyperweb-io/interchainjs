import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { Decimal } from "@interchainjs/math";
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 * @name MsgFundCommunityPool
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgFundCommunityPool
 */
export interface MsgFundCommunityPool {
  depositor: string;
  amount: Coin[];
}
export interface MsgFundCommunityPoolProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool";
  value: Uint8Array;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 * @name MsgFundCommunityPoolAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgFundCommunityPool
 */
export interface MsgFundCommunityPoolAmino {
  depositor: string;
  amount: CoinAmino[];
}
export interface MsgFundCommunityPoolAminoMsg {
  type: "cosmos-sdk/MsgFundCommunityPool";
  value: MsgFundCommunityPoolAmino;
}
/**
 * MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 * @name MsgFundCommunityPoolResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgFundCommunityPoolResponse
 */
export interface MsgFundCommunityPoolResponse {}
export interface MsgFundCommunityPoolResponseProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPoolResponse";
  value: Uint8Array;
}
/**
 * MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 * @name MsgFundCommunityPoolResponseAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgFundCommunityPoolResponse
 */
export interface MsgFundCommunityPoolResponseAmino {}
export interface MsgFundCommunityPoolResponseAminoMsg {
  type: "cosmos-sdk/MsgFundCommunityPoolResponse";
  value: MsgFundCommunityPoolResponseAmino;
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 * @name MsgCommunityPoolSpend
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCommunityPoolSpend
 */
export interface MsgCommunityPoolSpend {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  recipient: string;
  amount: Coin[];
}
export interface MsgCommunityPoolSpendProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend";
  value: Uint8Array;
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 * @name MsgCommunityPoolSpendAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCommunityPoolSpend
 */
export interface MsgCommunityPoolSpendAmino {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  recipient: string;
  amount: CoinAmino[];
}
export interface MsgCommunityPoolSpendAminoMsg {
  type: "cosmos-sdk/MsgCommunityPoolSpend";
  value: MsgCommunityPoolSpendAmino;
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 * @name MsgCommunityPoolSpendResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCommunityPoolSpendResponse
 */
export interface MsgCommunityPoolSpendResponse {}
export interface MsgCommunityPoolSpendResponseProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpendResponse";
  value: Uint8Array;
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 * @name MsgCommunityPoolSpendResponseAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCommunityPoolSpendResponse
 */
export interface MsgCommunityPoolSpendResponseAmino {}
export interface MsgCommunityPoolSpendResponseAminoMsg {
  type: "cosmos-sdk/MsgCommunityPoolSpendResponse";
  value: MsgCommunityPoolSpendResponseAmino;
}
/**
 * MsgCreateContinuousFund defines a message for adding continuous funds.
 * @name MsgCreateContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCreateContinuousFund
 */
export interface MsgCreateContinuousFund {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * Recipient address of the account receiving funds.
   */
  recipient: string;
  /**
   * Percentage is the percentage of funds to be allocated from Community pool.
   */
  percentage: string;
  /**
   * Optional, if expiry is set, removes the state object when expired.
   */
  expiry?: Date;
}
export interface MsgCreateContinuousFundProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund";
  value: Uint8Array;
}
/**
 * MsgCreateContinuousFund defines a message for adding continuous funds.
 * @name MsgCreateContinuousFundAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCreateContinuousFund
 */
export interface MsgCreateContinuousFundAmino {
  /**
   * Authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * Recipient address of the account receiving funds.
   */
  recipient: string;
  /**
   * Percentage is the percentage of funds to be allocated from Community pool.
   */
  percentage: string;
  /**
   * Optional, if expiry is set, removes the state object when expired.
   */
  expiry?: string;
}
export interface MsgCreateContinuousFundAminoMsg {
  type: "cosmos-sdk/MsgCreateContinuousFund";
  value: MsgCreateContinuousFundAmino;
}
/**
 * MsgCreateContinuousFundResponse defines the response to executing a
 * MsgCreateContinuousFund message.
 * @name MsgCreateContinuousFundResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCreateContinuousFundResponse
 */
export interface MsgCreateContinuousFundResponse {}
export interface MsgCreateContinuousFundResponseProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFundResponse";
  value: Uint8Array;
}
/**
 * MsgCreateContinuousFundResponse defines the response to executing a
 * MsgCreateContinuousFund message.
 * @name MsgCreateContinuousFundResponseAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCreateContinuousFundResponse
 */
export interface MsgCreateContinuousFundResponseAmino {}
export interface MsgCreateContinuousFundResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateContinuousFundResponse";
  value: MsgCreateContinuousFundResponseAmino;
}
/**
 * MsgCancelContinuousFund defines a message to cancel continuous funds for a specific recipient.
 * @name MsgCancelContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCancelContinuousFund
 */
export interface MsgCancelContinuousFund {
  /**
   * Authority is the account address of authority.
   */
  authority: string;
  /**
   * Recipient is the account address string of the recipient whose funds are to be cancelled.
   */
  recipient: string;
}
export interface MsgCancelContinuousFundProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund";
  value: Uint8Array;
}
/**
 * MsgCancelContinuousFund defines a message to cancel continuous funds for a specific recipient.
 * @name MsgCancelContinuousFundAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCancelContinuousFund
 */
export interface MsgCancelContinuousFundAmino {
  /**
   * Authority is the account address of authority.
   */
  authority: string;
  /**
   * Recipient is the account address string of the recipient whose funds are to be cancelled.
   */
  recipient: string;
}
export interface MsgCancelContinuousFundAminoMsg {
  type: "cosmos-sdk/MsgCancelContinuousFund";
  value: MsgCancelContinuousFundAmino;
}
/**
 * MsgCancelContinuousFundResponse defines the response to executing a
 * MsgCancelContinuousFund message.
 * @name MsgCancelContinuousFundResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCancelContinuousFundResponse
 */
export interface MsgCancelContinuousFundResponse {
  /**
   * CanceledTime is the canceled time.
   */
  canceledTime: Date;
  /**
   * CanceledHeight defines the canceled block height.
   */
  canceledHeight: bigint;
  /**
   * Recipient is the account address string of the recipient whose funds are cancelled.
   */
  recipient: string;
}
export interface MsgCancelContinuousFundResponseProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFundResponse";
  value: Uint8Array;
}
/**
 * MsgCancelContinuousFundResponse defines the response to executing a
 * MsgCancelContinuousFund message.
 * @name MsgCancelContinuousFundResponseAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCancelContinuousFundResponse
 */
export interface MsgCancelContinuousFundResponseAmino {
  /**
   * CanceledTime is the canceled time.
   */
  canceled_time: string;
  /**
   * CanceledHeight defines the canceled block height.
   */
  canceled_height: string;
  /**
   * Recipient is the account address string of the recipient whose funds are cancelled.
   */
  recipient: string;
}
export interface MsgCancelContinuousFundResponseAminoMsg {
  type: "cosmos-sdk/MsgCancelContinuousFundResponse";
  value: MsgCancelContinuousFundResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * params defines the x/protocolpool parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * params defines the x/protocolpool parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return {
    depositor: "",
    amount: []
  };
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 * @name MsgFundCommunityPool
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgFundCommunityPool
 */
export const MsgFundCommunityPool = {
  typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
  aminoType: "cosmos-sdk/MsgFundCommunityPool",
  is(o: any): o is MsgFundCommunityPool {
    return o && (o.$typeUrl === MsgFundCommunityPool.typeUrl || typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isAmino(o: any): o is MsgFundCommunityPoolAmino {
    return o && (o.$typeUrl === MsgFundCommunityPool.typeUrl || typeof o.depositor === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgFundCommunityPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFundCommunityPool>): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgFundCommunityPoolAmino): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgFundCommunityPool): MsgFundCommunityPoolAmino {
    const obj: any = {};
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgFundCommunityPoolAminoMsg): MsgFundCommunityPool {
    return MsgFundCommunityPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolAminoMsg {
    return {
      type: "cosmos-sdk/MsgFundCommunityPool",
      value: MsgFundCommunityPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundCommunityPoolProtoMsg): MsgFundCommunityPool {
    return MsgFundCommunityPool.decode(message.value);
  },
  toProto(message: MsgFundCommunityPool): Uint8Array {
    return MsgFundCommunityPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
      value: MsgFundCommunityPool.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgFundCommunityPool.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return {};
}
/**
 * MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 * @name MsgFundCommunityPoolResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgFundCommunityPoolResponse
 */
export const MsgFundCommunityPoolResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPoolResponse",
  aminoType: "cosmos-sdk/MsgFundCommunityPoolResponse",
  is(o: any): o is MsgFundCommunityPoolResponse {
    return o && o.$typeUrl === MsgFundCommunityPoolResponse.typeUrl;
  },
  isAmino(o: any): o is MsgFundCommunityPoolResponseAmino {
    return o && o.$typeUrl === MsgFundCommunityPoolResponse.typeUrl;
  },
  encode(_: MsgFundCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();
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
  fromPartial(_: DeepPartial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
  toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundCommunityPoolResponseAminoMsg): MsgFundCommunityPoolResponse {
    return MsgFundCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundCommunityPoolResponseProtoMsg): MsgFundCommunityPoolResponse {
    return MsgFundCommunityPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundCommunityPoolResponse): Uint8Array {
    return MsgFundCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCommunityPoolSpend(): MsgCommunityPoolSpend {
  return {
    authority: "",
    recipient: "",
    amount: []
  };
}
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 * @name MsgCommunityPoolSpend
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCommunityPoolSpend
 */
export const MsgCommunityPoolSpend = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
  aminoType: "cosmos-sdk/MsgCommunityPoolSpend",
  is(o: any): o is MsgCommunityPoolSpend {
    return o && (o.$typeUrl === MsgCommunityPoolSpend.typeUrl || typeof o.authority === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])));
  },
  isAmino(o: any): o is MsgCommunityPoolSpendAmino {
    return o && (o.$typeUrl === MsgCommunityPoolSpend.typeUrl || typeof o.authority === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])));
  },
  encode(message: MsgCommunityPoolSpend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommunityPoolSpend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
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
  fromPartial(object: DeepPartial<MsgCommunityPoolSpend>): MsgCommunityPoolSpend {
    const message = createBaseMsgCommunityPoolSpend();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCommunityPoolSpendAmino): MsgCommunityPoolSpend {
    const message = createBaseMsgCommunityPoolSpend();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCommunityPoolSpendAminoMsg): MsgCommunityPoolSpend {
    return MsgCommunityPoolSpend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendAminoMsg {
    return {
      type: "cosmos-sdk/MsgCommunityPoolSpend",
      value: MsgCommunityPoolSpend.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCommunityPoolSpendProtoMsg): MsgCommunityPoolSpend {
    return MsgCommunityPoolSpend.decode(message.value);
  },
  toProto(message: MsgCommunityPoolSpend): Uint8Array {
    return MsgCommunityPoolSpend.encode(message).finish();
  },
  toProtoMsg(message: MsgCommunityPoolSpend): MsgCommunityPoolSpendProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
      value: MsgCommunityPoolSpend.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgCommunityPoolSpend.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgCommunityPoolSpendResponse(): MsgCommunityPoolSpendResponse {
  return {};
}
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 * @name MsgCommunityPoolSpendResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCommunityPoolSpendResponse
 */
export const MsgCommunityPoolSpendResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpendResponse",
  aminoType: "cosmos-sdk/MsgCommunityPoolSpendResponse",
  is(o: any): o is MsgCommunityPoolSpendResponse {
    return o && o.$typeUrl === MsgCommunityPoolSpendResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCommunityPoolSpendResponseAmino {
    return o && o.$typeUrl === MsgCommunityPoolSpendResponse.typeUrl;
  },
  encode(_: MsgCommunityPoolSpendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCommunityPoolSpendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCommunityPoolSpendResponse();
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
  fromPartial(_: DeepPartial<MsgCommunityPoolSpendResponse>): MsgCommunityPoolSpendResponse {
    const message = createBaseMsgCommunityPoolSpendResponse();
    return message;
  },
  fromAmino(_: MsgCommunityPoolSpendResponseAmino): MsgCommunityPoolSpendResponse {
    const message = createBaseMsgCommunityPoolSpendResponse();
    return message;
  },
  toAmino(_: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCommunityPoolSpendResponseAminoMsg): MsgCommunityPoolSpendResponse {
    return MsgCommunityPoolSpendResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCommunityPoolSpendResponse",
      value: MsgCommunityPoolSpendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCommunityPoolSpendResponseProtoMsg): MsgCommunityPoolSpendResponse {
    return MsgCommunityPoolSpendResponse.decode(message.value);
  },
  toProto(message: MsgCommunityPoolSpendResponse): Uint8Array {
    return MsgCommunityPoolSpendResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCommunityPoolSpendResponse): MsgCommunityPoolSpendResponseProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpendResponse",
      value: MsgCommunityPoolSpendResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateContinuousFund(): MsgCreateContinuousFund {
  return {
    authority: "",
    recipient: "",
    percentage: "",
    expiry: undefined
  };
}
/**
 * MsgCreateContinuousFund defines a message for adding continuous funds.
 * @name MsgCreateContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCreateContinuousFund
 */
export const MsgCreateContinuousFund = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
  aminoType: "cosmos-sdk/MsgCreateContinuousFund",
  is(o: any): o is MsgCreateContinuousFund {
    return o && (o.$typeUrl === MsgCreateContinuousFund.typeUrl || typeof o.authority === "string" && typeof o.recipient === "string" && typeof o.percentage === "string");
  },
  isAmino(o: any): o is MsgCreateContinuousFundAmino {
    return o && (o.$typeUrl === MsgCreateContinuousFund.typeUrl || typeof o.authority === "string" && typeof o.recipient === "string" && typeof o.percentage === "string");
  },
  encode(message: MsgCreateContinuousFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.percentage !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.percentage, 18).atomics);
    }
    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateContinuousFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateContinuousFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.percentage = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateContinuousFund>): MsgCreateContinuousFund {
    const message = createBaseMsgCreateContinuousFund();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.percentage = object.percentage ?? "";
    message.expiry = object.expiry ?? undefined;
    return message;
  },
  fromAmino(object: MsgCreateContinuousFundAmino): MsgCreateContinuousFund {
    const message = createBaseMsgCreateContinuousFund();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.percentage !== undefined && object.percentage !== null) {
      message.percentage = object.percentage;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = fromTimestamp(Timestamp.fromAmino(object.expiry));
    }
    return message;
  },
  toAmino(message: MsgCreateContinuousFund): MsgCreateContinuousFundAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.percentage = message.percentage === "" ? undefined : Decimal.fromUserInput(message.percentage, 18).atomics;
    obj.expiry = message.expiry ? Timestamp.toAmino(toTimestamp(message.expiry)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateContinuousFundAminoMsg): MsgCreateContinuousFund {
    return MsgCreateContinuousFund.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateContinuousFund): MsgCreateContinuousFundAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateContinuousFund",
      value: MsgCreateContinuousFund.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateContinuousFundProtoMsg): MsgCreateContinuousFund {
    return MsgCreateContinuousFund.decode(message.value);
  },
  toProto(message: MsgCreateContinuousFund): Uint8Array {
    return MsgCreateContinuousFund.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateContinuousFund): MsgCreateContinuousFundProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
      value: MsgCreateContinuousFund.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateContinuousFundResponse(): MsgCreateContinuousFundResponse {
  return {};
}
/**
 * MsgCreateContinuousFundResponse defines the response to executing a
 * MsgCreateContinuousFund message.
 * @name MsgCreateContinuousFundResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCreateContinuousFundResponse
 */
export const MsgCreateContinuousFundResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFundResponse",
  aminoType: "cosmos-sdk/MsgCreateContinuousFundResponse",
  is(o: any): o is MsgCreateContinuousFundResponse {
    return o && o.$typeUrl === MsgCreateContinuousFundResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateContinuousFundResponseAmino {
    return o && o.$typeUrl === MsgCreateContinuousFundResponse.typeUrl;
  },
  encode(_: MsgCreateContinuousFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateContinuousFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateContinuousFundResponse();
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
  fromPartial(_: DeepPartial<MsgCreateContinuousFundResponse>): MsgCreateContinuousFundResponse {
    const message = createBaseMsgCreateContinuousFundResponse();
    return message;
  },
  fromAmino(_: MsgCreateContinuousFundResponseAmino): MsgCreateContinuousFundResponse {
    const message = createBaseMsgCreateContinuousFundResponse();
    return message;
  },
  toAmino(_: MsgCreateContinuousFundResponse): MsgCreateContinuousFundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateContinuousFundResponseAminoMsg): MsgCreateContinuousFundResponse {
    return MsgCreateContinuousFundResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateContinuousFundResponse): MsgCreateContinuousFundResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateContinuousFundResponse",
      value: MsgCreateContinuousFundResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateContinuousFundResponseProtoMsg): MsgCreateContinuousFundResponse {
    return MsgCreateContinuousFundResponse.decode(message.value);
  },
  toProto(message: MsgCreateContinuousFundResponse): Uint8Array {
    return MsgCreateContinuousFundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateContinuousFundResponse): MsgCreateContinuousFundResponseProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFundResponse",
      value: MsgCreateContinuousFundResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelContinuousFund(): MsgCancelContinuousFund {
  return {
    authority: "",
    recipient: ""
  };
}
/**
 * MsgCancelContinuousFund defines a message to cancel continuous funds for a specific recipient.
 * @name MsgCancelContinuousFund
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCancelContinuousFund
 */
export const MsgCancelContinuousFund = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
  aminoType: "cosmos-sdk/MsgCancelContinuousFund",
  is(o: any): o is MsgCancelContinuousFund {
    return o && (o.$typeUrl === MsgCancelContinuousFund.typeUrl || typeof o.authority === "string" && typeof o.recipient === "string");
  },
  isAmino(o: any): o is MsgCancelContinuousFundAmino {
    return o && (o.$typeUrl === MsgCancelContinuousFund.typeUrl || typeof o.authority === "string" && typeof o.recipient === "string");
  },
  encode(message: MsgCancelContinuousFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelContinuousFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelContinuousFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelContinuousFund>): MsgCancelContinuousFund {
    const message = createBaseMsgCancelContinuousFund();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgCancelContinuousFundAmino): MsgCancelContinuousFund {
    const message = createBaseMsgCancelContinuousFund();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgCancelContinuousFund): MsgCancelContinuousFundAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgCancelContinuousFundAminoMsg): MsgCancelContinuousFund {
    return MsgCancelContinuousFund.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelContinuousFund): MsgCancelContinuousFundAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelContinuousFund",
      value: MsgCancelContinuousFund.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelContinuousFundProtoMsg): MsgCancelContinuousFund {
    return MsgCancelContinuousFund.decode(message.value);
  },
  toProto(message: MsgCancelContinuousFund): Uint8Array {
    return MsgCancelContinuousFund.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelContinuousFund): MsgCancelContinuousFundProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
      value: MsgCancelContinuousFund.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelContinuousFundResponse(): MsgCancelContinuousFundResponse {
  return {
    canceledTime: new Date(),
    canceledHeight: BigInt(0),
    recipient: ""
  };
}
/**
 * MsgCancelContinuousFundResponse defines the response to executing a
 * MsgCancelContinuousFund message.
 * @name MsgCancelContinuousFundResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgCancelContinuousFundResponse
 */
export const MsgCancelContinuousFundResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFundResponse",
  aminoType: "cosmos-sdk/MsgCancelContinuousFundResponse",
  is(o: any): o is MsgCancelContinuousFundResponse {
    return o && (o.$typeUrl === MsgCancelContinuousFundResponse.typeUrl || Timestamp.is(o.canceledTime) && typeof o.canceledHeight === "bigint" && typeof o.recipient === "string");
  },
  isAmino(o: any): o is MsgCancelContinuousFundResponseAmino {
    return o && (o.$typeUrl === MsgCancelContinuousFundResponse.typeUrl || Timestamp.isAmino(o.canceled_time) && typeof o.canceled_height === "bigint" && typeof o.recipient === "string");
  },
  encode(message: MsgCancelContinuousFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.canceledTime !== undefined) {
      Timestamp.encode(toTimestamp(message.canceledTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.canceledHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.canceledHeight);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelContinuousFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelContinuousFundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.canceledTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.canceledHeight = reader.uint64();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelContinuousFundResponse>): MsgCancelContinuousFundResponse {
    const message = createBaseMsgCancelContinuousFundResponse();
    message.canceledTime = object.canceledTime ?? undefined;
    message.canceledHeight = object.canceledHeight !== undefined && object.canceledHeight !== null ? BigInt(object.canceledHeight.toString()) : BigInt(0);
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: MsgCancelContinuousFundResponseAmino): MsgCancelContinuousFundResponse {
    const message = createBaseMsgCancelContinuousFundResponse();
    if (object.canceled_time !== undefined && object.canceled_time !== null) {
      message.canceledTime = fromTimestamp(Timestamp.fromAmino(object.canceled_time));
    }
    if (object.canceled_height !== undefined && object.canceled_height !== null) {
      message.canceledHeight = BigInt(object.canceled_height);
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: MsgCancelContinuousFundResponse): MsgCancelContinuousFundResponseAmino {
    const obj: any = {};
    obj.canceled_time = message.canceledTime ? Timestamp.toAmino(toTimestamp(message.canceledTime)) : undefined;
    obj.canceled_height = message.canceledHeight !== BigInt(0) ? message.canceledHeight?.toString() : undefined;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: MsgCancelContinuousFundResponseAminoMsg): MsgCancelContinuousFundResponse {
    return MsgCancelContinuousFundResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelContinuousFundResponse): MsgCancelContinuousFundResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelContinuousFundResponse",
      value: MsgCancelContinuousFundResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelContinuousFundResponseProtoMsg): MsgCancelContinuousFundResponse {
    return MsgCancelContinuousFundResponse.decode(message.value);
  },
  toProto(message: MsgCancelContinuousFundResponse): Uint8Array {
    return MsgCancelContinuousFundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelContinuousFundResponse): MsgCancelContinuousFundResponseProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFundResponse",
      value: MsgCancelContinuousFundResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
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
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
  aminoType: "cosmos-sdk/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
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
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package cosmos.protocolpool.v1
 * @see proto type: cosmos.protocolpool.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParamsResponse",
  aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
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
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};