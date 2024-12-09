import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetAllNamespaces = (clientResolver?: RpcResolver) => buildQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  encode: QueryAllNamespacesRequest.encode,
  decode: QueryAllNamespacesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AllNamespaces",
  clientResolver
});
export const useGetAllNamespaces = buildUseQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  builderQueryFn: createGetAllNamespaces,
  queryKeyPrefix: "AllNamespacesQuery"
});
export const createGetNamespaceByDenom = (clientResolver?: RpcResolver) => buildQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  encode: QueryNamespaceByDenomRequest.encode,
  decode: QueryNamespaceByDenomResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "NamespaceByDenom",
  clientResolver
});
export const useGetNamespaceByDenom = buildUseQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  builderQueryFn: createGetNamespaceByDenom,
  queryKeyPrefix: "NamespaceByDenomQuery"
});
export const createGetAddressRoles = (clientResolver?: RpcResolver) => buildQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  encode: QueryAddressRolesRequest.encode,
  decode: QueryAddressRolesResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AddressRoles",
  clientResolver
});
export const useGetAddressRoles = buildUseQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  builderQueryFn: createGetAddressRoles,
  queryKeyPrefix: "AddressRolesQuery"
});
export const createGetAddressesByRole = (clientResolver?: RpcResolver) => buildQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  encode: QueryAddressesByRoleRequest.encode,
  decode: QueryAddressesByRoleResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "AddressesByRole",
  clientResolver
});
export const useGetAddressesByRole = buildUseQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  builderQueryFn: createGetAddressesByRole,
  queryKeyPrefix: "AddressesByRoleQuery"
});
export const createGetVouchersForAddress = (clientResolver?: RpcResolver) => buildQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  encode: QueryVouchersForAddressRequest.encode,
  decode: QueryVouchersForAddressResponse.decode,
  service: "injective.permissions.v1beta1.Query",
  method: "VouchersForAddress",
  clientResolver
});
export const useGetVouchersForAddress = buildUseQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  builderQueryFn: createGetVouchersForAddress,
  queryKeyPrefix: "VouchersForAddressQuery"
});