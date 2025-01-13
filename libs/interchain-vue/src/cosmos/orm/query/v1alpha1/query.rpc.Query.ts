import { TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
/** Query is a generic gRPC service for querying ORM data. */
export interface Query {
  /** Get queries an ORM table against an unique index. */
  get(request: GetRequest): Promise<GetResponse>;
  /** List queries an ORM table against an index. */
  list(request: ListRequest): Promise<ListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Get queries an ORM table against an unique index. */
  get = async (request: GetRequest): Promise<GetResponse> => {
    const data = GetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "Get", data);
    return promise.then(data => GetResponse.decode(new BinaryReader(data)));
  };
  /* List queries an ORM table against an index. */
  list = async (request: ListRequest): Promise<ListResponse> => {
    const data = ListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.orm.query.v1alpha1.Query", "List", data);
    return promise.then(data => ListResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    get(request: GetRequest): Promise<GetResponse> {
      return queryService.get(request);
    },
    list(request: ListRequest): Promise<ListResponse> {
      return queryService.list(request);
    }
  };
};
export interface UseGetQuery<TData> extends VueQueryParams<GetResponse, TData> {
  request: ReactiveGetRequest;
}
export interface UseListQuery<TData> extends VueQueryParams<ListResponse, TData> {
  request: ReactiveListRequest;
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
  const useGet = <TData = GetResponse,>({
    request,
    options
  }: UseGetQuery<TData>) => {
    const queryKey = ["getQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GetResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.get(params);
      },
      ...options
    });
  };
  const useList = <TData = ListResponse,>({
    request,
    options
  }: UseListQuery<TData>) => {
    const queryKey = ["listQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ListResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.list(params);
      },
      ...options
    });
  };
  return {
    /** Get queries an ORM table against an unique index. */useGet,
    /** List queries an ORM table against an index. */useList
  };
};