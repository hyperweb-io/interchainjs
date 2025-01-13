import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryConstitutionRequest, QueryConstitutionResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse, ReactiveQueryConstitutionRequest, ReactiveQueryProposalRequest, ReactiveQueryProposalsRequest, ReactiveQueryVoteRequest, ReactiveQueryVotesRequest, ReactiveQueryParamsRequest, ReactiveQueryDepositRequest, ReactiveQueryDepositsRequest, ReactiveQueryTallyResultRequest } from "./query";
/** Query defines the gRPC querier service for gov module */
export interface Query {
  /** Constitution queries the chain's constitution. */
  constitution(request?: QueryConstitutionRequest): Promise<QueryConstitutionResponse>;
  /** Proposal queries proposal details based on ProposalID. */
  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** Proposals queries all proposals based on given status. */
  proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
  /** Vote queries voted information based on proposalID, voterAddr. */
  vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
  /** Votes queries votes of a given proposal. */
  votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
  /** Params queries all parameters of the gov module. */
  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Deposit queries single deposit information based on proposalID, depositAddr. */
  deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
  /** Deposits queries all deposits of a single proposal. */
  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /** TallyResult queries the tally of a proposal vote. */
  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Constitution queries the chain's constitution. */
  constitution = async (request: QueryConstitutionRequest = {}): Promise<QueryConstitutionResponse> => {
    const data = QueryConstitutionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Constitution", data);
    return promise.then(data => QueryConstitutionResponse.decode(new BinaryReader(data)));
  };
  /* Proposal queries proposal details based on ProposalID. */
  proposal = async (request: QueryProposalRequest): Promise<QueryProposalResponse> => {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
  };
  /* Proposals queries all proposals based on given status. */
  proposals = async (request: QueryProposalsRequest): Promise<QueryProposalsResponse> => {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new BinaryReader(data)));
  };
  /* Vote queries voted information based on proposalID, voterAddr. */
  vote = async (request: QueryVoteRequest): Promise<QueryVoteResponse> => {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new BinaryReader(data)));
  };
  /* Votes queries votes of a given proposal. */
  votes = async (request: QueryVotesRequest): Promise<QueryVotesResponse> => {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new BinaryReader(data)));
  };
  /* Params queries all parameters of the gov module. */
  params = async (request: QueryParamsRequest): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Deposit queries single deposit information based on proposalID, depositAddr. */
  deposit = async (request: QueryDepositRequest): Promise<QueryDepositResponse> => {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new BinaryReader(data)));
  };
  /* Deposits queries all deposits of a single proposal. */
  deposits = async (request: QueryDepositsRequest): Promise<QueryDepositsResponse> => {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  };
  /* TallyResult queries the tally of a proposal vote. */
  tallyResult = async (request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> => {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    constitution(request?: QueryConstitutionRequest): Promise<QueryConstitutionResponse> {
      return queryService.constitution(request);
    },
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
      return queryService.proposal(request);
    },
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
      return queryService.proposals(request);
    },
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
      return queryService.vote(request);
    },
    votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
      return queryService.votes(request);
    },
    params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponse> {
      return queryService.deposit(request);
    },
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
      return queryService.deposits(request);
    },
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
      return queryService.tallyResult(request);
    }
  };
};
export interface UseConstitutionQuery<TData> extends VueQueryParams<QueryConstitutionResponse, TData> {
  request?: ReactiveQueryConstitutionRequest;
}
export interface UseProposalQuery<TData> extends VueQueryParams<QueryProposalResponse, TData> {
  request: ReactiveQueryProposalRequest;
}
export interface UseProposalsQuery<TData> extends VueQueryParams<QueryProposalsResponse, TData> {
  request: ReactiveQueryProposalsRequest;
}
export interface UseVoteQuery<TData> extends VueQueryParams<QueryVoteResponse, TData> {
  request: ReactiveQueryVoteRequest;
}
export interface UseVotesQuery<TData> extends VueQueryParams<QueryVotesResponse, TData> {
  request: ReactiveQueryVotesRequest;
}
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request: ReactiveQueryParamsRequest;
}
export interface UseDepositQuery<TData> extends VueQueryParams<QueryDepositResponse, TData> {
  request: ReactiveQueryDepositRequest;
}
export interface UseDepositsQuery<TData> extends VueQueryParams<QueryDepositsResponse, TData> {
  request: ReactiveQueryDepositsRequest;
}
export interface UseTallyResultQuery<TData> extends VueQueryParams<QueryTallyResultResponse, TData> {
  request: ReactiveQueryTallyResultRequest;
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
  const useConstitution = <TData = QueryConstitutionResponse,>({
    request,
    options
  }: UseConstitutionQuery<TData>) => {
    const queryKey = ["constitutionQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryConstitutionResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.constitution(params);
      },
      ...options
    });
  };
  const useProposal = <TData = QueryProposalResponse,>({
    request,
    options
  }: UseProposalQuery<TData>) => {
    const queryKey = ["proposalQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryProposalResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.proposal(params);
      },
      ...options
    });
  };
  const useProposals = <TData = QueryProposalsResponse,>({
    request,
    options
  }: UseProposalsQuery<TData>) => {
    const queryKey = ["proposalsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryProposalsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.proposals(params);
      },
      ...options
    });
  };
  const useVote = <TData = QueryVoteResponse,>({
    request,
    options
  }: UseVoteQuery<TData>) => {
    const queryKey = ["voteQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryVoteResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.vote(params);
      },
      ...options
    });
  };
  const useVotes = <TData = QueryVotesResponse,>({
    request,
    options
  }: UseVotesQuery<TData>) => {
    const queryKey = ["votesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryVotesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.votes(params);
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
  const useDeposit = <TData = QueryDepositResponse,>({
    request,
    options
  }: UseDepositQuery<TData>) => {
    const queryKey = ["depositQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDepositResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.deposit(params);
      },
      ...options
    });
  };
  const useDeposits = <TData = QueryDepositsResponse,>({
    request,
    options
  }: UseDepositsQuery<TData>) => {
    const queryKey = ["depositsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDepositsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.deposits(params);
      },
      ...options
    });
  };
  const useTallyResult = <TData = QueryTallyResultResponse,>({
    request,
    options
  }: UseTallyResultQuery<TData>) => {
    const queryKey = ["tallyResultQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTallyResultResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.tallyResult(params);
      },
      ...options
    });
  };
  return {
    /** Constitution queries the chain's constitution. */useConstitution,
    /** Proposal queries proposal details based on ProposalID. */useProposal,
    /** Proposals queries all proposals based on given status. */useProposals,
    /** Vote queries voted information based on proposalID, voterAddr. */useVote,
    /** Votes queries votes of a given proposal. */useVotes,
    /** Params queries all parameters of the gov module. */useParams,
    /** Deposit queries single deposit information based on proposalID, depositAddr. */useDeposit,
    /** Deposits queries all deposits of a single proposal. */useDeposits,
    /** TallyResult queries the tally of a proposal vote. */useTallyResult
  };
};