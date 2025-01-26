import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
import { createGetParams, createGetAllNamespaces, createGetNamespaceByDenom, createGetAddressRoles, createGetAddressesByRole, createGetVouchersForAddress } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetAllNamespaces = buildUseVueQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  builderQueryFn: createGetAllNamespaces,
  queryKeyPrefix: "AllNamespacesQuery"
});
export const useGetNamespaceByDenom = buildUseVueQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  builderQueryFn: createGetNamespaceByDenom,
  queryKeyPrefix: "NamespaceByDenomQuery"
});
export const useGetAddressRoles = buildUseVueQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  builderQueryFn: createGetAddressRoles,
  queryKeyPrefix: "AddressRolesQuery"
});
export const useGetAddressesByRole = buildUseVueQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  builderQueryFn: createGetAddressesByRole,
  queryKeyPrefix: "AddressesByRoleQuery"
});
export const useGetVouchersForAddress = buildUseVueQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  builderQueryFn: createGetVouchersForAddress,
  queryKeyPrefix: "VouchersForAddressQuery"
});