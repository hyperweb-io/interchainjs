import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryFeedConfigRequest, QueryFeedConfigResponse, QueryFeedConfigInfoRequest, QueryFeedConfigInfoResponse, QueryLatestRoundRequest, QueryLatestRoundResponse, QueryLatestTransmissionDetailsRequest, QueryLatestTransmissionDetailsResponse, QueryOwedAmountRequest, QueryOwedAmountResponse, QueryModuleStateRequest, QueryModuleStateResponse, ReactiveQueryParamsRequest, ReactiveQueryFeedConfigRequest, ReactiveQueryFeedConfigInfoRequest, ReactiveQueryLatestRoundRequest, ReactiveQueryLatestTransmissionDetailsRequest, ReactiveQueryOwedAmountRequest, ReactiveQueryModuleStateRequest } from "./query";
/** Query defines the gRPC querier service for OCR module. */
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Retrieves the OCR FeedConfig for a given FeedId */
  feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse>;
  /** Retrieves the OCR FeedConfigInfo for a given FeedId */
  feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse>;
  /** Retrieves latest round ID and data, including median answer for that round */
  latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse>;
  /**
   * LatestTransmissionDetails returns details about the latest trasmission
   * recorded on chain for the given feed ID.
   */
  latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse>;
  /** Retrieves transmitter's owed amount */
  owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse>;
  /** Retrieves the entire OCR module's state */
  ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the OCR FeedConfig for a given FeedId */
  feedConfig = async (request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse> => {
    const data = QueryFeedConfigRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfig", data);
    return promise.then(data => QueryFeedConfigResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the OCR FeedConfigInfo for a given FeedId */
  feedConfigInfo = async (request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse> => {
    const data = QueryFeedConfigInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "FeedConfigInfo", data);
    return promise.then(data => QueryFeedConfigInfoResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves latest round ID and data, including median answer for that round */
  latestRound = async (request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse> => {
    const data = QueryLatestRoundRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestRound", data);
    return promise.then(data => QueryLatestRoundResponse.decode(new BinaryReader(data)));
  };
  /* LatestTransmissionDetails returns details about the latest trasmission
   recorded on chain for the given feed ID. */
  latestTransmissionDetails = async (request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse> => {
    const data = QueryLatestTransmissionDetailsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "LatestTransmissionDetails", data);
    return promise.then(data => QueryLatestTransmissionDetailsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves transmitter's owed amount */
  owedAmount = async (request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse> => {
    const data = QueryOwedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OwedAmount", data);
    return promise.then(data => QueryOwedAmountResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire OCR module's state */
  ocrModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.ocr.v1beta1.Query", "OcrModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    feedConfig(request: QueryFeedConfigRequest): Promise<QueryFeedConfigResponse> {
      return queryService.feedConfig(request);
    },
    feedConfigInfo(request: QueryFeedConfigInfoRequest): Promise<QueryFeedConfigInfoResponse> {
      return queryService.feedConfigInfo(request);
    },
    latestRound(request: QueryLatestRoundRequest): Promise<QueryLatestRoundResponse> {
      return queryService.latestRound(request);
    },
    latestTransmissionDetails(request: QueryLatestTransmissionDetailsRequest): Promise<QueryLatestTransmissionDetailsResponse> {
      return queryService.latestTransmissionDetails(request);
    },
    owedAmount(request: QueryOwedAmountRequest): Promise<QueryOwedAmountResponse> {
      return queryService.owedAmount(request);
    },
    ocrModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.ocrModuleState(request);
    }
  };
};
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseFeedConfigQuery<TData> extends VueQueryParams<QueryFeedConfigResponse, TData> {
  request: ReactiveQueryFeedConfigRequest;
}
export interface UseFeedConfigInfoQuery<TData> extends VueQueryParams<QueryFeedConfigInfoResponse, TData> {
  request: ReactiveQueryFeedConfigInfoRequest;
}
export interface UseLatestRoundQuery<TData> extends VueQueryParams<QueryLatestRoundResponse, TData> {
  request: ReactiveQueryLatestRoundRequest;
}
export interface UseLatestTransmissionDetailsQuery<TData> extends VueQueryParams<QueryLatestTransmissionDetailsResponse, TData> {
  request: ReactiveQueryLatestTransmissionDetailsRequest;
}
export interface UseOwedAmountQuery<TData> extends VueQueryParams<QueryOwedAmountResponse, TData> {
  request: ReactiveQueryOwedAmountRequest;
}
export interface UseOcrModuleStateQuery<TData> extends VueQueryParams<QueryModuleStateResponse, TData> {
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
  const useFeedConfig = <TData = QueryFeedConfigResponse,>({
    request,
    options
  }: UseFeedConfigQuery<TData>) => {
    const queryKey = ["feedConfigQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryFeedConfigResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.feedConfig(params);
      },
      ...options
    });
  };
  const useFeedConfigInfo = <TData = QueryFeedConfigInfoResponse,>({
    request,
    options
  }: UseFeedConfigInfoQuery<TData>) => {
    const queryKey = ["feedConfigInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryFeedConfigInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.feedConfigInfo(params);
      },
      ...options
    });
  };
  const useLatestRound = <TData = QueryLatestRoundResponse,>({
    request,
    options
  }: UseLatestRoundQuery<TData>) => {
    const queryKey = ["latestRoundQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLatestRoundResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.latestRound(params);
      },
      ...options
    });
  };
  const useLatestTransmissionDetails = <TData = QueryLatestTransmissionDetailsResponse,>({
    request,
    options
  }: UseLatestTransmissionDetailsQuery<TData>) => {
    const queryKey = ["latestTransmissionDetailsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLatestTransmissionDetailsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.latestTransmissionDetails(params);
      },
      ...options
    });
  };
  const useOwedAmount = <TData = QueryOwedAmountResponse,>({
    request,
    options
  }: UseOwedAmountQuery<TData>) => {
    const queryKey = ["owedAmountQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryOwedAmountResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.owedAmount(params);
      },
      ...options
    });
  };
  const useOcrModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseOcrModuleStateQuery<TData>) => {
    const queryKey = ["ocrModuleStateQuery", queryService];
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
        return queryService.value.ocrModuleState(params);
      },
      ...options
    });
  };
  return {
    useParams,
    /** Retrieves the OCR FeedConfig for a given FeedId */useFeedConfig,
    /** Retrieves the OCR FeedConfigInfo for a given FeedId */useFeedConfigInfo,
    /** Retrieves latest round ID and data, including median answer for that round */useLatestRound,
    /**
     * LatestTransmissionDetails returns details about the latest trasmission
     * recorded on chain for the given feed ID.
     */
    useLatestTransmissionDetails,
    /** Retrieves transmitter's owed amount */useOwedAmount,
    /** Retrieves the entire OCR module's state */useOcrModuleState
  };
};