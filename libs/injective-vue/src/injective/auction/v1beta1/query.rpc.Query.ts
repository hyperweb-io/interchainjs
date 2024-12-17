import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryAuctionParamsRequest, QueryAuctionParamsResponse, QueryCurrentAuctionBasketRequest, QueryCurrentAuctionBasketResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryLastAuctionResultRequest, QueryLastAuctionResultResponse, ReactiveQueryAuctionParamsRequest, ReactiveQueryCurrentAuctionBasketRequest, ReactiveQueryModuleStateRequest, ReactiveQueryLastAuctionResultRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves auction params */
  auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse>;
  /** Retrieves current auction basket with current highest bid and bidder */
  currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse>;
  /** Retrieves the entire auction module's state */
  auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  lastAuctionResult(request?: QueryLastAuctionResultRequest): Promise<QueryLastAuctionResultResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves auction params */
  auctionParams = async (request: QueryAuctionParamsRequest = {}): Promise<QueryAuctionParamsResponse> => {
    const data = QueryAuctionParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionParams", data);
    return promise.then(data => QueryAuctionParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves current auction basket with current highest bid and bidder */
  currentAuctionBasket = async (request: QueryCurrentAuctionBasketRequest = {}): Promise<QueryCurrentAuctionBasketResponse> => {
    const data = QueryCurrentAuctionBasketRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "CurrentAuctionBasket", data);
    return promise.then(data => QueryCurrentAuctionBasketResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire auction module's state */
  auctionModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "AuctionModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
  /* LastAuctionResult */
  lastAuctionResult = async (request: QueryLastAuctionResultRequest = {}): Promise<QueryLastAuctionResultResponse> => {
    const data = QueryLastAuctionResultRequest.encode(request).finish();
    const promise = this.rpc.request("injective.auction.v1beta1.Query", "LastAuctionResult", data);
    return promise.then(data => QueryLastAuctionResultResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    auctionParams(request?: QueryAuctionParamsRequest): Promise<QueryAuctionParamsResponse> {
      return queryService.auctionParams(request);
    },
    currentAuctionBasket(request?: QueryCurrentAuctionBasketRequest): Promise<QueryCurrentAuctionBasketResponse> {
      return queryService.currentAuctionBasket(request);
    },
    auctionModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.auctionModuleState(request);
    },
    lastAuctionResult(request?: QueryLastAuctionResultRequest): Promise<QueryLastAuctionResultResponse> {
      return queryService.lastAuctionResult(request);
    }
  };
};
export interface UseAuctionParamsQuery<TData> extends VueQueryParams<QueryAuctionParamsResponse, TData> {
  request?: ReactiveQueryAuctionParamsRequest;
}
export interface UseCurrentAuctionBasketQuery<TData> extends VueQueryParams<QueryCurrentAuctionBasketResponse, TData> {
  request?: ReactiveQueryCurrentAuctionBasketRequest;
}
export interface UseAuctionModuleStateQuery<TData> extends VueQueryParams<QueryModuleStateResponse, TData> {
  request?: ReactiveQueryModuleStateRequest;
}
export interface UseLastAuctionResultQuery<TData> extends VueQueryParams<QueryLastAuctionResultResponse, TData> {
  request?: ReactiveQueryLastAuctionResultRequest;
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
  const useAuctionParams = <TData = QueryAuctionParamsResponse,>({
    request,
    options
  }: UseAuctionParamsQuery<TData>) => {
    const queryKey = ["auctionParamsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAuctionParamsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.auctionParams(params);
      },
      ...options
    });
  };
  const useCurrentAuctionBasket = <TData = QueryCurrentAuctionBasketResponse,>({
    request,
    options
  }: UseCurrentAuctionBasketQuery<TData>) => {
    const queryKey = ["currentAuctionBasketQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryCurrentAuctionBasketResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.currentAuctionBasket(params);
      },
      ...options
    });
  };
  const useAuctionModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseAuctionModuleStateQuery<TData>) => {
    const queryKey = ["auctionModuleStateQuery", queryService];
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
        return queryService.value.auctionModuleState(params);
      },
      ...options
    });
  };
  const useLastAuctionResult = <TData = QueryLastAuctionResultResponse,>({
    request,
    options
  }: UseLastAuctionResultQuery<TData>) => {
    const queryKey = ["lastAuctionResultQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLastAuctionResultResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.lastAuctionResult(params);
      },
      ...options
    });
  };
  return {
    /** Retrieves auction params */useAuctionParams,
    /** Retrieves current auction basket with current highest bid and bidder */useCurrentAuctionBasket,
    /** Retrieves the entire auction module's state */useAuctionModuleState,
    useLastAuctionResult
  };
};