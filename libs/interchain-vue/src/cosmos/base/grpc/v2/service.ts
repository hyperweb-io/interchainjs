import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** QueryRequest is the request for the Query method */
export interface QueryRequest {
  request?: Any;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/cosmos.base.grpc.v2.QueryRequest";
  value: Uint8Array;
}
/** QueryRequest is the request for the Query method */
export interface QueryRequestAmino {
  request?: AnyAmino;
}
export interface QueryRequestAminoMsg {
  type: "cosmos-sdk/QueryRequest";
  value: QueryRequestAmino;
}
/** QueryResponse is the response for the Query method */
export interface QueryResponse {
  response?: Any;
}
export interface QueryResponseProtoMsg {
  typeUrl: "/cosmos.base.grpc.v2.QueryResponse";
  value: Uint8Array;
}
/** QueryResponse is the response for the Query method */
export interface QueryResponseAmino {
  response?: AnyAmino;
}
export interface QueryResponseAminoMsg {
  type: "cosmos-sdk/QueryResponse";
  value: QueryResponseAmino;
}
/** ListQueryHandlersRequest is the request for the ListQueryHandlers method */
export interface ListQueryHandlersRequest {}
export interface ListQueryHandlersRequestProtoMsg {
  typeUrl: "/cosmos.base.grpc.v2.ListQueryHandlersRequest";
  value: Uint8Array;
}
/** ListQueryHandlersRequest is the request for the ListQueryHandlers method */
export interface ListQueryHandlersRequestAmino {}
export interface ListQueryHandlersRequestAminoMsg {
  type: "cosmos-sdk/ListQueryHandlersRequest";
  value: ListQueryHandlersRequestAmino;
}
/** ListQueryHandlersResponse is the response for the ListQueryHandlers method */
export interface ListQueryHandlersResponse {
  handlers: Handler[];
}
export interface ListQueryHandlersResponseProtoMsg {
  typeUrl: "/cosmos.base.grpc.v2.ListQueryHandlersResponse";
  value: Uint8Array;
}
/** ListQueryHandlersResponse is the response for the ListQueryHandlers method */
export interface ListQueryHandlersResponseAmino {
  handlers: HandlerAmino[];
}
export interface ListQueryHandlersResponseAminoMsg {
  type: "cosmos-sdk/ListQueryHandlersResponse";
  value: ListQueryHandlersResponseAmino;
}
/** Handler defines a query handler */
export interface Handler {
  requestName: string;
  responseName: string;
}
export interface HandlerProtoMsg {
  typeUrl: "/cosmos.base.grpc.v2.Handler";
  value: Uint8Array;
}
/** Handler defines a query handler */
export interface HandlerAmino {
  request_name: string;
  response_name: string;
}
export interface HandlerAminoMsg {
  type: "cosmos-sdk/Handler";
  value: HandlerAmino;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    request: undefined
  };
}
export const QueryRequest = {
  typeUrl: "/cosmos.base.grpc.v2.QueryRequest",
  aminoType: "cosmos-sdk/QueryRequest",
  is(o: any): o is QueryRequest {
    return o && o.$typeUrl === QueryRequest.typeUrl;
  },
  isAmino(o: any): o is QueryRequestAmino {
    return o && o.$typeUrl === QueryRequest.typeUrl;
  },
  encode(message: QueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.request !== undefined) {
      Any.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.request = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.request = object.request !== undefined && object.request !== null ? Any.fromPartial(object.request) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    const message = createBaseQueryRequest();
    if (object.request !== undefined && object.request !== null) {
      message.request = Any.fromAmino(object.request);
    }
    return message;
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.request = message.request ? Any.toAmino(message.request) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestAminoMsg): QueryRequest {
    return QueryRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryRequest): QueryRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryRequest",
      value: QueryRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryRequestProtoMsg): QueryRequest {
    return QueryRequest.decode(message.value);
  },
  toProto(message: QueryRequest): Uint8Array {
    return QueryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequest): QueryRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.grpc.v2.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryResponse(): QueryResponse {
  return {
    response: undefined
  };
}
export const QueryResponse = {
  typeUrl: "/cosmos.base.grpc.v2.QueryResponse",
  aminoType: "cosmos-sdk/QueryResponse",
  is(o: any): o is QueryResponse {
    return o && o.$typeUrl === QueryResponse.typeUrl;
  },
  isAmino(o: any): o is QueryResponseAmino {
    return o && o.$typeUrl === QueryResponse.typeUrl;
  },
  encode(message: QueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== undefined) {
      Any.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.response = object.response !== undefined && object.response !== null ? Any.fromPartial(object.response) : undefined;
    return message;
  },
  fromAmino(object: QueryResponseAmino): QueryResponse {
    const message = createBaseQueryResponse();
    if (object.response !== undefined && object.response !== null) {
      message.response = Any.fromAmino(object.response);
    }
    return message;
  },
  toAmino(message: QueryResponse): QueryResponseAmino {
    const obj: any = {};
    obj.response = message.response ? Any.toAmino(message.response) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryResponseAminoMsg): QueryResponse {
    return QueryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryResponse): QueryResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryResponse",
      value: QueryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryResponseProtoMsg): QueryResponse {
    return QueryResponse.decode(message.value);
  },
  toProto(message: QueryResponse): Uint8Array {
    return QueryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryResponse): QueryResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.grpc.v2.QueryResponse",
      value: QueryResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListQueryHandlersRequest(): ListQueryHandlersRequest {
  return {};
}
export const ListQueryHandlersRequest = {
  typeUrl: "/cosmos.base.grpc.v2.ListQueryHandlersRequest",
  aminoType: "cosmos-sdk/ListQueryHandlersRequest",
  is(o: any): o is ListQueryHandlersRequest {
    return o && o.$typeUrl === ListQueryHandlersRequest.typeUrl;
  },
  isAmino(o: any): o is ListQueryHandlersRequestAmino {
    return o && o.$typeUrl === ListQueryHandlersRequest.typeUrl;
  },
  encode(_: ListQueryHandlersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListQueryHandlersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQueryHandlersRequest();
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
  fromPartial(_: DeepPartial<ListQueryHandlersRequest>): ListQueryHandlersRequest {
    const message = createBaseListQueryHandlersRequest();
    return message;
  },
  fromAmino(_: ListQueryHandlersRequestAmino): ListQueryHandlersRequest {
    const message = createBaseListQueryHandlersRequest();
    return message;
  },
  toAmino(_: ListQueryHandlersRequest): ListQueryHandlersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListQueryHandlersRequestAminoMsg): ListQueryHandlersRequest {
    return ListQueryHandlersRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListQueryHandlersRequest): ListQueryHandlersRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListQueryHandlersRequest",
      value: ListQueryHandlersRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListQueryHandlersRequestProtoMsg): ListQueryHandlersRequest {
    return ListQueryHandlersRequest.decode(message.value);
  },
  toProto(message: ListQueryHandlersRequest): Uint8Array {
    return ListQueryHandlersRequest.encode(message).finish();
  },
  toProtoMsg(message: ListQueryHandlersRequest): ListQueryHandlersRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.grpc.v2.ListQueryHandlersRequest",
      value: ListQueryHandlersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListQueryHandlersResponse(): ListQueryHandlersResponse {
  return {
    handlers: []
  };
}
export const ListQueryHandlersResponse = {
  typeUrl: "/cosmos.base.grpc.v2.ListQueryHandlersResponse",
  aminoType: "cosmos-sdk/ListQueryHandlersResponse",
  is(o: any): o is ListQueryHandlersResponse {
    return o && (o.$typeUrl === ListQueryHandlersResponse.typeUrl || Array.isArray(o.handlers) && (!o.handlers.length || Handler.is(o.handlers[0])));
  },
  isAmino(o: any): o is ListQueryHandlersResponseAmino {
    return o && (o.$typeUrl === ListQueryHandlersResponse.typeUrl || Array.isArray(o.handlers) && (!o.handlers.length || Handler.isAmino(o.handlers[0])));
  },
  encode(message: ListQueryHandlersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.handlers) {
      Handler.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListQueryHandlersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListQueryHandlersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.handlers.push(Handler.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListQueryHandlersResponse>): ListQueryHandlersResponse {
    const message = createBaseListQueryHandlersResponse();
    message.handlers = object.handlers?.map(e => Handler.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListQueryHandlersResponseAmino): ListQueryHandlersResponse {
    const message = createBaseListQueryHandlersResponse();
    message.handlers = object.handlers?.map(e => Handler.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListQueryHandlersResponse): ListQueryHandlersResponseAmino {
    const obj: any = {};
    if (message.handlers) {
      obj.handlers = message.handlers.map(e => e ? Handler.toAmino(e) : undefined);
    } else {
      obj.handlers = message.handlers;
    }
    return obj;
  },
  fromAminoMsg(object: ListQueryHandlersResponseAminoMsg): ListQueryHandlersResponse {
    return ListQueryHandlersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListQueryHandlersResponse): ListQueryHandlersResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListQueryHandlersResponse",
      value: ListQueryHandlersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListQueryHandlersResponseProtoMsg): ListQueryHandlersResponse {
    return ListQueryHandlersResponse.decode(message.value);
  },
  toProto(message: ListQueryHandlersResponse): Uint8Array {
    return ListQueryHandlersResponse.encode(message).finish();
  },
  toProtoMsg(message: ListQueryHandlersResponse): ListQueryHandlersResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.grpc.v2.ListQueryHandlersResponse",
      value: ListQueryHandlersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Handler.registerTypeUrl();
  }
};
function createBaseHandler(): Handler {
  return {
    requestName: "",
    responseName: ""
  };
}
export const Handler = {
  typeUrl: "/cosmos.base.grpc.v2.Handler",
  aminoType: "cosmos-sdk/Handler",
  is(o: any): o is Handler {
    return o && (o.$typeUrl === Handler.typeUrl || typeof o.requestName === "string" && typeof o.responseName === "string");
  },
  isAmino(o: any): o is HandlerAmino {
    return o && (o.$typeUrl === Handler.typeUrl || typeof o.request_name === "string" && typeof o.response_name === "string");
  },
  encode(message: Handler, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestName !== "") {
      writer.uint32(10).string(message.requestName);
    }
    if (message.responseName !== "") {
      writer.uint32(18).string(message.responseName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Handler {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestName = reader.string();
          break;
        case 2:
          message.responseName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Handler>): Handler {
    const message = createBaseHandler();
    message.requestName = object.requestName ?? "";
    message.responseName = object.responseName ?? "";
    return message;
  },
  fromAmino(object: HandlerAmino): Handler {
    const message = createBaseHandler();
    if (object.request_name !== undefined && object.request_name !== null) {
      message.requestName = object.request_name;
    }
    if (object.response_name !== undefined && object.response_name !== null) {
      message.responseName = object.response_name;
    }
    return message;
  },
  toAmino(message: Handler): HandlerAmino {
    const obj: any = {};
    obj.request_name = message.requestName === "" ? undefined : message.requestName;
    obj.response_name = message.responseName === "" ? undefined : message.responseName;
    return obj;
  },
  fromAminoMsg(object: HandlerAminoMsg): Handler {
    return Handler.fromAmino(object.value);
  },
  toAminoMsg(message: Handler): HandlerAminoMsg {
    return {
      type: "cosmos-sdk/Handler",
      value: Handler.toAmino(message)
    };
  },
  fromProtoMsg(message: HandlerProtoMsg): Handler {
    return Handler.decode(message.value);
  },
  toProto(message: Handler): Uint8Array {
    return Handler.encode(message).finish();
  },
  toProtoMsg(message: Handler): HandlerProtoMsg {
    return {
      typeUrl: "/cosmos.base.grpc.v2.Handler",
      value: Handler.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};