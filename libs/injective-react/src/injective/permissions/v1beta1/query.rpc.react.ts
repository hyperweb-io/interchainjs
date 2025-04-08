import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse } from "./query";
import { getParams, getAllNamespaces, getNamespaceByDenom, getAddressRoles, getAddressesByRole, getVouchersForAddress } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetAllNamespaces = buildUseQuery<QueryAllNamespacesRequest, QueryAllNamespacesResponse>({
  builderQueryFn: getAllNamespaces,
  queryKeyPrefix: "AllNamespacesQuery"
});
export const useGetNamespaceByDenom = buildUseQuery<QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse>({
  builderQueryFn: getNamespaceByDenom,
  queryKeyPrefix: "NamespaceByDenomQuery"
});
export const useGetAddressRoles = buildUseQuery<QueryAddressRolesRequest, QueryAddressRolesResponse>({
  builderQueryFn: getAddressRoles,
  queryKeyPrefix: "AddressRolesQuery"
});
export const useGetAddressesByRole = buildUseQuery<QueryAddressesByRoleRequest, QueryAddressesByRoleResponse>({
  builderQueryFn: getAddressesByRole,
  queryKeyPrefix: "AddressesByRoleQuery"
});
export const useGetVouchersForAddress = buildUseQuery<QueryVouchersForAddressRequest, QueryVouchersForAddressResponse>({
  builderQueryFn: getVouchersForAddress,
  queryKeyPrefix: "VouchersForAddressQuery"
});