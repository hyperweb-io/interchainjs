import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** spot authz messages */
export interface CreateSpotLimitOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CreateSpotLimitOrderAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz";
  value: Uint8Array;
}
/** spot authz messages */
export interface CreateSpotLimitOrderAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface CreateSpotLimitOrderAuthzAminoMsg {
  type: "exchange/CreateSpotLimitOrderAuthz";
  value: CreateSpotLimitOrderAuthzAmino;
}
export interface CreateSpotMarketOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CreateSpotMarketOrderAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz";
  value: Uint8Array;
}
export interface CreateSpotMarketOrderAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface CreateSpotMarketOrderAuthzAminoMsg {
  type: "exchange/CreateSpotMarketOrderAuthz";
  value: CreateSpotMarketOrderAuthzAmino;
}
export interface BatchCreateSpotLimitOrdersAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface BatchCreateSpotLimitOrdersAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz";
  value: Uint8Array;
}
export interface BatchCreateSpotLimitOrdersAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface BatchCreateSpotLimitOrdersAuthzAminoMsg {
  type: "exchange/BatchCreateSpotLimitOrdersAuthz";
  value: BatchCreateSpotLimitOrdersAuthzAmino;
}
export interface CancelSpotOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CancelSpotOrderAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz";
  value: Uint8Array;
}
export interface CancelSpotOrderAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface CancelSpotOrderAuthzAminoMsg {
  type: "exchange/CancelSpotOrderAuthz";
  value: CancelSpotOrderAuthzAmino;
}
export interface BatchCancelSpotOrdersAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface BatchCancelSpotOrdersAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz";
  value: Uint8Array;
}
export interface BatchCancelSpotOrdersAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface BatchCancelSpotOrdersAuthzAminoMsg {
  type: "exchange/BatchCancelSpotOrdersAuthz";
  value: BatchCancelSpotOrdersAuthzAmino;
}
/** derivative authz messages */
export interface CreateDerivativeLimitOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CreateDerivativeLimitOrderAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz";
  value: Uint8Array;
}
/** derivative authz messages */
export interface CreateDerivativeLimitOrderAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface CreateDerivativeLimitOrderAuthzAminoMsg {
  type: "exchange/CreateDerivativeLimitOrderAuthz";
  value: CreateDerivativeLimitOrderAuthzAmino;
}
export interface CreateDerivativeMarketOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CreateDerivativeMarketOrderAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz";
  value: Uint8Array;
}
export interface CreateDerivativeMarketOrderAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface CreateDerivativeMarketOrderAuthzAminoMsg {
  type: "exchange/CreateDerivativeMarketOrderAuthz";
  value: CreateDerivativeMarketOrderAuthzAmino;
}
export interface BatchCreateDerivativeLimitOrdersAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz";
  value: Uint8Array;
}
export interface BatchCreateDerivativeLimitOrdersAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthzAminoMsg {
  type: "exchange/BatchCreateDerivativeLimitOrdersAuthz";
  value: BatchCreateDerivativeLimitOrdersAuthzAmino;
}
export interface CancelDerivativeOrderAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface CancelDerivativeOrderAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz";
  value: Uint8Array;
}
export interface CancelDerivativeOrderAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface CancelDerivativeOrderAuthzAminoMsg {
  type: "exchange/CancelDerivativeOrderAuthz";
  value: CancelDerivativeOrderAuthzAmino;
}
export interface BatchCancelDerivativeOrdersAuthz {
  subaccountId: string;
  marketIds: string[];
}
export interface BatchCancelDerivativeOrdersAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz";
  value: Uint8Array;
}
export interface BatchCancelDerivativeOrdersAuthzAmino {
  subaccount_id: string;
  market_ids: string[];
}
export interface BatchCancelDerivativeOrdersAuthzAminoMsg {
  type: "exchange/BatchCancelDerivativeOrdersAuthz";
  value: BatchCancelDerivativeOrdersAuthzAmino;
}
/** common authz message used in both spot & derivative markets */
export interface BatchUpdateOrdersAuthz {
  subaccountId: string;
  spotMarkets: string[];
  derivativeMarkets: string[];
}
export interface BatchUpdateOrdersAuthzProtoMsg {
  typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz";
  value: Uint8Array;
}
/** common authz message used in both spot & derivative markets */
export interface BatchUpdateOrdersAuthzAmino {
  subaccount_id: string;
  spot_markets: string[];
  derivative_markets: string[];
}
export interface BatchUpdateOrdersAuthzAminoMsg {
  type: "exchange/BatchUpdateOrdersAuthz";
  value: BatchUpdateOrdersAuthzAmino;
}
function createBaseCreateSpotLimitOrderAuthz(): CreateSpotLimitOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const CreateSpotLimitOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
  aminoType: "exchange/CreateSpotLimitOrderAuthz",
  is(o: any): o is CreateSpotLimitOrderAuthz {
    return o && (o.$typeUrl === CreateSpotLimitOrderAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is CreateSpotLimitOrderAuthzAmino {
    return o && (o.$typeUrl === CreateSpotLimitOrderAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: CreateSpotLimitOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateSpotLimitOrderAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSpotLimitOrderAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateSpotLimitOrderAuthz>): CreateSpotLimitOrderAuthz {
    const message = createBaseCreateSpotLimitOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CreateSpotLimitOrderAuthzAmino): CreateSpotLimitOrderAuthz {
    const message = createBaseCreateSpotLimitOrderAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: CreateSpotLimitOrderAuthz): CreateSpotLimitOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: CreateSpotLimitOrderAuthzAminoMsg): CreateSpotLimitOrderAuthz {
    return CreateSpotLimitOrderAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: CreateSpotLimitOrderAuthz): CreateSpotLimitOrderAuthzAminoMsg {
    return {
      type: "exchange/CreateSpotLimitOrderAuthz",
      value: CreateSpotLimitOrderAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: CreateSpotLimitOrderAuthzProtoMsg): CreateSpotLimitOrderAuthz {
    return CreateSpotLimitOrderAuthz.decode(message.value);
  },
  toProto(message: CreateSpotLimitOrderAuthz): Uint8Array {
    return CreateSpotLimitOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CreateSpotLimitOrderAuthz): CreateSpotLimitOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CreateSpotLimitOrderAuthz",
      value: CreateSpotLimitOrderAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CreateSpotLimitOrderAuthz.typeUrl, CreateSpotLimitOrderAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(CreateSpotLimitOrderAuthz.aminoType, CreateSpotLimitOrderAuthz.typeUrl);
function createBaseCreateSpotMarketOrderAuthz(): CreateSpotMarketOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const CreateSpotMarketOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
  aminoType: "exchange/CreateSpotMarketOrderAuthz",
  is(o: any): o is CreateSpotMarketOrderAuthz {
    return o && (o.$typeUrl === CreateSpotMarketOrderAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is CreateSpotMarketOrderAuthzAmino {
    return o && (o.$typeUrl === CreateSpotMarketOrderAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: CreateSpotMarketOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateSpotMarketOrderAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateSpotMarketOrderAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateSpotMarketOrderAuthz>): CreateSpotMarketOrderAuthz {
    const message = createBaseCreateSpotMarketOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CreateSpotMarketOrderAuthzAmino): CreateSpotMarketOrderAuthz {
    const message = createBaseCreateSpotMarketOrderAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: CreateSpotMarketOrderAuthz): CreateSpotMarketOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: CreateSpotMarketOrderAuthzAminoMsg): CreateSpotMarketOrderAuthz {
    return CreateSpotMarketOrderAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: CreateSpotMarketOrderAuthz): CreateSpotMarketOrderAuthzAminoMsg {
    return {
      type: "exchange/CreateSpotMarketOrderAuthz",
      value: CreateSpotMarketOrderAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: CreateSpotMarketOrderAuthzProtoMsg): CreateSpotMarketOrderAuthz {
    return CreateSpotMarketOrderAuthz.decode(message.value);
  },
  toProto(message: CreateSpotMarketOrderAuthz): Uint8Array {
    return CreateSpotMarketOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CreateSpotMarketOrderAuthz): CreateSpotMarketOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CreateSpotMarketOrderAuthz",
      value: CreateSpotMarketOrderAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CreateSpotMarketOrderAuthz.typeUrl, CreateSpotMarketOrderAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(CreateSpotMarketOrderAuthz.aminoType, CreateSpotMarketOrderAuthz.typeUrl);
function createBaseBatchCreateSpotLimitOrdersAuthz(): BatchCreateSpotLimitOrdersAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const BatchCreateSpotLimitOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
  aminoType: "exchange/BatchCreateSpotLimitOrdersAuthz",
  is(o: any): o is BatchCreateSpotLimitOrdersAuthz {
    return o && (o.$typeUrl === BatchCreateSpotLimitOrdersAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is BatchCreateSpotLimitOrdersAuthzAmino {
    return o && (o.$typeUrl === BatchCreateSpotLimitOrdersAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: BatchCreateSpotLimitOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchCreateSpotLimitOrdersAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCreateSpotLimitOrdersAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchCreateSpotLimitOrdersAuthz>): BatchCreateSpotLimitOrdersAuthz {
    const message = createBaseBatchCreateSpotLimitOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchCreateSpotLimitOrdersAuthzAmino): BatchCreateSpotLimitOrdersAuthz {
    const message = createBaseBatchCreateSpotLimitOrdersAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: BatchCreateSpotLimitOrdersAuthz): BatchCreateSpotLimitOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: BatchCreateSpotLimitOrdersAuthzAminoMsg): BatchCreateSpotLimitOrdersAuthz {
    return BatchCreateSpotLimitOrdersAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: BatchCreateSpotLimitOrdersAuthz): BatchCreateSpotLimitOrdersAuthzAminoMsg {
    return {
      type: "exchange/BatchCreateSpotLimitOrdersAuthz",
      value: BatchCreateSpotLimitOrdersAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: BatchCreateSpotLimitOrdersAuthzProtoMsg): BatchCreateSpotLimitOrdersAuthz {
    return BatchCreateSpotLimitOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchCreateSpotLimitOrdersAuthz): Uint8Array {
    return BatchCreateSpotLimitOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchCreateSpotLimitOrdersAuthz): BatchCreateSpotLimitOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCreateSpotLimitOrdersAuthz",
      value: BatchCreateSpotLimitOrdersAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchCreateSpotLimitOrdersAuthz.typeUrl, BatchCreateSpotLimitOrdersAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(BatchCreateSpotLimitOrdersAuthz.aminoType, BatchCreateSpotLimitOrdersAuthz.typeUrl);
function createBaseCancelSpotOrderAuthz(): CancelSpotOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const CancelSpotOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
  aminoType: "exchange/CancelSpotOrderAuthz",
  is(o: any): o is CancelSpotOrderAuthz {
    return o && (o.$typeUrl === CancelSpotOrderAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is CancelSpotOrderAuthzAmino {
    return o && (o.$typeUrl === CancelSpotOrderAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: CancelSpotOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CancelSpotOrderAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelSpotOrderAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CancelSpotOrderAuthz>): CancelSpotOrderAuthz {
    const message = createBaseCancelSpotOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CancelSpotOrderAuthzAmino): CancelSpotOrderAuthz {
    const message = createBaseCancelSpotOrderAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: CancelSpotOrderAuthz): CancelSpotOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: CancelSpotOrderAuthzAminoMsg): CancelSpotOrderAuthz {
    return CancelSpotOrderAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: CancelSpotOrderAuthz): CancelSpotOrderAuthzAminoMsg {
    return {
      type: "exchange/CancelSpotOrderAuthz",
      value: CancelSpotOrderAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: CancelSpotOrderAuthzProtoMsg): CancelSpotOrderAuthz {
    return CancelSpotOrderAuthz.decode(message.value);
  },
  toProto(message: CancelSpotOrderAuthz): Uint8Array {
    return CancelSpotOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CancelSpotOrderAuthz): CancelSpotOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CancelSpotOrderAuthz",
      value: CancelSpotOrderAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CancelSpotOrderAuthz.typeUrl, CancelSpotOrderAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(CancelSpotOrderAuthz.aminoType, CancelSpotOrderAuthz.typeUrl);
function createBaseBatchCancelSpotOrdersAuthz(): BatchCancelSpotOrdersAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const BatchCancelSpotOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
  aminoType: "exchange/BatchCancelSpotOrdersAuthz",
  is(o: any): o is BatchCancelSpotOrdersAuthz {
    return o && (o.$typeUrl === BatchCancelSpotOrdersAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is BatchCancelSpotOrdersAuthzAmino {
    return o && (o.$typeUrl === BatchCancelSpotOrdersAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: BatchCancelSpotOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchCancelSpotOrdersAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCancelSpotOrdersAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchCancelSpotOrdersAuthz>): BatchCancelSpotOrdersAuthz {
    const message = createBaseBatchCancelSpotOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchCancelSpotOrdersAuthzAmino): BatchCancelSpotOrdersAuthz {
    const message = createBaseBatchCancelSpotOrdersAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: BatchCancelSpotOrdersAuthz): BatchCancelSpotOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: BatchCancelSpotOrdersAuthzAminoMsg): BatchCancelSpotOrdersAuthz {
    return BatchCancelSpotOrdersAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: BatchCancelSpotOrdersAuthz): BatchCancelSpotOrdersAuthzAminoMsg {
    return {
      type: "exchange/BatchCancelSpotOrdersAuthz",
      value: BatchCancelSpotOrdersAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: BatchCancelSpotOrdersAuthzProtoMsg): BatchCancelSpotOrdersAuthz {
    return BatchCancelSpotOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchCancelSpotOrdersAuthz): Uint8Array {
    return BatchCancelSpotOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchCancelSpotOrdersAuthz): BatchCancelSpotOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCancelSpotOrdersAuthz",
      value: BatchCancelSpotOrdersAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchCancelSpotOrdersAuthz.typeUrl, BatchCancelSpotOrdersAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(BatchCancelSpotOrdersAuthz.aminoType, BatchCancelSpotOrdersAuthz.typeUrl);
function createBaseCreateDerivativeLimitOrderAuthz(): CreateDerivativeLimitOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const CreateDerivativeLimitOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
  aminoType: "exchange/CreateDerivativeLimitOrderAuthz",
  is(o: any): o is CreateDerivativeLimitOrderAuthz {
    return o && (o.$typeUrl === CreateDerivativeLimitOrderAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is CreateDerivativeLimitOrderAuthzAmino {
    return o && (o.$typeUrl === CreateDerivativeLimitOrderAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: CreateDerivativeLimitOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateDerivativeLimitOrderAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDerivativeLimitOrderAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateDerivativeLimitOrderAuthz>): CreateDerivativeLimitOrderAuthz {
    const message = createBaseCreateDerivativeLimitOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CreateDerivativeLimitOrderAuthzAmino): CreateDerivativeLimitOrderAuthz {
    const message = createBaseCreateDerivativeLimitOrderAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: CreateDerivativeLimitOrderAuthz): CreateDerivativeLimitOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: CreateDerivativeLimitOrderAuthzAminoMsg): CreateDerivativeLimitOrderAuthz {
    return CreateDerivativeLimitOrderAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: CreateDerivativeLimitOrderAuthz): CreateDerivativeLimitOrderAuthzAminoMsg {
    return {
      type: "exchange/CreateDerivativeLimitOrderAuthz",
      value: CreateDerivativeLimitOrderAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: CreateDerivativeLimitOrderAuthzProtoMsg): CreateDerivativeLimitOrderAuthz {
    return CreateDerivativeLimitOrderAuthz.decode(message.value);
  },
  toProto(message: CreateDerivativeLimitOrderAuthz): Uint8Array {
    return CreateDerivativeLimitOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CreateDerivativeLimitOrderAuthz): CreateDerivativeLimitOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CreateDerivativeLimitOrderAuthz",
      value: CreateDerivativeLimitOrderAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CreateDerivativeLimitOrderAuthz.typeUrl, CreateDerivativeLimitOrderAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(CreateDerivativeLimitOrderAuthz.aminoType, CreateDerivativeLimitOrderAuthz.typeUrl);
function createBaseCreateDerivativeMarketOrderAuthz(): CreateDerivativeMarketOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const CreateDerivativeMarketOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
  aminoType: "exchange/CreateDerivativeMarketOrderAuthz",
  is(o: any): o is CreateDerivativeMarketOrderAuthz {
    return o && (o.$typeUrl === CreateDerivativeMarketOrderAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is CreateDerivativeMarketOrderAuthzAmino {
    return o && (o.$typeUrl === CreateDerivativeMarketOrderAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: CreateDerivativeMarketOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CreateDerivativeMarketOrderAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDerivativeMarketOrderAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateDerivativeMarketOrderAuthz>): CreateDerivativeMarketOrderAuthz {
    const message = createBaseCreateDerivativeMarketOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CreateDerivativeMarketOrderAuthzAmino): CreateDerivativeMarketOrderAuthz {
    const message = createBaseCreateDerivativeMarketOrderAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: CreateDerivativeMarketOrderAuthz): CreateDerivativeMarketOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: CreateDerivativeMarketOrderAuthzAminoMsg): CreateDerivativeMarketOrderAuthz {
    return CreateDerivativeMarketOrderAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: CreateDerivativeMarketOrderAuthz): CreateDerivativeMarketOrderAuthzAminoMsg {
    return {
      type: "exchange/CreateDerivativeMarketOrderAuthz",
      value: CreateDerivativeMarketOrderAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: CreateDerivativeMarketOrderAuthzProtoMsg): CreateDerivativeMarketOrderAuthz {
    return CreateDerivativeMarketOrderAuthz.decode(message.value);
  },
  toProto(message: CreateDerivativeMarketOrderAuthz): Uint8Array {
    return CreateDerivativeMarketOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CreateDerivativeMarketOrderAuthz): CreateDerivativeMarketOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CreateDerivativeMarketOrderAuthz",
      value: CreateDerivativeMarketOrderAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CreateDerivativeMarketOrderAuthz.typeUrl, CreateDerivativeMarketOrderAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(CreateDerivativeMarketOrderAuthz.aminoType, CreateDerivativeMarketOrderAuthz.typeUrl);
function createBaseBatchCreateDerivativeLimitOrdersAuthz(): BatchCreateDerivativeLimitOrdersAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const BatchCreateDerivativeLimitOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
  aminoType: "exchange/BatchCreateDerivativeLimitOrdersAuthz",
  is(o: any): o is BatchCreateDerivativeLimitOrdersAuthz {
    return o && (o.$typeUrl === BatchCreateDerivativeLimitOrdersAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is BatchCreateDerivativeLimitOrdersAuthzAmino {
    return o && (o.$typeUrl === BatchCreateDerivativeLimitOrdersAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: BatchCreateDerivativeLimitOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchCreateDerivativeLimitOrdersAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCreateDerivativeLimitOrdersAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchCreateDerivativeLimitOrdersAuthz>): BatchCreateDerivativeLimitOrdersAuthz {
    const message = createBaseBatchCreateDerivativeLimitOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchCreateDerivativeLimitOrdersAuthzAmino): BatchCreateDerivativeLimitOrdersAuthz {
    const message = createBaseBatchCreateDerivativeLimitOrdersAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: BatchCreateDerivativeLimitOrdersAuthz): BatchCreateDerivativeLimitOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: BatchCreateDerivativeLimitOrdersAuthzAminoMsg): BatchCreateDerivativeLimitOrdersAuthz {
    return BatchCreateDerivativeLimitOrdersAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: BatchCreateDerivativeLimitOrdersAuthz): BatchCreateDerivativeLimitOrdersAuthzAminoMsg {
    return {
      type: "exchange/BatchCreateDerivativeLimitOrdersAuthz",
      value: BatchCreateDerivativeLimitOrdersAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: BatchCreateDerivativeLimitOrdersAuthzProtoMsg): BatchCreateDerivativeLimitOrdersAuthz {
    return BatchCreateDerivativeLimitOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchCreateDerivativeLimitOrdersAuthz): Uint8Array {
    return BatchCreateDerivativeLimitOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchCreateDerivativeLimitOrdersAuthz): BatchCreateDerivativeLimitOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCreateDerivativeLimitOrdersAuthz",
      value: BatchCreateDerivativeLimitOrdersAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchCreateDerivativeLimitOrdersAuthz.typeUrl, BatchCreateDerivativeLimitOrdersAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(BatchCreateDerivativeLimitOrdersAuthz.aminoType, BatchCreateDerivativeLimitOrdersAuthz.typeUrl);
function createBaseCancelDerivativeOrderAuthz(): CancelDerivativeOrderAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const CancelDerivativeOrderAuthz = {
  typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
  aminoType: "exchange/CancelDerivativeOrderAuthz",
  is(o: any): o is CancelDerivativeOrderAuthz {
    return o && (o.$typeUrl === CancelDerivativeOrderAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is CancelDerivativeOrderAuthzAmino {
    return o && (o.$typeUrl === CancelDerivativeOrderAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: CancelDerivativeOrderAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CancelDerivativeOrderAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelDerivativeOrderAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CancelDerivativeOrderAuthz>): CancelDerivativeOrderAuthz {
    const message = createBaseCancelDerivativeOrderAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CancelDerivativeOrderAuthzAmino): CancelDerivativeOrderAuthz {
    const message = createBaseCancelDerivativeOrderAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: CancelDerivativeOrderAuthz): CancelDerivativeOrderAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: CancelDerivativeOrderAuthzAminoMsg): CancelDerivativeOrderAuthz {
    return CancelDerivativeOrderAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: CancelDerivativeOrderAuthz): CancelDerivativeOrderAuthzAminoMsg {
    return {
      type: "exchange/CancelDerivativeOrderAuthz",
      value: CancelDerivativeOrderAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: CancelDerivativeOrderAuthzProtoMsg): CancelDerivativeOrderAuthz {
    return CancelDerivativeOrderAuthz.decode(message.value);
  },
  toProto(message: CancelDerivativeOrderAuthz): Uint8Array {
    return CancelDerivativeOrderAuthz.encode(message).finish();
  },
  toProtoMsg(message: CancelDerivativeOrderAuthz): CancelDerivativeOrderAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.CancelDerivativeOrderAuthz",
      value: CancelDerivativeOrderAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CancelDerivativeOrderAuthz.typeUrl, CancelDerivativeOrderAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(CancelDerivativeOrderAuthz.aminoType, CancelDerivativeOrderAuthz.typeUrl);
function createBaseBatchCancelDerivativeOrdersAuthz(): BatchCancelDerivativeOrdersAuthz {
  return {
    subaccountId: "",
    marketIds: []
  };
}
export const BatchCancelDerivativeOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
  aminoType: "exchange/BatchCancelDerivativeOrdersAuthz",
  is(o: any): o is BatchCancelDerivativeOrdersAuthz {
    return o && (o.$typeUrl === BatchCancelDerivativeOrdersAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.marketIds) && (!o.marketIds.length || typeof o.marketIds[0] === "string"));
  },
  isAmino(o: any): o is BatchCancelDerivativeOrdersAuthzAmino {
    return o && (o.$typeUrl === BatchCancelDerivativeOrdersAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.market_ids) && (!o.market_ids.length || typeof o.market_ids[0] === "string"));
  },
  encode(message: BatchCancelDerivativeOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.marketIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchCancelDerivativeOrdersAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCancelDerivativeOrdersAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.marketIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchCancelDerivativeOrdersAuthz>): BatchCancelDerivativeOrdersAuthz {
    const message = createBaseBatchCancelDerivativeOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.marketIds = object.marketIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchCancelDerivativeOrdersAuthzAmino): BatchCancelDerivativeOrdersAuthz {
    const message = createBaseBatchCancelDerivativeOrdersAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.marketIds = object.market_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: BatchCancelDerivativeOrdersAuthz): BatchCancelDerivativeOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.marketIds) {
      obj.market_ids = message.marketIds.map(e => e);
    } else {
      obj.market_ids = message.marketIds;
    }
    return obj;
  },
  fromAminoMsg(object: BatchCancelDerivativeOrdersAuthzAminoMsg): BatchCancelDerivativeOrdersAuthz {
    return BatchCancelDerivativeOrdersAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: BatchCancelDerivativeOrdersAuthz): BatchCancelDerivativeOrdersAuthzAminoMsg {
    return {
      type: "exchange/BatchCancelDerivativeOrdersAuthz",
      value: BatchCancelDerivativeOrdersAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: BatchCancelDerivativeOrdersAuthzProtoMsg): BatchCancelDerivativeOrdersAuthz {
    return BatchCancelDerivativeOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchCancelDerivativeOrdersAuthz): Uint8Array {
    return BatchCancelDerivativeOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchCancelDerivativeOrdersAuthz): BatchCancelDerivativeOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchCancelDerivativeOrdersAuthz",
      value: BatchCancelDerivativeOrdersAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchCancelDerivativeOrdersAuthz.typeUrl, BatchCancelDerivativeOrdersAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(BatchCancelDerivativeOrdersAuthz.aminoType, BatchCancelDerivativeOrdersAuthz.typeUrl);
function createBaseBatchUpdateOrdersAuthz(): BatchUpdateOrdersAuthz {
  return {
    subaccountId: "",
    spotMarkets: [],
    derivativeMarkets: []
  };
}
export const BatchUpdateOrdersAuthz = {
  typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
  aminoType: "exchange/BatchUpdateOrdersAuthz",
  is(o: any): o is BatchUpdateOrdersAuthz {
    return o && (o.$typeUrl === BatchUpdateOrdersAuthz.typeUrl || typeof o.subaccountId === "string" && Array.isArray(o.spotMarkets) && (!o.spotMarkets.length || typeof o.spotMarkets[0] === "string") && Array.isArray(o.derivativeMarkets) && (!o.derivativeMarkets.length || typeof o.derivativeMarkets[0] === "string"));
  },
  isAmino(o: any): o is BatchUpdateOrdersAuthzAmino {
    return o && (o.$typeUrl === BatchUpdateOrdersAuthz.typeUrl || typeof o.subaccount_id === "string" && Array.isArray(o.spot_markets) && (!o.spot_markets.length || typeof o.spot_markets[0] === "string") && Array.isArray(o.derivative_markets) && (!o.derivative_markets.length || typeof o.derivative_markets[0] === "string"));
  },
  encode(message: BatchUpdateOrdersAuthz, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subaccountId !== "") {
      writer.uint32(10).string(message.subaccountId);
    }
    for (const v of message.spotMarkets) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.derivativeMarkets) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchUpdateOrdersAuthz {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchUpdateOrdersAuthz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subaccountId = reader.string();
          break;
        case 2:
          message.spotMarkets.push(reader.string());
          break;
        case 3:
          message.derivativeMarkets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BatchUpdateOrdersAuthz>): BatchUpdateOrdersAuthz {
    const message = createBaseBatchUpdateOrdersAuthz();
    message.subaccountId = object.subaccountId ?? "";
    message.spotMarkets = object.spotMarkets?.map(e => e) || [];
    message.derivativeMarkets = object.derivativeMarkets?.map(e => e) || [];
    return message;
  },
  fromAmino(object: BatchUpdateOrdersAuthzAmino): BatchUpdateOrdersAuthz {
    const message = createBaseBatchUpdateOrdersAuthz();
    if (object.subaccount_id !== undefined && object.subaccount_id !== null) {
      message.subaccountId = object.subaccount_id;
    }
    message.spotMarkets = object.spot_markets?.map(e => e) || [];
    message.derivativeMarkets = object.derivative_markets?.map(e => e) || [];
    return message;
  },
  toAmino(message: BatchUpdateOrdersAuthz): BatchUpdateOrdersAuthzAmino {
    const obj: any = {};
    obj.subaccount_id = message.subaccountId === "" ? undefined : message.subaccountId;
    if (message.spotMarkets) {
      obj.spot_markets = message.spotMarkets.map(e => e);
    } else {
      obj.spot_markets = message.spotMarkets;
    }
    if (message.derivativeMarkets) {
      obj.derivative_markets = message.derivativeMarkets.map(e => e);
    } else {
      obj.derivative_markets = message.derivativeMarkets;
    }
    return obj;
  },
  fromAminoMsg(object: BatchUpdateOrdersAuthzAminoMsg): BatchUpdateOrdersAuthz {
    return BatchUpdateOrdersAuthz.fromAmino(object.value);
  },
  toAminoMsg(message: BatchUpdateOrdersAuthz): BatchUpdateOrdersAuthzAminoMsg {
    return {
      type: "exchange/BatchUpdateOrdersAuthz",
      value: BatchUpdateOrdersAuthz.toAmino(message)
    };
  },
  fromProtoMsg(message: BatchUpdateOrdersAuthzProtoMsg): BatchUpdateOrdersAuthz {
    return BatchUpdateOrdersAuthz.decode(message.value);
  },
  toProto(message: BatchUpdateOrdersAuthz): Uint8Array {
    return BatchUpdateOrdersAuthz.encode(message).finish();
  },
  toProtoMsg(message: BatchUpdateOrdersAuthz): BatchUpdateOrdersAuthzProtoMsg {
    return {
      typeUrl: "/injective.exchange.v1beta1.BatchUpdateOrdersAuthz",
      value: BatchUpdateOrdersAuthz.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchUpdateOrdersAuthz.typeUrl, BatchUpdateOrdersAuthz);
GlobalDecoderRegistry.registerAminoProtoMapping(BatchUpdateOrdersAuthz.aminoType, BatchUpdateOrdersAuthz.typeUrl);