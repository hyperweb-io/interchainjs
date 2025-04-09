import { buildTx } from "../../../helper-func-types";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export const grant = buildTx<MsgGrant>({
  msg: MsgGrant
});
export const exec = buildTx<MsgExec>({
  msg: MsgExec
});
export const revoke = buildTx<MsgRevoke>({
  msg: MsgRevoke
});