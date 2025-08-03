import { Params, ParamsAmino } from "./params";
import { Namespace, NamespaceAmino, RoleManager, RoleManagerAmino, PolicyStatus, PolicyStatusAmino, PolicyManagerCapability, PolicyManagerCapabilityAmino, AddressVoucher, AddressVoucherAmino } from "./permissions";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { GenesisState, GenesisStateAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryNamespaceDenomsRequest is the request type for the Query/NamespaceDenoms
 * RPC method.
 * @name QueryNamespaceDenomsRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceDenomsRequest
 */
export interface QueryNamespaceDenomsRequest {}
export interface QueryNamespaceDenomsRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceDenomsRequest";
  value: Uint8Array;
}
/**
 * QueryNamespaceDenomsRequest is the request type for the Query/NamespaceDenoms
 * RPC method.
 * @name QueryNamespaceDenomsRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceDenomsRequest
 */
export interface QueryNamespaceDenomsRequestAmino {}
export interface QueryNamespaceDenomsRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryNamespaceDenomsRequest";
  value: QueryNamespaceDenomsRequestAmino;
}
/**
 * QueryNamespaceDenomsResponse is the response type for the
 * Query/NamespaceDenoms RPC method.
 * @name QueryNamespaceDenomsResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceDenomsResponse
 */
export interface QueryNamespaceDenomsResponse {
  denoms: string[];
}
export interface QueryNamespaceDenomsResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceDenomsResponse";
  value: Uint8Array;
}
/**
 * QueryNamespaceDenomsResponse is the response type for the
 * Query/NamespaceDenoms RPC method.
 * @name QueryNamespaceDenomsResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceDenomsResponse
 */
export interface QueryNamespaceDenomsResponseAmino {
  denoms: string[];
}
export interface QueryNamespaceDenomsResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryNamespaceDenomsResponse";
  value: QueryNamespaceDenomsResponseAmino;
}
/**
 * QueryNamespacesRequest is the request type for the Query/Namespaces RPC
 * method.
 * @name QueryNamespacesRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespacesRequest
 */
export interface QueryNamespacesRequest {}
export interface QueryNamespacesRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespacesRequest";
  value: Uint8Array;
}
/**
 * QueryNamespacesRequest is the request type for the Query/Namespaces RPC
 * method.
 * @name QueryNamespacesRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespacesRequest
 */
export interface QueryNamespacesRequestAmino {}
export interface QueryNamespacesRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryNamespacesRequest";
  value: QueryNamespacesRequestAmino;
}
/**
 * QueryNamespacesResponse is the response type for the Query/Namespaces
 * RPC method.
 * @name QueryNamespacesResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespacesResponse
 */
export interface QueryNamespacesResponse {
  namespaces: Namespace[];
}
export interface QueryNamespacesResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespacesResponse";
  value: Uint8Array;
}
/**
 * QueryNamespacesResponse is the response type for the Query/Namespaces
 * RPC method.
 * @name QueryNamespacesResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespacesResponse
 */
export interface QueryNamespacesResponseAmino {
  namespaces: NamespaceAmino[];
}
export interface QueryNamespacesResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryNamespacesResponse";
  value: QueryNamespacesResponseAmino;
}
/**
 * QueryNamespaceRequest is the request type for the
 * Query/Namespace RPC method.
 * @name QueryNamespaceRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceRequest
 */
export interface QueryNamespaceRequest {
  denom: string;
}
export interface QueryNamespaceRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceRequest";
  value: Uint8Array;
}
/**
 * QueryNamespaceRequest is the request type for the
 * Query/Namespace RPC method.
 * @name QueryNamespaceRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceRequest
 */
export interface QueryNamespaceRequestAmino {
  denom: string;
}
export interface QueryNamespaceRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryNamespaceRequest";
  value: QueryNamespaceRequestAmino;
}
/**
 * QueryNamespaceResponse is the response type for the
 * Query/NamespaceByDenom RPC method.
 * @name QueryNamespaceResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceResponse
 */
export interface QueryNamespaceResponse {
  namespace?: Namespace;
}
export interface QueryNamespaceResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceResponse";
  value: Uint8Array;
}
/**
 * QueryNamespaceResponse is the response type for the
 * Query/NamespaceByDenom RPC method.
 * @name QueryNamespaceResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceResponse
 */
export interface QueryNamespaceResponseAmino {
  namespace?: NamespaceAmino;
}
export interface QueryNamespaceResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryNamespaceResponse";
  value: QueryNamespaceResponseAmino;
}
/**
 * QueryAddressesByRoleRequest is the request type for the Query/AddressesByRole
 * RPC method.
 * @name QueryActorsByRoleRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryActorsByRoleRequest
 */
export interface QueryActorsByRoleRequest {
  denom: string;
  role: string;
}
export interface QueryActorsByRoleRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryActorsByRoleRequest";
  value: Uint8Array;
}
/**
 * QueryAddressesByRoleRequest is the request type for the Query/AddressesByRole
 * RPC method.
 * @name QueryActorsByRoleRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryActorsByRoleRequest
 */
export interface QueryActorsByRoleRequestAmino {
  denom: string;
  role: string;
}
export interface QueryActorsByRoleRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryActorsByRoleRequest";
  value: QueryActorsByRoleRequestAmino;
}
/**
 * QueryAddressesByRoleResponse is the response type for the
 * Query/AddressesByRole RPC method.
 * @name QueryActorsByRoleResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryActorsByRoleResponse
 */
export interface QueryActorsByRoleResponse {
  actors: string[];
}
export interface QueryActorsByRoleResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryActorsByRoleResponse";
  value: Uint8Array;
}
/**
 * QueryAddressesByRoleResponse is the response type for the
 * Query/AddressesByRole RPC method.
 * @name QueryActorsByRoleResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryActorsByRoleResponse
 */
export interface QueryActorsByRoleResponseAmino {
  actors: string[];
}
export interface QueryActorsByRoleResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryActorsByRoleResponse";
  value: QueryActorsByRoleResponseAmino;
}
/**
 * QueryRolesByActorRequest is the request type for the
 * Query/RolesByActor RPC method.
 * @name QueryRolesByActorRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRolesByActorRequest
 */
export interface QueryRolesByActorRequest {
  denom: string;
  actor: string;
}
export interface QueryRolesByActorRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryRolesByActorRequest";
  value: Uint8Array;
}
/**
 * QueryRolesByActorRequest is the request type for the
 * Query/RolesByActor RPC method.
 * @name QueryRolesByActorRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRolesByActorRequest
 */
export interface QueryRolesByActorRequestAmino {
  denom: string;
  actor: string;
}
export interface QueryRolesByActorRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryRolesByActorRequest";
  value: QueryRolesByActorRequestAmino;
}
/**
 * QueryRolesByActorResponse is the response type for the
 * Query/RolesByActor RPC method.
 * @name QueryRolesByActorResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRolesByActorResponse
 */
export interface QueryRolesByActorResponse {
  roles: string[];
}
export interface QueryRolesByActorResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryRolesByActorResponse";
  value: Uint8Array;
}
/**
 * QueryRolesByActorResponse is the response type for the
 * Query/RolesByActor RPC method.
 * @name QueryRolesByActorResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRolesByActorResponse
 */
export interface QueryRolesByActorResponseAmino {
  roles: string[];
}
export interface QueryRolesByActorResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryRolesByActorResponse";
  value: QueryRolesByActorResponseAmino;
}
/**
 * QueryRoleManagersRequest is the request type for the Query/RoleManagers
 * RPC method.
 * @name QueryRoleManagersRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagersRequest
 */
export interface QueryRoleManagersRequest {
  denom: string;
}
export interface QueryRoleManagersRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryRoleManagersRequest";
  value: Uint8Array;
}
/**
 * QueryRoleManagersRequest is the request type for the Query/RoleManagers
 * RPC method.
 * @name QueryRoleManagersRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagersRequest
 */
export interface QueryRoleManagersRequestAmino {
  denom: string;
}
export interface QueryRoleManagersRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryRoleManagersRequest";
  value: QueryRoleManagersRequestAmino;
}
/**
 * QueryRoleManagersResponse is the response type for the
 * Query/RoleManagers RPC method.
 * @name QueryRoleManagersResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagersResponse
 */
export interface QueryRoleManagersResponse {
  roleManagers: RoleManager[];
}
export interface QueryRoleManagersResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryRoleManagersResponse";
  value: Uint8Array;
}
/**
 * QueryRoleManagersResponse is the response type for the
 * Query/RoleManagers RPC method.
 * @name QueryRoleManagersResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagersResponse
 */
export interface QueryRoleManagersResponseAmino {
  role_managers: RoleManagerAmino[];
}
export interface QueryRoleManagersResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryRoleManagersResponse";
  value: QueryRoleManagersResponseAmino;
}
/**
 * QueryRoleManagerRequest is the request type for the Query/RoleManager
 * RPC method.
 * @name QueryRoleManagerRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagerRequest
 */
export interface QueryRoleManagerRequest {
  denom: string;
  manager: string;
}
export interface QueryRoleManagerRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryRoleManagerRequest";
  value: Uint8Array;
}
/**
 * QueryRoleManagerRequest is the request type for the Query/RoleManager
 * RPC method.
 * @name QueryRoleManagerRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagerRequest
 */
export interface QueryRoleManagerRequestAmino {
  denom: string;
  manager: string;
}
export interface QueryRoleManagerRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryRoleManagerRequest";
  value: QueryRoleManagerRequestAmino;
}
/**
 * QueryRoleManagerResponse is the response type for the
 * Query/RoleManager RPC method.
 * @name QueryRoleManagerResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagerResponse
 */
export interface QueryRoleManagerResponse {
  roleManager?: RoleManager;
}
export interface QueryRoleManagerResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryRoleManagerResponse";
  value: Uint8Array;
}
/**
 * QueryRoleManagerResponse is the response type for the
 * Query/RoleManager RPC method.
 * @name QueryRoleManagerResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagerResponse
 */
export interface QueryRoleManagerResponseAmino {
  role_manager?: RoleManagerAmino;
}
export interface QueryRoleManagerResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryRoleManagerResponse";
  value: QueryRoleManagerResponseAmino;
}
/**
 * QueryPolicyStatusesRequest is the request type for the Query/PolicyStatuses
 * RPC method.
 * @name QueryPolicyStatusesRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyStatusesRequest
 */
export interface QueryPolicyStatusesRequest {
  denom: string;
}
export interface QueryPolicyStatusesRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryPolicyStatusesRequest";
  value: Uint8Array;
}
/**
 * QueryPolicyStatusesRequest is the request type for the Query/PolicyStatuses
 * RPC method.
 * @name QueryPolicyStatusesRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyStatusesRequest
 */
export interface QueryPolicyStatusesRequestAmino {
  denom: string;
}
export interface QueryPolicyStatusesRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryPolicyStatusesRequest";
  value: QueryPolicyStatusesRequestAmino;
}
/**
 * QueryRoleManagerResponse is the response type for the
 * Query/RoleManager RPC method.
 * @name QueryPolicyStatusesResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyStatusesResponse
 */
export interface QueryPolicyStatusesResponse {
  policyStatuses: PolicyStatus[];
}
export interface QueryPolicyStatusesResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryPolicyStatusesResponse";
  value: Uint8Array;
}
/**
 * QueryRoleManagerResponse is the response type for the
 * Query/RoleManager RPC method.
 * @name QueryPolicyStatusesResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyStatusesResponse
 */
export interface QueryPolicyStatusesResponseAmino {
  policy_statuses: PolicyStatusAmino[];
}
export interface QueryPolicyStatusesResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryPolicyStatusesResponse";
  value: QueryPolicyStatusesResponseAmino;
}
/**
 * QueryPolicyManagerCapabilitiesRequest is the request type for the
 * Query/PolicyManagerCapabilities RPC method.
 * @name QueryPolicyManagerCapabilitiesRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesRequest
 */
export interface QueryPolicyManagerCapabilitiesRequest {
  denom: string;
}
export interface QueryPolicyManagerCapabilitiesRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesRequest";
  value: Uint8Array;
}
/**
 * QueryPolicyManagerCapabilitiesRequest is the request type for the
 * Query/PolicyManagerCapabilities RPC method.
 * @name QueryPolicyManagerCapabilitiesRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesRequest
 */
export interface QueryPolicyManagerCapabilitiesRequestAmino {
  denom: string;
}
export interface QueryPolicyManagerCapabilitiesRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesRequest";
  value: QueryPolicyManagerCapabilitiesRequestAmino;
}
/**
 * QueryPolicyManagerCapabilitiesResponse is the response type for the
 * Query/PolicyManagerCapabilities RPC method.
 * @name QueryPolicyManagerCapabilitiesResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesResponse
 */
export interface QueryPolicyManagerCapabilitiesResponse {
  policyManagerCapabilities: PolicyManagerCapability[];
}
export interface QueryPolicyManagerCapabilitiesResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesResponse";
  value: Uint8Array;
}
/**
 * QueryPolicyManagerCapabilitiesResponse is the response type for the
 * Query/PolicyManagerCapabilities RPC method.
 * @name QueryPolicyManagerCapabilitiesResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesResponse
 */
export interface QueryPolicyManagerCapabilitiesResponseAmino {
  policy_manager_capabilities: PolicyManagerCapabilityAmino[];
}
export interface QueryPolicyManagerCapabilitiesResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesResponse";
  value: QueryPolicyManagerCapabilitiesResponseAmino;
}
/**
 * @name QueryVouchersRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVouchersRequest
 */
export interface QueryVouchersRequest {
  denom: string;
}
export interface QueryVouchersRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryVouchersRequest";
  value: Uint8Array;
}
/**
 * @name QueryVouchersRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVouchersRequest
 */
export interface QueryVouchersRequestAmino {
  denom: string;
}
export interface QueryVouchersRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryVouchersRequest";
  value: QueryVouchersRequestAmino;
}
/**
 * @name QueryVouchersResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVouchersResponse
 */
export interface QueryVouchersResponse {
  vouchers: AddressVoucher[];
}
export interface QueryVouchersResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryVouchersResponse";
  value: Uint8Array;
}
/**
 * @name QueryVouchersResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVouchersResponse
 */
export interface QueryVouchersResponseAmino {
  vouchers: AddressVoucherAmino[];
}
export interface QueryVouchersResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryVouchersResponse";
  value: QueryVouchersResponseAmino;
}
/**
 * @name QueryVoucherRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVoucherRequest
 */
export interface QueryVoucherRequest {
  denom: string;
  address: string;
}
export interface QueryVoucherRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryVoucherRequest";
  value: Uint8Array;
}
/**
 * @name QueryVoucherRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVoucherRequest
 */
export interface QueryVoucherRequestAmino {
  denom: string;
  address: string;
}
export interface QueryVoucherRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryVoucherRequest";
  value: QueryVoucherRequestAmino;
}
/**
 * @name QueryVoucherResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVoucherResponse
 */
export interface QueryVoucherResponse {
  voucher: Coin;
}
export interface QueryVoucherResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryVoucherResponse";
  value: Uint8Array;
}
/**
 * @name QueryVoucherResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVoucherResponse
 */
export interface QueryVoucherResponseAmino {
  voucher: CoinAmino;
}
export interface QueryVoucherResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryVoucherResponse";
  value: QueryVoucherResponseAmino;
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/PermissionsModuleState RPC method.
 * @name QueryModuleStateRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryModuleStateRequest
 */
export interface QueryModuleStateRequest {}
export interface QueryModuleStateRequestProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryModuleStateRequest";
  value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/PermissionsModuleState RPC method.
 * @name QueryModuleStateRequestAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryModuleStateRequest
 */
export interface QueryModuleStateRequestAmino {}
export interface QueryModuleStateRequestAminoMsg {
  type: "/injective.permissions.v1beta1.QueryModuleStateRequest";
  value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/PermissionsModuleState RPC method.
 * @name QueryModuleStateResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryModuleStateResponse
 */
export interface QueryModuleStateResponse {
  state?: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
  typeUrl: "/injective.permissions.v1beta1.QueryModuleStateResponse";
  value: Uint8Array;
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/PermissionsModuleState RPC method.
 * @name QueryModuleStateResponseAmino
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryModuleStateResponse
 */
export interface QueryModuleStateResponseAmino {
  state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
  type: "/injective.permissions.v1beta1.QueryModuleStateResponse";
  value: QueryModuleStateResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryParamsRequest
 */
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
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryParamsResponse
 */
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
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseQueryNamespaceDenomsRequest(): QueryNamespaceDenomsRequest {
  return {};
}
/**
 * QueryNamespaceDenomsRequest is the request type for the Query/NamespaceDenoms
 * RPC method.
 * @name QueryNamespaceDenomsRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceDenomsRequest
 */
export const QueryNamespaceDenomsRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceDenomsRequest",
  is(o: any): o is QueryNamespaceDenomsRequest {
    return o && o.$typeUrl === QueryNamespaceDenomsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryNamespaceDenomsRequestAmino {
    return o && o.$typeUrl === QueryNamespaceDenomsRequest.typeUrl;
  },
  encode(_: QueryNamespaceDenomsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamespaceDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespaceDenomsRequest();
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
  fromPartial(_: DeepPartial<QueryNamespaceDenomsRequest>): QueryNamespaceDenomsRequest {
    const message = createBaseQueryNamespaceDenomsRequest();
    return message;
  },
  fromAmino(_: QueryNamespaceDenomsRequestAmino): QueryNamespaceDenomsRequest {
    const message = createBaseQueryNamespaceDenomsRequest();
    return message;
  },
  toAmino(_: QueryNamespaceDenomsRequest): QueryNamespaceDenomsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNamespaceDenomsRequestAminoMsg): QueryNamespaceDenomsRequest {
    return QueryNamespaceDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamespaceDenomsRequestProtoMsg): QueryNamespaceDenomsRequest {
    return QueryNamespaceDenomsRequest.decode(message.value);
  },
  toProto(message: QueryNamespaceDenomsRequest): Uint8Array {
    return QueryNamespaceDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNamespaceDenomsRequest): QueryNamespaceDenomsRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryNamespaceDenomsRequest",
      value: QueryNamespaceDenomsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNamespaceDenomsResponse(): QueryNamespaceDenomsResponse {
  return {
    denoms: []
  };
}
/**
 * QueryNamespaceDenomsResponse is the response type for the
 * Query/NamespaceDenoms RPC method.
 * @name QueryNamespaceDenomsResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceDenomsResponse
 */
export const QueryNamespaceDenomsResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceDenomsResponse",
  is(o: any): o is QueryNamespaceDenomsResponse {
    return o && (o.$typeUrl === QueryNamespaceDenomsResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  isAmino(o: any): o is QueryNamespaceDenomsResponseAmino {
    return o && (o.$typeUrl === QueryNamespaceDenomsResponse.typeUrl || Array.isArray(o.denoms) && (!o.denoms.length || typeof o.denoms[0] === "string"));
  },
  encode(message: QueryNamespaceDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamespaceDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespaceDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNamespaceDenomsResponse>): QueryNamespaceDenomsResponse {
    const message = createBaseQueryNamespaceDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryNamespaceDenomsResponseAmino): QueryNamespaceDenomsResponse {
    const message = createBaseQueryNamespaceDenomsResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryNamespaceDenomsResponse): QueryNamespaceDenomsResponseAmino {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map(e => e);
    } else {
      obj.denoms = message.denoms;
    }
    return obj;
  },
  fromAminoMsg(object: QueryNamespaceDenomsResponseAminoMsg): QueryNamespaceDenomsResponse {
    return QueryNamespaceDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamespaceDenomsResponseProtoMsg): QueryNamespaceDenomsResponse {
    return QueryNamespaceDenomsResponse.decode(message.value);
  },
  toProto(message: QueryNamespaceDenomsResponse): Uint8Array {
    return QueryNamespaceDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNamespaceDenomsResponse): QueryNamespaceDenomsResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryNamespaceDenomsResponse",
      value: QueryNamespaceDenomsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNamespacesRequest(): QueryNamespacesRequest {
  return {};
}
/**
 * QueryNamespacesRequest is the request type for the Query/Namespaces RPC
 * method.
 * @name QueryNamespacesRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespacesRequest
 */
export const QueryNamespacesRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespacesRequest",
  is(o: any): o is QueryNamespacesRequest {
    return o && o.$typeUrl === QueryNamespacesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryNamespacesRequestAmino {
    return o && o.$typeUrl === QueryNamespacesRequest.typeUrl;
  },
  encode(_: QueryNamespacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamespacesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespacesRequest();
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
  fromPartial(_: DeepPartial<QueryNamespacesRequest>): QueryNamespacesRequest {
    const message = createBaseQueryNamespacesRequest();
    return message;
  },
  fromAmino(_: QueryNamespacesRequestAmino): QueryNamespacesRequest {
    const message = createBaseQueryNamespacesRequest();
    return message;
  },
  toAmino(_: QueryNamespacesRequest): QueryNamespacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryNamespacesRequestAminoMsg): QueryNamespacesRequest {
    return QueryNamespacesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamespacesRequestProtoMsg): QueryNamespacesRequest {
    return QueryNamespacesRequest.decode(message.value);
  },
  toProto(message: QueryNamespacesRequest): Uint8Array {
    return QueryNamespacesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNamespacesRequest): QueryNamespacesRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryNamespacesRequest",
      value: QueryNamespacesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNamespacesResponse(): QueryNamespacesResponse {
  return {
    namespaces: []
  };
}
/**
 * QueryNamespacesResponse is the response type for the Query/Namespaces
 * RPC method.
 * @name QueryNamespacesResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespacesResponse
 */
export const QueryNamespacesResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespacesResponse",
  is(o: any): o is QueryNamespacesResponse {
    return o && (o.$typeUrl === QueryNamespacesResponse.typeUrl || Array.isArray(o.namespaces) && (!o.namespaces.length || Namespace.is(o.namespaces[0])));
  },
  isAmino(o: any): o is QueryNamespacesResponseAmino {
    return o && (o.$typeUrl === QueryNamespacesResponse.typeUrl || Array.isArray(o.namespaces) && (!o.namespaces.length || Namespace.isAmino(o.namespaces[0])));
  },
  encode(message: QueryNamespacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.namespaces) {
      Namespace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamespacesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespacesResponse();
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
  fromPartial(object: DeepPartial<QueryNamespacesResponse>): QueryNamespacesResponse {
    const message = createBaseQueryNamespacesResponse();
    message.namespaces = object.namespaces?.map(e => Namespace.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryNamespacesResponseAmino): QueryNamespacesResponse {
    const message = createBaseQueryNamespacesResponse();
    message.namespaces = object.namespaces?.map(e => Namespace.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryNamespacesResponse): QueryNamespacesResponseAmino {
    const obj: any = {};
    if (message.namespaces) {
      obj.namespaces = message.namespaces.map(e => e ? Namespace.toAmino(e) : undefined);
    } else {
      obj.namespaces = message.namespaces;
    }
    return obj;
  },
  fromAminoMsg(object: QueryNamespacesResponseAminoMsg): QueryNamespacesResponse {
    return QueryNamespacesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamespacesResponseProtoMsg): QueryNamespacesResponse {
    return QueryNamespacesResponse.decode(message.value);
  },
  toProto(message: QueryNamespacesResponse): Uint8Array {
    return QueryNamespacesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNamespacesResponse): QueryNamespacesResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryNamespacesResponse",
      value: QueryNamespacesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNamespacesResponse.typeUrl)) {
      return;
    }
    Namespace.registerTypeUrl();
  }
};
function createBaseQueryNamespaceRequest(): QueryNamespaceRequest {
  return {
    denom: ""
  };
}
/**
 * QueryNamespaceRequest is the request type for the
 * Query/Namespace RPC method.
 * @name QueryNamespaceRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceRequest
 */
export const QueryNamespaceRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceRequest",
  is(o: any): o is QueryNamespaceRequest {
    return o && (o.$typeUrl === QueryNamespaceRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryNamespaceRequestAmino {
    return o && (o.$typeUrl === QueryNamespaceRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryNamespaceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamespaceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespaceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNamespaceRequest>): QueryNamespaceRequest {
    const message = createBaseQueryNamespaceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryNamespaceRequestAmino): QueryNamespaceRequest {
    const message = createBaseQueryNamespaceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryNamespaceRequest): QueryNamespaceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryNamespaceRequestAminoMsg): QueryNamespaceRequest {
    return QueryNamespaceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamespaceRequestProtoMsg): QueryNamespaceRequest {
    return QueryNamespaceRequest.decode(message.value);
  },
  toProto(message: QueryNamespaceRequest): Uint8Array {
    return QueryNamespaceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNamespaceRequest): QueryNamespaceRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryNamespaceRequest",
      value: QueryNamespaceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNamespaceResponse(): QueryNamespaceResponse {
  return {
    namespace: undefined
  };
}
/**
 * QueryNamespaceResponse is the response type for the
 * Query/NamespaceByDenom RPC method.
 * @name QueryNamespaceResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryNamespaceResponse
 */
export const QueryNamespaceResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryNamespaceResponse",
  is(o: any): o is QueryNamespaceResponse {
    return o && o.$typeUrl === QueryNamespaceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryNamespaceResponseAmino {
    return o && o.$typeUrl === QueryNamespaceResponse.typeUrl;
  },
  encode(message: QueryNamespaceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNamespaceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNamespaceResponse();
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
  fromPartial(object: DeepPartial<QueryNamespaceResponse>): QueryNamespaceResponse {
    const message = createBaseQueryNamespaceResponse();
    message.namespace = object.namespace !== undefined && object.namespace !== null ? Namespace.fromPartial(object.namespace) : undefined;
    return message;
  },
  fromAmino(object: QueryNamespaceResponseAmino): QueryNamespaceResponse {
    const message = createBaseQueryNamespaceResponse();
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = Namespace.fromAmino(object.namespace);
    }
    return message;
  },
  toAmino(message: QueryNamespaceResponse): QueryNamespaceResponseAmino {
    const obj: any = {};
    obj.namespace = message.namespace ? Namespace.toAmino(message.namespace) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNamespaceResponseAminoMsg): QueryNamespaceResponse {
    return QueryNamespaceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNamespaceResponseProtoMsg): QueryNamespaceResponse {
    return QueryNamespaceResponse.decode(message.value);
  },
  toProto(message: QueryNamespaceResponse): Uint8Array {
    return QueryNamespaceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNamespaceResponse): QueryNamespaceResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryNamespaceResponse",
      value: QueryNamespaceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNamespaceResponse.typeUrl)) {
      return;
    }
    Namespace.registerTypeUrl();
  }
};
function createBaseQueryActorsByRoleRequest(): QueryActorsByRoleRequest {
  return {
    denom: "",
    role: ""
  };
}
/**
 * QueryAddressesByRoleRequest is the request type for the Query/AddressesByRole
 * RPC method.
 * @name QueryActorsByRoleRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryActorsByRoleRequest
 */
export const QueryActorsByRoleRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryActorsByRoleRequest",
  is(o: any): o is QueryActorsByRoleRequest {
    return o && (o.$typeUrl === QueryActorsByRoleRequest.typeUrl || typeof o.denom === "string" && typeof o.role === "string");
  },
  isAmino(o: any): o is QueryActorsByRoleRequestAmino {
    return o && (o.$typeUrl === QueryActorsByRoleRequest.typeUrl || typeof o.denom === "string" && typeof o.role === "string");
  },
  encode(message: QueryActorsByRoleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.role !== "") {
      writer.uint32(18).string(message.role);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActorsByRoleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActorsByRoleRequest();
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
  fromPartial(object: DeepPartial<QueryActorsByRoleRequest>): QueryActorsByRoleRequest {
    const message = createBaseQueryActorsByRoleRequest();
    message.denom = object.denom ?? "";
    message.role = object.role ?? "";
    return message;
  },
  fromAmino(object: QueryActorsByRoleRequestAmino): QueryActorsByRoleRequest {
    const message = createBaseQueryActorsByRoleRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    return message;
  },
  toAmino(message: QueryActorsByRoleRequest): QueryActorsByRoleRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.role = message.role === "" ? undefined : message.role;
    return obj;
  },
  fromAminoMsg(object: QueryActorsByRoleRequestAminoMsg): QueryActorsByRoleRequest {
    return QueryActorsByRoleRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActorsByRoleRequestProtoMsg): QueryActorsByRoleRequest {
    return QueryActorsByRoleRequest.decode(message.value);
  },
  toProto(message: QueryActorsByRoleRequest): Uint8Array {
    return QueryActorsByRoleRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActorsByRoleRequest): QueryActorsByRoleRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryActorsByRoleRequest",
      value: QueryActorsByRoleRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryActorsByRoleResponse(): QueryActorsByRoleResponse {
  return {
    actors: []
  };
}
/**
 * QueryAddressesByRoleResponse is the response type for the
 * Query/AddressesByRole RPC method.
 * @name QueryActorsByRoleResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryActorsByRoleResponse
 */
export const QueryActorsByRoleResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryActorsByRoleResponse",
  is(o: any): o is QueryActorsByRoleResponse {
    return o && (o.$typeUrl === QueryActorsByRoleResponse.typeUrl || Array.isArray(o.actors) && (!o.actors.length || typeof o.actors[0] === "string"));
  },
  isAmino(o: any): o is QueryActorsByRoleResponseAmino {
    return o && (o.$typeUrl === QueryActorsByRoleResponse.typeUrl || Array.isArray(o.actors) && (!o.actors.length || typeof o.actors[0] === "string"));
  },
  encode(message: QueryActorsByRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actors) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActorsByRoleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActorsByRoleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actors.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryActorsByRoleResponse>): QueryActorsByRoleResponse {
    const message = createBaseQueryActorsByRoleResponse();
    message.actors = object.actors?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryActorsByRoleResponseAmino): QueryActorsByRoleResponse {
    const message = createBaseQueryActorsByRoleResponse();
    message.actors = object.actors?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryActorsByRoleResponse): QueryActorsByRoleResponseAmino {
    const obj: any = {};
    if (message.actors) {
      obj.actors = message.actors.map(e => e);
    } else {
      obj.actors = message.actors;
    }
    return obj;
  },
  fromAminoMsg(object: QueryActorsByRoleResponseAminoMsg): QueryActorsByRoleResponse {
    return QueryActorsByRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActorsByRoleResponseProtoMsg): QueryActorsByRoleResponse {
    return QueryActorsByRoleResponse.decode(message.value);
  },
  toProto(message: QueryActorsByRoleResponse): Uint8Array {
    return QueryActorsByRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActorsByRoleResponse): QueryActorsByRoleResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryActorsByRoleResponse",
      value: QueryActorsByRoleResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRolesByActorRequest(): QueryRolesByActorRequest {
  return {
    denom: "",
    actor: ""
  };
}
/**
 * QueryRolesByActorRequest is the request type for the
 * Query/RolesByActor RPC method.
 * @name QueryRolesByActorRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRolesByActorRequest
 */
export const QueryRolesByActorRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryRolesByActorRequest",
  is(o: any): o is QueryRolesByActorRequest {
    return o && (o.$typeUrl === QueryRolesByActorRequest.typeUrl || typeof o.denom === "string" && typeof o.actor === "string");
  },
  isAmino(o: any): o is QueryRolesByActorRequestAmino {
    return o && (o.$typeUrl === QueryRolesByActorRequest.typeUrl || typeof o.denom === "string" && typeof o.actor === "string");
  },
  encode(message: QueryRolesByActorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.actor !== "") {
      writer.uint32(18).string(message.actor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRolesByActorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRolesByActorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.actor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRolesByActorRequest>): QueryRolesByActorRequest {
    const message = createBaseQueryRolesByActorRequest();
    message.denom = object.denom ?? "";
    message.actor = object.actor ?? "";
    return message;
  },
  fromAmino(object: QueryRolesByActorRequestAmino): QueryRolesByActorRequest {
    const message = createBaseQueryRolesByActorRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.actor !== undefined && object.actor !== null) {
      message.actor = object.actor;
    }
    return message;
  },
  toAmino(message: QueryRolesByActorRequest): QueryRolesByActorRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.actor = message.actor === "" ? undefined : message.actor;
    return obj;
  },
  fromAminoMsg(object: QueryRolesByActorRequestAminoMsg): QueryRolesByActorRequest {
    return QueryRolesByActorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRolesByActorRequestProtoMsg): QueryRolesByActorRequest {
    return QueryRolesByActorRequest.decode(message.value);
  },
  toProto(message: QueryRolesByActorRequest): Uint8Array {
    return QueryRolesByActorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRolesByActorRequest): QueryRolesByActorRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryRolesByActorRequest",
      value: QueryRolesByActorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRolesByActorResponse(): QueryRolesByActorResponse {
  return {
    roles: []
  };
}
/**
 * QueryRolesByActorResponse is the response type for the
 * Query/RolesByActor RPC method.
 * @name QueryRolesByActorResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRolesByActorResponse
 */
export const QueryRolesByActorResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryRolesByActorResponse",
  is(o: any): o is QueryRolesByActorResponse {
    return o && (o.$typeUrl === QueryRolesByActorResponse.typeUrl || Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  isAmino(o: any): o is QueryRolesByActorResponseAmino {
    return o && (o.$typeUrl === QueryRolesByActorResponse.typeUrl || Array.isArray(o.roles) && (!o.roles.length || typeof o.roles[0] === "string"));
  },
  encode(message: QueryRolesByActorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.roles) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRolesByActorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRolesByActorResponse();
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
  fromPartial(object: DeepPartial<QueryRolesByActorResponse>): QueryRolesByActorResponse {
    const message = createBaseQueryRolesByActorResponse();
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryRolesByActorResponseAmino): QueryRolesByActorResponse {
    const message = createBaseQueryRolesByActorResponse();
    message.roles = object.roles?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryRolesByActorResponse): QueryRolesByActorResponseAmino {
    const obj: any = {};
    if (message.roles) {
      obj.roles = message.roles.map(e => e);
    } else {
      obj.roles = message.roles;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRolesByActorResponseAminoMsg): QueryRolesByActorResponse {
    return QueryRolesByActorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRolesByActorResponseProtoMsg): QueryRolesByActorResponse {
    return QueryRolesByActorResponse.decode(message.value);
  },
  toProto(message: QueryRolesByActorResponse): Uint8Array {
    return QueryRolesByActorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRolesByActorResponse): QueryRolesByActorResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryRolesByActorResponse",
      value: QueryRolesByActorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRoleManagersRequest(): QueryRoleManagersRequest {
  return {
    denom: ""
  };
}
/**
 * QueryRoleManagersRequest is the request type for the Query/RoleManagers
 * RPC method.
 * @name QueryRoleManagersRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagersRequest
 */
export const QueryRoleManagersRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryRoleManagersRequest",
  is(o: any): o is QueryRoleManagersRequest {
    return o && (o.$typeUrl === QueryRoleManagersRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryRoleManagersRequestAmino {
    return o && (o.$typeUrl === QueryRoleManagersRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryRoleManagersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRoleManagersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoleManagersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRoleManagersRequest>): QueryRoleManagersRequest {
    const message = createBaseQueryRoleManagersRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryRoleManagersRequestAmino): QueryRoleManagersRequest {
    const message = createBaseQueryRoleManagersRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryRoleManagersRequest): QueryRoleManagersRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryRoleManagersRequestAminoMsg): QueryRoleManagersRequest {
    return QueryRoleManagersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoleManagersRequestProtoMsg): QueryRoleManagersRequest {
    return QueryRoleManagersRequest.decode(message.value);
  },
  toProto(message: QueryRoleManagersRequest): Uint8Array {
    return QueryRoleManagersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRoleManagersRequest): QueryRoleManagersRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryRoleManagersRequest",
      value: QueryRoleManagersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRoleManagersResponse(): QueryRoleManagersResponse {
  return {
    roleManagers: []
  };
}
/**
 * QueryRoleManagersResponse is the response type for the
 * Query/RoleManagers RPC method.
 * @name QueryRoleManagersResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagersResponse
 */
export const QueryRoleManagersResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryRoleManagersResponse",
  is(o: any): o is QueryRoleManagersResponse {
    return o && (o.$typeUrl === QueryRoleManagersResponse.typeUrl || Array.isArray(o.roleManagers) && (!o.roleManagers.length || RoleManager.is(o.roleManagers[0])));
  },
  isAmino(o: any): o is QueryRoleManagersResponseAmino {
    return o && (o.$typeUrl === QueryRoleManagersResponse.typeUrl || Array.isArray(o.role_managers) && (!o.role_managers.length || RoleManager.isAmino(o.role_managers[0])));
  },
  encode(message: QueryRoleManagersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.roleManagers) {
      RoleManager.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRoleManagersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoleManagersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleManagers.push(RoleManager.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRoleManagersResponse>): QueryRoleManagersResponse {
    const message = createBaseQueryRoleManagersResponse();
    message.roleManagers = object.roleManagers?.map(e => RoleManager.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRoleManagersResponseAmino): QueryRoleManagersResponse {
    const message = createBaseQueryRoleManagersResponse();
    message.roleManagers = object.role_managers?.map(e => RoleManager.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRoleManagersResponse): QueryRoleManagersResponseAmino {
    const obj: any = {};
    if (message.roleManagers) {
      obj.role_managers = message.roleManagers.map(e => e ? RoleManager.toAmino(e) : undefined);
    } else {
      obj.role_managers = message.roleManagers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRoleManagersResponseAminoMsg): QueryRoleManagersResponse {
    return QueryRoleManagersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoleManagersResponseProtoMsg): QueryRoleManagersResponse {
    return QueryRoleManagersResponse.decode(message.value);
  },
  toProto(message: QueryRoleManagersResponse): Uint8Array {
    return QueryRoleManagersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRoleManagersResponse): QueryRoleManagersResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryRoleManagersResponse",
      value: QueryRoleManagersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRoleManagersResponse.typeUrl)) {
      return;
    }
    RoleManager.registerTypeUrl();
  }
};
function createBaseQueryRoleManagerRequest(): QueryRoleManagerRequest {
  return {
    denom: "",
    manager: ""
  };
}
/**
 * QueryRoleManagerRequest is the request type for the Query/RoleManager
 * RPC method.
 * @name QueryRoleManagerRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagerRequest
 */
export const QueryRoleManagerRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryRoleManagerRequest",
  is(o: any): o is QueryRoleManagerRequest {
    return o && (o.$typeUrl === QueryRoleManagerRequest.typeUrl || typeof o.denom === "string" && typeof o.manager === "string");
  },
  isAmino(o: any): o is QueryRoleManagerRequestAmino {
    return o && (o.$typeUrl === QueryRoleManagerRequest.typeUrl || typeof o.denom === "string" && typeof o.manager === "string");
  },
  encode(message: QueryRoleManagerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.manager !== "") {
      writer.uint32(18).string(message.manager);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRoleManagerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoleManagerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.manager = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRoleManagerRequest>): QueryRoleManagerRequest {
    const message = createBaseQueryRoleManagerRequest();
    message.denom = object.denom ?? "";
    message.manager = object.manager ?? "";
    return message;
  },
  fromAmino(object: QueryRoleManagerRequestAmino): QueryRoleManagerRequest {
    const message = createBaseQueryRoleManagerRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.manager !== undefined && object.manager !== null) {
      message.manager = object.manager;
    }
    return message;
  },
  toAmino(message: QueryRoleManagerRequest): QueryRoleManagerRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.manager = message.manager === "" ? undefined : message.manager;
    return obj;
  },
  fromAminoMsg(object: QueryRoleManagerRequestAminoMsg): QueryRoleManagerRequest {
    return QueryRoleManagerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoleManagerRequestProtoMsg): QueryRoleManagerRequest {
    return QueryRoleManagerRequest.decode(message.value);
  },
  toProto(message: QueryRoleManagerRequest): Uint8Array {
    return QueryRoleManagerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRoleManagerRequest): QueryRoleManagerRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryRoleManagerRequest",
      value: QueryRoleManagerRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRoleManagerResponse(): QueryRoleManagerResponse {
  return {
    roleManager: undefined
  };
}
/**
 * QueryRoleManagerResponse is the response type for the
 * Query/RoleManager RPC method.
 * @name QueryRoleManagerResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryRoleManagerResponse
 */
export const QueryRoleManagerResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryRoleManagerResponse",
  is(o: any): o is QueryRoleManagerResponse {
    return o && o.$typeUrl === QueryRoleManagerResponse.typeUrl;
  },
  isAmino(o: any): o is QueryRoleManagerResponseAmino {
    return o && o.$typeUrl === QueryRoleManagerResponse.typeUrl;
  },
  encode(message: QueryRoleManagerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.roleManager !== undefined) {
      RoleManager.encode(message.roleManager, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRoleManagerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRoleManagerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roleManager = RoleManager.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRoleManagerResponse>): QueryRoleManagerResponse {
    const message = createBaseQueryRoleManagerResponse();
    message.roleManager = object.roleManager !== undefined && object.roleManager !== null ? RoleManager.fromPartial(object.roleManager) : undefined;
    return message;
  },
  fromAmino(object: QueryRoleManagerResponseAmino): QueryRoleManagerResponse {
    const message = createBaseQueryRoleManagerResponse();
    if (object.role_manager !== undefined && object.role_manager !== null) {
      message.roleManager = RoleManager.fromAmino(object.role_manager);
    }
    return message;
  },
  toAmino(message: QueryRoleManagerResponse): QueryRoleManagerResponseAmino {
    const obj: any = {};
    obj.role_manager = message.roleManager ? RoleManager.toAmino(message.roleManager) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRoleManagerResponseAminoMsg): QueryRoleManagerResponse {
    return QueryRoleManagerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRoleManagerResponseProtoMsg): QueryRoleManagerResponse {
    return QueryRoleManagerResponse.decode(message.value);
  },
  toProto(message: QueryRoleManagerResponse): Uint8Array {
    return QueryRoleManagerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRoleManagerResponse): QueryRoleManagerResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryRoleManagerResponse",
      value: QueryRoleManagerResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRoleManagerResponse.typeUrl)) {
      return;
    }
    RoleManager.registerTypeUrl();
  }
};
function createBaseQueryPolicyStatusesRequest(): QueryPolicyStatusesRequest {
  return {
    denom: ""
  };
}
/**
 * QueryPolicyStatusesRequest is the request type for the Query/PolicyStatuses
 * RPC method.
 * @name QueryPolicyStatusesRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyStatusesRequest
 */
export const QueryPolicyStatusesRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryPolicyStatusesRequest",
  is(o: any): o is QueryPolicyStatusesRequest {
    return o && (o.$typeUrl === QueryPolicyStatusesRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryPolicyStatusesRequestAmino {
    return o && (o.$typeUrl === QueryPolicyStatusesRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryPolicyStatusesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPolicyStatusesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyStatusesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPolicyStatusesRequest>): QueryPolicyStatusesRequest {
    const message = createBaseQueryPolicyStatusesRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryPolicyStatusesRequestAmino): QueryPolicyStatusesRequest {
    const message = createBaseQueryPolicyStatusesRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryPolicyStatusesRequest): QueryPolicyStatusesRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryPolicyStatusesRequestAminoMsg): QueryPolicyStatusesRequest {
    return QueryPolicyStatusesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyStatusesRequestProtoMsg): QueryPolicyStatusesRequest {
    return QueryPolicyStatusesRequest.decode(message.value);
  },
  toProto(message: QueryPolicyStatusesRequest): Uint8Array {
    return QueryPolicyStatusesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyStatusesRequest): QueryPolicyStatusesRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryPolicyStatusesRequest",
      value: QueryPolicyStatusesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPolicyStatusesResponse(): QueryPolicyStatusesResponse {
  return {
    policyStatuses: []
  };
}
/**
 * QueryRoleManagerResponse is the response type for the
 * Query/RoleManager RPC method.
 * @name QueryPolicyStatusesResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyStatusesResponse
 */
export const QueryPolicyStatusesResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryPolicyStatusesResponse",
  is(o: any): o is QueryPolicyStatusesResponse {
    return o && (o.$typeUrl === QueryPolicyStatusesResponse.typeUrl || Array.isArray(o.policyStatuses) && (!o.policyStatuses.length || PolicyStatus.is(o.policyStatuses[0])));
  },
  isAmino(o: any): o is QueryPolicyStatusesResponseAmino {
    return o && (o.$typeUrl === QueryPolicyStatusesResponse.typeUrl || Array.isArray(o.policy_statuses) && (!o.policy_statuses.length || PolicyStatus.isAmino(o.policy_statuses[0])));
  },
  encode(message: QueryPolicyStatusesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.policyStatuses) {
      PolicyStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPolicyStatusesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyStatusesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyStatuses.push(PolicyStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPolicyStatusesResponse>): QueryPolicyStatusesResponse {
    const message = createBaseQueryPolicyStatusesResponse();
    message.policyStatuses = object.policyStatuses?.map(e => PolicyStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPolicyStatusesResponseAmino): QueryPolicyStatusesResponse {
    const message = createBaseQueryPolicyStatusesResponse();
    message.policyStatuses = object.policy_statuses?.map(e => PolicyStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPolicyStatusesResponse): QueryPolicyStatusesResponseAmino {
    const obj: any = {};
    if (message.policyStatuses) {
      obj.policy_statuses = message.policyStatuses.map(e => e ? PolicyStatus.toAmino(e) : undefined);
    } else {
      obj.policy_statuses = message.policyStatuses;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPolicyStatusesResponseAminoMsg): QueryPolicyStatusesResponse {
    return QueryPolicyStatusesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyStatusesResponseProtoMsg): QueryPolicyStatusesResponse {
    return QueryPolicyStatusesResponse.decode(message.value);
  },
  toProto(message: QueryPolicyStatusesResponse): Uint8Array {
    return QueryPolicyStatusesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyStatusesResponse): QueryPolicyStatusesResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryPolicyStatusesResponse",
      value: QueryPolicyStatusesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPolicyStatusesResponse.typeUrl)) {
      return;
    }
    PolicyStatus.registerTypeUrl();
  }
};
function createBaseQueryPolicyManagerCapabilitiesRequest(): QueryPolicyManagerCapabilitiesRequest {
  return {
    denom: ""
  };
}
/**
 * QueryPolicyManagerCapabilitiesRequest is the request type for the
 * Query/PolicyManagerCapabilities RPC method.
 * @name QueryPolicyManagerCapabilitiesRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesRequest
 */
export const QueryPolicyManagerCapabilitiesRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesRequest",
  is(o: any): o is QueryPolicyManagerCapabilitiesRequest {
    return o && (o.$typeUrl === QueryPolicyManagerCapabilitiesRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryPolicyManagerCapabilitiesRequestAmino {
    return o && (o.$typeUrl === QueryPolicyManagerCapabilitiesRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryPolicyManagerCapabilitiesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPolicyManagerCapabilitiesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyManagerCapabilitiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPolicyManagerCapabilitiesRequest>): QueryPolicyManagerCapabilitiesRequest {
    const message = createBaseQueryPolicyManagerCapabilitiesRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryPolicyManagerCapabilitiesRequestAmino): QueryPolicyManagerCapabilitiesRequest {
    const message = createBaseQueryPolicyManagerCapabilitiesRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryPolicyManagerCapabilitiesRequest): QueryPolicyManagerCapabilitiesRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryPolicyManagerCapabilitiesRequestAminoMsg): QueryPolicyManagerCapabilitiesRequest {
    return QueryPolicyManagerCapabilitiesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyManagerCapabilitiesRequestProtoMsg): QueryPolicyManagerCapabilitiesRequest {
    return QueryPolicyManagerCapabilitiesRequest.decode(message.value);
  },
  toProto(message: QueryPolicyManagerCapabilitiesRequest): Uint8Array {
    return QueryPolicyManagerCapabilitiesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyManagerCapabilitiesRequest): QueryPolicyManagerCapabilitiesRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesRequest",
      value: QueryPolicyManagerCapabilitiesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryPolicyManagerCapabilitiesResponse(): QueryPolicyManagerCapabilitiesResponse {
  return {
    policyManagerCapabilities: []
  };
}
/**
 * QueryPolicyManagerCapabilitiesResponse is the response type for the
 * Query/PolicyManagerCapabilities RPC method.
 * @name QueryPolicyManagerCapabilitiesResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesResponse
 */
export const QueryPolicyManagerCapabilitiesResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesResponse",
  is(o: any): o is QueryPolicyManagerCapabilitiesResponse {
    return o && (o.$typeUrl === QueryPolicyManagerCapabilitiesResponse.typeUrl || Array.isArray(o.policyManagerCapabilities) && (!o.policyManagerCapabilities.length || PolicyManagerCapability.is(o.policyManagerCapabilities[0])));
  },
  isAmino(o: any): o is QueryPolicyManagerCapabilitiesResponseAmino {
    return o && (o.$typeUrl === QueryPolicyManagerCapabilitiesResponse.typeUrl || Array.isArray(o.policy_manager_capabilities) && (!o.policy_manager_capabilities.length || PolicyManagerCapability.isAmino(o.policy_manager_capabilities[0])));
  },
  encode(message: QueryPolicyManagerCapabilitiesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.policyManagerCapabilities) {
      PolicyManagerCapability.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPolicyManagerCapabilitiesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPolicyManagerCapabilitiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policyManagerCapabilities.push(PolicyManagerCapability.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPolicyManagerCapabilitiesResponse>): QueryPolicyManagerCapabilitiesResponse {
    const message = createBaseQueryPolicyManagerCapabilitiesResponse();
    message.policyManagerCapabilities = object.policyManagerCapabilities?.map(e => PolicyManagerCapability.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPolicyManagerCapabilitiesResponseAmino): QueryPolicyManagerCapabilitiesResponse {
    const message = createBaseQueryPolicyManagerCapabilitiesResponse();
    message.policyManagerCapabilities = object.policy_manager_capabilities?.map(e => PolicyManagerCapability.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPolicyManagerCapabilitiesResponse): QueryPolicyManagerCapabilitiesResponseAmino {
    const obj: any = {};
    if (message.policyManagerCapabilities) {
      obj.policy_manager_capabilities = message.policyManagerCapabilities.map(e => e ? PolicyManagerCapability.toAmino(e) : undefined);
    } else {
      obj.policy_manager_capabilities = message.policyManagerCapabilities;
    }
    return obj;
  },
  fromAminoMsg(object: QueryPolicyManagerCapabilitiesResponseAminoMsg): QueryPolicyManagerCapabilitiesResponse {
    return QueryPolicyManagerCapabilitiesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPolicyManagerCapabilitiesResponseProtoMsg): QueryPolicyManagerCapabilitiesResponse {
    return QueryPolicyManagerCapabilitiesResponse.decode(message.value);
  },
  toProto(message: QueryPolicyManagerCapabilitiesResponse): Uint8Array {
    return QueryPolicyManagerCapabilitiesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPolicyManagerCapabilitiesResponse): QueryPolicyManagerCapabilitiesResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryPolicyManagerCapabilitiesResponse",
      value: QueryPolicyManagerCapabilitiesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryPolicyManagerCapabilitiesResponse.typeUrl)) {
      return;
    }
    PolicyManagerCapability.registerTypeUrl();
  }
};
function createBaseQueryVouchersRequest(): QueryVouchersRequest {
  return {
    denom: ""
  };
}
/**
 * @name QueryVouchersRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVouchersRequest
 */
export const QueryVouchersRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryVouchersRequest",
  is(o: any): o is QueryVouchersRequest {
    return o && (o.$typeUrl === QueryVouchersRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryVouchersRequestAmino {
    return o && (o.$typeUrl === QueryVouchersRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryVouchersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVouchersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVouchersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVouchersRequest>): QueryVouchersRequest {
    const message = createBaseQueryVouchersRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryVouchersRequestAmino): QueryVouchersRequest {
    const message = createBaseQueryVouchersRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryVouchersRequest): QueryVouchersRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryVouchersRequestAminoMsg): QueryVouchersRequest {
    return QueryVouchersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVouchersRequestProtoMsg): QueryVouchersRequest {
    return QueryVouchersRequest.decode(message.value);
  },
  toProto(message: QueryVouchersRequest): Uint8Array {
    return QueryVouchersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVouchersRequest): QueryVouchersRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryVouchersRequest",
      value: QueryVouchersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryVouchersResponse(): QueryVouchersResponse {
  return {
    vouchers: []
  };
}
/**
 * @name QueryVouchersResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVouchersResponse
 */
export const QueryVouchersResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryVouchersResponse",
  is(o: any): o is QueryVouchersResponse {
    return o && (o.$typeUrl === QueryVouchersResponse.typeUrl || Array.isArray(o.vouchers) && (!o.vouchers.length || AddressVoucher.is(o.vouchers[0])));
  },
  isAmino(o: any): o is QueryVouchersResponseAmino {
    return o && (o.$typeUrl === QueryVouchersResponse.typeUrl || Array.isArray(o.vouchers) && (!o.vouchers.length || AddressVoucher.isAmino(o.vouchers[0])));
  },
  encode(message: QueryVouchersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vouchers) {
      AddressVoucher.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVouchersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVouchersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vouchers.push(AddressVoucher.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVouchersResponse>): QueryVouchersResponse {
    const message = createBaseQueryVouchersResponse();
    message.vouchers = object.vouchers?.map(e => AddressVoucher.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryVouchersResponseAmino): QueryVouchersResponse {
    const message = createBaseQueryVouchersResponse();
    message.vouchers = object.vouchers?.map(e => AddressVoucher.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryVouchersResponse): QueryVouchersResponseAmino {
    const obj: any = {};
    if (message.vouchers) {
      obj.vouchers = message.vouchers.map(e => e ? AddressVoucher.toAmino(e) : undefined);
    } else {
      obj.vouchers = message.vouchers;
    }
    return obj;
  },
  fromAminoMsg(object: QueryVouchersResponseAminoMsg): QueryVouchersResponse {
    return QueryVouchersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVouchersResponseProtoMsg): QueryVouchersResponse {
    return QueryVouchersResponse.decode(message.value);
  },
  toProto(message: QueryVouchersResponse): Uint8Array {
    return QueryVouchersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVouchersResponse): QueryVouchersResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryVouchersResponse",
      value: QueryVouchersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryVouchersResponse.typeUrl)) {
      return;
    }
    AddressVoucher.registerTypeUrl();
  }
};
function createBaseQueryVoucherRequest(): QueryVoucherRequest {
  return {
    denom: "",
    address: ""
  };
}
/**
 * @name QueryVoucherRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVoucherRequest
 */
export const QueryVoucherRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryVoucherRequest",
  is(o: any): o is QueryVoucherRequest {
    return o && (o.$typeUrl === QueryVoucherRequest.typeUrl || typeof o.denom === "string" && typeof o.address === "string");
  },
  isAmino(o: any): o is QueryVoucherRequestAmino {
    return o && (o.$typeUrl === QueryVoucherRequest.typeUrl || typeof o.denom === "string" && typeof o.address === "string");
  },
  encode(message: QueryVoucherRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoucherRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoucherRequest();
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
  fromPartial(object: DeepPartial<QueryVoucherRequest>): QueryVoucherRequest {
    const message = createBaseQueryVoucherRequest();
    message.denom = object.denom ?? "";
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryVoucherRequestAmino): QueryVoucherRequest {
    const message = createBaseQueryVoucherRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryVoucherRequest): QueryVoucherRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryVoucherRequestAminoMsg): QueryVoucherRequest {
    return QueryVoucherRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoucherRequestProtoMsg): QueryVoucherRequest {
    return QueryVoucherRequest.decode(message.value);
  },
  toProto(message: QueryVoucherRequest): Uint8Array {
    return QueryVoucherRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoucherRequest): QueryVoucherRequestProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryVoucherRequest",
      value: QueryVoucherRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryVoucherResponse(): QueryVoucherResponse {
  return {
    voucher: Coin.fromPartial({})
  };
}
/**
 * @name QueryVoucherResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryVoucherResponse
 */
export const QueryVoucherResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryVoucherResponse",
  is(o: any): o is QueryVoucherResponse {
    return o && (o.$typeUrl === QueryVoucherResponse.typeUrl || Coin.is(o.voucher));
  },
  isAmino(o: any): o is QueryVoucherResponseAmino {
    return o && (o.$typeUrl === QueryVoucherResponse.typeUrl || Coin.isAmino(o.voucher));
  },
  encode(message: QueryVoucherResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voucher !== undefined) {
      Coin.encode(message.voucher, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoucherResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoucherResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voucher = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVoucherResponse>): QueryVoucherResponse {
    const message = createBaseQueryVoucherResponse();
    message.voucher = object.voucher !== undefined && object.voucher !== null ? Coin.fromPartial(object.voucher) : undefined;
    return message;
  },
  fromAmino(object: QueryVoucherResponseAmino): QueryVoucherResponse {
    const message = createBaseQueryVoucherResponse();
    if (object.voucher !== undefined && object.voucher !== null) {
      message.voucher = Coin.fromAmino(object.voucher);
    }
    return message;
  },
  toAmino(message: QueryVoucherResponse): QueryVoucherResponseAmino {
    const obj: any = {};
    obj.voucher = message.voucher ? Coin.toAmino(message.voucher) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoucherResponseAminoMsg): QueryVoucherResponse {
    return QueryVoucherResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoucherResponseProtoMsg): QueryVoucherResponse {
    return QueryVoucherResponse.decode(message.value);
  },
  toProto(message: QueryVoucherResponse): Uint8Array {
    return QueryVoucherResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoucherResponse): QueryVoucherResponseProtoMsg {
    return {
      typeUrl: "/injective.permissions.v1beta1.QueryVoucherResponse",
      value: QueryVoucherResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryVoucherResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryModuleStateRequest(): QueryModuleStateRequest {
  return {};
}
/**
 * QueryModuleStateRequest is the request type for the
 * Query/PermissionsModuleState RPC method.
 * @name QueryModuleStateRequest
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryModuleStateRequest
 */
export const QueryModuleStateRequest = {
  typeUrl: "/injective.permissions.v1beta1.QueryModuleStateRequest",
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
      typeUrl: "/injective.permissions.v1beta1.QueryModuleStateRequest",
      value: QueryModuleStateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryModuleStateResponse(): QueryModuleStateResponse {
  return {
    state: undefined
  };
}
/**
 * QueryModuleStateResponse is the response type for the
 * Query/PermissionsModuleState RPC method.
 * @name QueryModuleStateResponse
 * @package injective.permissions.v1beta1
 * @see proto type: injective.permissions.v1beta1.QueryModuleStateResponse
 */
export const QueryModuleStateResponse = {
  typeUrl: "/injective.permissions.v1beta1.QueryModuleStateResponse",
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
      typeUrl: "/injective.permissions.v1beta1.QueryModuleStateResponse",
      value: QueryModuleStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryModuleStateResponse.typeUrl)) {
      return;
    }
    GenesisState.registerTypeUrl();
  }
};