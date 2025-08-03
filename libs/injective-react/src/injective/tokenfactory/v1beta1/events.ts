import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name EventCreateDenom
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventCreateDenom
 */
export interface EventCreateDenom {
  account: string;
  denom: string;
}
export interface EventCreateDenomProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventCreateDenom";
  value: Uint8Array;
}
/**
 * @name EventCreateDenomAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventCreateDenom
 */
export interface EventCreateDenomAmino {
  account: string;
  denom: string;
}
export interface EventCreateDenomAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventCreateDenom";
  value: EventCreateDenomAmino;
}
/**
 * @name EventMint
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventMint
 */
export interface EventMint {
  minter: string;
  amount: Coin;
  receiver: string;
}
export interface EventMintProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventMint";
  value: Uint8Array;
}
/**
 * @name EventMintAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventMint
 */
export interface EventMintAmino {
  minter: string;
  amount: CoinAmino;
  receiver: string;
}
export interface EventMintAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventMint";
  value: EventMintAmino;
}
/**
 * @name EventBurn
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventBurn
 */
export interface EventBurn {
  burner: string;
  amount: Coin;
  burnFrom: string;
}
export interface EventBurnProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventBurn";
  value: Uint8Array;
}
/**
 * @name EventBurnAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventBurn
 */
export interface EventBurnAmino {
  burner: string;
  amount: CoinAmino;
  burn_from: string;
}
export interface EventBurnAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventBurn";
  value: EventBurnAmino;
}
/**
 * @name EventChangeAdmin
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventChangeAdmin
 */
export interface EventChangeAdmin {
  denom: string;
  newAdminAddress: string;
}
export interface EventChangeAdminProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventChangeAdmin";
  value: Uint8Array;
}
/**
 * @name EventChangeAdminAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventChangeAdmin
 */
export interface EventChangeAdminAmino {
  denom: string;
  new_admin_address: string;
}
export interface EventChangeAdminAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventChangeAdmin";
  value: EventChangeAdminAmino;
}
/**
 * @name EventSetDenomMetadata
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventSetDenomMetadata
 */
export interface EventSetDenomMetadata {
  denom: string;
  metadata: Metadata;
}
export interface EventSetDenomMetadataProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.EventSetDenomMetadata";
  value: Uint8Array;
}
/**
 * @name EventSetDenomMetadataAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventSetDenomMetadata
 */
export interface EventSetDenomMetadataAmino {
  denom: string;
  metadata: MetadataAmino;
}
export interface EventSetDenomMetadataAminoMsg {
  type: "/injective.tokenfactory.v1beta1.EventSetDenomMetadata";
  value: EventSetDenomMetadataAmino;
}
function createBaseEventCreateDenom(): EventCreateDenom {
  return {
    account: "",
    denom: ""
  };
}
/**
 * @name EventCreateDenom
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventCreateDenom
 */
export const EventCreateDenom = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventCreateDenom",
  is(o: any): o is EventCreateDenom {
    return o && (o.$typeUrl === EventCreateDenom.typeUrl || typeof o.account === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is EventCreateDenomAmino {
    return o && (o.$typeUrl === EventCreateDenom.typeUrl || typeof o.account === "string" && typeof o.denom === "string");
  },
  encode(message: EventCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateDenom();
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
  fromPartial(object: DeepPartial<EventCreateDenom>): EventCreateDenom {
    const message = createBaseEventCreateDenom();
    message.account = object.account ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventCreateDenomAmino): EventCreateDenom {
    const message = createBaseEventCreateDenom();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventCreateDenom): EventCreateDenomAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventCreateDenomAminoMsg): EventCreateDenom {
    return EventCreateDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateDenomProtoMsg): EventCreateDenom {
    return EventCreateDenom.decode(message.value);
  },
  toProto(message: EventCreateDenom): Uint8Array {
    return EventCreateDenom.encode(message).finish();
  },
  toProtoMsg(message: EventCreateDenom): EventCreateDenomProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventCreateDenom",
      value: EventCreateDenom.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventMint(): EventMint {
  return {
    minter: "",
    amount: Coin.fromPartial({}),
    receiver: ""
  };
}
/**
 * @name EventMint
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventMint
 */
export const EventMint = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventMint",
  is(o: any): o is EventMint {
    return o && (o.$typeUrl === EventMint.typeUrl || typeof o.minter === "string" && Coin.is(o.amount) && typeof o.receiver === "string");
  },
  isAmino(o: any): o is EventMintAmino {
    return o && (o.$typeUrl === EventMint.typeUrl || typeof o.minter === "string" && Coin.isAmino(o.amount) && typeof o.receiver === "string");
  },
  encode(message: EventMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== "") {
      writer.uint32(10).string(message.minter);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.minter = object.minter ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: EventMintAmino): EventMint {
    const message = createBaseEventMint();
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: EventMint): EventMintAmino {
    const obj: any = {};
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: EventMintAminoMsg): EventMint {
    return EventMint.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMintProtoMsg): EventMint {
    return EventMint.decode(message.value);
  },
  toProto(message: EventMint): Uint8Array {
    return EventMint.encode(message).finish();
  },
  toProtoMsg(message: EventMint): EventMintProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventMint",
      value: EventMint.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(EventMint.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseEventBurn(): EventBurn {
  return {
    burner: "",
    amount: Coin.fromPartial({}),
    burnFrom: ""
  };
}
/**
 * @name EventBurn
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventBurn
 */
export const EventBurn = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventBurn",
  is(o: any): o is EventBurn {
    return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.burner === "string" && Coin.is(o.amount) && typeof o.burnFrom === "string");
  },
  isAmino(o: any): o is EventBurnAmino {
    return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.burner === "string" && Coin.isAmino(o.amount) && typeof o.burn_from === "string");
  },
  encode(message: EventBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.burner !== "") {
      writer.uint32(10).string(message.burner);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.burnFrom !== "") {
      writer.uint32(26).string(message.burnFrom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burner = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.burnFrom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBurn>): EventBurn {
    const message = createBaseEventBurn();
    message.burner = object.burner ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.burnFrom = object.burnFrom ?? "";
    return message;
  },
  fromAmino(object: EventBurnAmino): EventBurn {
    const message = createBaseEventBurn();
    if (object.burner !== undefined && object.burner !== null) {
      message.burner = object.burner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.burn_from !== undefined && object.burn_from !== null) {
      message.burnFrom = object.burn_from;
    }
    return message;
  },
  toAmino(message: EventBurn): EventBurnAmino {
    const obj: any = {};
    obj.burner = message.burner === "" ? undefined : message.burner;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.burn_from = message.burnFrom === "" ? undefined : message.burnFrom;
    return obj;
  },
  fromAminoMsg(object: EventBurnAminoMsg): EventBurn {
    return EventBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBurnProtoMsg): EventBurn {
    return EventBurn.decode(message.value);
  },
  toProto(message: EventBurn): Uint8Array {
    return EventBurn.encode(message).finish();
  },
  toProtoMsg(message: EventBurn): EventBurnProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventBurn",
      value: EventBurn.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(EventBurn.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseEventChangeAdmin(): EventChangeAdmin {
  return {
    denom: "",
    newAdminAddress: ""
  };
}
/**
 * @name EventChangeAdmin
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventChangeAdmin
 */
export const EventChangeAdmin = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventChangeAdmin",
  is(o: any): o is EventChangeAdmin {
    return o && (o.$typeUrl === EventChangeAdmin.typeUrl || typeof o.denom === "string" && typeof o.newAdminAddress === "string");
  },
  isAmino(o: any): o is EventChangeAdminAmino {
    return o && (o.$typeUrl === EventChangeAdmin.typeUrl || typeof o.denom === "string" && typeof o.new_admin_address === "string");
  },
  encode(message: EventChangeAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.newAdminAddress !== "") {
      writer.uint32(18).string(message.newAdminAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventChangeAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventChangeAdmin();
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
  fromPartial(object: DeepPartial<EventChangeAdmin>): EventChangeAdmin {
    const message = createBaseEventChangeAdmin();
    message.denom = object.denom ?? "";
    message.newAdminAddress = object.newAdminAddress ?? "";
    return message;
  },
  fromAmino(object: EventChangeAdminAmino): EventChangeAdmin {
    const message = createBaseEventChangeAdmin();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.new_admin_address !== undefined && object.new_admin_address !== null) {
      message.newAdminAddress = object.new_admin_address;
    }
    return message;
  },
  toAmino(message: EventChangeAdmin): EventChangeAdminAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.new_admin_address = message.newAdminAddress === "" ? undefined : message.newAdminAddress;
    return obj;
  },
  fromAminoMsg(object: EventChangeAdminAminoMsg): EventChangeAdmin {
    return EventChangeAdmin.fromAmino(object.value);
  },
  fromProtoMsg(message: EventChangeAdminProtoMsg): EventChangeAdmin {
    return EventChangeAdmin.decode(message.value);
  },
  toProto(message: EventChangeAdmin): Uint8Array {
    return EventChangeAdmin.encode(message).finish();
  },
  toProtoMsg(message: EventChangeAdmin): EventChangeAdminProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventChangeAdmin",
      value: EventChangeAdmin.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetDenomMetadata(): EventSetDenomMetadata {
  return {
    denom: "",
    metadata: Metadata.fromPartial({})
  };
}
/**
 * @name EventSetDenomMetadata
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.EventSetDenomMetadata
 */
export const EventSetDenomMetadata = {
  typeUrl: "/injective.tokenfactory.v1beta1.EventSetDenomMetadata",
  is(o: any): o is EventSetDenomMetadata {
    return o && (o.$typeUrl === EventSetDenomMetadata.typeUrl || typeof o.denom === "string" && Metadata.is(o.metadata));
  },
  isAmino(o: any): o is EventSetDenomMetadataAmino {
    return o && (o.$typeUrl === EventSetDenomMetadata.typeUrl || typeof o.denom === "string" && Metadata.isAmino(o.metadata));
  },
  encode(message: EventSetDenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetDenomMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetDenomMetadata();
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
  fromPartial(object: DeepPartial<EventSetDenomMetadata>): EventSetDenomMetadata {
    const message = createBaseEventSetDenomMetadata();
    message.denom = object.denom ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: EventSetDenomMetadataAmino): EventSetDenomMetadata {
    const message = createBaseEventSetDenomMetadata();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: EventSetDenomMetadata): EventSetDenomMetadataAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSetDenomMetadataAminoMsg): EventSetDenomMetadata {
    return EventSetDenomMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetDenomMetadataProtoMsg): EventSetDenomMetadata {
    return EventSetDenomMetadata.decode(message.value);
  },
  toProto(message: EventSetDenomMetadata): Uint8Array {
    return EventSetDenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: EventSetDenomMetadata): EventSetDenomMetadataProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.EventSetDenomMetadata",
      value: EventSetDenomMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(EventSetDenomMetadata.typeUrl)) {
      return;
    }
    Metadata.registerTypeUrl();
  }
};