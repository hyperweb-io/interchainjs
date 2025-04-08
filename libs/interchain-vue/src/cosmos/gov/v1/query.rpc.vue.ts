import { buildUseVueQuery } from "../../../vue-query";
import { QueryConstitutionRequest, QueryConstitutionResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
import { getConstitution, getProposal, getProposals, getVote, getVotes, getParams, getDeposit, getDeposits, getTallyResult } from "./query.rpc.func";
export const useGetConstitution = buildUseVueQuery<QueryConstitutionRequest, QueryConstitutionResponse>({
  builderQueryFn: getConstitution,
  queryKeyPrefix: "ConstitutionQuery"
});
export const useGetProposal = buildUseVueQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: getProposal,
  queryKeyPrefix: "ProposalQuery"
});
export const useGetProposals = buildUseVueQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: getProposals,
  queryKeyPrefix: "ProposalsQuery"
});
export const useGetVote = buildUseVueQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: getVote,
  queryKeyPrefix: "VoteQuery"
});
export const useGetVotes = buildUseVueQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: getVotes,
  queryKeyPrefix: "VotesQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDeposit = buildUseVueQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: getDeposit,
  queryKeyPrefix: "DepositQuery"
});
export const useGetDeposits = buildUseVueQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: getDeposits,
  queryKeyPrefix: "DepositsQuery"
});
export const useGetTallyResult = buildUseVueQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: getTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});