import { buildUseMutation } from "../../../react-query";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgCancelProposal } from "./tx";
import { submitProposal, execLegacyContent, vote, voteWeighted, deposit, updateParams, cancelProposal } from "./tx.rpc.func";
/**
 * SubmitProposal defines a method to create new proposal given the messages.
 * @name useSubmitProposal
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.SubmitProposal
 */
export const useSubmitProposal = buildUseMutation<MsgSubmitProposal, Error>({
  builderMutationFn: submitProposal
});
/**
 * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
 * to execute a legacy content-based proposal.
 * @name useExecLegacyContent
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.ExecLegacyContent
 */
export const useExecLegacyContent = buildUseMutation<MsgExecLegacyContent, Error>({
  builderMutationFn: execLegacyContent
});
/**
 * Vote defines a method to add a vote on a specific proposal.
 * @name useVote
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Vote
 */
export const useVote = buildUseMutation<MsgVote, Error>({
  builderMutationFn: vote
});
/**
 * VoteWeighted defines a method to add a weighted vote on a specific proposal.
 * @name useVoteWeighted
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.VoteWeighted
 */
export const useVoteWeighted = buildUseMutation<MsgVoteWeighted, Error>({
  builderMutationFn: voteWeighted
});
/**
 * Deposit defines a method to add deposit on a specific proposal.
 * @name useDeposit
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Deposit
 */
export const useDeposit = buildUseMutation<MsgDeposit, Error>({
  builderMutationFn: deposit
});
/**
 * UpdateParams defines a governance operation for updating the x/gov module
 * parameters. The authority is defined in the keeper.
 * 
 * Since: cosmos-sdk 0.47
 * @name useUpdateParams
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
/**
 * CancelProposal defines a method to cancel governance proposal
 * 
 * Since: cosmos-sdk 0.50
 * @name useCancelProposal
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.CancelProposal
 */
export const useCancelProposal = buildUseMutation<MsgCancelProposal, Error>({
  builderMutationFn: cancelProposal
});