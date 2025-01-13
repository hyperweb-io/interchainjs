import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryAccountRequest, AccountResponse, QueryAccountsRequest, AccountsResponse, QueryDisabledListRequest, DisabledListResponse, ReactiveQueryAccountRequest, ReactiveQueryAccountsRequest, ReactiveQueryDisabledListRequest } from "./query";
/** Query defines the circuit gRPC querier service. */
export interface Query {
  /** Account returns account permissions. */
  account(request: QueryAccountRequest): Promise<AccountResponse>;
  /** Account returns account permissions. */
  accounts(request?: QueryAccountsRequest): Promise<AccountsResponse>;
  /** DisabledList returns a list of disabled message urls */
  disabledList(request?: QueryDisabledListRequest): Promise<DisabledListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Account returns account permissions. */
  account = async (request: QueryAccountRequest): Promise<AccountResponse> => {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Account", data);
    return promise.then(data => AccountResponse.decode(new BinaryReader(data)));
  };
  /* Account returns account permissions. */
  accounts = async (request: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<AccountsResponse> => {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "Accounts", data);
    return promise.then(data => AccountsResponse.decode(new BinaryReader(data)));
  };
  /* DisabledList returns a list of disabled message urls */
  disabledList = async (request: QueryDisabledListRequest = {}): Promise<DisabledListResponse> => {
    const data = QueryDisabledListRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.circuit.v1.Query", "DisabledList", data);
    return promise.then(data => DisabledListResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    account(request: QueryAccountRequest): Promise<AccountResponse> {
      return queryService.account(request);
    },
    accounts(request?: QueryAccountsRequest): Promise<AccountsResponse> {
      return queryService.accounts(request);
    },
    disabledList(request?: QueryDisabledListRequest): Promise<DisabledListResponse> {
      return queryService.disabledList(request);
    }
  };
};
export interface UseAccountQuery<TData> extends VueQueryParams<AccountResponse, TData> {
  request: ReactiveQueryAccountRequest;
}
export interface UseAccountsQuery<TData> extends VueQueryParams<AccountsResponse, TData> {
  request?: ReactiveQueryAccountsRequest;
}
export interface UseDisabledListQuery<TData> extends VueQueryParams<DisabledListResponse, TData> {
  request?: ReactiveQueryDisabledListRequest;
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
  const useAccount = <TData = AccountResponse,>({
    request,
    options
  }: UseAccountQuery<TData>) => {
    const queryKey = ["accountQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.account(params);
      },
      ...options
    });
  };
  const useAccounts = <TData = AccountsResponse,>({
    request,
    options
  }: UseAccountsQuery<TData>) => {
    const queryKey = ["accountsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accounts(params);
      },
      ...options
    });
  };
  const useDisabledList = <TData = DisabledListResponse,>({
    request,
    options
  }: UseDisabledListQuery<TData>) => {
    const queryKey = ["disabledListQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<DisabledListResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.disabledList(params);
      },
      ...options
    });
  };
  return {
    /** Account returns account permissions. */useAccount,
    /** Account returns account permissions. */useAccounts,
    /** DisabledList returns a list of disabled message urls */useDisabledList
  };
};