import { buildUseMutation } from "../../../react-query";
import { MsgUnjail, MsgUpdateParams } from "./tx";
import { unjail, updateParams } from "./tx.rpc.func";
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: unjail
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});