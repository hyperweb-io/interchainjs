import { buildTx } from "../../../helper-func-types";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
/**
 * VerifyInvariant defines a method to verify a particular invariant.
 * @name verifyInvariant
 * @package cosmos.crisis.v1beta1
 * @see proto service: cosmos.crisis.v1beta1.VerifyInvariant
 */
export const verifyInvariant = buildTx<MsgVerifyInvariant>({
  msg: MsgVerifyInvariant
});
/**
 * UpdateParams defines a governance operation for updating the x/crisis module
 * parameters. The authority is defined in the keeper.
 * @name updateParams
 * @package cosmos.crisis.v1beta1
 * @see proto service: cosmos.crisis.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});