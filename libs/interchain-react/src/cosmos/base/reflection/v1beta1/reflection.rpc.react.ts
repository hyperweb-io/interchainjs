import { buildUseQuery } from "../../../../react-query";
import { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection";
import { getListAllInterfaces, getListImplementations } from "./reflection.rpc.func";
/* ListAllInterfaces lists all the interfaces registered in the interface
 registry. */
export const useGetListAllInterfaces = buildUseQuery<ListAllInterfacesRequest, ListAllInterfacesResponse>({
  builderQueryFn: getListAllInterfaces,
  queryKeyPrefix: "ListAllInterfacesQuery"
});
/* ListImplementations list all the concrete types that implement a given
 interface. */
export const useGetListImplementations = buildUseQuery<ListImplementationsRequest, ListImplementationsResponse>({
  builderQueryFn: getListImplementations,
  queryKeyPrefix: "ListImplementationsQuery"
});