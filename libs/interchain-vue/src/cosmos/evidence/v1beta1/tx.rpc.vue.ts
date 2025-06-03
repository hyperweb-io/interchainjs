import { buildUseVueMutation } from "../../../vue-query";
import { MsgSubmitEvidence } from "./tx";
import { submitEvidence } from "./tx.rpc.func";
/* SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
 counterfactual signing. */
export const useSubmitEvidence = buildUseVueMutation<MsgSubmitEvidence, Error>({
  builderMutationFn: submitEvidence
});