import { buildUseVueMutation } from "../../../vue-query";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
import { createGrantAllowance, createRevokeAllowance, createPruneAllowances } from "./tx.rpc.func";
export const useGrantAllowance = buildUseVueMutation<MsgGrantAllowance, Error>({
  builderMutationFn: createGrantAllowance
});
export const useRevokeAllowance = buildUseVueMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: createRevokeAllowance
});
export const usePruneAllowances = buildUseVueMutation<MsgPruneAllowances, Error>({
  builderMutationFn: createPruneAllowances
});