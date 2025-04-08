import { buildQuery } from "../../../helper-func-types";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
export const getProposal = buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Proposal"
});
export const getProposals = buildQuery<QueryProposalsRequest, QueryProposalsResponse>({
  encode: QueryProposalsRequest.encode,
  decode: QueryProposalsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Proposals"
});
export const getVote = buildQuery<QueryVoteRequest, QueryVoteResponse>({
  encode: QueryVoteRequest.encode,
  decode: QueryVoteResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Vote"
});
export const getVotes = buildQuery<QueryVotesRequest, QueryVotesResponse>({
  encode: QueryVotesRequest.encode,
  decode: QueryVotesResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Votes"
});
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Params"
});
export const getDeposit = buildQuery<QueryDepositRequest, QueryDepositResponse>({
  encode: QueryDepositRequest.encode,
  decode: QueryDepositResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Deposit"
});
export const getDeposits = buildQuery<QueryDepositsRequest, QueryDepositsResponse>({
  encode: QueryDepositsRequest.encode,
  decode: QueryDepositsResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "Deposits"
});
export const getTallyResult = buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encode: QueryTallyResultRequest.encode,
  decode: QueryTallyResultResponse.decode,
  service: "cosmos.gov.v1beta1.Query",
  method: "TallyResult"
});