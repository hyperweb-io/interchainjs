import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
/* Params defines a gRPC query method that returns the permissions module's
 parameters. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/* AllNamespaces defines a gRPC query method that returns the permissions
 module's created namespaces. */
export const getAllNamespaces = buildQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  encode: QueryAllNamespacesRequest.encode,
  decode: QueryAllNamespacesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AllNamespaces",
  deps: [QueryAllNamespacesRequest, QueryAllNamespacesResponse]
});
/* NamespaceByDenom defines a gRPC query method that returns the permissions
 module's namespace associated with the provided denom. */
export const getNamespaceByDenom = buildQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  encode: QueryNamespaceByDenomRequest.encode,
  decode: QueryNamespaceByDenomResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "NamespaceByDenom",
  deps: [QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse]
});
/* AddressRoles defines a gRPC query method that returns address roles in the
 namespace */
export const getAddressRoles = buildQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  encode: QueryAddressRolesRequest.encode,
  decode: QueryAddressRolesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AddressRoles",
  deps: [QueryAddressRolesRequest, QueryAddressRolesResponse]
});
/* AddressesByRole defines a gRPC query method that returns a namespace's
 roles associated with the provided address. */
export const getAddressesByRole = buildQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  encode: QueryAddressesByRoleRequest.encode,
  decode: QueryAddressesByRoleResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AddressesByRole",
  deps: [QueryAddressesByRoleRequest, QueryAddressesByRoleResponse]
});
/* VouchersForAddress defines a gRPC query method that returns a map of
 vouchers that are held by permissions module for this address, keyed by the
 originator address */
export const getVouchersForAddress = buildQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  encode: QueryVouchersForAddressRequest.encode,
  decode: QueryVouchersForAddressResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "VouchersForAddress",
  deps: [QueryVouchersForAddressRequest, QueryVouchersForAddressResponse]
});