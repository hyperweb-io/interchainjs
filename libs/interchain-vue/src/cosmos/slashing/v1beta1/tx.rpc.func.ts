import { buildTx } from "../../../helper-func-types";
import { MsgUnjail, MsgUpdateParams } from "./tx";
/**
 * Unjail defines a method for unjailing a jailed validator, thus returning
 * them into the bonded validator set, so they can begin receiving provisions
 * and rewards again.
 * @name unjail
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.Unjail
 */
export const unjail = buildTx<MsgUnjail>({
  msg: MsgUnjail
});
/**
 * UpdateParams defines a governance operation for updating the x/slashing module
 * parameters. The authority defaults to the x/gov module account.
 * 
 * Since: cosmos-sdk 0.47
 * @name updateParams
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});