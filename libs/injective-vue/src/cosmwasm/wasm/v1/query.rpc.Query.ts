import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryCodeInfoRequest, QueryCodeInfoResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryWasmLimitsConfigRequest, QueryWasmLimitsConfigResponse, QueryBuildAddressRequest, QueryBuildAddressResponse, ReactiveQueryContractInfoRequest, ReactiveQueryContractHistoryRequest, ReactiveQueryContractsByCodeRequest, ReactiveQueryAllContractStateRequest, ReactiveQueryRawContractStateRequest, ReactiveQuerySmartContractStateRequest, ReactiveQueryCodeRequest, ReactiveQueryCodesRequest, ReactiveQueryCodeInfoRequest, ReactiveQueryPinnedCodesRequest, ReactiveQueryParamsRequest, ReactiveQueryContractsByCreatorRequest, ReactiveQueryWasmLimitsConfigRequest, ReactiveQueryBuildAddressRequest } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ContractInfo gets the contract meta data */
  contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
  /** ContractHistory gets the contract code history */
  contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
  /** ContractsByCode lists all smart contracts for a code id */
  contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
  /** AllContractState gets all raw store data for a single contract */
  allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
  /** RawContractState gets single key from the raw store data of a contract */
  rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
  /** SmartContractState get smart query result from the contract */
  smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
  /** Code gets the binary code and metadata for a single wasm code */
  code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Codes gets the metadata for all stored wasm codes */
  codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
  /** CodeInfo gets the metadata for a single wasm code */
  codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse>;
  /** PinnedCodes gets the pinned code ids */
  pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
  /** Params gets the module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ContractsByCreator gets the contracts by creator */
  contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
  /**
   * WasmLimitsConfig gets the configured limits for static validation of Wasm
   * files, encoded in JSON.
   */
  wasmLimitsConfig(request?: QueryWasmLimitsConfigRequest): Promise<QueryWasmLimitsConfigResponse>;
  /** BuildAddress builds a contract address */
  buildAddress(request: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ContractInfo gets the contract meta data */
  contractInfo = async (request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> => {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then(data => QueryContractInfoResponse.decode(new BinaryReader(data)));
  };
  /* ContractHistory gets the contract code history */
  contractHistory = async (request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> => {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then(data => QueryContractHistoryResponse.decode(new BinaryReader(data)));
  };
  /* ContractsByCode lists all smart contracts for a code id */
  contractsByCode = async (request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> => {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then(data => QueryContractsByCodeResponse.decode(new BinaryReader(data)));
  };
  /* AllContractState gets all raw store data for a single contract */
  allContractState = async (request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> => {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then(data => QueryAllContractStateResponse.decode(new BinaryReader(data)));
  };
  /* RawContractState gets single key from the raw store data of a contract */
  rawContractState = async (request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> => {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then(data => QueryRawContractStateResponse.decode(new BinaryReader(data)));
  };
  /* SmartContractState get smart query result from the contract */
  smartContractState = async (request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> => {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then(data => QuerySmartContractStateResponse.decode(new BinaryReader(data)));
  };
  /* Code gets the binary code and metadata for a single wasm code */
  code = async (request: QueryCodeRequest): Promise<QueryCodeResponse> => {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new BinaryReader(data)));
  };
  /* Codes gets the metadata for all stored wasm codes */
  codes = async (request: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponse> => {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then(data => QueryCodesResponse.decode(new BinaryReader(data)));
  };
  /* CodeInfo gets the metadata for a single wasm code */
  codeInfo = async (request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse> => {
    const data = QueryCodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "CodeInfo", data);
    return promise.then(data => QueryCodeInfoResponse.decode(new BinaryReader(data)));
  };
  /* PinnedCodes gets the pinned code ids */
  pinnedCodes = async (request: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponse> => {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then(data => QueryPinnedCodesResponse.decode(new BinaryReader(data)));
  };
  /* Params gets the module params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ContractsByCreator gets the contracts by creator */
  contractsByCreator = async (request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse> => {
    const data = QueryContractsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCreator", data);
    return promise.then(data => QueryContractsByCreatorResponse.decode(new BinaryReader(data)));
  };
  /* WasmLimitsConfig gets the configured limits for static validation of Wasm
   files, encoded in JSON. */
  wasmLimitsConfig = async (request: QueryWasmLimitsConfigRequest = {}): Promise<QueryWasmLimitsConfigResponse> => {
    const data = QueryWasmLimitsConfigRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "WasmLimitsConfig", data);
    return promise.then(data => QueryWasmLimitsConfigResponse.decode(new BinaryReader(data)));
  };
  /* BuildAddress builds a contract address */
  buildAddress = async (request: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse> => {
    const data = QueryBuildAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "BuildAddress", data);
    return promise.then(data => QueryBuildAddressResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
      return queryService.contractInfo(request);
    },
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> {
      return queryService.contractHistory(request);
    },
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
      return queryService.contractsByCode(request);
    },
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
      return queryService.allContractState(request);
    },
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
      return queryService.rawContractState(request);
    },
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> {
      return queryService.smartContractState(request);
    },
    code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
      return queryService.code(request);
    },
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse> {
      return queryService.codes(request);
    },
    codeInfo(request: QueryCodeInfoRequest): Promise<QueryCodeInfoResponse> {
      return queryService.codeInfo(request);
    },
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse> {
      return queryService.pinnedCodes(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse> {
      return queryService.contractsByCreator(request);
    },
    wasmLimitsConfig(request?: QueryWasmLimitsConfigRequest): Promise<QueryWasmLimitsConfigResponse> {
      return queryService.wasmLimitsConfig(request);
    },
    buildAddress(request: QueryBuildAddressRequest): Promise<QueryBuildAddressResponse> {
      return queryService.buildAddress(request);
    }
  };
};
export interface UseContractInfoQuery<TData> extends VueQueryParams<QueryContractInfoResponse, TData> {
  request: ReactiveQueryContractInfoRequest;
}
export interface UseContractHistoryQuery<TData> extends VueQueryParams<QueryContractHistoryResponse, TData> {
  request: ReactiveQueryContractHistoryRequest;
}
export interface UseContractsByCodeQuery<TData> extends VueQueryParams<QueryContractsByCodeResponse, TData> {
  request: ReactiveQueryContractsByCodeRequest;
}
export interface UseAllContractStateQuery<TData> extends VueQueryParams<QueryAllContractStateResponse, TData> {
  request: ReactiveQueryAllContractStateRequest;
}
export interface UseRawContractStateQuery<TData> extends VueQueryParams<QueryRawContractStateResponse, TData> {
  request: ReactiveQueryRawContractStateRequest;
}
export interface UseSmartContractStateQuery<TData> extends VueQueryParams<QuerySmartContractStateResponse, TData> {
  request: ReactiveQuerySmartContractStateRequest;
}
export interface UseCodeQuery<TData> extends VueQueryParams<QueryCodeResponse, TData> {
  request: ReactiveQueryCodeRequest;
}
export interface UseCodesQuery<TData> extends VueQueryParams<QueryCodesResponse, TData> {
  request?: ReactiveQueryCodesRequest;
}
export interface UseCodeInfoQuery<TData> extends VueQueryParams<QueryCodeInfoResponse, TData> {
  request: ReactiveQueryCodeInfoRequest;
}
export interface UsePinnedCodesQuery<TData> extends VueQueryParams<QueryPinnedCodesResponse, TData> {
  request?: ReactiveQueryPinnedCodesRequest;
}
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseContractsByCreatorQuery<TData> extends VueQueryParams<QueryContractsByCreatorResponse, TData> {
  request: ReactiveQueryContractsByCreatorRequest;
}
export interface UseWasmLimitsConfigQuery<TData> extends VueQueryParams<QueryWasmLimitsConfigResponse, TData> {
  request?: ReactiveQueryWasmLimitsConfigRequest;
}
export interface UseBuildAddressQuery<TData> extends VueQueryParams<QueryBuildAddressResponse, TData> {
  request: ReactiveQueryBuildAddressRequest;
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
  const useContractInfo = <TData = QueryContractInfoResponse,>({
    request,
    options
  }: UseContractInfoQuery<TData>) => {
    const queryKey = ["contractInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryContractInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.contractInfo(params);
      },
      ...options
    });
  };
  const useContractHistory = <TData = QueryContractHistoryResponse,>({
    request,
    options
  }: UseContractHistoryQuery<TData>) => {
    const queryKey = ["contractHistoryQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryContractHistoryResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.contractHistory(params);
      },
      ...options
    });
  };
  const useContractsByCode = <TData = QueryContractsByCodeResponse,>({
    request,
    options
  }: UseContractsByCodeQuery<TData>) => {
    const queryKey = ["contractsByCodeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryContractsByCodeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.contractsByCode(params);
      },
      ...options
    });
  };
  const useAllContractState = <TData = QueryAllContractStateResponse,>({
    request,
    options
  }: UseAllContractStateQuery<TData>) => {
    const queryKey = ["allContractStateQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAllContractStateResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allContractState(params);
      },
      ...options
    });
  };
  const useRawContractState = <TData = QueryRawContractStateResponse,>({
    request,
    options
  }: UseRawContractStateQuery<TData>) => {
    const queryKey = ["rawContractStateQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryRawContractStateResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.rawContractState(params);
      },
      ...options
    });
  };
  const useSmartContractState = <TData = QuerySmartContractStateResponse,>({
    request,
    options
  }: UseSmartContractStateQuery<TData>) => {
    const queryKey = ["smartContractStateQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySmartContractStateResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.smartContractState(params);
      },
      ...options
    });
  };
  const useCode = <TData = QueryCodeResponse,>({
    request,
    options
  }: UseCodeQuery<TData>) => {
    const queryKey = ["codeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryCodeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.code(params);
      },
      ...options
    });
  };
  const useCodes = <TData = QueryCodesResponse,>({
    request,
    options
  }: UseCodesQuery<TData>) => {
    const queryKey = ["codesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryCodesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.codes(params);
      },
      ...options
    });
  };
  const useCodeInfo = <TData = QueryCodeInfoResponse,>({
    request,
    options
  }: UseCodeInfoQuery<TData>) => {
    const queryKey = ["codeInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryCodeInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.codeInfo(params);
      },
      ...options
    });
  };
  const usePinnedCodes = <TData = QueryPinnedCodesResponse,>({
    request,
    options
  }: UsePinnedCodesQuery<TData>) => {
    const queryKey = ["pinnedCodesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPinnedCodesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.pinnedCodes(params);
      },
      ...options
    });
  };
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
  const useContractsByCreator = <TData = QueryContractsByCreatorResponse,>({
    request,
    options
  }: UseContractsByCreatorQuery<TData>) => {
    const queryKey = ["contractsByCreatorQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryContractsByCreatorResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.contractsByCreator(params);
      },
      ...options
    });
  };
  const useWasmLimitsConfig = <TData = QueryWasmLimitsConfigResponse,>({
    request,
    options
  }: UseWasmLimitsConfigQuery<TData>) => {
    const queryKey = ["wasmLimitsConfigQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryWasmLimitsConfigResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.wasmLimitsConfig(params);
      },
      ...options
    });
  };
  const useBuildAddress = <TData = QueryBuildAddressResponse,>({
    request,
    options
  }: UseBuildAddressQuery<TData>) => {
    const queryKey = ["buildAddressQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBuildAddressResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.buildAddress(params);
      },
      ...options
    });
  };
  return {
    /** ContractInfo gets the contract meta data */useContractInfo,
    /** ContractHistory gets the contract code history */useContractHistory,
    /** ContractsByCode lists all smart contracts for a code id */useContractsByCode,
    /** AllContractState gets all raw store data for a single contract */useAllContractState,
    /** RawContractState gets single key from the raw store data of a contract */useRawContractState,
    /** SmartContractState get smart query result from the contract */useSmartContractState,
    /** Code gets the binary code and metadata for a single wasm code */useCode,
    /** Codes gets the metadata for all stored wasm codes */useCodes,
    /** CodeInfo gets the metadata for a single wasm code */useCodeInfo,
    /** PinnedCodes gets the pinned code ids */usePinnedCodes,
    /** Params gets the module params */useParams,
    /** ContractsByCreator gets the contracts by creator */useContractsByCreator,
    /**
     * WasmLimitsConfig gets the configured limits for static validation of Wasm
     * files, encoded in JSON.
     */
    useWasmLimitsConfig,
    /** BuildAddress builds a contract address */useBuildAddress
  };
};