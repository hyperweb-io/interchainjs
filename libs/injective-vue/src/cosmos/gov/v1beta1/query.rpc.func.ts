import { buildQuery } from "../../../helper-func-types";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export const getProposal = buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Proposal",
  deps: [QueryProposalRequest, QueryProposalResponse]
});
export const getProposals = buildQuery<QueryProposalsRequest, QueryProposalsResponse>({
  encode: QueryProposalsRequest.encode,
  decode: QueryProposalsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Proposals",
  deps: [QueryProposalsRequest, QueryProposalsResponse]
});
export const getVote = buildQuery<QueryVoteRequest, QueryVoteResponse>({
  encode: QueryVoteRequest.encode,
  decode: QueryVoteResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Vote",
  deps: [QueryVoteRequest, QueryVoteResponse]
});
export const getVotes = buildQuery<QueryVotesRequest, QueryVotesResponse>({
  encode: QueryVotesRequest.encode,
  decode: QueryVotesResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Votes",
  deps: [QueryVotesRequest, QueryVotesResponse]
});
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
export const getDeposit = buildQuery<QueryDepositRequest, QueryDepositResponse>({
  encode: QueryDepositRequest.encode,
  decode: QueryDepositResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Deposit",
  deps: [QueryDepositRequest, QueryDepositResponse]
});
export const getDeposits = buildQuery<QueryDepositsRequest, QueryDepositsResponse>({
  encode: QueryDepositsRequest.encode,
  decode: QueryDepositsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Deposits",
  deps: [QueryDepositsRequest, QueryDepositsResponse]
});
export const getTallyResult = buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encode: QueryTallyResultRequest.encode,
  decode: QueryTallyResultResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "TallyResult",
  deps: [QueryTallyResultRequest, QueryTallyResultResponse]
});