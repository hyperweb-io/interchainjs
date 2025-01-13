import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { QueryRequest, QueryResponse, ListQueryHandlersRequest, ListQueryHandlersResponse } from "./service";
/** Service defines the gRPC service for query server for v2 */
export interface Service {
  /** Query queries the server with a request, the request can be any sdk Msg. */
  query(request: QueryRequest): Promise<QueryResponse>;
  /** ListQueryHandlers lists all the available query handlers. */
  listQueryHandlers(request?: ListQueryHandlersRequest): Promise<ListQueryHandlersResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Query queries the server with a request, the request can be any sdk Msg. */
  query = async (request: QueryRequest): Promise<QueryResponse> => {
    const data = QueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.grpc.v2.Service", "Query", data);
    return promise.then(data => QueryResponse.decode(new BinaryReader(data)));
  };
  /* ListQueryHandlers lists all the available query handlers. */
  listQueryHandlers = async (request: ListQueryHandlersRequest = {}): Promise<ListQueryHandlersResponse> => {
    const data = ListQueryHandlersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.grpc.v2.Service", "ListQueryHandlers", data);
    return promise.then(data => ListQueryHandlersResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    query(request: QueryRequest): Promise<QueryResponse> {
      return queryService.query(request);
    },
    listQueryHandlers(request?: ListQueryHandlersRequest): Promise<ListQueryHandlersResponse> {
      return queryService.listQueryHandlers(request);
    }
  };
};
export interface UseQueryQuery<TData> extends VueQueryParams<QueryResponse, TData> {
  request: ReactiveQueryRequest;
}
export interface UseListQueryHandlersQuery<TData> extends VueQueryParams<ListQueryHandlersResponse, TData> {
  request?: ReactiveListQueryHandlersRequest;
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
  const useQuery = <TData = QueryResponse,>({
    request,
    options
  }: UseQueryQuery<TData>) => {
    const queryKey = ["queryQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.query(params);
      },
      ...options
    });
  };
  const useListQueryHandlers = <TData = ListQueryHandlersResponse,>({
    request,
    options
  }: UseListQueryHandlersQuery<TData>) => {
    const queryKey = ["listQueryHandlersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ListQueryHandlersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.listQueryHandlers(params);
      },
      ...options
    });
  };
  return {
    /** Query queries the server with a request, the request can be any sdk Msg. */useQuery,
    /** ListQueryHandlers lists all the available query handlers. */useListQueryHandlers
  };
};