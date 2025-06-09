import { buildUseVueMutation } from "../../../vue-query";
import { MsgCreateFeed, MsgUpdateFeed, MsgTransmit, MsgFundFeedRewardPool, MsgWithdrawFeedRewardPool, MsgSetPayees, MsgTransferPayeeship, MsgAcceptPayeeship, MsgUpdateParams } from "./tx";
import { createFeed, updateFeed, transmit, fundFeedRewardPool, withdrawFeedRewardPool, setPayees, transferPayeeship, acceptPayeeship, updateParams } from "./tx.rpc.func";
/**
 * CreateFeed defines a method for creating feed by module admin
 * @name useCreateFeed
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.CreateFeed
 */
export const useCreateFeed = buildUseVueMutation<MsgCreateFeed, Error>({
  builderMutationFn: createFeed
});
/**
 * CreateFeed defines a method for creating feed by feed admin or feed billing
 * admin
 * @name useUpdateFeed
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.UpdateFeed
 */
export const useUpdateFeed = buildUseVueMutation<MsgUpdateFeed, Error>({
  builderMutationFn: updateFeed
});
/**
 * Transmit defines a method for transmitting the feed info by transmitter
 * @name useTransmit
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.Transmit
 */
export const useTransmit = buildUseVueMutation<MsgTransmit, Error>({
  builderMutationFn: transmit
});
/**
 * FundFeedRewardPool defines a method to put funds into feed reward pool
 * @name useFundFeedRewardPool
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.FundFeedRewardPool
 */
export const useFundFeedRewardPool = buildUseVueMutation<MsgFundFeedRewardPool, Error>({
  builderMutationFn: fundFeedRewardPool
});
/**
 * WithdrawFeedRewardPool defines a method to witdhraw feed reward by feed
 * admin or billing admin
 * @name useWithdrawFeedRewardPool
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.WithdrawFeedRewardPool
 */
export const useWithdrawFeedRewardPool = buildUseVueMutation<MsgWithdrawFeedRewardPool, Error>({
  builderMutationFn: withdrawFeedRewardPool
});
/**
 * SetPayees defines a method to set payees for transmitters (batch action)
 * @name useSetPayees
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.SetPayees
 */
export const useSetPayees = buildUseVueMutation<MsgSetPayees, Error>({
  builderMutationFn: setPayees
});
/**
 * TransferPayeeship defines a method for a payee to transfer reward receive
 * ownership
 * @name useTransferPayeeship
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.TransferPayeeship
 */
export const useTransferPayeeship = buildUseVueMutation<MsgTransferPayeeship, Error>({
  builderMutationFn: transferPayeeship
});
/**
 * AcceptPayeeship defines a method for a new payee to accept reward receive
 * ownership
 * @name useAcceptPayeeship
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.AcceptPayeeship
 */
export const useAcceptPayeeship = buildUseVueMutation<MsgAcceptPayeeship, Error>({
  builderMutationFn: acceptPayeeship
});
/**
 * @name useUpdateParams
 * @package injective.ocr.v1beta1
 * @see proto service: injective.ocr.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});