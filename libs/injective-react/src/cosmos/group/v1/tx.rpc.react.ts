import { buildUseMutation } from "../../../react-query";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
import { createGroup, updateGroupMembers, updateGroupAdmin, updateGroupMetadata, createGroupPolicy, createGroupWithPolicy, updateGroupPolicyAdmin, updateGroupPolicyDecisionPolicy, updateGroupPolicyMetadata, submitProposal, withdrawProposal, vote, exec, leaveGroup } from "./tx.rpc.func";
export const useCreateGroup = buildUseMutation<MsgCreateGroup, Error>({
  builderMutationFn: createGroup
});
export const useUpdateGroupMembers = buildUseMutation<MsgUpdateGroupMembers, Error>({
  builderMutationFn: updateGroupMembers
});
export const useUpdateGroupAdmin = buildUseMutation<MsgUpdateGroupAdmin, Error>({
  builderMutationFn: updateGroupAdmin
});
export const useUpdateGroupMetadata = buildUseMutation<MsgUpdateGroupMetadata, Error>({
  builderMutationFn: updateGroupMetadata
});
export const useCreateGroupPolicy = buildUseMutation<MsgCreateGroupPolicy, Error>({
  builderMutationFn: createGroupPolicy
});
export const useCreateGroupWithPolicy = buildUseMutation<MsgCreateGroupWithPolicy, Error>({
  builderMutationFn: createGroupWithPolicy
});
export const useUpdateGroupPolicyAdmin = buildUseMutation<MsgUpdateGroupPolicyAdmin, Error>({
  builderMutationFn: updateGroupPolicyAdmin
});
export const useUpdateGroupPolicyDecisionPolicy = buildUseMutation<MsgUpdateGroupPolicyDecisionPolicy, Error>({
  builderMutationFn: updateGroupPolicyDecisionPolicy
});
export const useUpdateGroupPolicyMetadata = buildUseMutation<MsgUpdateGroupPolicyMetadata, Error>({
  builderMutationFn: updateGroupPolicyMetadata
});
export const useSubmitProposal = buildUseMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
export const useWithdrawProposal = buildUseMutation<MsgWithdrawProposal, Error>({
  builderMutationFn: withdrawProposal
});
export const useVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: vote
});
export const useExec = buildUseMutation<MsgExec, Error>({
  builderMutationFn: exec
});
export const useLeaveGroup = buildUseMutation<MsgLeaveGroup, Error>({
  builderMutationFn: leaveGroup
});