import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
import { createFeed, updateFeed, transmit, fundFeedRewardPool, withdrawFeedRewardPool, setPayees, transferPayeeship, acceptPayeeship, updateParams } from "./tx.rpc.func";
/* CreateFeed defines a method for creating feed by module admin */
export const useCreateFeed = buildUseVueMutation<MsgCreateFeed, Error>({
  builderMutationFn: createFeed
});
/* CreateFeed defines a method for creating feed by feed admin or feed billing
 admin */
export const useUpdateFeed = buildUseVueMutation<MsgUpdateFeed, Error>({
  builderMutationFn: updateFeed
});
/* Transmit defines a method for transmitting the feed info by transmitter */
export const useTransmit = buildUseVueMutation<MsgTransmit, Error>({
  builderMutationFn: transmit
});
/* FundFeedRewardPool defines a method to put funds into feed reward pool */
export const useFundFeedRewardPool = buildUseVueMutation<MsgFundFeedRewardPool, Error>({
  builderMutationFn: fundFeedRewardPool
});
/* WithdrawFeedRewardPool defines a method to witdhraw feed reward by feed
 admin or billing admin */
export const useWithdrawFeedRewardPool = buildUseVueMutation<MsgWithdrawFeedRewardPool, Error>({
  builderMutationFn: withdrawFeedRewardPool
});
/* SetPayees defines a method to set payees for transmitters (batch action) */
export const useSetPayees = buildUseVueMutation<MsgSetPayees, Error>({
  builderMutationFn: setPayees
});
/* TransferPayeeship defines a method for a payee to transfer reward receive
 ownership */
export const useTransferPayeeship = buildUseVueMutation<MsgTransferPayeeship, Error>({
  builderMutationFn: transferPayeeship
});
/* AcceptPayeeship defines a method for a new payee to accept reward receive
 ownership */
export const useAcceptPayeeship = buildUseVueMutation<MsgAcceptPayeeship, Error>({
  builderMutationFn: acceptPayeeship
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});