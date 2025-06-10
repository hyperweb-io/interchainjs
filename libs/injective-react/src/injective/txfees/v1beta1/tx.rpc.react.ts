import { buildUseMutation } from "../../../react-query";
import { MsgUpdateParams } from "./tx";
import { updateParams } from "./tx.rpc.func";
/**
 * @name useUpdateParams
 * @package injective.txfees.v1beta1
 * @see proto service: injective.txfees.v1beta1.UpdateParams
 */
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});