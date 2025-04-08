import { buildUseVueQuery } from "../../../../vue-query";
import { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection";
import { getListAllInterfaces, getListImplementations } from "./reflection.rpc.func";
export const useGetListAllInterfaces = buildUseVueQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  builderQueryFn: getListAllInterfaces,
  queryKeyPrefix: "ListAllInterfacesQuery"
});
export const useGetListImplementations = buildUseVueQuery<ListImplementationsRequest, ListImplementationsResponse>({
  builderQueryFn: getListImplementations,
  queryKeyPrefix: "ListImplementationsQuery"
});