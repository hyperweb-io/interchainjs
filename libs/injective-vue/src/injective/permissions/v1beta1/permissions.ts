import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** each Action enum value should be a power of two */
export enum Action {
  UNSPECIFIED = 0,
  MINT = 1,
  RECEIVE = 2,
  BURN = 4,
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
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Namespace defines a permissions namespace */
export interface Namespace {
  /** tokenfactory denom to which this namespace applies to */
  denom: string;
  /** address of smart contract to apply code-based restrictions */
  wasmHook: string;
  mintsPaused: boolean;
  sendsPaused: boolean;
  burnsPaused: boolean;
  /** permissions for each role */
  rolePermissions: Role[];
  addressRoles: AddressRoles[];
}
export interface NamespaceProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.Namespace";
  value: Uint8Array;
}
/** Namespace defines a permissions namespace */
export interface NamespaceAmino {
  /** tokenfactory denom to which this namespace applies to */
  denom: string;
  /** address of smart contract to apply code-based restrictions */
  wasm_hook: string;
  mints_paused: boolean;
  sends_paused: boolean;
  burns_paused: boolean;
  /** permissions for each role */
  role_permissions: RoleAmino[];
  address_roles: AddressRolesAmino[];
}
export interface NamespaceAminoMsg {
  type: "/injective.permissions.v1beta1.Namespace";
  value: NamespaceAmino;
}
export interface AddressRoles {
  address: string;
  roles: string[];
}
export interface AddressRolesProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.AddressRoles";
  value: Uint8Array;
}
export interface AddressRolesAmino {
  address: string;
  roles: string[];
}
export interface AddressRolesAminoMsg {
  type: "/injective.permissions.v1beta1.AddressRoles";
  value: AddressRolesAmino;
}
/** Role is only used for storage */
export interface Role {
  role: string;
  permissions: number;
}
export interface RoleProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.Role";
  value: Uint8Array;
}
/** Role is only used for storage */
export interface RoleAmino {
  role: string;
  permissions: number;
}
export interface RoleAminoMsg {
  type: "/injective.permissions.v1beta1.Role";
  value: RoleAmino;
}
/** used in storage */
export interface RoleIDs {
  roleIds: number[];
}
export interface RoleIDsProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.RoleIDs";
  value: Uint8Array;
}
/** used in storage */
export interface RoleIDsAmino {
  role_ids: number[];
}
export interface RoleIDsAminoMsg {
  type: "/injective.permissions.v1beta1.RoleIDs";
  value: RoleIDsAmino;
}
export interface Voucher {
  coins: Coin[];
}
export interface VoucherProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.Voucher";
  value: Uint8Array;
}
export interface VoucherAmino {
  coins: CoinAmino[];
}
export interface VoucherAminoMsg {
  type: "/injective.permissions.v1beta1.Voucher";
  value: VoucherAmino;
}
export interface AddressVoucher {
  address: string;
  voucher?: Voucher;
}
export interface AddressVoucherProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.AddressVoucher";
  value: Uint8Array;
}
export interface AddressVoucherAmino {
  address: string;
  voucher?: VoucherAmino;
}
export interface AddressVoucherAminoMsg {
  type: "/injective.permissions.v1beta1.AddressVoucher";
  value: AddressVoucherAmino;
}
function createBaseNamespace(): Namespace {
  return {
    denom: "",
    wasmHook: "",
    mintsPaused: false,
    sendsPaused: false,
    burnsPaused: false,
    rolePermissions: [],
    addressRoles: []
  };
}
export const Namespace = {
  typeUrl: "/injective.permissions.v1beta1.Namespace",
  is(o: any): o is Namespace {
    return o && (o.$typeUrl === Namespace.typeUrl || typeof o.denom === "string" && typeof o.wasmHook === "string" && typeof o.mintsPaused === "boolean" && typeof o.sendsPaused === "boolean" && typeof o.burnsPaused === "boolean" && Array.isArray(o.rolePermissions) && (!o.rolePermissions.length || Role.is(o.rolePermissions[0])) && Array.isArray(o.addressRoles) && (!o.addressRoles.length || AddressRoles.is(o.addressRoles[0])));
  },
  isAmino(o: any): o is NamespaceAmino {
    return o && (o.$typeUrl === Namespace.typeUrl || typeof o.denom === "string" && typeof o.wasm_hook === "string" && typeof o.mints_paused === "boolean" && typeof o.sends_paused === "boolean" && typeof o.burns_paused === "boolean" && Array.isArray(o.role_permissions) && (!o.role_permissions.length || Role.isAmino(o.role_permissions[0])) && Array.isArray(o.address_roles) && (!o.address_roles.length || AddressRoles.isAmino(o.address_roles[0])));
  },
  encode(message: Namespace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.wasmHook !== "") {
      writer.uint32(18).string(message.wasmHook);
    }
    if (message.mintsPaused === true) {
      writer.uint32(24).bool(message.mintsPaused);
    }
    if (message.sendsPaused === true) {
      writer.uint32(32).bool(message.sendsPaused);
    }
    if (message.burnsPaused === true) {
      writer.uint32(40).bool(message.burnsPaused);
    }
    for (const v of message.rolePermissions) {
      Role.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.addressRoles) {
      AddressRoles.encode(v!, writer.uint32(58).fork()).ldelim();
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
          message.wasmHook = reader.string();
          break;
        case 3:
          message.mintsPaused = reader.bool();
          break;
        case 4:
          message.sendsPaused = reader.bool();
          break;
        case 5:
          message.burnsPaused = reader.bool();
          break;
        case 6:
          message.rolePermissions.push(Role.decode(reader, reader.uint32()));
          break;
        case 7:
          message.addressRoles.push(AddressRoles.decode(reader, reader.uint32()));
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
    message.wasmHook = object.wasmHook ?? "";
    message.mintsPaused = object.mintsPaused ?? false;
    message.sendsPaused = object.sendsPaused ?? false;
    message.burnsPaused = object.burnsPaused ?? false;
    message.rolePermissions = object.rolePermissions?.map(e => Role.fromPartial(e)) || [];
    message.addressRoles = object.addressRoles?.map(e => AddressRoles.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: NamespaceAmino): Namespace {
    const message = createBaseNamespace();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.wasm_hook !== undefined && object.wasm_hook !== null) {
      message.wasmHook = object.wasm_hook;
    }
    if (object.mints_paused !== undefined && object.mints_paused !== null) {
      message.mintsPaused = object.mints_paused;
    }
    if (object.sends_paused !== undefined && object.sends_paused !== null) {
      message.sendsPaused = object.sends_paused;
    }
    if (object.burns_paused !== undefined && object.burns_paused !== null) {
      message.burnsPaused = object.burns_paused;
    }
    message.rolePermissions = object.role_permissions?.map(e => Role.fromAmino(e)) || [];
    message.addressRoles = object.address_roles?.map(e => AddressRoles.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Namespace): NamespaceAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.wasm_hook = message.wasmHook === "" ? undefined : message.wasmHook;
    obj.mints_paused = message.mintsPaused === false ? undefined : message.mintsPaused;
    obj.sends_paused = message.sendsPaused === false ? undefined : message.sendsPaused;
    obj.burns_paused = message.burnsPaused === false ? undefined : message.burnsPaused;
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
  }
};
GlobalDecoderRegistry.register(Namespace.typeUrl, Namespace);
function createBaseAddressRoles(): AddressRoles {
  return {
    address: "",
    roles: []
  };
}
export const AddressRoles = {
  typeUrl: "/injective.permissions.v1beta1.AddressRoles",
  is(o: any): o is AddressRoles {
    return o && (o.$typeUrl === AddressRoles.typeUrl || typeof o.address === "string" && Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  isAmino(o: any): o is AddressRolesAmino {
    return o && (o.$typeUrl === AddressRoles.typeUrl || typeof o.address === "string" && Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  encode(message: AddressRoles, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.roles) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressRoles {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressRoles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
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
  fromPartial(object: DeepPartial<AddressRoles>): AddressRoles {
    const message = createBaseAddressRoles();
    message.address = object.address ?? "";
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AddressRolesAmino): AddressRoles {
    const message = createBaseAddressRoles();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  toAmino(message: AddressRoles): AddressRolesAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.roles) {
      obj.roles = message.roles.map(e => e);
    } else {
      obj.roles = message.roles;
    }
    return obj;
  },
  fromAminoMsg(object: AddressRolesAminoMsg): AddressRoles {
    return AddressRoles.fromAmino(object.value);
  },
  fromProtoMsg(message: AddressRolesProtoMsg): AddressRoles {
    return AddressRoles.decode(message.value);
  },
  toProto(message: AddressRoles): Uint8Array {
    return AddressRoles.encode(message).finish();
  },
  toProtoMsg(message: AddressRoles): AddressRolesProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.AddressRoles",
      value: AddressRoles.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AddressRoles.typeUrl, AddressRoles);
function createBaseRole(): Role {
  return {
    role: "",
    permissions: 0
  };
}
export const Role = {
  typeUrl: "/injective.permissions.v1beta1.Role",
  is(o: any): o is Role {
    return o && (o.$typeUrl === Role.typeUrl || typeof o.role === "string" && typeof o.permissions === "number");
  },
  isAmino(o: any): o is RoleAmino {
    return o && (o.$typeUrl === Role.typeUrl || typeof o.role === "string" && typeof o.permissions === "number");
  },
  encode(message: Role, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.role !== "") {
      writer.uint32(10).string(message.role);
    }
    if (message.permissions !== 0) {
      writer.uint32(16).uint32(message.permissions);
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
          message.role = reader.string();
          break;
        case 2:
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
    message.role = object.role ?? "";
    message.permissions = object.permissions ?? 0;
    return message;
  },
  fromAmino(object: RoleAmino): Role {
    const message = createBaseRole();
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = object.permissions;
    }
    return message;
  },
  toAmino(message: Role): RoleAmino {
    const obj: any = {};
    obj.role = message.role === "" ? undefined : message.role;
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
  }
};
GlobalDecoderRegistry.register(Role.typeUrl, Role);
function createBaseRoleIDs(): RoleIDs {
  return {
    roleIds: []
  };
}
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
  }
};
GlobalDecoderRegistry.register(RoleIDs.typeUrl, RoleIDs);
function createBaseVoucher(): Voucher {
  return {
    coins: []
  };
}
export const Voucher = {
  typeUrl: "/injective.permissions.v1beta1.Voucher",
  is(o: any): o is Voucher {
    return o && (o.$typeUrl === Voucher.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isAmino(o: any): o is VoucherAmino {
    return o && (o.$typeUrl === Voucher.typeUrl || Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: Voucher, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Voucher {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoucher();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Voucher>): Voucher {
    const message = createBaseVoucher();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VoucherAmino): Voucher {
    const message = createBaseVoucher();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Voucher): VoucherAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: VoucherAminoMsg): Voucher {
    return Voucher.fromAmino(object.value);
  },
  fromProtoMsg(message: VoucherProtoMsg): Voucher {
    return Voucher.decode(message.value);
  },
  toProto(message: Voucher): Uint8Array {
    return Voucher.encode(message).finish();
  },
  toProtoMsg(message: Voucher): VoucherProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.Voucher",
      value: Voucher.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Voucher.typeUrl, Voucher);
function createBaseAddressVoucher(): AddressVoucher {
  return {
    address: "",
    voucher: undefined
  };
}
export const AddressVoucher = {
  typeUrl: "/injective.permissions.v1beta1.AddressVoucher",
  is(o: any): o is AddressVoucher {
    return o && (o.$typeUrl === AddressVoucher.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is AddressVoucherAmino {
    return o && (o.$typeUrl === AddressVoucher.typeUrl || typeof o.address === "string");
  },
  encode(message: AddressVoucher, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.voucher !== undefined) {
      Voucher.encode(message.voucher, writer.uint32(18).fork()).ldelim();
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
          message.voucher = Voucher.decode(reader, reader.uint32());
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
    message.voucher = object.voucher !== undefined && object.voucher !== null ? Voucher.fromPartial(object.voucher) : undefined;
    return message;
  },
  fromAmino(object: AddressVoucherAmino): AddressVoucher {
    const message = createBaseAddressVoucher();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.voucher !== undefined && object.voucher !== null) {
      message.voucher = Voucher.fromAmino(object.voucher);
    }
    return message;
  },
  toAmino(message: AddressVoucher): AddressVoucherAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.voucher = message.voucher ? Voucher.toAmino(message.voucher) : undefined;
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
  }
};
GlobalDecoderRegistry.register(AddressVoucher.typeUrl, AddressVoucher);