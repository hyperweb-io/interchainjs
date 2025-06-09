import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 * @name BasicAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.BasicAllowance
 */
export interface BasicAllowance {
  /**
   * spend_limit specifies the maximum amount of coins that can be spent
   * by this allowance and will be updated as coins are spent. If it is
   * empty, there is no spend limit and any amount of coins can be spent.
   */
  spendLimit: Coin[];
  /**
   * expiration specifies an optional time when this allowance expires
   */
  expiration?: Date;
}
export interface BasicAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance";
  value: Uint8Array;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 * @name BasicAllowanceAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.BasicAllowance
 */
export interface BasicAllowanceAmino {
  /**
   * spend_limit specifies the maximum amount of coins that can be spent
   * by this allowance and will be updated as coins are spent. If it is
   * empty, there is no spend limit and any amount of coins can be spent.
   */
  spend_limit: CoinAmino[];
  /**
   * expiration specifies an optional time when this allowance expires
   */
  expiration?: string;
}
export interface BasicAllowanceAminoMsg {
  type: "cosmos-sdk/BasicAllowance";
  value: BasicAllowanceAmino;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 * @name PeriodicAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.PeriodicAllowance
 */
export interface PeriodicAllowance {
  /**
   * basic specifies a struct of `BasicAllowance`
   */
  basic: BasicAllowance;
  /**
   * period specifies the time duration in which period_spend_limit coins can
   * be spent before that allowance is reset
   */
  period: Duration;
  /**
   * period_spend_limit specifies the maximum number of coins that can be spent
   * in the period
   */
  periodSpendLimit: Coin[];
  /**
   * period_can_spend is the number of coins left to be spent before the period_reset time
   */
  periodCanSpend: Coin[];
  /**
   * period_reset is the time at which this period resets and a new one begins,
   * it is calculated from the start time of the first transaction after the
   * last period ended
   */
  periodReset: Date;
}
export interface PeriodicAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance";
  value: Uint8Array;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 * @name PeriodicAllowanceAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.PeriodicAllowance
 */
export interface PeriodicAllowanceAmino {
  /**
   * basic specifies a struct of `BasicAllowance`
   */
  basic: BasicAllowanceAmino;
  /**
   * period specifies the time duration in which period_spend_limit coins can
   * be spent before that allowance is reset
   */
  period: DurationAmino;
  /**
   * period_spend_limit specifies the maximum number of coins that can be spent
   * in the period
   */
  period_spend_limit: CoinAmino[];
  /**
   * period_can_spend is the number of coins left to be spent before the period_reset time
   */
  period_can_spend: CoinAmino[];
  /**
   * period_reset is the time at which this period resets and a new one begins,
   * it is calculated from the start time of the first transaction after the
   * last period ended
   */
  period_reset: string;
}
export interface PeriodicAllowanceAminoMsg {
  type: "cosmos-sdk/PeriodicAllowance";
  value: PeriodicAllowanceAmino;
}
/**
 * AllowedMsgAllowance creates allowance only for specified message types.
 * @name AllowedMsgAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.AllowedMsgAllowance
 */
export interface AllowedMsgAllowance {
  /**
   * allowance can be any of basic and periodic fee allowance.
   */
  allowance?: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
  /**
   * allowed_messages are the messages for which the grantee has the access.
   */
  allowedMessages: string[];
}
export interface AllowedMsgAllowanceProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
  value: Uint8Array;
}
export type AllowedMsgAllowanceEncoded = Omit<AllowedMsgAllowance, "allowance"> & {
  /**
   * allowance can be any of basic and periodic fee allowance.
   */
  allowance?: BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/**
 * AllowedMsgAllowance creates allowance only for specified message types.
 * @name AllowedMsgAllowanceAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.AllowedMsgAllowance
 */
export interface AllowedMsgAllowanceAmino {
  /**
   * allowance can be any of basic and periodic fee allowance.
   */
  allowance?: AnyAmino;
  /**
   * allowed_messages are the messages for which the grantee has the access.
   */
  allowed_messages: string[];
}
export interface AllowedMsgAllowanceAminoMsg {
  type: "cosmos-sdk/AllowedMsgAllowance";
  value: AllowedMsgAllowanceAmino;
}
/**
 * Grant is stored in the KVStore to record a grant with full context
 * @name Grant
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.Grant
 */
export interface Grant {
  /**
   * granter is the address of the user granting an allowance of their funds.
   */
  granter: string;
  /**
   * grantee is the address of the user being granted an allowance of another user's funds.
   */
  grantee: string;
  /**
   * allowance can be any of basic, periodic, allowed fee allowance.
   */
  allowance?: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
}
export interface GrantProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.Grant";
  value: Uint8Array;
}
export type GrantEncoded = Omit<Grant, "allowance"> & {
  /**
   * allowance can be any of basic, periodic, allowed fee allowance.
   */
  allowance?: BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Grant is stored in the KVStore to record a grant with full context
 * @name GrantAmino
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.Grant
 */
export interface GrantAmino {
  /**
   * granter is the address of the user granting an allowance of their funds.
   */
  granter: string;
  /**
   * grantee is the address of the user being granted an allowance of another user's funds.
   */
  grantee: string;
  /**
   * allowance can be any of basic, periodic, allowed fee allowance.
   */
  allowance?: AnyAmino;
}
export interface GrantAminoMsg {
  type: "cosmos-sdk/Grant";
  value: GrantAmino;
}
function createBaseBasicAllowance(): BasicAllowance {
  return {
    spendLimit: [],
    expiration: undefined
  };
}
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 * @name BasicAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.BasicAllowance
 */
export const BasicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
  aminoType: "cosmos-sdk/BasicAllowance",
  is(o: any): o is BasicAllowance {
    return o && (o.$typeUrl === BasicAllowance.typeUrl || Array.isArray(o.spendLimit) && (!o.spendLimit.length || Coin.is(o.spendLimit[0])));
  },
  isAmino(o: any): o is BasicAllowanceAmino {
    return o && (o.$typeUrl === BasicAllowance.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.isAmino(o.spend_limit[0])));
  },
  encode(message: BasicAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BasicAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BasicAllowance>): BasicAllowance {
    const message = createBaseBasicAllowance();
    message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromAmino(object: BasicAllowanceAmino): BasicAllowance {
    const message = createBaseBasicAllowance();
    message.spendLimit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message: BasicAllowance): BasicAllowanceAmino {
    const obj: any = {};
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.spend_limit = message.spendLimit;
    }
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    return obj;
  },
  fromAminoMsg(object: BasicAllowanceAminoMsg): BasicAllowance {
    return BasicAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: BasicAllowance): BasicAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/BasicAllowance",
      value: BasicAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: BasicAllowanceProtoMsg): BasicAllowance {
    return BasicAllowance.decode(message.value);
  },
  toProto(message: BasicAllowance): Uint8Array {
    return BasicAllowance.encode(message).finish();
  },
  toProtoMsg(message: BasicAllowance): BasicAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
      value: BasicAllowance.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(BasicAllowance.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(BasicAllowance.typeUrl, BasicAllowance);
    GlobalDecoderRegistry.registerAminoProtoMapping(BasicAllowance.aminoType, BasicAllowance.typeUrl);
    Coin.registerTypeUrl();
  }
};
function createBasePeriodicAllowance(): PeriodicAllowance {
  return {
    basic: BasicAllowance.fromPartial({}),
    period: Duration.fromPartial({}),
    periodSpendLimit: [],
    periodCanSpend: [],
    periodReset: new Date()
  };
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 * @name PeriodicAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.PeriodicAllowance
 */
export const PeriodicAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
  aminoType: "cosmos-sdk/PeriodicAllowance",
  is(o: any): o is PeriodicAllowance {
    return o && (o.$typeUrl === PeriodicAllowance.typeUrl || BasicAllowance.is(o.basic) && Duration.is(o.period) && Array.isArray(o.periodSpendLimit) && (!o.periodSpendLimit.length || Coin.is(o.periodSpendLimit[0])) && Array.isArray(o.periodCanSpend) && (!o.periodCanSpend.length || Coin.is(o.periodCanSpend[0])) && Timestamp.is(o.periodReset));
  },
  isAmino(o: any): o is PeriodicAllowanceAmino {
    return o && (o.$typeUrl === PeriodicAllowance.typeUrl || BasicAllowance.isAmino(o.basic) && Duration.isAmino(o.period) && Array.isArray(o.period_spend_limit) && (!o.period_spend_limit.length || Coin.isAmino(o.period_spend_limit[0])) && Array.isArray(o.period_can_spend) && (!o.period_can_spend.length || Coin.isAmino(o.period_can_spend[0])) && Timestamp.isAmino(o.period_reset));
  },
  encode(message: PeriodicAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basic !== undefined) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.periodSpendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.periodCanSpend) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.periodReset !== undefined) {
      Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PeriodicAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.periodCanSpend.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.periodReset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PeriodicAllowance>): PeriodicAllowance {
    const message = createBasePeriodicAllowance();
    message.basic = object.basic !== undefined && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : undefined;
    message.period = object.period !== undefined && object.period !== null ? Duration.fromPartial(object.period) : undefined;
    message.periodSpendLimit = object.periodSpendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.periodCanSpend = object.periodCanSpend?.map(e => Coin.fromPartial(e)) || [];
    message.periodReset = object.periodReset ?? undefined;
    return message;
  },
  fromAmino(object: PeriodicAllowanceAmino): PeriodicAllowance {
    const message = createBasePeriodicAllowance();
    if (object.basic !== undefined && object.basic !== null) {
      message.basic = BasicAllowance.fromAmino(object.basic);
    }
    if (object.period !== undefined && object.period !== null) {
      message.period = Duration.fromAmino(object.period);
    }
    message.periodSpendLimit = object.period_spend_limit?.map(e => Coin.fromAmino(e)) || [];
    message.periodCanSpend = object.period_can_spend?.map(e => Coin.fromAmino(e)) || [];
    if (object.period_reset !== undefined && object.period_reset !== null) {
      message.periodReset = fromTimestamp(Timestamp.fromAmino(object.period_reset));
    }
    return message;
  },
  toAmino(message: PeriodicAllowance): PeriodicAllowanceAmino {
    const obj: any = {};
    obj.basic = message.basic ? BasicAllowance.toAmino(message.basic) : BasicAllowance.toAmino(BasicAllowance.fromPartial({}));
    obj.period = message.period ? Duration.toAmino(message.period) : Duration.toAmino(Duration.fromPartial({}));
    if (message.periodSpendLimit) {
      obj.period_spend_limit = message.periodSpendLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.period_spend_limit = message.periodSpendLimit;
    }
    if (message.periodCanSpend) {
      obj.period_can_spend = message.periodCanSpend.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.period_can_spend = message.periodCanSpend;
    }
    obj.period_reset = message.periodReset ? Timestamp.toAmino(toTimestamp(message.periodReset)) : new Date();
    return obj;
  },
  fromAminoMsg(object: PeriodicAllowanceAminoMsg): PeriodicAllowance {
    return PeriodicAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: PeriodicAllowance): PeriodicAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/PeriodicAllowance",
      value: PeriodicAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: PeriodicAllowanceProtoMsg): PeriodicAllowance {
    return PeriodicAllowance.decode(message.value);
  },
  toProto(message: PeriodicAllowance): Uint8Array {
    return PeriodicAllowance.encode(message).finish();
  },
  toProtoMsg(message: PeriodicAllowance): PeriodicAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
      value: PeriodicAllowance.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(PeriodicAllowance.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(PeriodicAllowance.typeUrl, PeriodicAllowance);
    GlobalDecoderRegistry.registerAminoProtoMapping(PeriodicAllowance.aminoType, PeriodicAllowance.typeUrl);
    BasicAllowance.registerTypeUrl();
    Coin.registerTypeUrl();
  }
};
function createBaseAllowedMsgAllowance(): AllowedMsgAllowance {
  return {
    allowance: undefined,
    allowedMessages: []
  };
}
/**
 * AllowedMsgAllowance creates allowance only for specified message types.
 * @name AllowedMsgAllowance
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.AllowedMsgAllowance
 */
export const AllowedMsgAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
  aminoType: "cosmos-sdk/AllowedMsgAllowance",
  is(o: any): o is AllowedMsgAllowance {
    return o && (o.$typeUrl === AllowedMsgAllowance.typeUrl || Array.isArray(o.allowedMessages) && (!o.allowedMessages.length || typeof o.allowedMessages[0] === "string"));
  },
  isAmino(o: any): o is AllowedMsgAllowanceAmino {
    return o && (o.$typeUrl === AllowedMsgAllowance.typeUrl || Array.isArray(o.allowed_messages) && (!o.allowed_messages.length || typeof o.allowed_messages[0] === "string"));
  },
  encode(message: AllowedMsgAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowance !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedMessages) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AllowedMsgAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedMsgAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 2:
          message.allowedMessages.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AllowedMsgAllowance>): AllowedMsgAllowance {
    const message = createBaseAllowedMsgAllowance();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? GlobalDecoderRegistry.fromPartial(object.allowance) : undefined;
    message.allowedMessages = object.allowedMessages?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AllowedMsgAllowanceAmino): AllowedMsgAllowance {
    const message = createBaseAllowedMsgAllowance();
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = GlobalDecoderRegistry.fromAminoMsg(object.allowance);
    }
    message.allowedMessages = object.allowed_messages?.map(e => e) || [];
    return message;
  },
  toAmino(message: AllowedMsgAllowance): AllowedMsgAllowanceAmino {
    const obj: any = {};
    obj.allowance = message.allowance ? GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(e => e);
    } else {
      obj.allowed_messages = message.allowedMessages;
    }
    return obj;
  },
  fromAminoMsg(object: AllowedMsgAllowanceAminoMsg): AllowedMsgAllowance {
    return AllowedMsgAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/AllowedMsgAllowance",
      value: AllowedMsgAllowance.toAmino(message)
    };
  },
  fromProtoMsg(message: AllowedMsgAllowanceProtoMsg): AllowedMsgAllowance {
    return AllowedMsgAllowance.decode(message.value);
  },
  toProto(message: AllowedMsgAllowance): Uint8Array {
    return AllowedMsgAllowance.encode(message).finish();
  },
  toProtoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
      value: AllowedMsgAllowance.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AllowedMsgAllowance.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(AllowedMsgAllowance.typeUrl, AllowedMsgAllowance);
    GlobalDecoderRegistry.registerAminoProtoMapping(AllowedMsgAllowance.aminoType, AllowedMsgAllowance.typeUrl);
    BasicAllowance.registerTypeUrl();
    PeriodicAllowance.registerTypeUrl();
    AllowedMsgAllowance.registerTypeUrl();
  }
};
function createBaseGrant(): Grant {
  return {
    granter: "",
    grantee: "",
    allowance: undefined
  };
}
/**
 * Grant is stored in the KVStore to record a grant with full context
 * @name Grant
 * @package cosmos.feegrant.v1beta1
 * @see proto type: cosmos.feegrant.v1beta1.Grant
 */
export const Grant = {
  typeUrl: "/cosmos.feegrant.v1beta1.Grant",
  aminoType: "cosmos-sdk/Grant",
  is(o: any): o is Grant {
    return o && (o.$typeUrl === Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is GrantAmino {
    return o && (o.$typeUrl === Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: Grant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = createBaseGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? GlobalDecoderRegistry.fromPartial(object.allowance) : undefined;
    return message;
  },
  fromAmino(object: GrantAmino): Grant {
    const message = createBaseGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = GlobalDecoderRegistry.fromAminoMsg(object.allowance);
    }
    return message;
  },
  toAmino(message: Grant): GrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.allowance = message.allowance ? GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object: GrantAminoMsg): Grant {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg(message: Grant): GrantAminoMsg {
    return {
      type: "cosmos-sdk/Grant",
      value: Grant.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantProtoMsg): Grant {
    return Grant.decode(message.value);
  },
  toProto(message: Grant): Uint8Array {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message: Grant): GrantProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Grant.typeUrl)) {
      return;
    }
    BasicAllowance.registerTypeUrl();
    PeriodicAllowance.registerTypeUrl();
    AllowedMsgAllowance.registerTypeUrl();
  }
};