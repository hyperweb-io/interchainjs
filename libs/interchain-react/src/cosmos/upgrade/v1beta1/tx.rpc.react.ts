import { buildUseMutation } from "../../../react-query";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import { softwareUpgrade, cancelUpgrade } from "./tx.rpc.func";
/* SoftwareUpgrade is a governance operation for initiating a software upgrade.

 Since: cosmos-sdk 0.46 */
export const useSoftwareUpgrade = buildUseMutation<MsgSoftwareUpgrade, Error>({
  builderMutationFn: softwareUpgrade
});
/* CancelUpgrade is a governance operation for cancelling a previously
 approved software upgrade.

 Since: cosmos-sdk 0.46 */
export const useCancelUpgrade = buildUseMutation<MsgCancelUpgrade, Error>({
  builderMutationFn: cancelUpgrade
});