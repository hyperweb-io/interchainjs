import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryPythPriceRequest, QueryPythPriceResponse, ReactiveQueryParamsRequest, ReactiveQueryBandRelayersRequest, ReactiveQueryBandPriceStatesRequest, ReactiveQueryBandIBCPriceStatesRequest, ReactiveQueryPriceFeedPriceStatesRequest, ReactiveQueryCoinbasePriceStatesRequest, ReactiveQueryPythPriceStatesRequest, ReactiveQueryStorkPriceStatesRequest, ReactiveQueryStorkPublishersRequest, ReactiveQueryProviderPriceStateRequest, ReactiveQueryModuleStateRequest, ReactiveQueryHistoricalPriceRecordsRequest, ReactiveQueryOracleVolatilityRequest, ReactiveQueryOracleProvidersInfoRequest, ReactiveQueryOracleProviderPricesRequest, ReactiveQueryOraclePriceRequest, ReactiveQueryPythPriceRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves oracle params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Retrieves the band relayers */
  bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse>;
  /** Retrieves the state for all band price feeds */
  bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse>;
  /** Retrieves the state for all band ibc price feeds */
  bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse>;
  /** Retrieves the state for all price feeds */
  priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse>;
  /** Retrieves the state for all coinbase price feeds */
  coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse>;
  /** Retrieves the state for all pyth price feeds */
  pythPriceStates(request?: QueryPythPriceStatesRequest): Promise<QueryPythPriceStatesResponse>;
  /** Retrieves the state for all stork price feeds */
  storkPriceStates(request?: QueryStorkPriceStatesRequest): Promise<QueryStorkPriceStatesResponse>;
  /** Retrieves all stork publishers */
  storkPublishers(request?: QueryStorkPublishersRequest): Promise<QueryStorkPublishersResponse>;
  /** Retrieves the state for all provider price feeds */
  providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse>;
  /** Retrieves the entire oracle module's state */
  oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse>;
  /** Retrieves historical price records for a given OracleType and Symbol */
  historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse>;
  /** Retrieves mixed volatility value for the specified pair of base/quote */
  oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse>;
  oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse>;
  oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse>;
  oraclePrice(request: QueryOraclePriceRequest): Promise<QueryOraclePriceResponse>;
  pythPrice(request: QueryPythPriceRequest): Promise<QueryPythPriceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves oracle params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the band relayers */
  bandRelayers = async (request: QueryBandRelayersRequest = {}): Promise<QueryBandRelayersResponse> => {
    const data = QueryBandRelayersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandRelayers", data);
    return promise.then(data => QueryBandRelayersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all band price feeds */
  bandPriceStates = async (request: QueryBandPriceStatesRequest = {}): Promise<QueryBandPriceStatesResponse> => {
    const data = QueryBandPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandPriceStates", data);
    return promise.then(data => QueryBandPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all band ibc price feeds */
  bandIBCPriceStates = async (request: QueryBandIBCPriceStatesRequest = {}): Promise<QueryBandIBCPriceStatesResponse> => {
    const data = QueryBandIBCPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "BandIBCPriceStates", data);
    return promise.then(data => QueryBandIBCPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all price feeds */
  priceFeedPriceStates = async (request: QueryPriceFeedPriceStatesRequest = {}): Promise<QueryPriceFeedPriceStatesResponse> => {
    const data = QueryPriceFeedPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PriceFeedPriceStates", data);
    return promise.then(data => QueryPriceFeedPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all coinbase price feeds */
  coinbasePriceStates = async (request: QueryCoinbasePriceStatesRequest = {}): Promise<QueryCoinbasePriceStatesResponse> => {
    const data = QueryCoinbasePriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "CoinbasePriceStates", data);
    return promise.then(data => QueryCoinbasePriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all pyth price feeds */
  pythPriceStates = async (request: QueryPythPriceStatesRequest = {}): Promise<QueryPythPriceStatesResponse> => {
    const data = QueryPythPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PythPriceStates", data);
    return promise.then(data => QueryPythPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all stork price feeds */
  storkPriceStates = async (request: QueryStorkPriceStatesRequest = {}): Promise<QueryStorkPriceStatesResponse> => {
    const data = QueryStorkPriceStatesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "StorkPriceStates", data);
    return promise.then(data => QueryStorkPriceStatesResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves all stork publishers */
  storkPublishers = async (request: QueryStorkPublishersRequest = {}): Promise<QueryStorkPublishersResponse> => {
    const data = QueryStorkPublishersRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "StorkPublishers", data);
    return promise.then(data => QueryStorkPublishersResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the state for all provider price feeds */
  providerPriceState = async (request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse> => {
    const data = QueryProviderPriceStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "ProviderPriceState", data);
    return promise.then(data => QueryProviderPriceStateResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves the entire oracle module's state */
  oracleModuleState = async (request: QueryModuleStateRequest = {}): Promise<QueryModuleStateResponse> => {
    const data = QueryModuleStateRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleModuleState", data);
    return promise.then(data => QueryModuleStateResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves historical price records for a given OracleType and Symbol */
  historicalPriceRecords = async (request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse> => {
    const data = QueryHistoricalPriceRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "HistoricalPriceRecords", data);
    return promise.then(data => QueryHistoricalPriceRecordsResponse.decode(new BinaryReader(data)));
  };
  /* Retrieves mixed volatility value for the specified pair of base/quote */
  oracleVolatility = async (request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse> => {
    const data = QueryOracleVolatilityRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleVolatility", data);
    return promise.then(data => QueryOracleVolatilityResponse.decode(new BinaryReader(data)));
  };
  /* OracleProvidersInfo */
  oracleProvidersInfo = async (request: QueryOracleProvidersInfoRequest = {}): Promise<QueryOracleProvidersInfoResponse> => {
    const data = QueryOracleProvidersInfoRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProvidersInfo", data);
    return promise.then(data => QueryOracleProvidersInfoResponse.decode(new BinaryReader(data)));
  };
  /* OracleProviderPrices */
  oracleProviderPrices = async (request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse> => {
    const data = QueryOracleProviderPricesRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OracleProviderPrices", data);
    return promise.then(data => QueryOracleProviderPricesResponse.decode(new BinaryReader(data)));
  };
  /* OraclePrice */
  oraclePrice = async (request: QueryOraclePriceRequest): Promise<QueryOraclePriceResponse> => {
    const data = QueryOraclePriceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "OraclePrice", data);
    return promise.then(data => QueryOraclePriceResponse.decode(new BinaryReader(data)));
  };
  /* PythPrice */
  pythPrice = async (request: QueryPythPriceRequest): Promise<QueryPythPriceResponse> => {
    const data = QueryPythPriceRequest.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Query", "PythPrice", data);
    return promise.then(data => QueryPythPriceResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    bandRelayers(request?: QueryBandRelayersRequest): Promise<QueryBandRelayersResponse> {
      return queryService.bandRelayers(request);
    },
    bandPriceStates(request?: QueryBandPriceStatesRequest): Promise<QueryBandPriceStatesResponse> {
      return queryService.bandPriceStates(request);
    },
    bandIBCPriceStates(request?: QueryBandIBCPriceStatesRequest): Promise<QueryBandIBCPriceStatesResponse> {
      return queryService.bandIBCPriceStates(request);
    },
    priceFeedPriceStates(request?: QueryPriceFeedPriceStatesRequest): Promise<QueryPriceFeedPriceStatesResponse> {
      return queryService.priceFeedPriceStates(request);
    },
    coinbasePriceStates(request?: QueryCoinbasePriceStatesRequest): Promise<QueryCoinbasePriceStatesResponse> {
      return queryService.coinbasePriceStates(request);
    },
    pythPriceStates(request?: QueryPythPriceStatesRequest): Promise<QueryPythPriceStatesResponse> {
      return queryService.pythPriceStates(request);
    },
    storkPriceStates(request?: QueryStorkPriceStatesRequest): Promise<QueryStorkPriceStatesResponse> {
      return queryService.storkPriceStates(request);
    },
    storkPublishers(request?: QueryStorkPublishersRequest): Promise<QueryStorkPublishersResponse> {
      return queryService.storkPublishers(request);
    },
    providerPriceState(request: QueryProviderPriceStateRequest): Promise<QueryProviderPriceStateResponse> {
      return queryService.providerPriceState(request);
    },
    oracleModuleState(request?: QueryModuleStateRequest): Promise<QueryModuleStateResponse> {
      return queryService.oracleModuleState(request);
    },
    historicalPriceRecords(request: QueryHistoricalPriceRecordsRequest): Promise<QueryHistoricalPriceRecordsResponse> {
      return queryService.historicalPriceRecords(request);
    },
    oracleVolatility(request: QueryOracleVolatilityRequest): Promise<QueryOracleVolatilityResponse> {
      return queryService.oracleVolatility(request);
    },
    oracleProvidersInfo(request?: QueryOracleProvidersInfoRequest): Promise<QueryOracleProvidersInfoResponse> {
      return queryService.oracleProvidersInfo(request);
    },
    oracleProviderPrices(request: QueryOracleProviderPricesRequest): Promise<QueryOracleProviderPricesResponse> {
      return queryService.oracleProviderPrices(request);
    },
    oraclePrice(request: QueryOraclePriceRequest): Promise<QueryOraclePriceResponse> {
      return queryService.oraclePrice(request);
    },
    pythPrice(request: QueryPythPriceRequest): Promise<QueryPythPriceResponse> {
      return queryService.pythPrice(request);
    }
  };
};
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseBandRelayersQuery<TData> extends VueQueryParams<QueryBandRelayersResponse, TData> {
  request?: ReactiveQueryBandRelayersRequest;
}
export interface UseBandPriceStatesQuery<TData> extends VueQueryParams<QueryBandPriceStatesResponse, TData> {
  request?: ReactiveQueryBandPriceStatesRequest;
}
export interface UseBandIBCPriceStatesQuery<TData> extends VueQueryParams<QueryBandIBCPriceStatesResponse, TData> {
  request?: ReactiveQueryBandIBCPriceStatesRequest;
}
export interface UsePriceFeedPriceStatesQuery<TData> extends VueQueryParams<QueryPriceFeedPriceStatesResponse, TData> {
  request?: ReactiveQueryPriceFeedPriceStatesRequest;
}
export interface UseCoinbasePriceStatesQuery<TData> extends VueQueryParams<QueryCoinbasePriceStatesResponse, TData> {
  request?: ReactiveQueryCoinbasePriceStatesRequest;
}
export interface UsePythPriceStatesQuery<TData> extends VueQueryParams<QueryPythPriceStatesResponse, TData> {
  request?: ReactiveQueryPythPriceStatesRequest;
}
export interface UseStorkPriceStatesQuery<TData> extends VueQueryParams<QueryStorkPriceStatesResponse, TData> {
  request?: ReactiveQueryStorkPriceStatesRequest;
}
export interface UseStorkPublishersQuery<TData> extends VueQueryParams<QueryStorkPublishersResponse, TData> {
  request?: ReactiveQueryStorkPublishersRequest;
}
export interface UseProviderPriceStateQuery<TData> extends VueQueryParams<QueryProviderPriceStateResponse, TData> {
  request: ReactiveQueryProviderPriceStateRequest;
}
export interface UseOracleModuleStateQuery<TData> extends VueQueryParams<QueryModuleStateResponse, TData> {
  request?: ReactiveQueryModuleStateRequest;
}
export interface UseHistoricalPriceRecordsQuery<TData> extends VueQueryParams<QueryHistoricalPriceRecordsResponse, TData> {
  request: ReactiveQueryHistoricalPriceRecordsRequest;
}
export interface UseOracleVolatilityQuery<TData> extends VueQueryParams<QueryOracleVolatilityResponse, TData> {
  request: ReactiveQueryOracleVolatilityRequest;
}
export interface UseOracleProvidersInfoQuery<TData> extends VueQueryParams<QueryOracleProvidersInfoResponse, TData> {
  request?: ReactiveQueryOracleProvidersInfoRequest;
}
export interface UseOracleProviderPricesQuery<TData> extends VueQueryParams<QueryOracleProviderPricesResponse, TData> {
  request: ReactiveQueryOracleProviderPricesRequest;
}
export interface UseOraclePriceQuery<TData> extends VueQueryParams<QueryOraclePriceResponse, TData> {
  request: ReactiveQueryOraclePriceRequest;
}
export interface UsePythPriceQuery<TData> extends VueQueryParams<QueryPythPriceResponse, TData> {
  request: ReactiveQueryPythPriceRequest;
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
  const useBandRelayers = <TData = QueryBandRelayersResponse,>({
    request,
    options
  }: UseBandRelayersQuery<TData>) => {
    const queryKey = ["bandRelayersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBandRelayersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.bandRelayers(params);
      },
      ...options
    });
  };
  const useBandPriceStates = <TData = QueryBandPriceStatesResponse,>({
    request,
    options
  }: UseBandPriceStatesQuery<TData>) => {
    const queryKey = ["bandPriceStatesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBandPriceStatesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.bandPriceStates(params);
      },
      ...options
    });
  };
  const useBandIBCPriceStates = <TData = QueryBandIBCPriceStatesResponse,>({
    request,
    options
  }: UseBandIBCPriceStatesQuery<TData>) => {
    const queryKey = ["bandIBCPriceStatesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryBandIBCPriceStatesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.bandIBCPriceStates(params);
      },
      ...options
    });
  };
  const usePriceFeedPriceStates = <TData = QueryPriceFeedPriceStatesResponse,>({
    request,
    options
  }: UsePriceFeedPriceStatesQuery<TData>) => {
    const queryKey = ["priceFeedPriceStatesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPriceFeedPriceStatesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.priceFeedPriceStates(params);
      },
      ...options
    });
  };
  const useCoinbasePriceStates = <TData = QueryCoinbasePriceStatesResponse,>({
    request,
    options
  }: UseCoinbasePriceStatesQuery<TData>) => {
    const queryKey = ["coinbasePriceStatesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryCoinbasePriceStatesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.coinbasePriceStates(params);
      },
      ...options
    });
  };
  const usePythPriceStates = <TData = QueryPythPriceStatesResponse,>({
    request,
    options
  }: UsePythPriceStatesQuery<TData>) => {
    const queryKey = ["pythPriceStatesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPythPriceStatesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.pythPriceStates(params);
      },
      ...options
    });
  };
  const useStorkPriceStates = <TData = QueryStorkPriceStatesResponse,>({
    request,
    options
  }: UseStorkPriceStatesQuery<TData>) => {
    const queryKey = ["storkPriceStatesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryStorkPriceStatesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.storkPriceStates(params);
      },
      ...options
    });
  };
  const useStorkPublishers = <TData = QueryStorkPublishersResponse,>({
    request,
    options
  }: UseStorkPublishersQuery<TData>) => {
    const queryKey = ["storkPublishersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryStorkPublishersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.storkPublishers(params);
      },
      ...options
    });
  };
  const useProviderPriceState = <TData = QueryProviderPriceStateResponse,>({
    request,
    options
  }: UseProviderPriceStateQuery<TData>) => {
    const queryKey = ["providerPriceStateQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryProviderPriceStateResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.providerPriceState(params);
      },
      ...options
    });
  };
  const useOracleModuleState = <TData = QueryModuleStateResponse,>({
    request,
    options
  }: UseOracleModuleStateQuery<TData>) => {
    const queryKey = ["oracleModuleStateQuery", queryService];
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
        return queryService.value.oracleModuleState(params);
      },
      ...options
    });
  };
  const useHistoricalPriceRecords = <TData = QueryHistoricalPriceRecordsResponse,>({
    request,
    options
  }: UseHistoricalPriceRecordsQuery<TData>) => {
    const queryKey = ["historicalPriceRecordsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryHistoricalPriceRecordsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.historicalPriceRecords(params);
      },
      ...options
    });
  };
  const useOracleVolatility = <TData = QueryOracleVolatilityResponse,>({
    request,
    options
  }: UseOracleVolatilityQuery<TData>) => {
    const queryKey = ["oracleVolatilityQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryOracleVolatilityResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.oracleVolatility(params);
      },
      ...options
    });
  };
  const useOracleProvidersInfo = <TData = QueryOracleProvidersInfoResponse,>({
    request,
    options
  }: UseOracleProvidersInfoQuery<TData>) => {
    const queryKey = ["oracleProvidersInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryOracleProvidersInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.oracleProvidersInfo(params);
      },
      ...options
    });
  };
  const useOracleProviderPrices = <TData = QueryOracleProviderPricesResponse,>({
    request,
    options
  }: UseOracleProviderPricesQuery<TData>) => {
    const queryKey = ["oracleProviderPricesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryOracleProviderPricesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.oracleProviderPrices(params);
      },
      ...options
    });
  };
  const useOraclePrice = <TData = QueryOraclePriceResponse,>({
    request,
    options
  }: UseOraclePriceQuery<TData>) => {
    const queryKey = ["oraclePriceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryOraclePriceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.oraclePrice(params);
      },
      ...options
    });
  };
  const usePythPrice = <TData = QueryPythPriceResponse,>({
    request,
    options
  }: UsePythPriceQuery<TData>) => {
    const queryKey = ["pythPriceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryPythPriceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.pythPrice(params);
      },
      ...options
    });
  };
  return {
    /** Retrieves oracle params */useParams,
    /** Retrieves the band relayers */useBandRelayers,
    /** Retrieves the state for all band price feeds */useBandPriceStates,
    /** Retrieves the state for all band ibc price feeds */useBandIBCPriceStates,
    /** Retrieves the state for all price feeds */usePriceFeedPriceStates,
    /** Retrieves the state for all coinbase price feeds */useCoinbasePriceStates,
    /** Retrieves the state for all pyth price feeds */usePythPriceStates,
    /** Retrieves the state for all stork price feeds */useStorkPriceStates,
    /** Retrieves all stork publishers */useStorkPublishers,
    /** Retrieves the state for all provider price feeds */useProviderPriceState,
    /** Retrieves the entire oracle module's state */useOracleModuleState,
    /** Retrieves historical price records for a given OracleType and Symbol */useHistoricalPriceRecords,
    /** Retrieves mixed volatility value for the specified pair of base/quote */useOracleVolatility,
    useOracleProvidersInfo,
    useOracleProviderPrices,
    useOraclePrice,
    usePythPrice
  };
};