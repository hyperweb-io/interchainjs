import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
export const AminoConverter = {
  "/injective.permissions.v1beta1.MsgUpdateParams": {
    aminoType: "permissions/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/injective.permissions.v1beta1.MsgCreateNamespace": {
    aminoType: "permissions/MsgCreateNamespace",
    toAmino: MsgCreateNamespace.toAmino,
    fromAmino: MsgCreateNamespace.fromAmino
  },
  "/injective.permissions.v1beta1.MsgDeleteNamespace": {
    aminoType: "permissions/MsgDeleteNamespace",
    toAmino: MsgDeleteNamespace.toAmino,
    fromAmino: MsgDeleteNamespace.fromAmino
  },
  "/injective.permissions.v1beta1.MsgUpdateNamespace": {
    aminoType: "permissions/MsgUpdateNamespace",
    toAmino: MsgUpdateNamespace.toAmino,
    fromAmino: MsgUpdateNamespace.fromAmino
  },
  "/injective.permissions.v1beta1.MsgUpdateNamespaceRoles": {
    aminoType: "permissions/MsgUpdateNamespaceRoles",
    toAmino: MsgUpdateNamespaceRoles.toAmino,
    fromAmino: MsgUpdateNamespaceRoles.fromAmino
  },
  "/injective.permissions.v1beta1.MsgRevokeNamespaceRoles": {
    aminoType: "permissions/MsgRevokeNamespaceRoles",
    toAmino: MsgRevokeNamespaceRoles.toAmino,
    fromAmino: MsgRevokeNamespaceRoles.fromAmino
  },
  "/injective.permissions.v1beta1.MsgClaimVoucher": {
    aminoType: "permissions/MsgClaimVoucher",
    toAmino: MsgClaimVoucher.toAmino,
    fromAmino: MsgClaimVoucher.fromAmino
  }
};