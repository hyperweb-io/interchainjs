import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse, ReactiveQueryGroupInfoRequest, ReactiveQueryGroupPolicyInfoRequest, ReactiveQueryGroupMembersRequest, ReactiveQueryGroupsByAdminRequest, ReactiveQueryGroupPoliciesByGroupRequest, ReactiveQueryGroupPoliciesByAdminRequest, ReactiveQueryProposalRequest, ReactiveQueryProposalsByGroupPolicyRequest, ReactiveQueryVoteByProposalVoterRequest, ReactiveQueryVotesByProposalRequest, ReactiveQueryVotesByVoterRequest, ReactiveQueryGroupsByMemberRequest, ReactiveQueryTallyResultRequest, ReactiveQueryGroupsRequest } from "./query";
/** Query is the cosmos.group.v1 Query service. */
export interface Query {
  /** GroupInfo queries group info based on group id. */
  groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
  /** GroupPolicyInfo queries group policy info based on account address of group policy. */
  groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
  /** GroupMembers queries members of a group by group id. */
  groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
  /** GroupsByAdmin queries groups by admin address. */
  groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
  /** GroupPoliciesByGroup queries group policies by group id. */
  groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
  /** GroupPoliciesByAdmin queries group policies by admin address. */
  groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
  /** Proposal queries a proposal based on proposal id. */
  proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
  /** VoteByProposalVoter queries a vote by proposal id and voter. */
  voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
  /** VotesByProposal queries a vote by proposal id. */
  votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
  /** VotesByVoter queries a vote by voter. */
  votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
  /** GroupsByMember queries groups by member address. */
  groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
  /**
   * TallyResult returns the tally result of a proposal. If the proposal is
   * still in voting period, then this query computes the current tally state,
   * which might not be final. On the other hand, if the proposal is final,
   * then it simply returns the `final_tally_result` state stored in the
   * proposal itself.
   */
  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
  /**
   * Groups queries all groups in state.
   * 
   * Since: cosmos-sdk 0.47.1
   */
  groups(request?: QueryGroupsRequest): Promise<QueryGroupsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* GroupInfo queries group info based on group id. */
  groupInfo = async (request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> => {
    const data = QueryGroupInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
    return promise.then(data => QueryGroupInfoResponse.decode(new BinaryReader(data)));
  };
  /* GroupPolicyInfo queries group policy info based on account address of group policy. */
  groupPolicyInfo = async (request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse> => {
    const data = QueryGroupPolicyInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
    return promise.then(data => QueryGroupPolicyInfoResponse.decode(new BinaryReader(data)));
  };
  /* GroupMembers queries members of a group by group id. */
  groupMembers = async (request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse> => {
    const data = QueryGroupMembersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
    return promise.then(data => QueryGroupMembersResponse.decode(new BinaryReader(data)));
  };
  /* GroupsByAdmin queries groups by admin address. */
  groupsByAdmin = async (request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse> => {
    const data = QueryGroupsByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
    return promise.then(data => QueryGroupsByAdminResponse.decode(new BinaryReader(data)));
  };
  /* GroupPoliciesByGroup queries group policies by group id. */
  groupPoliciesByGroup = async (request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse> => {
    const data = QueryGroupPoliciesByGroupRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
    return promise.then(data => QueryGroupPoliciesByGroupResponse.decode(new BinaryReader(data)));
  };
  /* GroupPoliciesByAdmin queries group policies by admin address. */
  groupPoliciesByAdmin = async (request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse> => {
    const data = QueryGroupPoliciesByAdminRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
    return promise.then(data => QueryGroupPoliciesByAdminResponse.decode(new BinaryReader(data)));
  };
  /* Proposal queries a proposal based on proposal id. */
  proposal = async (request: QueryProposalRequest): Promise<QueryProposalResponse> => {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
  };
  /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
  proposalsByGroupPolicy = async (request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse> => {
    const data = QueryProposalsByGroupPolicyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
    return promise.then(data => QueryProposalsByGroupPolicyResponse.decode(new BinaryReader(data)));
  };
  /* VoteByProposalVoter queries a vote by proposal id and voter. */
  voteByProposalVoter = async (request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse> => {
    const data = QueryVoteByProposalVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
    return promise.then(data => QueryVoteByProposalVoterResponse.decode(new BinaryReader(data)));
  };
  /* VotesByProposal queries a vote by proposal id. */
  votesByProposal = async (request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse> => {
    const data = QueryVotesByProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
    return promise.then(data => QueryVotesByProposalResponse.decode(new BinaryReader(data)));
  };
  /* VotesByVoter queries a vote by voter. */
  votesByVoter = async (request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> => {
    const data = QueryVotesByVoterRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
    return promise.then(data => QueryVotesByVoterResponse.decode(new BinaryReader(data)));
  };
  /* GroupsByMember queries groups by member address. */
  groupsByMember = async (request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse> => {
    const data = QueryGroupsByMemberRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
    return promise.then(data => QueryGroupsByMemberResponse.decode(new BinaryReader(data)));
  };
  /* TallyResult returns the tally result of a proposal. If the proposal is
   still in voting period, then this query computes the current tally state,
   which might not be final. On the other hand, if the proposal is final,
   then it simply returns the `final_tally_result` state stored in the
   proposal itself. */
  tallyResult = async (request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> => {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new BinaryReader(data)));
  };
  /* Groups queries all groups in state.
  
   Since: cosmos-sdk 0.47.1 */
  groups = async (request: QueryGroupsRequest = {
    pagination: undefined
  }): Promise<QueryGroupsResponse> => {
    const data = QueryGroupsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.group.v1.Query", "Groups", data);
    return promise.then(data => QueryGroupsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse> {
      return queryService.groupInfo(request);
    },
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse> {
      return queryService.groupPolicyInfo(request);
    },
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse> {
      return queryService.groupMembers(request);
    },
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse> {
      return queryService.groupsByAdmin(request);
    },
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse> {
      return queryService.groupPoliciesByGroup(request);
    },
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse> {
      return queryService.groupPoliciesByAdmin(request);
    },
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
      return queryService.proposal(request);
    },
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse> {
      return queryService.proposalsByGroupPolicy(request);
    },
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse> {
      return queryService.voteByProposalVoter(request);
    },
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse> {
      return queryService.votesByProposal(request);
    },
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse> {
      return queryService.votesByVoter(request);
    },
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse> {
      return queryService.groupsByMember(request);
    },
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
      return queryService.tallyResult(request);
    },
    groups(request?: QueryGroupsRequest): Promise<QueryGroupsResponse> {
      return queryService.groups(request);
    }
  };
};
export interface UseGroupInfoQuery<TData> extends VueQueryParams<QueryGroupInfoResponse, TData> {
  request: ReactiveQueryGroupInfoRequest;
}
export interface UseGroupPolicyInfoQuery<TData> extends VueQueryParams<QueryGroupPolicyInfoResponse, TData> {
  request: ReactiveQueryGroupPolicyInfoRequest;
}
export interface UseGroupMembersQuery<TData> extends VueQueryParams<QueryGroupMembersResponse, TData> {
  request: ReactiveQueryGroupMembersRequest;
}
export interface UseGroupsByAdminQuery<TData> extends VueQueryParams<QueryGroupsByAdminResponse, TData> {
  request: ReactiveQueryGroupsByAdminRequest;
}
export interface UseGroupPoliciesByGroupQuery<TData> extends VueQueryParams<QueryGroupPoliciesByGroupResponse, TData> {
  request: ReactiveQueryGroupPoliciesByGroupRequest;
}
export interface UseGroupPoliciesByAdminQuery<TData> extends VueQueryParams<QueryGroupPoliciesByAdminResponse, TData> {
  request: ReactiveQueryGroupPoliciesByAdminRequest;
}
export interface UseProposalQuery<TData> extends VueQueryParams<QueryProposalResponse, TData> {
  request: ReactiveQueryProposalRequest;
}
export interface UseProposalsByGroupPolicyQuery<TData> extends VueQueryParams<QueryProposalsByGroupPolicyResponse, TData> {
  request: ReactiveQueryProposalsByGroupPolicyRequest;
}
export interface UseVoteByProposalVoterQuery<TData> extends VueQueryParams<QueryVoteByProposalVoterResponse, TData> {
  request: ReactiveQueryVoteByProposalVoterRequest;
}
export interface UseVotesByProposalQuery<TData> extends VueQueryParams<QueryVotesByProposalResponse, TData> {
  request: ReactiveQueryVotesByProposalRequest;
}
export interface UseVotesByVoterQuery<TData> extends VueQueryParams<QueryVotesByVoterResponse, TData> {
  request: ReactiveQueryVotesByVoterRequest;
}
export interface UseGroupsByMemberQuery<TData> extends VueQueryParams<QueryGroupsByMemberResponse, TData> {
  request: ReactiveQueryGroupsByMemberRequest;
}
export interface UseTallyResultQuery<TData> extends VueQueryParams<QueryTallyResultResponse, TData> {
  request: ReactiveQueryTallyResultRequest;
}
export interface UseGroupsQuery<TData> extends VueQueryParams<QueryGroupsResponse, TData> {
  request?: ReactiveQueryGroupsRequest;
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
  const useGroupInfo = <TData = QueryGroupInfoResponse,>({
    request,
    options
  }: UseGroupInfoQuery<TData>) => {
    const queryKey = ["groupInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGroupInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.groupInfo(params);
      },
      ...options
    });
  };
  const useGroupPolicyInfo = <TData = QueryGroupPolicyInfoResponse,>({
    request,
    options
  }: UseGroupPolicyInfoQuery<TData>) => {
    const queryKey = ["groupPolicyInfoQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGroupPolicyInfoResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.groupPolicyInfo(params);
      },
      ...options
    });
  };
  const useGroupMembers = <TData = QueryGroupMembersResponse,>({
    request,
    options
  }: UseGroupMembersQuery<TData>) => {
    const queryKey = ["groupMembersQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGroupMembersResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.groupMembers(params);
      },
      ...options
    });
  };
  const useGroupsByAdmin = <TData = QueryGroupsByAdminResponse,>({
    request,
    options
  }: UseGroupsByAdminQuery<TData>) => {
    const queryKey = ["groupsByAdminQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGroupsByAdminResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.groupsByAdmin(params);
      },
      ...options
    });
  };
  const useGroupPoliciesByGroup = <TData = QueryGroupPoliciesByGroupResponse,>({
    request,
    options
  }: UseGroupPoliciesByGroupQuery<TData>) => {
    const queryKey = ["groupPoliciesByGroupQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGroupPoliciesByGroupResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.groupPoliciesByGroup(params);
      },
      ...options
    });
  };
  const useGroupPoliciesByAdmin = <TData = QueryGroupPoliciesByAdminResponse,>({
    request,
    options
  }: UseGroupPoliciesByAdminQuery<TData>) => {
    const queryKey = ["groupPoliciesByAdminQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGroupPoliciesByAdminResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.groupPoliciesByAdmin(params);
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
  const useProposalsByGroupPolicy = <TData = QueryProposalsByGroupPolicyResponse,>({
    request,
    options
  }: UseProposalsByGroupPolicyQuery<TData>) => {
    const queryKey = ["proposalsByGroupPolicyQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryProposalsByGroupPolicyResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.proposalsByGroupPolicy(params);
      },
      ...options
    });
  };
  const useVoteByProposalVoter = <TData = QueryVoteByProposalVoterResponse,>({
    request,
    options
  }: UseVoteByProposalVoterQuery<TData>) => {
    const queryKey = ["voteByProposalVoterQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryVoteByProposalVoterResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.voteByProposalVoter(params);
      },
      ...options
    });
  };
  const useVotesByProposal = <TData = QueryVotesByProposalResponse,>({
    request,
    options
  }: UseVotesByProposalQuery<TData>) => {
    const queryKey = ["votesByProposalQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryVotesByProposalResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.votesByProposal(params);
      },
      ...options
    });
  };
  const useVotesByVoter = <TData = QueryVotesByVoterResponse,>({
    request,
    options
  }: UseVotesByVoterQuery<TData>) => {
    const queryKey = ["votesByVoterQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryVotesByVoterResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.votesByVoter(params);
      },
      ...options
    });
  };
  const useGroupsByMember = <TData = QueryGroupsByMemberResponse,>({
    request,
    options
  }: UseGroupsByMemberQuery<TData>) => {
    const queryKey = ["groupsByMemberQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGroupsByMemberResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.groupsByMember(params);
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
  const useGroups = <TData = QueryGroupsResponse,>({
    request,
    options
  }: UseGroupsQuery<TData>) => {
    const queryKey = ["groupsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryGroupsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.groups(params);
      },
      ...options
    });
  };
  return {
    /** GroupInfo queries group info based on group id. */useGroupInfo,
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */useGroupPolicyInfo,
    /** GroupMembers queries members of a group by group id. */useGroupMembers,
    /** GroupsByAdmin queries groups by admin address. */useGroupsByAdmin,
    /** GroupPoliciesByGroup queries group policies by group id. */useGroupPoliciesByGroup,
    /** GroupPoliciesByAdmin queries group policies by admin address. */useGroupPoliciesByAdmin,
    /** Proposal queries a proposal based on proposal id. */useProposal,
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */useProposalsByGroupPolicy,
    /** VoteByProposalVoter queries a vote by proposal id and voter. */useVoteByProposalVoter,
    /** VotesByProposal queries a vote by proposal id. */useVotesByProposal,
    /** VotesByVoter queries a vote by voter. */useVotesByVoter,
    /** GroupsByMember queries groups by member address. */useGroupsByMember,
    /**
     * TallyResult returns the tally result of a proposal. If the proposal is
     * still in voting period, then this query computes the current tally state,
     * which might not be final. On the other hand, if the proposal is final,
     * then it simply returns the `final_tally_result` state stored in the
     * proposal itself.
     */
    useTallyResult,
    /**
     * Groups queries all groups in state.
     * 
     * Since: cosmos-sdk 0.47.1
     */
    useGroups
  };
};