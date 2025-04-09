import { buildTx } from "../../../helper-func-types";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export const softwareUpgrade = buildTx<MsgSoftwareUpgrade>({
  msg: MsgSoftwareUpgrade
});
export const cancelUpgrade = buildTx<MsgCancelUpgrade>({
  msg: MsgCancelUpgrade
});