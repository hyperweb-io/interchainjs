import { buildUseQuery } from "../../../../react-query";
import { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection";
import { getListAllInterfaces, getListImplementations } from "./reflection.rpc.func";
export const useGetListAllInterfaces = buildUseQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  builderQueryFn: getListAllInterfaces,
  queryKeyPrefix: "ListAllInterfacesQuery"
});
export const useGetListImplementations = buildUseQuery<ListImplementationsRequest, ListImplementationsResponse>({
  builderQueryFn: getListImplementations,
  queryKeyPrefix: "ListImplementationsQuery"
});