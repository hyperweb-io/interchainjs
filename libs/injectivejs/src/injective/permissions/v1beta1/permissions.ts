import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** each Action enum value should be a power of two */
export enum Action {
  /** UNSPECIFIED - 0 is reserved for ACTION_UNSPECIFIED */
  UNSPECIFIED = 0,
  /** MINT - 1 is reserved for MINT */
  MINT = 1,
  /** RECEIVE - 2 is reserved for RECEIVE */
  RECEIVE = 2,
  /** BURN - 4 is reserved for BURN */
  BURN = 4,
  /** SEND - 8 is reserved for SEND */
  SEND = 8,
  /** SUPER_BURN - 16 is reserved for SUPER_BURN */
  SUPER_BURN = 16,
  /** MODIFY_POLICY_MANAGERS - 2^27 is reserved for MODIFY_POLICY_MANAGERS */
  MODIFY_POLICY_MANAGERS = 134217728,
  /** MODIFY_CONTRACT_HOOK - 2^28 is reserved for MODIFY_CONTRACT_HOOK */
  MODIFY_CONTRACT_HOOK = 268435456,
  /** MODIFY_ROLE_PERMISSIONS - 2^29 is reserved for MODIFY_ROLE_PERMISSIONS */
  MODIFY_ROLE_PERMISSIONS = 536870912,
  /** MODIFY_ROLE_MANAGERS - 2^30 is reserved for MODIFY_ROLE_MANAGERS */
  MODIFY_ROLE_MANAGERS = 1073741824,
  UNRECOGNIZED = -1,
}
export const ActionAmino = Action;
export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return Action.UNSPECIFIED;
    case 1:
    case "MINT":
      return Action.MINT;
    case 2:
    case "RECEIVE":
      return Action.RECEIVE;
    case 4:
    case "BURN":
      return Action.BURN;
    case 8:
    case "SEND":
      return Action.SEND;
    case 16:
    case "SUPER_BURN":
      return Action.SUPER_BURN;
    case 134217728:
    case "MODIFY_POLICY_MANAGERS":
      return Action.MODIFY_POLICY_MANAGERS;
    case 268435456:
    case "MODIFY_CONTRACT_HOOK":
      return Action.MODIFY_CONTRACT_HOOK;
    case 536870912:
    case "MODIFY_ROLE_PERMISSIONS":
      return Action.MODIFY_ROLE_PERMISSIONS;
    case 1073741824:
    case "MODIFY_ROLE_MANAGERS":
      return Action.MODIFY_ROLE_MANAGERS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}
export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.UNSPECIFIED:
      return "UNSPECIFIED";
    case Action.MINT:
      return "MINT";
    case Action.RECEIVE:
      return "RECEIVE";
    case Action.BURN:
      return "BURN";
    case Action.SEND:
      return "SEND";
    case Action.SUPER_BURN:
      return "SUPER_BURN";
    case Action.MODIFY_POLICY_MANAGERS:
      return "MODIFY_POLICY_MANAGERS";
    case Action.MODIFY_CONTRACT_HOOK:
      return "MODIFY_CONTRACT_HOOK";
    case Action.MODIFY_ROLE_PERMISSIONS:
      return "MODIFY_ROLE_PERMISSIONS";
    case Action.MODIFY_ROLE_MANAGERS:
      return "MODIFY_ROLE_MANAGERS";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Namespace defines a permissions namespace
 * @name Namespace
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.Namespace
 */
export interface Namespace {
  /**
   * tokenfactory denom to which this namespace applies to
   */
  denom: string;
  /**
   * address of smart contract to apply code-based restrictions
   */
  contractHook: string;
  /**
   * permissions for each role
   */
  rolePermissions: Role[];
  /**
   * roles for each actor
   */
  actorRoles: ActorRoles[];
  /**
   * managers for each role
   */
  roleManagers: RoleManager[];
  /**
   * status for each policy
   */
  policyStatuses: PolicyStatus[];
  /**
   * capabilities for each manager for each policy
   */
  policyManagerCapabilities: PolicyManagerCapability[];
}
export interface NamespaceProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.Namespace";
  value: Uint8Array;
}
/**
 * Namespace defines a permissions namespace
 * @name NamespaceAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.Namespace
 */
export interface NamespaceAmino {
  /**
   * tokenfactory denom to which this namespace applies to
   */
  denom: string;
  /**
   * address of smart contract to apply code-based restrictions
   */
  contract_hook: string;
  /**
   * permissions for each role
   */
  role_permissions: RoleAmino[];
  /**
   * roles for each actor
   */
  actor_roles: ActorRolesAmino[];
  /**
   * managers for each role
   */
  role_managers: RoleManagerAmino[];
  /**
   * status for each policy
   */
  policy_statuses: PolicyStatusAmino[];
  /**
   * capabilities for each manager for each policy
   */
  policy_manager_capabilities: PolicyManagerCapabilityAmino[];
}
export interface NamespaceAminoMsg {
  type: "/injective.permissions.v1beta1.Namespace";
  value: NamespaceAmino;
}
/**
 * AddressRoles defines roles for an actor
 * @name ActorRoles
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.ActorRoles
 */
export interface ActorRoles {
  actor: string;
  roles: string[];
}
export interface ActorRolesProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.ActorRoles";
  value: Uint8Array;
}
/**
 * AddressRoles defines roles for an actor
 * @name ActorRolesAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.ActorRoles
 */
export interface ActorRolesAmino {
  actor: string;
  roles: string[];
}
export interface ActorRolesAminoMsg {
  type: "/injective.permissions.v1beta1.ActorRoles";
  value: ActorRolesAmino;
}
/**
 * RoleActors defines actors for a role
 * @name RoleActors
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.RoleActors
 */
export interface RoleActors {
  role: string;
  actors: string[];
}
export interface RoleActorsProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.RoleActors";
  value: Uint8Array;
}
/**
 * RoleActors defines actors for a role
 * @name RoleActorsAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.RoleActors
 */
export interface RoleActorsAmino {
  role: string;
  actors: string[];
}
export interface RoleActorsAminoMsg {
  type: "/injective.permissions.v1beta1.RoleActors";
  value: RoleActorsAmino;
}
/**
 * RoleManager defines roles for a manager address
 * @name RoleManager
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.RoleManager
 */
export interface RoleManager {
  manager: string;
  roles: string[];
}
export interface RoleManagerProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.RoleManager";
  value: Uint8Array;
}
/**
 * RoleManager defines roles for a manager address
 * @name RoleManagerAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.RoleManager
 */
export interface RoleManagerAmino {
  manager: string;
  roles: string[];
}
export interface RoleManagerAminoMsg {
  type: "/injective.permissions.v1beta1.RoleManager";
  value: RoleManagerAmino;
}
/**
 * PolicyStatus defines the status of a policy
 * @name PolicyStatus
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.PolicyStatus
 */
export interface PolicyStatus {
  action: Action;
  isDisabled: boolean;
  isSealed: boolean;
}
export interface PolicyStatusProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.PolicyStatus";
  value: Uint8Array;
}
/**
 * PolicyStatus defines the status of a policy
 * @name PolicyStatusAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.PolicyStatus
 */
export interface PolicyStatusAmino {
  action: Action;
  is_disabled: boolean;
  is_sealed: boolean;
}
export interface PolicyStatusAminoMsg {
  type: "/injective.permissions.v1beta1.PolicyStatus";
  value: PolicyStatusAmino;
}
/**
 * Role is only used for storage
 * @name Role
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.Role
 */
export interface Role {
  name: string;
  roleId: number;
  permissions: number;
}
export interface RoleProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.Role";
  value: Uint8Array;
}
/**
 * Role is only used for storage
 * @name RoleAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.Role
 */
export interface RoleAmino {
  name: string;
  role_id: number;
  permissions: number;
}
export interface RoleAminoMsg {
  type: "/injective.permissions.v1beta1.Role";
  value: RoleAmino;
}
/**
 * PolicyManagerCapability defines the capabilities of a manager for a policy
 * @name PolicyManagerCapability
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.PolicyManagerCapability
 */
export interface PolicyManagerCapability {
  manager: string;
  action: Action;
  canDisable: boolean;
  canSeal: boolean;
}
export interface PolicyManagerCapabilityProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.PolicyManagerCapability";
  value: Uint8Array;
}
/**
 * PolicyManagerCapability defines the capabilities of a manager for a policy
 * @name PolicyManagerCapabilityAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.PolicyManagerCapability
 */
export interface PolicyManagerCapabilityAmino {
  manager: string;
  action: Action;
  can_disable: boolean;
  can_seal: boolean;
}
export interface PolicyManagerCapabilityAminoMsg {
  type: "/injective.permissions.v1beta1.PolicyManagerCapability";
  value: PolicyManagerCapabilityAmino;
}
/**
 * used in storage
 * @name RoleIDs
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.RoleIDs
 */
export interface RoleIDs {
  roleIds: number[];
}
export interface RoleIDsProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.RoleIDs";
  value: Uint8Array;
}
/**
 * used in storage
 * @name RoleIDsAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.RoleIDs
 */
export interface RoleIDsAmino {
  role_ids: number[];
}
export interface RoleIDsAminoMsg {
  type: "/injective.permissions.v1beta1.RoleIDs";
  value: RoleIDsAmino;
}
/**
 * AddressVoucher is used to represent a voucher for a specific address
 * @name AddressVoucher
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.AddressVoucher
 */
export interface AddressVoucher {
  address: string;
  voucher: Coin;
}
export interface AddressVoucherProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.AddressVoucher";
  value: Uint8Array;
}
/**
 * AddressVoucher is used to represent a voucher for a specific address
 * @name AddressVoucherAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.AddressVoucher
 */
export interface AddressVoucherAmino {
  address: string;
  voucher: CoinAmino;
}
export interface AddressVoucherAminoMsg {
  type: "/injective.permissions.v1beta1.AddressVoucher";
  value: AddressVoucherAmino;
}
function createBaseNamespace(): Namespace {
  return {
    denom: "",
    contractHook: "",
    rolePermissions: [],
    actorRoles: [],
    roleManagers: [],
    policyStatuses: [],
    policyManagerCapabilities: []
  };
}
/**
 * Namespace defines a permissions namespace
 * @name Namespace
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.Namespace
 */
export const Namespace = {
  typeUrl: "/injective.permissions.v1beta1.Namespace",
  is(o: any): o is Namespace {
    return o && (o.$typeUrl === Namespace.typeUrl || typeof o.denom === "string" && typeof o.contractHook === "string" && Array.isArray(o.rolePermissions) && (!o.rolePermissions.length || Role.is(o.rolePermissions[0])) && Array.isArray(o.actorRoles) && (!o.actorRoles.length || ActorRoles.is(o.actorRoles[0])) && Array.isArray(o.roleManagers) && (!o.roleManagers.length || RoleManager.is(o.roleManagers[0])) && Array.isArray(o.policyStatuses) && (!o.policyStatuses.length || PolicyStatus.is(o.policyStatuses[0])) && Array.isArray(o.policyManagerCapabilities) && (!o.policyManagerCapabilities.length || PolicyManagerCapability.is(o.policyManagerCapabilities[0])));
  },
  isAmino(o: any): o is NamespaceAmino {
    return o && (o.$typeUrl === Namespace.typeUrl || typeof o.denom === "string" && typeof o.contract_hook === "string" && Array.isArray(o.role_permissions) && (!o.role_permissions.length || Role.isAmino(o.role_permissions[0])) && Array.isArray(o.actor_roles) && (!o.actor_roles.length || ActorRoles.isAmino(o.actor_roles[0])) && Array.isArray(o.role_managers) && (!o.role_managers.length || RoleManager.isAmino(o.role_managers[0])) && Array.isArray(o.policy_statuses) && (!o.policy_statuses.length || PolicyStatus.isAmino(o.policy_statuses[0])) && Array.isArray(o.policy_manager_capabilities) && (!o.policy_manager_capabilities.length || PolicyManagerCapability.isAmino(o.policy_manager_capabilities[0])));
  },
  encode(message: Namespace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.contractHook !== "") {
      writer.uint32(18).string(message.contractHook);
    }
    for (const v of message.rolePermissions) {
      Role.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.actorRoles) {
      ActorRoles.encode(v!, writer.uint32(34).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): Namespace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.contractHook = reader.string();
          break;
        case 3:
          message.rolePermissions.push(Role.decode(reader, reader.uint32()));
          break;
        case 4:
          message.actorRoles.push(ActorRoles.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<Namespace>): Namespace {
    const message = createBaseNamespace();
    message.denom = object.denom ?? "";
    message.contractHook = object.contractHook ?? "";
    message.rolePermissions = object.rolePermissions?.map(e => Role.fromPartial(e)) || [];
    message.actorRoles = object.actorRoles?.map(e => ActorRoles.fromPartial(e)) || [];
    message.roleManagers = object.roleManagers?.map(e => RoleManager.fromPartial(e)) || [];
    message.policyStatuses = object.policyStatuses?.map(e => PolicyStatus.fromPartial(e)) || [];
    message.policyManagerCapabilities = object.policyManagerCapabilities?.map(e => PolicyManagerCapability.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: NamespaceAmino): Namespace {
    const message = createBaseNamespace();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.contract_hook !== undefined && object.contract_hook !== null) {
      message.contractHook = object.contract_hook;
    }
    message.rolePermissions = object.role_permissions?.map(e => Role.fromAmino(e)) || [];
    message.actorRoles = object.actor_roles?.map(e => ActorRoles.fromAmino(e)) || [];
    message.roleManagers = object.role_managers?.map(e => RoleManager.fromAmino(e)) || [];
    message.policyStatuses = object.policy_statuses?.map(e => PolicyStatus.fromAmino(e)) || [];
    message.policyManagerCapabilities = object.policy_manager_capabilities?.map(e => PolicyManagerCapability.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Namespace): NamespaceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.contract_hook = message.contractHook === "" ? undefined : message.contractHook;
    if (message.rolePermissions) {
      obj.role_permissions = message.rolePermissions.map(e => e ? Role.toAmino(e) : undefined);
    } else {
      obj.role_permissions = message.rolePermissions;
    }
    if (message.actorRoles) {
      obj.actor_roles = message.actorRoles.map(e => e ? ActorRoles.toAmino(e) : undefined);
    } else {
      obj.actor_roles = message.actorRoles;
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
  fromAminoMsg(object: NamespaceAminoMsg): Namespace {
    return Namespace.fromAmino(object.value);
  },
  fromProtoMsg(message: NamespaceProtoMsg): Namespace {
    return Namespace.decode(message.value);
  },
  toProto(message: Namespace): Uint8Array {
    return Namespace.encode(message).finish();
  },
  toProtoMsg(message: Namespace): NamespaceProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.Namespace",
      value: Namespace.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Namespace.typeUrl)) {
      return;
    }
    Role.registerTypeUrl();
    ActorRoles.registerTypeUrl();
    RoleManager.registerTypeUrl();
    PolicyStatus.registerTypeUrl();
    PolicyManagerCapability.registerTypeUrl();
  }
};
function createBaseActorRoles(): ActorRoles {
  return {
    actor: "",
    roles: []
  };
}
/**
 * AddressRoles defines roles for an actor
 * @name ActorRoles
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.ActorRoles
 */
export const ActorRoles = {
  typeUrl: "/injective.permissions.v1beta1.ActorRoles",
  is(o: any): o is ActorRoles {
    return o && (o.$typeUrl === ActorRoles.typeUrl || typeof o.actor === "string" && Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  isAmino(o: any): o is ActorRolesAmino {
    return o && (o.$typeUrl === ActorRoles.typeUrl || typeof o.actor === "string" && Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  encode(message: ActorRoles, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.actor !== "") {
      writer.uint32(10).string(message.actor);
    }
    for (const v of message.roles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActorRoles {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActorRoles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actor = reader.string();
          break;
        case 2:
          message.roles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ActorRoles>): ActorRoles {
    const message = createBaseActorRoles();
    message.actor = object.actor ?? "";
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ActorRolesAmino): ActorRoles {
    const message = createBaseActorRoles();
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = object.actor;
    }
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  toAmino(message: ActorRoles): ActorRolesAmino {
    const obj: any = {};
    obj.actor = message.actor === "" ? undefined : message.actor;
    if (message.roles) {
      obj.roles = message.roles.map(e => e);
    } else {
      obj.roles = message.roles;
    }
    return obj;
  },
  fromAminoMsg(object: ActorRolesAminoMsg): ActorRoles {
    return ActorRoles.fromAmino(object.value);
  },
  fromProtoMsg(message: ActorRolesProtoMsg): ActorRoles {
    return ActorRoles.decode(message.value);
  },
  toProto(message: ActorRoles): Uint8Array {
    return ActorRoles.encode(message).finish();
  },
  toProtoMsg(message: ActorRoles): ActorRolesProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.ActorRoles",
      value: ActorRoles.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRoleActors(): RoleActors {
  return {
    role: "",
    actors: []
  };
}
/**
 * RoleActors defines actors for a role
 * @name RoleActors
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.RoleActors
 */
export const RoleActors = {
  typeUrl: "/injective.permissions.v1beta1.RoleActors",
  is(o: any): o is RoleActors {
    return o && (o.$typeUrl === RoleActors.typeUrl || typeof o.role === "string" && Array.isArray(o.actors) && (!o.actors.length || typeof o.actors[0] === "string"));
  },
  isAmino(o: any): o is RoleActorsAmino {
    return o && (o.$typeUrl === RoleActors.typeUrl || typeof o.role === "string" && Array.isArray(o.actors) && (!o.actors.length || typeof o.actors[0] === "string"));
  },
  encode(message: RoleActors, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    for (const v of message.actors) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleActors {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleActors();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.role = reader.string();
          break;
        case 2:
          message.actors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoleActors>): RoleActors {
    const message = createBaseRoleActors();
    message.role = object.role ?? "";
    message.actors = object.actors?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RoleActorsAmino): RoleActors {
    const message = createBaseRoleActors();
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    message.actors = object.actors?.map(e => e) || [];
    return message;
  },
  toAmino(message: RoleActors): RoleActorsAmino {
    const obj: any = {};
    obj.role = message.role === "" ? undefined : message.role;
    if (message.actors) {
      obj.actors = message.actors.map(e => e);
    } else {
      obj.actors = message.actors;
    }
    return obj;
  },
  fromAminoMsg(object: RoleActorsAminoMsg): RoleActors {
    return RoleActors.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleActorsProtoMsg): RoleActors {
    return RoleActors.decode(message.value);
  },
  toProto(message: RoleActors): Uint8Array {
    return RoleActors.encode(message).finish();
  },
  toProtoMsg(message: RoleActors): RoleActorsProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.RoleActors",
      value: RoleActors.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRoleManager(): RoleManager {
  return {
    manager: "",
    roles: []
  };
}
/**
 * RoleManager defines roles for a manager address
 * @name RoleManager
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.RoleManager
 */
export const RoleManager = {
  typeUrl: "/injective.permissions.v1beta1.RoleManager",
  is(o: any): o is RoleManager {
    return o && (o.$typeUrl === RoleManager.typeUrl || typeof o.manager === "string" && Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  isAmino(o: any): o is RoleManagerAmino {
    return o && (o.$typeUrl === RoleManager.typeUrl || typeof o.manager === "string" && Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  encode(message: RoleManager, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.manager !== "") {
      writer.uint32(10).string(message.manager);
    }
    for (const v of message.roles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleManager {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleManager();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manager = reader.string();
          break;
        case 2:
          message.roles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoleManager>): RoleManager {
    const message = createBaseRoleManager();
    message.manager = object.manager ?? "";
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RoleManagerAmino): RoleManager {
    const message = createBaseRoleManager();
    if (object.manager !== undefined && object.manager !== null) {
      message.manager = object.manager;
    }
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  toAmino(message: RoleManager): RoleManagerAmino {
    const obj: any = {};
    obj.manager = message.manager === "" ? undefined : message.manager;
    if (message.roles) {
      obj.roles = message.roles.map(e => e);
    } else {
      obj.roles = message.roles;
    }
    return obj;
  },
  fromAminoMsg(object: RoleManagerAminoMsg): RoleManager {
    return RoleManager.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleManagerProtoMsg): RoleManager {
    return RoleManager.decode(message.value);
  },
  toProto(message: RoleManager): Uint8Array {
    return RoleManager.encode(message).finish();
  },
  toProtoMsg(message: RoleManager): RoleManagerProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.RoleManager",
      value: RoleManager.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePolicyStatus(): PolicyStatus {
  return {
    action: 0,
    isDisabled: false,
    isSealed: false
  };
}
/**
 * PolicyStatus defines the status of a policy
 * @name PolicyStatus
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.PolicyStatus
 */
export const PolicyStatus = {
  typeUrl: "/injective.permissions.v1beta1.PolicyStatus",
  is(o: any): o is PolicyStatus {
    return o && (o.$typeUrl === PolicyStatus.typeUrl || isSet(o.action) && typeof o.isDisabled === "boolean" && typeof o.isSealed === "boolean");
  },
  isAmino(o: any): o is PolicyStatusAmino {
    return o && (o.$typeUrl === PolicyStatus.typeUrl || isSet(o.action) && typeof o.is_disabled === "boolean" && typeof o.is_sealed === "boolean");
  },
  encode(message: PolicyStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.isDisabled === true) {
      writer.uint32(16).bool(message.isDisabled);
    }
    if (message.isSealed === true) {
      writer.uint32(24).bool(message.isSealed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PolicyStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.int32() as any;
          break;
        case 2:
          message.isDisabled = reader.bool();
          break;
        case 3:
          message.isSealed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicyStatus>): PolicyStatus {
    const message = createBasePolicyStatus();
    message.action = object.action ?? 0;
    message.isDisabled = object.isDisabled ?? false;
    message.isSealed = object.isSealed ?? false;
    return message;
  },
  fromAmino(object: PolicyStatusAmino): PolicyStatus {
    const message = createBasePolicyStatus();
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.is_disabled !== undefined && object.is_disabled !== null) {
      message.isDisabled = object.is_disabled;
    }
    if (object.is_sealed !== undefined && object.is_sealed !== null) {
      message.isSealed = object.is_sealed;
    }
    return message;
  },
  toAmino(message: PolicyStatus): PolicyStatusAmino {
    const obj: any = {};
    obj.action = message.action === 0 ? undefined : message.action;
    obj.is_disabled = message.isDisabled === false ? undefined : message.isDisabled;
    obj.is_sealed = message.isSealed === false ? undefined : message.isSealed;
    return obj;
  },
  fromAminoMsg(object: PolicyStatusAminoMsg): PolicyStatus {
    return PolicyStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyStatusProtoMsg): PolicyStatus {
    return PolicyStatus.decode(message.value);
  },
  toProto(message: PolicyStatus): Uint8Array {
    return PolicyStatus.encode(message).finish();
  },
  toProtoMsg(message: PolicyStatus): PolicyStatusProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.PolicyStatus",
      value: PolicyStatus.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRole(): Role {
  return {
    name: "",
    roleId: 0,
    permissions: 0
  };
}
/**
 * Role is only used for storage
 * @name Role
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.Role
 */
export const Role = {
  typeUrl: "/injective.permissions.v1beta1.Role",
  is(o: any): o is Role {
    return o && (o.$typeUrl === Role.typeUrl || typeof o.name === "string" && typeof o.roleId === "number" && typeof o.permissions === "number");
  },
  isAmino(o: any): o is RoleAmino {
    return o && (o.$typeUrl === Role.typeUrl || typeof o.name === "string" && typeof o.role_id === "number" && typeof o.permissions === "number");
  },
  encode(message: Role, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.roleId !== 0) {
      writer.uint32(16).uint32(message.roleId);
    }
    if (message.permissions !== 0) {
      writer.uint32(24).uint32(message.permissions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Role {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.roleId = reader.uint32();
          break;
        case 3:
          message.permissions = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Role>): Role {
    const message = createBaseRole();
    message.name = object.name ?? "";
    message.roleId = object.roleId ?? 0;
    message.permissions = object.permissions ?? 0;
    return message;
  },
  fromAmino(object: RoleAmino): Role {
    const message = createBaseRole();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.role_id !== undefined && object.role_id !== null) {
      message.roleId = object.role_id;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = object.permissions;
    }
    return message;
  },
  toAmino(message: Role): RoleAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.role_id = message.roleId === 0 ? undefined : message.roleId;
    obj.permissions = message.permissions === 0 ? undefined : message.permissions;
    return obj;
  },
  fromAminoMsg(object: RoleAminoMsg): Role {
    return Role.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleProtoMsg): Role {
    return Role.decode(message.value);
  },
  toProto(message: Role): Uint8Array {
    return Role.encode(message).finish();
  },
  toProtoMsg(message: Role): RoleProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.Role",
      value: Role.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePolicyManagerCapability(): PolicyManagerCapability {
  return {
    manager: "",
    action: 0,
    canDisable: false,
    canSeal: false
  };
}
/**
 * PolicyManagerCapability defines the capabilities of a manager for a policy
 * @name PolicyManagerCapability
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.PolicyManagerCapability
 */
export const PolicyManagerCapability = {
  typeUrl: "/injective.permissions.v1beta1.PolicyManagerCapability",
  is(o: any): o is PolicyManagerCapability {
    return o && (o.$typeUrl === PolicyManagerCapability.typeUrl || typeof o.manager === "string" && isSet(o.action) && typeof o.canDisable === "boolean" && typeof o.canSeal === "boolean");
  },
  isAmino(o: any): o is PolicyManagerCapabilityAmino {
    return o && (o.$typeUrl === PolicyManagerCapability.typeUrl || typeof o.manager === "string" && isSet(o.action) && typeof o.can_disable === "boolean" && typeof o.can_seal === "boolean");
  },
  encode(message: PolicyManagerCapability, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.manager !== "") {
      writer.uint32(10).string(message.manager);
    }
    if (message.action !== 0) {
      writer.uint32(16).int32(message.action);
    }
    if (message.canDisable === true) {
      writer.uint32(24).bool(message.canDisable);
    }
    if (message.canSeal === true) {
      writer.uint32(32).bool(message.canSeal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PolicyManagerCapability {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicyManagerCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.manager = reader.string();
          break;
        case 2:
          message.action = reader.int32() as any;
          break;
        case 3:
          message.canDisable = reader.bool();
          break;
        case 4:
          message.canSeal = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PolicyManagerCapability>): PolicyManagerCapability {
    const message = createBasePolicyManagerCapability();
    message.manager = object.manager ?? "";
    message.action = object.action ?? 0;
    message.canDisable = object.canDisable ?? false;
    message.canSeal = object.canSeal ?? false;
    return message;
  },
  fromAmino(object: PolicyManagerCapabilityAmino): PolicyManagerCapability {
    const message = createBasePolicyManagerCapability();
    if (object.manager !== undefined && object.manager !== null) {
      message.manager = object.manager;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.can_disable !== undefined && object.can_disable !== null) {
      message.canDisable = object.can_disable;
    }
    if (object.can_seal !== undefined && object.can_seal !== null) {
      message.canSeal = object.can_seal;
    }
    return message;
  },
  toAmino(message: PolicyManagerCapability): PolicyManagerCapabilityAmino {
    const obj: any = {};
    obj.manager = message.manager === "" ? undefined : message.manager;
    obj.action = message.action === 0 ? undefined : message.action;
    obj.can_disable = message.canDisable === false ? undefined : message.canDisable;
    obj.can_seal = message.canSeal === false ? undefined : message.canSeal;
    return obj;
  },
  fromAminoMsg(object: PolicyManagerCapabilityAminoMsg): PolicyManagerCapability {
    return PolicyManagerCapability.fromAmino(object.value);
  },
  fromProtoMsg(message: PolicyManagerCapabilityProtoMsg): PolicyManagerCapability {
    return PolicyManagerCapability.decode(message.value);
  },
  toProto(message: PolicyManagerCapability): Uint8Array {
    return PolicyManagerCapability.encode(message).finish();
  },
  toProtoMsg(message: PolicyManagerCapability): PolicyManagerCapabilityProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.PolicyManagerCapability",
      value: PolicyManagerCapability.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRoleIDs(): RoleIDs {
  return {
    roleIds: []
  };
}
/**
 * used in storage
 * @name RoleIDs
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.RoleIDs
 */
export const RoleIDs = {
  typeUrl: "/injective.permissions.v1beta1.RoleIDs",
  is(o: any): o is RoleIDs {
    return o && (o.$typeUrl === RoleIDs.typeUrl || Array.isArray(o.roleIds) && (!o.roleIds.length || typeof o.roleIds[0] === "number"));
  },
  isAmino(o: any): o is RoleIDsAmino {
    return o && (o.$typeUrl === RoleIDs.typeUrl || Array.isArray(o.role_ids) && (!o.role_ids.length || typeof o.role_ids[0] === "number"));
  },
  encode(message: RoleIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.roleIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoleIDs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roleIds.push(reader.uint32());
            }
          } else {
            message.roleIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoleIDs>): RoleIDs {
    const message = createBaseRoleIDs();
    message.roleIds = object.roleIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RoleIDsAmino): RoleIDs {
    const message = createBaseRoleIDs();
    message.roleIds = object.role_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: RoleIDs): RoleIDsAmino {
    const obj: any = {};
    if (message.roleIds) {
      obj.role_ids = message.roleIds.map(e => e);
    } else {
      obj.role_ids = message.roleIds;
    }
    return obj;
  },
  fromAminoMsg(object: RoleIDsAminoMsg): RoleIDs {
    return RoleIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: RoleIDsProtoMsg): RoleIDs {
    return RoleIDs.decode(message.value);
  },
  toProto(message: RoleIDs): Uint8Array {
    return RoleIDs.encode(message).finish();
  },
  toProtoMsg(message: RoleIDs): RoleIDsProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.RoleIDs",
      value: RoleIDs.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAddressVoucher(): AddressVoucher {
  return {
    address: "",
    voucher: Coin.fromPartial({})
  };
}
/**
 * AddressVoucher is used to represent a voucher for a specific address
 * @name AddressVoucher
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.AddressVoucher
 */
export const AddressVoucher = {
  typeUrl: "/injective.permissions.v1beta1.AddressVoucher",
  is(o: any): o is AddressVoucher {
    return o && (o.$typeUrl === AddressVoucher.typeUrl || typeof o.address === "string" && Coin.is(o.voucher));
  },
  isAmino(o: any): o is AddressVoucherAmino {
    return o && (o.$typeUrl === AddressVoucher.typeUrl || typeof o.address === "string" && Coin.isAmino(o.voucher));
  },
  encode(message: AddressVoucher, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.voucher !== undefined) {
      Coin.encode(message.voucher, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressVoucher {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressVoucher();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.voucher = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AddressVoucher>): AddressVoucher {
    const message = createBaseAddressVoucher();
    message.address = object.address ?? "";
    message.voucher = object.voucher !== undefined && object.voucher !== null ? Coin.fromPartial(object.voucher) : undefined;
    return message;
  },
  fromAmino(object: AddressVoucherAmino): AddressVoucher {
    const message = createBaseAddressVoucher();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.voucher !== undefined && object.voucher !== null) {
      message.voucher = Coin.fromAmino(object.voucher);
    }
    return message;
  },
  toAmino(message: AddressVoucher): AddressVoucherAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.voucher = message.voucher ? Coin.toAmino(message.voucher) : undefined;
    return obj;
  },
  fromAminoMsg(object: AddressVoucherAminoMsg): AddressVoucher {
    return AddressVoucher.fromAmino(object.value);
  },
  fromProtoMsg(message: AddressVoucherProtoMsg): AddressVoucher {
    return AddressVoucher.decode(message.value);
  },
  toProto(message: AddressVoucher): Uint8Array {
    return AddressVoucher.encode(message).finish();
  },
  toProtoMsg(message: AddressVoucher): AddressVoucherProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.AddressVoucher",
      value: AddressVoucher.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AddressVoucher.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};