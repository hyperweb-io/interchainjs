import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse, ReactiveQueryWasmxParamsRequest, ReactiveQueryContractRegistrationInfoRequest, ReactiveQueryModuleStateRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves wasmx params */
  wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse>;
  /** Retrieves contract registration info */
  contractRegistrationInfo(request: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponse>;
  /** Retrieves the entire wasmx module's state */
  wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves wasmx params */
  wasmxParams = async (request: QueryWasmxParamsRequest = {}): Promise<QueryWasmxParamsResponse> => {
    const data = QueryWasmxParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxParams", data);
    return promise.then(data => QueryWasmxParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves contract registration info */
  contractRegistrationInfo = async (request: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponse> => {
    const data = QueryContractRegistrationInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "ContractRegistrationInfo", data);
    return promise.then(data => QueryContractRegistrationInfoResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire wasmx module's state */
  wasmxModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.wasmx.v1.Query", "WasmxModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    wasmxParams(request?: QueryWasmxParamsRequest): Promise<QueryWasmxParamsResponse> {
      return queryService.wasmxParams(request);
    },
    contractRegistrationInfo(request: QueryContractRegistrationInfoRequest): Promise<QueryContractRegistrationInfoResponse> {
      return queryService.contractRegistrationInfo(request);
    },
    wasmxModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.wasmxModuleState(request);
    }
  };
};
export interface UseWasmxParamsQuery<TData> extends VueQueryParams<QueryWasmxParamsResponse, TData> {
  request?: ReactiveQueryWasmxParamsRequest;
}
export interface UseContractRegistrationInfoQuery<TData> extends VueQueryParams<QueryContractRegistrationInfoResponse, TData> {
  request: ReactiveQueryContractRegistrationInfoRequest;
}
export interface UseWasmxModuleStateQuery<TData> extends VueQueryParams<QueryModuleStateResponse, TData> {
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
  const useWasmxParams = <TData = QueryWasmxParamsResponse,>({
    request,
    options
  }: UseWasmxParamsQuery<TData>) => {
    const queryKey = ["wasmxParamsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryWasmxParamsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.wasmxParams(params);
      },
      ...options
    });
  };
  const useContractRegistrationInfo = <TData = QueryContractRegistrationInfoResponse,>({
    request,
    options
  }: UseContractRegistrationInfoQuery<TData>) => {
    const queryKey = ["contractRegistrationInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryContractRegistrationInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.contractRegistrationInfo(params);
      },
      ...options
    });
  };
  const useWasmxModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseWasmxModuleStateQuery<TData>) => {
    const queryKey = ["wasmxModuleStateQuery", queryService];
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
        return queryService.value.wasmxModuleState(params);
      },
      ...options
    });
  };
  return {
    /** Retrieves wasmx params */useWasmxParams,
    /** Retrieves contract registration info */useContractRegistrationInfo,
    /** Retrieves the entire wasmx module's state */useWasmxModuleState
  };
};