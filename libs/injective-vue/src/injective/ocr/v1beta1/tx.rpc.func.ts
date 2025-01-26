import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
export const createCreateFeed = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateFeed>({
  clientResolver,
  typeUrl: MsgCreateFeed.typeUrl,
  encoders: toEncoders(MsgCreateFeed),
  converters: toConverters(MsgCreateFeed)
});
export const createUpdateFeed = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateFeed>({
  clientResolver,
  typeUrl: MsgUpdateFeed.typeUrl,
  encoders: toEncoders(MsgUpdateFeed),
  converters: toConverters(MsgUpdateFeed)
});
export const createTransmit = (clientResolver?: SigningClientResolver) => buildTx<MsgTransmit>({
  clientResolver,
  typeUrl: MsgTransmit.typeUrl,
  encoders: toEncoders(MsgTransmit),
  converters: toConverters(MsgTransmit)
});
export const createFundFeedRewardPool = (clientResolver?: SigningClientResolver) => buildTx<MsgFundFeedRewardPool>({
  clientResolver,
  typeUrl: MsgFundFeedRewardPool.typeUrl,
  encoders: toEncoders(MsgFundFeedRewardPool),
  converters: toConverters(MsgFundFeedRewardPool)
});
export const createWithdrawFeedRewardPool = (clientResolver?: SigningClientResolver) => buildTx<MsgWithdrawFeedRewardPool>({
  clientResolver,
  typeUrl: MsgWithdrawFeedRewardPool.typeUrl,
  encoders: toEncoders(MsgWithdrawFeedRewardPool),
  converters: toConverters(MsgWithdrawFeedRewardPool)
});
export const createSetPayees = (clientResolver?: SigningClientResolver) => buildTx<MsgSetPayees>({
  clientResolver,
  typeUrl: MsgSetPayees.typeUrl,
  encoders: toEncoders(MsgSetPayees),
  converters: toConverters(MsgSetPayees)
});
export const createTransferPayeeship = (clientResolver?: SigningClientResolver) => buildTx<MsgTransferPayeeship>({
  clientResolver,
  typeUrl: MsgTransferPayeeship.typeUrl,
  encoders: toEncoders(MsgTransferPayeeship),
  converters: toConverters(MsgTransferPayeeship)
});
export const createAcceptPayeeship = (clientResolver?: SigningClientResolver) => buildTx<MsgAcceptPayeeship>({
  clientResolver,
  typeUrl: MsgAcceptPayeeship.typeUrl,
  encoders: toEncoders(MsgAcceptPayeeship),
  converters: toConverters(MsgAcceptPayeeship)
});
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});