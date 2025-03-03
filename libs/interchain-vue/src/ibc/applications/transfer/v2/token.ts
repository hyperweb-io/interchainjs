import { Hop, HopAmino } from "../v1/transfer";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial } from "../../../../helpers";
/** Token defines a struct which represents a token to be transferred. */
export interface Token {
  /** the token denomination */
  denom: Denom;
  /** the token amount to be transferred */
  amount: string;
}
export interface TokenProtoMsg {
  typeUrl: "/ibc.applications.transfer.v2.Token";
  value: Uint8Array;
}
/** Token defines a struct which represents a token to be transferred. */
export interface TokenAmino {
  /** the token denomination */
  denom: DenomAmino;
  /** the token amount to be transferred */
  amount: string;
}
export interface TokenAminoMsg {
  type: "cosmos-sdk/Token";
  value: TokenAmino;
}
/** Denom holds the base denom of a Token and a trace of the chains it was sent through. */
export interface Denom {
  /** the base token denomination */
  base: string;
  /** the trace of the token */
  trace: Hop[];
}
export interface DenomProtoMsg {
  typeUrl: "/ibc.applications.transfer.v2.Denom";
  value: Uint8Array;
}
/** Denom holds the base denom of a Token and a trace of the chains it was sent through. */
export interface DenomAmino {
  /** the base token denomination */
  base: string;
  /** the trace of the token */
  trace: HopAmino[];
}
export interface DenomAminoMsg {
  type: "cosmos-sdk/Denom";
  value: DenomAmino;
}
function createBaseToken(): Token {
  return {
    denom: Denom.fromPartial({}),
    amount: ""
  };
}
export const Token = {
  typeUrl: "/ibc.applications.transfer.v2.Token",
  aminoType: "cosmos-sdk/Token",
  is(o: any): o is Token {
    return o && (o.$typeUrl === Token.typeUrl || Denom.is(o.denom) && typeof o.amount === "string");
  },
  isAmino(o: any): o is TokenAmino {
    return o && (o.$typeUrl === Token.typeUrl || Denom.isAmino(o.denom) && typeof o.amount === "string");
  },
  encode(message: Token, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Token {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Token>): Token {
    const message = createBaseToken();
    message.denom = object.denom !== undefined && object.denom !== null ? Denom.fromPartial(object.denom) : undefined;
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: TokenAmino): Token {
    const message = createBaseToken();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromAmino(object.denom);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: Token): TokenAmino {
    const obj: any = {};
    obj.denom = message.denom ? Denom.toAmino(message.denom) : undefined;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: TokenAminoMsg): Token {
    return Token.fromAmino(object.value);
  },
  toAminoMsg(message: Token): TokenAminoMsg {
    return {
      type: "cosmos-sdk/Token",
      value: Token.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenProtoMsg): Token {
    return Token.decode(message.value);
  },
  toProto(message: Token): Uint8Array {
    return Token.encode(message).finish();
  },
  toProtoMsg(message: Token): TokenProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v2.Token",
      value: Token.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Token.typeUrl, Token);
GlobalDecoderRegistry.registerAminoProtoMapping(Token.aminoType, Token.typeUrl);
function createBaseDenom(): Denom {
  return {
    base: "",
    trace: []
  };
}
export const Denom = {
  typeUrl: "/ibc.applications.transfer.v2.Denom",
  aminoType: "cosmos-sdk/Denom",
  is(o: any): o is Denom {
    return o && (o.$typeUrl === Denom.typeUrl || typeof o.base === "string" && Array.isArray(o.trace) && (!o.trace.length || Hop.is(o.trace[0])));
  },
  isAmino(o: any): o is DenomAmino {
    return o && (o.$typeUrl === Denom.typeUrl || typeof o.base === "string" && Array.isArray(o.trace) && (!o.trace.length || Hop.isAmino(o.trace[0])));
  },
  encode(message: Denom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    for (const v of message.trace) {
      Hop.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Denom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 3:
          message.trace.push(Hop.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = createBaseDenom();
    message.base = object.base ?? "";
    message.trace = object.trace?.map(e => Hop.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DenomAmino): Denom {
    const message = createBaseDenom();
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    message.trace = object.trace?.map(e => Hop.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Denom): DenomAmino {
    const obj: any = {};
    obj.base = message.base === "" ? undefined : message.base;
    if (message.trace) {
      obj.trace = message.trace.map(e => e ? Hop.toAmino(e) : undefined);
    } else {
      obj.trace = message.trace;
    }
    return obj;
  },
  fromAminoMsg(object: DenomAminoMsg): Denom {
    return Denom.fromAmino(object.value);
  },
  toAminoMsg(message: Denom): DenomAminoMsg {
    return {
      type: "cosmos-sdk/Denom",
      value: Denom.toAmino(message)
    };
  },
  fromProtoMsg(message: DenomProtoMsg): Denom {
    return Denom.decode(message.value);
  },
  toProto(message: Denom): Uint8Array {
    return Denom.encode(message).finish();
  },
  toProtoMsg(message: Denom): DenomProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v2.Denom",
      value: Denom.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Denom.typeUrl, Denom);
GlobalDecoderRegistry.registerAminoProtoMapping(Denom.aminoType, Denom.typeUrl);