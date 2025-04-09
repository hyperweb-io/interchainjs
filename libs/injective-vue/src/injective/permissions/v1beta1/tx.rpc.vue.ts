import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
import { updateParams, createNamespace, deleteNamespace, updateNamespace, updateNamespaceRoles, revokeNamespaceRoles, claimVoucher } from "./tx.rpc.func";
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: updateParams
});
export const useCreateNamespace = buildUseVueMutation<MsgCreateNamespace, Error>({
  builderMutationFn: createNamespace
});
export const useDeleteNamespace = buildUseVueMutation<MsgDeleteNamespace, Error>({
  builderMutationFn: deleteNamespace
});
export const useUpdateNamespace = buildUseVueMutation<MsgUpdateNamespace, Error>({
  builderMutationFn: updateNamespace
});
export const useUpdateNamespaceRoles = buildUseVueMutation<MsgUpdateNamespaceRoles, Error>({
  builderMutationFn: updateNamespaceRoles
});
export const useRevokeNamespaceRoles = buildUseVueMutation<MsgRevokeNamespaceRoles, Error>({
  builderMutationFn: revokeNamespaceRoles
});
export const useClaimVoucher = buildUseVueMutation<MsgClaimVoucher, Error>({
  builderMutationFn: claimVoucher
});