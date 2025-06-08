import { buildTx } from "../../../helper-func-types";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
/**
 * CreateFeed defines a method for creating feed by module admin
 * @name createFeed
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.CreateFeed
 */
export const createFeed = buildTx<MsgCreateFeed>({
  msg: MsgCreateFeed
});
/**
 * CreateFeed defines a method for creating feed by feed admin or feed billing
 * admin
 * @name updateFeed
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.UpdateFeed
 */
export const updateFeed = buildTx<MsgUpdateFeed>({
  msg: MsgUpdateFeed
});
/**
 * Transmit defines a method for transmitting the feed info by transmitter
 * @name transmit
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.Transmit
 */
export const transmit = buildTx<MsgTransmit>({
  msg: MsgTransmit
});
/**
 * FundFeedRewardPool defines a method to put funds into feed reward pool
 * @name fundFeedRewardPool
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.FundFeedRewardPool
 */
export const fundFeedRewardPool = buildTx<MsgFundFeedRewardPool>({
  msg: MsgFundFeedRewardPool
});
/**
 * WithdrawFeedRewardPool defines a method to witdhraw feed reward by feed
 * admin or billing admin
 * @name withdrawFeedRewardPool
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.WithdrawFeedRewardPool
 */
export const withdrawFeedRewardPool = buildTx<MsgWithdrawFeedRewardPool>({
  msg: MsgWithdrawFeedRewardPool
});
/**
 * SetPayees defines a method to set payees for transmitters (batch action)
 * @name setPayees
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.SetPayees
 */
export const setPayees = buildTx<MsgSetPayees>({
  msg: MsgSetPayees
});
/**
 * TransferPayeeship defines a method for a payee to transfer reward receive
 * ownership
 * @name transferPayeeship
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.TransferPayeeship
 */
export const transferPayeeship = buildTx<MsgTransferPayeeship>({
  msg: MsgTransferPayeeship
});
/**
 * AcceptPayeeship defines a method for a new payee to accept reward receive
 * ownership
 * @name acceptPayeeship
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.AcceptPayeeship
 */
export const acceptPayeeship = buildTx<MsgAcceptPayeeship>({
  msg: MsgAcceptPayeeship
});
/**
 * @name updateParams
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});