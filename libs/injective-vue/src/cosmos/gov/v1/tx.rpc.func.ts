import { buildTx } from "../../../helper-func-types";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal } from "./tx";
/* SubmitProposal defines a method to create new proposal given the messages. */
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal
});
/* ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
 to execute a legacy content-based proposal. */
export const execLegacyContent = buildTx<MsgExecLegacyContent>({
  msg: MsgExecLegacyContent
});
/* Vote defines a method to add a vote on a specific proposal. */
export const vote = buildTx<MsgVote>({
  msg: MsgVote
});
/* VoteWeighted defines a method to add a weighted vote on a specific proposal. */
export const voteWeighted = buildTx<MsgVoteWeighted>({
  msg: MsgVoteWeighted
});
/* Deposit defines a method to add deposit on a specific proposal. */
export const deposit = buildTx<MsgDeposit>({
  msg: MsgDeposit
});
/* UpdateParams defines a governance operation for updating the x/gov module
 parameters. The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
/* CancelProposal defines a method to cancel governance proposal

 Since: cosmos-sdk 0.50 */
export const cancelProposal = buildTx<MsgCancelProposal>({
  msg: MsgCancelProposal
});