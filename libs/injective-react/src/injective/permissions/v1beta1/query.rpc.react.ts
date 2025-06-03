import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
import { getParams, getAllNamespaces, getNamespaceByDenom, getAddressRoles, getAddressesByRole, getVouchersForAddress } from "./query.rpc.func";
/* Params defines a gRPC query method that returns the permissions module's
 parameters. */
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* AllNamespaces defines a gRPC query method that returns the permissions
 module's created namespaces. */
export const useGetAllNamespaces = buildUseQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  builderQueryFn: getAllNamespaces,
  queryKeyPrefix: "AllNamespacesQuery"
});
/* NamespaceByDenom defines a gRPC query method that returns the permissions
 module's namespace associated with the provided denom. */
export const useGetNamespaceByDenom = buildUseQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  builderQueryFn: getNamespaceByDenom,
  queryKeyPrefix: "NamespaceByDenomQuery"
});
/* AddressRoles defines a gRPC query method that returns address roles in the
 namespace */
export const useGetAddressRoles = buildUseQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  builderQueryFn: getAddressRoles,
  queryKeyPrefix: "AddressRolesQuery"
});
/* AddressesByRole defines a gRPC query method that returns a namespace's
 roles associated with the provided address. */
export const useGetAddressesByRole = buildUseQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  builderQueryFn: getAddressesByRole,
  queryKeyPrefix: "AddressesByRoleQuery"
});
/* VouchersForAddress defines a gRPC query method that returns a map of
 vouchers that are held by permissions module for this address, keyed by the
 originator address */
export const useGetVouchersForAddress = buildUseQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  builderQueryFn: getVouchersForAddress,
  queryKeyPrefix: "VouchersForAddressQuery"
});