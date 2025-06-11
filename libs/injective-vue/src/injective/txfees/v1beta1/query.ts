import { Params, ParamsAmino } from "./txfees";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name EipBaseFee
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.EipBaseFee
 */
export interface EipBaseFee {
  baseFee: string;
}
export interface EipBaseFeeProtoMsg {
  typeUrl: "/injective.txfees.v1beta1.EipBaseFee";
  value: Uint8Array;
}
/**
 * @name EipBaseFeeAmino
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.EipBaseFee
 */
export interface EipBaseFeeAmino {
  base_fee: string;
}
export interface EipBaseFeeAminoMsg {
  type: "/injective.txfees.v1beta1.EipBaseFee";
  value: EipBaseFeeAmino;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/injective.txfees.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/injective.txfees.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/injective.txfees.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/injective.txfees.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * @name QueryEipBaseFeeRequest
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryEipBaseFeeRequest
 */
export interface QueryEipBaseFeeRequest {}
export interface QueryEipBaseFeeRequestProtoMsg {
  typeUrl: "/injective.txfees.v1beta1.QueryEipBaseFeeRequest";
  value: Uint8Array;
}
/**
 * @name QueryEipBaseFeeRequestAmino
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryEipBaseFeeRequest
 */
export interface QueryEipBaseFeeRequestAmino {}
export interface QueryEipBaseFeeRequestAminoMsg {
  type: "/injective.txfees.v1beta1.QueryEipBaseFeeRequest";
  value: QueryEipBaseFeeRequestAmino;
}
/**
 * @name QueryEipBaseFeeResponse
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryEipBaseFeeResponse
 */
export interface QueryEipBaseFeeResponse {
  baseFee?: EipBaseFee;
}
export interface QueryEipBaseFeeResponseProtoMsg {
  typeUrl: "/injective.txfees.v1beta1.QueryEipBaseFeeResponse";
  value: Uint8Array;
}
/**
 * @name QueryEipBaseFeeResponseAmino
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryEipBaseFeeResponse
 */
export interface QueryEipBaseFeeResponseAmino {
  base_fee?: EipBaseFeeAmino;
}
export interface QueryEipBaseFeeResponseAminoMsg {
  type: "/injective.txfees.v1beta1.QueryEipBaseFeeResponse";
  value: QueryEipBaseFeeResponseAmino;
}
function createBaseEipBaseFee(): EipBaseFee {
  return {
    baseFee: ""
  };
}
/**
 * @name EipBaseFee
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.EipBaseFee
 */
export const EipBaseFee = {
  typeUrl: "/injective.txfees.v1beta1.EipBaseFee",
  is(o: any): o is EipBaseFee {
    return o && (o.$typeUrl === EipBaseFee.typeUrl || typeof o.baseFee === "string");
  },
  isAmino(o: any): o is EipBaseFeeAmino {
    return o && (o.$typeUrl === EipBaseFee.typeUrl || typeof o.base_fee === "string");
  },
  encode(message: EipBaseFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseFee !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.baseFee, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EipBaseFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEipBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EipBaseFee>): EipBaseFee {
    const message = createBaseEipBaseFee();
    message.baseFee = object.baseFee ?? "";
    return message;
  },
  fromAmino(object: EipBaseFeeAmino): EipBaseFee {
    const message = createBaseEipBaseFee();
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.baseFee = object.base_fee;
    }
    return message;
  },
  toAmino(message: EipBaseFee): EipBaseFeeAmino {
    const obj: any = {};
    obj.base_fee = message.baseFee === "" ? undefined : Decimal.fromUserInput(message.baseFee, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: EipBaseFeeAminoMsg): EipBaseFee {
    return EipBaseFee.fromAmino(object.value);
  },
  fromProtoMsg(message: EipBaseFeeProtoMsg): EipBaseFee {
    return EipBaseFee.decode(message.value);
  },
  toProto(message: EipBaseFee): Uint8Array {
    return EipBaseFee.encode(message).finish();
  },
  toProtoMsg(message: EipBaseFee): EipBaseFeeProtoMsg {
    return {
      typeUrl: "/injective.txfees.v1beta1.EipBaseFee",
      value: EipBaseFee.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/injective.txfees.v1beta1.QueryParamsRequest",
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
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.txfees.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/injective.txfees.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
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
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.txfees.v1beta1.QueryParamsResponse",
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
function createBaseQueryEipBaseFeeRequest(): QueryEipBaseFeeRequest {
  return {};
}
/**
 * @name QueryEipBaseFeeRequest
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryEipBaseFeeRequest
 */
export const QueryEipBaseFeeRequest = {
  typeUrl: "/injective.txfees.v1beta1.QueryEipBaseFeeRequest",
  is(o: any): o is QueryEipBaseFeeRequest {
    return o && o.$typeUrl === QueryEipBaseFeeRequest.typeUrl;
  },
  isAmino(o: any): o is QueryEipBaseFeeRequestAmino {
    return o && o.$typeUrl === QueryEipBaseFeeRequest.typeUrl;
  },
  encode(_: QueryEipBaseFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEipBaseFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEipBaseFeeRequest();
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
  fromPartial(_: DeepPartial<QueryEipBaseFeeRequest>): QueryEipBaseFeeRequest {
    const message = createBaseQueryEipBaseFeeRequest();
    return message;
  },
  fromAmino(_: QueryEipBaseFeeRequestAmino): QueryEipBaseFeeRequest {
    const message = createBaseQueryEipBaseFeeRequest();
    return message;
  },
  toAmino(_: QueryEipBaseFeeRequest): QueryEipBaseFeeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEipBaseFeeRequestAminoMsg): QueryEipBaseFeeRequest {
    return QueryEipBaseFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEipBaseFeeRequestProtoMsg): QueryEipBaseFeeRequest {
    return QueryEipBaseFeeRequest.decode(message.value);
  },
  toProto(message: QueryEipBaseFeeRequest): Uint8Array {
    return QueryEipBaseFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEipBaseFeeRequest): QueryEipBaseFeeRequestProtoMsg {
    return {
      typeUrl: "/injective.txfees.v1beta1.QueryEipBaseFeeRequest",
      value: QueryEipBaseFeeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryEipBaseFeeResponse(): QueryEipBaseFeeResponse {
  return {
    baseFee: undefined
  };
}
/**
 * @name QueryEipBaseFeeResponse
 * @package injective.txfees.v1beta1
 * @see proto type: injective.txfees.v1beta1.QueryEipBaseFeeResponse
 */
export const QueryEipBaseFeeResponse = {
  typeUrl: "/injective.txfees.v1beta1.QueryEipBaseFeeResponse",
  is(o: any): o is QueryEipBaseFeeResponse {
    return o && o.$typeUrl === QueryEipBaseFeeResponse.typeUrl;
  },
  isAmino(o: any): o is QueryEipBaseFeeResponseAmino {
    return o && o.$typeUrl === QueryEipBaseFeeResponse.typeUrl;
  },
  encode(message: QueryEipBaseFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseFee !== undefined) {
      EipBaseFee.encode(message.baseFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEipBaseFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEipBaseFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = EipBaseFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryEipBaseFeeResponse>): QueryEipBaseFeeResponse {
    const message = createBaseQueryEipBaseFeeResponse();
    message.baseFee = object.baseFee !== undefined && object.baseFee !== null ? EipBaseFee.fromPartial(object.baseFee) : undefined;
    return message;
  },
  fromAmino(object: QueryEipBaseFeeResponseAmino): QueryEipBaseFeeResponse {
    const message = createBaseQueryEipBaseFeeResponse();
    if (object.base_fee !== undefined && object.base_fee !== null) {
      message.baseFee = EipBaseFee.fromAmino(object.base_fee);
    }
    return message;
  },
  toAmino(message: QueryEipBaseFeeResponse): QueryEipBaseFeeResponseAmino {
    const obj: any = {};
    obj.base_fee = message.baseFee ? EipBaseFee.toAmino(message.baseFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEipBaseFeeResponseAminoMsg): QueryEipBaseFeeResponse {
    return QueryEipBaseFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEipBaseFeeResponseProtoMsg): QueryEipBaseFeeResponse {
    return QueryEipBaseFeeResponse.decode(message.value);
  },
  toProto(message: QueryEipBaseFeeResponse): Uint8Array {
    return QueryEipBaseFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEipBaseFeeResponse): QueryEipBaseFeeResponseProtoMsg {
    return {
      typeUrl: "/injective.txfees.v1beta1.QueryEipBaseFeeResponse",
      value: QueryEipBaseFeeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryEipBaseFeeResponse.typeUrl)) {
      return;
    }
    EipBaseFee.registerTypeUrl();
  }
};