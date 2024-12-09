import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { buildUseMutation } from "../../../react-query";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
export const createCreateFeed = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateFeed>({
  clientResolver,
  typeUrl: MsgCreateFeed.typeUrl,
  encoders: toEncoders(MsgCreateFeed),
  converters: toConverters(MsgCreateFeed)
});
export const useCreateFeed = buildUseMutation<MsgCreateFeed, Error>({
  builderMutationFn: createCreateFeed
});
export const createUpdateFeed = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateFeed>({
  clientResolver,
  typeUrl: MsgUpdateFeed.typeUrl,
  encoders: toEncoders(MsgUpdateFeed),
  converters: toConverters(MsgUpdateFeed)
});
export const useUpdateFeed = buildUseMutation<MsgUpdateFeed, Error>({
  builderMutationFn: createUpdateFeed
});
export const createTransmit = (clientResolver?: SigningClientResolver) => buildTx<MsgTransmit>({
  clientResolver,
  typeUrl: MsgTransmit.typeUrl,
  encoders: toEncoders(MsgTransmit),
  converters: toConverters(MsgTransmit)
});
export const useTransmit = buildUseMutation<MsgTransmit, Error>({
  builderMutationFn: createTransmit
});
export const createFundFeedRewardPool = (clientResolver?: SigningClientResolver) => buildTx<MsgFundFeedRewardPool>({
  clientResolver,
  typeUrl: MsgFundFeedRewardPool.typeUrl,
  encoders: toEncoders(MsgFundFeedRewardPool),
  converters: toConverters(MsgFundFeedRewardPool)
});
export const useFundFeedRewardPool = buildUseMutation<MsgFundFeedRewardPool, Error>({
  builderMutationFn: createFundFeedRewardPool
});
export const createWithdrawFeedRewardPool = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawFeedRewardPool>({
  clientResolver,
  typeUrl: MsgWithdrawFeedRewardPool.typeUrl,
  encoders: toEncoders(MsgWithdrawFeedRewardPool),
  converters: toConverters(MsgWithdrawFeedRewardPool)
});
export const useWithdrawFeedRewardPool = buildUseMutation<MsgWithdrawFeedRewardPool, Error>({
  builderMutationFn: createWithdrawFeedRewardPool
});
export const createSetPayees = (clientResolver?: SigningClientResolver) => buildTx<MsgSetPayees>({
  clientResolver,
  typeUrl: MsgSetPayees.typeUrl,
  encoders: toEncoders(MsgSetPayees),
  converters: toConverters(MsgSetPayees)
});
export const useSetPayees = buildUseMutation<MsgSetPayees, Error>({
  builderMutationFn: createSetPayees
});
export const createTransferPayeeship = (clientResolver?: SigningClientResolver) => buildTx<MsgTransferPayeeship>({
  clientResolver,
  typeUrl: MsgTransferPayeeship.typeUrl,
  encoders: toEncoders(MsgTransferPayeeship),
  converters: toConverters(MsgTransferPayeeship)
});
export const useTransferPayeeship = buildUseMutation<MsgTransferPayeeship, Error>({
  builderMutationFn: createTransferPayeeship
});
export const createAcceptPayeeship = (clientResolver?: SigningClientResolver) => buildTx<MsgAcceptPayeeship>({
  clientResolver,
  typeUrl: MsgAcceptPayeeship.typeUrl,
  encoders: toEncoders(MsgAcceptPayeeship),
  converters: toConverters(MsgAcceptPayeeship)
});
export const useAcceptPayeeship = buildUseMutation<MsgAcceptPayeeship, Error>({
  builderMutationFn: createAcceptPayeeship
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});