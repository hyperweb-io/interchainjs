import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface EventCreateTFDenom {
  account: string;
  denom: string;
}
export interface EventCreateTFDenomProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventCreateTFDenom";
  value: Uint8Array;
}
export interface EventCreateTFDenomAmino {
  account: string;
  denom: string;
}
export interface EventCreateTFDenomAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventCreateTFDenom";
  value: EventCreateTFDenomAmino;
}
export interface EventMintTFDenom {
  recipientAddress: string;
  amount: Coin;
}
export interface EventMintTFDenomProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventMintTFDenom";
  value: Uint8Array;
}
export interface EventMintTFDenomAmino {
  recipient_address: string;
  amount: CoinAmino;
}
export interface EventMintTFDenomAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventMintTFDenom";
  value: EventMintTFDenomAmino;
}
export interface EventBurnDenom {
  burnerAddress: string;
  amount: Coin;
}
export interface EventBurnDenomProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventBurnDenom";
  value: Uint8Array;
}
export interface EventBurnDenomAmino {
  burner_address: string;
  amount: CoinAmino;
}
export interface EventBurnDenomAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventBurnDenom";
  value: EventBurnDenomAmino;
}
export interface EventChangeTFAdmin {
  denom: string;
  newAdminAddress: string;
}
export interface EventChangeTFAdminProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin";
  value: Uint8Array;
}
export interface EventChangeTFAdminAmino {
  denom: string;
  new_admin_address: string;
}
export interface EventChangeTFAdminAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin";
  value: EventChangeTFAdminAmino;
}
export interface EventSetTFDenomMetadata {
  denom: string;
  metadata: Metadata;
}
export interface EventSetTFDenomMetadataProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata";
  value: Uint8Array;
}
export interface EventSetTFDenomMetadataAmino {
  denom: string;
  metadata: MetadataAmino;
}
export interface EventSetTFDenomMetadataAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata";
  value: EventSetTFDenomMetadataAmino;
}
function createBaseEventCreateTFDenom(): EventCreateTFDenom {
  return {
    account: "",
    denom: ""
  };
}
export const EventCreateTFDenom = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventCreateTFDenom",
  is(o: any): o is EventCreateTFDenom {
    return o && (o.$typeUrl === EventCreateTFDenom.typeUrl || typeof o.account === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is EventCreateTFDenomAmino {
    return o && (o.$typeUrl === EventCreateTFDenom.typeUrl || typeof o.account === "string" && typeof o.denom === "string");
  },
  encode(message: EventCreateTFDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateTFDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateTFDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateTFDenom>): EventCreateTFDenom {
    const message = createBaseEventCreateTFDenom();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventCreateTFDenomAmino): EventCreateTFDenom {
    const message = createBaseEventCreateTFDenom();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventCreateTFDenom): EventCreateTFDenomAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventCreateTFDenomAminoMsg): EventCreateTFDenom {
    return EventCreateTFDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateTFDenomProtoMsg): EventCreateTFDenom {
    return EventCreateTFDenom.decode(message.value);
  },
  toProto(message: EventCreateTFDenom): Uint8Array {
    return EventCreateTFDenom.encode(message).finish();
  },
  toProtoMsg(message: EventCreateTFDenom): EventCreateTFDenomProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventCreateTFDenom",
      value: EventCreateTFDenom.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventCreateTFDenom.typeUrl, EventCreateTFDenom);
function createBaseEventMintTFDenom(): EventMintTFDenom {
  return {
    recipientAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const EventMintTFDenom = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventMintTFDenom",
  is(o: any): o is EventMintTFDenom {
    return o && (o.$typeUrl === EventMintTFDenom.typeUrl || typeof o.recipientAddress === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is EventMintTFDenomAmino {
    return o && (o.$typeUrl === EventMintTFDenom.typeUrl || typeof o.recipient_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: EventMintTFDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipientAddress !== "") {
      writer.uint32(10).string(message.recipientAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMintTFDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintTFDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipientAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventMintTFDenom>): EventMintTFDenom {
    const message = createBaseEventMintTFDenom();
    message.recipientAddress = object.recipientAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventMintTFDenomAmino): EventMintTFDenom {
    const message = createBaseEventMintTFDenom();
    if (object.recipient_address !== undefined && object.recipient_address !== null) {
      message.recipientAddress = object.recipient_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventMintTFDenom): EventMintTFDenomAmino {
    const obj: any = {};
    obj.recipient_address = message.recipientAddress === "" ? undefined : message.recipientAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventMintTFDenomAminoMsg): EventMintTFDenom {
    return EventMintTFDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMintTFDenomProtoMsg): EventMintTFDenom {
    return EventMintTFDenom.decode(message.value);
  },
  toProto(message: EventMintTFDenom): Uint8Array {
    return EventMintTFDenom.encode(message).finish();
  },
  toProtoMsg(message: EventMintTFDenom): EventMintTFDenomProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventMintTFDenom",
      value: EventMintTFDenom.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventMintTFDenom.typeUrl, EventMintTFDenom);
function createBaseEventBurnDenom(): EventBurnDenom {
  return {
    burnerAddress: "",
    amount: Coin.fromPartial({})
  };
}
export const EventBurnDenom = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventBurnDenom",
  is(o: any): o is EventBurnDenom {
    return o && (o.$typeUrl === EventBurnDenom.typeUrl || typeof o.burnerAddress === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is EventBurnDenomAmino {
    return o && (o.$typeUrl === EventBurnDenom.typeUrl || typeof o.burner_address === "string" && Coin.isAmino(o.amount));
  },
  encode(message: EventBurnDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burnerAddress !== "") {
      writer.uint32(10).string(message.burnerAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBurnDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnerAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBurnDenom>): EventBurnDenom {
    const message = createBaseEventBurnDenom();
    message.burnerAddress = object.burnerAddress ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: EventBurnDenomAmino): EventBurnDenom {
    const message = createBaseEventBurnDenom();
    if (object.burner_address !== undefined && object.burner_address !== null) {
      message.burnerAddress = object.burner_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: EventBurnDenom): EventBurnDenomAmino {
    const obj: any = {};
    obj.burner_address = message.burnerAddress === "" ? undefined : message.burnerAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventBurnDenomAminoMsg): EventBurnDenom {
    return EventBurnDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBurnDenomProtoMsg): EventBurnDenom {
    return EventBurnDenom.decode(message.value);
  },
  toProto(message: EventBurnDenom): Uint8Array {
    return EventBurnDenom.encode(message).finish();
  },
  toProtoMsg(message: EventBurnDenom): EventBurnDenomProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventBurnDenom",
      value: EventBurnDenom.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventBurnDenom.typeUrl, EventBurnDenom);
function createBaseEventChangeTFAdmin(): EventChangeTFAdmin {
  return {
    denom: "",
    newAdminAddress: ""
  };
}
export const EventChangeTFAdmin = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin",
  is(o: any): o is EventChangeTFAdmin {
    return o && (o.$typeUrl === EventChangeTFAdmin.typeUrl || typeof o.denom === "string" && typeof o.newAdminAddress === "string");
  },
  isAmino(o: any): o is EventChangeTFAdminAmino {
    return o && (o.$typeUrl === EventChangeTFAdmin.typeUrl || typeof o.denom === "string" && typeof o.new_admin_address === "string");
  },
  encode(message: EventChangeTFAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.newAdminAddress !== "") {
      writer.uint32(18).string(message.newAdminAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventChangeTFAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventChangeTFAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.newAdminAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventChangeTFAdmin>): EventChangeTFAdmin {
    const message = createBaseEventChangeTFAdmin();
    message.denom = object.denom ?? "";
    message.newAdminAddress = object.newAdminAddress ?? "";
    return message;
  },
  fromAmino(object: EventChangeTFAdminAmino): EventChangeTFAdmin {
    const message = createBaseEventChangeTFAdmin();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.new_admin_address !== undefined && object.new_admin_address !== null) {
      message.newAdminAddress = object.new_admin_address;
    }
    return message;
  },
  toAmino(message: EventChangeTFAdmin): EventChangeTFAdminAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.new_admin_address = message.newAdminAddress === "" ? undefined : message.newAdminAddress;
    return obj;
  },
  fromAminoMsg(object: EventChangeTFAdminAminoMsg): EventChangeTFAdmin {
    return EventChangeTFAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventChangeTFAdminProtoMsg): EventChangeTFAdmin {
    return EventChangeTFAdmin.decode(message.value);
  },
  toProto(message: EventChangeTFAdmin): Uint8Array {
    return EventChangeTFAdmin.encode(message).finish();
  },
  toProtoMsg(message: EventChangeTFAdmin): EventChangeTFAdminProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin",
      value: EventChangeTFAdmin.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventChangeTFAdmin.typeUrl, EventChangeTFAdmin);
function createBaseEventSetTFDenomMetadata(): EventSetTFDenomMetadata {
  return {
    denom: "",
    metadata: Metadata.fromPartial({})
  };
}
export const EventSetTFDenomMetadata = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata",
  is(o: any): o is EventSetTFDenomMetadata {
    return o && (o.$typeUrl === EventSetTFDenomMetadata.typeUrl || typeof o.denom === "string" && Metadata.is(o.metadata));
  },
  isAmino(o: any): o is EventSetTFDenomMetadataAmino {
    return o && (o.$typeUrl === EventSetTFDenomMetadata.typeUrl || typeof o.denom === "string" && Metadata.isAmino(o.metadata));
  },
  encode(message: EventSetTFDenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetTFDenomMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetTFDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetTFDenomMetadata>): EventSetTFDenomMetadata {
    const message = createBaseEventSetTFDenomMetadata();
    message.denom = object.denom ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: EventSetTFDenomMetadataAmino): EventSetTFDenomMetadata {
    const message = createBaseEventSetTFDenomMetadata();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: EventSetTFDenomMetadata): EventSetTFDenomMetadataAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetTFDenomMetadataAminoMsg): EventSetTFDenomMetadata {
    return EventSetTFDenomMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetTFDenomMetadataProtoMsg): EventSetTFDenomMetadata {
    return EventSetTFDenomMetadata.decode(message.value);
  },
  toProto(message: EventSetTFDenomMetadata): Uint8Array {
    return EventSetTFDenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: EventSetTFDenomMetadata): EventSetTFDenomMetadataProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata",
      value: EventSetTFDenomMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(EventSetTFDenomMetadata.typeUrl, EventSetTFDenomMetadata);