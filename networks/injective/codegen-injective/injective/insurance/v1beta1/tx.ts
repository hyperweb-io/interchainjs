import { OracleType } from "../../oracle/v1beta1/oracle";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino } from "./insurance";
import { isSet, DeepPartial } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 */
export interface MsgCreateInsuranceFund {
  /** Creator of the insurance fund. */
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** Coin denom to use for the market quote denom */
  quoteDenom: string;
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
  /** Initial deposit of the insurance fund */
  initialDeposit: Coin;
}
export interface MsgCreateInsuranceFundProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
  value: Uint8Array;
}
/**
 * MsgCreateInsuranceFund a message to create an insurance fund for a derivative
 * market.
 */
export interface MsgCreateInsuranceFundAmino {
  /** Creator of the insurance fund. */
  sender: string;
  /** Ticker for the derivative market. */
  ticker: string;
  /** Coin denom to use for the market quote denom */
  quote_denom: string;
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
  /** Initial deposit of the insurance fund */
  initial_deposit: CoinAmino;
}
export interface MsgCreateInsuranceFundAminoMsg {
  type: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
  value: MsgCreateInsuranceFundAmino;
}
export interface MsgCreateInsuranceFundResponse {}
export interface MsgCreateInsuranceFundResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
  value: Uint8Array;
}
export interface MsgCreateInsuranceFundResponseAmino {}
export interface MsgCreateInsuranceFundResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse";
  value: MsgCreateInsuranceFundResponseAmino;
}
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 */
export interface MsgUnderwrite {
  /** Address of the underwriter. */
  sender: string;
  /** MarketID of the insurance fund. */
  marketId: string;
  /** Amount of quote_denom to underwrite the insurance fund. */
  deposit: Coin;
}
export interface MsgUnderwriteProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite";
  value: Uint8Array;
}
/**
 * MsgUnderwrite defines a message for depositing coins to underwrite an
 * insurance fund
 */
export interface MsgUnderwriteAmino {
  /** Address of the underwriter. */
  sender: string;
  /** MarketID of the insurance fund. */
  market_id: string;
  /** Amount of quote_denom to underwrite the insurance fund. */
  deposit: CoinAmino;
}
export interface MsgUnderwriteAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUnderwrite";
  value: MsgUnderwriteAmino;
}
export interface MsgUnderwriteResponse {}
export interface MsgUnderwriteResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
  value: Uint8Array;
}
export interface MsgUnderwriteResponseAmino {}
export interface MsgUnderwriteResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUnderwriteResponse";
  value: MsgUnderwriteResponseAmino;
}
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 */
export interface MsgRequestRedemption {
  /** Address of the underwriter requesting a redemption. */
  sender: string;
  /** MarketID of the insurance fund. */
  marketId: string;
  /** Insurance fund share token amount to be redeemed. */
  amount: Coin;
}
export interface MsgRequestRedemptionProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption";
  value: Uint8Array;
}
/**
 * MsgRequestRedemption defines a message for requesting a redemption of the
 * sender's insurance fund tokens
 */
export interface MsgRequestRedemptionAmino {
  /** Address of the underwriter requesting a redemption. */
  sender: string;
  /** MarketID of the insurance fund. */
  market_id: string;
  /** Insurance fund share token amount to be redeemed. */
  amount: CoinAmino;
}
export interface MsgRequestRedemptionAminoMsg {
  type: "/injective.insurance.v1beta1.MsgRequestRedemption";
  value: MsgRequestRedemptionAmino;
}
export interface MsgRequestRedemptionResponse {}
export interface MsgRequestRedemptionResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
  value: Uint8Array;
}
export interface MsgRequestRedemptionResponseAmino {}
export interface MsgRequestRedemptionResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse";
  value: MsgRequestRedemptionResponseAmino;
}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the insurance parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the insurance parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.insurance.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.insurance.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgCreateInsuranceFund(): MsgCreateInsuranceFund {
  return {
    sender: "",
    ticker: "",
    quoteDenom: "",
    oracleBase: "",
    oracleQuote: "",
    oracleType: 0,
    expiry: BigInt(0),
    initialDeposit: Coin.fromPartial({})
  };
}
export const MsgCreateInsuranceFund = {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
  is(o: any): o is MsgCreateInsuranceFund {
    return o && (o.$typeUrl === MsgCreateInsuranceFund.typeUrl || typeof o.sender === "string" && typeof o.ticker === "string" && typeof o.quoteDenom === "string" && typeof o.oracleBase === "string" && typeof o.oracleQuote === "string" && isSet(o.oracleType) && typeof o.expiry === "bigint" && Coin.is(o.initialDeposit));
  },
  isAmino(o: any): o is MsgCreateInsuranceFundAmino {
    return o && (o.$typeUrl === MsgCreateInsuranceFund.typeUrl || typeof o.sender === "string" && typeof o.ticker === "string" && typeof o.quote_denom === "string" && typeof o.oracle_base === "string" && typeof o.oracle_quote === "string" && isSet(o.oracle_type) && typeof o.expiry === "bigint" && Coin.isAmino(o.initial_deposit));
  },
  encode(message: MsgCreateInsuranceFund, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.quoteDenom !== "") {
      writer.uint32(26).string(message.quoteDenom);
    }
    if (message.oracleBase !== "") {
      writer.uint32(34).string(message.oracleBase);
    }
    if (message.oracleQuote !== "") {
      writer.uint32(42).string(message.oracleQuote);
    }
    if (message.oracleType !== 0) {
      writer.uint32(48).int32(message.oracleType);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(56).int64(message.expiry);
    }
    if (message.initialDeposit !== undefined) {
      Coin.encode(message.initialDeposit, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInsuranceFund {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInsuranceFund();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.quoteDenom = reader.string();
          break;
        case 4:
          message.oracleBase = reader.string();
          break;
        case 5:
          message.oracleQuote = reader.string();
          break;
        case 6:
          message.oracleType = (reader.int32() as any);
          break;
        case 7:
          message.expiry = reader.int64();
          break;
        case 8:
          message.initialDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateInsuranceFund>): MsgCreateInsuranceFund {
    const message = createBaseMsgCreateInsuranceFund();
    message.sender = object.sender ?? "";
    message.ticker = object.ticker ?? "";
    message.quoteDenom = object.quoteDenom ?? "";
    message.oracleBase = object.oracleBase ?? "";
    message.oracleQuote = object.oracleQuote ?? "";
    message.oracleType = object.oracleType ?? 0;
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    message.initialDeposit = object.initialDeposit !== undefined && object.initialDeposit !== null ? Coin.fromPartial(object.initialDeposit) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateInsuranceFundAmino): MsgCreateInsuranceFund {
    const message = createBaseMsgCreateInsuranceFund();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.ticker !== undefined && object.ticker !== null) {
      message.ticker = object.ticker;
    }
    if (object.quote_denom !== undefined && object.quote_denom !== null) {
      message.quoteDenom = object.quote_denom;
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
    if (object.initial_deposit !== undefined && object.initial_deposit !== null) {
      message.initialDeposit = Coin.fromAmino(object.initial_deposit);
    }
    return message;
  },
  toAmino(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.ticker = message.ticker === "" ? undefined : message.ticker;
    obj.quote_denom = message.quoteDenom === "" ? undefined : message.quoteDenom;
    obj.oracle_base = message.oracleBase === "" ? undefined : message.oracleBase;
    obj.oracle_quote = message.oracleQuote === "" ? undefined : message.oracleQuote;
    obj.oracle_type = message.oracleType === 0 ? undefined : message.oracleType;
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry.toString() : undefined;
    obj.initial_deposit = message.initialDeposit ? Coin.toAmino(message.initialDeposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateInsuranceFundAminoMsg): MsgCreateInsuranceFund {
    return MsgCreateInsuranceFund.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInsuranceFundProtoMsg): MsgCreateInsuranceFund {
    return MsgCreateInsuranceFund.decode(message.value);
  },
  toProto(message: MsgCreateInsuranceFund): Uint8Array {
    return MsgCreateInsuranceFund.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInsuranceFund): MsgCreateInsuranceFundProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
      value: MsgCreateInsuranceFund.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateInsuranceFund.typeUrl, MsgCreateInsuranceFund);
function createBaseMsgCreateInsuranceFundResponse(): MsgCreateInsuranceFundResponse {
  return {};
}
export const MsgCreateInsuranceFundResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
  is(o: any): o is MsgCreateInsuranceFundResponse {
    return o && o.$typeUrl === MsgCreateInsuranceFundResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateInsuranceFundResponseAmino {
    return o && o.$typeUrl === MsgCreateInsuranceFundResponse.typeUrl;
  },
  encode(_: MsgCreateInsuranceFundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateInsuranceFundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateInsuranceFundResponse();
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
  fromPartial(_: DeepPartial<MsgCreateInsuranceFundResponse>): MsgCreateInsuranceFundResponse {
    const message = createBaseMsgCreateInsuranceFundResponse();
    return message;
  },
  fromAmino(_: MsgCreateInsuranceFundResponseAmino): MsgCreateInsuranceFundResponse {
    const message = createBaseMsgCreateInsuranceFundResponse();
    return message;
  },
  toAmino(_: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateInsuranceFundResponseAminoMsg): MsgCreateInsuranceFundResponse {
    return MsgCreateInsuranceFundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateInsuranceFundResponseProtoMsg): MsgCreateInsuranceFundResponse {
    return MsgCreateInsuranceFundResponse.decode(message.value);
  },
  toProto(message: MsgCreateInsuranceFundResponse): Uint8Array {
    return MsgCreateInsuranceFundResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateInsuranceFundResponse): MsgCreateInsuranceFundResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgCreateInsuranceFundResponse",
      value: MsgCreateInsuranceFundResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateInsuranceFundResponse.typeUrl, MsgCreateInsuranceFundResponse);
function createBaseMsgUnderwrite(): MsgUnderwrite {
  return {
    sender: "",
    marketId: "",
    deposit: Coin.fromPartial({})
  };
}
export const MsgUnderwrite = {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
  is(o: any): o is MsgUnderwrite {
    return o && (o.$typeUrl === MsgUnderwrite.typeUrl || typeof o.sender === "string" && typeof o.marketId === "string" && Coin.is(o.deposit));
  },
  isAmino(o: any): o is MsgUnderwriteAmino {
    return o && (o.$typeUrl === MsgUnderwrite.typeUrl || typeof o.sender === "string" && typeof o.market_id === "string" && Coin.isAmino(o.deposit));
  },
  encode(message: MsgUnderwrite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnderwrite {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnderwrite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnderwrite>): MsgUnderwrite {
    const message = createBaseMsgUnderwrite();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: MsgUnderwriteAmino): MsgUnderwrite {
    const message = createBaseMsgUnderwrite();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgUnderwrite): MsgUnderwriteAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnderwriteAminoMsg): MsgUnderwrite {
    return MsgUnderwrite.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnderwriteProtoMsg): MsgUnderwrite {
    return MsgUnderwrite.decode(message.value);
  },
  toProto(message: MsgUnderwrite): Uint8Array {
    return MsgUnderwrite.encode(message).finish();
  },
  toProtoMsg(message: MsgUnderwrite): MsgUnderwriteProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUnderwrite",
      value: MsgUnderwrite.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnderwrite.typeUrl, MsgUnderwrite);
function createBaseMsgUnderwriteResponse(): MsgUnderwriteResponse {
  return {};
}
export const MsgUnderwriteResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
  is(o: any): o is MsgUnderwriteResponse {
    return o && o.$typeUrl === MsgUnderwriteResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnderwriteResponseAmino {
    return o && o.$typeUrl === MsgUnderwriteResponse.typeUrl;
  },
  encode(_: MsgUnderwriteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnderwriteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnderwriteResponse();
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
  fromPartial(_: DeepPartial<MsgUnderwriteResponse>): MsgUnderwriteResponse {
    const message = createBaseMsgUnderwriteResponse();
    return message;
  },
  fromAmino(_: MsgUnderwriteResponseAmino): MsgUnderwriteResponse {
    const message = createBaseMsgUnderwriteResponse();
    return message;
  },
  toAmino(_: MsgUnderwriteResponse): MsgUnderwriteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnderwriteResponseAminoMsg): MsgUnderwriteResponse {
    return MsgUnderwriteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnderwriteResponseProtoMsg): MsgUnderwriteResponse {
    return MsgUnderwriteResponse.decode(message.value);
  },
  toProto(message: MsgUnderwriteResponse): Uint8Array {
    return MsgUnderwriteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnderwriteResponse): MsgUnderwriteResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUnderwriteResponse",
      value: MsgUnderwriteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnderwriteResponse.typeUrl, MsgUnderwriteResponse);
function createBaseMsgRequestRedemption(): MsgRequestRedemption {
  return {
    sender: "",
    marketId: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRequestRedemption = {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
  is(o: any): o is MsgRequestRedemption {
    return o && (o.$typeUrl === MsgRequestRedemption.typeUrl || typeof o.sender === "string" && typeof o.marketId === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is MsgRequestRedemptionAmino {
    return o && (o.$typeUrl === MsgRequestRedemption.typeUrl || typeof o.sender === "string" && typeof o.market_id === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgRequestRedemption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.marketId !== "") {
      writer.uint32(18).string(message.marketId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestRedemption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.marketId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRequestRedemption>): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    message.sender = object.sender ?? "";
    message.marketId = object.marketId ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRequestRedemptionAmino): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.market_id !== undefined && object.market_id !== null) {
      message.marketId = object.market_id;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgRequestRedemption): MsgRequestRedemptionAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.market_id = message.marketId === "" ? undefined : message.marketId;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionAminoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionProtoMsg): MsgRequestRedemption {
    return MsgRequestRedemption.decode(message.value);
  },
  toProto(message: MsgRequestRedemption): Uint8Array {
    return MsgRequestRedemption.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemption): MsgRequestRedemptionProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemption",
      value: MsgRequestRedemption.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRequestRedemption.typeUrl, MsgRequestRedemption);
function createBaseMsgRequestRedemptionResponse(): MsgRequestRedemptionResponse {
  return {};
}
export const MsgRequestRedemptionResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
  is(o: any): o is MsgRequestRedemptionResponse {
    return o && o.$typeUrl === MsgRequestRedemptionResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRequestRedemptionResponseAmino {
    return o && o.$typeUrl === MsgRequestRedemptionResponse.typeUrl;
  },
  encode(_: MsgRequestRedemptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestRedemptionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemptionResponse();
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
  fromPartial(_: DeepPartial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  },
  fromAmino(_: MsgRequestRedemptionResponseAmino): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  },
  toAmino(_: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestRedemptionResponseAminoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestRedemptionResponseProtoMsg): MsgRequestRedemptionResponse {
    return MsgRequestRedemptionResponse.decode(message.value);
  },
  toProto(message: MsgRequestRedemptionResponse): Uint8Array {
    return MsgRequestRedemptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgRequestRedemptionResponse",
      value: MsgRequestRedemptionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRequestRedemptionResponse.typeUrl, MsgRequestRedemptionResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/injective.insurance.v1beta1.MsgUpdateParams",
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
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.insurance.v1beta1.MsgUpdateParamsResponse",
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
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.insurance.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);