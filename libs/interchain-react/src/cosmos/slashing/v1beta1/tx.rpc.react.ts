import { buildUseMutation } from "../../../react-query";
import { MsgUnjail, MsgUpdateParams } from "./tx";
import { createUnjail, createUpdateParams } from "./tx.rpc.func";
export const useUnjail = buildUseMutation<MsgUnjail, Error>({
  builderMutationFn: createUnjail
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});