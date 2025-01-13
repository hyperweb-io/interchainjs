import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
  /** GetNodeInfo queries the current node info. */
  getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
  /** GetSyncing queries node syncing. */
  getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
  /** GetLatestBlock returns the latest block. */
  getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
  /** GetBlockByHeight queries block for given height. */
  getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
  /** GetLatestValidatorSet queries latest validator-set. */
  getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
  /**
   * ABCIQuery defines a query handler that supports ABCI queries directly to the
   * application, bypassing Tendermint completely. The ABCI query must contain
   * a valid and supported path, including app, custom, p2p, and store.
   * 
   * Since: cosmos-sdk 0.46
   */
  aBCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* GetNodeInfo queries the current node info. */
  getNodeInfo = async (request: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponse> => {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
    return promise.then(data => GetNodeInfoResponse.decode(new BinaryReader(data)));
  };
  /* GetSyncing queries node syncing. */
  getSyncing = async (request: GetSyncingRequest = {}): Promise<GetSyncingResponse> => {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
    return promise.then(data => GetSyncingResponse.decode(new BinaryReader(data)));
  };
  /* GetLatestBlock returns the latest block. */
  getLatestBlock = async (request: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponse> => {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
    return promise.then(data => GetLatestBlockResponse.decode(new BinaryReader(data)));
  };
  /* GetBlockByHeight queries block for given height. */
  getBlockByHeight = async (request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> => {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
    return promise.then(data => GetBlockByHeightResponse.decode(new BinaryReader(data)));
  };
  /* GetLatestValidatorSet queries latest validator-set. */
  getLatestValidatorSet = async (request: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponse> => {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
    return promise.then(data => GetLatestValidatorSetResponse.decode(new BinaryReader(data)));
  };
  /* GetValidatorSetByHeight queries validator-set at a given height. */
  getValidatorSetByHeight = async (request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse> => {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
    return promise.then(data => GetValidatorSetByHeightResponse.decode(new BinaryReader(data)));
  };
  /* ABCIQuery defines a query handler that supports ABCI queries directly to the
   application, bypassing Tendermint completely. The ABCI query must contain
   a valid and supported path, including app, custom, p2p, and store.
  
   Since: cosmos-sdk 0.46 */
  aBCIQuery = async (request: ABCIQueryRequest): Promise<ABCIQueryResponse> => {
    const data = ABCIQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "ABCIQuery", data);
    return promise.then(data => ABCIQueryResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse> {
      return queryService.getNodeInfo(request);
    },
    getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse> {
      return queryService.getSyncing(request);
    },
    getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse> {
      return queryService.getLatestBlock(request);
    },
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse> {
      return queryService.getBlockByHeight(request);
    },
    getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse> {
      return queryService.getLatestValidatorSet(request);
    },
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse> {
      return queryService.getValidatorSetByHeight(request);
    },
    aBCIQuery(request: ABCIQueryRequest): Promise<ABCIQueryResponse> {
      return queryService.aBCIQuery(request);
    }
  };
};
export interface UseGetNodeInfoQuery<TData> extends VueQueryParams<GetNodeInfoResponse, TData> {
  request?: ReactiveGetNodeInfoRequest;
}
export interface UseGetSyncingQuery<TData> extends VueQueryParams<GetSyncingResponse, TData> {
  request?: ReactiveGetSyncingRequest;
}
export interface UseGetLatestBlockQuery<TData> extends VueQueryParams<GetLatestBlockResponse, TData> {
  request?: ReactiveGetLatestBlockRequest;
}
export interface UseGetBlockByHeightQuery<TData> extends VueQueryParams<GetBlockByHeightResponse, TData> {
  request: ReactiveGetBlockByHeightRequest;
}
export interface UseGetLatestValidatorSetQuery<TData> extends VueQueryParams<GetLatestValidatorSetResponse, TData> {
  request?: ReactiveGetLatestValidatorSetRequest;
}
export interface UseGetValidatorSetByHeightQuery<TData> extends VueQueryParams<GetValidatorSetByHeightResponse, TData> {
  request: ReactiveGetValidatorSetByHeightRequest;
}
export interface UseABCIQueryQuery<TData> extends VueQueryParams<ABCIQueryResponse, TData> {
  request: ReactiveABCIQueryRequest;
}
export const useQueryService = (rpc: Ref<ProtobufRpcClient | undefined>): ComputedRef<ServiceClientImpl | undefined> => {
  const _queryClients = new WeakMap();
  return computed(() => {
    if (rpc.value) {
      if (_queryClients.has(rpc.value)) {
        return _queryClients.get(rpc.value);
      }
      const queryService = new ServiceClientImpl(rpc.value);
      _queryClients.set(rpc.value, queryService);
      return queryService;
    }
  });
};
export const createRpcQueryHooks = (rpc: Ref<ProtobufRpcClient | undefined>) => {
  const queryService = useQueryService(rpc);
  const useGetNodeInfo = <TData = GetNodeInfoResponse,>({
    request,
    options
  }: UseGetNodeInfoQuery<TData>) => {
    const queryKey = ["getNodeInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetNodeInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getNodeInfo(params);
      },
      ...options
    });
  };
  const useGetSyncing = <TData = GetSyncingResponse,>({
    request,
    options
  }: UseGetSyncingQuery<TData>) => {
    const queryKey = ["getSyncingQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetSyncingResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getSyncing(params);
      },
      ...options
    });
  };
  const useGetLatestBlock = <TData = GetLatestBlockResponse,>({
    request,
    options
  }: UseGetLatestBlockQuery<TData>) => {
    const queryKey = ["getLatestBlockQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetLatestBlockResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getLatestBlock(params);
      },
      ...options
    });
  };
  const useGetBlockByHeight = <TData = GetBlockByHeightResponse,>({
    request,
    options
  }: UseGetBlockByHeightQuery<TData>) => {
    const queryKey = ["getBlockByHeightQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetBlockByHeightResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getBlockByHeight(params);
      },
      ...options
    });
  };
  const useGetLatestValidatorSet = <TData = GetLatestValidatorSetResponse,>({
    request,
    options
  }: UseGetLatestValidatorSetQuery<TData>) => {
    const queryKey = ["getLatestValidatorSetQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetLatestValidatorSetResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getLatestValidatorSet(params);
      },
      ...options
    });
  };
  const useGetValidatorSetByHeight = <TData = GetValidatorSetByHeightResponse,>({
    request,
    options
  }: UseGetValidatorSetByHeightQuery<TData>) => {
    const queryKey = ["getValidatorSetByHeightQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetValidatorSetByHeightResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getValidatorSetByHeight(params);
      },
      ...options
    });
  };
  const useABCIQuery = <TData = ABCIQueryResponse,>({
    request,
    options
  }: UseABCIQueryQuery<TData>) => {
    const queryKey = ["aBCIQueryQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ABCIQueryResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.aBCIQuery(params);
      },
      ...options
    });
  };
  return {
    /** GetNodeInfo queries the current node info. */useGetNodeInfo,
    /** GetSyncing queries node syncing. */useGetSyncing,
    /** GetLatestBlock returns the latest block. */useGetLatestBlock,
    /** GetBlockByHeight queries block for given height. */useGetBlockByHeight,
    /** GetLatestValidatorSet queries latest validator-set. */useGetLatestValidatorSet,
    /** GetValidatorSetByHeight queries validator-set at a given height. */useGetValidatorSetByHeight,
    /**
     * ABCIQuery defines a query handler that supports ABCI queries directly to the
     * application, bypassing Tendermint completely. The ABCI query must contain
     * a valid and supported path, including app, custom, p2p, and store.
     * 
     * Since: cosmos-sdk 0.46
     */
    useABCIQuery
  };
};