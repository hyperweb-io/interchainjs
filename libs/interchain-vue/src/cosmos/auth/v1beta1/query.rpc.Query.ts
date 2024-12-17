import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse, ReactiveQueryAccountsRequest, ReactiveQueryAccountRequest, ReactiveQueryAccountAddressByIDRequest, ReactiveQueryParamsRequest, ReactiveQueryModuleAccountsRequest, ReactiveQueryModuleAccountByNameRequest, ReactiveQueryAccountInfoRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Accounts returns all the existing accounts.
   * 
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   * 
   * Since: cosmos-sdk 0.43
   */
  accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */
  account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /**
   * AccountAddressByID returns account address based on account number.
   * 
   * Since: cosmos-sdk 0.46.2
   */
  accountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse>;
  /** Params queries all parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * ModuleAccounts returns all the existing module accounts.
   * 
   * Since: cosmos-sdk 0.46
   */
  moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
  /** ModuleAccountByName returns the module account info by module name */
  moduleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse>;
  /**
   * Bech32Prefix queries bech32Prefix
   * 
   * Since: cosmos-sdk 0.46
   */
  bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
  /**
   * AddressBytesToString converts Account Address bytes to string
   * 
   * Since: cosmos-sdk 0.46
   */
  addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
  /**
   * AddressStringToBytes converts Address string to bytes
   * 
   * Since: cosmos-sdk 0.46
   */
  addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
  /**
   * AccountInfo queries account info which is common to all account types.
   * 
   * Since: cosmos-sdk 0.47
   */
  accountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Accounts returns all the existing accounts.
  
   When called from another module, this query might consume a high amount of
   gas if the pagination field is incorrectly set.
  
   Since: cosmos-sdk 0.43 */
  accounts = async (request: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<QueryAccountsResponse> => {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new BinaryReader(data)));
  };
  /* Account returns account details based on address. */
  account = async (request: QueryAccountRequest): Promise<QueryAccountResponse> => {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then(data => QueryAccountResponse.decode(new BinaryReader(data)));
  };
  /* AccountAddressByID returns account address based on account number.
  
   Since: cosmos-sdk 0.46.2 */
  accountAddressByID = async (request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse> => {
    const data = QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
    return promise.then(data => QueryAccountAddressByIDResponse.decode(new BinaryReader(data)));
  };
  /* Params queries all parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ModuleAccounts returns all the existing module accounts.
  
   Since: cosmos-sdk 0.46 */
  moduleAccounts = async (request: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponse> => {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
    return promise.then(data => QueryModuleAccountsResponse.decode(new BinaryReader(data)));
  };
  /* ModuleAccountByName returns the module account info by module name */
  moduleAccountByName = async (request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse> => {
    const data = QueryModuleAccountByNameRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
    return promise.then(data => QueryModuleAccountByNameResponse.decode(new BinaryReader(data)));
  };
  /* Bech32Prefix queries bech32Prefix
  
   Since: cosmos-sdk 0.46 */
  bech32Prefix = async (request: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponse> => {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
    return promise.then(data => Bech32PrefixResponse.decode(new BinaryReader(data)));
  };
  /* AddressBytesToString converts Account Address bytes to string
  
   Since: cosmos-sdk 0.46 */
  addressBytesToString = async (request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> => {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
    return promise.then(data => AddressBytesToStringResponse.decode(new BinaryReader(data)));
  };
  /* AddressStringToBytes converts Address string to bytes
  
   Since: cosmos-sdk 0.46 */
  addressStringToBytes = async (request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> => {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
    return promise.then(data => AddressStringToBytesResponse.decode(new BinaryReader(data)));
  };
  /* AccountInfo queries account info which is common to all account types.
  
   Since: cosmos-sdk 0.47 */
  accountInfo = async (request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse> => {
    const data = QueryAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
    return promise.then(data => QueryAccountInfoResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse> {
      return queryService.accounts(request);
    },
    account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
      return queryService.account(request);
    },
    accountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse> {
      return queryService.accountAddressByID(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse> {
      return queryService.moduleAccounts(request);
    },
    moduleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse> {
      return queryService.moduleAccountByName(request);
    },
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse> {
      return queryService.bech32Prefix(request);
    },
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> {
      return queryService.addressBytesToString(request);
    },
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> {
      return queryService.addressStringToBytes(request);
    },
    accountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse> {
      return queryService.accountInfo(request);
    }
  };
};
export interface UseAccountsQuery<TData> extends VueQueryParams<QueryAccountsResponse, TData> {
  request?: ReactiveQueryAccountsRequest;
}
export interface UseAccountQuery<TData> extends VueQueryParams<QueryAccountResponse, TData> {
  request: ReactiveQueryAccountRequest;
}
export interface UseAccountAddressByIDQuery<TData> extends VueQueryParams<QueryAccountAddressByIDResponse, TData> {
  request: ReactiveQueryAccountAddressByIDRequest;
}
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseModuleAccountsQuery<TData> extends VueQueryParams<QueryModuleAccountsResponse, TData> {
  request?: ReactiveQueryModuleAccountsRequest;
}
export interface UseModuleAccountByNameQuery<TData> extends VueQueryParams<QueryModuleAccountByNameResponse, TData> {
  request: ReactiveQueryModuleAccountByNameRequest;
}
export interface UseBech32PrefixQuery<TData> extends VueQueryParams<Bech32PrefixResponse, TData> {
  request?: ReactiveBech32PrefixRequest;
}
export interface UseAddressBytesToStringQuery<TData> extends VueQueryParams<AddressBytesToStringResponse, TData> {
  request: ReactiveAddressBytesToStringRequest;
}
export interface UseAddressStringToBytesQuery<TData> extends VueQueryParams<AddressStringToBytesResponse, TData> {
  request: ReactiveAddressStringToBytesRequest;
}
export interface UseAccountInfoQuery<TData> extends VueQueryParams<QueryAccountInfoResponse, TData> {
  request: ReactiveQueryAccountInfoRequest;
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
  const useAccounts = <TData = QueryAccountsResponse,>({
    request,
    options
  }: UseAccountsQuery<TData>) => {
    const queryKey = ["accountsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAccountsResponse, Error, TData>({
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
  const useAccount = <TData = QueryAccountResponse,>({
    request,
    options
  }: UseAccountQuery<TData>) => {
    const queryKey = ["accountQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAccountResponse, Error, TData>({
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
  const useAccountAddressByID = <TData = QueryAccountAddressByIDResponse,>({
    request,
    options
  }: UseAccountAddressByIDQuery<TData>) => {
    const queryKey = ["accountAddressByIDQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAccountAddressByIDResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountAddressByID(params);
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
  const useModuleAccounts = <TData = QueryModuleAccountsResponse,>({
    request,
    options
  }: UseModuleAccountsQuery<TData>) => {
    const queryKey = ["moduleAccountsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryModuleAccountsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.moduleAccounts(params);
      },
      ...options
    });
  };
  const useModuleAccountByName = <TData = QueryModuleAccountByNameResponse,>({
    request,
    options
  }: UseModuleAccountByNameQuery<TData>) => {
    const queryKey = ["moduleAccountByNameQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryModuleAccountByNameResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.moduleAccountByName(params);
      },
      ...options
    });
  };
  const useBech32Prefix = <TData = Bech32PrefixResponse,>({
    request,
    options
  }: UseBech32PrefixQuery<TData>) => {
    const queryKey = ["bech32PrefixQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<Bech32PrefixResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.bech32Prefix(params);
      },
      ...options
    });
  };
  const useAddressBytesToString = <TData = AddressBytesToStringResponse,>({
    request,
    options
  }: UseAddressBytesToStringQuery<TData>) => {
    const queryKey = ["addressBytesToStringQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AddressBytesToStringResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.addressBytesToString(params);
      },
      ...options
    });
  };
  const useAddressStringToBytes = <TData = AddressStringToBytesResponse,>({
    request,
    options
  }: UseAddressStringToBytesQuery<TData>) => {
    const queryKey = ["addressStringToBytesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AddressStringToBytesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.addressStringToBytes(params);
      },
      ...options
    });
  };
  const useAccountInfo = <TData = QueryAccountInfoResponse,>({
    request,
    options
  }: UseAccountInfoQuery<TData>) => {
    const queryKey = ["accountInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryAccountInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountInfo(params);
      },
      ...options
    });
  };
  return {
    /**
     * Accounts returns all the existing accounts.
     * 
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     * 
     * Since: cosmos-sdk 0.43
     */
    useAccounts,
    /** Account returns account details based on address. */useAccount,
    /**
     * AccountAddressByID returns account address based on account number.
     * 
     * Since: cosmos-sdk 0.46.2
     */
    useAccountAddressByID,
    /** Params queries all parameters. */useParams,
    /**
     * ModuleAccounts returns all the existing module accounts.
     * 
     * Since: cosmos-sdk 0.46
     */
    useModuleAccounts,
    /** ModuleAccountByName returns the module account info by module name */useModuleAccountByName,
    /**
     * Bech32Prefix queries bech32Prefix
     * 
     * Since: cosmos-sdk 0.46
     */
    useBech32Prefix,
    /**
     * AddressBytesToString converts Account Address bytes to string
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressBytesToString,
    /**
     * AddressStringToBytes converts Address string to bytes
     * 
     * Since: cosmos-sdk 0.46
     */
    useAddressStringToBytes,
    /**
     * AccountInfo queries account info which is common to all account types.
     * 
     * Since: cosmos-sdk 0.47
     */
    useAccountInfo
  };
};