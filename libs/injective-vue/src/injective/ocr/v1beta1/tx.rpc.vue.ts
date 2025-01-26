import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
import { createCreateFeed, createUpdateFeed, createTransmit, createFundFeedRewardPool, createWithdrawFeedRewardPool, createSetPayees, createTransferPayeeship, createAcceptPayeeship, createUpdateParams } from "./tx.rpc.func.ts";
export const useCreateFeed = buildUseVueMutation<MsgCreateFeed, Error>({
  builderMutationFn: createCreateFeed
});
export const useUpdateFeed = buildUseVueMutation<MsgUpdateFeed, Error>({
  builderMutationFn: createUpdateFeed
});
export const useTransmit = buildUseVueMutation<MsgTransmit, Error>({
  builderMutationFn: createTransmit
});
export const useFundFeedRewardPool = buildUseVueMutation<MsgFundFeedRewardPool, Error>({
  builderMutationFn: createFundFeedRewardPool
});
export const useWithdrawFeedRewardPool = buildUseVueMutation<MsgWithdrawFeedRewardPool, Error>({
  builderMutationFn: createWithdrawFeedRewardPool
});
export const useSetPayees = buildUseVueMutation<MsgSetPayees, Error>({
  builderMutationFn: createSetPayees
});
export const useTransferPayeeship = buildUseVueMutation<MsgTransferPayeeship, Error>({
  builderMutationFn: createTransferPayeeship
});
export const useAcceptPayeeship = buildUseVueMutation<MsgAcceptPayeeship, Error>({
  builderMutationFn: createAcceptPayeeship
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});