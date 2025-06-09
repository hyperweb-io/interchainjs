import { buildTx } from "../../../helper-func-types";
import { MsgBid, MsgUpdateParams } from "./tx";
/**
 * Bid defines a method for placing a bid for an auction
 * @name bid
 * @package injective.auction.v1beta1
 * @see proto service: injective.auction.v1beta1.Bid
 */
export const bid = buildTx<MsgBid>({
  msg: MsgBid
});
/**
 * @name updateParams
 * @package injective.auction.v1beta1
 * @see proto service: injective.auction.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});