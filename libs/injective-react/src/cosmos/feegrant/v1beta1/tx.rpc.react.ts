import { buildUseMutation } from "../../../react-query";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
import { createGrantAllowance, createRevokeAllowance, createPruneAllowances } from "./tx.rpc.func";
export const useGrantAllowance = buildUseMutation<MsgGrantAllowance, Error>({
  builderMutationFn: createGrantAllowance
});
export const useRevokeAllowance = buildUseMutation<MsgRevokeAllowance, Error>({
  builderMutationFn: createRevokeAllowance
});
export const usePruneAllowances = buildUseMutation<MsgPruneAllowances, Error>({
  builderMutationFn: createPruneAllowances
});