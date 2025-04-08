import { buildTx } from "../../../helper-func-types";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
export const grantAllowance = buildTx<MsgGrantAllowance>({
  msg: MsgGrantAllowance
});
export const revokeAllowance = buildTx<MsgRevokeAllowance>({
  msg: MsgRevokeAllowance
});
export const pruneAllowances = buildTx<MsgPruneAllowances>({
  msg: MsgPruneAllowances
});