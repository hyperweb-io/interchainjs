import { buildUseVueMutation } from "../../../vue-query";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
import { createUpdateParams, createCreateNamespace, createDeleteNamespace, createUpdateNamespace, createUpdateNamespaceRoles, createRevokeNamespaceRoles, createClaimVoucher } from "./tx.rpc.func";
export const useUpdateParams = buildUseVueMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useCreateNamespace = buildUseVueMutation<MsgCreateNamespace, Error>({
  builderMutationFn: createCreateNamespace
});
export const useDeleteNamespace = buildUseVueMutation<MsgDeleteNamespace, Error>({
  builderMutationFn: createDeleteNamespace
});
export const useUpdateNamespace = buildUseVueMutation<MsgUpdateNamespace, Error>({
  builderMutationFn: createUpdateNamespace
});
export const useUpdateNamespaceRoles = buildUseVueMutation<MsgUpdateNamespaceRoles, Error>({
  builderMutationFn: createUpdateNamespaceRoles
});
export const useRevokeNamespaceRoles = buildUseVueMutation<MsgRevokeNamespaceRoles, Error>({
  builderMutationFn: createRevokeNamespaceRoles
});
export const useClaimVoucher = buildUseVueMutation<MsgClaimVoucher, Error>({
  builderMutationFn: createClaimVoucher
});