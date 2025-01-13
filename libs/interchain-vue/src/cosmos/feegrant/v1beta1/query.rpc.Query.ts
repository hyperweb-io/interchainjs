import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse, ReactiveQueryAllowanceRequest, ReactiveQueryAllowancesRequest, ReactiveQueryAllowancesByGranterRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Allowance returns granted allwance to the grantee by the granter. */
  allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
  /** Allowances returns all the grants for the given grantee address. */
  allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
  /**
   * AllowancesByGranter returns all the grants given by an address
   * 
   * Since: cosmos-sdk 0.46
   */
  allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Allowance returns granted allwance to the grantee by the granter. */
  allowance = async (request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> => {
    const data = QueryAllowanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowance", data);
    return promise.then(data => QueryAllowanceResponse.decode(new BinaryReader(data)));
  };
  /* Allowances returns all the grants for the given grantee address. */
  allowances = async (request: QueryAllowancesRequest): Promise<QueryAllowancesResponse> => {
    const data = QueryAllowancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "Allowances", data);
    return promise.then(data => QueryAllowancesResponse.decode(new BinaryReader(data)));
  };
  /* AllowancesByGranter returns all the grants given by an address
  
   Since: cosmos-sdk 0.46 */
  allowancesByGranter = async (request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse> => {
    const data = QueryAllowancesByGranterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Query", "AllowancesByGranter", data);
    return promise.then(data => QueryAllowancesByGranterResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse> {
      return queryService.allowance(request);
    },
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse> {
      return queryService.allowances(request);
    },
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse> {
      return queryService.allowancesByGranter(request);
    }
  };
};
export interface UseAllowanceQuery<TData> extends VueQueryParams<QueryAllowanceResponse, TData> {
  request: ReactiveQueryAllowanceRequest;
}
export interface UseAllowancesQuery<TData> extends VueQueryParams<QueryAllowancesResponse, TData> {
  request: ReactiveQueryAllowancesRequest;
}
export interface UseAllowancesByGranterQuery<TData> extends VueQueryParams<QueryAllowancesByGranterResponse, TData> {
  request: ReactiveQueryAllowancesByGranterRequest;
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
  const useAllowance = <TData = QueryAllowanceResponse,>({
    request,
    options
  }: UseAllowanceQuery<TData>) => {
    const queryKey = ["allowanceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAllowanceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allowance(params);
      },
      ...options
    });
  };
  const useAllowances = <TData = QueryAllowancesResponse,>({
    request,
    options
  }: UseAllowancesQuery<TData>) => {
    const queryKey = ["allowancesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAllowancesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allowances(params);
      },
      ...options
    });
  };
  const useAllowancesByGranter = <TData = QueryAllowancesByGranterResponse,>({
    request,
    options
  }: UseAllowancesByGranterQuery<TData>) => {
    const queryKey = ["allowancesByGranterQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAllowancesByGranterResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allowancesByGranter(params);
      },
      ...options
    });
  };
  return {
    /** Allowance returns granted allwance to the grantee by the granter. */useAllowance,
    /** Allowances returns all the grants for the given grantee address. */useAllowances,
    /**
     * AllowancesByGranter returns all the grants given by an address
     * 
     * Since: cosmos-sdk 0.46
     */
    useAllowancesByGranter
  };
};