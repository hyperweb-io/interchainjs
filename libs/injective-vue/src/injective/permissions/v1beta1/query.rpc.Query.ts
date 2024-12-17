import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryAllNamespacesRequest, QueryAllNamespacesResponse, QueryNamespaceByDenomRequest, QueryNamespaceByDenomResponse, QueryAddressRolesRequest, QueryAddressRolesResponse, QueryAddressesByRoleRequest, QueryAddressesByRoleResponse, QueryVouchersForAddressRequest, QueryVouchersForAddressResponse, ReactiveQueryParamsRequest, ReactiveQueryAllNamespacesRequest, ReactiveQueryNamespaceByDenomRequest, ReactiveQueryAddressRolesRequest, ReactiveQueryAddressesByRoleRequest, ReactiveQueryVouchersForAddressRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the permissions module's
   * parameters.
   */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * AllNamespaces defines a gRPC query method that returns the permissions
   * module's created namespaces.
   */
  allNamespaces(request?: QueryAllNamespacesRequest): Promise<QueryAllNamespacesResponse>;
  /**
   * NamespaceByDenom defines a gRPC query method that returns the permissions
   * module's namespace associated with the provided denom.
   */
  namespaceByDenom(request: QueryNamespaceByDenomRequest): Promise<QueryNamespaceByDenomResponse>;
  /**
   * AddressRoles defines a gRPC query method that returns address roles in the
   * namespace
   */
  addressRoles(request: QueryAddressRolesRequest): Promise<QueryAddressRolesResponse>;
  /**
   * AddressesByRole defines a gRPC query method that returns a namespace's
   * roles associated with the provided address.
   */
  addressesByRole(request: QueryAddressesByRoleRequest): Promise<QueryAddressesByRoleResponse>;
  /**
   * VouchersForAddress defines a gRPC query method that returns a map of
   * vouchers that are held by permissions module for this address, keyed by the
   * originator address
   */
  vouchersForAddress(request: QueryVouchersForAddressRequest): Promise<QueryVouchersForAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params defines a gRPC query method that returns the permissions module's
   parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* AllNamespaces defines a gRPC query method that returns the permissions
   module's created namespaces. */
  allNamespaces = async (request: QueryAllNamespacesRequest = {}): Promise<QueryAllNamespacesResponse> => {
    const data = QueryAllNamespacesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "AllNamespaces", data);
    return promise.then(data => QueryAllNamespacesResponse.decode(new BinaryReader(data)));
  };
  /* NamespaceByDenom defines a gRPC query method that returns the permissions
   module's namespace associated with the provided denom. */
  namespaceByDenom = async (request: QueryNamespaceByDenomRequest): Promise<QueryNamespaceByDenomResponse> => {
    const data = QueryNamespaceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "NamespaceByDenom", data);
    return promise.then(data => QueryNamespaceByDenomResponse.decode(new BinaryReader(data)));
  };
  /* AddressRoles defines a gRPC query method that returns address roles in the
   namespace */
  addressRoles = async (request: QueryAddressRolesRequest): Promise<QueryAddressRolesResponse> => {
    const data = QueryAddressRolesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "AddressRoles", data);
    return promise.then(data => QueryAddressRolesResponse.decode(new BinaryReader(data)));
  };
  /* AddressesByRole defines a gRPC query method that returns a namespace's
   roles associated with the provided address. */
  addressesByRole = async (request: QueryAddressesByRoleRequest): Promise<QueryAddressesByRoleResponse> => {
    const data = QueryAddressesByRoleRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "AddressesByRole", data);
    return promise.then(data => QueryAddressesByRoleResponse.decode(new BinaryReader(data)));
  };
  /* VouchersForAddress defines a gRPC query method that returns a map of
   vouchers that are held by permissions module for this address, keyed by the
   originator address */
  vouchersForAddress = async (request: QueryVouchersForAddressRequest): Promise<QueryVouchersForAddressResponse> => {
    const data = QueryVouchersForAddressRequest.encode(request).finish();
    const promise = this.rpc.request("injective.permissions.v1beta1.Query", "VouchersForAddress", data);
    return promise.then(data => QueryVouchersForAddressResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    allNamespaces(request?: QueryAllNamespacesRequest): Promise<QueryAllNamespacesResponse> {
      return queryService.allNamespaces(request);
    },
    namespaceByDenom(request: QueryNamespaceByDenomRequest): Promise<QueryNamespaceByDenomResponse> {
      return queryService.namespaceByDenom(request);
    },
    addressRoles(request: QueryAddressRolesRequest): Promise<QueryAddressRolesResponse> {
      return queryService.addressRoles(request);
    },
    addressesByRole(request: QueryAddressesByRoleRequest): Promise<QueryAddressesByRoleResponse> {
      return queryService.addressesByRole(request);
    },
    vouchersForAddress(request: QueryVouchersForAddressRequest): Promise<QueryVouchersForAddressResponse> {
      return queryService.vouchersForAddress(request);
    }
  };
};
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseAllNamespacesQuery<TData> extends VueQueryParams<QueryAllNamespacesResponse, TData> {
  request?: ReactiveQueryAllNamespacesRequest;
}
export interface UseNamespaceByDenomQuery<TData> extends VueQueryParams<QueryNamespaceByDenomResponse, TData> {
  request: ReactiveQueryNamespaceByDenomRequest;
}
export interface UseAddressRolesQuery<TData> extends VueQueryParams<QueryAddressRolesResponse, TData> {
  request: ReactiveQueryAddressRolesRequest;
}
export interface UseAddressesByRoleQuery<TData> extends VueQueryParams<QueryAddressesByRoleResponse, TData> {
  request: ReactiveQueryAddressesByRoleRequest;
}
export interface UseVouchersForAddressQuery<TData> extends VueQueryParams<QueryVouchersForAddressResponse, TData> {
  request: ReactiveQueryVouchersForAddressRequest;
}
export const useQueryService = (rpc: Ref<ProtobufRpcClient | undefined>): ComputedRef<QueryClientImpl | undefined> => {
  const _queryClients = new WeakMap();
  return computed(() => {
    if (rpc.value) {
      if (_queryClients.has(rpc.value)) {
        return _queryClients.get(rpc.value);
      }
      const queryService = new QueryClientImpl(rpc.value);
      _queryClients.set(rpc.value, queryService);
      return queryService;
    }
  });
};
export const createRpcQueryHooks = (rpc: Ref<ProtobufRpcClient | undefined>) => {
  const queryService = useQueryService(rpc);
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    const queryKey = ["paramsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryParamsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.params(params);
      },
      ...options
    });
  };
  const useAllNamespaces = <TData = QueryAllNamespacesResponse,>({
    request,
    options
  }: UseAllNamespacesQuery<TData>) => {
    const queryKey = ["allNamespacesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAllNamespacesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allNamespaces(params);
      },
      ...options
    });
  };
  const useNamespaceByDenom = <TData = QueryNamespaceByDenomResponse,>({
    request,
    options
  }: UseNamespaceByDenomQuery<TData>) => {
    const queryKey = ["namespaceByDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryNamespaceByDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.namespaceByDenom(params);
      },
      ...options
    });
  };
  const useAddressRoles = <TData = QueryAddressRolesResponse,>({
    request,
    options
  }: UseAddressRolesQuery<TData>) => {
    const queryKey = ["addressRolesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAddressRolesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.addressRoles(params);
      },
      ...options
    });
  };
  const useAddressesByRole = <TData = QueryAddressesByRoleResponse,>({
    request,
    options
  }: UseAddressesByRoleQuery<TData>) => {
    const queryKey = ["addressesByRoleQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAddressesByRoleResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.addressesByRole(params);
      },
      ...options
    });
  };
  const useVouchersForAddress = <TData = QueryVouchersForAddressResponse,>({
    request,
    options
  }: UseVouchersForAddressQuery<TData>) => {
    const queryKey = ["vouchersForAddressQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryVouchersForAddressResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.vouchersForAddress(params);
      },
      ...options
    });
  };
  return {
    /**
     * Params defines a gRPC query method that returns the permissions module's
     * parameters.
     */
    useParams,
    /**
     * AllNamespaces defines a gRPC query method that returns the permissions
     * module's created namespaces.
     */
    useAllNamespaces,
    /**
     * NamespaceByDenom defines a gRPC query method that returns the permissions
     * module's namespace associated with the provided denom.
     */
    useNamespaceByDenom,
    /**
     * AddressRoles defines a gRPC query method that returns address roles in the
     * namespace
     */
    useAddressRoles,
    /**
     * AddressesByRole defines a gRPC query method that returns a namespace's
     * roles associated with the provided address.
     */
    useAddressesByRole,
    /**
     * VouchersForAddress defines a gRPC query method that returns a map of
     * vouchers that are held by permissions module for this address, keyed by the
     * originator address
     */
    useVouchersForAddress
  };
};