import { PriceAttestation, PriceAttestationAmino, Params, ParamsAmino } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgRelayProviderPrice defines a SDK message for setting a price through the
 * provider oracle.
 */
export interface MsgRelayProviderPrices {
  sender: string;
  provider: string;
  symbols: string[];
  prices: string[];
}
export interface MsgRelayProviderPricesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices";
  value: Uint8Array;
}
/**
 * MsgRelayProviderPrice defines a SDK message for setting a price through the
 * provider oracle.
 */
export interface MsgRelayProviderPricesAmino {
  sender: string;
  provider: string;
  symbols: string[];
  prices: string[];
}
export interface MsgRelayProviderPricesAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayProviderPrices";
  value: MsgRelayProviderPricesAmino;
}
export interface MsgRelayProviderPricesResponse {}
export interface MsgRelayProviderPricesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse";
  value: Uint8Array;
}
export interface MsgRelayProviderPricesResponseAmino {}
export interface MsgRelayProviderPricesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse";
  value: MsgRelayProviderPricesResponseAmino;
}
/**
 * MsgRelayPriceFeedPrice defines a SDK message for setting a price through the
 * pricefeed oracle.
 */
export interface MsgRelayPriceFeedPrice {
  sender: string;
  base: string[];
  quote: string[];
  /** price defines the price of the oracle base and quote */
  price: string[];
}
export interface MsgRelayPriceFeedPriceProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice";
  value: Uint8Array;
}
/**
 * MsgRelayPriceFeedPrice defines a SDK message for setting a price through the
 * pricefeed oracle.
 */
export interface MsgRelayPriceFeedPriceAmino {
  sender: string;
  base: string[];
  quote: string[];
  /** price defines the price of the oracle base and quote */
  price: string[];
}
export interface MsgRelayPriceFeedPriceAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice";
  value: MsgRelayPriceFeedPriceAmino;
}
export interface MsgRelayPriceFeedPriceResponse {}
export interface MsgRelayPriceFeedPriceResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse";
  value: Uint8Array;
}
export interface MsgRelayPriceFeedPriceResponseAmino {}
export interface MsgRelayPriceFeedPriceResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse";
  value: MsgRelayPriceFeedPriceResponseAmino;
}
export interface MsgRelayBandRates {
  relayer: string;
  symbols: string[];
  rates: bigint[];
  resolveTimes: bigint[];
  requestIDs: bigint[];
}
export interface MsgRelayBandRatesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates";
  value: Uint8Array;
}
export interface MsgRelayBandRatesAmino {
  relayer: string;
  symbols: string[];
  rates: string[];
  resolve_times: string[];
  requestIDs: string[];
}
export interface MsgRelayBandRatesAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayBandRates";
  value: MsgRelayBandRatesAmino;
}
export interface MsgRelayBandRatesResponse {}
export interface MsgRelayBandRatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse";
  value: Uint8Array;
}
export interface MsgRelayBandRatesResponseAmino {}
export interface MsgRelayBandRatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse";
  value: MsgRelayBandRatesResponseAmino;
}
/**
 * MsgRelayCoinbaseMessages defines a SDK message for relaying price messages
 * from Coinbase API.
 */
export interface MsgRelayCoinbaseMessages {
  sender: string;
  messages: Uint8Array[];
  signatures: Uint8Array[];
}
export interface MsgRelayCoinbaseMessagesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages";
  value: Uint8Array;
}
/**
 * MsgRelayCoinbaseMessages defines a SDK message for relaying price messages
 * from Coinbase API.
 */
export interface MsgRelayCoinbaseMessagesAmino {
  sender: string;
  messages: string[];
  signatures: string[];
}
export interface MsgRelayCoinbaseMessagesAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages";
  value: MsgRelayCoinbaseMessagesAmino;
}
export interface MsgRelayCoinbaseMessagesResponse {}
export interface MsgRelayCoinbaseMessagesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse";
  value: Uint8Array;
}
export interface MsgRelayCoinbaseMessagesResponseAmino {}
export interface MsgRelayCoinbaseMessagesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse";
  value: MsgRelayCoinbaseMessagesResponseAmino;
}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 */
export interface MsgRequestBandIBCRates {
  sender: string;
  requestId: bigint;
}
export interface MsgRequestBandIBCRatesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates";
  value: Uint8Array;
}
/**
 * MsgRequestBandIBCRates defines a SDK message for requesting data from
 * BandChain using IBC.
 */
export interface MsgRequestBandIBCRatesAmino {
  sender: string;
  request_id: string;
}
export interface MsgRequestBandIBCRatesAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRequestBandIBCRates";
  value: MsgRequestBandIBCRatesAmino;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponse {}
export interface MsgRequestBandIBCRatesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse";
  value: Uint8Array;
}
/** MsgRequestDataResponse defines the Msg/RequestBandIBCRates response type. */
export interface MsgRequestBandIBCRatesResponseAmino {}
export interface MsgRequestBandIBCRatesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse";
  value: MsgRequestBandIBCRatesResponseAmino;
}
/** MsgRelayPythPrices defines a SDK message for updating Pyth prices */
export interface MsgRelayPythPrices {
  sender: string;
  priceAttestations: PriceAttestation[];
}
export interface MsgRelayPythPricesProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices";
  value: Uint8Array;
}
/** MsgRelayPythPrices defines a SDK message for updating Pyth prices */
export interface MsgRelayPythPricesAmino {
  sender: string;
  price_attestations: PriceAttestationAmino[];
}
export interface MsgRelayPythPricesAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayPythPrices";
  value: MsgRelayPythPricesAmino;
}
/** MsgRelayPythPricesResponse defines the Msg/RelayPythPrices response type. */
export interface MsgRelayPythPricesResponse {}
export interface MsgRelayPythPricesResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPricesResponse";
  value: Uint8Array;
}
/** MsgRelayPythPricesResponse defines the Msg/RelayPythPrices response type. */
export interface MsgRelayPythPricesResponseAmino {}
export interface MsgRelayPythPricesResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgRelayPythPricesResponse";
  value: MsgRelayPythPricesResponseAmino;
}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the oracle parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the oracle parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/injective.oracle.v1beta1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.oracle.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgRelayProviderPrices(): MsgRelayProviderPrices {
  return {
    sender: "",
    provider: "",
    symbols: [],
    prices: []
  };
}
export const MsgRelayProviderPrices = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
  is(o: any): o is MsgRelayProviderPrices {
    return o && (o.$typeUrl === MsgRelayProviderPrices.typeUrl || typeof o.sender === "string" && typeof o.provider === "string" && Array.isArray(o.symbols) && (!o.symbols.length || typeof o.symbols[0] === "string") && Array.isArray(o.prices) && (!o.prices.length || typeof o.prices[0] === "string"));
  },
  isAmino(o: any): o is MsgRelayProviderPricesAmino {
    return o && (o.$typeUrl === MsgRelayProviderPrices.typeUrl || typeof o.sender === "string" && typeof o.provider === "string" && Array.isArray(o.symbols) && (!o.symbols.length || typeof o.symbols[0] === "string") && Array.isArray(o.prices) && (!o.prices.length || typeof o.prices[0] === "string"));
  },
  encode(message: MsgRelayProviderPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    for (const v of message.symbols) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.prices) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayProviderPrices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayProviderPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.symbols.push(reader.string());
          break;
        case 4:
          message.prices.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRelayProviderPrices>): MsgRelayProviderPrices {
    const message = createBaseMsgRelayProviderPrices();
    message.sender = object.sender ?? "";
    message.provider = object.provider ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRelayProviderPricesAmino): MsgRelayProviderPrices {
    const message = createBaseMsgRelayProviderPrices();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    message.symbols = object.symbols?.map(e => e) || [];
    message.prices = object.prices?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRelayProviderPrices): MsgRelayProviderPricesAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.provider = message.provider === "" ? undefined : message.provider;
    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = message.symbols;
    }
    if (message.prices) {
      obj.prices = message.prices.map(e => e);
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayProviderPricesAminoMsg): MsgRelayProviderPrices {
    return MsgRelayProviderPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayProviderPricesProtoMsg): MsgRelayProviderPrices {
    return MsgRelayProviderPrices.decode(message.value);
  },
  toProto(message: MsgRelayProviderPrices): Uint8Array {
    return MsgRelayProviderPrices.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayProviderPrices): MsgRelayProviderPricesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPrices",
      value: MsgRelayProviderPrices.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayProviderPrices.typeUrl, MsgRelayProviderPrices);
function createBaseMsgRelayProviderPricesResponse(): MsgRelayProviderPricesResponse {
  return {};
}
export const MsgRelayProviderPricesResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse",
  is(o: any): o is MsgRelayProviderPricesResponse {
    return o && o.$typeUrl === MsgRelayProviderPricesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRelayProviderPricesResponseAmino {
    return o && o.$typeUrl === MsgRelayProviderPricesResponse.typeUrl;
  },
  encode(_: MsgRelayProviderPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayProviderPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayProviderPricesResponse();
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
  fromPartial(_: DeepPartial<MsgRelayProviderPricesResponse>): MsgRelayProviderPricesResponse {
    const message = createBaseMsgRelayProviderPricesResponse();
    return message;
  },
  fromAmino(_: MsgRelayProviderPricesResponseAmino): MsgRelayProviderPricesResponse {
    const message = createBaseMsgRelayProviderPricesResponse();
    return message;
  },
  toAmino(_: MsgRelayProviderPricesResponse): MsgRelayProviderPricesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayProviderPricesResponseAminoMsg): MsgRelayProviderPricesResponse {
    return MsgRelayProviderPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayProviderPricesResponseProtoMsg): MsgRelayProviderPricesResponse {
    return MsgRelayProviderPricesResponse.decode(message.value);
  },
  toProto(message: MsgRelayProviderPricesResponse): Uint8Array {
    return MsgRelayProviderPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayProviderPricesResponse): MsgRelayProviderPricesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayProviderPricesResponse",
      value: MsgRelayProviderPricesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayProviderPricesResponse.typeUrl, MsgRelayProviderPricesResponse);
function createBaseMsgRelayPriceFeedPrice(): MsgRelayPriceFeedPrice {
  return {
    sender: "",
    base: [],
    quote: [],
    price: []
  };
}
export const MsgRelayPriceFeedPrice = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
  is(o: any): o is MsgRelayPriceFeedPrice {
    return o && (o.$typeUrl === MsgRelayPriceFeedPrice.typeUrl || typeof o.sender === "string" && Array.isArray(o.base) && (!o.base.length || typeof o.base[0] === "string") && Array.isArray(o.quote) && (!o.quote.length || typeof o.quote[0] === "string") && Array.isArray(o.price) && (!o.price.length || typeof o.price[0] === "string"));
  },
  isAmino(o: any): o is MsgRelayPriceFeedPriceAmino {
    return o && (o.$typeUrl === MsgRelayPriceFeedPrice.typeUrl || typeof o.sender === "string" && Array.isArray(o.base) && (!o.base.length || typeof o.base[0] === "string") && Array.isArray(o.quote) && (!o.quote.length || typeof o.quote[0] === "string") && Array.isArray(o.price) && (!o.price.length || typeof o.price[0] === "string"));
  },
  encode(message: MsgRelayPriceFeedPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.base) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.quote) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.price) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPriceFeedPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPriceFeedPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.base.push(reader.string());
          break;
        case 3:
          message.quote.push(reader.string());
          break;
        case 4:
          message.price.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRelayPriceFeedPrice>): MsgRelayPriceFeedPrice {
    const message = createBaseMsgRelayPriceFeedPrice();
    message.sender = object.sender ?? "";
    message.base = object.base?.map(e => e) || [];
    message.quote = object.quote?.map(e => e) || [];
    message.price = object.price?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRelayPriceFeedPriceAmino): MsgRelayPriceFeedPrice {
    const message = createBaseMsgRelayPriceFeedPrice();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.base = object.base?.map(e => e) || [];
    message.quote = object.quote?.map(e => e) || [];
    message.price = object.price?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRelayPriceFeedPrice): MsgRelayPriceFeedPriceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.base) {
      obj.base = message.base.map(e => e);
    } else {
      obj.base = message.base;
    }
    if (message.quote) {
      obj.quote = message.quote.map(e => e);
    } else {
      obj.quote = message.quote;
    }
    if (message.price) {
      obj.price = message.price.map(e => e);
    } else {
      obj.price = message.price;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayPriceFeedPriceAminoMsg): MsgRelayPriceFeedPrice {
    return MsgRelayPriceFeedPrice.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayPriceFeedPriceProtoMsg): MsgRelayPriceFeedPrice {
    return MsgRelayPriceFeedPrice.decode(message.value);
  },
  toProto(message: MsgRelayPriceFeedPrice): Uint8Array {
    return MsgRelayPriceFeedPrice.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPriceFeedPrice): MsgRelayPriceFeedPriceProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPrice",
      value: MsgRelayPriceFeedPrice.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayPriceFeedPrice.typeUrl, MsgRelayPriceFeedPrice);
function createBaseMsgRelayPriceFeedPriceResponse(): MsgRelayPriceFeedPriceResponse {
  return {};
}
export const MsgRelayPriceFeedPriceResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse",
  is(o: any): o is MsgRelayPriceFeedPriceResponse {
    return o && o.$typeUrl === MsgRelayPriceFeedPriceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRelayPriceFeedPriceResponseAmino {
    return o && o.$typeUrl === MsgRelayPriceFeedPriceResponse.typeUrl;
  },
  encode(_: MsgRelayPriceFeedPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPriceFeedPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPriceFeedPriceResponse();
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
  fromPartial(_: DeepPartial<MsgRelayPriceFeedPriceResponse>): MsgRelayPriceFeedPriceResponse {
    const message = createBaseMsgRelayPriceFeedPriceResponse();
    return message;
  },
  fromAmino(_: MsgRelayPriceFeedPriceResponseAmino): MsgRelayPriceFeedPriceResponse {
    const message = createBaseMsgRelayPriceFeedPriceResponse();
    return message;
  },
  toAmino(_: MsgRelayPriceFeedPriceResponse): MsgRelayPriceFeedPriceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayPriceFeedPriceResponseAminoMsg): MsgRelayPriceFeedPriceResponse {
    return MsgRelayPriceFeedPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayPriceFeedPriceResponseProtoMsg): MsgRelayPriceFeedPriceResponse {
    return MsgRelayPriceFeedPriceResponse.decode(message.value);
  },
  toProto(message: MsgRelayPriceFeedPriceResponse): Uint8Array {
    return MsgRelayPriceFeedPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPriceFeedPriceResponse): MsgRelayPriceFeedPriceResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayPriceFeedPriceResponse",
      value: MsgRelayPriceFeedPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayPriceFeedPriceResponse.typeUrl, MsgRelayPriceFeedPriceResponse);
function createBaseMsgRelayBandRates(): MsgRelayBandRates {
  return {
    relayer: "",
    symbols: [],
    rates: [],
    resolveTimes: [],
    requestIDs: []
  };
}
export const MsgRelayBandRates = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
  is(o: any): o is MsgRelayBandRates {
    return o && (o.$typeUrl === MsgRelayBandRates.typeUrl || typeof o.relayer === "string" && Array.isArray(o.symbols) && (!o.symbols.length || typeof o.symbols[0] === "string") && Array.isArray(o.rates) && (!o.rates.length || typeof o.rates[0] === "bigint") && Array.isArray(o.resolveTimes) && (!o.resolveTimes.length || typeof o.resolveTimes[0] === "bigint") && Array.isArray(o.requestIDs) && (!o.requestIDs.length || typeof o.requestIDs[0] === "bigint"));
  },
  isAmino(o: any): o is MsgRelayBandRatesAmino {
    return o && (o.$typeUrl === MsgRelayBandRates.typeUrl || typeof o.relayer === "string" && Array.isArray(o.symbols) && (!o.symbols.length || typeof o.symbols[0] === "string") && Array.isArray(o.rates) && (!o.rates.length || typeof o.rates[0] === "bigint") && Array.isArray(o.resolve_times) && (!o.resolve_times.length || typeof o.resolve_times[0] === "bigint") && Array.isArray(o.requestIDs) && (!o.requestIDs.length || typeof o.requestIDs[0] === "bigint"));
  },
  encode(message: MsgRelayBandRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.relayer !== "") {
      writer.uint32(10).string(message.relayer);
    }
    for (const v of message.symbols) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.rates) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.resolveTimes) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.requestIDs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayBandRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayBandRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayer = reader.string();
          break;
        case 2:
          message.symbols.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rates.push(reader.uint64());
            }
          } else {
            message.rates.push(reader.uint64());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.resolveTimes.push(reader.uint64());
            }
          } else {
            message.resolveTimes.push(reader.uint64());
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.requestIDs.push(reader.uint64());
            }
          } else {
            message.requestIDs.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRelayBandRates>): MsgRelayBandRates {
    const message = createBaseMsgRelayBandRates();
    message.relayer = object.relayer ?? "";
    message.symbols = object.symbols?.map(e => e) || [];
    message.rates = object.rates?.map(e => BigInt(e.toString())) || [];
    message.resolveTimes = object.resolveTimes?.map(e => BigInt(e.toString())) || [];
    message.requestIDs = object.requestIDs?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgRelayBandRatesAmino): MsgRelayBandRates {
    const message = createBaseMsgRelayBandRates();
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    message.symbols = object.symbols?.map(e => e) || [];
    message.rates = object.rates?.map(e => BigInt(e)) || [];
    message.resolveTimes = object.resolve_times?.map(e => BigInt(e)) || [];
    message.requestIDs = object.requestIDs?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgRelayBandRates): MsgRelayBandRatesAmino {
    const obj: any = {};
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = message.symbols;
    }
    if (message.rates) {
      obj.rates = message.rates.map(e => e.toString());
    } else {
      obj.rates = message.rates;
    }
    if (message.resolveTimes) {
      obj.resolve_times = message.resolveTimes.map(e => e.toString());
    } else {
      obj.resolve_times = message.resolveTimes;
    }
    if (message.requestIDs) {
      obj.requestIDs = message.requestIDs.map(e => e.toString());
    } else {
      obj.requestIDs = message.requestIDs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayBandRatesAminoMsg): MsgRelayBandRates {
    return MsgRelayBandRates.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayBandRatesProtoMsg): MsgRelayBandRates {
    return MsgRelayBandRates.decode(message.value);
  },
  toProto(message: MsgRelayBandRates): Uint8Array {
    return MsgRelayBandRates.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayBandRates): MsgRelayBandRatesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRates",
      value: MsgRelayBandRates.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayBandRates.typeUrl, MsgRelayBandRates);
function createBaseMsgRelayBandRatesResponse(): MsgRelayBandRatesResponse {
  return {};
}
export const MsgRelayBandRatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse",
  is(o: any): o is MsgRelayBandRatesResponse {
    return o && o.$typeUrl === MsgRelayBandRatesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRelayBandRatesResponseAmino {
    return o && o.$typeUrl === MsgRelayBandRatesResponse.typeUrl;
  },
  encode(_: MsgRelayBandRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayBandRatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayBandRatesResponse();
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
  fromPartial(_: DeepPartial<MsgRelayBandRatesResponse>): MsgRelayBandRatesResponse {
    const message = createBaseMsgRelayBandRatesResponse();
    return message;
  },
  fromAmino(_: MsgRelayBandRatesResponseAmino): MsgRelayBandRatesResponse {
    const message = createBaseMsgRelayBandRatesResponse();
    return message;
  },
  toAmino(_: MsgRelayBandRatesResponse): MsgRelayBandRatesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayBandRatesResponseAminoMsg): MsgRelayBandRatesResponse {
    return MsgRelayBandRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayBandRatesResponseProtoMsg): MsgRelayBandRatesResponse {
    return MsgRelayBandRatesResponse.decode(message.value);
  },
  toProto(message: MsgRelayBandRatesResponse): Uint8Array {
    return MsgRelayBandRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayBandRatesResponse): MsgRelayBandRatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayBandRatesResponse",
      value: MsgRelayBandRatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayBandRatesResponse.typeUrl, MsgRelayBandRatesResponse);
function createBaseMsgRelayCoinbaseMessages(): MsgRelayCoinbaseMessages {
  return {
    sender: "",
    messages: [],
    signatures: []
  };
}
export const MsgRelayCoinbaseMessages = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
  is(o: any): o is MsgRelayCoinbaseMessages {
    return o && (o.$typeUrl === MsgRelayCoinbaseMessages.typeUrl || typeof o.sender === "string" && Array.isArray(o.messages) && (!o.messages.length || o.messages[0] instanceof Uint8Array || typeof o.messages[0] === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  isAmino(o: any): o is MsgRelayCoinbaseMessagesAmino {
    return o && (o.$typeUrl === MsgRelayCoinbaseMessages.typeUrl || typeof o.sender === "string" && Array.isArray(o.messages) && (!o.messages.length || o.messages[0] instanceof Uint8Array || typeof o.messages[0] === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
  },
  encode(message: MsgRelayCoinbaseMessages, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.messages) {
      writer.uint32(18).bytes(v!);
    }
    for (const v of message.signatures) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayCoinbaseMessages {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayCoinbaseMessages();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.messages.push(reader.bytes());
          break;
        case 3:
          message.signatures.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRelayCoinbaseMessages>): MsgRelayCoinbaseMessages {
    const message = createBaseMsgRelayCoinbaseMessages();
    message.sender = object.sender ?? "";
    message.messages = object.messages?.map(e => e) || [];
    message.signatures = object.signatures?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRelayCoinbaseMessagesAmino): MsgRelayCoinbaseMessages {
    const message = createBaseMsgRelayCoinbaseMessages();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.messages = object.messages?.map(e => bytesFromBase64(e)) || [];
    message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgRelayCoinbaseMessages): MsgRelayCoinbaseMessagesAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.messages) {
      obj.messages = message.messages.map(e => base64FromBytes(e));
    } else {
      obj.messages = message.messages;
    }
    if (message.signatures) {
      obj.signatures = message.signatures.map(e => base64FromBytes(e));
    } else {
      obj.signatures = message.signatures;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayCoinbaseMessagesAminoMsg): MsgRelayCoinbaseMessages {
    return MsgRelayCoinbaseMessages.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayCoinbaseMessagesProtoMsg): MsgRelayCoinbaseMessages {
    return MsgRelayCoinbaseMessages.decode(message.value);
  },
  toProto(message: MsgRelayCoinbaseMessages): Uint8Array {
    return MsgRelayCoinbaseMessages.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayCoinbaseMessages): MsgRelayCoinbaseMessagesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessages",
      value: MsgRelayCoinbaseMessages.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayCoinbaseMessages.typeUrl, MsgRelayCoinbaseMessages);
function createBaseMsgRelayCoinbaseMessagesResponse(): MsgRelayCoinbaseMessagesResponse {
  return {};
}
export const MsgRelayCoinbaseMessagesResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse",
  is(o: any): o is MsgRelayCoinbaseMessagesResponse {
    return o && o.$typeUrl === MsgRelayCoinbaseMessagesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRelayCoinbaseMessagesResponseAmino {
    return o && o.$typeUrl === MsgRelayCoinbaseMessagesResponse.typeUrl;
  },
  encode(_: MsgRelayCoinbaseMessagesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayCoinbaseMessagesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayCoinbaseMessagesResponse();
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
  fromPartial(_: DeepPartial<MsgRelayCoinbaseMessagesResponse>): MsgRelayCoinbaseMessagesResponse {
    const message = createBaseMsgRelayCoinbaseMessagesResponse();
    return message;
  },
  fromAmino(_: MsgRelayCoinbaseMessagesResponseAmino): MsgRelayCoinbaseMessagesResponse {
    const message = createBaseMsgRelayCoinbaseMessagesResponse();
    return message;
  },
  toAmino(_: MsgRelayCoinbaseMessagesResponse): MsgRelayCoinbaseMessagesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayCoinbaseMessagesResponseAminoMsg): MsgRelayCoinbaseMessagesResponse {
    return MsgRelayCoinbaseMessagesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayCoinbaseMessagesResponseProtoMsg): MsgRelayCoinbaseMessagesResponse {
    return MsgRelayCoinbaseMessagesResponse.decode(message.value);
  },
  toProto(message: MsgRelayCoinbaseMessagesResponse): Uint8Array {
    return MsgRelayCoinbaseMessagesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayCoinbaseMessagesResponse): MsgRelayCoinbaseMessagesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayCoinbaseMessagesResponse",
      value: MsgRelayCoinbaseMessagesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayCoinbaseMessagesResponse.typeUrl, MsgRelayCoinbaseMessagesResponse);
function createBaseMsgRequestBandIBCRates(): MsgRequestBandIBCRates {
  return {
    sender: "",
    requestId: BigInt(0)
  };
}
export const MsgRequestBandIBCRates = {
  typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
  is(o: any): o is MsgRequestBandIBCRates {
    return o && (o.$typeUrl === MsgRequestBandIBCRates.typeUrl || typeof o.sender === "string" && typeof o.requestId === "bigint");
  },
  isAmino(o: any): o is MsgRequestBandIBCRatesAmino {
    return o && (o.$typeUrl === MsgRequestBandIBCRates.typeUrl || typeof o.sender === "string" && typeof o.request_id === "bigint");
  },
  encode(message: MsgRequestBandIBCRates, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.requestId !== BigInt(0)) {
      writer.uint32(16).uint64(message.requestId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBandIBCRates {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBandIBCRates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.requestId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRequestBandIBCRates>): MsgRequestBandIBCRates {
    const message = createBaseMsgRequestBandIBCRates();
    message.sender = object.sender ?? "";
    message.requestId = object.requestId !== undefined && object.requestId !== null ? BigInt(object.requestId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRequestBandIBCRatesAmino): MsgRequestBandIBCRates {
    const message = createBaseMsgRequestBandIBCRates();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = BigInt(object.request_id);
    }
    return message;
  },
  toAmino(message: MsgRequestBandIBCRates): MsgRequestBandIBCRatesAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.request_id = message.requestId !== BigInt(0) ? message.requestId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRequestBandIBCRatesAminoMsg): MsgRequestBandIBCRates {
    return MsgRequestBandIBCRates.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBandIBCRatesProtoMsg): MsgRequestBandIBCRates {
    return MsgRequestBandIBCRates.decode(message.value);
  },
  toProto(message: MsgRequestBandIBCRates): Uint8Array {
    return MsgRequestBandIBCRates.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBandIBCRates): MsgRequestBandIBCRatesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRates",
      value: MsgRequestBandIBCRates.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRequestBandIBCRates.typeUrl, MsgRequestBandIBCRates);
function createBaseMsgRequestBandIBCRatesResponse(): MsgRequestBandIBCRatesResponse {
  return {};
}
export const MsgRequestBandIBCRatesResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse",
  is(o: any): o is MsgRequestBandIBCRatesResponse {
    return o && o.$typeUrl === MsgRequestBandIBCRatesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRequestBandIBCRatesResponseAmino {
    return o && o.$typeUrl === MsgRequestBandIBCRatesResponse.typeUrl;
  },
  encode(_: MsgRequestBandIBCRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBandIBCRatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBandIBCRatesResponse();
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
  fromPartial(_: DeepPartial<MsgRequestBandIBCRatesResponse>): MsgRequestBandIBCRatesResponse {
    const message = createBaseMsgRequestBandIBCRatesResponse();
    return message;
  },
  fromAmino(_: MsgRequestBandIBCRatesResponseAmino): MsgRequestBandIBCRatesResponse {
    const message = createBaseMsgRequestBandIBCRatesResponse();
    return message;
  },
  toAmino(_: MsgRequestBandIBCRatesResponse): MsgRequestBandIBCRatesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestBandIBCRatesResponseAminoMsg): MsgRequestBandIBCRatesResponse {
    return MsgRequestBandIBCRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestBandIBCRatesResponseProtoMsg): MsgRequestBandIBCRatesResponse {
    return MsgRequestBandIBCRatesResponse.decode(message.value);
  },
  toProto(message: MsgRequestBandIBCRatesResponse): Uint8Array {
    return MsgRequestBandIBCRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestBandIBCRatesResponse): MsgRequestBandIBCRatesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRequestBandIBCRatesResponse",
      value: MsgRequestBandIBCRatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRequestBandIBCRatesResponse.typeUrl, MsgRequestBandIBCRatesResponse);
function createBaseMsgRelayPythPrices(): MsgRelayPythPrices {
  return {
    sender: "",
    priceAttestations: []
  };
}
export const MsgRelayPythPrices = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices",
  is(o: any): o is MsgRelayPythPrices {
    return o && (o.$typeUrl === MsgRelayPythPrices.typeUrl || typeof o.sender === "string" && Array.isArray(o.priceAttestations) && (!o.priceAttestations.length || PriceAttestation.is(o.priceAttestations[0])));
  },
  isAmino(o: any): o is MsgRelayPythPricesAmino {
    return o && (o.$typeUrl === MsgRelayPythPrices.typeUrl || typeof o.sender === "string" && Array.isArray(o.price_attestations) && (!o.price_attestations.length || PriceAttestation.isAmino(o.price_attestations[0])));
  },
  encode(message: MsgRelayPythPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.priceAttestations) {
      PriceAttestation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPythPrices {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPythPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.priceAttestations.push(PriceAttestation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRelayPythPrices>): MsgRelayPythPrices {
    const message = createBaseMsgRelayPythPrices();
    message.sender = object.sender ?? "";
    message.priceAttestations = object.priceAttestations?.map(e => PriceAttestation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRelayPythPricesAmino): MsgRelayPythPrices {
    const message = createBaseMsgRelayPythPrices();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    message.priceAttestations = object.price_attestations?.map(e => PriceAttestation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRelayPythPrices): MsgRelayPythPricesAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    if (message.priceAttestations) {
      obj.price_attestations = message.priceAttestations.map(e => e ? PriceAttestation.toAmino(e) : undefined);
    } else {
      obj.price_attestations = message.priceAttestations;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRelayPythPricesAminoMsg): MsgRelayPythPrices {
    return MsgRelayPythPrices.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayPythPricesProtoMsg): MsgRelayPythPrices {
    return MsgRelayPythPrices.decode(message.value);
  },
  toProto(message: MsgRelayPythPrices): Uint8Array {
    return MsgRelayPythPrices.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPythPrices): MsgRelayPythPricesProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPrices",
      value: MsgRelayPythPrices.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayPythPrices.typeUrl, MsgRelayPythPrices);
function createBaseMsgRelayPythPricesResponse(): MsgRelayPythPricesResponse {
  return {};
}
export const MsgRelayPythPricesResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPricesResponse",
  is(o: any): o is MsgRelayPythPricesResponse {
    return o && o.$typeUrl === MsgRelayPythPricesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRelayPythPricesResponseAmino {
    return o && o.$typeUrl === MsgRelayPythPricesResponse.typeUrl;
  },
  encode(_: MsgRelayPythPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRelayPythPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRelayPythPricesResponse();
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
  fromPartial(_: DeepPartial<MsgRelayPythPricesResponse>): MsgRelayPythPricesResponse {
    const message = createBaseMsgRelayPythPricesResponse();
    return message;
  },
  fromAmino(_: MsgRelayPythPricesResponseAmino): MsgRelayPythPricesResponse {
    const message = createBaseMsgRelayPythPricesResponse();
    return message;
  },
  toAmino(_: MsgRelayPythPricesResponse): MsgRelayPythPricesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRelayPythPricesResponseAminoMsg): MsgRelayPythPricesResponse {
    return MsgRelayPythPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRelayPythPricesResponseProtoMsg): MsgRelayPythPricesResponse {
    return MsgRelayPythPricesResponse.decode(message.value);
  },
  toProto(message: MsgRelayPythPricesResponse): Uint8Array {
    return MsgRelayPythPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRelayPythPricesResponse): MsgRelayPythPricesResponseProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.MsgRelayPythPricesResponse",
      value: MsgRelayPythPricesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRelayPythPricesResponse.typeUrl, MsgRelayPythPricesResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams",
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
      typeUrl: "/injective.oracle.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.oracle.v1beta1.MsgUpdateParamsResponse",
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
      typeUrl: "/injective.oracle.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);