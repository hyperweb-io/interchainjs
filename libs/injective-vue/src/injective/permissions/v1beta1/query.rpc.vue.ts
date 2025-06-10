import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryNamespaceDenomsRequest, QueryNamespaceDenomsResponse, QueryNamespacesRequest, QueryNamespacesResponse, QueryNamespaceRequest, QueryNamespaceResponse, QueryRolesByActorRequest, QueryRolesByActorResponse, QueryActorsByRoleRequest, QueryActorsByRoleResponse, QueryRoleManagersRequest, QueryRoleManagersResponse, QueryRoleManagerRequest, QueryRoleManagerResponse, QueryPolicyStatusesRequest, QueryPolicyStatusesResponse, QueryPolicyManagerCapabilitiesRequest, QueryPolicyManagerCapabilitiesResponse, QueryVouchersRequest, QueryVouchersResponse, QueryVoucherRequest, QueryVoucherResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getParams, getNamespaceDenoms, getNamespaces, getNamespace, getRolesByActor, getActorsByRole, getRoleManagers, getRoleManager, getPolicyStatuses, getPolicyManagerCapabilities, getVouchers, getVoucher, getPermissionsModuleState } from "./query.rpc.func";
/**
 * Params defines a gRPC query method that returns the permissions module's
 * parameters.
 * @name useGetParams
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Params
 */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * NamespaceDenoms defines a gRPC query method that returns the denoms for
 * which a namespace exists
 * @name useGetNamespaceDenoms
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.NamespaceDenoms
 */
export const useGetNamespaceDenoms = buildUseVueQuery<QueryNamespaceDenomsRequest, QueryNamespaceDenomsResponse>({
  builderQueryFn: getNamespaceDenoms,
  queryKeyPrefix: "NamespaceDenomsQuery"
});
/**
 * Namespaces defines a gRPC query method that returns the permissions
 * module's created namespaces.
 * @name useGetNamespaces
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Namespaces
 */
export const useGetNamespaces = buildUseVueQuery<QueryNamespacesRequest, QueryNamespacesResponse>({
  builderQueryFn: getNamespaces,
  queryKeyPrefix: "NamespacesQuery"
});
/**
 * Namespace defines a gRPC query method that returns the permissions
 * module's namespace associated with the provided denom.
 * @name useGetNamespace
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Namespace
 */
export const useGetNamespace = buildUseVueQuery<QueryNamespaceRequest, QueryNamespaceResponse>({
  builderQueryFn: getNamespace,
  queryKeyPrefix: "NamespaceQuery"
});
/**
 * RolesByActor defines a gRPC query method that returns roles for the actor
 * in the namespace
 * @name useGetRolesByActor
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.RolesByActor
 */
export const useGetRolesByActor = buildUseVueQuery<QueryRolesByActorRequest, QueryRolesByActorResponse>({
  builderQueryFn: getRolesByActor,
  queryKeyPrefix: "RolesByActorQuery"
});
/**
 * ActorsByRole defines a gRPC query method that returns a namespace's roles
 * associated with the provided actor.
 * @name useGetActorsByRole
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.ActorsByRole
 */
export const useGetActorsByRole = buildUseVueQuery<QueryActorsByRoleRequest, QueryActorsByRoleResponse>({
  builderQueryFn: getActorsByRole,
  queryKeyPrefix: "ActorsByRoleQuery"
});
/**
 * RoleManagers defines a gRPC query method that returns a namespace's role
 * managers
 * @name useGetRoleManagers
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.RoleManagers
 */
export const useGetRoleManagers = buildUseVueQuery<QueryRoleManagersRequest, QueryRoleManagersResponse>({
  builderQueryFn: getRoleManagers,
  queryKeyPrefix: "RoleManagersQuery"
});
/**
 * RoleManager defines a gRPC query method that returns the roles a given role
 * manager manages for a given namespace
 * @name useGetRoleManager
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.RoleManager
 */
export const useGetRoleManager = buildUseVueQuery<QueryRoleManagerRequest, QueryRoleManagerResponse>({
  builderQueryFn: getRoleManager,
  queryKeyPrefix: "RoleManagerQuery"
});
/**
 * PolicyStatuses defines a gRPC query method that returns a namespace's
 * policy statuses
 * @name useGetPolicyStatuses
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.PolicyStatuses
 */
export const useGetPolicyStatuses = buildUseVueQuery<QueryPolicyStatusesRequest, QueryPolicyStatusesResponse>({
  builderQueryFn: getPolicyStatuses,
  queryKeyPrefix: "PolicyStatusesQuery"
});
/**
 * PolicyManagerCapabilities defines a gRPC query method that returns a
 * namespace's policy manager capabilities
 * @name useGetPolicyManagerCapabilities
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.PolicyManagerCapabilities
 */
export const useGetPolicyManagerCapabilities = buildUseVueQuery<QueryPolicyManagerCapabilitiesRequest, QueryPolicyManagerCapabilitiesResponse>({
  builderQueryFn: getPolicyManagerCapabilities,
  queryKeyPrefix: "PolicyManagerCapabilitiesQuery"
});
/**
 * Vouchers defines a gRPC query method for the vouchers for a given denom
 * @name useGetVouchers
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Vouchers
 */
export const useGetVouchers = buildUseVueQuery<QueryVouchersRequest, QueryVouchersResponse>({
  builderQueryFn: getVouchers,
  queryKeyPrefix: "VouchersQuery"
});
/**
 * Voucher defines a gRPC query method for the vouchers for a given denom and
 * address
 * @name useGetVoucher
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.Voucher
 */
export const useGetVoucher = buildUseVueQuery<QueryVoucherRequest, QueryVoucherResponse>({
  builderQueryFn: getVoucher,
  queryKeyPrefix: "VoucherQuery"
});
/**
 * Retrieves the entire permissions module's state
 * @name useGetPermissionsModuleState
 * @package injective.permissions.v1beta1
 * @see proto service: injective.permissions.v1beta1.PermissionsModuleState
 */
export const useGetPermissionsModuleState = buildUseVueQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getPermissionsModuleState,
  queryKeyPrefix: "PermissionsModuleStateQuery"
});