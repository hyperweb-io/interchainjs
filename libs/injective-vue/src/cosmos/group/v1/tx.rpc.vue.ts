import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
import { createGroup, updateGroupMembers, updateGroupAdmin, updateGroupMetadata, createGroupPolicy, createGroupWithPolicy, updateGroupPolicyAdmin, updateGroupPolicyDecisionPolicy, updateGroupPolicyMetadata, submitProposal, withdrawProposal, vote, exec, leaveGroup } from "./tx.rpc.func";
export const useCreateGroup = buildUseVueMutation<MsgCreateGroup, Error>({
  builderMutationFn: createGroup
});
export const useUpdateGroupMembers = buildUseVueMutation<MsgUpdateGroupMembers, Error>({
  builderMutationFn: updateGroupMembers
});
export const useUpdateGroupAdmin = buildUseVueMutation<MsgUpdateGroupAdmin, Error>({
  builderMutationFn: updateGroupAdmin
});
export const useUpdateGroupMetadata = buildUseVueMutation<MsgUpdateGroupMetadata, Error>({
  builderMutationFn: updateGroupMetadata
});
export const useCreateGroupPolicy = buildUseVueMutation<MsgCreateGroupPolicy, Error>({
  builderMutationFn: createGroupPolicy
});
export const useCreateGroupWithPolicy = buildUseVueMutation<MsgCreateGroupWithPolicy, Error>({
  builderMutationFn: createGroupWithPolicy
});
export const useUpdateGroupPolicyAdmin = buildUseVueMutation<MsgUpdateGroupPolicyAdmin, Error>({
  builderMutationFn: updateGroupPolicyAdmin
});
export const useUpdateGroupPolicyDecisionPolicy = buildUseVueMutation<MsgUpdateGroupPolicyDecisionPolicy, Error>({
  builderMutationFn: updateGroupPolicyDecisionPolicy
});
export const useUpdateGroupPolicyMetadata = buildUseVueMutation<MsgUpdateGroupPolicyMetadata, Error>({
  builderMutationFn: updateGroupPolicyMetadata
});
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
export const useWithdrawProposal = buildUseVueMutation<MsgWithdrawProposal, Error>({
  builderMutationFn: withdrawProposal
});
export const useVote = buildUseVueMutation<MsgVote, Error>({
  builderMutationFn: vote
});
export const useExec = buildUseVueMutation<MsgExec, Error>({
  builderMutationFn: exec
});
export const useLeaveGroup = buildUseVueMutation<MsgLeaveGroup, Error>({
  builderMutationFn: leaveGroup
});