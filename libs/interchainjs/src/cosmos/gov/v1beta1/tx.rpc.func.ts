import { buildTx } from "../../../helper-func-types";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
/* SubmitProposal defines a method to create new proposal given a content. */
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal
});
/* Vote defines a method to add a vote on a specific proposal. */
export const vote = buildTx<MsgVote>({
  msg: MsgVote
});
/* VoteWeighted defines a method to add a weighted vote on a specific proposal.

 Since: cosmos-sdk 0.43 */
export const voteWeighted = buildTx<MsgVoteWeighted>({
  msg: MsgVoteWeighted
});
/* Deposit defines a method to add deposit on a specific proposal. */
export const deposit = buildTx<MsgDeposit>({
  msg: MsgDeposit
});