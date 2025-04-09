import { buildQuery } from "../../../helper-func-types";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
export const getGroupInfo = buildQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  encode: QueryGroupInfoRequest.encode,
  decode: QueryGroupInfoResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupInfo",
  deps: [QueryGroupInfoRequest, QueryGroupInfoResponse]
});
export const getGroupPolicyInfo = buildQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  encode: QueryGroupPolicyInfoRequest.encode,
  decode: QueryGroupPolicyInfoResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupPolicyInfo",
  deps: [QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse]
});
export const getGroupMembers = buildQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  encode: QueryGroupMembersRequest.encode,
  decode: QueryGroupMembersResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupMembers",
  deps: [QueryGroupMembersRequest, QueryGroupMembersResponse]
});
export const getGroupsByAdmin = buildQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  encode: QueryGroupsByAdminRequest.encode,
  decode: QueryGroupsByAdminResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupsByAdmin",
  deps: [QueryGroupsByAdminRequest, QueryGroupsByAdminResponse]
});
export const getGroupPoliciesByGroup = buildQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  encode: QueryGroupPoliciesByGroupRequest.encode,
  decode: QueryGroupPoliciesByGroupResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupPoliciesByGroup",
  deps: [QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse]
});
export const getGroupPoliciesByAdmin = buildQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  encode: QueryGroupPoliciesByAdminRequest.encode,
  decode: QueryGroupPoliciesByAdminResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupPoliciesByAdmin",
  deps: [QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse]
});
export const getProposal = buildQuery<QueryProposalRequest, QueryProposalResponse>({
  encode: QueryProposalRequest.encode,
  decode: QueryProposalResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "Proposal",
  deps: [QueryProposalRequest, QueryProposalResponse]
});
export const getProposalsByGroupPolicy = buildQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  encode: QueryProposalsByGroupPolicyRequest.encode,
  decode: QueryProposalsByGroupPolicyResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "ProposalsByGroupPolicy",
  deps: [QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse]
});
export const getVoteByProposalVoter = buildQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  encode: QueryVoteByProposalVoterRequest.encode,
  decode: QueryVoteByProposalVoterResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "VoteByProposalVoter",
  deps: [QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse]
});
export const getVotesByProposal = buildQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  encode: QueryVotesByProposalRequest.encode,
  decode: QueryVotesByProposalResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "VotesByProposal",
  deps: [QueryVotesByProposalRequest, QueryVotesByProposalResponse]
});
export const getVotesByVoter = buildQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  encode: QueryVotesByVoterRequest.encode,
  decode: QueryVotesByVoterResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "VotesByVoter",
  deps: [QueryVotesByVoterRequest, QueryVotesByVoterResponse]
});
export const getGroupsByMember = buildQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  encode: QueryGroupsByMemberRequest.encode,
  decode: QueryGroupsByMemberResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "GroupsByMember",
  deps: [QueryGroupsByMemberRequest, QueryGroupsByMemberResponse]
});
export const getTallyResult = buildQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  encode: QueryTallyResultRequest.encode,
  decode: QueryTallyResultResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "TallyResult",
  deps: [QueryTallyResultRequest, QueryTallyResultResponse]
});
export const getGroups = buildQuery<QueryGroupsRequest, QueryGroupsResponse>({
  encode: QueryGroupsRequest.encode,
  decode: QueryGroupsResponse.decode,
  service: "cosmos.group.v1.Query",
  method: "Groups",
  deps: [QueryGroupsRequest, QueryGroupsResponse]
});