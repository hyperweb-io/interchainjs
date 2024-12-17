import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastEventByAddrRequest, QueryLastEventByAddrResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryModuleStateRequest, QueryModuleStateResponse, MissingNoncesRequest, MissingNoncesResponse, ReactiveQueryParamsRequest, ReactiveQueryCurrentValsetRequest, ReactiveQueryValsetRequestRequest, ReactiveQueryValsetConfirmRequest, ReactiveQueryValsetConfirmsByNonceRequest, ReactiveQueryLastValsetRequestsRequest, ReactiveQueryLastPendingValsetRequestByAddrRequest, ReactiveQueryLastEventByAddrRequest, ReactiveQueryBatchFeeRequest, ReactiveQueryOutgoingTxBatchesRequest, ReactiveQueryLastPendingBatchRequestByAddrRequest, ReactiveQueryBatchRequestByNonceRequest, ReactiveQueryBatchConfirmsRequest, ReactiveQueryERC20ToDenomRequest, ReactiveQueryDenomToERC20Request, ReactiveQueryModuleStateRequest } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Deployments queries deployments */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** valset */
  currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
  valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
  valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
  valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
  lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
  lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
  /** claim */
  lastEventByAddr(request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse>;
  /** batch */
  getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
  batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
  outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
  lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
  batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
  batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
  eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
  denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
  getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
  getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
  getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
  /** Retrieves the entire peggy module's state */
  peggyModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  missingPeggoNonces(request?: MissingNoncesRequest): Promise<MissingNoncesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Deployments queries deployments */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* valset */
  currentValset = async (request: QueryCurrentValsetRequest = {}): Promise<QueryCurrentValsetResponse> => {
    const data = QueryCurrentValsetRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "CurrentValset", data);
    return promise.then(data => QueryCurrentValsetResponse.decode(new BinaryReader(data)));
  };
  /* ValsetRequest */
  valsetRequest = async (request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse> => {
    const data = QueryValsetRequestRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetRequest", data);
    return promise.then(data => QueryValsetRequestResponse.decode(new BinaryReader(data)));
  };
  /* ValsetConfirm */
  valsetConfirm = async (request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse> => {
    const data = QueryValsetConfirmRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirm", data);
    return promise.then(data => QueryValsetConfirmResponse.decode(new BinaryReader(data)));
  };
  /* ValsetConfirmsByNonce */
  valsetConfirmsByNonce = async (request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse> => {
    const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ValsetConfirmsByNonce", data);
    return promise.then(data => QueryValsetConfirmsByNonceResponse.decode(new BinaryReader(data)));
  };
  /* LastValsetRequests */
  lastValsetRequests = async (request: QueryLastValsetRequestsRequest = {}): Promise<QueryLastValsetRequestsResponse> => {
    const data = QueryLastValsetRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastValsetRequests", data);
    return promise.then(data => QueryLastValsetRequestsResponse.decode(new BinaryReader(data)));
  };
  /* LastPendingValsetRequestByAddr */
  lastPendingValsetRequestByAddr = async (request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse> => {
    const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingValsetRequestByAddr", data);
    return promise.then(data => QueryLastPendingValsetRequestByAddrResponse.decode(new BinaryReader(data)));
  };
  /* claim */
  lastEventByAddr = async (request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse> => {
    const data = QueryLastEventByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastEventByAddr", data);
    return promise.then(data => QueryLastEventByAddrResponse.decode(new BinaryReader(data)));
  };
  /* batch */
  getPendingSendToEth = async (request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse> => {
    const data = QueryPendingSendToEth.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetPendingSendToEth", data);
    return promise.then(data => QueryPendingSendToEthResponse.decode(new BinaryReader(data)));
  };
  /* BatchFees */
  batchFees = async (request: QueryBatchFeeRequest = {}): Promise<QueryBatchFeeResponse> => {
    const data = QueryBatchFeeRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchFees", data);
    return promise.then(data => QueryBatchFeeResponse.decode(new BinaryReader(data)));
  };
  /* OutgoingTxBatches */
  outgoingTxBatches = async (request: QueryOutgoingTxBatchesRequest = {}): Promise<QueryOutgoingTxBatchesResponse> => {
    const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "OutgoingTxBatches", data);
    return promise.then(data => QueryOutgoingTxBatchesResponse.decode(new BinaryReader(data)));
  };
  /* LastPendingBatchRequestByAddr */
  lastPendingBatchRequestByAddr = async (request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse> => {
    const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "LastPendingBatchRequestByAddr", data);
    return promise.then(data => QueryLastPendingBatchRequestByAddrResponse.decode(new BinaryReader(data)));
  };
  /* BatchRequestByNonce */
  batchRequestByNonce = async (request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse> => {
    const data = QueryBatchRequestByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchRequestByNonce", data);
    return promise.then(data => QueryBatchRequestByNonceResponse.decode(new BinaryReader(data)));
  };
  /* BatchConfirms */
  batchConfirms = async (request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse> => {
    const data = QueryBatchConfirmsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "BatchConfirms", data);
    return promise.then(data => QueryBatchConfirmsResponse.decode(new BinaryReader(data)));
  };
  /* ERC20ToDenom */
  eRC20ToDenom = async (request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse> => {
    const data = QueryERC20ToDenomRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "ERC20ToDenom", data);
    return promise.then(data => QueryERC20ToDenomResponse.decode(new BinaryReader(data)));
  };
  /* DenomToERC20 */
  denomToERC20 = async (request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response> => {
    const data = QueryDenomToERC20Request.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "DenomToERC20", data);
    return promise.then(data => QueryDenomToERC20Response.decode(new BinaryReader(data)));
  };
  /* GetDelegateKeyByValidator */
  getDelegateKeyByValidator = async (request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse> => {
    const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByValidator", data);
    return promise.then(data => QueryDelegateKeysByValidatorAddressResponse.decode(new BinaryReader(data)));
  };
  /* GetDelegateKeyByEth */
  getDelegateKeyByEth = async (request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse> => {
    const data = QueryDelegateKeysByEthAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByEth", data);
    return promise.then(data => QueryDelegateKeysByEthAddressResponse.decode(new BinaryReader(data)));
  };
  /* GetDelegateKeyByOrchestrator */
  getDelegateKeyByOrchestrator = async (request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse> => {
    const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "GetDelegateKeyByOrchestrator", data);
    return promise.then(data => QueryDelegateKeysByOrchestratorAddressResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire peggy module's state */
  peggyModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "PeggyModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
  /* MissingPeggoNonces */
  missingPeggoNonces = async (request: MissingNoncesRequest = {}): Promise<MissingNoncesResponse> => {
    const data = MissingNoncesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.peggy.v1.Query", "MissingPeggoNonces", data);
    return promise.then(data => MissingNoncesResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse> {
      return queryService.currentValset(request);
    },
    valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse> {
      return queryService.valsetRequest(request);
    },
    valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse> {
      return queryService.valsetConfirm(request);
    },
    valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse> {
      return queryService.valsetConfirmsByNonce(request);
    },
    lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse> {
      return queryService.lastValsetRequests(request);
    },
    lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse> {
      return queryService.lastPendingValsetRequestByAddr(request);
    },
    lastEventByAddr(request: QueryLastEventByAddrRequest): Promise<QueryLastEventByAddrResponse> {
      return queryService.lastEventByAddr(request);
    },
    getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse> {
      return queryService.getPendingSendToEth(request);
    },
    batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse> {
      return queryService.batchFees(request);
    },
    outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse> {
      return queryService.outgoingTxBatches(request);
    },
    lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse> {
      return queryService.lastPendingBatchRequestByAddr(request);
    },
    batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse> {
      return queryService.batchRequestByNonce(request);
    },
    batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse> {
      return queryService.batchConfirms(request);
    },
    eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse> {
      return queryService.eRC20ToDenom(request);
    },
    denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response> {
      return queryService.denomToERC20(request);
    },
    getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse> {
      return queryService.getDelegateKeyByValidator(request);
    },
    getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse> {
      return queryService.getDelegateKeyByEth(request);
    },
    getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse> {
      return queryService.getDelegateKeyByOrchestrator(request);
    },
    peggyModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.peggyModuleState(request);
    },
    missingPeggoNonces(request?: MissingNoncesRequest): Promise<MissingNoncesResponse> {
      return queryService.missingPeggoNonces(request);
    }
  };
};
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseCurrentValsetQuery<TData> extends VueQueryParams<QueryCurrentValsetResponse, TData> {
  request?: ReactiveQueryCurrentValsetRequest;
}
export interface UseValsetRequestQuery<TData> extends VueQueryParams<QueryValsetRequestResponse, TData> {
  request: ReactiveQueryValsetRequestRequest;
}
export interface UseValsetConfirmQuery<TData> extends VueQueryParams<QueryValsetConfirmResponse, TData> {
  request: ReactiveQueryValsetConfirmRequest;
}
export interface UseValsetConfirmsByNonceQuery<TData> extends VueQueryParams<QueryValsetConfirmsByNonceResponse, TData> {
  request: ReactiveQueryValsetConfirmsByNonceRequest;
}
export interface UseLastValsetRequestsQuery<TData> extends VueQueryParams<QueryLastValsetRequestsResponse, TData> {
  request?: ReactiveQueryLastValsetRequestsRequest;
}
export interface UseLastPendingValsetRequestByAddrQuery<TData> extends VueQueryParams<QueryLastPendingValsetRequestByAddrResponse, TData> {
  request: ReactiveQueryLastPendingValsetRequestByAddrRequest;
}
export interface UseLastEventByAddrQuery<TData> extends VueQueryParams<QueryLastEventByAddrResponse, TData> {
  request: ReactiveQueryLastEventByAddrRequest;
}
export interface UseGetPendingSendToEthQuery<TData> extends VueQueryParams<QueryPendingSendToEthResponse, TData> {
  request: ReactiveQueryPendingSendToEth;
}
export interface UseBatchFeesQuery<TData> extends VueQueryParams<QueryBatchFeeResponse, TData> {
  request?: ReactiveQueryBatchFeeRequest;
}
export interface UseOutgoingTxBatchesQuery<TData> extends VueQueryParams<QueryOutgoingTxBatchesResponse, TData> {
  request?: ReactiveQueryOutgoingTxBatchesRequest;
}
export interface UseLastPendingBatchRequestByAddrQuery<TData> extends VueQueryParams<QueryLastPendingBatchRequestByAddrResponse, TData> {
  request: ReactiveQueryLastPendingBatchRequestByAddrRequest;
}
export interface UseBatchRequestByNonceQuery<TData> extends VueQueryParams<QueryBatchRequestByNonceResponse, TData> {
  request: ReactiveQueryBatchRequestByNonceRequest;
}
export interface UseBatchConfirmsQuery<TData> extends VueQueryParams<QueryBatchConfirmsResponse, TData> {
  request: ReactiveQueryBatchConfirmsRequest;
}
export interface UseERC20ToDenomQuery<TData> extends VueQueryParams<QueryERC20ToDenomResponse, TData> {
  request: ReactiveQueryERC20ToDenomRequest;
}
export interface UseDenomToERC20Query<TData> extends VueQueryParams<QueryDenomToERC20Response, TData> {
  request: ReactiveQueryDenomToERC20Request;
}
export interface UseGetDelegateKeyByValidatorQuery<TData> extends VueQueryParams<QueryDelegateKeysByValidatorAddressResponse, TData> {
  request: ReactiveQueryDelegateKeysByValidatorAddress;
}
export interface UseGetDelegateKeyByEthQuery<TData> extends VueQueryParams<QueryDelegateKeysByEthAddressResponse, TData> {
  request: ReactiveQueryDelegateKeysByEthAddress;
}
export interface UseGetDelegateKeyByOrchestratorQuery<TData> extends VueQueryParams<QueryDelegateKeysByOrchestratorAddressResponse, TData> {
  request: ReactiveQueryDelegateKeysByOrchestratorAddress;
}
export interface UsePeggyModuleStateQuery<TData> extends VueQueryParams<QueryModuleStateResponse, TData> {
  request?: ReactiveQueryModuleStateRequest;
}
export interface UseMissingPeggoNoncesQuery<TData> extends VueQueryParams<MissingNoncesResponse, TData> {
  request?: ReactiveMissingNoncesRequest;
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
  const useCurrentValset = <TData = QueryCurrentValsetResponse,>({
    request,
    options
  }: UseCurrentValsetQuery<TData>) => {
    const queryKey = ["currentValsetQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryCurrentValsetResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.currentValset(params);
      },
      ...options
    });
  };
  const useValsetRequest = <TData = QueryValsetRequestResponse,>({
    request,
    options
  }: UseValsetRequestQuery<TData>) => {
    const queryKey = ["valsetRequestQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryValsetRequestResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.valsetRequest(params);
      },
      ...options
    });
  };
  const useValsetConfirm = <TData = QueryValsetConfirmResponse,>({
    request,
    options
  }: UseValsetConfirmQuery<TData>) => {
    const queryKey = ["valsetConfirmQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryValsetConfirmResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.valsetConfirm(params);
      },
      ...options
    });
  };
  const useValsetConfirmsByNonce = <TData = QueryValsetConfirmsByNonceResponse,>({
    request,
    options
  }: UseValsetConfirmsByNonceQuery<TData>) => {
    const queryKey = ["valsetConfirmsByNonceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryValsetConfirmsByNonceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.valsetConfirmsByNonce(params);
      },
      ...options
    });
  };
  const useLastValsetRequests = <TData = QueryLastValsetRequestsResponse,>({
    request,
    options
  }: UseLastValsetRequestsQuery<TData>) => {
    const queryKey = ["lastValsetRequestsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLastValsetRequestsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.lastValsetRequests(params);
      },
      ...options
    });
  };
  const useLastPendingValsetRequestByAddr = <TData = QueryLastPendingValsetRequestByAddrResponse,>({
    request,
    options
  }: UseLastPendingValsetRequestByAddrQuery<TData>) => {
    const queryKey = ["lastPendingValsetRequestByAddrQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLastPendingValsetRequestByAddrResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.lastPendingValsetRequestByAddr(params);
      },
      ...options
    });
  };
  const useLastEventByAddr = <TData = QueryLastEventByAddrResponse,>({
    request,
    options
  }: UseLastEventByAddrQuery<TData>) => {
    const queryKey = ["lastEventByAddrQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLastEventByAddrResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.lastEventByAddr(params);
      },
      ...options
    });
  };
  const useGetPendingSendToEth = <TData = QueryPendingSendToEthResponse,>({
    request,
    options
  }: UseGetPendingSendToEthQuery<TData>) => {
    const queryKey = ["getPendingSendToEthQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPendingSendToEthResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getPendingSendToEth(params);
      },
      ...options
    });
  };
  const useBatchFees = <TData = QueryBatchFeeResponse,>({
    request,
    options
  }: UseBatchFeesQuery<TData>) => {
    const queryKey = ["batchFeesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBatchFeeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.batchFees(params);
      },
      ...options
    });
  };
  const useOutgoingTxBatches = <TData = QueryOutgoingTxBatchesResponse,>({
    request,
    options
  }: UseOutgoingTxBatchesQuery<TData>) => {
    const queryKey = ["outgoingTxBatchesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryOutgoingTxBatchesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.outgoingTxBatches(params);
      },
      ...options
    });
  };
  const useLastPendingBatchRequestByAddr = <TData = QueryLastPendingBatchRequestByAddrResponse,>({
    request,
    options
  }: UseLastPendingBatchRequestByAddrQuery<TData>) => {
    const queryKey = ["lastPendingBatchRequestByAddrQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLastPendingBatchRequestByAddrResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.lastPendingBatchRequestByAddr(params);
      },
      ...options
    });
  };
  const useBatchRequestByNonce = <TData = QueryBatchRequestByNonceResponse,>({
    request,
    options
  }: UseBatchRequestByNonceQuery<TData>) => {
    const queryKey = ["batchRequestByNonceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBatchRequestByNonceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.batchRequestByNonce(params);
      },
      ...options
    });
  };
  const useBatchConfirms = <TData = QueryBatchConfirmsResponse,>({
    request,
    options
  }: UseBatchConfirmsQuery<TData>) => {
    const queryKey = ["batchConfirmsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBatchConfirmsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.batchConfirms(params);
      },
      ...options
    });
  };
  const useERC20ToDenom = <TData = QueryERC20ToDenomResponse,>({
    request,
    options
  }: UseERC20ToDenomQuery<TData>) => {
    const queryKey = ["eRC20ToDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryERC20ToDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.eRC20ToDenom(params);
      },
      ...options
    });
  };
  const useDenomToERC20 = <TData = QueryDenomToERC20Response,>({
    request,
    options
  }: UseDenomToERC20Query<TData>) => {
    const queryKey = ["denomToERC20Query", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomToERC20Response, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomToERC20(params);
      },
      ...options
    });
  };
  const useGetDelegateKeyByValidator = <TData = QueryDelegateKeysByValidatorAddressResponse,>({
    request,
    options
  }: UseGetDelegateKeyByValidatorQuery<TData>) => {
    const queryKey = ["getDelegateKeyByValidatorQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDelegateKeysByValidatorAddressResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getDelegateKeyByValidator(params);
      },
      ...options
    });
  };
  const useGetDelegateKeyByEth = <TData = QueryDelegateKeysByEthAddressResponse,>({
    request,
    options
  }: UseGetDelegateKeyByEthQuery<TData>) => {
    const queryKey = ["getDelegateKeyByEthQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDelegateKeysByEthAddressResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getDelegateKeyByEth(params);
      },
      ...options
    });
  };
  const useGetDelegateKeyByOrchestrator = <TData = QueryDelegateKeysByOrchestratorAddressResponse,>({
    request,
    options
  }: UseGetDelegateKeyByOrchestratorQuery<TData>) => {
    const queryKey = ["getDelegateKeyByOrchestratorQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDelegateKeysByOrchestratorAddressResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.getDelegateKeyByOrchestrator(params);
      },
      ...options
    });
  };
  const usePeggyModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UsePeggyModuleStateQuery<TData>) => {
    const queryKey = ["peggyModuleStateQuery", queryService];
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
        return queryService.value.peggyModuleState(params);
      },
      ...options
    });
  };
  const useMissingPeggoNonces = <TData = MissingNoncesResponse,>({
    request,
    options
  }: UseMissingPeggoNoncesQuery<TData>) => {
    const queryKey = ["missingPeggoNoncesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<MissingNoncesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.missingPeggoNonces(params);
      },
      ...options
    });
  };
  return {
    /** Deployments queries deployments */useParams,
    /** valset */useCurrentValset,
    useValsetRequest,
    useValsetConfirm,
    useValsetConfirmsByNonce,
    useLastValsetRequests,
    useLastPendingValsetRequestByAddr,
    /** claim */useLastEventByAddr,
    /** batch */useGetPendingSendToEth,
    useBatchFees,
    useOutgoingTxBatches,
    useLastPendingBatchRequestByAddr,
    useBatchRequestByNonce,
    useBatchConfirms,
    useERC20ToDenom,
    useDenomToERC20,
    useGetDelegateKeyByValidator,
    useGetDelegateKeyByEth,
    useGetDelegateKeyByOrchestrator,
    /** Retrieves the entire peggy module's state */usePeggyModuleState,
    useMissingPeggoNonces
  };
};