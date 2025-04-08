import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
import { getParams, getAllNamespaces, getNamespaceByDenom, getAddressRoles, getAddressesByRole, getVouchersForAddress } from "./query.rpc.func";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetAllNamespaces = buildUseVueQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  builderQueryFn: getAllNamespaces,
  queryKeyPrefix: "AllNamespacesQuery"
});
export const useGetNamespaceByDenom = buildUseVueQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  builderQueryFn: getNamespaceByDenom,
  queryKeyPrefix: "NamespaceByDenomQuery"
});
export const useGetAddressRoles = buildUseVueQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  builderQueryFn: getAddressRoles,
  queryKeyPrefix: "AddressRolesQuery"
});
export const useGetAddressesByRole = buildUseVueQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  builderQueryFn: getAddressesByRole,
  queryKeyPrefix: "AddressesByRoleQuery"
});
export const useGetVouchersForAddress = buildUseVueQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  builderQueryFn: getVouchersForAddress,
  queryKeyPrefix: "VouchersForAddressQuery"
});