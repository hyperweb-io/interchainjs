import { buildUseVueMutation } from "../../../vue-query";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import { softwareUpgrade, cancelUpgrade } from "./tx.rpc.func";
/* SoftwareUpgrade is a governance operation for initiating a software upgrade.

 Since: cosmos-sdk 0.46 */
export const useSoftwareUpgrade = buildUseVueMutation<MsgSoftwareUpgrade, Error>({
  builderMutationFn: softwareUpgrade
});
/* CancelUpgrade is a governance operation for cancelling a previously
 approved software upgrade.

 Since: cosmos-sdk 0.46 */
export const useCancelUpgrade = buildUseVueMutation<MsgCancelUpgrade, Error>({
  builderMutationFn: cancelUpgrade
});