import { buildTx } from "../../../helper-func-types";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
/**
 * SoftwareUpgrade is a governance operation for initiating a software upgrade.
 * @name softwareUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.SoftwareUpgrade
 */
export const softwareUpgrade = buildTx<MsgSoftwareUpgrade>({
  msg: MsgSoftwareUpgrade
});
/**
 * CancelUpgrade is a governance operation for cancelling a previously
 * approved software upgrade.
 * @name cancelUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto service: cosmos.upgrade.v1beta1.CancelUpgrade
 */
export const cancelUpgrade = buildTx<MsgCancelUpgrade>({
  msg: MsgCancelUpgrade
});