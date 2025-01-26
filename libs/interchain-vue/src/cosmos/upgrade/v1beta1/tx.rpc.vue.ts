import { buildUseVueMutation } from "../../../vue-query";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import { createSoftwareUpgrade, createCancelUpgrade } from "./tx.rpc.func";
export const useSoftwareUpgrade = buildUseVueMutation<MsgSoftwareUpgrade, Error>({
  builderMutationFn: createSoftwareUpgrade
});
export const useCancelUpgrade = buildUseVueMutation<MsgCancelUpgrade, Error>({
  builderMutationFn: createCancelUpgrade
});