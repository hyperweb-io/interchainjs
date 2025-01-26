import { buildUseMutation } from "../../../react-query";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
import { createUpdateParams, createCreateNamespace, createDeleteNamespace, createUpdateNamespace, createUpdateNamespaceRoles, createRevokeNamespaceRoles, createClaimVoucher } from "./tx.rpc.func";
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const useCreateNamespace = buildUseMutation<MsgCreateNamespace, Error>({
  builderMutationFn: createCreateNamespace
});
export const useDeleteNamespace = buildUseMutation<MsgDeleteNamespace, Error>({
  builderMutationFn: createDeleteNamespace
});
export const useUpdateNamespace = buildUseMutation<MsgUpdateNamespace, Error>({
  builderMutationFn: createUpdateNamespace
});
export const useUpdateNamespaceRoles = buildUseMutation<MsgUpdateNamespaceRoles, Error>({
  builderMutationFn: createUpdateNamespaceRoles
});
export const useRevokeNamespaceRoles = buildUseMutation<MsgRevokeNamespaceRoles, Error>({
  builderMutationFn: createRevokeNamespaceRoles
});
export const useClaimVoucher = buildUseMutation<MsgClaimVoucher, Error>({
  builderMutationFn: createClaimVoucher
});