import { TelescopeGeneratedType } from "../../../types";
import { MsgUpdateParams, MsgCreateNamespace, MsgDeleteNamespace, MsgUpdateNamespace, MsgUpdateNamespaceRoles, MsgRevokeNamespaceRoles, MsgClaimVoucher } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/injective.permissions.v1beta1.MsgUpdateParams", MsgUpdateParams], ["/injective.permissions.v1beta1.MsgCreateNamespace", MsgCreateNamespace], ["/injective.permissions.v1beta1.MsgDeleteNamespace", MsgDeleteNamespace], ["/injective.permissions.v1beta1.MsgUpdateNamespace", MsgUpdateNamespace], ["/injective.permissions.v1beta1.MsgUpdateNamespaceRoles", MsgUpdateNamespaceRoles], ["/injective.permissions.v1beta1.MsgRevokeNamespaceRoles", MsgRevokeNamespaceRoles], ["/injective.permissions.v1beta1.MsgClaimVoucher", MsgClaimVoucher]];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    createNamespace(value: MsgCreateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace",
        value: MsgCreateNamespace.encode(value).finish()
      };
    },
    deleteNamespace(value: MsgDeleteNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgDeleteNamespace",
        value: MsgDeleteNamespace.encode(value).finish()
      };
    },
    updateNamespace(value: MsgUpdateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace",
        value: MsgUpdateNamespace.encode(value).finish()
      };
    },
    updateNamespaceRoles(value: MsgUpdateNamespaceRoles) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceRoles",
        value: MsgUpdateNamespaceRoles.encode(value).finish()
      };
    },
    revokeNamespaceRoles(value: MsgRevokeNamespaceRoles) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgRevokeNamespaceRoles",
        value: MsgRevokeNamespaceRoles.encode(value).finish()
      };
    },
    claimVoucher(value: MsgClaimVoucher) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher",
        value: MsgClaimVoucher.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateParams",
        value
      };
    },
    createNamespace(value: MsgCreateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace",
        value
      };
    },
    deleteNamespace(value: MsgDeleteNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgDeleteNamespace",
        value
      };
    },
    updateNamespace(value: MsgUpdateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace",
        value
      };
    },
    updateNamespaceRoles(value: MsgUpdateNamespaceRoles) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceRoles",
        value
      };
    },
    revokeNamespaceRoles(value: MsgRevokeNamespaceRoles) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgRevokeNamespaceRoles",
        value
      };
    },
    claimVoucher(value: MsgClaimVoucher) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher",
        value
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    createNamespace(value: MsgCreateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgCreateNamespace",
        value: MsgCreateNamespace.fromPartial(value)
      };
    },
    deleteNamespace(value: MsgDeleteNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgDeleteNamespace",
        value: MsgDeleteNamespace.fromPartial(value)
      };
    },
    updateNamespace(value: MsgUpdateNamespace) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespace",
        value: MsgUpdateNamespace.fromPartial(value)
      };
    },
    updateNamespaceRoles(value: MsgUpdateNamespaceRoles) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgUpdateNamespaceRoles",
        value: MsgUpdateNamespaceRoles.fromPartial(value)
      };
    },
    revokeNamespaceRoles(value: MsgRevokeNamespaceRoles) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgRevokeNamespaceRoles",
        value: MsgRevokeNamespaceRoles.fromPartial(value)
      };
    },
    claimVoucher(value: MsgClaimVoucher) {
      return {
        typeUrl: "/injective.permissions.v1beta1.MsgClaimVoucher",
        value: MsgClaimVoucher.fromPartial(value)
      };
    }
  }
};