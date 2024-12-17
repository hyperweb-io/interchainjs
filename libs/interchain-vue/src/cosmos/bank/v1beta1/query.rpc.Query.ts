import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomMetadataByQueryStringRequest, QueryDenomMetadataByQueryStringResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomOwnersByQueryRequest, QueryDenomOwnersByQueryResponse, QuerySendEnabledRequest, QuerySendEnabledResponse, ReactiveQueryBalanceRequest, ReactiveQueryAllBalancesRequest, ReactiveQuerySpendableBalancesRequest, ReactiveQuerySpendableBalanceByDenomRequest, ReactiveQueryTotalSupplyRequest, ReactiveQuerySupplyOfRequest, ReactiveQueryParamsRequest, ReactiveQueryDenomMetadataRequest, ReactiveQueryDenomMetadataByQueryStringRequest, ReactiveQueryDenomsMetadataRequest, ReactiveQueryDenomOwnersRequest, ReactiveQueryDenomOwnersByQueryRequest, ReactiveQuerySendEnabledRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /**
   * AllBalances queries the balance of all coins for a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
  /**
   * SpendableBalances queries the spendable balance of all coins for a single
   * account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
  /**
   * SpendableBalanceByDenom queries the spendable balance of a single denom for
   * a single account.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.47
   */
  spendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse>;
  /**
   * TotalSupply queries the total supply of all coins.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /**
   * SupplyOf queries the supply of a single coin.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   */
  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomMetadata queries the client metadata of a given coin denomination. */
  denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
  /** DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
  denomMetadataByQueryString(request: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponse>;
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.46
   */
  denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
  /**
   * DenomOwnersByQuery queries for all account addresses that own a particular token
   * denomination.
   * 
   * Since: cosmos-sdk 0.50.3
   */
  denomOwnersByQuery(request: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponse>;
  /**
   * SendEnabled queries for SendEnabled entries.
   * 
   * This query only returns denominations that have specific SendEnabled settings.
   * Any denomination that does not have a specific setting will use the default
   * params.default_send_enabled, and will not be returned by this query.
   * 
   * Since: cosmos-sdk 0.47
   */
  sendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Balance queries the balance of a single coin for a single account. */
  balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new BinaryReader(data)));
  };
  /* AllBalances queries the balance of all coins for a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  allBalances = async (request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> => {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then(data => QueryAllBalancesResponse.decode(new BinaryReader(data)));
  };
  /* SpendableBalances queries the spendable balance of all coins for a single
   account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
  spendableBalances = async (request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> => {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then(data => QuerySpendableBalancesResponse.decode(new BinaryReader(data)));
  };
  /* SpendableBalanceByDenom queries the spendable balance of a single denom for
   a single account.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.47 */
  spendableBalanceByDenom = async (request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse> => {
    const data = QuerySpendableBalanceByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalanceByDenom", data);
    return promise.then(data => QuerySpendableBalanceByDenomResponse.decode(new BinaryReader(data)));
  };
  /* TotalSupply queries the total supply of all coins.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  totalSupply = async (request: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> => {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new BinaryReader(data)));
  };
  /* SupplyOf queries the supply of a single coin.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set. */
  supplyOf = async (request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> => {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then(data => QuerySupplyOfResponse.decode(new BinaryReader(data)));
  };
  /* Params queries the parameters of x/bank module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* DenomMetadata queries the client metadata of a given coin denomination. */
  denomMetadata = async (request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> => {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then(data => QueryDenomMetadataResponse.decode(new BinaryReader(data)));
  };
  /* DenomMetadataByQueryString queries the client metadata of a given coin denomination. */
  denomMetadataByQueryString = async (request: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponse> => {
    const data = QueryDenomMetadataByQueryStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadataByQueryString", data);
    return promise.then(data => QueryDenomMetadataByQueryStringResponse.decode(new BinaryReader(data)));
  };
  /* DenomsMetadata queries the client metadata for all registered coin
   denominations. */
  denomsMetadata = async (request: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponse> => {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then(data => QueryDenomsMetadataResponse.decode(new BinaryReader(data)));
  };
  /* DenomOwners queries for all account addresses that own a particular token
   denomination.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.46 */
  denomOwners = async (request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> => {
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
    return promise.then(data => QueryDenomOwnersResponse.decode(new BinaryReader(data)));
  };
  /* DenomOwnersByQuery queries for all account addresses that own a particular token
   denomination.
  
   Since: cosmos-sdk 0.50.3 */
  denomOwnersByQuery = async (request: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponse> => {
    const data = QueryDenomOwnersByQueryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwnersByQuery", data);
    return promise.then(data => QueryDenomOwnersByQueryResponse.decode(new BinaryReader(data)));
  };
  /* SendEnabled queries for SendEnabled entries.
  
   This query only returns denominations that have specific SendEnabled settings.
   Any denomination that does not have a specific setting will use the default
   params.default_send_enabled, and will not be returned by this query.
  
   Since: cosmos-sdk 0.47 */
  sendEnabled = async (request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse> => {
    const data = QuerySendEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SendEnabled", data);
    return promise.then(data => QuerySendEnabledResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
      return queryService.allBalances(request);
    },
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
      return queryService.spendableBalances(request);
    },
    spendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse> {
      return queryService.spendableBalanceByDenom(request);
    },
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupply(request);
    },
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
      return queryService.supplyOf(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
      return queryService.denomMetadata(request);
    },
    denomMetadataByQueryString(request: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponse> {
      return queryService.denomMetadataByQueryString(request);
    },
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse> {
      return queryService.denomsMetadata(request);
    },
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> {
      return queryService.denomOwners(request);
    },
    denomOwnersByQuery(request: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponse> {
      return queryService.denomOwnersByQuery(request);
    },
    sendEnabled(request: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse> {
      return queryService.sendEnabled(request);
    }
  };
};
export interface UseBalanceQuery<TData> extends VueQueryParams<QueryBalanceResponse, TData> {
  request: ReactiveQueryBalanceRequest;
}
export interface UseAllBalancesQuery<TData> extends VueQueryParams<QueryAllBalancesResponse, TData> {
  request: ReactiveQueryAllBalancesRequest;
}
export interface UseSpendableBalancesQuery<TData> extends VueQueryParams<QuerySpendableBalancesResponse, TData> {
  request: ReactiveQuerySpendableBalancesRequest;
}
export interface UseSpendableBalanceByDenomQuery<TData> extends VueQueryParams<QuerySpendableBalanceByDenomResponse, TData> {
  request: ReactiveQuerySpendableBalanceByDenomRequest;
}
export interface UseTotalSupplyQuery<TData> extends VueQueryParams<QueryTotalSupplyResponse, TData> {
  request?: ReactiveQueryTotalSupplyRequest;
}
export interface UseSupplyOfQuery<TData> extends VueQueryParams<QuerySupplyOfResponse, TData> {
  request: ReactiveQuerySupplyOfRequest;
}
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseDenomMetadataQuery<TData> extends VueQueryParams<QueryDenomMetadataResponse, TData> {
  request: ReactiveQueryDenomMetadataRequest;
}
export interface UseDenomMetadataByQueryStringQuery<TData> extends VueQueryParams<QueryDenomMetadataByQueryStringResponse, TData> {
  request: ReactiveQueryDenomMetadataByQueryStringRequest;
}
export interface UseDenomsMetadataQuery<TData> extends VueQueryParams<QueryDenomsMetadataResponse, TData> {
  request?: ReactiveQueryDenomsMetadataRequest;
}
export interface UseDenomOwnersQuery<TData> extends VueQueryParams<QueryDenomOwnersResponse, TData> {
  request: ReactiveQueryDenomOwnersRequest;
}
export interface UseDenomOwnersByQueryQuery<TData> extends VueQueryParams<QueryDenomOwnersByQueryResponse, TData> {
  request: ReactiveQueryDenomOwnersByQueryRequest;
}
export interface UseSendEnabledQuery<TData> extends VueQueryParams<QuerySendEnabledResponse, TData> {
  request: ReactiveQuerySendEnabledRequest;
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
  const useBalance = <TData = QueryBalanceResponse,>({
    request,
    options
  }: UseBalanceQuery<TData>) => {
    const queryKey = ["balanceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBalanceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.balance(params);
      },
      ...options
    });
  };
  const useAllBalances = <TData = QueryAllBalancesResponse,>({
    request,
    options
  }: UseAllBalancesQuery<TData>) => {
    const queryKey = ["allBalancesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAllBalancesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allBalances(params);
      },
      ...options
    });
  };
  const useSpendableBalances = <TData = QuerySpendableBalancesResponse,>({
    request,
    options
  }: UseSpendableBalancesQuery<TData>) => {
    const queryKey = ["spendableBalancesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySpendableBalancesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.spendableBalances(params);
      },
      ...options
    });
  };
  const useSpendableBalanceByDenom = <TData = QuerySpendableBalanceByDenomResponse,>({
    request,
    options
  }: UseSpendableBalanceByDenomQuery<TData>) => {
    const queryKey = ["spendableBalanceByDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySpendableBalanceByDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.spendableBalanceByDenom(params);
      },
      ...options
    });
  };
  const useTotalSupply = <TData = QueryTotalSupplyResponse,>({
    request,
    options
  }: UseTotalSupplyQuery<TData>) => {
    const queryKey = ["totalSupplyQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTotalSupplyResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.totalSupply(params);
      },
      ...options
    });
  };
  const useSupplyOf = <TData = QuerySupplyOfResponse,>({
    request,
    options
  }: UseSupplyOfQuery<TData>) => {
    const queryKey = ["supplyOfQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySupplyOfResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.supplyOf(params);
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
  const useDenomMetadata = <TData = QueryDenomMetadataResponse,>({
    request,
    options
  }: UseDenomMetadataQuery<TData>) => {
    const queryKey = ["denomMetadataQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomMetadataResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomMetadata(params);
      },
      ...options
    });
  };
  const useDenomMetadataByQueryString = <TData = QueryDenomMetadataByQueryStringResponse,>({
    request,
    options
  }: UseDenomMetadataByQueryStringQuery<TData>) => {
    const queryKey = ["denomMetadataByQueryStringQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomMetadataByQueryStringResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomMetadataByQueryString(params);
      },
      ...options
    });
  };
  const useDenomsMetadata = <TData = QueryDenomsMetadataResponse,>({
    request,
    options
  }: UseDenomsMetadataQuery<TData>) => {
    const queryKey = ["denomsMetadataQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomsMetadataResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomsMetadata(params);
      },
      ...options
    });
  };
  const useDenomOwners = <TData = QueryDenomOwnersResponse,>({
    request,
    options
  }: UseDenomOwnersQuery<TData>) => {
    const queryKey = ["denomOwnersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomOwnersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomOwners(params);
      },
      ...options
    });
  };
  const useDenomOwnersByQuery = <TData = QueryDenomOwnersByQueryResponse,>({
    request,
    options
  }: UseDenomOwnersByQueryQuery<TData>) => {
    const queryKey = ["denomOwnersByQueryQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDenomOwnersByQueryResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.denomOwnersByQuery(params);
      },
      ...options
    });
  };
  const useSendEnabled = <TData = QuerySendEnabledResponse,>({
    request,
    options
  }: UseSendEnabledQuery<TData>) => {
    const queryKey = ["sendEnabledQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QuerySendEnabledResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.sendEnabled(params);
      },
      ...options
    });
  };
  return {
    /** Balance queries the balance of a single coin for a single account. */useBalance,
    /**
     * AllBalances queries the balance of all coins for a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useAllBalances,
    /**
     * SpendableBalances queries the spendable balance of all coins for a single
     * account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useSpendableBalances,
    /**
     * SpendableBalanceByDenom queries the spendable balance of a single denom for
     * a single account.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSpendableBalanceByDenom,
    /**
     * TotalSupply queries the total supply of all coins.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useTotalSupply,
    /**
     * SupplyOf queries the supply of a single coin.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    useSupplyOf,
    /** Params queries the parameters of x/bank module. */useParams,
    /** DenomMetadata queries the client metadata of a given coin denomination. */useDenomMetadata,
    /** DenomMetadataByQueryString queries the client metadata of a given coin denomination. */useDenomMetadataByQueryString,
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata,
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.46
     */
    useDenomOwners,
    /**
     * DenomOwnersByQuery queries for all account addresses that own a particular token
     * denomination.
     * 
     * Since: cosmos-sdk 0.50.3
     */
    useDenomOwnersByQuery,
    /**
     * SendEnabled queries for SendEnabled entries.
     * 
     * This query only returns denominations that have specific SendEnabled settings.
     * Any denomination that does not have a specific setting will use the default
     * params.default_send_enabled, and will not be returned by this query.
     * 
     * Since: cosmos-sdk 0.47
     */
    useSendEnabled
  };
};