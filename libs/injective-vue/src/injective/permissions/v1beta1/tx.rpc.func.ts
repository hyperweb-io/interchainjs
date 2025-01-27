import { buildTx, SigningClientResolver } from "../../../helper-func-types";
import { toEncoders, toConverters } from "@interchainjs/cosmos/utils";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
export const createUpdateParams = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateParams>({
  clientResolver,
  typeUrl: MsgUpdateParams.typeUrl,
  encoders: toEncoders(MsgUpdateParams),
  converters: toConverters(MsgUpdateParams)
});
export const createCreateNamespace = (clientResolver?: SigningClientResolver) => buildTx<MsgCreateNamespace>({
  clientResolver,
  typeUrl: MsgCreateNamespace.typeUrl,
  encoders: toEncoders(MsgCreateNamespace),
  converters: toConverters(MsgCreateNamespace)
});
export const createDeleteNamespace = (clientResolver?: SigningClientResolver) => buildTx<MsgDeleteNamespace>({
  clientResolver,
  typeUrl: MsgDeleteNamespace.typeUrl,
  encoders: toEncoders(MsgDeleteNamespace),
  converters: toConverters(MsgDeleteNamespace)
});
export const createUpdateNamespace = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateNamespace>({
  clientResolver,
  typeUrl: MsgUpdateNamespace.typeUrl,
  encoders: toEncoders(MsgUpdateNamespace),
  converters: toConverters(MsgUpdateNamespace)
});
export const createUpdateNamespaceRoles = (clientResolver?: SigningClientResolver) => buildTx<MsgUpdateNamespaceRoles>({
  clientResolver,
  typeUrl: MsgUpdateNamespaceRoles.typeUrl,
  encoders: toEncoders(MsgUpdateNamespaceRoles),
  converters: toConverters(MsgUpdateNamespaceRoles)
});
export const createRevokeNamespaceRoles = (clientResolver?: SigningClientResolver) => buildTx<MsgRevokeNamespaceRoles>({
  clientResolver,
  typeUrl: MsgRevokeNamespaceRoles.typeUrl,
  encoders: toEncoders(MsgRevokeNamespaceRoles),
  converters: toConverters(MsgRevokeNamespaceRoles)
});
export const createClaimVoucher = (clientResolver?: SigningClientResolver) => buildTx<MsgClaimVoucher>({
  clientResolver,
  typeUrl: MsgClaimVoucher.typeUrl,
  encoders: toEncoders(MsgClaimVoucher),
  converters: toConverters(MsgClaimVoucher)
});