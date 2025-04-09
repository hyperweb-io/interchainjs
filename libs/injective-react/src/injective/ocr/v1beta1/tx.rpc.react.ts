import { buildUseMutation } from "../../../react-query";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
import { createFeed, updateFeed, transmit, fundFeedRewardPool, withdrawFeedRewardPool, setPayees, transferPayeeship, acceptPayeeship, updateParams } from "./tx.rpc.func";
export const useCreateFeed = buildUseMutation<MsgCreateFeed, Error>({
  builderMutationFn: createFeed
});
export const useUpdateFeed = buildUseMutation<MsgUpdateFeed, Error>({
  builderMutationFn: updateFeed
});
export const useTransmit = buildUseMutation<MsgTransmit, Error>({
  builderMutationFn: transmit
});
export const useFundFeedRewardPool = buildUseMutation<MsgFundFeedRewardPool, Error>({
  builderMutationFn: fundFeedRewardPool
});
export const useWithdrawFeedRewardPool = buildUseMutation<MsgWithdrawFeedRewardPool, Error>({
  builderMutationFn: withdrawFeedRewardPool
});
export const useSetPayees = buildUseMutation<MsgSetPayees, Error>({
  builderMutationFn: setPayees
});
export const useTransferPayeeship = buildUseMutation<MsgTransferPayeeship, Error>({
  builderMutationFn: transferPayeeship
});
export const useAcceptPayeeship = buildUseMutation<MsgAcceptPayeeship, Error>({
  builderMutationFn: acceptPayeeship
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});