import { buildTx } from "../../../helper-func-types";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export const submitProposal = buildTx<MsgSubmitProposal>({
  msg: MsgSubmitProposal
});
export const vote = buildTx<MsgVote>({
  msg: MsgVote
});
export const voteWeighted = buildTx<MsgVoteWeighted>({
  msg: MsgVoteWeighted
});
export const deposit = buildTx<MsgDeposit>({
  msg: MsgDeposit
});