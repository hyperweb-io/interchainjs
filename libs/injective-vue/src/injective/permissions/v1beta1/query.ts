import { Params, ParamsAmino } from "./params";
import { Namespace, NamespaceAmino } from "./permissions";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryAllNamespacesRequest is the request type for the Query/AllNamespaces RPC
 * method.
 */
export interface QueryAllNamespacesRequest {}
export interface QueryAllNamespacesRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryAllNamespacesRequest";
  value: Uint8Array;
}
/**
 * QueryAllNamespacesRequest is the request type for the Query/AllNamespaces RPC
 * method.
 */
export interface QueryAllNamespacesRequestAmino {}
export interface QueryAllNamespacesRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryAllNamespacesRequest";
  value: QueryAllNamespacesRequestAmino;
}
/**
 * QueryAllNamespacesResponse is the response type for the Query/AllNamespaces
 * RPC method.
 */
export interface QueryAllNamespacesResponse {
  namespaces: Namespace[];
}
export interface QueryAllNamespacesResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryAllNamespacesResponse";
  value: Uint8Array;
}
/**
 * QueryAllNamespacesResponse is the response type for the Query/AllNamespaces
 * RPC method.
 */
export interface QueryAllNamespacesResponseAmino {
  namespaces: NamespaceAmino[];
}
export interface QueryAllNamespacesResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryAllNamespacesResponse";
  value: QueryAllNamespacesResponseAmino;
}
/**
 * QueryNamespaceByDenomRequest is the request type for the
 * Query/NamespaceByDenom RPC method.
 */
export interface QueryNamespaceByDenomRequest {
  denom: string;
  includeRoles: boolean;
}
export interface QueryNamespaceByDenomRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceByDenomRequest";
  value: Uint8Array;
}
/**
 * QueryNamespaceByDenomRequest is the request type for the
 * Query/NamespaceByDenom RPC method.
 */
export interface QueryNamespaceByDenomRequestAmino {
  denom: string;
  include_roles: boolean;
}
export interface QueryNamespaceByDenomRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryNamespaceByDenomRequest";
  value: QueryNamespaceByDenomRequestAmino;
}
/**
 * QueryNamespaceByDenomResponse is the response type for the
 * Query/NamespaceByDenom RPC method.
 */
export interface QueryNamespaceByDenomResponse {
  namespace?: Namespace;
}
export interface QueryNamespaceByDenomResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceByDenomResponse";
  value: Uint8Array;
}
/**
 * QueryNamespaceByDenomResponse is the response type for the
 * Query/NamespaceByDenom RPC method.
 */
export interface QueryNamespaceByDenomResponseAmino {
  namespace?: NamespaceAmino;
}
export interface QueryNamespaceByDenomResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryNamespaceByDenomResponse";
  value: QueryNamespaceByDenomResponseAmino;
}
/**
 * QueryAddressesByRoleRequest is the request type for the Query/AddressesByRole
 * RPC method.
 */
export interface QueryAddressesByRoleRequest {
  denom: string;
  role: string;
}
export interface QueryAddressesByRoleRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryAddressesByRoleRequest";
  value: Uint8Array;
}
/**
 * QueryAddressesByRoleRequest is the request type for the Query/AddressesByRole
 * RPC method.
 */
export interface QueryAddressesByRoleRequestAmino {
  denom: string;
  role: string;
}
export interface QueryAddressesByRoleRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryAddressesByRoleRequest";
  value: QueryAddressesByRoleRequestAmino;
}
/**
 * QueryAddressesByRoleResponse is the response type for the
 * Query/AddressesByRole RPC method.
 */
export interface QueryAddressesByRoleResponse {
  addresses: string[];
}
export interface QueryAddressesByRoleResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryAddressesByRoleResponse";
  value: Uint8Array;
}
/**
 * QueryAddressesByRoleResponse is the response type for the
 * Query/AddressesByRole RPC method.
 */
export interface QueryAddressesByRoleResponseAmino {
  addresses: string[];
}
export interface QueryAddressesByRoleResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryAddressesByRoleResponse";
  value: QueryAddressesByRoleResponseAmino;
}
export interface QueryAddressRolesRequest {
  denom: string;
  address: string;
}
export interface QueryAddressRolesRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryAddressRolesRequest";
  value: Uint8Array;
}
export interface QueryAddressRolesRequestAmino {
  denom: string;
  address: string;
}
export interface QueryAddressRolesRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryAddressRolesRequest";
  value: QueryAddressRolesRequestAmino;
}
export interface QueryAddressRolesResponse {
  roles: string[];
}
export interface QueryAddressRolesResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryAddressRolesResponse";
  value: Uint8Array;
}
export interface QueryAddressRolesResponseAmino {
  roles: string[];
}
export interface QueryAddressRolesResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryAddressRolesResponse";
  value: QueryAddressRolesResponseAmino;
}
export interface QueryVouchersForAddressRequest {
  address: string;
}
export interface QueryVouchersForAddressRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryVouchersForAddressRequest";
  value: Uint8Array;
}
export interface QueryVouchersForAddressRequestAmino {
  address: string;
}
export interface QueryVouchersForAddressRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryVouchersForAddressRequest";
  value: QueryVouchersForAddressRequestAmino;
}
export interface QueryVouchersForAddressResponse {
  vouchers: Coin[];
}
export interface QueryVouchersForAddressResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryVouchersForAddressResponse";
  value: Uint8Array;
}
export interface QueryVouchersForAddressResponseAmino {
  vouchers: CoinAmino[];
}
export interface QueryVouchersForAddressResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryVouchersForAddressResponse";
  value: QueryVouchersForAddressResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryParamsRequest",
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
      typeUrl: "/injective.permissions.v1beta1.QueryParamsRequest",
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
  typeUrl: "/injective.permissions.v1beta1.QueryParamsResponse",
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
      typeUrl: "/injective.permissions.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryAllNamespacesRequest(): QueryAllNamespacesRequest {
  return {};
}
export const QueryAllNamespacesRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryAllNamespacesRequest",
  is(o: any): o is QueryAllNamespacesRequest {
    return o && o.$typeUrl === QueryAllNamespacesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllNamespacesRequestAmino {
    return o && o.$typeUrl === QueryAllNamespacesRequest.typeUrl;
  },
  encode(_: QueryAllNamespacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllNamespacesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNamespacesRequest();
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
  fromPartial(_: DeepPartial<QueryAllNamespacesRequest>): QueryAllNamespacesRequest {
    const message = createBaseQueryAllNamespacesRequest();
    return message;
  },
  fromAmino(_: QueryAllNamespacesRequestAmino): QueryAllNamespacesRequest {
    const message = createBaseQueryAllNamespacesRequest();
    return message;
  },
  toAmino(_: QueryAllNamespacesRequest): QueryAllNamespacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAllNamespacesRequestAminoMsg): QueryAllNamespacesRequest {
    return QueryAllNamespacesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNamespacesRequestProtoMsg): QueryAllNamespacesRequest {
    return QueryAllNamespacesRequest.decode(message.value);
  },
  toProto(message: QueryAllNamespacesRequest): Uint8Array {
    return QueryAllNamespacesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNamespacesRequest): QueryAllNamespacesRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryAllNamespacesRequest",
      value: QueryAllNamespacesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllNamespacesRequest.typeUrl, QueryAllNamespacesRequest);
function createBaseQueryAllNamespacesResponse(): QueryAllNamespacesResponse {
  return {
    namespaces: []
  };
}
export const QueryAllNamespacesResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryAllNamespacesResponse",
  is(o: any): o is QueryAllNamespacesResponse {
    return o && (o.$typeUrl === QueryAllNamespacesResponse.typeUrl || Array.isArray(o.namespaces) && (!o.namespaces.length || Namespace.is(o.namespaces[0])));
  },
  isAmino(o: any): o is QueryAllNamespacesResponseAmino {
    return o && (o.$typeUrl === QueryAllNamespacesResponse.typeUrl || Array.isArray(o.namespaces) && (!o.namespaces.length || Namespace.isAmino(o.namespaces[0])));
  },
  encode(message: QueryAllNamespacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.namespaces) {
      Namespace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllNamespacesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNamespacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespaces.push(Namespace.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllNamespacesResponse>): QueryAllNamespacesResponse {
    const message = createBaseQueryAllNamespacesResponse();
    message.namespaces = object.namespaces?.map(e => Namespace.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAllNamespacesResponseAmino): QueryAllNamespacesResponse {
    const message = createBaseQueryAllNamespacesResponse();
    message.namespaces = object.namespaces?.map(e => Namespace.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAllNamespacesResponse): QueryAllNamespacesResponseAmino {
    const obj: any = {};
    if (message.namespaces) {
      obj.namespaces = message.namespaces.map(e => e ? Namespace.toAmino(e) : undefined);
    } else {
      obj.namespaces = message.namespaces;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAllNamespacesResponseAminoMsg): QueryAllNamespacesResponse {
    return QueryAllNamespacesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllNamespacesResponseProtoMsg): QueryAllNamespacesResponse {
    return QueryAllNamespacesResponse.decode(message.value);
  },
  toProto(message: QueryAllNamespacesResponse): Uint8Array {
    return QueryAllNamespacesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllNamespacesResponse): QueryAllNamespacesResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryAllNamespacesResponse",
      value: QueryAllNamespacesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAllNamespacesResponse.typeUrl, QueryAllNamespacesResponse);
function createBaseQueryNamespaceByDenomRequest(): QueryNamespaceByDenomRequest {
  return {
    denom: "",
    includeRoles: false
  };
}
export const QueryNamespaceByDenomRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceByDenomRequest",
  is(o: any): o is QueryNamespaceByDenomRequest {
    return o && (o.$typeUrl === QueryNamespaceByDenomRequest.typeUrl || typeof o.denom === "string" && typeof o.includeRoles === "boolean");
  },
  isAmino(o: any): o is QueryNamespaceByDenomRequestAmino {
    return o && (o.$typeUrl === QueryNamespaceByDenomRequest.typeUrl || typeof o.denom === "string" && typeof o.include_roles === "boolean");
  },
  encode(message: QueryNamespaceByDenomRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.includeRoles === true) {
      writer.uint32(16).bool(message.includeRoles);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamespaceByDenomRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespaceByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.includeRoles = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNamespaceByDenomRequest>): QueryNamespaceByDenomRequest {
    const message = createBaseQueryNamespaceByDenomRequest();
    message.denom = object.denom ?? "";
    message.includeRoles = object.includeRoles ?? false;
    return message;
  },
  fromAmino(object: QueryNamespaceByDenomRequestAmino): QueryNamespaceByDenomRequest {
    const message = createBaseQueryNamespaceByDenomRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.include_roles !== undefined && object.include_roles !== null) {
      message.includeRoles = object.include_roles;
    }
    return message;
  },
  toAmino(message: QueryNamespaceByDenomRequest): QueryNamespaceByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.include_roles = message.includeRoles === false ? undefined : message.includeRoles;
    return obj;
  },
  fromAminoMsg(object: QueryNamespaceByDenomRequestAminoMsg): QueryNamespaceByDenomRequest {
    return QueryNamespaceByDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamespaceByDenomRequestProtoMsg): QueryNamespaceByDenomRequest {
    return QueryNamespaceByDenomRequest.decode(message.value);
  },
  toProto(message: QueryNamespaceByDenomRequest): Uint8Array {
    return QueryNamespaceByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNamespaceByDenomRequest): QueryNamespaceByDenomRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryNamespaceByDenomRequest",
      value: QueryNamespaceByDenomRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNamespaceByDenomRequest.typeUrl, QueryNamespaceByDenomRequest);
function createBaseQueryNamespaceByDenomResponse(): QueryNamespaceByDenomResponse {
  return {
    namespace: undefined
  };
}
export const QueryNamespaceByDenomResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceByDenomResponse",
  is(o: any): o is QueryNamespaceByDenomResponse {
    return o && o.$typeUrl === QueryNamespaceByDenomResponse.typeUrl;
  },
  isAmino(o: any): o is QueryNamespaceByDenomResponseAmino {
    return o && o.$typeUrl === QueryNamespaceByDenomResponse.typeUrl;
  },
  encode(message: QueryNamespaceByDenomResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamespaceByDenomResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespaceByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.namespace = Namespace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNamespaceByDenomResponse>): QueryNamespaceByDenomResponse {
    const message = createBaseQueryNamespaceByDenomResponse();
    message.namespace = object.namespace !== undefined && object.namespace !== null ? Namespace.fromPartial(object.namespace) : undefined;
    return message;
  },
  fromAmino(object: QueryNamespaceByDenomResponseAmino): QueryNamespaceByDenomResponse {
    const message = createBaseQueryNamespaceByDenomResponse();
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = Namespace.fromAmino(object.namespace);
    }
    return message;
  },
  toAmino(message: QueryNamespaceByDenomResponse): QueryNamespaceByDenomResponseAmino {
    const obj: any = {};
    obj.namespace = message.namespace ? Namespace.toAmino(message.namespace) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNamespaceByDenomResponseAminoMsg): QueryNamespaceByDenomResponse {
    return QueryNamespaceByDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamespaceByDenomResponseProtoMsg): QueryNamespaceByDenomResponse {
    return QueryNamespaceByDenomResponse.decode(message.value);
  },
  toProto(message: QueryNamespaceByDenomResponse): Uint8Array {
    return QueryNamespaceByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNamespaceByDenomResponse): QueryNamespaceByDenomResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryNamespaceByDenomResponse",
      value: QueryNamespaceByDenomResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNamespaceByDenomResponse.typeUrl, QueryNamespaceByDenomResponse);
function createBaseQueryAddressesByRoleRequest(): QueryAddressesByRoleRequest {
  return {
    denom: "",
    role: ""
  };
}
export const QueryAddressesByRoleRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryAddressesByRoleRequest",
  is(o: any): o is QueryAddressesByRoleRequest {
    return o && (o.$typeUrl === QueryAddressesByRoleRequest.typeUrl || typeof o.denom === "string" && typeof o.role === "string");
  },
  isAmino(o: any): o is QueryAddressesByRoleRequestAmino {
    return o && (o.$typeUrl === QueryAddressesByRoleRequest.typeUrl || typeof o.denom === "string" && typeof o.role === "string");
  },
  encode(message: QueryAddressesByRoleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAddressesByRoleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressesByRoleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.role = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAddressesByRoleRequest>): QueryAddressesByRoleRequest {
    const message = createBaseQueryAddressesByRoleRequest();
    message.denom = object.denom ?? "";
    message.role = object.role ?? "";
    return message;
  },
  fromAmino(object: QueryAddressesByRoleRequestAmino): QueryAddressesByRoleRequest {
    const message = createBaseQueryAddressesByRoleRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    return message;
  },
  toAmino(message: QueryAddressesByRoleRequest): QueryAddressesByRoleRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.role = message.role === "" ? undefined : message.role;
    return obj;
  },
  fromAminoMsg(object: QueryAddressesByRoleRequestAminoMsg): QueryAddressesByRoleRequest {
    return QueryAddressesByRoleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressesByRoleRequestProtoMsg): QueryAddressesByRoleRequest {
    return QueryAddressesByRoleRequest.decode(message.value);
  },
  toProto(message: QueryAddressesByRoleRequest): Uint8Array {
    return QueryAddressesByRoleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAddressesByRoleRequest): QueryAddressesByRoleRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryAddressesByRoleRequest",
      value: QueryAddressesByRoleRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAddressesByRoleRequest.typeUrl, QueryAddressesByRoleRequest);
function createBaseQueryAddressesByRoleResponse(): QueryAddressesByRoleResponse {
  return {
    addresses: []
  };
}
export const QueryAddressesByRoleResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryAddressesByRoleResponse",
  is(o: any): o is QueryAddressesByRoleResponse {
    return o && (o.$typeUrl === QueryAddressesByRoleResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  isAmino(o: any): o is QueryAddressesByRoleResponseAmino {
    return o && (o.$typeUrl === QueryAddressesByRoleResponse.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
  },
  encode(message: QueryAddressesByRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAddressesByRoleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressesByRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAddressesByRoleResponse>): QueryAddressesByRoleResponse {
    const message = createBaseQueryAddressesByRoleResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAddressesByRoleResponseAmino): QueryAddressesByRoleResponse {
    const message = createBaseQueryAddressesByRoleResponse();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAddressesByRoleResponse): QueryAddressesByRoleResponseAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAddressesByRoleResponseAminoMsg): QueryAddressesByRoleResponse {
    return QueryAddressesByRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressesByRoleResponseProtoMsg): QueryAddressesByRoleResponse {
    return QueryAddressesByRoleResponse.decode(message.value);
  },
  toProto(message: QueryAddressesByRoleResponse): Uint8Array {
    return QueryAddressesByRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAddressesByRoleResponse): QueryAddressesByRoleResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryAddressesByRoleResponse",
      value: QueryAddressesByRoleResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAddressesByRoleResponse.typeUrl, QueryAddressesByRoleResponse);
function createBaseQueryAddressRolesRequest(): QueryAddressRolesRequest {
  return {
    denom: "",
    address: ""
  };
}
export const QueryAddressRolesRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryAddressRolesRequest",
  is(o: any): o is QueryAddressRolesRequest {
    return o && (o.$typeUrl === QueryAddressRolesRequest.typeUrl || typeof o.denom === "string" && typeof o.address === "string");
  },
  isAmino(o: any): o is QueryAddressRolesRequestAmino {
    return o && (o.$typeUrl === QueryAddressRolesRequest.typeUrl || typeof o.denom === "string" && typeof o.address === "string");
  },
  encode(message: QueryAddressRolesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAddressRolesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressRolesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAddressRolesRequest>): QueryAddressRolesRequest {
    const message = createBaseQueryAddressRolesRequest();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAddressRolesRequestAmino): QueryAddressRolesRequest {
    const message = createBaseQueryAddressRolesRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAddressRolesRequest): QueryAddressRolesRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAddressRolesRequestAminoMsg): QueryAddressRolesRequest {
    return QueryAddressRolesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressRolesRequestProtoMsg): QueryAddressRolesRequest {
    return QueryAddressRolesRequest.decode(message.value);
  },
  toProto(message: QueryAddressRolesRequest): Uint8Array {
    return QueryAddressRolesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAddressRolesRequest): QueryAddressRolesRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryAddressRolesRequest",
      value: QueryAddressRolesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAddressRolesRequest.typeUrl, QueryAddressRolesRequest);
function createBaseQueryAddressRolesResponse(): QueryAddressRolesResponse {
  return {
    roles: []
  };
}
export const QueryAddressRolesResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryAddressRolesResponse",
  is(o: any): o is QueryAddressRolesResponse {
    return o && (o.$typeUrl === QueryAddressRolesResponse.typeUrl || Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  isAmino(o: any): o is QueryAddressRolesResponseAmino {
    return o && (o.$typeUrl === QueryAddressRolesResponse.typeUrl || Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  encode(message: QueryAddressRolesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.roles) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAddressRolesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAddressRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roles.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAddressRolesResponse>): QueryAddressRolesResponse {
    const message = createBaseQueryAddressRolesResponse();
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAddressRolesResponseAmino): QueryAddressRolesResponse {
    const message = createBaseQueryAddressRolesResponse();
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAddressRolesResponse): QueryAddressRolesResponseAmino {
    const obj: any = {};
    if (message.roles) {
      obj.roles = message.roles.map(e => e);
    } else {
      obj.roles = message.roles;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAddressRolesResponseAminoMsg): QueryAddressRolesResponse {
    return QueryAddressRolesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAddressRolesResponseProtoMsg): QueryAddressRolesResponse {
    return QueryAddressRolesResponse.decode(message.value);
  },
  toProto(message: QueryAddressRolesResponse): Uint8Array {
    return QueryAddressRolesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAddressRolesResponse): QueryAddressRolesResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryAddressRolesResponse",
      value: QueryAddressRolesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryAddressRolesResponse.typeUrl, QueryAddressRolesResponse);
function createBaseQueryVouchersForAddressRequest(): QueryVouchersForAddressRequest {
  return {
    address: ""
  };
}
export const QueryVouchersForAddressRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryVouchersForAddressRequest",
  is(o: any): o is QueryVouchersForAddressRequest {
    return o && (o.$typeUrl === QueryVouchersForAddressRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryVouchersForAddressRequestAmino {
    return o && (o.$typeUrl === QueryVouchersForAddressRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryVouchersForAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVouchersForAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVouchersForAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVouchersForAddressRequest>): QueryVouchersForAddressRequest {
    const message = createBaseQueryVouchersForAddressRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryVouchersForAddressRequestAmino): QueryVouchersForAddressRequest {
    const message = createBaseQueryVouchersForAddressRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryVouchersForAddressRequest): QueryVouchersForAddressRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryVouchersForAddressRequestAminoMsg): QueryVouchersForAddressRequest {
    return QueryVouchersForAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVouchersForAddressRequestProtoMsg): QueryVouchersForAddressRequest {
    return QueryVouchersForAddressRequest.decode(message.value);
  },
  toProto(message: QueryVouchersForAddressRequest): Uint8Array {
    return QueryVouchersForAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVouchersForAddressRequest): QueryVouchersForAddressRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryVouchersForAddressRequest",
      value: QueryVouchersForAddressRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVouchersForAddressRequest.typeUrl, QueryVouchersForAddressRequest);
function createBaseQueryVouchersForAddressResponse(): QueryVouchersForAddressResponse {
  return {
    vouchers: []
  };
}
export const QueryVouchersForAddressResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryVouchersForAddressResponse",
  is(o: any): o is QueryVouchersForAddressResponse {
    return o && (o.$typeUrl === QueryVouchersForAddressResponse.typeUrl || Array.isArray(o.vouchers) && (!o.vouchers.length || Coin.is(o.vouchers[0])));
  },
  isAmino(o: any): o is QueryVouchersForAddressResponseAmino {
    return o && (o.$typeUrl === QueryVouchersForAddressResponse.typeUrl || Array.isArray(o.vouchers) && (!o.vouchers.length || Coin.isAmino(o.vouchers[0])));
  },
  encode(message: QueryVouchersForAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vouchers) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVouchersForAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVouchersForAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vouchers.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVouchersForAddressResponse>): QueryVouchersForAddressResponse {
    const message = createBaseQueryVouchersForAddressResponse();
    message.vouchers = object.vouchers?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryVouchersForAddressResponseAmino): QueryVouchersForAddressResponse {
    const message = createBaseQueryVouchersForAddressResponse();
    message.vouchers = object.vouchers?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryVouchersForAddressResponse): QueryVouchersForAddressResponseAmino {
    const obj: any = {};
    if (message.vouchers) {
      obj.vouchers = message.vouchers.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.vouchers = message.vouchers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryVouchersForAddressResponseAminoMsg): QueryVouchersForAddressResponse {
    return QueryVouchersForAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVouchersForAddressResponseProtoMsg): QueryVouchersForAddressResponse {
    return QueryVouchersForAddressResponse.decode(message.value);
  },
  toProto(message: QueryVouchersForAddressResponse): Uint8Array {
    return QueryVouchersForAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVouchersForAddressResponse): QueryVouchersForAddressResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryVouchersForAddressResponse",
      value: QueryVouchersForAddressResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVouchersForAddressResponse.typeUrl, QueryVouchersForAddressResponse);