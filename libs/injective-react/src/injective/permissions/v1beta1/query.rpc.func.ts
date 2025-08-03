import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryNamespaceDenomsRequest, QueryNamespaceDenomsResponse, QueryNamespacesRequest, QueryNamespacesResponse, QueryNamespaceRequest, QueryNamespaceResponse, QueryRolesByActorRequest, QueryRolesByActorResponse, QueryActorsByRoleRequest, QueryActorsByRoleResponse, QueryRoleManagersRequest, QueryRoleManagersResponse, QueryRoleManagerRequest, QueryRoleManagerResponse, QueryPolicyStatusesRequest, QueryPolicyStatusesResponse, QueryPolicyManagerCapabilitiesRequest, QueryPolicyManagerCapabilitiesResponse, QueryVouchersRequest, QueryVouchersResponse, QueryVoucherRequest, QueryVoucherResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
/**
 * Params defines a gRPC query method that returns the permissions module's
 * parameters.
 * @name getParams
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * NamespaceDenoms defines a gRPC query method that returns the denoms for
 * which a namespace exists
 * @name getNamespaceDenoms
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.NamespaceDenoms
 */
export const getNamespaceDenoms = buildQuery<QueryNamespaceDenomsRequest, QueryNamespaceDenomsResponse>({
  encode: QueryNamespaceDenomsRequest.encode,
  decode: QueryNamespaceDenomsResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "NamespaceDenoms",
  deps: [QueryNamespaceDenomsRequest, QueryNamespaceDenomsResponse]
});
/**
 * Namespaces defines a gRPC query method that returns the permissions
 * module's created namespaces.
 * @name getNamespaces
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Namespaces
 */
export const getNamespaces = buildQuery<QueryNamespacesRequest, QueryNamespacesResponse>({
  encode: QueryNamespacesRequest.encode,
  decode: QueryNamespacesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "Namespaces",
  deps: [QueryNamespacesRequest, QueryNamespacesResponse]
});
/**
 * Namespace defines a gRPC query method that returns the permissions
 * module's namespace associated with the provided denom.
 * @name getNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Namespace
 */
export const getNamespace = buildQuery<QueryNamespaceRequest, QueryNamespaceResponse>({
  encode: QueryNamespaceRequest.encode,
  decode: QueryNamespaceResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "Namespace",
  deps: [QueryNamespaceRequest, QueryNamespaceResponse]
});
/**
 * RolesByActor defines a gRPC query method that returns roles for the actor
 * in the namespace
 * @name getRolesByActor
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.RolesByActor
 */
export const getRolesByActor = buildQuery<QueryRolesByActorRequest, QueryRolesByActorResponse>({
  encode: QueryRolesByActorRequest.encode,
  decode: QueryRolesByActorResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "RolesByActor",
  deps: [QueryRolesByActorRequest, QueryRolesByActorResponse]
});
/**
 * ActorsByRole defines a gRPC query method that returns a namespace's roles
 * associated with the provided actor.
 * @name getActorsByRole
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.ActorsByRole
 */
export const getActorsByRole = buildQuery<QueryActorsByRoleRequest, QueryActorsByRoleResponse>({
  encode: QueryActorsByRoleRequest.encode,
  decode: QueryActorsByRoleResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "ActorsByRole",
  deps: [QueryActorsByRoleRequest, QueryActorsByRoleResponse]
});
/**
 * RoleManagers defines a gRPC query method that returns a namespace's role
 * managers
 * @name getRoleManagers
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.RoleManagers
 */
export const getRoleManagers = buildQuery<QueryRoleManagersRequest, QueryRoleManagersResponse>({
  encode: QueryRoleManagersRequest.encode,
  decode: QueryRoleManagersResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "RoleManagers",
  deps: [QueryRoleManagersRequest, QueryRoleManagersResponse]
});
/**
 * RoleManager defines a gRPC query method that returns the roles a given role
 * manager manages for a given namespace
 * @name getRoleManager
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.RoleManager
 */
export const getRoleManager = buildQuery<QueryRoleManagerRequest, QueryRoleManagerResponse>({
  encode: QueryRoleManagerRequest.encode,
  decode: QueryRoleManagerResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "RoleManager",
  deps: [QueryRoleManagerRequest, QueryRoleManagerResponse]
});
/**
 * PolicyStatuses defines a gRPC query method that returns a namespace's
 * policy statuses
 * @name getPolicyStatuses
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.PolicyStatuses
 */
export const getPolicyStatuses = buildQuery<QueryPolicyStatusesRequest, QueryPolicyStatusesResponse>({
  encode: QueryPolicyStatusesRequest.encode,
  decode: QueryPolicyStatusesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "PolicyStatuses",
  deps: [QueryPolicyStatusesRequest, QueryPolicyStatusesResponse]
});
/**
 * PolicyManagerCapabilities defines a gRPC query method that returns a
 * namespace's policy manager capabilities
 * @name getPolicyManagerCapabilities
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.PolicyManagerCapabilities
 */
export const getPolicyManagerCapabilities = buildQuery<QueryPolicyManagerCapabilitiesRequest, QueryPolicyManagerCapabilitiesResponse>({
  encode: QueryPolicyManagerCapabilitiesRequest.encode,
  decode: QueryPolicyManagerCapabilitiesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "PolicyManagerCapabilities",
  deps: [QueryPolicyManagerCapabilitiesRequest, QueryPolicyManagerCapabilitiesResponse]
});
/**
 * Vouchers defines a gRPC query method for the vouchers for a given denom
 * @name getVouchers
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Vouchers
 */
export const getVouchers = buildQuery<QueryVouchersRequest, QueryVouchersResponse>({
  encode: QueryVouchersRequest.encode,
  decode: QueryVouchersResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "Vouchers",
  deps: [QueryVouchersRequest, QueryVouchersResponse]
});
/**
 * Voucher defines a gRPC query method for the vouchers for a given denom and
 * address
 * @name getVoucher
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Voucher
 */
export const getVoucher = buildQuery<QueryVoucherRequest, QueryVoucherResponse>({
  encode: QueryVoucherRequest.encode,
  decode: QueryVoucherResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "Voucher",
  deps: [QueryVoucherRequest, QueryVoucherResponse]
});
/**
 * Retrieves the entire permissions module's state
 * @name getPermissionsModuleState
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.PermissionsModuleState
 */
export const getPermissionsModuleState = buildQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  encode: QueryModuleStateRequest.encode,
  decode: QueryModuleStateResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "PermissionsModuleState",
  deps: [QueryModuleStateRequest, QueryModuleStateResponse]
});