import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse, ReactiveQueryGrantsRequest, ReactiveQueryGranterGrantsRequest, ReactiveQueryGranteeGrantsRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   * 
   * Since: cosmos-sdk 0.46
   */
  granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   * 
   * Since: cosmos-sdk 0.46
   */
  granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Returns list of `Authorization`, granted to the grantee by the granter. */
  grants = async (request: QueryGrantsRequest): Promise<QueryGrantsResponse> => {
    const data = QueryGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
    return promise.then(data => QueryGrantsResponse.decode(new BinaryReader(data)));
  };
  /* GranterGrants returns list of `GrantAuthorization`, granted by granter.
  
   Since: cosmos-sdk 0.46 */
  granterGrants = async (request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> => {
    const data = QueryGranterGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
    return promise.then(data => QueryGranterGrantsResponse.decode(new BinaryReader(data)));
  };
  /* GranteeGrants returns a list of `GrantAuthorization` by grantee.
  
   Since: cosmos-sdk 0.46 */
  granteeGrants = async (request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> => {
    const data = QueryGranteeGrantsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
    return promise.then(data => QueryGranteeGrantsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse> {
      return queryService.grants(request);
    },
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse> {
      return queryService.granterGrants(request);
    },
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse> {
      return queryService.granteeGrants(request);
    }
  };
};
export interface UseGrantsQuery<TData> extends VueQueryParams<QueryGrantsResponse, TData> {
  request: ReactiveQueryGrantsRequest;
}
export interface UseGranterGrantsQuery<TData> extends VueQueryParams<QueryGranterGrantsResponse, TData> {
  request: ReactiveQueryGranterGrantsRequest;
}
export interface UseGranteeGrantsQuery<TData> extends VueQueryParams<QueryGranteeGrantsResponse, TData> {
  request: ReactiveQueryGranteeGrantsRequest;
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
  const useGrants = <TData = QueryGrantsResponse,>({
    request,
    options
  }: UseGrantsQuery<TData>) => {
    const queryKey = ["grantsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGrantsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.grants(params);
      },
      ...options
    });
  };
  const useGranterGrants = <TData = QueryGranterGrantsResponse,>({
    request,
    options
  }: UseGranterGrantsQuery<TData>) => {
    const queryKey = ["granterGrantsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGranterGrantsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.granterGrants(params);
      },
      ...options
    });
  };
  const useGranteeGrants = <TData = QueryGranteeGrantsResponse,>({
    request,
    options
  }: UseGranteeGrantsQuery<TData>) => {
    const queryKey = ["granteeGrantsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGranteeGrantsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.granteeGrants(params);
      },
      ...options
    });
  };
  return {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */useGrants,
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranterGrants,
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranteeGrants
  };
};