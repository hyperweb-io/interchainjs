import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryInsuranceParamsRequest, QueryInsuranceParamsResponse, QueryInsuranceFundRequest, QueryInsuranceFundResponse, QueryInsuranceFundsRequest, QueryInsuranceFundsResponse, QueryEstimatedRedemptionsRequest, QueryEstimatedRedemptionsResponse, QueryPendingRedemptionsRequest, QueryPendingRedemptionsResponse, QueryModuleStateRequest, QueryModuleStateResponse, ReactiveQueryInsuranceParamsRequest, ReactiveQueryInsuranceFundRequest, ReactiveQueryInsuranceFundsRequest, ReactiveQueryEstimatedRedemptionsRequest, ReactiveQueryPendingRedemptionsRequest, ReactiveQueryModuleStateRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves insurance params */
  insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse>;
  /** Retrieves individual insurance fund information from market id */
  insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse>;
  /** Retrieves all insurance funds */
  insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse>;
  /**
   * Retrives the value of insurance fund share token at current price (not
   * pending redemption)
   */
  estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse>;
  /** Retrieves pending redemptions' share token at current price */
  pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse>;
  /** Retrieves the entire insurance module's state */
  insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves insurance params */
  insuranceParams = async (request: QueryInsuranceParamsRequest = {}): Promise<QueryInsuranceParamsResponse> => {
    const data = QueryInsuranceParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceParams", data);
    return promise.then(data => QueryInsuranceParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves individual insurance fund information from market id */
  insuranceFund = async (request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse> => {
    const data = QueryInsuranceFundRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFund", data);
    return promise.then(data => QueryInsuranceFundResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves all insurance funds */
  insuranceFunds = async (request: QueryInsuranceFundsRequest = {}): Promise<QueryInsuranceFundsResponse> => {
    const data = QueryInsuranceFundsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceFunds", data);
    return promise.then(data => QueryInsuranceFundsResponse.decode(new BinaryReader(data)));
  };
  /* Retrives the value of insurance fund share token at current price (not
   pending redemption) */
  estimatedRedemptions = async (request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse> => {
    const data = QueryEstimatedRedemptionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "EstimatedRedemptions", data);
    return promise.then(data => QueryEstimatedRedemptionsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves pending redemptions' share token at current price */
  pendingRedemptions = async (request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse> => {
    const data = QueryPendingRedemptionsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "PendingRedemptions", data);
    return promise.then(data => QueryPendingRedemptionsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire insurance module's state */
  insuranceModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.insurance.v1beta1.Query", "InsuranceModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    insuranceParams(request?: QueryInsuranceParamsRequest): Promise<QueryInsuranceParamsResponse> {
      return queryService.insuranceParams(request);
    },
    insuranceFund(request: QueryInsuranceFundRequest): Promise<QueryInsuranceFundResponse> {
      return queryService.insuranceFund(request);
    },
    insuranceFunds(request?: QueryInsuranceFundsRequest): Promise<QueryInsuranceFundsResponse> {
      return queryService.insuranceFunds(request);
    },
    estimatedRedemptions(request: QueryEstimatedRedemptionsRequest): Promise<QueryEstimatedRedemptionsResponse> {
      return queryService.estimatedRedemptions(request);
    },
    pendingRedemptions(request: QueryPendingRedemptionsRequest): Promise<QueryPendingRedemptionsResponse> {
      return queryService.pendingRedemptions(request);
    },
    insuranceModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.insuranceModuleState(request);
    }
  };
};
export interface UseInsuranceParamsQuery<TData> extends VueQueryParams<QueryInsuranceParamsResponse, TData> {
  request?: ReactiveQueryInsuranceParamsRequest;
}
export interface UseInsuranceFundQuery<TData> extends VueQueryParams<QueryInsuranceFundResponse, TData> {
  request: ReactiveQueryInsuranceFundRequest;
}
export interface UseInsuranceFundsQuery<TData> extends VueQueryParams<QueryInsuranceFundsResponse, TData> {
  request?: ReactiveQueryInsuranceFundsRequest;
}
export interface UseEstimatedRedemptionsQuery<TData> extends VueQueryParams<QueryEstimatedRedemptionsResponse, TData> {
  request: ReactiveQueryEstimatedRedemptionsRequest;
}
export interface UsePendingRedemptionsQuery<TData> extends VueQueryParams<QueryPendingRedemptionsResponse, TData> {
  request: ReactiveQueryPendingRedemptionsRequest;
}
export interface UseInsuranceModuleStateQuery<TData> extends VueQueryParams<QueryModuleStateResponse, TData> {
  request?: ReactiveQueryModuleStateRequest;
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
  const useInsuranceParams = <TData = QueryInsuranceParamsResponse,>({
    request,
    options
  }: UseInsuranceParamsQuery<TData>) => {
    const queryKey = ["insuranceParamsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryInsuranceParamsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.insuranceParams(params);
      },
      ...options
    });
  };
  const useInsuranceFund = <TData = QueryInsuranceFundResponse,>({
    request,
    options
  }: UseInsuranceFundQuery<TData>) => {
    const queryKey = ["insuranceFundQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryInsuranceFundResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.insuranceFund(params);
      },
      ...options
    });
  };
  const useInsuranceFunds = <TData = QueryInsuranceFundsResponse,>({
    request,
    options
  }: UseInsuranceFundsQuery<TData>) => {
    const queryKey = ["insuranceFundsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryInsuranceFundsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.insuranceFunds(params);
      },
      ...options
    });
  };
  const useEstimatedRedemptions = <TData = QueryEstimatedRedemptionsResponse,>({
    request,
    options
  }: UseEstimatedRedemptionsQuery<TData>) => {
    const queryKey = ["estimatedRedemptionsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryEstimatedRedemptionsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.estimatedRedemptions(params);
      },
      ...options
    });
  };
  const usePendingRedemptions = <TData = QueryPendingRedemptionsResponse,>({
    request,
    options
  }: UsePendingRedemptionsQuery<TData>) => {
    const queryKey = ["pendingRedemptionsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPendingRedemptionsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.pendingRedemptions(params);
      },
      ...options
    });
  };
  const useInsuranceModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseInsuranceModuleStateQuery<TData>) => {
    const queryKey = ["insuranceModuleStateQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryModuleStateResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.insuranceModuleState(params);
      },
      ...options
    });
  };
  return {
    /** Retrieves insurance params */useInsuranceParams,
    /** Retrieves individual insurance fund information from market id */useInsuranceFund,
    /** Retrieves all insurance funds */useInsuranceFunds,
    /**
     * Retrives the value of insurance fund share token at current price (not
     * pending redemption)
     */
    useEstimatedRedemptions,
    /** Retrieves pending redemptions' share token at current price */usePendingRedemptions,
    /** Retrieves the entire insurance module's state */useInsuranceModuleState
  };
};