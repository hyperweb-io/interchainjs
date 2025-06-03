import { buildTx } from "../../../helper-func-types";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
/* CreateFeed defines a method for creating feed by module admin */
export const createFeed = buildTx<MsgCreateFeed>({
  msg: MsgCreateFeed
});
/* CreateFeed defines a method for creating feed by feed admin or feed billing
 admin */
export const updateFeed = buildTx<MsgUpdateFeed>({
  msg: MsgUpdateFeed
});
/* Transmit defines a method for transmitting the feed info by transmitter */
export const transmit = buildTx<MsgTransmit>({
  msg: MsgTransmit
});
/* FundFeedRewardPool defines a method to put funds into feed reward pool */
export const fundFeedRewardPool = buildTx<MsgFundFeedRewardPool>({
  msg: MsgFundFeedRewardPool
});
/* WithdrawFeedRewardPool defines a method to witdhraw feed reward by feed
 admin or billing admin */
export const withdrawFeedRewardPool = buildTx<MsgWithdrawFeedRewardPool>({
  msg: MsgWithdrawFeedRewardPool
});
/* SetPayees defines a method to set payees for transmitters (batch action) */
export const setPayees = buildTx<MsgSetPayees>({
  msg: MsgSetPayees
});
/* TransferPayeeship defines a method for a payee to transfer reward receive
 ownership */
export const transferPayeeship = buildTx<MsgTransferPayeeship>({
  msg: MsgTransferPayeeship
});
/* AcceptPayeeship defines a method for a new payee to accept reward receive
 ownership */
export const acceptPayeeship = buildTx<MsgAcceptPayeeship>({
  msg: MsgAcceptPayeeship
});
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});