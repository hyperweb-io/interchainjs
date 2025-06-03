import { buildQuery } from "../../../helper-func-types";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/* Proposal queries proposal details based on ProposalID. */
export const getProposal = buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Proposal",
  deps: [QueryProposalRequest, QueryProposalResponse]
});
/* Proposals queries all proposals based on given status. */
export const getProposals = buildQuery<QueryProposalsRequest, QueryProposalsResponse>({
  encode: QueryProposalsRequest.encode,
  decode: QueryProposalsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Proposals",
  deps: [QueryProposalsRequest, QueryProposalsResponse]
});
/* Vote queries voted information based on proposalID, voterAddr. */
export const getVote = buildQuery<QueryVoteRequest, QueryVoteResponse>({
  encode: QueryVoteRequest.encode,
  decode: QueryVoteResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Vote",
  deps: [QueryVoteRequest, QueryVoteResponse]
});
/* Votes queries votes of a given proposal. */
export const getVotes = buildQuery<QueryVotesRequest, QueryVotesResponse>({
  encode: QueryVotesRequest.encode,
  decode: QueryVotesResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Votes",
  deps: [QueryVotesRequest, QueryVotesResponse]
});
/* Params queries all parameters of the gov module. */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/* Deposit queries single deposit information based on proposalID, depositor address. */
export const getDeposit = buildQuery<QueryDepositRequest, QueryDepositResponse>({
  encode: QueryDepositRequest.encode,
  decode: QueryDepositResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Deposit",
  deps: [QueryDepositRequest, QueryDepositResponse]
});
/* Deposits queries all deposits of a single proposal. */
export const getDeposits = buildQuery<QueryDepositsRequest, QueryDepositsResponse>({
  encode: QueryDepositsRequest.encode,
  decode: QueryDepositsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Deposits",
  deps: [QueryDepositsRequest, QueryDepositsResponse]
});
/* TallyResult queries the tally of a proposal vote. */
export const getTallyResult = buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encode: QueryTallyResultRequest.encode,
  decode: QueryTallyResultResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "TallyResult",
  deps: [QueryTallyResultRequest, QueryTallyResultResponse]
});