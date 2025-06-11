import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams } from "./tx";
/**
 * @name updateParams
 * @package injective.txfees.v1beta1
 * @see proto service: injective.txfees.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});