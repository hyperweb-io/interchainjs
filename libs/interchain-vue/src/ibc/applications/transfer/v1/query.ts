import { Params, ParamsAmino } from "./transfer";
import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
  /** The denomination trace ([port_id]/[channel_id])+/[denom] */
  trace: string;
}
export interface QueryDenomHashRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest";
  value: Uint8Array;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequestAmino {
  /** The denomination trace ([port_id]/[channel_id])+/[denom] */
  trace: string;
}
export interface QueryDenomHashRequestAminoMsg {
  type: "cosmos-sdk/QueryDenomHashRequest";
  value: QueryDenomHashRequestAmino;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}
export interface QueryDenomHashResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse";
  value: Uint8Array;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponseAmino {
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}
export interface QueryDenomHashResponseAminoMsg {
  type: "cosmos-sdk/QueryDenomHashResponse";
  value: QueryDenomHashResponseAmino;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
export interface QueryEscrowAddressRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest";
  value: Uint8Array;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequestAmino {
  /** unique port identifier */
  port_id: string;
  /** unique channel identifier */
  channel_id: string;
}
export interface QueryEscrowAddressRequestAminoMsg {
  type: "cosmos-sdk/QueryEscrowAddressRequest";
  value: QueryEscrowAddressRequestAmino;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
  /** the escrow account address */
  escrowAddress: string;
}
export interface QueryEscrowAddressResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse";
  value: Uint8Array;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseAmino {
  /** the escrow account address */
  escrow_address: string;
}
export interface QueryEscrowAddressResponseAminoMsg {
  type: "cosmos-sdk/QueryEscrowAddressResponse";
  value: QueryEscrowAddressResponseAmino;
}
/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomRequest {
  denom: string;
}
export interface QueryTotalEscrowForDenomRequestProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest";
  value: Uint8Array;
}
/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomRequestAmino {
  denom: string;
}
export interface QueryTotalEscrowForDenomRequestAminoMsg {
  type: "cosmos-sdk/QueryTotalEscrowForDenomRequest";
  value: QueryTotalEscrowForDenomRequestAmino;
}
/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomResponse {
  amount: Coin;
}
export interface QueryTotalEscrowForDenomResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse";
  value: Uint8Array;
}
/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomResponseAmino {
  amount: CoinAmino;
}
export interface QueryTotalEscrowForDenomResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalEscrowForDenomResponse";
  value: QueryTotalEscrowForDenomResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseQueryDenomHashRequest(): QueryDenomHashRequest {
  return {
    trace: ""
  };
}
export const QueryDenomHashRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
  aminoType: "cosmos-sdk/QueryDenomHashRequest",
  is(o: any): o is QueryDenomHashRequest {
    return o && (o.$typeUrl === QueryDenomHashRequest.typeUrl || typeof o.trace === "string");
  },
  isAmino(o: any): o is QueryDenomHashRequestAmino {
    return o && (o.$typeUrl === QueryDenomHashRequest.typeUrl || typeof o.trace === "string");
  },
  encode(message: QueryDenomHashRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.trace !== "") {
      writer.uint32(10).string(message.trace);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomHashRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomHashRequest>): QueryDenomHashRequest {
    const message = createBaseQueryDenomHashRequest();
    message.trace = object.trace ?? "";
    return message;
  },
  fromAmino(object: QueryDenomHashRequestAmino): QueryDenomHashRequest {
    const message = createBaseQueryDenomHashRequest();
    if (object.trace !== undefined && object.trace !== null) {
      message.trace = object.trace;
    }
    return message;
  },
  toAmino(message: QueryDenomHashRequest): QueryDenomHashRequestAmino {
    const obj: any = {};
    obj.trace = message.trace === "" ? undefined : message.trace;
    return obj;
  },
  fromAminoMsg(object: QueryDenomHashRequestAminoMsg): QueryDenomHashRequest {
    return QueryDenomHashRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomHashRequest): QueryDenomHashRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomHashRequest",
      value: QueryDenomHashRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomHashRequestProtoMsg): QueryDenomHashRequest {
    return QueryDenomHashRequest.decode(message.value);
  },
  toProto(message: QueryDenomHashRequest): Uint8Array {
    return QueryDenomHashRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomHashRequest): QueryDenomHashRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
      value: QueryDenomHashRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDenomHashResponse(): QueryDenomHashResponse {
  return {
    hash: ""
  };
}
export const QueryDenomHashResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
  aminoType: "cosmos-sdk/QueryDenomHashResponse",
  is(o: any): o is QueryDenomHashResponse {
    return o && (o.$typeUrl === QueryDenomHashResponse.typeUrl || typeof o.hash === "string");
  },
  isAmino(o: any): o is QueryDenomHashResponseAmino {
    return o && (o.$typeUrl === QueryDenomHashResponse.typeUrl || typeof o.hash === "string");
  },
  encode(message: QueryDenomHashResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomHashResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomHashResponse>): QueryDenomHashResponse {
    const message = createBaseQueryDenomHashResponse();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryDenomHashResponseAmino): QueryDenomHashResponse {
    const message = createBaseQueryDenomHashResponse();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: QueryDenomHashResponse): QueryDenomHashResponseAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryDenomHashResponseAminoMsg): QueryDenomHashResponse {
    return QueryDenomHashResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDenomHashResponse): QueryDenomHashResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDenomHashResponse",
      value: QueryDenomHashResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDenomHashResponseProtoMsg): QueryDenomHashResponse {
    return QueryDenomHashResponse.decode(message.value);
  },
  toProto(message: QueryDenomHashResponse): Uint8Array {
    return QueryDenomHashResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomHashResponse): QueryDenomHashResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
      value: QueryDenomHashResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEscrowAddressRequest(): QueryEscrowAddressRequest {
  return {
    portId: "",
    channelId: ""
  };
}
export const QueryEscrowAddressRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
  aminoType: "cosmos-sdk/QueryEscrowAddressRequest",
  is(o: any): o is QueryEscrowAddressRequest {
    return o && (o.$typeUrl === QueryEscrowAddressRequest.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string");
  },
  isAmino(o: any): o is QueryEscrowAddressRequestAmino {
    return o && (o.$typeUrl === QueryEscrowAddressRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryEscrowAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEscrowAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEscrowAddressRequest>): QueryEscrowAddressRequest {
    const message = createBaseQueryEscrowAddressRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: QueryEscrowAddressRequestAmino): QueryEscrowAddressRequest {
    const message = createBaseQueryEscrowAddressRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryEscrowAddressRequestAminoMsg): QueryEscrowAddressRequest {
    return QueryEscrowAddressRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryEscrowAddressRequest",
      value: QueryEscrowAddressRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryEscrowAddressRequestProtoMsg): QueryEscrowAddressRequest {
    return QueryEscrowAddressRequest.decode(message.value);
  },
  toProto(message: QueryEscrowAddressRequest): Uint8Array {
    return QueryEscrowAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
      value: QueryEscrowAddressRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEscrowAddressResponse(): QueryEscrowAddressResponse {
  return {
    escrowAddress: ""
  };
}
export const QueryEscrowAddressResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
  aminoType: "cosmos-sdk/QueryEscrowAddressResponse",
  is(o: any): o is QueryEscrowAddressResponse {
    return o && (o.$typeUrl === QueryEscrowAddressResponse.typeUrl || typeof o.escrowAddress === "string");
  },
  isAmino(o: any): o is QueryEscrowAddressResponseAmino {
    return o && (o.$typeUrl === QueryEscrowAddressResponse.typeUrl || typeof o.escrow_address === "string");
  },
  encode(message: QueryEscrowAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.escrowAddress !== "") {
      writer.uint32(10).string(message.escrowAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEscrowAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrowAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEscrowAddressResponse>): QueryEscrowAddressResponse {
    const message = createBaseQueryEscrowAddressResponse();
    message.escrowAddress = object.escrowAddress ?? "";
    return message;
  },
  fromAmino(object: QueryEscrowAddressResponseAmino): QueryEscrowAddressResponse {
    const message = createBaseQueryEscrowAddressResponse();
    if (object.escrow_address !== undefined && object.escrow_address !== null) {
      message.escrowAddress = object.escrow_address;
    }
    return message;
  },
  toAmino(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseAmino {
    const obj: any = {};
    obj.escrow_address = message.escrowAddress === "" ? undefined : message.escrowAddress;
    return obj;
  },
  fromAminoMsg(object: QueryEscrowAddressResponseAminoMsg): QueryEscrowAddressResponse {
    return QueryEscrowAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryEscrowAddressResponse",
      value: QueryEscrowAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryEscrowAddressResponseProtoMsg): QueryEscrowAddressResponse {
    return QueryEscrowAddressResponse.decode(message.value);
  },
  toProto(message: QueryEscrowAddressResponse): Uint8Array {
    return QueryEscrowAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
      value: QueryEscrowAddressResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalEscrowForDenomRequest(): QueryTotalEscrowForDenomRequest {
  return {
    denom: ""
  };
}
export const QueryTotalEscrowForDenomRequest = {
  typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest",
  aminoType: "cosmos-sdk/QueryTotalEscrowForDenomRequest",
  is(o: any): o is QueryTotalEscrowForDenomRequest {
    return o && (o.$typeUrl === QueryTotalEscrowForDenomRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryTotalEscrowForDenomRequestAmino {
    return o && (o.$typeUrl === QueryTotalEscrowForDenomRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryTotalEscrowForDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalEscrowForDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalEscrowForDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalEscrowForDenomRequest>): QueryTotalEscrowForDenomRequest {
    const message = createBaseQueryTotalEscrowForDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTotalEscrowForDenomRequestAmino): QueryTotalEscrowForDenomRequest {
    const message = createBaseQueryTotalEscrowForDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryTotalEscrowForDenomRequest): QueryTotalEscrowForDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTotalEscrowForDenomRequestAminoMsg): QueryTotalEscrowForDenomRequest {
    return QueryTotalEscrowForDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalEscrowForDenomRequest): QueryTotalEscrowForDenomRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalEscrowForDenomRequest",
      value: QueryTotalEscrowForDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalEscrowForDenomRequestProtoMsg): QueryTotalEscrowForDenomRequest {
    return QueryTotalEscrowForDenomRequest.decode(message.value);
  },
  toProto(message: QueryTotalEscrowForDenomRequest): Uint8Array {
    return QueryTotalEscrowForDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalEscrowForDenomRequest): QueryTotalEscrowForDenomRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest",
      value: QueryTotalEscrowForDenomRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTotalEscrowForDenomResponse(): QueryTotalEscrowForDenomResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryTotalEscrowForDenomResponse = {
  typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse",
  aminoType: "cosmos-sdk/QueryTotalEscrowForDenomResponse",
  is(o: any): o is QueryTotalEscrowForDenomResponse {
    return o && (o.$typeUrl === QueryTotalEscrowForDenomResponse.typeUrl || Coin.is(o.amount));
  },
  isAmino(o: any): o is QueryTotalEscrowForDenomResponseAmino {
    return o && (o.$typeUrl === QueryTotalEscrowForDenomResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: QueryTotalEscrowForDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalEscrowForDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalEscrowForDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTotalEscrowForDenomResponse>): QueryTotalEscrowForDenomResponse {
    const message = createBaseQueryTotalEscrowForDenomResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalEscrowForDenomResponseAmino): QueryTotalEscrowForDenomResponse {
    const message = createBaseQueryTotalEscrowForDenomResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryTotalEscrowForDenomResponse): QueryTotalEscrowForDenomResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalEscrowForDenomResponseAminoMsg): QueryTotalEscrowForDenomResponse {
    return QueryTotalEscrowForDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalEscrowForDenomResponse): QueryTotalEscrowForDenomResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalEscrowForDenomResponse",
      value: QueryTotalEscrowForDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalEscrowForDenomResponseProtoMsg): QueryTotalEscrowForDenomResponse {
    return QueryTotalEscrowForDenomResponse.decode(message.value);
  },
  toProto(message: QueryTotalEscrowForDenomResponse): Uint8Array {
    return QueryTotalEscrowForDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalEscrowForDenomResponse): QueryTotalEscrowForDenomResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse",
      value: QueryTotalEscrowForDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTotalEscrowForDenomResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};