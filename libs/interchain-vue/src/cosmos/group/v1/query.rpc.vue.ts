import { buildUseVueQuery } from "../../../vue-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryGroupsRequest, QueryGroupsResponse } from "./query";
import { getGroupInfo, getGroupPolicyInfo, getGroupMembers, getGroupsByAdmin, getGroupPoliciesByGroup, getGroupPoliciesByAdmin, getProposal, getProposalsByGroupPolicy, getVoteByProposalVoter, getVotesByProposal, getVotesByVoter, getGroupsByMember, getTallyResult, getGroups } from "./query.rpc.func";
/* GroupInfo queries group info based on group id. */
export const useGetGroupInfo = buildUseVueQuery<QueryGroupInfoRequest, QueryGroupInfoResponse>({
  builderQueryFn: getGroupInfo,
  queryKeyPrefix: "GroupInfoQuery"
});
/* GroupPolicyInfo queries group policy info based on account address of group policy. */
export const useGetGroupPolicyInfo = buildUseVueQuery<QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse>({
  builderQueryFn: getGroupPolicyInfo,
  queryKeyPrefix: "GroupPolicyInfoQuery"
});
/* GroupMembers queries members of a group by group id. */
export const useGetGroupMembers = buildUseVueQuery<QueryGroupMembersRequest, QueryGroupMembersResponse>({
  builderQueryFn: getGroupMembers,
  queryKeyPrefix: "GroupMembersQuery"
});
/* GroupsByAdmin queries groups by admin address. */
export const useGetGroupsByAdmin = buildUseVueQuery<QueryGroupsByAdminRequest, QueryGroupsByAdminResponse>({
  builderQueryFn: getGroupsByAdmin,
  queryKeyPrefix: "GroupsByAdminQuery"
});
/* GroupPoliciesByGroup queries group policies by group id. */
export const useGetGroupPoliciesByGroup = buildUseVueQuery<QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse>({
  builderQueryFn: getGroupPoliciesByGroup,
  queryKeyPrefix: "GroupPoliciesByGroupQuery"
});
/* GroupPoliciesByAdmin queries group policies by admin address. */
export const useGetGroupPoliciesByAdmin = buildUseVueQuery<QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse>({
  builderQueryFn: getGroupPoliciesByAdmin,
  queryKeyPrefix: "GroupPoliciesByAdminQuery"
});
/* Proposal queries a proposal based on proposal id. */
export const useGetProposal = buildUseVueQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: getProposal,
  queryKeyPrefix: "ProposalQuery"
});
/* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
export const useGetProposalsByGroupPolicy = buildUseVueQuery<QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse>({
  builderQueryFn: getProposalsByGroupPolicy,
  queryKeyPrefix: "ProposalsByGroupPolicyQuery"
});
/* VoteByProposalVoter queries a vote by proposal id and voter. */
export const useGetVoteByProposalVoter = buildUseVueQuery<QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse>({
  builderQueryFn: getVoteByProposalVoter,
  queryKeyPrefix: "VoteByProposalVoterQuery"
});
/* VotesByProposal queries a vote by proposal id. */
export const useGetVotesByProposal = buildUseVueQuery<QueryVotesByProposalRequest, QueryVotesByProposalResponse>({
  builderQueryFn: getVotesByProposal,
  queryKeyPrefix: "VotesByProposalQuery"
});
/* VotesByVoter queries a vote by voter. */
export const useGetVotesByVoter = buildUseVueQuery<QueryVotesByVoterRequest, QueryVotesByVoterResponse>({
  builderQueryFn: getVotesByVoter,
  queryKeyPrefix: "VotesByVoterQuery"
});
/* GroupsByMember queries groups by member address. */
export const useGetGroupsByMember = buildUseVueQuery<QueryGroupsByMemberRequest, QueryGroupsByMemberResponse>({
  builderQueryFn: getGroupsByMember,
  queryKeyPrefix: "GroupsByMemberQuery"
});
/* TallyResult returns the tally result of a proposal. If the proposal is
 still in voting period, then this query computes the current tally state,
 which might not be final. On the other hand, if the proposal is final,
 then it simply returns the `final_tally_result` state stored in the
 proposal itself. */
export const useGetTallyResult = buildUseVueQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: getTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});
/* Groups queries all groups in state.

 Since: cosmos-sdk 0.47.1 */
export const useGetGroups = buildUseVueQuery<QueryGroupsRequest, QueryGroupsResponse>({
  builderQueryFn: getGroups,
  queryKeyPrefix: "GroupsQuery"
});