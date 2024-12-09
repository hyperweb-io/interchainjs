import { InsuranceFund, InsuranceFundAmino, RedemptionSchedule, RedemptionScheduleAmino } from "./insurance";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventInsuranceFundUpdate {
  fund?: InsuranceFund;
}
export interface EventInsuranceFundUpdateProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.EventInsuranceFundUpdate";
  value: Uint8Array;
}
export interface EventInsuranceFundUpdateAmino {
  fund?: InsuranceFundAmino;
}
export interface EventInsuranceFundUpdateAminoMsg {
  type: "/injective.insurance.v1beta1.EventInsuranceFundUpdate";
  value: EventInsuranceFundUpdateAmino;
}
export interface EventRequestRedemption {
  schedule?: RedemptionSchedule;
}
export interface EventRequestRedemptionProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.EventRequestRedemption";
  value: Uint8Array;
}
export interface EventRequestRedemptionAmino {
  schedule?: RedemptionScheduleAmino;
}
export interface EventRequestRedemptionAminoMsg {
  type: "/injective.insurance.v1beta1.EventRequestRedemption";
  value: EventRequestRedemptionAmino;
}
export interface EventWithdrawRedemption {
  /** redemption schedule triggered withdraw */
  schedule?: RedemptionSchedule;
  /** redeem coin amount in base_currency */
  redeemCoin: Coin;
}
export interface EventWithdrawRedemptionProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.EventWithdrawRedemption";
  value: Uint8Array;
}
export interface EventWithdrawRedemptionAmino {
  /** redemption schedule triggered withdraw */
  schedule?: RedemptionScheduleAmino;
  /** redeem coin amount in base_currency */
  redeem_coin: CoinAmino;
}
export interface EventWithdrawRedemptionAminoMsg {
  type: "/injective.insurance.v1beta1.EventWithdrawRedemption";
  value: EventWithdrawRedemptionAmino;
}
export interface EventUnderwrite {
  /** address of the underwriter */
  underwriter: string;
  /** marketId of insurance fund for the redemption */
  marketId: string;
  /** deposit coin amount */
  deposit: Coin;
  /** share coin amount */
  shares: Coin;
}
export interface EventUnderwriteProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.EventUnderwrite";
  value: Uint8Array;
}
export interface EventUnderwriteAmino {
  /** address of the underwriter */
  underwriter: string;
  /** marketId of insurance fund for the redemption */
  marketId: string;
  /** deposit coin amount */
  deposit: CoinAmino;
  /** share coin amount */
  shares: CoinAmino;
}
export interface EventUnderwriteAminoMsg {
  type: "/injective.insurance.v1beta1.EventUnderwrite";
  value: EventUnderwriteAmino;
}
export interface EventInsuranceWithdraw {
  marketId: string;
  marketTicker: string;
  withdrawal: Coin;
}
export interface EventInsuranceWithdrawProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.EventInsuranceWithdraw";
  value: Uint8Array;
}
export interface EventInsuranceWithdrawAmino {
  market_id: string;
  market_ticker: string;
  withdrawal: CoinAmino;
}
export interface EventInsuranceWithdrawAminoMsg {
  type: "/injective.insurance.v1beta1.EventInsuranceWithdraw";
  value: EventInsuranceWithdrawAmino;
}
function createBaseEventInsuranceFundUpdate(): EventInsuranceFundUpdate {
  return {
    fund: undefined
  };
}
export const EventInsuranceFundUpdate = {
  typeUrl: "/injective.insurance.v1beta1.EventInsuranceFundUpdate",
  is(o: any): o is EventInsuranceFundUpdate {
    return o && o.$typeUrl === EventInsuranceFundUpdate.typeUrl;
  },
  isAmino(o: any): o is EventInsuranceFundUpdateAmino {
    return o && o.$typeUrl === EventInsuranceFundUpdate.typeUrl;
  },
  encode(message: EventInsuranceFundUpdate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fund !== undefined) {
      InsuranceFund.encode(message.fund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventInsuranceFundUpdate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInsuranceFundUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fund = InsuranceFund.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventInsuranceFundUpdate>): EventInsuranceFundUpdate {
    const message = createBaseEventInsuranceFundUpdate();
    message.fund = object.fund !== undefined && object.fund !== null ? InsuranceFund.fromPartial(object.fund) : undefined;
    return message;
  },
  fromAmino(object: EventInsuranceFundUpdateAmino): EventInsuranceFundUpdate {
    const message = createBaseEventInsuranceFundUpdate();
    if (object.fund !== undefined && object.fund !== null) {
      message.fund = InsuranceFund.fromAmino(object.fund);
    }
    return message;
  },
  toAmino(message: EventInsuranceFundUpdate): EventInsuranceFundUpdateAmino {
    const obj: any = {};
    obj.fund = message.fund ? InsuranceFund.toAmino(message.fund) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventInsuranceFundUpdateAminoMsg): EventInsuranceFundUpdate {
    return EventInsuranceFundUpdate.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInsuranceFundUpdateProtoMsg): EventInsuranceFundUpdate {
    return EventInsuranceFundUpdate.decode(message.value);
  },
  toProto(message: EventInsuranceFundUpdate): Uint8Array {
    return EventInsuranceFundUpdate.encode(message).finish();
  },
  toProtoMsg(message: EventInsuranceFundUpdate): EventInsuranceFundUpdateProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.EventInsuranceFundUpdate",
      value: EventInsuranceFundUpdate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventInsuranceFundUpdate.typeUrl, EventInsuranceFundUpdate);
function createBaseEventRequestRedemption(): EventRequestRedemption {
  return {
    schedule: undefined
  };
}
export const EventRequestRedemption = {
  typeUrl: "/injective.insurance.v1beta1.EventRequestRedemption",
  is(o: any): o is EventRequestRedemption {
    return o && o.$typeUrl === EventRequestRedemption.typeUrl;
  },
  isAmino(o: any): o is EventRequestRedemptionAmino {
    return o && o.$typeUrl === EventRequestRedemption.typeUrl;
  },
  encode(message: EventRequestRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.schedule !== undefined) {
      RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRequestRedemption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRequestRedemption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedule = RedemptionSchedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventRequestRedemption>): EventRequestRedemption {
    const message = createBaseEventRequestRedemption();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
    return message;
  },
  fromAmino(object: EventRequestRedemptionAmino): EventRequestRedemption {
    const message = createBaseEventRequestRedemption();
    if (object.schedule !== undefined && object.schedule !== null) {
      message.schedule = RedemptionSchedule.fromAmino(object.schedule);
    }
    return message;
  },
  toAmino(message: EventRequestRedemption): EventRequestRedemptionAmino {
    const obj: any = {};
    obj.schedule = message.schedule ? RedemptionSchedule.toAmino(message.schedule) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRequestRedemptionAminoMsg): EventRequestRedemption {
    return EventRequestRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRequestRedemptionProtoMsg): EventRequestRedemption {
    return EventRequestRedemption.decode(message.value);
  },
  toProto(message: EventRequestRedemption): Uint8Array {
    return EventRequestRedemption.encode(message).finish();
  },
  toProtoMsg(message: EventRequestRedemption): EventRequestRedemptionProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.EventRequestRedemption",
      value: EventRequestRedemption.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventRequestRedemption.typeUrl, EventRequestRedemption);
function createBaseEventWithdrawRedemption(): EventWithdrawRedemption {
  return {
    schedule: undefined,
    redeemCoin: Coin.fromPartial({})
  };
}
export const EventWithdrawRedemption = {
  typeUrl: "/injective.insurance.v1beta1.EventWithdrawRedemption",
  is(o: any): o is EventWithdrawRedemption {
    return o && (o.$typeUrl === EventWithdrawRedemption.typeUrl || Coin.is(o.redeemCoin));
  },
  isAmino(o: any): o is EventWithdrawRedemptionAmino {
    return o && (o.$typeUrl === EventWithdrawRedemption.typeUrl || Coin.isAmino(o.redeem_coin));
  },
  encode(message: EventWithdrawRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.schedule !== undefined) {
      RedemptionSchedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    if (message.redeemCoin !== undefined) {
      Coin.encode(message.redeemCoin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawRedemption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawRedemption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedule = RedemptionSchedule.decode(reader, reader.uint32());
          break;
        case 2:
          message.redeemCoin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventWithdrawRedemption>): EventWithdrawRedemption {
    const message = createBaseEventWithdrawRedemption();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? RedemptionSchedule.fromPartial(object.schedule) : undefined;
    message.redeemCoin = object.redeemCoin !== undefined && object.redeemCoin !== null ? Coin.fromPartial(object.redeemCoin) : undefined;
    return message;
  },
  fromAmino(object: EventWithdrawRedemptionAmino): EventWithdrawRedemption {
    const message = createBaseEventWithdrawRedemption();
    if (object.schedule !== undefined && object.schedule !== null) {
      message.schedule = RedemptionSchedule.fromAmino(object.schedule);
    }
    if (object.redeem_coin !== undefined && object.redeem_coin !== null) {
      message.redeemCoin = Coin.fromAmino(object.redeem_coin);
    }
    return message;
  },
  toAmino(message: EventWithdrawRedemption): EventWithdrawRedemptionAmino {
    const obj: any = {};
    obj.schedule = message.schedule ? RedemptionSchedule.toAmino(message.schedule) : undefined;
    obj.redeem_coin = message.redeemCoin ? Coin.toAmino(message.redeemCoin) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawRedemptionAminoMsg): EventWithdrawRedemption {
    return EventWithdrawRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawRedemptionProtoMsg): EventWithdrawRedemption {
    return EventWithdrawRedemption.decode(message.value);
  },
  toProto(message: EventWithdrawRedemption): Uint8Array {
    return EventWithdrawRedemption.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawRedemption): EventWithdrawRedemptionProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.EventWithdrawRedemption",
      value: EventWithdrawRedemption.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventWithdrawRedemption.typeUrl, EventWithdrawRedemption);
function createBaseEventUnderwrite(): EventUnderwrite {
  return {
    underwriter: "",
    marketId: "",
    deposit: Coin.fromPartial({}),
    shares: Coin.fromPartial({})
  };
}
export const EventUnderwrite = {
  typeUrl: "/injective.insurance.v1beta1.EventUnderwrite",
  is(o: any): o is EventUnderwrite {
    return o && (o.$typeUrl === EventUnderwrite.typeUrl || typeof o.underwriter === "string" && typeof o.marketId === "string" && Coin.is(o.deposit) && Coin.is(o.shares));
  },
  isAmino(o: any): o is EventUnderwriteAmino {
    return o && (o.$typeUrl === EventUnderwrite.typeUrl || typeof o.underwriter === "string" && typeof o.marketId === "string" && Coin.isAmino(o.deposit) && Coin.isAmino(o.shares));
  },
  encode(message: EventUnderwrite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.underwriter !== "") {
      writer.uint32(10).string(message.underwriter);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    if (message.shares !== undefined) {
      Coin.encode(message.shares, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUnderwrite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnderwrite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.underwriter = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.shares = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventUnderwrite>): EventUnderwrite {
    const message = createBaseEventUnderwrite();
    message.underwriter = object.underwriter ?? "";
    message.marketId = object.marketId ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.shares = object.shares !== undefined && object.shares !== null ? Coin.fromPartial(object.shares) : undefined;
    return message;
  },
  fromAmino(object: EventUnderwriteAmino): EventUnderwrite {
    const message = createBaseEventUnderwrite();
    if (object.underwriter !== undefined && object.underwriter !== null) {
      message.underwriter = object.underwriter;
    }
    if (object.marketId !== undefined && object.marketId !== null) {
      message.marketId = object.marketId;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = Coin.fromAmino(object.shares);
    }
    return message;
  },
  toAmino(message: EventUnderwrite): EventUnderwriteAmino {
    const obj: any = {};
    obj.underwriter = message.underwriter === "" ? undefined : message.underwriter;
    obj.marketId = message.marketId === "" ? undefined : message.marketId;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    obj.shares = message.shares ? Coin.toAmino(message.shares) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUnderwriteAminoMsg): EventUnderwrite {
    return EventUnderwrite.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUnderwriteProtoMsg): EventUnderwrite {
    return EventUnderwrite.decode(message.value);
  },
  toProto(message: EventUnderwrite): Uint8Array {
    return EventUnderwrite.encode(message).finish();
  },
  toProtoMsg(message: EventUnderwrite): EventUnderwriteProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.EventUnderwrite",
      value: EventUnderwrite.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventUnderwrite.typeUrl, EventUnderwrite);
function createBaseEventInsuranceWithdraw(): EventInsuranceWithdraw {
  return {
    marketId: "",
    marketTicker: "",
    withdrawal: Coin.fromPartial({})
  };
}
export const EventInsuranceWithdraw = {
  typeUrl: "/injective.insurance.v1beta1.EventInsuranceWithdraw",
  is(o: any): o is EventInsuranceWithdraw {
    return o && (o.$typeUrl === EventInsuranceWithdraw.typeUrl || typeof o.marketId === "string" && typeof o.marketTicker === "string" && Coin.is(o.withdrawal));
  },
  isAmino(o: any): o is EventInsuranceWithdrawAmino {
    return o && (o.$typeUrl === EventInsuranceWithdraw.typeUrl || typeof o.market_id === "string" && typeof o.market_ticker === "string" && Coin.isAmino(o.withdrawal));
  },
  encode(message: EventInsuranceWithdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketId !== "") {
      writer.uint32(10).string(message.marketId);
    }
    if (message.marketTicker !== "") {
      writer.uint32(18).string(message.marketTicker);
    }
    if (message.withdrawal !== undefined) {
      Coin.encode(message.withdrawal, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventInsuranceWithdraw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInsuranceWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketId = reader.string();
          break;
        case 2:
          message.marketTicker = reader.string();
          break;
        case 3:
          message.withdrawal = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventInsuranceWithdraw>): EventInsuranceWithdraw {
    const message = createBaseEventInsuranceWithdraw();
    message.marketId = object.marketId ?? "";
    message.marketTicker = object.marketTicker ?? "";
    message.withdrawal = object.withdrawal !== undefined && object.withdrawal !== null ? Coin.fromPartial(object.withdrawal) : undefined;
    return message;
  },
  fromAmino(object: EventInsuranceWithdrawAmino): EventInsuranceWithdraw {
    const message = createBaseEventInsuranceWithdraw();
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.market_ticker !== undefined && object.market_ticker !== null) {
      message.marketTicker = object.market_ticker;
    }
    if (object.withdrawal !== undefined && object.withdrawal !== null) {
      message.withdrawal = Coin.fromAmino(object.withdrawal);
    }
    return message;
  },
  toAmino(message: EventInsuranceWithdraw): EventInsuranceWithdrawAmino {
    const obj: any = {};
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.market_ticker = message.marketTicker === "" ? undefined : message.marketTicker;
    obj.withdrawal = message.withdrawal ? Coin.toAmino(message.withdrawal) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventInsuranceWithdrawAminoMsg): EventInsuranceWithdraw {
    return EventInsuranceWithdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInsuranceWithdrawProtoMsg): EventInsuranceWithdraw {
    return EventInsuranceWithdraw.decode(message.value);
  },
  toProto(message: EventInsuranceWithdraw): Uint8Array {
    return EventInsuranceWithdraw.encode(message).finish();
  },
  toProtoMsg(message: EventInsuranceWithdraw): EventInsuranceWithdrawProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.EventInsuranceWithdraw",
      value: EventInsuranceWithdraw.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventInsuranceWithdraw.typeUrl, EventInsuranceWithdraw);