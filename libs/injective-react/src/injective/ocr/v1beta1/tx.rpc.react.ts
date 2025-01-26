import { buildUseMutation } from "../../../react-query";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
import { createCreateFeed, createUpdateFeed, createTransmit, createFundFeedRewardPool, createWithdrawFeedRewardPool, createSetPayees, createTransferPayeeship, createAcceptPayeeship, createUpdateParams } from "./tx.rpc.func.ts";
export const useCreateFeed = buildUseMutation<MsgCreateFeed, Error>({
  builderMutationFn: createCreateFeed
});
export const useUpdateFeed = buildUseMutation<MsgUpdateFeed, Error>({
  builderMutationFn: createUpdateFeed
});
export const useTransmit = buildUseMutation<MsgTransmit, Error>({
  builderMutationFn: createTransmit
});
export const useFundFeedRewardPool = buildUseMutation<MsgFundFeedRewardPool, Error>({
  builderMutationFn: createFundFeedRewardPool
});
export const useWithdrawFeedRewardPool = buildUseMutation<MsgWithdrawFeedRewardPool, Error>({
  builderMutationFn: createWithdrawFeedRewardPool
});
export const useSetPayees = buildUseMutation<MsgSetPayees, Error>({
  builderMutationFn: createSetPayees
});
export const useTransferPayeeship = buildUseMutation<MsgTransferPayeeship, Error>({
  builderMutationFn: createTransferPayeeship
});
export const useAcceptPayeeship = buildUseMutation<MsgAcceptPayeeship, Error>({
  builderMutationFn: createAcceptPayeeship
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});