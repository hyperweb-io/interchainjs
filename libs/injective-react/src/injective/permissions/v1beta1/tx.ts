import { Params, ParamsAmino } from "../../../cosmos/bank/v1beta1/bank";
import { Namespace, NamespaceAmino, Role, RoleAmino, RoleManager, RoleManagerAmino, PolicyStatus, PolicyStatusAmino, PolicyManagerCapability, PolicyManagerCapabilityAmino, RoleActors, RoleActorsAmino } from "./permissions";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * @name MsgUpdateParams
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   */
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
/**
 * @name MsgUpdateParamsAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   */
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
/**
 * @name MsgUpdateParamsResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * @name MsgCreateNamespace
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgCreateNamespace
 */
export interface MsgCreateNamespace {
  sender: string;
  namespace: Namespace;
}
export interface MsgCreateNamespaceProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace";
  value: Uint8Array;
}
/**
 * @name MsgCreateNamespaceAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgCreateNamespace
 */
export interface MsgCreateNamespaceAmino {
  sender: string;
  namespace: NamespaceAmino;
}
export interface MsgCreateNamespaceAminoMsg {
  type: "permissions/MsgCreateNamespace";
  value: MsgCreateNamespaceAmino;
}
/**
 * @name MsgCreateNamespaceResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgCreateNamespaceResponse
 */
export interface MsgCreateNamespaceResponse {}
export interface MsgCreateNamespaceResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespaceResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateNamespaceResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgCreateNamespaceResponse
 */
export interface MsgCreateNamespaceResponseAmino {}
export interface MsgCreateNamespaceResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgCreateNamespaceResponse";
  value: MsgCreateNamespaceResponseAmino;
}
/**
 * @name MsgUpdateNamespace
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateNamespace
 */
export interface MsgUpdateNamespace {
  sender: string;
  /**
   * denom whose namespace updates are to be applied
   */
  denom: string;
  /**
   * address of smart contract to apply code-based restrictions
   */
  contractHook?: MsgUpdateNamespace_SetContractHook;
  /**
   * role permissions to update
   */
  rolePermissions: Role[];
  /**
   * role managers to update
   */
  roleManagers: RoleManager[];
  /**
   * policy statuses to update
   */
  policyStatuses: PolicyStatus[];
  /**
   * policy manager capabilities to update
   */
  policyManagerCapabilities: PolicyManagerCapability[];
}
export interface MsgUpdateNamespaceProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace";
  value: Uint8Array;
}
/**
 * @name MsgUpdateNamespaceAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateNamespace
 */
export interface MsgUpdateNamespaceAmino {
  sender: string;
  /**
   * denom whose namespace updates are to be applied
   */
  denom: string;
  /**
   * address of smart contract to apply code-based restrictions
   */
  contract_hook?: MsgUpdateNamespace_SetContractHookAmino;
  /**
   * role permissions to update
   */
  role_permissions: RoleAmino[];
  /**
   * role managers to update
   */
  role_managers: RoleManagerAmino[];
  /**
   * policy statuses to update
   */
  policy_statuses: PolicyStatusAmino[];
  /**
   * policy manager capabilities to update
   */
  policy_manager_capabilities: PolicyManagerCapabilityAmino[];
}
export interface MsgUpdateNamespaceAminoMsg {
  type: "permissions/MsgUpdateNamespace";
  value: MsgUpdateNamespaceAmino;
}
/**
 * @name MsgUpdateNamespace_SetContractHook
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.SetContractHook
 */
export interface MsgUpdateNamespace_SetContractHook {
  newValue: string;
}
export interface MsgUpdateNamespace_SetContractHookProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.SetContractHook";
  value: Uint8Array;
}
/**
 * @name MsgUpdateNamespace_SetContractHookAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateNamespace_SetContractHook
 */
export interface MsgUpdateNamespace_SetContractHookAmino {
  new_value: string;
}
export interface MsgUpdateNamespace_SetContractHookAminoMsg {
  type: "/injective.permissions.v1beta1.SetContractHook";
  value: MsgUpdateNamespace_SetContractHookAmino;
}
/**
 * @name MsgUpdateNamespaceResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateNamespaceResponse
 */
export interface MsgUpdateNamespaceResponse {}
export interface MsgUpdateNamespaceResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateNamespaceResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateNamespaceResponse
 */
export interface MsgUpdateNamespaceResponseAmino {}
export interface MsgUpdateNamespaceResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgUpdateNamespaceResponse";
  value: MsgUpdateNamespaceResponseAmino;
}
/**
 * @name MsgUpdateActorRoles
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateActorRoles
 */
export interface MsgUpdateActorRoles {
  sender: string;
  /**
   * namespace denom to which this updates are applied
   */
  denom: string;
  /**
   * roles to add for given actors
   */
  roleActorsToAdd: RoleActors[];
  /**
   * roles to revoke from given actors
   */
  roleActorsToRevoke: RoleActors[];
}
export interface MsgUpdateActorRolesProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateActorRoles";
  value: Uint8Array;
}
/**
 * @name MsgUpdateActorRolesAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateActorRoles
 */
export interface MsgUpdateActorRolesAmino {
  sender: string;
  /**
   * namespace denom to which this updates are applied
   */
  denom: string;
  /**
   * roles to add for given actors
   */
  role_actors_to_add: RoleActorsAmino[];
  /**
   * roles to revoke from given actors
   */
  role_actors_to_revoke: RoleActorsAmino[];
}
export interface MsgUpdateActorRolesAminoMsg {
  type: "permissions/MsgUpdateActorRoles";
  value: MsgUpdateActorRolesAmino;
}
/**
 * @name MsgUpdateActorRolesResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateActorRolesResponse
 */
export interface MsgUpdateActorRolesResponse {}
export interface MsgUpdateActorRolesResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateActorRolesResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateActorRolesResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateActorRolesResponse
 */
export interface MsgUpdateActorRolesResponseAmino {}
export interface MsgUpdateActorRolesResponseAminoMsg {
  type: "/injective.permissions.v1beta1.MsgUpdateActorRolesResponse";
  value: MsgUpdateActorRolesResponseAmino;
}
/**
 * @name MsgClaimVoucher
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgClaimVoucher
 */
export interface MsgClaimVoucher {
  sender: string;
  denom: string;
}
export interface MsgClaimVoucherProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher";
  value: Uint8Array;
}
/**
 * @name MsgClaimVoucherAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgClaimVoucher
 */
export interface MsgClaimVoucherAmino {
  sender: string;
  denom: string;
}
export interface MsgClaimVoucherAminoMsg {
  type: "permissions/MsgClaimVoucher";
  value: MsgClaimVoucherAmino;
}
/**
 * @name MsgClaimVoucherResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgClaimVoucherResponse
 */
export interface MsgClaimVoucherResponse {}
export interface MsgClaimVoucherResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucherResponse";
  value: Uint8Array;
}
/**
 * @name MsgClaimVoucherResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgClaimVoucherResponse
 */
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
/**
 * @name MsgUpdateParams
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateParams
 */
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
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateParamsResponse
 */
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
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateNamespace(): MsgCreateNamespace {
  return {
    sender: "",
    namespace: Namespace.fromPartial({})
  };
}
/**
 * @name MsgCreateNamespace
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgCreateNamespace
 */
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgCreateNamespace.typeUrl)) {
      return;
    }
    Namespace.registerTypeUrl();
  }
};
function createBaseMsgCreateNamespaceResponse(): MsgCreateNamespaceResponse {
  return {};
}
/**
 * @name MsgCreateNamespaceResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgCreateNamespaceResponse
 */
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
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateNamespace(): MsgUpdateNamespace {
  return {
    sender: "",
    denom: "",
    contractHook: undefined,
    rolePermissions: [],
    roleManagers: [],
    policyStatuses: [],
    policyManagerCapabilities: []
  };
}
/**
 * @name MsgUpdateNamespace
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateNamespace
 */
export const MsgUpdateNamespace = {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace",
  aminoType: "permissions/MsgUpdateNamespace",
  is(o: any): o is MsgUpdateNamespace {
    return o && (o.$typeUrl === MsgUpdateNamespace.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && Array.isArray(o.rolePermissions) && (!o.rolePermissions.length || Role.is(o.rolePermissions[0])) && Array.isArray(o.roleManagers) && (!o.roleManagers.length || RoleManager.is(o.roleManagers[0])) && Array.isArray(o.policyStatuses) && (!o.policyStatuses.length || PolicyStatus.is(o.policyStatuses[0])) && Array.isArray(o.policyManagerCapabilities) && (!o.policyManagerCapabilities.length || PolicyManagerCapability.is(o.policyManagerCapabilities[0])));
  },
  isAmino(o: any): o is MsgUpdateNamespaceAmino {
    return o && (o.$typeUrl === MsgUpdateNamespace.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && Array.isArray(o.role_permissions) && (!o.role_permissions.length || Role.isAmino(o.role_permissions[0])) && Array.isArray(o.role_managers) && (!o.role_managers.length || RoleManager.isAmino(o.role_managers[0])) && Array.isArray(o.policy_statuses) && (!o.policy_statuses.length || PolicyStatus.isAmino(o.policy_statuses[0])) && Array.isArray(o.policy_manager_capabilities) && (!o.policy_manager_capabilities.length || PolicyManagerCapability.isAmino(o.policy_manager_capabilities[0])));
  },
  encode(message: MsgUpdateNamespace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.contractHook !== undefined) {
      MsgUpdateNamespace_SetContractHook.encode(message.contractHook, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.rolePermissions) {
      Role.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.roleManagers) {
      RoleManager.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.policyStatuses) {
      PolicyStatus.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.policyManagerCapabilities) {
      PolicyManagerCapability.encode(v!, writer.uint32(58).fork()).ldelim();
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
          message.denom = reader.string();
          break;
        case 3:
          message.contractHook = MsgUpdateNamespace_SetContractHook.decode(reader, reader.uint32());
          break;
        case 4:
          message.rolePermissions.push(Role.decode(reader, reader.uint32()));
          break;
        case 5:
          message.roleManagers.push(RoleManager.decode(reader, reader.uint32()));
          break;
        case 6:
          message.policyStatuses.push(PolicyStatus.decode(reader, reader.uint32()));
          break;
        case 7:
          message.policyManagerCapabilities.push(PolicyManagerCapability.decode(reader, reader.uint32()));
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
    message.denom = object.denom ?? "";
    message.contractHook = object.contractHook !== undefined && object.contractHook !== null ? MsgUpdateNamespace_SetContractHook.fromPartial(object.contractHook) : undefined;
    message.rolePermissions = object.rolePermissions?.map(e => Role.fromPartial(e)) || [];
    message.roleManagers = object.roleManagers?.map(e => RoleManager.fromPartial(e)) || [];
    message.policyStatuses = object.policyStatuses?.map(e => PolicyStatus.fromPartial(e)) || [];
    message.policyManagerCapabilities = object.policyManagerCapabilities?.map(e => PolicyManagerCapability.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateNamespaceAmino): MsgUpdateNamespace {
    const message = createBaseMsgUpdateNamespace();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.contract_hook !== undefined && object.contract_hook !== null) {
      message.contractHook = MsgUpdateNamespace_SetContractHook.fromAmino(object.contract_hook);
    }
    message.rolePermissions = object.role_permissions?.map(e => Role.fromAmino(e)) || [];
    message.roleManagers = object.role_managers?.map(e => RoleManager.fromAmino(e)) || [];
    message.policyStatuses = object.policy_statuses?.map(e => PolicyStatus.fromAmino(e)) || [];
    message.policyManagerCapabilities = object.policy_manager_capabilities?.map(e => PolicyManagerCapability.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateNamespace): MsgUpdateNamespaceAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.contract_hook = message.contractHook ? MsgUpdateNamespace_SetContractHook.toAmino(message.contractHook) : undefined;
    if (message.rolePermissions) {
      obj.role_permissions = message.rolePermissions.map(e => e ? Role.toAmino(e) : undefined);
    } else {
      obj.role_permissions = message.rolePermissions;
    }
    if (message.roleManagers) {
      obj.role_managers = message.roleManagers.map(e => e ? RoleManager.toAmino(e) : undefined);
    } else {
      obj.role_managers = message.roleManagers;
    }
    if (message.policyStatuses) {
      obj.policy_statuses = message.policyStatuses.map(e => e ? PolicyStatus.toAmino(e) : undefined);
    } else {
      obj.policy_statuses = message.policyStatuses;
    }
    if (message.policyManagerCapabilities) {
      obj.policy_manager_capabilities = message.policyManagerCapabilities.map(e => e ? PolicyManagerCapability.toAmino(e) : undefined);
    } else {
      obj.policy_manager_capabilities = message.policyManagerCapabilities;
    }
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateNamespace.typeUrl)) {
      return;
    }
    MsgUpdateNamespace_SetContractHook.registerTypeUrl();
    Role.registerTypeUrl();
    RoleManager.registerTypeUrl();
    PolicyStatus.registerTypeUrl();
    PolicyManagerCapability.registerTypeUrl();
  }
};
function createBaseMsgUpdateNamespace_SetContractHook(): MsgUpdateNamespace_SetContractHook {
  return {
    newValue: ""
  };
}
/**
 * @name MsgUpdateNamespace_SetContractHook
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.SetContractHook
 */
export const MsgUpdateNamespace_SetContractHook = {
  typeUrl: "/injective.permissions.v1beta1.SetContractHook",
  is(o: any): o is MsgUpdateNamespace_SetContractHook {
    return o && (o.$typeUrl === MsgUpdateNamespace_SetContractHook.typeUrl || typeof o.newValue === "string");
  },
  isAmino(o: any): o is MsgUpdateNamespace_SetContractHookAmino {
    return o && (o.$typeUrl === MsgUpdateNamespace_SetContractHook.typeUrl || typeof o.new_value === "string");
  },
  encode(message: MsgUpdateNamespace_SetContractHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newValue !== "") {
      writer.uint32(10).string(message.newValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateNamespace_SetContractHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNamespace_SetContractHook();
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
  fromPartial(object: DeepPartial<MsgUpdateNamespace_SetContractHook>): MsgUpdateNamespace_SetContractHook {
    const message = createBaseMsgUpdateNamespace_SetContractHook();
    message.newValue = object.newValue ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateNamespace_SetContractHookAmino): MsgUpdateNamespace_SetContractHook {
    const message = createBaseMsgUpdateNamespace_SetContractHook();
    if (object.new_value !== undefined && object.new_value !== null) {
      message.newValue = object.new_value;
    }
    return message;
  },
  toAmino(message: MsgUpdateNamespace_SetContractHook): MsgUpdateNamespace_SetContractHookAmino {
    const obj: any = {};
    obj.new_value = message.newValue === "" ? undefined : message.newValue;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateNamespace_SetContractHookAminoMsg): MsgUpdateNamespace_SetContractHook {
    return MsgUpdateNamespace_SetContractHook.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateNamespace_SetContractHookProtoMsg): MsgUpdateNamespace_SetContractHook {
    return MsgUpdateNamespace_SetContractHook.decode(message.value);
  },
  toProto(message: MsgUpdateNamespace_SetContractHook): Uint8Array {
    return MsgUpdateNamespace_SetContractHook.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateNamespace_SetContractHook): MsgUpdateNamespace_SetContractHookProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.SetContractHook",
      value: MsgUpdateNamespace_SetContractHook.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateNamespaceResponse(): MsgUpdateNamespaceResponse {
  return {};
}
/**
 * @name MsgUpdateNamespaceResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateNamespaceResponse
 */
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
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateActorRoles(): MsgUpdateActorRoles {
  return {
    sender: "",
    denom: "",
    roleActorsToAdd: [],
    roleActorsToRevoke: []
  };
}
/**
 * @name MsgUpdateActorRoles
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateActorRoles
 */
export const MsgUpdateActorRoles = {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateActorRoles",
  aminoType: "permissions/MsgUpdateActorRoles",
  is(o: any): o is MsgUpdateActorRoles {
    return o && (o.$typeUrl === MsgUpdateActorRoles.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && Array.isArray(o.roleActorsToAdd) && (!o.roleActorsToAdd.length || RoleActors.is(o.roleActorsToAdd[0])) && Array.isArray(o.roleActorsToRevoke) && (!o.roleActorsToRevoke.length || RoleActors.is(o.roleActorsToRevoke[0])));
  },
  isAmino(o: any): o is MsgUpdateActorRolesAmino {
    return o && (o.$typeUrl === MsgUpdateActorRoles.typeUrl || typeof o.sender === "string" && typeof o.denom === "string" && Array.isArray(o.role_actors_to_add) && (!o.role_actors_to_add.length || RoleActors.isAmino(o.role_actors_to_add[0])) && Array.isArray(o.role_actors_to_revoke) && (!o.role_actors_to_revoke.length || RoleActors.isAmino(o.role_actors_to_revoke[0])));
  },
  encode(message: MsgUpdateActorRoles, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    for (const v of message.roleActorsToAdd) {
      RoleActors.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.roleActorsToRevoke) {
      RoleActors.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateActorRoles {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActorRoles();
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
          message.roleActorsToAdd.push(RoleActors.decode(reader, reader.uint32()));
          break;
        case 5:
          message.roleActorsToRevoke.push(RoleActors.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateActorRoles>): MsgUpdateActorRoles {
    const message = createBaseMsgUpdateActorRoles();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.roleActorsToAdd = object.roleActorsToAdd?.map(e => RoleActors.fromPartial(e)) || [];
    message.roleActorsToRevoke = object.roleActorsToRevoke?.map(e => RoleActors.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateActorRolesAmino): MsgUpdateActorRoles {
    const message = createBaseMsgUpdateActorRoles();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    message.roleActorsToAdd = object.role_actors_to_add?.map(e => RoleActors.fromAmino(e)) || [];
    message.roleActorsToRevoke = object.role_actors_to_revoke?.map(e => RoleActors.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateActorRoles): MsgUpdateActorRolesAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.denom = message.denom === "" ? undefined : message.denom;
    if (message.roleActorsToAdd) {
      obj.role_actors_to_add = message.roleActorsToAdd.map(e => e ? RoleActors.toAmino(e) : undefined);
    } else {
      obj.role_actors_to_add = message.roleActorsToAdd;
    }
    if (message.roleActorsToRevoke) {
      obj.role_actors_to_revoke = message.roleActorsToRevoke.map(e => e ? RoleActors.toAmino(e) : undefined);
    } else {
      obj.role_actors_to_revoke = message.roleActorsToRevoke;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActorRolesAminoMsg): MsgUpdateActorRoles {
    return MsgUpdateActorRoles.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateActorRoles): MsgUpdateActorRolesAminoMsg {
    return {
      type: "permissions/MsgUpdateActorRoles",
      value: MsgUpdateActorRoles.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateActorRolesProtoMsg): MsgUpdateActorRoles {
    return MsgUpdateActorRoles.decode(message.value);
  },
  toProto(message: MsgUpdateActorRoles): Uint8Array {
    return MsgUpdateActorRoles.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActorRoles): MsgUpdateActorRolesProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgUpdateActorRoles",
      value: MsgUpdateActorRoles.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateActorRoles.typeUrl)) {
      return;
    }
    RoleActors.registerTypeUrl();
  }
};
function createBaseMsgUpdateActorRolesResponse(): MsgUpdateActorRolesResponse {
  return {};
}
/**
 * @name MsgUpdateActorRolesResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgUpdateActorRolesResponse
 */
export const MsgUpdateActorRolesResponse = {
  typeUrl: "/injective.permissions.v1beta1.MsgUpdateActorRolesResponse",
  is(o: any): o is MsgUpdateActorRolesResponse {
    return o && o.$typeUrl === MsgUpdateActorRolesResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateActorRolesResponseAmino {
    return o && o.$typeUrl === MsgUpdateActorRolesResponse.typeUrl;
  },
  encode(_: MsgUpdateActorRolesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateActorRolesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateActorRolesResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateActorRolesResponse>): MsgUpdateActorRolesResponse {
    const message = createBaseMsgUpdateActorRolesResponse();
    return message;
  },
  fromAmino(_: MsgUpdateActorRolesResponseAmino): MsgUpdateActorRolesResponse {
    const message = createBaseMsgUpdateActorRolesResponse();
    return message;
  },
  toAmino(_: MsgUpdateActorRolesResponse): MsgUpdateActorRolesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateActorRolesResponseAminoMsg): MsgUpdateActorRolesResponse {
    return MsgUpdateActorRolesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateActorRolesResponseProtoMsg): MsgUpdateActorRolesResponse {
    return MsgUpdateActorRolesResponse.decode(message.value);
  },
  toProto(message: MsgUpdateActorRolesResponse): Uint8Array {
    return MsgUpdateActorRolesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateActorRolesResponse): MsgUpdateActorRolesResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.MsgUpdateActorRolesResponse",
      value: MsgUpdateActorRolesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimVoucher(): MsgClaimVoucher {
  return {
    sender: "",
    denom: ""
  };
}
/**
 * @name MsgClaimVoucher
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgClaimVoucher
 */
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
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimVoucherResponse(): MsgClaimVoucherResponse {
  return {};
}
/**
 * @name MsgClaimVoucherResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.MsgClaimVoucherResponse
 */
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
  },
  registerTypeUrl() {}
};