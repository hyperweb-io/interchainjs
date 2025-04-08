import { buildUseMutation } from "../../../react-query";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import { softwareUpgrade, cancelUpgrade } from "./tx.rpc.func";
export const useSoftwareUpgrade = buildUseMutation<MsgSoftwareUpgrade, Error>({
  builderMutationFn: softwareUpgrade
});
export const useCancelUpgrade = buildUseMutation<MsgCancelUpgrade, Error>({
  builderMutationFn: cancelUpgrade
});