import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { OracleType } from "../../oracle/v1beta1/oracle";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial, isSet, toTimestamp, fromTimestamp } from "../../../helpers";
import { ComputedRef } from "vue";
export interface Params {
  /**
   * default_redemption_notice_period_duration defines the default minimum
   * notice period duration that must pass after an underwriter sends a
   * redemption request before the underwriter can claim his tokens
   */
  defaultRedemptionNoticePeriodDuration: Duration;
}
export interface ReactiveParams {
  defaultRedemptionNoticePeriodDuration: ComputedRef<Duration>;
}
export interface ParamsProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /**
   * default_redemption_notice_period_duration defines the default minimum
   * notice period duration that must pass after an underwriter sends a
   * redemption request before the underwriter can claim his tokens
   */
  default_redemption_notice_period_duration: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "insurance/Params";
  value: ParamsAmino;
}
export interface InsuranceFund {
  /** deposit denomination for the given insurance fund */
  depositDenom: string;
  /** insurance fund pool token denomination for the given insurance fund */
  insurancePoolTokenDenom: string;
  /**
   * redemption_notice_period_duration defines the minimum notice period
   * duration that must pass after an underwriter sends a redemption request
   * before the underwriter can claim his tokens
   */
  redemptionNoticePeriodDuration: Duration;
  /** balance of fund */
  balance: string;
  /** total share tokens minted */
  totalShare: string;
  /** marketID of the derivative market */
  marketId: string;
  /** ticker of the derivative market */
  marketTicker: string;
  /**
   * Oracle base currency of the derivative market OR the oracle symbol for the
   * binary options market.
   */
  oracleBase: string;
  /**
   * Oracle quote currency of the derivative market OR the oracle provider for
   * the binary options market.
   */
  oracleQuote: string;
  /** Oracle type of the binary options or derivative market */
  oracleType: OracleType;
  /**
   * Expiration time of the derivative market. Should be -1 for perpetual or -2
   * for binary options markets.
   */
  expiry: bigint;
}
export interface ReactiveInsuranceFund {
  depositDenom: ComputedRef<string>;
  insurancePoolTokenDenom: ComputedRef<string>;
  redemptionNoticePeriodDuration: ComputedRef<Duration>;
  balance: ComputedRef<string>;
  totalShare: ComputedRef<string>;
  marketId: ComputedRef<string>;
  marketTicker: ComputedRef<string>;
  oracleBase: ComputedRef<string>;
  oracleQuote: ComputedRef<string>;
  oracleType: ComputedRef<OracleType>;
  expiry: ComputedRef<bigint>;
}
export interface InsuranceFundProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.InsuranceFund";
  value: Uint8Array;
}
export interface InsuranceFundAmino {
  /** deposit denomination for the given insurance fund */
  deposit_denom: string;
  /** insurance fund pool token denomination for the given insurance fund */
  insurance_pool_token_denom: string;
  /**
   * redemption_notice_period_duration defines the minimum notice period
   * duration that must pass after an underwriter sends a redemption request
   * before the underwriter can claim his tokens
   */
  redemption_notice_period_duration: DurationAmino;
  /** balance of fund */
  balance: string;
  /** total share tokens minted */
  total_share: string;
  /** marketID of the derivative market */
  market_id: string;
  /** ticker of the derivative market */
  market_ticker: string;
  /**
   * Oracle base currency of the derivative market OR the oracle symbol for the
   * binary options market.
   */
  oracle_base: string;
  /**
   * Oracle quote currency of the derivative market OR the oracle provider for
   * the binary options market.
   */
  oracle_quote: string;
  /** Oracle type of the binary options or derivative market */
  oracle_type: OracleType;
  /**
   * Expiration time of the derivative market. Should be -1 for perpetual or -2
   * for binary options markets.
   */
  expiry: string;
}
export interface InsuranceFundAminoMsg {
  type: "/injective.insurance.v1beta1.InsuranceFund";
  value: InsuranceFundAmino;
}
export interface RedemptionSchedule {
  /** id of redemption schedule */
  id: bigint;
  /** marketId of insurance fund for the redemption */
  marketId: string;
  /** address of the redeemer */
  redeemer: string;
  /** the time after which the redemption can be claimed */
  claimableRedemptionTime: Date;
  /** the insurance_pool_token amount to redeem */
  redemptionAmount: Coin;
}
export interface ReactiveRedemptionSchedule {
  id: ComputedRef<bigint>;
  marketId: ComputedRef<string>;
  redeemer: ComputedRef<string>;
  claimableRedemptionTime: ComputedRef<Date>;
  redemptionAmount: ComputedRef<Coin>;
}
export interface RedemptionScheduleProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.RedemptionSchedule";
  value: Uint8Array;
}
export interface RedemptionScheduleAmino {
  /** id of redemption schedule */
  id: string;
  /** marketId of insurance fund for the redemption */
  marketId: string;
  /** address of the redeemer */
  redeemer: string;
  /** the time after which the redemption can be claimed */
  claimable_redemption_time: string;
  /** the insurance_pool_token amount to redeem */
  redemption_amount: CoinAmino;
}
export interface RedemptionScheduleAminoMsg {
  type: "/injective.insurance.v1beta1.RedemptionSchedule";
  value: RedemptionScheduleAmino;
}
function createBaseParams(): Params {
  return {
    defaultRedemptionNoticePeriodDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/injective.insurance.v1beta1.Params",
  aminoType: "insurance/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Duration.is(o.defaultRedemptionNoticePeriodDuration));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Duration.isAmino(o.default_redemption_notice_period_duration));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultRedemptionNoticePeriodDuration !== undefined) {
      Duration.encode(message.defaultRedemptionNoticePeriodDuration, writer.uint32(10).fork()).ldelim();
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
          message.defaultRedemptionNoticePeriodDuration = Duration.decode(reader, reader.uint32());
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
    message.defaultRedemptionNoticePeriodDuration = object.defaultRedemptionNoticePeriodDuration !== undefined && object.defaultRedemptionNoticePeriodDuration !== null ? Duration.fromPartial(object.defaultRedemptionNoticePeriodDuration) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.default_redemption_notice_period_duration !== undefined && object.default_redemption_notice_period_duration !== null) {
      message.defaultRedemptionNoticePeriodDuration = Duration.fromAmino(object.default_redemption_notice_period_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.default_redemption_notice_period_duration = message.defaultRedemptionNoticePeriodDuration ? Duration.toAmino(message.defaultRedemptionNoticePeriodDuration) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "insurance/Params",
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
      typeUrl: "/injective.insurance.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
function createBaseInsuranceFund(): InsuranceFund {
  return {
    depositDenom: "",
    insurancePoolTokenDenom: "",
    redemptionNoticePeriodDuration: Duration.fromPartial({}),
    balance: "",
    totalShare: "",
    marketId: "",
    marketTicker: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: BigInt(0)
  };
}
export const InsuranceFund = {
  typeUrl: "/injective.insurance.v1beta1.InsuranceFund",
  is(o: any): o is InsuranceFund {
    return o && (o.$typeUrl === InsuranceFund.typeUrl || typeof o.depositDenom === "string" && typeof o.insurancePoolTokenDenom === "string" && Duration.is(o.redemptionNoticePeriodDuration) && typeof o.balance === "string" && typeof o.totalShare === "string" && typeof o.marketId === "string" && typeof o.marketTicker === "string" && typeof o.oracleBase === "string" && typeof o.oracleQuote === "string" && isSet(o.oracleType) && typeof o.expiry === "bigint");
  },
  isAmino(o: any): o is InsuranceFundAmino {
    return o && (o.$typeUrl === InsuranceFund.typeUrl || typeof o.deposit_denom === "string" && typeof o.insurance_pool_token_denom === "string" && Duration.isAmino(o.redemption_notice_period_duration) && typeof o.balance === "string" && typeof o.total_share === "string" && typeof o.market_id === "string" && typeof o.market_ticker === "string" && typeof o.oracle_base === "string" && typeof o.oracle_quote === "string" && isSet(o.oracle_type) && typeof o.expiry === "bigint");
  },
  encode(message: InsuranceFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositDenom !== "") {
      writer.uint32(10).string(message.depositDenom);
    }
    if (message.insurancePoolTokenDenom !== "") {
      writer.uint32(18).string(message.insurancePoolTokenDenom);
    }
    if (message.redemptionNoticePeriodDuration !== undefined) {
      Duration.encode(message.redemptionNoticePeriodDuration, writer.uint32(26).fork()).ldelim();
    }
    if (message.balance !== "") {
      writer.uint32(34).string(message.balance);
    }
    if (message.totalShare !== "") {
      writer.uint32(42).string(message.totalShare);
    }
    if (message.marketId !== "") {
      writer.uint32(50).string(message.marketId);
    }
    if (message.marketTicker !== "") {
      writer.uint32(58).string(message.marketTicker);
    }
    if (message.oracleBase !== "") {
      writer.uint32(66).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(74).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(80).int32(message.oracleType);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(88).int64(message.expiry);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InsuranceFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsuranceFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositDenom = reader.string();
          break;
        case 2:
          message.insurancePoolTokenDenom = reader.string();
          break;
        case 3:
          message.redemptionNoticePeriodDuration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.balance = reader.string();
          break;
        case 5:
          message.totalShare = reader.string();
          break;
        case 6:
          message.marketId = reader.string();
          break;
        case 7:
          message.marketTicker = reader.string();
          break;
        case 8:
          message.oracleBase = reader.string();
          break;
        case 9:
          message.oracleQuote = reader.string();
          break;
        case 10:
          message.oracleType = (reader.int32() as any);
          break;
        case 11:
          message.expiry = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InsuranceFund>): InsuranceFund {
    const message = createBaseInsuranceFund();
    message.depositDenom = object.depositDenom ?? "";
    message.insurancePoolTokenDenom = object.insurancePoolTokenDenom ?? "";
    message.redemptionNoticePeriodDuration = object.redemptionNoticePeriodDuration !== undefined && object.redemptionNoticePeriodDuration !== null ? Duration.fromPartial(object.redemptionNoticePeriodDuration) : undefined;
    message.balance = object.balance ?? "";
    message.totalShare = object.totalShare ?? "";
    message.marketId = object.marketId ?? "";
    message.marketTicker = object.marketTicker ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: InsuranceFundAmino): InsuranceFund {
    const message = createBaseInsuranceFund();
    if (object.deposit_denom !== undefined && object.deposit_denom !== null) {
      message.depositDenom = object.deposit_denom;
    }
    if (object.insurance_pool_token_denom !== undefined && object.insurance_pool_token_denom !== null) {
      message.insurancePoolTokenDenom = object.insurance_pool_token_denom;
    }
    if (object.redemption_notice_period_duration !== undefined && object.redemption_notice_period_duration !== null) {
      message.redemptionNoticePeriodDuration = Duration.fromAmino(object.redemption_notice_period_duration);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.total_share !== undefined && object.total_share !== null) {
      message.totalShare = object.total_share;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.market_ticker !== undefined && object.market_ticker !== null) {
      message.marketTicker = object.market_ticker;
    }
    if (object.oracle_base !== undefined && object.oracle_base !== null) {
      message.oracleBase = object.oracle_base;
    }
    if (object.oracle_quote !== undefined && object.oracle_quote !== null) {
      message.oracleQuote = object.oracle_quote;
    }
    if (object.oracle_type !== undefined && object.oracle_type !== null) {
      message.oracleType = object.oracle_type;
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = BigInt(object.expiry);
    }
    return message;
  },
  toAmino(message: InsuranceFund): InsuranceFundAmino {
    const obj: any = {};
    obj.deposit_denom = message.depositDenom === "" ? undefined : message.depositDenom;
    obj.insurance_pool_token_denom = message.insurancePoolTokenDenom === "" ? undefined : message.insurancePoolTokenDenom;
    obj.redemption_notice_period_duration = message.redemptionNoticePeriodDuration ? Duration.toAmino(message.redemptionNoticePeriodDuration) : undefined;
    obj.balance = message.balance === "" ? undefined : message.balance;
    obj.total_share = message.totalShare === "" ? undefined : message.totalShare;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.market_ticker = message.marketTicker === "" ? undefined : message.marketTicker;
    obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
    obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: InsuranceFundAminoMsg): InsuranceFund {
    return InsuranceFund.fromAmino(object.value);
  },
  fromProtoMsg(message: InsuranceFundProtoMsg): InsuranceFund {
    return InsuranceFund.decode(message.value);
  },
  toProto(message: InsuranceFund): Uint8Array {
    return InsuranceFund.encode(message).finish();
  },
  toProtoMsg(message: InsuranceFund): InsuranceFundProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.InsuranceFund",
      value: InsuranceFund.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InsuranceFund.typeUrl, InsuranceFund);
function createBaseRedemptionSchedule(): RedemptionSchedule {
  return {
    id: BigInt(0),
    marketId: "",
    redeemer: "",
    claimableRedemptionTime: new Date(),
    redemptionAmount: Coin.fromPartial({})
  };
}
export const RedemptionSchedule = {
  typeUrl: "/injective.insurance.v1beta1.RedemptionSchedule",
  is(o: any): o is RedemptionSchedule {
    return o && (o.$typeUrl === RedemptionSchedule.typeUrl || typeof o.id === "bigint" && typeof o.marketId === "string" && typeof o.redeemer === "string" && Timestamp.is(o.claimableRedemptionTime) && Coin.is(o.redemptionAmount));
  },
  isAmino(o: any): o is RedemptionScheduleAmino {
    return o && (o.$typeUrl === RedemptionSchedule.typeUrl || typeof o.id === "bigint" && typeof o.marketId === "string" && typeof o.redeemer === "string" && Timestamp.isAmino(o.claimable_redemption_time) && Coin.isAmino(o.redemption_amount));
  },
  encode(message: RedemptionSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.redeemer !== "") {
      writer.uint32(26).string(message.redeemer);
    }
    if (message.claimableRedemptionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.claimableRedemptionTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.redemptionAmount !== undefined) {
      Coin.encode(message.redemptionAmount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RedemptionSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedemptionSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.redeemer = reader.string();
          break;
        case 4:
          message.claimableRedemptionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.redemptionAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RedemptionSchedule>): RedemptionSchedule {
    const message = createBaseRedemptionSchedule();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.marketId = object.marketId ?? "";
    message.redeemer = object.redeemer ?? "";
    message.claimableRedemptionTime = object.claimableRedemptionTime ?? undefined;
    message.redemptionAmount = object.redemptionAmount !== undefined && object.redemptionAmount !== null ? Coin.fromPartial(object.redemptionAmount) : undefined;
    return message;
  },
  fromAmino(object: RedemptionScheduleAmino): RedemptionSchedule {
    const message = createBaseRedemptionSchedule();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId;
    }
    if (object.redeemer !== undefined && object.redeemer !== null) {
      message.redeemer = object.redeemer;
    }
    if (object.claimable_redemption_time !== undefined && object.claimable_redemption_time !== null) {
      message.claimableRedemptionTime = fromTimestamp(Timestamp.fromAmino(object.claimable_redemption_time));
    }
    if (object.redemption_amount !== undefined && object.redemption_amount !== null) {
      message.redemptionAmount = Coin.fromAmino(object.redemption_amount);
    }
    return message;
  },
  toAmino(message: RedemptionSchedule): RedemptionScheduleAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.marketId = message.marketId === "" ? undefined : message.marketId;
    obj.redeemer = message.redeemer === "" ? undefined : message.redeemer;
    obj.claimable_redemption_time = message.claimableRedemptionTime ? Timestamp.toAmino(toTimestamp(message.claimableRedemptionTime)) : undefined;
    obj.redemption_amount = message.redemptionAmount ? Coin.toAmino(message.redemptionAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: RedemptionScheduleAminoMsg): RedemptionSchedule {
    return RedemptionSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: RedemptionScheduleProtoMsg): RedemptionSchedule {
    return RedemptionSchedule.decode(message.value);
  },
  toProto(message: RedemptionSchedule): Uint8Array {
    return RedemptionSchedule.encode(message).finish();
  },
  toProtoMsg(message: RedemptionSchedule): RedemptionScheduleProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.RedemptionSchedule",
      value: RedemptionSchedule.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RedemptionSchedule.typeUrl, RedemptionSchedule);