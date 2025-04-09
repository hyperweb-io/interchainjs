import { buildTx } from "../../../helper-func-types";
import { MsgSubmitEvidence } from "./tx";
export const submitEvidence = buildTx<MsgSubmitEvidence>({
  msg: MsgSubmitEvidence
});