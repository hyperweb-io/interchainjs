import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
import { createFeed, updateFeed, transmit, fundFeedRewardPool, withdrawFeedRewardPool, setPayees, transferPayeeship, acceptPayeeship, updateParams } from "./tx.rpc.func";
export const useCreateFeed = buildUseVueMutation<MsgCreateFeed, Error>({
  builderMutationFn: createFeed
});
export const useUpdateFeed = buildUseVueMutation<MsgUpdateFeed, Error>({
  builderMutationFn: updateFeed
});
export const useTransmit = buildUseVueMutation<MsgTransmit, Error>({
  builderMutationFn: transmit
});
export const useFundFeedRewardPool = buildUseVueMutation<MsgFundFeedRewardPool, Error>({
  builderMutationFn: fundFeedRewardPool
});
export const useWithdrawFeedRewardPool = buildUseVueMutation<MsgWithdrawFeedRewardPool, Error>({
  builderMutationFn: withdrawFeedRewardPool
});
export const useSetPayees = buildUseVueMutation<MsgSetPayees, Error>({
  builderMutationFn: setPayees
});
export const useTransferPayeeship = buildUseVueMutation<MsgTransferPayeeship, Error>({
  builderMutationFn: transferPayeeship
});
export const useAcceptPayeeship = buildUseVueMutation<MsgAcceptPayeeship, Error>({
  builderMutationFn: acceptPayeeship
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});