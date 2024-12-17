import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  simulate(request: SimulateRequest): Promise<SimulateResponse>;
  /** GetTx fetches a tx by hash. */
  getTx(request: GetTxRequest): Promise<GetTxResponse>;
  /** BroadcastTx broadcast transaction. */
  broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
  /** GetTxsEvent fetches txs by event. */
  getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
  /**
   * TxDecode decodes the transaction.
   * 
   * Since: cosmos-sdk 0.47
   */
  txDecode(request: TxDecodeRequest): Promise<TxDecodeResponse>;
  /**
   * TxEncode encodes the transaction.
   * 
   * Since: cosmos-sdk 0.47
   */
  txEncode(request: TxEncodeRequest): Promise<TxEncodeResponse>;
  /**
   * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
   * 
   * Since: cosmos-sdk 0.47
   */
  txEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse>;
  /**
   * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
   * 
   * Since: cosmos-sdk 0.47
   */
  txDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Simulate simulates executing a transaction for estimating gas usage. */
  simulate = async (request: SimulateRequest): Promise<SimulateResponse> => {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then(data => SimulateResponse.decode(new BinaryReader(data)));
  };
  /* GetTx fetches a tx by hash. */
  getTx = async (request: GetTxRequest): Promise<GetTxResponse> => {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then(data => GetTxResponse.decode(new BinaryReader(data)));
  };
  /* BroadcastTx broadcast transaction. */
  broadcastTx = async (request: BroadcastTxRequest): Promise<BroadcastTxResponse> => {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then(data => BroadcastTxResponse.decode(new BinaryReader(data)));
  };
  /* GetTxsEvent fetches txs by event. */
  getTxsEvent = async (request: GetTxsEventRequest): Promise<GetTxsEventResponse> => {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then(data => GetTxsEventResponse.decode(new BinaryReader(data)));
  };
  /* GetBlockWithTxs fetches a block with decoded txs.
  
   Since: cosmos-sdk 0.45.2 */
  getBlockWithTxs = async (request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> => {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then(data => GetBlockWithTxsResponse.decode(new BinaryReader(data)));
  };
  /* TxDecode decodes the transaction.
  
   Since: cosmos-sdk 0.47 */
  txDecode = async (request: TxDecodeRequest): Promise<TxDecodeResponse> => {
    const data = TxDecodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecode", data);
    return promise.then(data => TxDecodeResponse.decode(new BinaryReader(data)));
  };
  /* TxEncode encodes the transaction.
  
   Since: cosmos-sdk 0.47 */
  txEncode = async (request: TxEncodeRequest): Promise<TxEncodeResponse> => {
    const data = TxEncodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncode", data);
    return promise.then(data => TxEncodeResponse.decode(new BinaryReader(data)));
  };
  /* TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
  
   Since: cosmos-sdk 0.47 */
  txEncodeAmino = async (request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse> => {
    const data = TxEncodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxEncodeAmino", data);
    return promise.then(data => TxEncodeAminoResponse.decode(new BinaryReader(data)));
  };
  /* TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
  
   Since: cosmos-sdk 0.47 */
  txDecodeAmino = async (request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse> => {
    const data = TxDecodeAminoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "TxDecodeAmino", data);
    return promise.then(data => TxDecodeAminoResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    simulate(request: SimulateRequest): Promise<SimulateResponse> {
      return queryService.simulate(request);
    },
    getTx(request: GetTxRequest): Promise<GetTxResponse> {
      return queryService.getTx(request);
    },
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse> {
      return queryService.broadcastTx(request);
    },
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse> {
      return queryService.getTxsEvent(request);
    },
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse> {
      return queryService.getBlockWithTxs(request);
    },
    txDecode(request: TxDecodeRequest): Promise<TxDecodeResponse> {
      return queryService.txDecode(request);
    },
    txEncode(request: TxEncodeRequest): Promise<TxEncodeResponse> {
      return queryService.txEncode(request);
    },
    txEncodeAmino(request: TxEncodeAminoRequest): Promise<TxEncodeAminoResponse> {
      return queryService.txEncodeAmino(request);
    },
    txDecodeAmino(request: TxDecodeAminoRequest): Promise<TxDecodeAminoResponse> {
      return queryService.txDecodeAmino(request);
    }
  };
};
export interface UseSimulateQuery<TData> extends VueQueryParams<SimulateResponse, TData> {
  request: ReactiveSimulateRequest;
}
export interface UseGetTxQuery<TData> extends VueQueryParams<GetTxResponse, TData> {
  request: ReactiveGetTxRequest;
}
export interface UseBroadcastTxQuery<TData> extends VueQueryParams<BroadcastTxResponse, TData> {
  request: ReactiveBroadcastTxRequest;
}
export interface UseGetTxsEventQuery<TData> extends VueQueryParams<GetTxsEventResponse, TData> {
  request: ReactiveGetTxsEventRequest;
}
export interface UseGetBlockWithTxsQuery<TData> extends VueQueryParams<GetBlockWithTxsResponse, TData> {
  request: ReactiveGetBlockWithTxsRequest;
}
export interface UseTxDecodeQuery<TData> extends VueQueryParams<TxDecodeResponse, TData> {
  request: ReactiveTxDecodeRequest;
}
export interface UseTxEncodeQuery<TData> extends VueQueryParams<TxEncodeResponse, TData> {
  request: ReactiveTxEncodeRequest;
}
export interface UseTxEncodeAminoQuery<TData> extends VueQueryParams<TxEncodeAminoResponse, TData> {
  request: ReactiveTxEncodeAminoRequest;
}
export interface UseTxDecodeAminoQuery<TData> extends VueQueryParams<TxDecodeAminoResponse, TData> {
  request: ReactiveTxDecodeAminoRequest;
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
  const useSimulate = <TData = SimulateResponse,>({
    request,
    options
  }: UseSimulateQuery<TData>) => {
    const queryKey = ["simulateQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<SimulateResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.simulate(params);
      },
      ...options
    });
  };
  const useGetTx = <TData = GetTxResponse,>({
    request,
    options
  }: UseGetTxQuery<TData>) => {
    const queryKey = ["getTxQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetTxResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getTx(params);
      },
      ...options
    });
  };
  const useBroadcastTx = <TData = BroadcastTxResponse,>({
    request,
    options
  }: UseBroadcastTxQuery<TData>) => {
    const queryKey = ["broadcastTxQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<BroadcastTxResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.broadcastTx(params);
      },
      ...options
    });
  };
  const useGetTxsEvent = <TData = GetTxsEventResponse,>({
    request,
    options
  }: UseGetTxsEventQuery<TData>) => {
    const queryKey = ["getTxsEventQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetTxsEventResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getTxsEvent(params);
      },
      ...options
    });
  };
  const useGetBlockWithTxs = <TData = GetBlockWithTxsResponse,>({
    request,
    options
  }: UseGetBlockWithTxsQuery<TData>) => {
    const queryKey = ["getBlockWithTxsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetBlockWithTxsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getBlockWithTxs(params);
      },
      ...options
    });
  };
  const useTxDecode = <TData = TxDecodeResponse,>({
    request,
    options
  }: UseTxDecodeQuery<TData>) => {
    const queryKey = ["txDecodeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<TxDecodeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.txDecode(params);
      },
      ...options
    });
  };
  const useTxEncode = <TData = TxEncodeResponse,>({
    request,
    options
  }: UseTxEncodeQuery<TData>) => {
    const queryKey = ["txEncodeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<TxEncodeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.txEncode(params);
      },
      ...options
    });
  };
  const useTxEncodeAmino = <TData = TxEncodeAminoResponse,>({
    request,
    options
  }: UseTxEncodeAminoQuery<TData>) => {
    const queryKey = ["txEncodeAminoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<TxEncodeAminoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.txEncodeAmino(params);
      },
      ...options
    });
  };
  const useTxDecodeAmino = <TData = TxDecodeAminoResponse,>({
    request,
    options
  }: UseTxDecodeAminoQuery<TData>) => {
    const queryKey = ["txDecodeAminoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<TxDecodeAminoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.txDecodeAmino(params);
      },
      ...options
    });
  };
  return {
    /** Simulate simulates executing a transaction for estimating gas usage. */useSimulate,
    /** GetTx fetches a tx by hash. */useGetTx,
    /** BroadcastTx broadcast transaction. */useBroadcastTx,
    /** GetTxsEvent fetches txs by event. */useGetTxsEvent,
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs,
    /**
     * TxDecode decodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecode,
    /**
     * TxEncode encodes the transaction.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncode,
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxEncodeAmino,
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     * 
     * Since: cosmos-sdk 0.47
     */
    useTxDecodeAmino
  };
};