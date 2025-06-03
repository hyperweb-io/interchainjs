import { buildUseVueMutation } from "../../../vue-query";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal } from "./tx";
import { submitProposal, execLegacyContent, vote, voteWeighted, deposit, updateParams, cancelProposal } from "./tx.rpc.func";
/* SubmitProposal defines a method to create new proposal given the messages. */
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
/* ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
 to execute a legacy content-based proposal. */
export const useExecLegacyContent = buildUseVueMutation<MsgExecLegacyContent, Error>({
  builderMutationFn: execLegacyContent
});
/* Vote defines a method to add a vote on a specific proposal. */
export const useVote = buildUseVueMutation<MsgVote, Error>({
  builderMutationFn: vote
});
/* VoteWeighted defines a method to add a weighted vote on a specific proposal. */
export const useVoteWeighted = buildUseVueMutation<MsgVoteWeighted, Error>({
  builderMutationFn: voteWeighted
});
/* Deposit defines a method to add deposit on a specific proposal. */
export const useDeposit = buildUseVueMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});
/* UpdateParams defines a governance operation for updating the x/gov module
 parameters. The authority is defined in the keeper.

 Since: cosmos-sdk 0.47 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/* CancelProposal defines a method to cancel governance proposal

 Since: cosmos-sdk 0.50 */
export const useCancelProposal = buildUseVueMutation<MsgCancelProposal, Error>({
  builderMutationFn: cancelProposal
});