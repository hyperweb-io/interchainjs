import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "Params",
  clientResolver,
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const createGetAllNamespaces = (clientResolver?: RpcResolver) => buildQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  encode: QueryAllNamespacesRequest.encode,
  decode: QueryAllNamespacesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AllNamespaces",
  clientResolver,
  deps: [QueryAllNamespacesRequest, QueryAllNamespacesResponse]
});
export const createGetNamespaceByDenom = (clientResolver?: RpcResolver) => buildQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  encode: QueryNamespaceByDenomRequest.encode,
  decode: QueryNamespaceByDenomResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "NamespaceByDenom",
  clientResolver,
  deps: [QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse]
});
export const createGetAddressRoles = (clientResolver?: RpcResolver) => buildQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  encode: QueryAddressRolesRequest.encode,
  decode: QueryAddressRolesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AddressRoles",
  clientResolver,
  deps: [QueryAddressRolesRequest, QueryAddressRolesResponse]
});
export const createGetAddressesByRole = (clientResolver?: RpcResolver) => buildQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  encode: QueryAddressesByRoleRequest.encode,
  decode: QueryAddressesByRoleResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AddressesByRole",
  clientResolver,
  deps: [QueryAddressesByRoleRequest, QueryAddressesByRoleResponse]
});
export const createGetVouchersForAddress = (clientResolver?: RpcResolver) => buildQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  encode: QueryVouchersForAddressRequest.encode,
  decode: QueryVouchersForAddressResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "VouchersForAddress",
  clientResolver,
  deps: [QueryVouchersForAddressRequest, QueryVouchersForAddressResponse]
});