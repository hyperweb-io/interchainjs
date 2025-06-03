import { buildUseMutation } from "../../../react-query";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
import { createGroup, updateGroupMembers, updateGroupAdmin, updateGroupMetadata, createGroupPolicy, createGroupWithPolicy, updateGroupPolicyAdmin, updateGroupPolicyDecisionPolicy, updateGroupPolicyMetadata, submitProposal, withdrawProposal, vote, exec, leaveGroup } from "./tx.rpc.func";
/* CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
export const useCreateGroup = buildUseMutation<MsgCreateGroup, Error>({
  builderMutationFn: createGroup
});
/* UpdateGroupMembers updates the group members with given group id and admin address. */
export const useUpdateGroupMembers = buildUseMutation<MsgUpdateGroupMembers, Error>({
  builderMutationFn: updateGroupMembers
});
/* UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
export const useUpdateGroupAdmin = buildUseMutation<MsgUpdateGroupAdmin, Error>({
  builderMutationFn: updateGroupAdmin
});
/* UpdateGroupMetadata updates the group metadata with given group id and admin address. */
export const useUpdateGroupMetadata = buildUseMutation<MsgUpdateGroupMetadata, Error>({
  builderMutationFn: updateGroupMetadata
});
/* CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
export const useCreateGroupPolicy = buildUseMutation<MsgCreateGroupPolicy, Error>({
  builderMutationFn: createGroupPolicy
});
/* CreateGroupWithPolicy creates a new group with policy. */
export const useCreateGroupWithPolicy = buildUseMutation<MsgCreateGroupWithPolicy, Error>({
  builderMutationFn: createGroupWithPolicy
});
/* UpdateGroupPolicyAdmin updates a group policy admin. */
export const useUpdateGroupPolicyAdmin = buildUseMutation<MsgUpdateGroupPolicyAdmin, Error>({
  builderMutationFn: updateGroupPolicyAdmin
});
/* UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
export const useUpdateGroupPolicyDecisionPolicy = buildUseMutation<MsgUpdateGroupPolicyDecisionPolicy, Error>({
  builderMutationFn: updateGroupPolicyDecisionPolicy
});
/* UpdateGroupPolicyMetadata updates a group policy metadata. */
export const useUpdateGroupPolicyMetadata = buildUseMutation<MsgUpdateGroupPolicyMetadata, Error>({
  builderMutationFn: updateGroupPolicyMetadata
});
/* SubmitProposal submits a new proposal. */
export const useSubmitProposal = buildUseMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
/* WithdrawProposal withdraws a proposal. */
export const useWithdrawProposal = buildUseMutation<MsgWithdrawProposal, Error>({
  builderMutationFn: withdrawProposal
});
/* Vote allows a voter to vote on a proposal. */
export const useVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: vote
});
/* Exec executes a proposal. */
export const useExec = buildUseMutation<MsgExec, Error>({
  builderMutationFn: exec
});
/* LeaveGroup allows a group member to leave the group. */
export const useLeaveGroup = buildUseMutation<MsgLeaveGroup, Error>({
  builderMutationFn: leaveGroup
});