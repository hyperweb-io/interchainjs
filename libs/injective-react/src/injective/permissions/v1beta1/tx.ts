import { Params, ParamsAmino } from "../../../cosmos/bank/v1beta1/bank";
import { Namespace, NamespaceAmino, Role, RoleAmino, AddressRoles, AddressRolesAmino } from "./permissions";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the permissions parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the permissions parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "permissions/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgCreateNamespace {
  sender: string;
  namespace: Namespace;
}
export interface MsgCreateNamespaceProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace";
  value: Uint8Array;
}
export interface MsgCreateNamespaceAmino {
  sender: string;
  namespace: NamespaceAmino;
}
export interface MsgCreateNamespaceAminoMsg {
  type: "permissions/MsgCreateNamespace";
  value: MsgCreateNamespaceAmino;
}
export interface MsgCreateNamespaceResponse {}
export interface MsgCreateNamespaceResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespaceResponse";
  value: Uint8Array;
}
export interface MsgCreateNamespaceResponseAmino {}
export interface MsgCreateNamespaceResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgCreateNamespaceResponse";
  value: MsgCreateNamespaceResponseAmino;
}
export interface MsgDeleteNamespace {
  sender: string;
  namespaceDenom: string;
}
export interface MsgDeleteNamespaceProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgDeleteNamespace";
  value: Uint8Array;
}
export interface MsgDeleteNamespaceAmino {
  sender: string;
  namespace_denom: string;
}
export interface MsgDeleteNamespaceAminoMsg {
  type: "permissions/MsgDeleteNamespace";
  value: MsgDeleteNamespaceAmino;
}
export interface MsgDeleteNamespaceResponse {}
export interface MsgDeleteNamespaceResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgDeleteNamespaceResponse";
  value: Uint8Array;
}
export interface MsgDeleteNamespaceResponseAmino {}
export interface MsgDeleteNamespaceResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgDeleteNamespaceResponse";
  value: MsgDeleteNamespaceResponseAmino;
}
export interface MsgUpdateNamespace {
  sender: string;
  /** namespace denom to which this updates are applied */
  namespaceDenom: string;
  /** address of smart contract to apply code-based restrictions */
  wasmHook?: MsgUpdateNamespace_MsgSetWasmHook;
  mintsPaused?: MsgUpdateNamespace_MsgSetMintsPaused;
  sendsPaused?: MsgUpdateNamespace_MsgSetSendsPaused;
  burnsPaused?: MsgUpdateNamespace_MsgSetBurnsPaused;
}
export interface MsgUpdateNamespaceProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace";
  value: Uint8Array;
}
export interface MsgUpdateNamespaceAmino {
  sender: string;
  /** namespace denom to which this updates are applied */
  namespace_denom: string;
  /** address of smart contract to apply code-based restrictions */
  wasm_hook?: MsgUpdateNamespace_MsgSetWasmHookAmino;
  mints_paused?: MsgUpdateNamespace_MsgSetMintsPausedAmino;
  sends_paused?: MsgUpdateNamespace_MsgSetSendsPausedAmino;
  burns_paused?: MsgUpdateNamespace_MsgSetBurnsPausedAmino;
}
export interface MsgUpdateNamespaceAminoMsg {
  type: "permissions/MsgUpdateNamespace";
  value: MsgUpdateNamespaceAmino;
}
export interface MsgUpdateNamespace_MsgSetWasmHook {
  newValue: string;
}
export interface MsgUpdateNamespace_MsgSetWasmHookProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgSetWasmHook";
  value: Uint8Array;
}
export interface MsgUpdateNamespace_MsgSetWasmHookAmino {
  new_value: string;
}
export interface MsgUpdateNamespace_MsgSetWasmHookAminoMsg {
  type: "/injective.permissions.v1beta1.MsgSetWasmHook";
  value: MsgUpdateNamespace_MsgSetWasmHookAmino;
}
export interface MsgUpdateNamespace_MsgSetMintsPaused {
  newValue: boolean;
}
export interface MsgUpdateNamespace_MsgSetMintsPausedProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgSetMintsPaused";
  value: Uint8Array;
}
export interface MsgUpdateNamespace_MsgSetMintsPausedAmino {
  new_value: boolean;
}
export interface MsgUpdateNamespace_MsgSetMintsPausedAminoMsg {
  type: "/injective.permissions.v1beta1.MsgSetMintsPaused";
  value: MsgUpdateNamespace_MsgSetMintsPausedAmino;
}
export interface MsgUpdateNamespace_MsgSetSendsPaused {
  newValue: boolean;
}
export interface MsgUpdateNamespace_MsgSetSendsPausedProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgSetSendsPaused";
  value: Uint8Array;
}
export interface MsgUpdateNamespace_MsgSetSendsPausedAmino {
  new_value: boolean;
}
export interface MsgUpdateNamespace_MsgSetSendsPausedAminoMsg {
  type: "/injective.permissions.v1beta1.MsgSetSendsPaused";
  value: MsgUpdateNamespace_MsgSetSendsPausedAmino;
}
export interface MsgUpdateNamespace_MsgSetBurnsPaused {
  newValue: boolean;
}
export interface MsgUpdateNamespace_MsgSetBurnsPausedProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgSetBurnsPaused";
  value: Uint8Array;
}
export interface MsgUpdateNamespace_MsgSetBurnsPausedAmino {
  new_value: boolean;
}
export interface MsgUpdateNamespace_MsgSetBurnsPausedAminoMsg {
  type: "/injective.permissions.v1beta1.MsgSetBurnsPaused";
  value: MsgUpdateNamespace_MsgSetBurnsPausedAmino;
}
export interface MsgUpdateNamespaceResponse {}
export interface MsgUpdateNamespaceResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceResponse";
  value: Uint8Array;
}
export interface MsgUpdateNamespaceResponseAmino {}
export interface MsgUpdateNamespaceResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgUpdateNamespaceResponse";
  value: MsgUpdateNamespaceResponseAmino;
}
export interface MsgUpdateNamespaceRoles {
  sender: string;
  /** namespace denom to which this updates are applied */
  namespaceDenom: string;
  /** new role definitions or updated permissions for existing roles */
  rolePermissions: Role[];
  /** new addresses to add or new roles for existing addresses to */
  addressRoles: AddressRoles[];
}
export interface MsgUpdateNamespaceRolesProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceRoles";
  value: Uint8Array;
}
export interface MsgUpdateNamespaceRolesAmino {
  sender: string;
  /** namespace denom to which this updates are applied */
  namespace_denom: string;
  /** new role definitions or updated permissions for existing roles */
  role_permissions: RoleAmino[];
  /** new addresses to add or new roles for existing addresses to */
  address_roles: AddressRolesAmino[];
}
export interface MsgUpdateNamespaceRolesAminoMsg {
  type: "permissions/MsgUpdateNamespaceRoles";
  value: MsgUpdateNamespaceRolesAmino;
}
export interface MsgUpdateNamespaceRolesResponse {}
export interface MsgUpdateNamespaceRolesResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceRolesResponse";
  value: Uint8Array;
}
export interface MsgUpdateNamespaceRolesResponseAmino {}
export interface MsgUpdateNamespaceRolesResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgUpdateNamespaceRolesResponse";
  value: MsgUpdateNamespaceRolesResponseAmino;
}
export interface MsgRevokeNamespaceRoles {
  sender: string;
  /** namespace denom to which this updates are applied */
  namespaceDenom: string;
  /** {"address" => array of roles to revoke from this address} */
  addressRolesToRevoke: AddressRoles[];
}
export interface MsgRevokeNamespaceRolesProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgRevokeNamespaceRoles";
  value: Uint8Array;
}
export interface MsgRevokeNamespaceRolesAmino {
  sender: string;
  /** namespace denom to which this updates are applied */
  namespace_denom: string;
  /** {"address" => array of roles to revoke from this address} */
  address_roles_to_revoke: AddressRolesAmino[];
}
export interface MsgRevokeNamespaceRolesAminoMsg {
  type: "permissions/MsgRevokeNamespaceRoles";
  value: MsgRevokeNamespaceRolesAmino;
}
export interface MsgRevokeNamespaceRolesResponse {}
export interface MsgRevokeNamespaceRolesResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgRevokeNamespaceRolesResponse";
  value: Uint8Array;
}
export interface MsgRevokeNamespaceRolesResponseAmino {}
export interface MsgRevokeNamespaceRolesResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgRevokeNamespaceRolesResponse";
  value: MsgRevokeNamespaceRolesResponseAmino;
}
export interface MsgClaimVoucher {
  sender: string;
  denom: string;
}
export interface MsgClaimVoucherProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher";
  value: Uint8Array;
}
export interface MsgClaimVoucherAmino {
  sender: string;
  denom: string;
}
export interface MsgClaimVoucherAminoMsg {
  type: "permissions/MsgClaimVoucher";
  value: MsgClaimVoucherAmino;
}
export interface MsgClaimVoucherResponse {}
export interface MsgClaimVoucherResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucherResponse";
  value: Uint8Array;
}
export interface MsgClaimVoucherResponseAmino {}
export interface MsgClaimVoucherResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgClaimVoucherResponse";
  value: MsgClaimVoucherResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateParams",
  aminoType: "permissions/MsgUpdateParams",
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
      type: "permissions/MsgUpdateParams",
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
      typeUrl: "/injective.permissions.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateParamsResponse",
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
      typeUrl: "/injective.permissions.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgCreateNamespace(): MsgCreateNamespace {
  return {
    sender: "",
    namespace: Namespace.fromPartial({})
  };
}
export const MsgCreateNamespace = {
  typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace",
  aminoType: "permissions/MsgCreateNamespace",
  is(o: any): o is MsgCreateNamespace {
    return o && (o.$typeUrl === MsgCreateNamespace.typeUrl || typeof o.sender === "string" && Namespace.is(o.namespace));
  },
  isAmino(o: any): o is MsgCreateNamespaceAmino {
    return o && (o.$typeUrl === MsgCreateNamespace.typeUrl || typeof o.sender === "string" && Namespace.isAmino(o.namespace));
  },
  encode(message: MsgCreateNamespace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateNamespace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNamespace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.namespace = Namespace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateNamespace>): MsgCreateNamespace {
    const message = createBaseMsgCreateNamespace();
    message.sender = object.sender ?? "";
    message.namespace = object.namespace !== undefined && object.namespace !== null ? Namespace.fromPartial(object.namespace) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateNamespaceAmino): MsgCreateNamespace {
    const message = createBaseMsgCreateNamespace();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = Namespace.fromAmino(object.namespace);
    }
    return message;
  },
  toAmino(message: MsgCreateNamespace): MsgCreateNamespaceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.namespace = message.namespace ? Namespace.toAmino(message.namespace) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateNamespaceAminoMsg): MsgCreateNamespace {
    return MsgCreateNamespace.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateNamespace): MsgCreateNamespaceAminoMsg {
    return {
      type: "permissions/MsgCreateNamespace",
      value: MsgCreateNamespace.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateNamespaceProtoMsg): MsgCreateNamespace {
    return MsgCreateNamespace.decode(message.value);
  },
  toProto(message: MsgCreateNamespace): Uint8Array {
    return MsgCreateNamespace.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNamespace): MsgCreateNamespaceProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace",
      value: MsgCreateNamespace.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateNamespace.typeUrl, MsgCreateNamespace);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateNamespace.aminoType, MsgCreateNamespace.typeUrl);
function createBaseMsgCreateNamespaceResponse(): MsgCreateNamespaceResponse {
  return {};
}
export const MsgCreateNamespaceResponse = {
  typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespaceResponse",
  is(o: any): o is MsgCreateNamespaceResponse {
    return o && o.$typeUrl === MsgCreateNamespaceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateNamespaceResponseAmino {
    return o && o.$typeUrl === MsgCreateNamespaceResponse.typeUrl;
  },
  encode(_: MsgCreateNamespaceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateNamespaceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNamespaceResponse();
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
  fromPartial(_: DeepPartial<MsgCreateNamespaceResponse>): MsgCreateNamespaceResponse {
    const message = createBaseMsgCreateNamespaceResponse();
    return message;
  },
  fromAmino(_: MsgCreateNamespaceResponseAmino): MsgCreateNamespaceResponse {
    const message = createBaseMsgCreateNamespaceResponse();
    return message;
  },
  toAmino(_: MsgCreateNamespaceResponse): MsgCreateNamespaceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateNamespaceResponseAminoMsg): MsgCreateNamespaceResponse {
    return MsgCreateNamespaceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateNamespaceResponseProtoMsg): MsgCreateNamespaceResponse {
    return MsgCreateNamespaceResponse.decode(message.value);
  },
  toProto(message: MsgCreateNamespaceResponse): Uint8Array {
    return MsgCreateNamespaceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNamespaceResponse): MsgCreateNamespaceResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespaceResponse",
      value: MsgCreateNamespaceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateNamespaceResponse.typeUrl, MsgCreateNamespaceResponse);
function createBaseMsgDeleteNamespace(): MsgDeleteNamespace {
  return {
    sender: "",
    namespaceDenom: ""
  };
}
export const MsgDeleteNamespace = {
  typeUrl: "/injective.permissions.v1beta1.MsgDeleteNamespace",
  aminoType: "permissions/MsgDeleteNamespace",
  is(o: any): o is MsgDeleteNamespace {
    return o && (o.$typeUrl === MsgDeleteNamespace.typeUrl || typeof o.sender === "string" && typeof o.namespaceDenom === "string");
  },
  isAmino(o: any): o is MsgDeleteNamespaceAmino {
    return o && (o.$typeUrl === MsgDeleteNamespace.typeUrl || typeof o.sender === "string" && typeof o.namespace_denom === "string");
  },
  encode(message: MsgDeleteNamespace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.namespaceDenom !== "") {
      writer.uint32(18).string(message.namespaceDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteNamespace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNamespace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.namespaceDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteNamespace>): MsgDeleteNamespace {
    const message = createBaseMsgDeleteNamespace();
    message.sender = object.sender ?? "";
    message.namespaceDenom = object.namespaceDenom ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteNamespaceAmino): MsgDeleteNamespace {
    const message = createBaseMsgDeleteNamespace();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.namespace_denom !== undefined && object.namespace_denom !== null) {
      message.namespaceDenom = object.namespace_denom;
    }
    return message;
  },
  toAmino(message: MsgDeleteNamespace): MsgDeleteNamespaceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.namespace_denom = message.namespaceDenom === "" ? undefined : message.namespaceDenom;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteNamespaceAminoMsg): MsgDeleteNamespace {
    return MsgDeleteNamespace.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteNamespace): MsgDeleteNamespaceAminoMsg {
    return {
      type: "permissions/MsgDeleteNamespace",
      value: MsgDeleteNamespace.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteNamespaceProtoMsg): MsgDeleteNamespace {
    return MsgDeleteNamespace.decode(message.value);
  },
  toProto(message: MsgDeleteNamespace): Uint8Array {
    return MsgDeleteNamespace.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteNamespace): MsgDeleteNamespaceProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgDeleteNamespace",
      value: MsgDeleteNamespace.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDeleteNamespace.typeUrl, MsgDeleteNamespace);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDeleteNamespace.aminoType, MsgDeleteNamespace.typeUrl);
function createBaseMsgDeleteNamespaceResponse(): MsgDeleteNamespaceResponse {
  return {};
}
export const MsgDeleteNamespaceResponse = {
  typeUrl: "/injective.permissions.v1beta1.MsgDeleteNamespaceResponse",
  is(o: any): o is MsgDeleteNamespaceResponse {
    return o && o.$typeUrl === MsgDeleteNamespaceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDeleteNamespaceResponseAmino {
    return o && o.$typeUrl === MsgDeleteNamespaceResponse.typeUrl;
  },
  encode(_: MsgDeleteNamespaceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteNamespaceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteNamespaceResponse();
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
  fromPartial(_: DeepPartial<MsgDeleteNamespaceResponse>): MsgDeleteNamespaceResponse {
    const message = createBaseMsgDeleteNamespaceResponse();
    return message;
  },
  fromAmino(_: MsgDeleteNamespaceResponseAmino): MsgDeleteNamespaceResponse {
    const message = createBaseMsgDeleteNamespaceResponse();
    return message;
  },
  toAmino(_: MsgDeleteNamespaceResponse): MsgDeleteNamespaceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteNamespaceResponseAminoMsg): MsgDeleteNamespaceResponse {
    return MsgDeleteNamespaceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteNamespaceResponseProtoMsg): MsgDeleteNamespaceResponse {
    return MsgDeleteNamespaceResponse.decode(message.value);
  },
  toProto(message: MsgDeleteNamespaceResponse): Uint8Array {
    return MsgDeleteNamespaceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteNamespaceResponse): MsgDeleteNamespaceResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgDeleteNamespaceResponse",
      value: MsgDeleteNamespaceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDeleteNamespaceResponse.typeUrl, MsgDeleteNamespaceResponse);
function createBaseMsgUpdateNamespace(): MsgUpdateNamespace {
  return {
    sender: "",
    namespaceDenom: "",
    wasmHook: undefined,
    mintsPaused: undefined,
    sendsPaused: undefined,
    burnsPaused: undefined
  };
}
export const MsgUpdateNamespace = {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace",
  aminoType: "permissions/MsgUpdateNamespace",
  is(o: any): o is MsgUpdateNamespace {
    return o && (o.$typeUrl === MsgUpdateNamespace.typeUrl || typeof o.sender === "string" && typeof o.namespaceDenom === "string");
  },
  isAmino(o: any): o is MsgUpdateNamespaceAmino {
    return o && (o.$typeUrl === MsgUpdateNamespace.typeUrl || typeof o.sender === "string" && typeof o.namespace_denom === "string");
  },
  encode(message: MsgUpdateNamespace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.namespaceDenom !== "") {
      writer.uint32(18).string(message.namespaceDenom);
    }
    if (message.wasmHook !== undefined) {
      MsgUpdateNamespace_MsgSetWasmHook.encode(message.wasmHook, writer.uint32(26).fork()).ldelim();
    }
    if (message.mintsPaused !== undefined) {
      MsgUpdateNamespace_MsgSetMintsPaused.encode(message.mintsPaused, writer.uint32(34).fork()).ldelim();
    }
    if (message.sendsPaused !== undefined) {
      MsgUpdateNamespace_MsgSetSendsPaused.encode(message.sendsPaused, writer.uint32(42).fork()).ldelim();
    }
    if (message.burnsPaused !== undefined) {
      MsgUpdateNamespace_MsgSetBurnsPaused.encode(message.burnsPaused, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNamespace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.namespaceDenom = reader.string();
          break;
        case 3:
          message.wasmHook = MsgUpdateNamespace_MsgSetWasmHook.decode(reader, reader.uint32());
          break;
        case 4:
          message.mintsPaused = MsgUpdateNamespace_MsgSetMintsPaused.decode(reader, reader.uint32());
          break;
        case 5:
          message.sendsPaused = MsgUpdateNamespace_MsgSetSendsPaused.decode(reader, reader.uint32());
          break;
        case 6:
          message.burnsPaused = MsgUpdateNamespace_MsgSetBurnsPaused.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateNamespace>): MsgUpdateNamespace {
    const message = createBaseMsgUpdateNamespace();
    message.sender = object.sender ?? "";
    message.namespaceDenom = object.namespaceDenom ?? "";
    message.wasmHook = object.wasmHook !== undefined && object.wasmHook !== null ? MsgUpdateNamespace_MsgSetWasmHook.fromPartial(object.wasmHook) : undefined;
    message.mintsPaused = object.mintsPaused !== undefined && object.mintsPaused !== null ? MsgUpdateNamespace_MsgSetMintsPaused.fromPartial(object.mintsPaused) : undefined;
    message.sendsPaused = object.sendsPaused !== undefined && object.sendsPaused !== null ? MsgUpdateNamespace_MsgSetSendsPaused.fromPartial(object.sendsPaused) : undefined;
    message.burnsPaused = object.burnsPaused !== undefined && object.burnsPaused !== null ? MsgUpdateNamespace_MsgSetBurnsPaused.fromPartial(object.burnsPaused) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateNamespaceAmino): MsgUpdateNamespace {
    const message = createBaseMsgUpdateNamespace();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.namespace_denom !== undefined && object.namespace_denom !== null) {
      message.namespaceDenom = object.namespace_denom;
    }
    if (object.wasm_hook !== undefined && object.wasm_hook !== null) {
      message.wasmHook = MsgUpdateNamespace_MsgSetWasmHook.fromAmino(object.wasm_hook);
    }
    if (object.mints_paused !== undefined && object.mints_paused !== null) {
      message.mintsPaused = MsgUpdateNamespace_MsgSetMintsPaused.fromAmino(object.mints_paused);
    }
    if (object.sends_paused !== undefined && object.sends_paused !== null) {
      message.sendsPaused = MsgUpdateNamespace_MsgSetSendsPaused.fromAmino(object.sends_paused);
    }
    if (object.burns_paused !== undefined && object.burns_paused !== null) {
      message.burnsPaused = MsgUpdateNamespace_MsgSetBurnsPaused.fromAmino(object.burns_paused);
    }
    return message;
  },
  toAmino(message: MsgUpdateNamespace): MsgUpdateNamespaceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.namespace_denom = message.namespaceDenom === "" ? undefined : message.namespaceDenom;
    obj.wasm_hook = message.wasmHook ? MsgUpdateNamespace_MsgSetWasmHook.toAmino(message.wasmHook) : undefined;
    obj.mints_paused = message.mintsPaused ? MsgUpdateNamespace_MsgSetMintsPaused.toAmino(message.mintsPaused) : undefined;
    obj.sends_paused = message.sendsPaused ? MsgUpdateNamespace_MsgSetSendsPaused.toAmino(message.sendsPaused) : undefined;
    obj.burns_paused = message.burnsPaused ? MsgUpdateNamespace_MsgSetBurnsPaused.toAmino(message.burnsPaused) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNamespaceAminoMsg): MsgUpdateNamespace {
    return MsgUpdateNamespace.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateNamespace): MsgUpdateNamespaceAminoMsg {
    return {
      type: "permissions/MsgUpdateNamespace",
      value: MsgUpdateNamespace.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateNamespaceProtoMsg): MsgUpdateNamespace {
    return MsgUpdateNamespace.decode(message.value);
  },
  toProto(message: MsgUpdateNamespace): Uint8Array {
    return MsgUpdateNamespace.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNamespace): MsgUpdateNamespaceProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace",
      value: MsgUpdateNamespace.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateNamespace.typeUrl, MsgUpdateNamespace);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateNamespace.aminoType, MsgUpdateNamespace.typeUrl);
function createBaseMsgUpdateNamespace_MsgSetWasmHook(): MsgUpdateNamespace_MsgSetWasmHook {
  return {
    newValue: ""
  };
}
export const MsgUpdateNamespace_MsgSetWasmHook = {
  typeUrl: "/injective.permissions.v1beta1.MsgSetWasmHook",
  is(o: any): o is MsgUpdateNamespace_MsgSetWasmHook {
    return o && (o.$typeUrl === MsgUpdateNamespace_MsgSetWasmHook.typeUrl || typeof o.newValue === "string");
  },
  isAmino(o: any): o is MsgUpdateNamespace_MsgSetWasmHookAmino {
    return o && (o.$typeUrl === MsgUpdateNamespace_MsgSetWasmHook.typeUrl || typeof o.new_value === "string");
  },
  encode(message: MsgUpdateNamespace_MsgSetWasmHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newValue !== "") {
      writer.uint32(10).string(message.newValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNamespace_MsgSetWasmHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespace_MsgSetWasmHook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateNamespace_MsgSetWasmHook>): MsgUpdateNamespace_MsgSetWasmHook {
    const message = createBaseMsgUpdateNamespace_MsgSetWasmHook();
    message.newValue = object.newValue ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateNamespace_MsgSetWasmHookAmino): MsgUpdateNamespace_MsgSetWasmHook {
    const message = createBaseMsgUpdateNamespace_MsgSetWasmHook();
    if (object.new_value !== undefined && object.new_value !== null) {
      message.newValue = object.new_value;
    }
    return message;
  },
  toAmino(message: MsgUpdateNamespace_MsgSetWasmHook): MsgUpdateNamespace_MsgSetWasmHookAmino {
    const obj: any = {};
    obj.new_value = message.newValue === "" ? undefined : message.newValue;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNamespace_MsgSetWasmHookAminoMsg): MsgUpdateNamespace_MsgSetWasmHook {
    return MsgUpdateNamespace_MsgSetWasmHook.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateNamespace_MsgSetWasmHookProtoMsg): MsgUpdateNamespace_MsgSetWasmHook {
    return MsgUpdateNamespace_MsgSetWasmHook.decode(message.value);
  },
  toProto(message: MsgUpdateNamespace_MsgSetWasmHook): Uint8Array {
    return MsgUpdateNamespace_MsgSetWasmHook.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNamespace_MsgSetWasmHook): MsgUpdateNamespace_MsgSetWasmHookProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgSetWasmHook",
      value: MsgUpdateNamespace_MsgSetWasmHook.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateNamespace_MsgSetWasmHook.typeUrl, MsgUpdateNamespace_MsgSetWasmHook);
function createBaseMsgUpdateNamespace_MsgSetMintsPaused(): MsgUpdateNamespace_MsgSetMintsPaused {
  return {
    newValue: false
  };
}
export const MsgUpdateNamespace_MsgSetMintsPaused = {
  typeUrl: "/injective.permissions.v1beta1.MsgSetMintsPaused",
  is(o: any): o is MsgUpdateNamespace_MsgSetMintsPaused {
    return o && (o.$typeUrl === MsgUpdateNamespace_MsgSetMintsPaused.typeUrl || typeof o.newValue === "boolean");
  },
  isAmino(o: any): o is MsgUpdateNamespace_MsgSetMintsPausedAmino {
    return o && (o.$typeUrl === MsgUpdateNamespace_MsgSetMintsPaused.typeUrl || typeof o.new_value === "boolean");
  },
  encode(message: MsgUpdateNamespace_MsgSetMintsPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newValue === true) {
      writer.uint32(8).bool(message.newValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNamespace_MsgSetMintsPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespace_MsgSetMintsPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newValue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateNamespace_MsgSetMintsPaused>): MsgUpdateNamespace_MsgSetMintsPaused {
    const message = createBaseMsgUpdateNamespace_MsgSetMintsPaused();
    message.newValue = object.newValue ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateNamespace_MsgSetMintsPausedAmino): MsgUpdateNamespace_MsgSetMintsPaused {
    const message = createBaseMsgUpdateNamespace_MsgSetMintsPaused();
    if (object.new_value !== undefined && object.new_value !== null) {
      message.newValue = object.new_value;
    }
    return message;
  },
  toAmino(message: MsgUpdateNamespace_MsgSetMintsPaused): MsgUpdateNamespace_MsgSetMintsPausedAmino {
    const obj: any = {};
    obj.new_value = message.newValue === false ? undefined : message.newValue;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNamespace_MsgSetMintsPausedAminoMsg): MsgUpdateNamespace_MsgSetMintsPaused {
    return MsgUpdateNamespace_MsgSetMintsPaused.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateNamespace_MsgSetMintsPausedProtoMsg): MsgUpdateNamespace_MsgSetMintsPaused {
    return MsgUpdateNamespace_MsgSetMintsPaused.decode(message.value);
  },
  toProto(message: MsgUpdateNamespace_MsgSetMintsPaused): Uint8Array {
    return MsgUpdateNamespace_MsgSetMintsPaused.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNamespace_MsgSetMintsPaused): MsgUpdateNamespace_MsgSetMintsPausedProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgSetMintsPaused",
      value: MsgUpdateNamespace_MsgSetMintsPaused.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateNamespace_MsgSetMintsPaused.typeUrl, MsgUpdateNamespace_MsgSetMintsPaused);
function createBaseMsgUpdateNamespace_MsgSetSendsPaused(): MsgUpdateNamespace_MsgSetSendsPaused {
  return {
    newValue: false
  };
}
export const MsgUpdateNamespace_MsgSetSendsPaused = {
  typeUrl: "/injective.permissions.v1beta1.MsgSetSendsPaused",
  is(o: any): o is MsgUpdateNamespace_MsgSetSendsPaused {
    return o && (o.$typeUrl === MsgUpdateNamespace_MsgSetSendsPaused.typeUrl || typeof o.newValue === "boolean");
  },
  isAmino(o: any): o is MsgUpdateNamespace_MsgSetSendsPausedAmino {
    return o && (o.$typeUrl === MsgUpdateNamespace_MsgSetSendsPaused.typeUrl || typeof o.new_value === "boolean");
  },
  encode(message: MsgUpdateNamespace_MsgSetSendsPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newValue === true) {
      writer.uint32(8).bool(message.newValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNamespace_MsgSetSendsPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespace_MsgSetSendsPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newValue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateNamespace_MsgSetSendsPaused>): MsgUpdateNamespace_MsgSetSendsPaused {
    const message = createBaseMsgUpdateNamespace_MsgSetSendsPaused();
    message.newValue = object.newValue ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateNamespace_MsgSetSendsPausedAmino): MsgUpdateNamespace_MsgSetSendsPaused {
    const message = createBaseMsgUpdateNamespace_MsgSetSendsPaused();
    if (object.new_value !== undefined && object.new_value !== null) {
      message.newValue = object.new_value;
    }
    return message;
  },
  toAmino(message: MsgUpdateNamespace_MsgSetSendsPaused): MsgUpdateNamespace_MsgSetSendsPausedAmino {
    const obj: any = {};
    obj.new_value = message.newValue === false ? undefined : message.newValue;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNamespace_MsgSetSendsPausedAminoMsg): MsgUpdateNamespace_MsgSetSendsPaused {
    return MsgUpdateNamespace_MsgSetSendsPaused.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateNamespace_MsgSetSendsPausedProtoMsg): MsgUpdateNamespace_MsgSetSendsPaused {
    return MsgUpdateNamespace_MsgSetSendsPaused.decode(message.value);
  },
  toProto(message: MsgUpdateNamespace_MsgSetSendsPaused): Uint8Array {
    return MsgUpdateNamespace_MsgSetSendsPaused.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNamespace_MsgSetSendsPaused): MsgUpdateNamespace_MsgSetSendsPausedProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgSetSendsPaused",
      value: MsgUpdateNamespace_MsgSetSendsPaused.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateNamespace_MsgSetSendsPaused.typeUrl, MsgUpdateNamespace_MsgSetSendsPaused);
function createBaseMsgUpdateNamespace_MsgSetBurnsPaused(): MsgUpdateNamespace_MsgSetBurnsPaused {
  return {
    newValue: false
  };
}
export const MsgUpdateNamespace_MsgSetBurnsPaused = {
  typeUrl: "/injective.permissions.v1beta1.MsgSetBurnsPaused",
  is(o: any): o is MsgUpdateNamespace_MsgSetBurnsPaused {
    return o && (o.$typeUrl === MsgUpdateNamespace_MsgSetBurnsPaused.typeUrl || typeof o.newValue === "boolean");
  },
  isAmino(o: any): o is MsgUpdateNamespace_MsgSetBurnsPausedAmino {
    return o && (o.$typeUrl === MsgUpdateNamespace_MsgSetBurnsPaused.typeUrl || typeof o.new_value === "boolean");
  },
  encode(message: MsgUpdateNamespace_MsgSetBurnsPaused, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newValue === true) {
      writer.uint32(8).bool(message.newValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNamespace_MsgSetBurnsPaused {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespace_MsgSetBurnsPaused();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newValue = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateNamespace_MsgSetBurnsPaused>): MsgUpdateNamespace_MsgSetBurnsPaused {
    const message = createBaseMsgUpdateNamespace_MsgSetBurnsPaused();
    message.newValue = object.newValue ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateNamespace_MsgSetBurnsPausedAmino): MsgUpdateNamespace_MsgSetBurnsPaused {
    const message = createBaseMsgUpdateNamespace_MsgSetBurnsPaused();
    if (object.new_value !== undefined && object.new_value !== null) {
      message.newValue = object.new_value;
    }
    return message;
  },
  toAmino(message: MsgUpdateNamespace_MsgSetBurnsPaused): MsgUpdateNamespace_MsgSetBurnsPausedAmino {
    const obj: any = {};
    obj.new_value = message.newValue === false ? undefined : message.newValue;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNamespace_MsgSetBurnsPausedAminoMsg): MsgUpdateNamespace_MsgSetBurnsPaused {
    return MsgUpdateNamespace_MsgSetBurnsPaused.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateNamespace_MsgSetBurnsPausedProtoMsg): MsgUpdateNamespace_MsgSetBurnsPaused {
    return MsgUpdateNamespace_MsgSetBurnsPaused.decode(message.value);
  },
  toProto(message: MsgUpdateNamespace_MsgSetBurnsPaused): Uint8Array {
    return MsgUpdateNamespace_MsgSetBurnsPaused.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNamespace_MsgSetBurnsPaused): MsgUpdateNamespace_MsgSetBurnsPausedProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgSetBurnsPaused",
      value: MsgUpdateNamespace_MsgSetBurnsPaused.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateNamespace_MsgSetBurnsPaused.typeUrl, MsgUpdateNamespace_MsgSetBurnsPaused);
function createBaseMsgUpdateNamespaceResponse(): MsgUpdateNamespaceResponse {
  return {};
}
export const MsgUpdateNamespaceResponse = {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceResponse",
  is(o: any): o is MsgUpdateNamespaceResponse {
    return o && o.$typeUrl === MsgUpdateNamespaceResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateNamespaceResponseAmino {
    return o && o.$typeUrl === MsgUpdateNamespaceResponse.typeUrl;
  },
  encode(_: MsgUpdateNamespaceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNamespaceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespaceResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateNamespaceResponse>): MsgUpdateNamespaceResponse {
    const message = createBaseMsgUpdateNamespaceResponse();
    return message;
  },
  fromAmino(_: MsgUpdateNamespaceResponseAmino): MsgUpdateNamespaceResponse {
    const message = createBaseMsgUpdateNamespaceResponse();
    return message;
  },
  toAmino(_: MsgUpdateNamespaceResponse): MsgUpdateNamespaceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNamespaceResponseAminoMsg): MsgUpdateNamespaceResponse {
    return MsgUpdateNamespaceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateNamespaceResponseProtoMsg): MsgUpdateNamespaceResponse {
    return MsgUpdateNamespaceResponse.decode(message.value);
  },
  toProto(message: MsgUpdateNamespaceResponse): Uint8Array {
    return MsgUpdateNamespaceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNamespaceResponse): MsgUpdateNamespaceResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceResponse",
      value: MsgUpdateNamespaceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateNamespaceResponse.typeUrl, MsgUpdateNamespaceResponse);
function createBaseMsgUpdateNamespaceRoles(): MsgUpdateNamespaceRoles {
  return {
    sender: "",
    namespaceDenom: "",
    rolePermissions: [],
    addressRoles: []
  };
}
export const MsgUpdateNamespaceRoles = {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceRoles",
  aminoType: "permissions/MsgUpdateNamespaceRoles",
  is(o: any): o is MsgUpdateNamespaceRoles {
    return o && (o.$typeUrl === MsgUpdateNamespaceRoles.typeUrl || typeof o.sender === "string" && typeof o.namespaceDenom === "string" && Array.isArray(o.rolePermissions) && (!o.rolePermissions.length || Role.is(o.rolePermissions[0])) && Array.isArray(o.addressRoles) && (!o.addressRoles.length || AddressRoles.is(o.addressRoles[0])));
  },
  isAmino(o: any): o is MsgUpdateNamespaceRolesAmino {
    return o && (o.$typeUrl === MsgUpdateNamespaceRoles.typeUrl || typeof o.sender === "string" && typeof o.namespace_denom === "string" && Array.isArray(o.role_permissions) && (!o.role_permissions.length || Role.isAmino(o.role_permissions[0])) && Array.isArray(o.address_roles) && (!o.address_roles.length || AddressRoles.isAmino(o.address_roles[0])));
  },
  encode(message: MsgUpdateNamespaceRoles, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.namespaceDenom !== "") {
      writer.uint32(18).string(message.namespaceDenom);
    }
    for (const v of message.rolePermissions) {
      Role.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.addressRoles) {
      AddressRoles.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNamespaceRoles {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespaceRoles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.namespaceDenom = reader.string();
          break;
        case 3:
          message.rolePermissions.push(Role.decode(reader, reader.uint32()));
          break;
        case 4:
          message.addressRoles.push(AddressRoles.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateNamespaceRoles>): MsgUpdateNamespaceRoles {
    const message = createBaseMsgUpdateNamespaceRoles();
    message.sender = object.sender ?? "";
    message.namespaceDenom = object.namespaceDenom ?? "";
    message.rolePermissions = object.rolePermissions?.map(e => Role.fromPartial(e)) || [];
    message.addressRoles = object.addressRoles?.map(e => AddressRoles.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateNamespaceRolesAmino): MsgUpdateNamespaceRoles {
    const message = createBaseMsgUpdateNamespaceRoles();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.namespace_denom !== undefined && object.namespace_denom !== null) {
      message.namespaceDenom = object.namespace_denom;
    }
    message.rolePermissions = object.role_permissions?.map(e => Role.fromAmino(e)) || [];
    message.addressRoles = object.address_roles?.map(e => AddressRoles.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateNamespaceRoles): MsgUpdateNamespaceRolesAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.namespace_denom = message.namespaceDenom === "" ? undefined : message.namespaceDenom;
    if (message.rolePermissions) {
      obj.role_permissions = message.rolePermissions.map(e => e ? Role.toAmino(e) : undefined);
    } else {
      obj.role_permissions = message.rolePermissions;
    }
    if (message.addressRoles) {
      obj.address_roles = message.addressRoles.map(e => e ? AddressRoles.toAmino(e) : undefined);
    } else {
      obj.address_roles = message.addressRoles;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNamespaceRolesAminoMsg): MsgUpdateNamespaceRoles {
    return MsgUpdateNamespaceRoles.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateNamespaceRoles): MsgUpdateNamespaceRolesAminoMsg {
    return {
      type: "permissions/MsgUpdateNamespaceRoles",
      value: MsgUpdateNamespaceRoles.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateNamespaceRolesProtoMsg): MsgUpdateNamespaceRoles {
    return MsgUpdateNamespaceRoles.decode(message.value);
  },
  toProto(message: MsgUpdateNamespaceRoles): Uint8Array {
    return MsgUpdateNamespaceRoles.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNamespaceRoles): MsgUpdateNamespaceRolesProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceRoles",
      value: MsgUpdateNamespaceRoles.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateNamespaceRoles.typeUrl, MsgUpdateNamespaceRoles);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateNamespaceRoles.aminoType, MsgUpdateNamespaceRoles.typeUrl);
function createBaseMsgUpdateNamespaceRolesResponse(): MsgUpdateNamespaceRolesResponse {
  return {};
}
export const MsgUpdateNamespaceRolesResponse = {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceRolesResponse",
  is(o: any): o is MsgUpdateNamespaceRolesResponse {
    return o && o.$typeUrl === MsgUpdateNamespaceRolesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateNamespaceRolesResponseAmino {
    return o && o.$typeUrl === MsgUpdateNamespaceRolesResponse.typeUrl;
  },
  encode(_: MsgUpdateNamespaceRolesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNamespaceRolesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespaceRolesResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateNamespaceRolesResponse>): MsgUpdateNamespaceRolesResponse {
    const message = createBaseMsgUpdateNamespaceRolesResponse();
    return message;
  },
  fromAmino(_: MsgUpdateNamespaceRolesResponseAmino): MsgUpdateNamespaceRolesResponse {
    const message = createBaseMsgUpdateNamespaceRolesResponse();
    return message;
  },
  toAmino(_: MsgUpdateNamespaceRolesResponse): MsgUpdateNamespaceRolesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNamespaceRolesResponseAminoMsg): MsgUpdateNamespaceRolesResponse {
    return MsgUpdateNamespaceRolesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateNamespaceRolesResponseProtoMsg): MsgUpdateNamespaceRolesResponse {
    return MsgUpdateNamespaceRolesResponse.decode(message.value);
  },
  toProto(message: MsgUpdateNamespaceRolesResponse): Uint8Array {
    return MsgUpdateNamespaceRolesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNamespaceRolesResponse): MsgUpdateNamespaceRolesResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceRolesResponse",
      value: MsgUpdateNamespaceRolesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateNamespaceRolesResponse.typeUrl, MsgUpdateNamespaceRolesResponse);
function createBaseMsgRevokeNamespaceRoles(): MsgRevokeNamespaceRoles {
  return {
    sender: "",
    namespaceDenom: "",
    addressRolesToRevoke: []
  };
}
export const MsgRevokeNamespaceRoles = {
  typeUrl: "/injective.permissions.v1beta1.MsgRevokeNamespaceRoles",
  aminoType: "permissions/MsgRevokeNamespaceRoles",
  is(o: any): o is MsgRevokeNamespaceRoles {
    return o && (o.$typeUrl === MsgRevokeNamespaceRoles.typeUrl || typeof o.sender === "string" && typeof o.namespaceDenom === "string" && Array.isArray(o.addressRolesToRevoke) && (!o.addressRolesToRevoke.length || AddressRoles.is(o.addressRolesToRevoke[0])));
  },
  isAmino(o: any): o is MsgRevokeNamespaceRolesAmino {
    return o && (o.$typeUrl === MsgRevokeNamespaceRoles.typeUrl || typeof o.sender === "string" && typeof o.namespace_denom === "string" && Array.isArray(o.address_roles_to_revoke) && (!o.address_roles_to_revoke.length || AddressRoles.isAmino(o.address_roles_to_revoke[0])));
  },
  encode(message: MsgRevokeNamespaceRoles, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.namespaceDenom !== "") {
      writer.uint32(18).string(message.namespaceDenom);
    }
    for (const v of message.addressRolesToRevoke) {
      AddressRoles.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeNamespaceRoles {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeNamespaceRoles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.namespaceDenom = reader.string();
          break;
        case 3:
          message.addressRolesToRevoke.push(AddressRoles.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRevokeNamespaceRoles>): MsgRevokeNamespaceRoles {
    const message = createBaseMsgRevokeNamespaceRoles();
    message.sender = object.sender ?? "";
    message.namespaceDenom = object.namespaceDenom ?? "";
    message.addressRolesToRevoke = object.addressRolesToRevoke?.map(e => AddressRoles.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgRevokeNamespaceRolesAmino): MsgRevokeNamespaceRoles {
    const message = createBaseMsgRevokeNamespaceRoles();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.namespace_denom !== undefined && object.namespace_denom !== null) {
      message.namespaceDenom = object.namespace_denom;
    }
    message.addressRolesToRevoke = object.address_roles_to_revoke?.map(e => AddressRoles.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRevokeNamespaceRoles): MsgRevokeNamespaceRolesAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.namespace_denom = message.namespaceDenom === "" ? undefined : message.namespaceDenom;
    if (message.addressRolesToRevoke) {
      obj.address_roles_to_revoke = message.addressRolesToRevoke.map(e => e ? AddressRoles.toAmino(e) : undefined);
    } else {
      obj.address_roles_to_revoke = message.addressRolesToRevoke;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRevokeNamespaceRolesAminoMsg): MsgRevokeNamespaceRoles {
    return MsgRevokeNamespaceRoles.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeNamespaceRoles): MsgRevokeNamespaceRolesAminoMsg {
    return {
      type: "permissions/MsgRevokeNamespaceRoles",
      value: MsgRevokeNamespaceRoles.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeNamespaceRolesProtoMsg): MsgRevokeNamespaceRoles {
    return MsgRevokeNamespaceRoles.decode(message.value);
  },
  toProto(message: MsgRevokeNamespaceRoles): Uint8Array {
    return MsgRevokeNamespaceRoles.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeNamespaceRoles): MsgRevokeNamespaceRolesProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgRevokeNamespaceRoles",
      value: MsgRevokeNamespaceRoles.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRevokeNamespaceRoles.typeUrl, MsgRevokeNamespaceRoles);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRevokeNamespaceRoles.aminoType, MsgRevokeNamespaceRoles.typeUrl);
function createBaseMsgRevokeNamespaceRolesResponse(): MsgRevokeNamespaceRolesResponse {
  return {};
}
export const MsgRevokeNamespaceRolesResponse = {
  typeUrl: "/injective.permissions.v1beta1.MsgRevokeNamespaceRolesResponse",
  is(o: any): o is MsgRevokeNamespaceRolesResponse {
    return o && o.$typeUrl === MsgRevokeNamespaceRolesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRevokeNamespaceRolesResponseAmino {
    return o && o.$typeUrl === MsgRevokeNamespaceRolesResponse.typeUrl;
  },
  encode(_: MsgRevokeNamespaceRolesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeNamespaceRolesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeNamespaceRolesResponse();
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
  fromPartial(_: DeepPartial<MsgRevokeNamespaceRolesResponse>): MsgRevokeNamespaceRolesResponse {
    const message = createBaseMsgRevokeNamespaceRolesResponse();
    return message;
  },
  fromAmino(_: MsgRevokeNamespaceRolesResponseAmino): MsgRevokeNamespaceRolesResponse {
    const message = createBaseMsgRevokeNamespaceRolesResponse();
    return message;
  },
  toAmino(_: MsgRevokeNamespaceRolesResponse): MsgRevokeNamespaceRolesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeNamespaceRolesResponseAminoMsg): MsgRevokeNamespaceRolesResponse {
    return MsgRevokeNamespaceRolesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeNamespaceRolesResponseProtoMsg): MsgRevokeNamespaceRolesResponse {
    return MsgRevokeNamespaceRolesResponse.decode(message.value);
  },
  toProto(message: MsgRevokeNamespaceRolesResponse): Uint8Array {
    return MsgRevokeNamespaceRolesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeNamespaceRolesResponse): MsgRevokeNamespaceRolesResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgRevokeNamespaceRolesResponse",
      value: MsgRevokeNamespaceRolesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRevokeNamespaceRolesResponse.typeUrl, MsgRevokeNamespaceRolesResponse);
function createBaseMsgClaimVoucher(): MsgClaimVoucher {
  return {
    sender: "",
    denom: ""
  };
}
export const MsgClaimVoucher = {
  typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher",
  aminoType: "permissions/MsgClaimVoucher",
  is(o: any): o is MsgClaimVoucher {
    return o && (o.$typeUrl === MsgClaimVoucher.typeUrl || typeof o.sender === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgClaimVoucherAmino {
    return o && (o.$typeUrl === MsgClaimVoucher.typeUrl || typeof o.sender === "string" && typeof o.denom === "string");
  },
  encode(message: MsgClaimVoucher, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimVoucher {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimVoucher();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
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
  fromPartial(object: DeepPartial<MsgClaimVoucher>): MsgClaimVoucher {
    const message = createBaseMsgClaimVoucher();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgClaimVoucherAmino): MsgClaimVoucher {
    const message = createBaseMsgClaimVoucher();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgClaimVoucher): MsgClaimVoucherAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgClaimVoucherAminoMsg): MsgClaimVoucher {
    return MsgClaimVoucher.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaimVoucher): MsgClaimVoucherAminoMsg {
    return {
      type: "permissions/MsgClaimVoucher",
      value: MsgClaimVoucher.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimVoucherProtoMsg): MsgClaimVoucher {
    return MsgClaimVoucher.decode(message.value);
  },
  toProto(message: MsgClaimVoucher): Uint8Array {
    return MsgClaimVoucher.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimVoucher): MsgClaimVoucherProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher",
      value: MsgClaimVoucher.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimVoucher.typeUrl, MsgClaimVoucher);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgClaimVoucher.aminoType, MsgClaimVoucher.typeUrl);
function createBaseMsgClaimVoucherResponse(): MsgClaimVoucherResponse {
  return {};
}
export const MsgClaimVoucherResponse = {
  typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucherResponse",
  is(o: any): o is MsgClaimVoucherResponse {
    return o && o.$typeUrl === MsgClaimVoucherResponse.typeUrl;
  },
  isAmino(o: any): o is MsgClaimVoucherResponseAmino {
    return o && o.$typeUrl === MsgClaimVoucherResponse.typeUrl;
  },
  encode(_: MsgClaimVoucherResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimVoucherResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimVoucherResponse();
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
  fromPartial(_: DeepPartial<MsgClaimVoucherResponse>): MsgClaimVoucherResponse {
    const message = createBaseMsgClaimVoucherResponse();
    return message;
  },
  fromAmino(_: MsgClaimVoucherResponseAmino): MsgClaimVoucherResponse {
    const message = createBaseMsgClaimVoucherResponse();
    return message;
  },
  toAmino(_: MsgClaimVoucherResponse): MsgClaimVoucherResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimVoucherResponseAminoMsg): MsgClaimVoucherResponse {
    return MsgClaimVoucherResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimVoucherResponseProtoMsg): MsgClaimVoucherResponse {
    return MsgClaimVoucherResponse.decode(message.value);
  },
  toProto(message: MsgClaimVoucherResponse): Uint8Array {
    return MsgClaimVoucherResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimVoucherResponse): MsgClaimVoucherResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucherResponse",
      value: MsgClaimVoucherResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgClaimVoucherResponse.typeUrl, MsgClaimVoucherResponse);