import { buildTx } from "../../../helper-func-types";
import { MsgSubmitEvidence } from "./tx";
/* SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
 counterfactual signing. */
export const submitEvidence = buildTx<MsgSubmitEvidence>({
  msg: MsgSubmitEvidence
});