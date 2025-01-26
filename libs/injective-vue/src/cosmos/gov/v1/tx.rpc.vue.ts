import { buildUseVueMutation } from "../../../vue-query";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal } from "./tx";
import { createSubmitProposal, createExecLegacyContent, createVote, createVoteWeighted, createDeposit, createUpdateParams, createCancelProposal } from "./tx.rpc.func.ts";
export const useSubmitProposal = buildUseVueMutation<MsgSubmitProposal, Error>({
  builderMutationFn: createSubmitProposal
});
export const useExecLegacyContent = buildUseVueMutation<MsgExecLegacyContent, Error>({
  builderMutationFn: createExecLegacyContent
});
export const useVote = buildUseVueMutation<MsgVote, Error>({
  builderMutationFn: createVote
});
export const useVoteWeighted = buildUseVueMutation<MsgVoteWeighted, Error>({
  builderMutationFn: createVoteWeighted
});
export const useDeposit = buildUseVueMutation<MsgDeposit, Error>({
  builderMutationFn: createDeposit
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useCancelProposal = buildUseVueMutation<MsgCancelProposal, Error>({
  builderMutationFn: createCancelProposal
});