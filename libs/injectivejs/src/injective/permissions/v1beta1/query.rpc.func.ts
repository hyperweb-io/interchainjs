import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const getAllNamespaces = buildQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  encode: QueryAllNamespacesRequest.encode,
  decode: QueryAllNamespacesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AllNamespaces",
  deps: [QueryAllNamespacesRequest, QueryAllNamespacesResponse]
});
export const getNamespaceByDenom = buildQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  encode: QueryNamespaceByDenomRequest.encode,
  decode: QueryNamespaceByDenomResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "NamespaceByDenom",
  deps: [QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse]
});
export const getAddressRoles = buildQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  encode: QueryAddressRolesRequest.encode,
  decode: QueryAddressRolesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AddressRoles",
  deps: [QueryAddressRolesRequest, QueryAddressRolesResponse]
});
export const getAddressesByRole = buildQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  encode: QueryAddressesByRoleRequest.encode,
  decode: QueryAddressesByRoleResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AddressesByRole",
  deps: [QueryAddressesByRoleRequest, QueryAddressesByRoleResponse]
});
export const getVouchersForAddress = buildQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  encode: QueryVouchersForAddressRequest.encode,
  decode: QueryVouchersForAddressResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "VouchersForAddress",
  deps: [QueryVouchersForAddressRequest, QueryVouchersForAddressResponse]
});