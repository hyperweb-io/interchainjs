import { Params, ParamsAmino, RegisteredContract, RegisteredContractAmino } from "./wasmx";
import { GenesisState, GenesisStateAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequest {}
export interface QueryWasmxParamsRequestProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest";
  value: Uint8Array;
}
/**
 * QueryWasmxParamsRequest is the request type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsRequestAmino {}
export interface QueryWasmxParamsRequestAminoMsg {
  type: "/injective.wasmx.v1.QueryWasmxParamsRequest";
  value: QueryWasmxParamsRequestAmino;
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponse {
  params: Params;
}
export interface QueryWasmxParamsResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse";
  value: Uint8Array;
}
/**
 * QueryWasmxParamsRequest is the response type for the Query/WasmxParams RPC
 * method.
 */
export interface QueryWasmxParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryWasmxParamsResponseAminoMsg {
  type: "/injective.wasmx.v1.QueryWasmxParamsResponse";
  value: QueryWasmxParamsResponseAmino;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest";
  value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.wasmx.v1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponse {
  state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse";
  value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the Query/WasmxModuleState
 * RPC method.
 */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.wasmx.v1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequest {
  contractAddress: string;
}
export interface QueryContractRegistrationInfoRequestProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest";
  value: Uint8Array;
}
/** Contract registration info */
export interface QueryContractRegistrationInfoRequestAmino {
  contract_address: string;
}
export interface QueryContractRegistrationInfoRequestAminoMsg {
  type: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest";
  value: QueryContractRegistrationInfoRequestAmino;
}
export interface QueryContractRegistrationInfoResponse {
  contract?: RegisteredContract;
}
export interface QueryContractRegistrationInfoResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse";
  value: Uint8Array;
}
export interface QueryContractRegistrationInfoResponseAmino {
  contract?: RegisteredContractAmino;
}
export interface QueryContractRegistrationInfoResponseAminoMsg {
  type: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse";
  value: QueryContractRegistrationInfoResponseAmino;
}
function createBaseQueryWasmxParamsRequest(): QueryWasmxParamsRequest {
  return {};
}
export const QueryWasmxParamsRequest = {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest",
  is(o: any): o is QueryWasmxParamsRequest {
    return o && o.$typeUrl === QueryWasmxParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryWasmxParamsRequestAmino {
    return o && o.$typeUrl === QueryWasmxParamsRequest.typeUrl;
  },
  encode(_: QueryWasmxParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmxParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmxParamsRequest();
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
  fromPartial(_: DeepPartial<QueryWasmxParamsRequest>): QueryWasmxParamsRequest {
    const message = createBaseQueryWasmxParamsRequest();
    return message;
  },
  fromAmino(_: QueryWasmxParamsRequestAmino): QueryWasmxParamsRequest {
    const message = createBaseQueryWasmxParamsRequest();
    return message;
  },
  toAmino(_: QueryWasmxParamsRequest): QueryWasmxParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryWasmxParamsRequestAminoMsg): QueryWasmxParamsRequest {
    return QueryWasmxParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWasmxParamsRequestProtoMsg): QueryWasmxParamsRequest {
    return QueryWasmxParamsRequest.decode(message.value);
  },
  toProto(message: QueryWasmxParamsRequest): Uint8Array {
    return QueryWasmxParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWasmxParamsRequest): QueryWasmxParamsRequestProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryWasmxParamsRequest",
      value: QueryWasmxParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWasmxParamsRequest.typeUrl, QueryWasmxParamsRequest);
function createBaseQueryWasmxParamsResponse(): QueryWasmxParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryWasmxParamsResponse = {
  typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse",
  is(o: any): o is QueryWasmxParamsResponse {
    return o && (o.$typeUrl === QueryWasmxParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryWasmxParamsResponseAmino {
    return o && (o.$typeUrl === QueryWasmxParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryWasmxParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryWasmxParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWasmxParamsResponse();
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
  fromPartial(object: DeepPartial<QueryWasmxParamsResponse>): QueryWasmxParamsResponse {
    const message = createBaseQueryWasmxParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryWasmxParamsResponseAmino): QueryWasmxParamsResponse {
    const message = createBaseQueryWasmxParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWasmxParamsResponseAminoMsg): QueryWasmxParamsResponse {
    return QueryWasmxParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWasmxParamsResponseProtoMsg): QueryWasmxParamsResponse {
    return QueryWasmxParamsResponse.decode(message.value);
  },
  toProto(message: QueryWasmxParamsResponse): Uint8Array {
    return QueryWasmxParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWasmxParamsResponse): QueryWasmxParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryWasmxParamsResponse",
      value: QueryWasmxParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryWasmxParamsResponse.typeUrl, QueryWasmxParamsResponse);
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest",
  is(o: any): o is QueryModuleStateRequest {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateRequestAmino {
    return o && o.$typeUrl === QueryModuleStateRequest.typeUrl;
  },
  encode(_: QueryModuleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateRequest();
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
  fromPartial(_: DeepPartial<QueryModuleStateRequest>): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest {
    const message = createBaseQueryModuleStateRequest();
    return message;
  },
  toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest {
    return QueryModuleStateRequest.decode(message.value);
  },
  toProto(message: QueryModuleStateRequest): Uint8Array {
    return QueryModuleStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryModuleStateRequest.typeUrl, QueryModuleStateRequest);
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
export const QueryModuleStateResponse = {
  typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse",
  is(o: any): o is QueryModuleStateResponse {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryModuleStateResponseAmino {
    return o && o.$typeUrl === QueryModuleStateResponse.typeUrl;
  },
  encode(message: QueryModuleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      GenesisState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = GenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryModuleStateResponse>): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    message.state = object.state !== undefined && object.state !== null ? GenesisState.fromPartial(object.state) : undefined;
    return message;
  },
  fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse {
    const message = createBaseQueryModuleStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = GenesisState.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? GenesisState.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse {
    return QueryModuleStateResponse.decode(message.value);
  },
  toProto(message: QueryModuleStateResponse): Uint8Array {
    return QueryModuleStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryModuleStateResponse.typeUrl, QueryModuleStateResponse);
function createBaseQueryContractRegistrationInfoRequest(): QueryContractRegistrationInfoRequest {
  return {
    contractAddress: ""
  };
}
export const QueryContractRegistrationInfoRequest = {
  typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest",
  is(o: any): o is QueryContractRegistrationInfoRequest {
    return o && (o.$typeUrl === QueryContractRegistrationInfoRequest.typeUrl || typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is QueryContractRegistrationInfoRequestAmino {
    return o && (o.$typeUrl === QueryContractRegistrationInfoRequest.typeUrl || typeof o.contract_address === "string");
  },
  encode(message: QueryContractRegistrationInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractRegistrationInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractRegistrationInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContractRegistrationInfoRequest>): QueryContractRegistrationInfoRequest {
    const message = createBaseQueryContractRegistrationInfoRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryContractRegistrationInfoRequestAmino): QueryContractRegistrationInfoRequest {
    const message = createBaseQueryContractRegistrationInfoRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryContractRegistrationInfoRequest): QueryContractRegistrationInfoRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryContractRegistrationInfoRequestAminoMsg): QueryContractRegistrationInfoRequest {
    return QueryContractRegistrationInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractRegistrationInfoRequestProtoMsg): QueryContractRegistrationInfoRequest {
    return QueryContractRegistrationInfoRequest.decode(message.value);
  },
  toProto(message: QueryContractRegistrationInfoRequest): Uint8Array {
    return QueryContractRegistrationInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractRegistrationInfoRequest): QueryContractRegistrationInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoRequest",
      value: QueryContractRegistrationInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractRegistrationInfoRequest.typeUrl, QueryContractRegistrationInfoRequest);
function createBaseQueryContractRegistrationInfoResponse(): QueryContractRegistrationInfoResponse {
  return {
    contract: undefined
  };
}
export const QueryContractRegistrationInfoResponse = {
  typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse",
  is(o: any): o is QueryContractRegistrationInfoResponse {
    return o && o.$typeUrl === QueryContractRegistrationInfoResponse.typeUrl;
  },
  isAmino(o: any): o is QueryContractRegistrationInfoResponseAmino {
    return o && o.$typeUrl === QueryContractRegistrationInfoResponse.typeUrl;
  },
  encode(message: QueryContractRegistrationInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== undefined) {
      RegisteredContract.encode(message.contract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractRegistrationInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractRegistrationInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = RegisteredContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryContractRegistrationInfoResponse>): QueryContractRegistrationInfoResponse {
    const message = createBaseQueryContractRegistrationInfoResponse();
    message.contract = object.contract !== undefined && object.contract !== null ? RegisteredContract.fromPartial(object.contract) : undefined;
    return message;
  },
  fromAmino(object: QueryContractRegistrationInfoResponseAmino): QueryContractRegistrationInfoResponse {
    const message = createBaseQueryContractRegistrationInfoResponse();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = RegisteredContract.fromAmino(object.contract);
    }
    return message;
  },
  toAmino(message: QueryContractRegistrationInfoResponse): QueryContractRegistrationInfoResponseAmino {
    const obj: any = {};
    obj.contract = message.contract ? RegisteredContract.toAmino(message.contract) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractRegistrationInfoResponseAminoMsg): QueryContractRegistrationInfoResponse {
    return QueryContractRegistrationInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractRegistrationInfoResponseProtoMsg): QueryContractRegistrationInfoResponse {
    return QueryContractRegistrationInfoResponse.decode(message.value);
  },
  toProto(message: QueryContractRegistrationInfoResponse): Uint8Array {
    return QueryContractRegistrationInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractRegistrationInfoResponse): QueryContractRegistrationInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.QueryContractRegistrationInfoResponse",
      value: QueryContractRegistrationInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContractRegistrationInfoResponse.typeUrl, QueryContractRegistrationInfoResponse);