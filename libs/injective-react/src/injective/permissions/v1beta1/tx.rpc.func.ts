import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams),
  deps: [MsgUpdateParams]
});
export const useUpdateParams = buildUseMutation<MsgUpdateParams, Error>({
  builderMutationFn: createUpdateParams
});
export const createCreateNamespace = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateNamespace>({
  clientResolver,
  typeUrl: MsgCreateNamespace.typeUrl,
  encoders: toEncoders(MsgCreateNamespace),
  converters: toConverters(MsgCreateNamespace),
  deps: [MsgCreateNamespace]
});
export const useCreateNamespace = buildUseMutation<MsgCreateNamespace, Error>({
  builderMutationFn: createCreateNamespace
});
export const createDeleteNamespace = (clientResolver?: SigningClientResolver) => buildTx<MsgDeleteNamespace>({
  clientResolver,
  typeUrl: MsgDeleteNamespace.typeUrl,
  encoders: toEncoders(MsgDeleteNamespace),
  converters: toConverters(MsgDeleteNamespace),
  deps: [MsgDeleteNamespace]
});
export const useDeleteNamespace = buildUseMutation<MsgDeleteNamespace, Error>({
  builderMutationFn: createDeleteNamespace
});
export const createUpdateNamespace = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateNamespace>({
  clientResolver,
  typeUrl: MsgUpdateNamespace.typeUrl,
  encoders: toEncoders(MsgUpdateNamespace),
  converters: toConverters(MsgUpdateNamespace),
  deps: [MsgUpdateNamespace]
});
export const useUpdateNamespace = buildUseMutation<MsgUpdateNamespace, Error>({
  builderMutationFn: createUpdateNamespace
});
export const createUpdateNamespaceRoles = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateNamespaceRoles>({
  clientResolver,
  typeUrl: MsgUpdateNamespaceRoles.typeUrl,
  encoders: toEncoders(MsgUpdateNamespaceRoles),
  converters: toConverters(MsgUpdateNamespaceRoles),
  deps: [MsgUpdateNamespaceRoles]
});
export const useUpdateNamespaceRoles = buildUseMutation<MsgUpdateNamespaceRoles, Error>({
  builderMutationFn: createUpdateNamespaceRoles
});
export const createRevokeNamespaceRoles = (clientResolver?: SigningClientResolver) => buildTx<MsgRevokeNamespaceRoles>({
  clientResolver,
  typeUrl: MsgRevokeNamespaceRoles.typeUrl,
  encoders: toEncoders(MsgRevokeNamespaceRoles),
  converters: toConverters(MsgRevokeNamespaceRoles),
  deps: [MsgRevokeNamespaceRoles]
});
export const useRevokeNamespaceRoles = buildUseMutation<MsgRevokeNamespaceRoles, Error>({
  builderMutationFn: createRevokeNamespaceRoles
});
export const createClaimVoucher = (clientResolver?: SigningClientResolver) => buildTx<MsgClaimVoucher>({
  clientResolver,
  typeUrl: MsgClaimVoucher.typeUrl,
  encoders: toEncoders(MsgClaimVoucher),
  converters: toConverters(MsgClaimVoucher),
  deps: [MsgClaimVoucher]
});
export const useClaimVoucher = buildUseMutation<MsgClaimVoucher, Error>({
  builderMutationFn: createClaimVoucher
});