import { buildUseVueMutation } from "../../../vue-query";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
import { submitProposal, vote, voteWeighted, deposit } from "./tx.rpc.func";
/* SubmitProposal defines a method to create new proposal given a content. */
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
/* Vote defines a method to add a vote on a specific proposal. */
export const useVote = buildUseVueMutation<MsgVote, Error>({
  builderMutationFn: vote
});
/* VoteWeighted defines a method to add a weighted vote on a specific proposal.

 Since: cosmos-sdk 0.43 */
export const useVoteWeighted = buildUseVueMutation<MsgVoteWeighted, Error>({
  builderMutationFn: voteWeighted
});
/* Deposit defines a method to add deposit on a specific proposal. */
export const useDeposit = buildUseVueMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});