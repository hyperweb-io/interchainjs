import { Params, ParamsAmino, FeedConfigInfo, FeedConfigInfoAmino, FeedConfig, FeedConfigAmino, EpochAndRound, EpochAndRoundAmino, Transmission, TransmissionAmino } from "./ocr";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryFeedConfigRequest {
  feedId: string;
}
export interface QueryFeedConfigRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest";
  value: Uint8Array;
}
export interface QueryFeedConfigRequestAmino {
  feed_id: string;
}
export interface QueryFeedConfigRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryFeedConfigRequest";
  value: QueryFeedConfigRequestAmino;
}
export interface QueryFeedConfigResponse {
  feedConfigInfo?: FeedConfigInfo;
  feedConfig?: FeedConfig;
}
export interface QueryFeedConfigResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse";
  value: Uint8Array;
}
export interface QueryFeedConfigResponseAmino {
  feed_config_info?: FeedConfigInfoAmino;
  feed_config?: FeedConfigAmino;
}
export interface QueryFeedConfigResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryFeedConfigResponse";
  value: QueryFeedConfigResponseAmino;
}
export interface QueryFeedConfigInfoRequest {
  feedId: string;
}
export interface QueryFeedConfigInfoRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest";
  value: Uint8Array;
}
export interface QueryFeedConfigInfoRequestAmino {
  feed_id: string;
}
export interface QueryFeedConfigInfoRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest";
  value: QueryFeedConfigInfoRequestAmino;
}
export interface QueryFeedConfigInfoResponse {
  feedConfigInfo?: FeedConfigInfo;
  epochAndRound?: EpochAndRound;
}
export interface QueryFeedConfigInfoResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse";
  value: Uint8Array;
}
export interface QueryFeedConfigInfoResponseAmino {
  feed_config_info?: FeedConfigInfoAmino;
  epoch_and_round?: EpochAndRoundAmino;
}
export interface QueryFeedConfigInfoResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse";
  value: QueryFeedConfigInfoResponseAmino;
}
export interface QueryLatestRoundRequest {
  feedId: string;
}
export interface QueryLatestRoundRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest";
  value: Uint8Array;
}
export interface QueryLatestRoundRequestAmino {
  feed_id: string;
}
export interface QueryLatestRoundRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryLatestRoundRequest";
  value: QueryLatestRoundRequestAmino;
}
export interface QueryLatestRoundResponse {
  latestRoundId: bigint;
  data?: Transmission;
}
export interface QueryLatestRoundResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse";
  value: Uint8Array;
}
export interface QueryLatestRoundResponseAmino {
  latest_round_id: string;
  data?: TransmissionAmino;
}
export interface QueryLatestRoundResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryLatestRoundResponse";
  value: QueryLatestRoundResponseAmino;
}
export interface QueryLatestTransmissionDetailsRequest {
  feedId: string;
}
export interface QueryLatestTransmissionDetailsRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest";
  value: Uint8Array;
}
export interface QueryLatestTransmissionDetailsRequestAmino {
  feed_id: string;
}
export interface QueryLatestTransmissionDetailsRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest";
  value: QueryLatestTransmissionDetailsRequestAmino;
}
export interface QueryLatestTransmissionDetailsResponse {
  configDigest: Uint8Array;
  epochAndRound?: EpochAndRound;
  data?: Transmission;
}
export interface QueryLatestTransmissionDetailsResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse";
  value: Uint8Array;
}
export interface QueryLatestTransmissionDetailsResponseAmino {
  config_digest: string;
  epoch_and_round?: EpochAndRoundAmino;
  data?: TransmissionAmino;
}
export interface QueryLatestTransmissionDetailsResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse";
  value: QueryLatestTransmissionDetailsResponseAmino;
}
export interface QueryOwedAmountRequest {
  transmitter: string;
}
export interface QueryOwedAmountRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest";
  value: Uint8Array;
}
export interface QueryOwedAmountRequestAmino {
  transmitter: string;
}
export interface QueryOwedAmountRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryOwedAmountRequest";
  value: QueryOwedAmountRequestAmino;
}
export interface QueryOwedAmountResponse {
  amount: Coin;
}
export interface QueryOwedAmountResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse";
  value: Uint8Array;
}
export interface QueryOwedAmountResponseAmino {
  amount: CoinAmino;
}
export interface QueryOwedAmountResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryOwedAmountResponse";
  value: QueryOwedAmountResponseAmino;
}
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.ocr.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
export interface QueryModuleStateResponse {
  state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.ocr.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest",
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
      typeUrl: "/injective.ocr.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse",
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
      typeUrl: "/injective.ocr.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryFeedConfigRequest(): QueryFeedConfigRequest {
  return {
    feedId: ""
  };
}
export const QueryFeedConfigRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest",
  is(o: any): o is QueryFeedConfigRequest {
    return o && (o.$typeUrl === QueryFeedConfigRequest.typeUrl || typeof o.feedId === "string");
  },
  isAmino(o: any): o is QueryFeedConfigRequestAmino {
    return o && (o.$typeUrl === QueryFeedConfigRequest.typeUrl || typeof o.feed_id === "string");
  },
  encode(message: QueryFeedConfigRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeedConfigRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeedConfigRequest>): QueryFeedConfigRequest {
    const message = createBaseQueryFeedConfigRequest();
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromAmino(object: QueryFeedConfigRequestAmino): QueryFeedConfigRequest {
    const message = createBaseQueryFeedConfigRequest();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    return message;
  },
  toAmino(message: QueryFeedConfigRequest): QueryFeedConfigRequestAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    return obj;
  },
  fromAminoMsg(object: QueryFeedConfigRequestAminoMsg): QueryFeedConfigRequest {
    return QueryFeedConfigRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeedConfigRequestProtoMsg): QueryFeedConfigRequest {
    return QueryFeedConfigRequest.decode(message.value);
  },
  toProto(message: QueryFeedConfigRequest): Uint8Array {
    return QueryFeedConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeedConfigRequest): QueryFeedConfigRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigRequest",
      value: QueryFeedConfigRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeedConfigRequest.typeUrl, QueryFeedConfigRequest);
function createBaseQueryFeedConfigResponse(): QueryFeedConfigResponse {
  return {
    feedConfigInfo: undefined,
    feedConfig: undefined
  };
}
export const QueryFeedConfigResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse",
  is(o: any): o is QueryFeedConfigResponse {
    return o && o.$typeUrl === QueryFeedConfigResponse.typeUrl;
  },
  isAmino(o: any): o is QueryFeedConfigResponseAmino {
    return o && o.$typeUrl === QueryFeedConfigResponse.typeUrl;
  },
  encode(message: QueryFeedConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedConfigInfo !== undefined) {
      FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.feedConfig !== undefined) {
      FeedConfig.encode(message.feedConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeedConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.feedConfig = FeedConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeedConfigResponse>): QueryFeedConfigResponse {
    const message = createBaseQueryFeedConfigResponse();
    message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
    message.feedConfig = object.feedConfig !== undefined && object.feedConfig !== null ? FeedConfig.fromPartial(object.feedConfig) : undefined;
    return message;
  },
  fromAmino(object: QueryFeedConfigResponseAmino): QueryFeedConfigResponse {
    const message = createBaseQueryFeedConfigResponse();
    if (object.feed_config_info !== undefined && object.feed_config_info !== null) {
      message.feedConfigInfo = FeedConfigInfo.fromAmino(object.feed_config_info);
    }
    if (object.feed_config !== undefined && object.feed_config !== null) {
      message.feedConfig = FeedConfig.fromAmino(object.feed_config);
    }
    return message;
  },
  toAmino(message: QueryFeedConfigResponse): QueryFeedConfigResponseAmino {
    const obj: any = {};
    obj.feed_config_info = message.feedConfigInfo ? FeedConfigInfo.toAmino(message.feedConfigInfo) : undefined;
    obj.feed_config = message.feedConfig ? FeedConfig.toAmino(message.feedConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeedConfigResponseAminoMsg): QueryFeedConfigResponse {
    return QueryFeedConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeedConfigResponseProtoMsg): QueryFeedConfigResponse {
    return QueryFeedConfigResponse.decode(message.value);
  },
  toProto(message: QueryFeedConfigResponse): Uint8Array {
    return QueryFeedConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeedConfigResponse): QueryFeedConfigResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigResponse",
      value: QueryFeedConfigResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeedConfigResponse.typeUrl, QueryFeedConfigResponse);
function createBaseQueryFeedConfigInfoRequest(): QueryFeedConfigInfoRequest {
  return {
    feedId: ""
  };
}
export const QueryFeedConfigInfoRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest",
  is(o: any): o is QueryFeedConfigInfoRequest {
    return o && (o.$typeUrl === QueryFeedConfigInfoRequest.typeUrl || typeof o.feedId === "string");
  },
  isAmino(o: any): o is QueryFeedConfigInfoRequestAmino {
    return o && (o.$typeUrl === QueryFeedConfigInfoRequest.typeUrl || typeof o.feed_id === "string");
  },
  encode(message: QueryFeedConfigInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeedConfigInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeedConfigInfoRequest>): QueryFeedConfigInfoRequest {
    const message = createBaseQueryFeedConfigInfoRequest();
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromAmino(object: QueryFeedConfigInfoRequestAmino): QueryFeedConfigInfoRequest {
    const message = createBaseQueryFeedConfigInfoRequest();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    return message;
  },
  toAmino(message: QueryFeedConfigInfoRequest): QueryFeedConfigInfoRequestAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    return obj;
  },
  fromAminoMsg(object: QueryFeedConfigInfoRequestAminoMsg): QueryFeedConfigInfoRequest {
    return QueryFeedConfigInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeedConfigInfoRequestProtoMsg): QueryFeedConfigInfoRequest {
    return QueryFeedConfigInfoRequest.decode(message.value);
  },
  toProto(message: QueryFeedConfigInfoRequest): Uint8Array {
    return QueryFeedConfigInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeedConfigInfoRequest): QueryFeedConfigInfoRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoRequest",
      value: QueryFeedConfigInfoRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeedConfigInfoRequest.typeUrl, QueryFeedConfigInfoRequest);
function createBaseQueryFeedConfigInfoResponse(): QueryFeedConfigInfoResponse {
  return {
    feedConfigInfo: undefined,
    epochAndRound: undefined
  };
}
export const QueryFeedConfigInfoResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse",
  is(o: any): o is QueryFeedConfigInfoResponse {
    return o && o.$typeUrl === QueryFeedConfigInfoResponse.typeUrl;
  },
  isAmino(o: any): o is QueryFeedConfigInfoResponseAmino {
    return o && o.$typeUrl === QueryFeedConfigInfoResponse.typeUrl;
  },
  encode(message: QueryFeedConfigInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedConfigInfo !== undefined) {
      FeedConfigInfo.encode(message.feedConfigInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeedConfigInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeedConfigInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedConfigInfo = FeedConfigInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeedConfigInfoResponse>): QueryFeedConfigInfoResponse {
    const message = createBaseQueryFeedConfigInfoResponse();
    message.feedConfigInfo = object.feedConfigInfo !== undefined && object.feedConfigInfo !== null ? FeedConfigInfo.fromPartial(object.feedConfigInfo) : undefined;
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    return message;
  },
  fromAmino(object: QueryFeedConfigInfoResponseAmino): QueryFeedConfigInfoResponse {
    const message = createBaseQueryFeedConfigInfoResponse();
    if (object.feed_config_info !== undefined && object.feed_config_info !== null) {
      message.feedConfigInfo = FeedConfigInfo.fromAmino(object.feed_config_info);
    }
    if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
      message.epochAndRound = EpochAndRound.fromAmino(object.epoch_and_round);
    }
    return message;
  },
  toAmino(message: QueryFeedConfigInfoResponse): QueryFeedConfigInfoResponseAmino {
    const obj: any = {};
    obj.feed_config_info = message.feedConfigInfo ? FeedConfigInfo.toAmino(message.feedConfigInfo) : undefined;
    obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeedConfigInfoResponseAminoMsg): QueryFeedConfigInfoResponse {
    return QueryFeedConfigInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeedConfigInfoResponseProtoMsg): QueryFeedConfigInfoResponse {
    return QueryFeedConfigInfoResponse.decode(message.value);
  },
  toProto(message: QueryFeedConfigInfoResponse): Uint8Array {
    return QueryFeedConfigInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeedConfigInfoResponse): QueryFeedConfigInfoResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryFeedConfigInfoResponse",
      value: QueryFeedConfigInfoResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryFeedConfigInfoResponse.typeUrl, QueryFeedConfigInfoResponse);
function createBaseQueryLatestRoundRequest(): QueryLatestRoundRequest {
  return {
    feedId: ""
  };
}
export const QueryLatestRoundRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest",
  is(o: any): o is QueryLatestRoundRequest {
    return o && (o.$typeUrl === QueryLatestRoundRequest.typeUrl || typeof o.feedId === "string");
  },
  isAmino(o: any): o is QueryLatestRoundRequestAmino {
    return o && (o.$typeUrl === QueryLatestRoundRequest.typeUrl || typeof o.feed_id === "string");
  },
  encode(message: QueryLatestRoundRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestRoundRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestRoundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLatestRoundRequest>): QueryLatestRoundRequest {
    const message = createBaseQueryLatestRoundRequest();
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromAmino(object: QueryLatestRoundRequestAmino): QueryLatestRoundRequest {
    const message = createBaseQueryLatestRoundRequest();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    return message;
  },
  toAmino(message: QueryLatestRoundRequest): QueryLatestRoundRequestAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    return obj;
  },
  fromAminoMsg(object: QueryLatestRoundRequestAminoMsg): QueryLatestRoundRequest {
    return QueryLatestRoundRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestRoundRequestProtoMsg): QueryLatestRoundRequest {
    return QueryLatestRoundRequest.decode(message.value);
  },
  toProto(message: QueryLatestRoundRequest): Uint8Array {
    return QueryLatestRoundRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestRoundRequest): QueryLatestRoundRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundRequest",
      value: QueryLatestRoundRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLatestRoundRequest.typeUrl, QueryLatestRoundRequest);
function createBaseQueryLatestRoundResponse(): QueryLatestRoundResponse {
  return {
    latestRoundId: BigInt(0),
    data: undefined
  };
}
export const QueryLatestRoundResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse",
  is(o: any): o is QueryLatestRoundResponse {
    return o && (o.$typeUrl === QueryLatestRoundResponse.typeUrl || typeof o.latestRoundId === "bigint");
  },
  isAmino(o: any): o is QueryLatestRoundResponseAmino {
    return o && (o.$typeUrl === QueryLatestRoundResponse.typeUrl || typeof o.latest_round_id === "bigint");
  },
  encode(message: QueryLatestRoundResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.latestRoundId !== BigInt(0)) {
      writer.uint32(8).uint64(message.latestRoundId);
    }
    if (message.data !== undefined) {
      Transmission.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestRoundResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestRoundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.latestRoundId = reader.uint64();
          break;
        case 2:
          message.data = Transmission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLatestRoundResponse>): QueryLatestRoundResponse {
    const message = createBaseQueryLatestRoundResponse();
    message.latestRoundId = object.latestRoundId !== undefined && object.latestRoundId !== null ? BigInt(object.latestRoundId.toString()) : BigInt(0);
    message.data = object.data !== undefined && object.data !== null ? Transmission.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: QueryLatestRoundResponseAmino): QueryLatestRoundResponse {
    const message = createBaseQueryLatestRoundResponse();
    if (object.latest_round_id !== undefined && object.latest_round_id !== null) {
      message.latestRoundId = BigInt(object.latest_round_id);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Transmission.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message: QueryLatestRoundResponse): QueryLatestRoundResponseAmino {
    const obj: any = {};
    obj.latest_round_id = message.latestRoundId !== BigInt(0) ? message.latestRoundId.toString() : undefined;
    obj.data = message.data ? Transmission.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestRoundResponseAminoMsg): QueryLatestRoundResponse {
    return QueryLatestRoundResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestRoundResponseProtoMsg): QueryLatestRoundResponse {
    return QueryLatestRoundResponse.decode(message.value);
  },
  toProto(message: QueryLatestRoundResponse): Uint8Array {
    return QueryLatestRoundResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestRoundResponse): QueryLatestRoundResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryLatestRoundResponse",
      value: QueryLatestRoundResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLatestRoundResponse.typeUrl, QueryLatestRoundResponse);
function createBaseQueryLatestTransmissionDetailsRequest(): QueryLatestTransmissionDetailsRequest {
  return {
    feedId: ""
  };
}
export const QueryLatestTransmissionDetailsRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest",
  is(o: any): o is QueryLatestTransmissionDetailsRequest {
    return o && (o.$typeUrl === QueryLatestTransmissionDetailsRequest.typeUrl || typeof o.feedId === "string");
  },
  isAmino(o: any): o is QueryLatestTransmissionDetailsRequestAmino {
    return o && (o.$typeUrl === QueryLatestTransmissionDetailsRequest.typeUrl || typeof o.feed_id === "string");
  },
  encode(message: QueryLatestTransmissionDetailsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feedId !== "") {
      writer.uint32(10).string(message.feedId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestTransmissionDetailsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestTransmissionDetailsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feedId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLatestTransmissionDetailsRequest>): QueryLatestTransmissionDetailsRequest {
    const message = createBaseQueryLatestTransmissionDetailsRequest();
    message.feedId = object.feedId ?? "";
    return message;
  },
  fromAmino(object: QueryLatestTransmissionDetailsRequestAmino): QueryLatestTransmissionDetailsRequest {
    const message = createBaseQueryLatestTransmissionDetailsRequest();
    if (object.feed_id !== undefined && object.feed_id !== null) {
      message.feedId = object.feed_id;
    }
    return message;
  },
  toAmino(message: QueryLatestTransmissionDetailsRequest): QueryLatestTransmissionDetailsRequestAmino {
    const obj: any = {};
    obj.feed_id = message.feedId === "" ? undefined : message.feedId;
    return obj;
  },
  fromAminoMsg(object: QueryLatestTransmissionDetailsRequestAminoMsg): QueryLatestTransmissionDetailsRequest {
    return QueryLatestTransmissionDetailsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestTransmissionDetailsRequestProtoMsg): QueryLatestTransmissionDetailsRequest {
    return QueryLatestTransmissionDetailsRequest.decode(message.value);
  },
  toProto(message: QueryLatestTransmissionDetailsRequest): Uint8Array {
    return QueryLatestTransmissionDetailsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestTransmissionDetailsRequest): QueryLatestTransmissionDetailsRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsRequest",
      value: QueryLatestTransmissionDetailsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLatestTransmissionDetailsRequest.typeUrl, QueryLatestTransmissionDetailsRequest);
function createBaseQueryLatestTransmissionDetailsResponse(): QueryLatestTransmissionDetailsResponse {
  return {
    configDigest: new Uint8Array(),
    epochAndRound: undefined,
    data: undefined
  };
}
export const QueryLatestTransmissionDetailsResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse",
  is(o: any): o is QueryLatestTransmissionDetailsResponse {
    return o && (o.$typeUrl === QueryLatestTransmissionDetailsResponse.typeUrl || o.configDigest instanceof Uint8Array || typeof o.configDigest === "string");
  },
  isAmino(o: any): o is QueryLatestTransmissionDetailsResponseAmino {
    return o && (o.$typeUrl === QueryLatestTransmissionDetailsResponse.typeUrl || o.config_digest instanceof Uint8Array || typeof o.config_digest === "string");
  },
  encode(message: QueryLatestTransmissionDetailsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.configDigest.length !== 0) {
      writer.uint32(10).bytes(message.configDigest);
    }
    if (message.epochAndRound !== undefined) {
      EpochAndRound.encode(message.epochAndRound, writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Transmission.encode(message.data, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestTransmissionDetailsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestTransmissionDetailsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.configDigest = reader.bytes();
          break;
        case 2:
          message.epochAndRound = EpochAndRound.decode(reader, reader.uint32());
          break;
        case 3:
          message.data = Transmission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLatestTransmissionDetailsResponse>): QueryLatestTransmissionDetailsResponse {
    const message = createBaseQueryLatestTransmissionDetailsResponse();
    message.configDigest = object.configDigest ?? new Uint8Array();
    message.epochAndRound = object.epochAndRound !== undefined && object.epochAndRound !== null ? EpochAndRound.fromPartial(object.epochAndRound) : undefined;
    message.data = object.data !== undefined && object.data !== null ? Transmission.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: QueryLatestTransmissionDetailsResponseAmino): QueryLatestTransmissionDetailsResponse {
    const message = createBaseQueryLatestTransmissionDetailsResponse();
    if (object.config_digest !== undefined && object.config_digest !== null) {
      message.configDigest = bytesFromBase64(object.config_digest);
    }
    if (object.epoch_and_round !== undefined && object.epoch_and_round !== null) {
      message.epochAndRound = EpochAndRound.fromAmino(object.epoch_and_round);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Transmission.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message: QueryLatestTransmissionDetailsResponse): QueryLatestTransmissionDetailsResponseAmino {
    const obj: any = {};
    obj.config_digest = message.configDigest ? base64FromBytes(message.configDigest) : undefined;
    obj.epoch_and_round = message.epochAndRound ? EpochAndRound.toAmino(message.epochAndRound) : undefined;
    obj.data = message.data ? Transmission.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestTransmissionDetailsResponseAminoMsg): QueryLatestTransmissionDetailsResponse {
    return QueryLatestTransmissionDetailsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestTransmissionDetailsResponseProtoMsg): QueryLatestTransmissionDetailsResponse {
    return QueryLatestTransmissionDetailsResponse.decode(message.value);
  },
  toProto(message: QueryLatestTransmissionDetailsResponse): Uint8Array {
    return QueryLatestTransmissionDetailsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestTransmissionDetailsResponse): QueryLatestTransmissionDetailsResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryLatestTransmissionDetailsResponse",
      value: QueryLatestTransmissionDetailsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryLatestTransmissionDetailsResponse.typeUrl, QueryLatestTransmissionDetailsResponse);
function createBaseQueryOwedAmountRequest(): QueryOwedAmountRequest {
  return {
    transmitter: ""
  };
}
export const QueryOwedAmountRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest",
  is(o: any): o is QueryOwedAmountRequest {
    return o && (o.$typeUrl === QueryOwedAmountRequest.typeUrl || typeof o.transmitter === "string");
  },
  isAmino(o: any): o is QueryOwedAmountRequestAmino {
    return o && (o.$typeUrl === QueryOwedAmountRequest.typeUrl || typeof o.transmitter === "string");
  },
  encode(message: QueryOwedAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transmitter !== "") {
      writer.uint32(10).string(message.transmitter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwedAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwedAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transmitter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOwedAmountRequest>): QueryOwedAmountRequest {
    const message = createBaseQueryOwedAmountRequest();
    message.transmitter = object.transmitter ?? "";
    return message;
  },
  fromAmino(object: QueryOwedAmountRequestAmino): QueryOwedAmountRequest {
    const message = createBaseQueryOwedAmountRequest();
    if (object.transmitter !== undefined && object.transmitter !== null) {
      message.transmitter = object.transmitter;
    }
    return message;
  },
  toAmino(message: QueryOwedAmountRequest): QueryOwedAmountRequestAmino {
    const obj: any = {};
    obj.transmitter = message.transmitter === "" ? undefined : message.transmitter;
    return obj;
  },
  fromAminoMsg(object: QueryOwedAmountRequestAminoMsg): QueryOwedAmountRequest {
    return QueryOwedAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwedAmountRequestProtoMsg): QueryOwedAmountRequest {
    return QueryOwedAmountRequest.decode(message.value);
  },
  toProto(message: QueryOwedAmountRequest): Uint8Array {
    return QueryOwedAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwedAmountRequest): QueryOwedAmountRequestProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountRequest",
      value: QueryOwedAmountRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOwedAmountRequest.typeUrl, QueryOwedAmountRequest);
function createBaseQueryOwedAmountResponse(): QueryOwedAmountResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const QueryOwedAmountResponse = {
  typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse",
  is(o: any): o is QueryOwedAmountResponse {
    return o && (o.$typeUrl === QueryOwedAmountResponse.typeUrl || Coin.is(o.amount));
  },
  isAmino(o: any): o is QueryOwedAmountResponseAmino {
    return o && (o.$typeUrl === QueryOwedAmountResponse.typeUrl || Coin.isAmino(o.amount));
  },
  encode(message: QueryOwedAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwedAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwedAmountResponse();
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
  fromPartial(object: DeepPartial<QueryOwedAmountResponse>): QueryOwedAmountResponse {
    const message = createBaseQueryOwedAmountResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: QueryOwedAmountResponseAmino): QueryOwedAmountResponse {
    const message = createBaseQueryOwedAmountResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: QueryOwedAmountResponse): QueryOwedAmountResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOwedAmountResponseAminoMsg): QueryOwedAmountResponse {
    return QueryOwedAmountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOwedAmountResponseProtoMsg): QueryOwedAmountResponse {
    return QueryOwedAmountResponse.decode(message.value);
  },
  toProto(message: QueryOwedAmountResponse): Uint8Array {
    return QueryOwedAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwedAmountResponse): QueryOwedAmountResponseProtoMsg {
    return {
      typeUrl: "/injective.ocr.v1beta1.QueryOwedAmountResponse",
      value: QueryOwedAmountResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOwedAmountResponse.typeUrl, QueryOwedAmountResponse);
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
export const QueryModuleStateRequest = {
  typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest",
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
      typeUrl: "/injective.ocr.v1beta1.QueryModuleStateRequest",
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
  typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse",
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
      typeUrl: "/injective.ocr.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryModuleStateResponse.typeUrl, QueryModuleStateResponse);