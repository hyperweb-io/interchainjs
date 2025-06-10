import { buildUseVueMutation } from "../../../vue-query";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
import { softwareUpgrade, cancelUpgrade } from "./tx.rpc.func";
/**
 * SoftwareUpgrade is a governance operation for initiating a software upgrade.
 * @name useSoftwareUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.SoftwareUpgrade
 */
export const useSoftwareUpgrade = buildUseVueMutation<MsgSoftwareUpgrade, Error>({
  builderMutationFn: softwareUpgrade
});
/**
 * CancelUpgrade is a governance operation for cancelling a previously
 * approved software upgrade.
 * @name useCancelUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.CancelUpgrade
 */
export const useCancelUpgrade = buildUseVueMutation<MsgCancelUpgrade, Error>({
  builderMutationFn: cancelUpgrade
});