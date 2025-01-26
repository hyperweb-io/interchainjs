import { buildUseVueMutation } from "../../../vue-query";
import { MsgUnjail, MsgUpdateParams } from "./tx";
import { createUnjail, createUpdateParams } from "./tx.rpc.func";
export const useUnjail = buildUseVueMutation<MsgUnjail, Error>({
  builderMutationFn: createUnjail
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});