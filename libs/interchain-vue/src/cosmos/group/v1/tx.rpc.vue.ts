import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
import { createGroup, updateGroupMembers, updateGroupAdmin, updateGroupMetadata, createGroupPolicy, createGroupWithPolicy, updateGroupPolicyAdmin, updateGroupPolicyDecisionPolicy, updateGroupPolicyMetadata, submitProposal, withdrawProposal, vote, exec, leaveGroup } from "./tx.rpc.func";
/* CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
export const useCreateGroup = buildUseVueMutation<MsgCreateGroup, Error>({
  builderMutationFn: createGroup
});
/* UpdateGroupMembers updates the group members with given group id and admin address. */
export const useUpdateGroupMembers = buildUseVueMutation<MsgUpdateGroupMembers, Error>({
  builderMutationFn: updateGroupMembers
});
/* UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
export const useUpdateGroupAdmin = buildUseVueMutation<MsgUpdateGroupAdmin, Error>({
  builderMutationFn: updateGroupAdmin
});
/* UpdateGroupMetadata updates the group metadata with given group id and admin address. */
export const useUpdateGroupMetadata = buildUseVueMutation<MsgUpdateGroupMetadata, Error>({
  builderMutationFn: updateGroupMetadata
});
/* CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
export const useCreateGroupPolicy = buildUseVueMutation<MsgCreateGroupPolicy, Error>({
  builderMutationFn: createGroupPolicy
});
/* CreateGroupWithPolicy creates a new group with policy. */
export const useCreateGroupWithPolicy = buildUseVueMutation<MsgCreateGroupWithPolicy, Error>({
  builderMutationFn: createGroupWithPolicy
});
/* UpdateGroupPolicyAdmin updates a group policy admin. */
export const useUpdateGroupPolicyAdmin = buildUseVueMutation<MsgUpdateGroupPolicyAdmin, Error>({
  builderMutationFn: updateGroupPolicyAdmin
});
/* UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
export const useUpdateGroupPolicyDecisionPolicy = buildUseVueMutation<MsgUpdateGroupPolicyDecisionPolicy, Error>({
  builderMutationFn: updateGroupPolicyDecisionPolicy
});
/* UpdateGroupPolicyMetadata updates a group policy metadata. */
export const useUpdateGroupPolicyMetadata = buildUseVueMutation<MsgUpdateGroupPolicyMetadata, Error>({
  builderMutationFn: updateGroupPolicyMetadata
});
/* SubmitProposal submits a new proposal. */
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
/* WithdrawProposal withdraws a proposal. */
export const useWithdrawProposal = buildUseVueMutation<MsgWithdrawProposal, Error>({
  builderMutationFn: withdrawProposal
});
/* Vote allows a voter to vote on a proposal. */
export const useVote = buildUseVueMutation<MsgVote, Error>({
  builderMutationFn: vote
});
/* Exec executes a proposal. */
export const useExec = buildUseVueMutation<MsgExec, Error>({
  builderMutationFn: exec
});
/* LeaveGroup allows a group member to leave the group. */
export const useLeaveGroup = buildUseVueMutation<MsgLeaveGroup, Error>({
  builderMutationFn: leaveGroup
});