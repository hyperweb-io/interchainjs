import { buildUseVueQuery } from "../../../vue-query";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
import { getProposal, getProposals, getVote, getVotes, getParams, getDeposit, getDeposits, getTallyResult } from "./query.rpc.func";
/* Proposal queries proposal details based on ProposalID. */
export const useGetProposal = buildUseVueQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: getProposal,
  queryKeyPrefix: "ProposalQuery"
});
/* Proposals queries all proposals based on given status. */
export const useGetProposals = buildUseVueQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: getProposals,
  queryKeyPrefix: "ProposalsQuery"
});
/* Vote queries voted information based on proposalID, voterAddr. */
export const useGetVote = buildUseVueQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: getVote,
  queryKeyPrefix: "VoteQuery"
});
/* Votes queries votes of a given proposal. */
export const useGetVotes = buildUseVueQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: getVotes,
  queryKeyPrefix: "VotesQuery"
});
/* Params queries all parameters of the gov module. */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/* Deposit queries single deposit information based on proposalID, depositor address. */
export const useGetDeposit = buildUseVueQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: getDeposit,
  queryKeyPrefix: "DepositQuery"
});
/* Deposits queries all deposits of a single proposal. */
export const useGetDeposits = buildUseVueQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: getDeposits,
  queryKeyPrefix: "DepositsQuery"
});
/* TallyResult queries the tally of a proposal vote. */
export const useGetTallyResult = buildUseVueQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: getTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});