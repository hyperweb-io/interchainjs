import { buildUseVueMutation } from "../../../vue-query";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
import { grantAllowance, revokeAllowance, pruneAllowances } from "./tx.rpc.func";
export const useGrantAllowance = buildUseVueMutation<MsgGrantAllowance, Error>({
  builderMutationFn: grantAllowance
});
export const useRevokeAllowance = buildUseVueMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: revokeAllowance
});
export const usePruneAllowances = buildUseVueMutation<MsgPruneAllowances, Error>({
  builderMutationFn: pruneAllowances
});