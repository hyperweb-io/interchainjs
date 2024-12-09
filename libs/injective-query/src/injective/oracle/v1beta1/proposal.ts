import { BandOracleRequest, BandOracleRequestAmino, BandIBCParams, BandIBCParamsAmino } from "./oracle";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface GrantBandOraclePrivilegeProposal {
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal";
  value: Uint8Array;
}
export interface GrantBandOraclePrivilegeProposalAmino {
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalAminoMsg {
  type: "oracle/GrantBandOraclePrivilegeProposal";
  value: GrantBandOraclePrivilegeProposalAmino;
}
export interface RevokeBandOraclePrivilegeProposal {
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal";
  value: Uint8Array;
}
export interface RevokeBandOraclePrivilegeProposalAmino {
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalAminoMsg {
  type: "oracle/RevokeBandOraclePrivilegeProposal";
  value: RevokeBandOraclePrivilegeProposalAmino;
}
export interface GrantPriceFeederPrivilegeProposal {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal";
  value: Uint8Array;
}
export interface GrantPriceFeederPrivilegeProposalAmino {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalAminoMsg {
  type: "oracle/GrantPriceFeederPrivilegeProposal";
  value: GrantPriceFeederPrivilegeProposalAmino;
}
export interface GrantProviderPrivilegeProposal {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal";
  value: Uint8Array;
}
export interface GrantProviderPrivilegeProposalAmino {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposalAminoMsg {
  type: "oracle/GrantProviderPrivilegeProposal";
  value: GrantProviderPrivilegeProposalAmino;
}
export interface RevokeProviderPrivilegeProposal {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal";
  value: Uint8Array;
}
export interface RevokeProviderPrivilegeProposalAmino {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposalAminoMsg {
  type: "oracle/RevokeProviderPrivilegeProposal";
  value: RevokeProviderPrivilegeProposalAmino;
}
export interface RevokePriceFeederPrivilegeProposal {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal";
  value: Uint8Array;
}
export interface RevokePriceFeederPrivilegeProposalAmino {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalAminoMsg {
  type: "oracle/RevokePriceFeederPrivilegeProposal";
  value: RevokePriceFeederPrivilegeProposalAmino;
}
export interface AuthorizeBandOracleRequestProposal {
  title: string;
  description: string;
  request: BandOracleRequest;
}
export interface AuthorizeBandOracleRequestProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal";
  value: Uint8Array;
}
export interface AuthorizeBandOracleRequestProposalAmino {
  title: string;
  description: string;
  request: BandOracleRequestAmino;
}
export interface AuthorizeBandOracleRequestProposalAminoMsg {
  type: "oracle/AuthorizeBandOracleRequestProposal";
  value: AuthorizeBandOracleRequestProposalAmino;
}
export interface UpdateBandOracleRequestProposal {
  title: string;
  description: string;
  deleteRequestIds: bigint[];
  updateOracleRequest?: BandOracleRequest;
}
export interface UpdateBandOracleRequestProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal";
  value: Uint8Array;
}
export interface UpdateBandOracleRequestProposalAmino {
  title: string;
  description: string;
  delete_request_ids: string[];
  update_oracle_request?: BandOracleRequestAmino;
}
export interface UpdateBandOracleRequestProposalAminoMsg {
  type: "oracle/UpdateBandOracleRequestProposal";
  value: UpdateBandOracleRequestProposalAmino;
}
export interface EnableBandIBCProposal {
  title: string;
  description: string;
  bandIbcParams: BandIBCParams;
}
export interface EnableBandIBCProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal";
  value: Uint8Array;
}
export interface EnableBandIBCProposalAmino {
  title: string;
  description: string;
  band_ibc_params: BandIBCParamsAmino;
}
export interface EnableBandIBCProposalAminoMsg {
  type: "oracle/EnableBandIBCProposal";
  value: EnableBandIBCProposalAmino;
}
export interface GrantStorkPublisherPrivilegeProposal {
  title: string;
  description: string;
  storkPublishers: string[];
}
export interface GrantStorkPublisherPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantStorkPublisherPrivilegeProposal";
  value: Uint8Array;
}
export interface GrantStorkPublisherPrivilegeProposalAmino {
  title: string;
  description: string;
  stork_publishers: string[];
}
export interface GrantStorkPublisherPrivilegeProposalAminoMsg {
  type: "oracle/GrantStorkPublisherPrivilegeProposal";
  value: GrantStorkPublisherPrivilegeProposalAmino;
}
export interface RevokeStorkPublisherPrivilegeProposal {
  title: string;
  description: string;
  storkPublishers: string[];
}
export interface RevokeStorkPublisherPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokeStorkPublisherPrivilegeProposal";
  value: Uint8Array;
}
export interface RevokeStorkPublisherPrivilegeProposalAmino {
  title: string;
  description: string;
  stork_publishers: string[];
}
export interface RevokeStorkPublisherPrivilegeProposalAminoMsg {
  type: "oracle/RevokeStorkPublisherPrivilegeProposal";
  value: RevokeStorkPublisherPrivilegeProposalAmino;
}
function createBaseGrantBandOraclePrivilegeProposal(): GrantBandOraclePrivilegeProposal {
  return {
    title: "",
    description: "",
    relayers: []
  };
}
export const GrantBandOraclePrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
  aminoType: "oracle/GrantBandOraclePrivilegeProposal",
  is(o: any): o is GrantBandOraclePrivilegeProposal {
    return o && (o.$typeUrl === GrantBandOraclePrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isAmino(o: any): o is GrantBandOraclePrivilegeProposalAmino {
    return o && (o.$typeUrl === GrantBandOraclePrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  encode(message: GrantBandOraclePrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantBandOraclePrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantBandOraclePrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GrantBandOraclePrivilegeProposal>): GrantBandOraclePrivilegeProposal {
    const message = createBaseGrantBandOraclePrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GrantBandOraclePrivilegeProposalAmino): GrantBandOraclePrivilegeProposal {
    const message = createBaseGrantBandOraclePrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: GrantBandOraclePrivilegeProposalAminoMsg): GrantBandOraclePrivilegeProposal {
    return GrantBandOraclePrivilegeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalAminoMsg {
    return {
      type: "oracle/GrantBandOraclePrivilegeProposal",
      value: GrantBandOraclePrivilegeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantBandOraclePrivilegeProposalProtoMsg): GrantBandOraclePrivilegeProposal {
    return GrantBandOraclePrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantBandOraclePrivilegeProposal): Uint8Array {
    return GrantBandOraclePrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
      value: GrantBandOraclePrivilegeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GrantBandOraclePrivilegeProposal.typeUrl, GrantBandOraclePrivilegeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(GrantBandOraclePrivilegeProposal.aminoType, GrantBandOraclePrivilegeProposal.typeUrl);
function createBaseRevokeBandOraclePrivilegeProposal(): RevokeBandOraclePrivilegeProposal {
  return {
    title: "",
    description: "",
    relayers: []
  };
}
export const RevokeBandOraclePrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
  aminoType: "oracle/RevokeBandOraclePrivilegeProposal",
  is(o: any): o is RevokeBandOraclePrivilegeProposal {
    return o && (o.$typeUrl === RevokeBandOraclePrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isAmino(o: any): o is RevokeBandOraclePrivilegeProposalAmino {
    return o && (o.$typeUrl === RevokeBandOraclePrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  encode(message: RevokeBandOraclePrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevokeBandOraclePrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeBandOraclePrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RevokeBandOraclePrivilegeProposal>): RevokeBandOraclePrivilegeProposal {
    const message = createBaseRevokeBandOraclePrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RevokeBandOraclePrivilegeProposalAmino): RevokeBandOraclePrivilegeProposal {
    const message = createBaseRevokeBandOraclePrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: RevokeBandOraclePrivilegeProposalAminoMsg): RevokeBandOraclePrivilegeProposal {
    return RevokeBandOraclePrivilegeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalAminoMsg {
    return {
      type: "oracle/RevokeBandOraclePrivilegeProposal",
      value: RevokeBandOraclePrivilegeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: RevokeBandOraclePrivilegeProposalProtoMsg): RevokeBandOraclePrivilegeProposal {
    return RevokeBandOraclePrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokeBandOraclePrivilegeProposal): Uint8Array {
    return RevokeBandOraclePrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
      value: RevokeBandOraclePrivilegeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RevokeBandOraclePrivilegeProposal.typeUrl, RevokeBandOraclePrivilegeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(RevokeBandOraclePrivilegeProposal.aminoType, RevokeBandOraclePrivilegeProposal.typeUrl);
function createBaseGrantPriceFeederPrivilegeProposal(): GrantPriceFeederPrivilegeProposal {
  return {
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}
export const GrantPriceFeederPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
  aminoType: "oracle/GrantPriceFeederPrivilegeProposal",
  is(o: any): o is GrantPriceFeederPrivilegeProposal {
    return o && (o.$typeUrl === GrantPriceFeederPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.base === "string" && typeof o.quote === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isAmino(o: any): o is GrantPriceFeederPrivilegeProposalAmino {
    return o && (o.$typeUrl === GrantPriceFeederPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.base === "string" && typeof o.quote === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  encode(message: GrantPriceFeederPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(34).string(message.quote);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantPriceFeederPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantPriceFeederPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.quote = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GrantPriceFeederPrivilegeProposal>): GrantPriceFeederPrivilegeProposal {
    const message = createBaseGrantPriceFeederPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GrantPriceFeederPrivilegeProposalAmino): GrantPriceFeederPrivilegeProposal {
    const message = createBaseGrantPriceFeederPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: GrantPriceFeederPrivilegeProposalAminoMsg): GrantPriceFeederPrivilegeProposal {
    return GrantPriceFeederPrivilegeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalAminoMsg {
    return {
      type: "oracle/GrantPriceFeederPrivilegeProposal",
      value: GrantPriceFeederPrivilegeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantPriceFeederPrivilegeProposalProtoMsg): GrantPriceFeederPrivilegeProposal {
    return GrantPriceFeederPrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantPriceFeederPrivilegeProposal): Uint8Array {
    return GrantPriceFeederPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
      value: GrantPriceFeederPrivilegeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GrantPriceFeederPrivilegeProposal.typeUrl, GrantPriceFeederPrivilegeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(GrantPriceFeederPrivilegeProposal.aminoType, GrantPriceFeederPrivilegeProposal.typeUrl);
function createBaseGrantProviderPrivilegeProposal(): GrantProviderPrivilegeProposal {
  return {
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}
export const GrantProviderPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
  aminoType: "oracle/GrantProviderPrivilegeProposal",
  is(o: any): o is GrantProviderPrivilegeProposal {
    return o && (o.$typeUrl === GrantProviderPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.provider === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isAmino(o: any): o is GrantProviderPrivilegeProposalAmino {
    return o && (o.$typeUrl === GrantProviderPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.provider === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  encode(message: GrantProviderPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    for (const v of message.relayers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantProviderPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantProviderPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 4:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GrantProviderPrivilegeProposal>): GrantProviderPrivilegeProposal {
    const message = createBaseGrantProviderPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GrantProviderPrivilegeProposalAmino): GrantProviderPrivilegeProposal {
    const message = createBaseGrantProviderPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.provider = message.provider === "" ? undefined : message.provider;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: GrantProviderPrivilegeProposalAminoMsg): GrantProviderPrivilegeProposal {
    return GrantProviderPrivilegeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalAminoMsg {
    return {
      type: "oracle/GrantProviderPrivilegeProposal",
      value: GrantProviderPrivilegeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantProviderPrivilegeProposalProtoMsg): GrantProviderPrivilegeProposal {
    return GrantProviderPrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantProviderPrivilegeProposal): Uint8Array {
    return GrantProviderPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
      value: GrantProviderPrivilegeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GrantProviderPrivilegeProposal.typeUrl, GrantProviderPrivilegeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(GrantProviderPrivilegeProposal.aminoType, GrantProviderPrivilegeProposal.typeUrl);
function createBaseRevokeProviderPrivilegeProposal(): RevokeProviderPrivilegeProposal {
  return {
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}
export const RevokeProviderPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
  aminoType: "oracle/RevokeProviderPrivilegeProposal",
  is(o: any): o is RevokeProviderPrivilegeProposal {
    return o && (o.$typeUrl === RevokeProviderPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.provider === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isAmino(o: any): o is RevokeProviderPrivilegeProposalAmino {
    return o && (o.$typeUrl === RevokeProviderPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.provider === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  encode(message: RevokeProviderPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevokeProviderPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeProviderPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.provider = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RevokeProviderPrivilegeProposal>): RevokeProviderPrivilegeProposal {
    const message = createBaseRevokeProviderPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RevokeProviderPrivilegeProposalAmino): RevokeProviderPrivilegeProposal {
    const message = createBaseRevokeProviderPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.provider = message.provider === "" ? undefined : message.provider;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: RevokeProviderPrivilegeProposalAminoMsg): RevokeProviderPrivilegeProposal {
    return RevokeProviderPrivilegeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalAminoMsg {
    return {
      type: "oracle/RevokeProviderPrivilegeProposal",
      value: RevokeProviderPrivilegeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: RevokeProviderPrivilegeProposalProtoMsg): RevokeProviderPrivilegeProposal {
    return RevokeProviderPrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokeProviderPrivilegeProposal): Uint8Array {
    return RevokeProviderPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
      value: RevokeProviderPrivilegeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RevokeProviderPrivilegeProposal.typeUrl, RevokeProviderPrivilegeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(RevokeProviderPrivilegeProposal.aminoType, RevokeProviderPrivilegeProposal.typeUrl);
function createBaseRevokePriceFeederPrivilegeProposal(): RevokePriceFeederPrivilegeProposal {
  return {
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}
export const RevokePriceFeederPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
  aminoType: "oracle/RevokePriceFeederPrivilegeProposal",
  is(o: any): o is RevokePriceFeederPrivilegeProposal {
    return o && (o.$typeUrl === RevokePriceFeederPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.base === "string" && typeof o.quote === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  isAmino(o: any): o is RevokePriceFeederPrivilegeProposalAmino {
    return o && (o.$typeUrl === RevokePriceFeederPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.base === "string" && typeof o.quote === "string" && Array.isArray(o.relayers) && (!o.relayers.length || typeof o.relayers[0] === "string"));
  },
  encode(message: RevokePriceFeederPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(34).string(message.quote);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevokePriceFeederPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokePriceFeederPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.quote = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RevokePriceFeederPrivilegeProposal>): RevokePriceFeederPrivilegeProposal {
    const message = createBaseRevokePriceFeederPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RevokePriceFeederPrivilegeProposalAmino): RevokePriceFeederPrivilegeProposal {
    const message = createBaseRevokePriceFeederPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.quote !== undefined && object.quote !== null) {
      message.quote = object.quote;
    }
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  toAmino(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.base = message.base === "" ? undefined : message.base;
    obj.quote = message.quote === "" ? undefined : message.quote;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: RevokePriceFeederPrivilegeProposalAminoMsg): RevokePriceFeederPrivilegeProposal {
    return RevokePriceFeederPrivilegeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalAminoMsg {
    return {
      type: "oracle/RevokePriceFeederPrivilegeProposal",
      value: RevokePriceFeederPrivilegeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: RevokePriceFeederPrivilegeProposalProtoMsg): RevokePriceFeederPrivilegeProposal {
    return RevokePriceFeederPrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokePriceFeederPrivilegeProposal): Uint8Array {
    return RevokePriceFeederPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
      value: RevokePriceFeederPrivilegeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RevokePriceFeederPrivilegeProposal.typeUrl, RevokePriceFeederPrivilegeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(RevokePriceFeederPrivilegeProposal.aminoType, RevokePriceFeederPrivilegeProposal.typeUrl);
function createBaseAuthorizeBandOracleRequestProposal(): AuthorizeBandOracleRequestProposal {
  return {
    title: "",
    description: "",
    request: BandOracleRequest.fromPartial({})
  };
}
export const AuthorizeBandOracleRequestProposal = {
  typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
  aminoType: "oracle/AuthorizeBandOracleRequestProposal",
  is(o: any): o is AuthorizeBandOracleRequestProposal {
    return o && (o.$typeUrl === AuthorizeBandOracleRequestProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && BandOracleRequest.is(o.request));
  },
  isAmino(o: any): o is AuthorizeBandOracleRequestProposalAmino {
    return o && (o.$typeUrl === AuthorizeBandOracleRequestProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && BandOracleRequest.isAmino(o.request));
  },
  encode(message: AuthorizeBandOracleRequestProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.request !== undefined) {
      BandOracleRequest.encode(message.request, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthorizeBandOracleRequestProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthorizeBandOracleRequestProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.request = BandOracleRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AuthorizeBandOracleRequestProposal>): AuthorizeBandOracleRequestProposal {
    const message = createBaseAuthorizeBandOracleRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.request = object.request !== undefined && object.request !== null ? BandOracleRequest.fromPartial(object.request) : undefined;
    return message;
  },
  fromAmino(object: AuthorizeBandOracleRequestProposalAmino): AuthorizeBandOracleRequestProposal {
    const message = createBaseAuthorizeBandOracleRequestProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.request !== undefined && object.request !== null) {
      message.request = BandOracleRequest.fromAmino(object.request);
    }
    return message;
  },
  toAmino(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.request = message.request ? BandOracleRequest.toAmino(message.request) : undefined;
    return obj;
  },
  fromAminoMsg(object: AuthorizeBandOracleRequestProposalAminoMsg): AuthorizeBandOracleRequestProposal {
    return AuthorizeBandOracleRequestProposal.fromAmino(object.value);
  },
  toAminoMsg(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalAminoMsg {
    return {
      type: "oracle/AuthorizeBandOracleRequestProposal",
      value: AuthorizeBandOracleRequestProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: AuthorizeBandOracleRequestProposalProtoMsg): AuthorizeBandOracleRequestProposal {
    return AuthorizeBandOracleRequestProposal.decode(message.value);
  },
  toProto(message: AuthorizeBandOracleRequestProposal): Uint8Array {
    return AuthorizeBandOracleRequestProposal.encode(message).finish();
  },
  toProtoMsg(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
      value: AuthorizeBandOracleRequestProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AuthorizeBandOracleRequestProposal.typeUrl, AuthorizeBandOracleRequestProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(AuthorizeBandOracleRequestProposal.aminoType, AuthorizeBandOracleRequestProposal.typeUrl);
function createBaseUpdateBandOracleRequestProposal(): UpdateBandOracleRequestProposal {
  return {
    title: "",
    description: "",
    deleteRequestIds: [],
    updateOracleRequest: undefined
  };
}
export const UpdateBandOracleRequestProposal = {
  typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
  aminoType: "oracle/UpdateBandOracleRequestProposal",
  is(o: any): o is UpdateBandOracleRequestProposal {
    return o && (o.$typeUrl === UpdateBandOracleRequestProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.deleteRequestIds) && (!o.deleteRequestIds.length || typeof o.deleteRequestIds[0] === "bigint"));
  },
  isAmino(o: any): o is UpdateBandOracleRequestProposalAmino {
    return o && (o.$typeUrl === UpdateBandOracleRequestProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.delete_request_ids) && (!o.delete_request_ids.length || typeof o.delete_request_ids[0] === "bigint"));
  },
  encode(message: UpdateBandOracleRequestProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.deleteRequestIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.updateOracleRequest !== undefined) {
      BandOracleRequest.encode(message.updateOracleRequest, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateBandOracleRequestProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateBandOracleRequestProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deleteRequestIds.push(reader.uint64());
            }
          } else {
            message.deleteRequestIds.push(reader.uint64());
          }
          break;
        case 4:
          message.updateOracleRequest = BandOracleRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateBandOracleRequestProposal>): UpdateBandOracleRequestProposal {
    const message = createBaseUpdateBandOracleRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.deleteRequestIds = object.deleteRequestIds?.map(e => BigInt(e.toString())) || [];
    message.updateOracleRequest = object.updateOracleRequest !== undefined && object.updateOracleRequest !== null ? BandOracleRequest.fromPartial(object.updateOracleRequest) : undefined;
    return message;
  },
  fromAmino(object: UpdateBandOracleRequestProposalAmino): UpdateBandOracleRequestProposal {
    const message = createBaseUpdateBandOracleRequestProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.deleteRequestIds = object.delete_request_ids?.map(e => BigInt(e)) || [];
    if (object.update_oracle_request !== undefined && object.update_oracle_request !== null) {
      message.updateOracleRequest = BandOracleRequest.fromAmino(object.update_oracle_request);
    }
    return message;
  },
  toAmino(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.deleteRequestIds) {
      obj.delete_request_ids = message.deleteRequestIds.map(e => e.toString());
    } else {
      obj.delete_request_ids = message.deleteRequestIds;
    }
    obj.update_oracle_request = message.updateOracleRequest ? BandOracleRequest.toAmino(message.updateOracleRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateBandOracleRequestProposalAminoMsg): UpdateBandOracleRequestProposal {
    return UpdateBandOracleRequestProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalAminoMsg {
    return {
      type: "oracle/UpdateBandOracleRequestProposal",
      value: UpdateBandOracleRequestProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdateBandOracleRequestProposalProtoMsg): UpdateBandOracleRequestProposal {
    return UpdateBandOracleRequestProposal.decode(message.value);
  },
  toProto(message: UpdateBandOracleRequestProposal): Uint8Array {
    return UpdateBandOracleRequestProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
      value: UpdateBandOracleRequestProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(UpdateBandOracleRequestProposal.typeUrl, UpdateBandOracleRequestProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(UpdateBandOracleRequestProposal.aminoType, UpdateBandOracleRequestProposal.typeUrl);
function createBaseEnableBandIBCProposal(): EnableBandIBCProposal {
  return {
    title: "",
    description: "",
    bandIbcParams: BandIBCParams.fromPartial({})
  };
}
export const EnableBandIBCProposal = {
  typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
  aminoType: "oracle/EnableBandIBCProposal",
  is(o: any): o is EnableBandIBCProposal {
    return o && (o.$typeUrl === EnableBandIBCProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && BandIBCParams.is(o.bandIbcParams));
  },
  isAmino(o: any): o is EnableBandIBCProposalAmino {
    return o && (o.$typeUrl === EnableBandIBCProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && BandIBCParams.isAmino(o.band_ibc_params));
  },
  encode(message: EnableBandIBCProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.bandIbcParams !== undefined) {
      BandIBCParams.encode(message.bandIbcParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnableBandIBCProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableBandIBCProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.bandIbcParams = BandIBCParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EnableBandIBCProposal>): EnableBandIBCProposal {
    const message = createBaseEnableBandIBCProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
    return message;
  },
  fromAmino(object: EnableBandIBCProposalAmino): EnableBandIBCProposal {
    const message = createBaseEnableBandIBCProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.band_ibc_params !== undefined && object.band_ibc_params !== null) {
      message.bandIbcParams = BandIBCParams.fromAmino(object.band_ibc_params);
    }
    return message;
  },
  toAmino(message: EnableBandIBCProposal): EnableBandIBCProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.band_ibc_params = message.bandIbcParams ? BandIBCParams.toAmino(message.bandIbcParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: EnableBandIBCProposalAminoMsg): EnableBandIBCProposal {
    return EnableBandIBCProposal.fromAmino(object.value);
  },
  toAminoMsg(message: EnableBandIBCProposal): EnableBandIBCProposalAminoMsg {
    return {
      type: "oracle/EnableBandIBCProposal",
      value: EnableBandIBCProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: EnableBandIBCProposalProtoMsg): EnableBandIBCProposal {
    return EnableBandIBCProposal.decode(message.value);
  },
  toProto(message: EnableBandIBCProposal): Uint8Array {
    return EnableBandIBCProposal.encode(message).finish();
  },
  toProtoMsg(message: EnableBandIBCProposal): EnableBandIBCProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
      value: EnableBandIBCProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EnableBandIBCProposal.typeUrl, EnableBandIBCProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(EnableBandIBCProposal.aminoType, EnableBandIBCProposal.typeUrl);
function createBaseGrantStorkPublisherPrivilegeProposal(): GrantStorkPublisherPrivilegeProposal {
  return {
    title: "",
    description: "",
    storkPublishers: []
  };
}
export const GrantStorkPublisherPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantStorkPublisherPrivilegeProposal",
  aminoType: "oracle/GrantStorkPublisherPrivilegeProposal",
  is(o: any): o is GrantStorkPublisherPrivilegeProposal {
    return o && (o.$typeUrl === GrantStorkPublisherPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.storkPublishers) && (!o.storkPublishers.length || typeof o.storkPublishers[0] === "string"));
  },
  isAmino(o: any): o is GrantStorkPublisherPrivilegeProposalAmino {
    return o && (o.$typeUrl === GrantStorkPublisherPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.stork_publishers) && (!o.stork_publishers.length || typeof o.stork_publishers[0] === "string"));
  },
  encode(message: GrantStorkPublisherPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.storkPublishers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantStorkPublisherPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantStorkPublisherPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.storkPublishers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GrantStorkPublisherPrivilegeProposal>): GrantStorkPublisherPrivilegeProposal {
    const message = createBaseGrantStorkPublisherPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.storkPublishers = object.storkPublishers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GrantStorkPublisherPrivilegeProposalAmino): GrantStorkPublisherPrivilegeProposal {
    const message = createBaseGrantStorkPublisherPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.storkPublishers = object.stork_publishers?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantStorkPublisherPrivilegeProposal): GrantStorkPublisherPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.storkPublishers) {
      obj.stork_publishers = message.storkPublishers.map(e => e);
    } else {
      obj.stork_publishers = message.storkPublishers;
    }
    return obj;
  },
  fromAminoMsg(object: GrantStorkPublisherPrivilegeProposalAminoMsg): GrantStorkPublisherPrivilegeProposal {
    return GrantStorkPublisherPrivilegeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: GrantStorkPublisherPrivilegeProposal): GrantStorkPublisherPrivilegeProposalAminoMsg {
    return {
      type: "oracle/GrantStorkPublisherPrivilegeProposal",
      value: GrantStorkPublisherPrivilegeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantStorkPublisherPrivilegeProposalProtoMsg): GrantStorkPublisherPrivilegeProposal {
    return GrantStorkPublisherPrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantStorkPublisherPrivilegeProposal): Uint8Array {
    return GrantStorkPublisherPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantStorkPublisherPrivilegeProposal): GrantStorkPublisherPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantStorkPublisherPrivilegeProposal",
      value: GrantStorkPublisherPrivilegeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GrantStorkPublisherPrivilegeProposal.typeUrl, GrantStorkPublisherPrivilegeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(GrantStorkPublisherPrivilegeProposal.aminoType, GrantStorkPublisherPrivilegeProposal.typeUrl);
function createBaseRevokeStorkPublisherPrivilegeProposal(): RevokeStorkPublisherPrivilegeProposal {
  return {
    title: "",
    description: "",
    storkPublishers: []
  };
}
export const RevokeStorkPublisherPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokeStorkPublisherPrivilegeProposal",
  aminoType: "oracle/RevokeStorkPublisherPrivilegeProposal",
  is(o: any): o is RevokeStorkPublisherPrivilegeProposal {
    return o && (o.$typeUrl === RevokeStorkPublisherPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.storkPublishers) && (!o.storkPublishers.length || typeof o.storkPublishers[0] === "string"));
  },
  isAmino(o: any): o is RevokeStorkPublisherPrivilegeProposalAmino {
    return o && (o.$typeUrl === RevokeStorkPublisherPrivilegeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.stork_publishers) && (!o.stork_publishers.length || typeof o.stork_publishers[0] === "string"));
  },
  encode(message: RevokeStorkPublisherPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.storkPublishers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RevokeStorkPublisherPrivilegeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRevokeStorkPublisherPrivilegeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.storkPublishers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RevokeStorkPublisherPrivilegeProposal>): RevokeStorkPublisherPrivilegeProposal {
    const message = createBaseRevokeStorkPublisherPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.storkPublishers = object.storkPublishers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RevokeStorkPublisherPrivilegeProposalAmino): RevokeStorkPublisherPrivilegeProposal {
    const message = createBaseRevokeStorkPublisherPrivilegeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.storkPublishers = object.stork_publishers?.map(e => e) || [];
    return message;
  },
  toAmino(message: RevokeStorkPublisherPrivilegeProposal): RevokeStorkPublisherPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.storkPublishers) {
      obj.stork_publishers = message.storkPublishers.map(e => e);
    } else {
      obj.stork_publishers = message.storkPublishers;
    }
    return obj;
  },
  fromAminoMsg(object: RevokeStorkPublisherPrivilegeProposalAminoMsg): RevokeStorkPublisherPrivilegeProposal {
    return RevokeStorkPublisherPrivilegeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: RevokeStorkPublisherPrivilegeProposal): RevokeStorkPublisherPrivilegeProposalAminoMsg {
    return {
      type: "oracle/RevokeStorkPublisherPrivilegeProposal",
      value: RevokeStorkPublisherPrivilegeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: RevokeStorkPublisherPrivilegeProposalProtoMsg): RevokeStorkPublisherPrivilegeProposal {
    return RevokeStorkPublisherPrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokeStorkPublisherPrivilegeProposal): Uint8Array {
    return RevokeStorkPublisherPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokeStorkPublisherPrivilegeProposal): RevokeStorkPublisherPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokeStorkPublisherPrivilegeProposal",
      value: RevokeStorkPublisherPrivilegeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RevokeStorkPublisherPrivilegeProposal.typeUrl, RevokeStorkPublisherPrivilegeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(RevokeStorkPublisherPrivilegeProposal.aminoType, RevokeStorkPublisherPrivilegeProposal.typeUrl);