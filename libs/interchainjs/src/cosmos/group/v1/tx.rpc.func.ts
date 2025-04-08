import { buildTx } from "../../../helper-func-types";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export const createGroup = buildTx<MsgCreateGroup>({
  msg: MsgCreateGroup
});
export const updateGroupMembers = buildTx<MsgUpdateGroupMembers>({
  msg: MsgUpdateGroupMembers
});
export const updateGroupAdmin = buildTx<MsgUpdateGroupAdmin>({
  msg: MsgUpdateGroupAdmin
});
export const updateGroupMetadata = buildTx<MsgUpdateGroupMetadata>({
  msg: MsgUpdateGroupMetadata
});
export const createGroupPolicy = buildTx<MsgCreateGroupPolicy>({
  msg: MsgCreateGroupPolicy
});
export const createGroupWithPolicy = buildTx<MsgCreateGroupWithPolicy>({
  msg: MsgCreateGroupWithPolicy
});
export const updateGroupPolicyAdmin = buildTx<MsgUpdateGroupPolicyAdmin>({
  msg: MsgUpdateGroupPolicyAdmin
});
export const updateGroupPolicyDecisionPolicy = buildTx<MsgUpdateGroupPolicyDecisionPolicy>({
  msg: MsgUpdateGroupPolicyDecisionPolicy
});
export const updateGroupPolicyMetadata = buildTx<MsgUpdateGroupPolicyMetadata>({
  msg: MsgUpdateGroupPolicyMetadata
});
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal
});
export const withdrawProposal = buildTx<MsgWithdrawProposal>({
  msg: MsgWithdrawProposal
});
export const vote = buildTx<MsgVote>({
  msg: MsgVote
});
export const exec = buildTx<MsgExec>({
  msg: MsgExec
});
export const leaveGroup = buildTx<MsgLeaveGroup>({
  msg: MsgLeaveGroup
});