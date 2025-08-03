import { buildTx } from "../../../helper-func-types";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
/**
 * CreateGroup creates a new group with an admin account address, a list of members and some optional metadata.
 * @name createGroup
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.CreateGroup
 */
export const createGroup = buildTx<MsgCreateGroup>({
  msg: MsgCreateGroup
});
/**
 * UpdateGroupMembers updates the group members with given group id and admin address.
 * @name updateGroupMembers
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupMembers
 */
export const updateGroupMembers = buildTx<MsgUpdateGroupMembers>({
  msg: MsgUpdateGroupMembers
});
/**
 * UpdateGroupAdmin updates the group admin with given group id and previous admin address.
 * @name updateGroupAdmin
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupAdmin
 */
export const updateGroupAdmin = buildTx<MsgUpdateGroupAdmin>({
  msg: MsgUpdateGroupAdmin
});
/**
 * UpdateGroupMetadata updates the group metadata with given group id and admin address.
 * @name updateGroupMetadata
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupMetadata
 */
export const updateGroupMetadata = buildTx<MsgUpdateGroupMetadata>({
  msg: MsgUpdateGroupMetadata
});
/**
 * CreateGroupPolicy creates a new group policy using given DecisionPolicy.
 * @name createGroupPolicy
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.CreateGroupPolicy
 */
export const createGroupPolicy = buildTx<MsgCreateGroupPolicy>({
  msg: MsgCreateGroupPolicy
});
/**
 * CreateGroupWithPolicy creates a new group with policy.
 * @name createGroupWithPolicy
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.CreateGroupWithPolicy
 */
export const createGroupWithPolicy = buildTx<MsgCreateGroupWithPolicy>({
  msg: MsgCreateGroupWithPolicy
});
/**
 * UpdateGroupPolicyAdmin updates a group policy admin.
 * @name updateGroupPolicyAdmin
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupPolicyAdmin
 */
export const updateGroupPolicyAdmin = buildTx<MsgUpdateGroupPolicyAdmin>({
  msg: MsgUpdateGroupPolicyAdmin
});
/**
 * UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated.
 * @name updateGroupPolicyDecisionPolicy
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupPolicyDecisionPolicy
 */
export const updateGroupPolicyDecisionPolicy = buildTx<MsgUpdateGroupPolicyDecisionPolicy>({
  msg: MsgUpdateGroupPolicyDecisionPolicy
});
/**
 * UpdateGroupPolicyMetadata updates a group policy metadata.
 * @name updateGroupPolicyMetadata
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.UpdateGroupPolicyMetadata
 */
export const updateGroupPolicyMetadata = buildTx<MsgUpdateGroupPolicyMetadata>({
  msg: MsgUpdateGroupPolicyMetadata
});
/**
 * SubmitProposal submits a new proposal.
 * @name submitProposal
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.SubmitProposal
 */
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal
});
/**
 * WithdrawProposal withdraws a proposal.
 * @name withdrawProposal
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.WithdrawProposal
 */
export const withdrawProposal = buildTx<MsgWithdrawProposal>({
  msg: MsgWithdrawProposal
});
/**
 * Vote allows a voter to vote on a proposal.
 * @name vote
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.Vote
 */
export const vote = buildTx<MsgVote>({
  msg: MsgVote
});
/**
 * Exec executes a proposal.
 * @name exec
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.Exec
 */
export const exec = buildTx<MsgExec>({
  msg: MsgExec
});
/**
 * LeaveGroup allows a group member to leave the group.
 * @name leaveGroup
 * @package cosmos.group.v1
 * @see proto service: cosmos.group.v1.LeaveGroup
 */
export const leaveGroup = buildTx<MsgLeaveGroup>({
  msg: MsgLeaveGroup
});