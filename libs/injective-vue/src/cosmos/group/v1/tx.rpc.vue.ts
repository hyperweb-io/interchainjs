import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
import { createGroup, updateGroupMembers, updateGroupAdmin, updateGroupMetadata, createGroupPolicy, createGroupWithPolicy, updateGroupPolicyAdmin, updateGroupPolicyDecisionPolicy, updateGroupPolicyMetadata, submitProposal, withdrawProposal, vote, exec, leaveGroup } from "./tx.rpc.func";
/**
 * CreateGroup creates a new group with an admin account address, a list of members and some optional metadata.
 * @name useCreateGroup
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.CreateGroup
 */
export const useCreateGroup = buildUseVueMutation<MsgCreateGroup, Error>({
  builderMutationFn: createGroup
});
/**
 * UpdateGroupMembers updates the group members with given group id and admin address.
 * @name useUpdateGroupMembers
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupMembers
 */
export const useUpdateGroupMembers = buildUseVueMutation<MsgUpdateGroupMembers, Error>({
  builderMutationFn: updateGroupMembers
});
/**
 * UpdateGroupAdmin updates the group admin with given group id and previous admin address.
 * @name useUpdateGroupAdmin
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupAdmin
 */
export const useUpdateGroupAdmin = buildUseVueMutation<MsgUpdateGroupAdmin, Error>({
  builderMutationFn: updateGroupAdmin
});
/**
 * UpdateGroupMetadata updates the group metadata with given group id and admin address.
 * @name useUpdateGroupMetadata
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupMetadata
 */
export const useUpdateGroupMetadata = buildUseVueMutation<MsgUpdateGroupMetadata, Error>({
  builderMutationFn: updateGroupMetadata
});
/**
 * CreateGroupPolicy creates a new group policy using given DecisionPolicy.
 * @name useCreateGroupPolicy
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.CreateGroupPolicy
 */
export const useCreateGroupPolicy = buildUseVueMutation<MsgCreateGroupPolicy, Error>({
  builderMutationFn: createGroupPolicy
});
/**
 * CreateGroupWithPolicy creates a new group with policy.
 * @name useCreateGroupWithPolicy
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.CreateGroupWithPolicy
 */
export const useCreateGroupWithPolicy = buildUseVueMutation<MsgCreateGroupWithPolicy, Error>({
  builderMutationFn: createGroupWithPolicy
});
/**
 * UpdateGroupPolicyAdmin updates a group policy admin.
 * @name useUpdateGroupPolicyAdmin
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupPolicyAdmin
 */
export const useUpdateGroupPolicyAdmin = buildUseVueMutation<MsgUpdateGroupPolicyAdmin, Error>({
  builderMutationFn: updateGroupPolicyAdmin
});
/**
 * UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated.
 * @name useUpdateGroupPolicyDecisionPolicy
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupPolicyDecisionPolicy
 */
export const useUpdateGroupPolicyDecisionPolicy = buildUseVueMutation<MsgUpdateGroupPolicyDecisionPolicy, Error>({
  builderMutationFn: updateGroupPolicyDecisionPolicy
});
/**
 * UpdateGroupPolicyMetadata updates a group policy metadata.
 * @name useUpdateGroupPolicyMetadata
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupPolicyMetadata
 */
export const useUpdateGroupPolicyMetadata = buildUseVueMutation<MsgUpdateGroupPolicyMetadata, Error>({
  builderMutationFn: updateGroupPolicyMetadata
});
/**
 * SubmitProposal submits a new proposal.
 * @name useSubmitProposal
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.SubmitProposal
 */
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
/**
 * WithdrawProposal withdraws a proposal.
 * @name useWithdrawProposal
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.WithdrawProposal
 */
export const useWithdrawProposal = buildUseVueMutation<MsgWithdrawProposal, Error>({
  builderMutationFn: withdrawProposal
});
/**
 * Vote allows a voter to vote on a proposal.
 * @name useVote
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.Vote
 */
export const useVote = buildUseVueMutation<MsgVote, Error>({
  builderMutationFn: vote
});
/**
 * Exec executes a proposal.
 * @name useExec
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.Exec
 */
export const useExec = buildUseVueMutation<MsgExec, Error>({
  builderMutationFn: exec
});
/**
 * LeaveGroup allows a group member to leave the group.
 * @name useLeaveGroup
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.LeaveGroup
 */
export const useLeaveGroup = buildUseVueMutation<MsgLeaveGroup, Error>({
  builderMutationFn: leaveGroup
});