import { buildTx } from "../../../helper-func-types";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
/* SoftwareUpgrade is a governance operation for initiating a software upgrade.

 Since: cosmos-sdk 0.46 */
export const softwareUpgrade = buildTx<MsgSoftwareUpgrade>({
  msg: MsgSoftwareUpgrade
});
/* CancelUpgrade is a governance operation for cancelling a previously
 approved software upgrade.

 Since: cosmos-sdk 0.46 */
export const cancelUpgrade = buildTx<MsgCancelUpgrade>({
  msg: MsgCancelUpgrade
});