import { buildUseMutation } from "../../../react-query";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
import { verifyInvariant, updateParams } from "./tx.rpc.func";
/**
 * VerifyInvariant defines a method to verify a particular invariant.
 * @name useVerifyInvariant
 * @package cosmos.crisis.v1beta1
 * @see proto service: cosmos.crisis.v1beta1.VerifyInvariant
 */
export const useVerifyInvariant = buildUseMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: verifyInvariant
});
/**
 * UpdateParams defines a governance operation for updating the x/crisis module
 * parameters. The authority is defined in the keeper.
 * @name useUpdateParams
 * @package cosmos.crisis.v1beta1
 * @see proto service: cosmos.crisis.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});