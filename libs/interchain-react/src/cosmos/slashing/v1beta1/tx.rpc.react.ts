import { buildUseMutation } from "../../../react-query";
import { MsgUnjail, MsgUpdateParams } from "./tx";
import { unjail, updateParams } from "./tx.rpc.func";
/**
 * Unjail defines a method for unjailing a jailed validator, thus returning
 * them into the bonded validator set, so they can begin receiving provisions
 * and rewards again.
 * @name useUnjail
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.Unjail
 */
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: unjail
});
/**
 * UpdateParams defines a governance operation for updating the x/slashing module
 * parameters. The authority defaults to the x/gov module account.
 * 
 * Since: cosmos-sdk 0.47
 * @name useUpdateParams
 * @package cosmos.slashing.v1beta1
 * @see proto service: cosmos.slashing.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});