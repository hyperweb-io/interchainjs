import { buildTx } from "../../../helper-func-types";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
/* CreateGroup creates a new group with an admin account address, a list of members and some optional metadata. */
export const createGroup = buildTx<MsgCreateGroup>({
  msg: MsgCreateGroup
});
/* UpdateGroupMembers updates the group members with given group id and admin address. */
export const updateGroupMembers = buildTx<MsgUpdateGroupMembers>({
  msg: MsgUpdateGroupMembers
});
/* UpdateGroupAdmin updates the group admin with given group id and previous admin address. */
export const updateGroupAdmin = buildTx<MsgUpdateGroupAdmin>({
  msg: MsgUpdateGroupAdmin
});
/* UpdateGroupMetadata updates the group metadata with given group id and admin address. */
export const updateGroupMetadata = buildTx<MsgUpdateGroupMetadata>({
  msg: MsgUpdateGroupMetadata
});
/* CreateGroupPolicy creates a new group policy using given DecisionPolicy. */
export const createGroupPolicy = buildTx<MsgCreateGroupPolicy>({
  msg: MsgCreateGroupPolicy
});
/* CreateGroupWithPolicy creates a new group with policy. */
export const createGroupWithPolicy = buildTx<MsgCreateGroupWithPolicy>({
  msg: MsgCreateGroupWithPolicy
});
/* UpdateGroupPolicyAdmin updates a group policy admin. */
export const updateGroupPolicyAdmin = buildTx<MsgUpdateGroupPolicyAdmin>({
  msg: MsgUpdateGroupPolicyAdmin
});
/* UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated. */
export const updateGroupPolicyDecisionPolicy = buildTx<MsgUpdateGroupPolicyDecisionPolicy>({
  msg: MsgUpdateGroupPolicyDecisionPolicy
});
/* UpdateGroupPolicyMetadata updates a group policy metadata. */
export const updateGroupPolicyMetadata = buildTx<MsgUpdateGroupPolicyMetadata>({
  msg: MsgUpdateGroupPolicyMetadata
});
/* SubmitProposal submits a new proposal. */
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal
});
/* WithdrawProposal withdraws a proposal. */
export const withdrawProposal = buildTx<MsgWithdrawProposal>({
  msg: MsgWithdrawProposal
});
/* Vote allows a voter to vote on a proposal. */
export const vote = buildTx<MsgVote>({
  msg: MsgVote
});
/* Exec executes a proposal. */
export const exec = buildTx<MsgExec>({
  msg: MsgExec
});
/* LeaveGroup allows a group member to leave the group. */
export const leaveGroup = buildTx<MsgLeaveGroup>({
  msg: MsgLeaveGroup
});