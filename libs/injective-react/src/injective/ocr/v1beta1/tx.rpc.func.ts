import { buildTx } from "../../../helper-func-types";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
export const createFeed = buildTx<MsgCreateFeed>({
  msg: MsgCreateFeed
});
export const updateFeed = buildTx<MsgUpdateFeed>({
  msg: MsgUpdateFeed
});
export const transmit = buildTx<MsgTransmit>({
  msg: MsgTransmit
});
export const fundFeedRewardPool = buildTx<MsgFundFeedRewardPool>({
  msg: MsgFundFeedRewardPool
});
export const withdrawFeedRewardPool = buildTx<MsgWithdrawFeedRewardPool>({
  msg: MsgWithdrawFeedRewardPool
});
export const setPayees = buildTx<MsgSetPayees>({
  msg: MsgSetPayees
});
export const transferPayeeship = buildTx<MsgTransferPayeeship>({
  msg: MsgTransferPayeeship
});
export const acceptPayeeship = buildTx<MsgAcceptPayeeship>({
  msg: MsgAcceptPayeeship
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});