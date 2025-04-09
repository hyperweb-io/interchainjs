import { buildUseVueMutation } from "../../../vue-query";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import { softwareUpgrade, cancelUpgrade } from "./tx.rpc.func";
export const useSoftwareUpgrade = buildUseVueMutation<MsgSoftwareUpgrade, Error>({
  builderMutationFn: softwareUpgrade
});
export const useCancelUpgrade = buildUseVueMutation<MsgCancelUpgrade, Error>({
  builderMutationFn: cancelUpgrade
});