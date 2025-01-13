import { RequestFinalizeBlock, RequestFinalizeBlockAmino, ResponseFinalizeBlock, ResponseFinalizeBlockAmino, ResponseCommit, ResponseCommitAmino } from "../../../../tendermint/abci/types";
import { StoreKVPair, StoreKVPairAmino } from "../../v1beta1/listening";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial } from "../../../../helpers";
import { ComputedRef } from "vue";
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequest {
  req?: RequestFinalizeBlock;
  res?: ResponseFinalizeBlock;
}
export interface ReactiveListenFinalizeBlockRequest {
  req?: ComputedRef<RequestFinalizeBlock>;
  res?: ComputedRef<ResponseFinalizeBlock>;
}
export interface ListenFinalizeBlockRequestProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest";
  value: Uint8Array;
}
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequestAmino {
  req?: RequestFinalizeBlockAmino;
  res?: ResponseFinalizeBlockAmino;
}
export interface ListenFinalizeBlockRequestAminoMsg {
  type: "cosmos-sdk/ListenFinalizeBlockRequest";
  value: ListenFinalizeBlockRequestAmino;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponse {}
export interface ReactiveListenFinalizeBlockResponse {}
export interface ListenFinalizeBlockResponseProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse";
  value: Uint8Array;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponseAmino {}
export interface ListenFinalizeBlockResponseAminoMsg {
  type: "cosmos-sdk/ListenFinalizeBlockResponse";
  value: ListenFinalizeBlockResponseAmino;
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequest {
  /** explicitly pass in block height as ResponseCommit does not contain this info */
  blockHeight: bigint;
  res?: ResponseCommit;
  changeSet: StoreKVPair[];
}
export interface ReactiveListenCommitRequest {
  blockHeight: ComputedRef<bigint>;
  res?: ComputedRef<ResponseCommit>;
  changeSet: ComputedRef<StoreKVPair[]>;
}
export interface ListenCommitRequestProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest";
  value: Uint8Array;
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequestAmino {
  /** explicitly pass in block height as ResponseCommit does not contain this info */
  block_height: string;
  res?: ResponseCommitAmino;
  change_set: StoreKVPairAmino[];
}
export interface ListenCommitRequestAminoMsg {
  type: "cosmos-sdk/ListenCommitRequest";
  value: ListenCommitRequestAmino;
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponse {}
export interface ReactiveListenCommitResponse {}
export interface ListenCommitResponseProtoMsg {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse";
  value: Uint8Array;
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponseAmino {}
export interface ListenCommitResponseAminoMsg {
  type: "cosmos-sdk/ListenCommitResponse";
  value: ListenCommitResponseAmino;
}
function createBaseListenFinalizeBlockRequest(): ListenFinalizeBlockRequest {
  return {
    req: undefined,
    res: undefined
  };
}
export const ListenFinalizeBlockRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
  aminoType: "cosmos-sdk/ListenFinalizeBlockRequest",
  is(o: any): o is ListenFinalizeBlockRequest {
    return o && o.$typeUrl === ListenFinalizeBlockRequest.typeUrl;
  },
  isAmino(o: any): o is ListenFinalizeBlockRequestAmino {
    return o && o.$typeUrl === ListenFinalizeBlockRequest.typeUrl;
  },
  encode(message: ListenFinalizeBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.req !== undefined) {
      RequestFinalizeBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
    }
    if (message.res !== undefined) {
      ResponseFinalizeBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenFinalizeBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenFinalizeBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.req = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.res = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListenFinalizeBlockRequest>): ListenFinalizeBlockRequest {
    const message = createBaseListenFinalizeBlockRequest();
    message.req = object.req !== undefined && object.req !== null ? RequestFinalizeBlock.fromPartial(object.req) : undefined;
    message.res = object.res !== undefined && object.res !== null ? ResponseFinalizeBlock.fromPartial(object.res) : undefined;
    return message;
  },
  fromAmino(object: ListenFinalizeBlockRequestAmino): ListenFinalizeBlockRequest {
    const message = createBaseListenFinalizeBlockRequest();
    if (object.req !== undefined && object.req !== null) {
      message.req = RequestFinalizeBlock.fromAmino(object.req);
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseFinalizeBlock.fromAmino(object.res);
    }
    return message;
  },
  toAmino(message: ListenFinalizeBlockRequest): ListenFinalizeBlockRequestAmino {
    const obj: any = {};
    obj.req = message.req ? RequestFinalizeBlock.toAmino(message.req) : undefined;
    obj.res = message.res ? ResponseFinalizeBlock.toAmino(message.res) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListenFinalizeBlockRequestAminoMsg): ListenFinalizeBlockRequest {
    return ListenFinalizeBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListenFinalizeBlockRequest): ListenFinalizeBlockRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenFinalizeBlockRequest",
      value: ListenFinalizeBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenFinalizeBlockRequestProtoMsg): ListenFinalizeBlockRequest {
    return ListenFinalizeBlockRequest.decode(message.value);
  },
  toProto(message: ListenFinalizeBlockRequest): Uint8Array {
    return ListenFinalizeBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: ListenFinalizeBlockRequest): ListenFinalizeBlockRequestProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
      value: ListenFinalizeBlockRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListenFinalizeBlockRequest.typeUrl, ListenFinalizeBlockRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenFinalizeBlockRequest.aminoType, ListenFinalizeBlockRequest.typeUrl);
function createBaseListenFinalizeBlockResponse(): ListenFinalizeBlockResponse {
  return {};
}
export const ListenFinalizeBlockResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
  aminoType: "cosmos-sdk/ListenFinalizeBlockResponse",
  is(o: any): o is ListenFinalizeBlockResponse {
    return o && o.$typeUrl === ListenFinalizeBlockResponse.typeUrl;
  },
  isAmino(o: any): o is ListenFinalizeBlockResponseAmino {
    return o && o.$typeUrl === ListenFinalizeBlockResponse.typeUrl;
  },
  encode(_: ListenFinalizeBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenFinalizeBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenFinalizeBlockResponse();
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
  fromPartial(_: DeepPartial<ListenFinalizeBlockResponse>): ListenFinalizeBlockResponse {
    const message = createBaseListenFinalizeBlockResponse();
    return message;
  },
  fromAmino(_: ListenFinalizeBlockResponseAmino): ListenFinalizeBlockResponse {
    const message = createBaseListenFinalizeBlockResponse();
    return message;
  },
  toAmino(_: ListenFinalizeBlockResponse): ListenFinalizeBlockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListenFinalizeBlockResponseAminoMsg): ListenFinalizeBlockResponse {
    return ListenFinalizeBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListenFinalizeBlockResponse): ListenFinalizeBlockResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenFinalizeBlockResponse",
      value: ListenFinalizeBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenFinalizeBlockResponseProtoMsg): ListenFinalizeBlockResponse {
    return ListenFinalizeBlockResponse.decode(message.value);
  },
  toProto(message: ListenFinalizeBlockResponse): Uint8Array {
    return ListenFinalizeBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: ListenFinalizeBlockResponse): ListenFinalizeBlockResponseProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
      value: ListenFinalizeBlockResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListenFinalizeBlockResponse.typeUrl, ListenFinalizeBlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenFinalizeBlockResponse.aminoType, ListenFinalizeBlockResponse.typeUrl);
function createBaseListenCommitRequest(): ListenCommitRequest {
  return {
    blockHeight: BigInt(0),
    res: undefined,
    changeSet: []
  };
}
export const ListenCommitRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
  aminoType: "cosmos-sdk/ListenCommitRequest",
  is(o: any): o is ListenCommitRequest {
    return o && (o.$typeUrl === ListenCommitRequest.typeUrl || typeof o.blockHeight === "bigint" && Array.isArray(o.changeSet) && (!o.changeSet.length || StoreKVPair.is(o.changeSet[0])));
  },
  isAmino(o: any): o is ListenCommitRequestAmino {
    return o && (o.$typeUrl === ListenCommitRequest.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.change_set) && (!o.change_set.length || StoreKVPair.isAmino(o.change_set[0])));
  },
  encode(message: ListenCommitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.res !== undefined) {
      ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.changeSet) {
      StoreKVPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenCommitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.res = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 3:
          message.changeSet.push(StoreKVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListenCommitRequest>): ListenCommitRequest {
    const message = createBaseListenCommitRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.res = object.res !== undefined && object.res !== null ? ResponseCommit.fromPartial(object.res) : undefined;
    message.changeSet = object.changeSet?.map(e => StoreKVPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListenCommitRequestAmino): ListenCommitRequest {
    const message = createBaseListenCommitRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseCommit.fromAmino(object.res);
    }
    message.changeSet = object.change_set?.map(e => StoreKVPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListenCommitRequest): ListenCommitRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.res = message.res ? ResponseCommit.toAmino(message.res) : undefined;
    if (message.changeSet) {
      obj.change_set = message.changeSet.map(e => e ? StoreKVPair.toAmino(e) : undefined);
    } else {
      obj.change_set = message.changeSet;
    }
    return obj;
  },
  fromAminoMsg(object: ListenCommitRequestAminoMsg): ListenCommitRequest {
    return ListenCommitRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListenCommitRequest): ListenCommitRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenCommitRequest",
      value: ListenCommitRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenCommitRequestProtoMsg): ListenCommitRequest {
    return ListenCommitRequest.decode(message.value);
  },
  toProto(message: ListenCommitRequest): Uint8Array {
    return ListenCommitRequest.encode(message).finish();
  },
  toProtoMsg(message: ListenCommitRequest): ListenCommitRequestProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
      value: ListenCommitRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListenCommitRequest.typeUrl, ListenCommitRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenCommitRequest.aminoType, ListenCommitRequest.typeUrl);
function createBaseListenCommitResponse(): ListenCommitResponse {
  return {};
}
export const ListenCommitResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
  aminoType: "cosmos-sdk/ListenCommitResponse",
  is(o: any): o is ListenCommitResponse {
    return o && o.$typeUrl === ListenCommitResponse.typeUrl;
  },
  isAmino(o: any): o is ListenCommitResponseAmino {
    return o && o.$typeUrl === ListenCommitResponse.typeUrl;
  },
  encode(_: ListenCommitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenCommitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitResponse();
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
  fromPartial(_: DeepPartial<ListenCommitResponse>): ListenCommitResponse {
    const message = createBaseListenCommitResponse();
    return message;
  },
  fromAmino(_: ListenCommitResponseAmino): ListenCommitResponse {
    const message = createBaseListenCommitResponse();
    return message;
  },
  toAmino(_: ListenCommitResponse): ListenCommitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListenCommitResponseAminoMsg): ListenCommitResponse {
    return ListenCommitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListenCommitResponse): ListenCommitResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenCommitResponse",
      value: ListenCommitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenCommitResponseProtoMsg): ListenCommitResponse {
    return ListenCommitResponse.decode(message.value);
  },
  toProto(message: ListenCommitResponse): Uint8Array {
    return ListenCommitResponse.encode(message).finish();
  },
  toProtoMsg(message: ListenCommitResponse): ListenCommitResponseProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
      value: ListenCommitResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListenCommitResponse.typeUrl, ListenCommitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenCommitResponse.aminoType, ListenCommitResponse.typeUrl);