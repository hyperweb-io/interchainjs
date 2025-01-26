import { buildUseVueMutation } from "../../../vue-query";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx";
import { createVerifyInvariant, createUpdateParams } from "./tx.rpc.func.ts";
export const useVerifyInvariant = buildUseVueMutation<MsgVerifyInvariant, Error>({
  builderMutationFn: createVerifyInvariant
});
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});