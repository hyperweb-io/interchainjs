import { buildUseVueMutation } from "../../../vue-query";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal } from "./tx";
import { submitProposal, execLegacyContent, vote, voteWeighted, deposit, updateParams, cancelProposal } from "./tx.rpc.func";
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
export const useExecLegacyContent = buildUseVueMutation<MsgExecLegacyContent, Error>({
  builderMutationFn: execLegacyContent
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
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useCancelProposal = buildUseVueMutation<MsgCancelProposal, Error>({
  builderMutationFn: cancelProposal
});