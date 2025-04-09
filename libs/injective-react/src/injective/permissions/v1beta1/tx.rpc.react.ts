import { buildUseMutation } from "../../../react-query";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
import { updateParams, createNamespace, deleteNamespace, updateNamespace, updateNamespaceRoles, revokeNamespaceRoles, claimVoucher } from "./tx.rpc.func";
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useCreateNamespace = buildUseMutation<MsgCreateNamespace, Error>({
  builderMutationFn: createNamespace
});
export const useDeleteNamespace = buildUseMutation<MsgDeleteNamespace, Error>({
  builderMutationFn: deleteNamespace
});
export const useUpdateNamespace = buildUseMutation<MsgUpdateNamespace, Error>({
  builderMutationFn: updateNamespace
});
export const useUpdateNamespaceRoles = buildUseMutation<MsgUpdateNamespaceRoles, Error>({
  builderMutationFn: updateNamespaceRoles
});
export const useRevokeNamespaceRoles = buildUseMutation<MsgRevokeNamespaceRoles, Error>({
  builderMutationFn: revokeNamespaceRoles
});
export const useClaimVoucher = buildUseMutation<MsgClaimVoucher, Error>({
  builderMutationFn: claimVoucher
});