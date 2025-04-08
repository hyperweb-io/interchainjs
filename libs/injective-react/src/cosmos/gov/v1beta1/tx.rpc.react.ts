import { buildUseMutation } from "../../../react-query";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
import { submitProposal, vote, voteWeighted, deposit } from "./tx.rpc.func";
export const useSubmitProposal = buildUseMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
export const useVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: vote
});
export const useVoteWeighted = buildUseMutation<MsgVoteWeighted, Error>({
  builderMutationFn: voteWeighted
});
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});