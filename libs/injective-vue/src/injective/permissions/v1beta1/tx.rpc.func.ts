import { buildTx } from "../../../helper-func-types";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});
export const createNamespace = buildTx<MsgCreateNamespace>({
  msg: MsgCreateNamespace
});
export const deleteNamespace = buildTx<MsgDeleteNamespace>({
  msg: MsgDeleteNamespace
});
export const updateNamespace = buildTx<MsgUpdateNamespace>({
  msg: MsgUpdateNamespace
});
export const updateNamespaceRoles = buildTx<MsgUpdateNamespaceRoles>({
  msg: MsgUpdateNamespaceRoles
});
export const revokeNamespaceRoles = buildTx<MsgRevokeNamespaceRoles>({
  msg: MsgRevokeNamespaceRoles
});
export const claimVoucher = buildTx<MsgClaimVoucher>({
  msg: MsgClaimVoucher
});