import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
import { createGetParams, createGetAllNamespaces, createGetNamespaceByDenom, createGetAddressRoles, createGetAddressesByRole, createGetVouchersForAddress } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetAllNamespaces = buildUseQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  builderQueryFn: createGetAllNamespaces,
  queryKeyPrefix: "AllNamespacesQuery"
});
export const useGetNamespaceByDenom = buildUseQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  builderQueryFn: createGetNamespaceByDenom,
  queryKeyPrefix: "NamespaceByDenomQuery"
});
export const useGetAddressRoles = buildUseQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  builderQueryFn: createGetAddressRoles,
  queryKeyPrefix: "AddressRolesQuery"
});
export const useGetAddressesByRole = buildUseQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  builderQueryFn: createGetAddressesByRole,
  queryKeyPrefix: "AddressesByRoleQuery"
});
export const useGetVouchersForAddress = buildUseQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  builderQueryFn: createGetVouchersForAddress,
  queryKeyPrefix: "VouchersForAddressQuery"
});