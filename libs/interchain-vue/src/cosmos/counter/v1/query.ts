import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryGetCountRequest defines the request type for querying x/mock count.
 * @name QueryGetCountRequest
 * @package cosmos.counter.v1
 * @see proto type: cosmos.counter.v1.QueryGetCountRequest
 */
export interface QueryGetCountRequest {}
export interface QueryGetCountRequestProtoMsg {
  typeUrl: "/cosmos.counter.v1.QueryGetCountRequest";
  value: Uint8Array;
}
/**
 * QueryGetCountRequest defines the request type for querying x/mock count.
 * @name QueryGetCountRequestAmino
 * @package cosmos.counter.v1
 * @see proto type: cosmos.counter.v1.QueryGetCountRequest
 */
export interface QueryGetCountRequestAmino {}
export interface QueryGetCountRequestAminoMsg {
  type: "cosmos-sdk/QueryGetCountRequest";
  value: QueryGetCountRequestAmino;
}
/**
 * QueryGetCountResponse defines the response type for querying x/mock count.
 * @name QueryGetCountResponse
 * @package cosmos.counter.v1
 * @see proto type: cosmos.counter.v1.QueryGetCountResponse
 */
export interface QueryGetCountResponse {
  totalCount: bigint;
}
export interface QueryGetCountResponseProtoMsg {
  typeUrl: "/cosmos.counter.v1.QueryGetCountResponse";
  value: Uint8Array;
}
/**
 * QueryGetCountResponse defines the response type for querying x/mock count.
 * @name QueryGetCountResponseAmino
 * @package cosmos.counter.v1
 * @see proto type: cosmos.counter.v1.QueryGetCountResponse
 */
export interface QueryGetCountResponseAmino {
  total_count: string;
}
export interface QueryGetCountResponseAminoMsg {
  type: "cosmos-sdk/QueryGetCountResponse";
  value: QueryGetCountResponseAmino;
}
function createBaseQueryGetCountRequest(): QueryGetCountRequest {
  return {};
}
/**
 * QueryGetCountRequest defines the request type for querying x/mock count.
 * @name QueryGetCountRequest
 * @package cosmos.counter.v1
 * @see proto type: cosmos.counter.v1.QueryGetCountRequest
 */
export const QueryGetCountRequest = {
  typeUrl: "/cosmos.counter.v1.QueryGetCountRequest",
  aminoType: "cosmos-sdk/QueryGetCountRequest",
  is(o: any): o is QueryGetCountRequest {
    return o && o.$typeUrl === QueryGetCountRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGetCountRequestAmino {
    return o && o.$typeUrl === QueryGetCountRequest.typeUrl;
  },
  encode(_: QueryGetCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCountRequest();
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
  fromPartial(_: DeepPartial<QueryGetCountRequest>): QueryGetCountRequest {
    const message = createBaseQueryGetCountRequest();
    return message;
  },
  fromAmino(_: QueryGetCountRequestAmino): QueryGetCountRequest {
    const message = createBaseQueryGetCountRequest();
    return message;
  },
  toAmino(_: QueryGetCountRequest): QueryGetCountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGetCountRequestAminoMsg): QueryGetCountRequest {
    return QueryGetCountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetCountRequest): QueryGetCountRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryGetCountRequest",
      value: QueryGetCountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetCountRequestProtoMsg): QueryGetCountRequest {
    return QueryGetCountRequest.decode(message.value);
  },
  toProto(message: QueryGetCountRequest): Uint8Array {
    return QueryGetCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCountRequest): QueryGetCountRequestProtoMsg {
    return {
      typeUrl: "/cosmos.counter.v1.QueryGetCountRequest",
      value: QueryGetCountRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryGetCountResponse(): QueryGetCountResponse {
  return {
    totalCount: BigInt(0)
  };
}
/**
 * QueryGetCountResponse defines the response type for querying x/mock count.
 * @name QueryGetCountResponse
 * @package cosmos.counter.v1
 * @see proto type: cosmos.counter.v1.QueryGetCountResponse
 */
export const QueryGetCountResponse = {
  typeUrl: "/cosmos.counter.v1.QueryGetCountResponse",
  aminoType: "cosmos-sdk/QueryGetCountResponse",
  is(o: any): o is QueryGetCountResponse {
    return o && (o.$typeUrl === QueryGetCountResponse.typeUrl || typeof o.totalCount === "bigint");
  },
  isAmino(o: any): o is QueryGetCountResponseAmino {
    return o && (o.$typeUrl === QueryGetCountResponse.typeUrl || typeof o.total_count === "bigint");
  },
  encode(message: QueryGetCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalCount !== BigInt(0)) {
      writer.uint32(8).int64(message.totalCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCount = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetCountResponse>): QueryGetCountResponse {
    const message = createBaseQueryGetCountResponse();
    message.totalCount = object.totalCount !== undefined && object.totalCount !== null ? BigInt(object.totalCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetCountResponseAmino): QueryGetCountResponse {
    const message = createBaseQueryGetCountResponse();
    if (object.total_count !== undefined && object.total_count !== null) {
      message.totalCount = BigInt(object.total_count);
    }
    return message;
  },
  toAmino(message: QueryGetCountResponse): QueryGetCountResponseAmino {
    const obj: any = {};
    obj.total_count = message.totalCount !== BigInt(0) ? message.totalCount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetCountResponseAminoMsg): QueryGetCountResponse {
    return QueryGetCountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGetCountResponse): QueryGetCountResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryGetCountResponse",
      value: QueryGetCountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGetCountResponseProtoMsg): QueryGetCountResponse {
    return QueryGetCountResponse.decode(message.value);
  },
  toProto(message: QueryGetCountResponse): Uint8Array {
    return QueryGetCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetCountResponse): QueryGetCountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.counter.v1.QueryGetCountResponse",
      value: QueryGetCountResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};