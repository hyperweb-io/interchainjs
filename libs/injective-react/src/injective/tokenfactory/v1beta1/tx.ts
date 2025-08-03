import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino, Params, ParamsAmino } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 * @name MsgCreateDenom
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgCreateDenom
 */
export interface MsgCreateDenom {
  sender: string;
  /**
   * subdenom can be up to 44 "alphanumeric" characters long.
   */
  subdenom: string;
  name: string;
  symbol: string;
  decimals: number;
  /**
   * true if admins are allowed to burn tokens from other addresses
   */
  allowAdminBurn: boolean;
}
export interface MsgCreateDenomProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenom";
  value: Uint8Array;
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 * @name MsgCreateDenomAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgCreateDenom
 */
export interface MsgCreateDenomAmino {
  sender: string;
  /**
   * subdenom can be up to 44 "alphanumeric" characters long.
   */
  subdenom: string;
  name: string;
  symbol: string;
  decimals: number;
  /**
   * true if admins are allowed to burn tokens from other addresses
   */
  allow_admin_burn: boolean;
}
export interface MsgCreateDenomAminoMsg {
  type: "injective/tokenfactory/create-denom";
  value: MsgCreateDenomAmino;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 * @name MsgCreateDenomResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgCreateDenomResponse
 */
export interface MsgCreateDenomResponse {
  newTokenDenom: string;
}
export interface MsgCreateDenomResponseProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenomResponse";
  value: Uint8Array;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 * @name MsgCreateDenomResponseAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgCreateDenomResponse
 */
export interface MsgCreateDenomResponseAmino {
  new_token_denom: string;
}
export interface MsgCreateDenomResponseAminoMsg {
  type: "/injective.tokenfactory.v1beta1.MsgCreateDenomResponse";
  value: MsgCreateDenomResponseAmino;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account or other permitted
 * accounts to mint more of a token.
 * @name MsgMint
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgMint
 */
export interface MsgMint {
  sender: string;
  amount: Coin;
  receiver: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgMint";
  value: Uint8Array;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account or other permitted
 * accounts to mint more of a token.
 * @name MsgMintAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgMint
 */
export interface MsgMintAmino {
  sender: string;
  amount: CoinAmino;
  receiver: string;
}
export interface MsgMintAminoMsg {
  type: "injective/tokenfactory/mint";
  value: MsgMintAmino;
}
/**
 * @name MsgMintResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgMintResponse
 */
export interface MsgMintResponse {}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgMintResponse";
  value: Uint8Array;
}
/**
 * @name MsgMintResponseAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgMintResponse
 */
export interface MsgMintResponseAmino {}
export interface MsgMintResponseAminoMsg {
  type: "/injective.tokenfactory.v1beta1.MsgMintResponse";
  value: MsgMintResponseAmino;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.
 * @name MsgBurn
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgBurn
 */
export interface MsgBurn {
  sender: string;
  amount: Coin;
  burnFromAddress: string;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgBurn";
  value: Uint8Array;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.
 * @name MsgBurnAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgBurn
 */
export interface MsgBurnAmino {
  sender: string;
  amount: CoinAmino;
  burnFromAddress: string;
}
export interface MsgBurnAminoMsg {
  type: "injective/tokenfactory/burn";
  value: MsgBurnAmino;
}
/**
 * @name MsgBurnResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgBurnResponse
 */
export interface MsgBurnResponse {}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgBurnResponse";
  value: Uint8Array;
}
/**
 * @name MsgBurnResponseAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgBurnResponse
 */
export interface MsgBurnResponseAmino {}
export interface MsgBurnResponseAminoMsg {
  type: "/injective.tokenfactory.v1beta1.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 * @name MsgChangeAdmin
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgChangeAdmin
 */
export interface MsgChangeAdmin {
  sender: string;
  denom: string;
  newAdmin: string;
}
export interface MsgChangeAdminProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdmin";
  value: Uint8Array;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 * @name MsgChangeAdminAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgChangeAdmin
 */
export interface MsgChangeAdminAmino {
  sender: string;
  denom: string;
  new_admin: string;
}
export interface MsgChangeAdminAminoMsg {
  type: "injective/tokenfactory/change-admin";
  value: MsgChangeAdminAmino;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 * @name MsgChangeAdminResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgChangeAdminResponse
 */
export interface MsgChangeAdminResponse {}
export interface MsgChangeAdminResponseProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdminResponse";
  value: Uint8Array;
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 * @name MsgChangeAdminResponseAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgChangeAdminResponse
 */
export interface MsgChangeAdminResponseAmino {}
export interface MsgChangeAdminResponseAminoMsg {
  type: "/injective.tokenfactory.v1beta1.MsgChangeAdminResponse";
  value: MsgChangeAdminResponseAmino;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 * @name MsgSetDenomMetadata
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgSetDenomMetadata
 */
export interface MsgSetDenomMetadata {
  sender: string;
  metadata: Metadata;
  adminBurnDisabled?: MsgSetDenomMetadata_AdminBurnDisabled;
}
export interface MsgSetDenomMetadataProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata";
  value: Uint8Array;
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 * @name MsgSetDenomMetadataAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgSetDenomMetadata
 */
export interface MsgSetDenomMetadataAmino {
  sender: string;
  metadata: MetadataAmino;
  admin_burn_disabled?: MsgSetDenomMetadata_AdminBurnDisabledAmino;
}
export interface MsgSetDenomMetadataAminoMsg {
  type: "injective/tokenfactory/set-denom-metadata";
  value: MsgSetDenomMetadataAmino;
}
/**
 * @name MsgSetDenomMetadata_AdminBurnDisabled
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.AdminBurnDisabled
 */
export interface MsgSetDenomMetadata_AdminBurnDisabled {
  /**
   * true if the admin burn capability should be disabled
   */
  shouldDisable: boolean;
}
export interface MsgSetDenomMetadata_AdminBurnDisabledProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.AdminBurnDisabled";
  value: Uint8Array;
}
/**
 * @name MsgSetDenomMetadata_AdminBurnDisabledAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgSetDenomMetadata_AdminBurnDisabled
 */
export interface MsgSetDenomMetadata_AdminBurnDisabledAmino {
  /**
   * true if the admin burn capability should be disabled
   */
  should_disable: boolean;
}
export interface MsgSetDenomMetadata_AdminBurnDisabledAminoMsg {
  type: "/injective.tokenfactory.v1beta1.AdminBurnDisabled";
  value: MsgSetDenomMetadata_AdminBurnDisabledAmino;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 * @name MsgSetDenomMetadataResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgSetDenomMetadataResponse
 */
export interface MsgSetDenomMetadataResponse {}
export interface MsgSetDenomMetadataResponseProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadataResponse";
  value: Uint8Array;
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 * @name MsgSetDenomMetadataResponseAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgSetDenomMetadataResponse
 */
export interface MsgSetDenomMetadataResponseAmino {}
export interface MsgSetDenomMetadataResponseAminoMsg {
  type: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadataResponse";
  value: MsgSetDenomMetadataResponseAmino;
}
/**
 * @name MsgUpdateParams
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  /**
   * params defines the tokenfactory parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  /**
   * params defines the tokenfactory parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "injective/tokenfactory/update-params";
  value: MsgUpdateParamsAmino;
}
/**
 * @name MsgUpdateParamsResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.tokenfactory.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    sender: "",
    subdenom: "",
    name: "",
    symbol: "",
    decimals: 0,
    allowAdminBurn: false
  };
}
/**
 * MsgCreateDenom defines the message structure for the CreateDenom gRPC service
 * method. It allows an account to create a new denom. It requires a sender
 * address and a sub denomination. The (sender_address, sub_denomination) tuple
 * must be unique and cannot be re-used.
 * 
 * The resulting denom created is defined as
 * <factory/{creatorAddress}/{subdenom}>. The resulting denom's admin is
 * originally set to be the creator, but this can be changed later. The token
 * denom does not indicate the current admin.
 * @name MsgCreateDenom
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgCreateDenom
 */
export const MsgCreateDenom = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenom",
  aminoType: "injective/tokenfactory/create-denom",
  is(o: any): o is MsgCreateDenom {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.sender === "string" && typeof o.subdenom === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.decimals === "number" && typeof o.allowAdminBurn === "boolean");
  },
  isAmino(o: any): o is MsgCreateDenomAmino {
    return o && (o.$typeUrl === MsgCreateDenom.typeUrl || typeof o.sender === "string" && typeof o.subdenom === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.decimals === "number" && typeof o.allow_admin_burn === "boolean");
  },
  encode(message: MsgCreateDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.decimals !== 0) {
      writer.uint32(40).uint32(message.decimals);
    }
    if (message.allowAdminBurn === true) {
      writer.uint32(48).bool(message.allowAdminBurn);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.subdenom = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.decimals = reader.uint32();
          break;
        case 6:
          message.allowAdminBurn = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.sender = object.sender ?? "";
    message.subdenom = object.subdenom ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals ?? 0;
    message.allowAdminBurn = object.allowAdminBurn ?? false;
    return message;
  },
  fromAmino(object: MsgCreateDenomAmino): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.subdenom !== undefined && object.subdenom !== null) {
      message.subdenom = object.subdenom;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals;
    }
    if (object.allow_admin_burn !== undefined && object.allow_admin_burn !== null) {
      message.allowAdminBurn = object.allow_admin_burn;
    }
    return message;
  },
  toAmino(message: MsgCreateDenom): MsgCreateDenomAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.subdenom = message.subdenom === "" ? undefined : message.subdenom;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.decimals = message.decimals === 0 ? undefined : message.decimals;
    obj.allow_admin_burn = message.allowAdminBurn === false ? undefined : message.allowAdminBurn;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomAminoMsg): MsgCreateDenom {
    return MsgCreateDenom.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDenom): MsgCreateDenomAminoMsg {
    return {
      type: "injective/tokenfactory/create-denom",
      value: MsgCreateDenom.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDenomProtoMsg): MsgCreateDenom {
    return MsgCreateDenom.decode(message.value);
  },
  toProto(message: MsgCreateDenom): Uint8Array {
    return MsgCreateDenom.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenom): MsgCreateDenomProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenom",
      value: MsgCreateDenom.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {
    newTokenDenom: ""
  };
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 * @name MsgCreateDenomResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgCreateDenomResponse
 */
export const MsgCreateDenomResponse = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenomResponse",
  is(o: any): o is MsgCreateDenomResponse {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.newTokenDenom === "string");
  },
  isAmino(o: any): o is MsgCreateDenomResponseAmino {
    return o && (o.$typeUrl === MsgCreateDenomResponse.typeUrl || typeof o.new_token_denom === "string");
  },
  encode(message: MsgCreateDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newTokenDenom !== "") {
      writer.uint32(10).string(message.newTokenDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newTokenDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    message.newTokenDenom = object.newTokenDenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDenomResponseAmino): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    if (object.new_token_denom !== undefined && object.new_token_denom !== null) {
      message.newTokenDenom = object.new_token_denom;
    }
    return message;
  },
  toAmino(message: MsgCreateDenomResponse): MsgCreateDenomResponseAmino {
    const obj: any = {};
    obj.new_token_denom = message.newTokenDenom === "" ? undefined : message.newTokenDenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDenomResponseAminoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDenomResponseProtoMsg): MsgCreateDenomResponse {
    return MsgCreateDenomResponse.decode(message.value);
  },
  toProto(message: MsgCreateDenomResponse): Uint8Array {
    return MsgCreateDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDenomResponse): MsgCreateDenomResponseProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenomResponse",
      value: MsgCreateDenomResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMint(): MsgMint {
  return {
    sender: "",
    amount: Coin.fromPartial({}),
    receiver: ""
  };
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account or other permitted
 * accounts to mint more of a token.
 * @name MsgMint
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgMint
 */
export const MsgMint = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgMint",
  aminoType: "injective/tokenfactory/mint",
  is(o: any): o is MsgMint {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.sender === "string" && Coin.is(o.amount) && typeof o.receiver === "string");
  },
  isAmino(o: any): o is MsgMintAmino {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.sender === "string" && Coin.isAmino(o.amount) && typeof o.receiver === "string");
  },
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    const message = createBaseMsgMint();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMint): MsgMintAminoMsg {
    return {
      type: "injective/tokenfactory/mint",
      value: MsgMint.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgMint.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}
/**
 * @name MsgMintResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgMintResponse
 */
export const MsgMintResponse = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgMintResponse",
  is(o: any): o is MsgMintResponse {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  isAmino(o: any): o is MsgMintResponseAmino {
    return o && o.$typeUrl === MsgMintResponse.typeUrl;
  },
  encode(_: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
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
  fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  fromAmino(_: MsgMintResponseAmino): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
  toAmino(_: MsgMintResponse): MsgMintResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse {
    return MsgMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
    return MsgMintResponse.decode(message.value);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgBurn(): MsgBurn {
  return {
    sender: "",
    amount: Coin.fromPartial({}),
    burnFromAddress: ""
  };
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.
 * @name MsgBurn
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgBurn
 */
export const MsgBurn = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgBurn",
  aminoType: "injective/tokenfactory/burn",
  is(o: any): o is MsgBurn {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.sender === "string" && Coin.is(o.amount) && typeof o.burnFromAddress === "string");
  },
  isAmino(o: any): o is MsgBurnAmino {
    return o && (o.$typeUrl === MsgBurn.typeUrl || typeof o.sender === "string" && Coin.isAmino(o.amount) && typeof o.burnFromAddress === "string");
  },
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.burnFromAddress !== "") {
      writer.uint32(26).string(message.burnFromAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.burnFromAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.sender = object.sender ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.burnFromAddress = object.burnFromAddress ?? "";
    return message;
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.burnFromAddress !== undefined && object.burnFromAddress !== null) {
      message.burnFromAddress = object.burnFromAddress;
    }
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.burnFromAddress = message.burnFromAddress ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgBurn): MsgBurnAminoMsg {
    return {
      type: "injective/tokenfactory/burn",
      value: MsgBurn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgBurn.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}
/**
 * @name MsgBurnResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgBurnResponse
 */
export const MsgBurnResponse = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgBurnResponse",
  is(o: any): o is MsgBurnResponse {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  isAmino(o: any): o is MsgBurnResponseAmino {
    return o && o.$typeUrl === MsgBurnResponse.typeUrl;
  },
  encode(_: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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
  fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  fromAmino(_: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
  toAmino(_: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgChangeAdmin(): MsgChangeAdmin {
  return {
    sender: "",
    denom: "",
    newAdmin: ""
  };
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 * @name MsgChangeAdmin
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgChangeAdmin
 */
export const MsgChangeAdmin = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdmin",
  aminoType: "injective/tokenfactory/change-admin",
  is(o: any): o is MsgChangeAdmin {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && typeof o.newAdmin === "string");
  },
  isAmino(o: any): o is MsgChangeAdminAmino {
    return o && (o.$typeUrl === MsgChangeAdmin.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && typeof o.new_admin === "string");
  },
  encode(message: MsgChangeAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgChangeAdmin>): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgChangeAdminAmino): MsgChangeAdmin {
    const message = createBaseMsgChangeAdmin();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.new_admin !== undefined && object.new_admin !== null) {
      message.newAdmin = object.new_admin;
    }
    return message;
  },
  toAmino(message: MsgChangeAdmin): MsgChangeAdminAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgChangeAdminAminoMsg): MsgChangeAdmin {
    return MsgChangeAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChangeAdmin): MsgChangeAdminAminoMsg {
    return {
      type: "injective/tokenfactory/change-admin",
      value: MsgChangeAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChangeAdminProtoMsg): MsgChangeAdmin {
    return MsgChangeAdmin.decode(message.value);
  },
  toProto(message: MsgChangeAdmin): Uint8Array {
    return MsgChangeAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAdmin): MsgChangeAdminProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdmin",
      value: MsgChangeAdmin.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgChangeAdminResponse(): MsgChangeAdminResponse {
  return {};
}
/**
 * MsgChangeAdminResponse defines the response structure for an executed
 * MsgChangeAdmin message.
 * @name MsgChangeAdminResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgChangeAdminResponse
 */
export const MsgChangeAdminResponse = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdminResponse",
  is(o: any): o is MsgChangeAdminResponse {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  isAmino(o: any): o is MsgChangeAdminResponseAmino {
    return o && o.$typeUrl === MsgChangeAdminResponse.typeUrl;
  },
  encode(_: MsgChangeAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeAdminResponse();
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
  fromPartial(_: DeepPartial<MsgChangeAdminResponse>): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  },
  fromAmino(_: MsgChangeAdminResponseAmino): MsgChangeAdminResponse {
    const message = createBaseMsgChangeAdminResponse();
    return message;
  },
  toAmino(_: MsgChangeAdminResponse): MsgChangeAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeAdminResponseAminoMsg): MsgChangeAdminResponse {
    return MsgChangeAdminResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeAdminResponseProtoMsg): MsgChangeAdminResponse {
    return MsgChangeAdminResponse.decode(message.value);
  },
  toProto(message: MsgChangeAdminResponse): Uint8Array {
    return MsgChangeAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeAdminResponse): MsgChangeAdminResponseProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdminResponse",
      value: MsgChangeAdminResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
  return {
    sender: "",
    metadata: Metadata.fromPartial({}),
    adminBurnDisabled: undefined
  };
}
/**
 * MsgSetDenomMetadata is the sdk.Msg type for allowing an admin account to set
 * the denom's bank metadata
 * @name MsgSetDenomMetadata
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgSetDenomMetadata
 */
export const MsgSetDenomMetadata = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata",
  aminoType: "injective/tokenfactory/set-denom-metadata",
  is(o: any): o is MsgSetDenomMetadata {
    return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.sender === "string" && Metadata.is(o.metadata));
  },
  isAmino(o: any): o is MsgSetDenomMetadataAmino {
    return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.sender === "string" && Metadata.isAmino(o.metadata));
  },
  encode(message: MsgSetDenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.adminBurnDisabled !== undefined) {
      MsgSetDenomMetadata_AdminBurnDisabled.encode(message.adminBurnDisabled, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.adminBurnDisabled = MsgSetDenomMetadata_AdminBurnDisabled.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetDenomMetadata>): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    message.sender = object.sender ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    message.adminBurnDisabled = object.adminBurnDisabled !== undefined && object.adminBurnDisabled !== null ? MsgSetDenomMetadata_AdminBurnDisabled.fromPartial(object.adminBurnDisabled) : undefined;
    return message;
  },
  fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    if (object.admin_burn_disabled !== undefined && object.admin_burn_disabled !== null) {
      message.adminBurnDisabled = MsgSetDenomMetadata_AdminBurnDisabled.fromAmino(object.admin_burn_disabled);
    }
    return message;
  },
  toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    obj.admin_burn_disabled = message.adminBurnDisabled ? MsgSetDenomMetadata_AdminBurnDisabled.toAmino(message.adminBurnDisabled) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadataAminoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataAminoMsg {
    return {
      type: "injective/tokenfactory/set-denom-metadata",
      value: MsgSetDenomMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDenomMetadataProtoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadata): Uint8Array {
    return MsgSetDenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata",
      value: MsgSetDenomMetadata.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSetDenomMetadata.typeUrl)) {
      return;
    }
    Metadata.registerTypeUrl();
    MsgSetDenomMetadata_AdminBurnDisabled.registerTypeUrl();
  }
};
function createBaseMsgSetDenomMetadata_AdminBurnDisabled(): MsgSetDenomMetadata_AdminBurnDisabled {
  return {
    shouldDisable: false
  };
}
/**
 * @name MsgSetDenomMetadata_AdminBurnDisabled
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.AdminBurnDisabled
 */
export const MsgSetDenomMetadata_AdminBurnDisabled = {
  typeUrl: "/injective.tokenfactory.v1beta1.AdminBurnDisabled",
  is(o: any): o is MsgSetDenomMetadata_AdminBurnDisabled {
    return o && (o.$typeUrl === MsgSetDenomMetadata_AdminBurnDisabled.typeUrl || typeof o.shouldDisable === "boolean");
  },
  isAmino(o: any): o is MsgSetDenomMetadata_AdminBurnDisabledAmino {
    return o && (o.$typeUrl === MsgSetDenomMetadata_AdminBurnDisabled.typeUrl || typeof o.should_disable === "boolean");
  },
  encode(message: MsgSetDenomMetadata_AdminBurnDisabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.shouldDisable === true) {
      writer.uint32(8).bool(message.shouldDisable);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata_AdminBurnDisabled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata_AdminBurnDisabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shouldDisable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetDenomMetadata_AdminBurnDisabled>): MsgSetDenomMetadata_AdminBurnDisabled {
    const message = createBaseMsgSetDenomMetadata_AdminBurnDisabled();
    message.shouldDisable = object.shouldDisable ?? false;
    return message;
  },
  fromAmino(object: MsgSetDenomMetadata_AdminBurnDisabledAmino): MsgSetDenomMetadata_AdminBurnDisabled {
    const message = createBaseMsgSetDenomMetadata_AdminBurnDisabled();
    if (object.should_disable !== undefined && object.should_disable !== null) {
      message.shouldDisable = object.should_disable;
    }
    return message;
  },
  toAmino(message: MsgSetDenomMetadata_AdminBurnDisabled): MsgSetDenomMetadata_AdminBurnDisabledAmino {
    const obj: any = {};
    obj.should_disable = message.shouldDisable === false ? undefined : message.shouldDisable;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadata_AdminBurnDisabledAminoMsg): MsgSetDenomMetadata_AdminBurnDisabled {
    return MsgSetDenomMetadata_AdminBurnDisabled.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomMetadata_AdminBurnDisabledProtoMsg): MsgSetDenomMetadata_AdminBurnDisabled {
    return MsgSetDenomMetadata_AdminBurnDisabled.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadata_AdminBurnDisabled): Uint8Array {
    return MsgSetDenomMetadata_AdminBurnDisabled.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadata_AdminBurnDisabled): MsgSetDenomMetadata_AdminBurnDisabledProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.AdminBurnDisabled",
      value: MsgSetDenomMetadata_AdminBurnDisabled.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
  return {};
}
/**
 * MsgSetDenomMetadataResponse defines the response structure for an executed
 * MsgSetDenomMetadata message.
 * @name MsgSetDenomMetadataResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgSetDenomMetadataResponse
 */
export const MsgSetDenomMetadataResponse = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
  is(o: any): o is MsgSetDenomMetadataResponse {
    return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetDenomMetadataResponseAmino {
    return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
  },
  encode(_: MsgSetDenomMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadataResponse();
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
  fromPartial(_: DeepPartial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  },
  fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  },
  toAmino(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadataResponseAminoMsg): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomMetadataResponseProtoMsg): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadataResponse): Uint8Array {
    return MsgSetDenomMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
      value: MsgSetDenomMetadataResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * @name MsgUpdateParams
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParams",
  aminoType: "injective/tokenfactory/update-params",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "injective/tokenfactory/update-params",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * @name MsgUpdateParamsResponse
 * @package injective.tokenfactory.v1beta1
 * @see proto type: injective.tokenfactory.v1beta1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};