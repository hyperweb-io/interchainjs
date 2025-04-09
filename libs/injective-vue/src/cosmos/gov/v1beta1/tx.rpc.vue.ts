import { buildUseVueMutation } from "../../../vue-query";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
import { submitProposal, vote, voteWeighted, deposit } from "./tx.rpc.func";
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
export const useVote = buildUseVueMutation<MsgVote, Error>({
  builderMutationFn: vote
});
export const useVoteWeighted = buildUseVueMutation<MsgVoteWeighted, Error>({
  builderMutationFn: voteWeighted
});
export const useDeposit = buildUseVueMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});