import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
export const createCreateFeed = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateFeed>({
  clientResolver,
  typeUrl: MsgCreateFeed.typeUrl,
  encoders: toEncoders(MsgCreateFeed),
  converters: toConverters(MsgCreateFeed),
  deps: [MsgCreateFeed]
});
export const useCreateFeed = buildUseMutation<MsgCreateFeed, Error>({
  builderMutationFn: createCreateFeed
});
export const createUpdateFeed = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateFeed>({
  clientResolver,
  typeUrl: MsgUpdateFeed.typeUrl,
  encoders: toEncoders(MsgUpdateFeed),
  converters: toConverters(MsgUpdateFeed),
  deps: [MsgUpdateFeed]
});
export const useUpdateFeed = buildUseMutation<MsgUpdateFeed, Error>({
  builderMutationFn: createUpdateFeed
});
export const createTransmit = (clientResolver?: SigningClientResolver) => buildTx<MsgTransmit>({
  clientResolver,
  typeUrl: MsgTransmit.typeUrl,
  encoders: toEncoders(MsgTransmit),
  converters: toConverters(MsgTransmit),
  deps: [MsgTransmit]
});
export const useTransmit = buildUseMutation<MsgTransmit, Error>({
  builderMutationFn: createTransmit
});
export const createFundFeedRewardPool = (clientResolver?: SigningClientResolver) => buildTx<MsgFundFeedRewardPool>({
  clientResolver,
  typeUrl: MsgFundFeedRewardPool.typeUrl,
  encoders: toEncoders(MsgFundFeedRewardPool),
  converters: toConverters(MsgFundFeedRewardPool),
  deps: [MsgFundFeedRewardPool]
});
export const useFundFeedRewardPool = buildUseMutation<MsgFundFeedRewardPool, Error>({
  builderMutationFn: createFundFeedRewardPool
});
export const createWithdrawFeedRewardPool = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawFeedRewardPool>({
  clientResolver,
  typeUrl: MsgWithdrawFeedRewardPool.typeUrl,
  encoders: toEncoders(MsgWithdrawFeedRewardPool),
  converters: toConverters(MsgWithdrawFeedRewardPool),
  deps: [MsgWithdrawFeedRewardPool]
});
export const useWithdrawFeedRewardPool = buildUseMutation<MsgWithdrawFeedRewardPool, Error>({
  builderMutationFn: createWithdrawFeedRewardPool
});
export const createSetPayees = (clientResolver?: SigningClientResolver) => buildTx<MsgSetPayees>({
  clientResolver,
  typeUrl: MsgSetPayees.typeUrl,
  encoders: toEncoders(MsgSetPayees),
  converters: toConverters(MsgSetPayees),
  deps: [MsgSetPayees]
});
export const useSetPayees = buildUseMutation<MsgSetPayees, Error>({
  builderMutationFn: createSetPayees
});
export const createTransferPayeeship = (clientResolver?: SigningClientResolver) => buildTx<MsgTransferPayeeship>({
  clientResolver,
  typeUrl: MsgTransferPayeeship.typeUrl,
  encoders: toEncoders(MsgTransferPayeeship),
  converters: toConverters(MsgTransferPayeeship),
  deps: [MsgTransferPayeeship]
});
export const useTransferPayeeship = buildUseMutation<MsgTransferPayeeship, Error>({
  builderMutationFn: createTransferPayeeship
});
export const createAcceptPayeeship = (clientResolver?: SigningClientResolver) => buildTx<MsgAcceptPayeeship>({
  clientResolver,
  typeUrl: MsgAcceptPayeeship.typeUrl,
  encoders: toEncoders(MsgAcceptPayeeship),
  converters: toConverters(MsgAcceptPayeeship),
  deps: [MsgAcceptPayeeship]
});
export const useAcceptPayeeship = buildUseMutation<MsgAcceptPayeeship, Error>({
  builderMutationFn: createAcceptPayeeship
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});